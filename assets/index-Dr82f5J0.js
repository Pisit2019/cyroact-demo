(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ro="180",Yi={ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vd=0,cc=1,Wd=2,th=1,nh=2,Dn=3,Bn=0,Vt=1,rn=2,Zn=0,ji=1,uc=2,hc=3,dc=4,Xd=5,ui=100,$d=101,Yd=102,jd=103,qd=104,Zd=200,Kd=201,Jd=202,Qd=203,va=204,ba=205,ef=206,tf=207,nf=208,sf=209,rf=210,of=211,af=212,lf=213,cf=214,Ma=0,Ea=1,Sa=2,Ki=3,wa=4,Ta=5,Aa=6,Ra=7,ih=0,uf=1,hf=2,Kn=0,df=1,ff=2,pf=3,sh=4,mf=5,gf=6,_f=7,rh=300,Ji=301,Qi=302,zr=303,Ca=304,oo=306,Gr=1e3,jn=1001,Hr=1002,cn=1003,oh=1004,Ts=1005,fn=1006,Ir=1007,qn=1008,Mn=1009,ah=1010,lh=1011,Fs=1012,bl=1013,gi=1014,Un=1015,js=1016,Ml=1017,El=1018,Us=1020,ch=35902,uh=35899,hh=1021,dh=1022,an=1023,Os=1026,Bs=1027,fh=1028,Sl=1029,ph=1030,wl=1031,Tl=1033,Dr=33776,Nr=33777,Fr=33778,Ur=33779,Pa=35840,La=35841,Ia=35842,Da=35843,Na=36196,Fa=37492,Ua=37496,Oa=37808,Ba=37809,ka=37810,za=37811,Ga=37812,Ha=37813,Va=37814,Wa=37815,Xa=37816,$a=37817,Ya=37818,ja=37819,qa=37820,Za=37821,Ka=36492,Ja=36494,Qa=36495,el=36283,tl=36284,nl=36285,il=36286,xf=2300,yf=2301,vf=3200,bf=3201,mh=0,Mf=1,Fn="",Ht="srgb",es="srgb-linear",Vr="linear",tt="srgb",Ti=7680,Mo=7681,Eo=34055,So=34056,Ef=517,Wr=519,Sf=512,wf=513,Tf=514,gh=515,Af=516,Rf=517,Cf=518,Pf=519,fc=35044,pc="300 es",xn=2e3,Xr=2001;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mc=1234567;const qi=Math.PI/180,ts=180/Math.PI;function cs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function Al(n,e){return(n%e+e)%e}function Lf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function If(n,e,t){return n!==e?(t-n)/(e-n):0}function Ls(n,e,t){return(1-t)*n+t*e}function Df(n,e,t,i){return Ls(n,e,1-Math.exp(-t*i))}function Nf(n,e=1){return e-Math.abs(Al(n,e*2)-e)}function Ff(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Uf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Of(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Bf(n,e){return n+Math.random()*(e-n)}function kf(n){return n*(.5-Math.random())}function zf(n){n!==void 0&&(mc=n);let e=mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gf(n){return n*qi}function Hf(n){return n*ts}function Vf(n){return(n&n-1)===0&&n!==0}function Wf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $f(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $r={DEG2RAD:qi,RAD2DEG:ts,generateUUID:cs,clamp:We,euclideanModulo:Al,mapLinear:Lf,inverseLerp:If,lerp:Ls,damp:Df,pingpong:Nf,smoothstep:Ff,smootherstep:Uf,randInt:Of,randFloat:Bf,randFloatSpread:kf,seededRandom:zf,degToRad:Gf,radToDeg:Hf,isPowerOfTwo:Vf,ceilPowerOfTwo:Wf,floorPowerOfTwo:Xf,setQuaternionFromProperEuler:$f,normalize:zt,denormalize:Wi};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const T=Math.sqrt(v),S=Math.atan2(T,p*y);m=Math.sin(m*S)/T,a=Math.sin(a*S)/T}const x=a*y;if(l=l*m+f*x,c=c*m+d*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wo=new D,gc=new kn;class He{constructor(e,t,i,s,r,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],y=s[1],v=s[4],x=s[7],T=s[2],S=s[5],A=s[8];return r[0]=o*_+a*y+l*T,r[3]=o*m+a*v+l*S,r[6]=o*p+a*x+l*A,r[1]=c*_+u*y+h*T,r[4]=c*m+u*v+h*S,r[7]=c*p+u*x+h*A,r[2]=f*_+d*y+g*T,r[5]=f*m+d*v+g*S,r[8]=f*p+d*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new He;function _h(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yf(){const n=Yr("canvas");return n.style.display="block",n}const _c={};function ks(n){n in _c||(_c[n]=!0,console.warn(n))}function jf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const xc=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yc=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qf(){const n={enabled:!0,workingColorSpace:es,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===tt&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?Vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ks("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ks("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[es]:{primaries:e,whitePoint:i,transfer:Vr,toXYZ:xc,fromXYZ:yc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:xc,fromXYZ:yc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),n}const Ke=qf();function On(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ai;class xh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ai===void 0&&(Ai=Yr("canvas")),Ai.width=e.width,Ai.height=e.height;const s=Ai.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ai}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(On(t[i]/255)*255):t[i]=On(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zf=0;class ao{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ao(s[o].image)):r.push(Ao(s[o]))}else r=Ao(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kf=0;const Ro=new D;class Ot extends Mi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=jn,s=jn,r=fn,o=qn,a=an,l=Mn,c=Ot.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=cs(),this.name="",this.source=new ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ro).x}get height(){return this.source.getSize(Ro).y}get depth(){return this.source.getSize(Ro).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Hr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Hr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=rh;Ot.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,T=(p+1)/2,S=(u+f)/4,A=(h+_)/4,L=(g+m)/4;return v>x&&v>T?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=S/i,r=A/i):x>T?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=S/s,r=L/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=A/r,s=L/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jf extends Mi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Ot(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ao(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends Jf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class yh extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qf extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tr.copy(i.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),nr.subVectors(this.max,xs),Ri.subVectors(e.a,xs),Ci.subVectors(e.b,xs),Pi.subVectors(e.c,xs),Gn.subVectors(Ci,Ri),Hn.subVectors(Pi,Ci),ii.subVectors(Ri,Pi);let t=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-ii.z,ii.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,ii.z,0,-ii.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-ii.y,ii.x,0];return!Co(t,Ri,Ci,Pi,nr)||(t=[1,0,0,0,1,0,0,0,1],!Co(t,Ri,Ci,Pi,nr))?!1:(ir.crossVectors(Gn,Hn),t=[ir.x,ir.y,ir.z],Co(t,Ri,Ci,Pi,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new D,new D,new D,new D,new D,new D,new D,new D],un=new D,tr=new En,Ri=new D,Ci=new D,Pi=new D,Gn=new D,Hn=new D,ii=new D,xs=new D,nr=new D,ir=new D,si=new D;function Co(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){si.fromArray(n,r);const a=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=e.dot(si),c=t.dot(si),u=i.dot(si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ep=new En,ys=new D,Po=new D;class xi{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ep.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const t=ys.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ys,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(Po)),this.expandByPoint(ys.copy(e.center).sub(Po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Rn=new D,Lo=new D,sr=new D,Vn=new D,Io=new D,rr=new D,Do=new D;class lo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Lo.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(Lo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(sr),a=Vn.dot(this.direction),l=-Vn.dot(sr),c=Vn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Lo).addScaledVector(sr,f),d}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const i=Rn.dot(this.direction),s=Rn.dot(Rn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,i,s,r){Io.subVectors(t,e),rr.subVectors(i,e),Do.crossVectors(Io,rr);let o=this.direction.dot(Do),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,e);const l=a*this.direction.dot(rr.crossVectors(Vn,rr));if(l<0)return null;const c=a*this.direction.dot(Io.cross(Vn));if(c<0||l+c>o)return null;const u=-a*Vn.dot(Do);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),o=1/Li.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tp,e,np)}lookAt(e,t,i){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Wn.crossVectors(i,Zt),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Wn.crossVectors(i,Zt)),Wn.normalize(),or.crossVectors(Zt,Wn),s[0]=Wn.x,s[4]=or.x,s[8]=Zt.x,s[1]=Wn.y,s[5]=or.y,s[9]=Zt.y,s[2]=Wn.z,s[6]=or.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],v=i[7],x=i[11],T=i[15],S=s[0],A=s[4],L=s[8],E=s[12],M=s[1],C=s[5],N=s[9],k=s[13],U=s[2],z=s[6],Y=s[10],q=s[14],H=s[3],te=s[7],ee=s[11],ce=s[15];return r[0]=o*S+a*M+l*U+c*H,r[4]=o*A+a*C+l*z+c*te,r[8]=o*L+a*N+l*Y+c*ee,r[12]=o*E+a*k+l*q+c*ce,r[1]=u*S+h*M+f*U+d*H,r[5]=u*A+h*C+f*z+d*te,r[9]=u*L+h*N+f*Y+d*ee,r[13]=u*E+h*k+f*q+d*ce,r[2]=g*S+_*M+m*U+p*H,r[6]=g*A+_*C+m*z+p*te,r[10]=g*L+_*N+m*Y+p*ee,r[14]=g*E+_*k+m*q+p*ce,r[3]=y*S+v*M+x*U+T*H,r[7]=y*A+v*C+x*z+T*te,r[11]=y*L+v*N+x*Y+T*ee,r[15]=y*E+v*k+x*q+T*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,v=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,x=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,T=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,S=t*y+i*v+s*x+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=y*A,e[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*p-i*f*p)*A,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*A,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*A,e[4]=v*A,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*A,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*A,e[8]=x*A,e[9]=(g*h*r-u*_*r-g*i*d+t*_*d+u*i*p-t*h*p)*A,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*A,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*A,e[12]=T*A,e[13]=(u*_*s-g*h*s+g*i*f-t*_*f-u*i*m+t*h*m)*A,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*A,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,y=l*c,v=l*u,x=l*h,T=i.x,S=i.y,A=i.z;return s[0]=(1-(_+p))*T,s[1]=(d+x)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(d-x)*S,s[5]=(1-(f+p))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(g+v)*A,s[9]=(m-y)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Li.set(s[0],s[1],s[2]).length();const o=Li.set(s[4],s[5],s[6]).length(),a=Li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);const c=1/r,u=1/o,h=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,t.setFromRotationMatrix(hn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=xn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===xn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Xr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=xn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===xn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Xr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Li=new D,hn=new ct,tp=new D(0,0,0),np=new D(1,1,1),Wn=new D,or=new D,Zt=new D,vc=new ct,bc=new kn;class Sn{constructor(e=0,t=0,i=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bc.setFromEuler(this),this.setFromQuaternion(bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Rl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ip=0;const Mc=new D,Ii=new kn,Cn=new ct,ar=new D,vs=new D,sp=new D,rp=new kn,Ec=new D(1,0,0),Sc=new D(0,1,0),wc=new D(0,0,1),Tc={type:"added"},op={type:"removed"},Di={type:"childadded",child:null},No={type:"childremoved",child:null};class St extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new D,t=new Sn,i=new kn,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new He}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Ec,e)}rotateY(e){return this.rotateOnAxis(Sc,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return Mc.copy(e).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ec,e)}translateY(e){return this.translateOnAxis(Sc,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ar.copy(e):ar.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(vs,ar,this.up):Cn.lookAt(ar,vs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tc),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(op),No.child=e,this.dispatchEvent(No),No.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tc),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,rp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}St.DEFAULT_UP=new D(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new D,Pn=new D,Fo=new D,Ln=new D,Ni=new D,Fi=new D,Ac=new D,Uo=new D,Oo=new D,Bo=new D,ko=new gt,zo=new gt,Go=new gt;class on{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){dn.subVectors(s,t),Pn.subVectors(i,t),Fo.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(Pn),l=dn.dot(Fo),c=Pn.dot(Pn),u=Pn.dot(Fo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ko.setScalar(0),zo.setScalar(0),Go.setScalar(0),ko.fromBufferAttribute(e,t),zo.fromBufferAttribute(e,i),Go.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ko,r.x),o.addScaledVector(zo,r.y),o.addScaledVector(Go,r.z),o}static isFrontFacing(e,t,i,s){return dn.subVectors(i,t),Pn.subVectors(e,t),dn.cross(Pn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),dn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return on.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ni.subVectors(s,i),Fi.subVectors(r,i),Uo.subVectors(e,i);const l=Ni.dot(Uo),c=Fi.dot(Uo);if(l<=0&&c<=0)return t.copy(i);Oo.subVectors(e,s);const u=Ni.dot(Oo),h=Fi.dot(Oo);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ni,o);Bo.subVectors(e,r);const d=Ni.dot(Bo),g=Fi.dot(Bo);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Fi,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ac.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Ac,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(Ni,o).addScaledVector(Fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function Ho(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=Al(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ho(o,r,e+1/3),this.g=Ho(o,r,e),this.b=Ho(o,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const i=vh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return Ke.workingToColorSpace(Dt.copy(this),e),Math.round(We(Dt.r*255,0,255))*65536+Math.round(We(Dt.g*255,0,255))*256+Math.round(We(Dt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Dt.copy(this),t);const i=Dt.r,s=Dt.g,r=Dt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Ht){Ke.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,s=Dt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(lr);const i=Ls(Xn.h,lr.h,t),s=Ls(Xn.s,lr.s,t),r=Ls(Xn.l,lr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Xe;Xe.NAMES=vh;let ap=0;class us extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=ji,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=ba,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==va&&(i.blendSrc=this.blendSrc),this.blendDst!==ba&&(i.blendDst=this.blendDst),this.blendEquation!==ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ns extends us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new D,cr=new Oe;let lp=0;class Rt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fc,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fc&&(e.usage=this.usage),e}}class bh extends Rt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cl extends Rt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ct extends Rt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let cp=0;const sn=new ct,Vo=new St,Ui=new D,Kt=new En,bs=new En,At=new D;class Yt extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_h(e)?Cl:bh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Kt.min,bs.min),Kt.expandByPoint(At),At.addVectors(Kt.max,bs.max),Kt.expandByPoint(At)):(Kt.expandByPoint(bs.min),Kt.expandByPoint(bs.max))}Kt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)At.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(At));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(e,c),At.add(Ui)),s=Math.max(s,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new D,l[L]=new D;const c=new D,u=new D,h=new D,f=new Oe,d=new Oe,g=new Oe,_=new D,m=new D;function p(L,E,M){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[L].add(_),a[E].add(_),a[M].add(_),l[L].add(m),l[E].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,E=y.length;L<E;++L){const M=y[L],C=M.start,N=M.count;for(let k=C,U=C+N;k<U;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new D,x=new D,T=new D,S=new D;function A(L){T.fromBufferAttribute(s,L),S.copy(T);const E=a[L];v.copy(E),v.sub(T.multiplyScalar(T.dot(E))).normalize(),x.crossVectors(S,E);const C=x.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,C)}for(let L=0,E=y.length;L<E;++L){const M=y[L],C=M.start,N=M.count;for(let k=C,U=C+N;k<U;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Rt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rc=new ct,ri=new lo,ur=new xi,Cc=new D,hr=new D,dr=new D,fr=new D,Wo=new D,pr=new D,Pc=new D,mr=new D;class Ut extends St{constructor(e=new Yt,t=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Wo.fromBufferAttribute(h,e),o?pr.addScaledVector(Wo,u):pr.addScaledVector(Wo.sub(t),u))}t.add(pr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere),ur.applyMatrix4(r),ri.copy(e.ray).recast(e.near),!(ur.containsPoint(ri.origin)===!1&&(ri.intersectSphere(ur,Cc)===null||ri.origin.distanceToSquared(Cc)>(e.far-e.near)**2))&&(Rc.copy(r).invert(),ri.copy(e.ray).applyMatrix4(Rc),!(i.boundingBox!==null&&ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,T=v;x<T;x+=3){const S=a.getX(x),A=a.getX(x+1),L=a.getX(x+2);s=gr(this,p,e,i,c,u,h,S,A,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=gr(this,o,e,i,c,u,h,y,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,T=v;x<T;x+=3){const S=x,A=x+1,L=x+2;s=gr(this,p,e,i,c,u,h,S,A,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,x=m+2;s=gr(this,o,e,i,c,u,h,y,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function up(n,e,t,i,s,r,o,a){let l;if(e.side===Vt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Bn,a),l===null)return null;mr.copy(a),mr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(mr);return c<t.near||c>t.far?null:{distance:c,point:mr.clone(),object:n}}function gr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,hr),n.getVertexPosition(l,dr),n.getVertexPosition(c,fr);const u=up(n,e,t,i,hr,dr,fr,Pc);if(u){const h=new D;on.getBarycoord(Pc,hr,dr,fr,h),s&&(u.uv=on.getInterpolatedAttribute(s,a,l,c,h,new Oe)),r&&(u.uv1=on.getInterpolatedAttribute(r,a,l,c,h,new Oe)),o&&(u.normal=on.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};on.getNormal(hr,dr,fr,f.normal),u.face=f,u.barycoord=h}return u}class qs extends Yt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(h,2));function g(_,m,p,y,v,x,T,S,A,L,E){const M=x/A,C=T/L,N=x/2,k=T/2,U=S/2,z=A+1,Y=L+1;let q=0,H=0;const te=new D;for(let ee=0;ee<Y;ee++){const ce=ee*C-k;for(let Ee=0;Ee<z;Ee++){const Pe=Ee*M-N;te[_]=Pe*y,te[m]=ce*v,te[p]=U,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=S>0?1:-1,u.push(te.x,te.y,te.z),h.push(Ee/A),h.push(1-ee/L),q+=1}}for(let ee=0;ee<L;ee++)for(let ce=0;ce<A;ce++){const Ee=f+ce+z*ee,Pe=f+ce+z*(ee+1),Ie=f+(ce+1)+z*(ee+1),Ne=f+(ce+1)+z*ee;l.push(Ee,Pe,Ne),l.push(Pe,Ie,Ne),H+=6}a.addGroup(d,H,E),d+=H,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=is(n[t]);for(const s in i)e[s]=i[s]}return e}function hp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const dp={clone:is,merge:Gt};var fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=hp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Eh extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new D,Lc=new Oe,Ic=new Oe;class Jt extends Eh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Lc,Ic),t.subVectors(Ic,Lc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qi*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Bi=1;class mp extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jt(Oi,Bi,e,t);s.layers=this.layers,this.add(s);const r=new Jt(Oi,Bi,e,t);r.layers=this.layers,this.add(r);const o=new Jt(Oi,Bi,e,t);o.layers=this.layers,this.add(o);const a=new Jt(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const l=new Jt(Oi,Bi,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Oi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sh extends Ot{constructor(e=[],t=Ji,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gp extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Sh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qs(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Zn});r.uniforms.tEquirect.value=t;const o=new Ut(s,r),a=t.minFilter;return t.minFilter===qn&&(t.minFilter=fn),new mp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class fi extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _p={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_p)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class sl extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $o=new D,xp=new D,yp=new He;class Nn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=$o.subVectors(i,t).cross(xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($o),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yp.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new xi,vp=new Oe(.5,.5),_r=new D;class Pl{constructor(e=new Nn,t=new Nn,i=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],v=r[13],x=r[14],T=r[15];if(s[0].setComponents(c-o,d-u,p-g,T-y).normalize(),s[1].setComponents(c+o,d+u,p+g,T+y).normalize(),s[2].setComponents(c+a,d+h,p+_,T+v).normalize(),s[3].setComponents(c-a,d-h,p-_,T-v).normalize(),i)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,d-f,p-m,T-x).normalize();else if(s[4].setComponents(c-l,d-f,p-m,T-x).normalize(),t===xn)s[5].setComponents(c+l,d+f,p+m,T+x).normalize();else if(t===Xr)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);const t=vp.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(_r.x=s.normal.x>0?e.max.x:e.min.x,_r.y=s.normal.y>0?e.max.y:e.min.y,_r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hs extends us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jr=new D,qr=new D,Dc=new ct,Ms=new lo,xr=new xi,Yo=new D,Nc=new D;class wh extends St{constructor(e=new Yt,t=new hs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)jr.fromBufferAttribute(t,s-1),qr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=jr.distanceTo(qr);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere),xr.applyMatrix4(s),xr.radius+=r,e.ray.intersectsSphere(xr)===!1)return;Dc.copy(s).invert(),Ms.copy(e.ray).applyMatrix4(Dc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),v=yr(this,e,Ms,l,p,y,_);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=yr(this,e,Ms,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=yr(this,e,Ms,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=yr(this,e,Ms,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yr(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(jr.fromBufferAttribute(a,s),qr.fromBufferAttribute(a,r),t.distanceSqToSegment(jr,qr,Yo,Nc)>i)return;Yo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Yo);if(!(c<e.near||c>e.far))return{distance:c,point:Nc.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Fc=new D,Uc=new D;class co extends wh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Fc.fromBufferAttribute(t,s),Uc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Fc.distanceTo(Uc);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jo extends Ot{constructor(e,t,i,s,r,o,a,l,c,u,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class bp extends Ot{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Th extends Ot{constructor(e,t,i=gi,s,r,o,a=cn,l=cn,c,u=Os,h=1){if(u!==Os&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ao(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ah extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const vr=new D,br=new D,qo=new D,Mr=new on;class Rh extends Yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(qi*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Mr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Mr.getNormal(qo),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const v=(y+1)%3,x=h[y],T=h[v],S=Mr[u[y]],A=Mr[u[v]],L=`${x}_${T}`,E=`${T}_${x}`;E in f&&f[E]?(qo.dot(f[E].normal)<=r&&(d.push(S.x,S.y,S.z),d.push(A.x,A.y,A.z)),f[E]=null):L in f||(f[L]={index0:c[y],index1:c[v],normal:qo.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];vr.fromBufferAttribute(a,_),br.fromBufferAttribute(a,m),d.push(vr.x,vr.y,vr.z),d.push(br.x,br.y,br.z)}this.setAttribute("position",new Ct(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Mp(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Ch(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Ap(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=t;f<s;f+=t){const d=n[f],g=n[f+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return zs(r,o,t,a,l,c,0),o}function Ch(n,e,t,i,s){let r;if(s===Bp(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Oc(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Oc(o/i|0,n[o],n[o+1],r);return r&&ss(r,r.next)&&(Hs(r),r=r.next),r}function yi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ss(t,t.next)||pt(t.prev,t,t.next)===0)){if(Hs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function zs(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Ip(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Sp(n,i,s,r):Ep(n)){e.push(l.i,n.i,c.i),Hs(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=wp(yi(n),e),zs(n,e,t,i,s,r,2)):o===2&&Tp(n,e,t,i,s,r):zs(yi(n),e,t,i,s,r,1);break}}}function Ep(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&As(s,a,r,l,o,c,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sp(n,e,t,i){const s=n.prev,r=n,o=n.next;if(pt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(u,h,f),_=Math.max(a,l,c),m=Math.max(u,h,f),p=rl(d,g,e,t,i),y=rl(_,m,e,t,i);let v=n.prevZ,x=n.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&As(a,u,l,h,c,f,v.x,v.y)&&pt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&As(a,u,l,h,c,f,x.x,x.y)&&pt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&As(a,u,l,h,c,f,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&As(a,u,l,h,c,f,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function wp(n,e){let t=n;do{const i=t.prev,s=t.next.next;!ss(i,s)&&Lh(i,t,t.next,s)&&Gs(i,s)&&Gs(s,i)&&(e.push(i.i,t.i,s.i),Hs(t),Hs(t.next),t=n=s),t=t.next}while(t!==n);return yi(t)}function Tp(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fp(o,a)){let l=Ih(o,a);o=yi(o,o.next),l=yi(l,l.next),zs(o,e,t,i,s,r,0),zs(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ap(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Ch(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Np(c))}s.sort(Rp);for(let r=0;r<s.length;r++)t=Cp(s[r],t);return t}function Rp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Cp(n,e){const t=Pp(n,e);if(!t)return e;const i=Ih(t,n);return yi(i,i.next),yi(t,t.next)}function Pp(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(ss(n,t))return t;do{if(ss(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Ph(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const h=Math.abs(s-t.y)/(i-t.x);Gs(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Lp(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Lp(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function Ip(n,e,t,i){let s=n;do s.z===0&&(s.z=rl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Dp(s)}function Dp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function rl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Np(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ph(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function As(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Ph(n,e,t,i,s,r,o,a)}function Fp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Up(n,e)&&(Gs(n,e)&&Gs(e,n)&&Op(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||ss(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ss(n,e){return n.x===e.x&&n.y===e.y}function Lh(n,e,t,i){const s=Sr(pt(n,e,t)),r=Sr(pt(n,e,i)),o=Sr(pt(t,i,n)),a=Sr(pt(t,i,e));return!!(s!==r&&o!==a||s===0&&Er(n,t,e)||r===0&&Er(n,i,e)||o===0&&Er(t,n,i)||a===0&&Er(t,e,i))}function Er(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Sr(n){return n>0?1:n<0?-1:0}function Up(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Lh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Gs(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function Op(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Ih(n,e){const t=ol(n.i,n.x,n.y),i=ol(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Oc(n,e,t,i){const s=ol(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Hs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ol(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bp(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class kp{static triangulate(e,t,i=2){return Mp(e,t,i)}}class Ll{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Ll.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Bc(e),kc(i,e);let o=e.length;t.forEach(Bc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,kc(i,t[l]);const a=kp.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Bc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function kc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class rs extends Yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*f-o;for(let v=0;v<c;v++){const x=v*h-r;g.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const v=y+c*p,x=y+c*(p+1),T=y+1+c*(p+1),S=y+1+c*p;d.push(v,x,S),d.push(x,T,S)}this.setIndex(d),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zr extends us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zp extends Zr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Gp extends us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hp extends us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Il extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Zo=new ct,zc=new D,Gc=new D;class Dh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pl,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(zc),Gc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gc),t.updateMatrixWorld(),Zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vp extends Dh{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ts*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Wp extends Il{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Vp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dl extends Eh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xp extends Dh{constructor(){super(new Dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ko extends Il{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Xp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jo extends Il{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $p extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Nl="\\[\\]\\.:\\/",Yp=new RegExp("["+Nl+"]","g"),Fl="[^"+Nl+"]",jp="[^"+Nl.replace("\\.","")+"]",qp=/((?:WC+[\/:])*)/.source.replace("WC",Fl),Zp=/(WCOD+)?/.source.replace("WCOD",jp),Kp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),Jp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),Qp=new RegExp("^"+qp+Zp+Kp+Jp+"$"),em=["material","materials","bones","map"];class tm{constructor(e,t,i){const s=i||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ze{constructor(e,t,i){this.path=t,this.parsedPath=i||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,i):new Ze(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yp,"")}static parseTrackName(e){const t=Qp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);em.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=tm;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Hc=new ct;class nm{constructor(e,t,i=0,s=1/0){this.ray=new lo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hc),this}intersectObject(e,t=!0,i=[]){return al(e,this,i,t),i.sort(Vc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)al(e[s],this,i,t);return i.sort(Vc),i}}function Vc(n,e){return n.distance-e.distance}function al(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)al(r[o],e,t,!0)}}class Wc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class im extends co{constructor(e=10,t=10,i=4473924,s=8947848){i=new Xe(i),s=new Xe(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===r?i:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new Yt;u.setAttribute("position",new Ct(l,3)),u.setAttribute("color",new Ct(c,3));const h=new hs({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class sm extends wh{constructor(e,t=1,i=16776960){const s=i,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Yt;o.setAttribute("position",new Ct(r,3)),o.computeBoundingSphere(),super(o,new hs({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Yt;l.setAttribute("position",new Ct(a,3)),l.computeBoundingSphere(),this.add(new Ut(l,new ns({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}class rm extends co{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Yt;s.setAttribute("position",new Ct(t,3)),s.setAttribute("color",new Ct(i,3));const r=new hs({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new Xe,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class om extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Xc(n,e,t,i){const s=am(i);switch(t){case hh:return n*e;case fh:return n*e/s.components*s.byteLength;case Sl:return n*e/s.components*s.byteLength;case ph:return n*e*2/s.components*s.byteLength;case wl:return n*e*2/s.components*s.byteLength;case dh:return n*e*3/s.components*s.byteLength;case an:return n*e*4/s.components*s.byteLength;case Tl:return n*e*4/s.components*s.byteLength;case Dr:case Nr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fr:case Ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case La:case Da:return Math.max(n,16)*Math.max(e,8)/4;case Pa:case Ia:return Math.max(n,8)*Math.max(e,8)/2;case Na:case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case za:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Va:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ka:case Ja:case Qa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case el:case tl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case nl:case il:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function am(n){switch(n){case Mn:case ah:return{byteLength:1,components:1};case Fs:case lh:case js:return{byteLength:2,components:1};case Ml:case El:return{byteLength:2,components:4};case gi:case bl:case Un:return{byteLength:4,components:1};case ch:case uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);function Nh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function lm(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
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
#endif`,hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mm=`#ifdef USE_AOMAP
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
#endif`,gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
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
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mm=`#ifdef USE_IRIDESCENCE
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
#endif`,Em=`#ifdef USE_BUMPMAP
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
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Im=`#define PI 3.141592653589793
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
} // validated`,Dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nm=`vec3 transformedNormal = objectNormal;
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
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,km="gl_FragColor = linearToOutputTexel( gl_FragColor );",zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zm=`#ifdef USE_GRADIENTMAP
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
}`,Km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eg=`uniform bool receiveShadow;
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
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,og=`PhysicalMaterial material;
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
#endif`,ag=`struct PhysicalMaterial {
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
}`,lg=`
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
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
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yg=`float getShadowMask() {
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
}`,jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n_=`#ifdef USE_TRANSMISSION
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
#endif`,i_=`#ifdef USE_TRANSMISSION
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c_=`uniform sampler2D t2D;
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`#include <common>
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
}`,m_=`#if DEPTH_PACKING == 3200
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
}`,g_=`#define DISTANCE
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
}`,__=`#define DISTANCE
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`uniform float scale;
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
}`,b_=`uniform vec3 diffuse;
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
}`,M_=`#include <common>
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
}`,E_=`uniform vec3 diffuse;
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
}`,S_=`#define LAMBERT
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
}`,w_=`#define LAMBERT
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
}`,T_=`#define MATCAP
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
}`,A_=`#define MATCAP
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
}`,R_=`#define NORMAL
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
}`,C_=`#define NORMAL
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
}`,P_=`#define PHONG
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
}`,L_=`#define PHONG
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
}`,I_=`#define STANDARD
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
}`,D_=`#define STANDARD
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
}`,N_=`#define TOON
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
}`,F_=`#define TOON
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
}`,U_=`uniform float size;
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
}`,O_=`uniform vec3 diffuse;
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
}`,B_=`#include <common>
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
}`,k_=`uniform vec3 color;
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
}`,z_=`uniform float rotation;
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
}`,G_=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:cm,alphahash_pars_fragment:um,alphamap_fragment:hm,alphamap_pars_fragment:dm,alphatest_fragment:fm,alphatest_pars_fragment:pm,aomap_fragment:mm,aomap_pars_fragment:gm,batching_pars_vertex:_m,batching_vertex:xm,begin_vertex:ym,beginnormal_vertex:vm,bsdfs:bm,iridescence_fragment:Mm,bumpmap_pars_fragment:Em,clipping_planes_fragment:Sm,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Am,color_fragment:Rm,color_pars_fragment:Cm,color_pars_vertex:Pm,color_vertex:Lm,common:Im,cube_uv_reflection_fragment:Dm,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Fm,displacementmap_vertex:Um,emissivemap_fragment:Om,emissivemap_pars_fragment:Bm,colorspace_fragment:km,colorspace_pars_fragment:zm,envmap_fragment:Gm,envmap_common_pars_fragment:Hm,envmap_pars_fragment:Vm,envmap_pars_vertex:Wm,envmap_physical_pars_fragment:tg,envmap_vertex:Xm,fog_vertex:$m,fog_pars_vertex:Ym,fog_fragment:jm,fog_pars_fragment:qm,gradientmap_pars_fragment:Zm,lightmap_pars_fragment:Km,lights_lambert_fragment:Jm,lights_lambert_pars_fragment:Qm,lights_pars_begin:eg,lights_toon_fragment:ng,lights_toon_pars_fragment:ig,lights_phong_fragment:sg,lights_phong_pars_fragment:rg,lights_physical_fragment:og,lights_physical_pars_fragment:ag,lights_fragment_begin:lg,lights_fragment_maps:cg,lights_fragment_end:ug,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:_g,map_particle_pars_fragment:xg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:vg,morphinstance_vertex:bg,morphcolor_vertex:Mg,morphnormal_vertex:Eg,morphtarget_pars_vertex:Sg,morphtarget_vertex:wg,normal_fragment_begin:Tg,normal_fragment_maps:Ag,normal_pars_fragment:Rg,normal_pars_vertex:Cg,normal_vertex:Pg,normalmap_pars_fragment:Lg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Fg,opaque_fragment:Ug,packing:Og,premultiplied_alpha_fragment:Bg,project_vertex:kg,dithering_fragment:zg,dithering_pars_fragment:Gg,roughnessmap_fragment:Hg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:$g,shadowmask_pars_fragment:Yg,skinbase_vertex:jg,skinning_pars_vertex:qg,skinning_vertex:Zg,skinnormal_vertex:Kg,specularmap_fragment:Jg,specularmap_pars_fragment:Qg,tonemapping_fragment:e_,tonemapping_pars_fragment:t_,transmission_fragment:n_,transmission_pars_fragment:i_,uv_pars_fragment:s_,uv_pars_vertex:r_,uv_vertex:o_,worldpos_vertex:a_,background_vert:l_,background_frag:c_,backgroundCube_vert:u_,backgroundCube_frag:h_,cube_vert:d_,cube_frag:f_,depth_vert:p_,depth_frag:m_,distanceRGBA_vert:g_,distanceRGBA_frag:__,equirect_vert:x_,equirect_frag:y_,linedashed_vert:v_,linedashed_frag:b_,meshbasic_vert:M_,meshbasic_frag:E_,meshlambert_vert:S_,meshlambert_frag:w_,meshmatcap_vert:T_,meshmatcap_frag:A_,meshnormal_vert:R_,meshnormal_frag:C_,meshphong_vert:P_,meshphong_frag:L_,meshphysical_vert:I_,meshphysical_frag:D_,meshtoon_vert:N_,meshtoon_frag:F_,points_vert:U_,points_frag:O_,shadow_vert:B_,shadow_frag:k_,sprite_vert:z_,sprite_frag:G_},fe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},_n={basic:{uniforms:Gt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Gt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Gt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Gt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Gt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Gt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Gt([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Gt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Gt([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Gt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Gt([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Gt([fe.common,fe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Gt([fe.lights,fe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};_n.physical={uniforms:Gt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const wr={r:0,b:0,g:0},ai=new Sn,H_=new ct;function V_(n,e,t,i,s,r,o){const a=new Xe(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const T=g(v);T===null?p(a,l):T&&T.isColor&&(p(T,1),x=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===oo)?(u===void 0&&(u=new Ut(new qs(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:is(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ai.copy(x.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(H_.makeRotationFromEuler(ai)),u.material.toneMapped=Ke.getTransfer(T.colorSpace)!==tt,(h!==T||f!==T.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,d=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ut(new rs(2,2),new Jn({name:"BackgroundMaterial",uniforms:is(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(T.colorSpace)!==tt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,x){v.getRGB(wr,Mh(n)),i.buffers.color.setClear(wr.r,wr.g,wr.b,x,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m,dispose:y}}function W_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,C,N,k,U){let z=!1;const Y=h(k,N,C);r!==Y&&(r=Y,c(r.object)),z=d(M,k,N,U),z&&g(M,k,N,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(M,C,N,k),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,C,N){const k=N.wireframe===!0;let U=i[M.id];U===void 0&&(U={},i[M.id]=U);let z=U[C.id];z===void 0&&(z={},U[C.id]=z);let Y=z[k];return Y===void 0&&(Y=f(l()),z[k]=Y),Y}function f(M){const C=[],N=[],k=[];for(let U=0;U<t;U++)C[U]=0,N[U]=0,k[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:k,object:M,attributes:{},index:null}}function d(M,C,N,k){const U=r.attributes,z=C.attributes;let Y=0;const q=N.getAttributes();for(const H in q)if(q[H].location>=0){const ee=U[H];let ce=z[H];if(ce===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ee===void 0||ee.attribute!==ce||ce&&ee.data!==ce.data)return!0;Y++}return r.attributesNum!==Y||r.index!==k}function g(M,C,N,k){const U={},z=C.attributes;let Y=0;const q=N.getAttributes();for(const H in q)if(q[H].location>=0){let ee=z[H];ee===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor));const ce={};ce.attribute=ee,ee&&ee.data&&(ce.data=ee.data),U[H]=ce,Y++}r.attributes=U,r.attributesNum=Y,r.index=k}function _(){const M=r.newAttributes;for(let C=0,N=M.length;C<N;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const N=r.newAttributes,k=r.enabledAttributes,U=r.attributeDivisors;N[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),U[M]!==C&&(n.vertexAttribDivisor(M,C),U[M]=C)}function y(){const M=r.newAttributes,C=r.enabledAttributes;for(let N=0,k=C.length;N<k;N++)C[N]!==M[N]&&(n.disableVertexAttribArray(N),C[N]=0)}function v(M,C,N,k,U,z,Y){Y===!0?n.vertexAttribIPointer(M,C,N,U,z):n.vertexAttribPointer(M,C,N,k,U,z)}function x(M,C,N,k){_();const U=k.attributes,z=N.getAttributes(),Y=C.defaultAttributeValues;for(const q in z){const H=z[q];if(H.location>=0){let te=U[q];if(te===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){const ee=te.normalized,ce=te.itemSize,Ee=e.get(te);if(Ee===void 0)continue;const Pe=Ee.buffer,Ie=Ee.type,Ne=Ee.bytesPerElement,X=Ie===n.INT||Ie===n.UNSIGNED_INT||te.gpuType===bl;if(te.isInterleavedBufferAttribute){const K=te.data,be=K.stride,Ue=te.offset;if(K.isInstancedInterleavedBuffer){for(let we=0;we<H.locationSize;we++)p(H.location+we,K.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let we=0;we<H.locationSize;we++)m(H.location+we);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let we=0;we<H.locationSize;we++)v(H.location+we,ce/H.locationSize,Ie,ee,be*Ne,(Ue+ce/H.locationSize*we)*Ne,X)}else{if(te.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)p(H.location+K,te.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let K=0;K<H.locationSize;K++)m(H.location+K);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let K=0;K<H.locationSize;K++)v(H.location+K,ce/H.locationSize,Ie,ee,ce*Ne,ce/H.locationSize*K*Ne,X)}}else if(Y!==void 0){const ee=Y[q];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(H.location,ee);break;case 3:n.vertexAttrib3fv(H.location,ee);break;case 4:n.vertexAttrib4fv(H.location,ee);break;default:n.vertexAttrib1fv(H.location,ee)}}}}y()}function T(){L();for(const M in i){const C=i[M];for(const N in C){const k=C[N];for(const U in k)u(k[U].object),delete k[U];delete C[N]}delete i[M]}}function S(M){if(i[M.id]===void 0)return;const C=i[M.id];for(const N in C){const k=C[N];for(const U in k)u(k[U].object),delete k[U];delete C[N]}delete i[M.id]}function A(M){for(const C in i){const N=i[C];if(N[M.id]===void 0)continue;const k=N[M.id];for(const U in k)u(k[U].object),delete k[U];delete N[M.id]}}function L(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function X_(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==an&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Mn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Un&&!L)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:T,maxSamples:S}}function Y_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Nn,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:i,v=y*4;let x=p.clippingState||null;l.value=x,x=u(g,f,v,d);for(let T=0;T!==v;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==_;++v,x+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function j_(n){let e=new WeakMap;function t(o,a){return a===zr?o.mapping=Ji:a===Ca&&(o.mapping=Qi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zr||a===Ca)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const $i=4,$c=[.125,.215,.35,.446,.526,.582],hi=20,Qo=new Dl,Yc=new Xe;let ea=null,ta=0,na=0,ia=!1;const ci=(1+Math.sqrt(5))/2,ki=1/ci,jc=[new D(-ci,ki,0),new D(ci,ki,0),new D(-ki,0,ci),new D(ki,0,ci),new D(0,ci,-ki),new D(0,ci,ki),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],q_=new D;class ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=q_}=r;ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ea,ta,na),this._renderer.xr.enabled=ia,e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:js,format:an,colorSpace:es,depthBuffer:!1},s=qc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z_(r)),this._blurMaterial=K_(r,e,t)}return s}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Qo)}_sceneToCubeUV(e,t,i,s,r){const l=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Yc),h.toneMapping=Kn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new ns({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new Ut(new qs,_);let p=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,p=!0):(_.color.copy(Yc),p=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));const T=this._cubeSize;Tr(s,x*T,v>2?T:0,T,T),h.setRenderTarget(s),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ji||e.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Tr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jc[(s-r-1)%jc.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ut(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*hi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):hi;m>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const p=[];let y=0;for(let A=0;A<hi;++A){const L=A/_,E=Math.exp(-L*L/2);p.push(E),A===0?y+=E:A<m&&(y+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const x=this._sizeLods[s],T=3*x*(s>v-$i?s-v+$i:0),S=4*(this._cubeSize-x);Tr(t,T,S,3*x,2*x),l.setRenderTarget(t),l.render(h,Qo)}}function Z_(n){const e=[],t=[],i=[];let s=n;const r=n-$i+1+$c.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-$i?l=$c[o-n+$i-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),v=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let S=0;S<d;S++){const A=S%3*2/3-1,L=S>2?0:-1,E=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];y.set(E,_*g*S),v.set(f,m*g*S);const M=[S,S,S,S,S,S];x.set(M,p*g*S)}const T=new Yt;T.setAttribute("position",new Rt(y,_)),T.setAttribute("uv",new Rt(v,m)),T.setAttribute("faceIndex",new Rt(x,p)),e.push(T),s>$i&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qc(n,e,t){const i=new _i(n,e,t);return i.texture.mapping=oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function K_(n,e,t){const i=new Float32Array(hi),s=new D(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Zc(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Kc(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ul(){return`

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
	`}function J_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===zr||l===Ca,u=l===Ji||l===Qi;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ll(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new ll(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Q_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ks("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function e0(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,x=y.length;v<x;v+=3){const T=y[v+0],S=y[v+1],A=y[v+2];f.push(T,S,S,A,A,T)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const T=v+0,S=v+1,A=v+2;f.push(T,S,S,A,A,T)}}else return;const m=new(_h(f)?Cl:bh)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function t0(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function n0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function i0(n,e,t){const i=new WeakMap,s=new gt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let T=a.attributes.position.count*x,S=1;T>e.maxTextureSize&&(S=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*S*4*h),L=new yh(A,T,S,h);L.type=Un,L.needsUpdate=!0;const E=x*4;for(let C=0;C<h;C++){const N=p[C],k=y[C],U=v[C],z=T*S*4*C;for(let Y=0;Y<N.count;Y++){const q=Y*E;g===!0&&(s.fromBufferAttribute(N,Y),A[z+q+0]=s.x,A[z+q+1]=s.y,A[z+q+2]=s.z,A[z+q+3]=0),_===!0&&(s.fromBufferAttribute(k,Y),A[z+q+4]=s.x,A[z+q+5]=s.y,A[z+q+6]=s.z,A[z+q+7]=0),m===!0&&(s.fromBufferAttribute(U,Y),A[z+q+8]=s.x,A[z+q+9]=s.y,A[z+q+10]=s.z,A[z+q+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:L,size:new Oe(T,S)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function s0(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Fh=new Ot,Jc=new Th(1,1),Uh=new yh,Oh=new Qf,Bh=new Sh,Qc=[],eu=[],tu=new Float32Array(16),nu=new Float32Array(9),iu=new Float32Array(4);function ds(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Qc[s];if(r===void 0&&(r=new Float32Array(s),Qc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uo(n,e){let t=eu[e];t===void 0&&(t=new Int32Array(e),eu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function r0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function o0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function a0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function l0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function c0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;iu.set(i),n.uniformMatrix2fv(this.addr,!1,iu),Tt(t,i)}}function u0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;nu.set(i),n.uniformMatrix3fv(this.addr,!1,nu),Tt(t,i)}}function h0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;tu.set(i),n.uniformMatrix4fv(this.addr,!1,tu),Tt(t,i)}}function d0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function f0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function p0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function m0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function g0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function x0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function y0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function v0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Jc.compareFunction=gh,r=Jc):r=Fh,t.setTexture2D(e||r,s)}function b0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Oh,s)}function M0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Bh,s)}function E0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Uh,s)}function S0(n){switch(n){case 5126:return r0;case 35664:return o0;case 35665:return a0;case 35666:return l0;case 35674:return c0;case 35675:return u0;case 35676:return h0;case 5124:case 35670:return d0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return _0;case 36295:return x0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return E0}}function w0(n,e){n.uniform1fv(this.addr,e)}function T0(n,e){const t=ds(e,this.size,2);n.uniform2fv(this.addr,t)}function A0(n,e){const t=ds(e,this.size,3);n.uniform3fv(this.addr,t)}function R0(n,e){const t=ds(e,this.size,4);n.uniform4fv(this.addr,t)}function C0(n,e){const t=ds(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function P0(n,e){const t=ds(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function L0(n,e){const t=ds(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function I0(n,e){n.uniform1iv(this.addr,e)}function D0(n,e){n.uniform2iv(this.addr,e)}function N0(n,e){n.uniform3iv(this.addr,e)}function F0(n,e){n.uniform4iv(this.addr,e)}function U0(n,e){n.uniform1uiv(this.addr,e)}function O0(n,e){n.uniform2uiv(this.addr,e)}function B0(n,e){n.uniform3uiv(this.addr,e)}function k0(n,e){n.uniform4uiv(this.addr,e)}function z0(n,e,t){const i=this.cache,s=e.length,r=uo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Fh,r[o])}function G0(n,e,t){const i=this.cache,s=e.length,r=uo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Oh,r[o])}function H0(n,e,t){const i=this.cache,s=e.length,r=uo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Bh,r[o])}function V0(n,e,t){const i=this.cache,s=e.length,r=uo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Uh,r[o])}function W0(n){switch(n){case 5126:return w0;case 35664:return T0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return P0;case 35676:return L0;case 5124:case 35670:return I0;case 35667:case 35671:return D0;case 35668:case 35672:return N0;case 35669:case 35673:return F0;case 5125:return U0;case 36294:return O0;case 36295:return B0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return V0}}class X0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=S0(t.type)}}class $0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=W0(t.type)}}class Y0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function su(n,e){n.seq.push(e),n.map[e.id]=e}function j0(n,e,t){const i=n.name,s=i.length;for(sa.lastIndex=0;;){const r=sa.exec(i),o=sa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){su(t,c===void 0?new X0(a,n,e):new $0(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Y0(a),su(t,h)),t=h}}}class Or{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);j0(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ru(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const q0=37297;let Z0=0;function K0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ou=new He;function J0(n){Ke._getMatrix(ou,Ke.workingColorSpace,n);const e=`mat3( ${ou.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case Vr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function au(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+K0(n.getShaderSource(e),a)}else return r}function Q0(n,e){const t=J0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ex(n,e){let t;switch(e){case df:t="Linear";break;case ff:t="Reinhard";break;case pf:t="Cineon";break;case sh:t="ACESFilmic";break;case gf:t="AgX";break;case _f:t="Neutral";break;case mf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new D;function tx(){Ke.getLuminanceCoefficients(Ar);const n=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function ix(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Rs(n){return n!==""}function lu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(n){return n.replace(rx,ax)}const ox=new Map;function ax(n,e){let t=Ve[e];if(t===void 0){const i=ox.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cl(t)}const lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(n){return n.replace(lx,cx)}function cx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ux(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===th?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function hx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dx(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Qi&&(e="ENVMAP_MODE_REFRACTION"),e}function fx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ih:e="ENVMAP_BLENDING_MULTIPLY";break;case uf:e="ENVMAP_BLENDING_MIX";break;case hf:e="ENVMAP_BLENDING_ADD";break}return e}function px(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function mx(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ux(t),c=hx(t),u=dx(t),h=fx(t),f=px(t),d=nx(t),g=ix(r),_=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Kn?ex("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Q0("linearToOutputTexel",t.outputColorSpace),tx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),o=cl(o),o=lu(o,t),o=cu(o,t),a=cl(a),a=lu(a,t),a=cu(a,t),o=uu(o),a=uu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+o,x=y+p+a,T=ru(s,s.VERTEX_SHADER,v),S=ru(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(T)||"",U=s.getShaderInfoLog(S)||"",z=N.trim(),Y=k.trim(),q=U.trim();let H=!0,te=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,S);else{const ee=au(s,T,"vertex"),ce=au(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+ee+`
`+ce)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(Y===""||q==="")&&(te=!1);te&&(C.diagnostics={runnable:H,programLog:z,vertexShader:{log:Y,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(T),s.deleteShader(S),L=new Or(s,_),E=sx(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,q0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=S,this}let gx=0;class _x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xx(e),t.set(e,i)),i}}class xx{constructor(e){this.id=gx++,this.code=e,this.usedTimes=0}}function yx(n,e,t,i,s,r,o){const a=new Rl,l=new _x,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,C,N,k){const U=N.fog,z=k.geometry,Y=E.isMeshStandardMaterial?N.environment:null,q=(E.isMeshStandardMaterial?t:e).get(E.envMap||Y),H=q&&q.mapping===oo?q.image.height:null,te=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ce=ee!==void 0?ee.length:0;let Ee=0;z.morphAttributes.position!==void 0&&(Ee=1),z.morphAttributes.normal!==void 0&&(Ee=2),z.morphAttributes.color!==void 0&&(Ee=3);let Pe,Ie,Ne,X;if(te){const Je=_n[te];Pe=Je.vertexShader,Ie=Je.fragmentShader}else Pe=E.vertexShader,Ie=E.fragmentShader,l.update(E),Ne=l.getVertexShaderID(E),X=l.getFragmentShaderID(E);const K=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,we=k.isBatchedMesh===!0,Ye=!!E.map,bt=!!E.matcap,P=!!q,Qe=!!E.aoMap,De=!!E.lightMap,Re=!!E.bumpMap,_e=!!E.normalMap,it=!!E.displacementMap,xe=!!E.emissiveMap,Ge=!!E.metalnessMap,_t=!!E.roughnessMap,ht=E.anisotropy>0,R=E.clearcoat>0,b=E.dispersion>0,G=E.iridescence>0,Z=E.sheen>0,Q=E.transmission>0,j=ht&&!!E.anisotropyMap,he=R&&!!E.clearcoatMap,le=R&&!!E.clearcoatNormalMap,Te=R&&!!E.clearcoatRoughnessMap,B=G&&!!E.iridescenceMap,$=G&&!!E.iridescenceThicknessMap,ne=Z&&!!E.sheenColorMap,me=Z&&!!E.sheenRoughnessMap,Me=!!E.specularMap,de=!!E.specularColorMap,ke=!!E.specularIntensityMap,I=Q&&!!E.transmissionMap,ie=Q&&!!E.thicknessMap,ue=!!E.gradientMap,ye=!!E.alphaMap,se=E.alphaTest>0,J=!!E.alphaHash,Ae=!!E.extensions;let ze=Kn;E.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ze=n.toneMapping);const rt={shaderID:te,shaderType:E.type,shaderName:E.name,vertexShader:Pe,fragmentShader:Ie,defines:E.defines,customVertexShaderID:Ne,customFragmentShaderID:X,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:we,batchingColor:we&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:es,alphaToCoverage:!!E.alphaToCoverage,map:Ye,matcap:bt,envMap:P,envMapMode:P&&q.mapping,envMapCubeUVHeight:H,aoMap:Qe,lightMap:De,bumpMap:Re,normalMap:_e,displacementMap:f&&it,emissiveMap:xe,normalMapObjectSpace:_e&&E.normalMapType===Mf,normalMapTangentSpace:_e&&E.normalMapType===mh,metalnessMap:Ge,roughnessMap:_t,anisotropy:ht,anisotropyMap:j,clearcoat:R,clearcoatMap:he,clearcoatNormalMap:le,clearcoatRoughnessMap:Te,dispersion:b,iridescence:G,iridescenceMap:B,iridescenceThicknessMap:$,sheen:Z,sheenColorMap:ne,sheenRoughnessMap:me,specularMap:Me,specularColorMap:de,specularIntensityMap:ke,transmission:Q,transmissionMap:I,thicknessMap:ie,gradientMap:ue,opaque:E.transparent===!1&&E.blending===ji&&E.alphaToCoverage===!1,alphaMap:ye,alphaTest:se,alphaHash:J,combine:E.combine,mapUv:Ye&&_(E.map.channel),aoMapUv:Qe&&_(E.aoMap.channel),lightMapUv:De&&_(E.lightMap.channel),bumpMapUv:Re&&_(E.bumpMap.channel),normalMapUv:_e&&_(E.normalMap.channel),displacementMapUv:it&&_(E.displacementMap.channel),emissiveMapUv:xe&&_(E.emissiveMap.channel),metalnessMapUv:Ge&&_(E.metalnessMap.channel),roughnessMapUv:_t&&_(E.roughnessMap.channel),anisotropyMapUv:j&&_(E.anisotropyMap.channel),clearcoatMapUv:he&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:B&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:$&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(E.sheenRoughnessMap.channel),specularMapUv:Me&&_(E.specularMap.channel),specularColorMapUv:de&&_(E.specularColorMap.channel),specularIntensityMapUv:ke&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:ie&&_(E.thicknessMap.channel),alphaMapUv:ye&&_(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(_e||ht),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(Ye||ye),fog:!!U,useFog:E.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:be,skinning:k.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ye&&E.map.isVideoTexture===!0&&Ke.getTransfer(E.map.colorSpace)===tt,decodeVideoTextureEmissive:xe&&E.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(E.emissiveMap.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===rn,flipSided:E.side===Vt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ae&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&E.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(y(M,E),v(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const M=g[E.type];let C;if(M){const N=_n[M];C=dp.clone(N.uniforms)}else C=E.uniforms;return C}function T(E,M){let C;for(let N=0,k=u.length;N<k;N++){const U=u[N];if(U.cacheKey===M){C=U,++C.usedTimes;break}}return C===void 0&&(C=new mx(n,M,E,r),u.push(C)),C}function S(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:u,dispose:L}}function vx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function bx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function du(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||bx),i.length>1&&i.sort(f||du),s.length>1&&s.sort(f||du)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Mx(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new fu,n.set(i,[o])):s>=r.length?(o=new fu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ex(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Xe};break;case"SpotLight":t={position:new D,direction:new D,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Sx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let wx=0;function Tx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ax(n){const e=new Ex,t=Sx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,r=new ct,o=new ct;function a(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,v=0,x=0,T=0,S=0,A=0;c.sort(Tx);for(let E=0,M=c.length;E<M;E++){const C=c[E],N=C.color,k=C.intensity,U=C.distance,z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=N.r*k,h+=N.g*k,f+=N.b*k;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(C.sh.coefficients[Y],k);A++}else if(C.isDirectionalLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const q=C.shadow,H=t.get(C);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=z,i.directionalShadowMatrix[d]=C.shadow.matrix,y++}i.directional[d]=Y,d++}else if(C.isSpotLight){const Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(N).multiplyScalar(k),Y.distance=U,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,i.spot[_]=Y;const q=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,q.updateMatrices(C),C.castShadow&&S++),i.spotLightMatrix[_]=q.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=z,x++}_++}else if(C.isRectAreaLight){const Y=e.get(C);Y.color.copy(N).multiplyScalar(k),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=Y,m++}else if(C.isPointLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const q=C.shadow,H=t.get(C);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=C.shadow.matrix,v++}i.point[g]=Y,g++}else if(C.isHemisphereLight){const Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(k),Y.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[p]=Y,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==v||L.numSpotShadows!==x||L.numSpotMaps!==T||L.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+T-S,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=A,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=v,L.numSpotShadows=x,L.numSpotMaps=T,L.numLightProbes=A,i.version=wx++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const v=c[p];if(v.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(v.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function pu(n){const e=new Ax(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Rx(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new pu(n),e.set(s,[a])):r>=o.length?(a=new pu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
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
}`;function Lx(n,e,t){let i=new Pl;const s=new Oe,r=new Oe,o=new gt,a=new Gp({depthPacking:bf}),l=new Hp,c={},u=t.maxTextureSize,h={[Bn]:Vt,[Vt]:Bn,[rn]:rn},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Cx,fragmentShader:Px}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=th;let p=this.type;this.render=function(S,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Zn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=p!==Dn&&this.type===Dn,U=p===Dn&&this.type!==Dn;for(let z=0,Y=S.length;z<Y;z++){const q=S[z],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const te=H.getFrameExtents();if(s.multiply(te),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,H.mapSize.y=r.y)),H.map===null||k===!0||U===!0){const ce=this.type!==Dn?{minFilter:cn,magFilter:cn}:{};H.map!==null&&H.map.dispose(),H.map=new _i(s.x,s.y,ce),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ee=H.getViewportCount();for(let ce=0;ce<ee;ce++){const Ee=H.getViewport(ce);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),N.viewport(o),H.updateMatrices(q,ce),i=H.getFrustum(),x(A,L,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===Dn&&y(H,L),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,C)};function y(S,A){const L=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new _i(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,L,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,L,d,_,null)}function v(S,A,L,E){let M=null;const C=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)M=C;else if(M=L.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=M.uuid,k=A.uuid;let U=c[N];U===void 0&&(U={},c[N]=U);let z=U[k];z===void 0&&(z=M.clone(),U[k]=z,A.addEventListener("dispose",T)),M=z}if(M.visible=A.visible,M.wireframe=A.wireframe,E===Dn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=L}return M}function x(S,A,L,E,M){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Dn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const k=e.update(S),U=S.material;if(Array.isArray(U)){const z=k.groups;for(let Y=0,q=z.length;Y<q;Y++){const H=z[Y],te=U[H.materialIndex];if(te&&te.visible){const ee=v(S,te,E,M);S.onBeforeShadow(n,S,A,L,k,ee,H),n.renderBufferDirect(L,null,k,ee,S,H),S.onAfterShadow(n,S,A,L,k,ee,H)}}}else if(U.visible){const z=v(S,U,E,M);S.onBeforeShadow(n,S,A,L,k,z,null),n.renderBufferDirect(L,null,k,z,S,null),S.onAfterShadow(n,S,A,L,k,z,null)}}const N=S.children;for(let k=0,U=N.length;k<U;k++)x(N[k],A,L,E,M)}function T(S){S.target.removeEventListener("dispose",T);for(const L in c){const E=c[L],M=S.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Ix={[Ma]:Ea,[Sa]:Aa,[wa]:Ra,[Ki]:Ta,[Ea]:Ma,[Aa]:Sa,[Ra]:wa,[Ta]:Ki};function Dx(n,e){function t(){let I=!1;const ie=new gt;let ue=null;const ye=new gt(0,0,0,0);return{setMask:function(se){ue!==se&&!I&&(n.colorMask(se,se,se,se),ue=se)},setLocked:function(se){I=se},setClear:function(se,J,Ae,ze,rt){rt===!0&&(se*=ze,J*=ze,Ae*=ze),ie.set(se,J,Ae,ze),ye.equals(ie)===!1&&(n.clearColor(se,J,Ae,ze),ye.copy(ie))},reset:function(){I=!1,ue=null,ye.set(-1,0,0,0)}}}function i(){let I=!1,ie=!1,ue=null,ye=null,se=null;return{setReversed:function(J){if(ie!==J){const Ae=e.get("EXT_clip_control");J?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ie=J;const ze=se;se=null,this.setClear(ze)}},getReversed:function(){return ie},setTest:function(J){J?K(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(J){ue!==J&&!I&&(n.depthMask(J),ue=J)},setFunc:function(J){if(ie&&(J=Ix[J]),ye!==J){switch(J){case Ma:n.depthFunc(n.NEVER);break;case Ea:n.depthFunc(n.ALWAYS);break;case Sa:n.depthFunc(n.LESS);break;case Ki:n.depthFunc(n.LEQUAL);break;case wa:n.depthFunc(n.EQUAL);break;case Ta:n.depthFunc(n.GEQUAL);break;case Aa:n.depthFunc(n.GREATER);break;case Ra:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=J}},setLocked:function(J){I=J},setClear:function(J){se!==J&&(ie&&(J=1-J),n.clearDepth(J),se=J)},reset:function(){I=!1,ue=null,ye=null,se=null,ie=!1}}}function s(){let I=!1,ie=null,ue=null,ye=null,se=null,J=null,Ae=null,ze=null,rt=null;return{setTest:function(Je){I||(Je?K(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Je){ie!==Je&&!I&&(n.stencilMask(Je),ie=Je)},setFunc:function(Je,Tn,pn){(ue!==Je||ye!==Tn||se!==pn)&&(n.stencilFunc(Je,Tn,pn),ue=Je,ye=Tn,se=pn)},setOp:function(Je,Tn,pn){(J!==Je||Ae!==Tn||ze!==pn)&&(n.stencilOp(Je,Tn,pn),J=Je,Ae=Tn,ze=pn)},setLocked:function(Je){I=Je},setClear:function(Je){rt!==Je&&(n.clearStencil(Je),rt=Je)},reset:function(){I=!1,ie=null,ue=null,ye=null,se=null,J=null,Ae=null,ze=null,rt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,T=null,S=null,A=new Xe(0,0,0),L=0,E=!1,M=null,C=null,N=null,k=null,U=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,q=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=q>=2);let te=null,ee={};const ce=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),Pe=new gt().fromArray(ce),Ie=new gt().fromArray(Ee);function Ne(I,ie,ue,ye){const se=new Uint8Array(4),J=n.createTexture();n.bindTexture(I,J),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<ue;Ae++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ie+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return J}const X={};X[n.TEXTURE_2D]=Ne(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=Ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=Ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=Ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(Ki),Re(!1),_e(cc),K(n.CULL_FACE),Qe(Zn);function K(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function be(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Ue(I,ie){return h[I]!==ie?(n.bindFramebuffer(I,ie),h[I]=ie,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ie),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function we(I,ie){let ue=d,ye=!1;if(I){ue=f.get(ie),ue===void 0&&(ue=[],f.set(ie,ue));const se=I.textures;if(ue.length!==se.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Ae=se.length;J<Ae;J++)ue[J]=n.COLOR_ATTACHMENT0+J;ue.length=se.length,ye=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,ye=!0);ye&&n.drawBuffers(ue)}function Ye(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const bt={[ui]:n.FUNC_ADD,[$d]:n.FUNC_SUBTRACT,[Yd]:n.FUNC_REVERSE_SUBTRACT};bt[jd]=n.MIN,bt[qd]=n.MAX;const P={[Zd]:n.ZERO,[Kd]:n.ONE,[Jd]:n.SRC_COLOR,[va]:n.SRC_ALPHA,[rf]:n.SRC_ALPHA_SATURATE,[nf]:n.DST_COLOR,[ef]:n.DST_ALPHA,[Qd]:n.ONE_MINUS_SRC_COLOR,[ba]:n.ONE_MINUS_SRC_ALPHA,[sf]:n.ONE_MINUS_DST_COLOR,[tf]:n.ONE_MINUS_DST_ALPHA,[of]:n.CONSTANT_COLOR,[af]:n.ONE_MINUS_CONSTANT_COLOR,[lf]:n.CONSTANT_ALPHA,[cf]:n.ONE_MINUS_CONSTANT_ALPHA};function Qe(I,ie,ue,ye,se,J,Ae,ze,rt,Je){if(I===Zn){_===!0&&(be(n.BLEND),_=!1);return}if(_===!1&&(K(n.BLEND),_=!0),I!==Xd){if(I!==m||Je!==E){if((p!==ui||x!==ui)&&(n.blendEquation(n.FUNC_ADD),p=ui,x=ui),Je)switch(I){case ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uc:n.blendFunc(n.ONE,n.ONE);break;case hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case hc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,v=null,T=null,S=null,A.set(0,0,0),L=0,m=I,E=Je}return}se=se||ie,J=J||ue,Ae=Ae||ye,(ie!==p||se!==x)&&(n.blendEquationSeparate(bt[ie],bt[se]),p=ie,x=se),(ue!==y||ye!==v||J!==T||Ae!==S)&&(n.blendFuncSeparate(P[ue],P[ye],P[J],P[Ae]),y=ue,v=ye,T=J,S=Ae),(ze.equals(A)===!1||rt!==L)&&(n.blendColor(ze.r,ze.g,ze.b,rt),A.copy(ze),L=rt),m=I,E=!1}function De(I,ie){I.side===rn?be(n.CULL_FACE):K(n.CULL_FACE);let ue=I.side===Vt;ie&&(ue=!ue),Re(ue),I.blending===ji&&I.transparent===!1?Qe(Zn):Qe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const ye=I.stencilWrite;a.setTest(ye),ye&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),xe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function _e(I){I!==Vd?(K(n.CULL_FACE),I!==C&&(I===cc?n.cullFace(n.BACK):I===Wd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),C=I}function it(I){I!==N&&(Y&&n.lineWidth(I),N=I)}function xe(I,ie,ue){I?(K(n.POLYGON_OFFSET_FILL),(k!==ie||U!==ue)&&(n.polygonOffset(ie,ue),k=ie,U=ue)):be(n.POLYGON_OFFSET_FILL)}function Ge(I){I?K(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function _t(I){I===void 0&&(I=n.TEXTURE0+z-1),te!==I&&(n.activeTexture(I),te=I)}function ht(I,ie,ue){ue===void 0&&(te===null?ue=n.TEXTURE0+z-1:ue=te);let ye=ee[ue];ye===void 0&&(ye={type:void 0,texture:void 0},ee[ue]=ye),(ye.type!==I||ye.texture!==ie)&&(te!==ue&&(n.activeTexture(ue),te=ue),n.bindTexture(I,ie||X[I]),ye.type=I,ye.texture=ie)}function R(){const I=ee[te];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(I){Pe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Pe.copy(I))}function me(I){Ie.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ie.copy(I))}function Me(I,ie){let ue=c.get(ie);ue===void 0&&(ue=new WeakMap,c.set(ie,ue));let ye=ue.get(I);ye===void 0&&(ye=n.getUniformBlockIndex(ie,I.name),ue.set(I,ye))}function de(I,ie){const ye=c.get(ie).get(I);l.get(ie)!==ye&&(n.uniformBlockBinding(ie,ye,I.__bindingPointIndex),l.set(ie,ye))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},te=null,ee={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,T=null,S=null,A=new Xe(0,0,0),L=0,E=!1,M=null,C=null,N=null,k=null,U=null,Pe.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:be,bindFramebuffer:Ue,drawBuffers:we,useProgram:Ye,setBlending:Qe,setMaterial:De,setFlipSided:Re,setCullFace:_e,setLineWidth:it,setPolygonOffset:xe,setScissorTest:Ge,activeTexture:_t,bindTexture:ht,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:G,texImage2D:B,texImage3D:$,updateUBOMapping:Me,uniformBlockBinding:de,texStorage2D:le,texStorage3D:Te,texSubImage2D:Z,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:he,scissor:ne,viewport:me,reset:ke}}function Nx(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return d?new OffscreenCanvas(R,b):Yr("canvas")}function _(R,b,G){let Z=1;const Q=ht(R);if((Q.width>G||Q.height>G)&&(Z=G/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(Z*Q.width),he=Math.floor(Z*Q.height);h===void 0&&(h=g(j,he));const le=b?g(j,he):h;return le.width=j,le.height=he,le.getContext("2d").drawImage(R,0,0,j,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+he+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(R,b,G,Z,Q=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=b;if(b===n.RED&&(G===n.FLOAT&&(j=n.R32F),G===n.HALF_FLOAT&&(j=n.R16F),G===n.UNSIGNED_BYTE&&(j=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.R8UI),G===n.UNSIGNED_SHORT&&(j=n.R16UI),G===n.UNSIGNED_INT&&(j=n.R32UI),G===n.BYTE&&(j=n.R8I),G===n.SHORT&&(j=n.R16I),G===n.INT&&(j=n.R32I)),b===n.RG&&(G===n.FLOAT&&(j=n.RG32F),G===n.HALF_FLOAT&&(j=n.RG16F),G===n.UNSIGNED_BYTE&&(j=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RG8UI),G===n.UNSIGNED_SHORT&&(j=n.RG16UI),G===n.UNSIGNED_INT&&(j=n.RG32UI),G===n.BYTE&&(j=n.RG8I),G===n.SHORT&&(j=n.RG16I),G===n.INT&&(j=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGB8UI),G===n.UNSIGNED_SHORT&&(j=n.RGB16UI),G===n.UNSIGNED_INT&&(j=n.RGB32UI),G===n.BYTE&&(j=n.RGB8I),G===n.SHORT&&(j=n.RGB16I),G===n.INT&&(j=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),G===n.UNSIGNED_INT&&(j=n.RGBA32UI),G===n.BYTE&&(j=n.RGBA8I),G===n.SHORT&&(j=n.RGBA16I),G===n.INT&&(j=n.RGBA32I)),b===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),b===n.RGBA){const he=Q?Vr:Ke.getTransfer(Z);G===n.FLOAT&&(j=n.RGBA32F),G===n.HALF_FLOAT&&(j=n.RGBA16F),G===n.UNSIGNED_BYTE&&(j=he===tt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(R,b){let G;return R?b===null||b===gi||b===Us?G=n.DEPTH24_STENCIL8:b===Un?G=n.DEPTH32F_STENCIL8:b===Fs&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===gi||b===Us?G=n.DEPTH_COMPONENT24:b===Un?G=n.DEPTH_COMPONENT32F:b===Fs&&(G=n.DEPTH_COMPONENT16),G}function T(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==fn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function S(R){const b=R.target;b.removeEventListener("dispose",S),L(b),b.isVideoTexture&&u.delete(b)}function A(R){const b=R.target;b.removeEventListener("dispose",A),M(b)}function L(R){const b=i.get(R);if(b.__webglInit===void 0)return;const G=R.source,Z=f.get(G);if(Z){const Q=Z[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(R),Object.keys(Z).length===0&&f.delete(G)}i.remove(R)}function E(R){const b=i.get(R);n.deleteTexture(b.__webglTexture);const G=R.source,Z=f.get(G);delete Z[b.__cacheKey],o.memory.textures--}function M(R){const b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let Q=0;Q<b.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(b.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)n.deleteFramebuffer(b.__webglFramebuffer[Z]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=R.textures;for(let Z=0,Q=G.length;Z<Q;Z++){const j=i.get(G[Z]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(G[Z])}i.remove(R)}let C=0;function N(){C=0}function k(){const R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function U(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function z(R,b){const G=i.get(R);if(R.isVideoTexture&&Ge(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,R,b);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function Y(R,b){const G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){X(G,R,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function q(R,b){const G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){X(G,R,b);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function H(R,b){const G=i.get(R);if(R.version>0&&G.__version!==R.version){K(G,R,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}const te={[Gr]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[Hr]:n.MIRRORED_REPEAT},ee={[cn]:n.NEAREST,[oh]:n.NEAREST_MIPMAP_NEAREST,[Ts]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[Ir]:n.LINEAR_MIPMAP_NEAREST,[qn]:n.LINEAR_MIPMAP_LINEAR},ce={[Sf]:n.NEVER,[Pf]:n.ALWAYS,[wf]:n.LESS,[gh]:n.LEQUAL,[Tf]:n.EQUAL,[Cf]:n.GEQUAL,[Af]:n.GREATER,[Rf]:n.NOTEQUAL};function Ee(R,b){if(b.type===Un&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===fn||b.magFilter===Ir||b.magFilter===Ts||b.magFilter===qn||b.minFilter===fn||b.minFilter===Ir||b.minFilter===Ts||b.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,te[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,te[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,te[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ee[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ee[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===cn||b.minFilter!==Ts&&b.minFilter!==qn||b.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Pe(R,b){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",S));const Z=b.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const j=U(b);if(j!==R.__cacheKey){Q[j]===void 0&&(Q[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[j].usedTimes++;const he=Q[R.__cacheKey];he!==void 0&&(Q[R.__cacheKey].usedTimes--,he.usedTimes===0&&E(b)),R.__cacheKey=j,R.__webglTexture=Q[j].texture}return G}function Ie(R,b,G){return Math.floor(Math.floor(R/G)/b)}function Ne(R,b,G,Z){const j=R.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,G,Z,b.data);else{j.sort(($,ne)=>$.start-ne.start);let he=0;for(let $=1;$<j.length;$++){const ne=j[he],me=j[$],Me=ne.start+ne.count,de=Ie(me.start,b.width,4),ke=Ie(ne.start,b.width,4);me.start<=Me+1&&de===ke&&Ie(me.start+me.count-1,b.width,4)===de?ne.count=Math.max(ne.count,me.start+me.count-ne.start):(++he,j[he]=me)}j.length=he+1;const le=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),B=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let $=0,ne=j.length;$<ne;$++){const me=j[$],Me=Math.floor(me.start/4),de=Math.ceil(me.count/4),ke=Me%b.width,I=Math.floor(Me/b.width),ie=de,ue=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,ke,I,ie,ue,G,Z,b.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,B)}}function X(R,b,G){let Z=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=n.TEXTURE_3D);const Q=Pe(R,b),j=b.source;t.bindTexture(Z,R.__webglTexture,n.TEXTURE0+G);const he=i.get(j);if(j.version!==he.__version||Q===!0){t.activeTexture(n.TEXTURE0+G);const le=Ke.getPrimaries(Ke.workingColorSpace),Te=b.colorSpace===Fn?null:Ke.getPrimaries(b.colorSpace),B=b.colorSpace===Fn||le===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);let $=_(b.image,!1,s.maxTextureSize);$=_t(b,$);const ne=r.convert(b.format,b.colorSpace),me=r.convert(b.type);let Me=v(b.internalFormat,ne,me,b.colorSpace,b.isVideoTexture);Ee(Z,b);let de;const ke=b.mipmaps,I=b.isVideoTexture!==!0,ie=he.__version===void 0||Q===!0,ue=j.dataReady,ye=T(b,$);if(b.isDepthTexture)Me=x(b.format===Bs,b.type),ie&&(I?t.texStorage2D(n.TEXTURE_2D,1,Me,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,Me,$.width,$.height,0,ne,me,null));else if(b.isDataTexture)if(ke.length>0){I&&ie&&t.texStorage2D(n.TEXTURE_2D,ye,Me,ke[0].width,ke[0].height);for(let se=0,J=ke.length;se<J;se++)de=ke[se],I?ue&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,de.width,de.height,ne,me,de.data):t.texImage2D(n.TEXTURE_2D,se,Me,de.width,de.height,0,ne,me,de.data);b.generateMipmaps=!1}else I?(ie&&t.texStorage2D(n.TEXTURE_2D,ye,Me,$.width,$.height),ue&&Ne(b,$,ne,me)):t.texImage2D(n.TEXTURE_2D,0,Me,$.width,$.height,0,ne,me,$.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){I&&ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Me,ke[0].width,ke[0].height,$.depth);for(let se=0,J=ke.length;se<J;se++)if(de=ke[se],b.format!==an)if(ne!==null)if(I){if(ue)if(b.layerUpdates.size>0){const Ae=Xc(de.width,de.height,b.format,b.type);for(const ze of b.layerUpdates){const rt=de.data.subarray(ze*Ae/de.data.BYTES_PER_ELEMENT,(ze+1)*Ae/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,ze,de.width,de.height,1,ne,rt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,$.depth,ne,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Me,de.width,de.height,$.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,$.depth,ne,me,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Me,de.width,de.height,$.depth,0,ne,me,de.data)}else{I&&ie&&t.texStorage2D(n.TEXTURE_2D,ye,Me,ke[0].width,ke[0].height);for(let se=0,J=ke.length;se<J;se++)de=ke[se],b.format!==an?ne!==null?I?ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,de.width,de.height,ne,de.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ue&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,de.width,de.height,ne,me,de.data):t.texImage2D(n.TEXTURE_2D,se,Me,de.width,de.height,0,ne,me,de.data)}else if(b.isDataArrayTexture)if(I){if(ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Me,$.width,$.height,$.depth),ue)if(b.layerUpdates.size>0){const se=Xc($.width,$.height,b.format,b.type);for(const J of b.layerUpdates){const Ae=$.data.subarray(J*se/$.data.BYTES_PER_ELEMENT,(J+1)*se/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,$.width,$.height,1,ne,me,Ae)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ne,me,$.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,$.width,$.height,$.depth,0,ne,me,$.data);else if(b.isData3DTexture)I?(ie&&t.texStorage3D(n.TEXTURE_3D,ye,Me,$.width,$.height,$.depth),ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ne,me,$.data)):t.texImage3D(n.TEXTURE_3D,0,Me,$.width,$.height,$.depth,0,ne,me,$.data);else if(b.isFramebufferTexture){if(ie)if(I)t.texStorage2D(n.TEXTURE_2D,ye,Me,$.width,$.height);else{let se=$.width,J=$.height;for(let Ae=0;Ae<ye;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Me,se,J,0,ne,me,null),se>>=1,J>>=1}}else if(ke.length>0){if(I&&ie){const se=ht(ke[0]);t.texStorage2D(n.TEXTURE_2D,ye,Me,se.width,se.height)}for(let se=0,J=ke.length;se<J;se++)de=ke[se],I?ue&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ne,me,de):t.texImage2D(n.TEXTURE_2D,se,Me,ne,me,de);b.generateMipmaps=!1}else if(I){if(ie){const se=ht($);t.texStorage2D(n.TEXTURE_2D,ye,Me,se.width,se.height)}ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne,me,$)}else t.texImage2D(n.TEXTURE_2D,0,Me,ne,me,$);m(b)&&p(Z),he.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function K(R,b,G){if(b.image.length!==6)return;const Z=Pe(R,b),Q=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);const j=i.get(Q);if(Q.version!==j.__version||Z===!0){t.activeTexture(n.TEXTURE0+G);const he=Ke.getPrimaries(Ke.workingColorSpace),le=b.colorSpace===Fn?null:Ke.getPrimaries(b.colorSpace),Te=b.colorSpace===Fn||he===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const B=b.isCompressedTexture||b.image[0].isCompressedTexture,$=b.image[0]&&b.image[0].isDataTexture,ne=[];for(let J=0;J<6;J++)!B&&!$?ne[J]=_(b.image[J],!0,s.maxCubemapSize):ne[J]=$?b.image[J].image:b.image[J],ne[J]=_t(b,ne[J]);const me=ne[0],Me=r.convert(b.format,b.colorSpace),de=r.convert(b.type),ke=v(b.internalFormat,Me,de,b.colorSpace),I=b.isVideoTexture!==!0,ie=j.__version===void 0||Z===!0,ue=Q.dataReady;let ye=T(b,me);Ee(n.TEXTURE_CUBE_MAP,b);let se;if(B){I&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,ke,me.width,me.height);for(let J=0;J<6;J++){se=ne[J].mipmaps;for(let Ae=0;Ae<se.length;Ae++){const ze=se[Ae];b.format!==an?Me!==null?I?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,0,0,ze.width,ze.height,Me,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,ke,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,0,0,ze.width,ze.height,Me,de,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,ke,ze.width,ze.height,0,Me,de,ze.data)}}}else{if(se=b.mipmaps,I&&ie){se.length>0&&ye++;const J=ht(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,ke,J.width,J.height)}for(let J=0;J<6;J++)if($){I?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ne[J].width,ne[J].height,Me,de,ne[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,ne[J].width,ne[J].height,0,Me,de,ne[J].data);for(let Ae=0;Ae<se.length;Ae++){const rt=se[Ae].image[J].image;I?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,0,0,rt.width,rt.height,Me,de,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,ke,rt.width,rt.height,0,Me,de,rt.data)}}else{I?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Me,de,ne[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,Me,de,ne[J]);for(let Ae=0;Ae<se.length;Ae++){const ze=se[Ae];I?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,0,0,Me,de,ze.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,ke,Me,de,ze.image[J])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),j.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function be(R,b,G,Z,Q,j){const he=r.convert(G.format,G.colorSpace),le=r.convert(G.type),Te=v(G.internalFormat,he,le,G.colorSpace),B=i.get(b),$=i.get(G);if($.__renderTarget=b,!B.__hasExternalTextures){const ne=Math.max(1,b.width>>j),me=Math.max(1,b.height>>j);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,Te,ne,me,b.depth,0,he,le,null):t.texImage2D(Q,j,Te,ne,me,0,he,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),xe(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,$.__webglTexture,0,it(b)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,$.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(R,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){const Z=b.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,j=x(b.stencilBuffer,Q),he=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=it(b);xe(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,j,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,j,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,j,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,R)}else{const Z=b.textures;for(let Q=0;Q<Z.length;Q++){const j=Z[Q],he=r.convert(j.format,j.colorSpace),le=r.convert(j.type),Te=v(j.internalFormat,he,le,j.colorSpace),B=it(b);G&&xe(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,B,Te,b.width,b.height):xe(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,B,Te,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Te,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);const Q=Z.__webglTexture,j=it(b);if(b.depthTexture.format===Os)xe(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Bs)xe(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ye(R){const b=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=Z}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Z=R.texture.mipmaps;Z&&Z.length>0?we(b.__webglFramebuffer[0],R):we(b.__webglFramebuffer,R)}else if(G){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=n.createRenderbuffer(),Ue(b.__webglDepthbuffer[Z],R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Ue(b.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function bt(R,b,G){const Z=i.get(R);b!==void 0&&be(Z.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ye(R)}function P(R){const b=R.texture,G=i.get(R),Z=i.get(b);R.addEventListener("dispose",A);const Q=R.textures,j=R.isWebGLCubeRenderTarget===!0,he=Q.length>1;if(he||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=b.version,o.memory.textures++),j){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let Te=0;Te<b.mipmaps.length;Te++)G.__webglFramebuffer[le][Te]=n.createFramebuffer()}else G.__webglFramebuffer[le]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)G.__webglFramebuffer[le]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(he)for(let le=0,Te=Q.length;le<Te;le++){const B=i.get(Q[le]);B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&xe(R)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const Te=Q[le];G.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[le]);const B=r.convert(Te.format,Te.colorSpace),$=r.convert(Te.type),ne=v(Te.internalFormat,B,$,Te.colorSpace,R.isXRRenderTarget===!0),me=it(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,ne,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,G.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)be(G.__webglFramebuffer[le][Te],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te);else be(G.__webglFramebuffer[le],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let le=0,Te=Q.length;le<Te;le++){const B=Q[le],$=i.get(B);let ne=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,$.__webglTexture),Ee(ne,B),be(G.__webglFramebuffer,R,B,n.COLOR_ATTACHMENT0+le,ne,0),m(B)&&p(ne)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),Ee(le,b),b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)be(G.__webglFramebuffer[Te],R,b,n.COLOR_ATTACHMENT0,le,Te);else be(G.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,le,0);m(b)&&p(le),t.unbindTexture()}R.depthBuffer&&Ye(R)}function Qe(R){const b=R.textures;for(let G=0,Z=b.length;G<Z;G++){const Q=b[G];if(m(Q)){const j=y(R),he=i.get(Q).__webglTexture;t.bindTexture(j,he),p(j),t.unbindTexture()}}}const De=[],Re=[];function _e(R){if(R.samples>0){if(xe(R)===!1){const b=R.textures,G=R.width,Z=R.height;let Q=n.COLOR_BUFFER_BIT;const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(R),le=b.length>1;if(le)for(let B=0;B<b.length;B++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const Te=R.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let B=0;B<b.length;B++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[B]);const $=i.get(b[B]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$,0)}n.blitFramebuffer(0,0,G,Z,0,0,G,Z,Q,n.NEAREST),l===!0&&(De.length=0,Re.length=0,De.push(n.COLOR_ATTACHMENT0+B),R.depthBuffer&&R.resolveDepthBuffer===!1&&(De.push(j),Re.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let B=0;B<b.length;B++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.RENDERBUFFER,he.__webglColorRenderbuffer[B]);const $=i.get(b[B]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.TEXTURE_2D,$,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function it(R){return Math.min(s.maxSamples,R.samples)}function xe(R){const b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ge(R){const b=o.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function _t(R,b){const G=R.colorSpace,Z=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==es&&G!==Fn&&(Ke.getTransfer(G)===tt?(Z!==an||Q!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function ht(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=bt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=be,this.useMultisampledRTT=xe}function Fx(n,e){function t(i,s=Fn){let r;const o=Ke.getTransfer(s);if(i===Mn)return n.UNSIGNED_BYTE;if(i===Ml)return n.UNSIGNED_SHORT_4_4_4_4;if(i===El)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ch)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ah)return n.BYTE;if(i===lh)return n.SHORT;if(i===Fs)return n.UNSIGNED_SHORT;if(i===bl)return n.INT;if(i===gi)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===js)return n.HALF_FLOAT;if(i===hh)return n.ALPHA;if(i===dh)return n.RGB;if(i===an)return n.RGBA;if(i===Os)return n.DEPTH_COMPONENT;if(i===Bs)return n.DEPTH_STENCIL;if(i===fh)return n.RED;if(i===Sl)return n.RED_INTEGER;if(i===ph)return n.RG;if(i===wl)return n.RG_INTEGER;if(i===Tl)return n.RGBA_INTEGER;if(i===Dr||i===Nr||i===Fr||i===Ur)if(o===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pa||i===La||i===Ia||i===Da)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===La)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Na||i===Fa||i===Ua)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Na||i===Fa)return o===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ua)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Oa||i===Ba||i===ka||i===za||i===Ga||i===Ha||i===Va||i===Wa||i===Xa||i===$a||i===Ya||i===ja||i===qa||i===Za)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Oa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ba)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ka)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===za)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ga)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ha)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Va)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$a)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ya)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ja)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Za)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ka||i===Ja||i===Qa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ka)return o===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===el||i===tl||i===nl||i===il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===el)return r.COMPRESSED_RED_RGTC1_EXT;if(i===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ox=`
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

}`;class Bx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ah(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Jn({vertexShader:Ux,fragmentShader:Ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new rs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kx extends Mi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Bx,p={},y=t.getContextAttributes();let v=null,x=null;const T=[],S=[],A=new Oe;let L=null;const E=new Jt;E.viewport=new gt;const M=new Jt;M.viewport=new gt;const C=[E,M],N=new $p;let k=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=T[X];return K===void 0&&(K=new Xo,T[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=T[X];return K===void 0&&(K=new Xo,T[X]=K),K.getGripSpace()},this.getHand=function(X){let K=T[X];return K===void 0&&(K=new Xo,T[X]=K),K.getHandSpace()};function z(X){const K=S.indexOf(X.inputSource);if(K===-1)return;const be=T[K];be!==void 0&&(be.update(X.inputSource,X.frame,c||o),be.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",q);for(let X=0;X<T.length;X++){const K=S[X];K!==null&&(S[X]=null,T[X].disconnect(K))}k=null,U=null,m.reset();for(const X in p)delete p[X];e.setRenderTarget(v),d=null,f=null,h=null,s=null,x=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",q),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ue=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?Bs:Os,Ue=y.stencil?Us:gi);const Ye={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new _i(f.textureWidth,f.textureHeight,{format:an,type:Mn,depthTexture:new Th(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new _i(d.framebufferWidth,d.framebufferHeight,{format:an,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ne.setContext(s),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(X){for(let K=0;K<X.removed.length;K++){const be=X.removed[K],Ue=S.indexOf(be);Ue>=0&&(S[Ue]=null,T[Ue].disconnect(be))}for(let K=0;K<X.added.length;K++){const be=X.added[K];let Ue=S.indexOf(be);if(Ue===-1){for(let Ye=0;Ye<T.length;Ye++)if(Ye>=S.length){S.push(be),Ue=Ye;break}else if(S[Ye]===null){S[Ye]=be,Ue=Ye;break}if(Ue===-1)break}const we=T[Ue];we&&we.connect(be)}}const H=new D,te=new D;function ee(X,K,be){H.setFromMatrixPosition(K.matrixWorld),te.setFromMatrixPosition(be.matrixWorld);const Ue=H.distanceTo(te),we=K.projectionMatrix.elements,Ye=be.projectionMatrix.elements,bt=we[14]/(we[10]-1),P=we[14]/(we[10]+1),Qe=(we[9]+1)/we[5],De=(we[9]-1)/we[5],Re=(we[8]-1)/we[0],_e=(Ye[8]+1)/Ye[0],it=bt*Re,xe=bt*_e,Ge=Ue/(-Re+_e),_t=Ge*-Re;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(_t),X.translateZ(Ge),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),we[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ht=bt+Ge,R=P+Ge,b=it-_t,G=xe+(Ue-_t),Z=Qe*P/R*ht,Q=De*P/R*ht;X.projectionMatrix.makePerspective(b,G,Z,Q,ht,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ce(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let K=X.near,be=X.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(be=m.depthFar)),N.near=M.near=E.near=K,N.far=M.far=E.far=be,(k!==N.near||U!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,U=N.far),N.layers.mask=X.layers.mask|6,E.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;const Ue=X.parent,we=N.cameras;ce(N,Ue);for(let Ye=0;Ye<we.length;Ye++)ce(we[Ye],Ue);we.length===2?ee(N,E,M):N.projectionMatrix.copy(E.projectionMatrix),Ee(X,N,Ue)};function Ee(X,K,be){be===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(be.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ts*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(X){return p[X]};let Pe=null;function Ie(X,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const be=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ue=!1;be.length!==N.cameras.length&&(N.cameras.length=0,Ue=!0);for(let P=0;P<be.length;P++){const Qe=be[P];let De=null;if(d!==null)De=d.getViewport(Qe);else{const _e=h.getViewSubImage(f,Qe);De=_e.viewport,P===0&&(e.setRenderTargetTextures(x,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(x))}let Re=C[P];Re===void 0&&(Re=new Jt,Re.layers.enable(P),Re.viewport=new gt,C[P]=Re),Re.matrix.fromArray(Qe.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Qe.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(De.x,De.y,De.width,De.height),P===0&&(N.matrix.copy(Re.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ue===!0&&N.cameras.push(Re)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const P=h.getDepthInformation(be[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let P=0;P<be.length;P++){const Qe=be[P].camera;if(Qe){let De=p[Qe];De||(De=new Ah,p[Qe]=De);const Re=h.getCameraImage(Qe);De.sourceTexture=Re}}}}for(let be=0;be<T.length;be++){const Ue=S[be],we=T[be];Ue!==null&&we!==void 0&&we.update(Ue,K,c||o)}Pe&&Pe(X,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const Ne=new Nh;Ne.setAnimationLoop(Ie),this.setAnimationLoop=function(X){Pe=X},this.dispose=function(){}}}const li=new Sn,zx=new ct;function Gx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,li.copy(x),li.x*=-1,li.y*=-1,li.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),m.envMapRotation.value.setFromMatrix4(zx.makeRotationFromEuler(li)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;i.uniformBlockBinding(y,x)}function c(y,v){let x=s[y.id];x===void 0&&(g(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",m));const T=v.program;i.updateUBOMapping(y,T);const S=e.render.frame;r[y.id]!==S&&(f(y),r[y.id]=S)}function u(y){const v=h();y.__bindingPointIndex=v;const x=n.createBuffer(),T=y.__size,S=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,T,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=s[y.id],x=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let S=0,A=x.length;S<A;S++){const L=Array.isArray(x[S])?x[S]:[x[S]];for(let E=0,M=L.length;E<M;E++){const C=L[E];if(d(C,S,E,T)===!0){const N=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let U=0;for(let z=0;z<k.length;z++){const Y=k[z],q=_(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,N+U,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,v,x,T){const S=y.value,A=v+"_"+x;if(T[A]===void 0)return typeof S=="number"||typeof S=="boolean"?T[A]=S:T[A]=S.clone(),!0;{const L=T[A];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return T[A]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function g(y){const v=y.uniforms;let x=0;const T=16;for(let A=0,L=v.length;A<L;A++){const E=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,C=E.length;M<C;M++){const N=E[M],k=Array.isArray(N.value)?N.value:[N.value];for(let U=0,z=k.length;U<z;U++){const Y=k[U],q=_(Y),H=x%T,te=H%q.boundary,ee=H+te;x+=te,ee!==0&&T-ee<q.storage&&(x+=T-ee),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=q.storage}}}const S=x%T;return S>0&&(x+=T-S),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Vx{constructor(e={}){const{canvas:t=Yf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=Ht;let S=0,A=0,L=null,E=-1,M=null;const C=new gt,N=new gt;let k=null;const U=new Xe(0);let z=0,Y=t.width,q=t.height,H=1,te=null,ee=null;const ce=new gt(0,0,Y,q),Ee=new gt(0,0,Y,q);let Pe=!1;const Ie=new Pl;let Ne=!1,X=!1;const K=new ct,be=new D,Ue=new gt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function bt(){return L===null?H:1}let P=i;function Qe(w,F){return t.getContext(w,F)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ro}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",se,!1),P===null){const F="webgl2";if(P=Qe(F,w),P===null)throw Qe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let De,Re,_e,it,xe,Ge,_t,ht,R,b,G,Z,Q,j,he,le,Te,B,$,ne,me,Me,de,ke;function I(){De=new Q_(P),De.init(),Me=new Fx(P,De),Re=new $_(P,De,e,Me),_e=new Dx(P,De),Re.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),it=new n0(P),xe=new vx,Ge=new Nx(P,De,_e,xe,Re,Me,it),_t=new j_(x),ht=new J_(x),R=new lm(P),de=new W_(P,R),b=new e0(P,R,it,de),G=new s0(P,b,R,it),$=new i0(P,Re,Ge),le=new Y_(xe),Z=new yx(x,_t,ht,De,Re,de,le),Q=new Gx(x,xe),j=new Mx,he=new Rx(De),B=new V_(x,_t,ht,_e,G,d,l),Te=new Lx(x,G,Re),ke=new Hx(P,it,Re,_e),ne=new X_(P,De,it),me=new t0(P,De,it),it.programs=Z.programs,x.capabilities=Re,x.extensions=De,x.properties=xe,x.renderLists=j,x.shadowMap=Te,x.state=_e,x.info=it}I();const ie=new kx(x,P);this.xr=ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=De.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=De.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(Y,q,!1))},this.getSize=function(w){return w.set(Y,q)},this.setSize=function(w,F,V=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,q=F,t.width=Math.floor(w*H),t.height=Math.floor(F*H),V===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Y*H,q*H).floor()},this.setDrawingBufferSize=function(w,F,V){Y=w,q=F,H=V,t.width=Math.floor(w*V),t.height=Math.floor(F*V),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(ce)},this.setViewport=function(w,F,V,W){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,F,V,W),_e.viewport(C.copy(ce).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Ee)},this.setScissor=function(w,F,V,W){w.isVector4?Ee.set(w.x,w.y,w.z,w.w):Ee.set(w,F,V,W),_e.scissor(N.copy(Ee).multiplyScalar(H).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(w){_e.setScissorTest(Pe=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){ee=w},this.getClearColor=function(w){return w.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,V=!0){let W=0;if(w){let O=!1;if(L!==null){const re=L.texture.format;O=re===Tl||re===wl||re===Sl}if(O){const re=L.texture.type,pe=re===Mn||re===gi||re===Fs||re===Us||re===Ml||re===El,Se=B.getClearColor(),ve=B.getClearAlpha(),Fe=Se.r,Be=Se.g,Ce=Se.b;pe?(g[0]=Fe,g[1]=Be,g[2]=Ce,g[3]=ve,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Fe,_[1]=Be,_[2]=Ce,_[3]=ve,P.clearBufferiv(P.COLOR,0,_))}else W|=P.COLOR_BUFFER_BIT}F&&(W|=P.DEPTH_BUFFER_BIT),V&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",se,!1),B.dispose(),j.dispose(),he.dispose(),xe.dispose(),_t.dispose(),ht.dispose(),G.dispose(),de.dispose(),ke.dispose(),Z.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",pn),ie.removeEventListener("sessionend",ic),ti.stop()};function ue(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=it.autoReset,F=Te.enabled,V=Te.autoUpdate,W=Te.needsUpdate,O=Te.type;I(),it.autoReset=w,Te.enabled=F,Te.autoUpdate=V,Te.needsUpdate=W,Te.type=O}function se(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function J(w){const F=w.target;F.removeEventListener("dispose",J),Ae(F)}function Ae(w){ze(w),xe.remove(w)}function ze(w){const F=xe.get(w).programs;F!==void 0&&(F.forEach(function(V){Z.releaseProgram(V)}),w.isShaderMaterial&&Z.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,V,W,O,re){F===null&&(F=we);const pe=O.isMesh&&O.matrixWorld.determinant()<0,Se=Od(w,F,V,W,O);_e.setMaterial(W,pe);let ve=V.index,Fe=1;if(W.wireframe===!0){if(ve=b.getWireframeAttribute(V),ve===void 0)return;Fe=2}const Be=V.drawRange,Ce=V.attributes.position;let je=Be.start*Fe,et=(Be.start+Be.count)*Fe;re!==null&&(je=Math.max(je,re.start*Fe),et=Math.min(et,(re.start+re.count)*Fe)),ve!==null?(je=Math.max(je,0),et=Math.min(et,ve.count)):Ce!=null&&(je=Math.max(je,0),et=Math.min(et,Ce.count));const mt=et-je;if(mt<0||mt===1/0)return;de.setup(O,W,Se,V,ve);let lt,st=ne;if(ve!==null&&(lt=R.get(ve),st=me,st.setIndex(lt)),O.isMesh)W.wireframe===!0?(_e.setLineWidth(W.wireframeLinewidth*bt()),st.setMode(P.LINES)):st.setMode(P.TRIANGLES);else if(O.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),_e.setLineWidth(Le*bt()),O.isLineSegments?st.setMode(P.LINES):O.isLineLoop?st.setMode(P.LINE_LOOP):st.setMode(P.LINE_STRIP)}else O.isPoints?st.setMode(P.POINTS):O.isSprite&&st.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Le=O._multiDrawStarts,dt=O._multiDrawCounts,qe=O._multiDrawCount,jt=ve?R.get(ve).bytesPerElement:1,wi=xe.get(W).currentProgram.getUniforms();for(let qt=0;qt<qe;qt++)wi.setValue(P,"_gl_DrawID",qt),st.render(Le[qt]/jt,dt[qt])}else if(O.isInstancedMesh)st.renderInstances(je,mt,O.count);else if(V.isInstancedBufferGeometry){const Le=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,dt=Math.min(V.instanceCount,Le);st.renderInstances(je,mt,dt)}else st.render(je,mt)};function rt(w,F,V){w.transparent===!0&&w.side===rn&&w.forceSinglePass===!1?(w.side=Vt,w.needsUpdate=!0,er(w,F,V),w.side=Bn,w.needsUpdate=!0,er(w,F,V),w.side=rn):er(w,F,V)}this.compile=function(w,F,V=null){V===null&&(V=w),p=he.get(V),p.init(F),v.push(p),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==V&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const W=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const re=O.material;if(re)if(Array.isArray(re))for(let pe=0;pe<re.length;pe++){const Se=re[pe];rt(Se,V,O),W.add(Se)}else rt(re,V,O),W.add(re)}),p=v.pop(),W},this.compileAsync=function(w,F,V=null){const W=this.compile(w,F,V);return new Promise(O=>{function re(){if(W.forEach(function(pe){xe.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){O(w);return}setTimeout(re,10)}De.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Je=null;function Tn(w){Je&&Je(w)}function pn(){ti.stop()}function ic(){ti.start()}const ti=new Nh;ti.setAnimationLoop(Tn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(w){Je=w,ie.setAnimationLoop(w),w===null?ti.stop():ti.start()},ie.addEventListener("sessionstart",pn),ie.addEventListener("sessionend",ic),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,F,L),p=he.get(w,v.length),p.init(F),v.push(p),K.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ie.setFromProjectionMatrix(K,xn,F.reversedDepth),X=this.localClippingEnabled,Ne=le.init(this.clippingPlanes,X),m=j.get(w,y.length),m.init(),y.push(m),ie.enabled===!0&&ie.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&vo(re,F,-1/0,x.sortObjects)}vo(w,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,ee),Ye=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ye&&B.addToRenderList(m,w),this.info.render.frame++,Ne===!0&&le.beginShadows();const V=p.state.shadowsArray;Te.render(V,w,F),Ne===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const re=F.cameras;if(O.length>0)for(let pe=0,Se=re.length;pe<Se;pe++){const ve=re[pe];rc(W,O,w,ve)}Ye&&B.render(w);for(let pe=0,Se=re.length;pe<Se;pe++){const ve=re[pe];sc(m,w,ve,ve.viewport)}}else O.length>0&&rc(W,O,w,F),Ye&&B.render(w),sc(m,w,F);L!==null&&A===0&&(Ge.updateMultisampleRenderTarget(L),Ge.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(x,w,F),de.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],Ne===!0&&le.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function vo(w,F,V,W){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ie.intersectsSprite(w)){W&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(K);const pe=G.update(w),Se=w.material;Se.visible&&m.push(w,pe,Se,V,Ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ie.intersectsObject(w))){const pe=G.update(w),Se=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ue.copy(pe.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(K)),Array.isArray(Se)){const ve=pe.groups;for(let Fe=0,Be=ve.length;Fe<Be;Fe++){const Ce=ve[Fe],je=Se[Ce.materialIndex];je&&je.visible&&m.push(w,pe,je,V,Ue.z,Ce)}}else Se.visible&&m.push(w,pe,Se,V,Ue.z,null)}}const re=w.children;for(let pe=0,Se=re.length;pe<Se;pe++)vo(re[pe],F,V,W)}function sc(w,F,V,W){const O=w.opaque,re=w.transmissive,pe=w.transparent;p.setupLightsView(V),Ne===!0&&le.setGlobalState(x.clippingPlanes,V),W&&_e.viewport(C.copy(W)),O.length>0&&Qs(O,F,V),re.length>0&&Qs(re,F,V),pe.length>0&&Qs(pe,F,V),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function rc(w,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new _i(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?js:Mn,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const re=p.state.transmissionRenderTarget[W.id],pe=W.viewport||C;re.setSize(pe.z*x.transmissionResolutionScale,pe.w*x.transmissionResolutionScale);const Se=x.getRenderTarget(),ve=x.getActiveCubeFace(),Fe=x.getActiveMipmapLevel();x.setRenderTarget(re),x.getClearColor(U),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),Ye&&B.render(V);const Be=x.toneMapping;x.toneMapping=Kn;const Ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),Ne===!0&&le.setGlobalState(x.clippingPlanes,W),Qs(w,V,W),Ge.updateMultisampleRenderTarget(re),Ge.updateRenderTargetMipmap(re),De.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let et=0,mt=F.length;et<mt;et++){const lt=F[et],st=lt.object,Le=lt.geometry,dt=lt.material,qe=lt.group;if(dt.side===rn&&st.layers.test(W.layers)){const jt=dt.side;dt.side=Vt,dt.needsUpdate=!0,oc(st,V,W,Le,dt,qe),dt.side=jt,dt.needsUpdate=!0,je=!0}}je===!0&&(Ge.updateMultisampleRenderTarget(re),Ge.updateRenderTargetMipmap(re))}x.setRenderTarget(Se,ve,Fe),x.setClearColor(U,z),Ce!==void 0&&(W.viewport=Ce),x.toneMapping=Be}function Qs(w,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,re=w.length;O<re;O++){const pe=w[O],Se=pe.object,ve=pe.geometry,Fe=pe.group;let Be=pe.material;Be.allowOverride===!0&&W!==null&&(Be=W),Se.layers.test(V.layers)&&oc(Se,F,V,ve,Be,Fe)}}function oc(w,F,V,W,O,re){w.onBeforeRender(x,F,V,W,O,re),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(x,F,V,W,w,re),O.transparent===!0&&O.side===rn&&O.forceSinglePass===!1?(O.side=Vt,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,w,re),O.side=Bn,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,w,re),O.side=rn):x.renderBufferDirect(V,F,W,O,w,re),w.onAfterRender(x,F,V,W,O,re)}function er(w,F,V){F.isScene!==!0&&(F=we);const W=xe.get(w),O=p.state.lights,re=p.state.shadowsArray,pe=O.state.version,Se=Z.getParameters(w,O.state,re,F,V),ve=Z.getProgramCacheKey(Se);let Fe=W.programs;W.environment=w.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(w.isMeshStandardMaterial?ht:_t).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",J),Fe=new Map,W.programs=Fe);let Be=Fe.get(ve);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===pe)return lc(w,Se),Be}else Se.uniforms=Z.getUniforms(w),w.onBeforeCompile(Se,x),Be=Z.acquireProgram(Se,ve),Fe.set(ve,Be),W.uniforms=Se.uniforms;const Ce=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=le.uniform),lc(w,Se),W.needsLights=kd(w),W.lightsStateVersion=pe,W.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function ac(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Or.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function lc(w,F){const V=xe.get(w);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Od(w,F,V,W,O){F.isScene!==!0&&(F=we),Ge.resetTextureUnits();const re=F.fog,pe=W.isMeshStandardMaterial?F.environment:null,Se=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:es,ve=(W.isMeshStandardMaterial?ht:_t).get(W.envMap||pe),Fe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!V.morphAttributes.position,je=!!V.morphAttributes.normal,et=!!V.morphAttributes.color;let mt=Kn;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(mt=x.toneMapping);const lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,st=lt!==void 0?lt.length:0,Le=xe.get(W),dt=p.state.lights;if(Ne===!0&&(X===!0||w!==M)){const kt=w===M&&W.id===E;le.setState(W,w,kt)}let qe=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==dt.state.version||Le.outputColorSpace!==Se||O.isBatchedMesh&&Le.batching===!1||!O.isBatchedMesh&&Le.batching===!0||O.isBatchedMesh&&Le.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Le.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Le.instancing===!1||!O.isInstancedMesh&&Le.instancing===!0||O.isSkinnedMesh&&Le.skinning===!1||!O.isSkinnedMesh&&Le.skinning===!0||O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null||Le.envMap!==ve||W.fog===!0&&Le.fog!==re||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==le.numPlanes||Le.numIntersection!==le.numIntersection)||Le.vertexAlphas!==Fe||Le.vertexTangents!==Be||Le.morphTargets!==Ce||Le.morphNormals!==je||Le.morphColors!==et||Le.toneMapping!==mt||Le.morphTargetsCount!==st)&&(qe=!0):(qe=!0,Le.__version=W.version);let jt=Le.currentProgram;qe===!0&&(jt=er(W,F,O));let wi=!1,qt=!1,_s=!1;const ft=jt.getUniforms(),tn=Le.uniforms;if(_e.useProgram(jt.program)&&(wi=!0,qt=!0,_s=!0),W.id!==E&&(E=W.id,qt=!0),wi||M!==w){_e.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ft.setValue(P,"projectionMatrix",w.projectionMatrix),ft.setValue(P,"viewMatrix",w.matrixWorldInverse);const Xt=ft.map.cameraPosition;Xt!==void 0&&Xt.setValue(P,be.setFromMatrixPosition(w.matrixWorld)),Re.logarithmicDepthBuffer&&ft.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ft.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,qt=!0,_s=!0)}if(O.isSkinnedMesh){ft.setOptional(P,O,"bindMatrix"),ft.setOptional(P,O,"bindMatrixInverse");const kt=O.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),ft.setValue(P,"boneTexture",kt.boneTexture,Ge))}O.isBatchedMesh&&(ft.setOptional(P,O,"batchingTexture"),ft.setValue(P,"batchingTexture",O._matricesTexture,Ge),ft.setOptional(P,O,"batchingIdTexture"),ft.setValue(P,"batchingIdTexture",O._indirectTexture,Ge),ft.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&ft.setValue(P,"batchingColorTexture",O._colorsTexture,Ge));const nn=V.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&$.update(O,V,jt),(qt||Le.receiveShadow!==O.receiveShadow)&&(Le.receiveShadow=O.receiveShadow,ft.setValue(P,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(tn.envMap.value=ve,tn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(tn.envMapIntensity.value=F.environmentIntensity),qt&&(ft.setValue(P,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&Bd(tn,_s),re&&W.fog===!0&&Q.refreshFogUniforms(tn,re),Q.refreshMaterialUniforms(tn,W,H,q,p.state.transmissionRenderTarget[w.id]),Or.upload(P,ac(Le),tn,Ge)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Or.upload(P,ac(Le),tn,Ge),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ft.setValue(P,"center",O.center),ft.setValue(P,"modelViewMatrix",O.modelViewMatrix),ft.setValue(P,"normalMatrix",O.normalMatrix),ft.setValue(P,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const kt=W.uniformsGroups;for(let Xt=0,bo=kt.length;Xt<bo;Xt++){const ni=kt[Xt];ke.update(ni,jt),ke.bind(ni,jt)}}return jt}function Bd(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function kd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,F,V){const W=xe.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),xe.get(w.texture).__webglTexture=F,xe.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:V,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const V=xe.get(w);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};const zd=P.createFramebuffer();this.setRenderTarget=function(w,F=0,V=0){L=w,S=F,A=V;let W=!0,O=null,re=!1,pe=!1;if(w){const ve=xe.get(w);if(ve.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(ve.__webglFramebuffer===void 0)Ge.setupRenderTarget(w);else if(ve.__hasExternalTextures)Ge.rebindTextures(w,xe.get(w.texture).__webglTexture,xe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ce=w.depthTexture;if(ve.__boundDepthTexture!==Ce){if(Ce!==null&&xe.has(Ce)&&(w.width!==Ce.image.width||w.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(w)}}const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);const Be=xe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?O=Be[F][V]:O=Be[F],re=!0):w.samples>0&&Ge.useMultisampledRTT(w)===!1?O=xe.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?O=Be[V]:O=Be,C.copy(w.viewport),N.copy(w.scissor),k=w.scissorTest}else C.copy(ce).multiplyScalar(H).floor(),N.copy(Ee).multiplyScalar(H).floor(),k=Pe;if(V!==0&&(O=zd),_e.bindFramebuffer(P.FRAMEBUFFER,O)&&W&&_e.drawBuffers(w,O),_e.viewport(C),_e.scissor(N),_e.setScissorTest(k),re){const ve=xe.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,V)}else if(pe){const ve=F;for(let Fe=0;Fe<w.textures.length;Fe++){const Be=xe.get(w.textures[Fe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,V,ve)}}else if(w!==null&&V!==0){const ve=xe.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ve.__webglTexture,V)}E=-1},this.readRenderTargetPixels=function(w,F,V,W,O,re,pe,Se=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve){_e.bindFramebuffer(P.FRAMEBUFFER,ve);try{const Fe=w.textures[Se],Be=Fe.format,Ce=Fe.type;if(!Re.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-W&&V>=0&&V<=w.height-O&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Se),P.readPixels(F,V,W,O,Me.convert(Be),Me.convert(Ce),re))}finally{const Fe=L!==null?xe.get(L).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,F,V,W,O,re,pe,Se=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve)if(F>=0&&F<=w.width-W&&V>=0&&V<=w.height-O){_e.bindFramebuffer(P.FRAMEBUFFER,ve);const Fe=w.textures[Se],Be=Fe.format,Ce=Fe.type;if(!Re.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,je),P.bufferData(P.PIXEL_PACK_BUFFER,re.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Se),P.readPixels(F,V,W,O,Me.convert(Be),Me.convert(Ce),0);const et=L!==null?xe.get(L).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,et);const mt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await jf(P,mt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,je),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,re),P.deleteBuffer(je),P.deleteSync(mt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,V=0){const W=Math.pow(2,-V),O=Math.floor(w.image.width*W),re=Math.floor(w.image.height*W),pe=F!==null?F.x:0,Se=F!==null?F.y:0;Ge.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,pe,Se,O,re),_e.unbindTexture()};const Gd=P.createFramebuffer(),Hd=P.createFramebuffer();this.copyTextureToTexture=function(w,F,V=null,W=null,O=0,re=null){re===null&&(O!==0?(ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=O,O=0):re=0);let pe,Se,ve,Fe,Be,Ce,je,et,mt;const lt=w.isCompressedTexture?w.mipmaps[re]:w.image;if(V!==null)pe=V.max.x-V.min.x,Se=V.max.y-V.min.y,ve=V.isBox3?V.max.z-V.min.z:1,Fe=V.min.x,Be=V.min.y,Ce=V.isBox3?V.min.z:0;else{const nn=Math.pow(2,-O);pe=Math.floor(lt.width*nn),Se=Math.floor(lt.height*nn),w.isDataArrayTexture?ve=lt.depth:w.isData3DTexture?ve=Math.floor(lt.depth*nn):ve=1,Fe=0,Be=0,Ce=0}W!==null?(je=W.x,et=W.y,mt=W.z):(je=0,et=0,mt=0);const st=Me.convert(F.format),Le=Me.convert(F.type);let dt;F.isData3DTexture?(Ge.setTexture3D(F,0),dt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ge.setTexture2DArray(F,0),dt=P.TEXTURE_2D_ARRAY):(Ge.setTexture2D(F,0),dt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const qe=P.getParameter(P.UNPACK_ROW_LENGTH),jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),wi=P.getParameter(P.UNPACK_SKIP_PIXELS),qt=P.getParameter(P.UNPACK_SKIP_ROWS),_s=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,lt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,lt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Fe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Be),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ce);const ft=w.isDataArrayTexture||w.isData3DTexture,tn=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const nn=xe.get(w),kt=xe.get(F),Xt=xe.get(nn.__renderTarget),bo=xe.get(kt.__renderTarget);_e.bindFramebuffer(P.READ_FRAMEBUFFER,Xt.__webglFramebuffer),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,bo.__webglFramebuffer);for(let ni=0;ni<ve;ni++)ft&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.get(w).__webglTexture,O,Ce+ni),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.get(F).__webglTexture,re,mt+ni)),P.blitFramebuffer(Fe,Be,pe,Se,je,et,pe,Se,P.DEPTH_BUFFER_BIT,P.NEAREST);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||xe.has(w)){const nn=xe.get(w),kt=xe.get(F);_e.bindFramebuffer(P.READ_FRAMEBUFFER,Gd),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,Hd);for(let Xt=0;Xt<ve;Xt++)ft?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,nn.__webglTexture,O,Ce+Xt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,nn.__webglTexture,O),tn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.__webglTexture,re,mt+Xt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,kt.__webglTexture,re),O!==0?P.blitFramebuffer(Fe,Be,pe,Se,je,et,pe,Se,P.COLOR_BUFFER_BIT,P.NEAREST):tn?P.copyTexSubImage3D(dt,re,je,et,mt+Xt,Fe,Be,pe,Se):P.copyTexSubImage2D(dt,re,je,et,Fe,Be,pe,Se);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else tn?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(dt,re,je,et,mt,pe,Se,ve,st,Le,lt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(dt,re,je,et,mt,pe,Se,ve,st,lt.data):P.texSubImage3D(dt,re,je,et,mt,pe,Se,ve,st,Le,lt):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,re,je,et,pe,Se,st,Le,lt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,re,je,et,lt.width,lt.height,st,lt.data):P.texSubImage2D(P.TEXTURE_2D,re,je,et,pe,Se,st,Le,lt);P.pixelStorei(P.UNPACK_ROW_LENGTH,qe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,wi),P.pixelStorei(P.UNPACK_SKIP_ROWS,qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,_s),re===0&&F.generateMipmaps&&P.generateMipmap(dt),_e.unbindTexture()},this.initRenderTarget=function(w){xe.get(w).__webglFramebuffer===void 0&&Ge.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ge.setTextureCube(w,0):w.isData3DTexture?Ge.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ge.setTexture2DArray(w,0):Ge.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){S=0,A=0,L=null,_e.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const mu={type:"change"},Ol={type:"start"},kh={type:"end"},Rr=new lo,gu=new Nn,Wx=Math.cos(70*$r.DEG2RAD),Mt=new D,$t=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ra=1e-6;class Xx extends om{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new kn,this._lastTargetPosition=new D,this._quat=new kn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wc,this._sphericalDelta=new Wc,this._scale=1,this._panOffset=new D,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new D,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yx.bind(this),this._onPointerDown=$x.bind(this),this._onPointerUp=jx.bind(this),this._onContextMenu=ty.bind(this),this._onMouseWheel=Kx.bind(this),this._onKeyDown=Jx.bind(this),this._onTouchStart=Qx.bind(this),this._onTouchMove=ey.bind(this),this._onMouseDown=qx.bind(this),this._onMouseMove=Zx.bind(this),this._interceptControlDown=ny.bind(this),this._interceptControlUp=iy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mu),this.update(),this.state=nt.NONE}update(e=null){const t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=$t:i>Math.PI&&(i-=$t),s<-Math.PI?s+=$t:s>Math.PI&&(s-=$t),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Mt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Rr.origin.copy(this.object.position),Rr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rr.direction))<Wx?this.object.lookAt(this.target):(gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rr.intersectPlane(gu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ra||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ra||this._lastTargetPosition.distanceToSquared(this.target)>ra?(this.dispatchEvent(mu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$t/60*this.autoRotateSpeed*e:$t/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Mt.copy(s).sub(this.target);let r=Mt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function $x(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Yx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function jx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kh),this.state=nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function qx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=nt.DOLLY;break;case Yi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=nt.ROTATE}break;case Yi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Ol)}function Zx(n){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Kx(n){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(n.preventDefault(),this.dispatchEvent(Ol),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(kh))}function Jx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Qx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=nt.TOUCH_ROTATE;break;case Xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case Xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=nt.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Ol)}function ey(n){switch(this._trackPointer(n),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=nt.NONE}}function ty(n){this.enabled!==!1&&n.preventDefault()}function ny(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const sy=14739182,zi=420,_u=new D(0,0,0),ry=120,oy=80,xu=60,ay=1.25,Gi=4096,oa=.55,ly=new D(.1,.8,.6).normalize(),yu=new D(.6,.8,1).normalize(),vu=new D(-.8,-.4,.5).normalize(),ul=1024,hl=512,cy=[{cx:.26,cy:.26,radius:.11,strength:1.9},{cx:.74,cy:.2,radius:.15,strength:1.1}],uy=[.7,.76,.86],bu=[.97,.98,1],hy=[.14,.15,.17];function dy(n=ul,e=hl,t=1){const i=new Uint8ClampedArray(n*e*4);for(let s=0;s<e;s+=1){const r=1-s/Math.max(1,e-1),o=r<.5,a=o?r/.5:(r-.5)/.5,l=o?uy:bu,c=o?bu:hy;for(let u=0;u<n;u+=1){const h=n>1?u/(n-1):0;let f=0;for(const g of cy){const _=((h-g.cx)**2+(r-g.cy)**2)/g.radius**2;f+=Math.exp(-2*_)*g.strength}const d=(s*n+u)*4;for(let g=0;g<3;g+=1){const _=l[g]*(1-a)+c[g]*a;i[d+g]=Math.round(Math.min(1,Math.max(0,_*t+f*t))*255)}i[d+3]=255}}return i}const fy=1.02,py=1.04;function my(){const n=dy(),e=document.createElement("canvas");e.width=ul,e.height=hl;const t=e.getContext("2d");if(!t)throw new Error("Failed to create 2d canvas context");const i=new Uint8ClampedArray(n.length);i.set(n),t.putImageData(new ImageData(i,ul,hl),0,0);const s=new bp(e);return s.mapping=zr,s.colorSpace=Ht,s.flipY=!1,s.needsUpdate=!0,s}function Zs(n){if(n.isEmpty())return{halfSide:0,zSpan:0};const e=Math.max(Math.abs(n.min.x),Math.abs(n.max.x)),t=Math.max(Math.abs(n.min.y),Math.abs(n.max.y)),i=Math.max(Math.abs(n.min.z),Math.abs(n.max.z));return{halfSide:Math.hypot(e,t)*fy,zSpan:i*py}}class gy{renderer;scene;controls;perspectiveCamera;orthographicCamera;activeCamera;gridHelper=null;persistent=new Set;lights=[];baseLightIntensity=new WeakMap;gridSize=0;axesHelper=null;projection="perspective";environmentTexture=null;environmentReady=null;studioQuality=!0;shadowLight;keyLight;fillLight;shadowBoundsSignature=null;shadowBoundsSource=null;gridBounds;resizeObserver=null;frameHandle=0;constructor(e){this.gridBounds=e.gridBounds??{halfSide:ry,zSpan:oy},this.renderer=new Vx({canvas:e.canvas,antialias:!0,stencil:!0,preserveDrawingBuffer:!0}),this.renderer.outputColorSpace=Ht,this.renderer.toneMapping=sh,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nh,this.renderer.toneMappingExposure=1,this.scene=new sl,this.scene.background=null,this.renderer.setClearColor(sy,1),this.scene.add(new Jo(16777215,1.6));const t=new Ko(16777215,2.2);t.position.copy(yu),t.castShadow=!1,t.shadow.mapSize.set(Gi,Gi),t.shadow.bias=-5e-4,t.shadow.normalBias=.6,this.keyLight=t,this.scene.add(t),this.scene.add(t.target);const i=new Ko(14673650,.8);i.position.copy(vu),i.castShadow=!1,i.shadow.mapSize.set(Gi,Gi),i.shadow.bias=-5e-4,i.shadow.normalBias=.6,this.fillLight=i,this.scene.add(i),this.scene.add(i.target),this.lights.push(...this.scene.children.filter(r=>r instanceof Jo||r instanceof Ko));for(const r of this.lights){const o=r;this.baseLightIntensity.set(r,o.intensity??1),this.persistent.add(r)}this.brightness=1;const s=xu/2*(Math.PI/180);this.shadowLight=new Wp(16777215,0,0,s,0,0),this.shadowLight.name="shadowLight",this.shadowLight.castShadow=!1,this.shadowLight.shadow.mapSize.set(Gi,Gi),this.shadowLight.shadow.bias=-5e-4,this.shadowLight.shadow.normalBias=.6,this.scene.add(this.shadowLight),this.scene.add(this.shadowLight.target),this.persistent.add(this.shadowLight),this.persistent.add(this.shadowLight.target),this.perspectiveCamera=new Jt(45,1,.1,1e4),this.perspectiveCamera.position.set(zi*.6,zi*.6,zi*.45),this.orthographicCamera=new Dl(-1,1,1,-1,.1,1e4),this.orthographicCamera.position.copy(this.perspectiveCamera.position),this.activeCamera=this.perspectiveCamera,this.controls=new Xx(this.activeCamera,this.renderer.domElement),this.controls.target.copy(_u),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=10,this.controls.maxDistance=5e3,this.controls.update(),this.installResizeObserver(),this.applyProjection("perspective"),this.setGridVisible(e.showGrid??!0),this.setAxesVisible(e.showAxes??!1),this.setRenderQuality(!0)}installResizeObserver(){const e=()=>{const t=this.renderer.domElement.clientWidth,i=this.renderer.domElement.clientHeight;t===0||i===0||(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,i,!1),this.updateCameraFrustum(t,i),this.controls.update())};e(),this.resizeObserver=new ResizeObserver(e),this.resizeObserver.observe(this.renderer.domElement.parentElement??this.renderer.domElement)}updateCameraFrustum(e,t){const i=e/t;this.perspectiveCamera.aspect=i,this.perspectiveCamera.updateProjectionMatrix();const s=this.activeCamera.position.distanceTo(this.controls.target),r=Math.tan(this.perspectiveCamera.fov*Math.PI/360)*s,o=r*i;this.orthographicCamera.left=-o,this.orthographicCamera.right=o,this.orthographicCamera.top=r,this.orthographicCamera.bottom=-r,this.orthographicCamera.updateProjectionMatrix()}get camera(){return this.activeCamera}get currentProjection(){return this.projection}applyProjection(e){this.projection=e,this.activeCamera=e==="orthographic"?this.orthographicCamera:this.perspectiveCamera,this.controls.object=this.activeCamera,this.activeCamera.position.copy(this.perspectiveCamera.position),this.activeCamera.quaternion.copy(this.perspectiveCamera.quaternion);const t=this.renderer.domElement.clientWidth||1,i=this.renderer.domElement.clientHeight||1;this.updateCameraFrustum(t,i),this.controls.update()}toggleProjection(){return this.applyProjection(this.projection==="perspective"?"orthographic":"perspective"),this.projection}resetCamera(){this.perspectiveCamera.position.set(zi*.6,zi*.6,zi*.45),this.orthographicCamera.position.copy(this.perspectiveCamera.position),this.controls.target.copy(_u),this.controls.update()}computeGridBounds(e){return Zs(e)}setGridBounds(e){this.gridBounds=e,this.gridHelper&&this.setGridVisible(!0)}buildGrid(){const{halfSide:e}=this.gridBounds,t=e*2,i=new im(t,24,9082022,12174032);return i.name="grid",this.gridSize=t,i}setGridVisible(e){if(e){this.gridHelper&&Math.abs(this.gridSize-this.gridBounds.halfSide*2)>1e-6&&this.discardGrid(),this.gridHelper||(this.gridHelper=this.buildGrid(),this.scene.add(this.gridHelper),this.persistent.add(this.gridHelper)),this.gridHelper.visible=!0;return}this.gridHelper&&(this.gridHelper.visible=!1)}discardGrid(){this.gridHelper&&(this.scene.remove(this.gridHelper),this.persistent.delete(this.gridHelper),this.gridHelper.geometry.dispose(),this.gridHelper.material.dispose(),this.gridHelper=null)}get gridVisible(){return this.gridHelper?.visible??!1}setAxesVisible(e){if(e){if(!this.axesHelper){const t=this.gridBounds.halfSide*.16;this.axesHelper=new rm(t),this.axesHelper.name="axes",this.axesHelper.position.set(this.gridBounds.halfSide*.86,-this.gridBounds.halfSide*.86,-this.gridBounds.zSpan*.86),this.scene.add(this.axesHelper),this.persistent.add(this.axesHelper)}this.axesHelper.visible=!0;return}this.axesHelper&&(this.axesHelper.visible=!1)}get axesVisible(){return this.axesHelper?.visible??!1}brightness=1;setBrightness(e){this.brightness=e;const t=this.studioQuality?this.shadowBalanceFactor():1;for(const i of this.lights){const s=i,r=this.baseLightIntensity.get(i)??1;s.intensity=r*t*e}this.shadowLight.intensity=this.studioQuality?oa*e:0,this.scene.environmentIntensity=e,this.renderer.toneMappingExposure=1}get currentBrightness(){return this.brightness}clipBoostLight=null;setBrightnessBoost(e){this.clipBoostLight||(this.clipBoostLight=new Jo(16777215,e),this.clipBoostLight.name="clip-ambient-boost",this.keepAcrossReload(this.clipBoostLight)),this.clipBoostLight.intensity=e*this.brightness,this.clipBoostLight.visible=!0}clearBrightnessBoost(){this.clipBoostLight&&(this.clipBoostLight.visible=!1)}ensureEnvironment(){if(this.environmentReady!==null)return this.environmentReady;try{const e=my(),t=new ll(this.renderer),i=t.fromEquirectangular(e);this.environmentTexture=i.texture,this.scene.environment=this.environmentTexture,t.dispose(),e.dispose(),this.environmentReady=!0,this.refreshMaterials(),this.report("Environment texture (IBL) ready")}catch(e){this.environmentReady=!1,this.report(`⚠️ Failed to set environment texture -> using scene lights only (${e.message})`)}return this.environmentReady}refreshMaterials(){this.scene.traverse(e=>{const i=e.material;if(i)if(Array.isArray(i))for(const s of i)s.needsUpdate=!0;else i.needsUpdate=!0})}setShadowBoundsSource(e){this.shadowBoundsSource=e}shadowBalanceFactor(){let e=0;for(const t of this.lights)e+=this.baseLightIntensity.get(t)??1;return e<=0?1:Math.max(0,e-oa)/e}configureShadowLight(e=!1){if(!this.studioQuality&&!e)return;const t=this.shadowBoundsSource?.()??null;if(!t||t.isEmpty())return;const i=`${t.min.x.toFixed(3)},${t.min.y.toFixed(3)},${t.min.z.toFixed(3)},${t.max.x.toFixed(3)},${t.max.y.toFixed(3)},${t.max.z.toFixed(3)}`;if(!e&&i===this.shadowBoundsSignature)return;this.shadowBoundsSignature=i;const s=t.getCenter(new D),r=t.getBoundingSphere(new xi),o=Math.max(r.radius,1),a=xu/2*(Math.PI/180),l=o/Math.tan(a)*ay,c=s.clone().addScaledVector(ly,l);this.shadowLight.position.copy(c),this.shadowLight.target.position.copy(s),this.shadowLight.target.updateMatrixWorld(!0),this.shadowLight.shadow.camera.near=Math.max(1,l*.05),this.shadowLight.shadow.camera.far=l+o*2,this.shadowLight.shadow.camera.updateProjectionMatrix(),this.shadowLight.intensity=oa*this.brightness,this.configureDirectionalShadow(this.keyLight,s,o,yu),this.configureDirectionalShadow(this.fillLight,s,o,vu)}configureDirectionalShadow(e,t,i,s){const r=i*2;e.position.copy(t).addScaledVector(s,r),e.target.position.copy(t),e.target.updateMatrixWorld(!0);const o=e.shadow.camera;o.left=-i,o.right=i,o.top=i,o.bottom=-i,o.near=.1,o.far=r+i,o.updateProjectionMatrix()}setRenderQuality(e){this.studioQuality=e,this.ensureEnvironment(),e?(this.configureShadowLight(!0),this.shadowLight.castShadow=!0,this.keyLight.castShadow=!0,this.fillLight.castShadow=!0,this.renderer.shadowMap.enabled=!0):(this.shadowLight.castShadow=!1,this.keyLight.castShadow=!1,this.fillLight.castShadow=!1,this.renderer.shadowMap.enabled=!1,this.shadowBoundsSignature=null),this.refreshMaterials(),this.setBrightness(this.brightness),e&&(this.shadowBoundsSignature=null,this.configureShadowLight(!0))}get renderQuality(){return this.studioQuality?"Studio":"Fast"}get shadowsEnabled(){return this.renderer.shadowMap.enabled}async screenshot(){return new Promise((e,t)=>{this.renderer.render(this.scene,this.activeCamera),this.renderer.domElement.toBlob(i=>{i?e(i):t(new Error("Failed to capture the image"))},"image/png")})}add(e){this.scene.add(e)}frameObject(e){if(e.isEmpty())return;const t=e.getCenter(new D),i=e.getBoundingSphere(new xi).radius;if(!Number.isFinite(i)||i<=0)return;const s=this.perspectiveCamera.fov*Math.PI/180,r=i/Math.sin(s/2)*1.15,o=new D(.6,.6,.45).normalize();this.controls.target.copy(t),this.activeCamera.position.copy(t).addScaledVector(o,r),this.perspectiveCamera.position.copy(this.activeCamera.position),this.orthographicCamera.position.copy(this.activeCamera.position),this.controls.update(),this.updateCameraFrustum(this.renderer.domElement.clientWidth||1,this.renderer.domElement.clientHeight||1)}frameVisibleMeshes(e,t){const i=this.computeVisibleBox(e,t);return i?(this.frameObject(i),i):null}computeVisibleBox(e,t){const i=new En;let s=!1;for(const r of e){if(!t(r))continue;const o=r.geometry;if(!o)continue;o.computeBoundingBox();const a=o.boundingBox;a&&(r.updateMatrixWorld(!0),i.union(a.clone().applyMatrix4(r.matrixWorld)),s=!0)}return s?i:null}keepAcrossReload(e){this.persistent.add(e),this.scene.add(e)}clearAssembly(){for(const e of[...this.scene.children])this.persistent.has(e)||(this.scene.remove(e),e.traverse(t=>{const i=t;i.geometry?.dispose();const s=i.material;Array.isArray(s)?s.forEach(r=>r.dispose()):s?.dispose()}))}start(){const e=()=>{this.frameHandle=requestAnimationFrame(e),this.controls.update(),this.renderer.render(this.scene,this.activeCamera)};e()}stop(){this.frameHandle!==0&&(cancelAnimationFrame(this.frameHandle),this.frameHandle=0)}reporter=null;report(e){this.reporter&&this.reporter(e)}setReporter(e){this.reporter=e}dispose(){this.stop(),this.resizeObserver?.disconnect(),this.resizeObserver=null,this.controls.dispose(),this.discardGrid(),this.renderer.dispose()}describe(){return{projection:this.projection,render:this.renderQuality,shadow:this.shadowsEnabled?"On":"Off",ibl:this.environmentReady?"On":"Off",grid:this.gridVisible?"On":"Off",axes:this.axesVisible?"On":"Off",gridHalfSide:Math.round(this.gridBounds.halfSide*100)/100,gridZSpan:Math.round(this.gridBounds.zSpan*100)/100,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles}}}const Wt=Object.freeze({fm:100,Rm:2.5,n:6,Rd:20,p:5,output_pins:3,clearance:.1,powerout_bearing_height:5,outerring_bearing_height:5,sleeve_outer:10.5,sleeve_inner:6,sleeve_hight:5,offset_outer_pins:7,e:2,N:10,d:10,housing_pins:3,D:80,outer_housing_radius:54,inner_housing_radius:0,plate_thickness:5,spacer_ring:1,input_shaft_length:60,radius_one:14,radius_two:24,flange_high01:5,flange_high02:5,input_inner_bearing:8,input_hight_bearing:5,offset_drive_outer:12,offset_drive_high01:5,offset_drive_high02:4,wide_or:30,wide_hight:5,end_plate_hight:10,hole_count:6,hole_radius:2.6,bolt_circle:49.38,fp_out_hole_count:6,fp_out_hole_pitch:18,fp_out_hole_radius:2.5,fp_out_thickness:5,fp_out_r14_depth:2,fpmi_r24:24,fpmi_r2:2,fpmi_bcd:8.5,fpmi_hole_count:6,fpmi_thickness:5,fpmi_high01:3,fpmi_high02:2,num_plates:1,mode_fig:0,pin_fig:0,show_output_pins:!0,machine_mode:"CNC Milling Endmill Profile (G01/G00 Z-Axis)",feed_rate:500,cut_depth:-1.5,step_down:.5,tool_type:"4mm Carbide Endmill (General Profile)",spindle_speed:4500}),zh=Object.freeze({brightness:1,explode:0}),_y=new Set(["N","fp_out_hole_count","fpmi_hole_count","hole_count","mode_fig","n","num_plates","pin_fig","spindle_speed"]),xy=new Set(["show_output_pins"]);function Bl(n){const e={...Wt};for(const[t,i]of Object.entries(n)){if(!(t in Wt)){e[t]=i;continue}e[t]=yy(t,i)}return e.n=Math.max(1,Math.trunc(Number(e.n))),e.N=Math.max(2,Math.trunc(Number(e.N))),e.num_plates=Math.min(10,Math.max(1,Math.trunc(Number(e.num_plates)))),e.mode_fig=Math.trunc(Number(e.mode_fig))%2,e.pin_fig=Math.min(2,Math.max(0,Math.trunc(Number(e.pin_fig)))),e}function yy(n,e){if(_y.has(n))return Math.trunc(Number(e));if(xy.has(n))return typeof e=="boolean"?e:!["0","false","no"].includes(String(e).toLowerCase());const t=Wt[n];return typeof t=="number"?Number(e):typeof t=="string"?String(e):e}const dl=[{key:"AL_6061",label:"Aluminium 6061-T6",densityGcm3:2.7,color:"#C9CED3",metallic:.85,roughness:.35},{key:"STEEL_4140",label:"Alloy Steel 4140",densityGcm3:7.85,color:"#8C9298",metallic:1,roughness:.45},{key:"STEEL_52100",label:"Bearing Steel 52100 (hardened)",densityGcm3:7.81,color:"#AEB4BA",metallic:1,roughness:.2},{key:"BRONZE_C932",label:"Bronze C932 (bearing)",densityGcm3:8.8,color:"#B08D57",metallic:.9,roughness:.4},{key:"POM_C",label:"POM-C (Delrin)",densityGcm3:1.41,color:"#EAE6DA",metallic:0,roughness:.55},{key:"NBR_70",label:"NBR rubber 70 Shore A",densityGcm3:1.2,color:"#38383A",metallic:0,roughness:.9},{key:"STEEL_12_9",label:"Alloy Steel 12.9 (black oxide)",densityGcm3:7.85,color:"#5A5F66",metallic:1,roughness:.55}],Gh=Object.fromEntries(dl.map(n=>[n.key,n])),os=[{key:"input",label:"โมดูลอินพุต (Input)",labelEn:"Module: Input",order:10},{key:"reduction",label:"โมดูลลดความเร็ว (Reduction)",labelEn:"Module: Reduction",order:20},{key:"output",label:"โมดูลเอาต์พุต (Output)",labelEn:"Module: Output",order:30},{key:"aux",label:"ส่วนประกอบเสริม (Auxiliary)",labelEn:"Module: Auxiliary",order:40}],Hh=Object.fromEntries(os.map(n=>[n.key,n])),vi=[{key:"housing",label:"Outer Housing (Housing - Pins)",geomAttr:"outer_housing",color:"#33D6D6",resolvedColor:"#33D6D6",material:"AL_6061",module:"reduction",link:"base",explodeLayer:1,matesWith:[],opacity:1,smoothShading:!0,exportName:"outer_housing",activeInPinFig:[0],clipGroup:"housing",optional:!1},{key:"housing_with_pins",label:"Outer Housing (Housing + Pins)",geomAttr:"outer_housing_with_pins",color:"#33D6D6",resolvedColor:"#33D6D6",material:"AL_6061",module:"reduction",link:"base",explodeLayer:1,matesWith:["plates"],opacity:1,smoothShading:!0,exportName:"outer_housing_with_pins",activeInPinFig:[2],clipGroup:"housing_with_pins",optional:!1},{key:"housing_lobed",label:"Outer Housing Lobe (NonePin)",geomAttr:"outer_housing_lobed",color:"#D3588B",resolvedColor:"#D3588B",material:"STEEL_52100",module:"reduction",link:"base",explodeLayer:1,matesWith:[],opacity:1,smoothShading:!0,exportName:"outer_housing_lobed",activeInPinFig:[1],clipGroup:"nonepin",optional:!1},{key:"housing_pins",label:"Housing Ring Pins",geomAttr:"housing_pins_array",color:"#B10DDA",resolvedColor:"#B10DDA",material:"STEEL_52100",module:"reduction",link:"base",explodeLayer:-2.5,matesWith:[],opacity:1,smoothShading:!0,exportName:"housing_pins",activeInPinFig:[0],clipGroup:"pins_only",optional:!1},{key:"out_pins",label:"Output Pins",geomAttr:"output_pins",color:"#4B48E0",resolvedColor:"#4B48E0",material:"STEEL_52100",module:"output",link:"output",explodeLayer:3,matesWith:[],opacity:1,smoothShading:!0,exportName:"output_pins",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"shaft",label:"Input Shaft",geomAttr:"input_shaft",color:"#5F5FEC",resolvedColor:"#5F5FEC",material:"STEEL_4140",module:"input",link:"input",explodeLayer:-2.5,matesWith:[],opacity:1,smoothShading:!0,exportName:"input_shaft",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"bearing_outer_ring",label:"Bearing Outer Ring",geomAttr:"bearing_outer_ring",color:"#C9EB92",resolvedColor:"#C9EB92",material:"STEEL_52100",module:"input",link:"input",explodeLayer:-1.6,matesWith:[],opacity:1,smoothShading:!0,exportName:"bearing_outer_ring",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"bearing_balls",label:"Bearing Balls",geomAttr:"bearing_balls",color:"#FFD24A",resolvedColor:"#FFD24A",material:"STEEL_52100",module:"input",link:"input",explodeLayer:-2,matesWith:[],opacity:1,smoothShading:!0,exportName:"bearing_balls",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"bearing_inner_ring",label:"Bearing Inner Ring",geomAttr:"bearing_inner_ring",color:"#8FD3F4",resolvedColor:"#8FD3F4",material:"STEEL_52100",module:"input",link:"input",explodeLayer:-2.4,matesWith:[],opacity:1,smoothShading:!0,exportName:"bearing_inner_ring",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"eccentric_sleeves",label:"Eccentric Sleeves (Drive)",geomAttr:"eccentric_sleeves",color:"#FF00D4",resolvedColor:"#FF00D4",material:"STEEL_52100",module:"input",link:"input",explodeLayer:-3,matesWith:[],opacity:1,smoothShading:!0,exportName:"eccentric_sleeves",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"output_flange",label:"Output Flange",geomAttr:"output_flange",color:null,resolvedColor:"#C9CED3",material:"AL_6061",module:"output",link:"output",explodeLayer:4.5,matesWith:[],opacity:1,smoothShading:!0,exportName:"output_flange",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"input_bearing_outer_ring",label:"Input Shaft Bearing Outer Ring",geomAttr:"input_bearing_outer_ring",color:"#C9EB92",resolvedColor:"#C9EB92",material:"STEEL_52100",module:"input",link:"base",explodeLayer:-3.3,matesWith:[],opacity:1,smoothShading:!0,exportName:"input_bearing_outer_ring",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"input_bearing_balls",label:"Input Shaft Bearing Balls",geomAttr:"input_bearing_balls",color:"#FFD24A",resolvedColor:"#FFD24A",material:"STEEL_52100",module:"input",link:"base",explodeLayer:-3.5,matesWith:[],opacity:1,smoothShading:!0,exportName:"input_bearing_balls",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"input_bearing_inner_ring",label:"Input Shaft Bearing Inner Ring",geomAttr:"input_bearing_inner_ring",color:"#8FD3F4",resolvedColor:"#8FD3F4",material:"STEEL_52100",module:"input",link:"base",explodeLayer:-3.7,matesWith:[],opacity:1,smoothShading:!0,exportName:"input_bearing_inner_ring",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"output_bearing_outer_ring",label:"Output Bearing Outer Ring",geomAttr:"output_bearing_outer_ring",color:"#C9EB92",resolvedColor:"#C9EB92",material:"STEEL_52100",module:"output",link:"base",explodeLayer:3.3,matesWith:[],opacity:1,smoothShading:!0,exportName:"output_bearing_outer_ring",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"output_bearing_balls",label:"Output Bearing Balls",geomAttr:"output_bearing_balls",color:"#FFD24A",resolvedColor:"#FFD24A",material:"STEEL_52100",module:"output",link:"base",explodeLayer:3.5,matesWith:[],opacity:1,smoothShading:!0,exportName:"output_bearing_balls",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"output_bearing_inner_ring",label:"Output Bearing Inner Ring",geomAttr:"output_bearing_inner_ring",color:"#8FD3F4",resolvedColor:"#8FD3F4",material:"STEEL_52100",module:"output",link:"base",explodeLayer:3.7,matesWith:[],opacity:1,smoothShading:!0,exportName:"output_bearing_inner_ring",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"offset_drive1",label:"Offset Drive 1",geomAttr:"offset_drive1",color:"#90EE90",resolvedColor:"#90EE90",material:"STEEL_52100",module:"input",link:"input",explodeLayer:4,matesWith:[],opacity:1,smoothShading:!0,exportName:"offset_drive1",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"offset_drive2",label:"Offset Drive 2",geomAttr:"offset_drive2",color:"#90EE90",resolvedColor:"#90EE90",material:"STEEL_52100",module:"input",link:"input",explodeLayer:-4,matesWith:[],opacity:1,smoothShading:!0,exportName:"offset_drive2",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"wide_bearing_top_outer_ring",label:"Wide Bearing Top Outer Ring",geomAttr:"wide_bearing_top_outer_ring",color:"#FFFFE0",resolvedColor:"#FFFFE0",material:"STEEL_52100",module:"output",link:"base",explodeLayer:4.8,matesWith:[],opacity:1,smoothShading:!0,exportName:"wide_bearing_top_outer_ring",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"wide_bearing_top_balls",label:"Wide Bearing Top Balls",geomAttr:"wide_bearing_top_balls",color:"#FFD24A",resolvedColor:"#FFD24A",material:"STEEL_52100",module:"output",link:"base",explodeLayer:5,matesWith:[],opacity:1,smoothShading:!0,exportName:"wide_bearing_top_balls",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"wide_bearing_top_inner_ring",label:"Wide Bearing Top Inner Ring",geomAttr:"wide_bearing_top_inner_ring",color:"#8FD3F4",resolvedColor:"#8FD3F4",material:"STEEL_52100",module:"output",link:"base",explodeLayer:5.2,matesWith:[],opacity:1,smoothShading:!0,exportName:"wide_bearing_top_inner_ring",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"wide_bearing_bottom_outer_ring",label:"Wide Bearing Bottom Outer Ring",geomAttr:"wide_bearing_bottom_outer_ring",color:"#FFFFE0",resolvedColor:"#FFFFE0",material:"STEEL_52100",module:"input",link:"base",explodeLayer:-4.8,matesWith:[],opacity:1,smoothShading:!0,exportName:"wide_bearing_bottom_outer_ring",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"wide_bearing_bottom_balls",label:"Wide Bearing Bottom Balls",geomAttr:"wide_bearing_bottom_balls",color:"#FFD24A",resolvedColor:"#FFD24A",material:"STEEL_52100",module:"input",link:"base",explodeLayer:-5,matesWith:[],opacity:1,smoothShading:!0,exportName:"wide_bearing_bottom_balls",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"wide_bearing_bottom_inner_ring",label:"Wide Bearing Bottom Inner Ring",geomAttr:"wide_bearing_bottom_inner_ring",color:"#8FD3F4",resolvedColor:"#8FD3F4",material:"STEEL_52100",module:"input",link:"base",explodeLayer:-5.2,matesWith:[],opacity:1,smoothShading:!0,exportName:"wide_bearing_bottom_inner_ring",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"housing_bolts",label:"Housing Bolts (6x)",geomAttr:"housing_bolts",color:null,resolvedColor:"#5A5F66",material:"STEEL_12_9",module:"aux",link:"base",explodeLayer:2.5,matesWith:[],opacity:1,smoothShading:!0,exportName:"housing_bolts",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"ring_pin_spacers",label:"Ring Pin Spacers",geomAttr:"ring_pin_spacers",color:"#DD31B2",resolvedColor:"#DD31B2",material:"STEEL_4140",module:"reduction",link:"base",explodeLayer:3.15,matesWith:[],opacity:1,smoothShading:!0,exportName:"ring_pin_spacers",activeInPinFig:[0],clipGroup:"common",optional:!0},{key:"ring_pin_bearing_outer_ring",label:"Ring Pin Bearing Outer Ring",geomAttr:"ring_pin_bearing_outer_ring",color:"#FFFFE0",resolvedColor:"#FFFFE0",material:"STEEL_52100",module:"reduction",link:"base",explodeLayer:1.5,matesWith:["plates"],opacity:1,smoothShading:!0,exportName:"ring_pin_bearing_outer_ring",activeInPinFig:[0],clipGroup:"common",optional:!0},{key:"ring_pin_bearing_balls",label:"Ring Pin Bearing Balls",geomAttr:"ring_pin_bearing_balls",color:"#FFD24A",resolvedColor:"#FFD24A",material:"STEEL_52100",module:"reduction",link:"base",explodeLayer:1.7,matesWith:[],opacity:1,smoothShading:!0,exportName:"ring_pin_bearing_balls",activeInPinFig:[0],clipGroup:"common",optional:!0},{key:"ring_pin_bearing_inner_ring",label:"Ring Pin Bearing Inner Ring",geomAttr:"ring_pin_bearing_inner_ring",color:"#8FD3F4",resolvedColor:"#8FD3F4",material:"STEEL_52100",module:"reduction",link:"base",explodeLayer:1.9,matesWith:[],opacity:1,smoothShading:!0,exportName:"ring_pin_bearing_inner_ring",activeInPinFig:[0],clipGroup:"common",optional:!0},{key:"out_pin_spacers",label:"Output Pin Spacers",geomAttr:"out_pin_spacers",color:null,resolvedColor:"#8C9298",material:"STEEL_4140",module:"output",link:"base",explodeLayer:1.5,matesWith:[],opacity:1,smoothShading:!0,exportName:"out_pin_spacers",activeInPinFig:null,clipGroup:"common",optional:!0},{key:"output_pin_bearing_outer_ring",label:"Output Pin Bearing Outer Ring",geomAttr:"output_pin_bearing_outer_ring",color:"#FFFFE0",resolvedColor:"#FFFFE0",material:"STEEL_52100",module:"output",link:"base",explodeLayer:2,matesWith:["plates"],opacity:1,smoothShading:!0,exportName:"output_pin_bearing_outer_ring",activeInPinFig:null,clipGroup:"common",optional:!0},{key:"output_pin_bearing_balls",label:"Output Pin Bearing Balls",geomAttr:"output_pin_bearing_balls",color:"#FFD24A",resolvedColor:"#FFD24A",material:"STEEL_52100",module:"output",link:"base",explodeLayer:2.2,matesWith:[],opacity:1,smoothShading:!0,exportName:"output_pin_bearing_balls",activeInPinFig:null,clipGroup:"common",optional:!0},{key:"output_pin_bearing_inner_ring",label:"Output Pin Bearing Inner Ring",geomAttr:"output_pin_bearing_inner_ring",color:"#8FD3F4",resolvedColor:"#8FD3F4",material:"STEEL_52100",module:"output",link:"base",explodeLayer:2.4,matesWith:[],opacity:1,smoothShading:!0,exportName:"output_pin_bearing_inner_ring",activeInPinFig:null,clipGroup:"common",optional:!0},{key:"flange_plate_input",label:"Flange Plate — Input",geomAttr:"flange_plate_input",color:null,resolvedColor:"#C9CED3",material:"AL_6061",module:"input",link:"base",explodeLayer:-4.5,matesWith:[],opacity:1,smoothShading:!0,exportName:"flange_plate_input",activeInPinFig:null,clipGroup:"common",optional:!0},{key:"flange_plate_output",label:"Flange Plate — Output",geomAttr:"flange_plate_output",color:"#90EE90",resolvedColor:"#90EE90",material:"AL_6061",module:"output",link:"output",explodeLayer:6.5,matesWith:[],opacity:1,smoothShading:!0,exportName:"flange_plate_output",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"flange_plate_motor_input",label:"Flange Plate — Motor Input",geomAttr:"flange_plate_motor_input",color:"#F7F706",resolvedColor:"#F7F706",material:"AL_6061",module:"input",link:"input",explodeLayer:-6.5,matesWith:[],opacity:1,smoothShading:!0,exportName:"flange_plate_motor_input",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"end_plate_output",label:"End Plate — Output",geomAttr:"end_plate_output",color:null,resolvedColor:"#C9CED3",material:"AL_6061",module:"output",link:"base",explodeLayer:5.5,matesWith:[],opacity:1,smoothShading:!0,exportName:"end_plate_output",activeInPinFig:null,clipGroup:"common",optional:!1},{key:"end_plate_input",label:"End Plate — Input",geomAttr:"end_plate_input",color:null,resolvedColor:"#C9CED3",material:"AL_6061",module:"input",link:"base",explodeLayer:-5.5,matesWith:[],opacity:1,smoothShading:!0,exportName:"end_plate_input",activeInPinFig:null,clipGroup:"common",optional:!1}],Vh=Object.fromEntries(vi.map(n=>[n.key,n])),pi={key:"plates",label:"Cycloid Disc Plate",geomAttr:"cycloid_solids",color:null,resolvedColor:"#AEB4BA",material:"STEEL_52100",module:"reduction",link:"disc",explodeLayer:-1,matesWith:[],opacity:1,smoothShading:!0,exportName:null,activeInPinFig:null,clipGroup:"common",optional:!1},bi="plates",Mu=["#FF0000","#0000FF","#00FF00","#FFFF00","#FF00FF","#00FFFF","#FFA500","#800080","#A52A2A","#7FFF00"];function ho(n){return Mu[n%Mu.length]}function yn(n){return n===bi?pi:Vh[n]}function Eu(n){return yn(n)?.explodeLayer??0}function Vs(n,e){return n.activeInPinFig===null||n.activeInPinFig.includes(e)}function kl(n){const e=vi.filter(t=>t.module===n);return n===pi.module&&e.push(pi),e}const vy=["housing","housing_with_pins","housing_lobed","housing_pins"],by=new Set(["flange_plate_output","out_pin_spacers","output_bearing_outer_ring","output_flange","output_pin_bearing_balls","output_pin_bearing_inner_ring","output_pin_bearing_outer_ring"]),My=new Set(["housing_bolts","ring_pin_bearing_balls","ring_pin_bearing_inner_ring","ring_pin_bearing_outer_ring","ring_pin_spacers"]),Ey=new Set(["end_plate_input","end_plate_output","wide_bearing_bottom_outer_ring","wide_bearing_top_outer_ring"]),Sy=new Set(["flange_plate_input","input_bearing_outer_ring","wide_bearing_bottom_inner_ring","wide_bearing_top_inner_ring"]),wy=new Set(["bearing_balls","bearing_inner_ring","bearing_outer_ring","eccentric_sleeves","flange_plate_motor_input","input_bearing_inner_ring","offset_drive1","offset_drive2","output_bearing_inner_ring"]),Ty=new Set(["input_bearing_balls","output_bearing_balls","wide_bearing_bottom_balls","wide_bearing_top_balls"]),Ay=.05,Ry=Ay/2,fo=Math.max(8,Math.ceil(2*Math.PI/Ry));function ot(n,e=fo){const t=[],i=2*Math.PI/e;for(let s=0;s<e;s+=1){const r=s*i;t.push({x:n*Math.cos(r),y:n*Math.sin(r)})}return t}function Wh(n){let e=0;for(let t=0;t<n.length;t+=1){const i=n[t],s=n[(t+1)%n.length];e+=i.x*s.y-s.x*i.y}return e/2}function Cy(n){return Wh(n)>0}function Py(n,e){return Cy(n)===e?[...n]:[...n].reverse()}function ln(n,e,t){return n.map(i=>({x:i.x+e,y:i.y+t}))}const aa=1e-9,la=1e-6,Hi=1e-6,Es=1e-6,ca=1e-9,Cr=1e-12;function Su(n,e,t){const i=2*Math.PI/fo,s=Math.max(1,Math.ceil(Math.abs(t)/i)),r=[];for(let o=0;o<=s;o+=1){const a=(e+t*o/s)%(2*Math.PI);r.push({x:n.x+n.radius*Math.cos(a),y:n.y+n.radius*Math.sin(a)})}return r}function Ly(n,e){let t=(n-e)%(2*Math.PI);return t<0&&(t+=2*Math.PI),t}function Iy(n){const e=[];for(const t of n){const i=e[e.length-1];if(i!==void 0){const s=t.x-i.x,r=t.y-i.y;if(s*s+r*r<=Cr*Cr)continue}e.push(t)}for(;e.length>1;){const t=e[0],i=e[e.length-1],s=t.x-i.x,r=t.y-i.y;if(s*s+r*r<=Cr*Cr)e.pop();else break}return e}function ua(n,e){const t=[];for(const h of n){if(!(h.radius>0))return null;t.some(d=>Math.abs(d.x-h.x)<=Es&&Math.abs(d.y-h.y)<=Es&&Math.abs(d.radius-h.radius)<=Es)||t.push(h)}const i=new Map,s=(h,f)=>{const d=`${Math.round(h/Es)}:${Math.round(f/Es)}`,g=i.get(d);if(g!==void 0)return g;const _=i.size;return i.set(d,_),_},r=t.map(()=>[]);for(let h=0;h<t.length;h+=1)for(let f=h+1;f<t.length;f+=1){const d=t[h],g=t[f],_=g.x-d.x,m=g.y-d.y,p=Math.hypot(_,m);if(p<aa)continue;const y=d.radius+g.radius,v=Math.abs(d.radius-g.radius);if(p>y+aa||p<v-aa)continue;if(y-p<=la||p-v<=la){const M=g.radius<=d.radius||y-p<=la?1:-1,C=d.x+M*(d.radius/p)*_,N=d.y+M*(d.radius/p)*m,k=s(C,N);r[h].push({angle:Math.atan2(N-d.y,C-d.x),node:k}),r[f].push({angle:Math.atan2(N-g.y,C-g.x),node:k});continue}const x=(p*p+d.radius*d.radius-g.radius*g.radius)/(2*p),T=Math.sqrt(Math.max(0,d.radius*d.radius-x*x)),S=d.x+x/p*_,A=d.y+x/p*m,L=-m/p*T,E=_/p*T;for(const M of[1,-1]){const C=S+M*L,N=A+M*E,k=s(C,N);r[h].push({angle:Math.atan2(N-d.y,C-d.x),node:k}),r[f].push({angle:Math.atan2(N-g.y,C-g.x),node:k})}}const o=[],a=[];for(let h=0;h<t.length;h+=1){const f=t[h],d=[...r[h]].sort((m,p)=>m.angle-p.angle),g=[];for(const m of d){const p=g[g.length-1];p!==void 0&&(p.node===m.node||Math.abs(p.angle-m.angle)<=ca)||g.push(m)}if(g.length===0){const m=f.x+f.radius,p=f.y,y=e(m-Hi,p),v=e(m+Hi,p);if(y===v)continue;const x=Su(f,0,2*Math.PI);a.push({points:y?x:[...x].reverse(),ccw:y});continue}const _=(m,p,y,v)=>{const x=Su(f,y,v),T=x[0],S=x[1],A=x.length-1,L=x[A],E=x[A-1];let M=Math.atan2(S.y-T.y,S.x-T.x);S.x===T.x&&S.y===T.y&&(M=y+(v>0?Math.PI/2:-Math.PI/2));let C=Math.atan2(L.y-E.y,L.x-E.x);L.x===E.x&&L.y===E.y&&(C=y+v+(v>0?Math.PI/2:-Math.PI/2)),o.push({circle:h,startNode:m,endNode:p,points:x,leaveAngle:M,arriveAngle:C})};for(let m=0;m<g.length;m+=1){const p=g[m],y=g[(m+1)%g.length];let v=y.angle-p.angle;m===g.length-1&&(v+=2*Math.PI);const x=p.angle+v/2,T=Math.cos(x),S=Math.sin(x),A=f.x+f.radius*T,L=f.y+f.radius*S,E=e(A-Hi*T,L-Hi*S),M=e(A+Hi*T,L+Hi*S);E!==M&&(E?_(p.node,y.node,p.angle,v):_(y.node,p.node,p.angle+v,-v))}}const l=o.map(h=>({arc:h,used:!1})),c=new Map;for(const h of l){const f=c.get(h.arc.startNode);f!==void 0?f.push(h):c.set(h.arc.startNode,[h])}const u=[];for(const h of l){if(h.used)continue;const f=[],d=h.arc.startNode;let g=h,_=0;for(;;){g.used=!0;for(const T of g.arc.points)f.push(T);if(g.arc.endNode===d)break;const p=(c.get(g.arc.endNode)??[]).filter(T=>!T.used);if(p.length===0)return null;const y=g.arc.arriveAngle+Math.PI;let v=null,x=1/0;for(const T of p){const S=Ly(y,T.arc.leaveAngle),A=v!==null&&T.arc.circle===g.arc.circle&&Math.abs(S-x)<=ca;(v===null||S<x-ca||A)&&(v=T,x=S)}if(g=v,_+=1,_>l.length)return null}const m=Iy(f);u.push({points:m,ccw:Wh(m)>0})}for(const h of a)u.push(h);return u}function wn(n,e){const t=[],i=[],s=[];let r=n;for(const o of e){const a=Ft(o.contour,!0),l=(o.holes??[]).map(h=>Ft(h,!1)),c=r,u=r+o.thickness;r=u;for(const h of[a,...l])Ws(t,i,s,h,c,u);mi(t,i,s,a,l,u,1),mi(t,i,s,a,l,c,-1)}return{positions:Float32Array.from(t),normals:Float32Array.from(i),indices:Uint32Array.from(s),vertexCount:t.length/3,triangleCount:s.length/3}}function Xh(n,e){const t=[],i=[],s=[],r=[n];for(const u of e)r.push(r[r.length-1]+u.thickness);const o=[];for(const u of["outer","inner"]){const h=u==="inner";let f=null,d=n,g=n;for(let _=0;_<e.length;_+=1){const m=e[_][u];if(h&&m<=0){f=null;continue}f!==null&&m===f||(f!==null&&o.push({radius:f,zBottom:d,zTop:g,hole:h}),f=m,d=r[_]),g=r[_+1]}f!==null&&o.push({radius:f,zBottom:d,zTop:g,hole:h})}for(const u of o)Ws(t,i,s,Ft(ot(u.radius),!u.hole),u.zBottom,u.zTop);const a=(u,h,f,d)=>{if(u<=0||u<=h)return;const g=Ft(ot(u),!0),_=h>0?[Ft(ot(h),!1)]:[];mi(t,i,s,g,_,f,d)},l=e[0];a(l.outer,l.inner,r[0],-1);const c=e[e.length-1];a(c.outer,c.inner,r[r.length-1],1);for(let u=0;u+1<e.length;u+=1){const h=e[u],f=e[u+1],d=r[u+1],g=Array.from(new Set([h.inner,h.outer,f.inner,f.outer])).sort((_,m)=>_-m);for(let _=0;_+1<g.length;_+=1){const m=g[_],p=g[_+1];if(p<=m)continue;const y=(m+p)/2,v=y>=h.inner&&y<=h.outer,x=y>=f.inner&&y<=f.outer;v!==x&&a(p,m,d,x?-1:1)}}return{positions:Float32Array.from(t),normals:Float32Array.from(i),indices:Uint32Array.from(s),vertexCount:t.length/3,triangleCount:s.length/3}}function Ei(n,e,t,i=0){const s=[];for(let r=0;r<n;r+=1){const o=2*r*Math.PI/n+i;s.push({x:e*Math.cos(o),y:e*Math.sin(o),radius:t})}return s}const Et=1e-9;function $h(n,e){return Math.abs(n.x-e.x)<=Et&&Math.abs(n.y-e.y)<=Et&&Math.abs(n.radius-e.radius)<=Et}function Dy(n,e){if($h(n,e))return"same";const t=Math.hypot(n.x-e.x,n.y-e.y);return t>n.radius+e.radius+Et?"none":t+n.radius<=e.radius-Et?"bContainsA":t+e.radius<=n.radius-Et?"aContainsB":"partial"}function Yh(n){if(n.outer<=0)return!1;for(const e of n.holes)if(e.radius<=0||Math.hypot(e.x,e.y)+e.radius>n.outer-Et)return!1;for(let e=0;e<n.holes.length;e+=1)for(let t=e+1;t<n.holes.length;t+=1){const i=n.holes[e],s=n.holes[t];if(Math.hypot(i.x-s.x,i.y-s.y)<=i.radius+s.radius+Et)return!1}return!0}function Kr(n,e,t){if(Math.hypot(n.x,n.y)+n.radius>e-Et)return null;const i=[];for(const s of t){const r=Dy(n,s);if(r==="partial")return null;if(r==="same"||r==="bContainsA")return{contained:[],empty:!0};r==="aContainsB"&&i.push(s)}return{contained:i,empty:!1}}function Ny(n){for(const e of n)if(!Yh(e))return!1;for(let e=0;e+1<n.length;e+=1){const t=n[e],i=n[e+1];if(Math.abs(t.outer-i.outer)>Et){const s=Math.min(t.outer,i.outer),r=Math.max(t.outer,i.outer);for(const o of[...t.holes,...i.holes]){const a=Math.hypot(o.x,o.y);if(a+o.radius>s+Et&&a-o.radius<r-Et)return!1}}for(const s of i.holes)if(Kr(s,t.outer,t.holes)===null)return!1;for(const s of t.holes)if(Kr(s,i.outer,i.holes)===null)return!1}return!0}function Jr(n,e){let t=!1;for(let i=0,s=e.length-1;i<e.length;s=i,i+=1){const r=e[i],o=e[s];r.y>n.y!=o.y>n.y&&n.x<(o.x-r.x)*(n.y-r.y)/(o.y-r.y)+r.x&&(t=!t)}return t}function Ks(n,e){const t=e.filter(c=>c.thickness>1e-12);if(t.length===0)return null;if(!Ny(t))return Fy(n,t);for(const c of t)if(!Yh(c))return null;const i=[],s=[],r=[],o=[n];for(const c of t)o.push(o[o.length-1]+c.thickness);{let c=null,u=n,h=n;const f=()=>{c!==null&&Ws(i,s,r,Ft(ot(c),!0),u,h)};for(let d=0;d<t.length;d+=1){const g=t[d].outer;c!==null&&Math.abs(g-c)<=Et||(f(),c=g,u=o[d]),h=o[d+1]}f()}{const c=h=>{Ws(i,s,r,Ft(ln(ot(h.hole.radius),h.hole.x,h.hole.y),!1),h.zStart,h.zEnd)};let u=[];for(let h=0;h<t.length;h+=1){const f=t[h],d=[];for(const g of f.holes){const _=u.find(m=>$h(m.hole,g));_?(_.zEnd=o[h+1],d.push(_)):d.push({hole:g,zStart:o[h],zEnd:o[h+1]})}for(const g of u)d.includes(g)||c(g);u=d}for(const h of u)c(h)}const a=(c,u,h)=>{const f=Ft(ot(c.outer),!0),d=c.holes.map(g=>Ft(ln(ot(g.radius),g.x,g.y),!1));mi(i,s,r,f,d,u,h)};a(t[0],o[0],-1),a(t[t.length-1],o[o.length-1],1);const l=(c,u,h,f)=>{const d=Ft(ln(ot(c.radius),c.x,c.y),!0),g=u.map(_=>Ft(ln(ot(_.radius),_.x,_.y),!1));mi(i,s,r,d,g,h,f)};for(let c=0;c+1<t.length;c+=1){const u=t[c],h=t[c+1],f=o[c+1];if(Math.abs(u.outer-h.outer)>Et){const d=Math.min(u.outer,h.outer),g=Math.max(u.outer,h.outer);for(const m of[...u.holes,...h.holes]){const p=Math.hypot(m.x,m.y);if(p+m.radius>d+Et&&p-m.radius<g-Et)return null}const _=u.outer>h.outer?1:-1;mi(i,s,r,Ft(ot(g),!0),[Ft(ot(d),!1)],f,_)}for(const d of h.holes){const g=Kr(d,u.outer,u.holes);if(g===null)return null;g.empty||l(d,g.contained,f,1)}for(const d of u.holes){const g=Kr(d,h.outer,h.holes);if(g===null)return null;g.empty||l(d,g.contained,f,-1)}}return{positions:Float32Array.from(i),normals:Float32Array.from(s),indices:Uint32Array.from(r),vertexCount:i.length/3,triangleCount:r.length/3}}function Fy(n,e){for(const f of e){if(f.outer<=0)return null;for(const d of f.holes)if(d.radius<=0)return null}const t=[],i=(f,d,g)=>{t.some(m=>Math.abs(m.x-f)<=Et&&Math.abs(m.y-d)<=Et&&Math.abs(m.radius-g)<=Et)||t.push({x:f,y:d,radius:g})};for(const f of e){i(0,0,f.outer);for(const d of f.holes)i(d.x,d.y,d.radius)}const s=e.map(f=>(d,g)=>{if(Math.hypot(d,g)>f.outer)return!1;for(const _ of f.holes)if(Math.hypot(d-_.x,g-_.y)<=_.radius)return!1;return!0}),r=[];for(const f of s){const d=ua(t,f);if(d===null)return null;r.push(d)}const o=[n];for(const f of e)o.push(o[o.length-1]+f.thickness);const a=[],l=[],c=[];let u=!1;const h=(f,d,g)=>{const _=f.filter(p=>p.ccw),m=f.filter(p=>!p.ccw);for(const p of _){const y=Ft(p.points,!0),v=m.filter(x=>Uy(x.points,p.points)).map(x=>Ft(x.points,!1));mi(a,l,c,y,v,d,g),u=!0}};for(let f=0;f<e.length;f+=1)for(const d of r[f])Ws(a,l,c,Ft(d.points,d.ccw),o[f],o[f+1]),u=!0;h(r[0],o[0],-1),h(r[r.length-1],o[o.length-1],1);for(let f=1;f<e.length;f+=1){const d=s[f-1],g=s[f],_=o[f],m=ua(t,(y,v)=>d(y,v)&&!g(y,v));if(m===null)return null;h(m,_,1);const p=ua(t,(y,v)=>g(y,v)&&!d(y,v));if(p===null)return null;h(p,_,-1)}return u?{positions:Float32Array.from(a),normals:Float32Array.from(l),indices:Uint32Array.from(c),vertexCount:a.length/3,triangleCount:c.length/3}:null}function Uy(n,e){const t=[0,Math.floor(n.length/3),Math.floor(2*n.length/3)];let i=0;for(const s of t)Jr(n[s],e)&&(i+=1);return i*2>t.length}function Bt(n){let e=0,t=0;for(const l of n)e+=l.vertexCount,t+=l.indices.length;const i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Uint32Array(t);let o=0,a=0;for(const l of n){i.set(l.positions,o*3),s.set(l.normals,o*3);for(let c=0;c<l.indices.length;c+=1)r[a+c]=l.indices[c]+o;o+=l.vertexCount,a+=l.indices.length}return{positions:i,normals:s,indices:r,vertexCount:e,triangleCount:t/3}}function Oy(n){const{positions:e}=n;let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0;l<e.length;l+=3){const c=e[l],u=e[l+1],h=e[l+2];c<t&&(t=c),u<i&&(i=u),h<s&&(s=h),c>r&&(r=c),u>o&&(o=u),h>a&&(a=h)}return{min:[t,i,s],max:[r,o,a]}}function Ft(n,e){const t=[];for(const i of n){const s=t[t.length-1];s!==void 0&&s.x===i.x&&s.y===i.y||t.push({x:i.x,y:i.y})}for(;t.length>1;){const i=t[0],s=t[t.length-1];if(i.x===s.x&&i.y===s.y)t.pop();else break}return Py(t,e)}function Ws(n,e,t,i,s,r){const o=i.length;if(o<3)return;const a=n.length/3,l=[],c=[],u=[];for(let h=0;h<o;h+=1){const f=i[h],d=i[(h+1)%o],g=d.x-f.x,_=d.y-f.y,m=Math.hypot(g,_);u.push(m),m>0?(l.push(_/m),c.push(-g/m)):(l.push(0),c.push(0))}for(let h=0;h<o;h+=1){const f=(h-1+o)%o,d=u[f],g=u[h];let _=l[f]*d+l[h]*g,m=c[f]*d+c[h]*g;const p=Math.hypot(_,m);p>0?(_/=p,m/=p):(_=l[h],m=c[h]);const y=i[h];n.push(y.x,y.y,s,y.x,y.y,r),e.push(_,m,0,_,m,0)}for(let h=0;h<o;h+=1){const f=(h+1)%o,d=a+h*2,g=a+h*2+1,_=a+f*2,m=a+f*2+1;t.push(d,_,m,d,m,g)}}function mi(n,e,t,i,s,r,o){if(i.length<3)return;const a=i.map(f=>new Oe(f.x,f.y)),l=s.map(f=>f.map(d=>new Oe(d.x,d.y))),c=Ll.triangulateShape(a,l),u=n.length/3,h=[];for(const f of a)h.push(f);for(const f of l)for(const d of f)h.push(d);for(const f of h)n.push(f.x,f.y,r),e.push(0,0,o);for(const f of c){let d=f[0],g=f[1],_=f[2];const m=h[d],p=h[g],y=h[_];if(((p.x-m.x)*(y.y-m.y)-(p.y-m.y)*(y.x-m.x))*o<0){const x=g;g=_,_=x}t.push(u+d,u+g,u+_)}}function oe(n,e,t){const i=n[e];if(i==null)return t;const s=typeof i=="number"?i:Number(i);return Number.isFinite(s)?s:t}function ge(n,e){const t=n[e];if(t==null)return null;const i=typeof t=="number"?t:Number(t);return!Number.isFinite(i)||i===0?null:i}function fs(n){return n==null?!1:typeof n=="boolean"?n:typeof n=="number"?n!==0:n.length>0}function Lt(n){const e=Math.max(1,Math.trunc(oe(n,"num_plates",1))),t=oe(n,"plate_thickness",5),i=oe(n,"spacer_ring",1),s=e*t+(e-1)*i,r=i;return{numPlates:e,plateThickness:t,spacerRing:i,totalStackHeight:s,endGap:r,inputZ0:-s/2-r,outputZ0:s/2+r}}function jh(n,e){return e*(n.plateThickness+n.spacerRing)-n.totalStackHeight/2}function qh(n,e){return n*(2*Math.PI/e)}function By(n){const e=ge(n,"offset_drive_high01")??5,t=ge(n,"offset_drive_high02")??4,i=ge(n,"fpmi_thickness")??5,{inputZ0:s,outputZ0:r}=Lt(n);return{zEnd:r+e+t,zStart:s-e-t-i}}function Zh(n){const e=oe(n,"plate_thickness",5),t=ge(n,"input_hight_bearing")??Math.max(6,e),i=Math.max(5,e),s=2,r=Lt(n).inputZ0-t,o=r-i;return{zBearing:r,tBearing:t,zAdapter:o,tAdapter:i,tSeal:s}}function Js(n){const e=oe(n,"Rd",20),t=oe(n,"p",5),i=oe(n,"plate_thickness",5),s=oe(n,"Rm",2.5)+oe(n,"e",2)+3,r=e+t+2,o=ge(n,"radius_two")??e+t-1,a=ge(n,"flange_high01")??Math.max(5,i),l=ge(n,"flange_high02")??Math.max(5,i),c=ge(n,"radius_one")??(ge(n,"sleeve_outer")??s)+1;return{bottomOuterRadius:r,topOuterRadius:o,bottomHeight:a,topHeight:l,boreRadius:c,thickness:a+l}}function zl(n){const e=ge(n,"wide_hight")??5;return Lt(n).outputZ0+Js(n).bottomHeight+e}function ky(n){const e=oe(n,"Rd",20),t=oe(n,"p",5),i=oe(n,"Rm",2.5),s=oe(n,"plate_thickness",5),r=ge(n,"flange_high01")??Math.max(5,s),o=ge(n,"flange_high02")??Math.max(5,s),a=i+oe(n,"e",2)+3,l=ge(n,"radius_one")??Math.max((ge(n,"sleeve_outer")??a)+2,i+10+1);return{innerOuterRadius:e+t+2,outerOuterRadius:ge(n,"radius_two")??e+t-1,innerHeight:r,outerHeight:o,boreRadius:l,pinCount:Math.max(0,Math.trunc(oe(n,"n",6))),pinBc:e,pinRadius:ge(n,"output_pins")??t,zStart:Lt(n).inputZ0-r-o,thickness:r+o}}function Gl(n){const e=oe(n,"Rd",20),t=oe(n,"p",5),i=oe(n,"outer_housing_radius",54),s=Math.max(i*.62,e+t+3),r=Math.max(6,i-s),o=Math.max(1,r*.1),a=(r-o)/2,l=s+a+o,c=(l+i)/2,u=Math.min(2.5,Math.max(1.5,(i-l)*.28)),h=Math.trunc(ge(n,"hole_count")??6),f=ge(n,"bolt_circle")??c,d=ge(n,"hole_radius")??u+.1;return{count:h,boltBc:f,holeRadius:d,screwRadius:d-.1}}function ps(n,e,t){if(n<=e||t<=1e-6)return null;const i=n-e,s=(n+e)/2,r=Math.min(.53*i,.55*t);if(r<=1e-6)return null;const o=r/2,a=.52*r,l=.55*o,c=Math.floor(2*Math.PI*s/(1.8*r)),u=Math.max(3,Math.min(64,c));return u*1.8*r>2*Math.PI*s+1e-9?null:{outerRadius:n,innerRadius:e,width:t,pitchRadius:s,ballRadius:o,grooveRadius:a,outerShoulder:s+l,innerShoulder:s-l,ballCount:u}}function Hl(n){const e=oe(n,"Rm",2.5),t=oe(n,"e",2),i=ge(n,"sleeve_outer")??e+t+3,s=ge(n,"sleeve_inner")??e+3,r=ge(n,"sleeve_hight")??5;return ps(i,s,r)}function Vl(n,e){const t=Lt(n),i=oe(n,"e",2),s=[];for(let r=0;r<t.numPlates;r+=1){const o=qh(r,t.numPlates),a=jh(t,r)+(t.plateThickness-e)/2;s.push({cx:i*Math.cos(o),cy:i*Math.sin(o),zStart:a,zMid:a+e/2,phase:o})}return s}function zy(n,e,t){const i=fo,s=2*Math.PI/i,r=[],o=[],a=[];for(const l of n){if(l.length<2)continue;const c=r.length/3;for(const u of l)for(let h=0;h<i;h+=1){const f=h*s,d=Math.cos(f),g=Math.sin(f);r.push(e+u.r*d,t+u.r*g,u.z),o.push(u.nr*d,u.nr*g,u.nz)}for(let u=0;u+1<l.length;u+=1)for(let h=0;h<i;h+=1){const f=(h+1)%i,d=c+u*i+h,g=c+u*i+f,_=c+(u+1)*i+h,m=c+(u+1)*i+f;a.push(d,_,m,d,m,g)}}return{positions:Float32Array.from(r),normals:Float32Array.from(o),indices:Uint32Array.from(a),vertexCount:r.length/3,triangleCount:a.length/3}}const wu=24;function Gy(n){const e=Math.min(1,(n.outerShoulder-n.pitchRadius)/n.grooveRadius),t=Math.acos(e);return{phiMax:t,axialHalf:n.grooveRadius*Math.sin(t)}}function Hy(n,e,t){const{pitchRadius:i,grooveRadius:s,outerShoulder:r,innerShoulder:o}=n,a=e+n.width/2,{phiMax:l,axialHalf:c}=Gy(n),u=[];for(let d=0;d<=wu;d+=1){const g=-l+2*l*d/wu,_=Math.cos(g),m=Math.sin(g);t?u.push({r:i+s*_,z:a+s*m,nr:-_,nz:-m}):u.push({r:i-s*_,z:a+s*m,nr:_,nz:-m})}if(t){const d=r,g=n.outerRadius;return[[{r:d,z:e+n.width,nr:0,nz:1},{r:g,z:e+n.width,nr:0,nz:1}],[{r:g,z:e+n.width,nr:1,nz:0},{r:g,z:e,nr:1,nz:0}],[{r:g,z:e,nr:0,nz:-1},{r:d,z:e,nr:0,nz:-1}],[{r:d,z:e,nr:-1,nz:0},{r:d,z:a-c,nr:-1,nz:0}],u,[{r:d,z:a+c,nr:-1,nz:0},{r:d,z:e+n.width,nr:-1,nz:0}]]}const h=o,f=n.innerRadius;return[[{r:f,z:e,nr:-1,nz:0},{r:f,z:e+n.width,nr:-1,nz:0}],[{r:f,z:e+n.width,nr:0,nz:1},{r:h,z:e+n.width,nr:0,nz:1}],[{r:h,z:e+n.width,nr:1,nz:0},{r:h,z:a+c,nr:1,nz:0}],u.slice().reverse(),[{r:h,z:a-c,nr:1,nz:0},{r:h,z:e,nr:1,nz:0}],[{r:h,z:e,nr:0,nz:-1},{r:f,z:e,nr:0,nz:-1}]]}function en(n,e,t,i=0,s=0){return zy(Hy(n,e,t),i,s)}function Vy(n){const e=Hl(n);if(e===null)return null;const t=Vl(n,e.width).map(i=>en(e,i.zStart,!0,i.cx,i.cy));return Bt(t)}function Wy(n){const e=Hl(n);if(e===null)return null;const t=Vl(n,e.width).map(i=>en(e,i.zStart,!1,i.cx,i.cy));return Bt(t)}const mn=96,Is=48;function Xy(){const n=mn/(2*Math.PI)*Math.sin(2*Math.PI/mn);let e=0,t=0,i=1;for(let s=1;s<=Is;s+=1){const r=s*Math.PI/Is,o=Math.sin(r),a=Math.cos(r);e+=(i-a)*(t*t+t*o+o*o),t=o,i=a}return n*(e*Math.PI)/3}const $y=Math.cbrt(4*Math.PI/(3*Xy()));function Yy(n,e,t,i){const s=n*$y,r=[],o=[],a=[],l=2*Math.PI/mn,c=d=>{const g=Math.sin(d),_=Math.cos(d),m=r.length/3;for(let p=0;p<mn;p+=1){const y=p*l,v=Math.cos(y),x=Math.sin(y);r.push(e+s*g*v,t+s*g*x,i+s*_),o.push(g*v,g*x,_)}return m},u=r.length/3;r.push(e,t,i+s),o.push(0,0,1);let h=c(Math.PI/Is);for(let d=0;d<mn;d+=1){const g=(d+1)%mn;a.push(u,h+d,h+g)}for(let d=1;d+1<Is;d+=1){const g=c((d+1)*Math.PI/Is);for(let _=0;_<mn;_+=1){const m=(_+1)%mn,p=h+_,y=h+m,v=g+_,x=g+m;a.push(p,v,x,p,x,y)}h=g}const f=r.length/3;r.push(e,t,i-s),o.push(0,0,-1);for(let d=0;d<mn;d+=1){const g=(d+1)%mn;a.push(h+d,f,h+g)}return{positions:Float32Array.from(r),normals:Float32Array.from(o),indices:Uint32Array.from(a),vertexCount:r.length/3,triangleCount:a.length/3}}function ei(n,e,t=0,i=0,s=0){const r=e+n.width/2,o=[];for(let a=0;a<n.ballCount;a+=1){const l=t+2*Math.PI*a/n.ballCount;o.push(Yy(n.ballRadius,i+n.pitchRadius*Math.cos(l),s+n.pitchRadius*Math.sin(l),r))}return Bt(o)}function jy(n){const e=Hl(n);if(e===null)return null;const t=Vl(n,e.width).map(i=>ei(e,i.zStart,i.phase,i.cx,i.cy));return Bt(t)}function po(n){const e=oe(n,"Rm",2.5),t=ge(n,"radius_one")??e+10,i=ge(n,"input_inner_bearing")??e,{zBearing:s,tBearing:r}=Zh(n),o=ps(t,i,r);return o===null?null:{dims:o,zStart:s}}function mo(n){const e=oe(n,"Rm",2.5),t=Js(n).boreRadius,i=ge(n,"input_inner_bearing")??e,{tBearing:s}=Zh(n),r=ps(t,i,s);return r===null?null:{dims:r,zStart:Lt(n).outputZ0}}function qy(n){const e=po(n);return e===null?null:en(e.dims,e.zStart,!0)}function Zy(n){const e=po(n);return e===null?null:ei(e.dims,e.zStart)}function Ky(n){const e=po(n);return e===null?null:en(e.dims,e.zStart,!1)}function Jy(n){const e=mo(n);return e===null?null:en(e.dims,e.zStart,!0)}function Qy(n){const e=mo(n);return e===null?null:ei(e.dims,e.zStart)}function ev(n){const e=mo(n);return e===null?null:en(e.dims,e.zStart,!1)}function Qr(n,e){const t=oe(n,"Rd",20),i=oe(n,"p",5),s=ge(n,"wide_or")??30,r=ge(n,"wide_hight")??5,o=Math.min(ge(n,"radius_two")??t+i-1,s-1),a=ps(s,o,r);if(a===null)return null;const l=Lt(n).outputZ0+Js(n).bottomHeight;return{dims:a,zStart:e?l:-(l+a.width)}}function go(n,e,t){const i=Qr(n,e);return i===null?null:en(i.dims,i.zStart,t)}function Kh(n,e){const t=Qr(n,e);return t===null?null:ei(t.dims,t.zStart)}function tv(n){return go(n,!0,!0)}function nv(n){return Kh(n,!0)}function iv(n){return go(n,!0,!1)}function sv(n){return go(n,!1,!0)}function rv(n){return Kh(n,!1)}function ov(n){return go(n,!1,!1)}const av=0,Tu=2;function Wl(n){const e=n.totalStackHeight/2,t=n.plateThickness,i=n.spacerRing,s=Math.max(.1,i-.2),r=[{kind:"spacer",zStart:-e-s,zEnd:-e}];for(let o=0;o<n.numPlates;o+=1){const a=o*(t+i)-e;r.push({kind:"bearing",zStart:a,zEnd:a+t}),o<n.numPlates-1&&r.push({kind:"spacer",zStart:a+t,zEnd:a+t+i})}return r.push({kind:"spacer",zStart:e,zEnd:e+s}),r}function Jh(n,e){const t={spacers:null,bearings:null},i=Math.trunc(e.count);if(i<=0||e.pinRadius<=0)return t;const s=e.pinRadius+av;let r=s+Tu;e.spacerOuterRadius&&(r=e.spacerOuterRadius),r<=s&&(r=s+Tu);const o=Math.max(e.bearingRadius,s),a=e.includeBearings!==!1;if(a&&o<=s)return t;const l=Wl(Lt(n)),c=[],u=[];for(let h=0;h<i;h+=1){const f=2*h*Math.PI/i,d=e.pitchRadius*Math.cos(f),g=e.pitchRadius*Math.sin(f);for(const _ of l){if(_.kind==="bearing"&&!a)continue;let m=_.zEnd-_.zStart;if(_.kind==="bearing"&&e.bearingHeight!==null&&(m=Math.min(e.bearingHeight,m)),m<=1e-6)continue;const p=_.kind==="bearing"?o:r,y=wn(_.zStart,[{contour:ln(ot(p),d,g),holes:[ln(ot(s),d,g)],thickness:m}]);(_.kind==="bearing"?u:c).push(y)}}return{spacers:c.length>0?Bt(c):null,bearings:u.length>0?Bt(u):null}}function lv(n){const e=oe(n,"d",10)/2;return Jh(n,{count:oe(n,"N",10),pitchRadius:oe(n,"D",80)/2,bearingRadius:e,pinRadius:ge(n,"housing_pins")??e,bearingHeight:ge(n,"outerring_bearing_height"),spacerOuterRadius:e-.5,includeBearings:!1})}function cv(n){if(!fs(n.show_output_pins))return{spacers:null,bearings:null};const e=oe(n,"p",5);return Jh(n,{count:oe(n,"n",6),pitchRadius:oe(n,"Rd",20),bearingRadius:e,pinRadius:ge(n,"output_pins")??e,bearingHeight:ge(n,"powerout_bearing_height"),spacerOuterRadius:null,includeBearings:!1})}function uv(n){return lv(n).spacers}function ms(n){const e=Lt(n),t=oe(n,"d",10)/2,i=ge(n,"housing_pins")??t,s=Math.max(t,i),r=ge(n,"outerring_bearing_height");let o=e.plateThickness;r&&(o=Math.min(r,o));const a=ps(s,i,o);if(a===null)return null;const l=Math.trunc(oe(n,"N",10)),c=oe(n,"D",80)/2;if(l<=0||c<=0)return null;const u=[];for(let h=0;h<l;h+=1){const f=2*h*Math.PI/l,d=c*Math.cos(f),g=c*Math.sin(f);for(const _ of Wl(e))_.kind==="bearing"&&(Math.min(a.width,_.zEnd-_.zStart)<=1e-6||u.push({pinIndex:h,cx:d,cy:g,zStart:_.zStart}))}return u.length>0?{dims:a,placements:u,pinCount:l,pitchRadius:c,rollerRadius:t}:null}function hv(n){const e=ms(n);return e===null?null:Bt(e.placements.map(t=>en(e.dims,t.zStart,!0,t.cx,t.cy)))}function dv(n){const e=ms(n);return e===null?null:Bt(e.placements.map(t=>ei(e.dims,t.zStart,0,t.cx,t.cy)))}function fv(n){const e=ms(n);return e===null?null:e.placements.map(t=>en(e.dims,t.zStart,!0))}function pv(n){const e=ms(n);return e===null?null:e.placements.map(t=>ei(e.dims,t.zStart,0))}function mv(n){const e=ms(n);return e===null?null:Bt(e.placements.map(t=>en(e.dims,t.zStart,!1,t.cx,t.cy)))}function gv(n){return cv(n).spacers}function gs(n){if(!fs(n.show_output_pins))return null;const e=oe(n,"p",5),t=ge(n,"output_pins")??e,i=Math.max(e,t),s=Lt(n),r=ge(n,"powerout_bearing_height");let o=s.plateThickness;r&&(o=Math.min(r,o));const a=ps(i,t,o);if(a===null)return null;const l=Math.trunc(oe(n,"n",6)),c=oe(n,"Rd",20);if(l<=0||c<=0)return null;const u=[];for(let h=0;h<l;h+=1){const f=2*h*Math.PI/l,d=c*Math.cos(f),g=c*Math.sin(f);for(const _ of Wl(s))_.kind==="bearing"&&(Math.min(a.width,_.zEnd-_.zStart)<=1e-6||u.push({pinIndex:h,cx:d,cy:g,zStart:_.zStart}))}return u.length>0?{dims:a,placements:u,pinCount:l,pitchRadius:c,outerRadius:i}:null}function _v(n){const e=gs(n);return e===null?null:Bt(e.placements.map(t=>en(e.dims,t.zStart,!0,t.cx,t.cy)))}function xv(n){const e=gs(n);return e===null?null:Bt(e.placements.map(t=>ei(e.dims,t.zStart,0,t.cx,t.cy)))}function yv(n){const e=gs(n);return e===null?null:Bt(e.placements.map(t=>en(e.dims,t.zStart,!1,t.cx,t.cy)))}function vv(n){const e=gs(n);return e===null?null:e.placements.map(t=>en(e.dims,t.zStart,!0))}function bv(n){const e=gs(n);return e===null?null:e.placements.map(t=>ei(e.dims,t.zStart,0))}const Mv=33,Ev=100,Sv="bearing_rollers",Qh="ring_pin_bearing_outer_ring",Xl="ring_pin_bearing_balls",ed="output_pin_bearing_outer_ring",$l="output_pin_bearing_balls",td=new Set([Qh,Xl]),nd=new Set([ed,$l]),wv=new Set([...td,...nd]),Vi={x:0,y:0,z:0,rotZ:0};function fl(n){const e=/^plates\[(\d+)\]$/.exec(n);return e?Number(e[1]):null}function pl(n){const e=/^([^[]+)\[(\d+)\]$/.exec(n);return!e||!wv.has(e[1])?null:Number(e[2])}function id(n){const e=n.indexOf("[");return e>0?n.slice(0,e):n}function Yn(n,e){const t=n[e];return typeof t=="number"?t:Number(Wt[e]??0)}function Tv(n,e,t){return n*e+(n-1)*t}const gn=4096;function Av(n){const e=ms(n);if(e===null||e.pinCount<2)return null;const{pinCount:t,pitchRadius:i,dims:s,placements:r}=e,o=Yn(n,"e"),a=s.outerRadius,l=a*(t-1);if(!(l>1e-9)||!Number.isFinite(o))return null;const c=t*o,u=y=>(Math.hypot(i-c*Math.cos(y),c*Math.sin(y))-a)/l,h=2*Math.PI/gn,f=new Float64Array(gn+1);let d=u(0);for(let y=1;y<=gn;y+=1){const v=u(y*h);f[y]=f[y-1]+.5*(d+v)*h,d=v}const g=f[gn]/(2*Math.PI),_=new Float64Array(gn+1),m=new Float64Array(gn+1);for(let y=0;y<=gn;y+=1)_[y]=f[y]-y*h*g,m[y]=u(y*h)-g;m[gn]=m[0];const p=[];for(let y=0;y<t;y+=1){const v=2*Math.PI*y/t;p.push((t-1)*v%(2*Math.PI))}return{pinCount:t,pitchRadius:i,rollerRadius:a,cageRatio:(s.pitchRadius+s.ballRadius)/(2*s.pitchRadius),placements:r,u0:p,meanSlope:g,table:_,derivative:m}}function Au(n,e){const t=2*Math.PI/gn;let i=e%(2*Math.PI);i<0&&(i+=2*Math.PI);const s=i/t,r=Math.min(gn-1,Math.floor(s)),o=s-r,a=o*o,l=a*o,c=2*l-3*a+1,u=l-2*a+o,h=-2*l+3*a,f=l-a,d=r+1;return c*n.table[r]+u*t*n.derivative[r]+h*n.table[d]+f*t*n.derivative[d]}function Rv(n,e,t){const i=n.u0[e]??0;return t*n.meanSlope+Au(n,i+t)-Au(n,i)}function eo(n){const e=n??Wt,t=Yn(e,"num_plates"),i=Yn(e,"plate_thickness"),s=Yn(e,"spacer_ring"),r=Math.max(2,Yn(e,"N")),o=-1/(r-1),a=1/r,l=new Map,c=(g,_,m,p,y,v)=>{if(_===null)return;const{pitchRadius:x,ballRadius:T}=_.dims;l.set(g,{innerContact:x-T,outerContact:x+T,pitchRadius:x,innerSpeedMode1:m,outerSpeedMode1:p,innerSpeedMode2:y,outerSpeedMode2:v})};c("input_bearing_balls",po(e),1,0,1,o),c("output_bearing_balls",mo(e),1,0,1,o),c("wide_bearing_top_balls",Qr(e,!0),0,a,o,0),c("wide_bearing_bottom_balls",Qr(e,!1),0,a,o,0);const u=new Map,h=Av(e);h!==null&&(u.set(Qh,h),u.set(Xl,h));const f=new Map,d=gs(e);if(d!==null&&d.outerRadius>1e-9){const{pitchRadius:g,ballRadius:_}=d.dims,m={outputPinCount:d.pinCount,pitchRadius:d.pitchRadius,outerRadius:d.outerRadius,eccentricity:Yn(e,"e"),cageRatio:(g+_)/(2*g),placements:d.placements};f.set(ed,m),f.set($l,m)}return{framesPerRevolution:Yn(e,"fm"),eccentricity:Yn(e,"e"),pinCount:r,plateCount:t,plateThickness:i,spacerRing:s,totalStackHeight:Tv(t,i,s),explodeSpacing:Ev,bearingCages:l,ringPinBearings:u,outputPinBearings:f}}function Cv(n){const e=id(n);return Eu(e==="housing_pins"?"housing":e)}function Br(n,e,t){return e?e*n.explodeSpacing*Cv(t):0}function to(n,e,t){const i=id(n);if(i===Sv)return Vi;const{framesPerRevolution:s,eccentricity:r,pinCount:o}=e,a=t.modeFig===0,l=s===0?0:2*Math.PI*t.frame/s,c=fl(n);if(i===bi&&c!==null){const d=c*(2*Math.PI/Math.max(1,e.plateCount)),g=l+d,_=c*(e.plateThickness+e.spacerRing)-e.totalStackHeight/2+Br(e,t.explode,bi);return{x:r*Math.cos(g),y:r*Math.sin(g),z:_,rotZ:a?-d/(o-1):-g/(o-1)}}const u=Br(e,t.explode,i),h=a?3*Math.PI/(o-1)-Math.PI/3:-l/(o-1)+3*Math.PI/(o-1)-Math.PI/3;if(td.has(i)){const d=a?l/o:0,g=pl(n),_=e.ringPinBearings.get(i);if(g===null)return _?{x:0,y:0,z:u,rotZ:d}:Vi;const m=_?.placements[g];if(!_||!m)return Vi;const p=a?(_.pinCount-1)/_.pinCount:1,y=Rv(_,m.pinIndex,p*l),v=i===Xl?_.cageRatio*y:y,x=Math.cos(d),T=Math.sin(d);return{x:m.cx*x-m.cy*T,y:m.cx*T+m.cy*x,z:u,rotZ:d+v}}if(nd.has(i)){const d=e.outputPinBearings.get(i);if(!d)return Vi;const g=pl(n);if(g===null)return{x:0,y:0,z:u,rotZ:h};const _=d.placements[g];if(!_)return Vi;const m=a?1:o/(o-1),p=-(d.eccentricity/d.outerRadius)*m*l,y=i===$l?d.cageRatio*p:p,v=Math.cos(h),x=Math.sin(h);return{x:_.cx*v-_.cy*x,y:_.cx*x+_.cy*v,z:u,rotZ:h+y}}if(Ty.has(i)){const d=e.bearingCages.get(i);if(!d)return Vi;const g=a?d.innerSpeedMode1:d.innerSpeedMode2,_=a?d.outerSpeedMode1:d.outerSpeedMode2,m=l*(g*d.innerContact+_*d.outerContact)/(2*d.pitchRadius);return{x:0,y:0,z:u,rotZ:m}}if(i==="shaft")return{x:0,y:0,z:u,rotZ:l};if(wy.has(i))return{x:0,y:0,z:u,rotZ:l};const f=a?l/o:0;return vy.includes(i)?{x:0,y:0,z:Br(e,t.explode,"housing"),rotZ:f}:My.has(i)||Ey.has(i)?{x:0,y:0,z:u,rotZ:f}:i==="out_pins"?{x:0,y:0,z:u,rotZ:h}:by.has(i)?{x:0,y:0,z:u,rotZ:h}:Sy.has(i)?{x:0,y:0,z:u,rotZ:a?0:h}:{x:0,y:0,z:u,rotZ:0}}class Pv{geometry;onFrameApplied;intervalMs;timer=null;state={modeFig:0,frame:0,explode:0,running:!1};constructor(e=eo(),t={}){this.geometry=e,this.onFrameApplied=t.onFrameApplied,this.intervalMs=t.intervalMs??Mv}get currentGeometry(){return this.geometry}setGeometry(e){this.geometry=e}setModeFig(e){this.state.modeFig=Math.trunc(e)%2,this.applyTo(null)}setFrame(e){this.state.frame=e,this.applyTo(null)}setExplode(e){this.state.explode=e,this.applyTo(null)}play(){this.state.running=!0,this.timer===null&&(this.timer=setInterval(()=>{this.state.frame+=1,this.applyTo(this.targets)},this.intervalMs))}pause(){this.state.running=!1,this.stopTimer()}stop(){this.state.running=!1,this.stopTimer(),this.state.frame=0,this.applyTo(this.targets)}step(e){this.state.frame+=e,this.applyTo(this.targets)}stopTimer(){this.timer!==null&&(clearInterval(this.timer),this.timer=null)}targets=null;bind(e){this.targets=e,this.applyTo(e)}applyTo(e){const t=e??this.targets;if(t){const{modeFig:i,frame:s,explode:r}=this.state;for(const[o,a]of t){const l=to(o,this.geometry,{modeFig:i,frame:s,explode:r});a.position.set(l.x,l.y,l.z),a.rotation.z=l.rotZ}}this.onFrameApplied?.()}dispose(){this.stopTimer(),this.targets=null}}const sd=.2,rd=2.5,Lv=zh.brightness??1,ml=0,od=1,Iv=.3,Dv=new Set(["housing","housing_with_pins","housing_lobed","housing_pins"]),Nv=.45,Fv=30;function ad(n,e=Nv){if(!n.startsWith("#"))return n;const t=n.slice(1);return`#${[0,2,4].map(r=>parseInt(t.slice(r,r+2),16)).map(r=>Math.max(0,Math.min(255,Math.round(r*e)))).map(r=>r.toString(16).padStart(2,"0").toUpperCase()).join("")}`}function In(n){const e=n.indexOf("[");return e>0?n.slice(0,e):n}class Uv{scene;assembly=null;edgeGroup=new fi;edgeGroupBuilt=!1;edgeObjects=new Map;mainActorsVisible=!0;state={brightness:Lv,explode:zh.explode??0,showEdges:!1,xray:!1,pinFig:0,partVisible:{},moduleVisible:Object.fromEntries(os.map(e=>[e.key,!0]))};kinematics;constructor(e){this.scene=e,this.scene.setShadowBoundsSource(()=>this.visibleBox()),this.kinematics=new Pv(eo(),{onFrameApplied:()=>{this.syncEdgeTransforms(),this.scene.configureShadowLight()}}),this.kinematics.setExplode(this.state.explode),this.edgeGroup.name="edges",this.scene.keepAcrossReload(this.edgeGroup),this.scene.setBrightness(this.state.brightness)}attach(e){this.assembly=e,this.clearEdges(),this.state.partVisible={};for(const t of e.meshes.keys())this.state.partVisible[In(t)]=!0;this.applyAll(),this.kinematics.bind(e.meshes),this.scene.configureShadowLight(!0)}get assemblyGroup(){return this.assembly?.group??null}frameVisible(){return this.assembly?this.scene.frameVisibleMeshes(this.assembly.meshes.values(),e=>e.visible):null}visibleBox(){return this.assembly?this.scene.computeVisibleBox(this.assembly.meshes.values(),e=>e.visible):null}plateIndexOf(e){const t=/\[(\d+)\]$/.exec(e);return t?Number(t[1]):0}get loadedKeys(){return this.assembly?[...new Set([...this.assembly.meshes.keys()].map(In))]:[]}setBrightness(e){this.state.brightness=Math.min(rd,Math.max(sd,e)),this.scene.setBrightness(this.state.brightness)}setExplode(e){this.state.explode=Math.min(od,Math.max(ml,e)),this.kinematics.setExplode(this.state.explode)}explodeOffsetOf(e){return Br(this.kinematics.currentGeometry,this.state.explode,e)}get modeFig(){return this.kinematics.state.modeFig}get frame(){return this.kinematics.state.frame}get playing(){return this.kinematics.state.running}setModeFig(e){this.kinematics.setModeFig(e)}setFrame(e){this.kinematics.setFrame(e)}setParameters(e){this.kinematics.setGeometry(eo(e)),this.kinematics.setExplode(this.state.explode)}setFramesPerRevolution(e){const t=this.kinematics.currentGeometry;this.kinematics.setGeometry({...t,framesPerRevolution:e})}get framesPerRevolution(){return this.kinematics.currentGeometry.framesPerRevolution}setPartVisible(e,t){this.state.partVisible[In(e)]=t,this.applyVisibility()}setModuleVisible(e,t){this.state.moduleVisible[e]=t,this.applyVisibility()}setAllPartsVisible(e){if(this.state.partVisible={},!e)for(const t of this.loadedKeys)this.state.partVisible[t]=!1;this.applyVisibility()}isVisible(e){const t=In(e),i=yn(t);return i&&!Vs(i,this.state.pinFig)||i&&this.state.moduleVisible[i.module]===!1?!1:this.state.partVisible[t]!==!1}applyVisibility(){if(this.assembly){for(const[e,t]of this.assembly.meshes)t.visible=this.isVisible(e);for(const[e,t]of this.edgeObjects)t.visible=this.state.showEdges&&this.isVisible(e);this.scene.configureShadowLight(),this.visibilityListener?.()}}visibilityListener=null;setVisibilityListener(e){this.visibilityListener=e}setMainActorsVisible(e){this.mainActorsVisible=e,this.assembly&&(this.assembly.group.visible=e),this.edgeGroup.visible=e&&this.state.showEdges}setEdgesVisible(e){this.state.showEdges=e,e&&!this.edgeGroupBuilt&&this.buildEdges(),this.edgeGroup.visible=e&&this.mainActorsVisible,this.applyVisibility()}clearEdges(){for(const e of this.edgeObjects.values())e.geometry.dispose(),e.material.dispose(),this.edgeGroup.remove(e);this.edgeObjects.clear(),this.edgeGroupBuilt=!1}buildEdges(){if(!this.assembly)return;const e=performance.now();let t=0;for(const[i,s]of this.assembly.meshes){const r=s;if(!r.geometry)continue;const o=In(i)===bi?ho(this.plateIndexOf(i)):yn(In(i))?.resolvedColor??"#B4B2A9",a=new Rh(r.geometry,Fv),l=new co(a,new hs({color:ad(o),linewidth:2}));l.name=`edges:${i}`,l.visible=this.state.showEdges&&this.isVisible(i),this.edgeGroup.add(l),this.edgeObjects.set(i,l),t+=a.getAttribute("position").count/2}this.edgeGroupBuilt=!0,this.syncEdgeTransforms(),this.scene.report(`Built outline edges: ${this.edgeObjects.size} parts · ${Math.round(t).toLocaleString("en-US")} segments · ${Math.round(performance.now()-e)} ms`)}syncEdgeTransforms(){if(!(!this.assembly||this.edgeObjects.size===0))for(const[e,t]of this.edgeObjects){const i=this.assembly.meshes.get(e);i&&(t.position.copy(i.position),t.rotation.copy(i.rotation))}}setXray(e){this.state.xray=e,this.applyXray()}applyXray(){if(this.assembly)for(const[e,t]of this.assembly.meshes){const s=t.material;if(!(!s||Array.isArray(s))){if(this.state.xray&&Dv.has(In(e)))s.transparent=!0,s.opacity=Iv,s.depthWrite=!1;else{const r=yn(In(e))?.opacity??1;s.opacity=r,s.transparent=r<1,s.depthWrite=!0}s.needsUpdate=!0}}}setPinFig(e){this.state.pinFig=e,this.assembly&&(this.state.partVisible={},this.applyVisibility())}applyAll(){this.kinematics.setExplode(this.state.explode),this.applyVisibility(),this.applyXray(),this.state.showEdges&&!this.edgeGroupBuilt&&this.buildEdges(),this.edgeGroup.visible=this.state.showEdges&&this.mainActorsVisible}unavailableKeys(){const e=new Set(this.loadedKeys);return vi.filter(t=>!e.has(t.key)).map(t=>t.key)}isAvailableInPinFig(e){const t=yn(In(e));return t===void 0||Vs(t,this.state.pinFig)}tree(){const e=new Set(this.loadedKeys);return os.map(t=>({module:t,parts:kl(t.key).map(i=>({key:i.key,label:i.label,available:e.has(i.key)&&this.isAvailableInPinFig(i.key)}))}))}}class bn{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),bn.nextNameID=bn.nextNameID||0,this.$name.id=`lil-gui-name-${++bn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ov extends bn{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function gl(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Bv={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:gl,toHexString:gl},Xs={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},kv={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const i=Xs.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return Xs.toHexString(s)}},zv={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=Xs.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return Xs.toHexString(s)}},Gv=[Bv,Xs,kv,zv];function Hv(n){return Gv.find(e=>e.match(n))}class Vv extends bn{constructor(e,t,i,s){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Hv(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=gl(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ha extends bn{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Wv extends bn{constructor(e,t,i,s,r,o){super(e,t,i,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},i=y=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+y),this.$input.value=this.getValue())},s=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),i(this._step*this._normalizeMouseWheel(y)))};let o=!1,a,l,c,u,h;const f=5,d=y=>{a=y.clientX,l=c=y.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=y=>{if(o){const v=y.clientX-a,x=y.clientY-l;Math.abs(x)>f?(y.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>f&&_()}if(!o){const v=y.clientY-c;h-=v*this._step*this._arrowKeyMultiplier(y),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=y.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,y,v,x,T)=>(p-y)/(v-y)*(T-x)+x,t=p=>{const y=this.$slider.getBoundingClientRect();let v=e(p,y.left,y.right,this._min,this._max);this._snapClampSetValue(v)},i=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=p=>{if(o){const y=p.touches[0].clientX-a,v=p.touches[0].clientY-l;Math.abs(y)>Math.abs(v)?c(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else p.preventDefault(),t(p.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},d=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const v=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(d,g)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Xv extends bn{constructor(e,t,i,s){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class $v extends bn{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Yv=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function jv(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Ru=!1;class Yl{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Ru&&a&&(jv(Yv),Ru=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new Xv(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new Wv(this,e,t,i,s,r);case"boolean":return new Ov(this,e,t);case"string":return new $v(this,e,t);case"function":return new ha(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new Vv(this,e,t,i)}addFolder(e){const t=new Yl({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof ha||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof ha)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Cu={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class no{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new rb(e)}),this.register(function(e){return new ob(e)}),this.register(function(e){return new ub(e)}),this.register(function(e){return new hb(e)}),this.register(function(e){return new db(e)}),this.register(function(e){return new fb(e)}),this.register(function(e){return new ab(e)}),this.register(function(e){return new lb(e)}),this.register(function(e){return new cb(e)}),this.register(function(e){return new pb(e)}),this.register(function(e){return new mb(e)}),this.register(function(e){return new gb(e)}),this.register(function(e){return new _b(e)}),this.register(function(e){return new xb(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,i,s){const r=new sb,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,s).catch(i)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,s,r,t)})}}const $e={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},da="KHR_mesh_quantization",Qt={};Qt[cn]=$e.NEAREST;Qt[oh]=$e.NEAREST_MIPMAP_NEAREST;Qt[Ts]=$e.NEAREST_MIPMAP_LINEAR;Qt[fn]=$e.LINEAR;Qt[Ir]=$e.LINEAR_MIPMAP_NEAREST;Qt[qn]=$e.LINEAR_MIPMAP_LINEAR;Qt[jn]=$e.CLAMP_TO_EDGE;Qt[Gr]=$e.REPEAT;Qt[Hr]=$e.MIRRORED_REPEAT;const Pu={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},qv=new Xe,Lu=12,Zv=1179937895,Kv=2,Iu=8,Jv=1313821514,Qv=5130562;function Cs(n,e){return n.length===e.length&&n.every(function(t,i){return t===e[i]})}function eb(n){return new TextEncoder().encode(n).buffer}function tb(n){return Cs(n.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function nb(n,e,t){const i={min:new Array(n.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(n.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<n.itemSize;r++){let o;n.itemSize>4?o=n.array[s*n.itemSize+r]:(r===0?o=n.getX(s):r===1?o=n.getY(s):r===2?o=n.getZ(s):r===3&&(o=n.getW(s)),n.normalized===!0&&(o=$r.normalize(o,n.array))),i.min[r]=Math.min(i.min[r],o),i.max[r]=Math.max(i.max[r],o)}return i}function ld(n){return Math.ceil(n/4)*4}function fa(n,e=0){const t=ld(n.byteLength);if(t!==n.byteLength){const i=new Uint8Array(t);if(i.set(new Uint8Array(n)),e!==0)for(let s=n.byteLength;s<t;s++)i[s]=e;return i.buffer}return n}function Du(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function ib(n,e){if(typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),n.convertToBlob({type:e,quality:t})}else return new Promise(t=>n.toBlob(t,e))}class sb{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+ro}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},i),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const s=this,r=s.buffers,o=s.json;i=s.options;const a=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),u=Object.keys(a),h=Object.keys(l);if(u.length>0&&(o.extensionsUsed=u),h.length>0&&(o.extensionsRequired=h),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),i.binary===!0){const f=new FileReader;f.readAsArrayBuffer(c),f.onloadend=function(){const d=fa(f.result),g=new DataView(new ArrayBuffer(Iu));g.setUint32(0,d.byteLength,!0),g.setUint32(4,Qv,!0);const _=fa(eb(JSON.stringify(o)),32),m=new DataView(new ArrayBuffer(Iu));m.setUint32(0,_.byteLength,!0),m.setUint32(4,Jv,!0);const p=new ArrayBuffer(Lu),y=new DataView(p);y.setUint32(0,Zv,!0),y.setUint32(4,Kv,!0);const v=Lu+m.byteLength+_.byteLength+g.byteLength+d.byteLength;y.setUint32(8,v,!0);const x=new Blob([p,m,_,g,d],{type:"application/octet-stream"}),T=new FileReader;T.readAsArrayBuffer(x),T.onloadend=function(){t(T.result)}}}else if(o.buffers&&o.buffers.length>0){const f=new FileReader;f.readAsDataURL(c),f.onloadend=function(){const d=f.result;o.buffers[0].uri=d,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const i=this.options,s=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(i.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const i=new D;for(let s=0,r=e.count;s<r;s++)if(Math.abs(i.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const i=e.clone(),s=new D;for(let r=0,o=i.count;r<o;r++)s.fromBufferAttribute(i,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),i.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,i),i}applyTextureTransform(e,t){let i=!1;const s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),i=!0),t.rotation!==0&&(s.rotation=t.rotation,i=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),i=!0),i&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function i(d){return d.colorSpace===Ht?function(_){return _<.04045?_*.0773993808:Math.pow(_*.9478672986+.0521327014,2.4)}:function(_){return _}}e instanceof jo&&(e=await this.decompressTextureAsync(e)),t instanceof jo&&(t=await this.decompressTextureAsync(t));const s=e?e.image:null,r=t?t.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),l=Du();l.width=o,l.height=a;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);const u=c.getImageData(0,0,o,a);if(s){c.drawImage(s,0,0,o,a);const d=i(e),g=c.getImageData(0,0,o,a).data;for(let _=2;_<g.length;_+=4)u.data[_]=d(g[_]/256)*256}if(r){c.drawImage(r,0,0,o,a);const d=i(t),g=c.getImageData(0,0,o,a).data;for(let _=1;_<g.length;_+=4)u.data[_]=d(g[_]/256)*256}c.putImageData(u,0,0);const f=(e||t).clone();return f.source=new ao(l),f.colorSpace=Fn,f.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),f}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,i=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),i.push(e),0}processBufferView(e,t,i,s,r){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case $e.BYTE:case $e.UNSIGNED_BYTE:a=1;break;case $e.SHORT:case $e.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;r===$e.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=ld(s*l),u=new DataView(new ArrayBuffer(c));let h=0;for(let g=i;g<i+s;g++){for(let _=0;_<e.itemSize;_++){let m;e.itemSize>4?m=e.array[g*e.itemSize+_]:(_===0?m=e.getX(g):_===1?m=e.getY(g):_===2?m=e.getZ(g):_===3&&(m=e.getW(g)),e.normalized===!0&&(m=$r.normalize(m,e.array))),t===$e.FLOAT?u.setFloat32(h,m,!0):t===$e.INT?u.setInt32(h,m,!0):t===$e.UNSIGNED_INT?u.setUint32(h,m,!0):t===$e.SHORT?u.setInt16(h,m,!0):t===$e.UNSIGNED_SHORT?u.setUint16(h,m,!0):t===$e.BYTE?u.setInt8(h,m):t===$e.UNSIGNED_BYTE&&u.setUint8(h,m),h+=a}h%l!==0&&(h+=l-h%l)}const f={buffer:this.processBuffer(u.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(f.target=r),r===$e.ARRAY_BUFFER&&(f.byteStride=l),this.byteOffset+=c,o.bufferViews.push(f),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,i=t.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(s){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const o=fa(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,s(i.bufferViews.push(a)-1)}})}processAccessor(e,t,i,s){const r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(e.array.constructor===Float32Array)a=$e.FLOAT;else if(e.array.constructor===Int32Array)a=$e.INT;else if(e.array.constructor===Uint32Array)a=$e.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=$e.SHORT;else if(e.array.constructor===Uint16Array)a=$e.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=$e.BYTE;else if(e.array.constructor===Uint8Array)a=$e.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(i===void 0&&(i=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;const l=nb(e,i,s);let c;t!==void 0&&(c=e===t.index?$e.ELEMENT_ARRAY_BUFFER:$e.ARRAY_BUFFER);const u=this.processBufferView(e,a,i,s,c),h={bufferView:u.id,byteOffset:u.byteOffset,componentType:a,count:s,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(h.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(h)-1}processImage(e,t,i,s="image/png"){if(e!==null){const r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(e)||o.images.set(e,{});const u=o.images.get(e),h=s+":flipY/"+i.toString();if(u[h]!==void 0)return u[h];a.images||(a.images=[]);const f={mimeType:s},d=Du();d.width=Math.min(e.width,l.maxTextureSize),d.height=Math.min(e.height,l.maxTextureSize);const g=d.getContext("2d",{willReadFrequently:!0});if(i===!0&&(g.translate(0,d.height),g.scale(1,-1)),e.data!==void 0){t!==an&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const m=new Uint8ClampedArray(e.height*e.width*4);for(let p=0;p<m.length;p+=4)m[p+0]=e.data[p+0],m[p+1]=e.data[p+1],m[p+2]=e.data[p+2],m[p+3]=e.data[p+3];g.putImageData(new ImageData(m,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,d.width,d.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(ib(d,s).then(m=>r.processBufferViewImage(m)).then(m=>{f.bufferView=m})):f.uri=xh.getDataURL(d,s);const _=a.images.push(f)-1;return u[h]=_,_}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const i={magFilter:Qt[e.magFilter],minFilter:Qt[e.minFilter],wrapS:Qt[e.wrapS],wrapT:Qt[e.wrapT]};return t.samplers.push(i)-1}async processTextureAsync(e){const i=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof jo&&(e=await this.decompressTextureAsync(e,i.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");const a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,a)});const l=r.textures.push(a)-1;return s.textures.set(e,l),l}async processMaterialAsync(e){const t=this.cache,i=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;i.materials||(i.materials=[]);const s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(Cs(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const a=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(l,a),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const a={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),s.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){const a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),s.emissiveTexture=c}}if(e.normalMap){const a={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),s.normalTexture=a}if(e.aoMap){const a={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),s.occlusionTexture=a}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===rn&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(e,s)});const o=i.materials.push(s)-1;return t.materials.set(e,o),o}async processMeshAsync(e){const t=this.cache,i=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let x=0,T=e.material.length;x<T;x++)s.push(e.material[x].uuid);else s.push(e.material.uuid);const r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);const o=e.geometry;let a;e.isLineSegments?a=$e.LINES:e.isLineLoop?a=$e.LINE_LOOP:e.isLine?a=$e.LINE_STRIP:e.isPoints?a=$e.POINTS:a=e.material.wireframe?$e.LINES:$e.TRIANGLES;const l={},c={},u=[],h=[],f={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},d=o.getAttribute("normal");d!==void 0&&!this.isNormalizedNormalAttribute(d)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(d)));let g=null;for(let x in o.attributes){if(x.slice(0,5)==="morph")continue;const T=o.attributes[x];if(x=f[x]||x.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(x)||(x="_"+x),t.attributes.has(this.getUID(T))){c[x]=t.attributes.get(this.getUID(T));continue}g=null;const A=T.array;x==="JOINTS_0"&&!(A instanceof Uint16Array)&&!(A instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new Rt(new Uint16Array(A),T.itemSize,T.normalized)):(A instanceof Uint32Array||A instanceof Int32Array)&&!x.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${x}" converted to type FLOAT.`),g=no.Utils.toFloat32BufferAttribute(T));const L=this.processAccessor(g||T,o);L!==null&&(x.startsWith("_")||this.detectMeshQuantization(x,T),c[x]=L,t.attributes.set(this.getUID(T),L))}if(d!==void 0&&o.setAttribute("normal",d),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const x=[],T=[],S={};if(e.morphTargetDictionary!==void 0)for(const A in e.morphTargetDictionary)S[e.morphTargetDictionary[A]]=A;for(let A=0;A<e.morphTargetInfluences.length;++A){const L={};let E=!1;for(const M in o.morphAttributes){if(M!=="position"&&M!=="normal"){E||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),E=!0);continue}const C=o.morphAttributes[M][A],N=M.toUpperCase(),k=o.attributes[M];if(t.attributes.has(this.getUID(C,!0))){L[N]=t.attributes.get(this.getUID(C,!0));continue}const U=C.clone();if(!o.morphTargetsRelative)for(let z=0,Y=C.count;z<Y;z++)for(let q=0;q<C.itemSize;q++)q===0&&U.setX(z,C.getX(z)-k.getX(z)),q===1&&U.setY(z,C.getY(z)-k.getY(z)),q===2&&U.setZ(z,C.getZ(z)-k.getZ(z)),q===3&&U.setW(z,C.getW(z)-k.getW(z));L[N]=this.processAccessor(U,o),t.attributes.set(this.getUID(k,!0),L[N])}h.push(L),x.push(e.morphTargetInfluences[A]),e.morphTargetDictionary!==void 0&&T.push(S[A])}l.weights=x,T.length>0&&(l.extras={},l.extras.targetNames=T)}const _=Array.isArray(e.material);if(_&&o.groups.length===0)return null;let m=!1;if(_&&o.index===null){const x=[];for(let T=0,S=o.attributes.position.count;T<S;T++)x[T]=T;o.setIndex(x),m=!0}const p=_?e.material:[e.material],y=_?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let x=0,T=y.length;x<T;x++){const S={mode:a,attributes:c};if(this.serializeUserData(o,S),h.length>0&&(S.targets=h),o.index!==null){let L=this.getUID(o.index);(y[x].start!==void 0||y[x].count!==void 0)&&(L+=":"+y[x].start+":"+y[x].count),t.attributes.has(L)?S.indices=t.attributes.get(L):(S.indices=this.processAccessor(o.index,o,y[x].start,y[x].count),t.attributes.set(L,S.indices)),S.indices===null&&delete S.indices}const A=await this.processMaterialAsync(p[y[x].materialIndex]);A!==null&&(S.material=A),u.push(S)}m===!0&&o.setIndex(null),l.primitives=u,i.meshes||(i.meshes=[]),await this._invokeAllAsync(function(x){x.writeMesh&&x.writeMesh(e,l)});const v=i.meshes.push(l)-1;return t.meshes.set(r,v),v}detectMeshQuantization(e,t){if(this.extensionsUsed[da])return;let i;switch(t.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}t.normalized&&(i+=" normalized");const s=e.split("_",1)[0];Cu[s]&&Cu[s].includes(i)&&(this.extensionsUsed[da]=!0,this.extensionsRequired[da]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const i=e.isOrthographicCamera,s={type:i?"orthographic":"perspective"};return i?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:$r.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){const i=this.json,s=this.nodeMap;i.animations||(i.animations=[]),e=no.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,o=[],a=[];for(let c=0;c<r.length;++c){const u=r[c],h=Ze.parseTrackName(u.name);let f=Ze.findNode(t,h.nodeName);const d=Pu[h.propertyName];if(h.objectName==="bones"&&(f.isSkinnedMesh===!0?f=f.skeleton.getBoneByName(h.objectIndex):f=void 0),!f||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',u.name);continue}const g=1;let _=u.values.length/u.times.length;d===Pu.morphTargetInfluences&&(_/=f.morphTargetInfluences.length);let m;u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(m="CUBICSPLINE",_/=3):u.getInterpolation()===xf?m="STEP":m="LINEAR",a.push({input:this.processAccessor(new Rt(u.times,g)),output:this.processAccessor(new Rt(u.values,_)),interpolation:m}),o.push({sampler:a.length-1,target:{node:s.get(f),path:d}})}const l={name:e.name||"clip_"+i.animations.length,samplers:a,channels:o};return this.serializeUserData(e,l),i.animations.push(l),i.animations.length-1}processSkin(e){const t=this.json,i=this.nodeMap,s=t.nodes[i.get(e)],r=e.skeleton;if(r===void 0)return null;const o=e.skeleton.bones[0];if(o===void 0)return null;const a=[],l=new Float32Array(r.bones.length*16),c=new ct;for(let h=0;h<r.bones.length;++h)a.push(i.get(r.bones[h])),c.copy(r.boneInverses[h]),c.multiply(e.bindMatrix).toArray(l,h*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new Rt(l,16)),joints:a,skeleton:i.get(o)}),s.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,i=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(i.trs){const a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();Cs(a,[0,0,0,1])||(r.rotation=a),Cs(l,[0,0,0])||(r.translation=l),Cs(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),tb(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);const o=t.nodes.push(r)-1;if(s.set(e,o),e.children.length>0){const a=[];for(let l=0,c=e.children.length;l<c;l++){const u=e.children[l];if(u.visible||i.onlyVisible===!1){const h=await this.processNodeAsync(u);h!==null&&a.push(h)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)}),o}async processSceneAsync(e){const t=this.json,i=this.options;t.scenes||(t.scenes=[],t.scene=0);const s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);const r=[];for(let o=0,a=e.children.length;o<a;o++){const l=e.children[o];if(l.visible||i.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}async processObjectsAsync(e){const t=new sl;t.name="AuxScene";for(let i=0;i<e.length;i++)t.children.push(e[i]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});const i=[];for(let s=0;s<e.length;s++)e[s]instanceof sl?await this.processSceneAsync(e[s]):i.push(e[s]);i.length>0&&await this.processObjectsAsync(i);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,i=this.plugins.length;t<i;t++)await e(this.plugins[t])}}class rb{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const i=this.writer,s=i.json,r=i.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);const a=s.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}}class ob{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class ab{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const i=this.writer,s=i.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const o={index:await i.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};i.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const o={index:await i.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};i.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){const o={index:await i.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),i.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class lb{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const s=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class cb{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const i=this.writer,s=i.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const o={index:await i.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};i.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const o={index:await i.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};i.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class ub{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const i=this.writer,s=i.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const o={index:await i.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};i.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class hb{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const i=this.writer,s=i.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const o={index:await i.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};i.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class db{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class fb{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(qv)&&!e.specularIntensityMap&&!e.specularColorMap)return;const i=this.writer,s=i.extensionsUsed,r={};if(e.specularIntensityMap){const o={index:await i.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};i.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){const o={index:await i.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};i.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class pb{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const i=this.writer,s=i.extensionsUsed,r={};if(e.sheenRoughnessMap){const o={index:await i.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};i.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){const o={index:await i.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};i.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class mb{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const i=this.writer,s=i.extensionsUsed,r={};if(e.anisotropyMap){const o={index:await i.processTextureAsync(e.anisotropyMap)};i.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class gb{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class _b{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const i=this.writer,s=i.extensionsUsed,r={};if(e.bumpMap){const o={index:await i.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};i.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class xb{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const i=this.writer,s=e,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),l=new ct,c=new D,u=new kn,h=new D;for(let d=0;d<s.count;d++)s.getMatrixAt(d,l),l.decompose(c,u,h),c.toArray(r,d*3),u.toArray(o,d*4),h.toArray(a,d*3);const f={TRANSLATION:i.processAccessor(new Rt(r,3)),ROTATION:i.processAccessor(new Rt(o,4)),SCALE:i.processAccessor(new Rt(a,3))};s.instanceColor&&(f._COLOR_0=i.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:f},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}}no.Utils={insertKeyframe:function(n,e){const i=n.getValueSize(),s=new n.TimeBufferType(n.times.length+1),r=new n.ValueBufferType(n.values.length+i),o=n.createInterpolant(new n.ValueBufferType(i));let a;if(n.times.length===0){s[0]=e;for(let l=0;l<i;l++)r[l]=0;a=0}else if(e<n.times[0]){if(Math.abs(n.times[0]-e)<.001)return 0;s[0]=e,s.set(n.times,1),r.set(o.evaluate(e),0),r.set(n.values,i),a=0}else if(e>n.times[n.times.length-1]){if(Math.abs(n.times[n.times.length-1]-e)<.001)return n.times.length-1;s[s.length-1]=e,s.set(n.times,0),r.set(n.values,0),r.set(o.evaluate(e),n.values.length),a=s.length-1}else for(let l=0;l<n.times.length;l++){if(Math.abs(n.times[l]-e)<.001)return l;if(n.times[l]<e&&n.times[l+1]>e){s.set(n.times.slice(0,l+1),0),s[l+1]=e,s.set(n.times.slice(l+1),l+2),r.set(n.values.slice(0,(l+1)*i),0),r.set(o.evaluate(e),(l+1)*i),r.set(n.values.slice((l+1)*i),(l+2)*i),a=l+1;break}}return n.times=s,n.values=r,a},mergeMorphTargetTracks:function(n,e){const t=[],i={},s=n.tracks;for(let r=0;r<s.length;++r){let o=s[r];const a=Ze.parseTrackName(o.name),l=Ze.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(yf)}const c=l.morphTargetInfluences.length,u=l.morphTargetDictionary[a.propertyIndex];if(u===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let h;if(i[l.uuid]===void 0){h=o.clone();const d=new h.ValueBufferType(c*h.times.length);for(let g=0;g<h.times.length;g++)d[g*c+u]=h.values[g];h.name=(a.nodeName||"")+".morphTargetInfluences",h.values=d,i[l.uuid]=h,t.push(h);continue}const f=o.createInterpolant(new o.ValueBufferType(1));h=i[l.uuid];for(let d=0;d<h.times.length;d++)h.values[d*c+u]=f.evaluate(h.times[d]);for(let d=0;d<o.times.length;d++){const g=this.insertKeyframe(h,o.times[d]);h.values[g*c+u]=o.values[d]}}return n.tracks=t,n},toFloat32BufferAttribute:function(n){const e=new Rt(new Float32Array(n.count*n.itemSize),n.itemSize,!1);if(!n.normalized&&!n.isInterleavedBufferAttribute)return e.array.set(n.array),e;for(let t=0,i=n.count;t<i;t++)for(let s=0;s<n.itemSize;s++)e.setComponent(t,s,n.getComponent(t,s));return e}};const yb=(()=>{const n=new Uint32Array(256);for(let e=0;e<256;e+=1){let t=e;for(let i=0;i<8;i+=1)t=t&1?3988292384^t>>>1:t>>>1;n[e]=t>>>0}return n})();function vb(n){let e=4294967295;for(let t=0;t<n.length;t+=1)e=yb[(e^n[t])&255]^e>>>8;return(e^4294967295)>>>0}async function bb(n){if(typeof CompressionStream>"u")return null;const e=new Blob([n]).stream().pipeThrough(new CompressionStream("deflate-raw")),t=await new Response(e).arrayBuffer();return new Uint8Array(t)}function Mb(n){const e=Math.max(1980,n.getFullYear());return{time:n.getHours()<<11|n.getMinutes()<<5|n.getSeconds()>>1,date:e-1980<<9|n.getMonth()+1<<5|n.getDate()}}async function cd(n,e={}){const{time:t,date:i}=Mb(e.date??new Date),s=new TextEncoder,r=[];let o=0;for(const f of n){const d=s.encode(f.path),g=vb(f.data);let _=0,m=f.data;if(e.compress!==!1){const p=await bb(f.data);p!==null&&p.length<f.data.length&&(_=8,m=p)}r.push({name:d,payload:m,method:_,crc:g,compressedSize:m.length,uncompressedSize:f.data.length,localOffset:o}),o+=30+d.length+m.length}let a=0;for(const f of r)a+=46+f.name.length;const l=new Uint8Array(o+a+22),c=new DataView(l.buffer);let u=0;for(const f of r)c.setUint32(u,67324752,!0),u+=4,c.setUint16(u,20,!0),u+=2,c.setUint16(u,0,!0),u+=2,c.setUint16(u,f.method,!0),u+=2,c.setUint16(u,t,!0),u+=2,c.setUint16(u,i,!0),u+=2,c.setUint32(u,f.crc,!0),u+=4,c.setUint32(u,f.compressedSize,!0),u+=4,c.setUint32(u,f.uncompressedSize,!0),u+=4,c.setUint16(u,f.name.length,!0),u+=2,c.setUint16(u,0,!0),u+=2,l.set(f.name,u),u+=f.name.length,l.set(f.payload,u),u+=f.payload.length;const h=u;for(const f of r)c.setUint32(u,33639248,!0),u+=4,c.setUint16(u,20,!0),u+=2,c.setUint16(u,20,!0),u+=2,c.setUint16(u,0,!0),u+=2,c.setUint16(u,f.method,!0),u+=2,c.setUint16(u,t,!0),u+=2,c.setUint16(u,i,!0),u+=2,c.setUint32(u,f.crc,!0),u+=4,c.setUint32(u,f.compressedSize,!0),u+=4,c.setUint32(u,f.uncompressedSize,!0),u+=4,c.setUint16(u,f.name.length,!0),u+=2,c.setUint16(u,0,!0),u+=2,c.setUint16(u,0,!0),u+=2,c.setUint16(u,0,!0),u+=2,c.setUint16(u,0,!0),u+=2,c.setUint32(u,0,!0),u+=4,c.setUint32(u,f.localOffset,!0),u+=4,l.set(f.name,u),u+=f.name.length;return c.setUint32(u,101010256,!0),u+=4,c.setUint16(u,0,!0),u+=2,c.setUint16(u,0,!0),u+=2,c.setUint16(u,r.length,!0),u+=2,c.setUint16(u,r.length,!0),u+=2,c.setUint32(u,a,!0),u+=4,c.setUint32(u,h,!0),u+=4,c.setUint16(u,0,!0),u+=2,l}function ud(){return!/\bElectron\//.test(navigator.userAgent)}async function zn(n,e){const t=ud()?window.showSaveFilePicker:void 0;if(t)try{const o=await t.call(window,{suggestedName:n}),a=await o.createWritable();return await a.write(await e()),await a.close(),`Saved to ${o.name}`}catch(o){if(o.name==="AbortError")return"Cancelled by user"}const i=await e(),s=URL.createObjectURL(i),r=document.createElement("a");return r.href=s,r.download=n,r.click(),URL.revokeObjectURL(s),`Downloaded ${n}`}async function Eb(n,e="text/plain"){const t=ud()?window.showDirectoryPicker:void 0;if(t)try{const i=await t.call(window);for(const s of n){const o=await(await i.getFileHandle(s.name,{create:!0})).createWritable();await o.write(new Blob([s.text],{type:e})),await o.close()}return`Saved ${n.length} files to folder "${i.name}"`}catch(i){if(i.name==="AbortError")return"Cancelled by user"}for(const i of n){const s=URL.createObjectURL(new Blob([i.text],{type:e})),r=document.createElement("a");r.href=s,r.download=i.name,r.click(),await new Promise(o=>window.setTimeout(o,50)),URL.revokeObjectURL(s)}return`Downloaded ${n.length} files (the browser may ask permission for multiple downloads)`}function _o(n){const e=[];return n.updateMatrixWorld(!0),n.traverse(t=>{const i=t;if(!i.isMesh)return;let s=t;for(;s;){if(!s.visible)return;s=s.parent}e.push(i)}),e}function Qn(){const n=new Date,e=t=>String(t).padStart(2,"0");return`${n.getFullYear()}${e(n.getMonth()+1)}${e(n.getDate())}_${e(n.getHours())}${e(n.getMinutes())}${e(n.getSeconds())}`}function hd(n,e){let t=0;for(const a of n){const l=a.geometry.getIndex();t+=(l?l.count:a.geometry.getAttribute("position").count)/3}const i=new ArrayBuffer(84+t*50),s=new DataView(i),r=new Uint8Array(i);for(let a=0;a<e.length&&a<79;a+=1)r[a]=e.charCodeAt(a);s.setUint32(80,t,!0);let o=84;for(const a of n){const l=a.geometry,c=l.getAttribute("position"),u=l.getIndex(),h=a.matrixWorld,f={x:0,y:0,z:0};for(let d=0;d<(u?u.count:c.count);d+=3){const g=H=>{const te=u?u.getX(d+H):d+H;f.x=c.getX(te),f.y=c.getY(te),f.z=c.getZ(te);const ee=h.elements;return[ee[0]*f.x+ee[4]*f.y+ee[8]*f.z+ee[12],ee[1]*f.x+ee[5]*f.y+ee[9]*f.z+ee[13],ee[2]*f.x+ee[6]*f.y+ee[10]*f.z+ee[14]]},[_,m,p]=g(0),[y,v,x]=g(1),[T,S,A]=g(2),L=y-_,E=v-m,M=x-p,C=T-_,N=S-m,k=A-p;let U=E*k-M*N,z=M*C-L*k,Y=L*N-E*C;const q=Math.hypot(U,z,Y)||1;U/=q,z/=q,Y/=q,s.setFloat32(o,U,!0),o+=4,s.setFloat32(o,z,!0),o+=4,s.setFloat32(o,Y,!0),o+=4,s.setFloat32(o,_,!0),o+=4,s.setFloat32(o,m,!0),o+=4,s.setFloat32(o,p,!0),o+=4,s.setFloat32(o,y,!0),o+=4,s.setFloat32(o,v,!0),o+=4,s.setFloat32(o,x,!0),o+=4,s.setFloat32(o,T,!0),o+=4,s.setFloat32(o,S,!0),o+=4,s.setFloat32(o,A,!0),o+=4,s.setUint16(o,0,!0),o+=2}}return i}function Sb(n,e=`cycloidal_assembly_${Qn()}.stl`){const t=_o(n);if(t.length===0)return Promise.reject(new Error('No visible parts to export (try "Show all" first)'));const i=`Cycloidal gearbox binary STL - ${t.length} parts - 1 unit = 1 mm`;return zn(e,()=>new Blob([hd(t,i)],{type:"model/stl"}))}const wb=/^plates\[(\d+)\]$/,Tb=/^(.+)\[\d+\]$/;function Ab(n){const e=wb.exec(n);if(e)return`plate_${Number(e[1])+1}`;const t=Tb.exec(n)?.[1]??n;return Vh[t]?.exportName??t.replace(/[^A-Za-z0-9._-]+/g,"_")}async function Rb(n,e={}){const t=new Map;for(const s of n){const r=Ab(s.name),o=t.get(r);o?o.push(s):t.set(r,[s])}const i=[...t].map(([s,r])=>({path:`${s}.stl`,data:new Uint8Array(hd(r,`Cycloidal gearbox part: ${s} - 1 unit = 1 mm`))}));return cd(i,e)}function Cb(n,e=`cycloidal_assembly_${Qn()}_parts_stl.zip`){const t=_o(n);return t.length===0?Promise.reject(new Error('No visible parts to export (try "Show all" first)')):zn(e,async()=>new Blob([await Rb(t)],{type:"application/zip"}))}function Pb(n,e=`cycloidal_assembly_${Qn()}.obj`){const t=_o(n);return t.length===0?Promise.reject(new Error('No visible parts to export (try "Show all" first)')):zn(e,()=>{const i=[`# Cycloidal gearbox OBJ - ${t.length} parts, 1 unit = 1 mm`,`# exported from web_viewer (${new Date().toISOString()})`];let s=1;for(const r of t){const o=r.geometry,a=o.getAttribute("position"),l=o.getAttribute("normal"),u=r.matrixWorld.elements;i.push(`o ${r.name}`);for(let d=0;d<a.count;d+=1){const g=a.getX(d),_=a.getY(d),m=a.getZ(d);i.push(`v ${u[0]*g+u[4]*_+u[8]*m+u[12]} ${u[1]*g+u[5]*_+u[9]*m+u[13]} ${u[2]*g+u[6]*_+u[10]*m+u[14]}`)}if(l)for(let d=0;d<l.count;d+=1)i.push(`vn ${l.getX(d)} ${l.getY(d)} ${l.getZ(d)}`);const h=o.getIndex(),f=h?h.count:a.count;for(let d=0;d<f;d+=3){const g=(h?h.getX(d):d)+s,_=(h?h.getX(d+1):d+1)+s,m=(h?h.getX(d+2):d+2)+s;i.push(l?`f ${g}//${g} ${_}//${_} ${m}//${m}`:`f ${g} ${_} ${m}`)}s+=a.count}return new Blob([i.join(`
`)],{type:"text/plain"})})}function Lb(n,e=`cycloidal_assembly_${Qn()}.glb`){return zn(e,()=>new Promise((t,i)=>{new no().parse(n,s=>{t(new Blob([s],{type:"model/gltf-binary"}))},s=>i(new Error(`GLB export failed: ${String(s)}`)),{binary:!0,onlyVisible:!0})}))}async function Ib(n,e=`cycloidal_view_${Qn()}.png`){const t=await new Promise((i,s)=>{n.domElement.toBlob(r=>{r?i(r):s(new Error("Failed to capture the image"))},"image/png")});if(t.size===0)throw new Error("Got a 0-byte image — renderer must use preserveDrawingBuffer: true");return zn(e,()=>t)}const Db="http://schemas.microsoft.com/3dmanufacturing/core/2015/02",Nb=`<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/>
</Types>`,Fb=`<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/>
</Relationships>`;function Nu(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}function pa(n){return String(Number(n.toFixed(4)))}function Ub(n){const t=(Array.isArray(n.material)?n.material[0]:n.material)?.color;return!t||typeof t.getHexString!="function"?null:`#${t.getHexString().toUpperCase()}`}function Ob(n){const e=[];e.push('<?xml version="1.0" encoding="UTF-8"?>'),e.push(`<model unit="millimeter" xml:lang="en-US" xmlns="${Db}">`),e.push('<metadata name="Title">CYROACT Version 0.0.1 (23.September.2026)</metadata>'),e.push('<metadata name="Application">CYROACT - Cycloidal Robotic Actuation Technology (web standalone)</metadata>'),e.push("<resources>");const t=n.map(s=>Ub(s)),i=t.some(s=>s!==null);if(i){e.push('<basematerials id="1">');for(let s=0;s<n.length;s+=1)e.push(`<base name="${Nu(n[s].name)}" displaycolor="${t[s]??"#CCCCCC"}"/>`);e.push("</basematerials>")}for(let s=0;s<n.length;s+=1){const r=n[s],o=r.geometry.getAttribute("position");if(!o)continue;const a=r.geometry.getIndex(),l=r.matrixWorld.elements,c=Math.floor((a?a.count:o.count)/3),u=i?` pid="1" pindex="${s}"`:"";e.push(`<object id="${s+1}" type="model" name="${Nu(r.name)}"${u}>`),e.push("<mesh><vertices>");for(let h=0;h<o.count;h+=1){const f=o.getX(h),d=o.getY(h),g=o.getZ(h),_=l[0]*f+l[4]*d+l[8]*g+l[12],m=l[1]*f+l[5]*d+l[9]*g+l[13],p=l[2]*f+l[6]*d+l[10]*g+l[14];e.push(`<vertex x="${pa(_)}" y="${pa(m)}" z="${pa(p)}"/>`)}e.push("</vertices><triangles>");for(let h=0;h<c;h+=1){const f=a?a.getX(h*3):h*3,d=a?a.getX(h*3+1):h*3+1,g=a?a.getX(h*3+2):h*3+2;e.push(`<triangle v1="${f}" v2="${d}" v3="${g}"/>`)}e.push("</triangles></mesh>"),e.push("</object>")}e.push("</resources>"),e.push("<build>");for(let s=0;s<n.length;s+=1)e.push(`<item objectid="${s+1}"/>`);return e.push("</build>"),e.push("</model>"),e.join(`
`)}async function Bb(n,e={}){const t=new TextEncoder,i=[{path:"[Content_Types].xml",data:t.encode(Nb)},{path:"_rels/.rels",data:t.encode(Fb)},{path:"3D/3dmodel.model",data:t.encode(Ob(n))}];return cd(i,e)}function kb(n,e=`cycloidal_assembly_${Qn()}.3mf`){const t=_o(n);return t.length===0?Promise.reject(new Error('No visible parts to export (try "Show all" first)')):zn(e,async()=>new Blob([await Bb(t)],{type:"model/3mf"}))}function zb(n){const e=new En;e.makeEmpty();let t=!1;for(const i of n)i.isEmpty()||(e.union(i),t=!0);return t?e:new En}const ma=1e-9;function Gb(n){const e=Lt(n),t=oe(n,"Rm",2.5),i=oe(n,"e",2),s=ge(n,"sleeve_inner")??t+3,r=i+s<=t+ma,o=i+t<=s+ma,a=i>=s+t-ma;if(r||!o&&!a)return null;const l=[];for(let c=0;c<e.numPlates;c+=1){const u=qh(c,e.numPlates),h=ln(ot(s),i*Math.cos(u),i*Math.sin(u));l.push(wn(jh(e,c),[a?{contour:h,thickness:e.plateThickness}:{contour:h,holes:[ot(t)],thickness:e.plateThickness}]))}return Bt(l)}const Hb=10,Vb=5;function Wb(n,e){const t=zl(n),i=ge(n,"end_plate_hight")??Hb,s=Math.trunc(oe(n,"pin_fig",0));return{outerRadius:oe(n,"outer_housing_radius",54),boreRadius:ge(n,"wide_or")??30,thickness:i,zStart:e==="output"?t-i:-t,cboreRadius:oe(n,"D",80)/2-oe(n,"p",5),cboreDepth:Vb,pins:s===0?Ei(Math.trunc(oe(n,"N",10)),oe(n,"D",80)/2,(ge(n,"housing_pins")??oe(n,"d",10)/2)+.1):[]}}function dd(n,e){const t=Wb(n,e),i=Gl(n),s=Ei(i.count,i.boltBc,i.holeRadius),r=t.pins,o={x:0,y:0,radius:t.boreRadius},a={x:0,y:0,radius:t.cboreRadius},l=Math.min(Math.max(t.cboreDepth,0),t.thickness),c=t.cboreRadius>t.boreRadius+1e-9&&l>1e-12;let u;return c?l>=t.thickness-1e-12?u=[{outer:t.outerRadius,holes:[a,...s,...r],thickness:t.thickness}]:e==="output"?u=[{outer:t.outerRadius,holes:[a,...s,...r],thickness:l},{outer:t.outerRadius,holes:[o,...s,...r],thickness:t.thickness-l}]:u=[{outer:t.outerRadius,holes:[o,...s,...r],thickness:t.thickness-l},{outer:t.outerRadius,holes:[a,...s,...r],thickness:l}]:u=[{outer:t.outerRadius,holes:[o,...s,...r],thickness:t.thickness}],Ks(t.zStart,u)}function Xb(n){return dd(n,"output")}function $b(n){return dd(n,"input")}function Yb(n){if(!fs(n.show_output_pins))return null;const e=ky(n),t={x:0,y:0,radius:e.boreRadius},i=Ei(e.pinCount,e.pinBc,e.pinRadius),s=[{outer:e.outerOuterRadius,holes:[t],thickness:e.outerHeight},{outer:e.innerOuterRadius,holes:[t,...i],thickness:e.innerHeight}];return Ks(e.zStart,s)}function jb(n){const e=oe(n,"Rm",2.5),t=ge(n,"fpmi_r24")??24,i=ge(n,"fpmi_r2")??2,s=ge(n,"fpmi_bcd")??8.5,r=Math.max(0,Math.trunc(ge(n,"fpmi_hole_count")??6)),o=Math.max(ge(n,"fpmi_high01")??3,0),a=Math.max(ge(n,"fpmi_high02")??2,0),l=e,c=ge(n,"offset_drive_high01")??5,u=ge(n,"offset_drive_high02")??4,h=Math.min(Math.max(ge(n,"offset_drive_outer")??12,l+1),t-1),{inputZ0:f}=Lt(n),g=f-(c+u)-(o+a),_={x:0,y:0,radius:l},m=Ei(r,s,i),p=[{outer:t,holes:[_,...m],thickness:o},{outer:h,holes:[_,...m],thickness:a}];return Ks(g,p)}function qb(n){const e=oe(n,"Rd",20),t=oe(n,"p",5),i=oe(n,"Rm",2.5),s=ge(n,"radius_two")??e+t-1,r=ge(n,"fp_out_thickness")??5,o=i+oe(n,"e",2)+3;let a=ge(n,"radius_one")??(ge(n,"sleeve_outer")??o)+1,l=ge(n,"fp_out_r14_depth")??2;const c=i,u=Math.max(0,Math.trunc(ge(n,"fp_out_hole_count")??6)),h=ge(n,"fp_out_hole_pitch")??18,f=ge(n,"fp_out_hole_radius")??2.5;a=Math.max(a,c+1),a=Math.min(a,s-1),l=Math.min(Math.max(l,0),r);const d=Lt(n).outputZ0+Js(n).thickness,g=Ei(u,h,f,Math.PI/6),_=[];if(l>1e-6){_.push({outer:s,holes:[{x:0,y:0,radius:a},...g],thickness:l});const m=r-l;m>1e-12&&_.push({outer:s,holes:[{x:0,y:0,radius:c},...g],thickness:m})}else _.push({outer:s,holes:[{x:0,y:0,radius:c},...g],thickness:r});return Ks(d,_)}function di(n,e,t){const i=new Float64Array(t);if(t<=0)return i;if(t===1)return i[0]=n,i;const s=(e-n)/(t-1);for(let r=0;r<t;r+=1)i[r]=r*s+n;return i[t-1]=e,i}function fd(n,e,t,i,s){const r=Number(n),o=Number(e),a=Number(t),l=Number(i),c=(r+o)/o,u=new Float64Array(s.length),h=new Float64Array(s.length);for(let f=0;f<s.length;f+=1){const d=s[f],g=Math.cos(d),_=Math.sin(d),m=Math.cos(c*d),p=Math.sin(c*d),y=(r+o)*g-a*m,v=(r+o)*_-a*p,x=(r+o)*(-_+a/o*p),T=(r+o)*(g-a/o*m),S=Math.sqrt(x*x+T*T);u[f]=y+l/S*-T,h[f]=v+l/S*x}return{x:u,y:h}}function pd(n,e,t,i,s){const r=Number(n),o=Number(e),a=Number(t),l=Number(i),c=r+o,u=c/o,h=u*(c/(u+1)),f=c/(u+1),d=(h+f)/f,g=new Float64Array(s.length),_=new Float64Array(s.length);for(let m=0;m<s.length;m+=1){const p=s[m],y=Math.cos(p),v=Math.sin(p),x=Math.cos(d*p),T=Math.sin(d*p),S=(h+f)*y-a*x,A=(h+f)*v-a*T,L=(h+f)*(-v+a/f*T),E=(h+f)*(y-a/f*x),M=Math.sqrt(L*L+E*E);g[m]=S+l/M*-E,_[m]=A+l/M*L}return{x:g,y:_}}function md(n,e,t){const i=n.length,s=new Float64Array(i);for(let u=1;u<i;u+=1)s[u]=s[u-1]+Math.hypot(n[u]-n[u-1],e[u]-e[u-1]);const r=s[i-1],o=new Float64Array(t),a=new Float64Array(t),l=r/t;let c=0;for(let u=0;u<t;u+=1){const h=u*l;for(;c+1<i-1&&s[c+1]<=h;)c+=1;const f=s[c],d=s[c+1],g=d>f?(h-f)/(d-f):0;o[u]=n[c]+(n[c+1]-n[c])*g,a[u]=e[c]+(e[c+1]-e[c])*g}return{x:o,y:a}}function Zb(n,e,t){const i=e.length,s=Float64Array.from(n),r=Float64Array.from(e),o=Float64Array.from(t);for(let c=0;c<i;c+=1){let u=c,h=Math.abs(s[c*i+c]);for(let d=c+1;d<i;d+=1){const g=Math.abs(s[d*i+c]);g>h&&(h=g,u=d)}if(h<=0)return null;if(u!==c){for(let _=c;_<i;_+=1){const m=s[c*i+_];s[c*i+_]=s[u*i+_],s[u*i+_]=m}const d=r[c];r[c]=r[u],r[u]=d;const g=o[c];o[c]=o[u],o[u]=g}const f=s[c*i+c];for(let d=c+1;d<i;d+=1){const g=s[d*i+c]/f;if(g!==0){for(let _=c;_<i;_+=1)s[d*i+_]=s[d*i+_]-g*s[c*i+_];r[d]=r[d]-g*r[c],o[d]=o[d]-g*o[c]}}}const a=new Float64Array(i),l=new Float64Array(i);for(let c=i-1;c>=0;c-=1){let u=r[c],h=o[c];for(let d=c+1;d<i;d+=1)u-=s[c*i+d]*a[d],h-=s[c*i+d]*l[d];const f=s[c*i+c];a[c]=u/f,l[c]=h/f}return{mx:a,my:l}}function gd(n,e,t){const i=n.length;if(i<4||t<3)return null;const s=new Float64Array(i+1);for(let S=1;S<i;S+=1)s[S]=s[S-1]+Math.hypot(n[S]-n[S-1],e[S]-e[S-1]);s[i]=s[i-1]+Math.hypot(n[0]-n[i-1],e[0]-e[i-1]);const r=new Float64Array(i);for(let S=0;S<i;S+=1)if(r[S]=(S+1<i?s[S+1]:s[i])-s[S],!(r[S]>1e-12))return null;const o=s[i],a=new Float64Array(4);for(let S=0;S<4;S+=1){let A=1;for(let L=0;L<4;L+=1)L!==S&&(A*=s[S]-s[L]);a[S]=1/A}const l=new Float64Array(4);let c=0;for(let S=1;S<4;S+=1)c+=1/(s[0]-s[S]);l[0]=c;for(let S=1;S<4;S+=1)l[S]=a[S]/a[0]/(s[0]-s[S]);let u=0,h=0;for(let S=0;S<4;S+=1)u+=n[S]*l[S],h+=e[S]*l[S];const f=new Float64Array(i*i),d=new Float64Array(i),g=new Float64Array(i);f[0]=1,d[0]=u,g[0]=h;for(let S=1;S<i;S+=1){const A=S+1<i?S+1:0;f[S*i+S-1]=r[S],f[S*i+S]=2*(r[S]+r[S-1]),f[S*i+A]=r[S-1];const L=n[S]-n[S-1],E=e[S]-e[S-1],M=n[A]-n[S],C=e[A]-e[S];d[S]=3*(r[S]*L/r[S-1]+r[S-1]*M/r[S]),g[S]=3*(r[S]*E/r[S-1]+r[S-1]*C/r[S])}const _=Zb(f,d,g);if(_===null)return null;const{mx:m,my:p}=_,y=new Float64Array(t),v=new Float64Array(t),x=o/t;let T=0;for(let S=0;S<t;S+=1){const A=S*x;for(;T<i-1&&s[T+1]<=A;)T+=1;const L=T,E=L+1<i?L+1:0,M=r[L],C=(A-s[L])/M,N=C*C,k=(1-C)*(1-C)*(1+2*C),U=C*(1-C)*(1-C),z=N*(3-2*C),Y=N*(C-1);y[S]=k*n[L]+U*M*m[L]+z*n[E]+Y*M*m[E],v[S]=k*e[L]+U*M*p[L]+z*e[E]+Y*M*p[E]}return{x:y,y:v}}const Kb=1440,Jb=720,Fu=2048,Qb=2*Math.PI/fo;function $s(n){return Math.max(1,Math.ceil(n/Qb-1e-9))}function jl(n){const e=Math.trunc(oe(n,"num_plates",1)),t=oe(n,"plate_thickness",5),i=oe(n,"spacer_ring",1);return e*t+(e-1)*i}function _d(n){return Math.max(-1,Math.min(1,n))}function Ds(n,e){return{x:n*Math.cos(e),y:n*Math.sin(e)}}function eM(n,e,t,i){const s=(e*e+n*n-t*t)/(2*e*n),r=Math.acos(_d(s)),o=Math.atan2(n*Math.sin(r),n*Math.cos(r)-e),a=2*Math.PI/i,l=a-2*r,c=2*o;if(!(l>0)||!(c>0))return null;const u=$s(l),h=$s(c),f=[];for(let d=0;d<i;d+=1){const g=d*a,_=g+a;for(let p=0;p<=u;p+=1)d>0&&p===0||f.push(Ds(n,g+r+l*p/u));const m=Ds(e,_);for(let p=1;p<=h;p+=1){if(d===i-1&&p===h)continue;const y=-o+c*p/h;f.push({x:m.x+t*Math.cos(_+y),y:m.y+t*Math.sin(_+y)})}}return f}const _l=1e-9;function tM(n,e,t,i,s,r,o){const a=t-n,l=i-e,c=n-s,u=e-r,h=a*a+l*l;if(h===0)return[];const f=2*(c*a+u*l),d=c*c+u*u-o*o,g=f*f-4*h*d;if(!(g>0))return[];const _=Math.sqrt(g),m=[];for(const p of[(-f-_)/(2*h),(-f+_)/(2*h)])p>_l&&p<1-_l&&m.push(p);return m}function Uu(n,e){const t=n.x-e.x,i=n.y-e.y;return t*t+i*i<e.radius*e.radius}function Ou(n){let e=0;const t=[];for(let s=1;s<n.length;s+=1){const r=Math.hypot(n[s].x-n[s-1].x,n[s].y-n[s-1].y);t.push(r),e+=r}let i=e/2;for(let s=0;s<t.length;s+=1){const r=t[s];if(i<=r||s===t.length-1){const o=r>0?i/r:0;return{x:n[s].x+(n[s+1].x-n[s].x)*o,y:n[s].y+(n[s+1].y-n[s].y)*o}}i-=r}return n[0]}function nM(n,e){const t=[];for(let i=0;i<n.length;i+=1){const s=n[i],r=n[(i+1)%n.length];for(const o of tM(s.x,s.y,r.x,r.y,e.x,e.y,e.radius))t.push({seg:i,t:o,point:{x:s.x+(r.x-s.x)*o,y:s.y+(r.y-s.y)*o}})}return t.length===0?t:t.length!==2?null:(t.sort((i,s)=>i.seg-s.seg||i.t-s.t),t)}function Bu(n,e,t){const i=[e.point];let s=e.seg;for(;s!==t.seg;)s=(s+1)%n.length,i.push(n[s]);return i.push(t.point),i}function iM(n){const e=n%(2*Math.PI);return e<0?e+2*Math.PI:e}function sM(n,e,t){const i=Bu(n,t[0],t[1]),s=Bu(n,t[1],t[0]),r=!Uu(Ou(i),e),o=!Uu(Ou(s),e);if(r===o)return null;const a=r?i:s,l=a[0],c=a[a.length-1],u=Math.atan2(l.y-e.y,l.x-e.x),h=Math.atan2(c.y-e.y,c.x-e.x),f=iM(h-u),d={x:e.x+e.radius*Math.cos(u+f/2),y:e.y+e.radius*Math.sin(u+f/2)},g={x:e.x+e.radius*Math.cos(h+(2*Math.PI-f)/2),y:e.y+e.radius*Math.sin(h+(2*Math.PI-f)/2)},_=!Jr(d,n),m=!Jr(g,n);if(_===m)return null;const p=_?f:2*Math.PI-f,y=_?-1:1,v=$s(p),x=[...a];for(let T=1;T<v;T+=1){const S=h+y*p*T/v;x.push({x:e.x+e.radius*Math.cos(S),y:e.y+e.radius*Math.sin(S)})}return x}function rM(n,e){let t=null;for(let s=0;s<n.length;s+=1){const r=nM(n[s],e);if(r===null)return null;if(r.length>0){if(t!==null)return null;t={index:s,crossings:[r[0],r[1]]}}}if(t===null){for(const s of n)if(Jr({x:e.x,y:e.y},s))return n;return[...n,ln(ot(e.radius),e.x,e.y)]}const i=sM(n[t.index],e,t.crossings);return i===null?null:n.map((s,r)=>r===t.index?i:s)}function ql(n,e){let t=n.map(i=>[...i]);for(const i of e){const s=rM(t,i);if(s===null)return null;t=s}return t}function Zl(n,e){const{count:t,boltBc:i,holeRadius:s}=Gl(n);return t<1?[]:!(i>0)||!(s>0)||i+s>e-_l?null:Ei(t,i,s)}function oM(n){const e=oe(n,"N",10),t=oe(n,"D",80)/2,i=Math.max(3,Math.trunc(e)),s=oe(n,"outer_housing_radius",54),r=jl(n);if(!(r>0)||!(t>0))return null;const o=oe(n,"d",10),a=ge(n,"housing_pins")??o*.5,l=ge(n,"offset_outer_pins")??a;if(!(l>0))return null;let c=ge(n,"inner_housing_radius")??t;Math.abs(t-l)<c&&c<t+l||(c=t);const u=2*t*Math.sin(Math.PI/i);if(2*l>=u)return null;const h=t+1.5;if(!(s>h)||!(t+l<s))return null;let f;if(t+l<=h+1e-9)f=ot(h);else{const _=c<=h?h:c,m=eM(_,t,l,i);if(m===null)return null;f=m}const d=Zl(n,s);if(d===null)return null;const g=ql([f],d);return g===null?null:wn(-r/2,[{contour:ot(s),holes:g,thickness:r}])}function aM(n){const e=oe(n,"N",10),t=oe(n,"D",80)/2,i=oe(n,"e",2),s=oe(n,"outer_housing_radius",54),r=jl(n),o=t/e,a=oe(n,"d",10)/2;if(!(r>0)||!(o>0)||!(s>0))return null;const l=(e-1)*(t/e),c=a-i,u=di(0,2*Math.PI,Kb),h=pd(l,o,i,c,u),f=md(h.x,h.y,Jb),d=gd(f.x,f.y,Fu);if(d===null)return null;const g=[];let _=1/0,m=0;for(let v=0;v<Fu;v+=1){const x=d.x[v],T=d.y[v],S=Math.hypot(x,T);_=Math.min(_,S),m=Math.max(m,S),g.push({x,y:T})}if(!(_>1e-6)||!(m<s-1e-6))return null;const p=Zl(n,s);if(p===null)return null;const y=ql([g],p);return y===null?null:wn(-r/2,[{contour:ot(s),holes:y,thickness:r}])}function lM(n,e,t){const i=2*Math.PI/t,s=Math.acos(_d((2*n*n-e*e)/(2*n*n))),r=i-2*s;if(!(r>0))return null;const o=Ds(n,s),a=Math.atan2(o.y,o.x-n),l=Math.atan2(-o.y,o.x-n);let c=l-a;c<=0&&(c+=2*Math.PI);const u=$s(r),h=$s(c),f=[];for(let d=0;d<t;d+=1){const g=d*i;for(let p=0;p<=u;p+=1)d>0&&p===0||f.push(Ds(n,g+s+r*p/u));const _=g+i,m=Ds(n,_);for(let p=1;p<=h;p+=1){if(d===t-1&&p===h)continue;const y=_+l-c*p/h;f.push({x:m.x+e*Math.cos(y),y:m.y+e*Math.sin(y)})}}return f}function cM(n){const e=Math.trunc(oe(n,"N",10)),t=oe(n,"D",80)/2,i=oe(n,"d",10)/2,s=oe(n,"outer_housing_radius",54),r=jl(n);if(!(e>=2)||!(t>0)||!(i>0)||!(r>0)||!(s>t+i)||2*i>=2*t*Math.sin(Math.PI/e))return null;const o=lM(t,i,e);if(o===null)return null;const a=Zl(n,s);if(a===null)return null;const l=ql([o],a);return l===null?null:wn(-r/2,[{contour:ot(s),holes:l,thickness:r}])}function uM(n){const{count:e,boltBc:t,screwRadius:i}=Gl(n);if(e<=0||i<=0)return null;const s=zl(n),r=-(s+2.5),o=2*(s+2.5),a=[];for(let l=0;l<e;l+=1){const c=2*l*Math.PI/e;a.push(wn(r,[{contour:ln(ot(i),t*Math.cos(c),t*Math.sin(c)),thickness:o}]))}return Bt(a)}function hM(n){const e=Math.trunc(oe(n,"N",10)),t=oe(n,"D",80)/2,i=ge(n,"housing_pins")??oe(n,"d",10)/2;if(e<=0||i<=0)return null;const s=zl(n)*2,r=-s/2,o=[];for(let a=0;a<e;a+=1){const l=2*a*Math.PI/e;o.push(wn(r,[{contour:ln(ot(i),t*Math.cos(l),t*Math.sin(l)),thickness:s}]))}return Bt(o)}function dM(n){const e=oe(n,"Rm",2.5),{zStart:t,zEnd:i}=By(n);return wn(t,[{contour:ot(e),thickness:i-t}])}function xd(n){const e=oe(n,"Rm",2.5),t=Math.max(ge(n,"input_inner_bearing")??e,e+1),i=Math.max(ge(n,"offset_drive_outer")??12,e+1),s=ge(n,"offset_drive_high01")??5,r=ge(n,"offset_drive_high02")??4;return{bore:e,rInner:t,rOuter:i,hInner:s,hOuter:r}}function fM(n){const{bore:e,rInner:t,rOuter:i,hInner:s,hOuter:r}=xd(n),o=Lt(n).outputZ0;return Xh(o,[{outer:t,inner:e,thickness:s},{outer:i,inner:e,thickness:r}])}function pM(n){const{bore:e,rInner:t,rOuter:i,hInner:s,hOuter:r}=xd(n),o=Lt(n).inputZ0-s-r;return Xh(o,[{outer:i,inner:e,thickness:r},{outer:t,inner:e,thickness:s}])}function mM(n){if(!fs(n.show_output_pins))return null;const e=Lt(n),t=Math.trunc(oe(n,"n",6)),i=oe(n,"Rd",20),s=ge(n,"output_pins")??oe(n,"p",5);if(t<=0||s<=0)return null;const r=Math.max(5,e.plateThickness),o=e.inputZ0-r,a=e.outputZ0+r-o,l=[];for(let c=0;c<t;c+=1){const u=2*c*Math.PI/t;l.push(wn(o,[{contour:ln(ot(s),i*Math.cos(u),i*Math.sin(u)),thickness:a}]))}return Bt(l)}const gM=1440,_M=48,ku=2048;function xM(n){const e=Math.trunc(oe(n,"num_plates",1));if(e<=0)return[];const t=oe(n,"N",10),i=oe(n,"Rd",20),s=oe(n,"p",5),r=oe(n,"e",2),o=oe(n,"plate_thickness",5);if(!(o>0)||!(t>=2))return null;const a=oe(n,"D",80)/2,l=a/t,c=(t-1)*(a/t),u=oe(n,"d",10)/2,h=oe(n,"clearance",.5),f=u+h;if(!(l>0)||!(f>0))return null;const d=di(0,2*Math.PI,gM),g=fd(c,l,r,f,d),_=md(g.x,g.y,_M),m=gd(_.x,_.y,ku);if(m===null)return null;const p=[];for(let M=0;M<ku;M+=1)p.push({x:m.x[M],y:m.y[M]});const y=oe(n,"Rm",2.5),v=ge(n,"sleeve_outer")??y+r+3;if(!(v>0))return null;const x=fs(n.show_output_pins),T=Math.trunc(oe(n,"n",6)),S=s+r;let A=v;if(x&&T>0){if(!(S>0)||i-(v+S)<1e-9||T>=2&&2*i*Math.sin(Math.PI/T)-2*S<1e-9)return null;A=Math.max(A,i+S)}let L=1/0;for(const M of p){const C=Math.hypot(M.x,M.y);C<L&&(L=C)}if(!(A<L-1e-6))return null;const E=[];for(let M=0;M<e;M+=1){const C=M*(2*Math.PI/e),N=3*Math.PI/(t-1)-Math.PI/3+C/(t-1),k=[ot(v)];if(x)for(let U=0;U<T;U+=1){const z=2*U*Math.PI/T+N;k.push(ln(ot(S),i*Math.cos(z),i*Math.sin(z)))}E.push(wn(0,[{contour:p,holes:k,thickness:o}]))}return E}function yM(n){const e=Js(n),t=oe(n,"Rd",20),i={x:0,y:0,radius:e.boreRadius},s=[i];if(fs(n.show_output_pins)){const o=Math.max(0,Math.trunc(oe(n,"n",6))),a=ge(n,"output_pins")??oe(n,"p",5);s.push(...Ei(o,t,a))}const r=[{outer:e.bottomOuterRadius,holes:s,thickness:e.bottomHeight},{outer:e.topOuterRadius,holes:[i],thickness:e.topHeight}];return Ks(Lt(n).outputZ0,r)}const vM=xM,bM=Object.freeze({ring_pin_bearing_outer_ring:fv,ring_pin_bearing_balls:pv,output_pin_bearing_outer_ring:vv,output_pin_bearing_balls:bv}),MM=Object.freeze({input_bearing_outer_ring:qy,input_bearing_balls:Zy,input_bearing_inner_ring:Ky,shaft:dM,eccentric_sleeves:Gb,bearing_outer_ring:Vy,bearing_balls:jy,bearing_inner_ring:Wy,output_bearing_outer_ring:Jy,output_bearing_balls:Qy,output_bearing_inner_ring:ev,offset_drive1:fM,offset_drive2:pM,wide_bearing_top_outer_ring:tv,wide_bearing_top_balls:nv,wide_bearing_top_inner_ring:iv,wide_bearing_bottom_outer_ring:sv,wide_bearing_bottom_balls:rv,wide_bearing_bottom_inner_ring:ov,output_flange:yM,flange_plate_input:Yb,flange_plate_output:qb,flange_plate_motor_input:jb,end_plate_output:Xb,end_plate_input:$b,housing_bolts:uM,out_pins:mM,housing_pins:hM,ring_pin_spacers:uv,ring_pin_bearing_outer_ring:hv,ring_pin_bearing_balls:dv,ring_pin_bearing_inner_ring:mv,out_pin_spacers:gv,output_pin_bearing_outer_ring:_v,output_pin_bearing_balls:xv,output_pin_bearing_inner_ring:yv,housing:oM,housing_lobed:aM,housing_with_pins:cM});function zu(n){return{color:n.resolvedColor,material:n.material,smoothShading:n.smoothShading,opacity:n.opacity}}function EM(n,e,t,i=1){const s=e?Gh[e]:void 0;return s?new zp({color:n,metalness:s.metallic,roughness:s.roughness,flatShading:!t,transparent:i<1,opacity:i,depthWrite:i>=1,envMapIntensity:1}):new Zr({color:n,flatShading:!t,transparent:i<1,opacity:i,depthWrite:i>=1})}function SM(n,e,t,i,s,r){const o=EM(r.color,r.material,r.smoothShading,r.opacity),a=new Ut(e,o);return a.name=n,a.castShadow=!0,a.receiveShadow=!0,{object:a,box:t,triangles:i,vertices:s}}function wM(n,e,t){const i=new Yt;i.setAttribute("position",new Ct(e.positions,3)),i.setAttribute("normal",new Ct(e.normals,3)),i.setIndex(new Cl(e.indices,1));const s=Oy(e),r=new En(new D(s.min[0],s.min[1],s.min[2]),new D(s.max[0],s.max[1],s.max[2]));return SM(n,i,r,e.triangleCount,e.vertexCount,t)}function Gu(){return new Promise(n=>{setTimeout(n,0)})}const Hu=6;async function TM(n){const e=performance.now(),t=n.onProgress??(()=>{}),i=n.params,s=n.pinFig??0;t("Building geometry (TS)...");const r=new fi;r.name="assembly";const o=new Map,a=new Map,l=[],c=[];let u=0,h=0;const f=(_,m,p)=>{const y=wM(_,m,p);o.set(_,y.object),a.set(_,y.box),u+=y.triangles,h+=y.vertices,t(`Building ${_}: ${y.triangles.toLocaleString("en-US")} triangles`)};let d=0;for(const _ of vi){const m=bM[_.key];if(m){const v=m(i);if(v===null||v.length===0){l.push(_.key);continue}Vs(_,s)||c.push(_.key);for(let x=0;x<v.length;x+=1)f(`${_.key}[${x}]`,v[x],zu(_)),(d+=1)>=Hu&&(d=0,await Gu());continue}const p=MM[_.key],y=p?p(i):null;if(y===null){l.push(_.key);continue}Vs(_,s)||c.push(_.key),f(_.key,y,zu(_)),(d+=1)>=Hu&&(d=0,await Gu())}const g=vM(i);if(g===null)l.push(bi),t("Skipping plates (this parameter set cannot build them)");else for(let _=0;_<g.length;_+=1)f(`${bi}[${_}]`,g[_],{color:ho(_),material:pi.material,smoothShading:pi.smoothShading,opacity:pi.opacity});for(const _ of o.values())r.add(_);return{group:r,meshes:o,boxes:a,totalTriangles:u,totalVertices:h,skippedByParams:l,hiddenByPinFig:c,elapsedMs:Math.round(performance.now()-e)}}function xl(n){return zb(n.boxes.values())}const AM=.35,RM=13204298,Vu=400,ga=200,Wu=13421772,CM=30,Xu=80;function PM(n,e){const t=new fi,i=new ns({colorWrite:!1,depthWrite:!1,depthTest:!1,stencilWrite:!0,stencilFunc:Wr,clippingPlanes:[e]});i.side=Vt,i.stencilFail=Eo,i.stencilZFail=Eo,i.stencilZPass=Eo;const s=new Ut(n,i);s.renderOrder=1,t.add(s);const r=new ns({colorWrite:!1,depthWrite:!1,depthTest:!1,stencilWrite:!0,stencilFunc:Wr,clippingPlanes:[e]});r.side=Bn,r.stencilFail=So,r.stencilZFail=So,r.stencilZPass=So;const o=new Ut(n,r);return o.renderOrder=1,t.add(o),t}class LM{scene;controls;clippingPlane=new Nn(new D(1,0,0),0);assembly=null;pieces=[];edgesBuilt=!1;clipMode=!1;wasPlaying=!1;capPlane=null;helper;grabQuad;raycaster=new nm;pointerNdc=new Oe;dragging=!1;lastPoint=null;lastMouse=new Oe;planeListener=null;modeListener=null;constructor(e,t){this.scene=e,this.controls=t,this.helper=new sm(this.clippingPlane,ga,Wu),this.helper.name="clip-widget",this.helper.visible=!1,this.scene.keepAcrossReload(this.helper),this.grabQuad=new Ut(new rs(ga,ga),new ns({color:Wu,transparent:!0,opacity:.08,side:rn,depthWrite:!1})),this.grabQuad.name="clip-grab",this.grabQuad.visible=!1,this.scene.keepAcrossReload(this.grabQuad);const i=this.scene.renderer.domElement;i.addEventListener("pointerdown",this.onPointerDown,{capture:!0}),i.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("pointercancel",this.onPointerUp),this.controls.setVisibilityListener(()=>this.refreshClipVisibility())}onPointerDown=e=>{if(!this.clipMode||e.button!==0||!this.grabQuad.visible||(this.raycaster.setFromCamera(this.castNdc(e),this.scene.camera),this.raycaster.intersectObject(this.grabQuad,!1).length===0))return;const t=this.raycaster.ray.intersectPlane(this.clippingPlane,new D);t&&(this.dragging=!0,this.lastPoint=t,this.lastMouse.set(e.clientX,e.clientY),this.scene.controls.enabled=!1,this.scene.renderer.domElement.setPointerCapture(e.pointerId),e.preventDefault(),e.stopPropagation())};onPointerMove=e=>{if(!this.clipMode)return;if(this.raycaster.setFromCamera(this.castNdc(e),this.scene.camera),!this.dragging||!this.lastPoint){const r=this.raycaster.intersectObject(this.grabQuad,!1).length>0;this.scene.renderer.domElement.style.cursor=r?"grab":"";return}const t=e.clientX-this.lastMouse.x,i=e.clientY-this.lastMouse.y;if(t===0&&i===0)return;this.lastMouse.set(e.clientX,e.clientY);const s=this.mouseDeltaToPlaneStep(t,i);s!==0&&(this.movePlaneBy(s),this.lastPoint.addScaledVector(this.clippingPlane.normal,s),e.preventDefault())};mouseDeltaToPlaneStep(e,t){if(!this.lastPoint)return 0;const i=this.scene.renderer.domElement.getBoundingClientRect(),s=this.lastPoint,r=this.projectToScreen(s,i),o=this.projectToScreen(s.clone().addScaledVector(this.clippingPlane.normal,1),i),a=o.x-r.x,l=o.y-r.y,c=a*a+l*l;if(c<1e-6)return 0;let u=(e*a+t*l)/c;return Math.abs(u)>Xu&&(u=Math.sign(u)*Xu),u}projectToScreen(e,t){const i=e.clone().project(this.scene.camera);return new Oe((i.x*.5+.5)*t.width,(.5-i.y*.5)*t.height)}onPointerUp=()=>{this.dragging&&(this.dragging=!1,this.lastPoint=null,this.scene.controls.enabled=!0)};castNdc(e){const t=this.scene.renderer.domElement.getBoundingClientRect();return this.pointerNdc.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),this.pointerNdc}get planePosition(){return-this.clippingPlane.constant}setPlanePosition(e){this.movePlaneBy(e-this.planePosition)}flipPlane(){this.clippingPlane.normal.negate(),this.clippingPlane.constant=-this.clippingPlane.constant,this.syncPlaneVisuals(),this.reportPlane()}resetPlane(){const e=this.axisOrigin();this.clippingPlane.normal.set(1,0,0),this.clippingPlane.constant=-e.dot(this.clippingPlane.normal),this.syncPlaneVisuals(),this.reportPlane()}axisOrigin(){const e=new D,t=this.assembly?.boxes.get("housing");if(t){const i=t.getCenter(new D);e.x=i.x,e.y=i.y}if(this.assembly){const i=xl(this.assembly);i.isEmpty()||(e.z=i.getCenter(new D).z)}return e}movePlaneBy(e){this.clippingPlane.constant-=e,this.syncPlaneVisuals(),this.reportPlane()}reportPlane(){this.planeListener?.()}syncPlaneVisuals(){const e=this.clippingPlane.coplanarPoint(new D),t=new kn().setFromUnitVectors(new D(0,0,1),this.clippingPlane.normal);for(const i of[this.capPlane,this.grabQuad])i&&(i.position.copy(e).addScaledVector(this.clippingPlane.normal,-.05),i.quaternion.copy(t))}attachAssembly(e){this.clipMode&&this.onToggleClip(!1),this.clearPieces(),this.assembly=e,this.edgesBuilt=!1,this.scene.renderer.localClippingEnabled=!0,this.buildPieces(e),this.buildCap(e),this.resetPlane()}clearPieces(){for(const e of this.pieces)this.scene.scene.remove(e.body),IM(e.body),e.edges&&(this.scene.scene.remove(e.edges),e.edges.geometry.dispose(),e.edges.material.dispose());this.pieces=[],this.capPlane&&(this.scene.scene.remove(this.capPlane),this.capPlane.geometry.dispose(),this.capPlane.material.dispose(),this.capPlane=null)}buildPieces(e){const t=[];for(const s of vi){if(e.meshes.has(s.key)){t.push({key:s.key,group:s.clipGroup,module:s.module,color:s.resolvedColor});continue}for(let r=0;;r+=1){const o=`${s.key}[${r}]`;if(!e.meshes.has(o))break;t.push({key:o,group:s.clipGroup,module:s.module,color:s.resolvedColor})}}for(const s of e.meshes.keys()){const r=fl(s);r!==null&&t.push({key:s,group:"common",module:pi.module,color:ho(r)})}const i=this.controls.kinematics.currentGeometry;for(const s of t){const r=e.meshes.get(s.key),o=new Zr({color:s.color,metalness:0,roughness:.9,flatShading:!0,clipShadows:!0,clippingPlanes:[this.clippingPlane]}),a=new Ut(r.geometry,o);if(a.name=`clip:${s.key}`,a.visible=!1,a.castShadow=!0,a.receiveShadow=!0,fl(s.key)!==null||pl(s.key)!==null){const c=to(s.key,i,{modeFig:0,frame:0,explode:0});a.position.set(c.x,c.y,c.z),a.rotation.z=c.rotZ}const l=PM(r.geometry,this.clippingPlane);a.add(l),this.scene.add(a),this.pieces.push({...s,body:a,stencil:l,edges:null})}}ensureEdges(){if(!this.edgesBuilt){for(const e of this.pieces){const t=new Rh(e.body.geometry,CM),i=new hs({color:ad(e.color),linewidth:2,clippingPlanes:[this.clippingPlane]}),s=new co(t,i);s.name=`clip-edges:${e.key}`,s.position.copy(e.body.position),s.rotation.z=e.body.rotation.z,s.visible=!1,this.scene.add(s),e.edges=s}this.edgesBuilt=!0}}buildCap(e){const t=xl(e),s=(t.isEmpty()?100:Math.max(t.getBoundingSphere(new xi).radius,10))*2.4,r=new rs(s,s),o=new Zr({color:RM,metalness:0,roughness:.9,side:rn,stencilWrite:!0,stencilFunc:Ef,stencilRef:0,stencilFail:Mo,stencilZFail:Mo,stencilZPass:Mo}),a=new Ut(r,o);a.name="clip-cap",a.renderOrder=2,a.visible=!1,this.scene.add(a),this.capPlane=a}get enabled(){return this.clipMode}setModeListener(e){this.modeListener=e}setPlaneListener(e){this.planeListener=e}onToggleClip(e){if(e!==this.clipMode){if(e&&this.pieces.length===0){this.scene.report("⚠️ No parts for section mode yet (waiting for mesh)");return}if(this.clipMode=e,e)this.ensureEdges(),this.wasPlaying=this.controls.playing,this.controls.kinematics.pause(),this.controls.setMainActorsVisible(!1),this.scene.setBrightnessBoost(AM),this.resetPlane(),this.refreshClipVisibility(),this.helper.visible=!0,this.grabQuad.visible=!0,this.capPlane&&(this.capPlane.visible=!0),this.scene.report(`🪚 Section Mode: On · ${this.pieces.filter(t=>t.body.visible).length} parts · plane ${this.planePosition.toFixed(1)} mm`);else{for(const t of this.pieces)t.body.visible=!1,t.edges&&(t.edges.visible=!1);this.capPlane&&(this.capPlane.visible=!1),this.helper.visible=!1,this.grabQuad.visible=!1,this.scene.renderer.domElement.style.cursor="",this.controls.setMainActorsVisible(!0),this.scene.clearBrightnessBoost(),this.wasPlaying&&(this.controls.kinematics.play(),this.wasPlaying=!1),this.scene.report("Section Mode: Off")}this.modeListener?.()}}refreshClipVisibility(){if(!this.clipMode)return;const e=this.controls.state.pinFig,t={housing:e===0,housing_with_pins:e===2,pins_only:e===0,nonepin:e===1},i=this.controls.state.moduleVisible,s=this.controls.state.showEdges;for(const r of this.pieces){const o=(t[r.group]??!0)&&i[r.module]!==!1;r.body.visible=o,r.edges&&(r.edges.visible=o&&s)}}dispose(){this.onToggleClip(!1),this.clearPieces(),this.scene.scene.remove(this.helper),this.scene.scene.remove(this.grabQuad),this.helper.geometry.dispose(),this.helper.material.dispose(),this.grabQuad.geometry.dispose(),this.grabQuad.material.dispose();const e=this.scene.renderer.domElement;e.removeEventListener("pointerdown",this.onPointerDown,{capture:!0}),e.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointercancel",this.onPointerUp)}}function IM(n){n.traverse(e=>{const i=e.material;if(Array.isArray(i))for(const s of i)s.dispose?.();else i?.dispose?.()})}const io=1,Kl="cycloid.gearbox.workspace.v1";let Ss;function Jl(){if(Ss===void 0){Ss=null;try{const n="__cycloid_probe__";window.localStorage.setItem(n,"1"),window.localStorage.removeItem(n),Ss=window.localStorage}catch{Ss=null}}return Ss}function yd(n){if(typeof n!="object"||n===null)return null;const e=n,t=e.params,i=typeof t=="object"&&t!==null?t:e,s=Object.keys(i).filter(o=>o in Wt);if(s.length===0)return null;const r={...Wt};for(const o of s){const a=i[o];if(typeof a=="number"||typeof a=="boolean"||typeof a=="string"){if(typeof Wt[o]=="number"&&!Number.isFinite(Number(a)))continue;r[o]=a}}return Bl(r)}function Ql(){const n=Jl();if(!n)return null;const e=n.getItem(Kl);if(!e)return null;try{const t=JSON.parse(e);if(t.version!==io)return null;const i=yd(t);return i?{version:io,savedAt:typeof t.savedAt=="string"?t.savedAt:"",params:i}:null}catch{return null}}function xo(n){const e=Jl();if(!e)return null;const t={version:io,savedAt:new Date().toISOString(),params:{...n}};try{return e.setItem(Kl,JSON.stringify(t)),t}catch{return null}}function vd(){Jl()?.removeItem(Kl)}function DM(n=new Date){const e=t=>String(t).padStart(2,"0");return`cycloid-workspace-${n.getFullYear()}${e(n.getMonth()+1)}${e(n.getDate())}-${e(n.getHours())}${e(n.getMinutes())}.json`}function bd(n){const e={version:io,savedAt:new Date().toISOString(),params:n};return`${JSON.stringify(e,null,2)}
`}function NM(n){let e;try{e=JSON.parse(n)}catch{throw new Error("The file is not valid JSON")}const t=yd(e);if(!t)throw new Error("No known parameters found in the file (must contain shared-parameters keys)");return t}function FM(n){const e=new Date(n);return Number.isNaN(e.getTime())?n:e.toLocaleString("en-GB",{hour12:!1})}const Ps=Object.freeze({show_output_pins:{key:"show_output_pins",label:"Show Output Pins & Disc Holes",group:"geometry",kind:"boolean",min:null,max:null,step:null,note:"Show disc pin holes + output pins"},mode_fig:{key:"mode_fig",label:"mode_fig",group:"live",kind:"select",min:null,max:null,step:null,options:["Mode 1","Mode 2"],optionValues:[0,1],note:"Mode 1 = Inverted Cycloidal Drive · Mode 2 = Cycloidal Drive (switches instantly)"},fm:{key:"fm",label:"fm",group:"live",kind:"number",min:-100,max:100,step:.1,note:"Disc-pack speed/direction (>0 / <0) — applies instantly, no rebuild"},pin_fig:{key:"pin_fig",label:"pin_fig",group:"live",kind:"select",min:null,max:null,step:null,options:["Housing - Pins","NonePin","Housing + Pins"],optionValues:[0,1,2],note:'Housing type: "Housing - Pins" / "NonePin" / "Housing + Pins" (switches instantly)'},sleeve_outer:{key:"sleeve_outer",label:"Outer Radius Bearing ( 2D - 3D )",group:"geometry",kind:"number",min:1,max:100,step:.1},sleeve_inner:{key:"sleeve_inner",label:"Inner Radius Bearing ( 2D - 3D )",group:"geometry",kind:"number",min:.5,max:100,step:.1},sleeve_hight:{key:"sleeve_hight",label:"Hight Bearing  ( 3D )",group:"geometry",kind:"number",min:.5,max:30,step:.1},radius_one:{key:"radius_one",label:"Radius One",group:"geometry",kind:"number",min:1,max:100,step:.1},radius_two:{key:"radius_two",label:"Radius Two",group:"geometry",kind:"number",min:1,max:100,step:.1},flange_high01:{key:"flange_high01",label:"FlangeHigh01 (Bottom plate)",group:"geometry",kind:"number",min:.5,max:50,step:.1},flange_high02:{key:"flange_high02",label:"FlangeHigh02 (Upper plate)",group:"geometry",kind:"number",min:.5,max:50,step:.1},input_inner_bearing:{key:"input_inner_bearing",label:"Input Inner Bearing",group:"geometry",kind:"number",min:1,max:100,step:.1},input_hight_bearing:{key:"input_hight_bearing",label:"Input Hight Bearing",group:"geometry",kind:"number",min:.5,max:50,step:.1},offset_drive_outer:{key:"offset_drive_outer",label:"Outer Radius Offset",group:"geometry",kind:"number",min:1,max:100,step:.1},offset_drive_high01:{key:"offset_drive_high01",label:"Offset Drive High01 (Ground floor)",group:"geometry",kind:"number",min:.5,max:50,step:.1},offset_drive_high02:{key:"offset_drive_high02",label:"Offset Drive High02 (Upper floor)",group:"geometry",kind:"number",min:.5,max:50,step:.1},wide_or:{key:"wide_or",label:"Wide OR",group:"geometry",kind:"number",min:1,max:100,step:.1},wide_hight:{key:"wide_hight",label:"Wide Hight",group:"geometry",kind:"number",min:.5,max:50,step:.1},end_plate_hight:{key:"end_plate_hight",label:"End Plate Hight",group:"geometry",kind:"number",min:1,max:50,step:.1},hole_count:{key:"hole_count",label:"Hole Count",group:"geometry",kind:"integer",min:1,max:24,step:1},hole_radius:{key:"hole_radius",label:"Hole Radius",group:"geometry",kind:"number",min:.1,max:20,step:.01},bolt_circle:{key:"bolt_circle",label:"Pitch Radius",group:"geometry",kind:"number",min:1,max:200,step:.01},fp_out_hole_count:{key:"fp_out_hole_count",label:"Hole Count",group:"geometry",kind:"integer",min:1,max:24,step:1},fp_out_hole_pitch:{key:"fp_out_hole_pitch",label:"Hole Pitch",group:"geometry",kind:"number",min:1,max:100,step:.01},fp_out_hole_radius:{key:"fp_out_hole_radius",label:"Hole Radius",group:"geometry",kind:"number",min:.1,max:20,step:.01},fp_out_thickness:{key:"fp_out_thickness",label:"Plate Thickness",group:"geometry",kind:"number",min:.5,max:50,step:.1},fp_out_r14_depth:{key:"fp_out_r14_depth",label:"R14 Depth",group:"geometry",kind:"number",min:0,max:50,step:.01},fpmi_r24:{key:"fpmi_r24",label:"Outer Radius",group:"geometry",kind:"number",min:1,max:100,step:1},fpmi_r2:{key:"fpmi_r2",label:"Inner Radius",group:"geometry",kind:"number",min:.1,max:20,step:1},fpmi_bcd:{key:"fpmi_bcd",label:"Pitch Radius",group:"geometry",kind:"number",min:1,max:100,step:1},fpmi_hole_count:{key:"fpmi_hole_count",label:"Hole Count",group:"geometry",kind:"integer",min:1,max:24,step:1},fpmi_thickness:{key:"fpmi_thickness",label:"Plate Thickness",group:"geometry",kind:"number",min:.5,max:50,step:1},fpmi_high01:{key:"fpmi_high01",label:"High of Outer Radius",group:"geometry",kind:"number",min:0,max:50,step:1},fpmi_high02:{key:"fpmi_high02",label:"High of Inner Radius",group:"geometry",kind:"number",min:0,max:50,step:1},d:{key:"d",label:"Outside Diameter:(OD Bearing)",group:"geometry",kind:"number",min:2,max:100,step:1},housing_pins:{key:"housing_pins",label:"Bore Radius:(IR Bearing)",group:"geometry",kind:"number",min:.5,max:100,step:.1},outerring_bearing_height:{key:"outerring_bearing_height",label:"Hight:(Bearing) --> 3D Viewer",group:"geometry",kind:"number",min:1,max:20,step:.1},n:{key:"n",label:"Output Pins Count:(n)",group:"geometry",kind:"integer",min:2,max:50,step:1},Rd:{key:"Rd",label:"Output Pitch Radius:(Rd)",group:"geometry",kind:"number",min:1,max:150,step:1},p:{key:"p",label:"Outside Radius:(OR Bearing)",group:"geometry",kind:"number",min:1,max:100,step:1},output_pins:{key:"output_pins",label:"Bore Output Radius:(IR Bearing)",group:"geometry",kind:"number",min:.5,max:100,step:.1},powerout_bearing_height:{key:"powerout_bearing_height",label:"Hight:(Bearing) --> (3D)",group:"geometry",kind:"number",min:1,max:20,step:.1},num_plates:{key:"num_plates",label:"Plates (1-10)",group:"geometry",kind:"integer",min:1,max:10,step:1},plate_thickness:{key:"plate_thickness",label:"Plate Thickness(3D)",group:"geometry",kind:"number",min:.1,max:20,step:.1},spacer_ring:{key:"spacer_ring",label:"Spacer Ring(3D)",group:"geometry",kind:"number",min:0,max:20,step:.1},clearance:{key:"clearance",label:"Clearance Cycloid Disc --> 3D Viewer",group:"geometry",kind:"number",min:0,max:2,step:.1},Rm:{key:"Rm",label:"Input Shaft Radius:(Rm)",group:"geometry",kind:"number",min:1,max:100,step:.1},input_shaft_length:{key:"input_shaft_length",label:"Input Shaft Length( Not Use )",group:"geometry",kind:"number",min:1,max:200,step:.1,note:"⚠️ No effect on geometry built in the browser — the slider was deactivated when _motor_support_bearing_dims was ported (kept to match the 2D GUI)"},e:{key:"e",label:"Eccentricity Offset:(e)",group:"geometry",kind:"number",min:.1,max:10,step:.1},D:{key:"D",label:"Base+Rolling Circle Diameter:(D)",group:"geometry",kind:"number",min:5,max:390,step:1},N:{key:"N",label:"Outer Ring Pins Count:(N)",group:"geometry",kind:"integer",min:2,max:60,step:1},outer_housing_radius:{key:"outer_housing_radius",label:"Outer Housing Radius:(OHR)",group:"geometry",kind:"number",min:1,max:200,step:1},offset_outer_pins:{key:"offset_outer_pins",label:"Offset Outer Pins",group:"geometry",kind:"number",min:1,max:40,step:.1},inner_housing_radius:{key:"inner_housing_radius",label:"Inner Housing Radius(For Housing-Pins Only )",group:"geometry",kind:"number",min:0,max:200,step:1,note:'0 = use pitch_diameter/2 · only applies in "Housing - Pins" mode'},machine_mode:{key:"machine_mode",label:"machine_mode",group:"cam",kind:"select",min:null,max:null,step:null,options:["CNC Milling Endmill Profile (G01/G00 Z-Axis)","Precision Wire-EDM Profile (M41 Fluid Target)"]},feed_rate:{key:"feed_rate",label:"CNC Feed Rate (mm/min)",group:"cam",kind:"number",min:1,max:3e3,step:.1},cut_depth:{key:"cut_depth",label:"Cut Depth (mm)",group:"cam",kind:"number",min:-50,max:0,step:.1},step_down:{key:"step_down",label:"Max Step Down per Pass (mm)",group:"cam",kind:"number",min:.1,max:10,step:.1},tool_type:{key:"tool_type",label:"Select Endmill Type",group:"cam",kind:"select",min:null,max:null,step:null,options:["2mm Carbide Endmill (Slotting/Fine)","4mm Carbide Endmill (General Profile)","6mm Carbide Endmill (Roughing/Heavy)","Custom Tool Settings"]},spindle_speed:{key:"spindle_speed",label:"Spindle Speed (RPM)",group:"cam",kind:"integer",min:null,max:null,step:100}}),UM=Object.freeze({D:["end_plate_input","housing","housing_with_pins","housing_lobed","housing_pins","ring_pin_spacers","ring_pin_bearing_outer_ring","ring_pin_bearing_balls","ring_pin_bearing_inner_ring","plates","end_plate_output"],N:["end_plate_input","housing","housing_with_pins","housing_lobed","housing_pins","ring_pin_spacers","ring_pin_bearing_outer_ring","ring_pin_bearing_balls","ring_pin_bearing_inner_ring","plates","end_plate_output"],Rd:["wide_bearing_bottom_outer_ring","wide_bearing_bottom_balls","wide_bearing_bottom_inner_ring","flange_plate_input","end_plate_input","housing","housing_with_pins","housing_lobed","housing_pins","plates","out_pins","output_flange","output_bearing_outer_ring","output_bearing_balls","output_bearing_inner_ring","wide_bearing_top_outer_ring","wide_bearing_top_balls","wide_bearing_top_inner_ring","out_pin_spacers","output_pin_bearing_outer_ring","output_pin_bearing_balls","output_pin_bearing_inner_ring","flange_plate_output","end_plate_output","housing_bolts"],Rm:["shaft","bearing_outer_ring","bearing_balls","bearing_inner_ring","eccentric_sleeves","input_bearing_outer_ring","input_bearing_balls","input_bearing_inner_ring","offset_drive1","offset_drive2","wide_bearing_bottom_outer_ring","wide_bearing_bottom_balls","wide_bearing_bottom_inner_ring","flange_plate_input","flange_plate_motor_input","end_plate_input","housing_pins","plates","output_flange","output_bearing_outer_ring","output_bearing_balls","output_bearing_inner_ring","wide_bearing_top_outer_ring","wide_bearing_top_balls","wide_bearing_top_inner_ring","flange_plate_output","end_plate_output","housing_bolts"],bolt_circle:["end_plate_input","housing","housing_with_pins","housing_lobed","end_plate_output","housing_bolts"],clearance:["plates"],d:["end_plate_input","housing","housing_with_pins","housing_lobed","housing_pins","ring_pin_spacers","ring_pin_bearing_outer_ring","ring_pin_bearing_balls","ring_pin_bearing_inner_ring","plates","end_plate_output"],e:["bearing_outer_ring","bearing_balls","bearing_inner_ring","eccentric_sleeves","wide_bearing_bottom_outer_ring","wide_bearing_bottom_balls","wide_bearing_bottom_inner_ring","flange_plate_input","end_plate_input","housing_lobed","housing_pins","plates","output_flange","output_bearing_outer_ring","output_bearing_balls","output_bearing_inner_ring","wide_bearing_top_outer_ring","wide_bearing_top_balls","wide_bearing_top_inner_ring","flange_plate_output","end_plate_output","housing_bolts"],end_plate_hight:["end_plate_input","end_plate_output"],flange_high01:["wide_bearing_bottom_outer_ring","wide_bearing_bottom_balls","wide_bearing_bottom_inner_ring","flange_plate_input","end_plate_input","housing_pins","output_flange","output_bearing_outer_ring","output_bearing_balls","output_bearing_inner_ring","wide_bearing_top_outer_ring","wide_bearing_top_balls","wide_bearing_top_inner_ring","flange_plate_output","end_plate_output","housing_bolts"],flange_high02:["wide_bearing_bottom_outer_ring","wide_bearing_bottom_balls","wide_bearing_bottom_inner_ring","flange_plate_input","end_plate_input","housing_pins","output_flange","output_bearing_outer_ring","output_bearing_balls","output_bearing_inner_ring","wide_bearing_top_outer_ring","wide_bearing_top_balls","wide_bearing_top_inner_ring","flange_plate_output","end_plate_output","housing_bolts"],fp_out_hole_count:["flange_plate_output"],fp_out_hole_pitch:["flange_plate_output"],fp_out_hole_radius:["flange_plate_output"],fp_out_r14_depth:["flange_plate_output"],fp_out_thickness:["flange_plate_output"],fpmi_bcd:["flange_plate_motor_input"],fpmi_high01:["flange_plate_motor_input"],fpmi_high02:["flange_plate_motor_input"],fpmi_hole_count:["flange_plate_motor_input"],fpmi_r2:["flange_plate_motor_input"],fpmi_r24:["flange_plate_motor_input"],fpmi_thickness:["shaft"],hole_count:["end_plate_input","housing","housing_with_pins","housing_lobed","end_plate_output","housing_bolts"],hole_radius:["end_plate_input","housing","housing_with_pins","housing_lobed","end_plate_output","housing_bolts"],housing_pins:["end_plate_input","housing","housing_pins","ring_pin_spacers","ring_pin_bearing_outer_ring","ring_pin_bearing_balls","ring_pin_bearing_inner_ring","end_plate_output"],inner_housing_radius:["housing"],input_hight_bearing:["input_bearing_outer_ring","input_bearing_balls","input_bearing_inner_ring","output_bearing_outer_ring","output_bearing_balls","output_bearing_inner_ring"],input_inner_bearing:["input_bearing_outer_ring","input_bearing_balls","input_bearing_inner_ring","offset_drive1","offset_drive2","output_bearing_outer_ring","output_bearing_balls","output_bearing_inner_ring"],n:["flange_plate_input","plates","out_pins","output_flange","out_pin_spacers","output_pin_bearing_outer_ring","output_pin_bearing_balls","output_pin_bearing_inner_ring"],num_plates:["shaft","bearing_outer_ring","bearing_balls","bearing_inner_ring","eccentric_sleeves","input_bearing_outer_ring","input_bearing_balls","input_bearing_inner_ring","offset_drive1","offset_drive2","wide_bearing_bottom_outer_ring","wide_bearing_bottom_balls","wide_bearing_bottom_inner_ring","flange_plate_input","flange_plate_motor_input","end_plate_input","housing","housing_with_pins","housing_lobed","housing_pins","ring_pin_spacers","ring_pin_bearing_outer_ring","ring_pin_bearing_balls","ring_pin_bearing_inner_ring","plates","out_pins","output_flange","output_bearing_outer_ring","output_bearing_balls","output_bearing_inner_ring","wide_bearing_top_outer_ring","wide_bearing_top_balls","wide_bearing_top_inner_ring","out_pin_spacers","output_pin_bearing_outer_ring","output_pin_bearing_balls","output_pin_bearing_inner_ring","flange_plate_output","end_plate_output","housing_bolts"],offset_drive_high01:["shaft","offset_drive1","offset_drive2","flange_plate_motor_input"],offset_drive_high02:["shaft","offset_drive1","offset_drive2","flange_plate_motor_input"],offset_drive_outer:["offset_drive1","offset_drive2","flange_plate_motor_input"],offset_outer_pins:["housing"],outer_housing_radius:["end_plate_input","housing","housing_with_pins","housing_lobed","end_plate_output","housing_bolts"],outerring_bearing_height:["ring_pin_spacers","ring_pin_bearing_outer_ring","ring_pin_bearing_balls","ring_pin_bearing_inner_ring"],output_pins:["flange_plate_input","out_pins","output_flange","out_pin_spacers","output_pin_bearing_outer_ring","output_pin_bearing_balls","output_pin_bearing_inner_ring"],p:["wide_bearing_bottom_outer_ring","wide_bearing_bottom_balls","wide_bearing_bottom_inner_ring","flange_plate_input","end_plate_input","housing","housing_with_pins","housing_lobed","housing_pins","plates","out_pins","output_flange","output_bearing_outer_ring","output_bearing_balls","output_bearing_inner_ring","wide_bearing_top_outer_ring","wide_bearing_top_balls","wide_bearing_top_inner_ring","out_pin_spacers","output_pin_bearing_outer_ring","output_pin_bearing_balls","output_pin_bearing_inner_ring","flange_plate_output","end_plate_output","housing_bolts"],plate_thickness:["shaft","bearing_outer_ring","bearing_balls","bearing_inner_ring","eccentric_sleeves","input_bearing_outer_ring","input_bearing_balls","input_bearing_inner_ring","offset_drive1","offset_drive2","wide_bearing_bottom_outer_ring","wide_bearing_bottom_balls","wide_bearing_bottom_inner_ring","flange_plate_input","flange_plate_motor_input","end_plate_input","housing","housing_with_pins","housing_lobed","housing_pins","ring_pin_spacers","ring_pin_bearing_outer_ring","ring_pin_bearing_balls","ring_pin_bearing_inner_ring","plates","out_pins","output_flange","output_bearing_outer_ring","output_bearing_balls","output_bearing_inner_ring","wide_bearing_top_outer_ring","wide_bearing_top_balls","wide_bearing_top_inner_ring","out_pin_spacers","output_pin_bearing_outer_ring","output_pin_bearing_balls","output_pin_bearing_inner_ring","flange_plate_output","end_plate_output","housing_bolts"],powerout_bearing_height:["out_pin_spacers","output_pin_bearing_outer_ring","output_pin_bearing_balls","output_pin_bearing_inner_ring"],radius_one:["input_bearing_outer_ring","input_bearing_balls","input_bearing_inner_ring","wide_bearing_bottom_outer_ring","wide_bearing_bottom_balls","wide_bearing_bottom_inner_ring","flange_plate_input","end_plate_input","housing_pins","output_flange","output_bearing_outer_ring","output_bearing_balls","output_bearing_inner_ring","wide_bearing_top_outer_ring","wide_bearing_top_balls","wide_bearing_top_inner_ring","flange_plate_output","end_plate_output","housing_bolts"],radius_two:["wide_bearing_bottom_outer_ring","wide_bearing_bottom_balls","wide_bearing_bottom_inner_ring","flange_plate_input","end_plate_input","housing_pins","output_flange","output_bearing_outer_ring","output_bearing_balls","output_bearing_inner_ring","wide_bearing_top_outer_ring","wide_bearing_top_balls","wide_bearing_top_inner_ring","flange_plate_output","end_plate_output","housing_bolts"],show_output_pins:["flange_plate_input","plates","out_pins","output_flange","out_pin_spacers","output_pin_bearing_outer_ring","output_pin_bearing_balls","output_pin_bearing_inner_ring"],sleeve_hight:["bearing_outer_ring","bearing_balls","bearing_inner_ring"],sleeve_inner:["bearing_outer_ring","bearing_balls","bearing_inner_ring","eccentric_sleeves"],sleeve_outer:["bearing_outer_ring","bearing_balls","bearing_inner_ring","wide_bearing_bottom_outer_ring","wide_bearing_bottom_balls","wide_bearing_bottom_inner_ring","flange_plate_input","end_plate_input","housing_pins","plates","output_flange","output_bearing_outer_ring","output_bearing_balls","output_bearing_inner_ring","wide_bearing_top_outer_ring","wide_bearing_top_balls","wide_bearing_top_inner_ring","flange_plate_output","end_plate_output","housing_bolts"],spacer_ring:["shaft","bearing_outer_ring","bearing_balls","bearing_inner_ring","eccentric_sleeves","input_bearing_outer_ring","input_bearing_balls","input_bearing_inner_ring","offset_drive1","offset_drive2","wide_bearing_bottom_outer_ring","wide_bearing_bottom_balls","wide_bearing_bottom_inner_ring","flange_plate_input","flange_plate_motor_input","end_plate_input","housing","housing_with_pins","housing_lobed","housing_pins","ring_pin_spacers","ring_pin_bearing_outer_ring","ring_pin_bearing_balls","ring_pin_bearing_inner_ring","out_pins","output_flange","output_bearing_outer_ring","output_bearing_balls","output_bearing_inner_ring","wide_bearing_top_outer_ring","wide_bearing_top_balls","wide_bearing_top_inner_ring","out_pin_spacers","output_pin_bearing_outer_ring","output_pin_bearing_balls","output_pin_bearing_inner_ring","flange_plate_output","end_plate_output","housing_bolts"],wide_hight:["wide_bearing_bottom_outer_ring","wide_bearing_bottom_balls","wide_bearing_bottom_inner_ring","end_plate_input","housing_pins","wide_bearing_top_outer_ring","wide_bearing_top_balls","wide_bearing_top_inner_ring","end_plate_output","housing_bolts"],wide_or:["wide_bearing_bottom_outer_ring","wide_bearing_bottom_balls","wide_bearing_bottom_inner_ring","end_plate_input","wide_bearing_top_outer_ring","wide_bearing_top_balls","wide_bearing_top_inner_ring","end_plate_output"]});function $u(n){return UM[n]??[]}const OM=Object.freeze({shaft:["Rm"],bearing_outer_ring:["sleeve_outer","sleeve_inner","sleeve_hight"],bearing_balls:["sleeve_outer","sleeve_inner","sleeve_hight"],bearing_inner_ring:["sleeve_outer","sleeve_inner","sleeve_hight"],eccentric_sleeves:["sleeve_inner","e"],input_bearing_outer_ring:["input_inner_bearing","input_hight_bearing"],input_bearing_balls:["input_inner_bearing","input_hight_bearing"],input_bearing_inner_ring:["input_inner_bearing","input_hight_bearing"],offset_drive1:["offset_drive_outer","offset_drive_high01","offset_drive_high02"],offset_drive2:["offset_drive_outer","offset_drive_high01","offset_drive_high02"],wide_bearing_bottom_outer_ring:["wide_or","wide_hight"],wide_bearing_bottom_balls:["wide_or","wide_hight"],wide_bearing_bottom_inner_ring:["wide_or","wide_hight"],flange_plate_input:["radius_one","radius_two","flange_high01","flange_high02"],flange_plate_motor_input:["fpmi_r24","fpmi_r2","fpmi_bcd","fpmi_hole_count","fpmi_thickness","fpmi_high01","fpmi_high02"],end_plate_input:["end_plate_hight","hole_count","hole_radius","bolt_circle"],housing:["D","N","outer_housing_radius","offset_outer_pins","inner_housing_radius"],housing_with_pins:["D","N","outer_housing_radius"],housing_lobed:["D","N","outer_housing_radius"],housing_pins:["d","housing_pins"],ring_pin_spacers:["d","housing_pins","outerring_bearing_height"],ring_pin_bearing_outer_ring:["d","housing_pins","outerring_bearing_height"],ring_pin_bearing_balls:["d","housing_pins","outerring_bearing_height"],ring_pin_bearing_inner_ring:["d","housing_pins","outerring_bearing_height"],plates:["num_plates","plate_thickness","spacer_ring","clearance"],out_pins:["n","Rd","p","output_pins"],output_flange:["radius_one","radius_two","flange_high01","flange_high02"],output_bearing_outer_ring:["input_inner_bearing","input_hight_bearing"],output_bearing_balls:["input_inner_bearing","input_hight_bearing"],output_bearing_inner_ring:["input_inner_bearing","input_hight_bearing"],wide_bearing_top_outer_ring:["wide_or","wide_hight"],wide_bearing_top_balls:["wide_or","wide_hight"],wide_bearing_top_inner_ring:["wide_or","wide_hight"],out_pin_spacers:["n","Rd","p","output_pins","powerout_bearing_height"],output_pin_bearing_outer_ring:["n","Rd","p","output_pins","powerout_bearing_height"],output_pin_bearing_balls:["n","Rd","p","output_pins","powerout_bearing_height"],output_pin_bearing_inner_ring:["n","Rd","p","output_pins","powerout_bearing_height"],flange_plate_output:["fp_out_hole_count","fp_out_hole_pitch","fp_out_hole_radius","fp_out_thickness","fp_out_r14_depth"],end_plate_output:["end_plate_hight","hole_count","hole_radius","bolt_circle"],housing_bolts:["hole_count","hole_radius","bolt_circle"]}),Md=["Housing - Pins","NonePin","Housing + Pins"],BM=Object.fromEntries(Md.map((n,e)=>[n,e]));function kM(n,e,t,i,s,r){const o=new Yl({container:n,title:"CYROACT Version 0.0.1 (23.September.2026)"});o.domElement.style.fontFamily="'Leelawadee UI', 'Noto Sans Thai', system-ui, sans-serif",o.close();const a=o.addFolder("Part parameters"),l=o.addFolder("Workspace"),c={savedAt:"(none yet)"};l.add({run:()=>{r.onExportWorkspace?.()}},"run").name("⬇ Export settings (.json)");const u=document.createElement("input");u.type="file",u.accept=".json,application/json",u.id="workspace-import-input",u.style.position="absolute",u.style.width="1px",u.style.height="1px",u.style.opacity="0",u.style.pointerEvents="none",u.addEventListener("change",()=>{const B=u.files?.[0];u.value="",B&&r.onImportWorkspace?.(B)}),l.domElement.appendChild(u),l.add({run:()=>u.click()},"run").name("⬆ Import settings (.json)"),l.add({run:()=>{window.confirm(`Reset all parameters to their defaults?
(Saved values in this browser will be erased)`)&&r.onResetWorkspace?.()}},"run").name("↺ Reset to defaults");const h=l.add(c,"savedAt").name("Last saved").disable();function f(){const B=r.getWorkspaceSavedAt?.()??null;c.savedAt=B?FM(B):"(none yet)",h.updateDisplay()}f();const d=o.addFolder("Animation"),g={playing:t.playing,frame:t.frame,mode:t.modeFig===1?"Mode 2":"Mode 1",speed:t.framesPerRevolution};function _(){return Math.max(1,Math.round(Math.abs(g.speed))-1)}function m(){g.playing=t.playing,p.updateDisplay(),y.updateDisplay(),v.updateDisplay()}const p=d.add({run:()=>{t.kinematics.play(),m()}},"run").name("▶ Play (Space)"),y=d.add({run:()=>{t.kinematics.pause(),m()}},"run").name("⏸ Pause (Space)"),v=d.add({run:()=>{t.kinematics.stop(),g.frame=0,T.updateDisplay(),m(),he()}},"run").name("⏹ Stop (Reset)");g.frame=t.frame;let x=_();const T=d.add(g,"frame",0,x,1).name("Frame").onChange(B=>{t.playing&&(t.kinematics.pause(),m()),t.setFrame(Math.round(B)),he()}),S=d.add(g,"mode",["Mode 1","Mode 2"]).name("Mechanism mode").onChange(B=>{t.setModeFig(B==="Mode 2"?1:0),he()}),A=Math.max(10,Math.abs(g.speed)*3),L=d.add(g,"speed",-A,A,1).name("Speed (frames / rev)").onChange(B=>{t.setFramesPerRevolution(B);const $=_();x!==$&&(x=$,T.max($),g.frame>$&&(g.frame=$,t.setFrame($)),T.updateDisplay()),he()});d.open();const E=window.setInterval(()=>{const B=document.activeElement;if(B instanceof HTMLInputElement||B instanceof HTMLSelectElement)return;const $=_(),ne=(Math.round(t.frame)%($+1)+($+1))%($+1);g.frame!==ne&&(g.frame=ne,T.updateDisplay()),t.playing&&he()},100),M=o.addFolder("Outer housing"),C={ringGear:t.state.pinFig},N=M.add(C,"ringGear",BM).name("Ring gear type").onChange(B=>{r.onRingGearChange?.(B)});M.add({info:"One type at a time · G-Code/BOM use the value at the moment you press their buttons (file name + stator mode)"},"info").name("Note").disable(),M.open();function k(){C.ringGear!==t.state.pinFig&&(C.ringGear=t.state.pinFig,N.updateDisplay())}const U={projection:"perspective",brightness:t.state.brightness,explode:t.state.explode,showEdges:t.state.showEdges,xray:t.state.xray,showOutputPins:!!(r.getParams().show_output_pins??!0),studio:e.renderQuality==="Studio",grid:e.gridVisible,axes:e.axesVisible},z=o.addFolder("Camera"),Y=z.add(U,"projection",{Perspective:"perspective","Parallel Projection":"orthographic"}).name("Projection").onChange(B=>{e.applyProjection(B),r.onProjectionChange?.(B),he()});z.add({reset:()=>{e.resetCamera(),he()}},"reset").name("Reset view"),z.add({frame:()=>{q()}},"frame").name("Frame visible parts");function q(){const B=t.frameVisible();B&&!B.isEmpty()&&e.setGridBounds(Zs(B)),he()}const H=o.addFolder("Display");H.add(U,"brightness",sd,rd,.05).name("Brightness").onChange(B=>{t.setBrightness(B),he()});const te=H.add(U,"explode",ml,od,.01).name("Explode").onChange(B=>{t.setExplode(B),he()}).onFinishChange(()=>{q()}),ee=H.add(U,"showEdges").name("Outline edges").onChange(B=>{t.setEdgesVisible(B),he()}),ce=H.add(U,"xray").name("X-Ray").onChange(B=>{t.setXray(B),he()}),Ee=H.add(U,"showOutputPins").name(Ps.show_output_pins?.label??"Show output pins & disc holes").onChange(B=>{r.onShowOutputPinsChange?.(B),he()});Ps.show_output_pins?.note&&(Ee.domElement.title=Ps.show_output_pins.note),H.add(U,"studio").name("Studio mode (shadows + IBL)").onChange(B=>{e.setRenderQuality(B),he()});const Pe=H.add(U,"grid").name("Grid").onChange(B=>{e.setGridVisible(B),he()}),Ie=H.add(U,"axes").name("Axes").onChange(B=>{e.setAxesVisible(B),he()});H.open();function Ne(){const B=!!(r.getParams().show_output_pins??!0);U.showOutputPins!==B&&(U.showOutputPins=B,Ee.updateDisplay())}const X={enabled:i.enabled,position:i.planePosition},K=o.addFolder("Section view"),be=K.add(X,"enabled").name("Section mode — C").onChange(B=>{i.onToggleClip(B),m(),he()}),Ue=K.add(X,"position",-Vu,Vu,1).name("Plane position (mm)").onChange(B=>{i.setPlanePosition(B),he()});K.add({run:()=>{i.flipPlane(),we()}},"run").name("Flip kept side"),K.add({run:()=>{i.resetPlane(),we()}},"run").name("Reset plane");function we(){X.enabled=i.enabled,X.position=i.planePosition,be.updateDisplay(),Ue.updateDisplay()}i.setModeListener(()=>{we(),m(),he()}),i.setPlaneListener(()=>{X.position=i.planePosition,Ue.updateDisplay()});const Ye=o.addFolder("Assembly");let bt=null;const P=new Map;function Qe(){bt?.destroy(),P.clear();const B=Ye.addFolder("Modules & parts");bt=B,B.add({showAll:()=>{t.setAllPartsVisible(!0),Qe(),r.onPartsVisibilityChanged?.()},hideAll:()=>{t.setAllPartsVisible(!1),Qe(),r.onPartsVisibilityChanged?.()}},"showAll").name("All:");const $=t.tree();for(const{module:me,parts:Me}of $){const de=B.addFolder(me.labelEn.replace("Module: ","")),ke={visible:t.state.moduleVisible[me.key]!==!1};de.add(ke,"visible").name(`Module ${me.labelEn.replace("Module: ","")}`).onChange(I=>{t.setModuleVisible(me.key,I);for(const ie of Me)P.get(ie.key)?.updateDisplay();he(),r.onPartsVisibilityChanged?.()});for(const I of Me){const ie={visible:I.available&&t.isVisible(I.key)},ue=de.add(ie,"visible").name(I.available?I.label:`${I.label} (not in this mode)`).onChange(ye=>{t.setPartVisible(I.key,ye),he(),r.onPartsVisibilityChanged?.()});ue.disable(!I.available),P.set(I.key,ue)}Me.length<=4?de.open():de.close()}const ne=t.unavailableKeys();ne.length>0&&B.add({info:`Not in this pin_fig mode: ${ne.join(", ")}`},"info").name("Parts not loaded").disable(),he()}const De=o.addFolder("Export");De.add({run:()=>{Re("stl")}},"run").name("STL (binary)"),De.add({run:()=>{Re("stl-parts")}},"run").name("STL per part (ZIP)"),De.add({run:()=>{Re("obj")}},"run").name("OBJ (text)"),De.add({run:()=>{Re("glb")}},"run").name("GLB (binary)"),De.add({run:()=>{Re("3mf")}},"run").name("3MF (binary)"),De.add({run:async()=>{try{const B=await Ib(e.renderer);r.onNotice?.(`✅ ${B}`)}catch(B){r.onNotice?.(`❌ Screenshot failed: ${B.message}`)}}},"run").name("Screenshot (PNG)"),De.add({info:"STEP/BREP cannot be done in the browser (requires OpenCASCADE on the Python side)"},"info").name("Note").disable();async function Re(B){const $=t.assemblyGroup;if(!$){r.onNotice?.("❌ No assembly to export yet");return}r.onNotice?.("⏳ Exporting...");try{const me=await{stl:()=>Sb($),"stl-parts":()=>Cb($),obj:()=>Pb($),glb:()=>Lb($),"3mf":()=>kb($)}[B]();r.onNotice?.(`✅ ${me}`)}catch(ne){r.onNotice?.(`❌ Export failed: ${ne.message}`)}}const _e=o.addFolder("G-Code & BOM (CAM)"),it=["machine_mode","feed_rate","cut_depth","step_down","tool_type","spindle_speed"],xe={},Ge=r.getParams();for(const B of it)xe[B]=Ge[B]??"";const _t=[];function ht(B){if(B.kind==="select"&&B.options&&B.options.length>0){const ne={};return B.options.forEach((me,Me)=>{ne[me]=B.optionValues?.[Me]??me}),_e.add(xe,B.key,ne)}if(B.min!==null&&B.max!==null&&B.step!==null)return _e.add(xe,B.key,B.min,B.max,B.step);const $=_e.add(xe,B.key);return B.step!==null&&$.step(B.step),$}for(const B of it){const $=Ps[B];if(!$)continue;const ne=ht($);ne.name(B==="machine_mode"?"Machine — CNC / Wire-EDM":$.label),ne.onFinishChange(me=>{r.onCamParamChange?.(B,me)}),_t.push({key:B,controller:ne})}function R(){const B=r.getParams();for(const{key:$,controller:ne}of _t){const me=B[$];me!==void 0&&xe[$]!==me&&(xe[$]=me,ne.updateDisplay())}}_e.add({run:()=>{b("gcode")}},"run").name("⬇ G-Code all layers (.nc) — choose folder"),_e.add({run:()=>{b("bom")}},"run").name("⬇ BOM (CSV)"),_e.add({run:()=>{b("mass")}},"run").name("⬇ Mass report / center of gravity (TXT)");async function b(B){r.onNotice?.(B==="gcode"?"⏳ Generating G-Code...":"⏳ Computing mass...");try{const $=B==="gcode"?await s.downloadGcode():B==="bom"?await s.downloadBomCsv():await s.downloadMassReport();r.onNotice?.(`✅ ${$}`)}catch($){r.onNotice?.(`❌ ${$.message}`)}}const G=j(),Z=o.addFolder("Status"),Q=Object.keys(G).map(B=>{const $=Z.add(G,B).name(B).disable();return{key:B,controller:$}});function j(){return{...e.describe(),partsShown:t.loadedKeys.filter(B=>t.isVisible(B)).length,partsTotal:t.loadedKeys.length,explodeMM:Math.round(t.explodeOffsetOf("end_plate_output")*10)/10,xray:t.state.xray?"On":"Off",edges:t.state.showEdges?"On":"Off",render:e.renderQuality,shadow:e.shadowsEnabled?"On":"Off",mode:t.modeFig===1?"Mode 2":"Mode 1",frame:t.frame,speed:t.framesPerRevolution,playing:t.playing?"On":"Off",section:i.enabled?"On":"Off",sectionPlane:Math.round(i.planePosition*10)/10,camMachine:s.status().machineMode,camGearSuffix:s.status().gearSuffix,camFileCount:s.status().fileCount}}function he(){const B=j();for(const{key:$,controller:ne}of Q){const me=B[$];me!==void 0&&G[$]!==me&&(G[$]=me,ne.updateDisplay())}}function le(B){if(B.ctrlKey||B.metaKey||B.altKey)return;const $=B.target;if(!($ instanceof HTMLInputElement||$ instanceof HTMLTextAreaElement)){switch(B.key.toLowerCase()){case"g":U.grid=!U.grid,e.setGridVisible(U.grid),Pe.updateDisplay();break;case"a":U.axes=!U.axes,e.setAxesVisible(U.axes),Ie.updateDisplay();break;case"p":U.projection=e.toggleProjection(),Y.updateDisplay();break;case"r":e.resetCamera();break;case"e":U.explode=U.explode>0?ml:1,t.setExplode(U.explode),te.updateDisplay(),q();break;case"f":q();break;case"x":U.xray=!U.xray,t.setXray(U.xray),ce.updateDisplay();break;case"b":U.showEdges=!U.showEdges,t.setEdgesVisible(U.showEdges),ee.updateDisplay();break;case"c":i.onToggleClip(!i.enabled),we(),m();break;case" ":t.playing?t.kinematics.pause():t.kinematics.play(),m();break;default:return}B.preventDefault(),he()}}window.addEventListener("keydown",le,!0),Qe();function Te(){g.mode=t.modeFig===1?"Mode 2":"Mode 1",g.speed=t.framesPerRevolution;const B=_();x!==B&&(x=B,T.max(B));const $=Math.min(t.frame,B);g.frame!==$&&(g.frame=$);for(const ne of[S,L,T])ne.updateDisplay();m()}return{gui:o,partFolder:a,refreshStats:he,refreshTree:Qe,syncAnimation:Te,syncHousing:k,syncDisplayPins:Ne,syncCam:R,refreshWorkspace:f,destroy:()=>{window.removeEventListener("keydown",le,!0),window.clearInterval(E),i.setModeListener(null),i.setPlaneListener(null),t.kinematics.dispose(),o.destroy()}}}const zM=["output","reduction","input","aux"],Yu={created:"built with this parameter set",hidden:"hidden by the current pin_fig mode",skipped:"not built — switch off or parameter at its limit"};function GM(n,e){const t=document.createElement("div");t.className="sb";const i=document.createElement("div");i.className="sb-title";const s=document.createElement("span");s.className="sb-title-main",s.textContent="CYROACT Version 0.0.1 (23.September.2026)";const r=document.createElement("span");r.className="sb-title-sub",r.textContent="Cycloidal Robotic Actuation Technology";const o=document.createElement("span");o.className="sb-title-sub",o.textContent="Click a part to edit its parameters",i.appendChild(s),i.appendChild(r),i.appendChild(o),t.appendChild(i);const a=new Map,l=new Map,c=new Map,u=new Map;for(const E of zM){const M=Hh[E],C=kl(E),N=(M?.labelEn??E).replace("Module: ",""),k=document.createElement("section");k.className="sb-module collapsed",k.dataset.module=E;const U=document.createElement("div");U.className="sb-module-head";const z=document.createElement("input");z.type="checkbox",z.className="sb-toggle",z.checked=!0,z.title=`Show/hide all parts in ${N}`,z.addEventListener("change",()=>{e.onToggleModule(E,z.checked)}),U.appendChild(z),u.set(E,z);const Y=document.createElement("button");Y.type="button",Y.className="sb-module-collapse";const q=document.createElement("span");q.className="sb-caret",q.textContent="▼";const H=document.createElement("span");H.className="sb-module-name",H.textContent=N;const te=document.createElement("span");te.className="sb-module-count",te.textContent=`${C.length} parts`,Y.appendChild(q),Y.appendChild(H),Y.appendChild(te),Y.addEventListener("click",()=>{k.classList.toggle("collapsed")}),U.appendChild(Y),k.appendChild(U);const ee=document.createElement("div");ee.className="sb-parts";for(const ce of C){const Ee=document.createElement("div");Ee.className="sb-part-row",Ee.dataset.key=ce.key,Ee.dataset.state="created";const Pe=document.createElement("input");Pe.type="checkbox",Pe.className="sb-toggle",Pe.checked=!0,Pe.title=`Show/hide ${ce.label}`,Pe.addEventListener("change",()=>{e.onTogglePart(ce.key,Pe.checked)}),Ee.appendChild(Pe),c.set(ce.key,Pe);const Ie=document.createElement("button");Ie.type="button",Ie.className="sb-part",Ie.dataset.key=ce.key,Ie.title=`${ce.label} (${ce.key})
· ${Yu.created}`;const Ne=document.createElement("span");Ne.className="sb-dot";const X=document.createElement("span");X.className="sb-label",X.textContent=ce.label,Ie.appendChild(Ne),Ie.appendChild(X),Ie.addEventListener("click",()=>{T(ce.key),e.onSelect(ce.key)}),Ee.appendChild(Ie),ee.appendChild(Ee),a.set(ce.key,Ie),l.set(ce.key,Ee)}k.appendChild(ee),t.appendChild(k)}const h=document.createElement("div");h.className="sb-legend";const f=document.createElement("div");f.className="sb-legend-item";const d=document.createElement("input");d.type="checkbox",d.className="sb-toggle",d.checked=!0,d.disabled=!0,d.tabIndex=-1;const g=document.createElement("span");g.textContent="Checkbox = show / hide a group or part",f.appendChild(d),f.appendChild(g),h.appendChild(f);for(const[E,M]of[["created","Built"],["hidden","Hidden by pin_fig"],["skipped","Not built in this set"]]){const C=document.createElement("div");C.className="sb-legend-item";const N=document.createElement("span");N.className="sb-dot",N.dataset.legend=E;const k=document.createElement("span");k.textContent=M,C.appendChild(N),C.appendChild(k),h.appendChild(C)}t.appendChild(h);const _=document.createElement("div");_.className="sb-footer";const m=document.createElement("a");m.className="sb-theory",m.href="./theory/",m.textContent="Theory",m.title="Geometry derivation of the cycloidal profile (Method 1)",_.appendChild(m);const p=document.createElement("span");p.className="sb-footer-sep",p.setAttribute("aria-hidden","true"),p.textContent="·",_.appendChild(p);const y=document.createElement("a");y.className="sb-notices",y.href="./THIRD_PARTY_NOTICES.txt",y.target="_blank",y.rel="noopener",y.textContent="Notices",y.title="Copyright and third-party license notices",_.appendChild(y),t.appendChild(_),n.appendChild(t);let v=null,x={skippedByParams:[]};function T(E){v!==null&&l.get(v)?.classList.remove("selected"),v=E,E!==null&&l.get(E)?.classList.add("selected")}function S(E){x=E;const M=new Set(E.skippedByParams),C=new Set(E.hiddenByPinFig);for(const[N,k]of l){const U=M.has(N)?"skipped":C.has(N)?"hidden":"created";k.dataset.state=U;const z=yn(N)?.label??N,Y=a.get(N);Y&&(Y.title=`${z} (${N})
· ${Yu[U]}`)}}function A(){const E=e.getVisibility(),M=new Set(x.skippedByParams);for(const[C,N]of c){const k=E.available.has(C);N.disabled=!k,N.checked=k&&E.partVisible[C]!==!1;const U=yn(C)?.label??C;N.title=k?`Show/hide ${U}`:`${U} — `+(M.has(C)?"not built with this parameter set":"not in the current ring gear mode")}for(const[C,N]of u)N.checked=E.moduleVisible[C]!==!1}function L(){t.remove()}return{select:T,setStatus:S,refreshVisibility:A,destroy:L}}const HM=90;function VM(n){const e=n.domElement,t=e.querySelector(".name");if(!t||e.clientWidth===0)return;const i=e.clientWidth-8;t.offsetWidth+HM>i&&e.classList.add("stacked-label")}function yl(n,e){const t=n*2**(e+1);if(Number.isInteger(t)&&t%2===1){const i=t*5**e,s=i%4===1?(i-1)/2:(i+1)/2,r=String(s).padStart(e+1,"0");return`${r.slice(0,-e)}.${r.slice(-e)}`}return n.toFixed(e)}function ju(n){const e=n,t=Number(e.D),i=Math.trunc(Number(e.N));if(!Number.isFinite(t)||!Number.isFinite(i)||t<=0||i<2)return"Base Circle(R) = -- mm  |  Rolling Circle (r) = -- mm";const s=t/2;return`Base Circle (R) = ${yl((i-1)*(s/i),2)} mm  |  Rolling Circle (r) = ${yl(s/i,1)} mm`}function qu(n){const e=n,t=Number(e.D),i=Math.trunc(Number(e.N));if(!Number.isFinite(t)||!Number.isFinite(i)||t<=0||i<2)return'If you select mode "NonePin" -> Adjust sli_e = Rolling Circle / 2';const r=t/2/i;return`If you select mode NonePin -> Adjust sli_e = Rolling Circle (r) / 2 = ${yl(r/2,1)} mm`}function WM(n,e){let t=null,i=null,s=[],r=null,o=null;function a(){t?.destroy(),t=null,s=[],r=null,o=null}function l(){const g=e.getParams();r&&(r.textContent=ju(g)),o&&(o.textContent=qu(g))}function c(g,_){const m=[`Parameter: ${g}`];_.note&&m.push(_.note);const p=$u(g);if(p.length>1){m.push(`* shared with ${p.length} parts:`);for(const y of p)m.push(`· ${yn(y)?.label??y}`)}return m.join(`
`)}function u(g,_){const m=g;if(_.kind==="boolean")return t.add(m,_.key);if(_.kind==="select"&&_.options&&_.options.length>0){const p={};return _.options.forEach((y,v)=>{p[y]=_.optionValues?.[v]??y}),t.add(m,_.key,p)}return _.min!==null&&_.max!==null&&_.step!==null?t.add(m,_.key,_.min,_.max,_.step):t.add(m,_.key)}function h(g){if(a(),i=g,g===null){const v=n.addFolder("Part parameters");v.add({info:"← Click a part in the list on the left"},"info").name("No part selected").disable(),v.open(),t=v;return}const _=yn(g),m=n.addFolder(`Parameters: ${_?.label??g}`);t=m;const p=e.getParams(),y=[...OM[g]??[]];y.length===0&&m.add({info:"(this part has no private parameters in the table)"},"info").disable();for(const v of y){const x=Ps[v];if(!x)continue;const T=u(p,x),S=$u(v).length>1;if(T.name(`${x.label}${S?" *":""}`),T.domElement.title=c(v,x),T.onFinishChange(()=>{e.onApply(v)}),v==="D"||v==="e"){const A=document.createElement("div");A.className="pp-calc-note",A.textContent=v==="D"?ju(p):qu(p),T.domElement.parentElement?.insertBefore(A,T.domElement),v==="D"?r=A:o=A}(v==="D"||v==="N")&&T.onChange(()=>l()),s.push({controller:T})}m.open();for(const v of s)VM(v.controller)}function f(){for(const g of s)g.controller.updateDisplay();l()}function d(){return i}return{showPart:h,refreshValues:f,currentPart:d}}function XM(n){const e=Math.max(Math.trunc(Number(n.N))-1,1),t=Number(n.e),i=Number(n.D)/2,s=i>1e-6?Math.asin(Math.max(-1,Math.min(1,e*t/i)))*180/Math.PI:0;return`Ratio = ${e} : 1  (N-1)
Mesh Angle (max) ~ ${s.toFixed(1)} deg  (e=${t.toFixed(2)})`}function ae(n,e){return Object.is(n,-0)?`-${0 .toFixed(e)}`:n.toFixed(e)}function vt(n,e,t){const i=n[e];if(typeof i=="number"&&Number.isFinite(i))return i;const s=Number(i);return Number.isFinite(s)?s:t}function Zu(n){const e=vt(n,"D",80),t=vt(n,"d",10),i=vt(n,"p",5),s=vt(n,"e",2),r=vt(n,"Rm",2.5),o=vt(n,"Rd",20),a=Math.max(2,Math.trunc(vt(n,"N",10))),l=Math.max(1,Math.trunc(vt(n,"num_plates",1))),c=e/2,u=(a-1)*(c/a),h=c/a,f=vt(n,"housing_pins",3),d=f||t*.5,g=t/2,_=vt(n,"clearance",0),m=vt(n,"output_pins",3),p=m||i,y=vt(n,"sleeve_outer",10),v=y||r+s+3,x=vt(n,"offset_outer_pins",7),T=vt(n,"inner_housing_radius",0);return{numPlates:l,rBase:u,rRoll:h,se:s,pinRadius:d,rollerRadius:g,toothClearance:_,discToothOffset:g+_,wallOffset:g-s,sleeveOuter:v,outputHolePitch:o,outputPinRadius:p,outputPinBearingRadius:i,holeCount:Math.max(1,Math.trunc(vt(n,"n",6))),showOutputPins:n.show_output_pins!==!1,housingRadius:c,innerHousingRadius:T,ringGearRollersCount:a,ringGearRollersRadius:d,housingHoleRadius:x||d,outerHousingRadius:vt(n,"outer_housing_radius",54)}}function _a(n){return{machineMode:String(n.machine_mode??"").includes("CNC")?"CNC":"Wire-EDM",feedRate:vt(n,"feed_rate",500),cutDepth:vt(n,"cut_depth",-1.5),stepDown:vt(n,"step_down",.5),spindleSpeed:Math.trunc(vt(n,"spindle_speed",4500))}}function $M(n){return{0:0,2:1,1:2}[n]??0}class Ns{geometry;constructor(e){this.geometry=e}static computeZPasses(e,t,i){if(e==="CNC"&&t<0){const s=[];let r=-i;for(;r>=t;)s.push(r),r-=i;return(s.length===0||s[s.length-1]>t)&&s.push(t),s}return[t]}static buildHeader(e,t,i){const s=["%","; --------------------------------------------------"];return s.push(...e),s.push("; --------------------------------------------------","G21          ; Set Units to Millimeters (mm)","G90          ; Absolute Positioning System"),t==="CNC"?s.push(`M03 S${i}    ; Start Spindle (Dynamic RPM)`):s.push("; M41","M03 S1000    ; Fake Spindle to Activate Candle Rendering Trace"),s}computeDiscCamAndProfile(e,t=1440){const i=e*(2*Math.PI/this.geometry.numPlates),s=-i*this.geometry.rRoll/this.geometry.rBase,r=this.geometry.se*Math.cos(i),o=this.geometry.se*Math.sin(i),a=di(0,2*Math.PI,Math.trunc(t)),l=fd(this.geometry.rBase,this.geometry.rRoll,this.geometry.se,this.geometry.discToothOffset,a),c=Math.cos(s),u=Math.sin(s),h=new Float64Array(l.x.length),f=new Float64Array(l.y.length);for(let d=0;d<l.x.length;d+=1){const g=l.x[d],_=l.y[d];h[d]=g*c-_*u+r,f[d]=g*u+_*c+o}return{cxCam:r,cyCam:o,x:h,y:f}}gcodeOpCenterBore(e,t,i,s,r,o){const a=t+s,l=[`; --- OPERATION 1: CUT CENTER BORE DISC #${e} ---`,"G00 Z5.0",`G00 X${ae(a,3)} Y${ae(i,3)} ; Move to start position`];for(const c of r){l.push(`G00 X${ae(a,3)} Y${ae(i,3)} ; Ensure position at entry`),l.push(`G01 Z${ae(c,2)} F150.0 ; Plunge to Z layer`);for(let u=1;u<=360;u+=1){const h=u*(Math.PI/180),f=t+s*Math.cos(h),d=i+s*Math.sin(h);l.push(`G01 X${ae(f,3)} Y${ae(d,3)} F${ae(o,1)}`)}}return l.push("G00 Z5.0"),l}gcodeOpOutputHoles(e,t,i,s,r,o){const a=[";",`; --- OPERATION 2: CUT ${this.geometry.holeCount} OUTPUT HOLES DISC #${e} ---`],l=3*Math.PI/(this.geometry.ringGearRollersCount-1)-Math.PI/3;for(let c=0;c<this.geometry.holeCount;c+=1){const u=c*(2*Math.PI/this.geometry.holeCount)+l,h=this.geometry.outputHolePitch*Math.cos(u)+t,f=this.geometry.outputHolePitch*Math.sin(u)+i,d=h+s,g=f;a.push(`; Hole #${c+1}`),a.push(`G00 X${ae(d,3)} Y${ae(g,3)} ; Rapid to safe starting rim position`);for(const _ of r){a.push(`G00 X${ae(d,3)} Y${ae(g,3)} ; Reset entry coordinate`),a.push(`G01 Z${ae(_,2)} F150.0 ; Plunge to Z layer`);for(let m=1;m<=360;m+=1){const p=m*(Math.PI/180),y=h+s*Math.cos(p),v=f+s*Math.sin(p);a.push(`G01 X${ae(y,3)} Y${ae(v,3)} F${ae(o,1)}`)}}a.push("G00 Z5.0")}return a}gcodeOpOuterProfile(e,t,i,s,r){const o=t[0],a=i[0],l=[";",`; --- OPERATION 3: CUT OUTER PROFILE DISC #${e} ---`,`G00 X${ae(o,3)} Y${ae(a,3)} ; Rapid to outer perimeter entry`];for(const c of s){l.push(`G00 X${ae(o,3)} Y${ae(a,3)} ; Safe entry alignment`),l.push(`G01 Z${ae(c,2)} F150.0 ; Plunge to Z layer`);for(let u=1;u<t.length;u+=1)l.push(`G01 X${ae(t[u],3)} Y${ae(i[u],3)} F${ae(r,1)}`);l.push(`G01 X${ae(o,3)} Y${ae(a,3)} ; Close Profile Loop`)}return l.push("G00 Z5.0","M05","M30","%"),l}generateDiscLayerGcode(e,t,i,s,r){const o=e+1,{cxCam:a,cyCam:l,x:c,y:u}=this.computeDiscCamAndProfile(e),h=this.geometry.sleeveOuter,f=this.geometry.outputPinBearingRadius+this.geometry.se;let d=Ns.buildHeader([`; MASTER CYCLOID G-CODE - CYCLOID_DISC_LAYER #${o} OF ${this.geometry.numPlates}`,`; MACHINE OPERATION MODE: ${t}`,`; PROFILE SPECS: CAM OFFSET e=${ae(this.geometry.se,2)} mm | CENTER (X=${ae(a,1)}, Y=${ae(l,1)})`],t,r);return d=d.concat(this.gcodeOpCenterBore(o,a,l,h,s,i)),this.geometry.showOutputPins?d=d.concat(this.gcodeOpOutputHoles(o,a,l,f,s,i)):d=d.concat([";","; --- OPERATION 2: SKIPPED (Show Output Pins & Disc Holes = OFF) ---"]),d=d.concat(this.gcodeOpOuterProfile(o,c,u,s,i)),{filename:`cycloid_disc_layer_${o}.nc`,text:d.join(`
`)}}computeRingPinProfile(e,t,i,s,r){if(e<3)throw new Error("ring_gear_rollers_count must be at least 3");if(i<=0||t<=i)throw new Error("Invalid housing_radius or pin radius");const o=2*Math.PI/e,a=2*t*Math.sin(o/2);if(2*i>=a)throw new Error("Pin radius is too large; adjacent pins overlap");let l=r??0;l||(l=t),Math.abs(l-t)<i&&i<l+t||(l=t);const c=(l**2+t**2-i**2)/(2*l*t),u=Math.acos(Math.max(-1,Math.min(1,c))),h=Math.atan2(l*Math.sin(u),l*Math.cos(u)-t);if(o<=2*u)throw new Error("No ring gap remains between adjacent pin reliefs");const f=32,d=20,g=[],_=(m,p)=>{if(g.length>0){const y=g[g.length-1];if(Math.abs(y[0]-m)<=1e-9+1e-5*Math.abs(m)&&Math.abs(y[1]-p)<=1e-9+1e-5*Math.abs(p))return}g.push([m,p])};for(let m=0;m<e;m+=1){const p=m*o,y=di(s?p+2*Math.PI-h:p-h,p+h,f),v=Math.cos(p),x=Math.sin(p);for(let S=0;S<y.length;S+=1){const A=y[S];_(t*v+i*Math.cos(A),t*x+i*Math.sin(A))}const T=di(p+u,p+o-u,d);for(let S=1;S<T.length;S+=1){const A=T[S];_(l*Math.cos(A),l*Math.sin(A))}}return g[g.length-1]=g[0].slice(),g}gcodeHousingInternalContour(e,t,i,s){const r=e[0][0],o=e[0][1],a=[s,"G00 Z5.0",`G00 X${ae(r,3)} Y${ae(o,3)} ; Safe rapid approach to stator starting point`];for(const l of t){a.push(`G00 X${ae(r,3)} Y${ae(o,3)} ; Lock entrance coordinate before plunges`),a.push(`G01 Z${ae(l,2)} F150.0 ; Plunge Feed into Z Level`);for(let c=1;c<e.length;c+=1){const u=e[c];a.push(`G01 X${ae(u[0],3)} Y${ae(u[1],3)} F${ae(i,1)}`)}a.push(`G01 X${ae(r,3)} Y${ae(o,3)} F${ae(i,1)} ; Close Path Contour`)}return a.push("G00 Z5.0"),a}computeStatorLobeProfile(){const e=di(0,2*Math.PI,1440);return pd(this.geometry.rBase,this.geometry.rRoll,this.geometry.se,this.geometry.wallOffset,e)}gcodeStatorLobeContour(e,t,i,s,r){const o=e[0],a=t[0],l=["; --- OPERATION 1: HOUSING INTERNAL STATOR LOBE PROFILE CONTOUR ---","G00 Z5.0",`G00 X${ae(o,3)} Y${ae(a,3)}`,`G01 Z${ae(r,2)} F150.0`];for(const c of i){l.push(`G00 X${ae(o,3)} Y${ae(a,3)} ; Reset entrance coordinates`),l.push(`G01 Z${ae(c,2)} F150.0 ; Plunge Feed into Z layer`);for(let u=1;u<e.length;u+=1)l.push(`G01 X${ae(e[u],3)} Y${ae(t[u],3)} F${ae(s,1)}`);l.push(`G01 X${ae(o,3)} Y${ae(a,3)} ; Close Stator Lobe Profile Edge`,"G00 Z5.0")}return l.push("G00 Z5.0"),l}gcodeOuterBoundaryCut(e,t){const i=this.geometry.outerHousingRadius,s=i+15,r=0,o=[";","; --- OPERATION 2: OUTERCIRCLE BODY CUT (LEAD-IN TRAJECTORY & SAFETY BRIDGE) ---","G00 Z5.0",`G00 X${ae(s,3)} Y${ae(r,3)} ; Safe approach entry coordinate outside raw blank stock`];for(let a=0;a<e.length;a+=1){const l=e[a],c=a===e.length-1;o.push(`; --- Z Layer Pass ${a+1} of ${e.length} (Z = ${ae(l,2)}) ---`,`G01 Z${ae(l,2)} F150.0 ; Plunge Feed into Z layer`,`G01 X${ae(i,3)} Y0.000 F${ae(t,1)} ; [Lead-In Pass] Straight line entry cut piercing`);for(let u=1;u<=356;u+=1){const h=u*(Math.PI/180);o.push(`G01 X${ae(i*Math.cos(h),3)} Y${ae(i*Math.sin(h),3)} F${ae(t,1)}`)}c?o.push("M00          ; [SAFETY TAB STOP] Program pauses! Secure housing with magnets or clamp tabs to avoid wire breakage.","; Cycle start resumes to dissolve remaining 2mm tab support bridge instantly."):o.push("; [Skipping M00 Hold] Material is still thick enough on previous depth layers.");for(let u=357;u<=360;u+=1){const h=u*(Math.PI/180);o.push(`G01 X${ae(i*Math.cos(h),3)} Y${ae(i*Math.sin(h),3)} F${ae(t,1)}`)}o.push(`G01 X${ae(s,3)} Y${ae(r,3)} F${ae(t,1)} ; Retract to safe entry point before next step`)}return o.push("G00 Z5.0","M05","M30","%"),o}generateHousingGcode(e,t,i,s,r,o){const a=$M(e);let l,c;a===0?(l="OUTER_HOUSING_GEAR (MODE: SEPARATE PIN BORES)",c="outer_housing_gear_pin_bores.nc"):a===1?(l="OUTER_HOUSING_GEAR (MODE: INTEGRAL INTERNAL PINS)",c="outer_housing_gear_integrated_pins.nc"):(l="OUTER_HOUSING_GEAR (MODE: STATOR LOBE PROFILE)",c="outer_housing_gear_stator_lobe.nc");let u=Ns.buildHeader([`; MASTER CYCLOID G-CODE - ${l}`,`; MACHINE OPERATION MODE: ${t}`,"; PRODUCTION SPECS: EXTERNAL SEPARATION PROCESS WITH SAFETY TAB BRIDGE"],t,r);const h=this.geometry.housingRadius,f=this.geometry.ringGearRollersCount;if(a===0){const d=this.computeRingPinProfile(f,h,this.geometry.housingHoleRadius,!1,this.geometry.innerHousingRadius||void 0);u=u.concat(this.gcodeHousingInternalContour(d,o,i,"; --- OPERATION 1: INTERNAL CORE - PIN RELIEF SINGLE CONTOUR ---"))}else if(a===1){const d=this.computeRingPinProfile(f,h,this.geometry.housingHoleRadius,!0,this.geometry.innerHousingRadius||void 0);u=u.concat(this.gcodeHousingInternalContour(d,o,i,"; --- OPERATION 1: INTERNAL PIN + TRIMMED RING ARC ---"))}else{const d=this.computeStatorLobeProfile();u=u.concat(this.gcodeStatorLobeContour(d.x,d.y,o,i,s))}return u=u.concat(this.gcodeOuterBoundaryCut(o,i)),{filename:c,text:u.join(`
`)}}generateGcodeForAllLayers(e){const t=Ns.computeZPasses(e.machineMode,e.cutDepth,e.stepDown),i=[];for(let s=0;s<this.geometry.numPlates;s+=1)i.push(this.generateDiscLayerGcode(s,e.machineMode,e.feedRate,t,e.spindleSpeed));return i.push(this.generateHousingGcode(e.pinFig,e.machineMode,e.feedRate,e.cutDepth,e.spindleSpeed,t)),i}}function vl(n){return n===0?"Housing-Pins":n===2?"Housing+Pins":"NonePin"}function YM(n,e){const t=n.lastIndexOf("."),i=t>=0?n.slice(0,t):n,s=t>=0?n.slice(t):"";return`${i}_${vl(e)}${s}`}function Ku(n,e,t,i=!1){const[s,r,o]=t,a=s*s+r*r+o*o,l=i?-1:1,c=[s,r,o],u=[[0,0,0],[0,0,0],[0,0,0]];for(let h=0;h<3;h+=1)for(let f=0;f<3;f+=1){const d=(h===f?a:0)-c[h]*c[f];u[h][f]=n[h][f]+l*e*d}return u}function jM(n,e){return[[n[0][0]+e[0][0],n[0][1]+e[0][1],n[0][2]+e[0][2]],[n[1][0]+e[1][0],n[1][1]+e[1][1],n[1][2]+e[1][2]],[n[2][0]+e[2][0],n[2][1]+e[2][1],n[2][2]+e[2][2]]]}function xa(n){return[[n[0][0]*1e-9,n[0][1]*1e-9,n[0][2]*1e-9],[n[1][0]*1e-9,n[1][1]*1e-9,n[1][2]*1e-9],[n[2][0]*1e-9,n[2][1]*1e-9,n[2][2]*1e-9]]}class Ju{massG=0;moment=[0,0,0];inertiaOrigin=[[0,0,0],[0,0,0],[0,0,0]];add(e,t,i){if(!(e<=0)){this.massG+=e;for(let s=0;s<3;s+=1)this.moment[s]=this.moment[s]+e*t[s];this.inertiaOrigin=jM(this.inertiaOrigin,Ku(i,e,t))}}get com(){return this.massG<=0?[0,0,0]:[this.moment[0]/this.massG,this.moment[1]/this.massG,this.moment[2]/this.massG]}get inertiaAtCom(){return Ku(this.inertiaOrigin,this.massG,this.com,!0)}get inertiaAboutOrigin(){return this.inertiaOrigin}}function qM(n,e,t){let i=0,s=0,r=0,o=0,a=0,l=0,c=0,u=0,h=0,f=0;for(let U=0;U<e.length;U+=3){const z=e[U]*3,Y=e[U+1]*3,q=e[U+2]*3,H=n[z],te=n[z+1],ee=n[z+2],ce=n[Y],Ee=n[Y+1],Pe=n[Y+2],Ie=n[q],Ne=n[q+1],X=n[q+2],K=H*(Ee*X-Pe*Ne)+te*(Pe*Ie-ce*X)+ee*(ce*Ne-Ee*Ie);i+=K,s+=K*(H+ce+Ie),r+=K*(te+Ee+Ne),o+=K*(ee+Pe+X),a+=K*(H*H+ce*ce+Ie*Ie+H*ce+H*Ie+ce*Ie),l+=K*(te*te+Ee*Ee+Ne*Ne+te*Ee+te*Ne+Ee*Ne),c+=K*(ee*ee+Pe*Pe+X*X+ee*Pe+ee*X+Pe*X),u+=K*(2*(H*te+ce*Ee+Ie*Ne)+H*Ee+H*Ne+ce*te+ce*Ne+Ie*te+Ie*Ee),h+=K*(2*(H*ee+ce*Pe+Ie*X)+H*Pe+H*X+ce*ee+ce*X+Ie*ee+Ie*Pe),f+=K*(2*(te*ee+Ee*Pe+Ne*X)+te*Pe+te*X+Ee*ee+Ee*X+Ne*ee+Ne*Pe)}const d=i/6,g=d/1e3*t;if(d===0)return{volumeMm3:0,massG:0,comMm:[0,0,0],inertiaGmm2:[[0,0,0],[0,0,0],[0,0,0]]};const _=[s/(4*i),r/(4*i),o/(4*i)],m=a/60,p=l/60,y=c/60,v=u/120,x=h/120,T=f/120,S=[[p+y,-v,-x],[-v,m+y,-T],[-x,-T,m+p]],[A,L,E]=_,M=A*A+L*L+E*E,C=[[M-A*A,-A*L,-A*E],[-A*L,M-L*L,-L*E],[-A*E,-L*E,M-E*E]],N=t/1e3,k=[[0,0,0],[0,0,0],[0,0,0]];for(let U=0;U<3;U+=1)for(let z=0;z<3;z+=1)k[U][z]=(S[U][z]-d*C[U][z])*N;return{volumeMm3:d,massG:g,comMm:_,inertiaGmm2:k}}function Qu(n,e,t,i,s){const r=Math.cos(s),o=Math.sin(s),a=n.positions,l=new Float64Array(a.length);for(let c=0;c<a.length;c+=3){const u=a[c],h=a[c+1];l[c]=u*r-h*o+e,l[c+1]=u*o+h*r+t,l[c+2]=a[c+2]+i}return l}function ZM(n){let e=0,t=0;for(const a of n)e+=a.positions.length,t+=a.indices.length;const i=new Float64Array(e),s=new Uint32Array(t);let r=0,o=0;for(const a of n){i.set(a.positions,r);const l=r/3;for(let c=0;c<a.indices.length;c+=1)s[o+c]=a.indices[c]+l;r+=a.positions.length,o+=a.indices.length}return{positions:i,indices:s}}function KM(n,e,t){const i=eo(e),s=new Ju,r=[],o=[...os].sort((a,l)=>a.order-l.order);for(const a of o)for(const l of kl(a.key)){if(!Vs(l,t))continue;const c=l.material?Gh[l.material]:void 0,u=c?c.densityGcm3:0,h=[];if(l.key===bi)for(let _=0;_<i.plateCount;_+=1){const m=`plates[${_}]`,p=n.get(m);if(!p)continue;const y=to(m,i,{modeFig:0,frame:0,explode:0});h.push({positions:Qu(p,y.x,y.y,y.z,y.rotZ),indices:p.indices})}else{const _=n.get(l.key);if(_)h.push(_);else{const m=[];for(let p=0;;p+=1){const y=`${l.key}[${p}]`,v=n.get(y);if(!v)break;const x=to(y,i,{modeFig:0,frame:0,explode:0});m.push({positions:Qu(v,x.x,x.y,x.z,x.rotZ),indices:v.indices})}m.length>0&&h.push(ZM(m))}}if(h.length===0)continue;const f=new Ju;let d=0,g=0;for(let _=0;_<h.length;_+=1){const m=h[_],p=qM(m.positions,m.indices,u);f.add(p.massG,p.comMm,p.inertiaGmm2),_===0&&(d=p.volumeMm3,g=p.massG)}s.add(f.massG,f.com,f.inertiaAtCom),r.push({key:l.key,label:l.label,module:a.label,material:c?c.label:"-",densityGcm3:u,qty:h.length,volumeMm3Each:d,massGEach:g,massTotalG:f.massG,comMm:f.com,inertiaKgm2:xa(f.inertiaAtCom)})}return{rows:r,totalMassG:s.massG,comMm:s.com,inertiaKgm2:xa(s.inertiaAtCom),inertiaAboutOriginKgm2:xa(s.inertiaAboutOrigin)}}function Nt(n,e,t=!1){let i=Object.is(n,-0)?`-${0 .toExponential(e)}`:n.toExponential(e);return i=i.replace(/e([+-])(\d)$/,"e$10$2"),t&&!i.startsWith("-")&&(i=` ${i}`),i}function JM(n,e){const t=ae(n,e),i=t.startsWith("-"),s=i?t.slice(1):t,r=s.indexOf("."),o=r>=0?s.slice(0,r):s,a=r>=0?s.slice(r):"",l=o.replace(/\B(?=(\d{3})+(?!\d))/g,",");return`${i?"-":""}${l}${a}`}function Pr(n){return/[",\r\n]/.test(n)?`"${n.replaceAll('"','""')}"`:n}const QM=["module","part_key","label","material","density_g_cm3","qty","volume_mm3_each","mass_g_each","mass_total_g","com_x_mm","com_y_mm","com_z_mm","Ixx_kgm2","Iyy_kgm2","Izz_kgm2","Ixy_kgm2","Ixz_kgm2","Iyz_kgm2"];function eE(n){const e=[QM.join(",")];for(const s of n.rows){const r=s.inertiaKgm2;e.push([Pr(s.module),Pr(s.key),Pr(s.label),Pr(s.material),ae(s.densityGcm3,2),String(s.qty),ae(s.volumeMm3Each,3),ae(s.massGEach,3),ae(s.massTotalG,3),ae(s.comMm[0],4),ae(s.comMm[1],4),ae(s.comMm[2],4),Nt(r[0][0],6),Nt(r[1][1],6),Nt(r[2][2],6),Nt(r[0][1],6),Nt(r[0][2],6),Nt(r[1][2],6)].join(","))}const t=n.inertiaKgm2,i=n.rows.reduce((s,r)=>s+r.qty,0);return e.push(["TOTAL","","ทั้งชุดประกอบ","","",String(i),"","",ae(n.totalMassG,3),ae(n.comMm[0],4),ae(n.comMm[1],4),ae(n.comMm[2],4),Nt(t[0][0],6),Nt(t[1][1],6),Nt(t[2][2],6),Nt(t[0][1],6),Nt(t[0][2],6),Nt(t[1][2],6)].join(",")),`\uFEFF${e.join(`\r
`)}\r
`}const tE=34,nE=24;function iE(n){if(n.rows.length===0)return"⚖️ ยังไม่มีชิ้นส่วนให้คำนวณ";const e=["⚖️ มวล · ศูนย์ถ่วง · โมเมนต์ความเฉื่อย"];let t=null;for(const a of n.rows){a.module!==t&&(t=a.module,e.push(`├─ ${t}`));const l=a.qty>1?` x${a.qty}`:"";e.push(`│   ├─ ${`${a.label}${l}`.padEnd(tE)} ${a.material.split(" (")[0].padEnd(nE)} ${ae(a.massTotalG,2).padStart(9)} g`);const[c,u,h]=a.comMm;e.push(`│   │     COM = (${ae(c,2).padStart(7)}, ${ae(u,2).padStart(7)}, ${ae(h,2).padStart(7)}) mm   Izz = ${Nt(a.inertiaKgm2[2][2],4)} kg·m²`)}const i=n.rows.reduce((a,l)=>a+l.qty,0);e.push(`└─ รวม ${i} ชิ้น | มวลรวม = ${JM(n.totalMassG,2)} g (${ae(n.totalMassG/1e3,4)} kg)`);const[s,r,o]=n.comMm;e.push(`    COM ของทั้งชุด = (${ae(s,3)}, ${ae(r,3)}, ${ae(o,3)}) mm`),e.push("    โมเมนต์ความเฉื่อยรอบ COM ของทั้งชุด (kg·m²):");for(let a=0;a<3;a+=1){const l=n.inertiaKgm2[a];e.push(`      [ ${Nt(l[0],4,!0)}  ${Nt(l[1],4,!0)}  ${Nt(l[2],4,!0)} ]`)}return e.join(`
`)}class sE{controls;params={...Wt};assembly=null;constructor(e){this.controls=e}setParameters(e){this.params=e}attachAssembly(e){this.assembly=e}get pinFig(){return this.controls.state.pinFig}camProfile(){return _a(this.params)}status(){return{machineMode:_a(this.params).machineMode,gearSuffix:vl(this.pinFig),fileCount:Zu(this.params).numPlates+1}}gcodeFiles(){const e=_a(this.params);return new Ns(Zu(this.params)).generateGcodeForAllLayers({machineMode:e.machineMode,feedRate:e.feedRate,cutDepth:e.cutDepth,stepDown:e.stepDown,spindleSpeed:e.spindleSpeed,pinFig:this.pinFig})}async downloadGcode(){const e=this.gcodeFiles();if(e.length===0)throw new Error("G-Code generator returned an empty package");for(const r of e)if(r.text.trim()==="")throw new Error(`Empty G-Code content: ${r.filename}`);const t=this.pinFig,i=e.map(r=>({name:YM(r.filename,t),text:r.text.replaceAll(`
`,`\r
`)}));return`${await Eb(i)} · housing ${vl(t)} · ${e.length} files`}bom(){if(!this.assembly)return null;const e=new Map;for(const[t,i]of this.assembly.meshes){const s=i;if(!s.isMesh)continue;const r=s.geometry.getAttribute("position"),o=s.geometry.getIndex();!r||!o||e.set(t,{positions:r.array,indices:o.array})}return KM(e,this.params,this.pinFig)}async downloadBomCsv(){const e=this.requireBom();return zn(`bom_${Qn()}.csv`,()=>new Blob([eE(e)],{type:"text/csv"}))}async downloadMassReport(){const e=this.requireBom(),t=`${iE(e)}
`.replaceAll(`
`,`\r
`);return zn(`mass_report_${Qn()}.txt`,()=>new Blob([t],{type:"text/plain"}))}requireBom(){const e=this.bom();if(!e)throw new Error("No assembly yet — wait for the mesh to finish loading");return e}}const Ed=document.querySelector("#viewport"),Sd=document.querySelector("#gui-root"),wd=document.querySelector("#status"),Td=document.querySelector("#sidebar"),Ad=document.querySelector("#core-readout");if(!Ed||!Sd||!wd||!Td||!Ad)throw new Error("Page elements not found (#viewport / #gui-root / #status / #sidebar / #core-readout)");function Pt(n){wd.textContent=n}const Rd=[{label:"Parameters",ok:Object.keys(Wt).length===60,detail:`${Object.keys(Wt).length} keys`},{label:"Parts",ok:vi.length>0,detail:`${vi.length} parts`},{label:"Materials",ok:dl.length>0,detail:`${dl.length} entries`},{label:"Modules",ok:os.length>0,detail:`${os.length} modules`}],eh=Rd.filter(n=>!n.ok);for(const n of Rd)console.log(`${n.ok?"✅":"❌"} ${n.label}: ${n.detail}`);if(eh.length>0)throw new Error(`Golden data incomplete: ${eh.map(n=>n.label).join(", ")}`);const Lr=Bl({n:0,N:1,num_plates:99,pin_fig:7});console.log(`ℹ️  validateParameters guard: n=${Lr.n} N=${Lr.N} num_plates=${Lr.num_plates} pin_fig=${Lr.pin_fig}`);console.log(`ℹ️  Plate 0 color = ${ho(0)}`);const vn=new gy({canvas:Ed,gridBounds:Zs(new En(new D(-1,-1,-1),new D(1,1,1))),showGrid:!0,showAxes:!1}),xt=new Uv(vn);vn.setReporter(n=>Pt(n));const ec=new LM(vn,xt),Si=new sE(xt),at={...Wt},rE={housing:0,housing_lobed:1,housing_with_pins:2};function so(n){return Math.min(2,Math.max(0,Math.trunc(n)))}const ut=kM(Sd,vn,xt,ec,Si,{onNotice:n=>Pt(n),getParams:()=>at,onRingGearChange:n=>nc(n,{persist:!0}),onShowOutputPinsChange:n=>{at.show_output_pins=n,Ld()},onCamParamChange:(n,e)=>Pd(n,e),onExportWorkspace:()=>Id(),onImportWorkspace:n=>{oE(n)},onResetWorkspace:()=>Nd(),getWorkspaceSavedAt:()=>Ql()?.savedAt??null,onPartsVisibilityChanged:()=>Ys.refreshVisibility()});vn.start();const yo=WM(ut.partFolder,{getParams:()=>at,onApply:()=>{Ld()}});yo.showPart(null);const Ys=GM(Td,{onSelect:n=>{ut.gui.open();const e=rE[n];e!==void 0&&nc(e,{persist:!0}),yo.showPart(n)},onTogglePart:(n,e)=>{xt.setPartVisible(n,e),ut.refreshTree();const t=yn(n)?.label??n;Pt(e?`👁️ Shown: ${t}`:`🙈 Hidden: ${t}`)},onToggleModule:(n,e)=>{xt.setModuleVisible(n,e),ut.refreshTree();const t=(Hh[n]?.labelEn??n).replace("Module: ","");Pt(e?`👁️ Group shown: ${t}`:`🙈 Group hidden: ${t}`)},getVisibility:()=>({partVisible:xt.state.partVisible,moduleVisible:xt.state.moduleVisible,available:new Set(xt.loadedKeys.filter(n=>xt.isAvailableInPinFig(n)))})});function tc(n){Object.assign(at,Bl(n)),xt.setParameters(n),Si.setParameters(at);const e=Number(n.mode_fig??0);Number.isFinite(e)&&xt.setModeFig(e);const t=Number(n.pin_fig??0);Number.isFinite(t)&&so(t)!==xt.state.pinFig&&Cd(so(t)),ut.syncAnimation(),ut.syncHousing(),ut.syncDisplayPins(),ut.syncCam(),ut.refreshStats(),yo.refreshValues()}function Cd(n){xt.setPinFig(n),ut.refreshTree(),Ud(),ut.syncHousing(),ut.refreshStats()}function nc(n,e={}){const t=xt.state.pinFig,i=so(n);if(i===t)return;Cd(i),at.pin_fig=i,e.persist&&(xo({...at}),ut.refreshWorkspace());const s=()=>`🏠 Ring gear: ${Md[i]} · G-Code: _${Si.status().gearSuffix}`;if(t===0!=(i===0)){const o=ls({...at});as({...at},o).then(()=>{kr===o&&e.announce!==!1&&Pt(s())})}else e.announce!==!1&&Pt(s())}function Pd(n,e){at[n]=e,xo({...at}),ut.refreshWorkspace(),Si.setParameters(at),ut.refreshStats(),Pt(`⚙️ CAM — ${n}: ${e}`)}let ya=!1,kr="",ws=null;async function as(n,e){if(xt.setParameters(n),Si.setParameters(at),Ad.textContent=XM(at),!(e===kr||ws?.digest===e)&&(ws={params:n,digest:e},!ya)){ya=!0;try{for(;ws!==null;){const t=ws;ws=null,kr=t.digest;try{Pt("🔄 Building geometry (TS)...");const i=Number(t.params.pin_fig??0),s=await TM({params:t.params,pinFig:i,onProgress:o=>Pt(`🔄 ${o}`)}),r=Number(at.pin_fig??i);xt.state.pinFig=so(Number.isFinite(r)?r:i),lE(s),Ud(),ut.syncHousing(),ut.refreshTree()}catch(i){kr="",Pt(`❌ Geometry build failed: ${i.message}`),console.error("[assembly]",i)}}}finally{ya=!1,ut.refreshStats()}}}function Ld(){const n={...at};xo(n),ut.refreshWorkspace(),as(n,ls(n))}function ls(n){const e=JSON.stringify(n);let t=2166136261;for(let i=0;i<e.length;i+=1)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return`local#${(t>>>0).toString(16)}`}async function Id(){const n=DM(),e=bd({...at});try{return Pt(`✅ ${await zn(n,()=>new Blob([e],{type:"application/json"}))}`),n}catch(t){return Pt(`❌ Export failed: ${t.message}`),null}}async function Dd(n){const e=NM(n);tc(e),xo(at),ut.refreshWorkspace(),Pt("📂 Workspace imported"),await as({...at},ls(at))}async function oE(n){try{await Dd(await n.text())}catch(e){Pt(`❌ Import failed: ${e.message}`)}}function Nd(){vd(),tc({...Wt}),ut.refreshWorkspace(),Pt("↺ Reset to defaults"),as({...at},ls({...Wt}))}async function aE(){const n=Ql();if(n){tc(n.params),Pt("📂 Loaded settings saved in this browser"),await as({...at},ls(at));return}await as({...at},ls({...Wt}))}let Fd=[];function Ud(){Ys.setStatus({skippedByParams:Fd,hiddenByPinFig:xt.loadedKeys.filter(n=>!xt.isAvailableInPinFig(n))}),Ys.refreshVisibility()}function lE(n){vn.clearAssembly(),vn.add(n.group);const e=xl(n),t=Zs(e);vn.setGridBounds(t),vn.frameObject(e),xt.attach(n),ec.attachAssembly(n),Si.attachAssembly(n),Fd=n.skippedByParams,Ys.setStatus({skippedByParams:n.skippedByParams,hiddenByPinFig:n.hiddenByPinFig});const i=`Built ${n.meshes.size} parts · ${n.totalTriangles.toLocaleString("en-US")} triangles · ${n.elapsedMs} ms`,s=n.skippedByParams.length>0?` · skipped ${n.skippedByParams.length} parts (not built with this parameter set): `+n.skippedByParams.join(", "):"";Pt(s!==""?`⚠️ ${i}${s}`:i),console.log(`[assembly] ${i}${s}`+(n.hiddenByPinFig.length>0?` · hidden by pin_fig=${xt.state.pinFig}: ${n.hiddenByPinFig.join(", ")}`:"")),cE(n)}function cE(n){new URLSearchParams(window.location.search).has("debug")&&(window.__viewer={scene:vn,panel:ut,controls:xt,clip:ec,cam:Si,sidebar:Ys,partPanel:yo,currentParams:at,computeGridFrameBounds:Zs,assembly:n,ringGear:t=>nc(t,{persist:!0}),camEdit:(t,i)=>Pd(t,i),workspace:{read:()=>Ql(),clear:()=>vd(),exportJson:()=>bd({...at}),exportFile:()=>Id(),importText:t=>Dd(t),reset:()=>Nd()}})}aE();ut.refreshStats();setInterval(ut.refreshStats,1e3);console.log(`ℹ️  Shortcuts: G = Grid · A = Axes · P = Projection · R = Reset camera · F = Frame
ℹ️             E = Explode · X = X-Ray · B = Edges · C = Section · Space = Play/Pause`);console.log("ℹ️  Standalone app — 100% geometry built in the browser (TS) · no connection/sync with GUI 2D");
//# sourceMappingURL=index-Dr82f5J0.js.map
