(()=>{var If=0,cu=1,Pf=2;var Rs=1,Lf=2,Lr=3,os=0,qe=1,Ye=2,Wn=0,Nr=1,hn=2,hu=3,uu=4,Nf=5;var Cs=100,Df=101,Uf=102,Of=103,Ff=104,kf=200,Hf=201,zf=202,Gf=203,du=204,fu=205,Vf=206,Bf=207,Wf=208,Xf=209,qf=210,Yf=211,$f=212,Zf=213,Kf=214,gl=0,xl=1,yl=2,ur=3,vl=4,_l=5,bl=6,Sl=7,pu=0,Jf=1,jf=2,ri=0,ia=1,sa=2,ra=3,Is=4,oa=5,aa=6,la=7;var mu=300,as=301,Ps=302,$l=303,Zl=304,ca=306,Zi=1e3,Gn=1001,dr=1002,Je=1003,Kl=1004;var Ls=1005;var Qe=1006,Dr=1007;var wn=1008;var An=1009,gu=1010,xu=1011,Ur=1012,Jl=1013,oi=1014,Xn=1015,Be=1016,jl=1017,Ql=1018,Or=1020,yu=35902,vu=35899,_u=1021,bu=1022,Rn=1023,yi=1026,ls=1027,tc=1028,ec=1029,cs=1030,nc=1031;var ic=1033,ha=33776,ua=33777,da=33778,fa=33779,sc=35840,rc=35841,oc=35842,ac=35843,lc=36196,cc=37492,hc=37496,uc=37488,dc=37489,pa=37490,fc=37491,pc=37808,mc=37809,gc=37810,xc=37811,yc=37812,vc=37813,_c=37814,bc=37815,Sc=37816,Ec=37817,Mc=37818,Tc=37819,wc=37820,Ac=37821,Rc=36492,Cc=36494,Ic=36495,Pc=36283,Lc=36284,ma=36285,Nc=36286;var Ts=2300,fr=2301,pl=2302,Jh=2303,jh=2400,Qh=2401,tu=2402;var Qf=3200;var Dc=0,tp=1,ai="",ze="srgb",_o="srgb-linear",bo="linear",_e="srgb";var ml=7680;var ep=519,np=512,ip=513,sp=514,Uc=515,rp=516,op=517,Oc=518,ap=519,Su=35044;var Eu="300 es",ei=2e3,pr=2001;function vm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function _m(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function So(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lp(){let n=So("canvas");return n.style.display="block",n}var Wd={},mr=null;function Eo(...n){let t="THREE."+n.shift();mr?mr("log",t,...n):console.log(t,...n)}function cp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function zt(...n){n=cp(n);let t="THREE."+n.shift();if(mr)mr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Yt(...n){n=cp(n);let t="THREE."+n.shift();if(mr)mr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ms(...n){let t=n.join(" ");t in Wd||(Wd[t]=!0,zt(...n))}function hp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var up={[gl]:xl,[yl]:bl,[vl]:Sl,[ur]:_l,[xl]:gl,[bl]:yl,[Sl]:vl,[_l]:ur},vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xd=1234567,cr=Math.PI/180,gr=180/Math.PI;function xi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function oe(n,t,e){return Math.max(t,Math.min(e,n))}function Mu(n,t){return(n%t+t)%t}function bm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Sm(n,t,e){return n!==t?(e-n)/(t-n):0}function xo(n,t,e){return(1-e)*n+e*t}function Em(n,t,e,i){return xo(n,t,1-Math.exp(-e*i))}function Mm(n,t=1){return t-Math.abs(Mu(n,t*2)-t)}function Tm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function wm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Am(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Rm(n,t){return n+Math.random()*(t-n)}function Cm(n){return n*(.5-Math.random())}function Im(n){n!==void 0&&(Xd=n);let t=Xd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pm(n){return n*cr}function Lm(n){return n*gr}function Nm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Dm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Um(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Om(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),p=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*h,a*c);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function we(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ns={DEG2RAD:cr,RAD2DEG:gr,generateUUID:xi,clamp:oe,euclideanModulo:Mu,mapLinear:bm,inverseLerp:Sm,lerp:xo,damp:Em,pingpong:Mm,smoothstep:Tm,smootherstep:wm,randInt:Am,randFloat:Rm,randFloatSpread:Cm,seededRandom:Im,degToRad:Pm,radToDeg:Lm,isPowerOfTwo:Nm,ceilPowerOfTwo:Dm,floorPowerOfTwo:Um,setQuaternionFromProperEuler:Om,normalize:we,denormalize:ti},Iu=class Iu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Iu.prototype.isVector2=!0;var st=Iu,je=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*x;g<0&&(f=-f,d=-d,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let y=Math.acos(g),S=Math.sin(y);m=Math.sin(m*y)/S,a=Math.sin(a*y)/S,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+x*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Pu=class Pu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Mh.copy(this).projectOnVector(t),this.sub(Mh)}reflect(t){return this.sub(Mh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pu.prototype.isVector3=!0;var C=Pu,Mh=new C,qd=new je,Lu=class Lu{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],x=s[0],g=s[3],m=s[6],y=s[1],S=s[4],v=s[7],b=s[2],M=s[5],T=s[8];return r[0]=o*x+a*y+l*b,r[3]=o*g+a*S+l*M,r[6]=o*m+a*v+l*T,r[1]=c*x+h*y+u*b,r[4]=c*g+h*S+u*M,r[7]=c*m+h*v+u*T,r[2]=f*x+d*y+p*b,r[5]=f*g+d*S+p*M,r[8]=f*m+d*v+p*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Th.makeScale(t,e)),this}rotate(t){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Th.makeRotation(-t)),this}translate(t,e){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Th.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Lu.prototype.isMatrix3=!0;var jt=Lu,Th=new jt,Yd=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$d=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fm(){let n={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?bo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_o]:{primaries:t,whitePoint:i,transfer:bo,toXYZ:Yd,fromXYZ:$d,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:i,transfer:_e,toXYZ:Yd,fromXYZ:$d,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),n}var le=Fm();function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xs,xr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Xs===void 0&&(Xs=So("canvas")),Xs.width=t.width,Xs.height=t.height;let s=Xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Xs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=So("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ni(e[i]/255)*255):e[i]=Ni(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},km=0,Di=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wh(s[o].image)):r.push(wh(s[o]))}else r=wh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function wh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Hm=0,Ah=new C,xn=class n extends vi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Gn,s=Gn,r=Qe,o=wn,a=Rn,l=An,c=n.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=xi(),this.name="",this.source=new Di(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ah).x}get height(){return this.source.getSize(Ah).y}get depth(){return this.source.getSize(Ah).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zi:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case dr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zi:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case dr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=mu;xn.DEFAULT_ANISOTROPY=1;var Nu=class Nu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,v=(d+1)/2,b=(m+1)/2,M=(h+f)/4,T=(u+x)/4,_=(p+g)/4;return S>v&&S>b?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=M/i,r=T/i):v>b?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=M/s,r=_/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=T/r,s=_/r),this.set(i,s,r,e),this}let y=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nu.prototype.isVector4=!0;var Te=Nu,El=class extends vi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new xn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Di(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fe=class extends El{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Mo=class extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ml=class extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Yl=class Yl{constructor(t,e,i,s,r,o,a,l,c,h,u,f,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,d,p,x,g)}set(t,e,i,s,r,o,a,l,c,h,u,f,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/qs.setFromMatrixColumn(t,0).length(),r=1/qs.setFromMatrixColumn(t,1).length(),o=1/qs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zm,t,Gm)}lookAt(t,e,i){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Wi.crossVectors(i,Pn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Wi.crossVectors(i,Pn)),Wi.normalize(),Oa.crossVectors(Pn,Wi),s[0]=Wi.x,s[4]=Oa.x,s[8]=Pn.x,s[1]=Wi.y,s[5]=Oa.y,s[9]=Pn.y,s[2]=Wi.z,s[6]=Oa.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],x=i[6],g=i[10],m=i[14],y=i[3],S=i[7],v=i[11],b=i[15],M=s[0],T=s[4],_=s[8],w=s[12],R=s[1],P=s[5],L=s[9],U=s[13],N=s[2],D=s[6],O=s[10],z=s[14],J=s[3],V=s[7],Q=s[11],$=s[15];return r[0]=o*M+a*R+l*N+c*J,r[4]=o*T+a*P+l*D+c*V,r[8]=o*_+a*L+l*O+c*Q,r[12]=o*w+a*U+l*z+c*$,r[1]=h*M+u*R+f*N+d*J,r[5]=h*T+u*P+f*D+d*V,r[9]=h*_+u*L+f*O+d*Q,r[13]=h*w+u*U+f*z+d*$,r[2]=p*M+x*R+g*N+m*J,r[6]=p*T+x*P+g*D+m*V,r[10]=p*_+x*L+g*O+m*Q,r[14]=p*w+x*U+g*z+m*$,r[3]=y*M+S*R+v*N+b*J,r[7]=y*T+S*P+v*D+b*V,r[11]=y*_+S*L+v*O+b*Q,r[15]=y*w+S*U+v*z+b*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15],y=l*d-c*f,S=a*d-c*u,v=a*f-l*u,b=o*d-c*h,M=o*f-l*h,T=o*u-a*h;return e*(x*y-g*S+m*v)-i*(p*y-g*b+m*M)+s*(p*S-x*b+m*T)-r*(p*v-x*M+g*T)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],y=e*a-i*o,S=e*l-s*o,v=e*c-r*o,b=i*l-s*a,M=i*c-r*a,T=s*c-r*l,_=h*x-u*p,w=h*g-f*p,R=h*m-d*p,P=u*g-f*x,L=u*m-d*x,U=f*m-d*g,N=y*U-S*L+v*P+b*R-M*w+T*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/N;return t[0]=(a*U-l*L+c*P)*D,t[1]=(s*L-i*U-r*P)*D,t[2]=(x*T-g*M+m*b)*D,t[3]=(f*M-u*T-d*b)*D,t[4]=(l*R-o*U-c*w)*D,t[5]=(e*U-s*R+r*w)*D,t[6]=(g*v-p*T-m*S)*D,t[7]=(h*T-f*v+d*S)*D,t[8]=(o*L-a*R+c*_)*D,t[9]=(i*R-e*L-r*_)*D,t[10]=(p*M-x*v+m*y)*D,t[11]=(u*v-h*M-d*y)*D,t[12]=(a*w-o*P-l*_)*D,t[13]=(e*P-i*w+s*_)*D,t[14]=(x*S-p*b-g*y)*D,t[15]=(h*b-u*S+f*y)*D,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,y=l*c,S=l*h,v=l*u,b=i.x,M=i.y,T=i.z;return s[0]=(1-(x+m))*b,s[1]=(d+v)*b,s[2]=(p-S)*b,s[3]=0,s[4]=(d-v)*M,s[5]=(1-(f+m))*M,s[6]=(g+y)*M,s[7]=0,s[8]=(p+S)*T,s[9]=(g-y)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=qs.set(s[0],s[1],s[2]).length(),a=qs.set(s[4],s[5],s[6]).length(),l=qs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Jn.copy(this);let c=1/o,h=1/a,u=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,e.setFromRotationMatrix(Jn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=ei,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ei)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===pr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ei,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ei)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===pr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Yl.prototype.isMatrix4=!0;var $t=Yl,qs=new C,Jn=new $t,zm=new C(0,0,0),Gm=new C(1,1,1),Wi=new C,Oa=new C,Pn=new C,Zd=new $t,Kd=new je,Vn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Zd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kd.setFromEuler(this),this.setFromQuaternion(Kd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var To=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vm=0,Jd=new C,Ys=new je,Ri=new $t,Fa=new C,ro=new C,Bm=new C,Wm=new je,jd=new C(1,0,0),Qd=new C(0,1,0),tf=new C(0,0,1),ef={type:"added"},Xm={type:"removed"},$s={type:"childadded",child:null},Rh={type:"childremoved",child:null},Xe=class n extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new C,e=new Vn,i=new je,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new jt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(jd,t)}rotateY(t){return this.rotateOnAxis(Qd,t)}rotateZ(t){return this.rotateOnAxis(tf,t)}translateOnAxis(t,e){return Jd.copy(t).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jd,t)}translateY(t){return this.translateOnAxis(Qd,t)}translateZ(t){return this.translateOnAxis(tf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fa.copy(t):Fa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(ro,Fa,this.up):Ri.lookAt(Fa,ro,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Ri),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ef),$s.child=t,this.dispatchEvent($s),$s.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xm),Rh.child=t,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ef),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,t,Bm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,Wm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xe.DEFAULT_UP=new C(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var te=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},qm={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new te;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ka={h:0,s:0,l:0};function Ch(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ft=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=Mu(t,1),e=oe(e,0,1),i=oe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ch(o,r,t+1/3),this.g=Ch(o,r,t),this.b=Ch(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function i(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let i=dp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return le.workingToColorSpace(gn.copy(this),t),Math.round(oe(gn.r*255,0,255))*65536+Math.round(oe(gn.g*255,0,255))*256+Math.round(oe(gn.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(gn.copy(this),e);let i=gn.r,s=gn.g,r=gn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=ze){le.workingToColorSpace(gn.copy(this),t);let e=gn.r,i=gn.g,s=gn.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(ka);let i=xo(Xi.h,ka.h,e),s=xo(Xi.s,ka.s,e),r=xo(Xi.l,ka.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new ft;ft.NAMES=dp;var wo=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Bn=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},jn=new C,Ci=new C,Ih=new C,Ii=new C,Zs=new C,Ks=new C,nf=new C,Ph=new C,Lh=new C,Nh=new C,Dh=new Te,Uh=new Te,Oh=new Te,mi=class n{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),jn.subVectors(t,e),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){jn.subVectors(s,e),Ci.subVectors(i,e),Ih.subVectors(t,e);let o=jn.dot(jn),a=jn.dot(Ci),l=jn.dot(Ih),c=Ci.dot(Ci),h=Ci.dot(Ih),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Dh.setScalar(0),Uh.setScalar(0),Oh.setScalar(0),Dh.fromBufferAttribute(t,e),Uh.fromBufferAttribute(t,i),Oh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Dh,r.x),o.addScaledVector(Uh,r.y),o.addScaledVector(Oh,r.z),o}static isFrontFacing(t,e,i,s){return jn.subVectors(i,e),Ci.subVectors(t,e),jn.cross(Ci).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),jn.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Zs.subVectors(s,i),Ks.subVectors(r,i),Ph.subVectors(t,i);let l=Zs.dot(Ph),c=Ks.dot(Ph);if(l<=0&&c<=0)return e.copy(i);Lh.subVectors(t,s);let h=Zs.dot(Lh),u=Ks.dot(Lh);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Zs,o);Nh.subVectors(t,r);let d=Zs.dot(Nh),p=Ks.dot(Nh);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Ks,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return nf.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(nf,a);let m=1/(g+x+f);return o=x*m,a=f*m,e.copy(i).addScaledVector(Zs,o).addScaledVector(Ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_i=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ha.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(t.matrixWorld),this.union(Ha)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oo),za.subVectors(this.max,oo),Js.subVectors(t.a,oo),js.subVectors(t.b,oo),Qs.subVectors(t.c,oo),qi.subVectors(js,Js),Yi.subVectors(Qs,js),_s.subVectors(Js,Qs);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-_s.z,_s.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,_s.z,0,-_s.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-_s.y,_s.x,0];return!Fh(e,Js,js,Qs,za)||(e=[1,0,0,0,1,0,0,0,1],!Fh(e,Js,js,Qs,za))?!1:(Ga.crossVectors(qi,Yi),e=[Ga.x,Ga.y,Ga.z],Fh(e,Js,js,Qs,za))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pi=[new C,new C,new C,new C,new C,new C,new C,new C],Qn=new C,Ha=new _i,Js=new C,js=new C,Qs=new C,qi=new C,Yi=new C,_s=new C,oo=new C,za=new C,Ga=new C,bs=new C;function Fh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){bs.fromArray(n,r);let a=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),l=t.dot(bs),c=e.dot(bs),h=i.dot(bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ke=new C,Va=new st,Ym=0,ge=class extends vi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ym++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Su,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Va.fromBufferAttribute(this,e),Va.applyMatrix3(t),this.setXY(e,Va.x,Va.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ao=class extends ge{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ro=class extends ge{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Vt=class extends ge{constructor(t,e,i){super(new Float32Array(t),e,i)}},$m=new _i,ao=new C,kh=new C,bi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):$m.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ao.subVectors(t,this.center);let e=ao.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ao,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ao.copy(t.center).add(kh)),this.expandByPoint(ao.copy(t.center).sub(kh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zm=0,zn=new $t,Hh=new Xe,tr=new C,Ln=new _i,lo=new _i,sn=new C,de=class n extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vm(t)?Ro:Ao)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,i){return zn.makeTranslation(t,e,i),this.applyMatrix4(zn),this}scale(t,e,i){return zn.makeScale(t,e,i),this.applyMatrix4(zn),this}lookAt(t){return Hh.lookAt(t),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Ln.min,lo.min),Ln.expandByPoint(sn),sn.addVectors(Ln.max,lo.max),Ln.expandByPoint(sn)):(Ln.expandByPoint(lo.min),Ln.expandByPoint(lo.max))}Ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)sn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(sn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)sn.fromBufferAttribute(a,c),l&&(tr.fromBufferAttribute(t,c),sn.add(tr)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ge(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new C,l[_]=new C;let c=new C,h=new C,u=new C,f=new st,d=new st,p=new st,x=new C,g=new C;function m(_,w,R){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,R),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),a[_].add(x),a[w].add(x),a[R].add(x),l[_].add(g),l[w].add(g),l[R].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,w=y.length;_<w;++_){let R=y[_],P=R.start,L=R.count;for(let U=P,N=P+L;U<N;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let S=new C,v=new C,b=new C,M=new C;function T(_){b.fromBufferAttribute(s,_),M.copy(b);let w=a[_];S.copy(w),S.sub(b.multiplyScalar(b.dot(w))).normalize(),v.crossVectors(M,w);let P=v.dot(l[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,P)}for(let _=0,w=y.length;_<w;++_){let R=y[_],P=R.start,L=R.count;for(let U=P,N=P+L;U<N;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new ge(f,h,u)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Co=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Su,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},En=new C,vr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ti(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array),r=we(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zh=new C,Km=new C,Jm=new jt,Nn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=zh.subVectors(i,e).cross(Km.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(zh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Jm.getNormalMatrix(t),s=this.coplanarPoint(zh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},jm=0,ni=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Nr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=du,this.blendDst=fu,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ml,this.stencilZFail=ml,this.stencilZPass=ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Nn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new st().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ii=class extends ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},er,co=new C,nr=new C,ir=new C,sr=new st,ho=new st,fp=new $t,Ba=new C,uo=new C,Wa=new C,sf=new st,Gh=new st,rf=new st,Si=class extends Xe{constructor(t=new ii){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new de;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Co(e,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new vr(i,3,0,!1)),er.setAttribute("uv",new vr(i,2,3,!1))}this.geometry=er,this.material=t,this.center=new st(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),fp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Xa(Ba.set(-.5,-.5,0),ir,o,nr,s,r),Xa(uo.set(.5,-.5,0),ir,o,nr,s,r),Xa(Wa.set(.5,.5,0),ir,o,nr,s,r),sf.set(0,0),Gh.set(1,0),rf.set(1,1);let a=t.ray.intersectTriangle(Ba,uo,Wa,!1,co);if(a===null&&(Xa(uo.set(-.5,.5,0),ir,o,nr,s,r),Gh.set(0,1),a=t.ray.intersectTriangle(Ba,Wa,uo,!1,co),a===null))return;let l=t.ray.origin.distanceTo(co);l<t.near||l>t.far||e.push({distance:l,point:co.clone(),uv:mi.getInterpolation(co,Ba,uo,Wa,sf,Gh,rf,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Xa(n,t,e,i,s,r){sr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ho.x=r*sr.x-s*sr.y,ho.y=s*sr.x+r*sr.y):ho.copy(sr),n.copy(t),n.x+=ho.x,n.y+=ho.y,n.applyMatrix4(fp)}var Li=new C,Vh=new C,qa=new C,Ya=new C,_r=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Vh.copy(t).add(e).multiplyScalar(.5),qa.copy(e).sub(t).normalize(),Ya.copy(this.origin).sub(Vh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(qa),a=Ya.dot(this.direction),l=-Ya.dot(qa),c=Ya.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vh).addScaledVector(qa,f),d}intersectSphere(t,e){if(t.radius<0)return null;Li.subVectors(t.center,this.origin);let i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=i.x-o.x,y=i.y-o.y,S=i.z-o.z,v=Math.abs(l),b=Math.abs(c),M=Math.abs(h),T,_,w,R,P,L,U,N,D,O,z,J;if(v>=b&&v>=M?(w=l,L=u,D=p,J=m,l>=0?(T=c,_=h,R=f,P=d,U=x,N=g,O=y,z=S):(T=h,_=c,R=d,P=f,U=g,N=x,O=S,z=y)):b>=M?(w=c,L=f,D=x,J=y,c>=0?(T=h,_=l,R=d,P=u,U=g,N=p,O=S,z=m):(T=l,_=h,R=u,P=d,U=p,N=g,O=m,z=S)):(w=h,L=d,D=g,J=S,h>=0?(T=l,_=c,R=u,P=f,U=p,N=x,O=m,z=y):(T=c,_=l,R=f,P=u,U=x,N=p,O=y,z=m)),w===0)return null;let V=T/w,Q=_/w,$=1/w,At=R-V*L,St=P-Q*L,me=U-V*D,se=N-Q*D,ce=O-V*J,K=z-Q*J,tt=ce*se-K*me,pt=At*K-St*ce,Bt=me*St-se*At;if(s){if(tt<0||pt<0||Bt<0)return null}else if((tt<0||pt<0||Bt<0)&&(tt>0||pt>0||Bt>0))return null;let wt=tt+pt+Bt;if(wt===0)return null;let qt=$*(tt*L+pt*D+Bt*J);return(wt>0?qt<0:qt>0)?null:this.at(qt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},of=new $t,Ss=new _r,$a=new bi,af=new C,Za=new C,Ka=new C,Ja=new C,Bh=new C,ja=new C,lf=new C,Qa=new C,Y=class extends Xe{constructor(t=new de,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Bh.fromBufferAttribute(u,t),o?ja.addScaledVector(Bh,h):ja.addScaledVector(Bh.sub(e),h))}e.add(ja)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(r),Ss.copy(t.ray).recast(t.near),!($a.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere($a,af)===null||Ss.origin.distanceToSquared(af)>(t.far-t.near)**2))&&(of.copy(r).invert(),Ss.copy(t.ray).applyMatrix4(of),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ss)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),S=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,b=S;v<b;v+=3){let M=a.getX(v),T=a.getX(v+1),_=a.getX(v+2);s=tl(this,m,t,i,c,h,u,M,T,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let y=a.getX(g),S=a.getX(g+1),v=a.getX(g+2);s=tl(this,o,t,i,c,h,u,y,S,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,b=S;v<b;v+=3){let M=v,T=v+1,_=v+2;s=tl(this,m,t,i,c,h,u,M,T,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let y=g,S=g+1,v=g+2;s=tl(this,o,t,i,c,h,u,y,S,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Qm(n,t,e,i,s,r,o,a){let l;if(t.side===qe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===os,a),l===null)return null;Qa.copy(a),Qa.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Qa);return c<e.near||c>e.far?null:{distance:c,point:Qa.clone(),object:n}}function tl(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Za),n.getVertexPosition(l,Ka),n.getVertexPosition(c,Ja);let h=Qm(n,t,e,i,Za,Ka,Ja,lf);if(h){let u=new C;mi.getBarycoord(lf,Za,Ka,Ja,u),s&&(h.uv=mi.getInterpolatedAttribute(s,a,l,c,u,new st)),r&&(h.uv1=mi.getInterpolatedAttribute(r,a,l,c,u,new st)),o&&(h.normal=mi.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new C,materialIndex:0};mi.getNormal(Za,Ka,Ja,f.normal),h.face=f,h.barycoord=u}return h}var Io=class extends xn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Je,h=Je,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var br=class extends ge{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},rr=new $t,cf=new $t,el=[],hf=new _i,tg=new $t,fo=new Y,po=new bi,Po=class extends Y{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new br(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,tg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rr),hf.copy(t.boundingBox).applyMatrix4(rr),this.boundingBox.union(hf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rr),po.copy(t.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(po)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(i),t.ray.intersectsSphere(po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),cf.multiplyMatrices(i,rr),fo.matrixWorld=cf,fo.raycast(t,el);for(let o=0,a=el.length;o<a;o++){let l=el[o];l.instanceId=r,l.object=this,e.push(l)}el.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new br(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Io(new Float32Array(s*this.count),s,this.count,tc,Xn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Es=new bi,eg=new st(.5,.5),nl=new C,Sr=class{constructor(t=new Nn,e=new Nn,i=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ei,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],y=r[12],S=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-o,d-h,m-p,b-y).normalize(),s[1].setComponents(c+o,d+h,m+p,b+y).normalize(),s[2].setComponents(c+a,d+u,m+x,b+S).normalize(),s[3].setComponents(c-a,d-u,m-x,b-S).normalize(),i)s[4].setComponents(l,f,g,v).normalize(),s[5].setComponents(c-l,d-f,m-g,b-v).normalize();else if(s[4].setComponents(c-l,d-f,m-g,b-v).normalize(),e===ei)s[5].setComponents(c+l,d+f,m+g,b+v).normalize();else if(e===pr)s[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){Es.center.set(0,0,0);let e=eg.distanceTo(t.center);return Es.radius=.7071067811865476+e,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(nl.x=s.normal.x>0?t.max.x:t.min.x,nl.y=s.normal.y>0?t.max.y:t.min.y,nl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Er=class extends ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Tl=new C,wl=new C,uf=new $t,mo=new _r,il=new bi,Wh=new C,df=new C,Al=class extends Xe{constructor(t=new de,e=new Er){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Tl.fromBufferAttribute(e,s-1),wl.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Tl.distanceTo(wl);t.setAttribute("lineDistance",new Vt(i,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(s),il.radius+=r,t.ray.intersectsSphere(il)===!1)return;uf.copy(s).invert(),mo.copy(t.ray).applyMatrix4(uf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=h.getX(x),y=h.getX(x+1),S=sl(this,t,mo,l,m,y,x);S&&e.push(S)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(d),m=sl(this,t,mo,l,x,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=sl(this,t,mo,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=sl(this,t,mo,l,p-1,d,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sl(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Tl.fromBufferAttribute(a,s),wl.fromBufferAttribute(a,r),e.distanceSqToSegment(Tl,wl,Wh,df)>i)return;Wh.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Wh);if(!(c<t.near||c>t.far))return{distance:c,point:df.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var ff=new C,pf=new C,Lo=class extends Al{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)ff.fromBufferAttribute(e,s),pf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ff.distanceTo(pf);t.setAttribute("lineDistance",new Vt(i,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Mr=class extends ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mf=new $t,eu=new _r,rl=new bi,ol=new C,No=class extends Xe{constructor(t=new de,e=new Mr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(s),rl.radius+=r,t.ray.intersectsSphere(rl)===!1)return;mf.copy(s).invert(),eu.copy(t.ray).applyMatrix4(mf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=c.getX(p);ol.fromBufferAttribute(u,g),gf(ol,g,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)ol.fromBufferAttribute(u,p),gf(ol,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function gf(n,t,e,i,s,r,o){let a=eu.distanceSqToPoint(n);if(a<e){let l=new C;eu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ki=class extends xn{constructor(t,e,i,s,r,o,a,l,c,h,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isCompressedTexture=!0,this.image={width:e,height:i},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}};var Do=class extends xn{constructor(t=[],e=as,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ui=class extends xn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ji=class extends xn{constructor(t,e,i=oi,s,r,o,a=Je,l=Je,c,h=yi,u=1){if(h!==yi&&h!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Di(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Rl=class extends Ji{constructor(t,e=oi,i=as,s,r,o=Je,a=Je,l,c=yi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Uo=class extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Gt=class n extends de{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function p(x,g,m,y,S,v,b,M,T,_,w){let R=v/T,P=b/_,L=v/2,U=b/2,N=M/2,D=T+1,O=_+1,z=0,J=0,V=new C;for(let Q=0;Q<O;Q++){let $=Q*P-U;for(let At=0;At<D;At++){let St=At*R-L;V[x]=St*y,V[g]=$*S,V[m]=N,c.push(V.x,V.y,V.z),V[x]=0,V[g]=0,V[m]=M>0?1:-1,h.push(V.x,V.y,V.z),u.push(At/T),u.push(1-Q/_),z+=1}}for(let Q=0;Q<_;Q++)for(let $=0;$<T;$++){let At=f+$+D*Q,St=f+$+D*(Q+1),me=f+($+1)+D*(Q+1),se=f+($+1)+D*Q;l.push(At,St,se),l.push(St,me,se),J+=6}a.addGroup(d,J,w),d+=J,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ji=class n extends de{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,p=i*2+r,x=s+1,g=new C,m=new C;for(let y=0;y<=p;y++){let S=0,v=0,b=0,M=0;if(y<=i){let w=y/i,R=w*Math.PI/2;v=-h-t*Math.cos(R),b=t*Math.sin(R),M=-t*Math.cos(R),S=w*u}else if(y<=i+r){let w=(y-i)/r;v=-h+w*e,b=t,M=0,S=u+w*f}else{let w=(y-i-r)/i,R=w*Math.PI/2;v=h+t*Math.sin(R),b=t*Math.cos(R),M=t*Math.sin(R),S=u+f+w*u}let T=Math.max(0,Math.min(1,S/d)),_=0;y===0?_=.5/s:y===p&&(_=-.5/s);for(let w=0;w<=s;w++){let R=w/s,P=R*Math.PI*2,L=Math.sin(P),U=Math.cos(P);m.x=-b*U,m.y=v,m.z=b*L,a.push(m.x,m.y,m.z),g.set(-b*U,M,b*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+_,T)}if(y>0){let w=(y-1)*x;for(let R=0;R<s;R++){let P=w+R,L=w+R+1,U=y*x+R,N=y*x+R+1;o.push(P,L,U),o.push(L,N,U)}}}this.setIndex(o),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Tr=class n extends de{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ie=class n extends de{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=i/2,m=0;y(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function y(){let v=new C,b=new C,M=0,T=(e-t)/i;for(let _=0;_<=r;_++){let w=[],R=_/r,P=R*(e-t)+t;for(let L=0;L<=s;L++){let U=L/s,N=U*l+a,D=Math.sin(N),O=Math.cos(N);b.x=P*D,b.y=-R*i+g,b.z=P*O,u.push(b.x,b.y,b.z),v.set(D,T,O).normalize(),f.push(v.x,v.y,v.z),d.push(U,1-R),w.push(p++)}x.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){let R=x[w][_],P=x[w+1][_],L=x[w+1][_+1],U=x[w][_+1];(t>0||w!==0)&&(h.push(R,P,U),M+=3),(e>0||w!==r-1)&&(h.push(P,L,U),M+=3)}c.addGroup(m,M,0),m+=M}function S(v){let b=p,M=new st,T=new C,_=0,w=v===!0?t:e,R=v===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,g*R,0),f.push(0,R,0),d.push(.5,.5),p++;let P=p;for(let L=0;L<=s;L++){let N=L/s*l+a,D=Math.cos(N),O=Math.sin(N);T.x=w*O,T.y=g*R,T.z=w*D,u.push(T.x,T.y,T.z),f.push(0,R,0),M.x=D*.5+.5,M.y=O*.5*R+.5,d.push(M.x,M.y),p++}for(let L=0;L<s;L++){let U=b+L,N=P+L;v===!0?h.push(N,N+1,U):h.push(N+1,N,U),_+=3}c.addGroup(m,_,v===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oo=class n extends ie{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var al=new C,ll=new C,Xh=new C,cl=new mi,Fo=class extends de{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(cr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:g,c:m}=cl;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),cl.getNormal(Xh),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let S=(y+1)%3,v=u[y],b=u[S],M=cl[h[y]],T=cl[h[S]],_=`${v}_${b}`,w=`${b}_${v}`;w in f&&f[w]?(Xh.dot(f[w].normal)<=r&&(d.push(M.x,M.y,M.z),d.push(T.x,T.y,T.z)),f[w]=null):_ in f||(f[_]={index0:c[y],index1:c[S],normal:Xh.clone()})}}for(let p in f)if(f[p]){let{index0:x,index1:g}=f[p];al.fromBufferAttribute(a,x),ll.fromBufferAttribute(a,g),d.push(al.x,al.y,al.z),d.push(ll.x,ll.y,ll.z)}this.setAttribute("position",new Vt(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new st:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new C,s=[],r=[],o=[],a=new C,l=new $t;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(oe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(oe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},wr=class extends Dn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Cl=class extends wr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Tu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var xf=new C,yf=new C,qh=new Tu,Yh=new Tu,$h=new Tu,Qi=class extends Dn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(yf.subVectors(s[0],s[1]).add(s[0]),c=yf);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(xf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),qh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,g),Yh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,g),$h.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(qh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Yh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),$h.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(qh.calc(l),Yh.calc(l),$h.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function ng(n,t){let e=1-n;return e*e*t}function ig(n,t){return 2*(1-n)*n*t}function sg(n,t){return n*n*t}function yo(n,t,e,i){return ng(n,t)+ig(n,e)+sg(n,i)}function rg(n,t){let e=1-n;return e*e*e*t}function og(n,t){let e=1-n;return 3*e*e*n*t}function ag(n,t){return 3*(1-n)*n*n*t}function lg(n,t){return n*n*n*t}function vo(n,t,e,i,s){return rg(n,t)+og(n,e)+ag(n,i)+lg(n,s)}var ko=class extends Dn{constructor(t=new st,e=new st,i=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new st){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(vo(t,s.x,r.x,o.x,a.x),vo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Il=class extends Dn{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(vo(t,s.x,r.x,o.x,a.x),vo(t,s.y,r.y,o.y,a.y),vo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ho=class extends Dn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pl=class extends Dn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends Dn{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(yo(t,s.x,r.x,o.x),yo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends Dn{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(yo(t,s.x,r.x,o.x),yo(t,s.y,r.y,o.y),yo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(vf(a,l.x,c.x,h.x,u.x),vf(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},Ll=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Qi,CubicBezierCurve:ko,CubicBezierCurve3:Il,EllipseCurve:wr,LineCurve:Ho,LineCurve3:Pl,QuadraticBezierCurve:zo,QuadraticBezierCurve3:Go,SplineCurve:Vo}),Nl=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ll[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Ll[s.type]().fromJSON(s))}return this}},ws=class extends Nl{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ho(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new zo(this.currentPoint.clone(),new st(t,e),new st(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new ko(this.currentPoint.clone(),new st(t,e),new st(i,s),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Vo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new wr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},si=class extends ws{constructor(t){super(t),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ws().fromJSON(s))}return this}};function cg(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=pp(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=pg(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=n[f],p=n[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Bo(r,o,e,a,l,c,0),o}function pp(n,t,e,i,s){let r;if(s===Tg(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=_f(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=_f(o/i|0,n[o],n[o+1],r);return r&&Ar(r,r.next)&&(Xo(r),r=r.next),r}function As(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ar(e,e.next)||Ge(e.prev,e,e.next)===0)){if(Xo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Bo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&vg(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?ug(n,i,s,r):hg(n)){t.push(l.i,n.i,c.i),Xo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=dg(As(n),t),Bo(n,t,e,i,s,r,2)):o===2&&fg(n,t,e,i,s,r):Bo(As(n),t,e,i,s,r,1);break}}}function hg(n){let t=n.prev,e=n,i=n.next;if(Ge(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&go(s,a,r,l,o,c,p.x,p.y)&&Ge(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ug(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ge(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),g=Math.max(h,u,f),m=nu(d,p,t,e,i),y=nu(x,g,t,e,i),S=n.prevZ,v=n.nextZ;for(;S&&S.z>=m&&v&&v.z<=y;){if(S.x>=d&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&go(a,h,l,u,c,f,S.x,S.y)&&Ge(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&go(a,h,l,u,c,f,v.x,v.y)&&Ge(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&go(a,h,l,u,c,f,S.x,S.y)&&Ge(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&go(a,h,l,u,c,f,v.x,v.y)&&Ge(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function dg(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Ar(i,s)&&gp(i,e,e.next,s)&&Wo(i,s)&&Wo(s,i)&&(t.push(i.i,e.i,s.i),Xo(e),Xo(e.next),e=n=s),e=e.next}while(e!==n);return As(e)}function fg(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sg(o,a)){let l=xp(o,a);o=As(o,o.next),l=As(l,l.next),Bo(o,t,e,i,s,r,0),Bo(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function pg(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=pp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(bg(c))}s.sort(mg);for(let r=0;r<s.length;r++)e=gg(s[r],e);return e}function mg(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function gg(n,t){let e=xg(n,t);if(!e)return t;let i=xp(e,n);return As(i,i.next),As(e,e.next)}function xg(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Ar(n,e))return e;do{if(Ar(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&mp(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);Wo(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&yg(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function yg(n,t){return Ge(n.prev,n,t.prev)<0&&Ge(t.next,n,n.next)<0}function vg(n,t,e,i){let s=n;do s.z===0&&(s.z=nu(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,_g(s)}function _g(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function nu(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function bg(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function mp(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function go(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&mp(n,t,e,i,s,r,o,a)}function Sg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Eg(n,t)&&(Wo(n,t)&&Wo(t,n)&&Mg(n,t)&&(Ge(n.prev,n,t.prev)||Ge(n,t.prev,t))||Ar(n,t)&&Ge(n.prev,n,n.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ar(n,t){return n.x===t.x&&n.y===t.y}function gp(n,t,e,i){let s=ul(Ge(n,t,e)),r=ul(Ge(n,t,i)),o=ul(Ge(e,i,n)),a=ul(Ge(e,i,t));return!!(s!==r&&o!==a||s===0&&hl(n,e,t)||r===0&&hl(n,i,t)||o===0&&hl(e,n,i)||a===0&&hl(e,t,i))}function hl(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ul(n){return n>0?1:n<0?-1:0}function Eg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&gp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Wo(n,t){return Ge(n.prev,n,n.next)<0?Ge(n,t,n.next)>=0&&Ge(n,n.prev,t)>=0:Ge(n,t,n.prev)<0||Ge(n,n.next,t)<0}function Mg(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function xp(n,t){let e=iu(n.i,n.x,n.y),i=iu(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function _f(n,t,e,i){let s=iu(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Xo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function iu(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Tg(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var su=class{static triangulate(t,e,i=2){return cg(t,e,i)}},gi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];bf(t),Sf(i,t);let o=t.length;e.forEach(bf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Sf(i,e[l]);let a=su.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function bf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Sf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Ei=class n extends de{constructor(t=new si([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Vt(s,3)),this.setAttribute("uv",new Vt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:wg,S,v=!1,b,M,T,_;if(m){S=m.getSpacedPoints(h),v=!0,f=!1;let rt=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,rt),M=new C,T=new C,_=new C}f||(g=0,d=0,p=0,x=0);let w=a.extractPoints(c),R=w.shape,P=w.holes;if(!gi.isClockWise(R)){R=R.reverse();for(let rt=0,at=P.length;rt<at;rt++){let lt=P[rt];gi.isClockWise(lt)&&(P[rt]=lt.reverse())}}function U(rt){let lt=10000000000000001e-36,ct=rt[0];for(let dt=1;dt<=rt.length;dt++){let Wt=dt%rt.length,Ht=rt[Wt],Kt=Ht.x-ct.x,Qt=Ht.y-ct.y,F=Kt*Kt+Qt*Qt,be=Math.max(Math.abs(Ht.x),Math.abs(Ht.y),Math.abs(ct.x),Math.abs(ct.y)),he=lt*be*be;if(F<=he){rt.splice(Wt,1),dt--;continue}ct=Ht}}U(R),P.forEach(U);let N=P.length,D=R;for(let rt=0;rt<N;rt++){let at=P[rt];R=R.concat(at)}function O(rt,at,lt){return at||Yt("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(at,lt)}let z=R.length;function J(rt,at,lt){let ct,dt,Wt,Ht=rt.x-at.x,Kt=rt.y-at.y,Qt=lt.x-rt.x,F=lt.y-rt.y,be=Ht*Ht+Kt*Kt,he=Ht*F-Kt*Qt;if(Math.abs(he)>Number.EPSILON){let I=Math.sqrt(be),E=Math.sqrt(Qt*Qt+F*F),G=at.x-Kt/I,X=at.y+Ht/I,Z=lt.x-F/E,ht=lt.y+Qt/E,ut=((Z-G)*F-(ht-X)*Qt)/(Ht*F-Kt*Qt);ct=G+Ht*ut-rt.x,dt=X+Kt*ut-rt.y;let j=ct*ct+dt*dt;if(j<=2)return new st(ct,dt);Wt=Math.sqrt(j/2)}else{let I=!1;Ht>Number.EPSILON?Qt>Number.EPSILON&&(I=!0):Ht<-Number.EPSILON?Qt<-Number.EPSILON&&(I=!0):Math.sign(Kt)===Math.sign(F)&&(I=!0),I?(ct=-Kt,dt=Ht,Wt=Math.sqrt(be)):(ct=Ht,dt=Kt,Wt=Math.sqrt(be/2))}return new st(ct/Wt,dt/Wt)}let V=[];for(let rt=0,at=D.length,lt=at-1,ct=rt+1;rt<at;rt++,lt++,ct++)lt===at&&(lt=0),ct===at&&(ct=0),V[rt]=J(D[rt],D[lt],D[ct]);let Q=[],$,At=V.concat();for(let rt=0,at=N;rt<at;rt++){let lt=P[rt];$=[];for(let ct=0,dt=lt.length,Wt=dt-1,Ht=ct+1;ct<dt;ct++,Wt++,Ht++)Wt===dt&&(Wt=0),Ht===dt&&(Ht=0),$[ct]=J(lt[ct],lt[Wt],lt[Ht]);Q.push($),At=At.concat($)}let St;if(g===0)St=gi.triangulateShape(D,P);else{let rt=[],at=[];for(let lt=0;lt<g;lt++){let ct=lt/g,dt=d*Math.cos(ct*Math.PI/2),Wt=p*Math.sin(ct*Math.PI/2)+x;for(let Ht=0,Kt=D.length;Ht<Kt;Ht++){let Qt=O(D[Ht],V[Ht],Wt);pt(Qt.x,Qt.y,-dt),ct===0&&rt.push(Qt)}for(let Ht=0,Kt=N;Ht<Kt;Ht++){let Qt=P[Ht];$=Q[Ht];let F=[];for(let be=0,he=Qt.length;be<he;be++){let I=O(Qt[be],$[be],Wt);pt(I.x,I.y,-dt),ct===0&&F.push(I)}ct===0&&at.push(F)}}St=gi.triangulateShape(rt,at)}let me=St.length,se=p+x;for(let rt=0;rt<z;rt++){let at=f?O(R[rt],At[rt],se):R[rt];v?(T.copy(b.normals[0]).multiplyScalar(at.x),M.copy(b.binormals[0]).multiplyScalar(at.y),_.copy(S[0]).add(T).add(M),pt(_.x,_.y,_.z)):pt(at.x,at.y,0)}for(let rt=1;rt<=h;rt++)for(let at=0;at<z;at++){let lt=f?O(R[at],At[at],se):R[at];v?(T.copy(b.normals[rt]).multiplyScalar(lt.x),M.copy(b.binormals[rt]).multiplyScalar(lt.y),_.copy(S[rt]).add(T).add(M),pt(_.x,_.y,_.z)):pt(lt.x,lt.y,u/h*rt)}for(let rt=g-1;rt>=0;rt--){let at=rt/g,lt=d*Math.cos(at*Math.PI/2),ct=p*Math.sin(at*Math.PI/2)+x;for(let dt=0,Wt=D.length;dt<Wt;dt++){let Ht=O(D[dt],V[dt],ct);pt(Ht.x,Ht.y,u+lt)}for(let dt=0,Wt=P.length;dt<Wt;dt++){let Ht=P[dt];$=Q[dt];for(let Kt=0,Qt=Ht.length;Kt<Qt;Kt++){let F=O(Ht[Kt],$[Kt],ct);v?pt(F.x,F.y+S[h-1].y,S[h-1].x+lt):pt(F.x,F.y,u+lt)}}}ce(),K();function ce(){let rt=s.length/3;if(f){let at=0,lt=z*at;for(let ct=0;ct<me;ct++){let dt=St[ct];Bt(dt[2]+lt,dt[1]+lt,dt[0]+lt)}at=h+g*2,lt=z*at;for(let ct=0;ct<me;ct++){let dt=St[ct];Bt(dt[0]+lt,dt[1]+lt,dt[2]+lt)}}else{for(let at=0;at<me;at++){let lt=St[at];Bt(lt[2],lt[1],lt[0])}for(let at=0;at<me;at++){let lt=St[at];Bt(lt[0]+z*h,lt[1]+z*h,lt[2]+z*h)}}i.addGroup(rt,s.length/3-rt,0)}function K(){let rt=s.length/3,at=0;tt(D,at),at+=D.length;for(let lt=0,ct=P.length;lt<ct;lt++){let dt=P[lt];tt(dt,at),at+=dt.length}i.addGroup(rt,s.length/3-rt,1)}function tt(rt,at){let lt=rt.length;for(;--lt>=0;){let ct=lt,dt=lt-1;dt<0&&(dt=rt.length-1);for(let Wt=0,Ht=h+g*2;Wt<Ht;Wt++){let Kt=z*Wt,Qt=z*(Wt+1),F=at+ct+Kt,be=at+dt+Kt,he=at+dt+Qt,I=at+ct+Qt;wt(F,be,he,I)}}}function pt(rt,at,lt){l.push(rt),l.push(at),l.push(lt)}function Bt(rt,at,lt){qt(rt),qt(at),qt(lt);let ct=s.length/3,dt=y.generateTopUV(i,s,ct-3,ct-2,ct-1);pe(dt[0]),pe(dt[1]),pe(dt[2])}function wt(rt,at,lt,ct){qt(rt),qt(at),qt(ct),qt(at),qt(lt),qt(ct);let dt=s.length/3,Wt=y.generateSideWallUV(i,s,dt-6,dt-3,dt-2,dt-1);pe(Wt[0]),pe(Wt[1]),pe(Wt[3]),pe(Wt[1]),pe(Wt[2]),pe(Wt[3])}function qt(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function pe(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Ag(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ll[s.type]().fromJSON(s)),new n(i,t.options)}},wg={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new st(r,o),new st(a,l),new st(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new st(o,1-l),new st(c,1-u),new st(f,1-p),new st(x,1-m)]:[new st(a,1-l),new st(h,1-u),new st(d,1-p),new st(g,1-m)]}};function Ag(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qo=class n extends de{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=oe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new C,f=new st,d=new C,p=new C,x=new C,g=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let y=0;y<=e;y++){let S=i+y*h*s,v=Math.sin(S),b=Math.cos(S);for(let M=0;M<=t.length-1;M++){u.x=t[M].x*v,u.y=t[M].y,u.z=t[M].x*b,o.push(u.x,u.y,u.z),f.x=y/e,f.y=M/(t.length-1),a.push(f.x,f.y);let T=l[3*M+0]*v,_=l[3*M+1],w=l[3*M+0]*b;c.push(T,_,w)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){let v=S+y*t.length,b=v,M=v+t.length,T=v+t.length+1,_=v+1;r.push(b,M,_),r.push(T,_,M)}this.setIndex(r),this.setAttribute("position",new Vt(o,3)),this.setAttribute("uv",new Vt(a,2)),this.setAttribute("normal",new Vt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var cn=class n extends de{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let y=m*f-o;for(let S=0;S<c;S++){let v=S*u-r;p.push(v,-y,0),x.push(0,0,1),g.push(S/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let S=y+c*m,v=y+c*(m+1),b=y+1+c*(m+1),M=y+1+c*m;d.push(S,v,M),d.push(v,b,M)}this.setIndex(d),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Mn=class n extends de{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new C,p=new st;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let y=m+g,S=y,v=y+i+1,b=y+i+2,M=y+1;a.push(S,v,M),a.push(v,b,M)}}this.setIndex(a),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ts=class n extends de{constructor(t=new si([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(r,3)),this.setAttribute("uv",new Vt(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,p=f.holes;gi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let y=p[g];gi.isClockWise(y)===!0&&(p[g]=y.reverse())}let x=gi.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let y=p[g];d=d.concat(y)}for(let g=0,m=d.length;g<m;g++){let y=d[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,m=x.length;g<m;g++){let y=x[g],S=y[0]+u,v=y[1]+u,b=y[2]+u;i.push(S,v,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Rg(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function Rg(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var xe=class n extends de{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,f=new C,d=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let y=[],S=m/i,v=o+S*a,b=t*Math.cos(v),M=Math.sqrt(t*t-b*b),T=0;m===0&&o===0?T=.5/e:m===i&&l===Math.PI&&(T=-.5/e);for(let _=0;_<=e;_++){let w=_/e,R=s+w*r;u.x=-M*Math.cos(R),u.y=b,u.z=M*Math.sin(R),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(w+T,1-S),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){let S=h[m][y+1],v=h[m][y],b=h[m+1][y],M=h[m+1][y+1];(m!==0||o>0)&&d.push(S,v,M),(m!==i-1||l<Math.PI)&&d.push(v,b,M)}this.setIndex(d),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ve=class n extends de{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new C,d=new C,p=new C;for(let x=0;x<=i;x++){let g=o+x/i*a;for(let m=0;m<=s;m++){let y=m/s*r;d.x=(t+e*Math.cos(g))*Math.cos(y),d.y=(t+e*Math.cos(g))*Math.sin(y),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,y=(s+1)*(x-1)+g-1,S=(s+1)*(x-1)+g,v=(s+1)*x+g;l.push(m,y,v),l.push(y,S,v)}this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Yo=class n extends de{constructor(t=new Go(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new st,h=new C,u=[],f=[],d=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function x(){for(let S=0;S<e;S++)g(S);g(r===!1?e:0),y(),m()}function g(S){h=t.getPointAt(S/e,h);let v=o.normals[S],b=o.binormals[S];for(let M=0;M<=s;M++){let T=M/s*Math.PI*2,_=Math.sin(T),w=-Math.cos(T);l.x=w*v.x+_*b.x,l.y=w*v.y+_*b.y,l.z=w*v.z+_*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let S=1;S<=e;S++)for(let v=1;v<=s;v++){let b=(s+1)*(S-1)+(v-1),M=(s+1)*S+(v-1),T=(s+1)*S+v,_=(s+1)*(S-1)+v;p.push(b,M,_),p.push(M,T,_)}}function y(){for(let S=0;S<=e;S++)for(let v=0;v<=s;v++)c.x=S/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Ll[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Rr=class extends de{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,s=new C,r=new C;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],f=u.start,d=u.count;for(let p=f,x=f+d;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),y=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,y),Ef(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Ef(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Vt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Ef(n,t,e){let i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}function Ds(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Mf(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Mf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function yn(n){let t={};for(let e=0;e<n.length;e++){let i=Ds(n[e]);for(let s in i)t[s]=i[s]}return t}function Mf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Cg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function wu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Tn={clone:Ds,merge:yn},Ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ie=class extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ig,this.fragmentShader=Pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=Cg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ft().setHex(s.value);break;case"v2":this.uniforms[i].value=new st().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[i].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new $t().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Cr=class extends Ie{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},es=class extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},$o=class extends es{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Dl=class extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ul=class extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function or(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Zh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ns=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ol=class extends ns{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jh,endingEnd:jh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qh:r=t,a=2*e-i;break;case tu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Qh:o=t,l=2*i-e;break;case tu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-e)/(s-e),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,y=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,S=(-1-d)*g+(1.5+d)*x+.5*p,v=d*g-d*x;for(let b=0;b!==a;++b)r[b]=m*o[h+b]+y*o[c+b]+S*o[l+b]+v*o[u+b];return r}},Fl=class extends ns{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},kl=class extends ns{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hl=class extends ns{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(s-e),x=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*p;return r}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=d*f+p*2,y=u[m],S=u[m+1],v=t*f+p*2,b=h[v],M=h[v+1],T=Ng(i,e,y,b,s);r[p]=yp(T,x,S,M,g)}return r}};function yp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Lg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Ng(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=yp(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Lg(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Un=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=or(e,this.TimeBufferType),this.values=or(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:or(t.times,Array),values:or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Zh(t.settings)&&(i.settings={inTangents:or(t.settings.inTangents,Array),outTangents:or(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Hl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ts:e=this.InterpolantFactoryMethodDiscrete;break;case fr:e=this.InterpolantFactoryMethodLinear;break;case pl:e=this.InterpolantFactoryMethodSmooth;break;case Jh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return pl;case this.InterpolantFactoryMethodBezier:return Jh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Zh(this.settings)&&(Tf(this.settings.inTangents,t),Tf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Yt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&_m(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===pl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let x=e[u+p];if(x!==e[f+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Zh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=fr;var is=class extends Un{constructor(t,e,i){super(t,e,i)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Ts;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends Un{constructor(t,e,i,s){super(t,e,i,s)}};zl.prototype.ValueTypeName="color";var Gl=class extends Un{constructor(t,e,i,s){super(t,e,i,s)}};Gl.prototype.ValueTypeName="number";var Vl=class extends ns{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)je.slerpFlat(r,0,o,c-a,o,c,l);return r}},Zo=class extends Un{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Vl(this.times,this.values,this.getValueSize(),t)}};Zo.prototype.ValueTypeName="quaternion";Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Un{constructor(t,e,i){super(t,e,i)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Ts;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends Un{constructor(t,e,i,s){super(t,e,i,s)}};Bl.prototype.ValueTypeName="vector";var Wl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vp=new Wl,Xl=class{constructor(t){this.manager=t!==void 0?t:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ko=class extends Ir{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Kh=new $t,wf=new C,Af=new C,Jo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;wf.setFromMatrixPosition(t.matrixWorld),e.position.copy(wf),Af.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Af),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Kh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===pr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Kh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},dl=new C,fl=new je,pi=new C,jo=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(dl,fl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(dl,fl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new C,Rf=new st,Cf=new st,ln=class extends jo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,Rf,Cf),e.subVectors(Cf,Rf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ru=class extends Jo{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},Qo=class extends Ir{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ru}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},rs=class extends jo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ou=class extends Jo{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ta=class extends Ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new ou}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ar=-90,lr=1,Pr=class extends Xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(ar,lr,t,e);s.layers=this.layers,this.add(s);let r=new ln(ar,lr,t,e);r.layers=this.layers,this.add(r);let o=new ln(ar,lr,t,e);o.layers=this.layers,this.add(o);let a=new ln(ar,lr,t,e);a.layers=this.layers,this.add(a);let l=new ln(ar,lr,t,e);l.layers=this.layers,this.add(l);let c=new ln(ar,lr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},ql=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},ea=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Dg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Dg(){this._document.hidden===!1&&this.reset()}var Au="\\[\\]\\.:\\/",Ug=new RegExp("["+Au+"]","g"),Ru="[^"+Au+"]",Og="[^"+Au.replace("\\.","")+"]",Fg=/((?:WC+[\/:])*)/.source.replace("WC",Ru),kg=/(WCOD+)?/.source.replace("WCOD",Og),Hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),zg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),Gg=new RegExp("^"+Fg+kg+Hg+zg+"$"),Vg=["material","materials","bones","map"],au=class{constructor(t,e,i){let s=i||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Me=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ug,"")}static parseTrackName(t){let e=Gg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Vg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=au;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eS=new Float32Array(1);var na=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,zt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Du=class Du{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Du.prototype.isMatrix2=!0;var lu=Du;function Cu(n,t,e,i){let s=Bg(i);switch(e){case _u:return n*t;case tc:return n*t/s.components*s.byteLength;case ec:return n*t/s.components*s.byteLength;case cs:return n*t*2/s.components*s.byteLength;case nc:return n*t*2/s.components*s.byteLength;case bu:return n*t*3/s.components*s.byteLength;case Rn:return n*t*4/s.components*s.byteLength;case ic:return n*t*4/s.components*s.byteLength;case ha:case ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case da:case fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rc:case ac:return Math.max(n,16)*Math.max(t,8)/4;case sc:case oc:return Math.max(n,8)*Math.max(t,8)/2;case lc:case cc:case uc:case dc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case hc:case pa:case fc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case gc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case vc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case _c:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case bc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Rc:case Cc:case Ic:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Pc:case Lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ma:case Nc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bg(n){switch(n){case An:case gu:return{byteLength:1,components:1};case Ur:case xu:case Be:return{byteLength:2,components:1};case jl:case Ql:return{byteLength:2,components:4};case oi:case Jl:case Xn:return{byteLength:4,components:1};case yu:case vu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Gp(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Yg(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var $g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zg=`#ifdef USE_ALPHAHASH
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
#endif`,Kg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tx=`#ifdef USE_AOMAP
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
#endif`,ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nx=`#ifdef USE_BATCHING
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
#endif`,ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ox=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ax=`#ifdef USE_IRIDESCENCE
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
#endif`,lx=`#ifdef USE_BUMPMAP
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
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xx=`#define PI 3.141592653589793
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
} // validated`,yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vx=`vec3 transformedNormal = objectNormal;
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
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ux=`#ifdef USE_GRADIENTMAP
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
}`,Ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xx=`PhysicalMaterial material;
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
#endif`,qx=`uniform sampler2D dfgLUT;
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
}`,Yx=`
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
#endif`,$x=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sy=`#if defined( USE_POINTS_UV )
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
#endif`,ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ly=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
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
#endif`,uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xy=`#ifdef USE_NORMALMAP
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
#endif`,yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,by=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ey=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,My=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ny=`float getShadowMask() {
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
}`,Dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uy=`#ifdef USE_SKINNING
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
#endif`,Oy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fy=`#ifdef USE_SKINNING
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
#endif`,ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vy=`#ifdef USE_TRANSMISSION
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
#endif`,By=`#ifdef USE_TRANSMISSION
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$y=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zy=`uniform sampler2D t2D;
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`#include <common>
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
}`,e1=`#if DEPTH_PACKING == 3200
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
}`,n1=`#define DISTANCE
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
}`,i1=`#define DISTANCE
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`uniform float scale;
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
}`,a1=`uniform vec3 diffuse;
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
}`,c1=`uniform vec3 diffuse;
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
}`,h1=`#define LAMBERT
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
}`,u1=`#define LAMBERT
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
}`,f1=`#define MATCAP
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
}`,p1=`#define NORMAL
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
}`,m1=`#define NORMAL
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
}`,g1=`#define PHONG
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
}`,x1=`#define PHONG
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
}`,y1=`#define STANDARD
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
}`,v1=`#define STANDARD
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
}`,_1=`#define TOON
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
}`,b1=`#define TOON
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
}`,S1=`uniform float size;
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
}`,E1=`uniform vec3 diffuse;
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
}`,M1=`#include <common>
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
}`,ae={alphahash_fragment:$g,alphahash_pars_fragment:Zg,alphamap_fragment:Kg,alphamap_pars_fragment:Jg,alphatest_fragment:jg,alphatest_pars_fragment:Qg,aomap_fragment:tx,aomap_pars_fragment:ex,batching_pars_vertex:nx,batching_vertex:ix,begin_vertex:sx,beginnormal_vertex:rx,bsdfs:ox,iridescence_fragment:ax,bumpmap_pars_fragment:lx,clipping_planes_fragment:cx,clipping_planes_pars_fragment:hx,clipping_planes_pars_vertex:ux,clipping_planes_vertex:dx,color_fragment:fx,color_pars_fragment:px,color_pars_vertex:mx,color_vertex:gx,common:xx,cube_uv_reflection_fragment:yx,defaultnormal_vertex:vx,displacementmap_pars_vertex:_x,displacementmap_vertex:bx,emissivemap_fragment:Sx,emissivemap_pars_fragment:Ex,colorspace_fragment:Mx,colorspace_pars_fragment:Tx,envmap_fragment:wx,envmap_common_pars_fragment:Ax,envmap_pars_fragment:Rx,envmap_pars_vertex:Cx,envmap_physical_pars_fragment:zx,envmap_vertex:Ix,fog_vertex:Px,fog_pars_vertex:Lx,fog_fragment:Nx,fog_pars_fragment:Dx,gradientmap_pars_fragment:Ux,lightmap_pars_fragment:Ox,lights_lambert_fragment:Fx,lights_lambert_pars_fragment:kx,lights_pars_begin:Hx,lights_toon_fragment:Gx,lights_toon_pars_fragment:Vx,lights_phong_fragment:Bx,lights_phong_pars_fragment:Wx,lights_physical_fragment:Xx,lights_physical_pars_fragment:qx,lights_fragment_begin:Yx,lights_fragment_maps:$x,lights_fragment_end:Zx,lightprobes_pars_fragment:Kx,logdepthbuf_fragment:Jx,logdepthbuf_pars_fragment:jx,logdepthbuf_pars_vertex:Qx,logdepthbuf_vertex:ty,map_fragment:ey,map_pars_fragment:ny,map_particle_fragment:iy,map_particle_pars_fragment:sy,metalnessmap_fragment:ry,metalnessmap_pars_fragment:oy,morphinstance_vertex:ay,morphcolor_vertex:ly,morphnormal_vertex:cy,morphtarget_pars_vertex:hy,morphtarget_vertex:uy,normal_fragment_begin:dy,normal_fragment_maps:fy,normal_pars_fragment:py,normal_pars_vertex:my,normal_vertex:gy,normalmap_pars_fragment:xy,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:vy,clearcoat_pars_fragment:_y,iridescence_pars_fragment:by,opaque_fragment:Sy,packing:Ey,premultiplied_alpha_fragment:My,project_vertex:Ty,dithering_fragment:wy,dithering_pars_fragment:Ay,roughnessmap_fragment:Ry,roughnessmap_pars_fragment:Cy,shadowmap_pars_fragment:Iy,shadowmap_pars_vertex:Py,shadowmap_vertex:Ly,shadowmask_pars_fragment:Ny,skinbase_vertex:Dy,skinning_pars_vertex:Uy,skinning_vertex:Oy,skinnormal_vertex:Fy,specularmap_fragment:ky,specularmap_pars_fragment:Hy,tonemapping_fragment:zy,tonemapping_pars_fragment:Gy,transmission_fragment:Vy,transmission_pars_fragment:By,uv_pars_fragment:Wy,uv_pars_vertex:Xy,uv_vertex:qy,worldpos_vertex:Yy,background_vert:$y,background_frag:Zy,backgroundCube_vert:Ky,backgroundCube_frag:Jy,cube_vert:jy,cube_frag:Qy,depth_vert:t1,depth_frag:e1,distance_vert:n1,distance_frag:i1,equirect_vert:s1,equirect_frag:r1,linedashed_vert:o1,linedashed_frag:a1,meshbasic_vert:l1,meshbasic_frag:c1,meshlambert_vert:h1,meshlambert_frag:u1,meshmatcap_vert:d1,meshmatcap_frag:f1,meshnormal_vert:p1,meshnormal_frag:m1,meshphong_vert:g1,meshphong_frag:x1,meshphysical_vert:y1,meshphysical_frag:v1,meshtoon_vert:_1,meshtoon_frag:b1,points_vert:S1,points_frag:E1,shadow_vert:M1,shadow_frag:T1,sprite_vert:w1,sprite_frag:A1},vt={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Ti={basic:{uniforms:yn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:yn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:yn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:yn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:yn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new ft(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:yn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:yn([vt.points,vt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:yn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:yn([vt.common,vt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:yn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:yn([vt.sprite,vt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:yn([vt.common,vt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:yn([vt.lights,vt.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Ti.physical={uniforms:yn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var Fc={r:0,b:0,g:0},R1=new $t,Vp=new jt;Vp.set(-1,0,0,0,1,0,0,0,1);function C1(n,t,e,i,s,r){let o=new ft(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let v=y.backgroundBlurriness>0;S=t.get(S,v)}return S}function p(y){let S=!1,v=d(y);v===null?g(o,a):v&&v.isColor&&(g(v,1),S=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,S){let v=d(S);v&&(v.isCubeTexture||v.mapping===ca)?(c===void 0&&(c=new Y(new Gt(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:Ds(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(R1.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vp),c.material.toneMapped=le.getTransfer(v.colorSpace)!==_e,(h!==v||u!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Y(new cn(2,2),new Ie({name:"BackgroundMaterial",uniforms:Ds(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=le.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,S){y.getRGB(Fc,wu(n)),e.buffers.color.setClear(Fc.r,Fc.g,Fc.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:p,addToRenderList:x,dispose:m}}function I1(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(P,L,U,N,D){let O=!1,z=u(P,N,U,L);r!==z&&(r=z,c(r.object)),O=d(P,N,U,D),O&&p(P,N,U,D),D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(P,L,U,N),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function u(P,L,U,N){let D=N.wireframe===!0,O=i[L.id];O===void 0&&(O={},i[L.id]=O);let z=P.isInstancedMesh===!0?P.id:0,J=O[z];J===void 0&&(J={},O[z]=J);let V=J[U.id];V===void 0&&(V={},J[U.id]=V);let Q=V[D];return Q===void 0&&(Q=f(l()),V[D]=Q),Q}function f(P){let L=[],U=[],N=[];for(let D=0;D<e;D++)L[D]=0,U[D]=0,N[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:N,object:P,attributes:{},index:null}}function d(P,L,U,N){let D=r.attributes,O=L.attributes,z=0,J=U.getAttributes();for(let V in J)if(J[V].location>=0){let $=D[V],At=O[V];if(At===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(At=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(At=P.instanceColor)),$===void 0||$.attribute!==At||At&&$.data!==At.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function p(P,L,U,N){let D={},O=L.attributes,z=0,J=U.getAttributes();for(let V in J)if(J[V].location>=0){let $=O[V];$===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&($=P.instanceColor));let At={};At.attribute=$,$&&$.data&&(At.data=$.data),D[V]=At,z++}r.attributes=D,r.attributesNum=z,r.index=N}function x(){let P=r.newAttributes;for(let L=0,U=P.length;L<U;L++)P[L]=0}function g(P){m(P,0)}function m(P,L){let U=r.newAttributes,N=r.enabledAttributes,D=r.attributeDivisors;U[P]=1,N[P]===0&&(n.enableVertexAttribArray(P),N[P]=1),D[P]!==L&&(n.vertexAttribDivisor(P,L),D[P]=L)}function y(){let P=r.newAttributes,L=r.enabledAttributes;for(let U=0,N=L.length;U<N;U++)L[U]!==P[U]&&(n.disableVertexAttribArray(U),L[U]=0)}function S(P,L,U,N,D,O,z){z===!0?n.vertexAttribIPointer(P,L,U,D,O):n.vertexAttribPointer(P,L,U,N,D,O)}function v(P,L,U,N){x();let D=N.attributes,O=U.getAttributes(),z=L.defaultAttributeValues;for(let J in O){let V=O[J];if(V.location>=0){let Q=D[J];if(Q===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){let $=Q.normalized,At=Q.itemSize,St=t.get(Q);if(St===void 0)continue;let me=St.buffer,se=St.type,ce=St.bytesPerElement,K=se===n.INT||se===n.UNSIGNED_INT||Q.gpuType===Jl;if(Q.isInterleavedBufferAttribute){let tt=Q.data,pt=tt.stride,Bt=Q.offset;if(tt.isInstancedInterleavedBuffer){for(let wt=0;wt<V.locationSize;wt++)m(V.location+wt,tt.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let wt=0;wt<V.locationSize;wt++)g(V.location+wt);n.bindBuffer(n.ARRAY_BUFFER,me);for(let wt=0;wt<V.locationSize;wt++)S(V.location+wt,At/V.locationSize,se,$,pt*ce,(Bt+At/V.locationSize*wt)*ce,K)}else{if(Q.isInstancedBufferAttribute){for(let tt=0;tt<V.locationSize;tt++)m(V.location+tt,Q.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let tt=0;tt<V.locationSize;tt++)g(V.location+tt);n.bindBuffer(n.ARRAY_BUFFER,me);for(let tt=0;tt<V.locationSize;tt++)S(V.location+tt,At/V.locationSize,se,$,At*ce,At/V.locationSize*tt*ce,K)}}else if(z!==void 0){let $=z[J];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(V.location,$);break;case 3:n.vertexAttrib3fv(V.location,$);break;case 4:n.vertexAttrib4fv(V.location,$);break;default:n.vertexAttrib1fv(V.location,$)}}}}y()}function b(){w();for(let P in i){let L=i[P];for(let U in L){let N=L[U];for(let D in N){let O=N[D];for(let z in O)h(O[z].object),delete O[z];delete N[D]}}delete i[P]}}function M(P){if(i[P.id]===void 0)return;let L=i[P.id];for(let U in L){let N=L[U];for(let D in N){let O=N[D];for(let z in O)h(O[z].object),delete O[z];delete N[D]}}delete i[P.id]}function T(P){for(let L in i){let U=i[L];for(let N in U){let D=U[N];if(D[P.id]===void 0)continue;let O=D[P.id];for(let z in O)h(O[z].object),delete O[z];delete D[P.id]}}}function _(P){for(let L in i){let U=i[L],N=P.isInstancedMesh===!0?P.id:0,D=U[N];if(D!==void 0){for(let O in D){let z=D[O];for(let J in z)h(z[J].object),delete z[J];delete D[O]}delete U[N],Object.keys(U).length===0&&delete i[L]}}}function w(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function P1(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function L1(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Rn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let _=T===Be&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==An&&T!==Xn&&!_&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,maxSamples:b,samples:M}}function N1(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Nn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let y=r?0:i,S=y*4,v=m.clippingState||null;l.value=v,v=h(p,f,S,d);for(let b=0;b!==S;++b)v[b]=e[b];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,v=d;S!==x;++S,v+=4)o.copy(u[S]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var kr=4,D1=6,U1=20,O1=256,ga=new rs,_p=new ft,Uu=null,Ou=0,Fu=0,ku=!1,F1=new C,Us=new C,zr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=F1}=r;Uu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Uu,Ou,Fu),this._renderer.xr.enabled=ku,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Be,format:Rn,colorSpace:_o,depthBuffer:!1},s=bp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=k1(r)),this._blurMaterial=z1(r,t,e),this._ggxMaterial=H1(r,t,e)}return s}_compileMaterial(t){let e=new Y(new de,t);this._renderer.compile(e,ga)}_sceneToCubeUV(t,e,i,s,r){let l=new ln(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(_p),u.toneMapping=ri,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Y(new Gt,new ke({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,m=!0):(g.color.copy(_p),m=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let b=this._cubeSize;Fr(s,v*b,S>2?b:0,b,b),u.setRenderTarget(s),m&&u.render(x,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===as||t.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Fr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ga)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,x=this._sizeLods[i],g=3*x*(i>p-kr?i-p+kr:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Fr(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(a,ga),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Fr(t,g,m,3*x,2*x),s.setRenderTarget(t),s.render(a,ga)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-kr?s-this._lodMax+kr:0),f=4*(this._cubeSize-h);Fr(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,ga)}};function k1(n){let t=[],e=[],i=n,s=n-kr+1+D1;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let m=0;m<u;m++){let y=m%3*2/3-1,S=m>2?0:-1,v=[y,S,0,y+2/3,S,0,y+2/3,S+1,0,y,S,0,y+2/3,S+1,0,y,S+1,0];p.set(v,d*f*m);for(let b=0;b<f;b++){let M=h[b*2]*2-1,T=h[b*2+1]*2-1;m===0?Us.set(1,T,M):m===1?Us.set(-M,1,-T):m===2?Us.set(-M,T,1):m===3?Us.set(-1,T,-M):m===4?Us.set(-M,-1,T):Us.set(M,T,-1),Us.toArray(x,(m*f+b)*d)}}let g=new de;g.setAttribute("position",new ge(p,d)),g.setAttribute("outputDirection",new ge(x,d)),e.push(new Y(g,null)),i>kr&&i--}return{lodMeshes:e,sizeLods:t}}function bp(n,t,e){let i=new Fe(n,t,e);return i.texture.mapping=ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function H1(n,t,e){return new Ie({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function z1(n,t,e){return new Ie({name:"SphericalGaussianBlur",defines:{SAMPLES:U1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Sp(){return new Ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ep(){return new Ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Gr=class extends Fe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Do(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new Ie({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:Wn});r.uniforms.tEquirect.value=e;let o=new Y(s,r),a=e.minFilter;return e.minFilter===wn&&(e.minFilter=Qe),new Pr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function G1(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===$l||d===Zl)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new Gr(p.height);return x.fromEquirectangularTexture(n,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===$l||d===Zl,x=d===as||d===Ps;if(p||x){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new zr(n)),g=p?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let y=f.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new zr(n)),g=p?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===$l?f.mapping=as:d===Zl&&(f.mapping=Ps),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function V1(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ms("WebGLRenderer: "+i+" extension not supported."),s}}}function B1(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],n.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(d!==null){let y=d.array;x=d.version;for(let S=0,v=y.length;S<v;S+=3){let b=y[S+0],M=y[S+1],T=y[S+2];f.push(b,M,M,T,T,b)}}else{let y=p.array;x=p.version;for(let S=0,v=y.length/3-1;S<v;S+=3){let b=S+0,M=S+1,T=S+2;f.push(b,M,M,T,T,b)}}let g=new(p.count>=65535?Ro:Ao)(f,1);g.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function W1(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),e.update(f,i,1)}function c(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*o,d),e.update(f,i,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function X1(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Yt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function q1(n,t,e){let i=new WeakMap,s=new Te;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let w=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;d===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*b*4*u),T=new Mo(M,v,b,u);T.type=Xn,T.needsUpdate=!0;let _=S*4;for(let R=0;R<u;R++){let P=g[R],L=m[R],U=y[R],N=v*b*4*R;for(let D=0;D<P.count;D++){let O=D*_;d===!0&&(s.fromBufferAttribute(P,D),M[N+O+0]=s.x,M[N+O+1]=s.y,M[N+O+2]=s.z,M[N+O+3]=0),p===!0&&(s.fromBufferAttribute(L,D),M[N+O+4]=s.x,M[N+O+5]=s.y,M[N+O+6]=s.z,M[N+O+7]=0),x===!0&&(s.fromBufferAttribute(U,D),M[N+O+8]=s.x,M[N+O+9]=s.y,M[N+O+10]=s.z,M[N+O+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new st(v,b)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Y1(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var $1={[ia]:"LINEAR_TONE_MAPPING",[sa]:"REINHARD_TONE_MAPPING",[ra]:"CINEON_TONE_MAPPING",[Is]:"ACES_FILMIC_TONE_MAPPING",[aa]:"AGX_TONE_MAPPING",[la]:"NEUTRAL_TONE_MAPPING",[oa]:"CUSTOM_TONE_MAPPING"};function Z1(n,t,e,i,s,r){let o=new Fe(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new de;c.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Vt([0,2,0,0,2,0],2));let h=new Cr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Y(c,h),f=new rs(-1,1,1,-1,0,1),d=null,p=null,x=!1,g,m=null,y=[],S=!1;this.setSize=function(v,b){o.setSize(v,b),a!==null&&a.setSize(v,b),l!==null&&l.setSize(v,b);for(let M=0;M<y.length;M++){let T=y[M];T.setSize&&T.setSize(v,b)}},this.setEffects=function(v){y=v,S=y.length>0&&y[0].isRenderPass===!0;let b=o.width,M=o.height;y.length>0&&a===null&&(a=new Fe(b,M,{type:Be,depthBuffer:!1,stencilBuffer:!1}),l=new Fe(b,M,{type:Be,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<y.length;T++){let _=y[T];_.setSize&&_.setSize(b,M)}},this.begin=function(v,b){if(x||v.toneMapping===ri&&y.length===0)return!1;if(m=b,b!==null){let M=b.width,T=b.height;(o.width!==M||o.height!==T)&&this.setSize(M,T)}return S===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=ri,!0},this.hasRenderPass=function(){return S},this.end=function(v,b){v.toneMapping=g,x=!0;let M=o,T=a;for(let _=0;_<y.length;_++){let w=y[_];w.enabled!==!1&&(w.render(v,T,M,b),w.needsSwap!==!1&&(M=T,T=T===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},le.getTransfer(d)===_e&&(h.defines.SRGB_TRANSFER="");let _=$1[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(m),v.render(u,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Bp=new xn,Gu=new Ji(1,1),Wp=new Mo,Xp=new Ml,qp=new Do,Mp=[],Tp=[],wp=new Float32Array(16),Ap=new Float32Array(9),Rp=new Float32Array(4);function Vr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Mp[s];if(r===void 0&&(r=new Float32Array(s),Mp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function tn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function en(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Gc(n,t){let e=Tp[t];e===void 0&&(e=new Int32Array(t),Tp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function K1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function J1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2fv(this.addr,t),en(e,t)}}function j1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;n.uniform3fv(this.addr,t),en(e,t)}}function Q1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4fv(this.addr,t),en(e,t)}}function tv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;Rp.set(i),n.uniformMatrix2fv(this.addr,!1,Rp),en(e,i)}}function ev(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;Ap.set(i),n.uniformMatrix3fv(this.addr,!1,Ap),en(e,i)}}function nv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;wp.set(i),n.uniformMatrix4fv(this.addr,!1,wp),en(e,i)}}function iv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function sv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2iv(this.addr,t),en(e,t)}}function rv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3iv(this.addr,t),en(e,t)}}function ov(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4iv(this.addr,t),en(e,t)}}function av(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function lv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2uiv(this.addr,t),en(e,t)}}function cv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3uiv(this.addr,t),en(e,t)}}function hv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4uiv(this.addr,t),en(e,t)}}function uv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gu.compareFunction=e.isReversedDepthBuffer()?Oc:Uc,r=Gu):r=Bp,e.setTexture2D(t||r,s)}function dv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Xp,s)}function fv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||qp,s)}function pv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Wp,s)}function mv(n){switch(n){case 5126:return K1;case 35664:return J1;case 35665:return j1;case 35666:return Q1;case 35674:return tv;case 35675:return ev;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return sv;case 35668:case 35672:return rv;case 35669:case 35673:return ov;case 5125:return av;case 36294:return lv;case 36295:return cv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return pv}}function gv(n,t){n.uniform1fv(this.addr,t)}function xv(n,t){let e=Vr(t,this.size,2);n.uniform2fv(this.addr,e)}function yv(n,t){let e=Vr(t,this.size,3);n.uniform3fv(this.addr,e)}function vv(n,t){let e=Vr(t,this.size,4);n.uniform4fv(this.addr,e)}function _v(n,t){let e=Vr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function bv(n,t){let e=Vr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Sv(n,t){let e=Vr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ev(n,t){n.uniform1iv(this.addr,t)}function Mv(n,t){n.uniform2iv(this.addr,t)}function Tv(n,t){n.uniform3iv(this.addr,t)}function wv(n,t){n.uniform4iv(this.addr,t)}function Av(n,t){n.uniform1uiv(this.addr,t)}function Rv(n,t){n.uniform2uiv(this.addr,t)}function Cv(n,t){n.uniform3uiv(this.addr,t)}function Iv(n,t){n.uniform4uiv(this.addr,t)}function Pv(n,t,e){let i=this.cache,s=t.length,r=Gc(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Gu:o=Bp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Lv(n,t,e){let i=this.cache,s=t.length,r=Gc(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Xp,r[o])}function Nv(n,t,e){let i=this.cache,s=t.length,r=Gc(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qp,r[o])}function Dv(n,t,e){let i=this.cache,s=t.length,r=Gc(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Wp,r[o])}function Uv(n){switch(n){case 5126:return gv;case 35664:return xv;case 35665:return yv;case 35666:return vv;case 35674:return _v;case 35675:return bv;case 35676:return Sv;case 5124:case 35670:return Ev;case 35667:case 35671:return Mv;case 35668:case 35672:return Tv;case 35669:case 35673:return wv;case 5125:return Av;case 36294:return Rv;case 36295:return Cv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Dv}}var Vu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=mv(e.type)}},Bu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Uv(e.type)}},Wu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Hu=/(\w+)(\])?(\[|\.)?/g;function Cp(n,t){n.seq.push(t),n.map[t.id]=t}function Ov(n,t,e){let i=n.name,s=i.length;for(Hu.lastIndex=0;;){let r=Hu.exec(i),o=Hu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cp(e,c===void 0?new Vu(a,n,t):new Bu(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Wu(a),Cp(e,u)),e=u}}}var Hr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ov(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Ip(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Fv=37297,kv=0;function Hv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Pp=new jt;function zv(n){le._getMatrix(Pp,le.workingColorSpace,n);let t=`mat3( ${Pp.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case bo:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Lp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Hv(n.getShaderSource(t),a)}else return r}function Gv(n,t){let e=zv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Vv={[ia]:"Linear",[sa]:"Reinhard",[ra]:"Cineon",[Is]:"ACESFilmic",[aa]:"AgX",[la]:"Neutral",[oa]:"Custom"};function Bv(n,t){let e=Vv[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var kc=new C;function Wv(){le.getLuminanceCoefficients(kc);let n=kc.x.toFixed(4),t=kc.y.toFixed(4),e=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function qv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Yv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ya(n){return n!==""}function Np(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $v=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(n){return n.replace($v,Kv)}var Zv=new Map;function Kv(n,t){let e=ae[t];if(e===void 0){let i=Zv.get(t);if(i!==void 0)e=ae[i],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xu(e)}var Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Up(n){return n.replace(Jv,jv)}function jv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Op(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Qv={[Rs]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function t_(n){return Qv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var e_={[as]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[ca]:"ENVMAP_TYPE_CUBE_UV"};function n_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":e_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var i_={[Ps]:"ENVMAP_MODE_REFRACTION"};function s_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":i_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var r_={[pu]:"ENVMAP_BLENDING_MULTIPLY",[Jf]:"ENVMAP_BLENDING_MIX",[jf]:"ENVMAP_BLENDING_ADD"};function o_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":r_[n.combine]||"ENVMAP_BLENDING_NONE"}function a_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function l_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=t_(e),c=n_(e),h=s_(e),u=o_(e),f=a_(e),d=Xv(e),p=qv(r),x=s.createProgram(),g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ya).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ya).join(`
`),m.length>0&&(m+=`
`)):(g=[Op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),m=[Op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?ae.tonemapping_pars_fragment:"",e.toneMapping!==ri?Bv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Gv("linearToOutputTexel",e.outputColorSpace),Wv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ya).join(`
`)),o=Xu(o),o=Np(o,e),o=Dp(o,e),a=Xu(a),a=Np(a,e),a=Dp(a,e),o=Up(o),a=Up(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=y+g+o,v=y+m+a,b=Ip(s,s.VERTEX_SHADER,S),M=Ip(s,s.FRAGMENT_SHADER,v);s.attachShader(x,b),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(P){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(b)||"",N=s.getShaderInfoLog(M)||"",D=L.trim(),O=U.trim(),z=N.trim(),J=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,b,M);else{let Q=Lp(s,b,"vertex"),$=Lp(s,M,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+Q+`
`+$)}else D!==""?zt("WebGLProgram: Program Info Log:",D):(O===""||z==="")&&(V=!1);V&&(P.diagnostics={runnable:J,programLog:D,vertexShader:{log:O,prefix:g},fragmentShader:{log:z,prefix:m}})}s.deleteShader(b),s.deleteShader(M),_=new Hr(s,x),w=Yv(s,x)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,Fv)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=M,this}var c_=0,qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Yu(t),e.set(t,i)),i}},Yu=class{constructor(t){this.id=c_++,this.code=t,this.usedTimes=0}};function h_(n){return n===cs||n===pa||n===ma}function u_(n,t,e,i,s,r){let o=new To,a=new qu,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,w,R,P,L,U){let N=P.fog,D=L.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,J=t.get(_.envMap||O,z),V=J&&J.mapping===ca?J.image.height:null,Q=d[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&zt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let $=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,At=$!==void 0?$.length:0,St=0;D.morphAttributes.position!==void 0&&(St=1),D.morphAttributes.normal!==void 0&&(St=2),D.morphAttributes.color!==void 0&&(St=3);let me,se,ce,K;if(Q){let Pe=Ti[Q];me=Pe.vertexShader,se=Pe.fragmentShader}else{me=_.vertexShader,se=_.fragmentShader;let Pe=a.getVertexShaderStage(_),Se=a.getFragmentShaderStage(_);a.update(_,Pe,Se),ce=Pe.id,K=Se.id}let tt=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Bt=L.isInstancedMesh===!0,wt=L.isBatchedMesh===!0,qt=!!_.map,pe=!!_.matcap,rt=!!J,at=!!_.aoMap,lt=!!_.lightMap,ct=!!_.bumpMap&&_.wireframe===!1,dt=!!_.normalMap,Wt=!!_.displacementMap,Ht=!!_.emissiveMap,Kt=!!_.metalnessMap,Qt=!!_.roughnessMap,F=_.anisotropy>0,be=_.clearcoat>0,he=_.dispersion>0,I=_.retroreflectivity>0,E=_.iridescence>0,G=_.sheen>0,X=_.transmission>0,Z=F&&!!_.anisotropyMap,ht=be&&!!_.clearcoatMap,ut=be&&!!_.clearcoatNormalMap,j=be&&!!_.clearcoatRoughnessMap,it=E&&!!_.iridescenceMap,mt=E&&!!_.iridescenceThicknessMap,Ot=G&&!!_.sheenColorMap,_t=G&&!!_.sheenRoughnessMap,gt=!!_.specularMap,Ft=!!_.specularColorMap,Xt=!!_.specularIntensityMap,ee=X&&!!_.transmissionMap,H=X&&!!_.thicknessMap,xt=!!_.gradientMap,et=!!_.alphaMap,yt=_.alphaTest>0,Tt=!!_.alphaHash,ot=!!_.extensions,kt=ri;_.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(kt=n.toneMapping);let Dt={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:me,fragmentShader:se,defines:_.defines,customVertexShaderID:ce,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:wt,batchingColor:wt&&L._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&L.instanceColor!==null,instancingMorph:Bt&&L.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:qt,matcap:pe,envMap:rt,envMapMode:rt&&J.mapping,envMapCubeUVHeight:V,aoMap:at,lightMap:lt,bumpMap:ct,normalMap:dt,displacementMap:Wt,emissiveMap:Ht,normalMapObjectSpace:dt&&_.normalMapType===tp,normalMapTangentSpace:dt&&_.normalMapType===Dc,packedNormalMap:dt&&_.normalMapType===Dc&&h_(_.normalMap.format),metalnessMap:Kt,roughnessMap:Qt,anisotropy:F,anisotropyMap:Z,clearcoat:be,clearcoatMap:ht,clearcoatNormalMap:ut,clearcoatRoughnessMap:j,dispersion:he,retroreflection:I,iridescence:E,iridescenceMap:it,iridescenceThicknessMap:mt,sheen:G,sheenColorMap:Ot,sheenRoughnessMap:_t,specularMap:gt,specularColorMap:Ft,specularIntensityMap:Xt,transmission:X,transmissionMap:ee,thicknessMap:H,gradientMap:xt,opaque:_.transparent===!1&&_.blending===Nr&&_.alphaToCoverage===!1,alphaMap:et,alphaTest:yt,alphaHash:Tt,combine:_.combine,mapUv:qt&&p(_.map.channel),aoMapUv:at&&p(_.aoMap.channel),lightMapUv:lt&&p(_.lightMap.channel),bumpMapUv:ct&&p(_.bumpMap.channel),normalMapUv:dt&&p(_.normalMap.channel),displacementMapUv:Wt&&p(_.displacementMap.channel),emissiveMapUv:Ht&&p(_.emissiveMap.channel),metalnessMapUv:Kt&&p(_.metalnessMap.channel),roughnessMapUv:Qt&&p(_.roughnessMap.channel),anisotropyMapUv:Z&&p(_.anisotropyMap.channel),clearcoatMapUv:ht&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ut&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:_t&&p(_.sheenRoughnessMap.channel),specularMapUv:gt&&p(_.specularMap.channel),specularColorMapUv:Ft&&p(_.specularColorMap.channel),specularIntensityMapUv:Xt&&p(_.specularIntensityMap.channel),transmissionMapUv:ee&&p(_.transmissionMap.channel),thicknessMapUv:H&&p(_.thicknessMap.channel),alphaMapUv:et&&p(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(dt||F),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(qt||et),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:St,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,decodeVideoTexture:qt&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===_e,decodeVideoTextureEmissive:Ht&&_.emissiveMap.isVideoTexture===!0&&le.getTransfer(_.emissiveMap.colorSpace)===_e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ye,flipSided:_.side===qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ot&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&_.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function g(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)w.push(R),w.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(w,_),y(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function m(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function y(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){let w=d[_.type],R;if(w){let P=Ti[w];R=Tn.clone(P.uniforms)}else R=_.uniforms;return R}function v(_,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new l_(n,w,_,s),c.push(R),h.set(w,R)),R}function b(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){a.remove(_)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:v,releaseProgram:b,releaseShaderCache:M,programs:c,dispose:T}}function d_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function f_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Fp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function kp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,g,m){let y=n[t];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},n[t]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=g,y.group=m),t++,y}function l(f,d,p,x,g,m,y){y.reversedDepth===!0&&(g=-g);let S=a(f,d,p,x,g,m);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):e.push(S)}function c(f,d,p,x,g,m){let y=a(f,d,p,x,g,m);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function h(f,d){e.length>1&&e.sort(f||f_),i.length>1&&i.sort(d||Fp),s.length>1&&s.sort(d||Fp)}function u(){for(let f=t,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function p_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new kp,n.set(i,[o])):s>=r.length?(o=new kp,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function m_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new ft};break;case"SpotLight":e={position:new C,direction:new C,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function g_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var x_=0;function y_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function v_(n){let t=new m_,e=g_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new $t,o=new $t;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,y=0,S=0,v=0,b=0,M=0,T=0,_=0,w=0,R=0;c.sort(y_);for(let L=0,U=c.length;L<U;L++){let N=c[L],D=N.color,O=N.intensity,z=N.distance,J=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===cs?J=N.shadow.map.texture:J=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=D.r*O,u+=D.g*O,f+=D.b*O;else if(N.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(N.sh.coefficients[V],O);R++}else if(N.isSunLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,$=e.get(N);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[p]=$,i.sunShadowMap[p]=J;let At=Q.getViewportCount();for(let St=0;St<At;St++)i.sunShadowMatrix[x+St]=Q.getMatrix(St),i.sunShadowCascade[x+St]=Q._cascadeData[St];x+=At,p++}i.sun[d]=V,d++}else if(N.isDirectionalLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,$=e.get(N);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,i.directionalShadow[g]=$,i.directionalShadowMap[g]=J,i.directionalShadowMatrix[g]=N.shadow.matrix,b++}i.directional[g]=V,g++}else if(N.isSpotLight){let V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(D).multiplyScalar(O),V.distance=z,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,i.spot[y]=V;let Q=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,Q.updateMatrices(N),N.castShadow&&w++),i.spotLightMatrix[y]=Q.matrix,N.castShadow){let $=e.get(N);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,i.spotShadow[y]=$,i.spotShadowMap[y]=J,T++}y++}else if(N.isRectAreaLight){let V=t.get(N);V.color.copy(D).multiplyScalar(O),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=V,S++}else if(N.isPointLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){let Q=N.shadow,$=e.get(N);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=N.shadow.matrix,M++}i.point[m]=V,m++}else if(N.isHemisphereLight){let V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(O),V.groundColor.copy(N.groundColor).multiplyScalar(O),i.hemi[v]=V,v++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let P=i.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==S||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==b||P.numPointShadows!==M||P.numSpotShadows!==T||P.numSpotMaps!==_||P.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=g,i.spot.length=y,i.rectArea.length=S,i.point.length=m,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+_-w,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,P.sunLength=d,P.directionalLength=g,P.pointLength=m,P.spotLength=y,P.rectAreaLength=S,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=b,P.numPointShadows=M,P.numSpotShadows=T,P.numSpotMaps=_,P.numLightProbes=R,i.version=x_++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let v=c[y];if(v.isSunLight){let b=i.sun[u];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let b=i.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(v.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let b=i.hemi[g];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Hp(n){let t=new v_(n),e=[],i=[],s=[];function r(f){u.camera=f,e.length=0,i.length=0,s.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function __(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Hp(n),t.set(s,[a])):r>=o.length?(a=new Hp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
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
}`,E_=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],M_=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],zp=new $t,xa=new C,zu=new C;function T_(n,t,e){let i=new Sr,s=new st,r=new st,o=new Te,a=new Dl,l=new Ul,c={},h=e.maxTextureSize,u={[os]:qe,[qe]:os,[Ye]:Ye},f=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:b_,fragmentShader:S_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new de;p.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Y(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let m=this.type;this.render=function(M,T,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Lf&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rs);let w=n.getRenderTarget(),R=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Wn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=m!==this.type;U&&T.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(D=>D.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,D=M.length;N<D;N++){let O=M[N],z=O.shadow;if(z===void 0){zt("WebGLShadowMap:",O,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let J=z.getFrameExtents();s.multiply(J),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,z.mapSize.y=r.y));let V=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=V,z.map===null||U===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Lr){if(O.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Fe(s.x,s.y,{format:cs,type:Be,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),z.map.texture.name=O.name+".shadowMap",z.map.depthTexture=new Ji(s.x,s.y,Xn),z.map.depthTexture.name=O.name+".shadowMapDepth",z.map.depthTexture.format=yi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Je,z.map.depthTexture.magFilter=Je}else O.isPointLight?(z.map=new Gr(s.x),z.map.depthTexture=new Rl(s.x,oi)):(z.map=new Fe(s.x,s.y),z.map.depthTexture=new Ji(s.x,s.y,oi)),z.map.depthTexture.name=O.name+".shadowMap",z.map.depthTexture.format=yi,this.type===Rs?(z.map.depthTexture.compareFunction=V?Oc:Uc,z.map.depthTexture.minFilter=Qe,z.map.depthTexture.magFilter=Qe):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Je,z.map.depthTexture.magFilter=Je);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();O.isPointLight!==!0&&z.updateMatrices(O,_);for(let $=0;$<Q;$++){let At=z.getCamera($);if(O.isPointLight){let St=z.camera,me=z.matrix,se=O.distance||St.far;se!==St.far&&(St.far=se,St.updateProjectionMatrix()),xa.setFromMatrixPosition(O.matrixWorld),St.position.copy(xa),zu.copy(St.position),zu.add(E_[$]),St.up.copy(M_[$]),St.lookAt(zu),St.updateMatrixWorld(),me.makeTranslation(-xa.x,-xa.y,-xa.z),zp.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),z._frustum.setFromProjectionMatrix(zp,St.coordinateSystem,St.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,$),n.clear();else{$===0&&(n.setRenderTarget(z.map),n.clear());let St=z.getViewport($);o.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),L.viewport(o)}i=z.getFrustum($),v(T,_,At,O,this.type)}z.isPointLightShadow!==!0&&this.type===Lr&&y(z,_),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(w,R,P)};function y(M,T){let _=t.update(x);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Fe(s.x,s.y,{format:cs,type:Be}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(T,null,_,f,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(T,null,_,d,x,null)}function S(M,T,_,w){let R=null,P=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=_.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=R.uuid,U=T.uuid,N=c[L];N===void 0&&(N={},c[L]=N);let D=N[U];D===void 0&&(D=R.clone(),N[U]=D,T.addEventListener("dispose",b)),R=D}if(R.visible=T.visible,R.wireframe=T.wireframe,w===Lr?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:u[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=n.properties.get(R);L.light=_}return R}function v(M,T,_,w,R){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Lr)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let U=t.update(M),N=M.material;if(Array.isArray(N)){let D=U.groups;for(let O=0,z=D.length;O<z;O++){let J=D[O],V=N[J.materialIndex];if(V&&V.visible){let Q=S(M,V,w,R);M.onBeforeShadow(n,M,T,_,U,Q,J),n.renderBufferDirect(_,null,U,Q,M,J),M.onAfterShadow(n,M,T,_,U,Q,J)}}}else if(N.visible){let D=S(M,N,w,R);M.onBeforeShadow(n,M,T,_,U,D,null),n.renderBufferDirect(_,null,U,D,M,null),M.onAfterShadow(n,M,T,_,U,D,null)}}let L=M.children;for(let U=0,N=L.length;U<N;U++)v(L[U],T,_,w,R)}function b(M){M.target.removeEventListener("dispose",b);for(let _ in c){let w=c[_],R=M.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function w_(n,t){function e(){let H=!1,xt=new Te,et=null,yt=new Te(0,0,0,0);return{setMask:function(Tt){et!==Tt&&!H&&(n.colorMask(Tt,Tt,Tt,Tt),et=Tt)},setLocked:function(Tt){H=Tt},setClear:function(Tt,ot,kt,Dt,Pe){Pe===!0&&(Tt*=Dt,ot*=Dt,kt*=Dt),xt.set(Tt,ot,kt,Dt),yt.equals(xt)===!1&&(n.clearColor(Tt,ot,kt,Dt),yt.copy(xt))},reset:function(){H=!1,et=null,yt.set(-1,0,0,0)}}}function i(){let H=!1,xt=!1,et=null,yt=null,Tt=null;return{setReversed:function(ot){if(xt!==ot){let kt=t.get("EXT_clip_control");ot?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),xt=ot;let Dt=Tt;Tt=null,this.setClear(Dt)}},getReversed:function(){return xt},setTest:function(ot){ot?tt(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(ot){et!==ot&&!H&&(n.depthMask(ot),et=ot)},setFunc:function(ot){if(xt&&(ot=up[ot]),yt!==ot){switch(ot){case gl:n.depthFunc(n.NEVER);break;case xl:n.depthFunc(n.ALWAYS);break;case yl:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case vl:n.depthFunc(n.EQUAL);break;case _l:n.depthFunc(n.GEQUAL);break;case bl:n.depthFunc(n.GREATER);break;case Sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}yt=ot}},setLocked:function(ot){H=ot},setClear:function(ot){Tt!==ot&&(Tt=ot,xt&&(ot=1-ot),n.clearDepth(ot))},reset:function(){H=!1,et=null,yt=null,Tt=null,xt=!1}}}function s(){let H=!1,xt=null,et=null,yt=null,Tt=null,ot=null,kt=null,Dt=null,Pe=null;return{setTest:function(Se){H||(Se?tt(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(Se){xt!==Se&&!H&&(n.stencilMask(Se),xt=Se)},setFunc:function(Se,Kn,di){(et!==Se||yt!==Kn||Tt!==di)&&(n.stencilFunc(Se,Kn,di),et=Se,yt=Kn,Tt=di)},setOp:function(Se,Kn,di){(ot!==Se||kt!==Kn||Dt!==di)&&(n.stencilOp(Se,Kn,di),ot=Se,kt=Kn,Dt=di)},setLocked:function(Se){H=Se},setClear:function(Se){Pe!==Se&&(n.clearStencil(Se),Pe=Se)},reset:function(){H=!1,xt=null,et=null,yt=null,Tt=null,ot=null,kt=null,Dt=null,Pe=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,y=null,S=null,v=null,b=null,M=null,T=null,_=new ft(0,0,0),w=0,R=!1,P=null,L=null,U=null,N=null,D=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,J=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=J>=2);let Q=null,$={},At=n.getParameter(n.SCISSOR_BOX),St=n.getParameter(n.VIEWPORT),me=new Te().fromArray(At),se=new Te().fromArray(St);function ce(H,xt,et,yt){let Tt=new Uint8Array(4),ot=n.createTexture();n.bindTexture(H,ot),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<et;kt++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,yt,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(xt+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return ot}let K={};K[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(n.DEPTH_TEST),o.setFunc(ur),ct(!1),dt(cu),tt(n.CULL_FACE),at(Wn);function tt(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function pt(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function Bt(H,xt){return f[H]!==xt?(n.bindFramebuffer(H,xt),f[H]=xt,H===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=xt),H===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function wt(H,xt){let et=p,yt=!1;if(H){et=d.get(xt),et===void 0&&(et=[],d.set(xt,et));let Tt=H.textures;if(et.length!==Tt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,kt=Tt.length;ot<kt;ot++)et[ot]=n.COLOR_ATTACHMENT0+ot;et.length=Tt.length,yt=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,yt=!0);yt&&n.drawBuffers(et)}function qt(H){return x!==H?(n.useProgram(H),x=H,!0):!1}let pe={[Cs]:n.FUNC_ADD,[Df]:n.FUNC_SUBTRACT,[Uf]:n.FUNC_REVERSE_SUBTRACT};pe[Of]=n.MIN,pe[Ff]=n.MAX;let rt={[kf]:n.ZERO,[Hf]:n.ONE,[zf]:n.SRC_COLOR,[du]:n.SRC_ALPHA,[qf]:n.SRC_ALPHA_SATURATE,[Wf]:n.DST_COLOR,[Vf]:n.DST_ALPHA,[Gf]:n.ONE_MINUS_SRC_COLOR,[fu]:n.ONE_MINUS_SRC_ALPHA,[Xf]:n.ONE_MINUS_DST_COLOR,[Bf]:n.ONE_MINUS_DST_ALPHA,[Yf]:n.CONSTANT_COLOR,[$f]:n.ONE_MINUS_CONSTANT_COLOR,[Zf]:n.CONSTANT_ALPHA,[Kf]:n.ONE_MINUS_CONSTANT_ALPHA};function at(H,xt,et,yt,Tt,ot,kt,Dt,Pe,Se){if(H===Wn){g===!0&&(pt(n.BLEND),g=!1);return}if(g===!1&&(tt(n.BLEND),g=!0),H!==Nf){if(H!==m||Se!==R){if((y!==Cs||b!==Cs)&&(n.blendEquation(n.FUNC_ADD),y=Cs,b=Cs),Se)switch(H){case Nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hn:n.blendFunc(n.ONE,n.ONE);break;case hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Yt("WebGLState: Invalid blending: ",H);break}else switch(H){case Nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case hu:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uu:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",H);break}S=null,v=null,M=null,T=null,_.set(0,0,0),w=0,m=H,R=Se}return}Tt=Tt||xt,ot=ot||et,kt=kt||yt,(xt!==y||Tt!==b)&&(n.blendEquationSeparate(pe[xt],pe[Tt]),y=xt,b=Tt),(et!==S||yt!==v||ot!==M||kt!==T)&&(n.blendFuncSeparate(rt[et],rt[yt],rt[ot],rt[kt]),S=et,v=yt,M=ot,T=kt),(Dt.equals(_)===!1||Pe!==w)&&(n.blendColor(Dt.r,Dt.g,Dt.b,Pe),_.copy(Dt),w=Pe),m=H,R=!1}function lt(H,xt){H.side===Ye?pt(n.CULL_FACE):tt(n.CULL_FACE);let et=H.side===qe;xt&&(et=!et),ct(et),H.blending===Nr&&H.transparent===!1?at(Wn):at(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let yt=H.stencilWrite;a.setTest(yt),yt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(H){P!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),P=H)}function dt(H){H!==If?(tt(n.CULL_FACE),H!==L&&(H===cu?n.cullFace(n.BACK):H===Pf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),L=H}function Wt(H){H!==U&&(z&&n.lineWidth(H),U=H)}function Ht(H,xt,et){H?(tt(n.POLYGON_OFFSET_FILL),(N!==xt||D!==et)&&(N=xt,D=et,o.getReversed()&&(xt=-xt),n.polygonOffset(xt,et))):pt(n.POLYGON_OFFSET_FILL)}function Kt(H){H?tt(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function Qt(H){H===void 0&&(H=n.TEXTURE0+O-1),Q!==H&&(n.activeTexture(H),Q=H)}function F(H,xt,et){et===void 0&&(Q===null?et=n.TEXTURE0+O-1:et=Q);let yt=$[et];yt===void 0&&(yt={type:void 0,texture:void 0},$[et]=yt),(yt.type!==H||yt.texture!==xt)&&(Q!==et&&(n.activeTexture(et),Q=et),n.bindTexture(H,xt||K[H]),yt.type=H,yt.texture=xt)}function be(){let H=$[Q];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function he(){try{n.compressedTexImage2D(...arguments)}catch(H){Yt("WebGLState:",H)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(H){Yt("WebGLState:",H)}}function E(){try{n.texSubImage2D(...arguments)}catch(H){Yt("WebGLState:",H)}}function G(){try{n.texSubImage3D(...arguments)}catch(H){Yt("WebGLState:",H)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Yt("WebGLState:",H)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Yt("WebGLState:",H)}}function ht(){try{n.texStorage2D(...arguments)}catch(H){Yt("WebGLState:",H)}}function ut(){try{n.texStorage3D(...arguments)}catch(H){Yt("WebGLState:",H)}}function j(){try{n.texImage2D(...arguments)}catch(H){Yt("WebGLState:",H)}}function it(){try{n.texImage3D(...arguments)}catch(H){Yt("WebGLState:",H)}}function mt(H){return u[H]!==void 0?u[H]:n.getParameter(H)}function Ot(H,xt){u[H]!==xt&&(n.pixelStorei(H,xt),u[H]=xt)}function _t(H){me.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),me.copy(H))}function gt(H){se.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),se.copy(H))}function Ft(H,xt){let et=c.get(xt);et===void 0&&(et=new WeakMap,c.set(xt,et));let yt=et.get(H);yt===void 0&&(yt=n.getUniformBlockIndex(xt,H.name),et.set(H,yt))}function Xt(H,xt){let yt=c.get(xt).get(H);l.get(xt)!==yt&&(n.uniformBlockBinding(xt,yt,H.__bindingPointIndex),l.set(xt,yt))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,$={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,y=null,S=null,v=null,b=null,M=null,T=null,_=new ft(0,0,0),w=0,R=!1,P=null,L=null,U=null,N=null,D=null,me.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:pt,bindFramebuffer:Bt,drawBuffers:wt,useProgram:qt,setBlending:at,setMaterial:lt,setFlipSided:ct,setCullFace:dt,setLineWidth:Wt,setPolygonOffset:Ht,setScissorTest:Kt,activeTexture:Qt,bindTexture:F,unbindTexture:be,compressedTexImage2D:he,compressedTexImage3D:I,texImage2D:j,texImage3D:it,pixelStorei:Ot,getParameter:mt,updateUBOMapping:Ft,uniformBlockBinding:Xt,texStorage2D:ht,texStorage3D:ut,texSubImage2D:E,texSubImage3D:G,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:_t,viewport:gt,reset:ee}}function A_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,E){return p?new OffscreenCanvas(I,E):So("canvas")}function g(I,E,G){let X=1,Z=he(I);if((Z.width>G||Z.height>G)&&(X=G/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ht=Math.floor(X*Z.width),ut=Math.floor(X*Z.height);f===void 0&&(f=x(ht,ut));let j=E?x(ht,ut):f;return j.width=ht,j.height=ut,j.getContext("2d").drawImage(I,0,0,ht,ut),zt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ht+"x"+ut+")."),j}else return"data"in I&&zt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),I;return I}function m(I){return I.generateMipmaps}function y(I){n.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(I,E,G,X,Z,ht=!1){if(I!==null){if(n[I]!==void 0)return n[I];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ut;X&&(ut=t.get("EXT_texture_norm16"),ut||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=E;if(E===n.RED&&(G===n.FLOAT&&(j=n.R32F),G===n.HALF_FLOAT&&(j=n.R16F),G===n.UNSIGNED_BYTE&&(j=n.R8),G===n.UNSIGNED_SHORT&&ut&&(j=ut.R16_EXT),G===n.SHORT&&ut&&(j=ut.R16_SNORM_EXT)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.R8UI),G===n.UNSIGNED_SHORT&&(j=n.R16UI),G===n.UNSIGNED_INT&&(j=n.R32UI),G===n.BYTE&&(j=n.R8I),G===n.SHORT&&(j=n.R16I),G===n.INT&&(j=n.R32I)),E===n.RG&&(G===n.FLOAT&&(j=n.RG32F),G===n.HALF_FLOAT&&(j=n.RG16F),G===n.UNSIGNED_BYTE&&(j=n.RG8),G===n.UNSIGNED_SHORT&&ut&&(j=ut.RG16_EXT),G===n.SHORT&&ut&&(j=ut.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RG8UI),G===n.UNSIGNED_SHORT&&(j=n.RG16UI),G===n.UNSIGNED_INT&&(j=n.RG32UI),G===n.BYTE&&(j=n.RG8I),G===n.SHORT&&(j=n.RG16I),G===n.INT&&(j=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGB8UI),G===n.UNSIGNED_SHORT&&(j=n.RGB16UI),G===n.UNSIGNED_INT&&(j=n.RGB32UI),G===n.BYTE&&(j=n.RGB8I),G===n.SHORT&&(j=n.RGB16I),G===n.INT&&(j=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),G===n.UNSIGNED_INT&&(j=n.RGBA32UI),G===n.BYTE&&(j=n.RGBA8I),G===n.SHORT&&(j=n.RGBA16I),G===n.INT&&(j=n.RGBA32I)),E===n.RGB&&(G===n.UNSIGNED_SHORT&&ut&&(j=ut.RGB16_EXT),G===n.SHORT&&ut&&(j=ut.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),E===n.RGBA){let it=ht?bo:le.getTransfer(Z);G===n.FLOAT&&(j=n.RGBA32F),G===n.HALF_FLOAT&&(j=n.RGBA16F),G===n.UNSIGNED_BYTE&&(j=it===_e?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&ut&&(j=ut.RGBA16_EXT),G===n.SHORT&&ut&&(j=ut.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function b(I,E){let G;return I?E===null||E===oi||E===Or?G=n.DEPTH24_STENCIL8:E===Xn?G=n.DEPTH32F_STENCIL8:E===Ur&&(G=n.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===oi||E===Or?G=n.DEPTH_COMPONENT24:E===Xn?G=n.DEPTH_COMPONENT32F:E===Ur&&(G=n.DEPTH_COMPONENT16),G}function M(I,E){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Je&&I.minFilter!==Qe?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function T(I){let E=I.target;E.removeEventListener("dispose",T),w(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function _(I){let E=I.target;E.removeEventListener("dispose",_),P(E)}function w(I){let E=i.get(I);if(E.__webglInit===void 0)return;let G=I.source,X=d.get(G);if(X){let Z=X[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(I),Object.keys(X).length===0&&d.delete(G)}i.remove(I)}function R(I){let E=i.get(I);n.deleteTexture(E.__webglTexture);let G=I.source,X=d.get(G);delete X[E.__cacheKey],o.memory.textures--}function P(I){let E=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(E.__webglFramebuffer[X]))for(let Z=0;Z<E.__webglFramebuffer[X].length;Z++)n.deleteFramebuffer(E.__webglFramebuffer[X][Z]);else n.deleteFramebuffer(E.__webglFramebuffer[X]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[X])}else{if(Array.isArray(E.__webglFramebuffer))for(let X=0;X<E.__webglFramebuffer.length;X++)n.deleteFramebuffer(E.__webglFramebuffer[X]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let X=0;X<E.__webglColorRenderbuffer.length;X++)E.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[X]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let G=I.textures;for(let X=0,Z=G.length;X<Z;X++){let ht=i.get(G[X]);ht.__webglTexture&&(n.deleteTexture(ht.__webglTexture),o.memory.textures--),i.remove(G[X])}i.remove(I)}let L=0;function U(){L=0}function N(){return L}function D(I){L=I}function O(){let I=L;return I>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function z(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function J(I,E){let G=i.get(I);if(I.isVideoTexture&&F(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let X=I.image;if(X===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(G,I,E);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function V(I,E){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){pt(G,I,E);return}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function Q(I,E){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){pt(G,I,E);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function $(I,E){let G=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&G.__version!==I.version){Bt(G,I,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}let At={[Zi]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[dr]:n.MIRRORED_REPEAT},St={[Je]:n.NEAREST,[Kl]:n.NEAREST_MIPMAP_NEAREST,[Ls]:n.NEAREST_MIPMAP_LINEAR,[Qe]:n.LINEAR,[Dr]:n.LINEAR_MIPMAP_NEAREST,[wn]:n.LINEAR_MIPMAP_LINEAR},me={[np]:n.NEVER,[ap]:n.ALWAYS,[ip]:n.LESS,[Uc]:n.LEQUAL,[sp]:n.EQUAL,[Oc]:n.GEQUAL,[rp]:n.GREATER,[op]:n.NOTEQUAL};function se(I,E){if(E.type===Xn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Qe||E.magFilter===Dr||E.magFilter===Ls||E.magFilter===wn||E.minFilter===Qe||E.minFilter===Dr||E.minFilter===Ls||E.minFilter===wn)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,At[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,At[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,At[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,St[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Je||E.minFilter!==Ls&&E.minFilter!==wn||E.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ce(I,E){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",T));let X=E.source,Z=d.get(X);Z===void 0&&(Z={},d.set(X,Z));let ht=z(E);if(ht!==I.__cacheKey){Z[ht]===void 0&&(Z[ht]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Z[ht].usedTimes++;let ut=Z[I.__cacheKey];ut!==void 0&&(Z[I.__cacheKey].usedTimes--,ut.usedTimes===0&&R(E)),I.__cacheKey=ht,I.__webglTexture=Z[ht].texture}return G}function K(I,E,G){return Math.floor(Math.floor(I/G)/E)}function tt(I,E,G,X){let ht=I.updateRanges;if(ht.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,G,X,E.data);else{ht.sort((Ot,_t)=>Ot.start-_t.start);let ut=0;for(let Ot=1;Ot<ht.length;Ot++){let _t=ht[ut],gt=ht[Ot],Ft=_t.start+_t.count,Xt=K(gt.start,E.width,4),ee=K(_t.start,E.width,4);gt.start<=Ft+1&&Xt===ee&&K(gt.start+gt.count-1,E.width,4)===Xt?_t.count=Math.max(_t.count,gt.start+gt.count-_t.start):(++ut,ht[ut]=gt)}ht.length=ut+1;let j=e.getParameter(n.UNPACK_ROW_LENGTH),it=e.getParameter(n.UNPACK_SKIP_PIXELS),mt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let Ot=0,_t=ht.length;Ot<_t;Ot++){let gt=ht[Ot],Ft=Math.floor(gt.start/4),Xt=Math.ceil(gt.count/4),ee=Ft%E.width,H=Math.floor(Ft/E.width),xt=Xt,et=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(n.UNPACK_SKIP_ROWS,H),e.texSubImage2D(n.TEXTURE_2D,0,ee,H,xt,et,G,X,E.data)}I.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,it),e.pixelStorei(n.UNPACK_SKIP_ROWS,mt)}}function pt(I,E,G){let X=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(X=n.TEXTURE_3D);let Z=ce(I,E),ht=E.source;e.bindTexture(X,I.__webglTexture,n.TEXTURE0+G);let ut=i.get(ht);if(ht.version!==ut.__version||Z===!0){if(e.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let et=le.getPrimaries(le.workingColorSpace),yt=E.colorSpace===ai?null:le.getPrimaries(E.colorSpace),Tt=E.colorSpace===ai||et===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let it=g(E.image,!1,s.maxTextureSize);it=be(E,it);let mt=r.convert(E.format,E.colorSpace),Ot=r.convert(E.type),_t=v(E.internalFormat,mt,Ot,E.normalized,E.colorSpace,E.isVideoTexture);se(X,E);let gt,Ft=E.mipmaps,Xt=E.isVideoTexture!==!0,ee=ut.__version===void 0||Z===!0,H=ht.dataReady,xt=M(E,it);if(E.isDepthTexture)_t=b(E.format===ls,E.type),ee&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,_t,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,_t,it.width,it.height,0,mt,Ot,null));else if(E.isDataTexture)if(Ft.length>0){Xt&&ee&&e.texStorage2D(n.TEXTURE_2D,xt,_t,Ft[0].width,Ft[0].height);for(let et=0,yt=Ft.length;et<yt;et++)gt=Ft[et],Xt?H&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,gt.width,gt.height,mt,Ot,gt.data):e.texImage2D(n.TEXTURE_2D,et,_t,gt.width,gt.height,0,mt,Ot,gt.data);E.generateMipmaps=!1}else Xt?(ee&&e.texStorage2D(n.TEXTURE_2D,xt,_t,it.width,it.height),H&&tt(E,it,mt,Ot)):e.texImage2D(n.TEXTURE_2D,0,_t,it.width,it.height,0,mt,Ot,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Xt&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,_t,Ft[0].width,Ft[0].height,it.depth);for(let et=0,yt=Ft.length;et<yt;et++)if(gt=Ft[et],E.format!==Rn)if(mt!==null)if(Xt){if(H)if(E.layerUpdates.size>0){let Tt=Cu(gt.width,gt.height,E.format,E.type);for(let ot of E.layerUpdates){let kt=gt.data.subarray(ot*Tt/gt.data.BYTES_PER_ELEMENT,(ot+1)*Tt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,ot,gt.width,gt.height,1,mt,kt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,it.depth,mt,gt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,_t,gt.width,gt.height,it.depth,0,gt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,it.depth,mt,Ot,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,_t,gt.width,gt.height,it.depth,0,mt,Ot,gt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Xt&&ee&&e.texStorage2D(n.TEXTURE_2D,xt,_t,Ft[0].width,Ft[0].height);for(let et=0,yt=Ft.length;et<yt;et++)gt=Ft[et],E.format!==Rn?mt!==null?Xt?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,et,_t,gt.width,gt.height,0,gt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?H&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,gt.width,gt.height,mt,Ot,gt.data):e.texImage2D(n.TEXTURE_2D,et,_t,gt.width,gt.height,0,mt,Ot,gt.data)}else if(E.isDataArrayTexture)if(Xt){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,_t,it.width,it.height,it.depth),H)if(E.layerUpdates.size>0){let et=Cu(it.width,it.height,E.format,E.type);for(let yt of E.layerUpdates){let Tt=it.data.subarray(yt*et/it.data.BYTES_PER_ELEMENT,(yt+1)*et/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,yt,it.width,it.height,1,mt,Ot,Tt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,mt,Ot,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,_t,it.width,it.height,it.depth,0,mt,Ot,it.data);else if(E.isData3DTexture)Xt?(ee&&e.texStorage3D(n.TEXTURE_3D,xt,_t,it.width,it.height,it.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,mt,Ot,it.data)):e.texImage3D(n.TEXTURE_3D,0,_t,it.width,it.height,it.depth,0,mt,Ot,it.data);else if(E.isFramebufferTexture){if(ee)if(Xt)e.texStorage2D(n.TEXTURE_2D,xt,_t,it.width,it.height);else{let et=it.width,yt=it.height;for(let Tt=0;Tt<xt;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,_t,et,yt,0,mt,Ot,null),et>>=1,yt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let et=n.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),it.parentNode!==et){et.appendChild(it),u.add(E),et.onpaint=yt=>{let Tt=yt.changedElements;for(let ot of u)Tt.includes(ot.image)&&(ot.needsUpdate=!0)},et.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,it);else{let Tt=n.RGBA,ot=n.RGBA,kt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Tt,ot,kt,it)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Xt&&ee){let et=he(Ft[0]);e.texStorage2D(n.TEXTURE_2D,xt,_t,et.width,et.height)}for(let et=0,yt=Ft.length;et<yt;et++)gt=Ft[et],Xt?H&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,mt,Ot,gt):e.texImage2D(n.TEXTURE_2D,et,_t,mt,Ot,gt);E.generateMipmaps=!1}else if(Xt){if(ee){let et=he(it);e.texStorage2D(n.TEXTURE_2D,xt,_t,et.width,et.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,Ot,it)}else e.texImage2D(n.TEXTURE_2D,0,_t,mt,Ot,it);m(E)&&y(X),ut.__version=ht.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Bt(I,E,G){if(E.image.length!==6)return;let X=ce(I,E),Z=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+G);let ht=i.get(Z);if(Z.version!==ht.__version||X===!0){e.activeTexture(n.TEXTURE0+G);let ut=le.getPrimaries(le.workingColorSpace),j=E.colorSpace===ai?null:le.getPrimaries(E.colorSpace),it=E.colorSpace===ai||ut===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let mt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ot=E.image[0]&&E.image[0].isDataTexture,_t=[];for(let ot=0;ot<6;ot++)!mt&&!Ot?_t[ot]=g(E.image[ot],!0,s.maxCubemapSize):_t[ot]=Ot?E.image[ot].image:E.image[ot],_t[ot]=be(E,_t[ot]);let gt=_t[0],Ft=r.convert(E.format,E.colorSpace),Xt=r.convert(E.type),ee=v(E.internalFormat,Ft,Xt,E.normalized,E.colorSpace),H=E.isVideoTexture!==!0,xt=ht.__version===void 0||X===!0,et=Z.dataReady,yt=M(E,gt);se(n.TEXTURE_CUBE_MAP,E);let Tt;if(mt){H&&xt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,ee,gt.width,gt.height);for(let ot=0;ot<6;ot++){Tt=_t[ot].mipmaps;for(let kt=0;kt<Tt.length;kt++){let Dt=Tt[kt];E.format!==Rn?Ft!==null?H?et&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt,0,0,Dt.width,Dt.height,Ft,Dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt,ee,Dt.width,Dt.height,0,Dt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt,0,0,Dt.width,Dt.height,Ft,Xt,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt,ee,Dt.width,Dt.height,0,Ft,Xt,Dt.data)}}}else{if(Tt=E.mipmaps,H&&xt){Tt.length>0&&yt++;let ot=he(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,ee,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(Ot){H?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,_t[ot].width,_t[ot].height,Ft,Xt,_t[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ee,_t[ot].width,_t[ot].height,0,Ft,Xt,_t[ot].data);for(let kt=0;kt<Tt.length;kt++){let Pe=Tt[kt].image[ot].image;H?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt+1,0,0,Pe.width,Pe.height,Ft,Xt,Pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt+1,ee,Pe.width,Pe.height,0,Ft,Xt,Pe.data)}}else{H?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ft,Xt,_t[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ee,Ft,Xt,_t[ot]);for(let kt=0;kt<Tt.length;kt++){let Dt=Tt[kt];H?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt+1,0,0,Ft,Xt,Dt.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,kt+1,ee,Ft,Xt,Dt.image[ot])}}}m(E)&&y(n.TEXTURE_CUBE_MAP),ht.__version=Z.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function wt(I,E,G,X,Z,ht){let ut=r.convert(G.format,G.colorSpace),j=r.convert(G.type),it=v(G.internalFormat,ut,j,G.normalized,G.colorSpace),mt=i.get(E),Ot=i.get(G);if(Ot.__renderTarget=E,!mt.__hasExternalTextures){let _t=Math.max(1,E.width>>ht),gt=Math.max(1,E.height>>ht);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,ht,it,_t,gt,E.depth,0,ut,j,null):e.texImage2D(Z,ht,it,_t,gt,0,ut,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),Qt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Z,Ot.__webglTexture,0,Kt(E)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Z,Ot.__webglTexture,ht),e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(I,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){let X=E.depthTexture,Z=X&&X.isDepthTexture?X.type:null,ht=b(E.stencilBuffer,Z),ut=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Qt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt(E),ht,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt(E),ht,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ht,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,I)}else{let X=E.textures;for(let Z=0;Z<X.length;Z++){let ht=X[Z],ut=r.convert(ht.format,ht.colorSpace),j=r.convert(ht.type),it=v(ht.internalFormat,ut,j,ht.normalized,ht.colorSpace);Qt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt(E),it,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt(E),it,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,it,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(I,E,G){let X=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(E.depthTexture);if(Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),se(n.TEXTURE_CUBE_MAP,E.depthTexture);let mt=r.convert(E.depthTexture.format),Ot=r.convert(E.depthTexture.type),_t;E.depthTexture.format===yi?_t=n.DEPTH_COMPONENT24:E.depthTexture.format===ls&&(_t=n.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,_t,E.width,E.height,0,mt,Ot,null)}}else J(E.depthTexture,0);let ht=Z.__webglTexture,ut=Kt(E),j=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,it=E.depthTexture.format===ls?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===yi)Qt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,j,ht,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,it,j,ht,0);else if(E.depthTexture.format===ls)Qt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,j,ht,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,it,j,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(I){let E=i.get(I),G=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let X=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),X){let Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=X}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let X=0;X<6;X++)pe(E.__webglFramebuffer[X],I,X);else{let X=I.texture.mipmaps;X&&X.length>0?pe(E.__webglFramebuffer[0],I,0):pe(E.__webglFramebuffer,I,0)}else if(G){E.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[X]),E.__webglDepthbuffer[X]===void 0)E.__webglDepthbuffer[X]=n.createRenderbuffer(),qt(E.__webglDepthbuffer[X],I,!1);else{let Z=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ht)}}else{let X=I.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),qt(E.__webglDepthbuffer,I,!1);else{let Z=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ht)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(I,E,G){let X=i.get(I);E!==void 0&&wt(X.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&rt(I)}function lt(I){let E=I.texture,G=i.get(I),X=i.get(E);I.addEventListener("dispose",_);let Z=I.textures,ht=I.isWebGLCubeRenderTarget===!0,ut=Z.length>1;if(ut||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=E.version,o.memory.textures++),ht){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let it=0;it<E.mipmaps.length;it++)G.__webglFramebuffer[j][it]=n.createFramebuffer()}else G.__webglFramebuffer[j]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<E.mipmaps.length;j++)G.__webglFramebuffer[j]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ut)for(let j=0,it=Z.length;j<it;j++){let mt=i.get(Z[j]);mt.__webglTexture===void 0&&(mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Qt(I)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<Z.length;j++){let it=Z[j];G.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[j]);let mt=r.convert(it.format,it.colorSpace),Ot=r.convert(it.type),_t=v(it.internalFormat,mt,Ot,it.normalized,it.colorSpace,I.isXRRenderTarget===!0),gt=Kt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,_t,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,G.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),qt(G.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ht){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),se(n.TEXTURE_CUBE_MAP,E);for(let j=0;j<6;j++)if(E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)wt(G.__webglFramebuffer[j][it],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,it);else wt(G.__webglFramebuffer[j],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(E)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let j=0,it=Z.length;j<it;j++){let mt=Z[j],Ot=i.get(mt),_t=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(_t=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,Ot.__webglTexture),se(_t,mt),wt(G.__webglFramebuffer,I,mt,n.COLOR_ATTACHMENT0+j,_t,0),m(mt)&&y(_t)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(j=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,X.__webglTexture),se(j,E),E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)wt(G.__webglFramebuffer[it],I,E,n.COLOR_ATTACHMENT0,j,it);else wt(G.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,j,0);m(E)&&y(j),e.unbindTexture()}I.depthBuffer&&rt(I)}function ct(I){let E=I.textures;for(let G=0,X=E.length;G<X;G++){let Z=E[G];if(m(Z)){let ht=S(I),ut=i.get(Z).__webglTexture;e.bindTexture(ht,ut),y(ht),e.unbindTexture()}}}let dt=[],Wt=[];function Ht(I){if(I.samples>0){if(Qt(I)===!1){let E=I.textures,G=I.width,X=I.height,Z=n.COLOR_BUFFER_BIT,ht=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(I),j=E.length>1;if(j)for(let mt=0;mt<E.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let it=I.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let mt=0;mt<E.length;mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[mt]);let Ot=i.get(E[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ot,0)}n.blitFramebuffer(0,0,G,X,0,0,G,X,Z,n.NEAREST),l===!0&&(dt.length=0,Wt.length=0,dt.push(n.COLOR_ATTACHMENT0+mt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(dt.push(ht),Wt.push(ht),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Wt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let mt=0;mt<E.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,ut.__webglColorRenderbuffer[mt]);let Ot=i.get(E[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Kt(I){return Math.min(s.maxSamples,I.samples)}function Qt(I){let E=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function F(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function be(I,E){let G=I.colorSpace,X=I.format,Z=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==_o&&G!==ai&&(le.getTransfer(G)===_e?(X!==Rn||Z!==An)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",G)),E}function he(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.getTextureUnits=N,this.setTextureUnits=D,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=Q,this.setTextureCube=$,this.rebindTextures=at,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function R_(n,t){function e(i,s=ai){let r,o=le.getTransfer(s);if(i===An)return n.UNSIGNED_BYTE;if(i===jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gu)return n.BYTE;if(i===xu)return n.SHORT;if(i===Ur)return n.UNSIGNED_SHORT;if(i===Jl)return n.INT;if(i===oi)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===Be)return n.HALF_FLOAT;if(i===_u)return n.ALPHA;if(i===bu)return n.RGB;if(i===Rn)return n.RGBA;if(i===yi)return n.DEPTH_COMPONENT;if(i===ls)return n.DEPTH_STENCIL;if(i===tc)return n.RED;if(i===ec)return n.RED_INTEGER;if(i===cs)return n.RG;if(i===nc)return n.RG_INTEGER;if(i===ic)return n.RGBA_INTEGER;if(i===ha||i===ua||i===da||i===fa)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sc||i===rc||i===oc||i===ac)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lc||i===cc||i===hc||i===uc||i===dc||i===pa||i===fc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===lc||i===cc)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===uc)return r.COMPRESSED_R11_EAC;if(i===dc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===pa)return r.COMPRESSED_RG11_EAC;if(i===fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===pc||i===mc||i===gc||i===xc||i===yc||i===vc||i===_c||i===bc||i===Sc||i===Ec||i===Mc||i===Tc||i===wc||i===Ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_c)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ec)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ac)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rc||i===Cc||i===Ic)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Rc)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pc||i===Lc||i===ma||i===Nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
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

}`,$u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Uo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ie({vertexShader:C_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Y(new cn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zu=class extends vi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new $u,m={},y=e.getContextAttributes(),S=null,v=null,b=[],M=[],T=new st,_=null,w=null,R=new ln;R.viewport=new Te;let P=new ln;P.viewport=new Te;let L=[R,P],U=new ql,N=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let tt=b[K];return tt===void 0&&(tt=new yr,b[K]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(K){let tt=b[K];return tt===void 0&&(tt=new yr,b[K]=tt),tt.getGripSpace()},this.getHand=function(K){let tt=b[K];return tt===void 0&&(tt=new yr,b[K]=tt),tt.getHandSpace()};function O(K){let tt=M.indexOf(K.inputSource);if(tt===-1)return;let pt=b[tt];pt!==void 0&&(pt.update(K.inputSource,K.frame,c||o),pt.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",J);for(let K=0;K<b.length;K++){let tt=M[K];tt!==null&&(M[K]=null,b[K].disconnect(tt))}N=null,D=null,g.reset();for(let K in m)delete m[K];if(t.setRenderTarget(S),d=null,f=null,u=null,s=null,v=null,ce.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(T.width,T.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",z),s.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Bt=null,wt=null;y.depth&&(wt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=y.stencil?ls:yi,Bt=y.stencil?Or:oi);let qt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(qt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Fe(f.textureWidth,f.textureHeight,{format:Rn,type:An,depthTexture:new Ji(f.textureWidth,f.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let pt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Fe(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(K){for(let tt=0;tt<K.removed.length;tt++){let pt=K.removed[tt],Bt=M.indexOf(pt);Bt>=0&&(M[Bt]=null,b[Bt].disconnect(pt))}for(let tt=0;tt<K.added.length;tt++){let pt=K.added[tt],Bt=M.indexOf(pt);if(Bt===-1){for(let qt=0;qt<b.length;qt++)if(qt>=M.length){M.push(pt),Bt=qt;break}else if(M[qt]===null){M[qt]=pt,Bt=qt;break}if(Bt===-1)break}let wt=b[Bt];wt&&wt.connect(pt)}}let V=new C,Q=new C;function $(K,tt,pt){V.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(pt.matrixWorld);let Bt=V.distanceTo(Q),wt=tt.projectionMatrix.elements,qt=pt.projectionMatrix.elements,pe=wt[14]/(wt[10]-1),rt=wt[14]/(wt[10]+1),at=(wt[9]+1)/wt[5],lt=(wt[9]-1)/wt[5],ct=(wt[8]-1)/wt[0],dt=(qt[8]+1)/qt[0],Wt=pe*ct,Ht=pe*dt,Kt=Bt/(-ct+dt),Qt=Kt*-ct;if(tt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Qt),K.translateZ(Kt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),wt[10]===-1)K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let F=pe+Kt,be=rt+Kt,he=Wt-Qt,I=Ht+(Bt-Qt),E=at*rt/be*F,G=lt*rt/be*F;K.projectionMatrix.makePerspective(he,I,E,G,F,be),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function At(K,tt){tt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(tt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let tt=K.near,pt=K.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(pt=g.depthFar)),U.near=P.near=R.near=tt,U.far=P.far=R.far=pt,(N!==U.near||D!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),N=U.near,D=U.far),U.layers.mask=K.layers.mask|6,R.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;let Bt=K.parent,wt=U.cameras;At(U,Bt);for(let qt=0;qt<wt.length;qt++)At(wt[qt],Bt);wt.length===2?$(U,R,P):U.projectionMatrix.copy(R.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),St(K,U,Bt)};function St(K,tt,pt){pt===null?K.matrix.copy(tt.matrixWorld):(K.matrix.copy(pt.matrixWorld),K.matrix.invert(),K.matrix.multiply(tt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=gr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(K){return m[K]};let me=null;function se(K,tt){if(h=tt.getViewerPose(c||o),p=tt,h!==null){let pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Bt=!1;pt.length!==U.cameras.length&&(U.cameras.length=0,Bt=!0);for(let rt=0;rt<pt.length;rt++){let at=pt[rt],lt=null;if(d!==null)lt=d.getViewport(at);else{let dt=u.getViewSubImage(f,at);lt=dt.viewport,rt===0&&(t.setRenderTargetTextures(v,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(v))}let ct=L[rt];ct===void 0&&(ct=new ln,ct.layers.enable(rt),ct.viewport=new Te,L[rt]=ct),ct.matrix.fromArray(at.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(at.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(lt.x,lt.y,lt.width,lt.height),rt===0&&(U.matrix.copy(ct.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Bt===!0&&U.cameras.push(ct)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let rt=u.getDepthInformation(pt[0]);rt&&rt.isValid&&rt.texture&&g.init(rt,s.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let rt=0;rt<pt.length;rt++){let at=pt[rt].camera;if(at){let lt=m[at];lt||(lt=new Uo,m[at]=lt);let ct=u.getCameraImage(at);lt.sourceTexture=ct}}}}for(let pt=0;pt<b.length;pt++){let Bt=M[pt],wt=b[pt];Bt!==null&&wt!==void 0&&wt.update(Bt,tt,c||o)}me&&me(K,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),p=null}let ce=new Gp;ce.setAnimationLoop(se),this.setAnimationLoop=function(K){me=K},this.dispose=function(){}}},P_=new $t,Yp=new jt;Yp.set(-1,0,0,0,1,0,0,0,1);function L_(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,wu(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,S,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=t.get(m),S=y.envMap,v=y.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Yp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=S*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function N_(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let M=b.program;i.uniformBlockBinding(v,M)}function c(v,b){let M=s[v.id];M===void 0&&(g(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",y));let T=b.program;i.updateUBOMapping(v,T);let _=t.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function h(v){let b=u();v.__bindingPointIndex=b;let M=n.createBuffer(),T=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let b=s[v.id],M=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let _=0,w=M.length;_<w;_++){let R=M[_];if(Array.isArray(R))for(let P=0,L=R.length;P<L;P++)d(R[P],_,P,T);else d(R,_,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,b,M,T){if(x(v,b,M,T)===!0){let _=v.__offset,w=v.value;if(Array.isArray(w)){let R=0;for(let P=0;P<w.length;P++){let L=w[P],U=m(L);p(L,v.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,v.__data)}}function p(v,b,M){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,M)}function x(v,b,M,T){let _=v.value,w=b+"_"+M;if(T[w]===void 0)return typeof _=="number"||typeof _=="boolean"?T[w]=_:ArrayBuffer.isView(_)?T[w]=_.slice():T[w]=_.clone(),!0;{let R=T[w];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return T[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(v){let b=v.uniforms,M=0,T=16;for(let w=0,R=b.length;w<R;w++){let P=Array.isArray(b[w])?b[w]:[b[w]];for(let L=0,U=P.length;L<U;L++){let N=P[L],D=Array.isArray(N.value)?N.value:[N.value];for(let O=0,z=D.length;O<z;O++){let J=D[O],V=m(J),Q=M%T,$=Q%V.boundary,At=Q+$;M+=$,At!==0&&T-At<V.storage&&(M+=T-At),N.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=V.storage}}}let _=M%T;return _>0&&(M+=T-_),v.__size=M,v.__cache={},this}function m(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",v),b}function y(v){let b=v.target;b.removeEventListener("dispose",y);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function S(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:S}}var D_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;function U_(){return Mi===null&&(Mi=new Io(D_,16,16,cs,Be),Mi.name="DFG_LUT",Mi.minFilter=Qe,Mi.magFilter=Qe,Mi.wrapS=Gn,Mi.wrapT=Gn,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var Hc=class{constructor(t={}){let{canvas:e=lp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=An}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=d,g=new Set([ic,nc,ec]),m=new Set([An,oi,Ur,Or,jl,Ql]),y=new Uint32Array(4),S=new Int32Array(4),v=new C,b=null,M=null,T=[],_=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,L=null,U=null,N=null,D=null;this._outputColorSpace=ze;let O=0,z=0,J=null,V=-1,Q=null,$=new Te,At=new Te,St=null,me=new ft(0),se=0,ce=e.width,K=e.height,tt=1,pt=null,Bt=null,wt=new Te(0,0,ce,K),qt=new Te(0,0,ce,K),pe=!1,rt=new Sr,at=!1,lt=!1,ct=new $t,dt=new C,Wt=new Te,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function Qt(){return J===null?tt:1}let F=i;function be(A,k){return e.getContext(A,k)}let he,I,E,G,X,Z,ht,ut,j,it,mt,Ot,_t,gt,Ft,Xt,ee,H,xt,et,yt,Tt,ot;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",Kn,!1),F===null){let k="webgl2";if(F=be(k,A),F===null)throw be(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(A){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",Kn,!1),Yt("WebGLRenderer: "+A.message),A}function kt(){he=new V1(F),he.init(),yt=new R_(F,he),I=new L1(F,he,t,yt),E=new w_(F,he),I.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),U=F.createFramebuffer(),N=F.createFramebuffer(),D=F.createFramebuffer(),G=new X1(F),X=new d_,Z=new A_(F,he,E,X,I,yt,G),ht=new G1(R),ut=new Yg(F),Tt=new I1(F,ut),j=new B1(F,ut,G,Tt),it=new Y1(F,j,ut,Tt,G),H=new q1(F,I,Z),Ft=new N1(X),mt=new u_(R,ht,he,I,Tt,Ft),Ot=new L_(R,X),_t=new p_,gt=new __(he),ee=new C1(R,ht,E,it,p,l),Xt=new T_(R,it,I),ot=new N_(F,G,I,E),xt=new P1(F,he,G),et=new W1(F,he,G),G.programs=mt.programs,R.capabilities=I,R.extensions=he,R.properties=X,R.renderLists=_t,R.shadowMap=Xt,R.state=E,R.info=G}x!==An&&(w=new Z1(x,e.width,e.height,a,s,r));let Dt=new Zu(R,F);this.xr=Dt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=he.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=he.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(A){A!==void 0&&(tt=A,this.setSize(ce,K,!1))},this.getSize=function(A){return A.set(ce,K)},this.setSize=function(A,k,q=!0){if(Dt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=A,K=k,e.width=Math.floor(A*tt),e.height=Math.floor(k*tt),q===!0&&(e.style.width=A+"px",e.style.height=k+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(ce*tt,K*tt).floor()},this.setDrawingBufferSize=function(A,k,q){ce=A,K=k,tt=q,e.width=Math.floor(A*q),e.height=Math.floor(k*q),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(x===An){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy($)},this.getViewport=function(A){return A.copy(wt)},this.setViewport=function(A,k,q,B){A.isVector4?wt.set(A.x,A.y,A.z,A.w):wt.set(A,k,q,B),E.viewport($.copy(wt).multiplyScalar(tt).round())},this.getScissor=function(A){return A.copy(qt)},this.setScissor=function(A,k,q,B){A.isVector4?qt.set(A.x,A.y,A.z,A.w):qt.set(A,k,q,B),E.scissor(At.copy(qt).multiplyScalar(tt).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(A){E.setScissorTest(pe=A)},this.setOpaqueSort=function(A){pt=A},this.setTransparentSort=function(A){Bt=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,q=!0){let B=0;if(A){let W=!1;if(J!==null){let Et=J.texture.format;W=g.has(Et)}if(W){let Et=J.texture.type,Ct=m.has(Et),bt=ee.getClearColor(),It=ee.getClearAlpha(),Ut=bt.r,re=bt.g,ue=bt.b;Ct?(y[0]=Ut,y[1]=re,y[2]=ue,y[3]=It,F.clearBufferuiv(F.COLOR,0,y)):(S[0]=Ut,S[1]=re,S[2]=ue,S[3]=It,F.clearBufferiv(F.COLOR,0,S))}else B|=F.COLOR_BUFFER_BIT}k&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",Kn,!1),ee.dispose(),_t.dispose(),gt.dispose(),X.dispose(),ht.dispose(),it.dispose(),Tt.dispose(),ot.dispose(),mt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Ud),Dt.removeEventListener("sessionend",Od),vs.stop()};function Pe(A){A.preventDefault(),Eo("WebGLRenderer: Context Lost."),P=!0}function Se(){Eo("WebGLRenderer: Context Restored."),P=!1;let A=G.autoReset,k=Xt.enabled,q=Xt.autoUpdate,B=Xt.needsUpdate,W=Xt.type;kt(),G.autoReset=A,Xt.enabled=k,Xt.autoUpdate=q,Xt.needsUpdate=B,Xt.type=W}function Kn(A){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function di(A){let k=A.target;k.removeEventListener("dispose",di),dm(k)}function dm(A){fm(A),X.remove(A)}function fm(A){let k=X.get(A).programs;k!==void 0&&(k.forEach(function(q){mt.releaseProgram(q)}),A.isShaderMaterial&&mt.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,q,B,W,Et){k===null&&(k=Ht);let Ct=W.isMesh&&W.matrixWorld.determinantAffine()<0,bt=gm(A,k,q,B,W);E.setMaterial(B,Ct);let It=q.index,Ut=1;if(B.wireframe===!0){if(It=j.getWireframeAttribute(q),It===void 0)return;Ut=2}let re=q.drawRange,ue=q.attributes.position,Pt=re.start*Ut,Ee=(re.start+re.count)*Ut;Et!==null&&(Pt=Math.max(Pt,Et.start*Ut),Ee=Math.min(Ee,(Et.start+Et.count)*Ut)),It!==null?(Pt=Math.max(Pt,0),Ee=Math.min(Ee,It.count)):ue!=null&&(Pt=Math.max(Pt,0),Ee=Math.min(Ee,ue.count));let Ze=Ee-Pt;if(Ze<0||Ze===1/0)return;Tt.setup(W,B,bt,q,It);let De,Ce=xt;if(It!==null&&(De=ut.get(It),Ce=et,Ce.setIndex(De)),W.isMesh)B.wireframe===!0?(E.setLineWidth(B.wireframeLinewidth*Qt()),Ce.setMode(F.LINES)):Ce.setMode(F.TRIANGLES);else if(W.isLine){let pn=B.linewidth;pn===void 0&&(pn=1),E.setLineWidth(pn*Qt()),W.isLineSegments?Ce.setMode(F.LINES):W.isLineLoop?Ce.setMode(F.LINE_LOOP):Ce.setMode(F.LINE_STRIP)}else W.isPoints?Ce.setMode(F.POINTS):W.isSprite&&Ce.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Ce.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let pn=W._multiDrawStarts,Rt=W._multiDrawCounts,Sn=W._multiDrawCount,ye=It?ut.get(It).bytesPerElement:1,Hn=X.get(B).currentProgram.getUniforms();for(let fi=0;fi<Sn;fi++)Hn.setValue(F,"_gl_DrawID",fi),Ce.render(pn[fi]/ye,Rt[fi])}else if(W.isInstancedMesh)Ce.renderInstances(Pt,Ze,W.count);else if(q.isInstancedBufferGeometry){let pn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Rt=Math.min(q.instanceCount,pn);Ce.renderInstances(Pt,Ze,Rt)}else Ce.render(Pt,Ze)};function Dd(A,k,q,B){L!==null&&A.isNodeMaterial&&L.setObject(B,A),at===!0&&Ft.setState(A,q,!1),A.transparent===!0&&A.side===Ye&&A.forceSinglePass===!1?(A.side=qe,A.needsUpdate=!0,Ua(A,k,B),A.side=os,A.needsUpdate=!0,Ua(A,k,B),A.side=Ye):Ua(A,k,B)}this.compile=function(A,k,q=null){q===null&&(q=A),L!==null&&L.renderStart(A,k,q),M=gt.get(q),M.init(k),_.push(M),q.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),A!==q&&A.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),lt=this.localClippingEnabled,at=Ft.init(this.clippingPlanes,lt),at===!0&&Ft.setGlobalState(this.clippingPlanes,k),L!==null&&Xt.render(M.state.shadowsArray,q,k);let B=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Et=W.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){let bt=Et[Ct];Dd(bt,q,k,W),B.add(bt)}else Dd(Et,q,k,W),B.add(Et)}),M=_.pop(),L!==null&&L.renderEnd(),B},this.compileAsync=function(A,k,q=null){let B=this.compile(A,k,q);return new Promise(W=>{function Et(){if(B.forEach(function(Ct){let It=X.get(Ct).currentProgram;(It===void 0||It.isReady())&&B.delete(Ct)}),B.size===0){W(A);return}setTimeout(Et,10)}he.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Sh=null;function pm(A){Sh&&Sh(A)}function Ud(){vs.stop()}function Od(){vs.start()}let vs=new Gp;vs.setAnimationLoop(pm),typeof self<"u"&&vs.setContext(self),this.setAnimationLoop=function(A){Sh=A,Dt.setAnimationLoop(A),A===null?vs.stop():vs.start()},Dt.addEventListener("sessionstart",Ud),Dt.addEventListener("sessionend",Od),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(A,k);let q=Dt.enabled===!0&&Dt.isPresenting===!0,B=w!==null&&(J===null||q)&&w.begin(R,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(k),k=Dt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,k,J),M=gt.get(A,_.length),M.init(k),M.state.textureUnits=Z.getTextureUnits(),_.push(M),ct.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),rt.setFromProjectionMatrix(ct,ei,k.reversedDepth),lt=this.localClippingEnabled,at=Ft.init(this.clippingPlanes,lt),b=_t.get(A,T.length),b.init(),T.push(b),Dt.enabled===!0&&Dt.isPresenting===!0){let Ct=R.xr.getDepthSensingMesh();Ct!==null&&Eh(Ct,k,-1/0,R.sortObjects)}Eh(A,k,0,R.sortObjects),b.finish(),L!==null&&L.updateLights(M.state.lightsArray),R.sortObjects===!0&&b.sort(pt,Bt),Kt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Kt&&ee.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Ft.beginShadows();let W=M.state.shadowsArray;if(Xt.render(W,A,k),at===!0&&Ft.endShadows(),(B&&w.hasRenderPass())===!1){let Ct=b.opaque,bt=b.transmissive;if(M.setupLights(),k.isArrayCamera){let It=k.cameras;if(bt.length>0)for(let Ut=0,re=It.length;Ut<re;Ut++){let ue=It[Ut];kd(Ct,bt,A,ue)}Kt&&ee.render(A);for(let Ut=0,re=It.length;Ut<re;Ut++){let ue=It[Ut];Fd(b,A,ue,ue.viewport)}}else bt.length>0&&kd(Ct,bt,A,k),Kt&&ee.render(A),Fd(b,A,k)}J!==null&&z===0&&(Z.updateMultisampleRenderTarget(J),Z.updateRenderTargetMipmap(J)),B&&w.end(R),A.isScene===!0&&A.onAfterRender(R,A,k),Tt.resetDefaultState(),V=-1,Q=null,_.pop(),_.length>0?(M=_[_.length-1],Z.setTextureUnits(M.state.textureUnits),at===!0&&Ft.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?b=T[T.length-1]:b=null,L!==null&&L.renderEnd()};function Eh(A,k,q,B){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(rt)){B&&Wt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ct);let Ct=it.update(A),bt=A.material;bt.visible&&b.push(A,Ct,bt,q,Wt.z,null,k)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(rt))){let Ct=it.update(A),bt=A.material;if(B&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Wt.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Wt.copy(Ct.boundingSphere.center)),Wt.applyMatrix4(A.matrixWorld).applyMatrix4(ct)),Array.isArray(bt)){let It=Ct.groups;for(let Ut=0,re=It.length;Ut<re;Ut++){let ue=It[Ut],Pt=bt[ue.materialIndex];Pt&&Pt.visible&&b.push(A,Ct,Pt,q,Wt.z,ue,k)}}else bt.visible&&b.push(A,Ct,bt,q,Wt.z,null,k)}}let Et=A.children;for(let Ct=0,bt=Et.length;Ct<bt;Ct++)Eh(Et[Ct],k,q,B)}function Fd(A,k,q,B){let{opaque:W,transmissive:Et,transparent:Ct}=A;M.setupLightsView(q),at===!0&&Ft.setGlobalState(R.clippingPlanes,q),B&&E.viewport($.copy(B)),W.length>0&&Da(W,k,q),Et.length>0&&Da(Et,k,q),Ct.length>0&&Da(Ct,k,q),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function kd(A,k,q,B){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[B.id]===void 0){let Pt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[B.id]=new Fe(1,1,{generateMipmaps:!0,type:Pt?Be:An,minFilter:wn,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let Et=M.state.transmissionRenderTarget[B.id],Ct=B.viewport||$;Et.setSize(Ct.z*R.transmissionResolutionScale,Ct.w*R.transmissionResolutionScale);let bt=R.getRenderTarget(),It=R.getActiveCubeFace(),Ut=R.getActiveMipmapLevel();R.setRenderTarget(Et),R.getClearColor(me),se=R.getClearAlpha(),se<1&&R.setClearColor(16777215,.5),R.clear(),Kt&&ee.render(q);let re=R.toneMapping;R.toneMapping=ri;let ue=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),M.setupLightsView(B),at===!0&&Ft.setGlobalState(R.clippingPlanes,B),Da(A,q,B),Z.updateMultisampleRenderTarget(Et),Z.updateRenderTargetMipmap(Et),he.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Ee=0,Ze=k.length;Ee<Ze;Ee++){let De=k[Ee],{object:Ce,geometry:pn,material:Rt,group:Sn}=De;if(Rt.side===Ye&&Ce.layers.test(B.layers)){let ye=Rt.side;Rt.side=qe,Rt.needsUpdate=!0,Hd(Ce,q,B,pn,Rt,Sn),Rt.side=ye,Rt.needsUpdate=!0,Pt=!0}}Pt===!0&&(Z.updateMultisampleRenderTarget(Et),Z.updateRenderTargetMipmap(Et))}R.setRenderTarget(bt,It,Ut),R.setClearColor(me,se),ue!==void 0&&(B.viewport=ue),R.toneMapping=re}function Da(A,k,q){let B=k.isScene===!0?k.overrideMaterial:null;for(let W=0,Et=A.length;W<Et;W++){let Ct=A[W],{object:bt,geometry:It,group:Ut}=Ct,re=Ct.material;re.allowOverride===!0&&B!==null&&(re=B),bt.layers.test(q.layers)&&Hd(bt,k,q,It,re,Ut)}}function Hd(A,k,q,B,W,Et){L!==null&&W.isNodeMaterial&&L.setObject(A,W),A.onBeforeRender(R,k,q,B,W,Et),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(R,k,q,B,A,Et),W.transparent===!0&&W.side===Ye&&W.forceSinglePass===!1?(W.side=qe,W.needsUpdate=!0,R.renderBufferDirect(q,k,B,W,A,Et),W.side=os,W.needsUpdate=!0,R.renderBufferDirect(q,k,B,W,A,Et),W.side=Ye):R.renderBufferDirect(q,k,B,W,A,Et),A.onAfterRender(R,k,q,B,W,Et)}function Ua(A,k,q){k.isScene!==!0&&(k=Ht);let B=X.get(A),W=M.state.lights,Et=M.state.shadowsArray,Ct=W.state.version,bt=mt.getParameters(A,W.state,Et,k,q,M.state.lightProbeGridArray),It=mt.getProgramCacheKey(bt),Ut=B.programs;B.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,B.fog=k.fog;let re=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;B.envMap=ht.get(A.envMap||B.environment,re),B.envMapRotation=B.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ut===void 0&&(A.addEventListener("dispose",di),Ut=new Map,B.programs=Ut);let ue=Ut.get(It);if(ue!==void 0){if(B.currentProgram===ue&&B.lightsStateVersion===Ct)return Gd(A,bt),ue}else bt.uniforms=mt.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,q,bt),A.onBeforeCompile(bt,R),ue=mt.acquireProgram(bt,It),Ut.set(It,ue),B.uniforms=bt.uniforms;let Pt=B.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pt.clippingPlanes=Ft.uniform),Gd(A,bt),B.needsLights=ym(A),B.lightsStateVersion=Ct,B.needsLights&&(Pt.ambientLightColor.value=W.state.ambient,Pt.lightProbe.value=W.state.probe,Pt.sunLights.value=W.state.sun,Pt.sunLightShadows.value=W.state.sunShadow,Pt.directionalLights.value=W.state.directional,Pt.directionalLightShadows.value=W.state.directionalShadow,Pt.spotLights.value=W.state.spot,Pt.spotLightShadows.value=W.state.spotShadow,Pt.rectAreaLights.value=W.state.rectArea,Pt.ltc_1.value=W.state.rectAreaLTC1,Pt.ltc_2.value=W.state.rectAreaLTC2,Pt.pointLights.value=W.state.point,Pt.pointLightShadows.value=W.state.pointShadow,Pt.hemisphereLights.value=W.state.hemi,Pt.sunShadowMatrix.value=W.state.sunShadowMatrix,Pt.sunShadowCascade.value=W.state.sunShadowCascade,Pt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pt.spotLightMatrix.value=W.state.spotLightMatrix,Pt.spotLightMap.value=W.state.spotLightMap,Pt.pointShadowMatrix.value=W.state.pointShadowMatrix),B.lightProbeGrid=M.state.lightProbeGridArray.length>0,B.currentProgram=ue,B.uniformsList=null,ue}function zd(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=Hr.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Gd(A,k){let q=X.get(A);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function mm(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let q=0,B=A.length;q<B;q++){let W=A[q];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function gm(A,k,q,B,W){k.isScene!==!0&&(k=Ht),Z.resetTextureUnits();let Et=k.fog,Ct=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?k.environment:null,bt=J===null?R.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:le.workingColorSpace,It=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ut=ht.get(B.envMap||Ct,It),re=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ue=!!q.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pt=!!q.morphAttributes.position,Ee=!!q.morphAttributes.normal,Ze=!!q.morphAttributes.color,De=ri;B.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(De=R.toneMapping);let Ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pn=Ce!==void 0?Ce.length:0,Rt=X.get(B),Sn=M.state.lights;if(at===!0&&(lt===!0||A!==Q)){let Le=A===Q&&B.id===V;Ft.setState(B,A,Le)}let ye=!1;B.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Sn.state.version||Rt.outputColorSpace!==bt||W.isBatchedMesh&&Rt.batching===!1||!W.isBatchedMesh&&Rt.batching===!0||W.isBatchedMesh&&Rt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Rt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Rt.instancing===!1||!W.isInstancedMesh&&Rt.instancing===!0||W.isSkinnedMesh&&Rt.skinning===!1||!W.isSkinnedMesh&&Rt.skinning===!0||W.isInstancedMesh&&Rt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Rt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Rt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Rt.instancingMorph===!1&&W.morphTexture!==null||Rt.envMap!==Ut||B.fog===!0&&Rt.fog!==Et||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Ft.numPlanes||Rt.numIntersection!==Ft.numIntersection)||Rt.vertexAlphas!==re||Rt.vertexTangents!==ue||Rt.morphTargets!==Pt||Rt.morphNormals!==Ee||Rt.morphColors!==Ze||Rt.toneMapping!==De||Rt.morphTargetsCount!==pn||!!Rt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ye=!0):(ye=!0,Rt.__version=B.version);let Hn=Rt.currentProgram;ye===!0&&(Hn=Ua(B,k,W),L&&B.isNodeMaterial&&L.onUpdateProgram(B,Hn,Rt));let fi=!1,Gi=!1,Bs=!1,Ae=Hn.getUniforms(),We=Rt.uniforms;if(E.useProgram(Hn.program)&&(fi=!0,Gi=!0,Bs=!0),B.id!==V&&(V=B.id,Gi=!0),Rt.needsLights){let Le=mm(M.state.lightProbeGridArray,W);Rt.lightProbeGrid!==Le&&(Rt.lightProbeGrid=Le,Gi=!0)}if(fi||Q!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ae.setValue(F,"projectionMatrix",A.projectionMatrix),Ae.setValue(F,"viewMatrix",A.matrixWorldInverse);let Bi=Ae.map.cameraPosition;Bi!==void 0&&Bi.setValue(F,dt.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&Ae.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ae.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,Gi=!0,Bs=!0)}if(Rt.needsLights&&(Sn.state.sunShadowMap.length>0&&Ae.setValue(F,"sunShadowMap",Sn.state.sunShadowMap,Z),Sn.state.directionalShadowMap.length>0&&Ae.setValue(F,"directionalShadowMap",Sn.state.directionalShadowMap,Z),Sn.state.spotShadowMap.length>0&&Ae.setValue(F,"spotShadowMap",Sn.state.spotShadowMap,Z),Sn.state.pointShadowMap.length>0&&Ae.setValue(F,"pointShadowMap",Sn.state.pointShadowMap,Z)),W.isSkinnedMesh){Ae.setOptional(F,W,"bindMatrix"),Ae.setOptional(F,W,"bindMatrixInverse");let Le=W.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Ae.setValue(F,"boneTexture",Le.boneTexture,Z))}W.isBatchedMesh&&(Ae.setOptional(F,W,"batchingTexture"),Ae.setValue(F,"batchingTexture",W._matricesTexture,Z),Ae.setOptional(F,W,"batchingIdTexture"),Ae.setValue(F,"batchingIdTexture",W._indirectTexture,Z),Ae.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&Ae.setValue(F,"batchingColorTexture",W._colorsTexture,Z));let Vi=q.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&H.update(W,q,Hn),(Gi||Rt.receiveShadow!==W.receiveShadow)&&(Rt.receiveShadow=W.receiveShadow,Ae.setValue(F,"receiveShadow",W.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&k.environment!==null&&(We.envMapIntensity.value=k.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=U_()),Gi){if(Ae.setValue(F,"toneMappingExposure",R.toneMappingExposure),Rt.needsLights&&xm(We,Bs),Et&&B.fog===!0&&Ot.refreshFogUniforms(We,Et),Ot.refreshMaterialUniforms(We,B,tt,K,M.state.transmissionRenderTarget[A.id]),Rt.needsLights&&Rt.lightProbeGrid){let Le=Rt.lightProbeGrid;We.probesSH.value=Le.texture,We.probesMin.value.copy(Le.boundingBox.min),We.probesMax.value.copy(Le.boundingBox.max),We.probesResolution.value.copy(Le.resolution)}Hr.upload(F,zd(Rt),We,Z)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Hr.upload(F,zd(Rt),We,Z),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ae.setValue(F,"center",W.center),Ae.setValue(F,"modelViewMatrix",W.modelViewMatrix),Ae.setValue(F,"normalMatrix",W.normalMatrix),Ae.setValue(F,"modelMatrix",W.matrixWorld),B.uniformsGroups!==void 0){let Le=B.uniformsGroups;for(let Bi=0,Ws=Le.length;Bi<Ws;Bi++){let Bd=Le[Bi];ot.update(Bd,Hn),ot.bind(Bd,Hn)}}return Hn}function xm(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function ym(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,k,q){let B=X.get(A);B.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),X.get(A.texture).__webglTexture=k,X.get(A.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:q,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let q=X.get(A);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,q=0){J=A,O=k,z=q;let B=null,W=!1,Et=!1;if(A){let bt=X.get(A);if(bt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(F.FRAMEBUFFER,bt.__webglFramebuffer),$.copy(A.viewport),At.copy(A.scissor),St=A.scissorTest,E.viewport($),E.scissor(At),E.setScissorTest(St),V=-1;return}else if(bt.__webglFramebuffer===void 0)Z.setupRenderTarget(A);else if(bt.__hasExternalTextures)Z.rebindTextures(A,X.get(A.texture).__webglTexture,X.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let re=A.depthTexture;if(bt.__boundDepthTexture!==re){if(re!==null&&X.has(re)&&(A.width!==re.image.width||A.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(A)}}let It=A.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Et=!0);let Ut=X.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ut[k])?B=Ut[k][q]:B=Ut[k],W=!0):A.samples>0&&Z.useMultisampledRTT(A)===!1?B=X.get(A).__webglMultisampledFramebuffer:Array.isArray(Ut)?B=Ut[q]:B=Ut,$.copy(A.viewport),At.copy(A.scissor),St=A.scissorTest}else $.copy(wt).multiplyScalar(tt).floor(),At.copy(qt).multiplyScalar(tt).floor(),St=pe;if(q!==0&&(B=U),E.bindFramebuffer(F.FRAMEBUFFER,B)&&E.drawBuffers(A,B),E.viewport($),E.scissor(At),E.setScissorTest(St),W){let bt=X.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,bt.__webglTexture,q)}else if(Et){let bt=k;for(let It=0;It<A.textures.length;It++){let Ut=X.get(A.textures[It]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+It,Ut.__webglTexture,q,bt)}}else if(A!==null&&q!==0){let bt=X.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,bt.__webglTexture,q)}V=-1};function Vd(A){let k=X.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=I.textureFormatReadable(A.format),k.__typeReadable=I.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,q,B,W,Et,Ct,bt=0){if(!(A&&A.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){E.bindFramebuffer(F.FRAMEBUFFER,It);try{let Ut=A.textures[bt],re=Ut.format,ue=Ut.type;A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+bt);let Pt=Vd(Ut);if(Pt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-B&&q>=0&&q<=A.height-W&&F.readPixels(k,q,B,W,yt.convert(re),yt.convert(ue),Et)}finally{let Ut=J!==null?X.get(J).__webglFramebuffer:null;E.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(A,k,q,B,W,Et,Ct,bt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It)if(k>=0&&k<=A.width-B&&q>=0&&q<=A.height-W){E.bindFramebuffer(F.FRAMEBUFFER,It);let Ut=A.textures[bt],re=Ut.format,ue=Ut.type;A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+bt);let Pt=Vd(Ut);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ee),F.bufferData(F.PIXEL_PACK_BUFFER,Et.byteLength,F.STREAM_READ),F.readPixels(k,q,B,W,yt.convert(re),yt.convert(ue),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ze=J!==null?X.get(J).__webglFramebuffer:null;E.bindFramebuffer(F.FRAMEBUFFER,Ze);let De=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await hp(F,De,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Et),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ee),F.deleteSync(De),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,q=0){let B=Math.pow(2,-q),W=Math.floor(A.image.width*B),Et=Math.floor(A.image.height*B),Ct=k!==null?k.x:0,bt=k!==null?k.y:0;Z.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,Ct,bt,W,Et),E.unbindTexture()},this.copyTextureToTexture=function(A,k,q=null,B=null,W=0,Et=0){let Ct,bt,It,Ut,re,ue,Pt,Ee,Ze,De=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(q!==null)Ct=q.max.x-q.min.x,bt=q.max.y-q.min.y,It=q.isBox3?q.max.z-q.min.z:1,Ut=q.min.x,re=q.min.y,ue=q.isBox3?q.min.z:0;else{let We=Math.pow(2,-W);Ct=Math.floor(De.width*We),bt=Math.floor(De.height*We),A.isDataArrayTexture?It=De.depth:A.isData3DTexture?It=Math.floor(De.depth*We):It=1,Ut=0,re=0,ue=0}B!==null?(Pt=B.x,Ee=B.y,Ze=B.z):(Pt=0,Ee=0,Ze=0);let Ce=yt.convert(k.format),pn=yt.convert(k.type),Rt;k.isData3DTexture?(Z.setTexture3D(k,0),Rt=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Z.setTexture2DArray(k,0),Rt=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(k,0),Rt=F.TEXTURE_2D),E.activeTexture(F.TEXTURE0),E.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),E.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),E.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let Sn=E.getParameter(F.UNPACK_ROW_LENGTH),ye=E.getParameter(F.UNPACK_IMAGE_HEIGHT),Hn=E.getParameter(F.UNPACK_SKIP_PIXELS),fi=E.getParameter(F.UNPACK_SKIP_ROWS),Gi=E.getParameter(F.UNPACK_SKIP_IMAGES);E.pixelStorei(F.UNPACK_ROW_LENGTH,De.width),E.pixelStorei(F.UNPACK_IMAGE_HEIGHT,De.height),E.pixelStorei(F.UNPACK_SKIP_PIXELS,Ut),E.pixelStorei(F.UNPACK_SKIP_ROWS,re),E.pixelStorei(F.UNPACK_SKIP_IMAGES,ue);let Bs=A.isDataArrayTexture||A.isData3DTexture,Ae=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let We=X.get(A),Vi=X.get(k),Le=X.get(We.__renderTarget),Bi=X.get(Vi.__renderTarget);E.bindFramebuffer(F.READ_FRAMEBUFFER,Le.__webglFramebuffer),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Ws=0;Ws<It;Ws++)Bs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(A).__webglTexture,W,ue+Ws),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(k).__webglTexture,Et,Ze+Ws)),F.blitFramebuffer(Ut,re,Ct,bt,Pt,Ee,Ct,bt,F.DEPTH_BUFFER_BIT,F.NEAREST);E.bindFramebuffer(F.READ_FRAMEBUFFER,null),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||X.has(A)){let We=X.get(A),Vi=X.get(k);E.bindFramebuffer(F.READ_FRAMEBUFFER,N),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,D);for(let Le=0;Le<It;Le++)Bs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,We.__webglTexture,W,ue+Le):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,We.__webglTexture,W),Ae?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vi.__webglTexture,Et,Ze+Le):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Vi.__webglTexture,Et),W!==0?F.blitFramebuffer(Ut,re,Ct,bt,Pt,Ee,Ct,bt,F.COLOR_BUFFER_BIT,F.NEAREST):Ae?F.copyTexSubImage3D(Rt,Et,Pt,Ee,Ze+Le,Ut,re,Ct,bt):F.copyTexSubImage2D(Rt,Et,Pt,Ee,Ut,re,Ct,bt);E.bindFramebuffer(F.READ_FRAMEBUFFER,null),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ae?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Rt,Et,Pt,Ee,Ze,Ct,bt,It,Ce,pn,De.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Rt,Et,Pt,Ee,Ze,Ct,bt,It,Ce,De.data):F.texSubImage3D(Rt,Et,Pt,Ee,Ze,Ct,bt,It,Ce,pn,De):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Et,Pt,Ee,Ct,bt,Ce,pn,De.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Et,Pt,Ee,De.width,De.height,Ce,De.data):F.texSubImage2D(F.TEXTURE_2D,Et,Pt,Ee,Ct,bt,Ce,pn,De);E.pixelStorei(F.UNPACK_ROW_LENGTH,Sn),E.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye),E.pixelStorei(F.UNPACK_SKIP_PIXELS,Hn),E.pixelStorei(F.UNPACK_SKIP_ROWS,fi),E.pixelStorei(F.UNPACK_SKIP_IMAGES,Gi),Et===0&&k.generateMipmaps&&F.generateMipmap(Rt),E.unbindTexture()},this.initRenderTarget=function(A){X.get(A).__webglFramebuffer===void 0&&Z.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Z.setTextureCube(A,0):A.isData3DTexture?Z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Z.setTexture2DArray(A,0):Z.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){O=0,z=0,J=null,E.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Br=class n extends Y{constructor(){let t=n.SkyShader,e=new Ie({name:t.name,uniforms:Tn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:qe,depthWrite:!1});super(new Gt(1,1,1),e),this.isSky=!0}};Br.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new C},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var Wr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var On=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},O_=new rs(-1,1,1,-1,0,1),Ju=class extends de{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}},F_=new Ju,hs=class{constructor(t){this._mesh=new Y(F_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,O_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Xr=class extends On{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ie?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Tn.clone(t.uniforms),this.material=new Ie({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new hs(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var va=class extends On{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Vc=class extends On{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Bc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new st);this._width=i.width,this._height=i.height,e=new Fe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Be}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xr(Wr),this.copyPass.material.blending=Wn,this.timer=new ea}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}va!==void 0&&(o instanceof va?i=!0:o instanceof Vc&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Wc=class extends On{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ft}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var $p={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var qr=class n extends On{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new ft(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Fe(r,o,{type:Be,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Fe(r,o,{type:Be,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Fe(r,o,{type:Be,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=$p;this.highPassUniforms=Tn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ie({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new st(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Tn.clone(Wr.uniforms),this.blendMaterial=new Ie({uniforms:this.copyUniforms,vertexShader:Wr.vertexShader,fragmentShader:Wr.fragmentShader,premultipliedAlpha:!0,blending:hn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ft,this._oldClearAlpha=1,this._basic=new ke,this._fsQuad=new hs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new st(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Ie({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Ie({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};qr.BlurDirectionX=new st(1,0);qr.BlurDirectionY=new st(0,1);var _a={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Xc=class extends On{constructor(){super(),this.isOutputPass=!0,this.uniforms=Tn.clone(_a.uniforms),this.material=new Cr({name:_a.name,uniforms:this.uniforms,vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader}),this._fsQuad=new hs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ia?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ra?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Is?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===aa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===la?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===oa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ne=Math.PI*2,Lt=Math.tan(Math.PI/8),Fn=Math.cos(Math.PI/8),dn=(n,t,e)=>Math.max(t,Math.min(e,n)),k_=(n,t,e)=>n+(t-n)*e;var ba=(n,t,e,i)=>k_(n,t,1-Math.exp(-e*i));function He(n=1){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var li={WATER:0,SVC:2,D1:6,C1:11.4,D2:12,C2:17.4,D3:18},nt={ATRIUM:22,COR:27,RING1:42,DECK:56.5,HULL:54,L2IN:24,L2OUT:34,DOME:25};function Ue(n){return n*Math.PI/4}function Re(n,t,e){let i=Ue(n),s=Math.cos(i),r=Math.sin(i);return[t*s+e*r,-t*r+e*s]}function Zp(n,t,e){let i=Ue(n),s=Math.cos(i),r=Math.sin(i);return[t*s-e*r,t*r+e*s]}function Kp(n,t){let e=-1e9;for(let i=0;i<8;i++){let s=i*Math.PI/4;e=Math.max(e,n*Math.sin(s)+t*Math.cos(s))}return e}function Jp(n,t){let e=Math.atan2(n,t);return(Math.round(e/(Math.PI/4))%8+8)%8}function Zt(n,t=0,e=0){let i=n/Fn,s=[];for(let r=0;r<8;r++){let o=(r+.5)*Math.PI/4;s.push([t+i*Math.sin(o),e+i*Math.cos(o)])}return s}function vn(n,t,e=0,i=0,s=0){let r=[];for(let o=0;o<t;o++){let a=s+o/t*Ne;r.push([e+n*Math.sin(a),i+n*Math.cos(a)])}return r}function ju(n,t=[],e=-1){let i=new si(n.map(([s,r])=>new st(s,e*r)));for(let s of t)i.holes.push(new ws(s.map(([r,o])=>new st(r,e*o))));return i}function jp(n,t=[],e=!1,i=12){if(e){let r=new ts(ju(n,t,1),i);return r.rotateX(Math.PI/2),r}let s=new ts(ju(n,t,-1),i);return s.rotateX(-Math.PI/2),s}function Qp(n,t=[],e=.5,i=12,s=!0){let r=new Ei(ju(n,t),{depth:e,bevelEnabled:!1,curveSegments:i});if(r.rotateX(-Math.PI/2),!s){r.index&&(r=r.toNonIndexed());let o=r.attributes.position.array,a=[];for(let c=0;c<o.length/9;c++)o[c*9+1]>e-1e-4&&o[c*9+4]>e-1e-4&&o[c*9+7]>e-1e-4||a.push(c);let l=r.clone();for(let[c,h]of Object.entries(r.attributes)){let u=h.itemSize*3,f=new Float32Array(a.length*u);a.forEach((d,p)=>f.set(h.array.subarray(d*u,d*u+u),p*u)),l.setAttribute(c,new ge(f,h.itemSize))}l.clearGroups(),r=l}return r}function Qu(n,t,e){let i=!1;for(let s=0,r=n.length-1;s<n.length;r=s++){let o=n[s][0],a=n[s][1],l=n[r][0],c=n[r][1];a>e!=c>e&&t<(l-o)*(e-a)/(c-a+1e-12)+o&&(i=!i)}return i}function t0(n){n=Math.floor(n);let t=Math.floor(n/60),e=n%60;return t+":"+String(e).padStart(2,"0")}var Sa=new C(.8,.52,-.3).normalize(),td=new ft(11125462),H_={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.32},uGrain:{value:.035}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`};function e0(n){let t=new Hc({canvas:n,antialias:!1,powerPreference:"high-performance",stencil:!1});return t.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.setSize(window.innerWidth,window.innerHeight,!1),t.toneMapping=Is,t.toneMappingExposure=.62,t.outputColorSpace=ze,t.shadowMap.enabled=!0,t.shadowMap.type=Rs,t}function n0(n,t){let e=new Br;e.scale.setScalar(9e3);let i=e.material.uniforms;i.turbidity.value=3.2,i.rayleigh.value=1.7,i.mieCoefficient.value=.0035,i.mieDirectionalG.value=.8,i.sunPosition.value.copy(Sa).multiplyScalar(1e3),i.cloudCoverage&&(i.cloudCoverage.value=.42,i.cloudDensity.value=.5,i.cloudScale.value=22e-5,i.cloudElevation.value=.55,i.cloudSpeed.value=1e-5),e.frustumCulled=!1,e.name="sky",e.material.fragmentShader=e.material.fragmentShader.replace("gl_FragColor = vec4( texColor, 1.0 );","gl_FragColor = vec4( texColor, 0.0 );"),e.material.needsUpdate=!0,n.add(e);let s=new Bn,r=new Br;r.scale.setScalar(9e3);for(let f in i)r.material.uniforms[f]&&(r.material.uniforms[f].value=i[f].value&&i[f].value.clone?i[f].value.clone():i[f].value);r.material.uniforms.showSunDisc&&(r.material.uniforms.showSunDisc.value=0);let o=r.material.uniforms;o.mieCoefficient.value=6e-4,o.mieDirectionalG.value=.55,o.turbidity.value=3,s.add(r);let a=new Y(new ie(4e3,4e3,900,32,1,!0),new ke({color:td.clone().multiplyScalar(1.6),side:qe,transparent:!0,opacity:.55,depthWrite:!1}));a.position.y=-100,s.add(a);let l=new Gr(256,{type:Be,generateMipmaps:!0,minFilter:wn});new Pr(1,2e4,l).update(t,s);let u=new zr(t).fromScene(s,0,1,2e4);return n.environment=u.texture,n.environmentIntensity=.85,{sky:e,envCube:l.texture,envMap:u.texture}}function i0(n){let t=new ta(16773340,3.4);t.position.copy(Sa).multiplyScalar(200),t.castShadow=!0,t.shadow.mapSize.set(4096,4096);let e=t.shadow.camera;e.left=-75,e.right=75,e.top=75,e.bottom=-75,e.near=1,e.far=520,t.shadow.bias=-4e-4,t.shadow.normalBias=.04,n.add(t),n.add(t.target);let i=new Ko(13625087,1913920,.3);n.add(i);let s=new C;return{sun:t,hemi:i,follow(r){let o=(e.right-e.left)/t.shadow.mapSize.x;s.set(Math.round(r.x/o)*o,Math.round(r.y/o)*o*0+8,Math.round(r.z/o)*o),t.target.position.copy(s),t.position.copy(s).addScaledVector(Sa,260)},setShadowSize(r){if(!r){t.castShadow=!1;return}t.castShadow=!0,t.shadow.mapSize.x!==r&&(t.shadow.mapSize.set(r,r),t.shadow.map&&(t.shadow.map.dispose(),t.shadow.map=null))}}}function s0(n,t){let e=He(77),i=new te;i.name="mist";let s=new ii({map:t,color:13227742,transparent:!0,opacity:.2,depthWrite:!1,fog:!1}),r=[];for(let o=0;o<70;o++){let a=e()*Math.PI*2,l=260+Math.pow(e(),.7)*900,c=new Si(s.clone()),h=120+e()*260;c.scale.set(h*2.2,h*.55,1),c.position.set(Math.sin(a)*l,4+e()*26,Math.cos(a)*l),c.material.opacity=.05+e()*.09,c.material.rotation=(e()-.5)*.2,c.userData={base:c.material.opacity,drift:.6+e()*1.2,a,d:l},i.add(c),r.push(c)}return n.add(i),{group:i,update(o,a){for(let l of r){l.userData.a+=o*l.userData.drift/l.userData.d,l.position.x=Math.sin(l.userData.a)*l.userData.d,l.position.z=Math.cos(l.userData.a)*l.userData.d;let c=l.position.distanceTo(a.position);l.material.opacity=l.userData.base*Math.min(1,Math.max(0,(c-180)/260))}}}}function r0(n,t,e){let i=n.getDrawingBufferSize(new st),s=new Fe(i.x,i.y,{type:Be,samples:4}),r=new Bc(n,s),o=new Wc(t,e);r.addPass(o);let a=new qr(new st(i.x,i.y),.42,.18,3);a.materialHighPassFilter.fragmentShader=`
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
    }`,a.materialHighPassFilter.needsUpdate=!0,a.highPassUniforms.smoothWidth.value=1.5,a.compositeMaterial.uniforms.bloomFactors.value=[1,.75,.4,.16,.05],r.addPass(a),r.addPass(new Xc);let l=new Xr(H_);return r.addPass(l),{composer:r,bloom:a,grade:l,rt:s}}var rn=He(20260918),Jt=(n=0,t=1)=>n+(t-n)*rn();function ve(n,t=n){let e=document.createElement("canvas");return e.width=n,e.height=t,e}function qc(n,t,e,i=.5){let s=new Float32Array(n*n),r=1,o=0;for(let a=0;a<e;a++){let l=t<<a,c=new Float32Array(l*l);for(let h=0;h<c.length;h++)c[h]=rn();for(let h=0;h<n;h++){let u=h/n*l,f=Math.floor(u),d=u-f,p=d*d*(3-2*d),x=f%l*l,g=(f+1)%l*l;for(let m=0;m<n;m++){let y=m/n*l,S=Math.floor(y),v=y-S,b=v*v*(3-2*v),M=S%l,T=(S+1)%l,_=c[x+M]+(c[x+T]-c[x+M])*b,w=c[g+M]+(c[g+T]-c[g+M])*b;s[h*n+m]+=(_+(w-_)*p)*r}}o+=r,r*=i}for(let a=0;a<s.length;a++)s[a]/=o;return s}function Yc(n,t,e=0,i=1){let s=ve(t),r=s.getContext("2d"),o=r.createImageData(t,t);for(let a=0;a<n.length;a++){let l=Math.max(0,Math.min(255,(n[a]-e)/(i-e)*255));o.data[a*4]=o.data[a*4+1]=o.data[a*4+2]=l,o.data[a*4+3]=255}return r.putImageData(o,0,0),s}var fn=null,$c=null,c0=null;function z_(){fn||(fn=Yc(qc(512,4,6),512,.15,.85),$c=Yc(qc(256,16,3),256,.2,.8),c0=Yc(qc(256,2,4),256,.2,.8))}function Cn(n,t,e,i,s="multiply",r=1){n.save(),n.globalAlpha=i,n.globalCompositeOperation=s;let o=t*r;for(let a=0;a<t;a+=o)for(let l=0;l<t;l+=o)n.drawImage(e,l,a,o,o);n.restore()}function fs(n,t=2){let e=n.width,i=n.height,s=n.getContext("2d").getImageData(0,0,e,i).data,r=ve(e,i),o=r.getContext("2d"),a=o.createImageData(e,i),l=a.data,c=(h,u)=>s[((u+i)%i*e+(h+e)%e)*4]/255;for(let h=0;h<i;h++)for(let u=0;u<e;u++){let f=c(u+1,h-1)+2*c(u+1,h)+c(u+1,h+1)-(c(u-1,h-1)+2*c(u-1,h)+c(u-1,h+1)),d=c(u-1,h+1)+2*c(u,h+1)+c(u+1,h+1)-(c(u-1,h-1)+2*c(u,h-1)+c(u+1,h-1)),p=-f*t,x=d*t,g=1,m=Math.hypot(p,x,g);p/=m,x/=m,g/=m;let y=(h*e+u)*4;l[y]=(p*.5+.5)*255,l[y+1]=(x*.5+.5)*255,l[y+2]=(g*.5+.5)*255,l[y+3]=255}return o.putImageData(a,0,0),r}function ps(n,t=!0,e=!0){let i=new Ui(n);return t&&(i.colorSpace=ze),e&&(i.wrapS=i.wrapT=Zi),i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=wn,i}function Oe(n,t){return ps(n,t)}function Yr(n,t,e,i,s,r){if(s<=0||e<120&&i<120||s<3&&rn()<.3){r.push([n,t,e,i]);return}if(e>=i){let o=Math.round(e*(rn()<.5?.5:rn()<.5?.3333333333333333:.6666666666666666));Yr(n,t,o,i,s-1,r),Yr(n+o,t,e-o,i,s-1,r)}else{let o=Math.round(i*(rn()<.5?.5:rn()<.5?.3333333333333333:.6666666666666666));Yr(n,t,e,o,s-1,r),Yr(n,t+o,e,i-o,s-1,r)}}function us(n,t,e,i,s=5){n.fillStyle="rgba(120,130,140,0.9)",n.beginPath(),n.arc(e,i,s,0,7),n.fill(),n.strokeStyle="rgba(40,45,50,0.6)",n.lineWidth=1.5,n.beginPath(),n.moveTo(e-s*.6,i),n.lineTo(e+s*.6,i),n.stroke(),t.fillStyle="#fff",t.beginPath(),t.arc(e,i,s,0,7),t.fill()}function ds(n,t,e,i){n.beginPath();for(let s=0;s<6;s++){let r=Math.PI/6+s*Math.PI/3,o=t+i*Math.cos(r),a=e+i*Math.sin(r);s?n.lineTo(o,a):n.moveTo(o,a)}n.closePath()}function h0(n,t,e,i,s,r,o){let a=r/(o*2);for(let l=0;l<o;l++){let c=i+a*.5+l*a*2;n.fillStyle="rgba(10,12,14,0.85)",n.fillRect(e,c,s,a),t.fillStyle="#000",t.fillRect(e,c,s,a),n.fillStyle="rgba(255,255,255,0.08)",n.fillRect(e,c+a,s,2)}}function o0(n=1024,t=[226,231,235],e=.1,i=.5,s=!0){let r=ve(n),o=r.getContext("2d"),a=ve(n),l=a.getContext("2d"),c=ve(n),h=c.getContext("2d");o.fillStyle=`rgb(${t})`,o.fillRect(0,0,n,n),l.fillStyle="#b0b0b0",l.fillRect(0,0,n,n),h.fillStyle="rgb(105,105,105)",h.fillRect(0,0,n,n);let u=[];Yr(0,0,n,n,4,u);for(let[f,d,p,x]of u){let g=Jt(-6,6);o.fillStyle=`rgb(${t[0]+g},${t[1]+g},${t[2]+g+1})`,o.fillRect(f+3,d+3,p-6,x-6),l.fillStyle="#d8d8d8",l.fillRect(f+4,d+4,p-8,x-8),l.fillStyle="#e8e8e8",l.fillRect(f+9,d+9,p-18,x-18);let m=o.createLinearGradient(0,d+x*.55,0,d+x);m.addColorStop(0,"rgba(80,70,60,0)"),m.addColorStop(1,`rgba(80,70,60,${e})`),o.fillStyle=m,o.fillRect(f,d,p,x);let y=Jt(95,125)|0;h.fillStyle=`rgb(${y},${y},${y})`,h.fillRect(f+4,d+4,p-8,x-8),s&&p>150&&x>150&&rn()<.35&&(us(o,l,f+18,d+18),us(o,l,f+p-18,d+18),us(o,l,f+18,d+x-18),us(o,l,f+p-18,d+x-18)),s&&p>220&&x>200&&rn()<.18&&h0(o,l,f+p*.2,d+x*.3,p*.6,x*.35,6),s&&p>180&&rn()<.2&&(o.fillStyle="rgba(40,50,60,0.55)",o.font="600 16px monospace",o.fillText(["A-07","SV-12","C2","HX-4","PNL 31","AC-9"][rn()*6|0],f+26,d+x-26)),s&&p>200&&x>200&&rn()<.12&&(o.strokeStyle="rgba(60,70,80,0.35)",o.lineWidth=3,ds(o,f+p/2,d+x/2,Math.min(p,x)*.18),o.stroke(),l.strokeStyle="#707070",l.lineWidth=4,ds(l,f+p/2,d+x/2,Math.min(p,x)*.18),l.stroke()),o.strokeStyle=`rgba(35,42,50,${i})`,o.lineWidth=3,o.strokeRect(f+1.5,d+1.5,p-3,x-3),l.strokeStyle="#000",l.lineWidth=4,l.strokeRect(f+1,d+1,p-2,x-2),h.strokeStyle="rgb(200,200,200)",h.lineWidth=4,h.strokeRect(f+1,d+1,p-2,x-2)}return Cn(o,n,fn,.1,"multiply"),Cn(o,n,$c,.05,"multiply",.25),Cn(h,n,fn,.25,"overlay"),{map:Oe(r,!0),normalMap:Oe(fs(a,3),!1),roughnessMap:Oe(c,!1)}}function G_(n=1024){let t=ve(n),e=t.getContext("2d"),i=ve(n),s=i.getContext("2d"),r=ve(n),o=r.getContext("2d");e.fillStyle="#2c3239",e.fillRect(0,0,n,n),s.fillStyle="#909090",s.fillRect(0,0,n,n),o.fillStyle="rgb(140,140,140)",o.fillRect(0,0,n,n);let a=[];Yr(0,0,n,n,4,a);for(let[l,c,h,u]of a){let f=Jt(-5,5);e.fillStyle=`rgb(${44+f},${50+f},${57+f})`,e.fillRect(l+3,c+3,h-6,u-6),s.fillStyle="#c0c0c0",s.fillRect(l+5,c+5,h-10,u-10);let d=rn();if(d<.25&&h>140&&u>100)h0(e,s,l+20,c+20,h-40,u-40,Math.max(3,u/40|0));else if(d<.4&&h>160&&u>160)for(let x=c+24;x<c+u-20;x+=14*1.5)for(let g=l+24+((x-c)/(14*1.5)|0)%2*14*.87;g<l+h-20;g+=14*1.74)e.fillStyle="rgba(8,10,12,0.9)",ds(e,g,x,14*.75),e.fill(),s.fillStyle="#202020",ds(s,g,x,14*.75),s.fill();else d<.5&&h>120&&(e.fillStyle="rgba(220,170,40,0.75)",e.fillRect(l+14,c+14,60,8),e.fillStyle="rgba(200,210,220,0.5)",e.font="600 15px monospace",e.fillText("MNT-"+(rn()*90+10|0),l+14,c+42));h>100&&u>100&&rn()<.5&&(us(e,s,l+14,c+u-14,4),us(e,s,l+h-14,c+u-14,4)),e.strokeStyle="rgba(8,10,12,0.9)",e.lineWidth=3,e.strokeRect(l+1.5,c+1.5,h-3,u-3),e.strokeStyle="rgba(255,255,255,0.05)",e.lineWidth=1,e.strokeRect(l+4,c+4,h-8,u-8),s.strokeStyle="#000",s.lineWidth=4,s.strokeRect(l+1,c+1,h-2,u-2)}return Cn(e,n,fn,.18,"overlay"),Cn(o,n,fn,.35,"overlay"),{map:Oe(t,!0),normalMap:Oe(fs(i,2.5),!1),roughnessMap:Oe(r,!1)}}function V_(n=512){let t=ve(n),e=t.getContext("2d"),i=ve(n),s=i.getContext("2d");e.fillStyle="#b9bec4",e.fillRect(0,0,n,n);for(let r=0;r<1400;r++){let o=Jt(0,n),a=Jt(40,400),l=Jt(-100,n),c=Jt(-1,1);e.strokeStyle=c>0?`rgba(255,255,255,${c*.12})`:`rgba(0,0,0,${-c*.12})`,e.lineWidth=Jt(.5,1.6),e.beginPath(),e.moveTo(l,o),e.lineTo(l+a,o),e.stroke(),e.beginPath(),e.moveTo(l-n,o),e.lineTo(l+a-n,o),e.stroke()}return s.drawImage(t,0,0),s.globalCompositeOperation="multiply",s.fillStyle="rgb(120,120,120)",s.fillRect(0,0,n,n),Cn(e,n,fn,.06,"multiply"),{map:Oe(t,!0),roughnessMap:Oe(i,!1)}}function a0(n=1024,t=[26,29,33],e=2,i=!1){let s=ve(n),r=s.getContext("2d"),o=ve(n),a=o.getContext("2d"),l=ve(n),c=l.getContext("2d");r.fillStyle=`rgb(${t})`,r.fillRect(0,0,n,n),a.fillStyle="#c0c0c0",a.fillRect(0,0,n,n),c.fillStyle="rgb(46,46,46)",c.fillRect(0,0,n,n);let h=n/e;for(let u=0;u<e;u++)for(let f=0;f<e;f++){let d=Jt(-3,3);r.fillStyle=`rgb(${t[0]+d},${t[1]+d},${t[2]+d})`,r.fillRect(f*h+2,u*h+2,h-4,h-4);let p=Jt(38,62)|0;c.fillStyle=`rgb(${p},${p},${p})`,c.fillRect(f*h+2,u*h+2,h-4,h-4)}Cn(r,n,fn,.25,"overlay");for(let u=0;u<40;u++){let f=Jt(0,n),d=Jt(0,n),p=Jt(20,90),x=c.createRadialGradient(f,d,0,f,d,p);x.addColorStop(0,"rgba(140,140,140,0.35)"),x.addColorStop(1,"rgba(140,140,140,0)"),c.fillStyle=x,c.fillRect(f-p,d-p,p*2,p*2)}for(let u=0;u<=e;u++)r.fillStyle="rgba(0,0,0,0.9)",r.fillRect(0,u*h-2,n,4),r.fillRect(u*h-2,0,4,n),r.fillStyle="rgba(160,175,185,0.18)",r.fillRect(0,u*h+2,n,1),r.fillRect(u*h+2,0,1,n),a.fillStyle="#000",a.fillRect(0,u*h-2,n,4),a.fillRect(u*h-2,0,4,n),c.fillStyle="rgb(180,180,180)",c.fillRect(0,u*h-2,n,4),c.fillRect(u*h-2,0,4,n);return i&&(r.fillStyle="rgba(190,200,210,0.5)",r.fillRect(0,n/2-3,n,6)),{map:Oe(s,!0),normalMap:Oe(fs(o,1.5),!1),roughnessMap:Oe(l,!1)}}function B_(n=1024){let t=ve(n),e=t.getContext("2d"),i=ve(n),s=i.getContext("2d"),r=ve(n),o=r.getContext("2d");e.fillStyle="#aeb5bb",e.fillRect(0,0,n,n),s.fillStyle="#c0c0c0",s.fillRect(0,0,n,n),o.fillStyle="rgb(175,175,175)",o.fillRect(0,0,n,n);let a=4,l=n/a;for(let c=0;c<a;c++){let h=c%2*n/4;for(let u=-1;u<2;u++){let f=h+u*n/2,d=Jt(-8,8);e.fillStyle=`rgb(${172+d},${179+d},${186+d})`,e.fillRect(f+3,c*l+3,n/2-6,l-6);for(let p=0;p<3;p++){let x=c*l+l*(.25+p*.25)-5;e.fillStyle="rgba(70,78,86,0.55)",e.fillRect(f+20,x,n/2-40,10),s.fillStyle="#e0e0e0",s.fillRect(f+20,x,n/2-40,10),o.fillStyle="rgb(235,235,235)",o.fillRect(f+20,x,n/2-40,10)}e.strokeStyle="rgba(30,35,40,0.8)",e.lineWidth=4,e.strokeRect(f+2,c*l+2,n/2-4,l-4),s.strokeStyle="#000",s.lineWidth=5,s.strokeRect(f+2,c*l+2,n/2-4,l-4),us(e,s,f+14,c*l+14,4),us(e,s,f+n/2-14,c*l+l-14,4)}}Cn(e,n,fn,.28,"multiply"),Cn(e,n,c0,.15,"multiply");for(let c=0;c<18;c++){let h=Jt(0,n),u=Jt(0,n),f=Jt(30,140),d=e.createRadialGradient(h,u,0,h,u,f);d.addColorStop(0,"rgba(70,75,70,0.12)"),d.addColorStop(1,"rgba(70,75,70,0)"),e.fillStyle=d,e.fillRect(h-f,u-f,f*2,f*2)}return{map:Oe(t,!0),normalMap:Oe(fs(i,2),!1),roughnessMap:Oe(r,!1)}}function W_(n=512){let t=ve(n),e=t.getContext("2d"),i=ve(n),s=i.getContext("2d");e.fillStyle="#07090b",e.fillRect(0,0,n,n),s.fillStyle="#000",s.fillRect(0,0,n,n);let r=16,o=n/r;for(let a=0;a<r;a++)e.fillStyle="#5a6168",e.fillRect(0,a*o,n,o*.22),e.fillRect(a*o,0,o*.3,n),s.fillStyle="#fff",s.fillRect(0,a*o,n,o*.22),s.fillStyle="#ccc",s.fillRect(a*o,0,o*.3,n);return Cn(e,n,fn,.3,"multiply"),{map:Oe(t,!0),normalMap:Oe(fs(i,3),!1)}}function X_(n=512){let t=ve(n),e=t.getContext("2d"),i=ve(n),s=i.getContext("2d");e.fillStyle="#e4e8ec",e.fillRect(0,0,n,n),s.fillStyle="#e0e0e0",s.fillRect(0,0,n,n);let r=n/8,o=r*Math.sqrt(3),a=r*1.5;for(let l=-1;l<7;l++)for(let c=-1;c<6;c++){let h=c*o+(l%2?o/2:0),u=l*a;e.strokeStyle="rgba(40,50,60,0.45)",e.lineWidth=4,ds(e,h,u,r-1),e.stroke(),s.strokeStyle="#000",s.lineWidth=6,ds(s,h,u,r-1),s.stroke(),rn()<.15&&(e.fillStyle="rgba(0,0,0,0.05)",ds(e,h,u,r-4),e.fill())}return Cn(e,n,fn,.1,"multiply"),{map:Oe(t,!0),normalMap:Oe(fs(i,2.5),!1)}}function q_(n=256){let t=ve(n),e=t.getContext("2d");e.fillStyle="#e8b21a",e.fillRect(0,0,n,n),e.fillStyle="#16181b";for(let i=-2;i<6;i++)e.beginPath(),e.moveTo(i*n/4,0),e.lineTo(i*n/4+n/8,0),e.lineTo(i*n/4+n/8+n,n),e.lineTo(i*n/4+n,n),e.fill();return Cn(e,n,fn,.35,"multiply"),{map:Oe(t,!0)}}function l0(n=256,t=[214,96,38]){let e=ve(n),i=e.getContext("2d");i.fillStyle=`rgb(${t})`,i.fillRect(0,0,n,n);for(let s=0;s<n;s+=2)i.fillStyle=`rgba(0,0,0,${.05+rn()*.05})`,i.fillRect(0,s,n,1);for(let s=0;s<n;s+=2)i.fillStyle=`rgba(255,255,255,${.03+rn()*.03})`,i.fillRect(s,0,1,n);return Cn(i,n,$c,.2,"overlay"),{map:Oe(e,!0)}}function Y_(n=512){let t=ve(n),e=t.getContext("2d");e.clearRect(0,0,n,n);for(let i=0;i<70;i++){let s=Jt(n*.12,n*.88),r=Jt(n*.12,n*.88),o=Jt(0,Math.PI*2),a=Jt(38,70),l=a*.42,c=[Jt(40,80),Jt(95,150),Jt(35,65)].map(h=>h|0);e.save(),e.translate(s,r),e.rotate(o),e.fillStyle=`rgb(${c})`,e.beginPath(),e.moveTo(0,0),e.quadraticCurveTo(l,a*.45,0,a),e.quadraticCurveTo(-l,a*.45,0,0),e.fill(),e.strokeStyle="rgba(200,230,150,0.35)",e.lineWidth=1.5,e.beginPath(),e.moveTo(0,2),e.lineTo(0,a-4),e.stroke(),e.restore()}return{map:Oe(t,!0)}}function $_(n=512){let t=ve(n),e=t.getContext("2d"),i=ve(n),s=i.getContext("2d");e.fillStyle="#5b4a3b",e.fillRect(0,0,n,n),s.drawImage(fn,0,0,n*.25,n*4),s.drawImage(fn,n*.25,0,n*.25,n*4),s.drawImage(fn,n*.5,0,n*.25,n*4),s.drawImage(fn,n*.75,0,n*.25,n*4),e.globalAlpha=.6,e.globalCompositeOperation="multiply",e.drawImage(i,0,0),e.globalAlpha=1,e.globalCompositeOperation="source-over";for(let r=0;r<200;r++){e.strokeStyle=`rgba(30,22,16,${Jt(.2,.5)})`,e.lineWidth=Jt(1,3);let o=Jt(0,n);e.beginPath(),e.moveTo(o,0),e.bezierCurveTo(o+Jt(-10,10),n/3,o+Jt(-10,10),n*2/3,o,n),e.stroke()}return{map:Oe(t,!0),normalMap:Oe(fs(i,4),!1)}}function Z_(n=512){let t=ve(n),e=t.getContext("2d");e.fillStyle="#35521f",e.fillRect(0,0,n,n);for(let i=0;i<6e3;i++){let s=Jt(0,n),r=Jt(0,n),o=Jt(4,12);e.strokeStyle=`rgb(${Jt(40,90)|0},${Jt(95,150)|0},${Jt(30,60)|0})`,e.lineWidth=1.2,e.beginPath(),e.moveTo(s,r),e.lineTo(s+Jt(-3,3),r-o),e.stroke()}return{map:Oe(t,!0)}}function K_(n=256){let t=ve(n),e=t.getContext("2d");e.fillStyle="#3a2c21",e.fillRect(0,0,n,n),Cn(e,n,$c,.6,"overlay");for(let i=0;i<400;i++)e.fillStyle=`rgba(${Jt(80,130)|0},${Jt(70,110)|0},${Jt(60,90)|0},0.6)`,e.fillRect(Jt(0,n),Jt(0,n),2,2);return{map:Oe(t,!0)}}function J_(n=512){let t=qc(n,8,5,.55),e=Yc(t,n,.2,.8);return ps(fs(e,1.2),!1)}function j_(n=256){let t=ve(n),e=t.getContext("2d"),i=e.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.5,"rgba(255,255,255,0.45)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,n,n),e.globalCompositeOperation="destination-in",e.globalAlpha=.85,e.drawImage(fn,0,0,n,n),ps(t,!0,!1)}function Q_(n=128){let t=ve(n),e=t.getContext("2d"),i=e.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.15,"rgba(255,255,255,0.6)"),i.addColorStop(.4,"rgba(255,255,255,0.12)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,n,n),ps(t,!0,!1)}function tb(n=64,t=256){let e=ve(n,t),i=e.getContext("2d"),s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"rgba(255,255,255,0.9)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,n,t);let r=i.createLinearGradient(0,0,n,0);return r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(.5,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,1)"),i.globalCompositeOperation="destination-out",i.fillStyle=r,i.fillRect(0,0,n,t),ps(e,!0,!1)}function eb(n=512){let t=ve(n),e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,n,n);let i=n/4,s=i*Math.sqrt(3),r=i*1.5;e.strokeStyle="#fff",e.lineWidth=7;for(let o=-1;o<4;o++)for(let a=-1;a<4;a++){let l=a*s+(o%2?s/2:0),c=o*r;ds(e,l,c,i),e.stroke()}return ps(t,!1)}function nb(n=256){let t=ve(n),e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,n,n),e.strokeStyle="rgba(255,255,255,0.7)";for(let i=0;i<60;i++){e.lineWidth=Jt(1,3),e.beginPath();let s=Jt(0,n),r=Jt(0,n);e.arc(s,r,Jt(10,40),Jt(0,6),Jt(0,6)+2),e.stroke()}return ps(t,!0)}function u0(n,t={}){let e=t.w||1024,i=t.h||256,s=ve(e,i),r=s.getContext("2d");r.fillStyle=t.bg||"rgba(0,0,0,0)",r.fillRect(0,0,e,i),t.border&&(r.strokeStyle=t.border,r.lineWidth=6,r.strokeRect(8,8,e-16,i-16));let o=t.top||i*.5,a=n.length;for(let c=0;c<a;c++){let h=n[c];r.font=h.font||`600 ${h.size||90}px "Exo 2", "Segoe UI", sans-serif`,r.fillStyle=h.color||"#ffffff",r.textAlign=h.align||"center",r.textBaseline="middle",h.spacing&&(r.letterSpacing=h.spacing+"px");let u=h.align==="left"?h.x||40:h.align==="right"?e-(h.x||40):e/2;r.fillText(h.text,u,h.y!==void 0?h.y:o),o+=(h.size||90)*1.2}t.stripe&&(r.fillStyle=t.stripe,r.fillRect(0,i-14,e,14));let l=ps(s,!0,!1);return l.anisotropy=4,l}async function d0(n){z_();let t={},e=[["white",()=>o0(1024)],["whiteClean",()=>o0(1024,[236,239,242],.04,.35,!1)],["dark",()=>G_(1024)],["brushed",()=>V_(512)],["floor",()=>a0(1024)],["floorLight",()=>a0(1024,[150,156,162],2)],["deck",()=>B_(1024)],["grating",()=>W_(512)],["hex",()=>X_(512)],["hazard",()=>q_(256)],["fabric",()=>l0(256)],["fabricGrey",()=>l0(256,[72,78,86])],["leaf",()=>Y_(512)],["bark",()=>$_(512)],["grass",()=>Z_(512)],["soil",()=>K_(256)]];for(let[i,s]of e)t[i]=s(),n&&await n(i);return t.waterNormals=J_(512),t.mist=j_(256),t.glow=Q_(128),t.beam=tb(),t.frit=eb(512),t.caustic=nb(),t}function f0(n){let t={},e=(a,l,c={})=>{let h=new es(a);return h.userData.uv=l,Object.assign(h.userData,c),h},i=(a,l,c={})=>{let h=new $o(a);return h.userData.uv=l,Object.assign(h.userData,c),h},s=a=>new st(a,a);t.white=e({color:16777215,...n.white,roughness:.95,metalness:0,normalScale:s(.6)},2.4),t.whiteClean=e({color:16777215,...n.whiteClean,roughness:.8,metalness:0,normalScale:s(.4)},3),t.whiteSmooth=i({color:15659508,roughness:.28,metalness:0,clearcoat:.6,clearcoatRoughness:.2},null),t.metal=e({color:14146785,...n.brushed,roughness:.9,metalness:1},1.2),t.chrome=e({color:15265007,roughness:.12,metalness:1},null),t.dark=e({color:16777215,...n.dark,roughness:1,metalness:.55,normalScale:s(.8)},2.4),t.darkSmooth=e({color:1843238,roughness:.38,metalness:.6},null),t.gunmetal=e({color:3817544,...n.brushed,roughness:.8,metalness:.9},1.5),t.hull=e({color:9147291,...n.dark,roughness:1,metalness:.4},4),t.hullPaint=e({color:4212301,...n.white,roughness:.9,metalness:.3},3),t.floor=e({color:16777215,...n.floor,roughness:1,metalness:.2,normalScale:s(.5)},2.4),t.floorLight=e({color:16777215,...n.floorLight,roughness:.9,metalness:.05,normalScale:s(.5)},2.4),t.deck=e({color:16777215,...n.deck,roughness:1,metalness:.05,normalScale:s(.7)},4),t.grating=e({color:16777215,...n.grating,roughness:.55,metalness:.8},1),t.hex=e({color:16777215,...n.hex,roughness:.55,metalness:.05},1.2),t.hazard=e({color:16777215,...n.hazard,roughness:.6,metalness:.1},.8),t.rubber=e({color:1250583,roughness:.85,metalness:0},null),t.plastic=e({color:2764597,roughness:.45,metalness:.1},null),t.plasticWhite=e({color:14672871,roughness:.35,metalness:0},null),t.orange=e({color:16777215,...n.fabric,roughness:.85,metalness:0},.6),t.fabricGrey=e({color:16777215,...n.fabricGrey,roughness:.9,metalness:0},.6),t.orangeGloss=e({color:14705194,roughness:.35,metalness:0},null),t.yellow=e({color:15249946,roughness:.5,metalness:.2},null),t.redPaint=e({color:12071466,roughness:.45,metalness:.2},null),t.screenOff=e({color:329482,roughness:.1,metalness:.5},null),t.cable=e({color:1382170,roughness:.6,metalness:.2},null),t.copper=e({color:12745290,roughness:.35,metalness:1},null),t.glass=i({color:12576496,roughness:.04,metalness:0,transparent:!0,opacity:.16,depthWrite:!1,envMapIntensity:1.6,specularIntensity:1,ior:1.5},null,{noShadow:!0}),t.glassTint=i({color:2774374,roughness:.03,metalness:.25,transparent:!0,opacity:.38,depthWrite:!1,envMapIntensity:1.8},null,{noShadow:!0}),t.glassFrost=i({color:14216949,roughness:.5,metalness:0,transparent:!0,opacity:.55,depthWrite:!1},null,{noShadow:!0}),t.glassDome=i({color:14086906,roughness:.05,metalness:.1,transparent:!0,opacity:.2,depthWrite:!1,envMapIntensity:2,side:Ye},null,{noShadow:!0}),t.glassFloor=i({color:10474464,roughness:.05,metalness:.1,transparent:!0,opacity:.3,depthWrite:!1,envMapIntensity:1.5},null,{noShadow:!0});let r=(a,l,c=329224)=>e({color:c,emissive:a,emissiveIntensity:l,roughness:.4,metalness:0},null,{noShadow:!0});t.cyan=r(3797247,9),t.cyanSoft=r(3794687,3),t.cyanDim=r(2805994,1.2),t.teal=r(3080136,8),t.light=r(15923455,11,16777215),t.lightWarm=r(16771012,10,16777215),t.lightCool=r(14217471,10,16777215),t.orangeLight=r(16742954,8),t.red=r(16722468,9),t.redDim=r(16722468,2),t.amber=r(16754470,8),t.green=r(4521830,8),t.blue=r(3837183,8),t.growLight=r(16735472,5),t.cryoFluid=e({color:735832,emissive:2799871,emissiveIntensity:1.3,roughness:.1,metalness:0,transparent:!0,opacity:.55,depthWrite:!1},null,{noShadow:!0}),t.greenFluid=e({color:670228,emissive:4521864,emissiveIntensity:1.1,roughness:.1,metalness:0,transparent:!0,opacity:.6,depthWrite:!1},null,{noShadow:!0}),t.bark=e({color:16777215,...n.bark,roughness:.95,metalness:0},1.6,{keepUV:!0}),t.leaf=e({color:16777215,map:n.leaf.map,alphaTest:.45,side:Ye,roughness:.75,metalness:0},null),t.grass=e({color:16777215,map:n.grass.map,roughness:.95,metalness:0},1.5),t.soil=e({color:16777215,map:n.soil.map,roughness:1,metalness:0},1),t.plant=e({color:4164154,roughness:.7,metalness:0},null),t.plantDark=e({color:2845235,roughness:.75,metalness:0},null),t.plantLight=e({color:7977290,roughness:.7,metalness:0},null),t.creature=e({color:11126742,emissive:2781082,emissiveIntensity:.6,roughness:.35,metalness:0},null);let o=(a,l=1,c=null)=>new ke({color:a,transparent:!0,opacity:l,blending:hn,depthWrite:!1,map:c,side:Ye,fog:!0});t.fxBeam=o(16774368,.07,n.beam),t.fxBeam.userData.noShadow=!0,t.fxCyanBeam=o(4516095,.18,n.beam),t.fxCyanBeam.userData.noShadow=!0,t.fxBlueBeam=o(3842303,.12,n.beam),t.fxBlueBeam.userData.noShadow=!0,t.fxHolo=o(5631743,.35),t.fxHolo.userData.noShadow=!0;for(let a in t)t[a].name=a;for(let a of["cyan","cyanSoft","cyanDim","teal","light","lightWarm","lightCool","orangeLight","red","redDim","amber","green","blue","growLight","hazard","grating","fabricGrey","yellow"])t[a]&&Zc(t[a]);return t.metalInlay=Zc(t.metal.clone()),t.metalInlay.name="metalInlay",t.whiteInlay=Zc(t.whiteClean.clone()),t.whiteInlay.name="whiteInlay",t.darkInlay=Zc(t.darkSmooth.clone()),t.darkInlay.name="darkInlay",t}function Zc(n){return n.polygonOffset=!0,n.polygonOffsetFactor=-1,n.polygonOffsetUnits=-4,n}var _n="#4ff2ff",Kc="rgba(79,242,255,0.35)",ed="#ffb347",Jc="#ff4a3d",ms="#e8f6ff",jc="#56ff9a",ci='"Share Tech Mono", "Consolas", monospace';function Os(n,t,e,i,s=_n){let r=n.createLinearGradient(0,0,0,e);r.addColorStop(0,"#04121a"),r.addColorStop(1,"#020a10"),n.fillStyle=r,n.fillRect(0,0,t,e),n.strokeStyle="rgba(79,242,255,0.08)",n.lineWidth=1;for(let o=0;o<t;o+=32)n.beginPath(),n.moveTo(o,0),n.lineTo(o,e),n.stroke();for(let o=0;o<e;o+=32)n.beginPath(),n.moveTo(0,o),n.lineTo(t,o),n.stroke();n.fillStyle=s,n.font=`20px ${ci}`,n.textBaseline="top",n.fillText(i,16,12),n.fillRect(16,38,120,2),n.strokeStyle=s,n.globalAlpha=.5,n.strokeRect(4,4,t-8,e-8),n.globalAlpha=1}var Qc={status(n,t,e,i,s){Os(n,t,e,"AEGIS // COLONY STATUS"),[["REACTOR",.82+Math.sin(i*.7)*.03],["LIFE SUPPORT",.97],["DESALINATION",.64+Math.sin(i*.3)*.05],["HYDROPONICS",.88],["CRYO CONTAIN.",s.restored?.92:.41+Math.sin(i*5)*.03],["UPLINK",s.transmitted?1:.12]].forEach(([o,a],l)=>{let c=62+l*34;n.fillStyle=ms,n.font=`17px ${ci}`,n.fillText(o,16,c),n.fillStyle="rgba(79,242,255,0.12)",n.fillRect(200,c+2,240,16),n.fillStyle=a<.5?Jc:a<.7?ed:_n,n.fillRect(200,c+2,240*a,16),n.fillStyle=ms,n.fillText((a*100|0)+"%",452,c)}),n.strokeStyle=_n,n.lineWidth=2,n.beginPath();for(let o=0;o<t-32;o+=4){let a=e-26+Math.sin(o*.05+i*3)*8*Math.sin(o*.011+i);o?n.lineTo(16+o,a):n.moveTo(16+o,a)}n.stroke()},sonar(n,t,e,i){Os(n,t,e,"SONAR // 360 SWEEP");let s=t/2,r=e/2+14,o=e*.4;n.strokeStyle=Kc,n.lineWidth=1;for(let h=1;h<=4;h++)n.beginPath(),n.arc(s,r,o*h/4,0,7),n.stroke();n.beginPath(),n.moveTo(s-o,r),n.lineTo(s+o,r),n.moveTo(s,r-o),n.lineTo(s,r+o),n.stroke();let a=i*1.2,l=n.createConicGradient?n.createConicGradient(a-.8,s,r):null;l&&(l.addColorStop(0,"rgba(79,242,255,0)"),l.addColorStop(.12,"rgba(79,242,255,0.45)"),l.addColorStop(.1201,"rgba(79,242,255,0)"),n.fillStyle=l,n.beginPath(),n.arc(s,r,o,0,7),n.fill()),n.strokeStyle=_n,n.lineWidth=2,n.beginPath(),n.moveTo(s,r),n.lineTo(s+Math.cos(a)*o,r+Math.sin(a)*o),n.stroke();let c=[[.3,.6],[1.9,.8],[2.8,.35],[4.1,.7],[5.2,.5]];for(let[h,u]of c){let f=((a-h)%6.283+6.283)%6.283;n.fillStyle=`rgba(86,255,154,${Math.max(0,1-f/4)})`,n.beginPath(),n.arc(s+Math.cos(h)*o*u,r+Math.sin(h)*o*u,5,0,7),n.fill()}n.fillStyle=ms,n.font=`15px ${ci}`,n.fillText("CONTACTS 05",16,e-30),n.fillText("DEPTH 1,840 M",t-150,e-30)},vitals(n,t,e,i,s){Os(n,t,e,"SPECIMEN AX-7 // VITALS",s.restored?_n:Jc),n.strokeStyle=jc,n.lineWidth=2.5,n.beginPath();for(let r=0;r<t-32;r+=2){let o=(r+i*180)%160/160,a=0;o>.42&&o<.46?a=-38:o>.46&&o<.5?a=26:o>.6&&o<.7&&(a=-8*Math.sin((o-.6)*31)),r?n.lineTo(16+r,110+a):n.moveTo(16+r,110+a)}n.stroke(),n.font=`18px ${ci}`,n.fillStyle=ms,n.fillText("CORE TEMP  -196.4 C",16,160),n.fillText("NEURAL     "+(s.scanned?"ACTIVE":"DORMANT"),16,186),n.fillStyle=s.restored?jc:Jc,n.fillText(s.restored?"CONTAINMENT NOMINAL":"CONTAINMENT: POWER FAULT",16,214);for(let r=0;r<26;r++){let o=60+r*8,a=Math.sin(i*2+r*.5);n.fillStyle=_n,n.fillRect(t-110+a*40,o,5,5),n.fillStyle=ed,n.fillRect(t-110-a*40,o,5,5),n.fillStyle=Kc,n.fillRect(t-110-Math.abs(a)*40,o+2,Math.abs(a)*80,1)}},map(n,t,e,i){Os(n,t,e,"COLONY LAYOUT // LEVEL 1");let s=t/2,r=e/2+12,o=e*.0068,a=l=>{n.beginPath();for(let c=0;c<=8;c++){let h=(c+.5)*Math.PI/4,u=l/Math.cos(Math.PI/8)*o,f=s+Math.sin(h)*u,d=r-Math.cos(h)*u;c?n.lineTo(f,d):n.moveTo(f,d)}n.stroke()};n.strokeStyle=_n,n.lineWidth=1.5,a(56),a(42),n.strokeStyle=Kc,a(27),a(22);for(let l=0;l<8;l++){let c=l*Math.PI/4;n.fillStyle=_n,n.fillRect(s+Math.sin(c)*110*o*1-2,r-Math.cos(c)*110*o-2,4,4)}n.fillStyle=`rgba(255,179,71,${.5+.5*Math.sin(i*4)})`,n.beginPath(),n.arc(s,r+56*o*1.6,5,0,7),n.fill()},log(n,t,e,i){Os(n,t,e,"SYS.LOG");let s=["> desal loop B pressure ok","> hydro ring 2 nutrient 94%","> drone D-07 returning","> buoy S-14 telemetry","> cryo bay: power variance","> uplink handshake pending","> tide model updated","> hull strain 0.02%","> VTOL-3 approach vector","> atrium O2 21.2%","> sample AX-7 stable","> ballast trim +0.4"];n.font=`16px ${ci}`;let r=Math.floor(i*1.5);for(let o=0;o<9;o++){let a=s[(r+o)%s.length];n.fillStyle=a.includes("cryo")?ed:o===8?ms:"rgba(200,240,255,0.75)",n.fillText(a,16,54+o*24)}(i*2|0)%2&&(n.fillStyle=_n,n.fillRect(16,270,10,16))},weather(n,t,e,i){Os(n,t,e,"OCEAN // CONDITIONS"),n.font=`34px ${ci}`,n.fillStyle=ms,n.fillText("SEA STATE 2",16,58),n.font=`17px ${ci}`,n.fillStyle=_n,n.fillText("SWELL 0.6 M  /  11 S",16,104),n.fillText("WIND 7 KN  NNE",16,128),n.fillText("VIS 9.2 KM  HAZE",16,152),n.strokeStyle=_n,n.lineWidth=2,n.beginPath();for(let s=0;s<t-32;s+=3){let r=e-50+Math.sin(s*.03+i)*12+Math.sin(s*.08-i*1.7)*5;s?n.lineTo(16+s,r):n.moveTo(16+s,r)}n.stroke()},welcome(n,t,e,i){n.fillStyle="#031018",n.fillRect(0,0,t,e);let s=n.createRadialGradient(t/2,e/2,10,t/2,e/2,t*.6);s.addColorStop(0,"rgba(79,242,255,0.18)"),s.addColorStop(1,"rgba(79,242,255,0)"),n.fillStyle=s,n.fillRect(0,0,t,e),n.textAlign="center",n.fillStyle=ms,n.font='600 64px "Exo 2", sans-serif',n.letterSpacing="14px",n.fillText("AEGIS",t/2+7,e*.34),n.letterSpacing="4px",n.font=`18px ${ci}`,n.fillStyle=_n,n.fillText("DEEP OCEAN RESEARCH COLONY",t/2,e*.6),n.fillStyle="rgba(232,246,255,0.6)",n.fillText("PACIFIC SECTOR 7  \xB7  EST. 2071",t/2,e*.72),n.fillStyle=_n,n.fillRect(t/2-60+Math.sin(i)*40,e*.84,120,3),n.textAlign="left",n.letterSpacing="0px"},alert(n,t,e,i,s){let r=s.cryoOpen?0:Math.sin(i*4)>0?1:.6;n.fillStyle=s.cryoOpen?"#021408":"#1a0404",n.fillRect(0,0,t,e),n.fillStyle=s.cryoOpen?jc:Jc,n.globalAlpha=s.cryoOpen?1:r;for(let o=-4;o<20;o++)n.beginPath(),n.moveTo(o*40,0),n.lineTo(o*40+20,0),n.lineTo(o*40-20,26),n.lineTo(o*40-40,26),n.fill(),n.beginPath(),n.moveTo(o*40,e-26),n.lineTo(o*40+20,e-26),n.lineTo(o*40-20,e),n.lineTo(o*40-40,e),n.fill();n.textAlign="center",n.font='600 52px "Exo 2", sans-serif',n.fillText(s.cryoOpen?"ACCESS GRANTED":"RESTRICTED",t/2,e*.47),n.font=`20px ${ci}`,n.fillText(s.cryoOpen?"CRYOGENIC LABORATORY":"LEVEL-3 CLEARANCE REQUIRED",t/2,e*.68),n.globalAlpha=1,n.textAlign="left"},holo(n,t,e,i){n.clearRect(0,0,t,e),n.strokeStyle=_n,n.fillStyle=_n,n.lineWidth=2,n.font=`18px ${ci}`,n.fillText("UPLINK // ORBITAL RELAY",12,24),n.strokeRect(6,6,t-12,e-12);for(let s=0;s<7;s++){let r=.3+.6*Math.abs(Math.sin(i*.9+s));n.fillRect(20+s*34,e-20-r*120,22,r*120)}n.beginPath();for(let s=0;s<200;s+=3){let r=90+Math.sin(s*.07+i*2)*22;s?n.lineTo(270+s,r):n.moveTo(270+s,r)}n.stroke(),n.beginPath(),n.arc(370,190,40,i%6.28,i%6.28+4.5),n.stroke()},dna(n,t,e,i){Os(n,t,e,"GENOME SEQUENCER");for(let s=0;s<40;s++){let r=20+s*((t-40)/40),o=Math.sin(i*2+s*.4);n.fillStyle=_n,n.fillRect(r,e/2+o*50,6,6),n.fillStyle=jc,n.fillRect(r,e/2-o*50,6,6),n.fillStyle=Kc,n.fillRect(r+2,e/2-Math.abs(o)*50,2,Math.abs(o)*100)}n.font=`15px ${ci}`,n.fillStyle=ms,n.fillText("SEQ "+(Math.floor(i*40)%1e5).toString().padStart(6,"0")+"  ATCG-GCTA-TTAG",16,e-24)}};function p0(){let n={},t=[],e={restored:!1,cryoOpen:!1,scanned:!1,transmitted:!1};for(let r of Object.keys(Qc)){let o=document.createElement("canvas");o.width=512,o.height=288;let a=o.getContext("2d"),l=new Ui(o);l.colorSpace=ze,l.anisotropy=4;let h=r==="holo"?new ke({map:l,transparent:!0,blending:hn,depthWrite:!1,side:Ye,color:new ft(1.6,1.6,1.6)}):new ke({map:l,color:new ft(1.5,1.5,1.5),toneMapped:!0});h.polygonOffset=!0,h.polygonOffsetFactor=-1,h.polygonOffsetUnits=-4,h.userData.noShadow=!0,h.userData.keepUV=!0,h.name="scr_"+r,n[r]=h,t.push({k:r,c:o,g:a,t:l}),Qc[r](a,512,288,0,e),l.needsUpdate=!0}let i=0,s=0;return{S:n,state:e,update(r,o){if(s+=r,s<.06)return;s=0;let a=t[i++%t.length];a.k!=="welcome"&&(Qc[a.k](a.g,512,288,o,e),a.t.needsUpdate=!0)},redrawAll(r){for(let o of t)Qc[o.k](o.g,512,288,r,e),o.t.needsUpdate=!0}}}function g0(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new de,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=m0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let p=m0(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function m0(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ge(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){let x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function x0(n,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,S=a.length;y<S;y++){let v=a[y],b=n.attributes[v];l[v]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let M=n.morphAttributes[v];M&&(c[v]||(c[v]=[]),M.forEach((T,_)=>{let w=new T.array.constructor(T.count*T.itemSize);c[v][_]=new T.constructor(w,T.itemSize,T.normalized)}))}let d=t*.5,p=Math.log10(1/t),x=Math.pow(10,p),g=d*x;for(let y=0;y<r;y++){let S=i?i.getX(y):y,v="";for(let b=0,M=a.length;b<M;b++){let T=a[b],_=n.getAttribute(T),w=_.itemSize;for(let R=0;R<w;R++)v+=`${Math.trunc(_[u[R]](S)*x+g)},`}if(v in e)h.push(e[v]);else{for(let b=0,M=a.length;b<M;b++){let T=a[b],_=n.getAttribute(T),w=n.morphAttributes[T],R=_.itemSize,P=l[T],L=c[T];for(let U=0;U<R;U++){let N=u[U],D=f[U];if(P[D](o,_[N](S)),w)for(let O=0,z=w.length;O<z;O++)L[O][D](o,w[O][N](S))}}e[v]=o,h.push(o),o++}}let m=n.clone();for(let y in n.attributes){let S=l[y];if(m.setAttribute(y,new S.constructor(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)),y in c)for(let v=0;v<c[y].length;v++){let b=c[y][v];m.morphAttributes[y][v]=new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)}}return m.setIndex(h),m}var Ea=new C;function qn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ea.copy(t),Ea[i]=0,Ea.normalize();let c=.5*o/(o+a),h=1-Ea.angleTo(n)/l;return Math.sign(Ea[e])===1?h*c:a/(o+a)+c+c*(1-h)}var th=class n extends Gt{constructor(t=1,e=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new C,c=new C,h=new C(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,x=new C,g=.5/o;for(let m=0,y=0;m<u.length;m+=3,y+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*r,u[m+1]=h.y*Math.sign(l.y)+c.y*r,u[m+2]=h.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/p)){case 0:x.set(1,0,0),d[y+0]=qn(x,c,"z","y",r,i),d[y+1]=1-qn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),d[y+0]=1-qn(x,c,"z","y",r,i),d[y+1]=1-qn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),d[y+0]=1-qn(x,c,"x","z",r,t),d[y+1]=qn(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),d[y+0]=1-qn(x,c,"x","z",r,t),d[y+1]=1-qn(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),d[y+0]=1-qn(x,c,"x","y",r,t),d[y+1]=1-qn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),d[y+0]=qn(x,c,"x","y",r,t),d[y+1]=1-qn(x,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var y0=.016,ib=.9995,_0=1e-5,sb=16,nd=128;function b0(n){let t=performance.now(),e=0;for(let g of n)e+=g.g.attributes.position.count/3;let i=new Int32Array(e),s=new Int32Array(e),r=new Float32Array(e*3),o=new Float64Array(e),a=new Map,l=0;n.forEach((g,m)=>{let y=g.g.attributes.position.array;for(let S=0,v=0;S<y.length;S+=9,v++){let b=y[S+3]-y[S],M=y[S+4]-y[S+1],T=y[S+5]-y[S+2],_=y[S+6]-y[S],w=y[S+7]-y[S+1],R=y[S+8]-y[S+2],P=M*R-T*w,L=T*_-b*R,U=b*w-M*_,N=Math.hypot(P,L,U);if(N<1e-6)continue;P/=N,L/=N,U/=N,i[l]=m,s[l]=v,r[l*3]=P,r[l*3+1]=L,r[l*3+2]=U,o[l]=P*y[S]+L*y[S+1]+U*y[S+2];let D=rb(P,L,U,Math.round(o[l]/(y0*2))),O=a.get(D);O||a.set(D,O=[]),O.push(l),l++}});let c=(g,m,y)=>{let S=n[i[g]].g.attributes.position.array,v=s[g]*9,b=[];for(let M=0;M<3;M++){let T=S[v+M*3],_=S[v+M*3+1],w=S[v+M*3+2];b.push([T*m[0]+_*m[1]+w*m[2],T*y[0]+_*y[1]+w*y[2]])}return b},h=new Map;for(let[g,m]of a){let y=a.get(g+1),S=y?m.concat(y):m;if(S.length<2)continue;let v=Math.floor(g/1e6),b=v%129-64,M=Math.floor(v/129)%129-64,T=Math.floor(v/16641)-64,_=Math.hypot(T,M,b),w=T/_,R=M/_,P=b/_,L=Math.abs(R)<.9?[0,1,0]:[1,0,0],U=[L[1]*P-L[2]*R,L[2]*w-L[0]*P,L[0]*R-L[1]*w],N=Math.hypot(U[0],U[1],U[2]);U=[U[0]/N,U[1]/N,U[2]/N];let D=[R*U[2]-P*U[1],P*U[0]-w*U[2],w*U[1]-R*U[0]],O=S.map(J=>{let V=ab(c(J,U,D));return{c:J,T:V,x0:Math.min(V[0][0],V[1][0],V[2][0]),x1:Math.max(V[0][0],V[1][0],V[2][0]),y0:Math.min(V[0][1],V[1][1],V[2][1]),y1:Math.max(V[0][1],V[1][1],V[2][1])}});O.sort((J,V)=>J.x0-V.x0);let z=new Set(m);for(let J=0;J<O.length;J++){let V=O[J];for(let Q=J+1;Q<O.length&&O[Q].x0<V.x1;Q++){let $=O[Q];if($.y0>=V.y1||$.y1<=V.y0)continue;let At=V.c,St=$.c;if(i[At]===i[St]||!z.has(At)&&!z.has(St)||r[At*3]*r[St*3]+r[At*3+1]*r[St*3+1]+r[At*3+2]*r[St*3+2]<ib)continue;let me=o[St]-o[At];if(Math.abs(me)>y0)continue;let se=n[i[At]].opaque,ce=n[i[St]].opaque;if(!se&&!ce)continue;let K=se!==ce?ce:Math.abs(me)<1e-4?i[St]>i[At]:me>0,[tt,pt]=K?[V,$]:[$,V],Bt=n[i[tt.c]],qt=n[i[pt.c]].layer!==Bt.layer&&Bt.layer===0&&r[tt.c*3+1]<.5,pe=h.get(tt.c);pe||h.set(tt.c,pe={T:tt.T,os:[],keep:!1}),pe.os.push(pt.T),pe.keep||(pe.keep=qt)}}}let u=new Map,f=0,d=[];for(let[g,{T:m,os:y,keep:S}]of h){let v=Math.abs(Oi(m))<4?nd:sb,b=[m];for(let w of y){let R=[];for(let P of b){let L=P;for(let U=0;U<3&&L.length>2;U++){let N=w[U],D=w[(U+1)%3],O=v0(L,D,N);O.length>2&&!ob(O)&&R.push(O),L=v0(L,N,D)}}if(b=R,!b.length||b.length>nd)break}if(b.length>v){let w=b.reduce((R,P)=>R+Math.abs(Oi(P)),0);if(b.length<=nd&&w<.02*Math.abs(Oi(m)))b=[];else{f++;continue}}let M=Math.abs(Oi(m)),T=b.reduce((w,R)=>w+Math.abs(Oi(R)),0);if(M-T<_0)continue;if(S){let w=n[i[g]].g.attributes.position.array,R=s[g]*9;for(let P=0;P<9;P++)d.push(w[R+P])}let _=u.get(i[g]);_||u.set(i[g],_=new Map),_.set(s[g],{polys:b,T:m})}let p=0,x=0;for(let[g,m]of u){let y=n[g].g,S=y.attributes.position.array,v=y.attributes.normal.array,b=y.attributes.uv.array,M=[],T=[],_=[],w=S.length/9;for(let R=0;R<w;R++){let P=m.get(R);if(!P){for(let N=0;N<3;N++){let D=R*3+N;M.push(S[D*3],S[D*3+1],S[D*3+2]),T.push(v[D*3],v[D*3+1],v[D*3+2]),_.push(b[D*2],b[D*2+1])}continue}p++;let L=P.T,U=L.flip?[0,2,1]:[0,1,2];for(let N of P.polys)for(let D=1;D+1<N.length;D++){let O=L.flip?[N[0],N[D+1],N[D]]:[N[0],N[D],N[D+1]];if(!(Math.abs(Oi(O))<1e-7))for(let z of O){let J=lb(L,z);x+=1/3;for(let V=0;V<3;V++){let Q=0;for(let $=0;$<3;$++)Q+=J[$]*S[(R*3+U[$])*3+V];M.push(Q)}for(let V=0;V<3;V++){let Q=0;for(let $=0;$<3;$++)Q+=J[$]*v[(R*3+U[$])*3+V];T.push(Q)}for(let V=0;V<2;V++){let Q=0;for(let $=0;$<3;$++)Q+=J[$]*b[(R*3+U[$])*2+V];_.push(Q)}}}}y.setAttribute("position",new Vt(M,3)),y.setAttribute("normal",new Vt(T,3)),y.setAttribute("uv",new Vt(_,2))}return{shadow:new Float32Array(d),triangles:e,cut:p,added:Math.round(x),skipped:f,pieces:u.size,ms:Math.round(performance.now()-t)}}function rb(n,t,e,i){return(((Math.round(n*40)+64)*129+(Math.round(t*40)+64))*129+(Math.round(e*40)+64))*1e6+(i+5e5)}function ob(n){let t=Math.abs(Oi(n));if(t<_0)return!0;let e=0;for(let i=0;i<n.length;i++){let s=n[i],r=n[(i+1)%n.length];e+=Math.hypot(r[0]-s[0],r[1]-s[1])}return t/e<.001}function Oi(n){let t=0;for(let e=0;e<n.length;e++){let i=n[e],s=n[(e+1)%n.length];t+=i[0]*s[1]-i[1]*s[0]}return t/2}function ab(n){let t=Oi(n)<0?[n[0],n[2],n[1]]:[n[0],n[1],n[2]];return t.flip=Oi(n)<0,t}function v0(n,t,e){let i=[],s=e[0]-t[0],r=e[1]-t[1];for(let o=0;o<n.length;o++){let a=n[o],l=n[(o+1)%n.length],c=s*(a[1]-t[1])-r*(a[0]-t[0]),h=s*(l[1]-t[1])-r*(l[0]-t[0]);if(c>=0&&i.push(a),c>=0!=h>=0){let u=c/(c-h);i.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u])}}return i}function lb(n,t){let[e,i,s]=n,r=i[0]-e[0],o=i[1]-e[1],a=s[0]-e[0],l=s[1]-e[1],c=t[0]-e[0],h=t[1]-e[1],u=r*l-a*o,f=(c*l-a*h)/u,d=(r*h-c*o)/u;return[1-f-d,f,d]}var S0=new je,E0=new Vn,id=new C,M0=new C,w0=new Gt(1,1,1),T0=new Map;function Fs(n,t){let e=T0.get(n);return e||(e=t(),T0.set(n,e)),e}var Mt={box:()=>w0,cyl:(n=16,t=!1)=>Fs("cyl"+n+t,()=>new ie(1,1,1,n,1,t)),cone:(n,t,e=16,i=!1)=>Fs(`cone${n}_${t}_${e}${i}`,()=>new ie(n,t,1,e,1,i)),sphere:(n=16,t=12)=>Fs("sph"+n+"_"+t,()=>new xe(1,n,t)),hemi:(n=24,t=10)=>Fs("hemi"+n+"_"+t,()=>new xe(1,n,t,0,Math.PI*2,0,Math.PI/2)),rbox:(n,t,e,i,s=2)=>Fs(`rb${n}_${t}_${e}_${i}_${s}`,()=>new th(n,t,e,s,i)),torus:(n,t,e=8,i=32,s=Math.PI*2)=>Fs(`tor${n}_${t}_${e}_${i}_${s}`,()=>new Ve(n,t,e,i,s)),plane:()=>Fs("plane",()=>new cn(1,1))};function cb(n,t){let e=n.attributes.position,i=n.attributes.normal,s=n.attributes.uv;s||(s=new ge(new Float32Array(e.count*2),2),n.setAttribute("uv",s));let r=1/t;for(let o=0;o<e.count;o++){let a=Math.abs(i.getX(o)),l=Math.abs(i.getY(o)),c=Math.abs(i.getZ(o)),h,u;l>=a&&l>=c?(h=e.getX(o),u=e.getZ(o)):a>=c?(h=e.getZ(o),u=e.getY(o)):(h=e.getX(o),u=e.getY(o)),s.setXY(o,h*r,u*r)}s.needsUpdate=!0}var eh=class{constructor(t){this.world=t,this.stack=[new $t],this.batches=new Map,this.chunk="ext",this.interior=!1,this.lights=[],this.envOverride=null,this.variants=new Map,this.tris=0,this.seq=0}get M(){return this.stack[this.stack.length-1]}push(t=0,e=0,i=0,s=0){let r=new $t().makeRotationY(s);return r.setPosition(t,e,i),this.stack.push(this.M.clone().multiply(r)),this}pop(){return this.stack.pop(),this}wp(t,e,i){return new C(t,e,i).applyMatrix4(this.M)}worldYaw(t=0){return new Vn().setFromRotationMatrix(this.M,"YXZ").y+t}mat(t,e,i,s=0,r=0,o=0,a=1,l=1,c=1){return E0.set(s,r,o,"YXZ"),S0.setFromEuler(E0),id.set(t,e,i),M0.set(a,l,c),new $t().compose(id,S0,M0).premultiply(this.M)}add(t,e,i=0,s=0,r=0,o=0,a=0,l=0,c=1,h=1,u=1,f={}){return this.addM(t,e,this.mat(i,s,r,o,a,l,c,h,u),f)}variant(t,e){if(e===1||!t.isMeshStandardMaterial)return t;let i=t.uuid+"|"+e,s=this.variants.get(i);return s||(s=t.clone(),s.envMapIntensity=(t.envMapIntensity??1)*e,s.name=t.name+"_i"+e,this.variants.set(i,s)),s}addM(t,e,i,s={}){let r=s.interior!==void 0?s.interior:this.interior,o=s.envScale??(r?this.envOverride??.4:1);e=this.variant(e,o);let a=t.index?t.toNonIndexed():t.clone();for(let f of Object.keys(a.attributes))f!=="position"&&f!=="normal"&&f!=="uv"&&a.deleteAttribute(f);a.attributes.normal||a.computeVertexNormals(),a.attributes.uv||a.setAttribute("uv",new ge(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(i),a.userData.order=this.seq++,globalThis.__GEO_REC&&globalThis.__GEO_REC(a,e);let l=s.uv!==void 0?s.uv:e.userData.uv;l&&!s.keepUV&&!e.userData.keepUV&&cb(a,l);let c=s.chunk||this.chunk,h=c+"|"+e.uuid,u=this.batches.get(h);return u||(u={mat:e,chunk:c,geos:[],interior:s.interior!==void 0?s.interior:this.interior},this.batches.set(h,u)),u.geos.push(a),this.tris+=a.attributes.position.count/3,a}box(t,e,i,s,r,o,a,l=0,c={}){this.add(w0,t,e,i,s,0,l,0,r,o,a,c),c.col&&this.colBox(e,i,s,r,o,a,l,c.col===!0?"solid":c.col,c)}boxB(t,e,i,s,r,o,a,l=0,c={}){this.box(t,e,i+o/2,s,r,o,a,l,c)}wall(t,e,i,s,r,o,a,l,c={}){let h=s-e,u=r-i,f=Math.hypot(h,u),d=Math.atan2(h,u);this.box(t,(e+s)/2,o+a/2,(i+r)/2,l,a,f+(c.extend||0),d,c)}rbox(t,e,i,s,r,o,a,l,c=0,h={}){this.add(Mt.rbox(r,o,a,l,h.seg||2),t,e,i,s,0,c,0,1,1,1,h),h.col&&this.colBox(e,i,s,r,o,a,c,h.col===!0?"solid":h.col,h)}cyl(t,e,i,s,r,o,a=16,l={}){this.add(Mt.cyl(a,!!l.open),t,e,i,s,l.rx||0,l.ry||0,l.rz||0,r,o,l.rz2||r,l),l.col&&this.colCyl(e,i-o/2,s,r,o,l.colSeg||10,l.col===!0?"solid":l.col,l)}pipe(t,e,i,s,r,o,a,l,c=10){let h=new C(e,i,s),u=new C(r,o,a),f=u.clone().sub(h),d=f.length(),p=new je().setFromUnitVectors(new C(0,1,0),f.normalize()),x=new $t().compose(h.add(u).multiplyScalar(.5),p,new C(l,d,l)).premultiply(this.M);this.addM(Mt.cyl(c,!0),t,x)}sphere(t,e,i,s,r,o={}){this.add(Mt.sphere(o.w||16,o.h||12),t,e,i,s,0,0,0,r*(o.sx||1),r*(o.sy||1),r*(o.sz||1),o)}flat(t,e,i,s,r=!1,o={}){let a=jp(e,i||[],r);this.addM(a,t,this.mat(0,s,0),o)}slab(t,e,i,s,r,o={}){let a=Qp(e,i||[],r-s,o.curveSegs||12,o.top!==!1);if(o.bottom==="shadow"){a.index&&(a=a.toNonIndexed());let l=a.attributes.position.array,c=[],h=[];for(let f=0;f<l.length/9;f++)(l[f*9+1]<1e-4&&l[f*9+4]<1e-4&&l[f*9+7]<1e-4?c:h).push(f);let u=f=>{let d=new de;for(let[p,x]of Object.entries(a.attributes)){let g=x.itemSize*3,m=new Float32Array(f.length*g);f.forEach((y,S)=>m.set(x.array.subarray(y*g,y*g+g),S*g)),d.setAttribute(p,new ge(m,x.itemSize))}return d};this.addM(u(c),this.shadowOnly(),this.mat(0,s,0),{...o,interior:!1}),a=u(h)}this.addM(a,t,this.mat(0,s,0),o),o.col&&this.colPoly(e,s,r,o.col===!0?"floor":o.col,{holes:i,tag:o.tag})}geo(t,e,i=0,s=0,r=0,o=0,a=1,l={}){this.add(t,e,i,s,r,0,o,0,a,a,a,l)}shadowOnly(){return this._shadowMat||(this._shadowMat=new ke({colorWrite:!1,depthWrite:!1}),this._shadowMat.name="shadowOnly",this._shadowMat.userData.shadowOnly=!0),this._shadowMat}xz(t,e){let i=id.set(t,0,e).applyMatrix4(this.M);return[i.x,i.z]}yW(t){return t+this.M.elements[13]}colBox(t,e,i,s,r,o,a=0,l="solid",c={}){let h=Math.cos(a),u=Math.sin(a),f=s/2,d=o/2,p=[[-f,-d],[f,-d],[f,d],[-f,d]].map(([x,g])=>this.xz(t+x*h+g*u,i-x*u+g*h));return this.world.add(p,this.yW(e-r/2),this.yW(e+r/2),l,c)}colBoxB(t,e,i,s,r,o,a=0,l="solid",c={}){return this.colBox(t,e+r/2,i,s,r,o,a,l,c)}colCyl(t,e,i,s,r,o=10,a="solid",l={}){let c=[];for(let h=0;h<o;h++){let u=h/o*Math.PI*2;c.push(this.xz(t+Math.cos(u)*s,i+Math.sin(u)*s))}return this.world.add(c,this.yW(e),this.yW(e+r),a,l)}colPoly(t,e,i,s="floor",r={}){let o=t.map(([l,c])=>this.xz(l,c)),a=r.holes?r.holes.map(l=>l.map(([c,h])=>this.xz(c,h))):null;return this.world.add(o,this.yW(e),this.yW(i),s,{...r,holes:a})}colWall(t,e,i,s,r,o,a=.3,l={}){let c=i-t,h=s-e,u=Math.hypot(c,h);return this.colBox((t+i)/2,r+o/2,(e+s)/2,a,o,u,Math.atan2(c,h),"solid",l)}light(t,e,i,s=14677247,r=30,o=14){let a=this.wp(t,e,i);this.lights.push({p:a,color:new ft(s),intensity:r,dist:o})}finalize(t){let e=[],i=[];for(let s of this.batches.values()){let r=s.mat,o=!r.transparent&&!r.alphaTest&&(r.opacity??1)>=1&&!r.userData.shadowOnly;for(let a of s.geos)i.push({g:a,opaque:o,layer:s.interior?1:0})}if(i.sort((s,r)=>s.g.userData.order-r.g.userData.order),this.dedupe=b0(i),this.dedupe.shadow.length){let s=new de;s.setAttribute("position",new ge(this.dedupe.shadow,3));let r=new Y(s,new ke({colorWrite:!1,depthWrite:!1}));r.castShadow=!0,r.receiveShadow=!1,r.name="shadowOnly",r.matrixAutoUpdate=!1,r.updateMatrix(),r.frustumCulled=!1,t.add(r)}for(let s of this.batches.values()){let r=g0(s.geos,!1);for(let a of s.geos)a.dispose();if(!r)continue;r.computeBoundingSphere(),r.computeBoundingBox();let o=new Y(r,s.mat);o.castShadow=!s.mat.userData.noShadow,o.receiveShadow=!s.mat.userData.noShadow||s.mat.transparent===!1,o.matrixAutoUpdate=!1,o.updateMatrix(),o.name=s.chunk+":"+s.mat.name,s.interior&&o.layers.set(1),t.add(o),e.push(o)}return this.batches.clear(),e}};var nh=class{constructor(t=6){this.cell=t,this.grid=new Map,this.all=[],this.stamp=0}add(t,e,i,s="solid",r={}){if(s==="solid"){let f=0;for(let d=0;d<t.length;d++){let p=t[d],x=t[(d+1)%t.length];f+=p[0]*x[1]-x[0]*p[1]}f<0&&(t=t.slice().reverse())}let o={pts:t,y0:e,y1:i,floor:s==="floor",holes:r.holes||null,enabled:!0,tag:r.tag||null,dyn:!!r.dyn,_s:0},a=1e9,l=-1e9,c=1e9,h=-1e9;for(let[f,d]of t)a=Math.min(a,f),l=Math.max(l,f),c=Math.min(c,d),h=Math.max(h,d);if(Object.assign(o,{minX:a,maxX:l,minZ:c,maxZ:h}),!o.floor){o.n=[];for(let f=0;f<t.length;f++){let d=t[f],p=t[(f+1)%t.length],x=p[0]-d[0],g=p[1]-d[1],m=Math.hypot(x,g)||1;o.n.push([g/m,-x/m])}}let u=this.cell;for(let f=Math.floor(a/u);f<=Math.floor(l/u);f++)for(let d=Math.floor(c/u);d<=Math.floor(h/u);d++){let p=f*73856+d,x=this.grid.get(p);x||(x=[],this.grid.set(p,x)),x.push(o)}return this.all.push(o),o}query(t,e,i,s){s.length=0;let r=this.cell,o=++this.stamp;for(let a=Math.floor((t-i)/r);a<=Math.floor((t+i)/r);a++)for(let l=Math.floor((e-i)/r);l<=Math.floor((e+i)/r);l++){let c=this.grid.get(a*73856+l);if(c)for(let h of c)h._s===o||!h.enabled||(h._s=o,!(t+i<h.minX||t-i>h.maxX||e+i<h.minZ||e-i>h.maxZ)&&s.push(h))}return s}contains(t,e,i){if(e<t.minX||e>t.maxX||i<t.minZ||i>t.maxZ||!Qu(t.pts,e,i))return!1;if(t.holes){for(let s of t.holes)if(Qu(s,e,i))return!1}return!0}push(t,e,i,s){let r=t.pts,o=t.n,a=-1e9,l=0;for(let d=0;d<r.length;d++){let p=(e-r[d][0])*o[d][0]+(i-r[d][1])*o[d][1];p>a&&(a=p,l=d)}if(a>=s)return null;if(a<=0)return[o[l][0]*(s-a),o[l][1]*(s-a)];let c=1e9,h=0,u=0;for(let d=0;d<r.length;d++){let p=r[d],x=r[(d+1)%r.length],g=x[0]-p[0],m=x[1]-p[1],y=((e-p[0])*g+(i-p[1])*m)/(g*g+m*m||1);y=Math.max(0,Math.min(1,y));let S=p[0]+g*y,v=p[1]+m*y,b=(e-S)**2+(i-v)**2;b<c&&(c=b,h=S,u=v)}let f=Math.sqrt(c);return f>=s||f<1e-6?null:[(e-h)/f*(s-f),(i-u)/f*(s-f)]}},ih=class{constructor(t){this.world=t,this.pos={x:0,y:6,z:0},this.vel={x:0,y:0,z:0},this.radius=.34,this.height=1.78,this.step=.55,this.grounded=!1,this.groundCol=null,this.groundY=0,this.safe={x:0,y:6,z:0},this._c=[],this.fly=!1}groundAt(t,e,i){let s=this.world.query(t,e,.01,this._c),r=-1e9,o=null;for(let a of s)a.y1>i+this.step+.01||a.y1<=r||this.world.contains(a,t,e)&&(r=a.y1,o=a);return[r,o]}ceilingAt(t,e,i){let s=this.world.query(t,e,.01,this._c),r=1e9;for(let o of s)o.y0<=i+this.step||o.y0<r&&this.world.contains(o,t,e)&&(r=o.y0);return r}move(t,e,i,s){let r=this.pos,o=this.vel;if(this.fly){r.x+=e*t,r.z+=i*t,r.y+=o.y*t;return}if(this.grounded&&this.groundCol&&this.groundCol.dyn){let f=this.groundCol.y1;Math.abs(f-r.y)<.6&&(r.y=f)}let a=this.grounded?14:3;o.x+=(e-o.x)*Math.min(1,a*t),o.z+=(i-o.z)*Math.min(1,a*t),s&&this.grounded&&(o.y=5.2,this.grounded=!1),o.y-=19.6*t,o.y<-40&&(o.y=-40);let l=2;for(let f=0;f<l;f++){r.x+=o.x*t/l,r.z+=o.z*t/l;for(let d=0;d<3;d++){let p=this.world.query(r.x,r.z,this.radius+.1,this._c),x=!1;for(let g of p){if(g.floor||g.y1<=r.y+this.step||g.y0>=r.y+this.height)continue;let m=this.world.push(g,r.x,r.z,this.radius);if(m){r.x+=m[0],r.z+=m[1],x=!0;let y=Math.hypot(m[0],m[1])||1,S=m[0]/y,v=m[1]/y,b=o.x*S+o.z*v;b<0&&(o.x-=b*S,o.z-=b*v)}}if(!x)break}}let[c,h]=this.groundAt(r.x,r.z,r.y),u=r.y+o.y*t;if(o.y<=0&&u<=c+.001)r.y=c,o.y=0,this.grounded=!0,this.groundCol=h,this.groundY=c;else if(o.y<=0&&this.grounded&&c>r.y-this.step&&c<=r.y)r.y=c,o.y=0,this.groundCol=h,this.groundY=c;else if(r.y=u,this.grounded=!1,this.groundCol=null,o.y>0){let f=this.ceilingAt(r.x,r.z,r.y-o.y*t);r.y+this.height>f&&(r.y=f-this.height,o.y=0)}this.grounded&&h&&!h.dyn&&c>1&&(this.safe.x=r.x,this.safe.y=r.y,this.safe.z=r.z)}};function on(n,t,e,i,s,r,o,a={}){let l=s-e,c=r-i,h=Math.hypot(l,c);if(h<.05)return;let u=Math.atan2(l,c),f=a.h||1.1,d=(e+s)/2,p=(i+r)/2,x=Math.max(1,Math.round(h/(a.spacing||1.9)));for(let g=0;g<=x;g++){let m=g/x;n.box(t.metal,e+l*m,o+f/2,i+c*m,.07,f,.07,u)}if(a.glass!==!1)n.box(t.glass,d,o+.1+(f-.24)/2,p,.025,f-.24,h,u);else for(let g of[.35,.7])n.box(t.metal,d,o+g,p,.03,.03,h,u);n.pipe(t.metal,e,o+f,i,s,o+f,r,.045,8),a.led!==!1&&n.box(t.cyanSoft,d,o+f-.075,p,.035,.025,h,u),n.box(t.metal,d,o+.05,p,.06,.05,h,u),a.col!==!1&&n.colWall(e,i,s,r,o,f+.1,.16)}function sd(n,t,e,i,s,r,o,a=1.2){let l=s-e,c=r-i,h=Math.hypot(l,c);if(h<.05)return;let u=Math.atan2(l,c),f=(e+s)/2,d=(i+r)/2;n.box(t.white,f,o+a/2,d,.5,a,h,u),n.box(t.metal,f,o+a+.04,d,.6,.08,h,u),n.box(t.cyanSoft,f,o+a-.12,d,.62,.04,h-.2,u),n.box(t.dark,f,o+.12,d,.54,.24,h,u),n.colWall(e,i,s,r,o,a+.1,.5)}function sh(n,t,e,i,s={}){for(let r=0;r<e.length-1;r++)on(n,t,e[r][0],e[r][1],e[r+1][0],e[r+1][1],i,s)}function Yn(n,t,e,i,s,r,o=1.8){n.push(e,i,s,r),n.rbox(t.whiteSmooth,0,.44,0,o,.09,.52,.04),n.rbox(t.darkSmooth,-o/2+.25,.2,0,.12,.4,.44,.03),n.rbox(t.darkSmooth,o/2-.25,.2,0,.12,.4,.44,.03),n.box(t.cyanDim,0,.39,.2,o-.3,.015,.02),n.colBox(0,.25,0,o,.5,.5),n.pop()}function ks(n,t,e,i,s,r,o){n.push(e,i,s,r),n.rbox(o||t.whiteSmooth,0,.46,0,.48,.06,.46,.025),n.rbox(o||t.whiteSmooth,0,.78,-.22,.48,.5,.05,.025);for(let[a,l]of[[-.2,-.19],[.2,-.19],[-.2,.19],[.2,.19]])n.cyl(t.chrome,a,.22,l,.016,.44,6);n.colBox(0,.4,0,.44,.8,.44),n.pop()}function A0(n,t,e,i,s,r){n.cyl(r||t.orangeGloss,e,i+.72,s,.2,.06,16),n.cyl(t.chrome,e,i+.36,s,.03,.7,8),n.cyl(t.chrome,e,i+.02,s,.2,.03,16)}function Ma(n,t,e,i,s,r=.55,o=.75){n.cyl(t.whiteSmooth,e,i+o-.02,s,r,.04,28),n.cyl(t.chrome,e,i+o/2,s,.05,o-.04,10),n.cyl(t.darkSmooth,e,i+.015,s,r*.55,.03,20),n.colCyl(e,i,s,r*.7,o,10)}function rh(n,t,e,i,s,r,o=3,a){Ma(n,t,e,i,s,.55);for(let l=0;l<o;l++){let c=r+l/o*Math.PI*2;ks(n,t,e+Math.sin(c)*.95,i,s+Math.cos(c)*.95,c+Math.PI,a)}}function $r(n,t,e,i,s,r,o=2.4,a){a=a||t.orange,n.push(e,i,s,r),n.rbox(t.darkSmooth,0,.12,0,o,.24,.9,.04);let l=Math.max(1,Math.round(o/.9)),c=(o-.3)/l;for(let h=0;h<l;h++)n.rbox(a,-o/2+.15+c*(h+.5),.36,.06,c-.03,.22,.74,.08,0,{seg:3});n.rbox(a,0,.66,-.34,o,.52,.22,.09,0,{seg:3}),n.rbox(a,-o/2+.08,.5,0,.16,.36,.9,.06),n.rbox(a,o/2-.08,.5,0,.16,.36,.9,.06),n.box(t.orangeLight,0,.03,.45,o-.2,.02,.02),n.colBox(0,.45,0,o,.9,.9),n.pop()}function Zr(n,t,e,i,s,r,o){n.push(e,i,s,r),n.rbox(o||t.orange,0,.3,0,.9,.36,.85,.1,0,{seg:3}),n.rbox(o||t.orange,0,.7,-.33,.9,.55,.2,.09,0,{seg:3}),n.cyl(t.chrome,0,.06,0,.3,.12,20),n.colBox(0,.45,0,.9,.9,.85),n.pop()}function oh(n,t,e,i,s,r,o=1.4,a=.8){n.push(e,i,s,r),n.rbox(t.whiteSmooth,0,.38,0,o,.05,a,.02),n.rbox(t.darkSmooth,0,.18,0,o-.2,.34,a-.2,.03),n.box(t.cyanDim,0,.02,0,o-.18,.01,a-.18),n.colBox(0,.2,0,o,.4,a),n.pop()}function R0(n,t,e,i,s,r,o,a,l){n.box(l||t.fabricGrey,e,i+.008,s,o,.012,a,r)}function Kr(n,t,e,i,s,r,o=2,a=2,l=.5){n.push(e,i,s,r),n.rbox(t.whiteClean,0,a/2,0,o,a,l,.03);let c=Math.max(1,Math.round(o/.6));for(let h=1;h<c;h++)n.box(t.darkInlay,-o/2+h*o/c,a/2,l/2+.001,.012,a-.1,.01);n.box(t.darkInlay,0,a*.55,l/2+.001,o-.05,.012,.01);for(let h=0;h<c;h++)n.box(t.chrome,-o/2+(h+.5)*o/c+.18,a*.62,l/2+.02,.02,.18,.02);n.box(t.cyanSoft,0,a+.005,l/2-.02,o-.06,.012,.02),n.colBox(0,a/2,0,o,a,l),n.pop()}function Jr(n,t,e,i,s,r,o=4){n.push(e,i,s,r);let a=.6;for(let l=0;l<o;l++){let c=-o*a/2+(l+.5)*a;n.box(t.whiteClean,c,1,0,a-.02,2,.55),n.box(t.darkSmooth,c,1.55,.28,a-.14,.12,.01);for(let h=0;h<4;h++)n.box(t.darkSmooth,c,1.72+h*.04,.281,a-.2,.015,.01);n.box(t.cyan,c+.2,1.1,.285,.03,.03,.01),n.box(t.chrome,c+.2,1,.29,.02,.14,.02)}n.colBox(0,1,0,o*a,2,.55),n.pop()}function Ta(n,t,e,i,s,r,o=1.2,a=1.6){n.push(e,i,s,r),n.box(t.dark,0,a/2,.04,o,a,.08);let l=He(e*100+s*7|0);for(let c=0;c<10;c++)n.box([t.cyan,t.amber,t.green,t.cyanSoft][l()*4|0],-o/2+.12+l()*(o-.24),.2+l()*(a-.4),.085,.05,.03,.01);n.box(t.darkInlay,0,a*.72,.085,o*.7,a*.22,.01),n.pop()}function $n(n,t,e,i,s,r,o,a,l,c=.06){n.push(i,s,r,o),n.rbox(t.darkSmooth,0,0,0,a+c*2,l+c*2,.07,.02),n.add(Mt.plane(),e,0,0,.037,0,0,0,a,l,1,{keepUV:!0}),n.pop()}function wa(n,t,e,i,s,r,o,a=.62,l=.36){n.push(i,s,r,o),n.box(t.darkSmooth,0,l/2+.16,0,a+.03,l+.03,.03),n.add(Mt.plane(),e,0,l/2+.16,.0155,0,0,0,a,l,1,{keepUV:!0}),n.box(t.chrome,0,.08,-.04,.04,.16,.03),n.box(t.darkSmooth,0,.005,-.03,.22,.01,.16),n.pop()}function Aa(n,t,e,i,s,r,o){n.push(e,i,s,r),n.rbox(o||t.fabricGrey,0,.5,0,.5,.08,.5,.03),n.rbox(o||t.fabricGrey,0,.88,-.24,.46,.6,.06,.03),n.cyl(t.chrome,0,.3,0,.03,.4,8);for(let a=0;a<5;a++){let l=a/5*Math.PI*2;n.box(t.darkSmooth,Math.sin(l)*.15,.06,Math.cos(l)*.15,.04,.03,.3,l)}n.pop()}function C0(n,t,e,i,s,r,o,a=1.8,l=["status","log"]){n.push(i,s,r,o),n.rbox(t.whiteSmooth,0,.74,0,a,.05,.8,.02),n.box(t.darkSmooth,-a/2+.06,.37,0,.06,.72,.7),n.box(t.darkSmooth,a/2-.06,.37,0,.06,.72,.7),n.box(t.darkSmooth,0,.45,-.34,a-.12,.5,.03),n.box(t.cyanSoft,0,.765,.39,a-.1,.008,.01);let c=l.length;for(let h=0;h<c;h++){let u=(h-(c-1)/2)*.66;wa(n,t,e[l[h]],u,.765,-.18,-u*.35)}n.box(t.darkSmooth,0,.775,.12,.5,.015,.16),Aa(n,t,.1,0,.75,Math.PI+.2),n.colBox(0,.4,0,a,.8,.8),n.pop()}function Hs(n,t,e,i,s,r,o,a=2.4,l=["status","sonar","log"]){n.push(i,s,r,o),n.rbox(t.darkSmooth,0,.4,0,a,.8,.9,.04);let c=.45,h=Math.sin(c),u=Math.cos(c);n.add(Mt.box(),t.dark,0,.9,.12,c,0,0,a,.06,.62),n.add(Mt.box(),t.cyanSoft,0,.9-.31*h+.03,.12+.31*u,c,0,0,a-.1,.01,.02);let f=He(i*31+r*17|0);for(let p=0;p<26;p++){let x=-a/2+.15+f()*(a-.3);Math.abs(x)<a*.25&&(x+=Math.sign(x||1)*a*.25);let g=.25-f()*.5;n.add(Mt.box(),[t.cyan,t.amber,t.green,t.cyanSoft,t.red][f()*5|0],x,.9-g*h+.035,.12+g*u,c,0,0,.05,.015,.03)}n.add(Mt.plane(),e[l[0]],0,.9+.05*h+.034,.12-.05*u,c-Math.PI/2,0,0,a*.45,.3,1,{keepUV:!0});let d=l.length;for(let p=0;p<d;p++){let x=(p-(d-1)/2)*(a/d);n.push(x,1,-.3,-x*.12),n.box(t.darkSmooth,0,.3,0,a/d-.06,.52,.04),n.add(Mt.plane(),e[l[p]],0,.3,.021,0,0,0,a/d-.12,.46,1,{keepUV:!0}),n.pop()}n.colBox(0,.5,0,a,1,.9),n.pop()}function Fi(n,t,e,i,s,r,o=2.2){n.push(e,i,s,r),n.box(t.darkSmooth,0,o/2,0,.7,o,.9),n.box(t.grating,0,o/2,.451,.6,o-.2,.005);let a=He(e*13+s*29|0);for(let l=0;l<16;l++)n.box([t.green,t.cyan,t.amber,t.green][a()*4|0],-.25+a()*.12,.2+l*(o-.4)/16,.456,.025,.012,.005);n.colBox(0,o/2,0,.7,o,.9),n.pop()}function bn(n,t,e,i,s,r,o=1.2,a=.8,l=.8,c){n.push(e,i,s,r),n.rbox(c||t.dark,0,a/2,0,o,a,l,.04),n.box(t.whiteClean,0,a/2,0,o+.02,.12,l+.02),n.box(t.hazard,o/2-.12,a-.05,0,.16,.08,l+.03),n.colBox(0,a/2,0,o,a,l),n.pop()}function jr(n,t,e,i,s,r,o){n.push(e,i,s,r),n.box(o||t.whiteClean,0,1.3,0,6,2.6,2.4);for(let a=-5;a<=5;a++)n.box(t.gunmetal,a*.55,1.3,1.21,.08,2.4,.04);n.box(t.cyan,0,2.45,1.22,5.6,.04,.02),n.colBox(0,1.3,0,6,2.6,2.4),n.pop()}function In(n,t,e,i,s,r=1,o=1){let a=He(o+(e*97+s*13|0));n.cyl(t.whiteSmooth,e,i+.3*r,s,.32*r,.6*r,18),n.cyl(t.soil,e,i+.59*r,s,.29*r,.02,14);for(let l=0;l<9;l++){let c=a()*Math.PI*2,h=a()*.22*r;n.add(Mt.cone(0,1,5),[t.plant,t.plantDark,t.plantLight][a()*3|0],e+Math.sin(c)*h,i+(.9+a()*.5)*r,s+Math.cos(c)*h,(a()-.5)*.6,a()*3,(a()-.5)*.6,.14*r,(.6+a()*.6)*r,.14*r)}n.colCyl(e,i,s,.32*r,.9*r,8)}function zs(n,t,e,i,s,r,o=2.4,a=.8,l=3){n.push(e,i,s,r),n.rbox(t.whiteSmooth,0,.35,0,o,.7,a,.06),n.box(t.soil,0,.69,0,o-.12,.02,a-.12);let c=He(l);for(let h=0;h<o*5;h++)n.add(Mt.sphere(8,6),[t.plant,t.plantDark,t.plantLight][c()*3|0],(c()-.5)*(o-.3),.8+c()*.15,(c()-.5)*(a-.3),0,c()*3,0,.18+c()*.12,.14+c()*.1,.18+c()*.12);n.box(t.cyanDim,0,.05,a/2+.001,o-.1,.02,.01),n.colBox(0,.4,0,o,.8,a),n.pop()}function I0(n,t,e,i,s){n.cyl(t.darkSmooth,e,i+.45,s,.1,.9,12),n.cyl(t.cyan,e,i+.78,s,.102,.08,12)}function ah(n,t,e,i,s,r,o,a=0,l){n.box(t.darkSmooth,e,i-.015,s,r+.08,.03,o+.08,a),n.box(l||t.light,e,i-.035,s,r,.012,o,a)}function Qr(n,t,e,i,s,r=.14,o=.4,a){n.cyl(t.chrome,e,i+.02,s,r+.02,.04,14),n.cyl(a||t.greenFluid,e,i+o*.45,s,r*.9,o*.8,14),n.cyl(t.glass,e,i+o/2,s,r,o,14,{open:!0}),n.cyl(t.chrome,e,i+o+.02,s,r+.02,.04,14)}function lh(n,t,e,i,s,r,o=2.6,a=1){n.push(e,i,s,r),n.rbox(t.whiteSmooth,0,.9,0,o,.05,a,.02),n.box(t.dark,0,.45,0,o-.1,.84,a-.2),n.box(t.cyanSoft,0,.87,a/2-.08,o-.2,.01,.01),n.colBox(0,.46,0,o,.92,a),n.pop()}function rd(n,t,e,i,s,r,o=1.8){n.push(e,i,s,r),n.box(t.dark,0,.45,0,o,.9,.8),n.box(t.whiteClean,0,1.6,-.3,o,1.4,.2),n.box(t.whiteClean,-o/2+.04,1.6,0,.08,1.4,.8),n.box(t.whiteClean,o/2-.04,1.6,0,.08,1.4,.8),n.box(t.whiteClean,0,2.4,0,o,.4,.8),n.box(t.glass,0,1.55,.38,o-.1,.9,.02),n.box(t.light,0,2.19,0,o-.2,.02,.5),n.colBox(0,1.3,0,o,2.6,.8),n.pop()}function P0(n,t,e,i,s,r){n.push(e,i,s,r),n.box(t.plasticWhite,0,.03,0,.22,.06,.3),n.box(t.plasticWhite,0,.2,-.1,.06,.34,.06),n.add(Mt.cyl(12),t.darkSmooth,0,.3,0,.5,0,0,.035,.22,.035),n.box(t.darkSmooth,0,.12,.02,.16,.02,.14),n.pop()}function od(n,t,e,i,s,r,o=1){n.push(e,i,s,r),n.cyl(t.darkSmooth,0,.25*o,0,.95*o,.5*o,32),n.cyl(t.metal,0,.53*o,0,.88*o,.06*o,32),n.add(Mt.torus(.86*o,.03*o,6,40),t.cyan,0,.5*o,0,Math.PI/2,0,0),n.cyl(t.cryoFluid,0,1.65*o,0,.7*o,2.2*o,28),n.cyl(t.glass,0,1.65*o,0,.76*o,2.24*o,32,{open:!0});for(let a=0;a<4;a++){let l=a/4*Math.PI*2+Math.PI/4;n.box(t.metal,Math.sin(l)*.8*o,1.65*o,Math.cos(l)*.8*o,.07*o,2.3*o,.07*o,l)}n.cyl(t.metal,0,2.95*o,0,.9*o,.4*o,32),n.cyl(t.darkSmooth,0,3.25*o,0,.6*o,.25*o,24),n.add(Mt.torus(.86*o,.025*o,6,40),t.cyan,0,2.77*o,0,Math.PI/2,0,0),n.pipe(t.cable,.3*o,3.3*o,0,.5*o,5.3,.2,.06*o),n.pipe(t.cable,-.3*o,3.3*o,.1,-.6*o,5.3,-.1,.05*o),n.box(t.darkSmooth,0,1*o,.9*o,.4*o,.6*o,.1*o),n.box(t.cyanSoft,0,1.1*o,.955*o,.3*o,.25*o,.01),n.colCyl(0,0,0,.95*o,3.4*o,12),n.pop()}function ad(n,t,e,i,s,r){n.push(e,i,s,r),n.box(t.dark,0,.2,0,4.2,.4,2.2),n.add(Mt.cyl(28),t.gunmetal,0,1.4,0,0,0,Math.PI/2,1,3.6,1);for(let o=-3;o<=3;o++)n.add(Mt.torus(1.02,.06,6,28),t.darkSmooth,o*.5,1.4,0,0,Math.PI/2,0);n.add(Mt.cyl(24),t.dark,2,1.4,0,0,0,Math.PI/2,.8,.5,.8),n.add(Mt.torus(.7,.04,6,28),t.cyan,2.26,1.4,0,0,Math.PI/2,0),n.box(t.hazard,0,.41,1.1,4.2,.02,.1),n.pipe(t.copper,-1.2,2.3,0,-1.2,5.3,0,.12),n.pipe(t.copper,1,2.3,.3,1,5.3,.3,.1),n.colBox(0,1.3,0,4.2,2.6,2.2),n.pop()}function gs(n,t,e,i,s,r){n.push(e,i,s,r),n.cyl(t.darkSmooth,0,.55,0,.06,1.1,10),n.cyl(t.darkSmooth,0,.02,0,.3,.04,16),n.add(Mt.cyl(16),t.whiteSmooth,0,1.2,.1,Math.PI/2-.15,0,0,.1,.7,.1),n.add(Mt.cyl(16),t.chrome,0,1.25,.46,Math.PI/2-.15,0,0,.12,.05,.12),n.colCyl(0,0,0,.3,1.3,8),n.pop()}function Gs(n,t,e,i,s,r,o=3,a=2){n.push(e,i,s,r),n.box(t.whiteClean,0,.7,0,o,1.4,a),n.cyl(t.grating,-o/4,1.42,0,.6,.04,20),n.cyl(t.grating,o/4,1.42,0,.6,.04,20),n.box(t.dark,0,.7,a/2+.01,o-.3,.8,.02),n.box(t.hazard,0,.02,0,o+1.2,.02,.12),n.box(t.hazard,0,.02,0,.12,.02,a+1.2),n.colBox(0,.7,0,o,1.4,a),n.pop()}function ld(n,t,e,i,s,r=1.2){n.cyl(t.darkSmooth,e,i+.45,s,r,.9,40),n.cyl(t.metal,e,i+.92,s,r+.05,.06,40),n.cyl(t.cyan,e,i+.955,s,r*.8,.01,40),n.add(Mt.torus(r+.02,.02,6,48),t.cyan,e,i+.6,s,Math.PI/2,0,0),n.colCyl(e,i,s,r,1,12)}function L0(n,t,e,i,s,r=7){let o=He(r),a=new C(0,1,0),l=[],c=(y,S,v,b)=>{let M=S.clone().sub(y),T=M.length(),_=new ie(b,v,T,10,1,!0),w=new je().setFromUnitVectors(a,M.normalize()),R=new $t().compose(y.clone().add(S).multiplyScalar(.5),w,new C(1,1,1)),P=_.attributes.uv;for(let U=0;U<P.count;U++)P.setXY(U,P.getX(U)*Math.max(1,v*6),P.getY(U)*T*.6);n.addM(_,t.bark,R.premultiply(n.M.clone().multiply(new $t().makeTranslation(e,i,s))));let L=new xe(b*1.02,8,6);n.addM(L,t.bark,new $t().makeTranslation(S.x,S.y,S.z).premultiply(n.M.clone().multiply(new $t().makeTranslation(e,i,s))))},h=(y,S,v,b,M)=>{let T=y.clone(),_=S.clone();for(let R=0;R<3;R++){_.add(new C((o()-.5)*.35,.08+(o()-.3)*.12,(o()-.5)*.35)).normalize();let P=T.clone().addScaledVector(_,v/3),L=b*(1-(R+1)*.12);c(T,P,b*(1-R*.12),L),T=P}if(M<=0||b<.05){for(let R=0;R<26;R++){let P=new C(o()-.5,(o()-.3)*.8,o()-.5).multiplyScalar(2.6);l.push(T.clone().add(P))}return}let w=M>=3?3:2+(o()<.5?1:0);for(let R=0;R<w;R++){let P=R/w*Math.PI*2+o()*1.2,L=.55+o()*.35,U=_.clone().multiplyScalar(1-L).add(new C(Math.cos(P),.35+o()*.3,Math.sin(P)).multiplyScalar(L)).normalize();h(T,U,v*(.66+o()*.12),b*.62,M-1)}if(M<=2)for(let R=0;R<8;R++)l.push(T.clone().add(new C((o()-.5)*2,(o()-.5)*1.5,(o()-.5)*2)))};for(let y=0;y<7;y++){let S=y/7*Math.PI*2+o()*.4;c(new C(Math.cos(S)*.9,.05,Math.sin(S)*.9),new C(Math.cos(S)*.2,1.1,Math.sin(S)*.2),.2,.28)}c(new C(0,0,0),new C(.1,2.6,.05),.62,.52),c(new C(.1,2.6,.05),new C(-.05,4.6,.12),.52,.45);let u=new C(-.05,4.6,.12);for(let y=0;y<4;y++){let S=y/4*Math.PI*2+.4;h(u,new C(Math.cos(S)*.6,1,Math.sin(S)*.6).normalize(),5.2,.34,3)}h(u,new C(0,1,0),5.5,.3,3);let f=new cn(1.25,1.25);f.translate(0,.5,0);let d=t.leaf;d.onBeforeCompile=y=>{y.uniforms.uTime={value:0},d.userData.shader=y,y.vertexShader=`uniform float uTime;
`+y.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
      float ph = instanceMatrix[3].x * 0.7 + instanceMatrix[3].z * 0.9;
      transformed.x += sin(uTime * 1.4 + ph) * 0.05 * uv.y;
      transformed.z += cos(uTime * 1.1 + ph) * 0.05 * uv.y;
      #endif`)};let p=new Po(f,d,l.length),x=new Xe,g=new ft,m=n.M.clone().multiply(new $t().makeTranslation(e,i,s));return l.forEach((y,S)=>{x.position.copy(y).applyMatrix4(m),x.rotation.set((o()-.5)*1.6,o()*Math.PI*2,(o()-.5)*1.6),x.scale.setScalar(.8+o()*.7),x.updateMatrix(),p.setMatrixAt(S,x.matrix),g.setHSL(.26+o()*.06,.45+o()*.2,.32+o()*.16),p.setColorAt(S,g)}),p.castShadow=!0,p.receiveShadow=!0,p.layers.set(1),p}function N0(n,t=1,e=3){let i=He(e),s=new te,r=new xe(.34,28,20),o=r.attributes.position;for(let f=0;f<o.count;f++){let d=o.getX(f),p=o.getY(f),x=o.getZ(f),g=1+Math.sin(d*14+p*5)*.05+Math.sin(x*11-p*7)*.05;o.setXYZ(f,d*g*(1-p*.6),p*1.7*g,x*g*.9)}r.computeVertexNormals();let a=n.creature,l=new Y(r,a);l.position.y=.1,s.add(l);let c=new Y(new xe(.2,20,14),a);c.scale.set(1.1,.9,1.3),c.position.set(0,.72,.05),s.add(c);let h=n.teal;for(let f of[-1,1]){let d=new Y(new xe(.035,10,8),h);d.position.set(f*.1,.76,.26),s.add(d)}for(let f=0;f<14;f++){let d=new Y(new xe(.014+i()*.012,6,4),n.cyan),p=i()*Math.PI*2,x=-.3+i()*.8;d.position.set(Math.sin(p)*.3*(1-x*.4),x+.1,Math.cos(p)*.28),s.add(d)}for(let f of[-1,1]){let d=new Y(new xe(.3,12,8),a);d.scale.set(.9,.12,.45),d.position.set(f*.38,.25,0),d.rotation.z=f*.5,s.add(d)}let u=[];for(let f=0;f<7;f++){let d=f/7*Math.PI*2,p=[];for(let m=0;m<6;m++)p.push(new C(Math.sin(d)*(.15+m*.05)+Math.sin(m+f)*.05,-.35-m*.16,Math.cos(d)*(.15+m*.05)));let x=new Qi(p),g=new Y(new Yo(x,20,.035-f*.001,6),a);s.add(g),u.push(g)}return s.scale.setScalar(t),s.userData.tentacles=u,s.traverse(f=>{f.layers.set(1)}),s}function D0(n,t=2.2,e=3,i="white"){let s=new te,r=i==="glass"?n.glassTint:i==="red"?n.dark:n.whiteClean,o=new te,a=new te;for(let[l,c]of[[o,-1],[a,1]]){let h=new Y(new Gt(t/2,e,.1),r);if(h.position.x=c*t/4,l.add(h),i!=="glass"){let f=new Y(new Gt(.12,e*.55,.12),n.glassTint);f.position.set(c*.18,e*.08,0),l.add(f)}let u=new Y(new Gt(.03,e-.1,.12),i==="red"?n.red:n.cyan);u.position.x=c*.02,l.add(u),s.add(l)}return s.userData={L:o,R:a,w:t},s.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)}),s}var U0=Math.sin(Math.PI/8),an=(n,t)=>[Lt*n-t*Fn,n+t*U0,-3*Math.PI/8],Vs=(n,t)=>[-Lt*n+t*Fn,n+t*U0,3*Math.PI/8];function hb(n,t,e,i,s,r,o,a=1.05,l=.6){let c=new si,h=24;for(let x=0;x<=h;x++){let g=r+(o-r)*x/h,m=[e+Math.sin(g)*(s+l/2),-(i+Math.cos(g)*(s+l/2))];x?c.lineTo(...m):c.moveTo(...m)}for(let x=h;x>=0;x--){let g=r+(o-r)*x/h;c.lineTo(e+Math.sin(g)*(s-l/2),-(i+Math.cos(g)*(s-l/2)))}let u=new Ei(c,{depth:a-.06,bevelEnabled:!1});u.rotateX(-Math.PI/2),n.addM(u,t.whiteSmooth,n.mat(0,6,0));let f=new Ei(c,{depth:.05,bevelEnabled:!1});f.rotateX(-Math.PI/2),n.addM(f,t.darkSmooth,n.mat(0,6+a-.06,0));let d=new Mn(s+l/2-.01,s+l/2+.01,30,1,0,1);for(let x=0;x<h;x++){let g=r+(o-r)*(x+.5)/h;n.box(t.cyan,e+Math.sin(g)*(s+l/2+.005),6.12,i+Math.cos(g)*(s+l/2+.005),(o-r)/h*(s+l/2)+.01,.03,.01,g)}let p=Math.ceil((o-r)*s/.8);for(let x=0;x<p;x++){let g=r+(o-r)*(x+.5)/p;n.colBox(e+Math.sin(g)*s,6+a/2,i+Math.cos(g)*s,(o-r)/p*(s+l/2)+.1,a,l,g)}}function ub(n,t,e,i,s,r){n.push(e,i,s,r),n.cyl(t.darkSmooth,0,.1,0,.45,.2,20),n.cyl(t.cyan,0,.2,0,.46,.02,20);for(let o of[-1,1])n.add(Mt.cyl(12),t.plasticWhite,o*.14,.62,0,0,0,0,.11,.84,.12),n.add(Mt.cyl(12),t.orangeGloss,o*.14,.28,.02,0,0,0,.12,.16,.14);n.rbox(t.plasticWhite,0,1.3,0,.55,.7,.32,.12,0,{seg:3}),n.rbox(t.orangeGloss,0,1.3,-.24,.42,.62,.2,.06),n.box(t.cyan,0,1.45,.165,.2,.05,.01);for(let o of[-1,1])n.add(Mt.cyl(12),t.plasticWhite,o*.36,1.25,0,0,0,o*.18,.08,.7,.09);n.sphere(t.plasticWhite,0,1.86,0,.2,{sy:1.05}),n.sphere(t.glassTint,0,1.88,.06,.16,{sz:.9}),n.cyl(t.chrome,0,.9,-.3,.02,1.8,6),n.colCyl(0,0,0,.45,2,8),n.pop()}function O0(n,t,e,i,s){let r=He(900+s),o=6,a=(l,c,h,u)=>{i.marks["log_"+l]=n.wp(c,h,u)};if(s===0){hb(n,t,6.5,32.2,2.4,-1.2,1.2),Aa(n,t,6.5,o,31.2,Math.PI),wa(n,t,e.status,5.8,o+1,33.3,Math.PI-.2),n.rbox(t.whiteSmooth,6.5,8.6,28.9,5.4,5.2,.5,.15,0,{col:!0}),$n(n,t,e.welcome,6.5,9,29.2,0,4.2,2.36),n.box(t.cyan,6.5,6.25,29.16,5,.04,.02),a("lobby",7.65,o+1.05,34.3),ld(n,t,-1.5,o,36,1.1),i.marks.directory=n.wp(-1.5,o,36),i.holoSpots.push({p:n.wp(-1.5,o+1,36),kind:"colony",s:.028});for(let h of[-1,1])n.rbox(t.whiteSmooth,h*2.6,8.1,39.6,.4,4.2,.5,.15,0,{col:!0}),n.box(t.cyan,h*2.39,8.1,39.6,.02,3.8,.3);n.rbox(t.whiteSmooth,0,10.35,39.6,5.6,.35,.5,.15),n.box(t.cyan,0,10.16,39.6,4.8,.02,.3),n.box(t.hazard,0,6.015,39.6,4.8,.01,.35),$r(n,t,-9,o,40.2,Math.PI,3,t.fabricGrey),oh(n,t,-9,o,38.6,0,1.4,.7),Zr(n,t,-11.6,o,38.3,Math.PI/2,t.orange),In(n,t,-14.5,o,40.4,1.6,5),In(n,t,14.5,o,40.4,1.6,6),In(n,t,11.8,o,28.1,1.4,7);let l=new Mn(2.6,2.68,64);l.rotateX(-Math.PI/2),n.addM(l,t.cyanSoft,n.mat(-1.5,6.02,36));let c=new Mn(3.4,3.44,64);c.rotateX(-Math.PI/2),n.addM(c,t.metalInlay,n.mat(-1.5,6.02,36)),$e(n,t,[{text:"LIFT \u25B8 GALLERY \xB7 MISSION CONTROL \xB7 OBSERVATION",size:44,color:"#e8f6ff",y:128}],-8.2,8.8,27.2,0,2.6,.32),i.marks.lobby=n.wp(0,o,36)}if(s===1){R0(n,t,-5.4,o,31.2,0,6.2,4.4,t.fabricGrey),$n(n,t,e.weather,-5.4,8.6,27.25,0,4.4,2.48),n.box(t.darkSmooth,-5.4,6.35,27.5,5.2,.7,.55),n.box(t.cyanSoft,-5.4,6.71,27.78,5,.01,.01),$r(n,t,-5.4,o,32.6,Math.PI,3.6),$r(n,t,-8.6,o,30.4,Math.PI/2,2.4),Zr(n,t,-2,o,30.2,-Math.PI/2-.3),oh(n,t,-5.3,o,30.3,0,1.6,.9),i.marks.keycard=n.wp(-5,o+.42,30.3),n.rbox(t.whiteSmooth,6.5,6.5,33.2,3.6,1,1.1,.06,0,{col:!0}),n.box(t.darkSmooth,6.5,7.02,33.2,3.7,.05,1.2),n.box(t.orangeLight,6.5,6.05,33.78,3.4,.02,.02);for(let l=0;l<3;l++)A0(n,t,5.3+l*1.2,o,34.3);Kr(n,t,6.5,o,27.45,0,4.8,2.3,.6),n.box(t.darkSmooth,6.5,7,27.8,4.8,.04,.02),Kr(n,t,-10.5,o,27.45,0,1.4,2,.5),n.rbox(t.whiteSmooth,5.5,6.74,38.6,3.2,.05,1.1,.02),n.box(t.darkSmooth,5.5,6.37,38.6,.3,.72,.8,0,{col:!0});for(let l=0;l<3;l++)ks(n,t,4.4+l*1.1,o,37.7,0,t.orangeGloss),ks(n,t,4.4+l*1.1,o,39.5,Math.PI,t.whiteSmooth);Zr(n,t,-10.5,o,40.6,.3),Zr(n,t,-7.8,o,40.8,-.1),Ma(n,t,-9.1,o,40,.35,.45),In(n,t,-14.8,o,40.6,1.5,11),In(n,t,15,o,40.6,1.5,12);{let[l,c,h]=an(31.5,.45);Kr(n,t,l,o,c,h,3.2,2.4,.6)}{let[l,c,h]=an(36.5,.2);Ta(n,t,l,o+.9,c,h,1.4,1.6)}{let[l,c,h]=Vs(36.5,.2);$n(n,t,e.log,l,8.2,c,h,1.8,1)}a("lounge",6.5,o+1.05,33),i.marks.lounge=n.wp(0,o,34)}if(s===2){for(let l of[30.2,34.2,38.2]){let[c,h,u]=an(l,.6);C0(n,t,e,c,o,h,u,2.2,l===34.2?["dna","status","log"]:["sonar","dna"])}lh(n,t,-2.4,o,32.4,0,5.2,1.2),lh(n,t,-2.4,o,37.2,0,5.2,1.2);for(let l=0;l<5;l++)Qr(n,t,-4.4+l*.5,o+.925,32.1,.12,.34+l%2*.1,l%2?t.cryoFluid:t.greenFluid);P0(n,t,-.6,o+.925,32.6,Math.PI),wa(n,t,e.dna,.4,o+.925,32.3,.3);for(let l=0;l<3;l++)Qr(n,t,-.6+l*.45,o+.925,37.5,.1,.3,t.greenFluid);i.marks.robotArm=n.wp(-3.6,o+.925,37.2);{let[l,c,h]=Vs(31,.55);rd(n,t,l,o,c,h,2)}{let[l,c,h]=Vs(35.5,.55);rd(n,t,l,o,c,h,2)}Fi(n,t,8.4,o,27.65,Math.PI*0),Fi(n,t,9.2,o,27.65,0),$n(n,t,e.dna,-5.8,8.4,27.25,0,3.6,2),n.rbox(t.whiteClean,-9.8,7.1,27.6,1.2,2.2,.8,.04,0,{col:!0}),n.box(t.glassTint,-9.8,7.2,28.01,.9,1.7,.02);for(let l=0;l<3;l++)for(let c=0;c<4;c++)Qr(n,t,-10.15+c*.23,6.55+l*.55,27.7,.07,.22,t.cryoFluid);for(let l of[-9,9]){n.box(t.metal,l,7.1,41.2,3,.04,.5),n.box(t.metal,l,7.9,41.2,3,.04,.5);for(let c of[-1.3,1.3])n.box(t.metal,l+c,7,41.2,.04,2,.5);for(let c=0;c<5;c++)Qr(n,t,l-1.1+c*.55,7.12,41.2,.1,.3+c%3*.08,c%2?t.greenFluid:t.cryoFluid),Qr(n,t,l-1.1+c*.55,7.92,41.2,.09,.28,t.greenFluid);n.colBox(l,7,41.2,3,2,.5)}In(n,t,.5,o,41,1.2,21),a("lab",-1.6,o+.925,37.4),i.marks.lab=n.wp(0,o,34)}if(s===3){[[-4.6,30.8],[4.6,30.8],[-9.6,38.6],[-4.8,39.6],[4.8,39.6],[9.6,38.6]].forEach(([c,h],u)=>{od(n,t,c,o,h,Math.atan2(-c,35-h)),i.creatures.push({p:n.wp(c,o+1.55,h),s:.85+u%3*.12,seed:10+u}),i.pods.push(n.wp(c,o,h))}),od(n,t,0,o,35,Math.PI,1.35),i.creatures.push({p:n.wp(0,o+2.1,35),s:1.35,seed:99,main:!0}),i.pods.push(n.wp(0,o,35)),i.marks.specimen=n.wp(0,o,33.2),Hs(n,t,e,0,o,31.6,Math.PI,2.6,["vitals","dna","status"]);for(let c=0;c<3;c++)for(let h=0;h<7;h++){let u=-6+h*2,f=6.3+c*1.25;n.box(t.darkSmooth,u,f+.55,41,1.9,1.15,1),n.box(t.cryoFluid,u,f+.55,40.49,1.6,.9,.02),n.box(t.cyan,u,f+.08,40.5,1.6,.02,.02),(c+h)%2===0&&n.sphere(t.creature,u,f+.5,40.8,.18,{sy:1.4})}n.colBox(0,8.2,41,14,4.4,1);for(let c of[32.5,37.5])n.box(t.gunmetal,0,11,c,20,.25,.3),n.box(t.cyanSoft,0,10.86,c,19.6,.02,.1);i.marks.gantry=n.wp(0,11,35);for(let c of[-8,8])n.box(t.gunmetal,c,11,35,.3,.25,5.5);for(let[c,h]of[[-4.6,30.8],[4.6,30.8],[0,35],[-4.8,39.6],[4.8,39.6]])n.cyl(t.darkSmooth,c,11.3,h,.7,.15,20),n.cyl(t.blue,c,11.22,h,.6,.02,20);n.light(0,10.2,35,3841279,60,16),n.light(-6,9.8,31,2784511,26,12),n.light(6,9.8,39,2784511,26,12);for(let[c,h,u]of[[-2,34,9],[3,38,8],[-6,36,7]]){let f=new cn(u,u*.6);f.rotateX(-Math.PI/2),n.addM(f,t.fxBlueBeam,n.mat(c,6.25,h,0,r()*3,0))}$n(n,t,e.vitals,5.2,8.6,27.25,0,3.4,1.9),$n(n,t,e.alert,-4.4,8.9,27.25,0,2.2,1.24);{let[c,h,u]=an(34,.55);Fi(n,t,c,o,h,u)}{let[c,h,u]=an(36,.55);Fi(n,t,c,o,h,u)}{let[c,h,u]=Vs(37.5,.5);Hs(n,t,e,c,o,h,u,1.8,["vitals","log"])}$e(n,t,[{text:"\u25BC SUBLEVEL ACCESS",size:70,color:"#ffb347",y:128}],-8.7,9.5,34.5,0,1.6,.36,{stripe:"#e8b21a"}),a("cryo",1.3,o+1,31.4),i.marks.cryo=n.wp(0,o,30)}if(s===4){for(let l=0;l<4;l++)ub(n,t,-8.4+l*1.3,o,28,0);n.box(t.darkSmooth,-6.45,9.6,27.4,5.6,.3,.3),n.box(t.cyan,-6.45,9.44,27.55,5.4,.02,.02);for(let l of[30.5,34.5,38.5]){let[c,h,u]=an(l,.45);Jr(n,t,c,o,h,u,5)}{let[l,c,h]=Vs(34,.45);Jr(n,t,l,o,c,h,5)}Yn(n,t,-3,o,34,Math.PI/2,2.4),Yn(n,t,3,o,34,-Math.PI/2,2.4);for(let l of[-1,1])n.rbox(t.whiteSmooth,l*2.6,8.1,39.6,.4,4.2,.5,.15,0,{col:!0}),n.box(t.cyan,l*2.39,8.1,39.6,.02,3.8,.3);n.rbox(t.whiteSmooth,0,10.35,39.6,5.6,.35,.5,.15),n.box(t.hazard,0,6.015,39.6,4.8,.01,.35),bn(n,t,9,o,29,.2,1.4,.9,1),bn(n,t,9.2,o+.9,29.1,.4,1,.6,.8),bn(n,t,7.4,o,29.4,-.1),$n(n,t,e.weather,5,8.6,27.25,0,3,1.7),a("dock",3.2,o+.5,34.2),i.marks.airlock=n.wp(0,o,35)}if(s===5){ad(n,t,4.2,o,31.8,0),ad(n,t,4.2,o,37.2,0),n.box(t.hazard,4.2,6.02,34.5,5.4,.01,.15);for(let l of[29.9,39.1])n.box(t.hazard,4.2,6.02,l,5.4,.01,.15);{let[l,c,h]=an(30.5,.6);Fi(n,t,l,o,c,h)}{let[l,c,h]=an(32,.6);Fi(n,t,l,o,c,h)}{let[l,c,h]=an(38,.55);Hs(n,t,e,l,o,c,h,2.2,["status","log"])}lh(n,t,-4.5,o,30.2,0,3.4,1);for(let l=0;l<4;l++)n.box(t.gunmetal,-5.8+l*.7,o+.95,30.2,.3,.1,.6);bn(n,t,-4.5,o,40.2,0,1.6,1,1),bn(n,t,-2.6,o,40.5,.3),Jr(n,t,-3.5,o,27.45,0,4);for(let l of[-1,.2])n.pipe(t.copper,l,6.2,41.2,l,11.3,41.2,.14);n.pipe(t.gunmetal,-14,10.9,40.8,14,10.9,40.8,.18),n.light(4,10.2,34.5,16773336,30,14),$e(n,t,[{text:"SERVICE LEVEL \u25BC",size:80,color:"#ffb347",y:100},{text:"AUTHORIZED MAINTENANCE ONLY",size:44,color:"#e8f6ff",y:196}],-8.7,9.6,34.5,0,2,.5,{stripe:"#e8b21a"});{let[l,c,h]=an(35,.3);n.push(l,o,c,h),n.box(t.gunmetal,0,1.05,0,1.4,2.1,.5,0,{col:!0}),n.box(t.darkSmooth,0,1.15,.26,1.2,1.5,.02);for(let u=0;u<6;u++)n.box(t.hazard,-.45+u*.18,1.35,.28,.1,.5,.03);n.box(t.hazard,0,.22,.26,1.4,.12,.02),n.box(t.orangeLight,0,2.02,.26,.5,.06,.03),n.pop(),i.marks.breaker=n.wp(...(()=>{let[u,f]=an(35,1.1);return[u,o,f]})()),n.light(...(()=>{let[u,f]=an(35,.9);return[u,o+2.4,f]})(),16738874,8,5)}a("eng",-3.6,o+.925,30.2),i.marks.eng=n.wp(0,o,34)}if(s===6){let l=[-10,-3.4,3.2,9.8];for(let c of l)n.box(t.white,c,7.6,38.9,.2,3.2,5.6,0,{col:!0}),n.box(t.cyanSoft,c,9.2,38.9,.22,.03,5.6);for(let c=0;c<3;c++){let h=(l[c]+l[c+1])/2;n.rbox(t.whiteSmooth,h-1.5,6.3,39.2,2,.6,3.4,.06,Math.PI/2*0,{col:!0}),n.rbox(t.fabricGrey,h-1.5,6.68,39.2,1.9,.18,3.3,.08,0,{seg:3}),n.rbox(t.whiteSmooth,h-1.5,6.84,40.6,1.4,.14,.4,.06,0,{seg:3}),n.box(t.orange,h-1.5,6.8,38.4,1.95,.05,1.2),n.rbox(t.whiteSmooth,h+1.6,6.74,40.9,1.2,.05,.6,.02),n.box(t.darkSmooth,h+1.6,6.37,40.9,1.1,.72,.5,0,{col:!0}),wa(n,t,e.log,h+1.6,6.77,41,Math.PI*0),ks(n,t,h+1.6,o,40.2,Math.PI,t.orangeGloss),ah(n,t,h,11.4,39,1.4,.3,0,t.lightWarm)}Jr(n,t,-6,o,27.45,0,6),Jr(n,t,7,o,27.45,0,5),$r(n,t,0,o,33.2,0,3,t.orange),oh(n,t,0,o,34.9,0,1.3,.7),Zr(n,t,-2.6,o,35.6,Math.PI/2+.3,t.fabricGrey);{let[c,h,u]=Vs(32,.2);$n(n,t,e.weather,c,8.4,h,u,2.2,1.24)}In(n,t,12,o,30,1.4,41),a("quarters",5,o+.8,40.9),i.marks.quarters=n.wp(0,o,34)}if(s===7){for(let l of[31.5,36]){n.rbox(t.whiteSmooth,-3,6.74,l,6,.06,1.2,.03),n.box(t.darkSmooth,-3,6.37,l,5.4,.72,.3,0,{col:!0}),n.box(t.cyanSoft,-3,6.02,l,5.4,.01,.4);for(let c=0;c<5;c++)ks(n,t,-5.4+c*1.2,o,l-.95,0,c%2?t.orangeGloss:t.whiteSmooth),ks(n,t,-5.4+c*1.2,o,l+.95,Math.PI,t.whiteSmooth)}{let[l,c,h]=an(31.2,.5);Kr(n,t,l,o,c,h,3.6,1,.8)}{let[l,c,h]=an(36,.5);Kr(n,t,l,o,c,h,3.6,1,.8)}{let[l,c,h]=an(33.6,.2);$n(n,t,e.status,l,8.6,c,h,2.4,1.3)}for(let l of[30.2,32.4,35,37.2]){let[c,h,u]=an(l,.25);n.push(c,o,h,u),n.box(t.darkSmooth,0,1.4,0,.8,.9,.2),n.box(t.orangeLight,0,1.6,.11,.5,.3,.01),n.pop()}n.rbox(t.darkSmooth,9,7.1,27.6,1.2,2.2,.8,.05,0,{col:!0}),n.add(Mt.plane(),e.log,9,7.5,28.01,0,0,0,.9,1.2,1,{keepUV:!0}),n.box(t.orangeLight,9,8.18,28,1.1,.04,.02);for(let l of[-10.5,-5.5,5.5])rh(n,t,l,o,39.8,.4,3,t.orangeGloss);In(n,t,.3,o,40.8,1.4,51),In(n,t,-14.5,o,40.6,1.5,52),a("mess",-1.2,o+.77,36),i.marks.mess=n.wp(0,o,34)}}function F0(n,t,e,i,s){let o=s===0?[2.5,8.5]:[-6.5,0,6.5];for(let a of o)$r(n,t,a,12,31.9,0,2.6,(s+Math.round(a))%2?t.orange:t.fabricGrey);gs(n,t,s===0?-1:-10,12,33.2,0),gs(n,t,11,12,33.2,0),s!==0?(zs(n,t,-4.2,12,25,0,3.4,.8,70+s),zs(n,t,4.2,12,25,0,3.4,.8,80+s)):zs(n,t,4.2,12,25,0,3.4,.8,80+s),s!==3&&s!==5&&s!==0&&(n.rbox(t.whiteSmooth,-10.5,13.3,28.2,.6,2.6,.6,.15,Math.PI/8,{col:!0}),$n(n,t,[e.sonar,e.weather,e.map,e.status][s%4],-10.5,13.8,28.52,Math.PI/8-.2,.5,.9,.03)),s===2&&(i.marks.log_gallery=n.wp(3,12+.45,31.6)),s===6&&(i.marks.log_gallery2=n.wp(-3.2,12+.45,31.6)),s===0&&(i.marks.gallery=n.wp(0,12,29))}function k0(n,t,e,i){n.rbox(t.dark,0,12+.15,26.4,12.4,.3,2.8,.05,0,{col:!0}),n.box(t.cyan,0,12+.305,27.79,12.2,.01,.03);for(let r of[-4.6,0,4.6])Hs(n,t,e,r,12,31,Math.PI,3.2,r===0?["status","map","sonar"]:r<0?["sonar","weather","log"]:["log","status","dna"]);for(let r of[-4.6,0,4.6])Aa(n,t,r-.6,12,30,.1,t.fabricGrey),Aa(n,t,r+.7,12,30,-.1,t.fabricGrey);for(let r of[-3.4,3.4])Hs(n,t,e,r,12+.3,26.8,Math.PI,3,["map","status"]);i.marks.mcConsole=n.wp(0,12,29.9),i.marks.mc=n.wp(0,12,29),ld(n,t,0,12,28.6,.8),i.holoSpots.push({p:n.wp(0,13,28.6),kind:"globe",s:.6});for(let[r,o,a]of[[-6,15.2,"sonar"],[-2,15.9,"map"],[2,15.9,"status"],[6,15.2,"weather"],[-2,13.9,"log"],[2,13.9,"vitals"]])$n(n,t,e[a],r,o,24.2,0,3.6,2*.9*(o<14.5?.9:1));for(let[r,o,a]of[[-6.5,"holo",.25],[0,"holo",0],[6.5,"holo",-.25]])n.add(Mt.plane(),e[o],r,15,33.2,0,Math.PI+a,0,3.2,1.8,1,{keepUV:!0,interior:!0});for(let r of[31.6,32.6]){let[o,a,l]=an(r,.6);Fi(n,t,o,12,a,l)}for(let r of[31.6,32.6]){let[o,a,l]=Vs(r,.6);Fi(n,t,o,12,a,l)}{let[r,o,a]=an(25.8,.4);Ta(n,t,r,12+.8,o,a,1.2,1.6)}n.cyl(t.darkSmooth,-9.5,12+.5,26.8,.5,1,20,{col:!0}),n.add(Mt.hemi(20,8),t.whiteSmooth,-9.5,12+1.35,26.8,-2.2,0,0,.45,.16,.45),n.light(0,16.5,30,13625599,36,16),n.light(0,16.2,26,7330047,18,10),i.marks.log_mc=n.wp(3.4+.9,12+1.25,27)}function H0(n,t,e,i,s){let o=s===2||s===6;if(o?zs(n,t,10,12,40.8,0,3,.8,110+s):(zs(n,t,-9,12,40.8,0,3,.8,100+s),zs(n,t,9,12,40.8,0,3,.8,110+s)),s%2===1)Gs(n,t,0,12,37.8,0,3.4,2),Gs(n,t,-7,12,37.2,.1,2.4,1.6),n.pipe(t.gunmetal,-5.2,12.9,37.6,-1.7,12.9,37.8,.2),n.box(t.hazard,3.5,12.02,35.2,2.4,.01,.12),$e(n,t,[{text:"MAINTENANCE AREA",size:70,color:"#ffb347",y:128}],2.6,13.2,39,0,1.6,.36,{stripe:"#e8b21a"});else if(o)Yn(n,t,6,12,40.6,Math.PI);else{for(let a of[-4,0,4])n.push(a,12,38.4,0),n.rbox(t.whiteSmooth,0,.3,0,.7,.12,1.9,.05),n.add(Mt.box(),t.fabricGrey,0,.55,-.7,.55,0,0,.66,.08,.7),n.cyl(t.chrome,-.3,.12,.8,.02,.24,6),n.cyl(t.chrome,.3,.12,.8,.02,.24,6),n.colBox(0,.3,0,.7,.6,1.9),n.pop();Ma(n,t,-2,12,39.8,.35,.5),Ma(n,t,2,12,39.8,.35,.5)}s===0&&(i.marks.terrace=n.wp(0,12,38))}function z0(n,t,e,i,s){if(s===4){n.cyl(t.whiteSmooth,0,18+.6,30.6,1.6,1.2,32,{col:!0}),n.add(Mt.torus(1.6,.04,6,40),t.cyan,0,18+1.1,30.6,Math.PI/2,0,0),i.marks.dish=n.wp(0,18+1.2,30.6),Hs(n,t,e,4.4,18,29.2,Math.PI*.85,1.8,["holo","status"]),i.marks.uplink=n.wp(4.2,18,28.1);for(let o of[-8.5,8.5]){n.cyl(t.metal,o,23,31.5,.12,10,10),n.cyl(t.darkSmooth,o,18+.2,31.5,.6,.4,16,{col:!0});for(let a=1;a<5;a++)n.box(t.metal,o,18+a*2,31.5,1.2-a*.2,.05,.05);i.blinkers.push({p:n.wp(o,18+10.2,31.5),color:16724e3,period:1.4})}$e(n,t,[{text:"COMMS UPLINK ARRAY",size:80,color:"#e8f6ff",y:100},{text:"ORBITAL RELAY \xB7 RESTRICTED BEAM PATH",size:40,color:"#ffb347",y:196}],0,20,28.95,Math.PI,2.4,.6),n.cyl(t.darkSmooth,0,18+1.5,29,.05,1,6)}else if(s===2||s===6)gs(n,t,8,18,32.8,0),Yn(n,t,6,18,30.5,0);else if(Yn(n,t,-4,18,31.8,0),Yn(n,t,4,18,31.8,0),gs(n,t,0,18,33.2,0),In(n,t,-9,18,32.8,1.3,200+s),In(n,t,9,18,32.8,1.3,210+s),s%2===1)for(let o of[-1,1])n.push(o*11.5,18,31.5,0),n.box(t.metal,0,.5,0,.1,1,.1),n.add(Mt.box(),t.screenOff,0,1.05,0,-.5,0,0,2.2,.05,1.4),n.add(Mt.box(),t.cyanDim,0,1.08,0,-.5,0,0,2,.005,.02),n.pop();s===0&&(i.marks.roof=n.wp(0,18,30)),s===7&&(i.marks.log_roof=n.wp(-4,18+.45,31.8))}function G0(n,t,e,i,s){let o=He(300+s);s!==3&&s!==5&&(bn(n,t,6,2,25.8,.1,1.2,.8,.8),o()<.6&&bn(n,t,6.1,2+.8,25.8,-.2,.9,.6,.7));for(let a=0;a<3;a++)n.cyl(a%2?t.redPaint:t.gunmetal,-8+a*.7,2+.45,26.3,.3,.9,14,{col:!0});n.box(t.darkSmooth,-1,2+1.4,26.9,1.6,1.2,.2),n.box(t.screenOff,-1,2+1.5,26.79,1.2,.7,.01),s===6&&(i.marks.log_service=n.wp(-1,2+.9,26.4))}var hi=n=>n/Fn;function db(n,t,e,i){let s=(r,o)=>{n.fillStyle=o,n.beginPath(),r.forEach(([a,l],c)=>{let h=t+(a-270)*i,u=e+(l-135)*i;c?n.lineTo(h,u):n.moveTo(h,u)}),n.closePath(),n.fill()};s([[270,555],[955,135],[725,552]],"#FECC00"),s([[955,135],[1188,552],[725,552]],"#B65A21"),s([[955,135],[800,552],[725,552]],"#994E1F"),s([[955,135],[1640,545],[1236,639],[1188,552]],"#FECC00"),s([[270,555],[725,552],[497,968]],"#F4A40B"),s([[270,555],[497,968],[270,1580]],"#E07A24"),s([[497,968],[725,1580],[270,1580]],"#B65A21"),s([[497,968],[537,1040],[270,1580]],"#994E1F"),s([[270,1580],[725,1580],[954,1980]],"#D47024"),s([[725,1580],[1182,1580],[954,1980]],"#B65A21"),s([[1097,1580],[1182,1580],[954,1980]],"#994E1F"),s([[1182,1580],[1230,1497],[1636,1575],[954,1980]],"#F4A40B")}var to=null;function fb(){if(to)return to;let n=document.createElement("canvas");n.width=2048,n.height=512;let t=n.getContext("2d");t.fillStyle="#eef1f3",t.fillRect(0,0,2048,512),t.fillStyle="#d9dee2",t.fillRect(0,470,2048,42),t.strokeStyle="#c3c9ce",t.lineWidth=6,t.strokeRect(10,10,2028,492),db(t,110,70,.2),t.fillStyle="#262c33",t.textBaseline="middle";let e=190;do t.font=`700 ${e}px "Instrument Sans", "Exo 2", Arial, sans-serif`,e-=6;while(t.measureText("CFT KINETIC").width>1440&&e>60);t.fillText("CFT KINETIC",520,225),t.fillStyle="#E17924",t.font='600 58px "Instrument Sans", "Exo 2", Arial, sans-serif';try{t.letterSpacing="10px"}catch{}t.fillText("AEGIS \xB7 OCEAN RESEARCH COLONY",526,372);let i=new Ui(n);return i.colorSpace=ze,i.anisotropy=8,to=new es({map:i,emissiveMap:i,emissive:16777215,emissiveIntensity:.35,roughness:.45,metalness:.05}),to.userData.keepUV=!0,to.name="cftSign",to}function pb(n,t,e,i,s,r,o){let a=o/4;n.push(e,i,s,r),n.box(t.darkSmooth,0,a/2,-.12,o+.3,a+.3,.2),n.add(Mt.plane(),fb(),0,a/2,.001,0,0,0,o,a,1,{keepUV:!0}),n.box(t.cyan,0,-.08,.02,o,.05,.05);for(let l of[-1,1])n.box(t.gunmetal,l*o*.35,-1.5,-.2,.25,3,.25);n.colBox(0,a/2-1,-.1,o+.3,a+2,.4),n.pop()}function eo(n,t,e,i,s,r=1,o=1){let a=He(o);n.rbox(t.whiteSmooth,e,i+.35,s,2*r,.7,2*r,.1,0,{col:!0}),n.box(t.soil,e,i+.71,s,1.8*r,.02,1.8*r),n.cyl(t.bark,e,i+1.7,s,.12*r,2*r,8);for(let l=0;l<6;l++){let c=a()*Math.PI*2,h=a()*.6*r;n.sphere([t.plant,t.plantDark,t.plantLight][l%3],e+Math.sin(c)*h,i+(2.6+a()*1)*r,s+Math.cos(c)*h,(.7+a()*.4)*r,{w:10,h:8})}}function B0(n,t,e,i,s,r){n.push(e,i,s,r),n.cyl(t.dark,0,.3,0,.9,.6,16,{col:!0}),n.box(t.yellow,0,2.6,0,.6,4.2,.6),n.box(t.darkSmooth,0,4.4,.2,1,.9,1.2),n.add(Mt.box(),t.yellow,0,5.3,2.4,-.35,0,0,.45,.45,5.4),n.pipe(t.cable,0,6.2,4.9,0,3,4.9,.03),n.box(t.darkSmooth,0,2.9,4.9,.4,.3,.4),n.pop()}function hh(n,t,e,i,s,r,o,a=4.2){n.push(e,i,s,r),n.box(o,0,1.2,0,a,2.4,2.4,0,{col:!0});for(let l=-3;l<=3;l++)n.box(t.gunmetal,l*a/7.5,1.2,1.21,.07,2.2,.04);n.box(t.cyan,0,2.3,1.22,a-.3,.04,.02),n.pop()}function cd(n,t,e,i,s,r,o=6){n.cyl(t.metal,i,s+o/2,r,.08,o,8);for(let a=1;a<4;a++)n.box(t.metal,i,s+a*o/4,r,.9-a*.2,.04,.04);n.cyl(t.darkSmooth,i,s+.15,r,.4,.3,12,{col:!0}),e.blinkers.push({p:n.wp(i,s+o+.2,r),color:16724e3,period:1.3+i%3*.2})}function W0(n,t){n.chunk="dome",n.interior=!1;let e=19.3,i=23.2,s=5.6;for(let d=0;d<8;d++){n.push(0,0,0,Ue(d));let p=Lt*i;n.box(t.dark,0,e+.4,i,p*2,.8,.6),n.box(t.glassTint,0,e+.8+(s-1.9)/2,i,p*2,s-1.9,.05);for(let x of[-p*.5,0,p*.5])n.box(t.whiteSmooth,x,e+.8+(s-1.9)/2,i,.22,s-1.9,.34);n.box(t.white,0,e+s-.55,i+.05,p*2+.3,1.1,.7),n.box(t.cyan,0,e+s-1.12,i+.4,p*2,.05,.03),n.box(t.cyan,0,e+.82,i+.32,p*2,.05,.03);for(let x=-2;x<=2;x++)n.box(t.lightWarm,x*p*.38,e+s-.55,i+.41,p*.2,.12,.02);n.push(Lt*i,0,i,Math.PI/8),n.rbox(t.whiteSmooth,0,e+s/2,0,.9,s,.9,.22),n.pop(),n.pop()}let r=e+s,o=9.5,a=4.4,l=new ie(hi(o),hi(i+.8),a,8,1,!0).toNonIndexed();l.rotateY(Math.PI/8),l.computeVertexNormals(),n.addM(l,t.white,n.mat(0,r+a/2,0));let c=l.clone();c.scale(.995,1,.995);let h=t.dark.clone();h.side=qe,h.name="towerInner",h.userData={...t.dark.userData},n.addM(c,h,n.mat(0,r+a/2-.02,0));for(let d=0;d<8;d++){let p=(d+.5)*Math.PI/4;n.pipe(t.metal,Math.sin(p)*hi(i+.8),r,Math.cos(p)*hi(i+.8),Math.sin(p)*hi(o),r+a,Math.cos(p)*hi(o),.18);let x=d*Math.PI/4,g=(i+o)/2+1;n.add(Mt.box(),t.grating,Math.sin(x)*g,r+a*.42,Math.cos(x)*g,-.62,x,0,3.2,.12,1.6)}let u=r+a;n.flat(t.glassTint,Zt(o),[Zt(5.4)],u+.02),n.slab(t.dark,Zt(5.4),[],u,u+.7);let f=new ie(hi(5),hi(5),1.4,8,1,!0);f.rotateY(Math.PI/8),n.addM(f,t.glassTint,n.mat(0,u+1.4,0)),n.slab(t.whiteSmooth,Zt(5.8),[],u+2.1,u+2.5),n.add(Mt.torus(hi(5.6),.06,6,8),t.cyan,0,u+2.1,0,Math.PI/2,0,Math.PI/8),n.cyl(t.metal,0,u+4.5,0,.12,4,8),n.sphere(t.red,0,u+6.6,0,.16)}function mb(n,t,e){n.chunk="pylons",n.interior=!1;for(let i=0;i<8;i++){let s=(i+.5)*Math.PI/4;n.push(0,0,0,s),n.box(t.dark,0,1.5,58.8,9,7,7),n.box(t.dark,0,1.25,67,11,6.5,10),n.box(t.white,0,7,67,11.4,5,10.4),n.box(t.hullPaint,0,9.75,67,11,.5,10),n.box(t.dark,0,5.55,67,11.5,.9,10.5),n.box(t.metal,0,10.05,67,11.6,.12,10.6);for(let o of[-1,1])for(let a of[62.2,71.8])n.box(t.darkSmooth,o*5.55,7.3,a,.5,4.2,.5);for(let o=-2;o<=2;o++)n.box(t.lightWarm,o*2.1,5.55,72.28,1.2,.12,.02);n.box(t.glassTint,0,7.3,72.22,9.4,1.3,.05);for(let o of[-1,1])n.box(t.glassTint,o*5.72,7.3,67,.05,1.3,8.6);for(let o of[-4.3,4.3])n.box(t.light,o,6.3,72.24,.2,2.2,.02);n.box(t.cyan,0,4.55,72.23,11.2,.07,.04);for(let o of[-1,1])n.box(t.cyan,o*5.72,4.55,67,.04,.07,10.2);for(let o=-2;o<=2;o++)n.box(t.lightWarm,o*2,2.6,72.03,1.1,.14,.02);$e(n,t,[{text:"0"+(i+1),size:170,color:"#1f252c",y:136}],-3.3,8.3,72.26,0,1.3,1,{bg:"#e6eaee",noPlate:!0,pw:256,ph:256,bright:1}),n.box(t.whiteClean,2.4,10.6,66,3.2,1.2,2.4),n.cyl(t.grating,2.4,11.22,66,.8,.04,16),cd(n,t,e,-3,10,64,5),n.add(Mt.box(),t.hullPaint,0,-.3,75.5,.26,0,0,4.2,2.8,11),n.box(t.dark,0,-1,81.5,6.4,4.6,6.4),n.box(t.hullPaint,0,1.5,81.5,6.2,.4,6.2),n.box(t.cyan,0,.9,81.5,6.7,.12,6.7);for(let o of[-1,1])n.box(t.amber,o*3.34,1.7,84.4,.1,.3,.3);n.cyl(t.gunmetal,0,-.4,85.4,1.4,1.6,20,{rx:Math.PI/2,rz2:1.4}),n.cyl(t.cyan,0,-.4,86.22,1.05,.05,20,{rx:Math.PI/2,rz2:1.05});let r=n.wp(0,0,88);e.staticGlows.push([r.x,3.8,r.z,1.1]),n.pop()}for(let i=0;i<8;i++){n.push(0,0,0,Ue(i));for(let s=-3;s<=2;s++)n.box(t.lightWarm,s*6.5+3.25,4.55,56.23,1.8,.14,.02);n.pop()}}function gb(n,t,e){n.chunk="rooftops",n.interior=!1;for(let i=0;i<8;i++){n.push(0,0,0,Ue(i));let s=12,r=18;i%2===1&&(hh(n,t,8.5,s,38.2,.08,i%4===1?t.whiteClean:t.dark),bn(n,t,12.4,s,38.8,.3,1.2,.8,.8),bn(n,t,12.2,s+.8,38.9,.1,.9,.6,.7),(i===1||i===5)&&B0(n,t,-11.5,s,39.4,.6),cd(n,t,e,-6.5,r,28.8,6)),(i===2||i===6)&&(eo(n,t,6.5,s,38,1,i*7+1),eo(n,t,11.5,s,37.4,1.1,i*7+2),eo(n,t,-10.2,r,30.5,1,i*7+3)),i===0&&eo(n,t,10.5,r,30.6,1,5),i===4&&(hh(n,t,-9.5,s,38.4,0,t.redPaint,3.6),eo(n,t,9.5,s,37.8,1,44)),n.pop()}}var xb=[[-175,180,18,.2,"hub"],[190,-160,16,.5,"pad"],[-240,-55,20,.1,"hub"],[70,-330,17,.7,"hub"],[-95,-440,14,.3,"pad"],[330,95,18,.9,"hub"],[270,-400,15,.4,"hub"],[-370,270,16,.6,"pad"],[470,-240,20,.2,"hub"],[-520,-300,22,.8,"hub"]];function yb(n,t,e,[i,s,r,o,a],l){n.chunk="rig_"+l,n.interior=!1;let c=He(700+l);n.push(i,0,s,o);let h=r>17?6:4;for(let g=0;g<h;g++){let m=(g+.5)/h*Math.PI*2,y=Math.sin(m)*r*.78,S=Math.cos(m)*r*.78;n.cyl(t.hullPaint,y,.5,S,1.5,11,16),n.box(t.dark,y,-1.2,S,4.2,3.4,4.2),n.add(Mt.torus(1.55,.1,6,24),t.cyan,y,1.4,S,Math.PI/2,0,0),n.box(t.amber,y,2.2,S+1.52,.2,.2,.05);let v=(g+1.5)/h*Math.PI*2,b=Math.sin(v)*r*.78,M=Math.cos(v)*r*.78;n.pipe(t.gunmetal,y,4.8,S,b,1.6,M,.22)}n.slab(t.hullPaint,Zt(r),[],5.2,6.2),n.flat(t.deck,Zt(r),[],6.21);let u=Lt*r;for(let g=0;g<8;g++){n.push(0,0,0,Ue(g)),n.box(t.white,0,5.5,r+.1,u*2,.9,.2),n.box(t.cyan,0,5.3,r+.22,u*2-.4,.05,.03),n.box(t.metal,0,7.2,r-.3,u*2,.05,.05);for(let m=-1;m<=1;m++)n.box(t.metal,m*u*.66,6.7,r-.3,.05,1,.05);n.pop()}let f=r*.5,d=4.6;n.slab(t.dark,Zt(f),[],6.2,7.2),n.slab(t.glassTint,Zt(f-.1),[],7.2,8.8),n.slab(t.white,Zt(f+.2),[],8.8,6.2+d);for(let g=0;g<8;g++)n.push(0,0,0,Ue(g)),n.box(t.cyan,0,8.85,f+.22,Lt*f*2,.05,.03),n.box(t.lightWarm,0,8,f-.05,Lt*f*1.4,.1,.02),n.pop();let p=new ie(hi(f*.45),hi(f+.3),2.2,8,1,!1).toNonIndexed();if(p.rotateY(Math.PI/8),p.computeVertexNormals(),n.addM(p,t.whiteSmooth,n.mat(0,6.2+d+1.1,0)),n.cyl(t.metal,0,6.2+d+4.5,0,.1,5,8),e.blinkers.push({p:n.wp(0,6.2+d+7.1,0),color:16724e3,period:1.2+c()}),a==="pad"){let g=new Mn(r*.55,r*.6,48);g.rotateX(-Math.PI/2),n.addM(g,t.yellow,n.mat(0,6.23,0))}else hh(n,t,r*.62,6.2,-r*.2,1.2,c()<.5?t.whiteClean:t.dark,3.6),B0(n,t,-r*.62,6.2,r*.15,2),bn(n,t,r*.45,6.2,r*.45,.4);n.add(Mt.hemi(16,6),t.whiteSmooth,-r*.4,6.2+d+.8,-r*.3,Math.PI-.7,.3,0,1.4,.5,1.4);let x=n.wp(0,0,0);e.staticGlows.push([x.x,r*.35,x.z,.45]),n.pop()}function V0(n,t,e,i,s,r,o,a){let l=i-e,c=(e+i)/2;if(!(l<.5)){n.box(t.dark,c,6.5,s+r*.06,l,1,.12);for(let h of[8.7,12.5]){n.box(t.dark,c,h,s+r*.04,l-.2,1.8,.08),n.box(t.glassTint,c,h,s+r*.1,l-.5,1.4,.05),a&&n.box(t.cyan,c,h+1.02,s+r*.12,l-.5,.05,.03);for(let u=e+1.6;u<i-1.2;u+=3.6)n.box(t.lightWarm,u,h,s+r*.1,1.1,.9,.02)}for(let h=e+.4;h<=i-.3;h+=3.2)n.box(t.whiteSmooth,h,(6+o)/2+.5,s+r*.3,.3,o-7,.6);n.box(t.metal,c,o+.05,s+r*.1,l,.12,.55),n.box(t.white,c,o+.45,s-r*.2,l,.8,.3)}}function vb(n,t,e,i){let{a0:s,a1:r,top:o}=uh;n.interior=!1;for(let a=0;a<8;a++){n.chunk="outer_"+a,n.push(0,0,0,Ue(a));let l=uh.gate(a);for(let p of[-1,1]){let x=p<0?[[-Lt*s,s],[-l,s],[-l,r],[-Lt*r,r]]:[[l,s],[Lt*s,s],[Lt*r,r],[l,r]];n.slab(t.white,x,[],6,o),n.colPoly(x,6,o,"solid"),n.flat(t.dark,x,[],o+.01);let g=p<0?-Lt*r:l,m=p<0?-l:Lt*r,y=p<0?-Lt*s:l,S=p<0?-l:Lt*s;V0(n,t,g,m,r,1,o,!0),V0(n,t,y,S,s,-1,o,!1),n.box(t.cyan,p*(l+.02),8.7,(s+r)/2,.03,5,r-s-1);let v=p*(l+(Lt*52-l)*.5);Gs(n,t,v,o,51.6,0,3,2),hh(n,t,v+p*6.5,o,53.2,0,(a+(p>0?1:0))%3===0?t.redPaint:t.whiteClean,3.8);for(let b=0;b<3;b++)n.push(v-p*(4+b*2.4),o,50.2,0),n.box(t.metal,0,.4,0,.1,.8,.1),n.add(Mt.box(),t.screenOff,0,.9,0,.5,0,0,2,.05,1.3),n.pop();(a+p)%3===0&&cd(n,t,i,v+p*2,o,54.8,7)}let c=11.5,h=(s+r)/2,u=r-s;n.box(t.white,0,(c+o)/2,h,2*l,o-c,u),n.box(t.light,0,c-.02,h,2*l-1,.02,u-1.2);for(let p of[s,r])n.box(t.cyan,0,c-.05,p+(p===r?.05:-.05),2*l,.08,.06);n.box(t.metal,0,o+.05,h,2*l,.12,u),n.light(0,10.3,h,15791871,14,10),(a===0||a===4)&&pb(n,t,0,12.1,r+.35,0,13);let f=p=>{let x=42.4+p*Fn;return[Lt*x,x]};n.wall(t.white,...f(0),...f(1.4),6,6,3,{col:!0}),n.wall(t.white,...f(4.7),...f(6.2),6,6,3,{col:!0}),n.wall(t.white,...f(1.4),...f(4.7),10.2,1.8,3),n.wall(t.cyan,...f(1.4),...f(4.7),10.15,.06,3.05),n.wall(t.metal,...f(0),...f(6.2),12,.1,3.1),(Ra.includes(a)?[-10.6,9.5]:[-9.5,9.5]).forEach((p,x)=>eo(n,t,p,6,45.6,1.35,300+a*5+x));for(let p of[-14,14])Yn(n,t,p,6,47,Math.PI,2);for(let p of[-5,5])I0(n,t,p,6,47.5);n.pop()}}function X0(n,t,e,i){i.staticGlows=i.staticGlows||[],vb(n,t,e,i),mb(n,t,i),gb(n,t,i),xb.forEach((s,r)=>yb(n,t,i,s,r))}var nn={k:0,u:-7,v:30.5,r:1.55,hole:1.75},Nt={u0:-9.6,u1:-7.8,v0:27.3,v1:34.2},Ra=[2,6],uh={a0:48,a1:56.2,top:16,gate:n=>n%2===0?3.2:6.6},_b=(n,t,e,i,s)=>[[t,i],[e,i],[e,s],[t,s]].map(([r,o])=>Re(n,r,o)),no=(n,t)=>[[-Lt*n,n],[Lt*n,n],[Lt*t,t],[-Lt*t,t]];function ud(){let[n,t]=Re(nn.k,nn.u,nn.v);return{x:n,z:t}}var q0=new Map;function $e(n,t,e,i,s,r,o,a,l,c={}){let h=JSON.stringify([e,c.bg,c.border,c.stripe,a,l]),u=q0.get(h);if(!u){let f=u0(e,{w:c.pw||1024,h:c.ph||Math.round(1024*l/a),bg:c.bg||"rgba(4,14,20,0.92)",border:c.border,stripe:c.stripe});u=new ke({map:f,transparent:!!c.transparent,color:new ft(c.bright||1.3,c.bright||1.3,c.bright||1.3)}),u.polygonOffset=!0,u.polygonOffsetFactor=-1,u.polygonOffsetUnits=-4,u.userData.noShadow=!0,u.userData.keepUV=!0,u.name="sign",q0.set(h,u)}n.push(i,s,r,o),c.noPlate||n.box(t.darkSmooth,0,0,-.03,a+.06,l+.06,.05),n.add(Mt.plane(),u,0,0,.001,0,0,0,a,l,1,{keepUV:!0}),n.pop()}function hd(n,t,e,i,s,r,o,a,l={}){let c=n.wp(e,i,s),h=n.worldYaw(r),u=D0(t.M,o,a,l.style||"white");u.position.copy(c).setY(c.y+a/2),u.rotation.y=h,l.interior!==!1&&u.traverse(x=>x.layers.set(1)),t.scene.add(u);let f=n.colBox(e,i+a/2,s,o,a,.3,r,"solid"),d={id:l.id||"door"+t.doors.length,pos:c,yaw:h,w:o,h:a,mesh:u,col:f,open:0,target:0,lock:l.lock||null,name:l.name||"",auto:l.auto!==!1};t.doors.push(d),n.box(t.M.darkSmooth,e,i+a+.1,s,o+.5,.2,.42,r),n.push(e,i,s,r),n.box(t.M.darkSmooth,-o/2-.12,a/2,0,.24,a,.42),n.box(t.M.darkSmooth,o/2+.12,a/2,0,.24,a,.42);let p=l.lock?t.M.red:t.M.cyan;for(let x of[-1,1])n.box(p,x*(o/2+.005),a/2,.215,.03,a-.2,.01),n.box(p,x*(o/2+.005),a/2,-.215,.03,a-.2,.01);return n.box(p,0,a+.03,.215,o,.03,.01),n.box(p,0,a+.03,-.215,o,.03,.01),n.pop(),d}function $0(n,t,e,i){i.M=t;let s=He(4242),r=ud(),o=vn(nn.hole,20,r.x,r.z),a=[3,5].map(c=>_b(c,Nt.u0,Nt.u1,Nt.v0,Nt.v1));n.chunk="hull",n.interior=!1,n.slab(t.hull,Zt(nt.HULL),null,-5,1.6);for(let c=0;c<8;c++){n.push(0,0,0,Ue(c));let h=Lt*54.6;n.box(t.dark,0,2.6,54.6,h*2,2,.5);for(let u=-3;u<=3;u++)n.box(t.grating,u*6.2,2.6,54.9,3.4,1.3,.12),n.box(t.darkSmooth,u*6.2+2.1,2.6,54.95,.4,1.7,.2);n.pipe(t.gunmetal,-h,1.9,55.1,h,1.9,55.1,.2),n.pipe(t.copper,-h,3.35,55.05,h,3.35,55.05,.1),n.box(t.hullPaint,0,3.7,55.3,Lt*55.8*2,.2,1.6),n.box(t.white,0,4.55,56,Lt*56.2*2,1.7,.4),n.box(t.cyan,0,3.95,56.21,Lt*56.2*2-.6,.06,.04);for(let u=-3;u<=3;u++)n.box(t.darkSmooth,u*6.5,4.55,56.22,1.2,.9,.05),n.box(t.grating,u*6.5,4.55,56.25,1,.7,.02);n.push(10.5,0,56.3,0);for(let u=0;u<12;u++)n.box(t.metal,0,.4+u*.4,.15,.6,.04,.04);n.box(t.metal,-.3,2.6,.15,.05,4.8,.05),n.box(t.metal,.3,2.6,.15,.05,4.8,.05),n.pop();for(let u of[-16,0,16])n.cyl(t.rubber,u,.9,55.2,.45,1.8,14,{rx:Math.PI/2,rz2:.45});n.pop()}n.chunk="deck",n.slab(t.hullPaint,Zt(nt.DECK),a,5.4,6),n.colPoly(Zt(nt.DECK),5.4,6,"floor",{holes:a}),n.flat(t.deck,Zt(nt.DECK),[Zt(nt.RING1)],6.01);for(let c=0;c<8;c++){n.push(0,0,0,Ue(c));let h=Lt*nt.DECK;n.box(t.white,0,5.7,nt.DECK+.12,h*2,.6,.24),n.box(t.metal,0,6.03,nt.DECK-.1,h*2,.05,.4);let u=c%2===0?2.6:6.2,f=nt.DECK-.25,d=Lt*f,p=uh.gate(c);sd(n,t,-p,f,-u,f,6),sd(n,t,u,f,p,f,6),n.box(t.cyanSoft,0,6.02,43.4,Lt*43.4*2-.4,.012,.06),n.pop()}for(let c of[1,3,5,7]){n.push(0,0,0,Ue(c));let h=nt.DECK-.3,u=[[-6.2,h],[6.2,h],[9,60],[9,64],[6,67.5],[-6,67.5],[-9,64],[-9,60]],f=[[-3.2,59.5],[3.2,59.5],[3.2,65],[-3.2,65]];n.slab(t.hullPaint,u,[f],5.5,6),n.flat(t.deck,u,[f],6.01),n.box(t.glassFloor,0,5.95,62.25,6.4,.1,5.5),n.box(t.metal,0,6,62.25,.12,.04,5.5),n.box(t.metal,0,6,62.25,6.4,.04,.12),n.box(t.cyan,0,5.9,59.55,6.4,.04,.06),n.box(t.cyan,0,5.9,64.95,6.4,.04,.06),n.colPoly(u,5.5,6,"floor");for(let d=1;d<u.length;d++){let p=u[d],x=u[(d+1)%u.length];n.wall(t.white,p[0],p[1],x[0],x[1],5.37,.73,.2),n.wall(t.cyan,p[0],p[1],x[0],x[1],5.45,.05,.24)}sh(n,t,[[6.2,h],[9,60],[9,64],[6,67.5],[-6,67.5],[-9,64],[-9,60],[-6.2,h]],6);for(let d of[-5,5])n.add(Mt.box(),t.gunmetal,d,3.9,61,-.62,0,0,.35,.35,12),n.cyl(t.hullPaint,d,1.5,64,.5,8,12);gs(n,t,-4.5,6,65.8,0),gs(n,t,4.5,6,65.8,0),Yn(n,t,-6.5,6,61.5,Math.PI/2),Yn(n,t,6.5,6,61.5,-Math.PI/2),$e(n,t,[{text:"OBSERVATION DECK "+["","SE","","NE","","NW","","SW"][c],size:70,color:"#dff6ff",y:70},{text:"GLASS FLOOR \xB7 6 M ABOVE SEA LEVEL",size:40,color:"#4ff2ff",y:160}],0,7.3,h+.6,Math.PI,2.6,.62),n.cyl(t.darkSmooth,0,6.6,h+.6,.06,1.2,8),i.marks["obs"+c]=n.wp(0,6,64),n.pop()}for(let c=0;c<8;c++){let h=Ue(c);n.push(0,0,0,h);let u=Lt*nt.RING1;n.chunk="facade1",n.interior=!1;let f=c===0||c===4,d=2.1;n.push(Lt*nt.RING1,0,nt.RING1,Math.PI/8),n.rbox(t.whiteSmooth,0,9,0,1.1,6,1.1,.3,0,{col:!0}),n.box(t.cyan,0,9,.56,.06,5.2,.02),n.pop(),f?(n.box(t.white,(-u-d)/2,6.3,nt.RING1,u-d,.6,.5),n.box(t.white,(u+d)/2,6.3,nt.RING1,u-d,.6,.5)):n.box(t.white,0,6.3,nt.RING1,u*2,.6,.5),n.box(t.white,0,11.1,nt.RING1+.05,u*2,1.8,.6),n.box(t.cyan,0,10.24,nt.RING1+.36,u*2-1,.05,.04),n.box(t.metal,0,12.02,nt.RING1+.1,u*2,.06,.8);let p=10,x=u*2/p;for(let D=1;D<p;D++){let O=-u+D*x;f&&Math.abs(O)<d+.2||n.box(t.metal,O,8.4,nt.RING1,.12,3.6,.34)}let g=c===3?t.glassFrost:t.glassTint;if(f?(n.box(g,(-u-d)/2,8.4,nt.RING1,u-d,3.6,.04),n.box(g,(u+d)/2,8.4,nt.RING1,u-d,3.6,.04),n.box(g,0,9.65,nt.RING1,d*2,1.1,.04)):n.box(g,0,8.4,nt.RING1,u*2,3.6,.04),f){n.colBox((-u-d)/2,8.7,nt.RING1,u-d,5.4,.35),n.colBox((u+d)/2,8.7,nt.RING1,u-d,5.4,.35),n.rbox(t.whiteSmooth,0,10.5,nt.RING1+2,7.4,.36,3.6,.15),n.box(t.cyan,0,10.3,nt.RING1+3.8,7,.04,.04);for(let D of[-1,1])n.rbox(t.whiteSmooth,D*3.4,8.2,nt.RING1+3.4,.35,4.4,.35,.12,0,{col:!0}),n.box(t.cyan,D*3.4,8.2,nt.RING1+3.58,.04,3.8,.02);bb(n,t,nt.RING1+2),hd(n,i,0,6,nt.RING1,0,3.6,3,{style:"glass",id:c===0?"mainEntrance":"dockEntrance",interior:!1}),$e(n,t,[{text:c===0?"AEGIS \xB7 MAIN ENTRANCE":"MARINE DOCK ACCESS",size:80,color:"#e8f6ff",y:128}],0,10.1,nt.RING1+.4,0,3.8,.48,{bg:"rgba(3,12,18,0.95)"})}else n.colBox(0,8.7,nt.RING1,u*2,5.4,.35);if(c===3){for(let D=0;D<40;D++)n.box(t.darkSmooth,-u+.4+D*(u*2-.8)/39,8.4,nt.RING1-.25,.12,3.5,.02,.6);n.box(t.dark,0,8.4,nt.RING1-.4,u*2-.4,3.7,.1)}n.chunk="ring1_"+c,n.interior=!0,n.envOverride=c===3?.12:null;let m=Lt*nt.COR,y=nt.COR,S=Lt*nt.RING1,v=nt.RING1;n.wall(t.white,m,y,S,v,6,5.4,.3,{col:!0,extend:-.6}),n.wall(t.darkSmooth,m,y,S,v,6,.14,.34,{extend:-.6}),n.wall(t.cyanSoft,m,y,S,v,9.6,.04,.33,{extend:-.8});let b=Lt*nt.COR;if(c===0){n.box(t.white,(-b-5)/2,8.7,nt.COR,b-5,5.4,.3,0,{col:!0}),n.box(t.white,(b+5)/2,8.7,nt.COR,b-5,5.4,.3,0,{col:!0}),n.box(t.white,0,10.7,nt.COR,10,1.4,.3),n.box(t.cyan,0,9.98,nt.COR,10,.04,.34);for(let D of[-1,1])n.rbox(t.whiteSmooth,D*5.2,8.7,nt.COR,.6,5.4,.6,.2,0,{col:!0})}else{n.box(t.white,(-b-2.2/2-.25)/2,8.7,nt.COR,b-2.2/2-.25,5.4,.3,0,{col:!0}),n.box(t.white,(b+2.2/2+.25)/2,8.7,nt.COR,b-2.2/2-.25,5.4,.3,0,{col:!0}),n.box(t.white,0,9+(5.4-3)/2+.1,nt.COR,2.2+.5,5.4-3-.2,.3);let z=["","CREW LOUNGE","RESEARCH LAB","CRYOGENICS","DOCK AIRLOCK","ENGINEERING","CREW QUARTERS","MESS HALL"],J=c===3;hd(n,i,0,6,nt.COR,0,2.2,3,{style:J?"red":"white",lock:J?"cryo":null,id:"door_r"+c,name:z[c]}),$e(n,t,[{text:z[c],size:86,color:J?"#ff6a5c":"#e8f6ff",y:100},{text:"L1 \xB7 SECTOR "+(c+1),size:44,color:J?"#ff9a8a":"#4ff2ff",y:196}],0,9.75,nt.COR-.2,Math.PI,2.1,.5,J?{stripe:"#ff2a24"}:{}),J&&(n.add(Mt.plane(),e.alert,1.9,7.8,nt.COR-.17,0,Math.PI,0,.9,.5,1,{keepUV:!0}),n.box(t.hazard,0,6.02,nt.COR-.7,2.6,.01,.8))}n.box(t.darkSmooth,0,6.07,nt.COR,b*2,.14,.34);let M=Lt*nt.ATRIUM,T=c%2===0,_=1.8,w=T?[[-M,-_],[_,M]]:[[-M,M]];for(let[D,O]of w){n.box(t.glass,(D+O)/2,8.2,nt.ATRIUM,O-D,4.2,.04,0,{col:!0}),n.box(t.darkSmooth,(D+O)/2,6.06,nt.ATRIUM,O-D,.12,.2);let z=Math.max(1,Math.round((O-D)/2.4));for(let J=0;J<=z;J++)n.box(t.metal,D+(O-D)*J/z,8.2,nt.ATRIUM,.1,4.2,.18)}n.box(t.white,0,10.9,nt.ATRIUM,M*2,1,.3),n.box(t.cyan,0,10.38,nt.ATRIUM-.16,M*2,.04,.02),T&&(n.box(t.white,0,9.85,nt.ATRIUM,_*2,1.1,.3),n.box(t.cyan,0,9.28,nt.ATRIUM,_*2,.03,.32)),n.push(Lt*nt.ATRIUM,0,nt.ATRIUM,Math.PI/8),n.rbox(t.whiteSmooth,0,8.7,0,.6,5.4,.6,.2,0,{col:!0}),n.pop();let R=no(nt.COR,nt.RING1),P=no(nt.ATRIUM,nt.COR),L=c===3||c===5?[[[Nt.u0,Nt.v0],[Nt.u1,Nt.v0],[Nt.u1,Nt.v1],[Nt.u0,Nt.v1]]]:[],U=c===5?t.floorLight:t.floor;n.flat(U,R,L,6.012),n.flat(t.floorLight,P,[],6.012),n.box(t.cyanSoft,0,6.02,24.5,Lt*24.5*2-.3,.012,.05);let N=c===0?[vn(nn.hole,20,nn.u,nn.v)]:[];if(n.flat(t.whiteClean,no(nt.ATRIUM,nt.COR),[],11.39,!0),n.flat(c===3?t.dark:t.whiteClean,no(nt.COR,nt.RING1),N,11.39,!0),n.box(t.darkSmooth,0,11.37,24.5,Lt*24.5*2,.04,.6),n.box(t.light,0,11.345,24.5,Lt*24.5*2-.2,.012,.4),n.light(0,9.8,24.5,15136511,18,13),c!==3){for(let[D,O]of[[-5,31],[5,31],[-8,37.5],[0,37.5],[8,37.5]])c===0&&Math.hypot(D-nn.u,O-nn.v)<3||ah(n,t,D,11.4,O,3.2,.5,0,c===5?t.lightCool:t.light);n.light(-4,9.4,33,15791871,24,16),n.light(5,9.4,38,15791871,20,14)}n.envOverride=c===3?.1:null,O0(n,t,e,i,c),n.envOverride=null,n.pop()}n.chunk="deck2",n.interior=!1,n.slab(t.hullPaint,Zt(nt.RING1+.2),[Zt(nt.ATRIUM),o],11.4,12,{top:!1,bottom:"shadow"}),n.colPoly(Zt(nt.RING1+.2),11.4,12,"floor",{holes:[Zt(nt.ATRIUM),o]}),n.flat(t.deck,Zt(nt.RING1+.2),[Zt(nt.L2OUT)],12.01),n.flat(t.dark,Zt(nt.L2IN),[Zt(nt.ATRIUM)],12.01);for(let c=0;c<8;c++){n.push(0,0,0,Ue(c)),n.chunk="terrace",n.interior=!1;let h=nt.RING1-.05,u=Lt*h;Ra.includes(c)?(on(n,t,-u,h,-1.5,h,12),on(n,t,1.5,h,u,h,12)):on(n,t,-u,h,u,h,12),H0(n,t,e,i,c),n.pop()}for(let c=0;c<8;c++){n.push(0,0,0,Ue(c)),n.chunk="facade2",n.interior=!1;let h=Lt*nt.L2OUT;n.push(Lt*nt.L2OUT,0,nt.L2OUT,Math.PI/8),n.rbox(t.whiteSmooth,0,15,0,.9,6,.9,.25,0,{col:!0}),n.box(t.cyan,0,15,.46,.05,5,.02),n.pop(),n.box(t.white,0,12.18,nt.L2OUT,h*2,.36,.45),n.box(t.white,0,17.325,nt.L2OUT+.05,h*2,1.25,.55),n.box(t.cyan,0,16.72,nt.L2OUT+.33,h*2-1,.05,.04),n.box(t.metal,0,18.02,nt.L2OUT+.1,h*2,.06,.8),n.box(t.glassTint,0,14.5,nt.L2OUT,h*2,4.3,.04);for(let d=1;d<8;d++)n.box(t.metal,-h+d*h*2/8,14.5,nt.L2OUT,.1,4.3,.3);n.colBox(0,14.7,nt.L2OUT,h*2,5.4,.35),n.chunk="ring2_"+c,n.interior=!0;let u=Lt*nt.L2IN;if(c!==4){n.box(t.glass,0,14.6,nt.L2IN,u*2,4.8,.04,0,{col:!0});for(let d=0;d<=4;d++)n.box(t.metal,-u+d*u*2/4,14.6,nt.L2IN,.1,4.8,.2);n.box(t.darkSmooth,0,12.1,nt.L2IN,u*2,.2,.3),n.box(t.white,0,17.2,nt.L2IN,u*2,.4,.3)}else n.box(t.dark,0,14.7,nt.L2IN,u*2,5.4,.3,0,{col:!0});n.push(Lt*nt.L2IN,0,nt.L2IN,Math.PI/8),n.rbox(t.whiteSmooth,0,14.7,0,.55,5.4,.55,.2,0,{col:!0}),n.pop();let f=c===0?[vn(nn.hole,20,nn.u,nn.v)]:[];if(n.flat(c===4?t.floor:t.floorLight,no(nt.L2IN,nt.L2OUT),f,12.02),n.flat(t.whiteClean,no(nt.L2IN,nt.L2OUT),f,17.39,!0),n.box(t.darkSmooth,0,17.37,29,Lt*29*2,.04,.7),n.box(c===4?t.lightCool:t.light,0,17.345,29,Lt*29*2-.2,.012,.5),n.light(0,15.8,29,15398655,20,14),c===3||c===4){let d=Lt*nt.L2IN,p=nt.L2IN,x=Lt*nt.L2OUT,g=nt.L2OUT,m=29,y=2.2,S=(m-nt.L2IN)/Fn,v=L=>[Lt*L,L],b=m-y/2*Fn,M=m+y/2*Fn;n.wall(t.white,d,p,...v(b),12,5.4,.3,{col:!0}),n.wall(t.white,...v(M),x,g,12,5.4,.3,{col:!0}),n.wall(t.white,...v(b),...v(M),15,2.4,.3);let[T,_]=v(m);hd(n,i,T,12,_,Math.PI/8-Math.PI/2+Math.PI,y,3,{id:"door_mc"+c,name:"MISSION CONTROL"});let w=Math.sin(Math.PI/8),R=c===3?-Fn:Fn,P=c===3?w:-w;$e(n,t,[{text:"MISSION CONTROL",size:86,color:"#e8f6ff",y:100},{text:"L2 \xB7 COMMAND",size:44,color:"#4ff2ff",y:196}],T+R*.2,15.9,_+P*.2,Math.atan2(R,P),2.1,.5)}c===4?k0(n,t,e,i):F0(n,t,e,i,c),n.pop()}n.chunk="deck3",n.interior=!1;let l=vn(24,64);n.slab(t.hullPaint,Zt(nt.L2OUT+.2),[l,o],17.4,18,{curveSegs:32}),n.colPoly(Zt(nt.L2OUT+.2),17.4,18,"floor",{holes:[l,o]}),n.flat(t.deck,Zt(nt.L2OUT+.2),[vn(26,64),o],18.01),n.chunk="roof";for(let c=0;c<8;c++){n.push(0,0,0,Ue(c));let h=nt.L2OUT+.1,u=Lt*h;Ra.includes(c)?(on(n,t,-u,h,-1.5,h,18),on(n,t,1.5,h,u,h,18)):on(n,t,-u,h,u,h,18),z0(n,t,e,i,c),n.pop()}n.chunk="dome",n.slab(t.whiteSmooth,vn(26.1,72),[vn(24,72)],18,19.3,{curveSegs:40}),n.add(Mt.torus(26.12,.05,6,120),t.cyan,0,18.9,0,Math.PI/2,0,0),n.add(Mt.torus(26.12,.05,6,120),t.cyan,0,18.4,0,Math.PI/2,0,0);for(let c=0;c<36;c++){let h=c/36*Math.PI*2;n.colBox(Math.sin(h)*25.05,18.65,Math.cos(h)*25.05,4.5,1.3,2.2,h)}W0(n,t);for(let c of Ra)n.push(0,0,0,Ue(c)),n.chunk="stairs",n.interior=!1,Y0(n,t,nt.RING1+.25,nt.RING1+2.75,li.D1,li.D2),Y0(n,t,nt.L2OUT+.25,nt.L2OUT+2.75,li.D2,li.D3),n.pop();n.chunk="lift",n.interior=!1,n.push(0,0,0,Ue(nn.k));{let{u:c,v:h,r:u}=nn,f=21.4;n.cyl(t.glass,c,(6+f)/2,h,u,f-6,40,{open:!0});for(let R=0;R<6;R++){let P=R/6*Math.PI*2+Math.PI/6;n.box(t.metal,c+Math.sin(P)*u,(6+f)/2,h+Math.cos(P)*u,.12,f-6,.12,P)}for(let R of[6.05,11.7,12.2,17.7,18.2,f-.2])n.add(Mt.torus(u,.08,6,40),t.metal,c,R,h,Math.PI/2,0,0);n.cyl(t.whiteSmooth,c,f+.2,h,u+.25,.4,40),n.add(Mt.torus(u+.25,.04,6,40),t.cyan,c,f,h,Math.PI/2,0,0);let d=16;for(let R=0;R<d;R++){let P=R/d*Math.PI*2,L=(R+1)/d*Math.PI*2,U=(P+L)/2;Math.abs(U-Math.PI/2)<.45||n.colWall(c+Math.sin(P)*(u+.05),h+Math.cos(P)*(u+.05),c+Math.sin(L)*(u+.05),h+Math.cos(L)*(u+.05),6,f-6,.15)}let p=[li.D1,li.D2,li.D3],x=p.map((R,P)=>n.colBox(c+u+.05,R+((P<2?p[P+1]:f)-R)/2,h,.15,(P<2?p[P+1]:f)-R,1.4,0,"solid")),g=n.colCyl(c,5.7,h,u-.05,.3,14,"solid",{dyn:!0}),m=new te,y=n.wp(c,0,h);m.position.set(y.x,6,y.z);let S=new Y(new ie(u-.06,u-.06,.3,36),t.darkSmooth);S.position.y=-.15,m.add(S);let v=new Y(new Ve(u-.1,.03,6,36),t.cyan);v.rotation.x=Math.PI/2,v.position.y=.02,m.add(v);let b=new Y(new ie(u-.06,u-.06,.2,36),t.whiteSmooth);b.position.y=2.9,m.add(b);let M=new Y(new ie(.7,.7,.02,30),t.light);M.position.y=2.79,m.add(M);let T=new Y(new Gt(.1,.5,.3),t.darkSmooth);T.position.set(-u+.2,1.2,0),m.add(T);let _=new Y(new Gt(.02,.4,.22),t.cyanSoft);_.position.set(-u+.26,1.2,0),m.add(_);let w=new Y(new Ve(u-.15,.03,6,30,Math.PI*1.4),t.chrome);w.rotation.set(Math.PI/2,0,Math.PI*.8),w.position.y=1,m.add(w),m.rotation.y=Ue(nn.k),m.traverse(R=>{R.isMesh&&(R.castShadow=!0,R.receiveShadow=!0)}),i.scene.add(m),i.elevator={car:g,carMesh:m,gates:x,levels:p,y:li.D1,target:li.D1,level:0,center:y,r:u},p.forEach((R,P)=>{n.box(t.darkSmooth,c+u+.25,R+1.25,h-1.1,.08,.36,.22),n.box(t.cyan,c+u+.3,R+1.25,h-1.1,.02,.1,.1),i.marks["liftCall"+P]=n.wp(c+u+.6,R,h-.9),$e(n,t,[{text:["LEVEL 1 \xB7 LOBBY","LEVEL 2 \xB7 GALLERY","LEVEL 3 \xB7 OBSERVATION"][P],size:64,color:"#e8f6ff",y:128}],c+u+.32,R+2.75,h,Math.PI/2,1.6,.4)})}n.pop(),Sb(n,t,e,i,s),Eb(n,t,e,i)}function bb(n,t,e){for(let i of[-2.4,0,2.4])n.box(t.light,i,10.3,e,1.4,.02,.3)}function Y0(n,t,e,i,s,r){let a=(r-s)/20,l=.34,c=-1.4,h=1.4,u=i-e,f=(e+i)/2,d=c-19*l;for(let p=0;p<19;p++){let x=d+p*l,g=s+(p+1)*a;n.box(t.whiteClean,x+l/2,(s+g)/2,f,l,g-s,u,0,{col:!0}),n.box(t.darkSmooth,x+l/2,g+.005,f,l-.02,.012,u-.04),n.box(t.cyanSoft,x+l-.03,g+.01,f,.03,.012,u-.1),n.box(t.glass,x+l/2,g+.55,i-.05,l,1,.025),n.colBox(x+l/2,g+.6,i-.05,l,1.2,.16)}n.box(t.whiteClean,0,r-.25,f,h-c,.5,u,0,{col:"solid"}),n.box(t.darkSmooth,0,r+.005,f,h-c,.012,u),n.rbox(t.whiteSmooth,h-.3,(s+r-.5)/2,i-.4,.4,r-s-.5,.4,.12,0,{col:!0}),on(n,t,c,i-.05,h,i-.05,r),on(n,t,h,i-.05,h,e+.05,r),n.pipe(t.metal,d,s+a+1.08,i-.05,c,r+1.08,i-.05,.045),n.pipe(t.cyanSoft,d,s+a+1,i-.05,c,r+1,i-.05,.015),n.box(t.white,d+19*l/2,(s+r)/2,i+.02,19*l,.01,.01)}function Sb(n,t,e,i,s){n.chunk="atrium",n.interior=!0,n.flat(t.floor,Zt(nt.ATRIUM),[],6.012);for(let[l,c,h]of[[4.6,t.metalInlay,.08],[10.6,t.cyanSoft,.05],[14.4,t.metalInlay,.08],[16.5,t.cyanSoft,.05]]){let u=new Mn(l-h,l+h,96);u.rotateX(-Math.PI/2),n.addM(u,c,n.mat(0,6.02,0))}n.cyl(t.whiteSmooth,0,6.35,0,3.6,.7,64,{col:!0,colSeg:16}),n.add(Mt.torus(3.6,.06,6,64),t.metal,0,6.7,0,Math.PI/2,0,0),n.add(Mt.torus(3.62,.03,6,64),t.cyan,0,6.1,0,Math.PI/2,0,0),n.cyl(t.grass,0,6.71,0,3.5,.02,48);for(let l=0;l<70;l++){let c=s()*Math.PI*2,h=1.2+s()*2.1;n.add(Mt.cone(0,1,5),[t.plant,t.plantDark,t.plantLight][s()*3|0],Math.sin(c)*h,6.9+s()*.2,Math.cos(c)*h,(s()-.5)*.5,s()*3,(s()-.5)*.5,.12,.4+s()*.4,.12)}i.tree=L0(n,t,0,6.72,0,11),i.scene.add(i.tree);for(let l=0;l<12;l++){let c=l/12*Math.PI*2+Math.PI/12;l%3!==1&&(n.push(Math.sin(c)*4.4,6,Math.cos(c)*4.4,c),n.rbox(t.whiteSmooth,0,.42,0,2,.08,.5,.04),n.rbox(t.darkSmooth,0,.2,0,1.6,.4,.34,.03),n.box(t.cyanDim,0,.36,.2,1.8,.015,.02),n.pop())}let r=(l,c,h,u,f,d)=>{let p=new si,x=28;for(let T=0;T<=x;T++){let _=u+(f-u)*T/x,w=[Math.sin(_)*c,-Math.cos(_)*c];T?p.lineTo(...w):p.moveTo(...w)}for(let T=x;T>=0;T--){let _=u+(f-u)*T/x;p.lineTo(Math.sin(_)*l,-Math.cos(_)*l)}let g=new Ei(p,{depth:h,bevelEnabled:!1,curveSegments:4});g.rotateX(-Math.PI/2),n.addM(g,t.whiteSmooth,n.mat(0,6,0));let m=new ts(p);m.rotateX(-Math.PI/2),n.addM(m,t.soil,n.mat(0,6+h+.01,0));let y=new Mn(c-.02,c+.02,40,1,u-Math.PI/2,f-u);y.rotateX(-Math.PI/2),n.addM(y,t.cyanSoft,n.mat(0,6.08,0));let S=Math.ceil((f-u)*(l+c)/2/.9);for(let T=0;T<S;T++){let _=u+(f-u)*(T+.5)/S,w=(l+c)/2,R=(f-u)/S*c+.1;n.colBox(Math.sin(_)*w,6+h/2,Math.cos(_)*w,R,h,c-l,_)}let v=Math.round((f-u)*(l+c)/2*d);for(let T=0;T<v;T++){let _=u+(f-u)*(T+s()*.8)/v;for(let w=0;w<2;w++){let R=l+(c-l)*(w+.5)/2,P=Math.sin(_)*R,L=Math.cos(_)*R,U=.16+s()*.1;n.add(Mt.sphere(7,5),[t.plant,t.plantLight,t.plantDark][s()*3|0],P,6+h+U*.6,L,0,s()*3,0,U*1.2,U*.8,U*1.2)}}let b=Math.max(1,Math.round((f-u)*c/3.2));for(let T=0;T<=b;T++){let _=u+(f-u)*T/b,w=Math.sin(_)*(l-.05),R=Math.cos(_)*(l-.05),P=Math.sin(_)*(c+.05),L=Math.cos(_)*(c+.05);n.pipe(t.metal,w,6+h,R,w,6+h+1.3,R,.03),n.pipe(t.metal,P,6+h,L,P,6+h+1.3,L,.03),n.pipe(t.metal,w,6+h+1.3,R,P,6+h+1.3,L,.03)}let M=new Mn((l+c)/2-.06,(l+c)/2+.06,40,1,Math.PI/2-f,f-u);M.rotateX(Math.PI/2),n.addM(M,t.growLight,n.mat(0,6+h+1.28,0))},o=.16;for(let l=0;l<4;l++){let c=l*Math.PI/2+o,h=(l+1)*Math.PI/2-o;r(7.4,9,.85,c,h,2.2),r(12,13.2,.6,l*Math.PI/2+.12,l*Math.PI/2+Math.PI/4-.1,2),r(12,13.2,.6,l*Math.PI/2+Math.PI/4+.1,(l+1)*Math.PI/2-.12,2)}for(let l=0;l<8;l++){let c=l/8*Math.PI*2+Math.PI/8;rh(n,t,Math.sin(c)*17.6,6,Math.cos(c)*17.6,c,3,l%2?t.orangeGloss:t.whiteSmooth)}for(let l=0;l<8;l++){let c=l/8*Math.PI*2+Math.PI/8+.22;In(n,t,Math.sin(c)*20.3,6,Math.cos(c)*20.3,1.5,l+30)}n.push(0,6,10.2,0),n.rbox(t.whiteSmooth,0,.55,0,.9,1.1,.35,.08),n.add(Mt.plane(),e.welcome,0,.85,.18,-.35,0,0,.8,.45,1,{keepUV:!0}),n.pop();let a=new C(.8,.52,-.3).normalize();for(let l=0;l<6;l++){let c=8+s()*8,h=-12+s()*14,u=40,f=new cn(2.2+s()*2.5,u);f.translate(0,-u/2,0);let d=new $t().lookAt(new C(0,0,0),a.clone().negate(),new C(0,1,0)),p=new je().setFromRotationMatrix(d),x=new je().setFromUnitVectors(new C(0,-1,0),a.clone().negate()),g=new $t().compose(new C(c,30,h),x,new C(1,1,1));n.addM(f,t.fxBeam,g,{interior:!0});let m=f.clone();m.rotateY(Math.PI/2),n.addM(m,t.fxBeam,g,{interior:!0})}n.light(0,10,8,16773854,50,22),n.light(-9,9,-6,16773854,40,20),n.light(9,9,-6,16773854,40,20),n.light(0,16,-10,16773854,45,24),i.marks.atrium=n.wp(0,6,6),i.marks.log_atrium=n.wp(0,6,10.2)}function Eb(n,t,e,i){n.chunk="service",n.interior=!0,n.envOverride=.22;let s=li.SVC,r=5.4,o=r-s;n.colPoly(Zt(27),s-.4,s,"floor",{holes:[Zt(21)]}),n.flat(t.grating,Zt(27),[Zt(21)],s);let a=10;n.colPoly(vn(a,24),s-.4,s,"floor"),n.flat(t.floor,vn(a,48),[],s),n.push(0,0,0,0),n.colPoly([[-1.4,9.5],[1.4,9.5],[1.4,21.2],[-1.4,21.2]],s-.4,s,"floor"),n.flat(t.grating,[[-1.4,9.5],[1.4,9.5],[1.4,21.2],[-1.4,21.2]],[],s+.002),n.wall(t.dark,-1.55,9.9,-1.55,21,s,o,.3,{col:!0}),n.wall(t.dark,1.55,9.9,1.55,21,s,o,.3,{col:!0});for(let l=11;l<21;l+=2.5)n.box(t.amber,0,r-.08,l,.9,.04,.2);n.light(0,4.6,16,16756832,14,9),n.pop();for(let l=0;l<20;l++){let c=l/20*Math.PI*2,h=(l+1)/20*Math.PI*2;l===0||l===19||n.wall(t.dark,Math.sin(c)*(a+.15),Math.cos(c)*(a+.15),Math.sin(h)*(a+.15),Math.cos(h)*(a+.15),s,o,.3,{col:!0})}n.wall(t.dark,Math.sin(-Math.PI/10)*10.15,Math.cos(Math.PI/10)*10.15,-1.55,9.9,s,o,.3,{col:!0}),n.wall(t.dark,Math.sin(Math.PI/10)*10.15,Math.cos(Math.PI/10)*10.15,1.55,9.9,s,o,.3,{col:!0}),n.cyl(t.darkSmooth,0,s+.3,0,2.6,.6,40,{col:!0}),n.cyl(t.greenFluid,0,s+1.9,0,2.2,2.6,40),n.cyl(t.glass,0,s+1.9,0,2.35,2.7,40,{open:!0}),n.cyl(t.metal,0,r-.4,0,2.6,.5,40);for(let l=0;l<8;l++){let c=l/8*Math.PI*2;n.box(t.metal,Math.sin(c)*2.4,s+1.9,Math.cos(c)*2.4,.1,2.8,.1,c)}for(let l=0;l<4;l++){let c=l/4*Math.PI*2+Math.PI/4,h=Math.sin(c)*6.5,u=Math.cos(c)*6.5;n.cyl(t.gunmetal,h,s+.7,u,.7,1.4,20,{col:!0}),n.cyl(t.dark,h,s+1.5,u,.45,.3,16),n.add(Mt.torus(.72,.03,6,24),t.teal,h,s+1.2,u,Math.PI/2,0,0),n.pipe(t.copper,h,s+1.4,u,Math.sin(c)*2.5,s+2.8,Math.cos(c)*2.5,.12),n.pipe(t.gunmetal,h,s+1.5,u,h,r,u,.15)}for(let l=0;l<6;l++){let c=l/6*Math.PI*2;n.pipe(t.copper,Math.sin(c)*1.2,r-.2,Math.cos(c)*1.2,Math.sin(c)*1.2,r+.3,Math.cos(c)*1.2,.1)}n.light(0,4.6,0,6750106,30,12),n.light(0,4.8,7,16756832,12,8),i.marks.pump=n.wp(0,s,5.5),i.marks.log_pump=n.wp(-4.2,s,4.2),Ta(n,t,-4.2,s+.3,4.6,Math.PI*1.25,1.2,1.4),$e(n,t,[{text:"HYDRO CORE \xB7 NUTRIENT RESERVOIR",size:60,color:"#56ff9a",y:80},{text:"FEEDS ATRIUM TREE ROOT SYSTEM",size:40,color:"#e8f6ff",y:170}],0,4.4,9.5,Math.PI,2.8,.5);for(let l=0;l<8;l++){n.push(0,0,0,Ue(l));let c=Lt*27,h=Lt*21,u=l===3||l===5;u?(n.box(t.dark,(-c+Nt.u0-.15)/2,s+o/2,27.15,Nt.u0-.15+c,o,.3,0,{col:!0}),n.box(t.dark,(c+Nt.u1+.15)/2,s+o/2,27.15,c-Nt.u1-.15,o,.3,0,{col:!0})):n.box(t.dark,0,s+o/2,27.15,c*2,o,.3,0,{col:!0}),l===0?(n.box(t.dark,(-h-1.4)/2,s+o/2,20.85,h-1.4,o,.3,0,{col:!0}),n.box(t.dark,(h+1.4)/2,s+o/2,20.85,h-1.4,o,.3,0,{col:!0})):n.box(t.dark,0,s+o/2,20.85,h*2,o,.3,0,{col:!0});for(let[f,d,p,x]of[[5,26.3,.18,t.gunmetal],[5,25.6,.12,t.copper],[4.95,21.8,.14,t.gunmetal]]){let g=Lt*d;n.pipe(x,-g,f,d,g,f,d,p)}if(n.box(t.hazard,0,s+.01,21.3,Lt*21.3*2,.012,.12),n.box(t.hazard,0,s+.01,26.7,Lt*26.7*2,.012,.12),n.box(t.amber,0,r-.06,24,1.6,.04,.2),n.light(0,4.6,24,16756832,12,9),n.cyl(t.redPaint,-3,3.4,26.8,.3,.05,16,{rx:Math.PI/2,rz2:.3}),n.box(t.darkSmooth,4,3.3,26.9,.8,1,.2),n.box(t.green,4.2,3.6,27,.05,.05,.02),$e(n,t,[{text:"SERVICE RING \xB7 S"+(l+1),size:64,color:"#ffb347",y:128}],-6,4.2,26.95,Math.PI,1.6,.4),u){n.box(t.dark,Nt.u0-.15,s+2,(27+Nt.v1)/2+.1,.3,4,Nt.v1-27+.3,0,{col:!0}),n.box(t.dark,Nt.u1+.15,s+2,(27+Nt.v1)/2+.1,.3,4,Nt.v1-27+.3,0,{col:!0}),n.box(t.dark,(Nt.u0+Nt.u1)/2,s+2,Nt.v1+.15,Nt.u1-Nt.u0+.6,4,.3,0,{col:!0});let f=Nt.u1-Nt.u0,d=(Nt.u0+Nt.u1)/2;n.colPoly([[Nt.u0,26.9],[Nt.u1,26.9],[Nt.u1,30.2],[Nt.u0,30.2]],s-.4,s,"floor"),n.flat(t.grating,[[Nt.u0,26.9],[Nt.u1,26.9],[Nt.u1,30.2],[Nt.u0,30.2]],[],s+.003);let p=13,x=4/p,g=.34;for(let m=0;m<p-1;m++){let y=6-(m+1)*x,S=Nt.v1-(m+1)*g;n.box(t.grating,d,(s+y)/2,S+g/2,f,y-s,g,0,{col:!0}),n.box(t.hazard,d,y+.005,S+.04,f,.01,.06)}n.box(t.amber,d,5.3,28.5,.8,.04,.3),n.light(d,4.5,30,16756832,10,8),on(n,t,Nt.u0-.1,Nt.v0,Nt.u0-.1,Nt.v1,6,{glass:!1}),on(n,t,Nt.u1+.1,Nt.v0,Nt.u1+.1,Nt.v1,6,{glass:!1}),on(n,t,Nt.u0-.1,Nt.v0-.02,Nt.u1+.1,Nt.v0-.02,6,{glass:!1}),n.box(t.hazard,d,6.015,Nt.v1+.3,f+.4,.01,.5),i.marks["svcStair"+l]=n.wp(d,6,Nt.v1+.8),i.marks["svcStairLow"+l]=n.wp(d,s,28)}G0(n,t,e,i,l),n.pop()}$e(n,t,[{text:"\u25B2 PUMP ROOM \xB7 HYDRO CORE",size:64,color:"#56ff9a",y:128}],1.6,4.3,21,0,1.8,.4),n.envOverride=null}var Ca=[{k:0,id:"landing",name:"Landing Platform",v:112,shape:"oct",a:22},{k:2,id:"energy",name:"Energy Platform",v:120,shape:"hex",a:18},{k:4,id:"dock",name:"Marine Dock",v:118,shape:"rect",w:36,d:44},{k:6,id:"comms",name:"Comms Platform",v:110,shape:"oct",a:16}];function dd(n){return n.shape==="oct"?Zt(n.a,0,n.v):n.shape==="hex"?vn(n.a/Math.cos(Math.PI/6),6,0,n.v,Math.PI/6):[[-n.w/2,n.v-n.d/2],[n.w/2,n.v-n.d/2],[n.w/2,n.v+n.d/2],[-n.w/2,n.v+n.d/2]]}function Mb(n){return n.shape==="rect"?n.v-n.d/2:n.v-n.a}function fd(n){return n.shape==="rect"?Math.hypot(n.w,n.d)/2:n.a/Math.cos(Math.PI/8)}function xs(n,t,e){return n.map(([i,s])=>{let r=i-t[0],o=s-t[1],a=Math.hypot(r,o);return[i-r/a*e,s-o/a*e]})}function Tb(n,t,e,i=[]){let s=dd(e),r=[0,e.v];n.slab(t.hullPaint,s,i,5.4,6),n.flat(t.deck,s,i,6.01),n.colPoly(s,5.4,6,"floor",{holes:i}),n.slab(t.hull,xs(s,r,2.2),i.map(a=>a),-3.5,1.6);let o=s.length;for(let a=0;a<o;a++){let l=s[a],c=s[(a+1)%o],h=xs([l],r,1.2)[0],u=xs([c],r,1.2)[0];n.wall(t.dark,h[0],h[1],u[0],u[1],1.6,3.8,.4),n.wall(t.white,l[0],l[1],c[0],c[1],5.3,.8,.3);let f=xs([l],r,-.16)[0],d=xs([c],r,-.16)[0];n.wall(t.cyan,f[0],f[1],d[0],d[1],5.55,.05,.04);let p=xs([l],r,2.6)[0];n.cyl(t.hullPaint,p[0],-1.5,p[1],2.6,7,24),n.add(Mt.torus(2.62,.1,6,32),t.cyan,p[0],.8,p[1],Math.PI/2,0,0);let x=xs([l],r,.3)[0],g=xs([c],r,.3)[0],m=(x[1]+g[1])/2;if(m<e.v-1&&Math.abs(x[1]-g[1])<.5){let S=Math.min(x[0],g[0]),v=Math.max(x[0],g[0]);on(n,t,S,m,-2.6,m,6),on(n,t,2.6,m,v,m,6)}else on(n,t,x[0],x[1],g[0],g[1],6)}}function wb(n,t,e,i){let r=i-e,o=(e+i)/2,a=[[-2.3,e],[2.3,e],[2.3,i],[-2.3,i]];n.box(t.hullPaint,0,5.72,o,2.3*2+.2,.56,r),n.flat(t.deck,a,[],6.01),n.box(t.grating,0,6.02,o,1.2,.012,r),n.colPoly(a,5.5,6,"floor");for(let h of[-1,1])on(n,t,h*(2.3-.1),e,h*(2.3-.1),i,6,{spacing:2}),n.box(t.cyan,h*(2.3-.3),6.03,o,.05,.012,r),n.box(t.white,h*(2.3+.05),5.6,o,.2,.7,r),n.box(t.cyanSoft,h*(2.3+.16),5.5,o,.02,.04,r),n.pipe(t.gunmetal,h*1.2,5.05,e,h*1.2,5.05,i,.22);n.pipe(t.copper,0,5.1,e,0,5.1,i,.12);let l=Math.floor(r/4.2);for(let h=0;h<=l;h++){let u=e+1+(r-2)*h/l;n.add(Mt.torus(2.3+.05,.09,6,28,Math.PI),t.whiteSmooth,0,6,u,0,0,0),n.sphere(t.cyan,0,6+2.3+.12,u,.07),n.box(t.metal,0,5.1,u,2.3*2,.16,.16)}let c=Math.max(1,Math.floor(r/14));for(let h=1;h<=c;h++){let u=e+r*h/(c+1);for(let f of[-1,1])n.cyl(t.hullPaint,f*1.7,-1.5,u,.55,13.4,16);n.box(t.gunmetal,0,4.8,u,4.2,.4,.6),n.cyl(t.hullPaint,0,.1,u,1.4,1.6,24,{rz:Math.PI/2,rx:0}),n.add(Mt.torus(.57,.05,6,20),t.cyan,-1.7,.6,u,Math.PI/2,0,0),n.add(Mt.torus(.57,.05,6,20),t.cyan,1.7,.6,u,Math.PI/2,0,0)}for(let h of[e+.4,i-.4]){for(let u of[-1,1])n.rbox(t.whiteSmooth,u*(2.3+.2),8,h,.35,4,.5,.12);n.rbox(t.whiteSmooth,0,10.1,h,2.3*2+.9,.35,.5,.12),n.box(t.cyan,0,9.92,h,2.3*2,.03,.3)}}function Ab(n,t,e,i,s){n.cyl(t.darkSmooth,i,10,s,.14,8,10),n.cyl(t.darkSmooth,i,6.2,s,.5,.4,12,{col:!0}),n.box(t.darkSmooth,i,14.2,s,1.2,.3,.5),n.box(t.light,i,14.04,s,1,.02,.36),e.blinkers.push({p:n.wp(i,14.5,s),color:16724e3,period:2})}function Z0(n,t,e,i){let s=He(515);n.interior=!1;for(let r of Ca){n.chunk="sat_"+r.id,n.push(0,0,0,Ue(r.k));let o=[];r.id==="dock"&&o.push([[-6,112],[6,112],[6,124],[-6,124]]),Tb(n,t,r,o),n.chunk="bridge_"+r.id,wb(n,t,56.2,Mb(r)+.4),n.chunk="sat_"+r.id;let a=(h,u)=>n.wp(h,6,u);if(r.id==="landing"){for(let[h,u,f]of[[8.6,9,t.yellow],[6.3,6.45,t.whiteInlay],[9.3,9.36,t.cyan]]){let d=new Mn(h,u,72);d.rotateX(-Math.PI/2),n.addM(d,f,n.mat(0,6.02,r.v+2))}for(let h=0;h<16;h++){let u=h/16*Math.PI*2;n.cyl(t.cyan,Math.sin(u)*10.2,6.04,r.v+2+Math.cos(u)*10.2,.14,.06,10)}n.box(t.yellow,-2,6.02,r.v+2,.5,.01,4.4),n.box(t.yellow,2,6.02,r.v+2,.5,.01,4.4),n.box(t.yellow,0,6.02,r.v+2,4,.01,.5),i.marks.parked=n.wp(0,6,r.v+2),i.parkedYaw=n.worldYaw(Math.PI*.85),n.push(-13,6,r.v-9,.3),n.cyl(t.darkSmooth,0,.15,0,2.6,.3,6,{col:!0,colSeg:6}),n.cyl(t.glassTint,0,1.6,0,2.45,2.6,6,{open:!0});for(let h=0;h<6;h++){let u=h/6*Math.PI*2;n.box(t.whiteSmooth,Math.sin(u)*2.45,1.6,Math.cos(u)*2.45,.12,2.6,.12)}n.cyl(t.whiteSmooth,0,3.05,0,2.8,.3,6),n.cyl(t.cyan,0,2.88,0,2.82,.04,6),n.colCyl(0,0,0,2.5,3.2,6),n.pop(),$e(n,t,[{text:"AEGIS LANDING PLATFORM",size:76,color:"#e8f6ff",y:100},{text:"PAD 01 \xB7 WELCOME ABOARD",size:44,color:"#4ff2ff",y:196}],-13,9.8,r.v-9,.3+Math.PI,3.2,.8);for(let[h,u]of[[-17,r.v-4],[17,r.v-4],[-17,r.v+10],[17,r.v+10]])Ab(n,t,i,h,u);jr(n,t,14,6,r.v-11,-.2),jr(n,t,16.5,6,r.v-4,Math.PI/2+.1,t.dark),bn(n,t,11,6,r.v-13.5,.4),bn(n,t,12.5,6,r.v-14,.1,1,.6,.7),n.rbox(t.whiteSmooth,9,7.1,r.v+12,1,2.2,.7,.1,0,{col:!0}),n.box(t.cyanSoft,9,7.6,r.v+11.64,.6,.8,.01),n.pipe(t.cable,9,6.6,r.v+11.6,5,6.05,r.v+8,.06),i.spawn={p:n.wp(0,6,r.v-13),yaw:Ue(r.k)},i.marks.landing=n.wp(0,6,r.v),i.marks.log_landing=n.wp(-9.4,7,r.v-11.8),n.rbox(t.darkSmooth,-9.4,6.45,r.v-11.8,.8,.9,.6,.05,.3,{col:!0})}if(r.id==="energy"){let h=Math.atan2(.8,-.3)-Ue(r.k);for(let u=0;u<4;u++)for(let f=0;f<3;f++){let d=-10+f*8,p=r.v-8+u*5.4;n.push(d,6,p,h),n.box(t.metal,0,.8,0,.12,1.6,.12),n.add(Mt.box(),t.screenOff,0,1.7,0,.5,0,0,5.6,.07,3);for(let x=-2;x<=2;x++)n.add(Mt.box(),t.cyanDim,x*1.1,1.74,0,.5,0,0,.02,.005,2.9);n.add(Mt.box(),t.metal,0,1.66,0,.5,0,0,5.7,.05,3.1),n.colBox(0,1,0,1.2,2,1.2),n.pop()}for(let u=0;u<3;u++){let f=-9+u*9,d=r.v+12;n.cyl(t.darkSmooth,f,6.3,d,1,.6,16,{col:!0});let p=n.wp(f,6.6,d);i.turbines.push({p,h:9,r:1.5,blades:3,speed:1.1+u*.2,vertical:!0})}for(let u=0;u<3;u++)n.push(12,6,r.v-6+u*4.2,0),n.add(Mt.cyl(24),t.whiteSmooth,0,1.4,0,0,0,Math.PI/2,1.3,4.6,1.3),n.add(Mt.torus(1.31,.05,6,30),t.cyan,-1.4,1.4,0,0,Math.PI/2,0),n.add(Mt.torus(1.31,.05,6,30),t.cyan,1.4,1.4,0,0,Math.PI/2,0),n.box(t.dark,0,.1,0,4.2,.2,1.8),n.colBox(0,1.4,0,4.6,2.8,2.6),n.pop();$e(n,t,[{text:"ENERGY PLATFORM",size:80,color:"#e8f6ff",y:100},{text:"SOLAR \xB7 WIND \xB7 STORAGE",size:44,color:"#56ff9a",y:196}],0,8.6,r.v-17,Math.PI,3,.75),n.cyl(t.darkSmooth,-1.2,7.1,r.v-17.05,.05,2.2,6),n.cyl(t.darkSmooth,1.2,7.1,r.v-17.05,.05,2.2,6),i.marks.energy=n.wp(0,6,r.v),i.marks.log_energy=n.wp(-14.5,6.9,r.v+2),n.rbox(t.darkSmooth,-14.5,6.45,r.v+2,.8,.9,.6,.05,0,{col:!0})}if(r.id==="dock"){for(let[h,u,f,d]of[[-6,112,6,112],[6,112,6,124],[6,124,-6,124],[-6,124,-6,112]])n.wall(t.dark,h,u,f,d,-.5,5.9,.3),n.wall(t.cyan,h,u,f,d,.6,.05,.34);sh(n,t,[[-6.2,111.8],[6.2,111.8],[6.2,124.2],[-6.2,124.2],[-6.2,111.8]],6);for(let h of[-8.5,8.5])for(let u of[110,126])n.box(t.yellow,h,6+5.5,u,.6,11,.6,0,{col:!0});for(let h of[-8.5,8.5])n.box(t.yellow,h,17.2,118,.7,.8,16.8);n.box(t.yellow,0,17.4,118,17.6,.9,.9),n.box(t.darkSmooth,0,16.7,118,2,.8,1.4),n.pipe(t.cable,0,16.3,118,0,10.6,118,.03),i.marks.sub=n.wp(0,9.2,118),i.marks.subYaw=n.worldYaw(0),i.blinkers.push({p:n.wp(0,17.95,118),color:16754470,period:1.1});for(let h=0;h<3;h++)jr(n,t,12.5,6+(h===2?2.6:0),132+h%2*2.6,Math.PI/2,h===1?t.dark:t.whiteClean);jr(n,t,-12.5,6,131,Math.PI/2,t.redPaint),jr(n,t,-12.5,8.6,131,Math.PI/2,t.whiteClean);for(let h=0;h<5;h++)bn(n,t,-13+h%3*1.4,6,102+(h>2?1.2:0),s()*.3);for(let h of[100,108,116,124,132])for(let u of[-17.2,17.2])n.cyl(t.darkSmooth,u,6.3,h,.3,.6,12),n.cyl(t.darkSmooth,u,6.65,h,.4,.1,12);$e(n,t,[{text:"MARINE DOCK \xB7 MOON POOL",size:76,color:"#e8f6ff",y:100},{text:"SUBMERSIBLE OPS \xB7 KEEP CLEAR",size:44,color:"#ffb347",y:196}],0,12.2,110.3,Math.PI,3.4,.85),i.marks.dock=n.wp(0,6,104),i.marks.log_dock2=n.wp(9.5,6.9,104),n.rbox(t.darkSmooth,9.5,6.45,104,.9,.9,.6,.05,0,{col:!0}),i.marks.log_reyes=n.wp(-4,6.9,110.4),n.rbox(t.darkSmooth,-4,6.45,110.4,.9,.9,.6,.05,0,{col:!0}),n.box(t.orangeLight,-4,6.91,110.71,.7,.02,.02),i.marks.boat=n.wp(24,0,122),i.marks.boatYaw=n.worldYaw(0)}if(r.id==="comms"){for(let[u,f]of[[-1,-1],[1,-1],[1,1],[-1,1]])n.pipe(t.metal,u*3.2,6,r.v+f*3.2,u*.6,50,r.v+f*.6,.18);for(let u=0;u<11;u++){let f=u/11,d=(u+1)/11,p=3.2-2.6*f,x=3.2-2.6*d,g=6+44*f,m=6+44*d;for(let[y,S,v,b]of[[-1,-1,1,-1],[1,-1,1,1],[1,1,-1,1],[-1,1,-1,-1]])n.pipe(t.metal,y*p,g,r.v+S*p,v*x,m,r.v+b*x,.05,6),n.pipe(t.metal,y*x,m,r.v+S*x,v*x,m,r.v+b*x,.05,6)}n.cyl(t.metal,0,54,r.v,.15,8,8),i.blinkers.push({p:n.wp(0,50+8.2,r.v),color:16722464,period:1.6}),i.blinkers.push({p:n.wp(.7,6+44*.5,r.v+.7),color:16722464,period:1.6}),n.colBox(0,7,r.v,7,2,7);for(let[u,f,d]of[[-9,r.v-5,-.9],[8,r.v+6,-.6]])n.cyl(t.darkSmooth,u,7,f,.5,2,16,{col:!0}),n.add(Mt.hemi(28,10),t.whiteSmooth,u,8.6,f,Math.PI+d,.6,0,3.2,1,3.2),n.cyl(t.metal,u,9.3,f,.06,1.8,8);for(let[u,f]of[[9,r.v-7],[-9,r.v+7]])n.rbox(t.whiteClean,u,7.4,f,3.2,2.8,2.4,.1,0,{col:!0}),n.box(t.cyanSoft,u,8.5,f-1.21,2.6,.04,.02),Gs(n,t,u,8.8,f,0,1.4,1);$e(n,t,[{text:"COMMS PLATFORM",size:80,color:"#e8f6ff",y:100},{text:"RELAY MAST \xB7 50 M",size:44,color:"#4ff2ff",y:196}],0,8.4,r.v-14.6,Math.PI,3,.75),n.cyl(t.darkSmooth,-1.2,7,r.v-14.65,.05,2,6),n.cyl(t.darkSmooth,1.2,7,r.v-14.65,.05,2,6),i.marks.comms=n.wp(0,6,r.v-8),i.marks.log_comms=n.wp(-6.5,6.9,r.v-9),n.rbox(t.darkSmooth,-6.5,6.45,r.v-9,.8,.9,.6,.05,0,{col:!0})}n.pop();let[l,c]=Re(r.k,0,r.v);i.foam.push([l,c,fd(r)*.92,.9])}n.chunk="outposts";{let r=Math.PI/4,o=205;n.push(Math.sin(r)*o,0,Math.cos(r)*o,r+.4);let a=vn(12,6,0,0,Math.PI/6);n.slab(t.hullPaint,a,[],3.4,4),n.flat(t.deck,a,[],4.01);for(let[l,c]of a)n.cyl(t.hullPaint,l*.8,-1.5,c*.8,1.6,6,16);for(let[l,c]of a)n.cyl(t.metal,l*.5,7,c*.5,.25,6,8);n.rbox(t.whiteSmooth,0,12.5,0,16,5,9,1.2,0,{seg:3}),n.box(t.glassTint,0,12.8,4.52,13,1.8,.05),n.box(t.cyan,0,11.6,4.55,13,.06,.02),n.box(t.light,0,12.8,4.48,12.6,1.6,.02),n.cyl(t.whiteSmooth,0,15.2,0,5,.4,24);for(let l=0;l<12;l++){let c=l/12*Math.PI*2;n.cyl(t.cyan,Math.sin(c)*4.6,15.45,Math.cos(c)*4.6,.1,.05,8)}i.blinkers.push({p:n.wp(0,16,0),color:4521830,period:1.8}),n.pop(),i.foam.push([Math.sin(r)*o,Math.cos(r)*o,11,.8])}{let r=Math.PI*1.25,o=170,a=Math.sin(r)*o,l=Math.cos(r)*o;for(let c=0;c<5;c++){let h=c/5*Math.PI*2,u=a+Math.sin(h)*20,f=l+Math.cos(h)*20;n.add(Mt.torus(7,.35,8,48),t.whiteSmooth,u,.3,f,Math.PI/2,0,0),n.add(Mt.torus(7,.06,6,48),t.cyan,u,.72,f,Math.PI/2,0,0);for(let d=0;d<12;d++){let p=d/12*Math.PI*2;n.cyl(t.metal,u+Math.sin(p)*7,1.1,f+Math.cos(p)*7,.06,1.6,6)}n.cyl(t.glassFrost,u,.6,f,6.9,1,36,{open:!0}),i.foam.push([u,f,7,.5])}n.cyl(t.yellow,a,1.2,l,1.6,2.4,16),n.cyl(t.whiteSmooth,a,3.4,l,.4,2.2,10),i.blinkers.push({p:new C(a,4.7,l),color:16764992,period:2.2})}for(let r=0;r<7;r++){let o=-.6+r*.28,a=820+r%3*180,l=Math.sin(o)*a,c=Math.cos(o)*-a;n.cyl(t.whiteSmooth,l,45,c,1.6,90,12),n.cyl(t.yellow,l,2,c,2.2,6,12),i.turbines.push({p:new C(l,90,c),h:0,r:34,blades:3,speed:.35+r%3*.05,yaw:Math.atan2(.8,-.3)})}}var Ia=class n extends Y{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let i=this,s=e.color!==void 0?new ft(e.color):new ft(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||n.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new Nn,u=new C,f=new C,d=new C,p=new $t,x=new C(0,0,-1),g=new Te,m=new C,y=new C,S=new Te,v=new $t,b=new Fe(r,o,{samples:c,type:Be}),M=new Ie({name:l.name!==void 0?l.name:"unspecified",uniforms:Tn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});M.uniforms.tDiffuse.value=b.texture,M.uniforms.color.value=s,M.uniforms.textureMatrix.value=v,this.material=M,this.onBeforeRender=function(T,_,w){let R=this.getReflectionCamera(w);if(f.setFromMatrixPosition(i.matrixWorld),d.setFromMatrixPosition(w.matrixWorld),p.extractRotation(i.matrixWorld),u.set(0,0,1),u.applyMatrix4(p),m.subVectors(f,d),m.dot(u)>0===!0&&this.forceUpdate===!1)return;m.reflect(u).negate(),m.add(f),p.extractRotation(w.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(d),y.subVectors(f,x),y.reflect(u).negate(),y.add(f),R.position.copy(m),R.up.set(0,1,0),R.up.applyMatrix4(p),R.up.reflect(u),R.lookAt(y),R.far=w.far,R.updateMatrixWorld(),R.projectionMatrix.copy(w.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(R.projectionMatrix),v.multiply(R.matrixWorldInverse),v.multiply(i.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(R.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let L=R.projectionMatrix;R.isOrthographicCamera?(S.x=(Math.sign(g.x)+L.elements[8])/L.elements[0],S.y=(Math.sign(g.y)+L.elements[9])/L.elements[5],S.z=-w.far,S.w=1):(S.x=(Math.sign(g.x)+L.elements[8])/L.elements[0],S.y=(Math.sign(g.y)+L.elements[9])/L.elements[5],S.z=-1,S.w=(1+L.elements[10])/L.elements[14]),g.multiplyScalar(2/g.dot(S)),L.elements[2]=g.x,L.elements[6]=g.y,R.isOrthographicCamera?(L.elements[10]=g.z-a,L.elements[14]=g.w-1):(L.elements[10]=g.z+1-a,L.elements[14]=g.w),i.visible=!1;let U=T.getRenderTarget(),N=T.xr.enabled,D=T.shadowMap.autoUpdate;T.xr.enabled=!1,T.shadowMap.autoUpdate=!1,T.setRenderTarget(b),T.state.buffers.depth.setMask(!0),T.autoClear===!1&&T.clear(),T.render(_,R),T.xr.enabled=N,T.shadowMap.autoUpdate=D,T.setRenderTarget(U);let O=w.viewport;O!==void 0&&T.state.viewport(O),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),i.material.dispose()},this.getReflectionCamera=function(T){let _=this._reflectionCameras.get(T);return _===void 0&&(_=T.clone(),this._reflectionCameras.set(T,_)),_}}};Ia.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var io=52,Rb=`
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
}`,Cb=`
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
uniform vec4 uGlows[${io}];
uniform vec4 uFoamDiscs[8];
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
    vec2 ruv = vRefl.xy / vRefl.w + N.xz * 0.035 * fade;
    vec4 pr = texture2D(tRefl, ruv);
    refl = mix(refl, pr.rgb, 0.92);
  }

  // body colour: deeper looking straight down, bright teal in wave faces
  vec3 body = mix(uShallow, uDeep, pow(NdV, 0.45));
  float sunUp = max(uSunDir.y, 0.0);
  body *= 0.35 + 0.65 * sunUp;
  float sss = pow(max(dot(V, -uSunDir) * 0.5 + 0.5, 0.0), 3.0) * max(vCrest + 0.4, 0.0);
  body += uShallow * sss * 0.6;

  // glows under the surface (sensor buoys / sea drones)
  vec3 glow = vec3(0.0);
  for (int i = 0; i < ${io}; i++) {
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
}`;function K0(n,t,e,i,s){let a=new cn(7e3,7e3,360,360),l=new Ia(a,{textureWidth:512,textureHeight:512,clipBias:.002,multisample:0}),c=l.material.uniforms.textureMatrix.value,h=l.getRenderTarget();l.material.dispose();let u=[];for(let m=0;m<io;m++)u.push(new Te(0,4,0,0));let f=[];for(let m=0;m<8;m++)f.push(new Te(0,0,0,0));let d=Tn.merge([vt.fog,{uTime:{value:0},tNormal:{value:null},tRefl:{value:null},tEnv:{value:null},uPlanar:{value:1},textureMatrix:{value:null},uSunDir:{value:i.clone()},uSunColor:{value:new ft(1,.92,.8)},uDeep:{value:new ft(.003,.032,.075)},uShallow:{value:new ft(.015,.14,.22)},uGlowColor:{value:new ft(.2,1,.8)},uGlows:{value:u},uFoamDiscs:{value:f}}]);d.tNormal.value=e,d.tRefl.value=h.texture,d.tEnv.value=t,d.textureMatrix.value=c,d.uGlows.value=u,d.uFoamDiscs.value=f;let p=new Ie({uniforms:d,vertexShader:Rb,fragmentShader:Cb,fog:!0});l.material=p,l.rotation.x=-Math.PI/2,l.frustumCulled=!1,l.name="ocean",l.receiveShadow=!1;let x=l.onBeforeRender,g={mesh:l,uniforms:d,glows:u,discs:f,rt:h,setPlanar(m,y=.5){d.uPlanar.value=m?1:0,l.onBeforeRender=m?x:()=>{},this.res=y},resize(m,y){this.res&&h.setSize(Math.max(64,m*this.res|0),Math.max(64,y*this.res|0))},update(m,y){d.uTime.value=m;let S=7e3/360;l.position.set(Math.round(y.position.x/S)*S,0,Math.round(y.position.z/S)*S)}};return g.setPlanar(s>=2,s>=3?.6:.4),g}var wi=n=>n.traverse(t=>{t.isMesh&&(t.castShadow=!t.material.transparent,t.receiveShadow=!0)}),pd=n=>n.traverse(t=>{t.layers.set(2),t.isMesh&&(t.castShadow=!1,t.receiveShadow=!1)});function J0(n){let t=new te,e=[[0,-5.4],[.55,-5.1],[1.15,-4.2],[1.5,-2.6],[1.58,-.4],[1.45,1.8],[1.1,3.6],[.55,5],[.15,5.5],[0,5.55]],i=new qo(e.map(([g,m])=>new st(g,m)),28);i.rotateX(-Math.PI/2),i.scale(1,.78,1);let s=new Y(i,n.whiteSmooth);t.add(s);let r=new Y(new Gt(1.8,.35,7.5),n.darkSmooth);r.position.set(0,-1.05,0),t.add(r);let o=new Y(new xe(1,20,12,0,Ne,0,Math.PI/2),n.glassTint);o.scale.set(1.05,.7,2.1),o.position.set(0,.55,-2.6),t.add(o);let a=new Y(new Gt(.05,.08,7.2),n.cyan);a.position.set(1.28,-.2,0),t.add(a);let l=a.clone();l.position.x=-1.28,t.add(l);let c=new Y(new Gt(8.8,.22,2),n.whiteSmooth);c.position.set(0,-.1,.2),t.add(c);let h=new Y(new Gt(7.4,.2,1.4),n.darkSmooth);h.position.set(0,.2,3.6),t.add(h);let u=[];for(let[g,m]of[[-4.7,.2],[4.7,.2],[-4,3.6],[4,3.6]]){let y=new Y(new Ve(1.25,.24,10,32),n.whiteSmooth);y.rotation.x=Math.PI/2,y.position.set(g,0,m),t.add(y);let S=new Y(new Ve(1.05,.04,6,32),n.cyan);S.rotation.x=Math.PI/2,S.position.set(g,-.18,m),t.add(S);let v=new te;v.position.set(g,0,m),t.add(v);for(let M=0;M<4;M++){let T=new Y(new Gt(2,.03,.18),n.darkSmooth);T.rotation.y=M*Math.PI/4,v.add(T)}let b=new Y(new ie(.18,.18,.2,12),n.metal);v.add(b),u.push(v)}for(let g of[-1,1]){let m=new Y(new Gt(.14,1.7,1.4),n.whiteSmooth);m.position.set(g*1,1,4.4),m.rotation.z=g*.35,m.rotation.x=.35,t.add(m)}let f=new Y(new xe(.12,8,6),n.red);f.position.set(-5.95,-.1,.2),t.add(f);let d=new Y(new xe(.12,8,6),n.green);d.position.set(5.95,-.1,.2),t.add(d);let p=new Y(new xe(.13,8,6),n.light);p.position.set(0,.9,5),t.add(p);let x=new Y(new Tr(.45,20),n.cyan);return x.position.set(0,0,5.56),t.add(x),wi(t),t.userData={rotors:u,strobe:p},t}function Ib(n,t){let e=new te,i=new Y(new Gt(.7,.22,.7),n.whiteSmooth);e.add(i);let s=new Y(new xe(.3,16,8,0,Ne,0,Math.PI/2),n.darkSmooth);s.position.y=.1,s.scale.y=.5,e.add(s);let r=new Y(new xe(.08,10,8),n.cyan);r.position.set(0,-.05,-.36),e.add(r);let o=[];for(let[l,c]of[[-.55,-.55],[.55,-.55],[-.55,.55],[.55,.55]]){let h=new Y(new Gt(.06,.05,.75),n.darkSmooth);h.position.set(l/2,0,c/2),h.rotation.y=Math.atan2(l,c),e.add(h);let u=new Y(new Ve(.28,.03,6,20),n.cyanSoft);u.rotation.x=Math.PI/2,u.position.set(l,.03,c),e.add(u);let f=new Y(new Gt(.5,.01,.05),n.darkSmooth);f.position.set(l,.06,c),e.add(f),o.push(f)}let a=new Y(new Oo(1.6,7,20,1,!0),t);return a.geometry.translate(0,-3.5,0),a.rotation.x=-.5,e.add(a),wi(e),a.castShadow=!1,e.userData={rotors:o,beam:a},e}function Pb(n){let t=new te,e=new Y(new ji(1.1,3,6,16),n.whiteSmooth);e.rotation.x=Math.PI/2,e.scale.set(1.2,1,.75),t.add(e);let i=new Y(new xe(.9,16,10,0,Ne,0,Math.PI/2),n.glassTint);i.scale.set(1,.6,1.3),i.position.set(0,.55,-1.2),t.add(i);let s=new Y(new Gt(1.8,.5,2.6),n.darkSmooth);s.position.y=-.8,t.add(s);let r=new Y(new Gt(1.4,.05,2.2),n.cyan);r.position.y=-1.06,t.add(r);let o=[];for(let[l,c]of[[-3.2,-2.4],[3.2,-2.4],[-3.2,2.4],[3.2,2.4]]){let h=new Y(new Gt(.3,.25,Math.hypot(l,c)),n.dark);h.position.set(l/2,.1,c/2),h.rotation.y=Math.atan2(l,c),t.add(h);let u=new Y(new ie(.35,.45,.8,12),n.whiteSmooth);u.position.set(l,.1,c),t.add(u);let f=new Y(new Ve(1.35,.06,6,28),n.dark);f.rotation.x=Math.PI/2,f.position.set(l,.55,c),t.add(f);let d=new te;d.position.set(l,.55,c),t.add(d);for(let g=0;g<2;g++){let m=new Y(new Gt(2.5,.03,.22),n.darkSmooth);m.rotation.y=g*Math.PI/2,d.add(m)}let p=new Y(new Tr(1.3,24),new ke({color:2240568,transparent:!0,opacity:.25,depthWrite:!1}));p.rotation.x=-Math.PI/2,d.add(p);let x=new Y(new xe(.1,8,6),l<0?n.red:n.green);x.position.set(l*1.12,.1,c),t.add(x),o.push(d)}let a=new Y(new Gt(1.6,1.1,2.2),n.orangeGloss);return a.position.y=-1.9,t.add(a),wi(t),t.userData={rotors:o},t}function Lb(n,t){let e=new te,i=new Y(new ie(.7,.5,1.2,16),t()<.5?n.yellow:n.whiteSmooth);i.position.y=.1,e.add(i);let s=new Y(new ie(.72,.72,.12,16),n.orangeGloss);s.position.y=.45,e.add(s);let r=new Y(new ie(.05,.08,1.8,6),n.metal);r.position.y=1.5,e.add(r);let o=new Y(new Gt(.6,.03,.4),n.screenOff);o.position.set(0,1.2,0),o.rotation.x=.4,e.add(o);let a=new Y(new xe(.1,10,8),n.teal);a.position.y=2.45,e.add(a);let l=new Y(new Ve(.62,.035,6,24),n.teal);return l.rotation.x=Math.PI/2,l.position.y=-.1,e.add(l),wi(e),e.userData.light=a,e}function Nb(n){let t=new te,e=new Y(new xe(1,24,12),n.darkSmooth);e.scale.set(1.3,.35,2.1),t.add(e);let i=new Y(new xe(1,24,12,0,Ne,0,Math.PI/2),n.whiteSmooth);i.scale.set(1.1,.35,1.8),i.position.y=.05,t.add(i);let s=new Y(new Ve(1,.05,6,30),n.teal);s.rotation.x=Math.PI/2,s.scale.set(1.25,1.95,1),s.position.y=-.05,t.add(s);let r=new Y(new ie(.08,.1,.8,8),n.metal);r.position.set(0,.6,.6),t.add(r);let o=new Y(new xe(.1,8,6),n.cyan);return o.position.set(0,1.05,.6),t.add(o),wi(t),t}function j0(n){let t=new te,e=new Y(new ji(1.6,9,8,16),n.whiteSmooth);e.rotation.x=Math.PI/2,e.scale.set(1,1,.55),e.position.y=.5,t.add(e);let i=new Y(new Gt(3.25,.1,11),n.darkSmooth);i.position.y=.55,t.add(i);let s=new Y(new Gt(2.4,1.3,4),n.whiteSmooth);s.position.set(0,1.7,-.5),t.add(s);let r=new Y(new Gt(2.45,.5,3.6),n.glassTint);r.position.set(0,1.9,-.5),t.add(r);let o=new Y(new Gt(2.46,.04,3.9),n.cyan);return o.position.set(0,1.07,-.5),t.add(o),wi(t),t}function Db(n){let t=new te,e=new Y(new ji(1.1,2.6,8,20),n.yellow);e.rotation.x=Math.PI/2,t.add(e);let i=new Y(new xe(.85,20,12,0,Ne,0,Math.PI/2),n.glassTint);i.rotation.x=-Math.PI/2,i.position.z=-2.1,t.add(i);for(let o of[-1,1]){let a=new Y(new ie(.3,.3,1,12),n.darkSmooth);a.rotation.x=Math.PI/2,a.position.set(o*1.25,-.4,1.3),t.add(a)}let s=new Y(new xe(.15,8,6),n.light);s.position.set(0,-.8,-1.6),t.add(s);let r=new Y(new Gt(.8,.5,1.4),n.whiteSmooth);return r.position.set(0,1.2,0),t.add(r),wi(t),t}function Ub(n,t){let e=new te;e.position.copy(t.p);let i=new te;if(e.add(i),t.vertical){let s=new Y(new ie(.12,.12,t.h,8),n.metal);s.position.y=t.h/2,e.add(s);for(let o=0;o<t.blades;o++){let a=new Y(new Gt(.08,t.h*.8,.5),n.whiteSmooth),l=o/t.blades*Ne;a.position.set(Math.sin(l)*t.r,t.h*.5,Math.cos(l)*t.r),a.rotation.set(0,l,.25),i.add(a);for(let c of[.2,.8]){let h=new Y(new Gt(.05,.05,t.r),n.metal);h.position.set(Math.sin(l)*t.r/2,t.h*c,Math.cos(l)*t.r/2),h.rotation.y=l,i.add(h)}}let r=new Y(new Ve(t.r,.04,6,30),n.cyan);r.rotation.x=Math.PI/2,r.position.y=t.h*.9,i.add(r)}else{e.rotation.y=t.yaw||0;let s=new Y(new ji(1.6,6,6,12),n.whiteSmooth);s.rotation.x=Math.PI/2,s.position.z=1.5,e.add(s),i.position.z=-2.2;let r=new Y(new xe(1.4,12,10),n.whiteSmooth);i.add(r);for(let a=0;a<3;a++){let l=new Y(new Gt(1.4,t.r,.3),n.whiteSmooth);l.geometry.translate(0,t.r/2,0),l.scale.x=.9,l.rotation.z=a/3*Ne,i.add(l)}let o=new Y(new xe(.4,8,6),n.red);o.position.set(0,1.8,3),e.add(o)}return wi(e),e.userData={rot:i,speed:t.speed,vertical:!!t.vertical},e}function Ob(n,t,e){let i=new te,s=new Er({color:new ft(.35,2.4,3),transparent:!0,opacity:.85,blending:hn,depthWrite:!1}),r=a=>{let l=new Lo(a,s);return i.add(l),l};if(t==="colony"){let a=(h,u,f=8)=>{let d=[];for(let p=0;p<f;p++){let x=(p+.5)*Ne/f,g=(p+1.5)*Ne/f,m=h/Math.cos(Math.PI/f);d.push(new C(Math.sin(x)*m,u,Math.cos(x)*m),new C(Math.sin(g)*m,u,Math.cos(g)*m))}return new de().setFromPoints(d)};for(let[h,u]of[[56,0],[42,6],[42,0],[34,12],[34,6],[22,0],[24,12]])r(a(h,u)).scale.setScalar(e);let l=new Rr(new xe(25,16,6,0,Ne,0,Math.PI/2)),c=r(l);c.scale.set(e,e*.62,e),c.position.y=13*e;for(let h of[0,2,4,6]){let u=h*Math.PI/4,f=[new C(Math.sin(u)*56,0,Math.cos(u)*56),new C(Math.sin(u)*100,0,Math.cos(u)*100)];r(new de().setFromPoints(f)).scale.setScalar(e)}}else{let a=r(new Rr(new xe(e,18,12))),l=r(new Fo(new Ve(e*1.4,.001,2,64)));l.rotation.x=1.2,i.userData.ring=l}let o=new Y(new ie(t==="colony"?1.3:.8,.3,1.2,24,1,!0),n.fxCyanBeam);return o.position.y=t==="colony"?.5:.3,i.add(o),i.traverse(a=>a.layers.set(1)),i}function Fb(n){let t=new te,e=new te;t.add(e);let i=new Y(new ie(.7,.9,1.2,20),n.darkSmooth);i.position.y=.6,e.add(i);for(let f of[-1,1]){let d=new Y(new Gt(.25,2.4,.5),n.whiteSmooth);d.position.set(f*2,1.9,0),e.add(d)}let s=new te;s.position.y=2.8,e.add(s);let r=n.whiteSmooth.clone();r.side=Ye;let o=new Y(new xe(3.6,36,12,0,Ne,0,.9),r);o.rotation.x=Math.PI,o.position.y=3.6,s.add(o);let a=new Y(new Ve(3.6*Math.sin(.9),.06,6,48),n.cyan);a.rotation.x=Math.PI/2,a.position.y=3.6-3.6*Math.cos(.9),s.add(a);let l=new Y(new Gt(4.2,.3,.3),n.metal);s.add(l);for(let f=0;f<3;f++){let d=f/3*Ne,p=new Y(new ie(.04,.04,3.2,6),n.metal);p.position.set(Math.sin(d)*1.3,1.9,Math.cos(d)*1.3),p.lookAt(0,3.6,0),p.rotateX(Math.PI/2),s.add(p)}let c=new Y(new ie(.2,.3,.6,12),n.darkSmooth);c.position.y=3.3,s.add(c);let h=new Y(new xe(.14,8,6),n.cyan);h.position.y=3.65,s.add(h);let u=new Y(new ie(.25,2.5,400,16,1,!0),n.fxCyanBeam.clone());return u.geometry.translate(0,200,0),u.material.opacity=0,s.add(u),wi(t),u.castShadow=!1,t.userData={yoke:e,tilt:s,beam:u},t}function kb(n){let t=new te,e=new Y(new ie(.22,.26,.14,20),n.darkSmooth);e.position.y=.07,t.add(e);let i=new te;i.position.y=.14,t.add(i);let s=new Y(new ie(.15,.18,.2,16),n.plasticWhite);s.position.y=.1,i.add(s);let r=new te;r.position.y=.22,i.add(r);let o=new Y(new Gt(.12,.62,.14),n.plasticWhite);o.position.y=.31,r.add(o);let a=new te;a.position.y=.62,r.add(a);let l=new Y(new ie(.09,.09,.18,14),n.darkSmooth);l.rotation.z=Math.PI/2,a.add(l);let c=new Y(new Gt(.1,.5,.11),n.plasticWhite);c.position.y=.25,a.add(c);let h=new te;h.position.y=.5,a.add(h);let u=new Y(new ie(.06,.06,.12,12),n.darkSmooth);h.add(u);let f=new Y(new Ve(.065,.012,6,16),n.cyan);f.rotation.x=Math.PI/2,h.add(f);for(let d of[-1,1]){let p=new Y(new Gt(.02,.12,.04),n.metal);p.position.set(d*.04,.1,0),h.add(p)}return wi(t),t.traverse(d=>d.layers.set(1)),t.userData={turret:i,sh:r,el:a,wr:h},t}function Q0(n,t,e,i,s){let r=He(1234),o={vtols:[],drones:[],buoys:[],sea:[],turbines:[],holos:[],creatures:[],blink:[],misc:[]},a=[d=>{let p=d*.075;return new C(Math.sin(p)*260,72+Math.sin(p*3)*8,Math.cos(p)*260)},d=>{let p=d*.11+2,x=Math.sin(p),g=Math.cos(p);return new C(130*x/(1+g*g)+40,42+Math.sin(p*2)*6,170*x*g/(1+g*g)-20)},d=>{let p=-d*.06+1;return new C(Math.sin(p)*420+60,115+Math.sin(p*2)*12,Math.cos(p)*300-40)},d=>{let p=d*.09+4;return new C(Math.sin(p)*170-30,30+Math.sin(p*4)*4,Math.cos(p)*120+170)}];for(let d=0;d<a.length;d++){let p=J0(t);p.scale.setScalar(d===2?1.3:1),n.add(p),o.vtols.push({g:p,path:a[d],off:d*17,bank:0})}o.quads=[];for(let d=0;d<5;d++){let p=Pb(t);p.scale.setScalar(1.3),n.add(p),o.quads.push({g:p,r:120+d*45,y:38+d%3*16,sp:(.05+d*.012)*(d%2?-1:1),ph:d*1.7,cx:(d-2)*40,cz:d%2*60-30})}{let d=j0(t);d.scale.setScalar(.55),n.add(d);let p=60,x=new Float32Array(p*2*3),g=new Float32Array(p*2*4),m=[];for(let b=0;b<p-1;b++){let M=b*2;m.push(M,M+1,M+2,M+1,M+3,M+2)}let y=new de;y.setAttribute("position",new ge(x,3)),y.setAttribute("color",new ge(g,4)),y.setIndex(m);let S=new ke({vertexColors:!0,transparent:!0,depthWrite:!1,side:Ye}),v=new Y(y,S);v.frustumCulled=!1,n.add(v),o.boat={g:d,wake:v,pos:x,col:g,hist:[],N:p}}if(i.marks.parked){let d=J0(t);d.position.copy(i.marks.parked).setY(6+1.35),d.rotation.y=i.parkedYaw||0,n.add(d);for(let p=0;p<4;p++){let x=new Y(new ie(.08,.1,1.2,8),t.metal);x.position.set(p<2?-1.1:1.1,-1,p%2?2.4:-2.4),d.add(x)}o.parked={g:d,t:0,state:"idle",start:d.position.clone()}}for(let d=0;d<12;d++){let p=Ib(t,t.fxCyanBeam);pd(p),n.add(p),o.drones.push({g:p,r:36+r()*50,y:16+r()*26,sp:(.08+r()*.12)*(r()<.5?1:-1),ph:r()*Ne,wob:r()*Ne})}let l=0;for(let d=0;d<24;d++){let p=d/24*Ne+r()*.2,x=78+d%3*40+r()*30,g=Lb(t,r);pd(g),g.position.set(Math.sin(p)*x,0,Math.cos(p)*x),n.add(g),o.buoys.push({g,ph:r()*Ne,glow:l++})}for(let d=0;d<8;d++){let p=Nb(t);pd(p),n.add(p),o.sea.push({g:p,r:70+r()*110,sp:(.03+r()*.03)*(d%2?1:-1),ph:r()*Ne,glow:l++})}if(i.marks.boat){let d=j0(t);d.position.copy(i.marks.boat),d.rotation.y=i.marks.boatYaw||0,n.add(d),o.misc.push({g:d,kind:"bob",base:d.position.y,ph:1})}if(i.marks.sub){let d=Db(t);d.position.copy(i.marks.sub),d.rotation.y=i.marks.subYaw||0,n.add(d),o.misc.push({g:d,kind:"swing",base:d.position.clone(),ph:0})}for(let d of i.turbines){let p=Ub(t,d);n.add(p),o.turbines.push(p)}for(let d of i.holoSpots){let p=Ob(t,d.kind,d.s);p.position.copy(d.p),n.add(p),o.holos.push(p)}for(let d of i.creatures){let p=N0(t,d.s,d.seed);p.position.copy(d.p),p.rotation.y=r()*Ne,n.add(p),o.creatures.push({g:p,base:d.p.y,ph:r()*Ne,main:d.main})}{let d=i.pods.length*40,p=new Float32Array(d*3),x=new Float32Array(d);i.pods.forEach((S,v)=>{for(let b=0;b<40;b++){let M=v*40+b,T=r()*Ne,_=r()*.55;p[M*3]=S.x+Math.sin(T)*_,p[M*3+1]=S.y+.6+r()*2.1,p[M*3+2]=S.z+Math.cos(T)*_,x[M]=S.y}});let g=new de;g.setAttribute("position",new ge(p,3));let m=new Mr({size:.05,map:e.glow,color:10479871,transparent:!0,blending:hn,depthWrite:!1}),y=new No(g,m);y.layers.set(1),y.frustumCulled=!1,n.add(y),o.bubbles={pts:y,pos:p,seed:x,pods:i.pods}}if(i.marks.robotArm){let d=kb(t);d.position.copy(i.marks.robotArm),n.add(d),o.arm=d}if(i.marks.gantry){let d=new te;d.position.copy(i.marks.gantry);let p=new Y(new Gt(1.2,.4,5.6),t.gunmetal);d.add(p);let x=new Y(new ie(.08,.08,2.2,8),t.metal);x.position.y=-1.3,d.add(x);let g=new Y(new Gt(.6,.5,.6),t.darkSmooth);g.position.y=-2.5,d.add(g);let m=new Y(new Ve(.25,.03,6,20),t.cyan);m.rotation.x=Math.PI/2,m.position.y=-2.76,d.add(m),d.rotation.y=Math.PI*1.5*0+(i.gantryYaw||0),d.traverse(y=>{y.layers.set(1),y.isMesh&&(y.castShadow=!0)}),n.add(d),o.gantry={g:d,base:d.position.clone(),dir:new C((i.marks.gantryDir,1),0,0)}}if(i.marks.dish){let d=Fb(t);d.position.copy(i.marks.dish),n.add(d),o.dish=d,d.userData.az=0,d.userData.el=.5}let c=d=>new ii({map:e.glow,color:d,transparent:!0,blending:hn,depthWrite:!1,fog:!1});for(let d of i.blinkers){let p=new Si(c(new ft(d.color).multiplyScalar(2.5)));p.position.copy(d.p),p.scale.setScalar(2.2),n.add(p),o.blink.push({s:p,period:d.period,ph:r()*2})}let h=new C,u=new C,f=new C(0,1,0);return o.update=(d,p,x)=>{for(let m of o.vtols){let y=d+m.off,S=m.path(y),v=m.path(y+.5),b=m.path(y+1);m.g.position.copy(S),h.subVectors(v,S).normalize(),u.subVectors(b,v).normalize();let M=h.x*u.z-h.z*u.x;m.bank+=(Ns.clamp(M*18,-.6,.6)-m.bank)*Math.min(1,p*2),m.g.lookAt(S.clone().sub(h)),m.g.rotateZ(-m.bank);for(let T of m.g.userData.rotors)T.rotation.y+=p*38;m.g.userData.strobe.visible=y%1.2<.08}if(o.parked){let m=o.parked;for(let y of m.g.userData.rotors)y.rotation.y+=p*(m.state==="idle"?4:40);if(m.g.userData.strobe.visible=d%1.5<.08,m.state==="takeoff"){m.t+=p;let y=m.t;m.g.position.set(m.start.x+Math.max(0,y-4)**2*1.2,m.start.y+Math.min(y,6)*2.2+Math.max(0,y-6)*8,m.start.z-Math.max(0,y-4)**2*2),m.g.rotation.x=-Math.min(.2,Math.max(0,y-4)*.05),y>40&&(m.state="gone",m.g.visible=!1)}}for(let m of o.drones){let y=m.ph+d*m.sp,S=Math.sin(y)*m.r,v=Math.cos(y)*m.r,b=m.y+Math.sin(d*.7+m.wob)*1.4;m.g.position.set(S,b,v),m.g.rotation.set(0,y+(m.sp>0?Math.PI/2:-Math.PI/2)+Math.PI,0),m.g.rotateZ(Math.sin(d+m.wob)*.08);for(let M of m.g.userData.rotors)M.rotation.y+=p*60;m.g.userData.beam.rotation.y=Math.sin(d*.8+m.wob)*.6}let g=s.glows;for(let m of o.buoys){let y=m.g;y.position.y=Math.sin(d*1.1+m.ph)*.18,y.rotation.x=Math.sin(d*.9+m.ph)*.08,y.rotation.z=Math.cos(d*.8+m.ph)*.08;let S=.55+.45*Math.sin(d*2+m.ph);y.userData.light.visible=(d+m.ph)%2.5<.25,m.glow<io&&g[m.glow].set(y.position.x,2.6,y.position.z,.55*S)}for(let m of o.sea){let y=m.ph+d*m.sp;m.g.position.set(Math.sin(y)*m.r,.15+Math.sin(d*2+m.ph)*.05,Math.cos(y)*m.r),m.g.rotation.y=y+(m.sp>0?Math.PI/2:-Math.PI/2)+Math.PI,m.glow<io&&g[m.glow].set(m.g.position.x,3.5,m.g.position.z,.7)}for(let m of o.misc)m.kind==="bob"?(m.g.position.y=m.base+Math.sin(d*.9)*.15,m.g.rotation.z=Math.sin(d*.7)*.03):(m.g.position.y=m.base.y+Math.sin(d*.5)*.2,m.g.rotation.y+=p*.05);for(let m of o.quads){let y=m.ph+d*m.sp,S=m.cx+Math.sin(y)*m.r,v=m.cz+Math.cos(y)*m.r;m.g.position.set(S,m.y+Math.sin(d*.4+m.ph)*2,v),m.g.rotation.set(.08*Math.sign(m.sp),y+(m.sp>0?Math.PI/2:-Math.PI/2)+Math.PI,0);for(let b of m.g.userData.rotors)b.rotation.y+=p*30}if(o.boat){let m=o.boat,y=d*.045+2.2,S=Math.sin(y)*170+40,v=Math.cos(y)*125+30;m.g.position.set(S,.1+Math.sin(d*3)*.05,v);let b=Math.cos(y)*170,M=-Math.sin(y)*125;m.g.rotation.set(-.05,Math.atan2(b,M)+Math.PI,0);let T=m.hist;T.unshift([S,v]),T.length>m.N*5&&T.pop();let _=b/Math.hypot(b,M),w=M/Math.hypot(b,M);for(let R=0;R<m.N;R++){let P=T[Math.min(R*5,T.length-1)]||[S,v],L=.8+R*.22,U=Math.max(0,1-R/m.N);m.pos.set([P[0]-w*L,.12,P[1]+_*L,P[0]+w*L,.12,P[1]-_*L],R*6),m.col.set([1,1,1,.55*U,1,1,1,.55*U],R*8)}m.wake.geometry.attributes.position.needsUpdate=!0,m.wake.geometry.attributes.color.needsUpdate=!0}for(let m of o.turbines){let y=m.userData;y.rot.rotation[y.vertical?"y":"z"]+=p*y.speed}for(let m of o.holos)m.rotation.y+=p*.35,m.userData.ring&&(m.userData.ring.rotation.z+=p*.8);for(let m of o.creatures){m.g.position.y=m.base+Math.sin(d*.6+m.ph)*.06,m.g.rotation.y+=p*.05;let y=m.g.userData.tentacles;for(let S=0;S<y.length;S++)y[S].rotation.set(Math.sin(d*.9+S)*.12,0,Math.cos(d*.7+S)*.12)}if(o.bubbles){let m=o.bubbles,y=m.pos;for(let S=0;S<y.length/3;S++)y[S*3+1]+=p*(.25+S%7*.04),y[S*3+1]>m.seed[S]+2.7&&(y[S*3+1]=m.seed[S]+.6);m.pts.geometry.attributes.position.needsUpdate=!0}if(o.arm){let m=o.arm.userData;m.turret.rotation.y=Math.sin(d*.4)*1.2,m.sh.rotation.z=-.4+Math.sin(d*.7)*.35,m.el.rotation.z=1.1+Math.sin(d*.9+1)*.4,m.wr.rotation.y=d*1.5}if(o.gantry){let m=o.gantry;m.g.position.copy(m.base).addScaledVector(i.gantryAxis||h.set(1,0,0),Math.sin(d*.15)*6)}if(o.dish){let m=o.dish.userData,y=i.dishActive?{az:2.4,el:.95}:{az:Math.sin(d*.05)*1.2,el:.5+Math.sin(d*.07)*.1};m.az+=(y.az-m.az)*Math.min(1,p*.6),m.el+=(y.el-m.el)*Math.min(1,p*.6),m.yoke.rotation.y=m.az,m.tilt.rotation.x=-m.el,m.beam.material.opacity+=((i.dishActive?.22:0)-m.beam.material.opacity)*Math.min(1,p)}for(let m of o.blink){let y=(d+m.ph)%m.period<.35;m.s.material.opacity=y?1:.08}},o.takeoff=()=>{o.parked&&o.parked.state==="idle"&&(o.parked.state="takeoff")},o}var ki=[{id:"arrive",ch:1,text:"Cross the bridge and enter AEGIS Colony",target:"lobby",hint:"Follow the lit bridge north from the landing pad."},{id:"mc",ch:1,text:"Restore systems at the Mission Control console (Level 2)",target:"mcConsole",hint:"The glass lift is in the entrance lobby."},{id:"keycard",ch:2,text:"Recover Commander Reyes' Level-3 keycard",target:"keycard",hint:"Last logged in the Crew Lounge, Level 1. Engineers know other ways in\u2026"},{id:"cryo",ch:2,text:"Enter the Cryogenic Laboratory",target:"cryoDoor",hint:"Level 1, sector 4 \u2014 the red door off the ring corridor."},{id:"scan",ch:3,text:"Scan specimen AX-7 in the primary cryo pod",target:"specimen",hint:"Stand at the pod and hold [E]."},{id:"power",ch:4,text:"Containment failing \u2014 reset breaker bank 3 in Engineering",target:"breaker",hint:"Level 1, the room with the two generators. The breaker cabinet has a red light."},{id:"reyes",ch:5,text:"Follow Commander Reyes' suit beacon to the Marine Dock",target:"reyes",hint:"Cross the north bridge to the dock platform. Look by the moon pool."},{id:"uplink",ch:6,text:"Decide what to send from the Comms Uplink (Observation Roof)",target:"uplink",hint:"Take the lift to Level 3, or climb the terrace stairs."},{id:"done",ch:7,text:"Story complete \u2014 explore the colony freely",target:null,hint:""}],ui={log_landing:{title:"Arrival Notice",by:"AEGIS Flight Ops",text:"Relief engineer inbound on VTOL-3. Colony has been silent for 36 hours after the Tuesday storm cell. Last telemetry: partial power fault, cryo containment on backup. Crew relocated to the Energy Platform shelters as a precaution. Restore systems, secure the specimen data, transmit."},log_lobby:{title:"Welcome to AEGIS",by:"Reception Terminal",text:"AEGIS Deep-Ocean Research Colony, Pacific Sector 7. Displacement 184,000 tonnes. Crew complement 46. Eight sectors on Level 1, the observation gallery and Mission Control on Level 2, the uplink array on the roof. Please do not feed the atrium tree after 22:00. It knows."},log_atrium:{title:"Atrium Garden",by:"Dr. Ines Moreau, Botany",text:"The ficus has grown 40 cm since the nutrient loop was rerouted through the hydro core below the floor. The roots now reach the reservoir. Whatever we are feeding it, it likes. The hydroponic rings are producing 30% of our greens; the rest still comes by drone."},log_lounge:{title:"Personal \u2014 Cdr. Reyes",by:"Cmdr. Elena Reyes",text:"If anyone reads this: I left my Level-3 card on the lounge table when the alarms went. Stupid. The lab doors fail closed on a power fault, which is the right design and the wrong afternoon. Tell Lindqvist the service ring under Engineering still connects to the cryo sublevel."},log_lab:{title:"Sample AX-7 \u2014 Preliminary",by:"Dr. Kofi Okafor, Xenobiology",text:"Recovered at 7,900 m from the Hadal Rift vent field. Bilateral, cephalopod-like, but the tissue fluoresces at 488 nm without any known luciferin. Neural activity persists at -196 C. That should not be possible. Recommend full sequencing before we tell anyone on shore."},log_cryo:{title:"Containment Protocol",by:"Cryo Bay Control",text:"Primary pod AX-7: liquid nitrogen jacket, triple-redundant power. On main-power loss the bay seals and the pods fall back to the local cells for 72 hours. Access restricted to Level-3 clearance. Do not open the pods. Do not tap the glass. It taps back."},log_dock:{title:"Suit Room Checklist",by:"Marine Ops",text:"Hardsuits A through D serviced. Moon pool depth 38 m under the dock. Submersible NEREID rated to 8,000 m, currently on the gantry for seal replacement. Anyone taking the sub past the buoy line files a plan with Mission Control first. That means you, Tanaka."},log_eng:{title:"Engineering Shift Log",by:"Chief Eng. Sofia Lindqvist",text:"Storm surge tripped breaker bank 3, which took Mission Control and the cryo bay with it. Generators are fine \u2014 it is the command bus. Anyone who can reach the main console on Level 2 can re-sequence it. The maintenance stair beside the gennies drops to the service ring. Mind your head."},log_quarters:{title:"Letter Home (unsent)",by:"Pilot Kenji Tanaka",text:"You would love it here. The sea is so calm some mornings it looks like glass, and the drones leave little green lights under the water all night. I fly the supply runs, twice a week. Some nights I think the sea glows back. Probably just the buoys."},log_mess:{title:"Galley Notice",by:"Galley",text:"Tuesday is algae pasta. Wednesday is algae pasta with a different sauce. Thursday the drone brings real tomatoes. Whoever keeps putting kelp in the coffee machine: the coffee machine has filed a complaint with Mission Control."},log_gallery:{title:"Observation Gallery",by:"Facilities",text:"Level 2 gallery runs the full ring except Mission Control. Telescopes are calibrated for the horizon line; the offshore wind farm is 900 m to the north. On clear evenings the energy platform turbines are visible from here, and so is the aquaculture ring to the north-west."},log_gallery2:{title:"Watch Rota",by:"Security",text:"Two on the gallery, one on the roof, rotating every four hours. Report any contact on the sonar board that the buoys do not see first. Last week the buoys saw something the sonar did not. We logged it as a whale."},log_mc:{title:"Command Bus Fault",by:"Mission Control",text:"Automatic diagnostic: command bus B offline since 14:12. Cryo bay sealed (fail-closed). Uplink array parked. Manual re-sequencing required from the main console. Commander authentication bypass enabled for relief crew."},log_roof:{title:"Uplink Array",by:"Comms Officer Layla Haddad",text:"The dish tracks the relay satellite over the southern horizon. When it fires you can see the beam in the haze \u2014 do not stand in it. Shore command expects the AX-7 dataset the moment we are back online. They have been very insistent. More insistent than usual."},log_service:{title:"Service Ring",by:"Maintenance",text:"The service ring runs under the whole Level 1 corridor. Stairs up at Engineering (sector 6) and \u2014 unofficially \u2014 at the cryo sublevel (sector 4). The hatch there is meant to be for nitrogen line inspection. It is also how the night shift gets snacks to the cryo team."},log_pump:{title:"Hydro Core",by:"Dr. Ines Moreau",text:"Found it. The tree roots have grown through the reservoir inlet and into the nutrient tank. The water here glows the same 488 nm as AX-7 tissue. I have not told Okafor. I am not sure what I would tell him."},log_energy:{title:"Energy Platform",by:"Chief Eng. Lindqvist",text:"Twelve solar arrays, three vertical-axis turbines, 40 MWh of storage. The crew is sheltering in the battery hall until the command bus is restored. Morale is fine. Someone brought cards. Someone else brought a kazoo. Please hurry."},log_dock2:{title:"Moon Pool Log",by:"Marine Ops",text:"NEREID hoisted for seal service. Moon pool clear. Note: sensor buoy S-14 reports a large, slow return under the dock at 03:10, 03:40 and 04:10. Regular as a heartbeat. Diver check found nothing but the glow."},log_reyes:{title:"Suit Recorder \u2014 Cmdr. Reyes",by:"Cmdr. Elena Reyes",text:'If you are hearing this, you came for the data. Listen first. AX-7 is not a specimen. It is a child. The thing under the dock is its mother, and she has called for it every thirty minutes since we lifted it out of the Rift. Shore Command knows. Their "further instructions" are a purge code: keep the data, freeze the body solid, forever. I am taking Suit D down the moon pool to meet her. Send the science if you must. Do not send the purge. \u2014 E.R.'},log_comms:{title:"Relay Mast",by:"Comms Officer Haddad",text:"The mast backs up the roof array for short-range links: drones, buoys, the VTOLs. It stays up on its own batteries, which is why you could still land. You are welcome."}},tm={landing:"Landing Platform",energy:"Energy Platform",dock:"Marine Dock",comms:"Comms Platform",bridge:"Connecting Bridge",promenade:"Main Deck \xB7 Courtyards",obs:"Observation Deck",lobby:"Main Entrance Lobby",lounge:"Crew Lounge",lab:"Research Laboratory",cryo:"Cryogenic Laboratory",airlock:"Dock Airlock",eng:"Engineering",quarters:"Crew Quarters",mess:"Mess Hall",corridor:"Ring Corridor",atrium:"Central Atrium",gallery:"Observation Gallery",mc:"Mission Control",terrace:"Terrace Deck",roof:"Observation Roof",service:"Service Ring",pump:"Hydro Core",ocean:"Open Ocean",stairs:"Terrace Stairs",lift:"Glass Lift"},em=["lobby","lounge","lab","cryo","airlock","eng","quarters","mess"];var dh={1:{n:"CHAPTER ONE",t:"Silent Water"},2:{n:"CHAPTER TWO",t:"Clearance"},3:{n:"CHAPTER THREE",t:"The Cold Room"},4:{n:"CHAPTER FOUR",t:"Heartbeat"},5:{n:"CHAPTER FIVE",t:"Moon Pool"},6:{n:"CHAPTER SIX",t:"The Choice"}},fh={haddad:{name:"LAYLA HADDAD \xB7 COMMS",color:"#4ff2ff"},lindqvist:{name:"SOFIA LINDQVIST \xB7 CHIEF ENGINEER",color:"#ffb347"},okafor:{name:"DR. KOFI OKAFOR \xB7 XENOBIOLOGY",color:"#56ff9a"},shore:{name:"SHORE COMMAND",color:"#ff7a6a"},reyes:{name:"CMDR. ELENA REYES",color:"#ffd28a"},aegis:{name:"AEGIS \xB7 COLONY SYSTEM",color:"#b9c8ff"}},ph=["PACIFIC SECTOR 7 \xB7 340 KM FROM THE NEAREST COAST","AEGIS Deep-Ocean Research Colony. Forty-six crew. One storm.","Thirty-six hours ago, the colony went silent.","The crew made it to the shelters. Commander Elena Reyes did not.","You are the relief engineer. Find out what happened."],nm={landed:[["haddad","VTOL-3, this is Haddad on the Energy Platform. Good to hear an engine out there."],["haddad","The crew are safe in the battery hall. All except the Commander. Nobody has seen Reyes since the storm."],["haddad","Get inside and bring the command bus back. Mission Control is on Level 2."]],inside:[["aegis","Welcome, relief engineer. Main power partial. Command bus B offline. Cryo bay sealed."],["haddad","That voice is the colony. The glass lift in the lobby will take you up to Mission Control."]],restored:[["aegis","Command bus re-sequenced. Uplink array on standby. Cryo bay still sealed: Level-3 clearance required."],["shore","AEGIS, this is Shore Command. Good work, engineer. Priority directive: secure the AX-7 dataset and transmit. Further instructions will follow."],["haddad","Further instructions. They never say that. Reyes' Level-3 card should be in the Crew Lounge. She dropped it when the alarms went."]],keycard:[["haddad","That's her card. She'd laugh at you for finding it before she did."]],keycardEarly:[["haddad","That's her card. Hang on to it. Mission Control first, or those red doors won't care who you are."]],cryo:[["okafor","This is Okafor. Please don't open anything. Just scan it and step back. It should be asleep."],["okafor","Should be."]],scanned:[["aegis","Scan complete. 2.4 petabytes. Warning: neural activity in pod AX-7 is rising."],["okafor","It's awake. At minus one-ninety-six. That is not possible."],["aegis","Containment power draw exceeds reserve. Local cells failing."],["lindqvist","Lindqvist here. The scan has tripped bank 3 again. Engineering, sector 6. Reset it by hand, and be quick about it."]],power:[["lindqvist","Containment is holding. Nice work."],["haddad","Engineer, buoy S-14 is lighting up under the dock. Same rhythm as the thing in the pod."],["haddad","And we've got a suit beacon down there. Suit D. That's Reyes' suit."],["shore","Engineer, the Commander's status is not your priority. Proceed to the uplink."]],reyes:[["haddad","...You heard all that. So did I. The uplink is on the roof, and what you send from it is up to you."],["shore","Engineer. Proceed to the uplink. That is an order."]],powerAfterReyes:[["lindqvist","Containment is holding. Nice work."],["haddad","You already found her recorder, didn't you? Then you know. The uplink is yours. What you send is up to you."]],uplinkReady:[["shore","Dataset received. Transmit authorisation code 7-7-OMEGA to complete the protocol."]],endingPurge:[["aegis","Authorisation 7-7-OMEGA accepted. Cryo purge in progress."],["aegis","Purge complete. Pod AX-7: vital signs none."],["shore","Thank you, AEGIS. A recovery team will arrive in seventy-two hours. The crew will be reassigned."],["haddad","...Buoy S-14 has gone dark. So has Suit D's beacon."]],endingRelease:[["aegis","Purge authorisation withheld. Opening pod AX-7 to the moon pool."],["okafor","It's moving. It's going down the pool. Oh \u2014 look at the water."],["reyes","This is Reyes. I'm on the moon pool ladder. She let me go. She didn't say anything, but I understood her."],["shore","AEGIS, respond. AEGIS\u2014"],["haddad","Sorry, Shore Command. The uplink is acting up. Storm damage, probably."]]},mh={purge:{eyebrow:"ENDING \xB7 ORDERS FOLLOWED",title:"The water went dark",text:"The dataset is on its way to shore, and the protocol is complete. AEGIS is back online. The crew come home from the Energy Platform to a colony that works perfectly. The water under the dock stays dark, and nobody on AEGIS talks about why.",cards:["Seventy-two hours later, the recovery team arrived on schedule.","Nobody ever found Suit D."]},release:{eyebrow:"ENDING \xB7 THE SEA REMEMBERS",title:"Two lights, heading home",text:"The science went to shore. The purge code never did. Commander Reyes climbed out of the moon pool at dawn. Two lights sank past the buoy line, one large and one small. Some nights the sea under AEGIS still glows, slow and regular as a heartbeat. The crew call it a thank-you.",cards:["Shore Command sent a very angry inspection team.","They never found anything in the water. The crew never told them where to look."]}},Pa={eyebrow:"COMMS UPLINK \xB7 AUTHORISATION REQUIRED",title:"What do you send?",text:"Shore Command wants code 7-7-OMEGA, which freezes AX-7 for good. Reyes asked you not to send it. Whatever you choose, the dataset goes to shore.",purge:["Send everything","Transmit the dataset and the purge code. Follow orders."],release:["Send the science only","Withhold the purge. Open the pod and let AX-7 go home."]};var im={"landed-0":[5.54,"e2133c24"],"landed-1":[6.04,"e85f9149"],"landed-2":[5.46,"56f34db1"],"inside-0":[6.69,"375ca9fb"],"inside-1":[4.95,"2f94ad32"],"restored-0":[7.82,"acc0d161"],"restored-1":[9.51,"d31a6d70"],"restored-2":[7.37,"9431e898"],"keycard-0":[3.86,"f4bd9b22"],"keycardEarly-0":[5.89,"d7d20a7c"],"cryo-0":[5.97,"8be43a94"],"cryo-1":[.92,"6f560a45"],"scanned-0":[6.26,"8d05dcdd"],"scanned-1":[5.37,"d59dd9de"],"scanned-2":[3.81,"92a5384b"],"scanned-3":[8.14,"65546fc4"],"power-0":[3.03,"81879d92"],"power-1":[5.54,"a6b08023"],"power-2":[4.16,"48c8a35e"],"power-3":[4.91,"21522958"],"reyes-0":[5.89,"e432259c"],"reyes-1":[3.39,"eb81820d"],"powerAfterReyes-0":[2.78,"81879d92"],"powerAfterReyes-1":[6.14,"e60f9ae6"],"uplinkReady-0":[7.47,"ebb31fb1"],"endingPurge-0":[4.58,"384bcd5f"],"endingPurge-1":[4.36,"196b7497"],"endingPurge-2":[6.98,"8a6c62d8"],"endingPurge-3":[3.76,"f7d5ab1d"],"endingRelease-0":[4.22,"26486854"],"endingRelease-1":[3.72,"bdafa1cd"],"endingRelease-2":[7.06,"d0f862a5"],"endingRelease-3":[2.63,"1351ef42"],"endingRelease-4":[5.48,"78db03a"]};var gh=new Set(["lobby","lounge","lab","cryo","airlock","eng","quarters","mess","corridor","atrium","gallery","mc","service","pump","lift"]),xh=n=>n<5.3?-1:n<11.5?0:n<17.5?1:2,sm=Object.fromEntries(ki.map((n,t)=>[n.id,t])),Hb=51,zb=50,yh=4.8,so=n=>{let t=n%1.25/1.25;return Math.exp(-((t-.1)**2)/.002)+.6*Math.exp(-((t-.3)**2)/.002)},Gb=n=>{let t=5381;for(let e=0;e<n.length;e++)t=(t*33^n.charCodeAt(e))>>>0;return t.toString(16)},Vb={"-1":"SERVICE LEVEL",0:"LEVEL 1 \xB7 MAIN DECK",1:"LEVEL 2",2:"LEVEL 3 \xB7 ROOF"},vh=class{constructor(t){Object.assign(this,t),this.body=new ih(this.world),this.yaw=0,this.pitch=0,this.keys={},this.mdx=0,this.mdy=0,this.mode="loading",this.settings={q:2,sens:1,fov:72,vol:.8,voice:1,inv:!1,fps:!1},this.loadSettings(),this.flags={keycard:!1,restored:!1,scanned:!1,transmitted:!1,svcFound:!1,pumpFound:!1},this.logs=new Set,this.radioQ=[],this.radioCur=null,this.radioT=0,this.heard=[],this.fx={awake:!1,alarm:!1,ending:null,endT:0},this.obj=0,this.explore=!1,this.time=0,this.playTime=0,this.walked=0,this.stepAcc=0,this.eyeY=0,this.bob=0,this.crouch=0,this.hudOn=!0,this.photo=!1,this.holdT=0,this.holdId=null,this.zoneId="",this._zoneAcc=0,this._mapAcc=0,this._lightAcc=0,this.camPos=new C,this.camTarget=new C,this.buildLightPool(),this.buildPickups(),this.buildInteractables(),this.bindInput(),this.bindUI(),this.applySettings()}loadSettings(){try{let t=JSON.parse(localStorage.getItem("aegis.settings")||"null");t&&Object.assign(this.settings,t)}catch{}}saveSettings(){try{localStorage.setItem("aegis.settings",JSON.stringify(this.settings))}catch{}}applySettings(){let t=this.settings;this.camera.fov=t.fov,this.camera.updateProjectionMatrix(),this.audio.setVolume(t.vol),this.ui.el.fps.classList.toggle("hidden",!t.fps),this.onQuality&&this.onQuality(t.q);let e=(i,s)=>{let r=document.getElementById(i);r.type==="checkbox"?r.checked=s:r.value=s};e("set-q",t.q),e("set-sens",t.sens),e("set-fov",t.fov),e("set-vol",t.vol),e("set-voice",t.voice),e("set-inv",t.inv),e("set-fps",t.fps),document.getElementById("o-sens").textContent=(+t.sens).toFixed(2),document.getElementById("o-fov").textContent=t.fov+"\xB0",document.getElementById("o-vol").textContent=Math.round(t.vol*100)+"%",document.getElementById("o-voice").textContent=Math.round(t.voice*100)+"%",this.voiceEl&&(this.voiceEl.volume=dn(t.vol*t.voice,0,1))}buildLightPool(){this.pool=[];let t=8;for(let e=0;e<t;e++){let i=new Qo(16777215,0,14,2);i.castShadow=!1,this.scene.add(i),this.pool.push({l:i,a:null,target:0,cur:0})}}updateLights(t,e){this._lightAcc-=t;let i=this.camera.position;if(this._lightAcc<=0||e){this._lightAcc=.25;let o=[];for(let c of this.anchors){let h=c.p.distanceToSquared(i);h<1444&&o.push([h/(c.intensity+1),c])}o.sort((c,h)=>c[0]-h[0]);let a=o.slice(0,this.pool.length).map(c=>c[1]),l=[];for(let c of this.pool)c.a&&a.includes(c.a)?a.splice(a.indexOf(c.a),1):l.push(c);for(let c of l){let h=a.shift();h?(c.a=h,c.l.position.copy(h.p),c.l.color.copy(h.color),c.l.distance=h.dist,c.l.intensity=c.cur=0,c.target=h.intensity):(c.a=null,c.target=0)}}let s=this.time,r=this.fx.alarm&&gh.has(this.zoneId);this.pool.forEach((o,a)=>{o.cur=ba(o.cur,o.target,4,t);let l=r?Math.sin(s*23+a*7.1)*Math.sin(s*3.7+a)>.35?.12:.55+.2*Math.sin(s*9+a):1;o.l.intensity=o.cur*l})}buildPickups(){let t=this.M;this.pickups=[];let e=new ie(.16,.2,.05,6),i=new Gt(.22,.3,.012),s=new ii({map:this.T.glow,color:new ft(.3,1.6,2),transparent:!0,blending:hn,depthWrite:!1});for(let h of Object.keys(ui)){let u=this.ctx.marks[h];if(!u){console.warn("no mark for",h);continue}let f=new te;f.position.copy(u);let d=new Y(e,t.darkSmooth);d.position.y=.025,f.add(d);let p=new Y(new Ve(.17,.012,6,24),t.cyan);p.rotation.x=Math.PI/2,p.position.y=.05,f.add(p);let x=new Y(i,t.cyanSoft);x.position.y=.33,f.add(x);let g=new Si(s);g.scale.setScalar(.9),g.position.y=.33,f.add(g),f.traverse(m=>m.layers.enable(1)),this.scene.add(f),this.pickups.push({id:h,g:f,card:x,p:u.clone(),taken:!1})}let r=this.ctx.marks.keycard,o=new te;o.position.copy(r);let a=new Y(new Gt(.16,.01,.1),t.orangeGloss);o.add(a);let l=new Y(new Gt(.12,.012,.02),t.orangeLight);l.position.set(0,.002,.02),o.add(l);let c=new Si(new ii({map:this.T.glow,color:new ft(2,.9,.3),transparent:!0,blending:hn,depthWrite:!1}));c.scale.setScalar(.5),c.position.y=.05,o.add(c),this.scene.add(o),this.keycardMesh=o}buildInteractables(){let t=this.ctx.marks,e=this.inter=[],i=r=>(e.push(r),r);for(let r of this.pickups)i({id:r.id,p:r.p,r:1.8,label:()=>"Read data log",ok:()=>!r.taken,use:()=>this.takeLog(r)});i({id:"keycard",p:t.keycard,r:1.8,label:()=>"Take Level-3 keycard",ok:()=>!this.flags.keycard&&!this.explore,use:()=>this.takeKeycard()}),i({id:"directory",p:t.directory,r:2.2,label:()=>"Open colony directory",ok:()=>!0,use:()=>this.openMap()}),i({id:"mcConsole",p:t.mcConsole,r:2,hold:2.2,label:()=>this.flags.restored?"Systems nominal":"Hold to re-sequence command bus",ok:()=>!0,can:()=>!this.flags.restored,use:()=>this.restore()}),i({id:"specimen",p:t.specimen,r:2.2,hold:3,label:()=>this.flags.scanned?"Specimen AX-7 \xB7 data secured":this.flags.restored?"Hold to scan specimen AX-7":"Pod interface offline \u2014 restore Mission Control first",ok:()=>!0,can:()=>this.flags.restored&&!this.flags.scanned,use:()=>this.scan()}),i({id:"uplink",p:t.uplink,r:2.2,hold:3,label:()=>this.flags.transmitted?"Uplink complete":this.flags.restored?this.flags.scanned?this.uplinkReady()?"Hold to open the uplink":this.oid==="power"?"Uplink locked \u2014 containment unstable":"Uplink standing by \u2014 follow Reyes' beacon first":"No dataset to send \u2014 scan specimen AX-7":"Uplink offline \u2014 restore Mission Control first",ok:()=>!0,can:()=>this.uplinkReady(),use:()=>this.transmit()}),i({id:"breaker",p:t.breaker,r:2,hold:2.5,label:()=>this.fx.alarm?"Hold to reset breaker bank 3":"Breaker bank 3 \xB7 stable",ok:()=>!0,can:()=>this.fx.alarm,use:()=>this.resetBreaker()});for(let r=0;r<3;r++)i({id:"lift"+r,p:t["liftCall"+r],r:1.6,label:()=>this.elevAt(r)?"Lift is here":"Call lift",ok:()=>!0,can:()=>!this.elevAt(r),use:()=>this.callLift(r)});let s=this.ctx.doors.find(r=>r.id==="door_r3");this.cryoDoor=s,this.targets={lobby:t.lobby,mcConsole:t.mcConsole,keycard:t.keycard,cryoDoor:s?s.pos:t.cryo,specimen:t.specimen,uplink:t.uplink,breaker:t.breaker,reyes:t.log_reyes}}bindInput(){let t=this.renderer.domElement;addEventListener("keydown",e=>{if(!(e.repeat&&e.code!=="KeyE")){if(this.keys[e.code]=!0,e.code==="Escape"&&this.mode==="title"&&this.ui.anyOpen()){this.ui.closeTop();return}if((this.mode==="intro"||this.mode==="outro")&&["Space","Enter","Escape"].includes(e.code)){e.preventDefault(),this.skipCine();return}(this.mode==="play"||this.mode==="end")&&this.onKey(e),["Space","ArrowUp","ArrowDown","Tab"].includes(e.code)&&this.mode==="play"&&e.preventDefault()}}),addEventListener("keyup",e=>{this.keys[e.code]=!1}),addEventListener("blur",()=>{this.keys={}}),addEventListener("mousemove",e=>{document.pointerLockElement===t&&(this.mdx+=e.movementX,this.mdy+=e.movementY)}),addEventListener("wheel",e=>{this.photo&&(this.camera.fov=dn(this.camera.fov+Math.sign(e.deltaY)*3,20,100),this.camera.updateProjectionMatrix())},{passive:!0}),t.addEventListener("click",()=>{this.mode==="play"&&!this.ui.anyOpen()&&this.lock()}),t.addEventListener("mousedown",e=>{(e.button===0||e.button===2)&&(this.drag=!0)}),addEventListener("mouseup",()=>{this.drag=!1}),addEventListener("mousemove",e=>{this.drag&&document.pointerLockElement!==t&&this.mode==="play"&&!this.ui.anyOpen()&&(this.mdx+=e.movementX,this.mdy+=e.movementY)}),t.addEventListener("contextmenu",e=>e.preventDefault()),this.ui.el.resume.addEventListener("click",()=>{this.ui.hide("resume"),this.lock()}),document.getElementById("skip").addEventListener("click",()=>this.skipCine()),document.addEventListener("pointerlockchange",()=>{let e=document.pointerLockElement===t;!e&&this.mode==="play"&&!this.ui.anyOpen()&&!this._intentUnlock&&this.openPause(),this._intentUnlock=!1,e&&this.ui.hide("resume")}),this.touch={move:null,look:null,mx:0,my:0},t.addEventListener("touchstart",e=>{if(this.mode==="play"){for(let i of e.changedTouches)i.clientX<innerWidth/2&&!this.touch.move?this.touch.move={id:i.identifier,x:i.clientX,y:i.clientY}:this.touch.look||(this.touch.look={id:i.identifier,x:i.clientX,y:i.clientY,t0:performance.now(),sx:i.clientX,sy:i.clientY});e.preventDefault()}},{passive:!1}),t.addEventListener("touchmove",e=>{for(let i of e.changedTouches)this.touch.move&&i.identifier===this.touch.move.id&&(this.touch.mx=dn((i.clientX-this.touch.move.x)/60,-1,1),this.touch.my=dn((i.clientY-this.touch.move.y)/60,-1,1)),this.touch.look&&i.identifier===this.touch.look.id&&(this.mdx+=(i.clientX-this.touch.look.x)*2,this.mdy+=(i.clientY-this.touch.look.y)*2,this.touch.look.x=i.clientX,this.touch.look.y=i.clientY);e.preventDefault()},{passive:!1}),t.addEventListener("touchend",e=>{for(let i of e.changedTouches)if(this.touch.move&&i.identifier===this.touch.move.id&&(this.touch.move=null,this.touch.mx=this.touch.my=0),this.touch.look&&i.identifier===this.touch.look.id){let s=this.touch.look;performance.now()-s.t0<250&&Math.hypot(i.clientX-s.sx,i.clientY-s.sy)<12&&(this.keys.KeyE=!0,setTimeout(()=>{this.keys.KeyE=!1},this.holdTarget?3200:120),this.tapInteract=!0),this.touch.look=null}})}lock(){let t=this.renderer.domElement;if(t.requestPointerLock&&!("ontouchstart"in window&&navigator.maxTouchPoints>0&&!matchMedia("(pointer:fine)").matches))try{let e=t.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}}unlock(){document.pointerLockElement&&(this._intentUnlock=!0,document.exitPointerLock())}onKey(t){let e=t.code;if(this.mode!=="end"){if(e==="Escape"){this.ui.anyOpen()?this.ui.closeTop():this.openPause();return}if(this.ui.anyOpen()){e==="KeyM"&&this.ui.isOpen("mapview")&&this.ui.closeTop(),e==="KeyJ"&&this.ui.isOpen("journal")&&this.ui.closeTop();return}e==="KeyE"&&this.interact(!0),e==="KeyM"&&this.openMap(),e==="KeyJ"&&this.openJournal(),e==="KeyH"&&(this.hudOn=!this.hudOn,this.ui.el.hud.classList.toggle("hidden",!this.hudOn)),e==="KeyP"&&this.togglePhoto(),e==="KeyF"&&!this.photo&&(this.body.fly=!this.body.fly,this.body.vel.y=0,this.ui.toast(this.body.fly?"Fly mode on \u2014 Space up \xB7 C down \xB7 F to land":"Fly mode off","")),/^Digit[123]$/.test(e)&&this.inLift()&&this.sendLift(+e.slice(5)-1)}}bindUI(){let t=this.ui,e=(r,o)=>document.getElementById(r).addEventListener("click",o);e("btn-start",()=>this.start(!1)),e("btn-explore",()=>this.start(!0)),e("btn-settings",()=>t.open("settings")),e("btn-controls",()=>t.open("controls")),e("btn-guide",()=>t.open("guide")),document.querySelectorAll("#pause [data-act], #end [data-act]").forEach(r=>r.addEventListener("click",()=>{let o=r.dataset.act;o==="resume"&&(t.closeAll(),this.lock()),o==="map"&&this.openMap(),o==="journal"&&this.openJournal(),o==="settings"&&t.open("settings"),o==="controls"&&t.open("controls"),o==="guide"&&t.open("guide"),o==="title"&&(t.closeAll(),this.toTitle()),o==="continue"&&(t.closeAll(),this.mode="play",this.lock()),o==="export"&&this.onExport&&this.onExport()})),document.querySelectorAll("#choice [data-choice]").forEach(r=>{let o=Pa[r.dataset.choice];r.innerHTML=`${o[0]}<small>${o[1]}</small>`,r.addEventListener("click",()=>this.choose(r.dataset.choice))}),document.getElementById("ch-eyebrow").textContent=Pa.eyebrow,document.getElementById("ch-title").textContent=Pa.title,document.getElementById("ch-text").textContent=Pa.text,t.onClose=()=>{this.mode==="play"&&!t.anyOpen()&&(this.lock(),!document.pointerLockElement&&!("ontouchstart"in window)&&t.show("resume"))},t.onMapRedraw=()=>this.drawBigMap();let i=this.settings,s=(r,o,a)=>document.getElementById(r).addEventListener("input",l=>{i[o]=a(l.target.type==="checkbox"?l.target.checked:l.target.value),this.applySettings(),this.saveSettings()});s("set-q","q",Number),s("set-sens","sens",Number),s("set-fov","fov",Number),s("set-vol","vol",Number),s("set-voice","voice",Number),s("set-inv","inv",Boolean),s("set-fps","fps",Boolean),document.getElementById("set-q").addEventListener("change",r=>{i.q=+r.target.value,this.applySettings(),this.saveSettings()}),addEventListener("resize",()=>{this.photo&&t.letterbox(!0)})}showTitle(){this.mode="title",this.ui.hide("loading"),this.ui.hide("hud"),this.ui.show("title"),this.ui.letterbox(!1),this.ui.el.lbTop.classList.remove("hidden"),this.ui.el.lbBot.classList.remove("hidden"),this.ui.el.lbTop.style.height=this.ui.el.lbBot.style.height="7vh",this.titleT=0}toTitle(){this.unlock(),this.pauseVoice(!0),this.photo&&this.togglePhoto(),this.ui.closeAll(),this.showTitle()}start(t){this.audio.start();let e=!this.started||t!==this.lastExplore||this.flags.transmitted;this.explore=t;let i=this.ui.el.fade;i.classList.add("on"),setTimeout(()=>{if(this.ui.hide("title"),this.lastExplore=t,e&&this.reset(t),e&&!t){this.beginIntro(),i.classList.remove("on");return}this.ui.el.lbTop.classList.add("hidden"),this.ui.el.lbBot.classList.add("hidden"),this.enterPlay(),i.classList.remove("on"),this.started||(this.started=!0,this.ui.toast("Free explore \u2014 all doors unlocked","ok"))},800)}enterPlay(){this.hudOn&&this.ui.show("hud"),this.leaveTitleFov(),this.mode="play",this.lock()}beginIntro(){this.started=!0,this.mode="intro",this.cineT=0,this.ui.hide("hud");for(let o of[this.ui.el.lbTop,this.ui.el.lbBot])o.classList.remove("hidden"),o.style.height="11vh";this.ui.show("skip");let t=this.ctx.spawn,e=new C(-Math.sin(t.yaw),0,-Math.cos(t.yaw)),i=new C(-e.z,0,e.x),s=new C(t.p.x,t.p.y+1.62,t.p.z),r=(o,a,l)=>s.clone().addScaledVector(e,o).addScaledVector(i,a).setY(s.y+l);this.introPath=new Qi([r(260,230,120),r(150,170,70),r(40,120,38),r(-50,50,18),r(-14,6,4),s.clone()],!1,"centripetal"),this.introEye=s,this.introFwd=e,this.camera.fov=50,this.camera.updateProjectionMatrix()}updateIntro(t){this.cineT+=t;let e=this.cineT,i=ph.length*yh+1.5,s=dn(e/i,0,1),r=s*s*(3-2*s),o=this.camera;o.position.copy(this.introPath.getPointAt(r));let a=dn((s-.6)/.4,0,1),l=a*a*(3-2*a);this.camTarget.set(0,10,0).lerp(this.introEye.clone().addScaledVector(this.introFwd,60).setY(this.introEye.y-1),l),o.lookAt(this.camTarget),o.fov=50+(this.settings.fov-50)*l,o.updateProjectionMatrix();let c=Math.floor(e/yh),h=e-c*yh;c<ph.length&&h>.4&&h<yh-.6?this.ui.caption(ph[c],c===0):this.ui.caption(""),e>=i&&this.endIntro()}endIntro(){if(this.mode!=="intro")return;this.mode="play-wait";let t=this.ui.el.fade;t.classList.add("on"),setTimeout(()=>{this.ui.clearCaption(),this.ui.hide("skip"),this.ui.el.lbTop.classList.add("hidden"),this.ui.el.lbBot.classList.add("hidden"),this.enterPlay(),t.classList.remove("on"),this.chapter(1),setTimeout(()=>this.say("landed"),2500)},800)}skipCine(){this.mode==="intro"?this.endIntro():this.mode==="outro"&&this.endOutro()}get oid(){return(ki[this.obj]||{}).id}goto(t){if(this.explore)return;let e=sm[t],i=ki[this.obj].ch;this.setObjective(e);let s=ki[e].ch;s!==i&&dh[s]&&this.chapter(s)}chapter(t){dh[t]&&(this.ui.chapter(dh[t]),this.audio.chord([220,330,440],1.2))}say(t){this.explore||(this.heard.push(...this.radioQ),this.radioQ=nm[t].map(([e,i],s)=>[e,i,`${t}-${s}`]),this.radioCur&&!this.voiceEl&&(this.radioT=Math.min(this.radioT,1.2)))}updateRadio(t){if(this.radioCur){this.radioT-=t,this.radioT<=0&&(this.radioCur=null,this.radioT=-.5,this.ui.radio(null),this.stopVoice());return}if(this.radioT<0){this.radioT=Math.min(0,this.radioT+t);return}if(!this.radioQ.length)return;let e=this.radioCur=this.radioQ.shift();this.heard.push(e),this.radioT=2+e[1].length*.05,this.ui.radio(e[0],e[1]),this.playVoice(e),this.audio.blip(1500,.04,"square",.05),setTimeout(()=>this.audio.blip(1900,.05,"square",.05),70)}playVoice([,t,e]){this.stopVoice();let i=im[e];if(!i||i[1]!==Gb(t)||this.settings.voice<=0)return;let s=this.voiceEl=new window.Audio("audio/voice/"+e+".mp3");s.volume=dn(this.settings.vol*this.settings.voice,0,1);let r=this.radioT;this.radioT=i[0]+.6;let o=()=>{this.voiceEl===s&&(this.voiceEl=null,this.radioT=Math.max(this.radioT,r*.6))};s.addEventListener("error",o),setTimeout(()=>{let a=s.play();a&&a.catch&&a.catch(o)},140)}stopVoice(){this.voiceEl&&(this.voiceEl.pause(),this.voiceEl=null)}pauseVoice(t){let e=this.voiceEl;if(e){if(t&&!e.paused)e.pause();else if(!t&&e.paused&&e.currentTime>0&&!e.ended){let i=e.play();i&&i.catch&&i.catch(()=>{})}}}radioBusy(){return!!this.radioCur||this.radioQ.length>0||this.radioT<0}uplinkReady(){return this.flags.transmitted||!this.flags.restored||!this.flags.scanned?!1:this.explore||this.oid==="uplink"}cryoGlow(t){let e=this.fx;return e.ending==="release"?0:e.ending==="purge"?Math.max(.05,1.6*(1-e.endT/5)):e.awake?1.8+so(t)*3.5:1.6+Math.sin(t*1.3)*.3}buildCreature(){let t=()=>{let e=new Y(new cn(1,1),new ke({map:this.T.glow,color:new ft(.35,1.8,1.5),transparent:!0,opacity:0,blending:hn,depthWrite:!1,fog:!1}));return e.rotation.x=-Math.PI/2,e.visible=!1,e.renderOrder=2,this.scene.add(e),e};this.creature=[t(),t()]}updateSeaGlow(t,e){let i=this.ocean.glows,s=i[Hb],r=i[zb],o=this.ctx.marks.sub;if(!s||!o)return;this.creature||this.buildCreature();let a=this.fx;a.ending&&(a.endT+=t);let l=Math.hypot(o.x,o.z),c=o.x/l,h=o.z/l,u=o.x+c*34,f=o.z+h*34;if(r.w=0,a.ending==="release"){let d=a.endT,p=dn(d/7,0,1),x=Math.max(0,d-12)*4,g=dn(1-(d-34)/8,0,1);s.set(u+c*x,8+p*14,f+h*x,(.6+p*3+so(e)*1.2)*g),d>5&&r.set(u+c*(x-5)+h*4,4,f+h*(x-5)-c*4,(.8+so(e+.3)*.8)*g*dn((d-5)/3,0,1))}else a.ending==="purge"?s.set(u,8,f,dn(1-(a.endT-7)/6,0,1)*(.6+so(e)*1.4)):a.awake?s.set(u,8,f,.4+so(e)*1.4):s.set(u,7,f,this.explore||this.mode==="title"?0:.15+so(e*.5)*.35);[s,r].forEach((d,p)=>{let x=this.creature[p];x.visible=d.w>.01,x.visible&&(x.position.set(d.x,.25,d.z),x.scale.setScalar(d.y*3.2),x.material.opacity=Math.min(1,d.w*.35))})}reset(t){let e=this.ctx.spawn;this.body.pos.x=e.p.x,this.body.pos.y=e.p.y,this.body.pos.z=e.p.z,this.body.vel.x=this.body.vel.y=this.body.vel.z=0,this.body.fly=!1,this.yaw=e.yaw,this.pitch=-.02,this.eyeY=e.p.y+1.62,this.flags={keycard:!1,restored:t,scanned:!1,transmitted:!1,svcFound:!1,pumpFound:!1},this.logs=new Set;for(let i of this.pickups)i.taken=!1,i.g.visible=!0;this.radioQ=[],this.radioCur=null,this.radioT=0,this.heard=[],this.ui.radio(null),this.stopVoice(),this.fx={awake:!1,alarm:!1,ending:null,endT:0},this.ending=null,this.keycardMesh.visible=!t,this.obj=t?ki.length-1:0,this.playTime=0,this.walked=0,this.screens.state.restored=t,this.screens.state.cryoOpen=t,this.screens.state.scanned=!1,this.screens.state.transmitted=!1,this.screens.redrawAll(this.time),this.ctx.dishActive=!1,this.ui.objective(t?{text:"Free explore",hint:"Every door is open. Press M for the map, P for photo mode."}:ki[0],!0)}setObjective(t){this.explore||(this.obj=t,this.ui.objective(ki[t],!0),this.audio.chord([660,880,1320],.25))}openPause(){this.unlock(),this.ui.open("pause")}openMap(){this.unlock(),this.ui.mapLevel=xh(this.body.pos.y),this.zoneId&&["landing","energy","dock","comms","bridge","ocean"].includes(this.zoneId)&&(this.ui.mapLevel=9),this.ui.syncTabs(),this.ui.open("mapview"),this.drawBigMap()}drawBigMap(){let t=this.objTarget();this.ui.bigMap(this.body.pos.x,this.body.pos.z,this.yaw,t,t?xh(t.y):0)}openJournal(){this.unlock(),this.ui.journal(this.logs,t=>this.ui.showLog(t),this.heard),this.ui.open("journal")}takeLog(t){t.taken=!0,t.g.visible=!1,this.logs.add(t.id),this.audio.chord([880,1175],.2),this.ui.toast(`Data log recovered \xB7 ${this.logs.size}/${Object.keys(ui).length}`,"ok"),this.unlock(),this.ui.showLog(t.id),t.id==="log_reyes"&&this.oid==="reyes"&&(this.goto("uplink"),this.say("reyes"))}takeKeycard(){this.flags.keycard=!0,this.keycardMesh.visible=!1,this.audio.chord([520,780,1040],.3),this.ui.toast("Level-3 keycard acquired","ok"),this.oid==="keycard"?(this.goto("cryo"),this.say("keycard")):(this.oid==="arrive"||this.oid==="mc")&&this.say("keycardEarly")}restore(){this.flags.restored=!0,this.screens.state.restored=!0,this.screens.redrawAll(this.time),this.audio.chord([440,660,880,1320],.4),this.ui.toast("Command bus re-sequenced \xB7 systems online","ok"),(this.oid==="arrive"||this.oid==="mc")&&(this.goto(this.flags.keycard?"cryo":"keycard"),this.say("restored"))}scan(){this.flags.scanned=!0,this.screens.state.scanned=!0,this.audio.chord([392,523,784,1046],.5),this.ui.toast("Specimen AX-7 scanned \xB7 2.4 PB dataset secured","ok"),!this.explore&&(this.fx.awake=!0,setTimeout(()=>{this.oid==="scan"&&(this.fx.alarm=!0,this.audio.denied(),this.ui.toast("CONTAINMENT ALERT \xB7 local power cells failing","bad"),this.goto("power"),this.say("scanned"))},1800))}resetBreaker(){this.fx.alarm=!1,this.audio.noiseHit(300,.6,.3,"lowpass",0),this.audio.chord([330,440,660],.5),this.ui.toast("Breaker bank 3 reset \xB7 containment stable","ok"),this.oid==="power"&&(this.logs.has("log_reyes")?(this.goto("uplink"),this.say("powerAfterReyes")):(this.goto("reyes"),this.say("power")))}transmit(){if(this.explore){this.finishTransmit();return}this.say("uplinkReady"),this.unlock(),this.ui.open("choice")}finishTransmit(){this.flags.transmitted=!0,this.screens.state.transmitted=!0,this.ctx.dishActive=!0,this.life.takeoff(),this.audio.chord([330,494,659,988,1318],.7),this.ui.toast("Uplink locked \xB7 transmitting to orbital relay\u2026","ok")}choose(t){this.ui.closeAll(),this.ending=t,this.finishTransmit(),this.setObjective(sm.done),this.radioQ=[],this.radioCur=null,this.radioT=0,this.ui.radio(null),this.stopVoice(),this.mode="end-wait";let e=this.ui.el.fade;e.classList.add("on"),setTimeout(()=>{this.beginOutro(t),e.classList.remove("on")},2200)}beginOutro(t){this.mode="outro",this.cineT=0,this.cardT=-1,this.fx.awake=!1,this.fx.alarm=!1,this.fx.ending=t,this.fx.endT=0,this.ui.hide("hud"),this.ui.prompt(""),this.ui.hold(0);for(let e of[this.ui.el.lbTop,this.ui.el.lbBot])e.classList.remove("hidden"),e.style.height="11vh";this.ui.show("skip"),this.say(t==="purge"?"endingPurge":"endingRelease"),this.camera.fov=55,this.camera.updateProjectionMatrix()}updateOutro(t){this.cineT+=t;let e=Math.min(this.cineT,40),i=this.ctx.marks.sub,s=this.camera,r=Math.hypot(i.x,i.z),o=i.x/r,a=i.z/r,l=-a,c=o,h=30-e*.25,u=16-e*.2;s.position.set(i.x-o*h+l*u,26-e*.15,i.z-a*h+c*u);let f=this.fx.ending==="release"?34+Math.max(0,e-12)*2.5:34;if(this.camTarget.set(i.x+o*f,0,i.z+a*f),s.lookAt(this.camTarget),this.cineT>3&&!this.radioBusy()){this.cardT=Math.max(this.cardT,0)+t;let d=mh[this.fx.ending].cards,p=Math.floor(this.cardT/4.6);p<d.length?this.ui.caption(this.cardT-p*4.6<4?d[p]:""):this.endOutro()}}endOutro(){if(this.mode!=="outro")return;this.mode="end-wait",this.radioQ=[],this.radioCur=null,this.radioT=0,this.ui.radio(null),this.stopVoice();let t=this.ui.el.fade;t.classList.add("on"),setTimeout(()=>{this.ui.clearCaption(),this.ui.hide("skip"),this.ui.el.lbTop.classList.add("hidden"),this.ui.el.lbBot.classList.add("hidden"),this.leaveTitleFov(),this.hudOn&&this.ui.show("hud"),this.fx.endT=Math.max(this.fx.endT,40),t.classList.remove("on"),this.showEnd()},800)}showEnd(){this.mode="end",this.unlock();let t=mh[this.ending]||mh.release;document.getElementById("end-eyebrow").textContent=t.eyebrow,document.getElementById("end-title").textContent=t.title,document.getElementById("end-text").textContent=t.text;let e=document.getElementById("end-stats");e.innerHTML=`<div><b>${t0(this.playTime)}</b>Mission time</div><div><b>${this.logs.size}/${Object.keys(ui).length}</b>Data logs</div><div><b>${(this.flags.svcFound?1:0)+(this.flags.pumpFound?1:0)}/2</b>Hidden areas</div><div><b>${this.ending==="purge"?"1 of 2":"2 of 2"}</b>${this.ending==="purge"?"Ending \xB7 Orders":"Ending \xB7 Mercy"}</div>`,this.ui.open("end")}elevAt(t){let e=this.ctx.elevator;return!e.moving&&Math.abs(e.y-e.levels[t])<.02}callLift(t){let e=this.ctx.elevator;e.target!==e.levels[t]&&(e.target=e.levels[t],this.audio.blip(990,.1),this.ui.toast("Lift called",""))}sendLift(t){let e=this.ctx.elevator;(Math.abs(e.target-e.levels[t])>.01||!this.elevAt(t))&&(e.target=e.levels[t],this.audio.blip(1180,.1))}inLift(){let t=this.ctx.elevator,e=this.body.pos;return Math.hypot(e.x-t.center.x,e.z-t.center.z)<t.r-.15&&e.y>t.y-.6&&e.y<t.y+2}updateLift(t){let e=this.ctx.elevator,i=e.target-e.y,s=e.moving;if(Math.abs(i)>.005)if(e.moving||(e.moving=!0,e.wait=.9),e.wait>0)e.wait-=t;else{e.v=dn((e.v||0)+Math.sign(i)*t*2.5,-2.8,2.8);let r=Math.sqrt(2*2.5*Math.abs(i))+.05;e.v=dn(e.v,-r,r);let o=e.v*t;Math.abs(o)>Math.abs(i)&&(o=i),e.y+=o}else e.moving&&(e.y=e.target,e.moving=!1,e.v=0,this.audio.blip(1320,.12),this.audio.door());e.car.y1=e.y,e.car.y0=e.y-.3,e.carMesh.position.y=e.y,e.gates.forEach((r,o)=>{r.enabled=!(!e.moving&&Math.abs(e.y-e.levels[o])<.02)}),this.liftDir=e.moving&&e.wait<=0?Math.sign(i):0}doorUnlocked(t,e){return!t.lock||e&&(e.x-t.pos.x)*Math.sin(t.yaw)+(e.z-t.pos.z)*Math.cos(t.yaw)>.2||this.explore?!0:t.lock==="cryo"?this.flags.restored&&this.flags.keycard:!0}updateDoors(t){let e=this.body.pos;this.lockedNear=null;for(let i of this.ctx.doors){let s=Math.hypot(e.x-i.pos.x,e.z-i.pos.z),r=e.y-i.pos.y,o=s<3.3&&r>-1&&r<3,a=this.doorUnlocked(i,e);i.target=o&&a?1:0,o&&!a&&s<2.6&&(this.lockedNear=i),i.target>i.open+.5&&!i.snd&&(this.audio.door(),i.snd=!0),i.target<.5&&(i.snd=!1),i.open=ba(i.open,i.target,5,t);let l=i.mesh.userData;l.L.position.x=-i.open*l.w*.48,l.R.position.x=i.open*l.w*.48,i.col.enabled=i.open<.8}this.cryoDoor&&(this.screens.state.cryoOpen=this.doorUnlocked(this.cryoDoor))}zoneAt(t,e,i){let s=ud();if(Math.hypot(t-s.x,i-s.z)<1.5&&e>5.5)return"lift";for(let a of Ca){let[l,c]=Re(a.k,0,a.v);if(Math.hypot(t-l,i-c)<fd(a)+1)return a.id}let r=Kp(t,i),o=Jp(t,i);if(r>56.3){let[a,l]=Zp(o,t,i);return o%2===0&&Math.abs(a)<3&&l<100?"bridge":o%2===1&&l<68.5&&Math.abs(a)<10?"obs":"ocean"}return e<5.3?Math.hypot(t,i)<10.5?"pump":"service":e<11.5?r<22?"atrium":r<27?"corridor":r<42?em[o]:(o===2||o===6)&&r<45&&e>6.4?"stairs":"promenade":e<17.5?r<24?"atrium":r<34?o===4?"mc":"gallery":r<42.3?"terrace":"stairs":r<34.3?"roof":"stairs"}updateZone(t){if(this._zoneAcc-=t,this._zoneAcc>0)return;this._zoneAcc=.2;let e=this.body.pos,i=this.zoneAt(e.x,e.y+.1,e.z);if(i!==this.zoneId){this.zoneId=i;let s=xh(e.y),r=["landing","energy","dock","comms","bridge","ocean","obs"].includes(i);this.ui.zone(tm[i]||"",r?"EXTERIOR \xB7 SEA LEVEL +6 M":Vb[s],`LOGS ${this.logs.size}/${Object.keys(ui).length}`),this.explore||(this.oid==="arrive"&&gh.has(i)&&i!=="service"&&i!=="pump"&&(this.goto("mc"),this.say("inside")),i==="cryo"&&this.flags.restored&&(this.oid==="keycard"||this.oid==="cryo")&&(this.goto("scan"),this.say("cryo"))),i==="cryo"&&this.body.pos.y<11&&!this.flags.svcFound&&!this.doorUnlocked(this.cryoDoor)&&(this.flags.svcFound=!0,this.ui.toast("Hidden area found \xB7 cryo sublevel passage","ok")),i==="pump"&&!this.flags.pumpFound&&(this.flags.pumpFound=!0,this.ui.toast("Hidden area found \xB7 Hydro Core","ok")),i==="service"&&!this._svcToast&&(this._svcToast=!0,this.ui.toast("Service ring \xB7 maintenance access","warn"))}else this.ui.el.zoneC.textContent=`LOGS ${this.logs.size}/${Object.keys(ui).length}`}objTarget(){if(this.explore)return null;let t=ki[this.obj];return!t||!t.target?null:this.targets[t.target]||null}interact(t){let e=this.focus;if(!e){this.lockedNear&&t&&this.audio.denied();return}if(!e.hold){if(e.can&&!e.can()){this.audio.denied();return}e.use()}}updateInteract(t){let e=this.body.pos,i=this.camera,s=new C;i.getWorldDirection(s);let r=null,o=1e9;for(let l of this.inter){if(!l.p||!l.ok())continue;let c=l.p.x-e.x,h=l.p.z-e.z,u=l.p.y-e.y;if(u<-1.2||u>2.2)continue;let f=Math.hypot(c,h);if(f>l.r)continue;let d=f<.6?1:(c*s.x+h*s.z)/(f*Math.hypot(s.x,s.z)+1e-6);if(d<.2)continue;let p=f*(1.6-d);p<o&&(o=p,r=l)}this.focus=r,this.holdTarget=r&&r.hold,r&&r.hold&&this.keys.KeyE&&(!r.can||r.can())?(this.holdId!==r.id&&(this.holdId=r.id,this.holdT=0),this.holdT+=t,this.ui.hold(this.holdT/r.hold),this.holdT>=r.hold&&(this.holdT=0,this.holdId=null,this.ui.hold(0),r.use(),this.keys.KeyE=!1)):(this.holdT>0&&this.ui.hold(0),this.holdT=0,this.holdId=null),this.tapInteract&&r&&!r.hold?(this.tapInteract=!1,this.interact(!0)):this.tapInteract=!1;let a=this.inLift();if(this.ui.liftPick(a&&!this.ctx.elevator.moving,this.ctx.elevator.levels.indexOf(this.ctx.elevator.target)),a){this.ui.prompt("");return}if(r){let l=!r.can||r.can(),c=r.label();this.ui.prompt(l?`<kbd>E</kbd>${r.hold,""}${c}`:c,!l&&!/nominal|complete|secured|here/.test(c))}else if(this.lockedNear){let l=this.lockedNear,c=this.flags.restored?"RESTRICTED \xB7 Level-3 clearance required":"SEALED \xB7 command bus offline \u2014 restore Mission Control";this.ui.prompt(c,!0)}else this.ui.prompt("")}togglePhoto(){this.photo=!this.photo,this.ui.letterbox(this.photo),this.ui.el.photoHint.classList.toggle("hidden",!this.photo),this.ui.el.hud.classList.toggle("hidden",this.photo||!this.hudOn),this.photo?(this.photoPos=this.camera.position.clone(),this.photoYaw=this.yaw,this.photoPitch=this.pitch,this.savedFov=this.camera.fov,setTimeout(()=>this.ui.el.photoHint.classList.add("hidden"),4e3)):(this.camera.fov=this.settings.fov,this.camera.updateProjectionMatrix(),this.yaw=this.photoYaw,this.pitch=this.photoPitch)}update(t,e){if(this.time=e,this.mode==="title"||this.mode==="loading"){this.updateTitle(t,e),this.updateSeaGlow(t,e);return}if(this.mode==="intro"||this.mode==="outro"||this.mode==="play-wait"||this.mode==="end-wait"){this.mode==="intro"&&this.updateIntro(t),this.mode==="outro"&&(this.updateOutro(t),this.updateRadio(t)),this.zoneId="ocean",this.common(t,e);return}let i=this.settings,s=.0022*i.sens;this.yaw-=this.mdx*s,this.pitch-=this.mdy*s*(i.inv?-1:1),this.pitch=dn(this.pitch,-1.5,1.5),this.mdx=this.mdy=0;let r=this.keys,o=this.ui.anyOpen()||this.mode==="end",a=0,l=0;o||((r.KeyW||r.ArrowUp)&&(l+=1),(r.KeyS||r.ArrowDown)&&(l-=1),(r.KeyD||r.ArrowRight)&&(a+=1),(r.KeyA||r.ArrowLeft)&&(a-=1),a+=this.touch.mx,l-=this.touch.my);let c=Math.hypot(a,l);c>1&&(a/=c,l/=c);let h=Math.sin(this.yaw),u=Math.cos(this.yaw),f=this.camera;if(this.photo){let v=(r.ShiftLeft||r.ShiftRight?18:6)*t,b=new C(-h*Math.cos(this.pitch),Math.sin(this.pitch),-u*Math.cos(this.pitch)),M=new C(u,0,-h);f.position.addScaledVector(b,l*v).addScaledVector(M,a*v),(r.KeyE||r.Space)&&(f.position.y+=v),(r.KeyQ||r.KeyC)&&(f.position.y-=v),f.rotation.set(this.pitch,this.yaw,0,"YXZ"),this.common(t,e);return}this.playTime+=t;let d=this.body,p=(r.ShiftLeft||r.ShiftRight)&&!d.fly;this.crouch=ba(this.crouch,r.KeyC&&!d.fly?1:0,10,t);let x=d.fly?p||r.ShiftLeft?30:12:(p?7.2:4.2)*(1-this.crouch*.5),g=(-h*l+u*a)*x,m=(-u*l-h*a)*x;if(d.fly){let v=(r.Space?1:0)-(r.KeyC?1:0),b=Math.sin(this.pitch)*l;d.vel.y=(v+b)*x,d.move(t,g*Math.cos(this.pitch),m*Math.cos(this.pitch),!1)}else{let v=d.pos.x,b=d.pos.z;d.move(t,o?0:g,o?0:m,!o&&r.Space);let M=Math.hypot(d.pos.x-v,d.pos.z-b);if(d.grounded&&(this.walked+=M,this.stepAcc+=M,this.bob+=M*1.9,this.stepAcc>(p?.85:.62))){this.stepAcc=0;let T=this.zoneId;this.audio.step(T==="service"||T==="bridge"||T==="stairs"?"metal":T==="atrium"?"soft":"hard")}d.pos.y<-2&&(d.pos.x=d.safe.x,d.pos.y=d.safe.y+.2,d.pos.z=d.safe.z,d.vel.x=d.vel.y=d.vel.z=0,this.ui.toast("Man overboard! A drone fished you out.","warn"))}let y=d.pos.y+(d.fly?1.62:1.62-this.crouch*.55);this.eyeY=Math.abs(y-this.eyeY)>1.2?y:ba(this.eyeY,y,18,t);let S=d.grounded&&!d.fly?Math.sin(this.bob)*.035*Math.min(1,Math.hypot(d.vel.x,d.vel.z)/4):0;f.position.set(d.pos.x,this.eyeY+S,d.pos.z),f.rotation.set(this.pitch,this.yaw,Math.sin(this.bob*.5)*.004,"YXZ"),this.updateLift(t),this.updateDoors(t),this.updateZone(t),this.pauseVoice(this.ui.anyOpen()),this.ui.anyOpen()||this.updateRadio(t),this.fx.alarm&&gh.has(this.zoneId)&&(this._alarmT=(this._alarmT||0)-t,this._alarmT<=0&&(this._alarmT=3.2,this.audio.blip(520,.35,"sawtooth",.035),setTimeout(()=>this.audio.blip(390,.45,"sawtooth",.035),380))),o?(this.ui.prompt(""),this.ui.hold(0)):this.updateInteract(t);for(let v of this.pickups)v.taken||(v.card.rotation.y=e*1.4,v.card.position.y=.33+Math.sin(e*2+v.p.x)*.03);if(this.keycardMesh.visible&&(this.keycardMesh.rotation.y=e*.8),this._mapAcc-=t,this._mapAcc<=0){this._mapAcc=1/20;let v=this.objTarget(),b=null;if(v){let M=v.x-d.pos.x,T=v.z-d.pos.z;b=(Math.atan2(M,-T)*180/Math.PI+360)%360;let _=v.y-d.pos.y;this.ui.objDistance(`${Math.round(Math.hypot(M,T))} m${_>3?"  \u25B2 above":_<-3?"  \u25BC below":""}`)}else this.ui.objDistance("");this.ui.compass(this.yaw,b),this.ui.minimap(d.pos.x,d.pos.z,this.yaw,xh(d.pos.y),v),this.ui.isOpen("mapview")&&this.drawBigMap()}this.common(t,e)}common(t,e){this.updateLights(t),this.updateSeaGlow(t,e);let i=gh.has(this.zoneId)?1:0,s=0;for(let r of this.life.vtols){let o=r.g.position.distanceTo(this.camera.position);s=Math.max(s,dn(1-o/160,0,1))}this.life.parked&&this.life.parked.state==="takeoff"&&(s=Math.max(s,dn(1-this.life.parked.g.position.distanceTo(this.camera.position)/200,0,1))),this.audio.mix(1-i*.85,i,s*(i?.2:1),this.liftDir||0,t)}updateTitle(t,e){this.titleT=(this.titleT||0)+t;let i=this.titleT,s=-2.35+i*.018,r=185+Math.sin(i*.045)*25,o=88+Math.sin(i*.06+.8)*14,a=this.camera;a.position.set(Math.sin(s)*r,o,Math.cos(s)*r);let l=Math.sin(s+.9)*8,c=Math.cos(s+.9)*8,h=l-a.position.x,u=c-a.position.z,f=Math.hypot(h,u),d=innerWidth>900?.36*f*(innerWidth/innerHeight)/1.78:0;this.camTarget.set(l+u/f*d,2+Math.sin(i*.05)*3,c-h/f*d),a.lookAt(this.camTarget),a.fov!==50&&(a.fov=50,a.updateProjectionMatrix()),this.zoneId="ocean",this.updateLights(t,!1),this.audio.mix(1,0,0,0,t)}leaveTitleFov(){this.camera.fov=this.settings.fov,this.camera.updateProjectionMatrix()}};var ne=n=>document.getElementById(n),La="#4ff2ff",Ai="rgba(79,242,255,0.35)",Na="rgba(79,242,255,0.07)",Hi="#e8f6ff",Zn="#ffb347",Bb="#ff5a4a",Wb=["LOBBY","CREW LOUNGE","RESEARCH LAB","CRYO LAB","DOCK AIRLOCK","ENGINEERING","QUARTERS","MESS HALL"],_h=class{constructor(){this.el={loading:ne("loading"),bar:ne("load-bar"),status:ne("load-status"),title:ne("title"),hud:ne("hud"),objT:ne("obj-t"),objH:ne("obj-h"),objD:ne("obj-d"),obj:ne("obj"),zoneN:ne("zone-n"),zoneL:ne("zone-l"),zoneC:ne("zone-c"),prompt:ne("prompt"),toasts:ne("toasts"),hold:ne("hold"),holdArc:ne("hold-arc"),fps:ne("fps"),lifepick:ne("lifepick"),compass:ne("compass"),minimap:ne("minimap"),mapcanvas:ne("mapcanvas"),resume:ne("resume"),fade:ne("fade"),lbTop:ne("lb-top"),lbBot:ne("lb-bot"),photoHint:ne("photo-hint")},this.cg=this.el.compass.getContext("2d"),this.mg=this.el.minimap.getContext("2d"),this.fg=this.el.mapcanvas.getContext("2d"),this.mapLevel=0,this.stack=[],this._lastPrompt="",document.querySelectorAll("[data-close]").forEach(t=>t.addEventListener("click",()=>this.closeTop())),document.querySelectorAll("#map-tabs button").forEach(t=>t.addEventListener("click",()=>{this.mapLevel=+t.dataset.l,this.syncTabs(),this.onMapRedraw&&this.onMapRedraw()}))}progress(t,e){this.el.bar.style.width=(t*100).toFixed(1)+"%",e&&(this.el.status.textContent=e)}show(t){ne(t).classList.remove("hidden")}hide(t){ne(t).classList.add("hidden")}isOpen(t){return!ne(t).classList.contains("hidden")}open(t){this.stack.includes(t)||(this.stack.push(t),this.show(t))}closeTop(){let t=this.stack.pop();t&&this.hide(t),this.onClose&&this.onClose(t)}closeAll(){for(;this.stack.length;)this.hide(this.stack.pop())}anyOpen(){return this.stack.length>0}syncTabs(){document.querySelectorAll("#map-tabs button").forEach(t=>t.classList.toggle("on",+t.dataset.l===this.mapLevel))}objective(t,e){this.el.objT.textContent=t?t.text:"",this.el.objH.textContent=t&&t.hint||"",this.el.obj.classList.toggle("hidden",!t),e&&(this.el.obj.classList.remove("flash"),this.el.obj.offsetWidth,this.el.obj.classList.add("flash"))}objDistance(t){this.el.objD.textContent=t}zone(t,e,i){this.el.zoneN.textContent=t,this.el.zoneL.textContent=e,this.el.zoneC.textContent=i}prompt(t,e){if(!t){this._lastPrompt&&(this.el.prompt.classList.add("hidden"),this._lastPrompt="");return}t!==this._lastPrompt&&(this.el.prompt.innerHTML=t,this._lastPrompt=t),this.el.prompt.classList.remove("hidden"),this.el.prompt.classList.toggle("locked",!!e)}hold(t){if(t<=0){this.el.hold.classList.add("hidden");return}this.el.hold.classList.remove("hidden"),this.el.holdArc.setAttribute("stroke-dashoffset",(163.4*(1-t)).toFixed(1))}liftPick(t,e){let i=this.el.lifepick;if(!t){i.classList.add("hidden");return}i.classList.remove("hidden");let r=["1 \xB7 Lobby","2 \xB7 Gallery / Mission Control","3 \xB7 Observation Roof"].map((o,a)=>`<div class="${a===e?"cur":""}"><kbd>${a+1}</kbd>${o.slice(4)}</div>`).join("");i._h!==r&&(i.innerHTML=r,i._h=r)}toast(t,e=""){let i=document.createElement("div");for(i.className="toast "+e,i.textContent=t,this.el.toasts.appendChild(i),setTimeout(()=>i.remove(),4100);this.el.toasts.children.length>4;)this.el.toasts.firstChild.remove()}compass(t,e){let i=this.cg,s=1040;i.clearRect(0,0,s,68);let o=i.createLinearGradient(0,0,s,0);o.addColorStop(0,"rgba(4,16,24,0)"),o.addColorStop(.2,"rgba(4,16,24,0.55)"),o.addColorStop(.8,"rgba(4,16,24,0.55)"),o.addColorStop(1,"rgba(4,16,24,0)"),i.fillStyle=o,i.fillRect(0,10,s,40);let a=(-t*180/Math.PI%360+360)%360,l=5.2;i.textAlign="center",i.textBaseline="middle";for(let c=-100;c<=100;c+=5){let h=Math.round((a+c)/5)*5,u=s/2+(h-a)*l;if(u<20||u>s-20)continue;let f=(h%360+360)%360,d=1-Math.abs(u-s/2)/(s/2);if(i.globalAlpha=Math.max(0,d),f%45===0){let p={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"}[f];i.fillStyle=f%90===0?Hi:La,i.font=`${f%90===0?600:400} 22px "Exo 2", sans-serif`,i.fillText(p,u,30)}else f%15===0?(i.fillStyle=Ai,i.fillRect(u-1,22,2,16)):(i.fillStyle="rgba(79,242,255,0.2)",i.fillRect(u-1,26,2,8))}if(i.globalAlpha=1,i.fillStyle=La,i.beginPath(),i.moveTo(s/2-7,6),i.lineTo(s/2+7,6),i.lineTo(s/2,14),i.fill(),e!=null){let c=(e-a+540)%360-180,h=Math.max(-96,Math.min(96,c)),u=s/2+h*l;i.fillStyle=Zn,i.beginPath(),i.moveTo(u,44),i.lineTo(u-8,58),i.lineTo(u+8,58),i.fill(),Math.abs(c)>96&&(i.font="600 18px sans-serif",i.fillText(c>0?"\u203A":"\u2039",u+(c>0?16:-16),51))}}drawPlan(t,e,i,s={}){let r=(u,f)=>i(u,f),o=(u,f,d,p=1.5)=>{t.beginPath(),u.forEach(([x,g],m)=>{let[y,S]=r(x,g);m?t.lineTo(y,S):t.moveTo(y,S)}),t.closePath(),d&&(t.fillStyle=d,t.fill()),f&&(t.strokeStyle=f,t.lineWidth=p,t.stroke())},a=(u,f,d,p,x,g=1.5)=>{let[m,y]=r(u,f),[S,v]=r(d,p);t.strokeStyle=x,t.lineWidth=g,t.beginPath(),t.moveTo(m,y),t.lineTo(S,v),t.stroke()},l=(u,f,d,p=Hi,x=12)=>{let[g,m]=r(f,d);t.fillStyle=p,t.font=`600 ${x}px "Exo 2", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(u,g,m)};for(let u of Ca){let f=dd(u).map(([p,x])=>Re(u.k,p,x));o(f,e===0||e===9?Ai:"rgba(79,242,255,0.15)",e===0||e===9?Na:null);let d=[[-2.3,56.5],[2.3,56.5],[2.3,u.shape==="rect"?u.v-u.d/2:u.v-u.a],[-2.3,u.shape==="rect"?u.v-u.d/2:u.v-u.a]].map(([p,x])=>Re(u.k,p,x));if(o(d,e===0||e===9?Ai:"rgba(79,242,255,0.15)",e===0||e===9?Na:null),s.labels){let[p,x]=Re(u.k,0,u.v);l(u.name.toUpperCase(),p,x,Hi,s.big?15:11)}}for(let u of[1,3,5,7]){let f=[[-6.2,56.2],[6.2,56.2],[9,60],[9,64],[6,67.5],[-6,67.5],[-9,64],[-9,60]].map(([d,p])=>Re(u,d,p));o(f,e===0?Ai:"rgba(79,242,255,0.12)",e===0?Na:null,1)}let c=La,h="rgba(79,242,255,0.18)";if(o(Zt(56.5),e===0||e===9?c:h,e===0||e===9?Na:null,2),(e===0||e===9)&&(o(Zt(56.2),null,"rgba(79,242,255,0.10)"),o(Zt(48),Ai,"rgba(2,10,16,0.55)",1.5),o(Zt(48),null,Na)),e===-1){o(Zt(27),c,"rgba(255,179,71,0.06)"),o(Zt(21),c),o(vn(10,32),Zn,"rgba(86,255,154,0.08)");let[u,f]=[Re(0,-1.4,10),Re(0,1.4,21)];o([[u[0],u[1]],[f[0],u[1]],[f[0],f[1]],[u[0],f[1]]],Zn);for(let d of[3,5])o([[Nt.u0,27],[Nt.u1,27],[Nt.u1,Nt.v1],[Nt.u0,Nt.v1]].map(([p,x])=>Re(d,p,x)),Zn,"rgba(255,179,71,0.12)");if(s.labels){l("HYDRO CORE",0,0,"#56ff9a",s.big?14:10);let[d,p]=Re(1,0,24);l("SERVICE RING",d,p,Zn,s.big?13:9)}}if((e===0||e===9)&&(o(Zt(42),c,e===0?"rgba(79,242,255,0.05)":null),o(Zt(27),e===0?Ai:h),o(Zt(22),e===0?c:h),e===0)){for(let u=0;u<8;u++){let[f,d]=Re(u,Lt*27,27),[p,x]=Re(u,Lt*42,42);if(a(f,d,p,x,Ai),s.labels){let[g,m]=Re(u,0,35);l(Wb[u],g,m,u===3?Bb:Hi,s.big?13:9)}}for(let u of[2,6]){let f=[[-7.9,42.25],[1.4,42.25],[1.4,44.75],[-7.9,44.75]].map(([d,p])=>Re(u,d,p));o(f,Zn,"rgba(255,179,71,0.15)",1)}s.labels&&l("ATRIUM",0,0,"#56ff9a",s.big?14:10)}if(e===1){o(Zt(42),h),o(Zt(34),c,"rgba(79,242,255,0.05)"),o(Zt(24),c);for(let u of[3,4]){let[f,d]=Re(u,Lt*24,24),[p,x]=Re(u,Lt*34,34);a(f,d,p,x,La,2)}o(Zt(42),Ai,null,1);for(let u of[2,6]){let f=[[-7.9,34.25],[1.4,34.25],[1.4,36.75],[-7.9,36.75]].map(([d,p])=>Re(u,d,p));o(f,Zn,"rgba(255,179,71,0.15)",1)}if(s.labels){let[u,f]=Re(4,0,29);l("MISSION CONTROL",u,f,Zn,s.big?13:9);let[d,p]=Re(0,0,29);l("GALLERY",d,p,Hi,s.big?12:9);let[x,g]=Re(0,0,38);l("TERRACE",x,g,Ai,s.big?11:8)}}if(e===2&&(o(Zt(34),c,"rgba(79,242,255,0.05)"),o(vn(26,48),c,"rgba(79,242,255,0.1)"),s.labels)){l("DOME",0,0,Hi,s.big?14:10);let[u,f]=Re(4,0,30.6);l("UPLINK",u,f,Zn,s.big?13:9)}if(e!==-1){let[u,f]=Re(nn.k,nn.u,nn.v),[d,p]=r(u,f);t.fillStyle=La,t.beginPath(),t.arc(d,p,s.big?6:3,0,Ne),t.fill()}}marker(t,e,i,s,r=7){t.fillStyle=s,t.beginPath(),t.moveTo(e,i-r),t.lineTo(e+r,i),t.lineTo(e,i+r),t.lineTo(e-r,i),t.closePath(),t.fill()}arrow(t,e,i,s,r=9){t.save(),t.translate(e,i),t.rotate(s),t.fillStyle=Hi,t.beginPath(),t.moveTo(0,-r*1.3),t.lineTo(r*.8,r),t.lineTo(0,r*.5),t.lineTo(-r*.8,r),t.closePath(),t.fill(),t.restore()}minimap(t,e,i,s,r){let o=this.mg,a=420,l=a/2,c=1.55;o.clearRect(0,0,a,a),o.save(),o.beginPath(),o.arc(l,l,l-2,0,Ne),o.clip();let h=Math.cos(i),u=Math.sin(i),f=(m,y)=>{let S=m-t,v=y-e,b=S*h-v*u,M=S*u+v*h;return[l+b*c,l+M*c]};if(this.drawPlan(o,s,f,{labels:!0}),r){let[m,y]=f(r.x,r.z),S=Math.hypot(m-l,y-l);S>l-16&&(m=l+(m-l)/S*(l-16),y=l+(y-l)/S*(l-16)),this.marker(o,m,y,Zn,9)}o.restore(),this.arrow(o,l,l,0,10),o.strokeStyle=Ai,o.lineWidth=2,o.beginPath(),o.arc(l,l,l-2,0,Ne),o.stroke();let d=l+-u*0+Math.sin(-i)*0,p=i,x=l+Math.sin(p)*(l-16),g=l-Math.cos(p)*(l-16);o.fillStyle=Hi,o.font='600 18px "Exo 2", sans-serif',o.textAlign="center",o.textBaseline="middle",o.fillText("N",x,g)}bigMap(t,e,i,s,r){let o=this.fg,a=1600,l=1e3;o.clearRect(0,0,a,l);let c=this.mapLevel===9,h=c?3.2:6.6,u=a/2,f=l/2,d=(g,m)=>[u+g*h,f+m*h];o.strokeStyle="rgba(79,242,255,0.05)",o.lineWidth=1;for(let g=0;g<a;g+=40)o.beginPath(),o.moveTo(g,0),o.lineTo(g,l),o.stroke();for(let g=0;g<l;g+=40)o.beginPath(),o.moveTo(0,g),o.lineTo(a,g),o.stroke();if(this.drawPlan(o,this.mapLevel===9?9:this.mapLevel,d,{labels:!0,big:!0}),s&&(r===this.mapLevel||c)){let[g,m]=d(s.x,s.z);this.marker(o,g,m,Zn,14),o.fillStyle=Zn,o.font='600 16px "Exo 2"',o.textAlign="left",o.fillText("OBJECTIVE",g+18,m+5)}let[p,x]=d(t,e);this.arrow(o,p,x,-i,14),o.fillStyle=Hi,o.font='600 15px "Exo 2"',o.textAlign="left",o.fillText("YOU",p+18,x+5),o.fillStyle="rgba(232,246,255,0.5)",o.font='14px "Share Tech Mono"',o.fillText("N \u2191   \xB7   grid 6 m",20,l-20)}journal(t,e,i=[]){let s=ne("j-list");s.innerHTML="";let r=Object.keys(ui);ne("j-count").textContent=`${t.size} / ${r.length}`;for(let o of r){let a=document.createElement("button");t.has(o)?(a.textContent=ui[o].title+"  \u2014  "+ui[o].by,a.onclick=()=>e(o)):(a.textContent="\u25A2  Unrecovered log",a.className="locked"),s.appendChild(a)}if(i.length){let o=document.createElement("div");o.className="sec",o.textContent="RADIO TRANSMISSIONS",s.appendChild(o);for(let[a,l]of i.slice().reverse()){let c=document.createElement("div");c.className="tx",c.style.setProperty("--sp",fh[a].color);let h=document.createElement("b");h.textContent=fh[a].name,c.append(h,l),s.appendChild(c)}}}radio(t,e){let i=ne("radio");if(!t){i.classList.add("hidden");return}let s=fh[t];i.style.setProperty("--sp",s.color),ne("radio-who").textContent=s.name,ne("radio-say").textContent=e,i.classList.add("hidden"),i.offsetWidth,i.classList.remove("hidden")}chapter(t){let e=ne("chapter");ne("ch-n").textContent=t.n,ne("ch-t").textContent=t.t,e.classList.remove("hidden","show"),e.offsetWidth,e.classList.add("show"),clearTimeout(this._chT),this._chT=setTimeout(()=>e.classList.add("hidden"),5e3)}caption(t,e){let i=ne("caption");if(!t){i.style.opacity=0;return}i.classList.remove("hidden"),i.classList.toggle("mono",!!e),i.textContent!==t?(i.style.opacity=0,clearTimeout(this._capT),this._capT=setTimeout(()=>{i.textContent=t,i.style.opacity=1},i.textContent?450:0)):i.style.opacity=1}clearCaption(){let t=ne("caption");t.textContent="",t.style.opacity=0,t.classList.add("hidden"),clearTimeout(this._capT)}showLog(t){let e=ui[t];ne("lv-title").textContent=e.title,ne("lv-by").textContent=e.by.toUpperCase(),ne("lv-body").textContent=e.text,this.open("logview")}letterbox(t){let e=window.innerWidth,i=window.innerHeight,s=t?Math.max(0,(i-e*9/16)/2):0;for(let r of[this.el.lbTop,this.el.lbBot])r.classList.toggle("hidden",!t),r.style.height=s+"px"}};var bh=class{constructor(){this.ctx=null,this.vol=.8,this.ready=!1}start(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.vol,this.master.connect(e.destination);let i=e.createBuffer(1,e.sampleRate*4,e.sampleRate),s=i.getChannelData(0),r=0;for(let b=0;b<s.length;b++){let M=Math.random()*2-1;r=(r+.02*M)/1.02,s[b]=r*3.5}let o=e.createBuffer(1,e.sampleRate*2,e.sampleRate),a=o.getChannelData(0);for(let b=0;b<a.length;b++)a[b]=Math.random()*2-1;this.whiteBuf=o;let l=b=>{let M=e.createBufferSource();return M.buffer=b,M.loop=!0,M.start(),M};this.ocean=e.createGain(),this.ocean.gain.value=0,this.ocean.connect(this.master);let c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=520,l(i).connect(c),c.connect(this.ocean);let h=e.createOscillator();h.frequency.value=.09;let u=e.createGain();u.gain.value=180,h.connect(u),u.connect(c.frequency),h.start(),this.wind=e.createGain(),this.wind.gain.value=0,this.wind.connect(this.master);let f=e.createBiquadFilter();f.type="bandpass",f.frequency.value=700,f.Q.value=.6,l(o).connect(f),f.connect(this.wind);let d=e.createOscillator();d.frequency.value=.05;let p=e.createGain();p.gain.value=300,d.connect(p),p.connect(f.frequency),d.start(),this.hum=e.createGain(),this.hum.gain.value=0,this.hum.connect(this.master);for(let[b,M]of[[55,.35],[110,.12],[165,.05]]){let T=e.createOscillator();T.frequency.value=b;let _=e.createGain();_.gain.value=M,T.connect(_),_.connect(this.hum),T.start()}let x=e.createBiquadFilter();x.type="lowpass",x.frequency.value=260,l(i).connect(x);let g=e.createGain();g.gain.value=.5,x.connect(g),g.connect(this.hum),this.air=e.createGain(),this.air.gain.value=0,this.air.connect(this.master);let m=e.createBiquadFilter();m.type="bandpass",m.frequency.value=240,m.Q.value=1.2,l(o).connect(m),m.connect(this.air);let y=e.createOscillator();y.type="sawtooth",y.frequency.value=92;let S=e.createGain();S.gain.value=.05,y.connect(S),S.connect(this.air),y.start(),this.liftG=e.createGain(),this.liftG.gain.value=0,this.liftG.connect(this.master);let v=e.createOscillator();v.type="triangle",v.frequency.value=140,v.connect(this.liftG),v.start(),this.liftOsc=v,this.ready=!0}setVolume(t){this.vol=t,this.master&&(this.master.gain.value=t)}mix(t,e,i,s,r){if(!this.ready)return;let o=this.ctx.currentTime,a=.25;this.ocean.gain.setTargetAtTime(t*.55+e*.05,o,a),this.wind.gain.setTargetAtTime(t*.12,o,a),this.hum.gain.setTargetAtTime(e*.07,o,a),this.air.gain.setTargetAtTime(i*.35,o,.15),this.liftG.gain.setTargetAtTime(s?.04:0,o,.2),s&&this.liftOsc.frequency.setTargetAtTime(s>0?170:120,o,.5)}blip(t=880,e=.08,i="sine",s=.15){if(!this.ready)return;let r=this.ctx,o=r.createOscillator(),a=r.createGain();o.type=i,o.frequency.value=t,a.gain.value=s,a.gain.setTargetAtTime(0,r.currentTime+e*.5,e*.4),o.connect(a),a.connect(this.master),o.start(),o.stop(r.currentTime+e*3)}chord(t,e=.5){t.forEach((i,s)=>setTimeout(()=>this.blip(i,e,"sine",.1),s*90))}noiseHit(t=800,e=.12,i=.2,s="bandpass",r=0){if(!this.ready)return;let o=this.ctx,a=o.createBufferSource();a.buffer=this.whiteBuf;let l=o.createBiquadFilter();l.type=s,l.frequency.value=t,l.Q.value=1.5,r&&l.frequency.exponentialRampToValueAtTime(Math.max(40,t+r),o.currentTime+e);let c=o.createGain();c.gain.value=i,c.gain.setTargetAtTime(0,o.currentTime+e*.3,e*.35),a.connect(l),l.connect(c),c.connect(this.master),a.start(0,Math.random()*1.5),a.stop(o.currentTime+e*2.5)}step(t){t==="metal"?this.noiseHit(2400+Math.random()*600,.07,.12,"bandpass"):t==="soft"?this.noiseHit(500+Math.random()*100,.08,.06,"lowpass"):this.noiseHit(1200+Math.random()*300,.06,.09,"bandpass")}door(){this.noiseHit(1800,.45,.12,"bandpass",-1500)}denied(){this.blip(220,.12,"square",.06),setTimeout(()=>this.blip(180,.16,"square",.06),130)}};var rm={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},ys=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new vd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Ld(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,e,i,s){let r=new yd,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(t,e,s).catch(i)}parseAsync(t,e){let i=this;return new Promise(function(s,r){i.parse(t,s,r,e)})}},fe={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},md="KHR_mesh_quantization",kn={};kn[Je]=fe.NEAREST;kn[Kl]=fe.NEAREST_MIPMAP_NEAREST;kn[Ls]=fe.NEAREST_MIPMAP_LINEAR;kn[Qe]=fe.LINEAR;kn[Dr]=fe.LINEAR_MIPMAP_NEAREST;kn[wn]=fe.LINEAR_MIPMAP_LINEAR;kn[Gn]=fe.CLAMP_TO_EDGE;kn[Zi]=fe.REPEAT;kn[dr]=fe.MIRRORED_REPEAT;var om={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Xb=new ft,am=12,qb=1179937895,Yb=2,lm=8,$b=1313821514,Zb=5130562;function zi(n,t){return n.length===t.length&&n.every(function(e,i){return e===t[i]})}function Kb(n){return new TextEncoder().encode(n).buffer}function Jb(n){return zi(n.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function jb(n,t,e){let i={min:new Array(n.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(n.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=t;s<t+e;s++)for(let r=0;r<n.itemSize;r++){let o;n.itemSize>4?o=n.array[s*n.itemSize+r]:(r===0?o=n.getX(s):r===1?o=n.getY(s):r===2?o=n.getZ(s):r===3&&(o=n.getW(s)),n.normalized===!0&&(o=Ns.normalize(o,n.array))),i.min[r]=Math.min(i.min[r],o),i.max[r]=Math.max(i.max[r],o)}return i}function cm(n){return Math.ceil(n/4)*4}function gd(n,t=0){let e=cm(n.byteLength);if(e!==n.byteLength){let i=new Uint8Array(e);if(i.set(new Uint8Array(n)),t!==0)for(let s=n.byteLength;s<e;s++)i[s]=t;return i.buffer}return n}function xd(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Qb(n,t){if(typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas){let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),n.convertToBlob({type:t,quality:e})}else return new Promise(e=>n.toBlob(e,t))}var yd=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r186"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map,normalMaps:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,e,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1,copyright:null},i),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);let s=this,r=s.buffers,o=s.json;i=s.options;let a=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),u=Object.keys(l);if(h.length>0&&(o.extensionsUsed=h),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),i.copyright&&(o.asset.copyright=i.copyright),i.binary===!0){let f=new FileReader;f.readAsArrayBuffer(c),f.onloadend=function(){let d=gd(f.result),p=new DataView(new ArrayBuffer(lm));p.setUint32(0,d.byteLength,!0),p.setUint32(4,Zb,!0);let x=gd(Kb(JSON.stringify(o)),32),g=new DataView(new ArrayBuffer(lm));g.setUint32(0,x.byteLength,!0),g.setUint32(4,$b,!0);let m=new ArrayBuffer(am),y=new DataView(m);y.setUint32(0,qb,!0),y.setUint32(4,Yb,!0);let S=am+g.byteLength+x.byteLength+p.byteLength+d.byteLength;y.setUint32(8,S,!0);let v=new Blob([m,g,x,p,d],{type:"application/octet-stream"}),b=new FileReader;b.readAsArrayBuffer(v),b.onloadend=function(){e(b.result)}}}else if(o.buffers&&o.buffers.length>0){let f=new FileReader;f.readAsDataURL(c),f.onloadend=function(){let d=f.result;o.buffers[0].uri=d,e(o)}}else e(o)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;let i=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(t.userData));if(i.includeCustomExtensions&&r.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(let o in r.gltfExtensions)e.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(e.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(t,s)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;let i=new C;for(let s=0,r=t.count;s<r;s++)if(Math.abs(i.fromBufferAttribute(t,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){let e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);let i=t.clone(),s=new C;for(let r=0,o=i.count;r<o;r++)s.fromBufferAttribute(i,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),i.setXYZ(r,s.x,s.y,s.z);return e.attributesNormalized.set(t,i),i}applyTextureTransform(t,e){let i=!1,s={};(e.offset.x!==0||e.offset.y!==0)&&(s.offset=e.offset.toArray(),i=!0),e.rotation!==0&&(s.rotation=e.rotation,i=!0),(e.repeat.x!==1||e.repeat.y!==1)&&(s.scale=e.repeat.toArray(),i=!0),i&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,e){if(t===e)return t;function i(d){return d.colorSpace===ze?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}t instanceof Ki&&(t=await this.decompressTextureAsync(t)),e instanceof Ki&&(e=await this.decompressTextureAsync(e));let s=t?t.image:null,r=e?e.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),l=xd();l.width=o,l.height=a;let c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);let h=c.getImageData(0,0,o,a);if(s){c.drawImage(s,0,0,o,a);let d=i(t),p=c.getImageData(0,0,o,a).data;for(let x=2;x<p.length;x+=4)h.data[x]=d(p[x]/256)*256}if(r){c.drawImage(r,0,0,o,a);let d=i(e),p=c.getImageData(0,0,o,a).data;for(let x=1;x<p.length;x+=4)h.data[x]=d(p[x]/256)*256}c.putImageData(h,0,0);let f=(t||e).clone();return f.source=new Di(l),f.colorSpace=ai,f.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),f}async buildNormalMapTextureAsync(t,e,i){t instanceof Ki&&(t=await this.decompressTextureAsync(t));let s=t.image,r=xd();r.width=s.width,r.height=s.height;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(s,0,0,r.width,r.height);let a=o.getImageData(0,0,r.width,r.height),l=a.data;for(let h=0;h<l.length;h+=4)e&&(l[h+0]=255-l[h+0]),i&&(l[h+1]=255-l[h+1]);o.putImageData(a,0,0);let c=t.clone();return c.source=new Di(r),c}async decompressTextureAsync(t,e=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,e)}processBuffer(t){let e=this.json,i=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),i.push(t),0}processBufferView(t,e,i,s,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(e){case fe.BYTE:case fe.UNSIGNED_BYTE:a=1;break;case fe.SHORT:case fe.UNSIGNED_SHORT:a=2;break;default:a=4}let l=t.itemSize*a;r===fe.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let c=cm(s*l),h=new DataView(new ArrayBuffer(c)),u=0;for(let p=i;p<i+s;p++){for(let x=0;x<t.itemSize;x++){let g;t.itemSize>4?g=t.array[p*t.itemSize+x]:(x===0?g=t.getX(p):x===1?g=t.getY(p):x===2?g=t.getZ(p):x===3&&(g=t.getW(p)),t.normalized===!0&&(g=Ns.normalize(g,t.array))),e===fe.FLOAT?h.setFloat32(u,g,!0):e===fe.INT?h.setInt32(u,g,!0):e===fe.UNSIGNED_INT?h.setUint32(u,g,!0):e===fe.SHORT?h.setInt16(u,g,!0):e===fe.UNSIGNED_SHORT?h.setUint16(u,g,!0):e===fe.BYTE?h.setInt8(u,g):e===fe.UNSIGNED_BYTE&&h.setUint8(u,g),u+=a}u%l!==0&&(u+=l-u%l)}let f={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(f.target=r),r===fe.ARRAY_BUFFER&&(f.byteStride=l),this.byteOffset+=c,o.bufferViews.push(f),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){let e=this,i=e.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(t),r.onloadend=function(){let o=gd(r.result),a={buffer:e.processBuffer(o),byteOffset:e.byteOffset,byteLength:o.byteLength};e.byteOffset+=o.byteLength,s(i.bufferViews.push(a)-1)}})}processAccessor(t,e,i,s){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(t.array.constructor===Float32Array)a=fe.FLOAT;else if(t.array.constructor===Int32Array)a=fe.INT;else if(t.array.constructor===Uint32Array)a=fe.UNSIGNED_INT;else if(t.array.constructor===Int16Array)a=fe.SHORT;else if(t.array.constructor===Uint16Array)a=fe.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)a=fe.BYTE;else if(t.array.constructor===Uint8Array)a=fe.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(i===void 0&&(i=0),(s===void 0||s===1/0)&&(s=t.count),s===0)return null;let l=jb(t,i,s),c;e!==void 0&&(c=t===e.index?fe.ELEMENT_ARRAY_BUFFER:fe.ARRAY_BUFFER);let h=this.processBufferView(t,a,i,s,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:s,max:l.max,min:l.min,type:o[t.itemSize]};return t.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(t,e,i,s="image/png"){if(t!==null){let r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(t)||o.images.set(t,{});let h=o.images.get(t),u=s+":flipY/"+i.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);let f={mimeType:s},d=xd();d.width=Math.min(t.width,l.maxTextureSize),d.height=Math.min(t.height,l.maxTextureSize);let p=d.getContext("2d",{willReadFrequently:!0});if(i===!0&&(p.translate(0,d.height),p.scale(1,-1)),t.data!==void 0){e!==Rn&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>l.maxTextureSize||t.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);let g=new Uint8ClampedArray(t.height*t.width*4);for(let m=0;m<g.length;m+=4)g[m+0]=t.data[m+0],g[m+1]=t.data[m+1],g[m+2]=t.data[m+2],g[m+3]=t.data[m+3];p.putImageData(new ImageData(g,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)p.drawImage(t,0,0,d.width,d.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(Qb(d,s).then(g=>r.processBufferViewImage(g)).then(g=>{f.bufferView=g})):f.uri=xr.getDataURL(d,s);let x=a.images.push(f)-1;return h[u]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){let e=this.json;e.samplers||(e.samplers=[]);let i={magFilter:kn[t.magFilter],minFilter:kn[t.minFilter],wrapS:kn[t.wrapS],wrapT:kn[t.wrapT]};return e.samplers.push(i)-1}async processTextureAsync(t){let i=this.options,s=this.cache,r=this.json;if(s.textures.has(t))return s.textures.get(t);r.textures||(r.textures=[]),t instanceof Ki&&(t=await this.decompressTextureAsync(t,i.maxTextureSize));let o=t.userData.mimeType,a=this.processImage(t.image,t.format,t.flipY,o),l={sampler:this.processSampler(t)};o==="image/webp"?(l.extensions=l.extensions||{},l.extensions.EXT_texture_webp={source:a},this.extensionsUsed.EXT_texture_webp=!0,this.extensionsRequired.EXT_texture_webp=!0):l.source=a,t.name&&(l.name=t.name),await this._invokeAllAsync(async function(h){h.writeTexture&&await h.writeTexture(t,l)});let c=r.textures.push(l)-1;return s.textures.set(t,c),c}async processMaterialAsync(t,e){let i=this.cache,s=this.json,r=e!==void 0&&e.hasAttribute("tangent"),o=t.normalMap?t.uuid+":"+r:t.uuid;if(i.materials.has(o))return i.materials.get(o);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;s.materials||(s.materials=[]);let a={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let l=t.color.toArray().concat([t.opacity]);if(zi(l,[1,1,1,1])||(a.pbrMetallicRoughness.baseColorFactor=l),t.isMeshStandardMaterial?(a.pbrMetallicRoughness.metallicFactor=t.metalness,a.pbrMetallicRoughness.roughnessFactor=t.roughness):(a.pbrMetallicRoughness.metallicFactor=0,a.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){let h=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),u={index:await this.processTextureAsync(h),texCoord:h.channel};this.applyTextureTransform(u,h),a.pbrMetallicRoughness.metallicRoughnessTexture=u}if(t.map){let h={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(h,t.map),a.pbrMetallicRoughness.baseColorTexture=h}if(t.emissive){let h=t.emissive;if(Math.max(h.r,h.g,h.b)>0&&(a.emissiveFactor=t.emissive.toArray()),t.emissiveMap){let f={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(f,t.emissiveMap),a.emissiveTexture=f}}if(t.normalMap){let h=t.normalScale,u=h.x<0,f=r?h.y<0:h.y>0,d=t.normalMap;if(u||f){i.normalMaps.has(t.normalMap)===!1&&i.normalMaps.set(t.normalMap,{});let x=i.normalMaps.get(t.normalMap),g=`${u}:${f}`;x[g]===void 0&&(x[g]=await this.buildNormalMapTextureAsync(t.normalMap,u,f)),d=x[g]}let p={index:await this.processTextureAsync(d),texCoord:t.normalMap.channel};Math.abs(h.x)!==1&&(p.scale=Math.abs(h.x)),this.applyTextureTransform(p,t.normalMap),a.normalTexture=p}if(t.aoMap){let h={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(h.strength=t.aoMapIntensity),this.applyTextureTransform(h,t.aoMap),a.occlusionTexture=h}t.transparent?a.alphaMode="BLEND":t.alphaTest>0&&(a.alphaMode="MASK",a.alphaCutoff=t.alphaTest),t.side===Ye&&(a.doubleSided=!0),t.name!==""&&(a.name=t.name),this.serializeUserData(t,a),await this._invokeAllAsync(async function(h){h.writeMaterialAsync&&await h.writeMaterialAsync(t,a)});let c=s.materials.push(a)-1;return i.materials.set(o,c),c}async processMeshAsync(t){let e=this.cache,i=this.json,s=[t.geometry.uuid];if(Array.isArray(t.material))for(let v=0,b=t.material.length;v<b;v++)s.push(t.material[v].uuid);else s.push(t.material.uuid);let r=s.join(":");if(e.meshes.has(r))return e.meshes.get(r);let o=t.geometry,a;t.isLineSegments?a=fe.LINES:t.isLineLoop?a=fe.LINE_LOOP:t.isLine?a=fe.LINE_STRIP:t.isPoints?a=fe.POINTS:a=t.material.wireframe?fe.LINES:fe.TRIANGLES;let l={},c={},h=[],u=[],f={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},d=o.getAttribute("normal");d!==void 0&&!this.isNormalizedNormalAttribute(d)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(d)));let p=null;for(let v in o.attributes){if(v.slice(0,5)==="morph")continue;let b=o.attributes[v];if(v=f[v]||v.toUpperCase(),!/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(v)&&!v.startsWith("_")&&(v="_"+v),e.attributes.has(this.getUID(b))){c[v]=e.attributes.get(this.getUID(b));continue}p=null;let T=b.array;v==="JOINTS_0"&&!(T instanceof Uint16Array)&&!(T instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),p=ys.Utils.toTypedBufferAttribute(b,Uint16Array)):(T instanceof Uint32Array||T instanceof Int32Array)&&!v.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${v}" converted to type FLOAT.`),p=ys.Utils.toTypedBufferAttribute(b,Float32Array));let _=this.processAccessor(p||b,o);_!==null&&(v.startsWith("_")||this.detectMeshQuantization(v,b),c[v]=_,e.attributes.set(this.getUID(b),_))}if(d!==void 0&&o.setAttribute("normal",d),Object.keys(c).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){let v=[],b=[],M={};if(t.morphTargetDictionary!==void 0)for(let T in t.morphTargetDictionary)M[t.morphTargetDictionary[T]]=T;for(let T=0;T<t.morphTargetInfluences.length;++T){let _={},w=!1;for(let R in o.morphAttributes){if(R!=="position"&&R!=="normal"){w||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),w=!0);continue}let P=o.morphAttributes[R][T],L=R.toUpperCase(),U=o.attributes[R];if(e.attributes.has(this.getUID(P,!0))){_[L]=e.attributes.get(this.getUID(P,!0));continue}let N=P.clone();if(!o.morphTargetsRelative)for(let D=0,O=P.count;D<O;D++)for(let z=0;z<P.itemSize;z++)z===0&&N.setX(D,P.getX(D)-U.getX(D)),z===1&&N.setY(D,P.getY(D)-U.getY(D)),z===2&&N.setZ(D,P.getZ(D)-U.getZ(D)),z===3&&N.setW(D,P.getW(D)-U.getW(D));_[L]=this.processAccessor(N,o),e.attributes.set(this.getUID(U,!0),_[L])}u.push(_),v.push(t.morphTargetInfluences[T]),t.morphTargetDictionary!==void 0&&b.push(M[T])}l.weights=v,b.length>0&&(l.extras={},l.extras.targetNames=b)}let x=Array.isArray(t.material);if(x&&o.groups.length===0)return null;let g=!1;if(x&&o.index===null){let v=[];for(let b=0,M=o.attributes.position.count;b<M;b++)v[b]=b;o.setIndex(v),g=!0}let m=x?t.material:[t.material],y=x?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let v=0,b=y.length;v<b;v++){let M={mode:a,attributes:c};if(this.serializeUserData(o,M),u.length>0&&(M.targets=u),o.index!==null){let _=this.getUID(o.index);(y[v].start!==void 0||y[v].count!==void 0)&&(_+=":"+y[v].start+":"+y[v].count),e.attributes.has(_)?M.indices=e.attributes.get(_):(M.indices=this.processAccessor(o.index,o,y[v].start,y[v].count),e.attributes.set(_,M.indices)),M.indices===null&&delete M.indices}let T=await this.processMaterialAsync(m[y[v].materialIndex],o);T!==null&&(M.material=T),h.push(M)}g===!0&&o.setIndex(null),l.primitives=h,i.meshes||(i.meshes=[]),await this._invokeAllAsync(function(v){v.writeMesh&&v.writeMesh(t,l)});let S=i.meshes.push(l)-1;return e.meshes.set(r,S),S}detectMeshQuantization(t,e){if(this.extensionsUsed[md])return;let i;switch(e.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}e.normalized&&(i+=" normalized");let s=t.split("_",1)[0];rm[s]&&rm[s].includes(i)&&(this.extensionsUsed[md]=!0,this.extensionsRequired[md]=!0)}processCamera(t){let e=this.json;e.cameras||(e.cameras=[]);let i=t.isOrthographicCamera,s={type:i?"orthographic":"perspective"};return i?s.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:s.perspective={aspectRatio:t.aspect,yfov:Ns.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(s.name=t.type),e.cameras.push(s)-1}processAnimation(t,e){let i=this.json,s=this.nodeMap;i.animations||(i.animations=[]),t=ys.Utils.mergeMorphTargetTracks(t.clone(),e);let r=t.tracks,o=[],a=[];for(let c=0;c<r.length;++c){let h=r[c],u=Me.parseTrackName(h.name),f=Me.findNode(e,u.nodeName),d=om[u.propertyName];if(u.objectName==="bones"&&(f.isSkinnedMesh===!0?f=f.skeleton.getBoneByName(u.objectIndex):f=void 0),!f||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}let p=1,x=h.values.length/h.times.length;d===om.morphTargetInfluences&&(x/=f.morphTargetInfluences.length);let g;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(g="CUBICSPLINE",x/=3):h.getInterpolation()===Ts?g="STEP":g="LINEAR",a.push({input:this.processAccessor(new ge(h.times,p)),output:this.processAccessor(new ge(h.values,x)),interpolation:g}),o.push({sampler:a.length-1,target:{node:s.get(f),path:d}})}let l={name:t.name||"clip_"+i.animations.length,samplers:a,channels:o};return this.serializeUserData(t,l),i.animations.push(l),i.animations.length-1}processSkin(t){let e=this.json,i=this.nodeMap,s=e.nodes[i.get(t)],r=t.skeleton;if(r===void 0)return null;let o=t.skeleton.bones[0];if(o===void 0)return null;let a=[],l=new Float32Array(r.bones.length*16),c=new $t;for(let u=0;u<r.bones.length;++u)a.push(i.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(t.bindMatrix).toArray(l,u*16);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new ge(l,16)),joints:a,skeleton:i.get(o)}),s.skin=e.skins.length-1}async processNodeAsync(t){let e=this.json,i=this.options,s=this.nodeMap;if(e.nodes||(e.nodes=[]),t.pivot!==null)return await this._processNodeWithPivotAsync(t);let r={};if(i.trs){let a=t.quaternion.toArray(),l=t.position.toArray(),c=t.scale.toArray();zi(a,[0,0,0,1])||(r.rotation=a),zi(l,[0,0,0])||(r.translation=l),zi(c,[1,1,1])||(r.scale=c)}else t.matrixAutoUpdate&&t.updateMatrix(),Jb(t.matrix)===!1&&(r.matrix=t.matrix.elements);if(t.name!==""&&(r.name=String(t.name)),this.serializeUserData(t,r),t.isMesh||t.isLine||t.isPoints){let a=await this.processMeshAsync(t);a!==null&&(r.mesh=a)}else t.isCamera&&(r.camera=this.processCamera(t));t.isSkinnedMesh&&this.skins.push(t);let o=e.nodes.push(r)-1;if(s.set(t,o),t.children.length>0){let a=[];for(let l=0,c=t.children.length;l<c;l++){let h=t.children[l];if(h.visible||i.onlyVisible===!1){let u=await this.processNodeAsync(h);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(t,r)}),o}async _processNodeWithPivotAsync(t){let e=this.json,i=this.options,s=this.nodeMap,r=t.pivot,o={},a=t.quaternion.toArray(),l=[t.position.x+r.x,t.position.y+r.y,t.position.z+r.z],c=t.scale.toArray();zi(a,[0,0,0,1])||(o.rotation=a),zi(l,[0,0,0])||(o.translation=l),zi(c,[1,1,1])||(o.scale=c),o.extras={pivot:r.toArray()},t.name!==""&&(o.name=String(t.name)),this.serializeUserData(t,o);let h=e.nodes.push(o)-1;s.set(t,h);let u={},f=[-r.x,-r.y,-r.z];if(zi(f,[0,0,0])||(u.translation=f),t.isMesh||t.isLine||t.isPoints){let x=await this.processMeshAsync(t);x!==null&&(u.mesh=x)}else t.isCamera&&(u.camera=this.processCamera(t));t.isSkinnedMesh&&this.skins.push(t);let p=[e.nodes.push(u)-1];if(t.children.length>0){let x=[];for(let g=0,m=t.children.length;g<m;g++){let y=t.children[g];if(y.visible||i.onlyVisible===!1){let S=await this.processNodeAsync(y);S!==null&&x.push(S)}}x.length>0&&(u.children=x)}return o.children=p,await this._invokeAllAsync(function(x){x.writeNode&&x.writeNode(t,o)}),h}async processSceneAsync(t){let e=this.json,i=this.options;e.scenes||(e.scenes=[],e.scene=0);let s={};t.name!==""&&(s.name=t.name),e.scenes.push(s);let r=[];for(let o=0,a=t.children.length;o<a;o++){let l=t.children[o];if(l.visible||i.onlyVisible===!1){let c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(s.nodes=r),this.serializeUserData(t,s)}async processObjectsAsync(t){let e=new Bn;e.name="AuxScene";for(let i=0;i<t.length;i++)e.children.push(t[i]);await this.processSceneAsync(e)}async processInputAsync(t){let e=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(t)});let i=[];for(let s=0;s<t.length;s++)t[s]instanceof Bn?await this.processSceneAsync(t[s]):i.push(t[s]);i.length>0&&await this.processObjectsAsync(i);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);if(t.length===1)for(let s=0;s<e.animations.length;++s)this.processAnimation(e.animations[s],t[0]);else for(let s=0;s<t.length;s++){let r=e.animations[s]||[];for(let o=0;o<r.length;++o)this.processAnimation(r[o],t[s])}await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(t)})}async _invokeAllAsync(t){for(let e=0,i=this.plugins.length;e<i;e++)await t(this.plugins[e])}},vd=class{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}let i=this.writer,s=i.json,r=i.extensionsUsed,o={};t.name&&(o.name=t.name),o.color=t.color.toArray(),o.intensity=t.intensity,t.isDirectionalLight?o.type="directional":t.isPointLight?(o.type="point",t.distance>0&&(o.range=t.distance)):t.isSpotLight&&(o.type="spot",t.distance>0&&(o.range=t.distance),o.spot={},o.spot.innerConeAngle=(1-t.penumbra)*t.angle,o.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let a=s.extensions[this.name].lights;a.push(o),e.extensions=e.extensions||{},e.extensions[this.name]={light:a.length-1}}},_d=class{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,e){if(!t.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},s[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}},bd=class{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.clearcoatFactor=t.clearcoat,t.clearcoatMap){let o={index:await i.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};i.applyTextureTransform(o,t.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){let o={index:await i.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};i.applyTextureTransform(o,t.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(t.clearcoatNormalMap){let o={index:await i.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(o.scale=t.clearcoatNormalScale.x),i.applyTextureTransform(o,t.clearcoatNormalMap),r.clearcoatNormalTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Sd=class{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;let s=this.writer.extensionsUsed,r={};r.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Ed=class{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.iridescenceFactor=t.iridescence,t.iridescenceMap){let o={index:await i.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};i.applyTextureTransform(o,t.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=t.iridescenceIOR,r.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){let o={index:await i.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};i.applyTextureTransform(o,t.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Md=class{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.transmissionFactor=t.transmission,t.transmissionMap){let o={index:await i.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};i.applyTextureTransform(o,t.transmissionMap),r.transmissionTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Td=class{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.thicknessFactor=t.thickness,t.thicknessMap){let o={index:await i.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};i.applyTextureTransform(o,t.thicknessMap),r.thicknessTexture=o}t.attenuationDistance!==1/0&&(r.attenuationDistance=t.attenuationDistance),r.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},wd=class{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Ad=class{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(Xb)&&!t.specularIntensityMap&&!t.specularColorMap)return;let i=this.writer,s=i.extensionsUsed,r={};if(t.specularIntensityMap){let o={index:await i.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};i.applyTextureTransform(o,t.specularIntensityMap),r.specularTexture=o}if(t.specularColorMap){let o={index:await i.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};i.applyTextureTransform(o,t.specularColorMap),r.specularColorTexture=o}r.specularFactor=t.specularIntensity,r.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Rd=class{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;let i=this.writer,s=i.extensionsUsed,r={};if(t.sheenRoughnessMap){let o={index:await i.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};i.applyTextureTransform(o,t.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(t.sheenColorMap){let o={index:await i.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};i.applyTextureTransform(o,t.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=t.sheenRoughness,r.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Cd=class{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;let i=this.writer,s=i.extensionsUsed,r={};if(t.anisotropyMap){let o={index:await i.processTextureAsync(t.anisotropyMap)};i.applyTextureTransform(o,t.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=t.anisotropy,r.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Id=class{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Pd=class{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;let i=this.writer,s=i.extensionsUsed,r={};if(t.bumpMap){let o={index:await i.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};i.applyTextureTransform(o,t.bumpMap),r.bumpTexture=o}r.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},Ld=class{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;let i=this.writer,s=t,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),l=new $t,c=new C,h=new je,u=new C;for(let d=0;d<s.count;d++)s.getMatrixAt(d,l),l.decompose(c,h,u),c.toArray(r,d*3),h.toArray(o,d*4),u.toArray(a,d*3);let f={TRANSLATION:i.processAccessor(new ge(r,3)),ROTATION:i.processAccessor(new ge(o,4)),SCALE:i.processAccessor(new ge(a,3))};s.instanceColor&&(f._COLOR_0=i.processAccessor(s.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:f},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}};ys.Utils={insertKeyframe:function(n,t){let i=n.getValueSize(),s=new n.TimeBufferType(n.times.length+1),r=new n.ValueBufferType(n.values.length+i),o=n.createInterpolant(new n.ValueBufferType(i)),a;if(n.times.length===0){s[0]=t;for(let l=0;l<i;l++)r[l]=0;a=0}else if(t<n.times[0]){if(Math.abs(n.times[0]-t)<.001)return 0;s[0]=t,s.set(n.times,1),r.set(o.evaluate(t),0),r.set(n.values,i),a=0}else if(t>n.times[n.times.length-1]){if(Math.abs(n.times[n.times.length-1]-t)<.001)return n.times.length-1;s[s.length-1]=t,s.set(n.times,0),r.set(n.values,0),r.set(o.evaluate(t),n.values.length),a=s.length-1}else for(let l=0;l<n.times.length;l++){if(Math.abs(n.times[l]-t)<.001)return l;if(n.times[l]<t&&n.times[l+1]>t){s.set(n.times.slice(0,l+1),0),s[l+1]=t,s.set(n.times.slice(l+1),l+2),r.set(n.values.slice(0,(l+1)*i),0),r.set(o.evaluate(t),(l+1)*i),r.set(n.values.slice((l+1)*i),(l+2)*i),a=l+1;break}}return n.times=s,n.values=r,a},mergeMorphTargetTracks:function(n,t){let e=[],i={},s=n.tracks;for(let r=0;r<s.length;++r){let o=s[r],a=Me.parseTrackName(o.name),l=Me.findNode(t,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){e.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(fr)}let c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(i[l.uuid]===void 0){u=o.clone();let d=new u.ValueBufferType(c*u.times.length);for(let p=0;p<u.times.length;p++)d[p*c+h]=u.values[p];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=d,i[l.uuid]=u,e.push(u);continue}let f=o.createInterpolant(new o.ValueBufferType(1));u=i[l.uuid];for(let d=0;d<u.times.length;d++)u.values[d*c+h]=f.evaluate(u.times[d]);for(let d=0;d<o.times.length;d++){let p=this.insertKeyframe(u,o.times[d]);u.values[p*c+h]=o.values[d]}}return n.tracks=e,n},toTypedBufferAttribute:function(n,t){let e=new ge(new t(n.count*n.itemSize),n.itemSize,!1);if(!n.normalized&&!n.isInterleavedBufferAttribute)return e.array.set(n.array),e;for(let i=0,s=n.count;i<s;i++)for(let r=0;r<n.itemSize;r++)e.setComponent(i,r,n.getComponent(i,r));return e}};async function Nd(n,t){let e=new Bn;e.name="AEGIS_Colony";let i=new Map;for(let a of n){let[l,c]=a.name.split(":"),h=i.get(l);h||(h=new te,h.name="SM_"+l,i.set(l,h),e.add(h));let u=new Y(x0(a.geometry.clone(),1e-4),a.material);u.name="SM_"+l+"_"+(c||"mat"),h.add(u)}t&&t("Packing "+n.length+" meshes\u2026");let r=await new ys().parseAsync(e,{binary:!0,onlyVisible:!1,maxTextureSize:1024});return new Blob([r],{type:"model/gltf-binary"})}function hm(n,t){let e=document.createElement("a");e.href=URL.createObjectURL(n),e.download=t,document.body.appendChild(e),e.click(),setTimeout(()=>{URL.revokeObjectURL(e.href),e.remove()},2e3)}var um=()=>new Promise(n=>setTimeout(n,0));async function tS(){let n=new _h,t=async(O,z)=>{n.progress(O,z),await um()},e=document.getElementById("view"),i;try{i=e0(e)}catch(O){throw n.progress(0,"WebGL is not available on this device/browser."),O}let s=new Bn;s.fog=new wo(td,85e-5);let r=new ln(72,innerWidth/innerHeight,.12,14e3);r.layers.enable(1),r.layers.enable(2),s.add(r),await t(.02,"Generating surface materials\u2026");let o=0,a=await d0(async O=>{o++,await t(.02+o/16*.36,"Texturing \xB7 "+O)}),l=f0(a),c=p0();await t(.4,"Laying the hull and decks\u2026");let h=new nh(6),u=new eh(h),f={scene:s,M:l,marks:{},doors:[],creatures:[],pods:[],holoSpots:[],blinkers:[],turbines:[],foam:[]};$0(u,l,c.S,f),await t(.6,"Floating the satellite platforms\u2026"),Z0(u,l,c.S,f),X0(u,l,c.S,f),await t(.7,"Merging geometry\u2026");let d=u.finalize(s);console.info(`[AEGIS] hidden faces: ${u.dedupe.cut} triangles trimmed into ${u.dedupe.added} in ${u.dedupe.pieces} pieces, ${u.dedupe.skipped} left whole (${u.dedupe.ms} ms)`),console.info(`[AEGIS] ${d.length} batches, ${(u.tris/1e6).toFixed(2)}M tris, ${h.all.length} colliders, ${u.lights.length} light anchors`),await t(.78,"Lighting the sky\u2026");let{sky:p,envCube:x}=n0(s,i),g=i0(s),m=K0(i,x,a.waterNormals,Sa,2);s.add(m.mesh),f.foam.slice(0,8).forEach((O,z)=>m.discs[z].set(O[0],O[1],O[2],O[3])),m.mesh.getReflectionCamera(r).layers.set(0);let y=s0(s,a.mist);await t(.86,"Waking the drones\u2026");let S=3*Math.PI/4;f.gantryAxis=new C(Math.cos(S),0,-Math.sin(S)),f.gantryYaw=S;let v=Q0(s,l,a,f,m);(f.staticGlows||[]).forEach((O,z)=>{let J=m.glows[32+z];J&&J.set(O[0],O[1],O[2],O[3])});let b=r0(i,s,r),M=new bh,T=new vh({renderer:i,scene:s,camera:r,world:h,ctx:f,M:l,T:a,screens:c,life:v,ocean:m,audio:M,ui:n,anchors:u.lights});T.onExport=async()=>{if(!T._exporting){T._exporting=!0,n.toast("Exporting the colony for Unreal\u2026 this takes a few seconds","warn"),await um();try{let O=await Nd(d,z=>n.toast(z));hm(O,"AEGIS_Colony.glb"),n.toast("Saved AEGIS_Colony.glb \xB7 "+(O.size/1048576).toFixed(1)+" MB","ok")}catch(O){console.error(O),n.toast("Export failed: "+O.message,"bad")}T._exporting=!1}},window.__exportLevel=()=>Nd(d);let _=1,w=()=>{let O=innerWidth,z=innerHeight;i.setSize(O,z,!1),r.aspect=O/z,r.updateProjectionMatrix(),b.composer.setPixelRatio(i.getPixelRatio()),b.composer.setSize(O,z),m.resize(O*_,z*_)};T.onQuality=O=>{let z=window.devicePixelRatio||1;_=[Math.min(z,1)*.7,Math.min(z,1),Math.min(z,1.25),Math.min(z,2)][O]||1,i.setPixelRatio(_),g.setShadowSize([0,2048,4096,4096][O]),m.setPlanar(O>=2,O>=3?.6:.42),b.bloom.enabled=O>=1,y.group.visible=O>=1,w()};try{!localStorage.getItem("aegis.settings")&&(matchMedia("(pointer:coarse)").matches||innerWidth<900)&&(T.settings.q=1)}catch{}T.applySettings(),addEventListener("resize",w),await t(.94,"Compiling shaders\u2026"),T.updateTitle(.016,0),g.follow(new C(0,0,0)),i.compile(s,r),b.composer.render(.016),await t(1,"Ready");let R=new C,P=new na,L=0,U=0,N=0;i.info.autoReset=!1,window.AEGIS={game:T,ctx:f,world:h,scene:s,camera:r,renderer:i,life:v,ocean:m,M:l,post:b,mist:y,sunCtl:g,sky:p};function D(){requestAnimationFrame(D);let O=Math.min(P.getDelta(),.05);L+=O,T.update(O,L),v.update(L,O,r),c.update(O,L),m.update(L,r),y.update(O,r),T.mode==="title"?R.set(0,0,0):R.copy(r.position),g.follow(R),p.material.uniforms.time&&(p.material.uniforms.time.value=L);let z=l.leaf.userData.shader;z&&(z.uniforms.uTime.value=L),l.cryoFluid.emissiveIntensity=T.cryoGlow(L),l.growLight.emissiveIntensity=5+Math.sin(L*.5)*.5,b.grade.uniforms.uTime.value=L,i.info.reset(),b.composer.render(O),U++,N+=O,N>.5&&(T.settings.fps&&(n.el.fps.textContent=`${Math.round(U/N)} FPS \xB7 ${i.info.render.calls} draws \xB7 ${(i.info.render.triangles/1e6).toFixed(2)}M tris`),U=0,N=0)}T.showTitle(),D()}tS().catch(n=>{console.error(n);let t=document.getElementById("load-status");t&&(t.textContent="Error: "+n.message)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
