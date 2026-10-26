import"./chunk-EHE5RSYR.js";var yo=0,Z0=1,Mo=2;var ss=1,So=2,Ai=3,Bn=0,Ie=1,hn=2,un=0,wi=1,J0=2,$0=3,K0=4,bo=5;var $n=100,To=101,Eo=102,Ao=103,wo=104,Co=200,Ro=201,Io=202,Po=203,Q0=204,j0=205,Lo=206,Do=207,No=208,Uo=209,Fo=210,Oo=211,Bo=212,zo=213,Vo=214,ks=0,Gs=1,Hs=2,gi=3,Ws=4,Xs=5,qs=6,Ys=7,ta=0,ko=1,Go=2,Qe=0,ea=1,na=2,ia=3,rs=4,sa=5,ra=6,aa=7;var oa=300,zn=301,Kn=302,Mr=303,Sr=304,as=306,Zs=1e3,an=1001,Js=1002,xe=1003,Ho=1004;var os=1005;var ye=1006,br=1007;var Vn=1008;var Ue=1009,la=1010,ca=1011,Ci=1012,Tr=1013,je=1014,tn=1015,en=1016,Er=1017,Ar=1018,Ri=1020,ha=35902,ua=35899,da=1021,fa=1022,Xe=1023,on=1026,kn=1027,pa=1028,wr=1029,Gn=1030,Cr=1031;var Rr=1033,ls=33776,cs=33777,hs=33778,us=33779,Ir=35840,Pr=35841,Lr=35842,Dr=35843,Nr=36196,Ur=37492,Fr=37496,Or=37488,Br=37489,ds=37490,zr=37491,Vr=37808,kr=37809,Gr=37810,Hr=37811,Wr=37812,Xr=37813,qr=37814,Yr=37815,Zr=37816,Jr=37817,$r=37818,Kr=37819,Qr=37820,jr=37821,t0=36492,e0=36494,n0=36495,i0=36283,s0=36284,fs=36285,r0=36286;var zi=2300,$s=2301,zs=2302,k0=2303,G0=2400,H0=2401,W0=2402;var Wo=3200;var a0=0,Xo=1,Sn="",Be="srgb",Vi="srgb-linear",ki="linear",$t="srgb";var Vs=7680;var qo=519,Yo=512,Zo=513,Jo=514,o0=515,$o=516,Ko=517,l0=518,Qo=519,jo=35044;var ma="300 es",Ke=2e3,_i=2001;function H1(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function W1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Gi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function t1(){let i=Gi("canvas");return i.style.display="block",i}var Qa={},xi=null;function ga(...i){let t="THREE."+i.shift();xi?xi("log",t,...i):console.log(t,...i)}function e1(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ct(...i){i=e1(i);let t="THREE."+i.shift();if(xi)xi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Rt(...i){i=e1(i);let t="THREE."+i.shift();if(xi)xi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Zn(...i){let t=i.join(" ");t in Qa||(Qa[t]=!0,Ct(...i))}function n1(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var i1={[ks]:Gs,[Hs]:qs,[Ws]:Ys,[gi]:Xs,[Gs]:ks,[qs]:Hs,[Ys]:Ws,[Xs]:gi},ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var x0=Math.PI/180,Ks=180/Math.PI;function ps(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function X1(i,t){return(i%t+t)%t}function v0(i,t,e){return(1-e)*i+e*t}function Ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ma=class Ma{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ma.prototype.isVector2=!0;var Ht=Ma,cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],p=n[s+3],h=r[a+0],g=r[a+1],v=r[a+2],M=r[a+3];if(p!==M||c!==h||l!==g||d!==v){let m=c*h+l*g+d*v+p*M;m<0&&(h=-h,g=-g,v=-v,M=-M,m=-m);let u=1-o;if(m<.9995){let A=Math.acos(m),R=Math.sin(A);u=Math.sin(u*A)/R,o=Math.sin(o*A)/R,c=c*u+h*o,l=l*u+g*o,d=d*u+v*o,p=p*u+M*o}else{c=c*u+h*o,l=l*u+g*o,d=d*u+v*o,p=p*u+M*o;let A=1/Math.sqrt(c*c+l*l+d*d+p*p);c*=A,l*=A,d*=A,p*=A}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],p=r[a],h=r[a+1],g=r[a+2],v=r[a+3];return t[e]=o*v+d*p+c*g-l*h,t[e+1]=c*v+d*h+l*p-o*g,t[e+2]=l*v+d*g+o*h-c*p,t[e+3]=d*v-o*p-c*h-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),p=o(r/2),h=c(n/2),g=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=h*d*p+l*g*v,this._y=l*g*p-h*d*v,this._z=l*d*v+h*g*p,this._w=l*d*p-h*g*v;break;case"YXZ":this._x=h*d*p+l*g*v,this._y=l*g*p-h*d*v,this._z=l*d*v-h*g*p,this._w=l*d*p+h*g*v;break;case"ZXY":this._x=h*d*p-l*g*v,this._y=l*g*p+h*d*v,this._z=l*d*v+h*g*p,this._w=l*d*p-h*g*v;break;case"ZYX":this._x=h*d*p-l*g*v,this._y=l*g*p+h*d*v,this._z=l*d*v-h*g*p,this._w=l*d*p+h*g*v;break;case"YZX":this._x=h*d*p+l*g*v,this._y=l*g*p+h*d*v,this._z=l*d*v-h*g*p,this._w=l*d*p-h*g*v;break;case"XZY":this._x=h*d*p-l*g*v,this._y=l*g*p-h*d*v,this._z=l*d*v+h*g*p,this._w=l*d*p+h*g*v;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],d=e[6],p=e[10],h=n+o+p;if(h>0){let g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-c)*g,this._y=(r-l)*g,this._z=(a-s)*g}else if(n>o&&n>p){let g=2*Math.sqrt(1+n-o-p);this._w=(d-c)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+l)/g}else if(o>p){let g=2*Math.sqrt(1+o-n-p);this._w=(r-l)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(c+d)/g}else{let g=2*Math.sqrt(1+p-n-o);this._w=(a-s)/g,this._x=(r+l)/g,this._y=(c+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,e=Math.sin(e*l)/d,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sa=class Sa{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ja.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ja.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),d=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+c*l+a*p-o*d,this.y=n+c*d+o*l-r*p,this.z=s+c*p+r*d-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return y0.copy(this).projectOnVector(t),this.sub(y0)}reflect(t){return this.sub(y0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sa.prototype.isVector3=!0;var V=Sa,y0=new V,ja=new cn,ba=class ba{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],p=n[7],h=n[2],g=n[5],v=n[8],M=s[0],m=s[3],u=s[6],A=s[1],R=s[4],y=s[7],S=s[2],T=s[5],w=s[8];return r[0]=a*M+o*A+c*S,r[3]=a*m+o*R+c*T,r[6]=a*u+o*y+c*w,r[1]=l*M+d*A+p*S,r[4]=l*m+d*R+p*T,r[7]=l*u+d*y+p*w,r[2]=h*M+g*A+v*S,r[5]=h*m+g*R+v*T,r[8]=h*u+g*y+v*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8];return e*a*d-e*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],p=d*a-o*l,h=o*c-d*r,g=l*r-a*c,v=e*p+n*h+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return t[0]=p*M,t[1]=(s*l-d*n)*M,t[2]=(o*n-s*a)*M,t[3]=h*M,t[4]=(d*e-s*c)*M,t[5]=(s*r-o*e)*M,t[6]=g*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Zn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(M0.makeScale(t,e)),this}rotate(t){return Zn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(M0.makeRotation(-t)),this}translate(t,e){return Zn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(M0.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ba.prototype.isMatrix3=!0;var It=ba,M0=new It,to=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eo=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q1(){let i={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===$t&&(s.r=yn(s.r),s.g=yn(s.g),s.b=yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$t&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sn?ki:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vi]:{primaries:t,whitePoint:n,transfer:ki,toXYZ:to,fromXYZ:eo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:$t,toXYZ:to,fromXYZ:eo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),i}var kt=q1();function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ni,Qs=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ni===void 0&&(ni=Gi("canvas")),ni.width=t.width,ni.height=t.height;let s=ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Gi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Y1=0,vi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(S0(s[a].image)):r.push(S0(s[a]))}else r=S0(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function S0(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qs.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}var Z1=0,b0=new V,De=class i extends ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=an,s=an,r=ye,a=Vn,o=Xe,c=Ue,l=i.DEFAULT_ANISOTROPY,d=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=ps(),this.name="",this.source=new vi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(b0).x}get height(){return this.source.getSize(b0).y}get depth(){return this.source.getSize(b0).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zs:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case Js:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zs:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case Js:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=oa;De.DEFAULT_ANISOTROPY=1;var Ta=class Ta{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],d=c[4],p=c[8],h=c[1],g=c[5],v=c[9],M=c[2],m=c[6],u=c[10];if(Math.abs(d-h)<.01&&Math.abs(p-M)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+M)<.1&&Math.abs(v+m)<.1&&Math.abs(l+g+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(l+1)/2,y=(g+1)/2,S=(u+1)/2,T=(d+h)/4,w=(p+M)/4,x=(v+m)/4;return R>y&&R>S?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=T/n,r=w/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=x/r),this.set(n,s,r,e),this}let A=Math.sqrt((m-v)*(m-v)+(p-M)*(p-M)+(h-d)*(h-d));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(p-M)/A,this.z=(h-d)/A,this.w=Math.acos((l+g+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ta.prototype.isVector4=!0;var ae=Ta,js=class extends ln{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new De(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ne=class extends js{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Hi=class extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xe,this.minFilter=xe,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var tr=class extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xe,this.minFilter=xe,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var yr=class yr{constructor(t,e,n,s,r,a,o,c,l,d,p,h,g,v,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,d,p,h,g,v,M,m)}set(t,e,n,s,r,a,o,c,l,d,p,h,g,v,M,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=d,u[10]=p,u[14]=h,u[3]=g,u[7]=v,u[11]=M,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yr().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ii.setFromMatrixColumn(t,0).length(),r=1/ii.setFromMatrixColumn(t,1).length(),a=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let h=a*d,g=a*p,v=o*d,M=o*p;e[0]=c*d,e[4]=-c*p,e[8]=l,e[1]=g+v*l,e[5]=h-M*l,e[9]=-o*c,e[2]=M-h*l,e[6]=v+g*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*d,g=c*p,v=l*d,M=l*p;e[0]=h+M*o,e[4]=v*o-g,e[8]=a*l,e[1]=a*p,e[5]=a*d,e[9]=-o,e[2]=g*o-v,e[6]=M+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*d,g=c*p,v=l*d,M=l*p;e[0]=h-M*o,e[4]=-a*p,e[8]=v+g*o,e[1]=g+v*o,e[5]=a*d,e[9]=M-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*d,g=a*p,v=o*d,M=o*p;e[0]=c*d,e[4]=v*l-g,e[8]=h*l+M,e[1]=c*p,e[5]=M*l+h,e[9]=g*l-v,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,g=a*l,v=o*c,M=o*l;e[0]=c*d,e[4]=M-h*p,e[8]=v*p+g,e[1]=p,e[5]=a*d,e[9]=-o*d,e[2]=-l*d,e[6]=g*p+v,e[10]=h-M*p}else if(t.order==="XZY"){let h=a*c,g=a*l,v=o*c,M=o*l;e[0]=c*d,e[4]=-p,e[8]=l*d,e[1]=h*p+M,e[5]=a*d,e[9]=g*p-v,e[2]=v*p-g,e[6]=o*d,e[10]=M*p+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(J1,t,$1)}lookAt(t,e,n){let s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),An.crossVectors(n,Fe),An.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),An.crossVectors(n,Fe)),An.normalize(),ys.crossVectors(Fe,An),s[0]=An.x,s[4]=ys.x,s[8]=Fe.x,s[1]=An.y,s[5]=ys.y,s[9]=Fe.y,s[2]=An.z,s[6]=ys.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],p=n[5],h=n[9],g=n[13],v=n[2],M=n[6],m=n[10],u=n[14],A=n[3],R=n[7],y=n[11],S=n[15],T=s[0],w=s[4],x=s[8],E=s[12],P=s[1],N=s[5],B=s[9],k=s[13],D=s[2],G=s[6],J=s[10],q=s[14],nt=s[3],W=s[7],Q=s[11],tt=s[15];return r[0]=a*T+o*P+c*D+l*nt,r[4]=a*w+o*N+c*G+l*W,r[8]=a*x+o*B+c*J+l*Q,r[12]=a*E+o*k+c*q+l*tt,r[1]=d*T+p*P+h*D+g*nt,r[5]=d*w+p*N+h*G+g*W,r[9]=d*x+p*B+h*J+g*Q,r[13]=d*E+p*k+h*q+g*tt,r[2]=v*T+M*P+m*D+u*nt,r[6]=v*w+M*N+m*G+u*W,r[10]=v*x+M*B+m*J+u*Q,r[14]=v*E+M*k+m*q+u*tt,r[3]=A*T+R*P+y*D+S*nt,r[7]=A*w+R*N+y*G+S*W,r[11]=A*x+R*B+y*J+S*Q,r[15]=A*E+R*k+y*q+S*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],d=t[2],p=t[6],h=t[10],g=t[14],v=t[3],M=t[7],m=t[11],u=t[15],A=c*g-l*h,R=o*g-l*p,y=o*h-c*p,S=a*g-l*d,T=a*h-c*d,w=a*p-o*d;return e*(M*A-m*R+u*y)-n*(v*A-m*S+u*T)+s*(v*R-M*S+u*w)-r*(v*y-M*T+m*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],d=t[10];return e*(a*d-o*l)-n*(r*d-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],p=t[9],h=t[10],g=t[11],v=t[12],M=t[13],m=t[14],u=t[15],A=e*o-n*a,R=e*c-s*a,y=e*l-r*a,S=n*c-s*o,T=n*l-r*o,w=s*l-r*c,x=d*M-p*v,E=d*m-h*v,P=d*u-g*v,N=p*m-h*M,B=p*u-g*M,k=h*u-g*m,D=A*k-R*B+y*N+S*P-T*E+w*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/D;return t[0]=(o*k-c*B+l*N)*G,t[1]=(s*B-n*k-r*N)*G,t[2]=(M*w-m*T+u*S)*G,t[3]=(h*T-p*w-g*S)*G,t[4]=(c*P-a*k-l*E)*G,t[5]=(e*k-s*P+r*E)*G,t[6]=(m*y-v*w-u*R)*G,t[7]=(d*w-h*y+g*R)*G,t[8]=(a*B-o*P+l*x)*G,t[9]=(n*P-e*B-r*x)*G,t[10]=(v*T-M*y+u*A)*G,t[11]=(p*y-d*T-g*A)*G,t[12]=(o*E-a*N-c*x)*G,t[13]=(e*N-n*E+s*x)*G,t[14]=(M*R-v*S-m*A)*G,t[15]=(d*S-p*R+h*A)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,d=a+a,p=o+o,h=r*l,g=r*d,v=r*p,M=a*d,m=a*p,u=o*p,A=c*l,R=c*d,y=c*p,S=n.x,T=n.y,w=n.z;return s[0]=(1-(M+u))*S,s[1]=(g+y)*S,s[2]=(v-R)*S,s[3]=0,s[4]=(g-y)*T,s[5]=(1-(h+u))*T,s[6]=(m+A)*T,s[7]=0,s[8]=(v+R)*w,s[9]=(m-A)*w,s[10]=(1-(h+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ii.set(s[0],s[1],s[2]).length(),o=ii.set(s[4],s[5],s[6]).length(),c=ii.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ye.copy(this);let l=1/a,d=1/o,p=1/c;return Ye.elements[0]*=l,Ye.elements[1]*=l,Ye.elements[2]*=l,Ye.elements[4]*=d,Ye.elements[5]*=d,Ye.elements[6]*=d,Ye.elements[8]*=p,Ye.elements[9]*=p,Ye.elements[10]*=p,e.setFromRotationMatrix(Ye),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Ke,c=!1){let l=this.elements,d=2*r/(e-t),p=2*r/(n-s),h=(e+t)/(e-t),g=(n+s)/(n-s),v,M;if(c)v=r/(a-r),M=a*r/(a-r);else if(o===Ke)v=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===_i)v=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ke,c=!1){let l=this.elements,d=2/(e-t),p=2/(n-s),h=-(e+t)/(e-t),g=-(n+s)/(n-s),v,M;if(c)v=1/(a-r),M=a/(a-r);else if(o===Ke)v=-2/(a-r),M=-(a+r)/(a-r);else if(o===_i)v=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=p,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};yr.prototype.isMatrix4=!0;var le=yr,ii=new V,Ye=new le,J1=new V(0,0,0),$1=new V(1,1,1),An=new V,ys=new V,Fe=new V,no=new le,io=new cn,Mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],p=s[2],h=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return no.makeRotationFromQuaternion(t),this.setFromRotationMatrix(no,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return io.setFromEuler(this),this.setFromQuaternion(io,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var Wi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},K1=0,so=new V,si=new cn,pn=new le,Ms=new V,Ui=new V,Q1=new V,j1=new cn,ro=new V(1,0,0),ao=new V(0,1,0),oo=new V(0,0,1),lo={type:"added"},t2={type:"removed"},ri={type:"childadded",child:null},T0={type:"childremoved",child:null},Ae=class i extends ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new Mn,n=new cn,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new It}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(ro,t)}rotateY(t){return this.rotateOnAxis(ao,t)}rotateZ(t){return this.rotateOnAxis(oo,t)}translateOnAxis(t,e){return so.copy(t).applyQuaternion(this.quaternion),this.position.add(so.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ro,t)}translateY(t){return this.translateOnAxis(ao,t)}translateZ(t){return this.translateOnAxis(oo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ms.copy(t):Ms.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Ui,Ms,this.up):pn.lookAt(Ms,Ui,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),si.setFromRotationMatrix(pn),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Rt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lo),ri.child=t,this.dispatchEvent(ri),ri.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(t2),T0.child=t,this.dispatchEvent(T0),T0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lo),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,t,Q1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,j1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),d=a(t.images),p=a(t.shapes),h=a(t.skeletons),g=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let c=[];for(let l in o){let d=o[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ae.DEFAULT_UP=new V(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},e2={type:"move"},yi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),u=this._getHandJoint(l,M);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let d=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=d.position.distanceTo(p.position),g=.02,v=.005;l.inputState.pinching&&h>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e2)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},s1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function E0(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=kt.workingColorSpace){if(t=X1(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=E0(a,r,t+1/3),this.g=E0(a,r,t),this.b=E0(a,r,t-1/3)}return kt.colorSpaceToWorking(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let n=s1[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return kt.workingToColorSpace(Te.copy(this),t),Math.round(Gt(Te.r*255,0,255))*65536+Math.round(Gt(Te.g*255,0,255))*256+Math.round(Gt(Te.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.workingToColorSpace(Te.copy(this),e);let n=Te.r,s=Te.g,r=Te.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,d=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=d<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=kt.workingColorSpace){return kt.workingToColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Be){kt.workingToColorSpace(Te.copy(this),t);let e=Te.r,n=Te.g,s=Te.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(Ss);let n=v0(wn.h,Ss.h,e),s=v0(wn.s,Ss.s,e),r=v0(wn.l,Ss.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new Ut;Ut.NAMES=s1;var Xi=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ze=new V,mn=new V,A0=new V,gn=new V,ai=new V,oi=new V,co=new V,w0=new V,C0=new V,R0=new V,I0=new ae,P0=new ae,L0=new ae,Pn=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ze.subVectors(t,e),s.cross(Ze);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ze.subVectors(s,e),mn.subVectors(n,e),A0.subVectors(t,e);let a=Ze.dot(Ze),o=Ze.dot(mn),c=Ze.dot(A0),l=mn.dot(mn),d=mn.dot(A0),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let h=1/p,g=(l*c-o*d)*h,v=(a*d-o*c)*h;return r.set(1-g-v,v,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gn.x),c.addScaledVector(a,gn.y),c.addScaledVector(o,gn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return I0.setScalar(0),P0.setScalar(0),L0.setScalar(0),I0.fromBufferAttribute(t,e),P0.fromBufferAttribute(t,n),L0.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(I0,r.x),a.addScaledVector(P0,r.y),a.addScaledVector(L0,r.z),a}static isFrontFacing(t,e,n,s){return Ze.subVectors(n,e),mn.subVectors(t,e),Ze.cross(mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Ze.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ai.subVectors(s,n),oi.subVectors(r,n),w0.subVectors(t,n);let c=ai.dot(w0),l=oi.dot(w0);if(c<=0&&l<=0)return e.copy(n);C0.subVectors(t,s);let d=ai.dot(C0),p=oi.dot(C0);if(d>=0&&p<=d)return e.copy(s);let h=c*p-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(ai,a);R0.subVectors(t,r);let g=ai.dot(R0),v=oi.dot(R0);if(v>=0&&g<=v)return e.copy(r);let M=g*l-c*v;if(M<=0&&l>=0&&v<=0)return o=l/(l-v),e.copy(n).addScaledVector(oi,o);let m=d*v-g*p;if(m<=0&&p-d>=0&&g-v>=0)return co.subVectors(r,s),o=(p-d)/(p-d+(g-v)),e.copy(s).addScaledVector(co,o);let u=1/(m+M+h);return a=M*u,o=h*u,e.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ln=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Je):Je.fromBufferAttribute(r,a),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bs.copy(n.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fi),Ts.subVectors(this.max,Fi),li.subVectors(t.a,Fi),ci.subVectors(t.b,Fi),hi.subVectors(t.c,Fi),Cn.subVectors(ci,li),Rn.subVectors(hi,ci),Wn.subVectors(li,hi);let e=[0,-Cn.z,Cn.y,0,-Rn.z,Rn.y,0,-Wn.z,Wn.y,Cn.z,0,-Cn.x,Rn.z,0,-Rn.x,Wn.z,0,-Wn.x,-Cn.y,Cn.x,0,-Rn.y,Rn.x,0,-Wn.y,Wn.x,0];return!D0(e,li,ci,hi,Ts)||(e=[1,0,0,0,1,0,0,0,1],!D0(e,li,ci,hi,Ts))?!1:(Es.crossVectors(Cn,Rn),e=[Es.x,Es.y,Es.z],D0(e,li,ci,hi,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_n=[new V,new V,new V,new V,new V,new V,new V,new V],Je=new V,bs=new Ln,li=new V,ci=new V,hi=new V,Cn=new V,Rn=new V,Wn=new V,Fi=new V,Ts=new V,Es=new V,Xn=new V;function D0(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xn.fromArray(i,r);let o=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),c=t.dot(Xn),l=e.dot(Xn),d=n.dot(Xn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}var de=new V,As=new Ht,n2=0,We=class extends ln{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n2++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jo,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)As.fromBufferAttribute(this,e),As.applyMatrix3(t),this.setXY(e,As.x,As.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var qi=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Yi=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ve=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},i2=new Ln,Oi=new V,N0=new V,Mi=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):i2.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oi.subVectors(t,this.center);let e=Oi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Oi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(N0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oi.copy(t.center).add(N0)),this.expandByPoint(Oi.copy(t.center).sub(N0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},s2=0,He=new le,U0=new Ae,ui=new V,Oe=new Ln,Bi=new Ln,_e=new V,ze=class i extends ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s2++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(H1(t)?Yi:qi)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return U0.lookAt(t),U0.updateMatrix(),this.applyMatrix4(U0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ve(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Oe.min,Bi.min),Oe.expandByPoint(_e),_e.addVectors(Oe.max,Bi.max),Oe.expandByPoint(_e)):(Oe.expandByPoint(Bi.min),Oe.expandByPoint(Bi.max))}Oe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)_e.fromBufferAttribute(o,l),c&&(ui.fromBufferAttribute(t,l),_e.add(ui)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new V,c[x]=new V;let l=new V,d=new V,p=new V,h=new Ht,g=new Ht,v=new Ht,M=new V,m=new V;function u(x,E,P){l.fromBufferAttribute(n,x),d.fromBufferAttribute(n,E),p.fromBufferAttribute(n,P),h.fromBufferAttribute(r,x),g.fromBufferAttribute(r,E),v.fromBufferAttribute(r,P),d.sub(l),p.sub(l),g.sub(h),v.sub(h);let N=1/(g.x*v.y-v.x*g.y);isFinite(N)&&(M.copy(d).multiplyScalar(v.y).addScaledVector(p,-g.y).multiplyScalar(N),m.copy(p).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(N),o[x].add(M),o[E].add(M),o[P].add(M),c[x].add(m),c[E].add(m),c[P].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let x=0,E=A.length;x<E;++x){let P=A[x],N=P.start,B=P.count;for(let k=N,D=N+B;k<D;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let R=new V,y=new V,S=new V,T=new V;function w(x){S.fromBufferAttribute(s,x),T.copy(S);let E=o[x];R.copy(E),R.sub(S.multiplyScalar(S.dot(E))).normalize(),y.crossVectors(T,E);let N=y.dot(c[x])<0?-1:1;a.setXYZW(x,R.x,R.y,R.z,N)}for(let x=0,E=A.length;x<E;++x){let P=A[x],N=P.start,B=P.count;for(let k=N,D=N+B;k<D;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);let s=new V,r=new V,a=new V,o=new V,c=new V,l=new V,d=new V,p=new V;if(t)for(let h=0,g=t.count;h<g;h+=3){let v=t.getX(h+0),M=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,g=e.count;h<g;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,c){let l=o.array,d=o.itemSize,p=o.normalized,h=new l.constructor(c.length*d),g=0,v=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?g=c[M]*o.data.stride+o.offset:g=c[M]*d;for(let u=0;u<d;u++)h[v++]=l[g++]}return new We(h,d,p)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let d=0,p=l.length;d<p;d++){let h=l[d],g=t(h,n);c.push(g)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let p=0,h=l.length;p<h;p++){let g=l[p];d.push(g.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(e))}let r=t.morphAttributes;for(let l in r){let d=[],p=r[l];for(let h=0,g=p.length;h<g;h++)d.push(p[h].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,d=a.length;l<d;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var F0=new V,r2=new V,a2=new It,$e=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=F0.subVectors(n,e).cross(r2.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(F0),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||a2.getNormalMatrix(t),s=this.coplanarPoint(F0).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},o2=0,Dn=class extends ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o2++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=wi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Q0,this.blendDst=j0,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new $e().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ht().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var xn=new V,O0=new V,ws=new V,Cs=new V,er=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){O0.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),Cs.copy(this.origin).sub(O0);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ws),o=Cs.dot(this.direction),c=-Cs.dot(ws),l=Cs.lengthSq(),d=Math.abs(1-a*a),p,h,g,v;if(d>0)if(p=a*c-o,h=a*o-c,v=r*d,p>=0)if(h>=-v)if(h<=v){let M=1/d;p*=M,h*=M,g=p*(p+a*h+2*o)+h*(a*p+h+2*c)+l}else h=r,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*c)+l;else h=-r,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*c)+l;else h<=-v?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-c),r),g=-p*p+h*(h+2*c)+l):h<=v?(p=0,h=Math.min(Math.max(-r,-c),r),g=h*(h+2*c)+l):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-c),r),g=-p*p+h*(h+2*c)+l);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),g=-p*p+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(O0).addScaledVector(ws,h),g}intersectSphere(t,e){if(t.radius<0)return null;xn.subVectors(t.center,this.origin);let n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),d>=0?(r=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-h.z)*p,c=(t.max.z-h.z)*p):(o=(t.max.z-h.z)*p,c=(t.min.z-h.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,p=t.x-a.x,h=t.y-a.y,g=t.z-a.z,v=e.x-a.x,M=e.y-a.y,m=e.z-a.z,u=n.x-a.x,A=n.y-a.y,R=n.z-a.z,y=Math.abs(c),S=Math.abs(l),T=Math.abs(d),w,x,E,P,N,B,k,D,G,J,q,nt;if(y>=S&&y>=T?(E=c,B=p,G=v,nt=u,c>=0?(w=l,x=d,P=h,N=g,k=M,D=m,J=A,q=R):(w=d,x=l,P=g,N=h,k=m,D=M,J=R,q=A)):S>=T?(E=l,B=h,G=M,nt=A,l>=0?(w=d,x=c,P=g,N=p,k=m,D=v,J=R,q=u):(w=c,x=d,P=p,N=g,k=v,D=m,J=u,q=R)):(E=d,B=g,G=m,nt=R,d>=0?(w=c,x=l,P=p,N=h,k=v,D=M,J=u,q=A):(w=l,x=c,P=h,N=p,k=M,D=v,J=A,q=u)),E===0)return null;let W=w/E,Q=x/E,tt=1/E,pt=P-W*B,mt=N-Q*B,Xt=k-W*G,Dt=D-Q*G,Yt=J-W*nt,Y=q-Q*nt,j=Yt*Dt-Y*Xt,vt=pt*Y-mt*Yt,Pt=Xt*mt-Dt*pt;if(s){if(j<0||vt<0||Pt<0)return null}else if((j<0||vt<0||Pt<0)&&(j>0||vt>0||Pt>0))return null;let _t=j+vt+Pt;if(_t===0)return null;let Ot=tt*(j*B+vt*G+Pt*nt);return(_t>0?Ot<0:Ot>0)?null:this.at(Ot/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zi=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ho=new le,qn=new er,Rs=new Mi,uo=new V,Is=new V,Ps=new V,Ls=new V,B0=new V,Ds=new V,fo=new V,Ns=new V,Re=class extends Ae{constructor(t=new ze,e=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ds.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=o[c],p=r[c];d!==0&&(B0.fromBufferAttribute(p,t),a?Ds.addScaledVector(B0,d):Ds.addScaledVector(B0.sub(e),d))}e.add(Ds)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(Rs.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Rs,uo)===null||qn.origin.distanceToSquared(uo)>(t.far-t.near)**2))&&(ho.copy(r).invert(),qn.copy(t.ray).applyMatrix4(ho),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,h=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){let m=h[v],u=a[m.materialIndex],A=Math.max(m.start,g.start),R=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let y=A,S=R;y<S;y+=3){let T=o.getX(y),w=o.getX(y+1),x=o.getX(y+2);s=Us(this,u,t,n,l,d,p,T,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let v=Math.max(0,g.start),M=Math.min(o.count,g.start+g.count);for(let m=v,u=M;m<u;m+=3){let A=o.getX(m),R=o.getX(m+1),y=o.getX(m+2);s=Us(this,a,t,n,l,d,p,A,R,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){let m=h[v],u=a[m.materialIndex],A=Math.max(m.start,g.start),R=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let y=A,S=R;y<S;y+=3){let T=y,w=y+1,x=y+2;s=Us(this,u,t,n,l,d,p,T,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let v=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let m=v,u=M;m<u;m+=3){let A=m,R=m+1,y=m+2;s=Us(this,a,t,n,l,d,p,A,R,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function l2(i,t,e,n,s,r,a,o){let c;if(t.side===Ie?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Bn,o),c===null)return null;Ns.copy(o),Ns.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ns);return l<e.near||l>e.far?null:{distance:l,point:Ns.clone(),object:i}}function Us(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Is),i.getVertexPosition(c,Ps),i.getVertexPosition(l,Ls);let d=l2(i,t,e,n,Is,Ps,Ls,fo);if(d){let p=new V;Pn.getBarycoord(fo,Is,Ps,Ls,p),s&&(d.uv=Pn.getInterpolatedAttribute(s,o,c,l,p,new Ht)),r&&(d.uv1=Pn.getInterpolatedAttribute(r,o,c,l,p,new Ht)),a&&(d.normal=Pn.getInterpolatedAttribute(a,o,c,l,p,new V),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new V,materialIndex:0};Pn.getNormal(Is,Ps,Ls,h.normal),d.face=h,d.barycoord=p}return d}var nr=class extends De{constructor(t=null,e=1,n=1,s,r,a,o,c,l=xe,d=xe,p,h){super(null,a,o,c,l,d,s,r,p,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yn=new Mi,c2=new Ht(.5,.5),Fs=new V,Si=class{constructor(t=new $e,e=new $e,n=new $e,s=new $e,r=new $e,a=new $e){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ke,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],p=r[5],h=r[6],g=r[7],v=r[8],M=r[9],m=r[10],u=r[11],A=r[12],R=r[13],y=r[14],S=r[15];if(s[0].setComponents(l-a,g-d,u-v,S-A).normalize(),s[1].setComponents(l+a,g+d,u+v,S+A).normalize(),s[2].setComponents(l+o,g+p,u+M,S+R).normalize(),s[3].setComponents(l-o,g-p,u-M,S-R).normalize(),n)s[4].setComponents(c,h,m,y).normalize(),s[5].setComponents(l-c,g-h,u-m,S-y).normalize();else if(s[4].setComponents(l-c,g-h,u-m,S-y).normalize(),e===Ke)s[5].setComponents(l+c,g+h,u+m,S+y).normalize();else if(e===_i)s[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){Yn.center.set(0,0,0);let e=c2.distanceTo(t.center);return Yn.radius=.7071067811865476+e,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Fs.x=s.normal.x>0?t.max.x:t.min.x,Fs.y=s.normal.y>0?t.max.y:t.min.y,Fs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ji=class extends De{constructor(t=[],e=zn,n,s,r,a,o,c,l,d){super(t,e,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Nn=class extends De{constructor(t,e,n=je,s,r,a,o=xe,c=xe,l,d=on,p=1){if(d!==on&&d!==kn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:p};super(h,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ir=class extends Nn{constructor(t,e=je,n=zn,s,r,a=xe,o=xe,c,l=on){let d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},$i=class extends De{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},bi=class i extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],d=[],p=[],h=0,g=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(p,2));function v(M,m,u,A,R,y,S,T,w,x,E){let P=y/w,N=S/x,B=y/2,k=S/2,D=T/2,G=w+1,J=x+1,q=0,nt=0,W=new V;for(let Q=0;Q<J;Q++){let tt=Q*N-k;for(let pt=0;pt<G;pt++){let mt=pt*P-B;W[M]=mt*A,W[m]=tt*R,W[u]=D,l.push(W.x,W.y,W.z),W[M]=0,W[m]=0,W[u]=T>0?1:-1,d.push(W.x,W.y,W.z),p.push(pt/w),p.push(1-Q/x),q+=1}}for(let Q=0;Q<x;Q++)for(let tt=0;tt<w;tt++){let pt=h+tt+G*Q,mt=h+tt+G*(Q+1),Xt=h+(tt+1)+G*(Q+1),Dt=h+(tt+1)+G*Q;c.push(pt,mt,Dt),c.push(mt,Xt,Dt),nt+=6}o.addGroup(g,nt,E),g+=nt,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ki=class i extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,p=t/o,h=e/c,g=[],v=[],M=[],m=[];for(let u=0;u<d;u++){let A=u*h-a;for(let R=0;R<l;R++){let y=R*p-r;v.push(y,-A,0),M.push(0,0,1),m.push(R/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let A=0;A<o;A++){let R=A+l*u,y=A+l*(u+1),S=A+1+l*(u+1),T=A+1+l*u;g.push(R,y,T),g.push(y,S,T)}this.setIndex(g),this.setAttribute("position",new ve(v,3)),this.setAttribute("normal",new ve(M,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Qi=class i extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,d=[],p=new V,h=new V,g=[],v=[],M=[],m=[];for(let u=0;u<=n;u++){let A=[],R=u/n,y=a+R*o,S=t*Math.cos(y),T=Math.sqrt(t*t-S*S),w=0;u===0&&a===0?w=.5/e:u===n&&c===Math.PI&&(w=-.5/e);for(let x=0;x<=e;x++){let E=x/e,P=s+E*r;p.x=-T*Math.cos(P),p.y=S,p.z=T*Math.sin(P),v.push(p.x,p.y,p.z),h.copy(p).normalize(),M.push(h.x,h.y,h.z),m.push(E+w,1-R),A.push(l++)}d.push(A)}for(let u=0;u<n;u++)for(let A=0;A<e;A++){let R=d[u][A+1],y=d[u][A],S=d[u+1][A],T=d[u+1][A+1];(u!==0||a>0)&&g.push(R,y,T),(u!==n-1||c<Math.PI)&&g.push(y,S,T)}this.setIndex(g),this.setAttribute("position",new ve(v,3)),this.setAttribute("normal",new ve(M,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Qn(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(po(s))s.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(po(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function we(i){let t={};for(let e=0;e<i.length;e++){let n=Qn(i[e]);for(let s in n)t[s]=n[s]}return t}function po(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function h2(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _a(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}var r1={clone:Qn,merge:we},u2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u2,this.fragmentShader=d2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qn(t.uniforms),this.uniformsGroups=h2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ae().fromArray(s.value);break;case"m3":this.uniforms[n].value=new It().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},sr=class extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ti=class extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a0,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ji=class extends Ti{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var rr=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ar=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function di(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function z0(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Un=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},or=class extends Un{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:G0,endingEnd:G0}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case H0:r=t,o=2*e-n;break;case W0:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case H0:a=t,c=2*n-e;break;case W0:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,d=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,d=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,g=this._weightNext,v=(n-e)/(s-e),M=v*v,m=M*v,u=-h*m+2*h*M-h*v,A=(1+h)*m+(-1.5-2*h)*M+(-.5+h)*v+1,R=(-1-g)*m+(1.5+g)*M+.5*v,y=g*m-g*M;for(let S=0;S!==o;++S)r[S]=u*a[d+S]+A*a[l+S]+R*a[c+S]+y*a[p+S];return r}},lr=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,d=(n-e)/(s-e),p=1-d;for(let h=0;h!==o;++h)r[h]=a[l+h]*p+a[c+h]*d;return r}},cr=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},hr=class extends Un{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let v=(n-e)/(s-e),M=1-v;for(let m=0;m!==o;++m)r[m]=a[l+m]*M+a[c+m]*v;return r}let h=o*2,g=t-1;for(let v=0;v!==o;++v){let M=a[l+v],m=a[c+v],u=g*h+v*2,A=p[u],R=p[u+1],y=t*h+v*2,S=d[y],T=d[y+1],w=p2(n,e,A,S,s);r[v]=a1(w,M,R,T,m)}return r}};function a1(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function f2(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function p2(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=a1(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=f2(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var ke=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=di(e,this.TimeBufferType),this.values=di(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:di(t.times,Array),values:di(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),z0(t.settings)&&(n.settings={inTangents:di(t.settings.inTangents,Array),outTangents:di(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new cr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new lr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new or(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new hr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case zi:e=this.InterpolantFactoryMethodDiscrete;break;case $s:e=this.InterpolantFactoryMethodLinear;break;case zs:e=this.InterpolantFactoryMethodSmooth;break;case k0:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ct("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zi;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return zs;case this.InterpolantFactoryMethodBezier:return k0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;z0(this.settings)&&(mo(this.settings.inTangents,t),mo(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Rt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Rt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Rt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Rt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&W1(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Rt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zs,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],d=t[o+1];if(l!==d&&(o!==1||l!==t[0]))if(s)c=!0;else{let p=o*n,h=p-n,g=p+n;for(let v=0;v!==n;++v){let M=e[p+v];if(M!==e[h+v]||M!==e[g+v]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let p=o*n,h=a*n;for(let g=0;g!==n;++g)e[h+g]=e[p+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,z0(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function mo(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ke.prototype.ValueTypeName="";ke.prototype.TimeBufferType=Float32Array;ke.prototype.ValueBufferType=Float32Array;ke.prototype.DefaultInterpolation=$s;var Fn=class extends ke{constructor(t,e,n){super(t,e,n)}};Fn.prototype.ValueTypeName="bool";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=zi;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var ur=class extends ke{constructor(t,e,n,s){super(t,e,n,s)}};ur.prototype.ValueTypeName="color";var dr=class extends ke{constructor(t,e,n,s){super(t,e,n,s)}};dr.prototype.ValueTypeName="number";var fr=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let d=l+o;l!==d;l+=4)cn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ts=class extends ke{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new fr(this.times,this.values,this.getValueSize(),t)}};ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;var On=class extends ke{constructor(t,e,n){super(t,e,n)}};On.prototype.ValueTypeName="string";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=zi;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var pr=class extends ke{constructor(t,e,n,s){super(t,e,n,s)}};pr.prototype.ValueTypeName="vector";var mr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,p){return l.push(d,p),this},this.removeHandler=function(d){let p=l.indexOf(d);return p!==-1&&l.splice(p,2),this},this.getHandler=function(d){for(let p=0,h=l.length;p<h;p+=2){let g=l[p],v=l[p+1];if(g.global&&(g.lastIndex=0),g.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},o1=new mr,gr=class{constructor(t){this.manager=t!==void 0?t:o1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};gr.DEFAULT_MATERIAL_NAME="__DEFAULT";var es=class extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ns=class extends es{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},V0=new le,go=new V,_o=new V,_r=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=Ue,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Si,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;go.setFromMatrixPosition(t.matrixWorld),e.position.copy(go),_o.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_o),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){V0.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(V0,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===_i||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(V0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Os=new V,Bs=new cn,rn=new V,is=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Ke,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Os,Bs,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,Bs,rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Os,Bs,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,Bs,rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},In=new V,xo=new Ht,vo=new Ht,Ee=class extends is{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(x0*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(x0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,xo,vo),e.subVectors(vo,xo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(x0*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ei=class extends is{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},X0=class extends _r{constructor(){super(new Ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jn=class extends es{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new X0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var fi=-90,pi=1,xr=class extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ee(fi,pi,t,e);s.layers=this.layers,this.add(s);let r=new Ee(fi,pi,t,e);r.layers=this.layers,this.add(r);let a=new Ee(fi,pi,t,e);a.layers=this.layers,this.add(a);let o=new Ee(fi,pi,t,e);o.layers=this.layers,this.add(o);let c=new Ee(fi,pi,t,e);c.layers=this.layers,this.add(c);let l=new Ee(fi,pi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Ke)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_i)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,d]=this.children,p=t.getRenderTarget(),h=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(p,h,g),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},vr=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var xa="\\[\\]\\.:\\/",m2=new RegExp("["+xa+"]","g"),va="[^"+xa+"]",g2="[^"+xa.replace("\\.","")+"]",_2=/((?:WC+[\/:])*)/.source.replace("WC",va),x2=/(WCOD+)?/.source.replace("WCOD",g2),v2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",va),y2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",va),M2=new RegExp("^"+_2+x2+v2+y2+"$"),S2=["material","materials","bones","map"],q0=class{constructor(t,e,n){let s=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(m2,"")}static parseTrackName(t){let e=M2.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);S2.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===l){l=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Rt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=q0;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gu=new Float32Array(1);var Ea=class Ea{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Ea.prototype.isMatrix2=!0;var Y0=Ea;function ya(i,t,e,n){let s=b2(n);switch(e){case da:return i*t;case pa:return i*t/s.components*s.byteLength;case wr:return i*t/s.components*s.byteLength;case Gn:return i*t*2/s.components*s.byteLength;case Cr:return i*t*2/s.components*s.byteLength;case fa:return i*t*3/s.components*s.byteLength;case Xe:return i*t*4/s.components*s.byteLength;case Rr:return i*t*4/s.components*s.byteLength;case ls:case cs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hs:case us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pr:case Dr:return Math.max(i,16)*Math.max(t,8)/4;case Ir:case Lr:return Math.max(i,8)*Math.max(t,8)/2;case Nr:case Ur:case Or:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fr:case ds:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Yr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $r:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case t0:case e0:case n0:return Math.ceil(i/4)*Math.ceil(t/4)*16;case i0:case s0:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fs:case r0:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function b2(i){switch(i){case Ue:case la:return{byteLength:1,components:1};case Ci:case ca:case en:return{byteLength:2,components:1};case Er:case Ar:return{byteLength:2,components:4};case je:case Tr:case tn:return{byteLength:4,components:1};case ha:case ua:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function R1(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function E2(i){let t=new WeakMap;function e(o,c){let l=o.array,d=o.usage,p=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){let d=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,d);else{p.sort((g,v)=>g.start-v.start);let h=0;for(let g=1;g<p.length;g++){let v=p[h],M=p[g];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++h,p[h]=M)}p.length=h+1;for(let g=0,v=p.length;g<v;g++){let M=p[g];i.bufferSubData(l,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var A2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w2=`#ifdef USE_ALPHAHASH
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
#endif`,C2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L2=`#ifdef USE_AOMAP
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
#endif`,D2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N2=`#ifdef USE_BATCHING
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
#endif`,U2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z2=`#ifdef USE_IRIDESCENCE
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
#endif`,V2=`#ifdef USE_BUMPMAP
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
#endif`,k2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Z2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,J2=`#define PI 3.141592653589793
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
} // validated`,$2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K2=`vec3 transformedNormal = objectNormal;
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
#endif`,Q2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n3="gl_FragColor = linearToOutputTexel( gl_FragColor );",i3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s3=`#ifdef USE_ENVMAP
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
#endif`,r3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,a3=`#ifdef USE_ENVMAP
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
#endif`,o3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l3=`#ifdef USE_ENVMAP
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
#endif`,c3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f3=`#ifdef USE_GRADIENTMAP
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
}`,p3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_3=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,x3=`#ifdef USE_ENVMAP
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
#endif`,v3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b3=`PhysicalMaterial material;
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
#endif`,T3=`uniform sampler2D dfgLUT;
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
}`,E3=`
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
#endif`,A3=`#if defined( RE_IndirectDiffuse )
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
#endif`,w3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C3=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,R3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,F3=`#if defined( USE_POINTS_UV )
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
#endif`,O3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G3=`#ifdef USE_MORPHTARGETS
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
#endif`,H3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,J3=`#ifdef USE_NORMALMAP
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
#endif`,$3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,el=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,il=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,al=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ol=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ll=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ul=`float getShadowMask() {
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
}`,dl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fl=`#ifdef USE_SKINNING
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
#endif`,pl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ml=`#ifdef USE_SKINNING
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
#endif`,gl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_l=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vl=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yl=`#ifdef USE_TRANSMISSION
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
#endif`,Ml=`#ifdef USE_TRANSMISSION
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
#endif`,Sl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,El=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Al=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wl=`uniform sampler2D t2D;
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
}`,Cl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rl=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Il=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ll=`#include <common>
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
}`,Dl=`#if DEPTH_PACKING == 3200
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
}`,Nl=`#define DISTANCE
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
}`,Ul=`#define DISTANCE
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
}`,Fl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ol=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bl=`uniform float scale;
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
}`,zl=`uniform vec3 diffuse;
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
}`,Vl=`#include <common>
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
}`,kl=`uniform vec3 diffuse;
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
}`,Gl=`#define LAMBERT
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
}`,Hl=`#define LAMBERT
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
}`,Wl=`#define MATCAP
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
}`,Xl=`#define MATCAP
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
}`,ql=`#define NORMAL
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
}`,Yl=`#define NORMAL
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
}`,Zl=`#define PHONG
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
}`,Jl=`#define PHONG
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
}`,$l=`#define STANDARD
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
}`,Kl=`#define STANDARD
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
}`,Ql=`#define TOON
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
}`,jl=`#define TOON
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
}`,tc=`uniform float size;
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
}`,ec=`uniform vec3 diffuse;
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
}`,nc=`#include <common>
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
}`,ic=`uniform vec3 color;
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
}`,sc=`uniform float rotation;
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
}`,rc=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:A2,alphahash_pars_fragment:w2,alphamap_fragment:C2,alphamap_pars_fragment:R2,alphatest_fragment:I2,alphatest_pars_fragment:P2,aomap_fragment:L2,aomap_pars_fragment:D2,batching_pars_vertex:N2,batching_vertex:U2,begin_vertex:F2,beginnormal_vertex:O2,bsdfs:B2,iridescence_fragment:z2,bumpmap_pars_fragment:V2,clipping_planes_fragment:k2,clipping_planes_pars_fragment:G2,clipping_planes_pars_vertex:H2,clipping_planes_vertex:W2,color_fragment:X2,color_pars_fragment:q2,color_pars_vertex:Y2,color_vertex:Z2,common:J2,cube_uv_reflection_fragment:$2,defaultnormal_vertex:K2,displacementmap_pars_vertex:Q2,displacementmap_vertex:j2,emissivemap_fragment:t3,emissivemap_pars_fragment:e3,colorspace_fragment:n3,colorspace_pars_fragment:i3,envmap_fragment:s3,envmap_common_pars_fragment:r3,envmap_pars_fragment:a3,envmap_pars_vertex:o3,envmap_physical_pars_fragment:x3,envmap_vertex:l3,fog_vertex:c3,fog_pars_vertex:h3,fog_fragment:u3,fog_pars_fragment:d3,gradientmap_pars_fragment:f3,lightmap_pars_fragment:p3,lights_lambert_fragment:m3,lights_lambert_pars_fragment:g3,lights_pars_begin:_3,lights_toon_fragment:v3,lights_toon_pars_fragment:y3,lights_phong_fragment:M3,lights_phong_pars_fragment:S3,lights_physical_fragment:b3,lights_physical_pars_fragment:T3,lights_fragment_begin:E3,lights_fragment_maps:A3,lights_fragment_end:w3,lightprobes_pars_fragment:C3,logdepthbuf_fragment:R3,logdepthbuf_pars_fragment:I3,logdepthbuf_pars_vertex:P3,logdepthbuf_vertex:L3,map_fragment:D3,map_pars_fragment:N3,map_particle_fragment:U3,map_particle_pars_fragment:F3,metalnessmap_fragment:O3,metalnessmap_pars_fragment:B3,morphinstance_vertex:z3,morphcolor_vertex:V3,morphnormal_vertex:k3,morphtarget_pars_vertex:G3,morphtarget_vertex:H3,normal_fragment_begin:W3,normal_fragment_maps:X3,normal_pars_fragment:q3,normal_pars_vertex:Y3,normal_vertex:Z3,normalmap_pars_fragment:J3,clearcoat_normal_fragment_begin:$3,clearcoat_normal_fragment_maps:K3,clearcoat_pars_fragment:Q3,iridescence_pars_fragment:j3,opaque_fragment:tl,packing:el,premultiplied_alpha_fragment:nl,project_vertex:il,dithering_fragment:sl,dithering_pars_fragment:rl,roughnessmap_fragment:al,roughnessmap_pars_fragment:ol,shadowmap_pars_fragment:ll,shadowmap_pars_vertex:cl,shadowmap_vertex:hl,shadowmask_pars_fragment:ul,skinbase_vertex:dl,skinning_pars_vertex:fl,skinning_vertex:pl,skinnormal_vertex:ml,specularmap_fragment:gl,specularmap_pars_fragment:_l,tonemapping_fragment:xl,tonemapping_pars_fragment:vl,transmission_fragment:yl,transmission_pars_fragment:Ml,uv_pars_fragment:Sl,uv_pars_vertex:bl,uv_vertex:Tl,worldpos_vertex:El,background_vert:Al,background_frag:wl,backgroundCube_vert:Cl,backgroundCube_frag:Rl,cube_vert:Il,cube_frag:Pl,depth_vert:Ll,depth_frag:Dl,distance_vert:Nl,distance_frag:Ul,equirect_vert:Fl,equirect_frag:Ol,linedashed_vert:Bl,linedashed_frag:zl,meshbasic_vert:Vl,meshbasic_frag:kl,meshlambert_vert:Gl,meshlambert_frag:Hl,meshmatcap_vert:Wl,meshmatcap_frag:Xl,meshnormal_vert:ql,meshnormal_frag:Yl,meshphong_vert:Zl,meshphong_frag:Jl,meshphysical_vert:$l,meshphysical_frag:Kl,meshtoon_vert:Ql,meshtoon_frag:jl,points_vert:tc,points_frag:ec,shadow_vert:nc,shadow_frag:ic,sprite_vert:sc,sprite_frag:rc},ht={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},fn={basic:{uniforms:we([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:we([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:we([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:we([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:we([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:we([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:we([ht.points,ht.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:we([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:we([ht.common,ht.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:we([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:we([ht.sprite,ht.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distance:{uniforms:we([ht.common,ht.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distance_vert,fragmentShader:Ft.distance_frag},shadow:{uniforms:we([ht.lights,ht.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};fn.physical={uniforms:we([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var c0={r:0,b:0,g:0},ac=new le,I1=new It;I1.set(-1,0,0,0,1,0,0,0,1);function oc(i,t,e,n,s,r){let a=new Ut(0),o=s===!0?0:1,c,l,d=null,p=0,h=null;function g(A){let R=A.isScene===!0?A.background:null;if(R&&R.isTexture){let y=A.backgroundBlurriness>0;R=t.get(R,y)}return R}function v(A){let R=!1,y=g(A);y===null?m(a,o):y&&y.isColor&&(m(y,1),R=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(A,R){let y=g(R);y&&(y.isCubeTexture||y.mapping===as)?(l===void 0&&(l=new Re(new bi(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Qn(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ac.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(I1),l.material.toneMapped=kt.getTransfer(y.colorSpace)!==$t,(d!==y||p!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,p=y.version,h=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Re(new Ki(2,2),new Ve({name:"BackgroundMaterial",uniforms:Qn(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=kt.getTransfer(y.colorSpace)!==$t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,p=y.version,h=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function m(A,R){A.getRGB(c0,_a(i)),e.buffers.color.setClear(c0.r,c0.g,c0.b,R,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,R=1){a.set(A),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,m(a,o)},render:v,addToRenderList:M,dispose:u}}function lc(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(N,B,k,D,G){let J=!1,q=p(N,D,k,B);r!==q&&(r=q,l(r.object)),J=g(N,D,k,G),J&&v(N,D,k,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(N,B,k,D),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function d(N){return i.deleteVertexArray(N)}function p(N,B,k,D){let G=D.wireframe===!0,J=n[B.id];J===void 0&&(J={},n[B.id]=J);let q=N.isInstancedMesh===!0?N.id:0,nt=J[q];nt===void 0&&(nt={},J[q]=nt);let W=nt[k.id];W===void 0&&(W={},nt[k.id]=W);let Q=W[G];return Q===void 0&&(Q=h(c()),W[G]=Q),Q}function h(N){let B=[],k=[],D=[];for(let G=0;G<e;G++)B[G]=0,k[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:D,object:N,attributes:{},index:null}}function g(N,B,k,D){let G=r.attributes,J=B.attributes,q=0,nt=k.getAttributes();for(let W in nt)if(nt[W].location>=0){let tt=G[W],pt=J[W];if(pt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(pt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(pt=N.instanceColor)),tt===void 0||tt.attribute!==pt||pt&&tt.data!==pt.data)return!0;q++}return r.attributesNum!==q||r.index!==D}function v(N,B,k,D){let G={},J=B.attributes,q=0,nt=k.getAttributes();for(let W in nt)if(nt[W].location>=0){let tt=J[W];tt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));let pt={};pt.attribute=tt,tt&&tt.data&&(pt.data=tt.data),G[W]=pt,q++}r.attributes=G,r.attributesNum=q,r.index=D}function M(){let N=r.newAttributes;for(let B=0,k=N.length;B<k;B++)N[B]=0}function m(N){u(N,0)}function u(N,B){let k=r.newAttributes,D=r.enabledAttributes,G=r.attributeDivisors;k[N]=1,D[N]===0&&(i.enableVertexAttribArray(N),D[N]=1),G[N]!==B&&(i.vertexAttribDivisor(N,B),G[N]=B)}function A(){let N=r.newAttributes,B=r.enabledAttributes;for(let k=0,D=B.length;k<D;k++)B[k]!==N[k]&&(i.disableVertexAttribArray(k),B[k]=0)}function R(N,B,k,D,G,J,q){q===!0?i.vertexAttribIPointer(N,B,k,G,J):i.vertexAttribPointer(N,B,k,D,G,J)}function y(N,B,k,D){M();let G=D.attributes,J=k.getAttributes(),q=B.defaultAttributeValues;for(let nt in J){let W=J[nt];if(W.location>=0){let Q=G[nt];if(Q===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let tt=Q.normalized,pt=Q.itemSize,mt=t.get(Q);if(mt===void 0)continue;let Xt=mt.buffer,Dt=mt.type,Yt=mt.bytesPerElement,Y=Dt===i.INT||Dt===i.UNSIGNED_INT||Q.gpuType===Tr;if(Q.isInterleavedBufferAttribute){let j=Q.data,vt=j.stride,Pt=Q.offset;if(j.isInstancedInterleavedBuffer){for(let _t=0;_t<W.locationSize;_t++)u(W.location+_t,j.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _t=0;_t<W.locationSize;_t++)m(W.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let _t=0;_t<W.locationSize;_t++)R(W.location+_t,pt/W.locationSize,Dt,tt,vt*Yt,(Pt+pt/W.locationSize*_t)*Yt,Y)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<W.locationSize;j++)u(W.location+j,Q.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<W.locationSize;j++)m(W.location+j);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let j=0;j<W.locationSize;j++)R(W.location+j,pt/W.locationSize,Dt,tt,pt*Yt,pt/W.locationSize*j*Yt,Y)}}else if(q!==void 0){let tt=q[nt];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(W.location,tt);break;case 3:i.vertexAttrib3fv(W.location,tt);break;case 4:i.vertexAttrib4fv(W.location,tt);break;default:i.vertexAttrib1fv(W.location,tt)}}}}A()}function S(){E();for(let N in n){let B=n[N];for(let k in B){let D=B[k];for(let G in D){let J=D[G];for(let q in J)d(J[q].object),delete J[q];delete D[G]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let B=n[N.id];for(let k in B){let D=B[k];for(let G in D){let J=D[G];for(let q in J)d(J[q].object),delete J[q];delete D[G]}}delete n[N.id]}function w(N){for(let B in n){let k=n[B];for(let D in k){let G=k[D];if(G[N.id]===void 0)continue;let J=G[N.id];for(let q in J)d(J[q].object),delete J[q];delete G[N.id]}}}function x(N){for(let B in n){let k=n[B],D=N.isInstancedMesh===!0?N.id:0,G=k[D];if(G!==void 0){for(let J in G){let q=G[J];for(let nt in q)d(q[nt].object),delete q[nt];delete G[J]}delete k[D],Object.keys(k).length===0&&delete n[B]}}}function E(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:m,disableUnusedAttributes:A}}function cc(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),e.update(l,n,d))}function o(c,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let g=0;g<d;g++)h+=l[g];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function hc(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Xe&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===en&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ue&&w!==tn&&!x&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",d=c(l);d!==l&&(Ct("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let p=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:y,maxSamples:S,samples:T}}function uc(i){let t=this,e=null,n=0,s=!1,r=!1,a=new $e,o=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let g=p.length!==0||h||n!==0||s;return s=h,n=p.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){e=d(p,h,0)},this.setState=function(p,h,g){let v=p.clippingPlanes,M=p.clipIntersection,m=p.clipShadows,u=i.get(p);if(!s||v===null||v.length===0||r&&!m)r?d(null):l();else{let A=r?0:n,R=A*4,y=u.clippingState||null;c.value=y,y=d(v,h,R,g);for(let S=0;S!==R;++S)y[S]=e[S];u.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(p,h,g,v){let M=p!==null?p.length:0,m=null;if(M!==0){if(m=c.value,v!==!0||m===null){let u=g+M*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<u)&&(m=new Float32Array(u));for(let R=0,y=g;R!==M;++R,y+=4)a.copy(p[R]).applyMatrix4(A,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var Pi=4,dc=6,fc=20,pc=256,ms=new Ei,l1=new Ut,Aa=null,wa=0,Ca=0,Ra=!1,mc=new V,jn=new V,u0=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=mc}=r;Aa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Aa,wa,Ca),this._renderer.xr.enabled=Ra,t.scissorTest=!1,Ii(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zn||t.mapping===Kn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Aa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ye,minFilter:ye,generateMipmaps:!1,type:en,format:Xe,colorSpace:Vi,depthBuffer:!1},s=c1(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=c1(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gc(r)),this._blurMaterial=xc(r,t,e),this._ggxMaterial=_c(r,t,e)}return s}_compileMaterial(t){let e=new Re(new ze,t);this._renderer.compile(e,ms)}_sceneToCubeUV(t,e,n,s,r){let c=new Ee(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,g=p.toneMapping;p.getClearColor(l1),p.toneMapping=Qe,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new bi,new Zi({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,u=!1,A=t.background;A?A.isColor&&(m.color.copy(A),t.background=null,u=!0):(m.color.copy(l1),u=!0);for(let R=0;R<6;R++){let y=R%3;y===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[R],r.y,r.z)):y===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[R]));let S=this._cubeSize;Ii(s,y*S,R>2?S:0,S,S),p.setRenderTarget(s),u&&p.render(M,c),p.render(t,c)}p.toneMapping=g,p.autoClear=h,t.background=A}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===zn||t.mapping===Kn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=u1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h1());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ii(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ms)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),p=Math.sqrt(l*l-d*d),h=l*1.25,g=p*h,{_lodMax:v}=this,M=this._sizeLods[n],m=3*M*(n>v-Pi?n-v+Pi:0),u=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=g,c.mipInt.value=v-e,Ii(r,m,u,3*M,2*M),s.setRenderTarget(r),s.render(o,ms),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=v-n,Ii(t,m,u,3*M,2*M),s.setRenderTarget(t),s.render(o,ms)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],p=3*d*(s>this._lodMax-Pi?s-this._lodMax+Pi:0),h=4*(this._cubeSize-d);Ii(e,p,h,3*d,2*d),a.setRenderTarget(e),a.render(c,ms)}};function gc(i){let t=[],e=[],n=i,s=i-Pi+1+dc;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,d=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,h=6,g=3,v=new Float32Array(g*h*p),M=new Float32Array(g*h*p);for(let u=0;u<p;u++){let A=u%3*2/3-1,R=u>2?0:-1,y=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];v.set(y,g*h*u);for(let S=0;S<h;S++){let T=d[S*2]*2-1,w=d[S*2+1]*2-1;u===0?jn.set(1,w,T):u===1?jn.set(-T,1,-w):u===2?jn.set(-T,w,1):u===3?jn.set(-1,w,-T):u===4?jn.set(-T,-1,w):jn.set(T,w,-1),jn.toArray(M,(u*h+S)*g)}}let m=new ze;m.setAttribute("position",new We(v,g)),m.setAttribute("outputDirection",new We(M,g)),e.push(new Re(m,null)),n>Pi&&n--}return{lodMeshes:e,sizeLods:t}}function c1(i,t,e){let n=new Ne(i,t,e);return n.texture.mapping=as,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ii(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _c(i,t,e){return new Ve({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:p0(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function xc(i,t,e){return new Ve({name:"SphericalGaussianBlur",defines:{SAMPLES:fc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:p0(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function h1(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:p0(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function u1(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:p0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function p0(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var d0=class extends Ne{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ji(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bi(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:Qn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:un});r.uniforms.tEquirect.value=e;let a=new Re(s,r),o=e.minFilter;return e.minFilter===Vn&&(e.minFilter=ye),new xr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function vc(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,g=!1){return h==null?null:g?a(h):r(h)}function r(h){if(h&&h.isTexture){let g=h.mapping;if(g===Mr||g===Sr)if(t.has(h)){let v=t.get(h).texture;return o(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let M=new d0(v.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",l),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let g=h.mapping,v=g===Mr||g===Sr,M=g===zn||g===Kn;if(v||M){let m=e.get(h),u=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new u0(i)),m=v?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let A=h.image;return v&&A&&A.height>0||M&&A&&c(A)?(n===null&&(n=new u0(i)),m=v?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,g){return g===Mr?h.mapping=zn:g===Sr&&(h.mapping=Kn),h}function c(h){let g=0,v=6;for(let M=0;M<v;M++)h[M]!==void 0&&g++;return g===v}function l(h){let g=h.target;g.removeEventListener("dispose",l);let v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function d(h){let g=h.target;g.removeEventListener("dispose",d);let v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function yc(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Zn("WebGLRenderer: "+n+" extension not supported."),s}}}function Mc(i,t,e,n){let s={},r=new WeakMap;function a(p){let h=p.target;h.index!==null&&t.remove(h.index);for(let v in h.attributes)t.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];let g=r.get(h);g&&(t.remove(g),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(p){let h=p.attributes;for(let g in h)t.update(h[g],i.ARRAY_BUFFER)}function l(p){let h=[],g=p.index,v=p.attributes.position,M=0;if(v===void 0)return;if(g!==null){let A=g.array;M=g.version;for(let R=0,y=A.length;R<y;R+=3){let S=A[R+0],T=A[R+1],w=A[R+2];h.push(S,T,T,w,w,S)}}else{let A=v.array;M=v.version;for(let R=0,y=A.length/3-1;R<y;R+=3){let S=R+0,T=R+1,w=R+2;h.push(S,T,T,w,w,S)}}let m=new(v.count>=65535?Yi:qi)(h,1);m.version=M;let u=r.get(p);u&&t.remove(u),r.set(p,m)}function d(p){let h=r.get(p);if(h){let g=p.index;g!==null&&h.version<g.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:d}}function Sc(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,h){i.drawElements(n,h,r,p*a),e.update(h,n,1)}function l(p,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,p*a,g),e.update(h,n,g))}function d(p,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,g);let M=0;for(let m=0;m<g;m++)M+=h[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function bc(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Rt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tc(i,t,e){let n=new WeakMap,s=new ae;function r(a,o,c){let l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==p){let E=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],R=0;g===!0&&(R=1),v===!0&&(R=2),M===!0&&(R=3);let y=o.attributes.position.count*R,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*S*4*p),w=new Hi(T,y,S,p);w.type=tn,w.needsUpdate=!0;let x=R*4;for(let P=0;P<p;P++){let N=m[P],B=u[P],k=A[P],D=y*S*4*P;for(let G=0;G<N.count;G++){let J=G*x;g===!0&&(s.fromBufferAttribute(N,G),T[D+J+0]=s.x,T[D+J+1]=s.y,T[D+J+2]=s.z,T[D+J+3]=0),v===!0&&(s.fromBufferAttribute(B,G),T[D+J+4]=s.x,T[D+J+5]=s.y,T[D+J+6]=s.z,T[D+J+7]=0),M===!0&&(s.fromBufferAttribute(k,G),T[D+J+8]=s.x,T[D+J+9]=s.y,T[D+J+10]=s.z,T[D+J+11]=k.itemSize===4?s.w:1)}}h={count:p,texture:w,size:new Ht(y,S)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let M=0;M<l.length;M++)g+=l[M];let v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Ec(i,t,e,n,s){let r=new WeakMap;function a(l){let d=s.render.frame,p=l.geometry,h=t.get(l,p);if(r.get(h)!==d&&(t.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let g=l.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return h}function o(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}var Ac={[ea]:"LINEAR_TONE_MAPPING",[na]:"REINHARD_TONE_MAPPING",[ia]:"CINEON_TONE_MAPPING",[rs]:"ACES_FILMIC_TONE_MAPPING",[ra]:"AGX_TONE_MAPPING",[aa]:"NEUTRAL_TONE_MAPPING",[sa]:"CUSTOM_TONE_MAPPING"};function wc(i,t,e,n,s,r){let a=new Ne(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new ze;l.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ve([0,2,0,0,2,0],2));let d=new sr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Re(l,d),h=new Ei(-1,1,1,-1,0,1),g=null,v=null,M=!1,m,u=null,A=[],R=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),c!==null&&c.setSize(y,S);for(let T=0;T<A.length;T++){let w=A[T];w.setSize&&w.setSize(y,S)}},this.setEffects=function(y){A=y,R=A.length>0&&A[0].isRenderPass===!0;let S=a.width,T=a.height;A.length>0&&o===null&&(o=new Ne(S,T,{type:en,depthBuffer:!1,stencilBuffer:!1}),c=new Ne(S,T,{type:en,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<A.length;w++){let x=A[w];x.setSize&&x.setSize(S,T)}},this.begin=function(y,S){if(M||y.toneMapping===Qe&&A.length===0)return!1;if(u=S,S!==null){let T=S.width,w=S.height;(a.width!==T||a.height!==w)&&this.setSize(T,w)}return R===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Qe,!0},this.hasRenderPass=function(){return R},this.end=function(y,S){y.toneMapping=m,M=!0;let T=a,w=o;for(let x=0;x<A.length;x++){let E=A[x];E.enabled!==!1&&(E.render(y,w,T,S),E.needsSwap!==!1&&(T=w,w=w===o?c:o))}if(g!==y.outputColorSpace||v!==y.toneMapping){g=y.outputColorSpace,v=y.toneMapping,d.defines={},kt.getTransfer(g)===$t&&(d.defines.SRGB_TRANSFER="");let x=Ac[v];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(u),y.render(p,h),u=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}var P1=new De,La=new Nn(1,1),L1=new Hi,D1=new tr,N1=new Ji,d1=[],f1=[],p1=new Float32Array(16),m1=new Float32Array(9),g1=new Float32Array(4);function Di(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=d1[s];if(r===void 0&&(r=new Float32Array(s),d1[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function m0(i,t){let e=f1[t];e===void 0&&(e=new Int32Array(t),f1[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cc(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Rc(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function Ic(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Pc(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function Lc(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;g1.set(n),i.uniformMatrix2fv(this.addr,!1,g1),me(e,n)}}function Dc(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;m1.set(n),i.uniformMatrix3fv(this.addr,!1,m1),me(e,n)}}function Nc(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;p1.set(n),i.uniformMatrix4fv(this.addr,!1,p1),me(e,n)}}function Uc(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fc(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function Oc(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function Bc(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function zc(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vc(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function kc(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function Gc(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function Hc(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(La.compareFunction=e.isReversedDepthBuffer()?l0:o0,r=La):r=P1,e.setTexture2D(t||r,s)}function Wc(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||D1,s)}function Xc(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||N1,s)}function qc(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||L1,s)}function Yc(i){switch(i){case 5126:return Cc;case 35664:return Rc;case 35665:return Ic;case 35666:return Pc;case 35674:return Lc;case 35675:return Dc;case 35676:return Nc;case 5124:case 35670:return Uc;case 35667:case 35671:return Fc;case 35668:case 35672:return Oc;case 35669:case 35673:return Bc;case 5125:return zc;case 36294:return Vc;case 36295:return kc;case 36296:return Gc;case 35678:case 36198:case 36298:case 36306:case 35682:return Hc;case 35679:case 36299:case 36307:return Wc;case 35680:case 36300:case 36308:case 36293:return Xc;case 36289:case 36303:case 36311:case 36292:return qc}}function Zc(i,t){i.uniform1fv(this.addr,t)}function Jc(i,t){let e=Di(t,this.size,2);i.uniform2fv(this.addr,e)}function $c(i,t){let e=Di(t,this.size,3);i.uniform3fv(this.addr,e)}function Kc(i,t){let e=Di(t,this.size,4);i.uniform4fv(this.addr,e)}function Qc(i,t){let e=Di(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jc(i,t){let e=Di(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function th(i,t){let e=Di(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function eh(i,t){i.uniform1iv(this.addr,t)}function nh(i,t){i.uniform2iv(this.addr,t)}function ih(i,t){i.uniform3iv(this.addr,t)}function sh(i,t){i.uniform4iv(this.addr,t)}function rh(i,t){i.uniform1uiv(this.addr,t)}function ah(i,t){i.uniform2uiv(this.addr,t)}function oh(i,t){i.uniform3uiv(this.addr,t)}function lh(i,t){i.uniform4uiv(this.addr,t)}function ch(i,t,e){let n=this.cache,s=t.length,r=m0(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=La:a=P1;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function hh(i,t,e){let n=this.cache,s=t.length,r=m0(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||D1,r[a])}function uh(i,t,e){let n=this.cache,s=t.length,r=m0(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||N1,r[a])}function dh(i,t,e){let n=this.cache,s=t.length,r=m0(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||L1,r[a])}function fh(i){switch(i){case 5126:return Zc;case 35664:return Jc;case 35665:return $c;case 35666:return Kc;case 35674:return Qc;case 35675:return jc;case 35676:return th;case 5124:case 35670:return eh;case 35667:case 35671:return nh;case 35668:case 35672:return ih;case 35669:case 35673:return sh;case 5125:return rh;case 36294:return ah;case 36295:return oh;case 36296:return lh;case 35678:case 36198:case 36298:case 36306:case 35682:return ch;case 35679:case 36299:case 36307:return hh;case 35680:case 36300:case 36308:case 36293:return uh;case 36289:case 36303:case 36311:case 36292:return dh}}var Da=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yc(e.type)}},Na=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fh(e.type)}},Ua=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ia=/(\w+)(\])?(\[|\.)?/g;function _1(i,t){i.seq.push(t),i.map[t.id]=t}function ph(i,t,e){let n=i.name,s=n.length;for(Ia.lastIndex=0;;){let r=Ia.exec(n),a=Ia.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){_1(e,l===void 0?new Da(o,i,t):new Na(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Ua(o),_1(e,p)),e=p}}}var Li=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);ph(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function x1(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var mh=37297,gh=0;function _h(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var v1=new It;function xh(i){kt._getMatrix(v1,kt.workingColorSpace,i);let t=`mat3( ${v1.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(i)){case ki:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function y1(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+_h(i.getShaderSource(t),o)}else return r}function vh(i,t){let e=xh(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var yh={[ea]:"Linear",[na]:"Reinhard",[ia]:"Cineon",[rs]:"ACESFilmic",[ra]:"AgX",[aa]:"Neutral",[sa]:"Custom"};function Mh(i,t){let e=yh[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var h0=new V;function Sh(){kt.getLuminanceCoefficients(h0);let i=h0.x.toFixed(4),t=h0.y.toFixed(4),e=h0.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bh(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function Th(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Eh(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function _s(i){return i!==""}function M1(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function S1(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ah=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fa(i){return i.replace(Ah,Ch)}var wh=new Map;function Ch(i,t){let e=Ft[t];if(e===void 0){let n=wh.get(t);if(n!==void 0)e=Ft[n],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fa(e)}var Rh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b1(i){return i.replace(Rh,Ih)}function Ih(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function T1(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Ph={[ss]:"SHADOWMAP_TYPE_PCF",[Ai]:"SHADOWMAP_TYPE_VSM"};function Lh(i){return Ph[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Dh={[zn]:"ENVMAP_TYPE_CUBE",[Kn]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE_UV"};function Nh(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Dh[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Uh={[Kn]:"ENVMAP_MODE_REFRACTION"};function Fh(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Uh[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Oh={[ta]:"ENVMAP_BLENDING_MULTIPLY",[ko]:"ENVMAP_BLENDING_MIX",[Go]:"ENVMAP_BLENDING_ADD"};function Bh(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Oh[i.combine]||"ENVMAP_BLENDING_NONE"}function zh(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Vh(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Lh(e),l=Nh(e),d=Fh(e),p=Bh(e),h=zh(e),g=bh(e),v=Th(r),M=s.createProgram(),m,u,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(_s).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(_s).join(`
`),u.length>0&&(u+=`
`)):(m=[T1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),u=[T1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qe?"#define TONE_MAPPING":"",e.toneMapping!==Qe?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Qe?Mh("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,vh("linearToOutputTexel",e.outputColorSpace),Sh(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_s).join(`
`)),a=Fa(a),a=M1(a,e),a=S1(a,e),o=Fa(o),o=M1(o,e),o=S1(o,e),a=b1(a),o=b1(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let R=A+m+a,y=A+u+o,S=x1(s,s.VERTEX_SHADER,R),T=x1(s,s.FRAGMENT_SHADER,y);s.attachShader(M,S),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(N){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(M)||"",k=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(T)||"",G=B.trim(),J=k.trim(),q=D.trim(),nt=!0,W=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,S,T);else{let Q=y1(s,S,"vertex"),tt=y1(s,T,"fragment");Rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+Q+`
`+tt)}else G!==""?Ct("WebGLProgram: Program Info Log:",G):(J===""||q==="")&&(W=!1);W&&(N.diagnostics={runnable:nt,programLog:G,vertexShader:{log:J,prefix:m},fragmentShader:{log:q,prefix:u}})}s.deleteShader(S),s.deleteShader(T),x=new Li(s,M),E=Eh(s,M)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(M,mh)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gh++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=T,this}var kh=0,Oa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ba(t),e.set(t,n)),n}},Ba=class{constructor(t){this.id=kh++,this.code=t,this.usedTimes=0}};function Gh(i){return i===Gn||i===ds||i===fs}function Hh(i,t,e,n,s,r){let a=new Wi,o=new Oa,c=new Set,l=[],d=new Map,p=n.logarithmicDepthBuffer,h=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function M(x,E,P,N,B,k){let D=N.fog,G=B.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||J,q),W=nt&&nt.mapping===as?nt.image.height:null,Q=g[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ct("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let tt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=tt!==void 0?tt.length:0,mt=0;G.morphAttributes.position!==void 0&&(mt=1),G.morphAttributes.normal!==void 0&&(mt=2),G.morphAttributes.color!==void 0&&(mt=3);let Xt,Dt,Yt,Y;if(Q){let ee=fn[Q];Xt=ee.vertexShader,Dt=ee.fragmentShader}else{Xt=x.vertexShader,Dt=x.fragmentShader;let ee=o.getVertexShaderStage(x),Zt=o.getFragmentShaderStage(x);o.update(x,ee,Zt),Yt=ee.id,Y=Zt.id}let j=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Pt=B.isInstancedMesh===!0,_t=B.isBatchedMesh===!0,Ot=!!x.map,fe=!!x.matcap,Bt=!!nt,qt=!!x.aoMap,te=!!x.lightMap,Vt=!!x.bumpMap&&x.wireframe===!1,re=!!x.normalMap,ge=!!x.displacementMap,Pe=!!x.emissiveMap,oe=!!x.metalnessMap,he=!!x.roughnessMap,L=x.anisotropy>0,Me=x.clearcoat>0,Kt=x.dispersion>0,b=x.retroreflectivity>0,f=x.iridescence>0,U=x.sheen>0,z=x.transmission>0,X=L&&!!x.anisotropyMap,it=Me&&!!x.clearcoatMap,st=Me&&!!x.clearcoatNormalMap,Z=Me&&!!x.clearcoatRoughnessMap,K=f&&!!x.iridescenceMap,rt=f&&!!x.iridescenceThicknessMap,Tt=U&&!!x.sheenColorMap,ct=U&&!!x.sheenRoughnessMap,at=!!x.specularMap,Et=!!x.specularColorMap,wt=!!x.specularIntensityMap,Lt=z&&!!x.transmissionMap,I=z&&!!x.thicknessMap,ot=!!x.gradientMap,$=!!x.alphaMap,lt=x.alphaTest>0,ft=!!x.alphaHash,et=!!x.extensions,At=Qe;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(At=i.toneMapping);let St={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Xt,fragmentShader:Dt,defines:x.defines,customVertexShaderID:Yt,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:_t,batchingColor:_t&&B._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&B.instanceColor!==null,instancingMorph:Pt&&B.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:fe,envMap:Bt,envMapMode:Bt&&nt.mapping,envMapCubeUVHeight:W,aoMap:qt,lightMap:te,bumpMap:Vt,normalMap:re,displacementMap:ge,emissiveMap:Pe,normalMapObjectSpace:re&&x.normalMapType===Xo,normalMapTangentSpace:re&&x.normalMapType===a0,packedNormalMap:re&&x.normalMapType===a0&&Gh(x.normalMap.format),metalnessMap:oe,roughnessMap:he,anisotropy:L,anisotropyMap:X,clearcoat:Me,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:Z,dispersion:Kt,retroreflection:b,iridescence:f,iridescenceMap:K,iridescenceThicknessMap:rt,sheen:U,sheenColorMap:Tt,sheenRoughnessMap:ct,specularMap:at,specularColorMap:Et,specularIntensityMap:wt,transmission:z,transmissionMap:Lt,thicknessMap:I,gradientMap:ot,opaque:x.transparent===!1&&x.blending===wi&&x.alphaToCoverage===!1,alphaMap:$,alphaTest:lt,alphaHash:ft,combine:x.combine,mapUv:Ot&&v(x.map.channel),aoMapUv:qt&&v(x.aoMap.channel),lightMapUv:te&&v(x.lightMap.channel),bumpMapUv:Vt&&v(x.bumpMap.channel),normalMapUv:re&&v(x.normalMap.channel),displacementMapUv:ge&&v(x.displacementMap.channel),emissiveMapUv:Pe&&v(x.emissiveMap.channel),metalnessMapUv:oe&&v(x.metalnessMap.channel),roughnessMapUv:he&&v(x.roughnessMap.channel),anisotropyMapUv:X&&v(x.anisotropyMap.channel),clearcoatMapUv:it&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ct&&v(x.sheenRoughnessMap.channel),specularMapUv:at&&v(x.specularMap.channel),specularColorMapUv:Et&&v(x.specularColorMap.channel),specularIntensityMapUv:wt&&v(x.specularIntensityMap.channel),transmissionMapUv:Lt&&v(x.transmissionMap.channel),thicknessMapUv:I&&v(x.thicknessMap.channel),alphaMapUv:$&&v(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(re||L),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(Ot||$),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&re===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:vt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:mt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&kt.getTransfer(x.map.colorSpace)===$t,decodeVideoTextureEmissive:Pe&&x.emissiveMap.isVideoTexture===!0&&kt.getTransfer(x.emissiveMap.colorSpace)===$t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hn,flipSided:x.side===Ie,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:et&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&x.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function m(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(u(E,x),A(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function u(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function A(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function R(x){let E=g[x.type],P;if(E){let N=fn[E];P=r1.clone(N.uniforms)}else P=x.uniforms;return P}function y(x,E){let P=d.get(E);return P!==void 0?++P.usedTimes:(P=new Vh(i,E,x,s),l.push(P),d.set(E,P)),P}function S(x){if(--x.usedTimes===0){let E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function w(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:R,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:l,dispose:w}}function Wh(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function E1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function A1(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function o(h,g,v,M,m,u){let A=i[t];return A===void 0?(A={id:h.id,object:h,geometry:g,material:v,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:u},i[t]=A):(A.id=h.id,A.object=h,A.geometry=g,A.material=v,A.materialVariant=a(h),A.groupOrder=M,A.renderOrder=h.renderOrder,A.z=m,A.group=u),t++,A}function c(h,g,v,M,m,u,A){A.reversedDepth===!0&&(m=-m);let R=o(h,g,v,M,m,u);v.transmission>0?n.push(R):v.transparent===!0?s.push(R):e.push(R)}function l(h,g,v,M,m,u){let A=o(h,g,v,M,m,u);v.transmission>0?n.unshift(A):v.transparent===!0?s.unshift(A):e.unshift(A)}function d(h,g){e.length>1&&e.sort(h||Xh),n.length>1&&n.sort(g||E1),s.length>1&&s.sort(g||E1)}function p(){for(let h=t,g=i.length;h<g;h++){let v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:d}}function qh(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new A1,i.set(n,[a])):s>=r.length?(a=new A1,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Yh(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Ut};break;case"SpotLight":e={position:new V,direction:new V,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function Zh(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Jh=0;function $h(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kh(i){let t=new Yh,e=Zh(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let s=new V,r=new le,a=new le;function o(l){let d=0,p=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let g=0,v=0,M=0,m=0,u=0,A=0,R=0,y=0,S=0,T=0,w=0,x=0,E=0,P=0;l.sort($h);for(let B=0,k=l.length;B<k;B++){let D=l[B],G=D.color,J=D.intensity,q=D.distance,nt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Gn?nt=D.shadow.map.texture:nt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=G.r*J,p+=G.g*J,h+=G.b*J;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],J);P++}else if(D.isSunLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[v]=tt,n.sunShadowMap[v]=nt;let pt=Q.getViewportCount();for(let mt=0;mt<pt;mt++)n.sunShadowMatrix[M+mt]=Q.getMatrix(mt),n.sunShadowCascade[M+mt]=Q._cascadeData[mt];M+=pt,v++}n.sun[g]=W,g++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=D.shadow.matrix,S++}n.directional[m]=W,m++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(G).multiplyScalar(J),W.distance=q,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[A]=W;let Q=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,Q.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[A]=Q.matrix,D.castShadow){let tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.spotShadow[A]=tt,n.spotShadowMap[A]=nt,w++}A++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(G).multiplyScalar(J),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[R]=W,R++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let Q=D.shadow,tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,n.pointShadow[u]=tt,n.pointShadowMap[u]=nt,n.pointShadowMatrix[u]=D.shadow.matrix,T++}n.point[u]=W,u++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(J),W.groundColor.copy(D.groundColor).multiplyScalar(J),n.hemi[y]=W,y++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=h;let N=n.hash;(N.sunLength!==g||N.directionalLength!==m||N.pointLength!==u||N.spotLength!==A||N.rectAreaLength!==R||N.hemiLength!==y||N.numSunShadows!==v||N.numDirectionalShadows!==S||N.numPointShadows!==T||N.numSpotShadows!==w||N.numSpotMaps!==x||N.numLightProbes!==P)&&(n.sun.length=g,n.directional.length=m,n.spot.length=A,n.rectArea.length=R,n.point.length=u,n.hemi.length=y,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,N.sunLength=g,N.directionalLength=m,N.pointLength=u,N.spotLength=A,N.rectAreaLength=R,N.hemiLength=y,N.numSunShadows=v,N.numDirectionalShadows=S,N.numPointShadows=T,N.numSpotShadows=w,N.numSpotMaps=x,N.numLightProbes=P,n.version=Jh++)}function c(l,d){let p=0,h=0,g=0,v=0,M=0,m=0,u=d.matrixWorldInverse;for(let A=0,R=l.length;A<R;A++){let y=l[A];if(y.isSunLight){let S=n.sun[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(u),p++}else if(y.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(u),h++}else if(y.isSpotLight){let S=n.spot[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(u),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(u),v++}else if(y.isRectAreaLight){let S=n.rectArea[M];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(u),a.identity(),r.copy(y.matrixWorld),r.premultiply(u),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let S=n.point[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(u),g++}else if(y.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(u),m++}}}return{setup:o,setupView:c,state:n}}function w1(i){let t=new Kh(i),e=[],n=[],s=[];function r(h){p.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function d(h){t.setupView(e,h)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Qh(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new w1(i),t.set(s,[o])):r>=a.length?(o=new w1(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var jh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tu=`uniform sampler2D shadow_pass;
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
}`,eu=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],nu=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],C1=new le,gs=new V,Pa=new V;function iu(i,t,e){let n=new Si,s=new Ht,r=new Ht,a=new ae,o=new rr,c=new ar,l={},d=e.maxTextureSize,p={[Bn]:Ie,[Ie]:Bn,[hn]:hn},h=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:jh,fragmentShader:tu}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let v=new ze;v.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Re(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ss;let u=this.type;this.render=function(T,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===So&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ss);let E=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(un),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=u!==this.type;k&&w.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(G=>G.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,G=T.length;D<G;D++){let J=T[D],q=J.shadow;if(q===void 0){Ct("WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let nt=q.getFrameExtents();s.multiply(nt),r.copy(q.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/nt.x),s.x=r.x*nt.x,q.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/nt.y),s.y=r.y*nt.y,q.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=W,q.map===null||k===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ai){if(J.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Ne(s.x,s.y,{format:Gn,type:en,minFilter:ye,magFilter:ye,generateMipmaps:!1}),q.map.texture.name=J.name+".shadowMap",q.map.depthTexture=new Nn(s.x,s.y,tn),q.map.depthTexture.name=J.name+".shadowMapDepth",q.map.depthTexture.format=on,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=xe,q.map.depthTexture.magFilter=xe}else J.isPointLight?(q.map=new d0(s.x),q.map.depthTexture=new ir(s.x,je)):(q.map=new Ne(s.x,s.y),q.map.depthTexture=new Nn(s.x,s.y,je)),q.map.depthTexture.name=J.name+".shadowMap",q.map.depthTexture.format=on,this.type===ss?(q.map.depthTexture.compareFunction=W?l0:o0,q.map.depthTexture.minFilter=ye,q.map.depthTexture.magFilter=ye):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=xe,q.map.depthTexture.magFilter=xe);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let Q=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();J.isPointLight!==!0&&q.updateMatrices(J,x);for(let tt=0;tt<Q;tt++){let pt=q.getCamera(tt);if(J.isPointLight){let mt=q.camera,Xt=q.matrix,Dt=J.distance||mt.far;Dt!==mt.far&&(mt.far=Dt,mt.updateProjectionMatrix()),gs.setFromMatrixPosition(J.matrixWorld),mt.position.copy(gs),Pa.copy(mt.position),Pa.add(eu[tt]),mt.up.copy(nu[tt]),mt.lookAt(Pa),mt.updateMatrixWorld(),Xt.makeTranslation(-gs.x,-gs.y,-gs.z),C1.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(C1,mt.coordinateSystem,mt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(q.map),i.clear());let mt=q.getViewport(tt);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),B.viewport(a)}n=q.getFrustum(tt),y(w,x,pt,J,this.type)}q.isPointLightShadow!==!0&&this.type===Ai&&A(q,x),q.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(E,P,N)};function A(T,w){let x=t.update(M);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ne(s.x,s.y,{format:Gn,type:en}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,x,h,M,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value.set(T.map.width,T.map.height),g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,x,g,M,null)}function R(T,w,x,E){let P=null,N=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)P=N;else if(P=x.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let B=P.uuid,k=w.uuid,D=l[B];D===void 0&&(D={},l[B]=D);let G=D[k];G===void 0&&(G=P.clone(),D[k]=G,w.addEventListener("dispose",S)),P=G}if(P.visible=w.visible,P.wireframe=w.wireframe,E===Ai?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:p[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let B=i.properties.get(P);B.light=x}return P}function y(T,w,x,E,P){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Ai)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let k=t.update(T),D=T.material;if(Array.isArray(D)){let G=k.groups;for(let J=0,q=G.length;J<q;J++){let nt=G[J],W=D[nt.materialIndex];if(W&&W.visible){let Q=R(T,W,E,P);T.onBeforeShadow(i,T,w,x,k,Q,nt),i.renderBufferDirect(x,null,k,Q,T,nt),T.onAfterShadow(i,T,w,x,k,Q,nt)}}}else if(D.visible){let G=R(T,D,E,P);T.onBeforeShadow(i,T,w,x,k,G,null),i.renderBufferDirect(x,null,k,G,T,null),T.onAfterShadow(i,T,w,x,k,G,null)}}let B=T.children;for(let k=0,D=B.length;k<D;k++)y(B[k],w,x,E,P)}function S(T){T.target.removeEventListener("dispose",S);for(let x in l){let E=l[x],P=T.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function su(i,t){function e(){let I=!1,ot=new ae,$=null,lt=new ae(0,0,0,0);return{setMask:function(ft){$!==ft&&!I&&(i.colorMask(ft,ft,ft,ft),$=ft)},setLocked:function(ft){I=ft},setClear:function(ft,et,At,St,ee){ee===!0&&(ft*=St,et*=St,At*=St),ot.set(ft,et,At,St),lt.equals(ot)===!1&&(i.clearColor(ft,et,At,St),lt.copy(ot))},reset:function(){I=!1,$=null,lt.set(-1,0,0,0)}}}function n(){let I=!1,ot=!1,$=null,lt=null,ft=null;return{setReversed:function(et){if(ot!==et){let At=t.get("EXT_clip_control");et?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ot=et;let St=ft;ft=null,this.setClear(St)}},getReversed:function(){return ot},setTest:function(et){et?j(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(et){$!==et&&!I&&(i.depthMask(et),$=et)},setFunc:function(et){if(ot&&(et=i1[et]),lt!==et){switch(et){case ks:i.depthFunc(i.NEVER);break;case Gs:i.depthFunc(i.ALWAYS);break;case Hs:i.depthFunc(i.LESS);break;case gi:i.depthFunc(i.LEQUAL);break;case Ws:i.depthFunc(i.EQUAL);break;case Xs:i.depthFunc(i.GEQUAL);break;case qs:i.depthFunc(i.GREATER);break;case Ys:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=et}},setLocked:function(et){I=et},setClear:function(et){ft!==et&&(ft=et,ot&&(et=1-et),i.clearDepth(et))},reset:function(){I=!1,$=null,lt=null,ft=null,ot=!1}}}function s(){let I=!1,ot=null,$=null,lt=null,ft=null,et=null,At=null,St=null,ee=null;return{setTest:function(Zt){I||(Zt?j(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(Zt){ot!==Zt&&!I&&(i.stencilMask(Zt),ot=Zt)},setFunc:function(Zt,qe,nn){($!==Zt||lt!==qe||ft!==nn)&&(i.stencilFunc(Zt,qe,nn),$=Zt,lt=qe,ft=nn)},setOp:function(Zt,qe,nn){(et!==Zt||At!==qe||St!==nn)&&(i.stencilOp(Zt,qe,nn),et=Zt,At=qe,St=nn)},setLocked:function(Zt){I=Zt},setClear:function(Zt){ee!==Zt&&(i.clearStencil(Zt),ee=Zt)},reset:function(){I=!1,ot=null,$=null,lt=null,ft=null,et=null,At=null,St=null,ee=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,d={},p={},h={},g=new WeakMap,v=[],M=null,m=!1,u=null,A=null,R=null,y=null,S=null,T=null,w=null,x=new Ut(0,0,0),E=0,P=!1,N=null,B=null,k=null,D=null,G=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,nt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=nt>=2);let Q=null,tt={},pt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Xt=new ae().fromArray(pt),Dt=new ae().fromArray(mt);function Yt(I,ot,$,lt){let ft=new Uint8Array(4),et=i.createTexture();i.bindTexture(I,et),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<$;At++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ot+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return et}let Y={};Y[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(gi),Vt(!1),re(Z0),j(i.CULL_FACE),qt(un);function j(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function vt(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Pt(I,ot){return h[I]!==ot?(i.bindFramebuffer(I,ot),h[I]=ot,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function _t(I,ot){let $=v,lt=!1;if(I){$=g.get(ot),$===void 0&&($=[],g.set(ot,$));let ft=I.textures;if($.length!==ft.length||$[0]!==i.COLOR_ATTACHMENT0){for(let et=0,At=ft.length;et<At;et++)$[et]=i.COLOR_ATTACHMENT0+et;$.length=ft.length,lt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,lt=!0);lt&&i.drawBuffers($)}function Ot(I){return M!==I?(i.useProgram(I),M=I,!0):!1}let fe={[$n]:i.FUNC_ADD,[To]:i.FUNC_SUBTRACT,[Eo]:i.FUNC_REVERSE_SUBTRACT};fe[Ao]=i.MIN,fe[wo]=i.MAX;let Bt={[Co]:i.ZERO,[Ro]:i.ONE,[Io]:i.SRC_COLOR,[Q0]:i.SRC_ALPHA,[Fo]:i.SRC_ALPHA_SATURATE,[No]:i.DST_COLOR,[Lo]:i.DST_ALPHA,[Po]:i.ONE_MINUS_SRC_COLOR,[j0]:i.ONE_MINUS_SRC_ALPHA,[Uo]:i.ONE_MINUS_DST_COLOR,[Do]:i.ONE_MINUS_DST_ALPHA,[Oo]:i.CONSTANT_COLOR,[Bo]:i.ONE_MINUS_CONSTANT_COLOR,[zo]:i.CONSTANT_ALPHA,[Vo]:i.ONE_MINUS_CONSTANT_ALPHA};function qt(I,ot,$,lt,ft,et,At,St,ee,Zt){if(I===un){m===!0&&(vt(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),I!==bo){if(I!==u||Zt!==P){if((A!==$n||S!==$n)&&(i.blendEquation(i.FUNC_ADD),A=$n,S=$n),Zt)switch(I){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case J0:i.blendFunc(i.ONE,i.ONE);break;case $0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case K0:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Rt("WebGLState: Invalid blending: ",I);break}else switch(I){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case J0:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $0:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case K0:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",I);break}R=null,y=null,T=null,w=null,x.set(0,0,0),E=0,u=I,P=Zt}return}ft=ft||ot,et=et||$,At=At||lt,(ot!==A||ft!==S)&&(i.blendEquationSeparate(fe[ot],fe[ft]),A=ot,S=ft),($!==R||lt!==y||et!==T||At!==w)&&(i.blendFuncSeparate(Bt[$],Bt[lt],Bt[et],Bt[At]),R=$,y=lt,T=et,w=At),(St.equals(x)===!1||ee!==E)&&(i.blendColor(St.r,St.g,St.b,ee),x.copy(St),E=ee),u=I,P=!1}function te(I,ot){I.side===hn?vt(i.CULL_FACE):j(i.CULL_FACE);let $=I.side===Ie;ot&&($=!$),Vt($),I.blending===wi&&I.transparent===!1?qt(un):qt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let lt=I.stencilWrite;o.setTest(lt),lt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Pe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(I){N!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),N=I)}function re(I){I!==yo?(j(i.CULL_FACE),I!==B&&(I===Z0?i.cullFace(i.BACK):I===Mo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),B=I}function ge(I){I!==k&&(q&&i.lineWidth(I),k=I)}function Pe(I,ot,$){I?(j(i.POLYGON_OFFSET_FILL),(D!==ot||G!==$)&&(D=ot,G=$,a.getReversed()&&(ot=-ot),i.polygonOffset(ot,$))):vt(i.POLYGON_OFFSET_FILL)}function oe(I){I?j(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function he(I){I===void 0&&(I=i.TEXTURE0+J-1),Q!==I&&(i.activeTexture(I),Q=I)}function L(I,ot,$){$===void 0&&(Q===null?$=i.TEXTURE0+J-1:$=Q);let lt=tt[$];lt===void 0&&(lt={type:void 0,texture:void 0},tt[$]=lt),(lt.type!==I||lt.texture!==ot)&&(Q!==$&&(i.activeTexture($),Q=$),i.bindTexture(I,ot||Y[I]),lt.type=I,lt.texture=ot)}function Me(){let I=tt[Q];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Kt(){try{i.compressedTexImage2D(...arguments)}catch(I){Rt("WebGLState:",I)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(I){Rt("WebGLState:",I)}}function f(){try{i.texSubImage2D(...arguments)}catch(I){Rt("WebGLState:",I)}}function U(){try{i.texSubImage3D(...arguments)}catch(I){Rt("WebGLState:",I)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Rt("WebGLState:",I)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Rt("WebGLState:",I)}}function it(){try{i.texStorage2D(...arguments)}catch(I){Rt("WebGLState:",I)}}function st(){try{i.texStorage3D(...arguments)}catch(I){Rt("WebGLState:",I)}}function Z(){try{i.texImage2D(...arguments)}catch(I){Rt("WebGLState:",I)}}function K(){try{i.texImage3D(...arguments)}catch(I){Rt("WebGLState:",I)}}function rt(I){return p[I]!==void 0?p[I]:i.getParameter(I)}function Tt(I,ot){p[I]!==ot&&(i.pixelStorei(I,ot),p[I]=ot)}function ct(I){Xt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Xt.copy(I))}function at(I){Dt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Dt.copy(I))}function Et(I,ot){let $=l.get(ot);$===void 0&&($=new WeakMap,l.set(ot,$));let lt=$.get(I);lt===void 0&&(lt=i.getUniformBlockIndex(ot,I.name),$.set(I,lt))}function wt(I,ot){let lt=l.get(ot).get(I);c.get(ot)!==lt&&(i.uniformBlockBinding(ot,lt,I.__bindingPointIndex),c.set(ot,lt))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},p={},Q=null,tt={},h={},g=new WeakMap,v=[],M=null,m=!1,u=null,A=null,R=null,y=null,S=null,T=null,w=null,x=new Ut(0,0,0),E=0,P=!1,N=null,B=null,k=null,D=null,G=null,Xt.set(0,0,i.canvas.width,i.canvas.height),Dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:vt,bindFramebuffer:Pt,drawBuffers:_t,useProgram:Ot,setBlending:qt,setMaterial:te,setFlipSided:Vt,setCullFace:re,setLineWidth:ge,setPolygonOffset:Pe,setScissorTest:oe,activeTexture:he,bindTexture:L,unbindTexture:Me,compressedTexImage2D:Kt,compressedTexImage3D:b,texImage2D:Z,texImage3D:K,pixelStorei:Tt,getParameter:rt,updateUBOMapping:Et,uniformBlockBinding:wt,texStorage2D:it,texStorage3D:st,texSubImage2D:f,texSubImage3D:U,compressedTexSubImage2D:z,compressedTexSubImage3D:X,scissor:ct,viewport:at,reset:Lt}}function ru(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,d=new WeakMap,p=new Set,h,g=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,f){return v?new OffscreenCanvas(b,f):Gi("canvas")}function m(b,f,U){let z=1,X=Kt(b);if((X.width>U||X.height>U)&&(z=U/Math.max(X.width,X.height)),z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let it=Math.floor(z*X.width),st=Math.floor(z*X.height);h===void 0&&(h=M(it,st));let Z=f?M(it,st):h;return Z.width=it,Z.height=st,Z.getContext("2d").drawImage(b,0,0,it,st),Ct("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+it+"x"+st+")."),Z}else return"data"in b&&Ct("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),b;return b}function u(b){return b.generateMipmaps}function A(b){i.generateMipmap(b)}function R(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(b,f,U,z,X,it=!1){if(b!==null){if(i[b]!==void 0)return i[b];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let st;z&&(st=t.get("EXT_texture_norm16"),st||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=f;if(f===i.RED&&(U===i.FLOAT&&(Z=i.R32F),U===i.HALF_FLOAT&&(Z=i.R16F),U===i.UNSIGNED_BYTE&&(Z=i.R8),U===i.UNSIGNED_SHORT&&st&&(Z=st.R16_EXT),U===i.SHORT&&st&&(Z=st.R16_SNORM_EXT)),f===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.R8UI),U===i.UNSIGNED_SHORT&&(Z=i.R16UI),U===i.UNSIGNED_INT&&(Z=i.R32UI),U===i.BYTE&&(Z=i.R8I),U===i.SHORT&&(Z=i.R16I),U===i.INT&&(Z=i.R32I)),f===i.RG&&(U===i.FLOAT&&(Z=i.RG32F),U===i.HALF_FLOAT&&(Z=i.RG16F),U===i.UNSIGNED_BYTE&&(Z=i.RG8),U===i.UNSIGNED_SHORT&&st&&(Z=st.RG16_EXT),U===i.SHORT&&st&&(Z=st.RG16_SNORM_EXT)),f===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.RG8UI),U===i.UNSIGNED_SHORT&&(Z=i.RG16UI),U===i.UNSIGNED_INT&&(Z=i.RG32UI),U===i.BYTE&&(Z=i.RG8I),U===i.SHORT&&(Z=i.RG16I),U===i.INT&&(Z=i.RG32I)),f===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),U===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),U===i.UNSIGNED_INT&&(Z=i.RGB32UI),U===i.BYTE&&(Z=i.RGB8I),U===i.SHORT&&(Z=i.RGB16I),U===i.INT&&(Z=i.RGB32I)),f===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),U===i.UNSIGNED_INT&&(Z=i.RGBA32UI),U===i.BYTE&&(Z=i.RGBA8I),U===i.SHORT&&(Z=i.RGBA16I),U===i.INT&&(Z=i.RGBA32I)),f===i.RGB&&(U===i.UNSIGNED_SHORT&&st&&(Z=st.RGB16_EXT),U===i.SHORT&&st&&(Z=st.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),f===i.RGBA){let K=it?ki:kt.getTransfer(X);U===i.FLOAT&&(Z=i.RGBA32F),U===i.HALF_FLOAT&&(Z=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Z=K===$t?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&st&&(Z=st.RGBA16_EXT),U===i.SHORT&&st&&(Z=st.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function S(b,f){let U;return b?f===null||f===je||f===Ri?U=i.DEPTH24_STENCIL8:f===tn?U=i.DEPTH32F_STENCIL8:f===Ci&&(U=i.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===je||f===Ri?U=i.DEPTH_COMPONENT24:f===tn?U=i.DEPTH_COMPONENT32F:f===Ci&&(U=i.DEPTH_COMPONENT16),U}function T(b,f){return u(b)===!0||b.isFramebufferTexture&&b.minFilter!==xe&&b.minFilter!==ye?Math.log2(Math.max(f.width,f.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?f.mipmaps.length:1}function w(b){let f=b.target;f.removeEventListener("dispose",w),E(f),f.isVideoTexture&&d.delete(f),f.isHTMLTexture&&p.delete(f)}function x(b){let f=b.target;f.removeEventListener("dispose",x),N(f)}function E(b){let f=n.get(b);if(f.__webglInit===void 0)return;let U=b.source,z=g.get(U);if(z){let X=z[f.__cacheKey];X.usedTimes--,X.usedTimes===0&&P(b),Object.keys(z).length===0&&g.delete(U)}n.remove(b)}function P(b){let f=n.get(b);i.deleteTexture(f.__webglTexture);let U=b.source,z=g.get(U);delete z[f.__cacheKey],a.memory.textures--}function N(b){let f=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(f.__webglFramebuffer[z]))for(let X=0;X<f.__webglFramebuffer[z].length;X++)i.deleteFramebuffer(f.__webglFramebuffer[z][X]);else i.deleteFramebuffer(f.__webglFramebuffer[z]);f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer[z])}else{if(Array.isArray(f.__webglFramebuffer))for(let z=0;z<f.__webglFramebuffer.length;z++)i.deleteFramebuffer(f.__webglFramebuffer[z]);else i.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&i.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let z=0;z<f.__webglColorRenderbuffer.length;z++)f.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(f.__webglColorRenderbuffer[z]);f.__webglDepthRenderbuffer&&i.deleteRenderbuffer(f.__webglDepthRenderbuffer)}let U=b.textures;for(let z=0,X=U.length;z<X;z++){let it=n.get(U[z]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(U[z])}n.remove(b)}let B=0;function k(){B=0}function D(){return B}function G(b){B=b}function J(){let b=B;return b>=s.maxTextures&&Ct("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,b}function q(b){let f=[];return f.push(b.wrapS),f.push(b.wrapT),f.push(b.wrapR||0),f.push(b.magFilter),f.push(b.minFilter),f.push(b.anisotropy),f.push(b.internalFormat),f.push(b.format),f.push(b.type),f.push(b.generateMipmaps),f.push(b.premultiplyAlpha),f.push(b.flipY),f.push(b.unpackAlignment),f.push(b.colorSpace),f.join()}function nt(b,f){let U=n.get(b);if(b.isVideoTexture&&L(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&U.__version!==b.version){let z=b.image;if(z===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(U,b,f);return}}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+f)}function W(b,f){let U=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){vt(U,b,f);return}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+f)}function Q(b,f){let U=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){vt(U,b,f);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+f)}function tt(b,f){let U=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&U.__version!==b.version){Pt(U,b,f);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+f)}let pt={[Zs]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[Js]:i.MIRRORED_REPEAT},mt={[xe]:i.NEAREST,[Ho]:i.NEAREST_MIPMAP_NEAREST,[os]:i.NEAREST_MIPMAP_LINEAR,[ye]:i.LINEAR,[br]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},Xt={[Yo]:i.NEVER,[Qo]:i.ALWAYS,[Zo]:i.LESS,[o0]:i.LEQUAL,[Jo]:i.EQUAL,[l0]:i.GEQUAL,[$o]:i.GREATER,[Ko]:i.NOTEQUAL};function Dt(b,f){if(f.type===tn&&t.has("OES_texture_float_linear")===!1&&(f.magFilter===ye||f.magFilter===br||f.magFilter===os||f.magFilter===Vn||f.minFilter===ye||f.minFilter===br||f.minFilter===os||f.minFilter===Vn)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,pt[f.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,pt[f.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,pt[f.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,mt[f.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,mt[f.minFilter]),f.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Xt[f.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===xe||f.minFilter!==os&&f.minFilter!==Vn||f.type===tn&&t.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||n.get(f).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,s.getMaxAnisotropy())),n.get(f).__currentAnisotropy=f.anisotropy}}}function Yt(b,f){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,f.addEventListener("dispose",w));let z=f.source,X=g.get(z);X===void 0&&(X={},g.set(z,X));let it=q(f);if(it!==b.__cacheKey){X[it]===void 0&&(X[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),X[it].usedTimes++;let st=X[b.__cacheKey];st!==void 0&&(X[b.__cacheKey].usedTimes--,st.usedTimes===0&&P(f)),b.__cacheKey=it,b.__webglTexture=X[it].texture}return U}function Y(b,f,U){return Math.floor(Math.floor(b/U)/f)}function j(b,f,U,z){let it=b.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,f.width,f.height,U,z,f.data);else{it.sort((Tt,ct)=>Tt.start-ct.start);let st=0;for(let Tt=1;Tt<it.length;Tt++){let ct=it[st],at=it[Tt],Et=ct.start+ct.count,wt=Y(at.start,f.width,4),Lt=Y(ct.start,f.width,4);at.start<=Et+1&&wt===Lt&&Y(at.start+at.count-1,f.width,4)===wt?ct.count=Math.max(ct.count,at.start+at.count-ct.start):(++st,it[st]=at)}it.length=st+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,f.width);for(let Tt=0,ct=it.length;Tt<ct;Tt++){let at=it[Tt],Et=Math.floor(at.start/4),wt=Math.ceil(at.count/4),Lt=Et%f.width,I=Math.floor(Et/f.width),ot=wt,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Lt,I,ot,$,U,z,f.data)}b.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,rt)}}function vt(b,f,U){let z=i.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),f.isData3DTexture&&(z=i.TEXTURE_3D);let X=Yt(b,f),it=f.source;e.bindTexture(z,b.__webglTexture,i.TEXTURE0+U);let st=n.get(it);if(it.version!==st.__version||X===!0){if(e.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&f.image instanceof ImageBitmap)===!1){let $=kt.getPrimaries(kt.workingColorSpace),lt=f.colorSpace===Sn?null:kt.getPrimaries(f.colorSpace),ft=f.colorSpace===Sn||$===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment);let K=m(f.image,!1,s.maxTextureSize);K=Me(f,K);let rt=r.convert(f.format,f.colorSpace),Tt=r.convert(f.type),ct=y(f.internalFormat,rt,Tt,f.normalized,f.colorSpace,f.isVideoTexture);Dt(z,f);let at,Et=f.mipmaps,wt=f.isVideoTexture!==!0,Lt=st.__version===void 0||X===!0,I=it.dataReady,ot=T(f,K);if(f.isDepthTexture)ct=S(f.format===kn,f.type),Lt&&(wt?e.texStorage2D(i.TEXTURE_2D,1,ct,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,ct,K.width,K.height,0,rt,Tt,null));else if(f.isDataTexture)if(Et.length>0){wt&&Lt&&e.texStorage2D(i.TEXTURE_2D,ot,ct,Et[0].width,Et[0].height);for(let $=0,lt=Et.length;$<lt;$++)at=Et[$],wt?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,at.width,at.height,rt,Tt,at.data):e.texImage2D(i.TEXTURE_2D,$,ct,at.width,at.height,0,rt,Tt,at.data);f.generateMipmaps=!1}else wt?(Lt&&e.texStorage2D(i.TEXTURE_2D,ot,ct,K.width,K.height),I&&j(f,K,rt,Tt)):e.texImage2D(i.TEXTURE_2D,0,ct,K.width,K.height,0,rt,Tt,K.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){wt&&Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,Et[0].width,Et[0].height,K.depth);for(let $=0,lt=Et.length;$<lt;$++)if(at=Et[$],f.format!==Xe)if(rt!==null)if(wt){if(I)if(f.layerUpdates.size>0){let ft=ya(at.width,at.height,f.format,f.type);for(let et of f.layerUpdates){let At=at.data.subarray(et*ft/at.data.BYTES_PER_ELEMENT,(et+1)*ft/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,et,at.width,at.height,1,rt,At)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,K.depth,rt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,ct,at.width,at.height,K.depth,0,at.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,K.depth,rt,Tt,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,ct,at.width,at.height,K.depth,0,rt,Tt,at.data);f.layerUpdates.size>0&&f.clearLayerUpdates()}else{wt&&Lt&&e.texStorage2D(i.TEXTURE_2D,ot,ct,Et[0].width,Et[0].height);for(let $=0,lt=Et.length;$<lt;$++)at=Et[$],f.format!==Xe?rt!==null?wt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,at.width,at.height,rt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,$,ct,at.width,at.height,0,at.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,at.width,at.height,rt,Tt,at.data):e.texImage2D(i.TEXTURE_2D,$,ct,at.width,at.height,0,rt,Tt,at.data)}else if(f.isDataArrayTexture)if(wt){if(Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,K.width,K.height,K.depth),I)if(f.layerUpdates.size>0){let $=ya(K.width,K.height,f.format,f.type);for(let lt of f.layerUpdates){let ft=K.data.subarray(lt*$/K.data.BYTES_PER_ELEMENT,(lt+1)*$/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,K.width,K.height,1,rt,Tt,ft)}f.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,rt,Tt,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,K.width,K.height,K.depth,0,rt,Tt,K.data);else if(f.isData3DTexture)wt?(Lt&&e.texStorage3D(i.TEXTURE_3D,ot,ct,K.width,K.height,K.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,rt,Tt,K.data)):e.texImage3D(i.TEXTURE_3D,0,ct,K.width,K.height,K.depth,0,rt,Tt,K.data);else if(f.isFramebufferTexture){if(Lt)if(wt)e.texStorage2D(i.TEXTURE_2D,ot,ct,K.width,K.height);else{let $=K.width,lt=K.height;for(let ft=0;ft<ot;ft++)e.texImage2D(i.TEXTURE_2D,ft,ct,$,lt,0,rt,Tt,null),$>>=1,lt>>=1}}else if(f.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),K.parentNode!==$){$.appendChild(K),p.add(f),$.onpaint=lt=>{let ft=lt.changedElements;for(let et of p)ft.includes(et.image)&&(et.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let ft=i.RGBA,et=i.RGBA,At=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ft,et,At,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Et.length>0){if(wt&&Lt){let $=Kt(Et[0]);e.texStorage2D(i.TEXTURE_2D,ot,ct,$.width,$.height)}for(let $=0,lt=Et.length;$<lt;$++)at=Et[$],wt?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,rt,Tt,at):e.texImage2D(i.TEXTURE_2D,$,ct,rt,Tt,at);f.generateMipmaps=!1}else if(wt){if(Lt){let $=Kt(K);e.texStorage2D(i.TEXTURE_2D,ot,ct,$.width,$.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt,Tt,K)}else e.texImage2D(i.TEXTURE_2D,0,ct,rt,Tt,K);u(f)&&A(z),st.__version=it.version,f.onUpdate&&f.onUpdate(f)}b.__version=f.version}function Pt(b,f,U){if(f.image.length!==6)return;let z=Yt(b,f),X=f.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+U);let it=n.get(X);if(X.version!==it.__version||z===!0){e.activeTexture(i.TEXTURE0+U);let st=kt.getPrimaries(kt.workingColorSpace),Z=f.colorSpace===Sn?null:kt.getPrimaries(f.colorSpace),K=f.colorSpace===Sn||st===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let rt=f.isCompressedTexture||f.image[0].isCompressedTexture,Tt=f.image[0]&&f.image[0].isDataTexture,ct=[];for(let et=0;et<6;et++)!rt&&!Tt?ct[et]=m(f.image[et],!0,s.maxCubemapSize):ct[et]=Tt?f.image[et].image:f.image[et],ct[et]=Me(f,ct[et]);let at=ct[0],Et=r.convert(f.format,f.colorSpace),wt=r.convert(f.type),Lt=y(f.internalFormat,Et,wt,f.normalized,f.colorSpace),I=f.isVideoTexture!==!0,ot=it.__version===void 0||z===!0,$=X.dataReady,lt=T(f,at);Dt(i.TEXTURE_CUBE_MAP,f);let ft;if(rt){I&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Lt,at.width,at.height);for(let et=0;et<6;et++){ft=ct[et].mipmaps;for(let At=0;At<ft.length;At++){let St=ft[At];f.format!==Xe?Et!==null?I?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,0,0,St.width,St.height,Et,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,Lt,St.width,St.height,0,St.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,0,0,St.width,St.height,Et,wt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,Lt,St.width,St.height,0,Et,wt,St.data)}}}else{if(ft=f.mipmaps,I&&ot){ft.length>0&&lt++;let et=Kt(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Lt,et.width,et.height)}for(let et=0;et<6;et++)if(Tt){I?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ct[et].width,ct[et].height,Et,wt,ct[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Lt,ct[et].width,ct[et].height,0,Et,wt,ct[et].data);for(let At=0;At<ft.length;At++){let ee=ft[At].image[et].image;I?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,0,0,ee.width,ee.height,Et,wt,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,Lt,ee.width,ee.height,0,Et,wt,ee.data)}}else{I?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Et,wt,ct[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Lt,Et,wt,ct[et]);for(let At=0;At<ft.length;At++){let St=ft[At];I?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,0,0,Et,wt,St.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,Lt,Et,wt,St.image[et])}}}u(f)&&A(i.TEXTURE_CUBE_MAP),it.__version=X.version,f.onUpdate&&f.onUpdate(f)}b.__version=f.version}function _t(b,f,U,z,X,it){let st=r.convert(U.format,U.colorSpace),Z=r.convert(U.type),K=y(U.internalFormat,st,Z,U.normalized,U.colorSpace),rt=n.get(f),Tt=n.get(U);if(Tt.__renderTarget=f,!rt.__hasExternalTextures){let ct=Math.max(1,f.width>>it),at=Math.max(1,f.height>>it);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?e.texImage3D(X,it,K,ct,at,f.depth,0,st,Z,null):e.texImage2D(X,it,K,ct,at,0,st,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),he(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,X,Tt.__webglTexture,0,oe(f)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,X,Tt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(b,f,U){if(i.bindRenderbuffer(i.RENDERBUFFER,b),f.depthBuffer){let z=f.depthTexture,X=z&&z.isDepthTexture?z.type:null,it=S(f.stencilBuffer,X),st=f.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(f)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe(f),it,f.width,f.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe(f),it,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,it,f.width,f.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,b)}else{let z=f.textures;for(let X=0;X<z.length;X++){let it=z[X],st=r.convert(it.format,it.colorSpace),Z=r.convert(it.type),K=y(it.internalFormat,st,Z,it.normalized,it.colorSpace);he(f)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe(f),K,f.width,f.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe(f),K,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,K,f.width,f.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(b,f,U){let z=f.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=n.get(f.depthTexture);if(X.__renderTarget=f,(!X.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),z){if(X.__webglInit===void 0&&(X.__webglInit=!0,f.depthTexture.addEventListener("dispose",w)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,f.depthTexture);let rt=r.convert(f.depthTexture.format),Tt=r.convert(f.depthTexture.type),ct;f.depthTexture.format===on?ct=i.DEPTH_COMPONENT24:f.depthTexture.format===kn&&(ct=i.DEPTH24_STENCIL8);for(let at=0;at<6;at++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ct,f.width,f.height,0,rt,Tt,null)}}else nt(f.depthTexture,0);let it=X.__webglTexture,st=oe(f),Z=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,K=f.depthTexture.format===kn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(f.depthTexture.format===on)he(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,it,0);else if(f.depthTexture.format===kn)he(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(b){let f=n.get(b),U=b.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==b.depthTexture){let z=b.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),z){let X=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,z.removeEventListener("dispose",X)};z.addEventListener("dispose",X),f.__depthDisposeCallback=X}f.__boundDepthTexture=z}if(b.depthTexture&&!f.__autoAllocateDepthBuffer)if(U)for(let z=0;z<6;z++)fe(f.__webglFramebuffer[z],b,z);else{let z=b.texture.mipmaps;z&&z.length>0?fe(f.__webglFramebuffer[0],b,0):fe(f.__webglFramebuffer,b,0)}else if(U){f.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[z]),f.__webglDepthbuffer[z]===void 0)f.__webglDepthbuffer[z]=i.createRenderbuffer(),Ot(f.__webglDepthbuffer[z],b,!1);else{let X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=f.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,it)}}else{let z=b.texture.mipmaps;if(z&&z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=i.createRenderbuffer(),Ot(f.__webglDepthbuffer,b,!1);else{let X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=f.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(b,f,U){let z=n.get(b);f!==void 0&&_t(z.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Bt(b)}function te(b){let f=b.texture,U=n.get(b),z=n.get(f);b.addEventListener("dispose",x);let X=b.textures,it=b.isWebGLCubeRenderTarget===!0,st=X.length>1;if(st||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=f.version,a.memory.textures++),it){U.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(f.mipmaps&&f.mipmaps.length>0){U.__webglFramebuffer[Z]=[];for(let K=0;K<f.mipmaps.length;K++)U.__webglFramebuffer[Z][K]=i.createFramebuffer()}else U.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){U.__webglFramebuffer=[];for(let Z=0;Z<f.mipmaps.length;Z++)U.__webglFramebuffer[Z]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(st)for(let Z=0,K=X.length;Z<K;Z++){let rt=n.get(X[Z]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&he(b)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Z=0;Z<X.length;Z++){let K=X[Z];U.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[Z]);let rt=r.convert(K.format,K.colorSpace),Tt=r.convert(K.type),ct=y(K.internalFormat,rt,Tt,K.normalized,K.colorSpace,b.isXRRenderTarget===!0),at=oe(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ct,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,U.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(U.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,f);for(let Z=0;Z<6;Z++)if(f.mipmaps&&f.mipmaps.length>0)for(let K=0;K<f.mipmaps.length;K++)_t(U.__webglFramebuffer[Z][K],b,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else _t(U.__webglFramebuffer[Z],b,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);u(f)&&A(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let Z=0,K=X.length;Z<K;Z++){let rt=X[Z],Tt=n.get(rt),ct=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ct=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Tt.__webglTexture),Dt(ct,rt),_t(U.__webglFramebuffer,b,rt,i.COLOR_ATTACHMENT0+Z,ct,0),u(rt)&&A(ct)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Z=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,z.__webglTexture),Dt(Z,f),f.mipmaps&&f.mipmaps.length>0)for(let K=0;K<f.mipmaps.length;K++)_t(U.__webglFramebuffer[K],b,f,i.COLOR_ATTACHMENT0,Z,K);else _t(U.__webglFramebuffer,b,f,i.COLOR_ATTACHMENT0,Z,0);u(f)&&A(Z),e.unbindTexture()}b.depthBuffer&&Bt(b)}function Vt(b){let f=b.textures;for(let U=0,z=f.length;U<z;U++){let X=f[U];if(u(X)){let it=R(b),st=n.get(X).__webglTexture;e.bindTexture(it,st),A(it),e.unbindTexture()}}}let re=[],ge=[];function Pe(b){if(b.samples>0){if(he(b)===!1){let f=b.textures,U=b.width,z=b.height,X=i.COLOR_BUFFER_BIT,it=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(b),Z=f.length>1;if(Z)for(let rt=0;rt<f.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let K=b.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<f.length;rt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let Tt=n.get(f[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,U,z,0,0,U,z,X,i.NEAREST),c===!0&&(re.length=0,ge.length=0,re.push(i.COLOR_ATTACHMENT0+rt),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(re.push(it),ge.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let rt=0;rt<f.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let Tt=n.get(f[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&c){let f=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[f])}}}function oe(b){return Math.min(s.maxSamples,b.samples)}function he(b){let f=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function L(b){let f=a.render.frame;d.get(b)!==f&&(d.set(b,f),b.update())}function Me(b,f){let U=b.colorSpace,z=b.format,X=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==Vi&&U!==Sn&&(kt.getTransfer(U)===$t?(z!==Xe||X!==Ue)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",U)),f}function Kt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=G,this.setTexture2D=nt,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=tt,this.rebindTextures=qt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function au(i,t){function e(n,s=Sn){let r,a=kt.getTransfer(s);if(n===Ue)return i.UNSIGNED_BYTE;if(n===Er)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ar)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ha)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ua)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===la)return i.BYTE;if(n===ca)return i.SHORT;if(n===Ci)return i.UNSIGNED_SHORT;if(n===Tr)return i.INT;if(n===je)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===en)return i.HALF_FLOAT;if(n===da)return i.ALPHA;if(n===fa)return i.RGB;if(n===Xe)return i.RGBA;if(n===on)return i.DEPTH_COMPONENT;if(n===kn)return i.DEPTH_STENCIL;if(n===pa)return i.RED;if(n===wr)return i.RED_INTEGER;if(n===Gn)return i.RG;if(n===Cr)return i.RG_INTEGER;if(n===Rr)return i.RGBA_INTEGER;if(n===ls||n===cs||n===hs||n===us)if(a===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===us)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ir||n===Pr||n===Lr||n===Dr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ir)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nr||n===Ur||n===Fr||n===Or||n===Br||n===ds||n===zr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nr||n===Ur)return a===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Or)return r.COMPRESSED_R11_EAC;if(n===Br)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ds)return r.COMPRESSED_RG11_EAC;if(n===zr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vr||n===kr||n===Gr||n===Hr||n===Wr||n===Xr||n===qr||n===Yr||n===Zr||n===Jr||n===$r||n===Kr||n===Qr||n===jr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$r)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===t0||n===e0||n===n0)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===t0)return a===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===e0)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===n0)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===i0||n===s0||n===fs||n===r0)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===i0)return r.COMPRESSED_RED_RGTC1_EXT;if(n===s0)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===r0)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ou=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lu=`
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

}`,za=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new $i(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ve({vertexShader:ou,fragmentShader:lu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Va=class extends ln{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,p=null,h=null,g=null,v=null,M=typeof XRWebGLBinding<"u",m=new za,u={},A=e.getContextAttributes(),R=null,y=null,S=[],T=[],w=new Ht,x=null,E=null,P=new Ee;P.viewport=new ae;let N=new Ee;N.viewport=new ae;let B=[P,N],k=new vr,D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=S[Y];return j===void 0&&(j=new yi,S[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=S[Y];return j===void 0&&(j=new yi,S[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=S[Y];return j===void 0&&(j=new yi,S[Y]=j),j.getHandSpace()};function J(Y){let j=T.indexOf(Y.inputSource);if(j===-1)return;let vt=S[j];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,l||a),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",nt);for(let Y=0;Y<S.length;Y++){let j=T[Y];j!==null&&(T[Y]=null,S[Y].disconnect(j))}D=null,G=null,m.reset();for(let Y in u)delete u[Y];if(t.setRenderTarget(R),g=null,h=null,p=null,s=null,y=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),E!==null){let Y=E.camera;Y.fov=E.fov,Y.zoom=E.zoom,Y.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",q),s.addEventListener("inputsourceschange",nt),A.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Pt=null,_t=null;A.depth&&(_t=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=A.stencil?kn:on,Pt=A.stencil?Ri:je);let Ot={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(Ot),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Ne(h.textureWidth,h.textureHeight,{format:Xe,type:Ue,depthTexture:new Nn(h.textureWidth,h.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let vt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new Ne(g.framebufferWidth,g.framebufferHeight,{format:Xe,type:Ue,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Y){for(let j=0;j<Y.removed.length;j++){let vt=Y.removed[j],Pt=T.indexOf(vt);Pt>=0&&(T[Pt]=null,S[Pt].disconnect(vt))}for(let j=0;j<Y.added.length;j++){let vt=Y.added[j],Pt=T.indexOf(vt);if(Pt===-1){for(let Ot=0;Ot<S.length;Ot++)if(Ot>=T.length){T.push(vt),Pt=Ot;break}else if(T[Ot]===null){T[Ot]=vt,Pt=Ot;break}if(Pt===-1)break}let _t=S[Pt];_t&&_t.connect(vt)}}let W=new V,Q=new V;function tt(Y,j,vt){W.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(vt.matrixWorld);let Pt=W.distanceTo(Q),_t=j.projectionMatrix.elements,Ot=vt.projectionMatrix.elements,fe=_t[14]/(_t[10]-1),Bt=_t[14]/(_t[10]+1),qt=(_t[9]+1)/_t[5],te=(_t[9]-1)/_t[5],Vt=(_t[8]-1)/_t[0],re=(Ot[8]+1)/Ot[0],ge=fe*Vt,Pe=fe*re,oe=Pt/(-Vt+re),he=oe*-Vt;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(he),Y.translateZ(oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_t[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let L=fe+oe,Me=Bt+oe,Kt=ge-he,b=Pe+(Pt-he),f=qt*Bt/Me*L,U=te*Bt/Me*L;Y.projectionMatrix.makePerspective(Kt,b,f,U,L,Me),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function pt(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let j=Y.near,vt=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),k.near=N.near=P.near=j,k.far=N.far=P.far=vt,(D!==k.near||G!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,G=k.far),k.layers.mask=Y.layers.mask|6,P.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let Pt=Y.parent,_t=k.cameras;pt(k,Pt);for(let Ot=0;Ot<_t.length;Ot++)pt(_t[Ot],Pt);_t.length===2?tt(k,P,N):k.projectionMatrix.copy(P.projectionMatrix),E===null&&Y.isPerspectiveCamera&&(E={camera:Y,fov:Y.fov,zoom:Y.zoom}),mt(Y,k,Pt)};function mt(Y,j,vt){vt===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ks*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&g===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Y){return u[Y]};let Xt=null;function Dt(Y,j){if(d=j.getViewerPose(l||a),v=j,d!==null){let vt=d.views;g!==null&&(t.setRenderTargetFramebuffer(y,g.framebuffer),t.setRenderTarget(y));let Pt=!1;vt.length!==k.cameras.length&&(k.cameras.length=0,Pt=!0);for(let Bt=0;Bt<vt.length;Bt++){let qt=vt[Bt],te=null;if(g!==null)te=g.getViewport(qt);else{let re=p.getViewSubImage(h,qt);te=re.viewport,Bt===0&&(t.setRenderTargetTextures(y,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(y))}let Vt=B[Bt];Vt===void 0&&(Vt=new Ee,Vt.layers.enable(Bt),Vt.viewport=new ae,B[Bt]=Vt),Vt.matrix.fromArray(qt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(qt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(te.x,te.y,te.width,te.height),Bt===0&&(k.matrix.copy(Vt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Pt===!0&&k.cameras.push(Vt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();let Bt=p.getDepthInformation(vt[0]);Bt&&Bt.isValid&&Bt.texture&&m.init(Bt,s.renderState)}if(_t&&_t.includes("camera-access")&&M){t.state.unbindTexture(),p=n.getBinding();for(let Bt=0;Bt<vt.length;Bt++){let qt=vt[Bt].camera;if(qt){let te=u[qt];te||(te=new $i,u[qt]=te);let Vt=p.getCameraImage(qt);te.sourceTexture=Vt}}}}for(let vt=0;vt<S.length;vt++){let Pt=T[vt],_t=S[vt];Pt!==null&&_t!==void 0&&_t.update(Pt,j,l||a)}Xt&&Xt(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),v=null}let Yt=new R1;Yt.setAnimationLoop(Dt),this.setAnimationLoop=function(Y){Xt=Y},this.dispose=function(){}}},cu=new le,U1=new It;U1.set(-1,0,0,0,1,0,0,0,1);function hu(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,_a(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,A,R,y){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(m,u):u.isMeshLambertMaterial?(r(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(m,u),p(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(m,u),h(m,u),u.isMeshPhysicalMaterial&&g(m,u,y)):u.isMeshMatcapMaterial?(r(m,u),v(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),M(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,A,R):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ie&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ie&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let A=t.get(u),R=A.envMap,y=A.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(cu.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(U1),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,A,R){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*A,m.scale.value=R*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,A){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ie&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.retroreflectivity>0&&(m.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function M(m,u){let A=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function uu(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){let T=S.program;n.uniformBlockBinding(y,T)}function l(y,S){let T=s[y.id];T===void 0&&(m(y),T=d(y),s[y.id]=T,y.addEventListener("dispose",A));let w=S.program;n.updateUBOMapping(y,w);let x=t.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function d(y){let S=p();y.__bindingPointIndex=S;let T=i.createBuffer(),w=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function p(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let S=s[y.id],T=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,E=T.length;x<E;x++){let P=T[x];if(Array.isArray(P))for(let N=0,B=P.length;N<B;N++)g(P[N],x,N,w);else g(P,x,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,S,T,w){if(M(y,S,T,w)===!0){let x=y.__offset,E=y.value;if(Array.isArray(E)){let P=0;for(let N=0;N<E.length;N++){let B=E[N],k=u(B);v(B,y.__data,P),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function v(y,S,T){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,T)}function M(y,S,T,w){let x=y.value,E=S+"_"+T;if(w[E]===void 0)return typeof x=="number"||typeof x=="boolean"?w[E]=x:ArrayBuffer.isView(x)?w[E]=x.slice():w[E]=x.clone(),!0;{let P=w[E];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return w[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(y){let S=y.uniforms,T=0,w=16;for(let E=0,P=S.length;E<P;E++){let N=Array.isArray(S[E])?S[E]:[S[E]];for(let B=0,k=N.length;B<k;B++){let D=N[B],G=Array.isArray(D.value)?D.value:[D.value];for(let J=0,q=G.length;J<q;J++){let nt=G[J],W=u(nt),Q=T%w,tt=Q%W.boundary,pt=Q+tt;T+=tt,pt!==0&&w-pt<W.storage&&(T+=w-pt),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=W.storage}}}let x=T%w;return x>0&&(T+=w-x),y.__size=T,y.__cache={},this}function u(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",y),S}function A(y){let S=y.target;S.removeEventListener("dispose",A);let T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function R(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:R}}var du=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),dn=null;function fu(){return dn===null&&(dn=new nr(du,16,16,Gn,en),dn.name="DFG_LUT",dn.minFilter=ye,dn.magFilter=ye,dn.wrapS=an,dn.wrapT=an,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}var f0=class{constructor(t={}){let{canvas:e=t1(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:g=Ue}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let M=g,m=new Set([Rr,Cr,wr]),u=new Set([Ue,je,Ci,Ri,Er,Ar]),A=new Uint32Array(4),R=new Int32Array(4),y=new V,S=null,T=null,w=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qe,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,B=null,k=null,D=null,G=null;this._outputColorSpace=Be;let J=0,q=0,nt=null,W=-1,Q=null,tt=new ae,pt=new ae,mt=null,Xt=new Ut(0),Dt=0,Yt=e.width,Y=e.height,j=1,vt=null,Pt=null,_t=new ae(0,0,Yt,Y),Ot=new ae(0,0,Yt,Y),fe=!1,Bt=new Si,qt=!1,te=!1,Vt=new le,re=new V,ge=new ae,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function he(){return nt===null?j:1}let L=n;function Me(_,C){return e.getContext(_,C)}let Kt,b,f,U,z,X,it,st,Z,K,rt,Tt,ct,at,Et,wt,Lt,I,ot,$,lt,ft,et;try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ee,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",qe,!1),L===null){let C="webgl2";if(L=Me(C,_),L===null)throw Me(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(_){throw e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",qe,!1),Rt("WebGLRenderer: "+_.message),_}function At(){Kt=new yc(L),Kt.init(),lt=new au(L,Kt),b=new hc(L,Kt,t,lt),f=new su(L,Kt),b.reversedDepthBuffer&&h&&f.buffers.depth.setReversed(!0),k=L.createFramebuffer(),D=L.createFramebuffer(),G=L.createFramebuffer(),U=new bc(L),z=new Wh,X=new ru(L,Kt,f,z,b,lt,U),it=new vc(P),st=new E2(L),ft=new lc(L,st),Z=new Mc(L,st,U,ft),K=new Ec(L,Z,st,ft,U),I=new Tc(L,b,X),Et=new uc(z),rt=new Hh(P,it,Kt,b,ft,Et),Tt=new hu(P,z),ct=new qh,at=new Qh(Kt),Lt=new oc(P,it,f,K,v,c),wt=new iu(P,K,b),et=new uu(L,U,b,f),ot=new cc(L,Kt,U),$=new Sc(L,Kt,U),U.programs=rt.programs,P.capabilities=b,P.extensions=Kt,P.properties=z,P.renderLists=ct,P.shadowMap=wt,P.state=f,P.info=U}M!==Ue&&(E=new wc(M,e.width,e.height,o,s,r));let St=new Va(P,L);this.xr=St,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let _=Kt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Kt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(_){_!==void 0&&(j=_,this.setSize(Yt,Y,!1))},this.getSize=function(_){return _.set(Yt,Y)},this.setSize=function(_,C,H=!0){if(St.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=_,Y=C,e.width=Math.floor(_*j),e.height=Math.floor(C*j),H===!0&&(e.style.width=_+"px",e.style.height=C+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,_,C)},this.getDrawingBufferSize=function(_){return _.set(Yt*j,Y*j).floor()},this.setDrawingBufferSize=function(_,C,H){Yt=_,Y=C,j=H,e.width=Math.floor(_*H),e.height=Math.floor(C*H),this.setViewport(0,0,_,C)},this.setEffects=function(_){if(M===Ue){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let C=0;C<_.length;C++)if(_[C].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(tt)},this.getViewport=function(_){return _.copy(_t)},this.setViewport=function(_,C,H,F){_.isVector4?_t.set(_.x,_.y,_.z,_.w):_t.set(_,C,H,F),f.viewport(tt.copy(_t).multiplyScalar(j).round())},this.getScissor=function(_){return _.copy(Ot)},this.setScissor=function(_,C,H,F){_.isVector4?Ot.set(_.x,_.y,_.z,_.w):Ot.set(_,C,H,F),f.scissor(pt.copy(Ot).multiplyScalar(j).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(_){f.setScissorTest(fe=_)},this.setOpaqueSort=function(_){vt=_},this.setTransparentSort=function(_){Pt=_},this.getClearColor=function(_){return _.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(_=!0,C=!0,H=!0){let F=0;if(_){let O=!1;if(nt!==null){let dt=nt.texture.format;O=m.has(dt)}if(O){let dt=nt.texture.type,xt=u.has(dt),ut=Lt.getClearColor(),yt=Lt.getClearAlpha(),bt=ut.r,Nt=ut.g,zt=ut.b;xt?(A[0]=bt,A[1]=Nt,A[2]=zt,A[3]=yt,L.clearBufferuiv(L.COLOR,0,A)):(R[0]=bt,R[1]=Nt,R[2]=zt,R[3]=yt,L.clearBufferiv(L.COLOR,0,R))}else F|=L.COLOR_BUFFER_BIT}C&&(F|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),B=_},this.dispose=function(){e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",qe,!1),Lt.dispose(),ct.dispose(),at.dispose(),z.dispose(),it.dispose(),K.dispose(),ft.dispose(),et.dispose(),rt.dispose(),St.dispose(),St.removeEventListener("sessionstart",Ha),St.removeEventListener("sessionend",Wa),Hn.stop()};function ee(_){_.preventDefault(),ga("WebGLRenderer: Context Lost."),N=!0}function Zt(){ga("WebGLRenderer: Context Restored."),N=!1;let _=U.autoReset,C=wt.enabled,H=wt.autoUpdate,F=wt.needsUpdate,O=wt.type;At(),U.autoReset=_,wt.enabled=C,wt.autoUpdate=H,wt.needsUpdate=F,wt.type=O}function qe(_){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function nn(_){let C=_.target;C.removeEventListener("dispose",nn),F1(C)}function F1(_){O1(_),z.remove(_)}function O1(_){let C=z.get(_).programs;C!==void 0&&(C.forEach(function(H){rt.releaseProgram(H)}),_.isShaderMaterial&&rt.releaseShaderCache(_))}this.renderBufferDirect=function(_,C,H,F,O,dt){C===null&&(C=Pe);let xt=O.isMesh&&O.matrixWorld.determinantAffine()<0,ut=V1(_,C,H,F,O);f.setMaterial(F,xt);let yt=H.index,bt=1;if(F.wireframe===!0){if(yt=Z.getWireframeAttribute(H),yt===void 0)return;bt=2}let Nt=H.drawRange,zt=H.attributes.position,Mt=Nt.start*bt,Jt=(Nt.start+Nt.count)*bt;dt!==null&&(Mt=Math.max(Mt,dt.start*bt),Jt=Math.min(Jt,(dt.start+dt.count)*bt)),yt!==null?(Mt=Math.max(Mt,0),Jt=Math.min(Jt,yt.count)):zt!=null&&(Mt=Math.max(Mt,0),Jt=Math.min(Jt,zt.count));let ue=Jt-Mt;if(ue<0||ue===1/0)return;ft.setup(O,F,ut,H,yt);let ie,jt=ot;if(yt!==null&&(ie=st.get(yt),jt=$,jt.setIndex(ie)),O.isMesh)F.wireframe===!0?(f.setLineWidth(F.wireframeLinewidth*he()),jt.setMode(L.LINES)):jt.setMode(L.TRIANGLES);else if(O.isLine){let Se=F.linewidth;Se===void 0&&(Se=1),f.setLineWidth(Se*he()),O.isLineSegments?jt.setMode(L.LINES):O.isLineLoop?jt.setMode(L.LINE_LOOP):jt.setMode(L.LINE_STRIP)}else O.isPoints?jt.setMode(L.POINTS):O.isSprite&&jt.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))jt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Se=O._multiDrawStarts,gt=O._multiDrawCounts,Ce=O._multiDrawCount,Wt=yt?st.get(yt).bytesPerElement:1,Ge=z.get(F).currentProgram.getUniforms();for(let sn=0;sn<Ce;sn++)Ge.setValue(L,"_gl_DrawID",sn),jt.render(Se[sn]/Wt,gt[sn])}else if(O.isInstancedMesh)jt.renderInstances(Mt,ue,O.count);else if(H.isInstancedBufferGeometry){let Se=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,gt=Math.min(H.instanceCount,Se);jt.renderInstances(Mt,ue,gt)}else jt.render(Mt,ue)};function Ga(_,C,H,F){B!==null&&_.isNodeMaterial&&B.setObject(F,_),qt===!0&&Et.setState(_,H,!1),_.transparent===!0&&_.side===hn&&_.forceSinglePass===!1?(_.side=Ie,_.needsUpdate=!0,vs(_,C,F),_.side=Bn,_.needsUpdate=!0,vs(_,C,F),_.side=hn):vs(_,C,F)}this.compile=function(_,C,H=null){H===null&&(H=_),B!==null&&B.renderStart(_,C,H),T=at.get(H),T.init(C),x.push(T),H.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(T.pushLight(O),O.castShadow&&T.pushShadow(O))}),_!==H&&_.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(T.pushLight(O),O.castShadow&&T.pushShadow(O))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),te=this.localClippingEnabled,qt=Et.init(this.clippingPlanes,te),qt===!0&&Et.setGlobalState(this.clippingPlanes,C),B!==null&&wt.render(T.state.shadowsArray,H,C);let F=new Set;return _.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let dt=O.material;if(dt)if(Array.isArray(dt))for(let xt=0;xt<dt.length;xt++){let ut=dt[xt];Ga(ut,H,C,O),F.add(ut)}else Ga(dt,H,C,O),F.add(dt)}),T=x.pop(),B!==null&&B.renderEnd(),F},this.compileAsync=function(_,C,H=null){let F=this.compile(_,C,H);return new Promise(O=>{function dt(){if(F.forEach(function(xt){let yt=z.get(xt).currentProgram;(yt===void 0||yt.isReady())&&F.delete(xt)}),F.size===0){O(_);return}setTimeout(dt,10)}Kt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let g0=null;function B1(_){g0&&g0(_)}function Ha(){Hn.stop()}function Wa(){Hn.start()}let Hn=new R1;Hn.setAnimationLoop(B1),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(_){g0=_,St.setAnimationLoop(_),_===null?Hn.stop():Hn.start()},St.addEventListener("sessionstart",Ha),St.addEventListener("sessionend",Wa),this.render=function(_,C){if(C!==void 0&&C.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(_,C);let H=St.enabled===!0&&St.isPresenting===!0,F=E!==null&&(nt===null||H)&&E.begin(P,nt);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(C),C=St.getCamera()),_.isScene===!0&&_.onBeforeRender(P,_,C,nt),T=at.get(_,x.length),T.init(C),T.state.textureUnits=X.getTextureUnits(),x.push(T),Vt.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),Bt.setFromProjectionMatrix(Vt,Ke,C.reversedDepth),te=this.localClippingEnabled,qt=Et.init(this.clippingPlanes,te),S=ct.get(_,w.length),S.init(),w.push(S),St.enabled===!0&&St.isPresenting===!0){let xt=P.xr.getDepthSensingMesh();xt!==null&&_0(xt,C,-1/0,P.sortObjects)}_0(_,C,0,P.sortObjects),S.finish(),B!==null&&B.updateLights(T.state.lightsArray),P.sortObjects===!0&&S.sort(vt,Pt),oe=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,oe&&Lt.addToRenderList(S,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qt===!0&&Et.beginShadows();let O=T.state.shadowsArray;if(wt.render(O,_,C),qt===!0&&Et.endShadows(),(F&&E.hasRenderPass())===!1){let xt=S.opaque,ut=S.transmissive;if(T.setupLights(),C.isArrayCamera){let yt=C.cameras;if(ut.length>0)for(let bt=0,Nt=yt.length;bt<Nt;bt++){let zt=yt[bt];qa(xt,ut,_,zt)}oe&&Lt.render(_);for(let bt=0,Nt=yt.length;bt<Nt;bt++){let zt=yt[bt];Xa(S,_,zt,zt.viewport)}}else ut.length>0&&qa(xt,ut,_,C),oe&&Lt.render(_),Xa(S,_,C)}nt!==null&&q===0&&(X.updateMultisampleRenderTarget(nt),X.updateRenderTargetMipmap(nt)),F&&E.end(P),_.isScene===!0&&_.onAfterRender(P,_,C),ft.resetDefaultState(),W=-1,Q=null,x.pop(),x.length>0?(T=x[x.length-1],X.setTextureUnits(T.state.textureUnits),qt===!0&&Et.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,B!==null&&B.renderEnd()};function _0(_,C,H,F){if(_.visible===!1)return;if(_.layers.test(C.layers)){if(_.isGroup)H=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(C);else if(_.isLightProbeGrid)T.pushLightProbeGrid(_);else if(_.isLight)T.pushLight(_),_.castShadow&&T.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(Bt)){F&&ge.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Vt);let xt=K.update(_),ut=_.material;ut.visible&&S.push(_,xt,ut,H,ge.z,null,C)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(Bt))){let xt=K.update(_),ut=_.material;if(F&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ge.copy(_.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),ge.copy(xt.boundingSphere.center)),ge.applyMatrix4(_.matrixWorld).applyMatrix4(Vt)),Array.isArray(ut)){let yt=xt.groups;for(let bt=0,Nt=yt.length;bt<Nt;bt++){let zt=yt[bt],Mt=ut[zt.materialIndex];Mt&&Mt.visible&&S.push(_,xt,Mt,H,ge.z,zt,C)}}else ut.visible&&S.push(_,xt,ut,H,ge.z,null,C)}}let dt=_.children;for(let xt=0,ut=dt.length;xt<ut;xt++)_0(dt[xt],C,H,F)}function Xa(_,C,H,F){let{opaque:O,transmissive:dt,transparent:xt}=_;T.setupLightsView(H),qt===!0&&Et.setGlobalState(P.clippingPlanes,H),F&&f.viewport(tt.copy(F)),O.length>0&&xs(O,C,H),dt.length>0&&xs(dt,C,H),xt.length>0&&xs(xt,C,H),f.buffers.depth.setTest(!0),f.buffers.depth.setMask(!0),f.buffers.color.setMask(!0),f.setPolygonOffset(!1)}function qa(_,C,H,F){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[F.id]===void 0){let Mt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[F.id]=new Ne(1,1,{generateMipmaps:!0,type:Mt?en:Ue,minFilter:Vn,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}let dt=T.state.transmissionRenderTarget[F.id],xt=F.viewport||tt;dt.setSize(xt.z*P.transmissionResolutionScale,xt.w*P.transmissionResolutionScale);let ut=P.getRenderTarget(),yt=P.getActiveCubeFace(),bt=P.getActiveMipmapLevel();P.setRenderTarget(dt),P.getClearColor(Xt),Dt=P.getClearAlpha(),Dt<1&&P.setClearColor(16777215,.5),P.clear(),oe&&Lt.render(H);let Nt=P.toneMapping;P.toneMapping=Qe;let zt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),T.setupLightsView(F),qt===!0&&Et.setGlobalState(P.clippingPlanes,F),xs(_,H,F),X.updateMultisampleRenderTarget(dt),X.updateRenderTargetMipmap(dt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let Jt=0,ue=C.length;Jt<ue;Jt++){let ie=C[Jt],{object:jt,geometry:Se,material:gt,group:Ce}=ie;if(gt.side===hn&&jt.layers.test(F.layers)){let Wt=gt.side;gt.side=Ie,gt.needsUpdate=!0,Ya(jt,H,F,Se,gt,Ce),gt.side=Wt,gt.needsUpdate=!0,Mt=!0}}Mt===!0&&(X.updateMultisampleRenderTarget(dt),X.updateRenderTargetMipmap(dt))}P.setRenderTarget(ut,yt,bt),P.setClearColor(Xt,Dt),zt!==void 0&&(F.viewport=zt),P.toneMapping=Nt}function xs(_,C,H){let F=C.isScene===!0?C.overrideMaterial:null;for(let O=0,dt=_.length;O<dt;O++){let xt=_[O],{object:ut,geometry:yt,group:bt}=xt,Nt=xt.material;Nt.allowOverride===!0&&F!==null&&(Nt=F),ut.layers.test(H.layers)&&Ya(ut,C,H,yt,Nt,bt)}}function Ya(_,C,H,F,O,dt){B!==null&&O.isNodeMaterial&&B.setObject(_,O),_.onBeforeRender(P,C,H,F,O,dt),_.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),O.onBeforeRender(P,C,H,F,_,dt),O.transparent===!0&&O.side===hn&&O.forceSinglePass===!1?(O.side=Ie,O.needsUpdate=!0,P.renderBufferDirect(H,C,F,O,_,dt),O.side=Bn,O.needsUpdate=!0,P.renderBufferDirect(H,C,F,O,_,dt),O.side=hn):P.renderBufferDirect(H,C,F,O,_,dt),_.onAfterRender(P,C,H,F,O,dt)}function vs(_,C,H){C.isScene!==!0&&(C=Pe);let F=z.get(_),O=T.state.lights,dt=T.state.shadowsArray,xt=O.state.version,ut=rt.getParameters(_,O.state,dt,C,H,T.state.lightProbeGridArray),yt=rt.getProgramCacheKey(ut),bt=F.programs;F.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,F.fog=C.fog;let Nt=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;F.envMap=it.get(_.envMap||F.environment,Nt),F.envMapRotation=F.environment!==null&&_.envMap===null?C.environmentRotation:_.envMapRotation,bt===void 0&&(_.addEventListener("dispose",nn),bt=new Map,F.programs=bt);let zt=bt.get(yt);if(zt!==void 0){if(F.currentProgram===zt&&F.lightsStateVersion===xt)return Ja(_,ut),zt}else ut.uniforms=rt.getUniforms(_),B!==null&&_.isNodeMaterial&&B.build(_,H,ut),_.onBeforeCompile(ut,P),zt=rt.acquireProgram(ut,yt),bt.set(yt,zt),F.uniforms=ut.uniforms;let Mt=F.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Mt.clippingPlanes=Et.uniform),Ja(_,ut),F.needsLights=G1(_),F.lightsStateVersion=xt,F.needsLights&&(Mt.ambientLightColor.value=O.state.ambient,Mt.lightProbe.value=O.state.probe,Mt.sunLights.value=O.state.sun,Mt.sunLightShadows.value=O.state.sunShadow,Mt.directionalLights.value=O.state.directional,Mt.directionalLightShadows.value=O.state.directionalShadow,Mt.spotLights.value=O.state.spot,Mt.spotLightShadows.value=O.state.spotShadow,Mt.rectAreaLights.value=O.state.rectArea,Mt.ltc_1.value=O.state.rectAreaLTC1,Mt.ltc_2.value=O.state.rectAreaLTC2,Mt.pointLights.value=O.state.point,Mt.pointLightShadows.value=O.state.pointShadow,Mt.hemisphereLights.value=O.state.hemi,Mt.sunShadowMatrix.value=O.state.sunShadowMatrix,Mt.sunShadowCascade.value=O.state.sunShadowCascade,Mt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Mt.spotLightMatrix.value=O.state.spotLightMatrix,Mt.spotLightMap.value=O.state.spotLightMap,Mt.pointShadowMatrix.value=O.state.pointShadowMatrix),F.lightProbeGrid=T.state.lightProbeGridArray.length>0,F.currentProgram=zt,F.uniformsList=null,zt}function Za(_){if(_.uniformsList===null){let C=_.currentProgram.getUniforms();_.uniformsList=Li.seqWithValue(C.seq,_.uniforms)}return _.uniformsList}function Ja(_,C){let H=z.get(_);H.outputColorSpace=C.outputColorSpace,H.batching=C.batching,H.batchingColor=C.batchingColor,H.instancing=C.instancing,H.instancingColor=C.instancingColor,H.instancingMorph=C.instancingMorph,H.skinning=C.skinning,H.morphTargets=C.morphTargets,H.morphNormals=C.morphNormals,H.morphColors=C.morphColors,H.morphTargetsCount=C.morphTargetsCount,H.numClippingPlanes=C.numClippingPlanes,H.numIntersection=C.numClipIntersection,H.vertexAlphas=C.vertexAlphas,H.vertexTangents=C.vertexTangents,H.toneMapping=C.toneMapping}function z1(_,C){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;y.setFromMatrixPosition(C.matrixWorld);for(let H=0,F=_.length;H<F;H++){let O=_[H];if(O.texture!==null&&O.boundingBox.containsPoint(y))return O}return null}function V1(_,C,H,F,O){C.isScene!==!0&&(C=Pe),X.resetTextureUnits();let dt=C.fog,xt=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?C.environment:null,ut=nt===null?P.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:kt.workingColorSpace,yt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,bt=it.get(F.envMap||xt,yt),Nt=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,zt=!!H.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Mt=!!H.morphAttributes.position,Jt=!!H.morphAttributes.normal,ue=!!H.morphAttributes.color,ie=Qe;F.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ie=P.toneMapping);let jt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Se=jt!==void 0?jt.length:0,gt=z.get(F),Ce=T.state.lights;if(qt===!0&&(te===!0||_!==Q)){let ne=_===Q&&F.id===W;Et.setState(F,_,ne)}let Wt=!1;F.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Ce.state.version||gt.outputColorSpace!==ut||O.isBatchedMesh&&gt.batching===!1||!O.isBatchedMesh&&gt.batching===!0||O.isBatchedMesh&&gt.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&gt.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&gt.instancing===!1||!O.isInstancedMesh&&gt.instancing===!0||O.isSkinnedMesh&&gt.skinning===!1||!O.isSkinnedMesh&&gt.skinning===!0||O.isInstancedMesh&&gt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&gt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&gt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&gt.instancingMorph===!1&&O.morphTexture!==null||gt.envMap!==bt||F.fog===!0&&gt.fog!==dt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Et.numPlanes||gt.numIntersection!==Et.numIntersection)||gt.vertexAlphas!==Nt||gt.vertexTangents!==zt||gt.morphTargets!==Mt||gt.morphNormals!==Jt||gt.morphColors!==ue||gt.toneMapping!==ie||gt.morphTargetsCount!==Se||!!gt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Wt=!0):(Wt=!0,gt.__version=F.version);let Ge=gt.currentProgram;Wt===!0&&(Ge=vs(F,C,O),B&&F.isNodeMaterial&&B.onUpdateProgram(F,Ge,gt));let sn=!1,bn=!1,ti=!1,Qt=Ge.getUniforms(),ce=gt.uniforms;if(f.useProgram(Ge.program)&&(sn=!0,bn=!0,ti=!0),F.id!==W&&(W=F.id,bn=!0),gt.needsLights){let ne=z1(T.state.lightProbeGridArray,O);gt.lightProbeGrid!==ne&&(gt.lightProbeGrid=ne,bn=!0)}if(sn||Q!==_){f.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Qt.setValue(L,"projectionMatrix",_.projectionMatrix),Qt.setValue(L,"viewMatrix",_.matrixWorldInverse);let En=Qt.map.cameraPosition;En!==void 0&&En.setValue(L,re.setFromMatrixPosition(_.matrixWorld)),b.logarithmicDepthBuffer&&Qt.setValue(L,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Qt.setValue(L,"isOrthographic",_.isOrthographicCamera===!0),Q!==_&&(Q=_,bn=!0,ti=!0)}if(gt.needsLights&&(Ce.state.sunShadowMap.length>0&&Qt.setValue(L,"sunShadowMap",Ce.state.sunShadowMap,X),Ce.state.directionalShadowMap.length>0&&Qt.setValue(L,"directionalShadowMap",Ce.state.directionalShadowMap,X),Ce.state.spotShadowMap.length>0&&Qt.setValue(L,"spotShadowMap",Ce.state.spotShadowMap,X),Ce.state.pointShadowMap.length>0&&Qt.setValue(L,"pointShadowMap",Ce.state.pointShadowMap,X)),O.isSkinnedMesh){Qt.setOptional(L,O,"bindMatrix"),Qt.setOptional(L,O,"bindMatrixInverse");let ne=O.skeleton;ne&&(ne.boneTexture===null&&ne.computeBoneTexture(),Qt.setValue(L,"boneTexture",ne.boneTexture,X))}O.isBatchedMesh&&(Qt.setOptional(L,O,"batchingTexture"),Qt.setValue(L,"batchingTexture",O._matricesTexture,X),Qt.setOptional(L,O,"batchingIdTexture"),Qt.setValue(L,"batchingIdTexture",O._indirectTexture,X),Qt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Qt.setValue(L,"batchingColorTexture",O._colorsTexture,X));let Tn=H.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&I.update(O,H,Ge),(bn||gt.receiveShadow!==O.receiveShadow)&&(gt.receiveShadow=O.receiveShadow,Qt.setValue(L,"receiveShadow",O.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&C.environment!==null&&(ce.envMapIntensity.value=C.environmentIntensity),ce.dfgLUT!==void 0&&(ce.dfgLUT.value=fu()),bn){if(Qt.setValue(L,"toneMappingExposure",P.toneMappingExposure),gt.needsLights&&k1(ce,ti),dt&&F.fog===!0&&Tt.refreshFogUniforms(ce,dt),Tt.refreshMaterialUniforms(ce,F,j,Y,T.state.transmissionRenderTarget[_.id]),gt.needsLights&&gt.lightProbeGrid){let ne=gt.lightProbeGrid;ce.probesSH.value=ne.texture,ce.probesMin.value.copy(ne.boundingBox.min),ce.probesMax.value.copy(ne.boundingBox.max),ce.probesResolution.value.copy(ne.resolution)}Li.upload(L,Za(gt),ce,X)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Li.upload(L,Za(gt),ce,X),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Qt.setValue(L,"center",O.center),Qt.setValue(L,"modelViewMatrix",O.modelViewMatrix),Qt.setValue(L,"normalMatrix",O.normalMatrix),Qt.setValue(L,"modelMatrix",O.matrixWorld),F.uniformsGroups!==void 0){let ne=F.uniformsGroups;for(let En=0,ei=ne.length;En<ei;En++){let Ka=ne[En];et.update(Ka,Ge),et.bind(Ka,Ge)}}return Ge}function k1(_,C){_.ambientLightColor.needsUpdate=C,_.lightProbe.needsUpdate=C,_.sunLights.needsUpdate=C,_.sunLightShadows.needsUpdate=C,_.directionalLights.needsUpdate=C,_.directionalLightShadows.needsUpdate=C,_.pointLights.needsUpdate=C,_.pointLightShadows.needsUpdate=C,_.spotLights.needsUpdate=C,_.spotLightShadows.needsUpdate=C,_.rectAreaLights.needsUpdate=C,_.hemisphereLights.needsUpdate=C}function G1(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(_,C,H){let F=z.get(_);F.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),z.get(_.texture).__webglTexture=C,z.get(_.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:H,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,C){let H=z.get(_);H.__webglFramebuffer=C,H.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(_,C=0,H=0){nt=_,J=C,q=H;let F=null,O=!1,dt=!1;if(_){let ut=z.get(_);if(ut.__useDefaultFramebuffer!==void 0){f.bindFramebuffer(L.FRAMEBUFFER,ut.__webglFramebuffer),tt.copy(_.viewport),pt.copy(_.scissor),mt=_.scissorTest,f.viewport(tt),f.scissor(pt),f.setScissorTest(mt),W=-1;return}else if(ut.__webglFramebuffer===void 0)X.setupRenderTarget(_);else if(ut.__hasExternalTextures)X.rebindTextures(_,z.get(_.texture).__webglTexture,z.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Nt=_.depthTexture;if(ut.__boundDepthTexture!==Nt){if(Nt!==null&&z.has(Nt)&&(_.width!==Nt.image.width||_.height!==Nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(_)}}let yt=_.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(dt=!0);let bt=z.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(bt[C])?F=bt[C][H]:F=bt[C],O=!0):_.samples>0&&X.useMultisampledRTT(_)===!1?F=z.get(_).__webglMultisampledFramebuffer:Array.isArray(bt)?F=bt[H]:F=bt,tt.copy(_.viewport),pt.copy(_.scissor),mt=_.scissorTest}else tt.copy(_t).multiplyScalar(j).floor(),pt.copy(Ot).multiplyScalar(j).floor(),mt=fe;if(H!==0&&(F=k),f.bindFramebuffer(L.FRAMEBUFFER,F)&&f.drawBuffers(_,F),f.viewport(tt),f.scissor(pt),f.setScissorTest(mt),O){let ut=z.get(_.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+C,ut.__webglTexture,H)}else if(dt){let ut=C;for(let yt=0;yt<_.textures.length;yt++){let bt=z.get(_.textures[yt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+yt,bt.__webglTexture,H,ut)}}else if(_!==null&&H!==0){let ut=z.get(_.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ut.__webglTexture,H)}W=-1};function $a(_){let C=z.get(_);return(C.__readFormat!==_.format||C.__readType!==_.type)&&(C.__readFormat=_.format,C.__readType=_.type,C.__formatReadable=b.textureFormatReadable(_.format),C.__typeReadable=b.textureTypeReadable(_.type)),C}this.readRenderTargetPixels=function(_,C,H,F,O,dt,xt,ut=0){if(!(_&&_.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=z.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt){f.bindFramebuffer(L.FRAMEBUFFER,yt);try{let bt=_.textures[ut],Nt=bt.format,zt=bt.type;_.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ut);let Mt=$a(bt);if(Mt.__formatReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=_.width-F&&H>=0&&H<=_.height-O&&L.readPixels(C,H,F,O,lt.convert(Nt),lt.convert(zt),dt)}finally{let bt=nt!==null?z.get(nt).__webglFramebuffer:null;f.bindFramebuffer(L.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(_,C,H,F,O,dt,xt,ut=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=z.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt)if(C>=0&&C<=_.width-F&&H>=0&&H<=_.height-O){f.bindFramebuffer(L.FRAMEBUFFER,yt);let bt=_.textures[ut],Nt=bt.format,zt=bt.type;_.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ut);let Mt=$a(bt);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.bufferData(L.PIXEL_PACK_BUFFER,dt.byteLength,L.STREAM_READ),L.readPixels(C,H,F,O,lt.convert(Nt),lt.convert(zt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let ue=nt!==null?z.get(nt).__webglFramebuffer:null;f.bindFramebuffer(L.FRAMEBUFFER,ue);let ie=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await n1(L,ie,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,dt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Jt),L.deleteSync(ie),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,C=null,H=0){let F=Math.pow(2,-H),O=Math.floor(_.image.width*F),dt=Math.floor(_.image.height*F),xt=C!==null?C.x:0,ut=C!==null?C.y:0;X.setTexture2D(_,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,xt,ut,O,dt),f.unbindTexture()},this.copyTextureToTexture=function(_,C,H=null,F=null,O=0,dt=0){let xt,ut,yt,bt,Nt,zt,Mt,Jt,ue,ie=_.isCompressedTexture?_.mipmaps[dt]:_.image;if(H!==null)xt=H.max.x-H.min.x,ut=H.max.y-H.min.y,yt=H.isBox3?H.max.z-H.min.z:1,bt=H.min.x,Nt=H.min.y,zt=H.isBox3?H.min.z:0;else{let ce=Math.pow(2,-O);xt=Math.floor(ie.width*ce),ut=Math.floor(ie.height*ce),_.isDataArrayTexture?yt=ie.depth:_.isData3DTexture?yt=Math.floor(ie.depth*ce):yt=1,bt=0,Nt=0,zt=0}F!==null?(Mt=F.x,Jt=F.y,ue=F.z):(Mt=0,Jt=0,ue=0);let jt=lt.convert(C.format),Se=lt.convert(C.type),gt;C.isData3DTexture?(X.setTexture3D(C,0),gt=L.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(X.setTexture2DArray(C,0),gt=L.TEXTURE_2D_ARRAY):(X.setTexture2D(C,0),gt=L.TEXTURE_2D),f.activeTexture(L.TEXTURE0),f.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,C.flipY),f.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),f.pixelStorei(L.UNPACK_ALIGNMENT,C.unpackAlignment);let Ce=f.getParameter(L.UNPACK_ROW_LENGTH),Wt=f.getParameter(L.UNPACK_IMAGE_HEIGHT),Ge=f.getParameter(L.UNPACK_SKIP_PIXELS),sn=f.getParameter(L.UNPACK_SKIP_ROWS),bn=f.getParameter(L.UNPACK_SKIP_IMAGES);f.pixelStorei(L.UNPACK_ROW_LENGTH,ie.width),f.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ie.height),f.pixelStorei(L.UNPACK_SKIP_PIXELS,bt),f.pixelStorei(L.UNPACK_SKIP_ROWS,Nt),f.pixelStorei(L.UNPACK_SKIP_IMAGES,zt);let ti=_.isDataArrayTexture||_.isData3DTexture,Qt=C.isDataArrayTexture||C.isData3DTexture;if(_.isDepthTexture){let ce=z.get(_),Tn=z.get(C),ne=z.get(ce.__renderTarget),En=z.get(Tn.__renderTarget);f.bindFramebuffer(L.READ_FRAMEBUFFER,ne.__webglFramebuffer),f.bindFramebuffer(L.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let ei=0;ei<yt;ei++)ti&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(_).__webglTexture,O,zt+ei),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(C).__webglTexture,dt,ue+ei)),L.blitFramebuffer(bt,Nt,xt,ut,Mt,Jt,xt,ut,L.DEPTH_BUFFER_BIT,L.NEAREST);f.bindFramebuffer(L.READ_FRAMEBUFFER,null),f.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||_.isRenderTargetTexture||z.has(_)){let ce=z.get(_),Tn=z.get(C);f.bindFramebuffer(L.READ_FRAMEBUFFER,D),f.bindFramebuffer(L.DRAW_FRAMEBUFFER,G);for(let ne=0;ne<yt;ne++)ti?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ce.__webglTexture,O,zt+ne):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ce.__webglTexture,O),Qt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tn.__webglTexture,dt,ue+ne):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tn.__webglTexture,dt),O!==0?L.blitFramebuffer(bt,Nt,xt,ut,Mt,Jt,xt,ut,L.COLOR_BUFFER_BIT,L.NEAREST):Qt?L.copyTexSubImage3D(gt,dt,Mt,Jt,ue+ne,bt,Nt,xt,ut):L.copyTexSubImage2D(gt,dt,Mt,Jt,bt,Nt,xt,ut);f.bindFramebuffer(L.READ_FRAMEBUFFER,null),f.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Qt?_.isDataTexture||_.isData3DTexture?L.texSubImage3D(gt,dt,Mt,Jt,ue,xt,ut,yt,jt,Se,ie.data):C.isCompressedArrayTexture?L.compressedTexSubImage3D(gt,dt,Mt,Jt,ue,xt,ut,yt,jt,ie.data):L.texSubImage3D(gt,dt,Mt,Jt,ue,xt,ut,yt,jt,Se,ie):_.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,dt,Mt,Jt,xt,ut,jt,Se,ie.data):_.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,dt,Mt,Jt,ie.width,ie.height,jt,ie.data):L.texSubImage2D(L.TEXTURE_2D,dt,Mt,Jt,xt,ut,jt,Se,ie);f.pixelStorei(L.UNPACK_ROW_LENGTH,Ce),f.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Wt),f.pixelStorei(L.UNPACK_SKIP_PIXELS,Ge),f.pixelStorei(L.UNPACK_SKIP_ROWS,sn),f.pixelStorei(L.UNPACK_SKIP_IMAGES,bn),dt===0&&C.generateMipmaps&&L.generateMipmap(gt),f.unbindTexture()},this.initRenderTarget=function(_){z.get(_).__webglFramebuffer===void 0&&X.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?X.setTextureCube(_,0):_.isData3DTexture?X.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?X.setTexture2DArray(_,0):X.setTexture2D(_,0),f.unbindTexture()},this.resetState=function(){J=0,q=0,nt=null,f.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}};var ka={positions:[1.795,0,0,1.78399,.02589,-.06453,1.75203,.04925,-.12274,1.70225,.06779,-.16894,1.63953,.07969,-.1986,1.57,.08379,-.20882,1.50047,.07969,-.1986,1.43775,.06779,-.16894,1.38797,.04925,-.12274,1.35601,.02589,-.06453,1.345,0,-0,1.35601,-.02589,.06453,1.38797,-.04925,.12274,1.43775,-.06779,.16894,1.50047,-.07969,.1986,1.57,-.08379,.20882,1.63953,-.07969,.1986,1.70225,-.06779,.16894,1.75203,-.04925,.12274,1.78399,-.02589,.06453,1.78839,.12609,.04117,1.77473,.15059,-.0234,1.74052,.17039,-.08164,1.68908,.18355,-.12787,1.62546,.18878,-.15755,1.55589,.18557,-.16777,1.48717,.17424,-.15755,1.42603,.15588,-.12787,1.37846,.13231,-.08164,1.34911,.10582,-.0234,1.34086,.07901,.04117,1.35451,.05451,.10573,1.38872,.03471,.16398,1.44016,.02155,.2102,1.50378,.01632,.23988,1.57335,.01953,.25011,1.64207,.03086,.23988,1.70321,.04922,.2102,1.75078,.07279,.16398,1.78013,.09928,.10573,1.76865,.25065,.08194,1.75258,.27331,.01726,1.71653,.28918,-.04109,1.66405,.29669,-.0874,1.60026,.29512,-.11713,1.53141,.28462,-.12737,1.46424,.26621,-.11713,1.40532,.2417,-.0874,1.36043,.21349,-.04109,1.33395,.18434,.01726,1.32848,.1571,.08194,1.34456,.13443,.14662,1.3806,.11857,.20497,1.43309,.11105,.25127,1.49688,.11263,.281,1.56573,.12313,.29125,1.6329,.14154,.281,1.69181,.16604,.25127,1.73671,.19426,.20497,1.76318,.22341,.14662,1.73612,.37218,.12192,1.71792,.39259,.05705,1.68056,.40421,-.00147,1.62768,.40589,-.04791,1.56447,.39748,-.07773,1.49711,.3798,-.088,1.43219,.35458,-.07773,1.37608,.32428,-.04791,1.33426,.29188,-.00147,1.31083,.26055,.05705,1.30807,.23334,.12192,1.32627,.21294,.18679,1.36363,.20132,.24531,1.41651,.19964,.29175,1.47972,.20805,.32156,1.54708,.22573,.33184,1.612,.25095,.32156,1.66811,.28124,.29175,1.70993,.31364,.24531,1.73336,.34498,.18679,1.69132,.48926,.16073,1.67138,.50706,.0956,1.63326,.51418,.03685,1.58069,.50995,-.00978,1.51881,.49476,-.03971,1.45369,.4701,-.05003,1.39169,.4384,-.03971,1.33888,.40275,-.00978,1.30044,.36664,.03685,1.28013,.33361,.0956,1.27993,.30688,.16073,1.29986,.28909,.22585,1.33798,.28196,.2846,1.39055,.2862,.33123,1.45243,.30139,.36116,1.51756,.32604,.37148,1.57956,.35774,.36116,1.63236,.39339,.33123,1.6708,.4295,.2846,1.69112,.46254,.22585,1.63496,.60055,.19799,1.61374,.61544,.13254,1.57548,.61793,.0735,1.52394,.60777,.02664,1.46415,.58596,-.00344,1.40197,.55463,-.0138,1.34348,.51685,-.00344,1.29442,.47631,.02664,1.25957,.43699,.0735,1.24237,.40273,.13254,1.24448,.37689,.19799,1.2657,.362,.26343,1.30396,.35951,.32247,1.3555,.36966,.36933,1.41529,.39147,.39941,1.47747,.4228,.40978,1.53596,.46059,.39941,1.58502,.50112,.36933,1.61986,.54045,.32247,1.63707,.5747,.26343,1.56795,.70483,.23334,1.54595,.71662,.16752,1.5082,.71442,.10814,1.45841,.69844,.06101,1.40144,.67026,.03076,1.34286,.63263,.02033,1.28843,.58923,.03076,1.24345,.54431,.06101,1.21234,.50228,.10814,1.19814,.46724,.16752,1.20224,.44262,.23334,1.22424,.43083,.29916,1.26199,.43304,.35854,1.31178,.44901,.40567,1.36876,.47719,.43592,1.42733,.51483,.44635,1.48177,.55822,.43592,1.52674,.60314,.40567,1.55785,.64517,.35854,1.57205,.68022,.29916,1.49132,.80106,.26645,1.4691,.80961,.2002,1.43253,.80276,.14044,1.3852,.78117,.09301,1.33174,.74696,.06256,1.27739,.70347,.05207,1.22746,.65497,.06256,1.18684,.6062,.09301,1.15951,.56194,.14044,1.14814,.52651,.2002,1.15385,.50339,.26645,1.17607,.49484,.33269,1.21264,.5017,.39245,1.25997,.52329,.43988,1.31343,.5575,.47033,1.36779,.60098,.48082,1.41772,.64948,.47033,1.45834,.69825,.43988,1.48567,.74252,.39245,1.49703,.77794,.33269,1.40625,.88835,.29698,1.38438,.89363,.23028,1.34966,.88227,.17011,1.30549,.85536,.12236,1.25619,.81554,.0917,1.20659,.76672,.08113,1.16155,.71366,.0917,1.12547,.66156,.12236,1.10189,.61553,.17011,1.09311,.58006,.23028,1.1,.55864,.29698,1.12187,.55335,.36369,1.15659,.56472,.42386,1.20077,.59163,.47161,1.25006,.63144,.50227,1.29966,.68027,.51284,1.3447,.73333,.50227,1.38078,.78542,.47161,1.40436,.83146,.42386,1.41314,.86692,.36369,1.314,.96597,.32466,1.29307,.96807,.25749,1.26085,.95243,.19688,1.22049,.92059,.14879,1.17594,.87567,.11791,1.13157,.82207,.10727,1.09172,.76502,.11791,1.06029,.71012,.14879,1.04035,.66274,.19688,1.03386,.62752,.25749,1.04146,.6079,.32466,1.06239,.6058,.39184,1.09461,.62144,.45245,1.13497,.65328,.50054,1.17952,.6982,.53142,1.22389,.7518,.54206,1.26374,.80885,.53142,1.29517,.86375,.50054,1.31511,.91113,.45245,1.3216,.94635,.39184,1.21591,1.03343,.34922,1.1965,1.0325,.28156,1.1674,1.01292,.22052,1.13145,.97663,.17208,1.09218,.92718,.14098,1.05343,.86939,.13026,1.01898,.80894,.14098,.99223,.75174,.17208,.97577,.70338,.22052,.97123,.66861,.28156,.97905,.65082,.34922,.99845,.65175,.41688,1.02756,.67132,.47792,1.0635,.70761,.52635,1.10277,.75707,.55745,1.14153,.81485,.56817,1.17597,.87531,.55745,1.20273,.93251,.52635,1.21918,.98087,.47792,1.22372,1.01564,.41688,1.11334,1.09041,.37041,1.09601,1.0867,.30228,1.07061,1.06362,.24082,1.03961,1.02343,.19204,1.00606,.97005,.16072,.97323,.90872,.14993,.94434,.84544,.16072,.92221,.7864,.19204,.90902,.73739,.24082,.90606,.70319,.30228,.9136,.68717,.37041,.93093,.69088,.43854,.95633,.71396,.5,.98733,.75415,.54877,1.02088,.80753,.58009,1.05371,.86886,.59088,1.0826,.93214,.58009,1.10473,.99117,.54877,1.11792,1.04019,.5,1.12088,1.07438,.43854,1.00766,1.1368,.38803,.99295,1.13067,.31946,.97176,1.10458,.25761,.94618,1.06109,.20852,.9187,1.00446,.177,.89201,.94023,.16614,.86874,.87468,.177,.85115,.81424,.20852,.84096,.76483,.25761,.83919,.73127,.31946,.84599,.71685,.38803,.8607,.72298,.4566,.88189,.74907,.51845,.90747,.79256,.56754,.93495,.84919,.59906,.96163,.91342,.60992,.98491,.97896,.59906,1.0025,1.0394,.56754,1.01268,1.08882,.51845,1.01446,1.12238,.4566,.90024,1.17268,.40191,.88861,1.16454,.33297,.87208,1.13602,.27077,.85229,1.0899,.2214,.83115,1.0307,.18971,.81075,.96422,.17879,.79308,.89696,.18971,.77987,.8355,.2214,.77241,.78587,.27077,.77143,.75292,.33297,.77703,.73988,.40191,.78866,.74802,.47086,.80519,.77654,.53306,.82498,.82266,.58243,.84612,.88186,.61412,.86652,.94834,.62504,.88419,1.0156,.61412,.8974,1.07706,.58243,.90486,1.12669,.53306,.90584,1.15964,.47086,.79236,1.19833,.41193,.78422,1.18868,.34268,.77273,1.15834,.2802,.759,1.11029,.23062,.74439,1.04923,.19879,.73033,.98113,.18782,.71819,.91266,.19879,.70915,.85053,.23062,.70411,.80081,.2802,.70356,.76837,.34268,.70755,.75639,.41193,.71569,.76605,.48118,.72719,.79638,.54366,.74091,.84443,.59324,.75552,.9055,.62507,.76958,.9736,.63604,.78173,1.04206,.62507,.79076,1.1042,.59324,.7958,1.15391,.54366,.79635,1.18635,.48118,.68526,1.21419,.41798,.68094,1.20357,.34852,.67475,1.17209,.28586,.66728,1.12282,.23614,.65928,1.06059,.20421,.65152,.9915,.19321,.64477,.92229,.20421,.63968,.85976,.23614,.63675,.81002,.28586,.63628,.77793,.34852,.6383,.76665,.41798,.64261,.77727,.48743,.64881,.80875,.55009,.65627,.85802,.59982,.66427,.92025,.63174,.67203,.98934,.64274,.67879,1.05855,.63174,.68387,1.12108,.59982,.6868,1.17082,.55009,.68728,1.20291,.48743,.58005,1.22087,.42,.5798,1.20986,.35047,.57908,1.17791,.28775,.57797,1.12815,.23797,.57656,1.06544,.20601,.575,.99593,.195,.57344,.92642,.20601,.57203,.86371,.23797,.57092,.81395,.28775,.5702,.782,.35047,.56995,.77099,.42,.5702,.782,.48953,.57092,.81395,.55225,.57203,.86371,.60203,.57344,.92642,.63399,.575,.99593,.645,.57656,1.06544,.63399,.57797,1.12815,.60203,.57908,1.17791,.55225,.5798,1.20986,.48953,.47773,1.21912,.41798,.48171,1.20832,.34853,.48655,1.17658,.28588,.49176,1.12702,.23616,.49685,1.06448,.20424,.5013,.9951,.19324,.50469,.92565,.20424,.50669,.86294,.23616,.50709,.8131,.28588,.50586,.78103,.34853,.50312,.76984,.41798,.49914,.78065,.48742,.4943,.81238,.55007,.48909,.86194,.59979,.484,.92448,.63171,.47955,.99387,.64271,.47616,1.06332,.63171,.47416,1.12603,.59979,.47376,1.17586,.55007,.47499,1.20794,.48742,.37917,1.20981,.41193,.38744,1.1998,.34274,.39781,1.16893,.28033,.40924,1.12024,.2308,.42062,1.05847,.199,.43084,.98969,.18804,.43889,.92062,.199,.44399,.85803,.2308,.44564,.80803,.28033,.44368,.77553,.34274,.43829,.76371,.41193,.43001,.77372,.48112,.41965,.80459,.54353,.40822,.85328,.59306,.39684,.91505,.62486,.38662,.98383,.63582,.37857,1.0529,.62486,.37347,1.1155,.59306,.37182,1.16549,.54353,.37378,1.19799,.48112,.28508,1.1939,.40191,.29763,1.18524,.33319,.31339,1.15585,.27119,.33083,1.10862,.22199,.34823,1.04817,.1904,.36389,.9804,.17952,.37628,.91197,.1904,.38418,.84956,.22199,.38683,.79928,.27119,.38396,.76606,.33319,.37585,.75315,.40191,.3633,.7618,.47064,.34754,.79119,.53264,.3301,.83842,.58184,.3127,.89887,.61343,.29704,.96664,.62431,.28465,1.03507,.61343,.27675,1.09748,.58184,.2741,1.14776,.53264,.27697,1.18098,.47064,.19603,1.17241,.38803,.21274,1.16561,.31999,.23369,1.13825,.2586,.25683,1.09301,.20989,.27989,1.03431,.17861,.30062,.9679,.16783,.31698,.90029,.17861,.32738,.83809,.20989,.3308,.78738,.2586,.3269,.75314,.31999,.31606,.73872,.38803,.29935,.74552,.45607,.2784,.77288,.51746,.25526,.81812,.56617,.2322,.87682,.59745,.21147,.94323,.60822,.1951,1.01084,.59745,.1847,1.07304,.56617,.18129,1.12375,.51746,.18519,1.15799,.45607,.11241,1.14644,.37041,.1331,1.14192,.30327,.15894,1.11702,.24271,.1874,1.07418,.19465,.2157,1.01759,.16379,.24107,.95279,.15315,.26102,.88613,.16379,.27359,.82412,.19465,.27757,.77284,.24271,.27256,.73731,.30327,.25905,.721,.37041,.23836,.72552,.43754,.21252,.75042,.49811,.18406,.79326,.54617,.15576,.84985,.57703,.13039,.91465,.58766,.11044,.98131,.57703,.09786,1.04332,.54617,.09388,1.0946,.49811,.0989,1.13013,.43754,.03447,1.11707,.34922,.05889,1.11516,.28322,.08925,1.09305,.22368,.1226,1.05291,.17644,.15565,.99866,.1461,.18518,.93562,.13565,.2083,.86996,.1461,.22273,.8081,.17644,.22708,.75609,.22368,.22091,.71904,.28322,.20483,.70057,.34922,.18041,.70248,.41521,.15004,.72458,.47475,.1167,.76473,.522,.08365,.81897,.55233,.05412,.88201,.56279,.031,.94768,.55233,.01656,1.00954,.522,.01222,1.06154,.47475,.01839,1.0986,.41521,-.0377,1.0854,.32466,-.00984,1.08629,.26002,.02464,1.06716,.20171,.06236,1.02987,.15543,.09964,.97807,.12572,.13282,.91683,.11548,.15866,.85215,.12572,.17462,.79036,.15543,.17914,.73751,.20171,.17179,.69877,.26002,.15328,.67793,.32466,.12542,.67703,.38931,.09094,.69617,.44762,.05321,.73346,.4939,.01593,.78526,.52361,-.01725,.84649,.53385,-.04308,.91117,.52361,-.05904,.97296,.4939,-.06357,1.02581,.44762,-.05622,1.06456,.38931,-.10416,1.05246,.29698,-.07317,1.05622,.23389,-.03502,1.04008,.17697,.00656,1.00564,.1318,.0475,.95626,.10279,.08378,.89677,.0928,.11187,.833,.10279,.129,.77118,.1318,.13351,.71738,.17697,.12495,.67686,.23389,.10416,.65357,.29698,.07317,.64981,.36008,.03502,.66595,.417,-.00656,.70039,.46217,-.0475,.74977,.49118,-.08378,.80926,.50117,-.11187,.87303,.49118,-.129,.93485,.46217,-.13351,.98865,.417,-.12495,1.02917,.36008,-.16508,1.01923,.26645,-.13128,1.02575,.20504,-.08992,1.01249,.14964,-.04504,.98073,.10568,-.00103,.93359,.07745,.03779,.87568,.06773,.06763,.81266,.07745,.08557,.75072,.10568,.08984,.69591,.14964,.08004,.65359,.20504,.05712,.62791,.26645,.02332,.62138,.32785,-.01804,.63465,.38325,-.06292,.66641,.42721,-.10693,.71355,.45544,-.14575,.77146,.46516,-.17559,.83447,.45544,-.19352,.89642,.42721,-.1978,.95123,.38325,-.188,.99355,.32785,-.22077,.98657,.23334,-.18448,.99561,.1737,-.14036,.98491,.1199,-.09273,.95552,.07721,-.04626,.9103,.0498,-.00548,.8537,.04035,.02559,.79124,.0498,.04393,.72905,.07721,.04774,.67321,.1199,.03664,.62919,.1737,.01173,.60129,.23334,-.02457,.59225,.29298,-.06869,.60295,.34678,-.11632,.63235,.38947,-.16279,.67756,.41688,-.20356,.73417,.42633,-.23464,.79662,.41688,-.25298,.85881,.38947,-.25679,.91465,.34678,-.24569,.95868,.29298,-.27167,.95521,.19799,-.23317,.96636,.14012,-.18673,.95777,.08791,-.1369,.93027,.04648,-.08856,.88655,.01988,-.04644,.8309,.01072,-.01466,.76876,.01988,.00367,.70621,.04648,.00675,.64938,.08791,-.00572,.60383,.14012,-.03251,.57402,.19799,-.07101,.56286,.25586,-.11745,.57146,.30806,-.16728,.59896,.34949,-.21562,.64268,.37609,-.25774,.69833,.38526,-.28952,.76047,.37609,-.30785,.82302,.34949,-.31093,.87985,.30806,-.29846,.9254,.25586,-.3183,.92565,.16073,-.27787,.93839,.10452,-.22955,.93133,.05382,-.17806,.90514,.01358,-.12845,.8624,-.01225,-.08557,.80729,-.02115,-.05362,.7452,-.01225,-.03572,.68221,.01358,-.03363,.62448,.05382,-.04756,.57767,.10452,-.07613,.54637,.16073,-.11656,.53362,.21693,-.16488,.54069,.26763,-.21636,.56687,.30787,-.26597,.60961,.3337,-.30886,.66473,.34261,-.34081,.72682,.3337,-.3587,.78981,.30787,-.36079,.84753,.26763,-.34687,.89434,.21693,-.36131,.89817,.12192,-.31925,.91191,.06717,-.26947,.90571,.01778,-.21685,.88021,-.02141,-.16654,.83788,-.04658,-.12347,.78288,-.05525,-.09186,.72058,-.04658,-.07478,.6571,-.02141,-.07393,.59863,.01778,-.08938,.5509,.06717,-.11961,.51859,.12192,-.16168,.50486,.17667,-.21146,.51105,.22606,-.26408,.53656,.26525,-.31438,.57889,.29042,-.35745,.63389,.29909,-.38907,.69618,.29042,-.40614,.75967,.26525,-.407,.81814,.22606,-.39155,.86587,.17667,-.40153,.87279,.08194,-.35813,.88688,.02833,-.30733,.8809,-.02004,-.2541,.85544,-.05842,-.20364,.81299,-.08306,-.16089,.75771,-.09155,-.13004,.69501,-.08306,-.11411,.63102,-.05842,-.11466,.57201,-.02004,-.13163,.52376,.02833,-.16337,.49098,.08194,-.20676,.47689,.13555,-.25756,.48287,.18391,-.3108,.50833,.22229,-.36126,.55078,.24694,-.40401,.60606,.25543,-.43485,.66877,.24694,-.45078,.73276,.22229,-.45024,.79177,.18391,-.43326,.84002,.13555,-.43989,.84925,.04117,-.39555,.86311,-.01172,-.34418,.85675,-.05943,-.29081,.8308,-.09729,-.24067,.78778,-.1216,-.19866,.73192,-.12998,-.1689,.66867,-.1216,-.1543,.60424,-.09729,-.15628,.54493,-.05943,-.17466,.49654,-.01172,-.20764,.46381,.04117,-.25198,.44995,.09405,-.30335,.45631,.14176,-.35672,.48227,.17963,-.40686,.52528,.20394,-.44887,.58115,.21231,-.47863,.64439,.20394,-.49324,.70882,.17963,-.49125,.76813,.14176,-.47287,.81652,.09405,-.4775,.82705,0,-.43265,.84023,-.05264,-.38118,.83304,-.10012,-.32813,.8062,-.13781,-.27869,.76232,-.162,-.23769,.7057,-.17034,-.20916,.64189,-.162,-.19588,.57713,-.13781,-.19916,.51776,-.10012,-.21867,.46959,-.05264,-.2525,.43734,0,-.29735,.42417,.05264,-.34882,.43135,.10012,-.40187,.4582,.13781,-.45131,.50208,.162,-.49231,.5587,.17034,-.52084,.62251,.162,-.53412,.68727,.13781,-.53084,.74664,.10012,-.51133,.7948,.05264,-.51553,.80558,-.04117,-.47069,.81778,-.09405,-.4196,.8095,-.14176,-.36724,.78156,-.17963,-.31874,.7367,-.20394,-.27885,.67931,-.21231,-.25148,.615,-.20394,-.23929,.55006,-.17963,-.2435,.49087,-.14176,-.26368,.4432,-.09405,-.29785,.41173,-.04117,-.34269,.39953,.01172,-.39378,.40781,.05943,-.44614,.43574,.09729,-.49464,.48061,.1216,-.53453,.538,.12998,-.5619,.60231,.1216,-.57409,.66725,.09729,-.56988,.72644,.05943,-.5497,.77411,.01172,-.5551,.78413,-.08194,-.51085,.79523,-.13555,-.46057,.7858,-.18391,-.40919,.75677,-.22229,-.36174,.71098,-.24694,-.32286,.65291,-.25543,-.29636,.58825,-.24694,-.28483,.52333,-.22229,-.2894,.46449,-.18391,-.30962,.41751,-.13555,-.34352,.38697,-.08194,-.38777,.37587,-.02833,-.43805,.3853,.02004,-.48942,.41433,.05842,-.53687,.46012,.08306,-.57575,.51819,.09155,-.60226,.58285,.08306,-.61379,.64778,.05842,-.60922,.70661,.02004,-.58899,.75359,-.02833,-.59718,.76199,-.12192,-.55409,.77203,-.17667,-.50503,.76154,-.22606,-.45482,.73157,-.26525,-.40838,.68504,-.29042,-.37024,.62651,-.29909,-.34414,.56171,-.29042,-.33264,.49698,-.26525,-.33686,.43866,-.22606,-.35638,.39245,-.17667,-.38931,.36289,-.12192,-.43241,.35285,-.06717,-.48146,.36334,-.01778,-.53167,.39331,.02141,-.57812,.43984,.04658,-.61626,.49837,.05525,-.64235,.56317,.04658,-.65386,.6279,.02141,-.64964,.68622,-.01778,-.63011,.73243,-.06717,-.64249,.73848,-.16073,-.60109,.74757,-.21693,-.55359,.73622,-.26763,-.50464,.70555,-.30787,-.45904,.65856,-.3337,-.42124,.59984,-.34261,-.39495,.53515,-.3337,-.38274,.47081,-.30787,-.38581,.41313,-.26763,-.40385,.36775,-.21693,-.4351,.33911,-.16073,-.4765,.33002,-.10452,-.524,.34137,-.05382,-.57295,.37204,-.01358,-.61855,.41903,.01225,-.65635,.47775,.02115,-.68264,.54244,.01225,-.69485,.60678,-.01358,-.69178,.66446,-.05382,-.67374,.70984,-.10452,-.6914,.71288,-.19799,-.65219,.72118,-.25586,-.6065,.7092,-.30806,-.55883,.67811,-.34949,-.51383,.63097,-.37609,-.4759,.57237,-.38526,-.44877,.50807,-.37609,-.43508,.44435,-.34949,-.43617,.38744,-.30806,-.45195,.34293,-.25586,-.48086,.31517,-.19799,-.52007,.30687,-.14012,-.56575,.31885,-.08791,-.61343,.34993,-.04648,-.65843,.39707,-.01988,-.69636,.45567,-.01072,-.72349,.51997,-.01988,-.73718,.5837,-.04648,-.73609,.6406,-.08791,-.72031,.68511,-.14012,-.74401,.68448,-.23334,-.70739,.69211,-.29298,-.66372,.67971,-.34678,-.61726,.64849,-.38947,-.57257,.60151,-.41688,-.53403,.54337,-.42633,-.50539,.47976,-.41688,-.48947,.41691,-.38947,-.48783,.36096,-.34678,-.50062,.3174,-.29298,-.5266,.29049,-.23334,-.56321,.28286,-.1737,-.60689,.29526,-.1199,-.65334,.32648,-.07721,-.69803,.37346,-.0498,-.73658,.4316,-.04035,-.76522,.49521,-.0498,-.78114,.55806,-.07721,-.78278,.61401,-.1199,-.76999,.65757,-.1737,-.80014,.65257,-.26645,-.76644,.65959,-.32785,-.72489,.64692,-.38325,-.67956,.61581,-.42721,-.63488,.5693,-.45544,-.59523,.51195,-.46516,-.56449,.44938,-.45544,-.54566,.38769,-.42721,-.5406,.33295,-.38325,-.5498,.29049,-.32785,-.57234,.26449,-.26645,-.60604,.25748,-.20504,-.64759,.27015,-.14964,-.69292,.30126,-.10568,-.7376,.34776,-.07745,-.77725,.40511,-.06773,-.80799,.46769,-.07745,-.82682,.52937,-.10568,-.83188,.58412,-.14964,-.82269,.62657,-.20504,-.85938,.61643,-.29698,-.82882,.62279,-.36008,-.78944,.60995,-.417,-.7451,.57914,-.46217,-.70014,.5334,-.49118,-.65895,.47719,-.50117,-.62557,.41602,-.49118,-.60327,.35588,-.46217,-.59423,.30265,-.417,-.59934,.26154,-.36008,-.61809,.23659,-.29698,-.64865,.23022,-.23389,-.68803,.24307,-.17697,-.73237,.27387,-.1318,-.77733,.31962,-.10279,-.81852,.37583,-.0928,-.85189,.437,-.10279,-.87419,.49714,-.1318,-.88323,.55037,-.17697,-.87813,.59147,-.23389,-.92113,.57535,-.32466,-.89382,.58096,-.38931,-.8566,.56796,-.44762,-.81309,.53761,-.4939,-.76756,.4929,-.52361,-.72446,.43818,-.53385,-.68802,.37883,-.52361,-.6618,.32065,-.4939,-.64837,.26933,-.44762,-.64904,.2299,-.38931,-.66374,.20622,-.32466,-.69105,.20061,-.26002,-.72828,.21361,-.20171,-.77179,.24396,-.15543,-.81732,.28868,-.12572,-.86041,.34339,-.11548,-.89685,.40274,-.12572,-.92307,.46092,-.15543,-.93651,.51224,-.20171,-.93584,.55167,-.26002,-.98465,.52869,-.34922,-.9606,.53337,-.41521,-.92543,.52019,-.47475,-.88257,.49043,-.522,-.83622,.44699,-.55233,-.7909,.39414,-.56279,-.75107,.33705,-.55233,-.72062,.2813,-.522,-.70253,.23235,-.47475,-.69857,.195,-.41521,-.70912,.1729,-.34922,-.73316,.16821,-.28322,-.76834,.18139,-.22368,-.8112,.21116,-.17644,-.85755,.25459,-.1461,-.90286,.30744,-.13565,-.94269,.36453,-.1461,-.97315,.42028,-.17644,-.99124,.46923,-.22368,-.9952,.50658,-.28322,-1.04905,.47587,-.37041,-1.02817,.47942,-.43754,-.99489,.466,-.49811,-.95247,.43691,-.54617,-.90506,.39501,-.57703,-.8573,.3444,-.58766,-.81387,.29003,-.57703,-.77901,.23723,-.54617,-.75614,.19116,-.49811,-.7475,.15633,-.43754,-.75393,.13616,-.37041,-.77481,.13261,-.30327,-.80809,.14603,-.24271,-.85051,.17512,-.19465,-.89792,.21702,-.16379,-.94568,.26763,-.15315,-.98911,.322,-.16379,-1.02397,.3748,-.19465,-1.04684,.42087,-.24271,-1.05548,.4557,-.30327,-1.11335,.41644,-.38803,-1.09544,.41862,-.45607,-1.06384,.40487,-.51746,-1.02163,.37656,-.56617,-.97296,.33646,-.59745,-.92259,.28848,-.60822,-.87545,.23732,-.59745,-.83614,.188,-.56617,-.80853,.14534,-.51746,-.79531,.11352,-.45607,-.79778,.09564,-.38803,-.81569,.09347,-.31999,-.84729,.10721,-.2586,-.88949,.13552,-.20989,-.93816,.17563,-.17861,-.98854,.22361,-.16783,-1.03568,.27476,-.17861,-1.07498,.32408,-.20989,-1.1026,.36674,-.2586,-1.11582,.39857,-.31999,-1.17648,.35006,-.40191,-1.16125,.35063,-.47064,-1.13104,.3365,-.53264,-1.08882,.30907,-.58184,-1.03873,.27102,-.61343,-.98565,.22607,-.62431,-.9348,.17863,-.61343,-.89114,.13333,-.58184,-.85896,.09462,-.53264,-.84139,.06627,-.47064,-.84017,.05107,-.40191,-.85541,.05051,-.33319,-.88561,.06463,-.27119,-.92783,.09206,-.22199,-.97793,.13012,-.1904,-1.031,.17506,-.17952,-1.08185,.22251,-.1904,-1.12551,.2678,-.22199,-1.1577,.30652,-.27119,-1.17526,.33486,-.33319,-1.23731,.27654,-.41193,-1.22438,.27529,-.48112,-1.19525,.26074,-.54353,-1.15278,.23432,-.59306,-1.10112,.1986,-.62486,-1.04533,.15709,-.63582,-.99087,.11385,-.62486,-.94308,.07311,-.59306,-.90662,.03886,-.54353,-.88507,.01446,-.48112,-.88054,.00228,-.41193,-.89347,.00353,-.34274,-.9226,.01808,-.28033,-.96507,.0445,-.2308,-1.01673,.08022,-.199,-1.07252,.12173,-.18804,-1.12697,.16497,-.199,-1.17477,.20571,-.2308,-1.21123,.23996,-.28033,-1.23278,.26436,-.34274,-1.29466,.19584,-.41798,-1.2836,.19262,-.48742,-1.2552,.17764,-.55007,-1.21225,.15238,-.59979,-1.15894,.11929,-.63171,-1.10049,.08163,-.64271,-1.04262,.04308,-.63171,-.99101,.00741,-.59979,-.95069,-.02189,-.55007,-.92563,-.04194,-.48742,-.91826,-.0508,-.41798,-.92932,-.04758,-.34853,-.95771,-.0326,-.28588,-1.00067,-.00733,-.23616,-1.05398,.02575,-.20424,-1.11243,.06341,-.19324,-1.17029,.10196,-.20424,-1.22191,.13763,-.23616,-1.26222,.16693,-.28588,-1.28729,.18699,-.34853,-1.34733,.1081,-.42,-1.33767,.10281,-.48953,-1.30964,.08746,-.55225,-1.26599,.06354,-.60203,-1.21098,.03341,-.63399,-1.15,0,-.645,-1.08902,-.03341,-.63399,-1.03401,-.06354,-.60203,-.99036,-.08746,-.55225,-.96233,-.10281,-.48953,-.95267,-.1081,-.42,-.96233,-.10281,-.35047,-.99036,-.08746,-.28775,-1.03401,-.06354,-.23797,-1.08902,-.03341,-.20601,-1.15,0,-.195,-1.21098,.03341,-.20601,-1.26599,.06354,-.23797,-1.30964,.08746,-.28775,-1.33767,.10281,-.35047,-1.39415,.01364,-.41798,-1.38539,.00625,-.48743,-1.35736,-.00938,-.55009,-1.31282,-.03171,-.59982,-1.25612,-.05857,-.63174,-1.19281,-.08732,-.64274,-1.12909,-.11515,-.63174,-1.0712,-.13934,-.59982,-1.0248,-.15751,-.55009,-.99444,-.16789,-.48743,-.98308,-.16946,-.41798,-.99185,-.16207,-.34852,-1.01987,-.14644,-.28586,-1.06441,-.1241,-.23614,-1.12111,-.09724,-.20421,-1.18442,-.06849,-.19321,-1.24814,-.04066,-.20421,-1.30603,-.01647,-.23614,-1.35243,.0017,-.28586,-1.38279,.01207,-.34852,-1.43396,-.08704,-.41193,-1.42559,-.09649,-.48118,-1.39722,-.11223,-.54366,-1.35164,-.13272,-.59324,-1.29332,-.15596,-.62507,-1.22795,-.17968,-.63604,-1.16194,-.20155,-.62507,-1.10176,-.21943,-.59324,-1.05328,-.23157,-.54366,-1.02126,-.23678,-.48118,-1.00883,-.23456,-.41193,-1.01721,-.22512,-.34268,-1.04558,-.20937,-.2802,-1.09115,-.18888,-.23062,-1.14948,-.16564,-.19879,-1.21485,-.14192,-.18782,-1.28085,-.12005,-.19879,-1.34104,-.10217,-.23062,-1.38952,-.09003,-.2802,-1.42154,-.08482,-.34268,-1.46569,-.19329,-.40191,-1.4572,-.20466,-.47086,-1.42817,-.22029,-.53306,-1.38146,-.23864,-.58243,-1.32163,-.25793,-.61412,-1.25455,-.27625,-.62504,-1.18677,-.29183,-.61412,-1.12494,-.30313,-.58243,-1.0751,-.30904,-.53306,-1.04213,-.309,-.47086,-1.02927,-.30299,-.40191,-1.03776,-.29162,-.33297,-1.06679,-.27599,-.27077,-1.1135,-.25764,-.2214,-1.17333,-.23835,-.18971,-1.24041,-.22002,-.17879,-1.30819,-.20445,-.18971,-1.37002,-.19315,-.2214,-1.41986,-.18724,-.27077,-1.45283,-.18728,-.33297,-1.48833,-.30426,-.38803,-1.47924,-.31736,-.4566,-1.44929,-.3326,-.51845,-1.4014,-.34849,-.56754,-1.34026,-.36348,-.59906,-1.27186,-.37609,-.60992,-1.2029,-.38509,-.59906,-1.14011,-.38961,-.56754,-1.08966,-.3892,-.51845,-1.05647,-.3839,-.4566,-1.0438,-.37422,-.38803,-1.05289,-.36112,-.31946,-1.08284,-.34588,-.25761,-1.13073,-.32999,-.20852,-1.19187,-.31501,-.177,-1.26027,-.30239,-.16614,-1.32923,-.29339,-.177,-1.39202,-.28887,-.20852,-1.44247,-.28928,-.25761,-1.47566,-.29459,-.31946,-1.50099,-.41897,-.37041,-1.49089,-.43352,-.43854,-1.45979,-.44805,-.5,-1.41075,-.46113,-.54877,-1.34856,-.47149,-.58009,-1.27931,-.47811,-.59088,-1.20978,-.48035,-.58009,-1.14678,-.47797,-.54877,-1.09647,-.47123,-.5,-1.06378,-.46077,-.43854,-1.05191,-.44762,-.37041,-1.06201,-.43307,-.30228,-1.09311,-.41854,-.24082,-1.14215,-.40546,-.19204,-1.20434,-.3951,-.16072,-1.27359,-.38848,-.14993,-1.34312,-.38625,-.16072,-1.40612,-.38862,-.19204,-1.45643,-.39536,-.24082,-1.48912,-.40582,-.30228,-1.50293,-.53629,-.34922,-1.49143,-.55196,-.41688,-1.45905,-.56541,-.47792,-1.40894,-.57534,-.52635,-1.34602,-.58077,-.55745,-1.27645,-.58117,-.56817,-1.20703,-.5765,-.55745,-1.14456,-.56721,-.52635,-1.09516,-.55423,-.47792,-1.06366,-.53881,-.41688,-1.05315,-.52247,-.34922,-1.06464,-.50681,-.28156,-1.09703,-.49335,-.22052,-1.14714,-.48342,-.17208,-1.21006,-.478,-.14098,-1.27963,-.4776,-.13026,-1.34905,-.48227,-.14098,-1.41152,-.49155,-.17208,-1.46092,-.50453,-.22052,-1.49242,-.51995,-.28156,-1.49356,-.65497,-.32466,-1.48037,-.67136,-.39184,-1.44662,-.68335,-.45245,-1.39561,-.68978,-.50054,-1.33235,-.69001,-.53142,-1.26302,-.68402,-.54206,-1.19441,-.6724,-.53142,-1.13324,-.65628,-.50054,-1.08549,-.63724,-.45245,-1.05584,-.61716,-.39184,-1.04718,-.59798,-.32466,-1.06038,-.58159,-.25749,-1.09413,-.5696,-.19688,-1.14513,-.56318,-.14879,-1.20839,-.56295,-.11791,-1.27772,-.56894,-.10727,-1.34633,-.58056,-.11791,-1.4075,-.59668,-.14879,-1.45525,-.61571,-.19688,-1.48491,-.6358,-.25749,-1.47246,-.77368,-.29698,-1.45734,-.79035,-.36369,-1.42224,-.80048,-.42386,-1.37058,-.80308,-.47161,-1.30743,-.79788,-.50227,-1.23896,-.7854,-.51284,-1.17188,-.76687,-.50227,-1.11275,-.74408,-.47161,-1.06736,-.71928,-.42386,-1.04015,-.69489,-.36369,-1.03379,-.67331,-.29698,-1.04891,-.65663,-.23028,-1.08401,-.6465,-.17011,-1.13567,-.64391,-.12236,-1.19882,-.6491,-.0917,-1.26729,-.66158,-.08113,-1.33438,-.68012,-.0917,-1.39351,-.7029,-.12236,-1.4389,-.7277,-.17011,-1.4661,-.75209,-.23028,-1.4394,-.89099,-.26645,-1.42224,-.9075,-.33269,-1.38587,-.91537,-.39245,-1.33387,-.91383,-.43988,-1.27133,-.90304,-.47033,-1.20436,-.88405,-.48082,-1.13952,-.85872,-.47033,-1.08317,-.82952,-.43988,-1.0408,-.79933,-.39245,-1.01658,-.77109,-.33269,-1.01287,-.74757,-.26645,-1.03004,-.73106,-.2002,-1.0664,-.72319,-.14044,-1.1184,-.72473,-.09301,-1.18095,-.73552,-.06256,-1.24792,-.75451,-.05207,-1.31275,-.77984,-.06256,-1.36911,-.80903,-.09301,-1.41148,-.83923,-.14044,-1.4357,-.86747,-.2002,-1.39438,-1.00547,-.23334,-1.37511,-1.02133,-.29916,-1.33766,-1.02655,-.35854,-1.2857,-1.02063,-.40567,-1.22432,-1.00414,-.43592,-1.15952,-.97869,-.44635,-1.09764,-.94678,-.43592,-1.04475,-.91153,-.40567,-1.00601,-.8764,-.35854,-.98523,-.84481,-.29916,-.98444,-.81986,-.23334,-1.00371,-.804,-.16752,-1.04116,-.79878,-.10814,-1.09311,-.8047,-.06101,-1.1545,-.8212,-.03076,-1.2193,-.84664,-.02033,-1.28118,-.87855,-.03076,-1.33407,-.9138,-.06101,-1.3728,-.94894,-.10814,-1.39358,-.98052,-.16752,-1.33757,-1.11565,-.19799,-1.31624,-1.13039,-.26343,-1.27797,-1.13262,-.32247,-1.2265,-1.12211,-.36933,-1.16686,-1.09988,-.39941,-1.1049,-1.06813,-.40978,-1.04667,-1.02994,-.39941,-.99789,-.98907,-.36933,-.96332,-.94951,-.32247,-.94635,-.91513,-.26343,-.94864,-.8893,-.19799,-.96996,-.87455,-.13254,-1.00823,-.87233,-.0735,-1.05971,-.88284,-.02664,-1.11935,-.90506,.00344,-1.18131,-.93682,.0138,-1.23953,-.97501,.00344,-1.28832,-1.01588,-.02664,-1.32289,-1.05544,-.0735,-1.33986,-1.08982,-.13254,-1.26937,-1.22009,-.16073,-1.24613,-1.23328,-.22585,-1.20736,-1.2322,-.2846,-1.15687,-1.21697,-.33123,-1.09959,-1.18906,-.36116,-1.04114,-1.15122,-.37148,-.98722,-1.10715,-.36116,-.94313,-1.06116,-.33123,-.91317,-1.01775,-.2846,-.90029,-.98117,-.22585,-.90573,-.95501,-.16073,-.92897,-.94182,-.0956,-.96774,-.9429,-.03685,-1.01823,-.95813,.00978,-1.07551,-.98604,.03971,-1.13397,-1.02388,.05003,-1.18788,-1.06795,.03971,-1.23197,-1.11395,.00978,-1.26193,-1.15735,-.03685,-1.27481,-1.19393,-.0956,-1.19038,-1.31743,-.12192,-1.16544,-1.32865,-.18679,-1.12659,-1.32402,-.24531,-1.07762,-1.304,-.29175,-1.02333,-1.27055,-.32156,-.96903,-1.22695,-.33184,-.92003,-1.17745,-.32156,-.88115,-1.12692,-.29175,-.85617,-1.08028,-.24531,-.84754,-1.04211,-.18679,-.85612,-1.01615,-.12192,-.88105,-1.00493,-.05705,-.91991,-1.00956,.00147,-.96888,-1.02958,.04791,-1.02317,-1.06303,.07773,-1.07747,-1.10663,.088,-1.12646,-1.15613,.07773,-1.16535,-1.20667,.04791,-1.19033,-1.2533,.00147,-1.19895,-1.29147,-.05705,-1.10139,-1.40637,-.08194,-1.07507,-1.41526,-.14662,-1.03658,-1.4069,-.20497,-.98971,-1.38213,-.25127,-.93902,-1.34336,-.281,-.8895,-1.2944,-.29125,-.84598,-1.24002,-.281,-.81272,-1.18556,-.25127,-.79299,-1.13635,-.20497,-.7887,-1.0972,-.14662,-.80029,-1.07195,-.08194,-.82662,-1.06307,-.01726,-.8651,-1.07142,.04109,-.91198,-1.09619,.0874,-.96266,-1.13496,.11713,-1.01219,-1.18393,.12737,-1.05571,-1.2383,.11713,-1.08896,-1.29276,.0874,-1.1087,-1.34197,.04109,-1.11298,-1.38112,-.01726,-1.00339,-1.48574,-.04117,-.97605,-1.492,-.10573,-.93843,-1.47983,-.16398,-.89423,-1.45042,-.2102,-.84777,-1.40665,-.23988,-.80359,-1.3528,-.25011,-.76602,-1.29415,-.23988,-.73874,-1.23644,-.2102,-.72442,-1.18532,-.16398,-.72446,-1.14578,-.10573,-.73885,-1.12171,-.04117,-.7662,-1.11545,.0234,-.80381,-1.12763,.08164,-.84801,-1.15704,.12787,-.89448,-1.20081,.15755,-.93865,-1.25465,.16777,-.97622,-1.3133,.15755,-1.0035,-1.37101,.12787,-1.01782,-1.42213,.08164,-1.01779,-1.46167,.0234,-.8975,-1.55452,-0,-.86957,-1.55793,-.06453,-.83336,-1.54193,-.12274,-.79242,-1.50809,-.16894,-.75075,-1.45972,-.1986,-.71243,-1.40156,-.20882,-.68122,-1.33929,-.1986,-.66017,-1.27902,-.16894,-.65133,-1.22664,-.12274,-.65558,-1.18729,-.06453,-.6725,-1.1648,-0,-.70043,-1.16139,.06453,-.73664,-1.17739,.12274,-.77758,-1.21123,.16894,-.81925,-1.2596,.1986,-.85757,-1.31776,.20882,-.88878,-1.38003,.1986,-.90983,-1.4403,.16894,-.91867,-1.49268,.12274,-.91442,-1.53203,.06453,-.785,-1.61183,.04117,-.75695,-1.61226,-.0234,-.72269,-1.59253,-.08164,-.68558,-1.55456,-.12787,-.64924,-1.50208,-.15755,-.61723,-1.44022,-.16777,-.59269,-1.37504,-.15755,-.57802,-1.31292,-.12787,-.57465,-1.25993,-.08164,-.58291,-1.22127,-.0234,-.602,-1.20072,.04117,-.63005,-1.20029,.10573,-.6643,-1.22002,.16398,-.70142,-1.25799,.2102,-.73776,-1.31047,.23988,-.76977,-1.37233,.25011,-.79431,-1.43751,.23988,-.80898,-1.49963,.2102,-.81235,-1.55262,.16398,-.80409,-1.59128,.10573,-.66726,-1.65702,.08194,-.63959,-1.65443,.01726,-.60783,-1.63115,-.04109,-.57508,-1.58945,-.0874,-.54455,-1.53342,-.11713,-.51922,-1.46854,-.12737,-.50157,-1.40117,-.11713,-.49334,-1.33789,-.0874,-.49533,-1.28491,-.04109,-.50734,-1.2474,.01726,-.52819,-1.22905,.08194,-.55586,-1.23164,.14662,-.58762,-1.25492,.20497,-.62037,-1.29662,.25127,-.6509,-1.35265,.281,-.67623,-1.41753,.29125,-.69388,-1.4849,.281,-.70211,-1.54818,.25127,-.70012,-1.60116,.20497,-.68811,-1.63867,.14662,-.54574,-1.68961,.12192,-.51897,-1.68406,.05705,-.49023,-1.65751,-.00147,-.46233,-1.61256,-.04791,-.43801,-1.55361,-.07773,-.41964,-1.48643,-.088,-.40902,-1.41761,-.07773,-.4072,-1.35386,-.04791,-.41435,-1.30144,-.00147,-.42977,-1.26548,.05705,-.45195,-1.2495,.12192,-.47873,-1.25505,.18679,-.50747,-1.2816,.24531,-.53537,-1.32655,.29175,-.55969,-1.3855,.32156,-.57806,-1.45268,.33184,-.58867,-1.5215,.32156,-.59049,-1.58525,.29175,-.58334,-1.63767,.24531,-.56792,-1.67363,.18679,-.42195,-1.70935,.16073,-.39657,-1.70099,.0956,-.37133,-1.67154,.03685,-.34872,-1.62389,-.00978,-.33093,-1.56271,-.03971,-.31972,-1.49398,-.05003,-.31618,-1.42444,-.03971,-.32065,-1.36088,-.00978,-.3327,-1.30954,.03685,-.35115,-1.27543,.0956,-.3742,-1.26189,.16073,-.39958,-1.27026,.22585,-.42481,-1.29971,.2846,-.44742,-1.34735,.33123,-.46521,-1.40853,.36116,-.47642,-1.47726,.37148,-.47996,-1.54681,.36116,-.47549,-1.61036,.33123,-.46344,-1.66171,.2846,-.44499,-1.69582,.22585,-.29739,-1.71619,.19799,-.27388,-1.70526,.13254,-.2526,-1.67337,.0735,-.23562,-1.62366,.02664,-.22461,-1.56097,-.00344,-.22066,-1.49145,-.0138,-.22413,-1.42191,-.00344,-.23471,-1.35915,.02664,-.25134,-1.30932,.0735,-.27241,-1.27729,.13254,-.29584,-1.26619,.19799,-.31935,-1.27713,.26343,-.34064,-1.30901,.32247,-.35761,-1.35873,.36933,-.36862,-1.42142,.39941,-.37258,-1.49093,.40978,-.3691,-1.56047,.39941,-.35853,-1.62323,.36933,-.34189,-1.67307,.32247,-.32083,-1.7051,.26343,-.17357,-1.7103,.23334,-.15237,-1.69714,.16752,-.1354,-1.66335,.10814,-.12434,-1.61224,.06101,-.12026,-1.54881,.03076,-.12356,-1.47927,.02033,-.13393,-1.41042,.03076,-.15034,-1.34902,.06101,-.17119,-1.30106,.10814,-.19443,-1.27124,.16752,-.2178,-1.26248,.23334,-.23901,-1.27564,.29916,-.25597,-1.30943,.35854,-.26704,-1.36054,.40567,-.27112,-1.42397,.43592,-.26781,-1.49352,.44635,-.25745,-1.56236,.43592,-.24104,-1.62377,.40567,-.22019,-1.67173,.35854,-.19694,-1.70154,.29916,-.05192,-1.69206,.26645,-.0334,-1.67708,.2002,-.02106,-1.64199,.14044,-.01609,-1.5902,.09301,-.01899,-1.5268,.06256,-.02947,-1.45798,.05207,-.04651,-1.39049,.06256,-.06843,-1.33093,.09301,-.0931,-1.28513,.14044,-.1181,-1.25757,.2002,-.14098,-1.25096,.26645,-.15949,-1.26593,.33269,-.17184,-1.30103,.39245,-.17681,-1.35281,.43988,-.17391,-1.41621,.47033,-.16343,-1.48503,.48082,-.14639,-1.55252,.47033,-.12446,-1.61208,.43988,-.09979,-1.65788,.39245,-.0748,-1.68544,.33269,.0662,-1.66202,.29698,.08172,-1.64573,.23028,.08924,-1.60997,.17011,.08802,-1.55826,.12236,.07819,-1.49566,.0917,.0607,-1.4283,.08113,.03727,-1.36276,.0917,.01019,-1.30547,.12236,-.01788,-1.26203,.17011,-.04421,-1.2367,.23028,-.0662,-1.23195,.29698,-.08172,-1.24824,.36369,-.08924,-1.284,.42386,-.08802,-1.33571,.47161,-.07819,-1.39831,.50227,-.0607,-1.46567,.51284,-.03727,-1.53121,.50227,-.01019,-1.5885,.47161,.01788,-1.63194,.42386,.04421,-1.65727,.36369,.17955,-1.62095,.32466,.19183,-1.60387,.25749,.19441,-1.56814,.19688,.18701,-1.51727,.14879,.17038,-1.45623,.11791,.14614,-1.391,.10727,.11667,-1.32797,.11791,.08484,-1.2733,.14879,.05377,-1.23234,.19688,.02651,-1.20911,.25749,.00573,-1.20588,.32466,-.00656,-1.22296,.39184,-.00913,-1.25868,.45245,-.00173,-1.30955,.50054,.0149,-1.37059,.53142,.03913,-1.43582,.54206,.06861,-1.49886,.53142,.10044,-1.55353,.50054,.13151,-1.59448,.45245,.15877,-1.61771,.39184,.28702,-1.56972,.34922,.29592,-1.55245,.28156,.29352,-1.51746,.22052,.28006,-1.46818,.17208,.25687,-1.40944,.14098,.2262,-1.34699,.13026,.19107,-1.28694,.14098,.15491,-1.23516,.17208,.12126,-1.19673,.22052,.09341,-1.17541,.28156,.0741,-1.17329,.34922,.06521,-1.19056,.41688,.0676,-1.22555,.47792,.08106,-1.27483,.52635,.10425,-1.33357,.55745,.13492,-1.39602,.56817,.17005,-1.45607,.55745,.20621,-1.50785,.52635,.23986,-1.54628,.47792,.26771,-1.5676,.41688,.38766,-1.50938,.37041,.39311,-1.49253,.30228,.38582,-1.45899,.24082,.36651,-1.41204,.19204,.33706,-1.3563,.16072,.30036,-1.2972,.14993,.26,-1.24054,.16072,.21994,-1.19186,.19204,.18409,-1.15593,.24082,.15596,-1.13626,.30228,.1383,-1.13479,.37041,.13285,-1.15164,.43854,.14014,-1.18519,.5,.15945,-1.23213,.54877,.1889,-1.28787,.58009,.2256,-1.34697,.59088,.26595,-1.40363,.58009,.30602,-1.45231,.54877,.34187,-1.48824,.5,.37,-1.50791,.43854,.48067,-1.44106,.38803,.48271,-1.42525,.31946,.47071,-1.39386,.25761,.44584,-1.34996,.20852,.41054,-1.29784,.177,.36825,-1.24262,.16614,.32313,-1.18969,.177,.27958,-1.14424,.20852,.24188,-1.11071,.25761,.2137,-1.09239,.31946,.19781,-1.09107,.38803,.19577,-1.10688,.4566,.20777,-1.13827,.51845,.23264,-1.18217,.56754,.26795,-1.23429,.59906,.31023,-1.28951,.60992,.35535,-1.34244,.59906,.3989,-1.38789,.56754,.43661,-1.42142,.51845,.46478,-1.43974,.4566,.56545,-1.36597,.40191,.56422,-1.35183,.33297,.54778,-1.32326,.27077,.51774,-1.28305,.2214,.47704,-1.23515,.18971,.42966,-1.18424,.17879,.38025,-1.13531,.18971,.33363,-1.09314,.2214,.29438,-1.06186,.27077,.26633,-1.04454,.33297,.25224,-1.04287,.40191,.25347,-1.05701,.47086,.26991,-1.08558,.53306,.29995,-1.12579,.58243,.34065,-1.17369,.61412,.38803,-1.2246,.62504,.43744,-1.27353,.61412,.48406,-1.3157,.58243,.52331,-1.34698,.53306,.55136,-1.3643,.47086,.6416,-1.28537,.41193,.63732,-1.27349,.34268,.61679,-1.24837,.2802,.58204,-1.21246,.23062,.53646,-1.16928,.19879,.48452,-1.12305,.18782,.4313,-1.0783,.19879,.382,-1.03941,.23062,.34146,-1.01018,.2802,.31365,-.99349,.34268,.30128,-.99095,.41193,.30557,-1.00283,.48118,.32609,-1.02795,.54366,.36085,-1.06386,.59324,.40642,-1.10705,.62507,.45837,-1.15328,.63604,.51159,-1.19803,.62507,.56088,-1.23692,.59324,.60142,-1.26614,.54366,.62923,-1.28284,.48118,.70889,-1.20055,.41798,.70185,-1.1915,.34852,.67768,-1.17039,.28586,.63875,-1.13929,.23614,.58886,-1.10125,.20421,.5329,-1.05998,.19321,.47635,-1.01953,.20421,.42473,-.98386,.23614,.38312,-.95645,.28586,.35557,-.94,.34852,.34479,-.9361,.41798,.35183,-.94515,.48743,.376,-.96626,.55009,.41493,-.99736,.59982,.46482,-1.0354,.63174,.52078,-1.07667,.64274,.57733,-1.11712,.63174,.62895,-1.15279,.59982,.67056,-1.1802,.55009,.69811,-1.19665,.48743,.76728,-1.11277,.42,.75787,-1.10705,.35047,.73056,-1.09046,.28775,.68802,-1.06461,.23797,.63442,-1.03204,.20601,.575,-.99593,.195,.51558,-.95982,.20601,.46198,-.92725,.23797,.41944,-.9014,.28775,.39213,-.88481,.35047,.38272,-.87909,.42,.39213,-.88481,.48953,.41944,-.9014,.55225,.46198,-.92725,.60203,.51558,-.95982,.63399,.575,-.99593,.645,.63442,-1.03204,.63399,.68802,-1.06461,.60203,.73056,-1.09046,.55225,.75787,-1.10705,.48953,.81693,-1.02329,.41798,.80558,-1.02133,.34853,.77568,-1.00965,.28588,.73015,-.98939,.23616,.67345,-.96252,.20424,.61113,-.93169,.19324,.54929,-.8999,.20424,.49398,-.87027,.23616,.45062,-.8457,.28588,.42346,-.8286,.34853,.41514,-.82064,.41798,.42649,-.82259,.48742,.45639,-.83427,.55007,.50192,-.85453,.59979,.55862,-.8814,.63171,.62094,-.91223,.64271,.68278,-.94402,.63171,.73809,-.97365,.59979,.78144,-.99822,.55007,.80861,-1.01532,.48742,.85814,-.93327,.41193,.84533,-.93544,.34274,.81342,-.92898,.28033,.76553,-.91453,.2308,.70636,-.8935,.199,.64168,-.86796,.18804,.57784,-.8404,.199,.52108,-.81352,.2308,.47696,-.78995,.28033,.44979,-.772,.34274,.44225,-.76143,.41193,.45506,-.75926,.48112,.48697,-.76572,.54353,.53486,-.78017,.59306,.59403,-.8012,.62486,.65871,-.82674,.63582,.72255,-.8543,.62486,.77931,-.88118,.59306,.82343,-.90475,.54353,.8506,-.9227,.48112,.8914,-.84383,.40191,.87763,-.85037,.33319,.8443,-.84933,.27119,.79468,-.84082,.22199,.73362,-.82566,.1904,.66711,-.80534,.17952,.60165,-.78185,.1904,.54365,-.75749,.22199,.49878,-.73465,.27119,.47145,-.71555,.33319,.46432,-.70207,.40191,.47809,-.69553,.47064,.51142,-.69657,.53264,.56104,-.70509,.58184,.6221,-.72024,.61343,.68861,-.74056,.62431,.75407,-.76405,.61343,.81208,-.78841,.58184,.85694,-.81126,.53264,.88427,-.83036,.47064,.91733,-.75597,.38803,.90308,-.76704,.31999,.86891,-.7715,.2586,.81816,-.76892,.20989,.75579,-.75955,.17861,.68792,-.74429,.16783,.62118,-.72466,.17861,.56211,-.70256,.20989,.51649,-.68017,.2586,.48879,-.65967,.31999,.48172,-.64307,.38803,.49596,-.632,.45607,.53013,-.62754,.51746,.58089,-.63012,.56617,.64325,-.6395,.59745,.71112,-.65475,.60822,.77786,-.67438,.59745,.83693,-.69648,.56617,.88255,-.71887,.51746,.91025,-.73937,.45607,.93664,-.67057,.37041,.92239,-.68623,.30327,.8879,-.69616,.24271,.83657,-.69939,.19465,.77341,-.6956,.16379,.70461,-.68517,.15315,.6369,-.66911,.16379,.57691,-.649,.19465,.53051,-.62681,.24271,.50225,-.6047,.30327,.49488,-.58485,.37041,.50914,-.56919,.43754,.54362,-.55926,.49811,.59495,-.55603,.54617,.65811,-.55981,.57703,.72691,-.57025,.58766,.79462,-.5863,.57703,.85461,-.60641,.54617,.90101,-.62861,.49811,.92928,-.65071,.43754,.95018,-.58839,.34922,.93631,-.60858,.28322,.90198,-.62382,.22368,.85055,-.63263,.17644,.78704,-.63413,.1461,.71768,-.62818,.13565,.64926,-.61537,.1461,.58846,-.59694,.17644,.54126,-.5747,.22368,.51225,-.55083,.28322,.50429,-.52767,.34922,.51816,-.50748,.41521,.55249,-.49223,.47475,.60392,-.48343,.522,.66743,-.48193,.55233,.73679,-.48787,.56279,.80521,-.50069,.55233,.86601,-.51912,.522,.91322,-.54135,.47475,.94222,-.56522,.41521,.95883,-.51005,.32466,.94568,-.53462,.26002,.91187,-.55492,.20171,.86071,-.56894,.15543,.79721,-.57533,.12572,.72759,-.57344,.11548,.65866,-.56348,.12572,.59717,-.54641,.15543,.54913,-.5239,.20171,.51926,-.49816,.26002,.51047,-.47171,.32466,.52362,-.44713,.38931,.55743,-.42684,.44762,.60859,-.41281,.4939,.67209,-.40643,.52361,.74171,-.40831,.53385,.81064,-.41827,.52361,.87213,-.43535,.4939,.92017,-.45785,.44762,.95004,-.48359,.38931,.96353,-.43603,.29698,.95129,-.46474,.23389,.91825,-.48972,.17697,.86763,-.5085,.1318,.8044,-.51926,.10279,.73473,-.52094,.0928,.66546,-.51338,.10279,.60336,-.49731,.1318,.55452,-.47431,.17697,.5237,-.44664,.23389,.51393,-.41699,.29698,.52617,-.38827,.36008,.55922,-.3633,.417,.60983,-.34451,.46217,.67307,-.33375,.49118,.74273,-.33207,.50117,.812,-.33964,.49118,.8741,-.3557,.46217,.92295,-.3787,.417,.95376,-.40638,.36008,.96522,-.36665,.26645,.95397,-.39918,.20504,.9218,-.42837,.14964,.87186,-.45136,.10568,.80903,-.4659,.07745,.73946,-.47057,.06773,.66997,-.4649,.07745,.60736,-.44946,.10568,.55775,-.42576,.14964,.526,-.39611,.20504,.51523,-.36342,.26645,.52647,-.33089,.32785,.55864,-.3017,.38325,.60859,-.27871,.42721,.67141,-.26417,.45544,.74098,-.25951,.46516,.81047,-.26517,.45544,.87308,-.28061,.42721,.92269,-.30432,.38325,.95444,-.33396,.32785,.96478,-.30209,.23334,.95447,-.33804,.1737,.92314,-.3709,.1199,.87387,-.39745,.07721,.81147,-.41509,.0498,.74207,-.4221,.04035,.67244,-.41778,.0498,.60941,-.40257,.07721,.55915,-.37795,.1199,.52657,-.34633,.1737,.51487,-.3108,.23334,.52519,-.27485,.29298,.55652,-.24199,.34678,.60579,-.21544,.38947,.66818,-.1978,.41688,.73759,-.19079,.42633,.80721,-.19511,.41688,.87024,-.21032,.38947,.92051,-.23494,.34678,.95308,-.26656,.29298,.96307,-.24233,.19799,.95348,-.28125,.14012,.92282,-.31717,.08791,.87409,-.34657,.04648,.81206,-.36658,.01988,.7428,-.37523,.01072,.67309,-.37168,.01988,.60976,-.35628,.04648,.55901,-.33053,.08791,.52579,-.29696,.14012,.51337,-.25885,.19799,.52296,-.21993,.25586,.55362,-.18401,.30806,.60235,-.15461,.34949,.66438,-.13461,.37609,.73364,-.12595,.38526,.80335,-.1295,.37609,.86668,-.1449,.34949,.91744,-.17065,.30806,.95065,-.20422,.25586,.96078,-.18717,.16073,.95161,-.22856,.10452,.92133,-.26687,.05382,.87291,-.29837,.01358,.81109,-.31996,-.01225,.74192,-.32954,-.02115,.67217,-.32616,-.01225,.60867,-.31017,.01358,.55763,-.28311,.05382,.52406,-.24765,.10452,.51123,-.20725,.16073,.52041,-.16587,.21693,.55069,-.12756,.26763,.59911,-.09606,.30787,.66093,-.07447,.3337,.7301,-.06489,.34261,.79985,-.06826,.3337,.86335,-.08426,.30787,.91438,-.11131,.26763,.94796,-.14677,.21693,.9585,-.13618,.12192,.94936,-.17948,.06717,.91911,-.21949,.01778,.87071,-.2523,-.02141,.8089,-.27471,-.04658,.73973,-.28451,-.05525,.66997,-.28074,-.04658,.60645,-.26378,-.02141,.55539,-.23529,.01778,.52178,-.19805,.06717,.50892,-.15571,.12192,.51806,-.11241,.17667,.54832,-.0724,.22606,.59671,-.03958,.26525,.65852,-.01718,.29042,.72769,-.00738,.29909,.79745,-.01115,.29042,.86097,-.0281,.26525,.91203,-.0566,.22606,.94564,-.09384,.17667,.95663,-.08866,.08194,.94713,-.13329,.02833,.91655,-.17429,-.02004,.86788,-.20767,-.05842,.80589,-.23014,-.08306,.73664,-.23952,-.09155,.66691,-.23489,-.08306,.60353,-.21669,-.05842,.5527,-.18671,-.02004,.5194,-.14788,.02833,.50689,-.10401,.08194,.51638,-.05939,.13555,.54696,-.01838,.18391,.59563,.01499,.22229,.65762,.03747,.24694,.72687,.04685,.25543,.7966,.04221,.24694,.85998,.02401,.22229,.91081,-.00597,.18391,.94411,-.04479,.13555,.95542,-.04367,.04117,.94525,-.089,-.01172,.91406,-.13031,-.05943,.86489,-.16355,-.09729,.80257,-.18547,-.1216,.73319,-.19391,-.12998,.66354,-.18807,-.1216,.60044,-.1685,-.09729,.55006,-.13712,-.05943,.51735,-.09701,-.01172,.50549,-.05209,.04117,.51566,-.00675,.09405,.54685,.03456,.14176,.59602,.0678,.17963,.65834,.08971,.20394,.72772,.09816,.21231,.79737,.09231,.20394,.86047,.07274,.17963,.91085,.04137,.14176,.94356,.00125,.09405,.955,-0,0,.94399,-.04543,-.05264,.91203,-.08641,-.10012,.86225,-.11893,-.13781,.79953,-.13981,-.162,.73,-.147,-.17034,.66047,-.13981,-.162,.59775,-.11893,-.13781,.54797,-.08641,-.10012,.51601,-.04543,-.05264,.505,-0,0,.51601,.04543,.05264,.54797,.08641,.10012,.59775,.11893,.13781,.66047,.13981,.162,.73,.147,.17034,.79953,.13981,.162,.86225,.11893,.13781,.91203,.08641,.10012,.94399,.04543,.05264,.95542,.04367,-.04117,.94356,-.00125,-.09405,.91085,-.04137,-.14176,.86047,-.07274,-.17963,.79737,-.09231,-.20394,.72772,-.09816,-.21231,.65834,-.08971,-.20394,.59602,-.0678,-.17963,.54685,-.03456,-.14176,.51566,.00675,-.09405,.50549,.05209,-.04117,.51735,.09701,.01172,.55006,.13712,.05943,.60044,.1685,.09729,.66354,.18807,.1216,.73319,.19391,.12998,.80257,.18547,.1216,.86489,.16355,.09729,.91406,.13031,.05943,.94525,.089,.01172,.95663,.08866,-.08194,.94411,.04479,-.13555,.91081,.00597,-.18391,.85998,-.02401,-.22229,.7966,-.04221,-.24694,.72687,-.04685,-.25543,.65762,-.03747,-.24694,.59563,-.01499,-.22229,.54696,.01838,-.18391,.51638,.05939,-.13555,.50689,.10401,-.08194,.5194,.14788,-.02833,.5527,.18671,.02004,.60353,.21669,.05842,.66691,.23489,.08306,.73664,.23952,.09155,.80589,.23014,.08306,.86788,.20767,.05842,.91655,.17429,.02004,.94713,.13329,-.02833,.9585,.13618,-.12192,.94564,.09384,-.17667,.91203,.0566,-.22606,.86097,.0281,-.26525,.79745,.01115,-.29042,.72769,.00738,-.29909,.65852,.01718,-.29042,.59671,.03958,-.26525,.54832,.0724,-.22606,.51806,.11241,-.17667,.50892,.15571,-.12192,.52178,.19805,-.06717,.55539,.23529,-.01778,.60645,.26378,.02141,.66997,.28074,.04658,.73973,.28451,.05525,.8089,.27471,.04658,.87071,.2523,.02141,.91911,.21949,-.01778,.94936,.17948,-.06717,.96078,.18717,-.16073,.94796,.14677,-.21693,.91438,.11131,-.26763,.86335,.08426,-.30787,.79985,.06826,-.3337,.7301,.06489,-.34261,.66093,.07447,-.3337,.59911,.09606,-.30787,.55069,.12756,-.26763,.52041,.16587,-.21693,.51123,.20725,-.16073,.52406,.24765,-.10452,.55763,.28311,-.05382,.60867,.31017,-.01358,.67217,.32616,.01225,.74192,.32954,.02115,.81109,.31996,.01225,.87291,.29837,-.01358,.92133,.26687,-.05382,.95161,.22856,-.10452,.96307,.24233,-.19799,.95065,.20422,-.25586,.91744,.17065,-.30806,.86668,.1449,-.34949,.80335,.1295,-.37609,.73364,.12595,-.38526,.66438,.13461,-.37609,.60235,.15461,-.34949,.55362,.18401,-.30806,.52296,.21993,-.25586,.51337,.25885,-.19799,.52579,.29696,-.14012,.55901,.33053,-.08791,.60976,.35628,-.04648,.67309,.37168,-.01988,.7428,.37523,-.01072,.81206,.36658,-.01988,.87409,.34657,-.04648,.92282,.31717,-.08791,.95348,.28125,-.14012,.96478,.30209,-.23334,.95308,.26656,-.29298,.92051,.23494,-.34678,.87024,.21032,-.38947,.80721,.19511,-.41688,.73759,.19079,-.42633,.66818,.1978,-.41688,.60579,.21544,-.38947,.55652,.24199,-.34678,.52519,.27485,-.29298,.51487,.3108,-.23334,.52657,.34633,-.1737,.55915,.37795,-.1199,.60941,.40257,-.07721,.67244,.41778,-.0498,.74207,.4221,-.04035,.81147,.41509,-.0498,.87387,.39745,-.07721,.92314,.3709,-.1199,.95447,.33804,-.1737,.96522,.36665,-.26645,.95444,.33396,-.32785,.92269,.30432,-.38325,.87308,.28061,-.42721,.81047,.26517,-.45544,.74098,.25951,-.46516,.67141,.26417,-.45544,.60859,.27871,-.42721,.55864,.3017,-.38325,.52647,.33089,-.32785,.51523,.36342,-.26645,.526,.39611,-.20504,.55775,.42576,-.14964,.60736,.44946,-.10568,.66997,.4649,-.07745,.73946,.47057,-.06773,.80903,.4659,-.07745,.87186,.45136,-.10568,.9218,.42837,-.14964,.95397,.39918,-.20504,.96353,.43603,-.29698,.95376,.40638,-.36008,.92295,.3787,-.417,.8741,.3557,-.46217,.812,.33964,-.49118,.74273,.33207,-.50117,.67307,.33375,-.49118,.60983,.34451,-.46217,.55922,.3633,-.417,.52617,.38827,-.36008,.51393,.41699,-.29698,.5237,.44664,-.23389,.55452,.47431,-.17697,.60336,.49731,-.1318,.66546,.51338,-.10279,.73473,.52094,-.0928,.8044,.51926,-.10279,.86763,.5085,-.1318,.91825,.48972,-.17697,.95129,.46474,-.23389,.95883,.51005,-.32466,.95004,.48359,-.38931,.92017,.45785,-.44762,.87213,.43535,-.4939,.81064,.41827,-.52361,.74171,.40831,-.53385,.67209,.40643,-.52361,.60859,.41281,-.4939,.55743,.42684,-.44762,.52362,.44713,-.38931,.51047,.47171,-.32466,.51926,.49816,-.26002,.54913,.5239,-.20171,.59717,.54641,-.15543,.65866,.56348,-.12572,.72759,.57344,-.11548,.79721,.57533,-.12572,.86071,.56894,-.15543,.91187,.55492,-.20171,.94568,.53462,-.26002,.95018,.58839,-.34922,.94222,.56522,-.41521,.91322,.54135,-.47475,.86601,.51912,-.522,.80521,.50069,-.55233,.73679,.48787,-.56279,.66743,.48193,-.55233,.60392,.48343,-.522,.55249,.49223,-.47475,.51816,.50748,-.41521,.50429,.52767,-.34922,.51225,.55083,-.28322,.54126,.5747,-.22368,.58846,.59694,-.17644,.64926,.61537,-.1461,.71768,.62818,-.13565,.78704,.63413,-.1461,.85055,.63263,-.17644,.90198,.62382,-.22368,.93631,.60858,-.28322,.93664,.67057,-.37041,.92928,.65071,-.43754,.90101,.62861,-.49811,.85461,.60641,-.54617,.79462,.5863,-.57703,.72691,.57025,-.58766,.65811,.55981,-.57703,.59495,.55603,-.54617,.54362,.55926,-.49811,.50914,.56919,-.43754,.49488,.58485,-.37041,.50225,.6047,-.30327,.53051,.62681,-.24271,.57691,.649,-.19465,.6369,.66911,-.16379,.70461,.68517,-.15315,.77341,.6956,-.16379,.83657,.69939,-.19465,.8879,.69616,-.24271,.92239,.68623,-.30327,.91733,.75597,-.38803,.91025,.73937,-.45607,.88255,.71887,-.51746,.83693,.69648,-.56617,.77786,.67438,-.59745,.71112,.65475,-.60822,.64325,.6395,-.59745,.58089,.63012,-.56617,.53013,.62754,-.51746,.49596,.632,-.45607,.48172,.64307,-.38803,.48879,.65967,-.31999,.51649,.68017,-.2586,.56211,.70256,-.20989,.62118,.72466,-.17861,.68792,.74429,-.16783,.75579,.75955,-.17861,.81816,.76892,-.20989,.86891,.7715,-.2586,.90308,.76704,-.31999,.8914,.84383,-.40191,.88427,.83036,-.47064,.85694,.81126,-.53264,.81208,.78841,-.58184,.75407,.76405,-.61343,.68861,.74056,-.62431,.6221,.72024,-.61343,.56104,.70509,-.58184,.51142,.69657,-.53264,.47809,.69553,-.47064,.46432,.70207,-.40191,.47145,.71555,-.33319,.49878,.73465,-.27119,.54365,.75749,-.22199,.60165,.78185,-.1904,.66711,.80534,-.17952,.73362,.82566,-.1904,.79468,.84082,-.22199,.8443,.84933,-.27119,.87763,.85037,-.33319,.85814,.93327,-.41193,.8506,.9227,-.48112,.82343,.90475,-.54353,.77931,.88118,-.59306,.72255,.8543,-.62486,.65871,.82674,-.63582,.59403,.8012,-.62486,.53486,.78017,-.59306,.48697,.76572,-.54353,.45506,.75926,-.48112,.44225,.76143,-.41193,.44979,.772,-.34274,.47696,.78995,-.28033,.52108,.81352,-.2308,.57784,.8404,-.199,.64168,.86796,-.18804,.70636,.8935,-.199,.76553,.91453,-.2308,.81342,.92898,-.28033,.84533,.93544,-.34274,.81693,1.02329,-.41798,.80861,1.01532,-.48742,.78144,.99822,-.55007,.73809,.97365,-.59979,.68278,.94402,-.63171,.62094,.91223,-.64271,.55862,.8814,-.63171,.50192,.85453,-.59979,.45639,.83427,-.55007,.42649,.82259,-.48742,.41514,.82064,-.41798,.42346,.8286,-.34853,.45062,.8457,-.28588,.49398,.87027,-.23616,.54929,.8999,-.20424,.61113,.93169,-.19324,.67345,.96252,-.20424,.73015,.98939,-.23616,.77568,1.00965,-.28588,.80558,1.02133,-.34853,.76728,1.11277,-.42,.75787,1.10705,-.48953,.73056,1.09046,-.55225,.68802,1.06461,-.60203,.63442,1.03204,-.63399,.575,.99593,-.645,.51558,.95982,-.63399,.46198,.92725,-.60203,.41944,.9014,-.55225,.39213,.88481,-.48953,.38272,.87909,-.42,.39213,.88481,-.35047,.41944,.9014,-.28775,.46198,.92725,-.23797,.51558,.95982,-.20601,.575,.99593,-.195,.63442,1.03204,-.20601,.68802,1.06461,-.23797,.73056,1.09046,-.28775,.75787,1.10705,-.35047,.70889,1.20055,-.41798,.69811,1.19665,-.48743,.67056,1.1802,-.55009,.62895,1.15279,-.59982,.57733,1.11712,-.63174,.52078,1.07667,-.64274,.46482,1.0354,-.63174,.41493,.99736,-.59982,.376,.96626,-.55009,.35183,.94515,-.48743,.34479,.9361,-.41798,.35557,.94,-.34852,.38312,.95645,-.28586,.42473,.98386,-.23614,.47635,1.01953,-.20421,.5329,1.05998,-.19321,.58886,1.10125,-.20421,.63875,1.13929,-.23614,.67768,1.17039,-.28586,.70185,1.1915,-.34852,.6416,1.28537,-.41193,.62923,1.28284,-.48118,.60142,1.26614,-.54366,.56088,1.23692,-.59324,.51159,1.19803,-.62507,.45837,1.15328,-.63604,.40642,1.10705,-.62507,.36085,1.06386,-.59324,.32609,1.02795,-.54366,.30557,1.00283,-.48118,.30128,.99095,-.41193,.31365,.99349,-.34268,.34146,1.01018,-.2802,.382,1.03941,-.23062,.4313,1.0783,-.19879,.48452,1.12305,-.18782,.53646,1.16928,-.19879,.58204,1.21246,-.23062,.61679,1.24837,-.2802,.63732,1.27349,-.34268,.56545,1.36597,-.40191,.55136,1.3643,-.47086,.52331,1.34698,-.53306,.48406,1.3157,-.58243,.43744,1.27353,-.61412,.38803,1.2246,-.62504,.34065,1.17369,-.61412,.29995,1.12579,-.58243,.26991,1.08558,-.53306,.25347,1.05701,-.47086,.25224,1.04287,-.40191,.26633,1.04454,-.33297,.29438,1.06186,-.27077,.33363,1.09314,-.2214,.38025,1.13531,-.18971,.42966,1.18424,-.17879,.47704,1.23515,-.18971,.51774,1.28305,-.2214,.54778,1.32326,-.27077,.56422,1.35183,-.33297,.48067,1.44106,-.38803,.46478,1.43974,-.4566,.43661,1.42142,-.51845,.3989,1.38789,-.56754,.35535,1.34244,-.59906,.31023,1.28951,-.60992,.26795,1.23429,-.59906,.23264,1.18217,-.56754,.20777,1.13827,-.51845,.19577,1.10688,-.4566,.19781,1.09107,-.38803,.2137,1.09239,-.31946,.24188,1.11071,-.25761,.27958,1.14424,-.20852,.32313,1.18969,-.177,.36825,1.24262,-.16614,.41054,1.29784,-.177,.44584,1.34996,-.20852,.47071,1.39386,-.25761,.48271,1.42525,-.31946,.38766,1.50938,-.37041,.37,1.50791,-.43854,.34187,1.48824,-.5,.30602,1.45231,-.54877,.26595,1.40363,-.58009,.2256,1.34697,-.59088,.1889,1.28787,-.58009,.15945,1.23213,-.54877,.14014,1.18519,-.5,.13285,1.15164,-.43854,.1383,1.13479,-.37041,.15596,1.13626,-.30228,.18409,1.15593,-.24082,.21994,1.19186,-.19204,.26,1.24054,-.16072,.30036,1.2972,-.14993,.33706,1.3563,-.16072,.36651,1.41204,-.19204,.38582,1.45899,-.24082,.39311,1.49253,-.30228,.28702,1.56972,-.34922,.26771,1.5676,-.41688,.23986,1.54628,-.47792,.20621,1.50785,-.52635,.17005,1.45607,-.55745,.13492,1.39602,-.56817,.10425,1.33357,-.55745,.08106,1.27483,-.52635,.0676,1.22555,-.47792,.06521,1.19056,-.41688,.0741,1.17329,-.34922,.09341,1.17541,-.28156,.12126,1.19673,-.22052,.15491,1.23516,-.17208,.19107,1.28694,-.14098,.2262,1.34699,-.13026,.25687,1.40944,-.14098,.28006,1.46818,-.17208,.29352,1.51746,-.22052,.29592,1.55245,-.28156,.17955,1.62095,-.32466,.15877,1.61771,-.39184,.13151,1.59448,-.45245,.10044,1.55353,-.50054,.06861,1.49886,-.53142,.03913,1.43582,-.54206,.0149,1.37059,-.53142,-.00173,1.30955,-.50054,-.00913,1.25868,-.45245,-.00656,1.22296,-.39184,.00573,1.20588,-.32466,.02651,1.20911,-.25749,.05377,1.23234,-.19688,.08484,1.2733,-.14879,.11667,1.32797,-.11791,.14614,1.391,-.10727,.17038,1.45623,-.11791,.18701,1.51727,-.14879,.19441,1.56814,-.19688,.19183,1.60387,-.25749,.0662,1.66202,-.29698,.04421,1.65727,-.36369,.01788,1.63194,-.42386,-.01019,1.5885,-.47161,-.03727,1.53121,-.50227,-.0607,1.46567,-.51284,-.07819,1.39831,-.50227,-.08802,1.33571,-.47161,-.08924,1.284,-.42386,-.08172,1.24824,-.36369,-.0662,1.23195,-.29698,-.04421,1.2367,-.23028,-.01788,1.26203,-.17011,.01019,1.30547,-.12236,.03727,1.36276,-.0917,.0607,1.4283,-.08113,.07819,1.49566,-.0917,.08802,1.55826,-.12236,.08924,1.60997,-.17011,.08172,1.64573,-.23028,-.05192,1.69206,-.26645,-.0748,1.68544,-.33269,-.09979,1.65788,-.39245,-.12446,1.61208,-.43988,-.14639,1.55252,-.47033,-.16343,1.48503,-.48082,-.17391,1.41621,-.47033,-.17681,1.35281,-.43988,-.17184,1.30103,-.39245,-.15949,1.26593,-.33269,-.14098,1.25096,-.26645,-.1181,1.25757,-.2002,-.0931,1.28513,-.14044,-.06843,1.33093,-.09301,-.04651,1.39049,-.06256,-.02947,1.45798,-.05207,-.01899,1.5268,-.06256,-.01609,1.5902,-.09301,-.02106,1.64199,-.14044,-.0334,1.67708,-.2002,-.17357,1.7103,-.23334,-.19694,1.70154,-.29916,-.22019,1.67173,-.35854,-.24104,1.62377,-.40567,-.25745,1.56236,-.43592,-.26781,1.49352,-.44635,-.27112,1.42397,-.43592,-.26704,1.36054,-.40567,-.25597,1.30943,-.35854,-.23901,1.27564,-.29916,-.2178,1.26248,-.23334,-.19443,1.27124,-.16752,-.17119,1.30106,-.10814,-.15034,1.34902,-.06101,-.13393,1.41042,-.03076,-.12356,1.47927,-.02033,-.12026,1.54881,-.03076,-.12434,1.61224,-.06101,-.1354,1.66335,-.10814,-.15237,1.69714,-.16752,-.29739,1.71619,-.19799,-.32083,1.7051,-.26343,-.34189,1.67307,-.32247,-.35853,1.62323,-.36933,-.3691,1.56047,-.39941,-.37258,1.49093,-.40978,-.36862,1.42142,-.39941,-.35761,1.35873,-.36933,-.34064,1.30901,-.32247,-.31935,1.27713,-.26343,-.29584,1.26619,-.19799,-.27241,1.27729,-.13254,-.25134,1.30932,-.0735,-.23471,1.35915,-.02664,-.22413,1.42191,.00344,-.22066,1.49145,.0138,-.22461,1.56097,.00344,-.23562,1.62366,-.02664,-.2526,1.67337,-.0735,-.27388,1.70526,-.13254,-.42195,1.70935,-.16073,-.44499,1.69582,-.22585,-.46344,1.66171,-.2846,-.47549,1.61036,-.33123,-.47996,1.54681,-.36116,-.47642,1.47726,-.37148,-.46521,1.40853,-.36116,-.44742,1.34735,-.33123,-.42481,1.29971,-.2846,-.39958,1.27026,-.22585,-.3742,1.26189,-.16073,-.35115,1.27543,-.0956,-.3327,1.30954,-.03685,-.32065,1.36088,.00978,-.31618,1.42444,.03971,-.31972,1.49398,.05003,-.33093,1.56271,.03971,-.34872,1.62389,.00978,-.37133,1.67154,-.03685,-.39657,1.70099,-.0956,-.54574,1.68961,-.12192,-.56792,1.67363,-.18679,-.58334,1.63767,-.24531,-.59049,1.58525,-.29175,-.58867,1.5215,-.32156,-.57806,1.45268,-.33184,-.55969,1.3855,-.32156,-.53537,1.32655,-.29175,-.50747,1.2816,-.24531,-.47873,1.25505,-.18679,-.45195,1.2495,-.12192,-.42977,1.26548,-.05705,-.41435,1.30144,.00147,-.4072,1.35386,.04791,-.40902,1.41761,.07773,-.41964,1.48643,.088,-.43801,1.55361,.07773,-.46233,1.61256,.04791,-.49023,1.65751,.00147,-.51897,1.68406,-.05705,-.66726,1.65702,-.08194,-.68811,1.63867,-.14662,-.70012,1.60116,-.20497,-.70211,1.54818,-.25127,-.69388,1.4849,-.281,-.67623,1.41753,-.29125,-.6509,1.35265,-.281,-.62037,1.29662,-.25127,-.58762,1.25492,-.20497,-.55586,1.23164,-.14662,-.52819,1.22905,-.08194,-.50734,1.2474,-.01726,-.49533,1.28491,.04109,-.49334,1.33789,.0874,-.50157,1.40117,.11713,-.51922,1.46854,.12737,-.54455,1.53342,.11713,-.57508,1.58945,.0874,-.60783,1.63115,.04109,-.63959,1.65443,-.01726,-.785,1.61183,-.04117,-.80409,1.59128,-.10573,-.81235,1.55262,-.16398,-.80898,1.49963,-.2102,-.79431,1.43751,-.23988,-.76977,1.37233,-.25011,-.73776,1.31047,-.23988,-.70142,1.25799,-.2102,-.6643,1.22002,-.16398,-.63005,1.20029,-.10573,-.602,1.20072,-.04117,-.58291,1.22127,.0234,-.57465,1.25993,.08164,-.57802,1.31292,.12787,-.59269,1.37504,.15755,-.61723,1.44022,.16777,-.64924,1.50208,.15755,-.68558,1.55456,.12787,-.72269,1.59253,.08164,-.75695,1.61226,.0234,-.8975,1.55452,-0,-.91442,1.53203,-.06453,-.91867,1.49268,-.12274,-.90983,1.4403,-.16894,-.88878,1.38003,-.1986,-.85757,1.31776,-.20882,-.81925,1.2596,-.1986,-.77758,1.21123,-.16894,-.73664,1.17739,-.12274,-.70043,1.16139,-.06453,-.6725,1.1648,-0,-.65558,1.18729,.06453,-.65133,1.22664,.12274,-.66017,1.27902,.16894,-.68122,1.33929,.1986,-.71243,1.40156,.20882,-.75075,1.45972,.1986,-.79242,1.50809,.16894,-.83336,1.54193,.12274,-.86957,1.55793,.06453,-1.00339,1.48574,.04117,-1.01779,1.46167,-.0234,-1.01782,1.42213,-.08164,-1.0035,1.37101,-.12787,-.97622,1.3133,-.15755,-.93865,1.25465,-.16777,-.89448,1.20081,-.15755,-.84801,1.15704,-.12787,-.80381,1.12763,-.08164,-.7662,1.11545,-.0234,-.73885,1.12171,.04117,-.72446,1.14578,.10573,-.72442,1.18532,.16398,-.73874,1.23644,.2102,-.76602,1.29415,.23988,-.80359,1.3528,.25011,-.84777,1.40665,.23988,-.89423,1.45042,.2102,-.93843,1.47983,.16398,-.97605,1.492,.10573,-1.10139,1.40637,.08194,-1.11298,1.38112,.01726,-1.1087,1.34197,-.04109,-1.08896,1.29276,-.0874,-1.05571,1.2383,-.11713,-1.01219,1.18393,-.12737,-.96266,1.13496,-.11713,-.91198,1.09619,-.0874,-.8651,1.07142,-.04109,-.82662,1.06307,.01726,-.80029,1.07195,.08194,-.7887,1.0972,.14662,-.79299,1.13635,.20497,-.81272,1.18556,.25127,-.84598,1.24002,.281,-.8895,1.2944,.29125,-.93902,1.34336,.281,-.98971,1.38213,.25127,-1.03658,1.4069,.20497,-1.07507,1.41526,.14662,-1.19038,1.31743,.12192,-1.19895,1.29147,.05705,-1.19033,1.2533,-.00147,-1.16535,1.20667,-.04791,-1.12646,1.15613,-.07773,-1.07747,1.10663,-.088,-1.02317,1.06303,-.07773,-.96888,1.02958,-.04791,-.91991,1.00956,-.00147,-.88105,1.00493,.05705,-.85612,1.01615,.12192,-.84754,1.04211,.18679,-.85617,1.08028,.24531,-.88115,1.12692,.29175,-.92003,1.17745,.32156,-.96903,1.22695,.33184,-1.02333,1.27055,.32156,-1.07762,1.304,.29175,-1.12659,1.32402,.24531,-1.16544,1.32865,.18679,-1.26937,1.22009,.16073,-1.27481,1.19393,.0956,-1.26193,1.15735,.03685,-1.23197,1.11395,-.00978,-1.18788,1.06795,-.03971,-1.13397,1.02388,-.05003,-1.07551,.98604,-.03971,-1.01823,.95813,-.00978,-.96774,.9429,.03685,-.92897,.94182,.0956,-.90573,.95501,.16073,-.90029,.98117,.22585,-.91317,1.01775,.2846,-.94313,1.06116,.33123,-.98722,1.10715,.36116,-1.04114,1.15122,.37148,-1.09959,1.18906,.36116,-1.15687,1.21697,.33123,-1.20736,1.2322,.2846,-1.24613,1.23328,.22585,-1.33757,1.11565,.19799,-1.33986,1.08982,.13254,-1.32289,1.05544,.0735,-1.28832,1.01588,.02664,-1.23953,.97501,-.00344,-1.18131,.93682,-.0138,-1.11935,.90506,-.00344,-1.05971,.88284,.02664,-1.00823,.87233,.0735,-.96996,.87455,.13254,-.94864,.8893,.19799,-.94635,.91513,.26343,-.96332,.94951,.32247,-.99789,.98907,.36933,-1.04667,1.02994,.39941,-1.1049,1.06813,.40978,-1.16686,1.09988,.39941,-1.2265,1.12211,.36933,-1.27797,1.13262,.32247,-1.31624,1.13039,.26343,-1.39438,1.00547,.23334,-1.39358,.98052,.16752,-1.3728,.94894,.10814,-1.33407,.9138,.06101,-1.28118,.87855,.03076,-1.2193,.84664,.02033,-1.1545,.8212,.03076,-1.09311,.8047,.06101,-1.04116,.79878,.10814,-1.00371,.804,.16752,-.98444,.81986,.23334,-.98523,.84481,.29916,-1.00601,.8764,.35854,-1.04475,.91153,.40567,-1.09764,.94678,.43592,-1.15952,.97869,.44635,-1.22432,1.00414,.43592,-1.2857,1.02063,.40567,-1.33766,1.02655,.35854,-1.37511,1.02133,.29916,-1.4394,.89099,.26645,-1.4357,.86747,.2002,-1.41148,.83923,.14044,-1.36911,.80903,.09301,-1.31275,.77984,.06256,-1.24792,.75451,.05207,-1.18095,.73552,.06256,-1.1184,.72473,.09301,-1.0664,.72319,.14044,-1.03004,.73106,.2002,-1.01287,.74757,.26645,-1.01658,.77109,.33269,-1.0408,.79933,.39245,-1.08317,.82952,.43988,-1.13952,.85872,.47033,-1.20436,.88405,.48082,-1.27133,.90304,.47033,-1.33387,.91383,.43988,-1.38587,.91537,.39245,-1.42224,.9075,.33269,-1.47246,.77368,.29698,-1.4661,.75209,.23028,-1.4389,.7277,.17011,-1.39351,.7029,.12236,-1.33438,.68012,.0917,-1.26729,.66158,.08113,-1.19882,.6491,.0917,-1.13567,.64391,.12236,-1.08401,.6465,.17011,-1.04891,.65663,.23028,-1.03379,.67331,.29698,-1.04015,.69489,.36369,-1.06736,.71928,.42386,-1.11275,.74408,.47161,-1.17188,.76687,.50227,-1.23896,.7854,.51284,-1.30743,.79788,.50227,-1.37058,.80308,.47161,-1.42224,.80048,.42386,-1.45734,.79035,.36369,-1.49356,.65497,.32466,-1.48491,.6358,.25749,-1.45525,.61571,.19688,-1.4075,.59668,.14879,-1.34633,.58056,.11791,-1.27772,.56894,.10727,-1.20839,.56295,.11791,-1.14513,.56318,.14879,-1.09413,.5696,.19688,-1.06038,.58159,.25749,-1.04718,.59798,.32466,-1.05584,.61716,.39184,-1.08549,.63724,.45245,-1.13324,.65628,.50054,-1.19441,.6724,.53142,-1.26302,.68402,.54206,-1.33235,.69001,.53142,-1.39561,.68978,.50054,-1.44662,.68335,.45245,-1.48037,.67136,.39184,-1.50293,.53629,.34922,-1.49242,.51995,.28156,-1.46092,.50453,.22052,-1.41152,.49155,.17208,-1.34905,.48227,.14098,-1.27963,.4776,.13026,-1.21006,.478,.14098,-1.14714,.48342,.17208,-1.09703,.49335,.22052,-1.06464,.50681,.28156,-1.05315,.52247,.34922,-1.06366,.53881,.41688,-1.09516,.55423,.47792,-1.14456,.56721,.52635,-1.20703,.5765,.55745,-1.27645,.58117,.56817,-1.34602,.58077,.55745,-1.40894,.57534,.52635,-1.45905,.56541,.47792,-1.49143,.55196,.41688,-1.50099,.41897,.37041,-1.48912,.40582,.30228,-1.45643,.39536,.24082,-1.40612,.38862,.19204,-1.34312,.38625,.16072,-1.27359,.38848,.14993,-1.20434,.3951,.16072,-1.14215,.40546,.19204,-1.09311,.41854,.24082,-1.06201,.43307,.30228,-1.05191,.44762,.37041,-1.06378,.46077,.43854,-1.09647,.47123,.5,-1.14678,.47797,.54877,-1.20978,.48035,.58009,-1.27931,.47811,.59088,-1.34856,.47149,.58009,-1.41075,.46113,.54877,-1.45979,.44805,.5,-1.49089,.43352,.43854,-1.48833,.30426,.38803,-1.47566,.29459,.31946,-1.44247,.28928,.25761,-1.39202,.28887,.20852,-1.32923,.29339,.177,-1.26027,.30239,.16614,-1.19187,.31501,.177,-1.13073,.32999,.20852,-1.08284,.34588,.25761,-1.05289,.36112,.31946,-1.0438,.37422,.38803,-1.05647,.3839,.4566,-1.08966,.3892,.51845,-1.14011,.38961,.56754,-1.2029,.38509,.59906,-1.27186,.37609,.60992,-1.34026,.36348,.59906,-1.4014,.34849,.56754,-1.44929,.3326,.51845,-1.47924,.31736,.4566,-1.46569,.19329,.40191,-1.45283,.18728,.33297,-1.41986,.18724,.27077,-1.37002,.19315,.2214,-1.30819,.20445,.18971,-1.24041,.22002,.17879,-1.17333,.23835,.18971,-1.1135,.25764,.2214,-1.06679,.27599,.27077,-1.03776,.29162,.33297,-1.02927,.30299,.40191,-1.04213,.309,.47086,-1.0751,.30904,.53306,-1.12494,.30313,.58243,-1.18677,.29183,.61412,-1.25455,.27625,.62504,-1.32163,.25793,.61412,-1.38146,.23864,.58243,-1.42817,.22029,.53306,-1.4572,.20466,.47086,-1.43396,.08704,.41193,-1.42154,.08482,.34268,-1.38952,.09003,.2802,-1.34104,.10217,.23062,-1.28085,.12005,.19879,-1.21485,.14192,.18782,-1.14948,.16564,.19879,-1.09115,.18888,.23062,-1.04558,.20937,.2802,-1.01721,.22512,.34268,-1.00883,.23456,.41193,-1.02126,.23678,.48118,-1.05328,.23157,.54366,-1.10176,.21943,.59324,-1.16194,.20155,.62507,-1.22795,.17968,.63604,-1.29332,.15596,.62507,-1.35164,.13272,.59324,-1.39722,.11223,.54366,-1.42559,.09649,.48118,-1.39415,-.01364,.41798,-1.38279,-.01207,.34852,-1.35243,-.0017,.28586,-1.30603,.01647,.23614,-1.24814,.04066,.20421,-1.18442,.06849,.19321,-1.12111,.09724,.20421,-1.06441,.1241,.23614,-1.01987,.14644,.28586,-.99185,.16207,.34852,-.98308,.16946,.41798,-.99444,.16789,.48743,-1.0248,.15751,.55009,-1.0712,.13934,.59982,-1.12909,.11515,.63174,-1.19281,.08732,.64274,-1.25612,.05857,.63174,-1.31282,.03171,.59982,-1.35736,.00938,.55009,-1.38539,-.00625,.48743,-1.34733,-.1081,.42,-1.33767,-.10281,.35047,-1.30964,-.08746,.28775,-1.26599,-.06354,.23797,-1.21098,-.03341,.20601,-1.15,0,.195,-1.08902,.03341,.20601,-1.03401,.06354,.23797,-.99036,.08746,.28775,-.96233,.10281,.35047,-.95267,.1081,.42,-.96233,.10281,.48953,-.99036,.08746,.55225,-1.03401,.06354,.60203,-1.08902,.03341,.63399,-1.15,0,.645,-1.21098,-.03341,.63399,-1.26599,-.06354,.60203,-1.30964,-.08746,.55225,-1.33767,-.10281,.48953,-1.29466,-.19584,.41798,-1.28729,-.18699,.34853,-1.26222,-.16693,.28588,-1.22191,-.13763,.23616,-1.17029,-.10196,.20424,-1.11243,-.06341,.19324,-1.05398,-.02575,.20424,-1.00067,.00733,.23616,-.95771,.0326,.28588,-.92932,.04758,.34853,-.91826,.0508,.41798,-.92563,.04194,.48742,-.95069,.02189,.55007,-.99101,-.00741,.59979,-1.04262,-.04308,.63171,-1.10049,-.08163,.64271,-1.15894,-.11929,.63171,-1.21225,-.15238,.59979,-1.2552,-.17764,.55007,-1.2836,-.19262,.48742,-1.23731,-.27654,.41193,-1.23278,-.26436,.34274,-1.21123,-.23996,.28033,-1.17477,-.20571,.2308,-1.12697,-.16497,.199,-1.07252,-.12173,.18804,-1.01673,-.08022,.199,-.96507,-.0445,.2308,-.9226,-.01808,.28033,-.89347,-.00353,.34274,-.88054,-.00228,.41193,-.88507,-.01446,.48112,-.90662,-.03886,.54353,-.94308,-.07311,.59306,-.99087,-.11385,.62486,-1.04533,-.15709,.63582,-1.10112,-.1986,.62486,-1.15278,-.23432,.59306,-1.19525,-.26074,.54353,-1.22438,-.27529,.48112,-1.17648,-.35006,.40191,-1.17526,-.33486,.33319,-1.1577,-.30652,.27119,-1.12551,-.2678,.22199,-1.08185,-.22251,.1904,-1.031,-.17506,.17952,-.97793,-.13012,.1904,-.92783,-.09206,.22199,-.88561,-.06463,.27119,-.85541,-.05051,.33319,-.84017,-.05107,.40191,-.84139,-.06627,.47064,-.85896,-.09462,.53264,-.89114,-.13333,.58184,-.9348,-.17863,.61343,-.98565,-.22607,.62431,-1.03873,-.27102,.61343,-1.08882,-.30907,.58184,-1.13104,-.3365,.53264,-1.16125,-.35063,.47064,-1.11335,-.41644,.38803,-1.11582,-.39857,.31999,-1.1026,-.36674,.2586,-1.07498,-.32408,.20989,-1.03568,-.27476,.17861,-.98854,-.22361,.16783,-.93816,-.17563,.17861,-.88949,-.13552,.20989,-.84729,-.10721,.2586,-.81569,-.09347,.31999,-.79778,-.09564,.38803,-.79531,-.11352,.45607,-.80853,-.14534,.51746,-.83614,-.188,.56617,-.87545,-.23732,.59745,-.92259,-.28848,.60822,-.97296,-.33646,.59745,-1.02163,-.37656,.56617,-1.06384,-.40487,.51746,-1.09544,-.41862,.45607,-1.04905,-.47587,.37041,-1.05548,-.4557,.30327,-1.04684,-.42087,.24271,-1.02397,-.3748,.19465,-.98911,-.322,.16379,-.94568,-.26763,.15315,-.89792,-.21702,.16379,-.85051,-.17512,.19465,-.80809,-.14603,.24271,-.77481,-.13261,.30327,-.75393,-.13616,.37041,-.7475,-.15633,.43754,-.75614,-.19116,.49811,-.77901,-.23723,.54617,-.81387,-.29003,.57703,-.8573,-.3444,.58766,-.90506,-.39501,.57703,-.95247,-.43691,.54617,-.99489,-.466,.49811,-1.02817,-.47942,.43754,-.98465,-.52869,.34922,-.9952,-.50658,.28322,-.99124,-.46923,.22368,-.97315,-.42028,.17644,-.94269,-.36453,.1461,-.90286,-.30744,.13565,-.85755,-.25459,.1461,-.8112,-.21116,.17644,-.76834,-.18139,.22368,-.73316,-.16821,.28322,-.70912,-.1729,.34922,-.69857,-.195,.41521,-.70253,-.23235,.47475,-.72062,-.2813,.522,-.75107,-.33705,.55233,-.7909,-.39414,.56279,-.83622,-.44699,.55233,-.88257,-.49043,.522,-.92543,-.52019,.47475,-.9606,-.53337,.41521,-.92113,-.57535,.32466,-.93584,-.55167,.26002,-.93651,-.51224,.20171,-.92307,-.46092,.15543,-.89685,-.40274,.12572,-.86041,-.34339,.11548,-.81732,-.28868,.12572,-.77179,-.24396,.15543,-.72828,-.21361,.20171,-.69105,-.20061,.26002,-.66374,-.20622,.32466,-.64904,-.2299,.38931,-.64837,-.26933,.44762,-.6618,-.32065,.4939,-.68802,-.37883,.52361,-.72446,-.43818,.53385,-.76756,-.4929,.52361,-.81309,-.53761,.4939,-.8566,-.56796,.44762,-.89382,-.58096,.38931,-.85938,-.61643,.29698,-.87813,-.59147,.23389,-.88323,-.55037,.17697,-.87419,-.49714,.1318,-.85189,-.437,.10279,-.81852,-.37583,.0928,-.77733,-.31962,.10279,-.73237,-.27387,.1318,-.68803,-.24307,.17697,-.64865,-.23022,.23389,-.61809,-.23659,.29698,-.59934,-.26154,.36008,-.59423,-.30265,.417,-.60327,-.35588,.46217,-.62557,-.41602,.49118,-.65895,-.47719,.50117,-.70014,-.5334,.49118,-.7451,-.57914,.46217,-.78944,-.60995,.417,-.82882,-.62279,.36008,-.80014,-.65257,.26645,-.82269,-.62657,.20504,-.83188,-.58412,.14964,-.82682,-.52937,.10568,-.80799,-.46769,.07745,-.77725,-.40511,.06773,-.7376,-.34776,.07745,-.69292,-.30126,.10568,-.64759,-.27015,.14964,-.60604,-.25748,.20504,-.57234,-.26449,.26645,-.5498,-.29049,.32785,-.5406,-.33295,.38325,-.54566,-.38769,.42721,-.56449,-.44938,.45544,-.59523,-.51195,.46516,-.63488,-.5693,.45544,-.67956,-.61581,.42721,-.72489,-.64692,.38325,-.76644,-.65959,.32785,-.74401,-.68448,.23334,-.76999,-.65757,.1737,-.78278,-.61401,.1199,-.78114,-.55806,.07721,-.76522,-.49521,.0498,-.73658,-.4316,.04035,-.69803,-.37346,.0498,-.65334,-.32648,.07721,-.60689,-.29526,.1199,-.56321,-.28286,.1737,-.5266,-.29049,.23334,-.50062,-.3174,.29298,-.48783,-.36096,.34678,-.48947,-.41691,.38947,-.50539,-.47976,.41688,-.53403,-.54337,.42633,-.57257,-.60151,.41688,-.61726,-.64849,.38947,-.66372,-.67971,.34678,-.70739,-.69211,.29298,-.6914,-.71288,.19799,-.72031,-.68511,.14012,-.73609,-.6406,.08791,-.73718,-.5837,.04648,-.72349,-.51997,.01988,-.69636,-.45567,.01072,-.65843,-.39707,.01988,-.61343,-.34993,.04648,-.56575,-.31885,.08791,-.52007,-.30687,.14012,-.48086,-.31517,.19799,-.45195,-.34293,.25586,-.43617,-.38744,.30806,-.43508,-.44435,.34949,-.44877,-.50807,.37609,-.4759,-.57237,.38526,-.51383,-.63097,.37609,-.55883,-.67811,.34949,-.6065,-.7092,.30806,-.65219,-.72118,.25586,-.64249,-.73848,.16073,-.67374,-.70984,.10452,-.69178,-.66446,.05382,-.69485,-.60678,.01358,-.68264,-.54244,-.01225,-.65635,-.47775,-.02115,-.61855,-.41903,-.01225,-.57295,-.37204,.01358,-.524,-.34137,.05382,-.4765,-.33002,.10452,-.4351,-.33911,.16073,-.40385,-.36775,.21693,-.38581,-.41313,.26763,-.38274,-.47081,.30787,-.39495,-.53515,.3337,-.42124,-.59984,.34261,-.45904,-.65856,.3337,-.50464,-.70555,.30787,-.55359,-.73622,.26763,-.60109,-.74757,.21693,-.59718,-.76199,.12192,-.63011,-.73243,.06717,-.64964,-.68622,.01778,-.65386,-.6279,-.02141,-.64235,-.56317,-.04658,-.61626,-.49837,-.05525,-.57812,-.43984,-.04658,-.53167,-.39331,-.02141,-.48146,-.36334,.01778,-.43241,-.35285,.06717,-.38931,-.36289,.12192,-.35638,-.39245,.17667,-.33686,-.43866,.22606,-.33264,-.49698,.26525,-.34414,-.56171,.29042,-.37024,-.62651,.29909,-.40838,-.68504,.29042,-.45482,-.73157,.26525,-.50503,-.76154,.22606,-.55409,-.77203,.17667,-.5551,-.78413,.08194,-.58899,-.75359,.02833,-.60922,-.70661,-.02004,-.61379,-.64778,-.05842,-.60226,-.58285,-.08306,-.57575,-.51819,-.09155,-.53687,-.46012,-.08306,-.48942,-.41433,-.05842,-.43805,-.3853,-.02004,-.38777,-.37587,.02833,-.34352,-.38697,.08194,-.30962,-.41751,.13555,-.2894,-.46449,.18391,-.28483,-.52333,.22229,-.29636,-.58825,.24694,-.32286,-.65291,.25543,-.36174,-.71098,.24694,-.40919,-.75677,.22229,-.46057,-.7858,.18391,-.51085,-.79523,.13555,-.51553,-.80558,.04117,-.5497,-.77411,-.01172,-.56988,-.72644,-.05943,-.57409,-.66725,-.09729,-.5619,-.60231,-.1216,-.53453,-.538,-.12998,-.49464,-.48061,-.1216,-.44614,-.43574,-.09729,-.39378,-.40781,-.05943,-.34269,-.39953,-.01172,-.29785,-.41173,.04117,-.26368,-.4432,.09405,-.2435,-.49087,.14176,-.23929,-.55006,.17963,-.25148,-.615,.20394,-.27885,-.67931,.21231,-.31874,-.7367,.20394,-.36724,-.78156,.17963,-.4196,-.8095,.14176,-.47069,-.81778,.09405,-.4775,-.82705,0,-.51133,-.7948,-.05264,-.53084,-.74664,-.10012,-.53412,-.68727,-.13781,-.52084,-.62251,-.162,-.49231,-.5587,-.17034,-.45131,-.50208,-.162,-.40187,-.4582,-.13781,-.34882,-.43135,-.10012,-.29735,-.42417,-.05264,-.2525,-.43734,0,-.21867,-.46959,.05264,-.19916,-.51776,.10012,-.19588,-.57713,.13781,-.20916,-.64189,.162,-.23769,-.7057,.17034,-.27869,-.76232,.162,-.32813,-.8062,.13781,-.38118,-.83304,.10012,-.43265,-.84023,.05264,-.43989,-.84925,-.04117,-.47287,-.81652,-.09405,-.49125,-.76813,-.14176,-.49324,-.70882,-.17963,-.47863,-.64439,-.20394,-.44887,-.58115,-.21231,-.40686,-.52528,-.20394,-.35672,-.48227,-.17963,-.30335,-.45631,-.14176,-.25198,-.44995,-.09405,-.20764,-.46381,-.04117,-.17466,-.49654,.01172,-.15628,-.54493,.05943,-.1543,-.60424,.09729,-.1689,-.66867,.1216,-.19866,-.73192,.12998,-.24067,-.78778,.1216,-.29081,-.8308,.09729,-.34418,-.85675,.05943,-.39555,-.86311,.01172,-.40153,-.87279,-.08194,-.43326,-.84002,-.13555,-.45024,-.79177,-.18391,-.45078,-.73276,-.22229,-.43485,-.66877,-.24694,-.40401,-.60606,-.25543,-.36126,-.55078,-.24694,-.3108,-.50833,-.22229,-.25756,-.48287,-.18391,-.20676,-.47689,-.13555,-.16337,-.49098,-.08194,-.13163,-.52376,-.02833,-.11466,-.57201,.02004,-.11411,-.63102,.05842,-.13004,-.69501,.08306,-.16089,-.75771,.09155,-.20364,-.81299,.08306,-.2541,-.85544,.05842,-.30733,-.8809,.02004,-.35813,-.88688,-.02833,-.36131,-.89817,-.12192,-.39155,-.86587,-.17667,-.407,-.81814,-.22606,-.40614,-.75967,-.26525,-.38907,-.69618,-.29042,-.35745,-.63389,-.29909,-.31438,-.57889,-.29042,-.26408,-.53656,-.26525,-.21146,-.51105,-.22606,-.16168,-.50486,-.17667,-.11961,-.51859,-.12192,-.08938,-.5509,-.06717,-.07393,-.59863,-.01778,-.07478,-.6571,.02141,-.09186,-.72058,.04658,-.12347,-.78288,.05525,-.16654,-.83788,.04658,-.21685,-.88021,.02141,-.26947,-.90571,-.01778,-.31925,-.91191,-.06717,-.3183,-.92565,-.16073,-.34687,-.89434,-.21693,-.36079,-.84753,-.26763,-.3587,-.78981,-.30787,-.34081,-.72682,-.3337,-.30886,-.66473,-.34261,-.26597,-.60961,-.3337,-.21636,-.56687,-.30787,-.16488,-.54069,-.26763,-.11656,-.53362,-.21693,-.07613,-.54637,-.16073,-.04756,-.57767,-.10452,-.03363,-.62448,-.05382,-.03572,-.68221,-.01358,-.05362,-.7452,.01225,-.08557,-.80729,.02115,-.12845,-.8624,.01225,-.17806,-.90514,-.01358,-.22955,-.93133,-.05382,-.27787,-.93839,-.10452,-.27167,-.95521,-.19799,-.29846,-.9254,-.25586,-.31093,-.87985,-.30806,-.30785,-.82302,-.34949,-.28952,-.76047,-.37609,-.25774,-.69833,-.38526,-.21562,-.64268,-.37609,-.16728,-.59896,-.34949,-.11745,-.57146,-.30806,-.07101,-.56286,-.25586,-.03251,-.57402,-.19799,-.00572,-.60383,-.14012,.00675,-.64938,-.08791,.00367,-.70621,-.04648,-.01466,-.76876,-.01988,-.04644,-.8309,-.01072,-.08856,-.88655,-.01988,-.1369,-.93027,-.04648,-.18673,-.95777,-.08791,-.23317,-.96636,-.14012,-.22077,-.98657,-.23334,-.24569,-.95868,-.29298,-.25679,-.91465,-.34678,-.25298,-.85881,-.38947,-.23464,-.79662,-.41688,-.20356,-.73417,-.42633,-.16279,-.67756,-.41688,-.11632,-.63235,-.38947,-.06869,-.60295,-.34678,-.02457,-.59225,-.29298,.01173,-.60129,-.23334,.03664,-.62919,-.1737,.04774,-.67321,-.1199,.04393,-.72905,-.07721,.02559,-.79124,-.0498,-.00548,-.8537,-.04035,-.04626,-.9103,-.0498,-.09273,-.95552,-.07721,-.14036,-.98491,-.1199,-.18448,-.99561,-.1737,-.16508,-1.01923,-.26645,-.188,-.99355,-.32785,-.1978,-.95123,-.38325,-.19352,-.89642,-.42721,-.17559,-.83447,-.45544,-.14575,-.77146,-.46516,-.10693,-.71355,-.45544,-.06292,-.66641,-.42721,-.01804,-.63465,-.38325,.02332,-.62138,-.32785,.05712,-.62791,-.26645,.08004,-.65359,-.20504,.08984,-.69591,-.14964,.08557,-.75072,-.10568,.06763,-.81266,-.07745,.03779,-.87568,-.06773,-.00103,-.93359,-.07745,-.04504,-.98073,-.10568,-.08992,-1.01249,-.14964,-.13128,-1.02575,-.20504,-.10416,-1.05246,-.29698,-.12495,-1.02917,-.36008,-.13351,-.98865,-.417,-.129,-.93485,-.46217,-.11187,-.87303,-.49118,-.08378,-.80926,-.50117,-.0475,-.74977,-.49118,-.00656,-.70039,-.46217,.03502,-.66595,-.417,.07317,-.64981,-.36008,.10416,-.65357,-.29698,.12495,-.67686,-.23389,.13351,-.71738,-.17697,.129,-.77118,-.1318,.11187,-.833,-.10279,.08378,-.89677,-.0928,.0475,-.95626,-.10279,.00656,-1.00564,-.1318,-.03502,-1.04008,-.17697,-.07317,-1.05622,-.23389,-.0377,-1.0854,-.32466,-.05622,-1.06456,-.38931,-.06357,-1.02581,-.44762,-.05904,-.97296,-.4939,-.04308,-.91117,-.52361,-.01725,-.84649,-.53385,.01593,-.78526,-.52361,.05321,-.73346,-.4939,.09094,-.69617,-.44762,.12542,-.67703,-.38931,.15328,-.67793,-.32466,.17179,-.69877,-.26002,.17914,-.73751,-.20171,.17462,-.79036,-.15543,.15866,-.85215,-.12572,.13282,-.91683,-.11548,.09964,-.97807,-.12572,.06236,-1.02987,-.15543,.02464,-1.06716,-.20171,-.00984,-1.08629,-.26002,.03447,-1.11707,-.34922,.01839,-1.0986,-.41521,.01222,-1.06154,-.47475,.01656,-1.00954,-.522,.031,-.94768,-.55233,.05412,-.88201,-.56279,.08365,-.81897,-.55233,.1167,-.76473,-.522,.15004,-.72458,-.47475,.18041,-.70248,-.41521,.20483,-.70057,-.34922,.22091,-.71904,-.28322,.22708,-.75609,-.22368,.22273,-.8081,-.17644,.2083,-.86996,-.1461,.18518,-.93562,-.13565,.15565,-.99866,-.1461,.1226,-1.05291,-.17644,.08925,-1.09305,-.22368,.05889,-1.11516,-.28322,.11241,-1.14644,-.37041,.0989,-1.13013,-.43754,.09388,-1.0946,-.49811,.09786,-1.04332,-.54617,.11044,-.98131,-.57703,.13039,-.91465,-.58766,.15576,-.84985,-.57703,.18406,-.79326,-.54617,.21252,-.75042,-.49811,.23836,-.72552,-.43754,.25905,-.721,-.37041,.27256,-.73731,-.30327,.27757,-.77284,-.24271,.27359,-.82412,-.19465,.26102,-.88613,-.16379,.24107,-.95279,-.15315,.2157,-1.01759,-.16379,.1874,-1.07418,-.19465,.15894,-1.11702,-.24271,.1331,-1.14192,-.30327,.19603,-1.17241,-.38803,.18519,-1.15799,-.45607,.18129,-1.12375,-.51746,.1847,-1.07304,-.56617,.1951,-1.01084,-.59745,.21147,-.94323,-.60822,.2322,-.87682,-.59745,.25526,-.81812,-.56617,.2784,-.77288,-.51746,.29935,-.74552,-.45607,.31606,-.73872,-.38803,.3269,-.75314,-.31999,.3308,-.78738,-.2586,.32738,-.83809,-.20989,.31698,-.90029,-.17861,.30062,-.9679,-.16783,.27989,-1.03431,-.17861,.25683,-1.09301,-.20989,.23369,-1.13825,-.2586,.21274,-1.16561,-.31999,.28508,-1.1939,-.40191,.27697,-1.18098,-.47064,.2741,-1.14776,-.53264,.27675,-1.09748,-.58184,.28465,-1.03507,-.61343,.29704,-.96664,-.62431,.3127,-.89887,-.61343,.3301,-.83842,-.58184,.34754,-.79119,-.53264,.3633,-.7618,-.47064,.37585,-.75315,-.40191,.38396,-.76606,-.33319,.38683,-.79928,-.27119,.38418,-.84956,-.22199,.37628,-.91197,-.1904,.36389,-.9804,-.17952,.34823,-1.04817,-.1904,.33083,-1.10862,-.22199,.31339,-1.15585,-.27119,.29763,-1.18524,-.33319,.37917,-1.20981,-.41193,.37378,-1.19799,-.48112,.37182,-1.16549,-.54353,.37347,-1.1155,-.59306,.37857,-1.0529,-.62486,.38662,-.98383,-.63582,.39684,-.91505,-.62486,.40822,-.85328,-.59306,.41965,-.80459,-.54353,.43001,-.77372,-.48112,.43829,-.76371,-.41193,.44368,-.77553,-.34274,.44564,-.80803,-.28033,.44399,-.85803,-.2308,.43889,-.92062,-.199,.43084,-.98969,-.18804,.42062,-1.05847,-.199,.40924,-1.12024,-.2308,.39781,-1.16893,-.28033,.38744,-1.1998,-.34274,.47773,-1.21912,-.41798,.47499,-1.20794,-.48742,.47376,-1.17586,-.55007,.47416,-1.12603,-.59979,.47616,-1.06332,-.63171,.47955,-.99387,-.64271,.484,-.92448,-.63171,.48909,-.86194,-.59979,.4943,-.81238,-.55007,.49914,-.78065,-.48742,.50312,-.76984,-.41798,.50586,-.78103,-.34853,.50709,-.8131,-.28588,.50669,-.86294,-.23616,.50469,-.92565,-.20424,.5013,-.9951,-.19324,.49685,-1.06448,-.20424,.49176,-1.12702,-.23616,.48655,-1.17658,-.28588,.48171,-1.20832,-.34853,.58005,-1.22087,-.42,.5798,-1.20986,-.48953,.57908,-1.17791,-.55225,.57797,-1.12815,-.60203,.57656,-1.06544,-.63399,.575,-.99593,-.645,.57344,-.92642,-.63399,.57203,-.86371,-.60203,.57092,-.81395,-.55225,.5702,-.782,-.48953,.56995,-.77099,-.42,.5702,-.782,-.35047,.57092,-.81395,-.28775,.57203,-.86371,-.23797,.57344,-.92642,-.20601,.575,-.99593,-.195,.57656,-1.06544,-.20601,.57797,-1.12815,-.23797,.57908,-1.17791,-.28775,.5798,-1.20986,-.35047,.68526,-1.21419,-.41798,.68728,-1.20291,-.48743,.6868,-1.17082,-.55009,.68387,-1.12108,-.59982,.67879,-1.05855,-.63174,.67203,-.98934,-.64274,.66427,-.92025,-.63174,.65627,-.85802,-.59982,.64881,-.80875,-.55009,.64261,-.77727,-.48743,.6383,-.76665,-.41798,.63628,-.77793,-.34852,.63675,-.81002,-.28586,.63968,-.85976,-.23614,.64477,-.92229,-.20421,.65152,-.9915,-.19321,.65928,-1.06059,-.20421,.66728,-1.12282,-.23614,.67475,-1.17209,-.28586,.68094,-1.20357,-.34852,.79236,-1.19833,-.41193,.79635,-1.18635,-.48118,.7958,-1.15391,-.54366,.79076,-1.1042,-.59324,.78173,-1.04206,-.62507,.76958,-.9736,-.63604,.75552,-.9055,-.62507,.74091,-.84443,-.59324,.72719,-.79638,-.54366,.71569,-.76605,-.48118,.70755,-.75639,-.41193,.70356,-.76837,-.34268,.70411,-.80081,-.2802,.70915,-.85053,-.23062,.71819,-.91266,-.19879,.73033,-.98113,-.18782,.74439,-1.04923,-.19879,.759,-1.11029,-.23062,.77273,-1.15834,-.2802,.78422,-1.18868,-.34268,.90024,-1.17268,-.40191,.90584,-1.15964,-.47086,.90486,-1.12669,-.53306,.8974,-1.07706,-.58243,.88419,-1.0156,-.61412,.86652,-.94834,-.62504,.84612,-.88186,-.61412,.82498,-.82266,-.58243,.80519,-.77654,-.53306,.78866,-.74802,-.47086,.77703,-.73988,-.40191,.77143,-.75292,-.33297,.77241,-.78587,-.27077,.77987,-.8355,-.2214,.79308,-.89696,-.18971,.81075,-.96422,-.17879,.83115,-1.0307,-.18971,.85229,-1.0899,-.2214,.87208,-1.13602,-.27077,.88861,-1.16454,-.33297,1.00766,-1.1368,-.38803,1.01446,-1.12238,-.4566,1.01268,-1.08882,-.51845,1.0025,-1.0394,-.56754,.98491,-.97896,-.59906,.96163,-.91342,-.60992,.93495,-.84919,-.59906,.90747,-.79256,-.56754,.88189,-.74907,-.51845,.8607,-.72298,-.4566,.84599,-.71685,-.38803,.83919,-.73127,-.31946,.84096,-.76483,-.25761,.85115,-.81424,-.20852,.86874,-.87468,-.177,.89201,-.94023,-.16614,.9187,-1.00446,-.177,.94618,-1.06109,-.20852,.97176,-1.10458,-.25761,.99295,-1.13067,-.31946,1.11334,-1.09041,-.37041,1.12088,-1.07438,-.43854,1.11792,-1.04019,-.5,1.10473,-.99117,-.54877,1.0826,-.93214,-.58009,1.05371,-.86886,-.59088,1.02088,-.80753,-.58009,.98733,-.75415,-.54877,.95633,-.71396,-.5,.93093,-.69088,-.43854,.9136,-.68717,-.37041,.90606,-.70319,-.30228,.90902,-.73739,-.24082,.92221,-.7864,-.19204,.94434,-.84544,-.16072,.97323,-.90872,-.14993,1.00606,-.97005,-.16072,1.03961,-1.02343,-.19204,1.07061,-1.06362,-.24082,1.09601,-1.0867,-.30228,1.21591,-1.03343,-.34922,1.22372,-1.01564,-.41688,1.21918,-.98087,-.47792,1.20273,-.93251,-.52635,1.17597,-.87531,-.55745,1.14153,-.81485,-.56817,1.10277,-.75707,-.55745,1.0635,-.70761,-.52635,1.02756,-.67132,-.47792,.99845,-.65175,-.41688,.97905,-.65082,-.34922,.97123,-.66861,-.28156,.97577,-.70338,-.22052,.99223,-.75174,-.17208,1.01898,-.80894,-.14098,1.05343,-.86939,-.13026,1.09218,-.92718,-.14098,1.13145,-.97663,-.17208,1.1674,-1.01292,-.22052,1.1965,-1.0325,-.28156,1.314,-.96597,-.32466,1.3216,-.94635,-.39184,1.31511,-.91113,-.45245,1.29517,-.86375,-.50054,1.26374,-.80885,-.53142,1.22389,-.7518,-.54206,1.17952,-.6982,-.53142,1.13497,-.65328,-.50054,1.09461,-.62144,-.45245,1.06239,-.6058,-.39184,1.04146,-.6079,-.32466,1.03386,-.62752,-.25749,1.04035,-.66274,-.19688,1.06029,-.71012,-.14879,1.09172,-.76502,-.11791,1.13157,-.82207,-.10727,1.17594,-.87567,-.11791,1.22049,-.92059,-.14879,1.26085,-.95243,-.19688,1.29307,-.96807,-.25749,1.40625,-.88835,-.29698,1.41314,-.86692,-.36369,1.40436,-.83146,-.42386,1.38078,-.78542,-.47161,1.3447,-.73333,-.50227,1.29966,-.68027,-.51284,1.25006,-.63144,-.50227,1.20077,-.59163,-.47161,1.15659,-.56472,-.42386,1.12187,-.55335,-.36369,1.1,-.55864,-.29698,1.09311,-.58006,-.23028,1.10189,-.61553,-.17011,1.12547,-.66156,-.12236,1.16155,-.71366,-.0917,1.20659,-.76672,-.08113,1.25619,-.81554,-.0917,1.30549,-.85536,-.12236,1.34966,-.88227,-.17011,1.38438,-.89363,-.23028,1.49132,-.80106,-.26645,1.49703,-.77794,-.33269,1.48567,-.74252,-.39245,1.45834,-.69825,-.43988,1.41772,-.64948,-.47033,1.36779,-.60098,-.48082,1.31343,-.5575,-.47033,1.25997,-.52329,-.43988,1.21264,-.5017,-.39245,1.17607,-.49484,-.33269,1.15385,-.50339,-.26645,1.14814,-.52651,-.2002,1.15951,-.56194,-.14044,1.18684,-.6062,-.09301,1.22746,-.65497,-.06256,1.27739,-.70347,-.05207,1.33174,-.74696,-.06256,1.3852,-.78117,-.09301,1.43253,-.80276,-.14044,1.4691,-.80961,-.2002,1.56795,-.70483,-.23334,1.57205,-.68022,-.29916,1.55785,-.64517,-.35854,1.52674,-.60314,-.40567,1.48177,-.55822,-.43592,1.42733,-.51483,-.44635,1.36876,-.47719,-.43592,1.31178,-.44901,-.40567,1.26199,-.43304,-.35854,1.22424,-.43083,-.29916,1.20224,-.44262,-.23334,1.19814,-.46724,-.16752,1.21234,-.50228,-.10814,1.24345,-.54431,-.06101,1.28843,-.58923,-.03076,1.34286,-.63263,-.02033,1.40144,-.67026,-.03076,1.45841,-.69844,-.06101,1.5082,-.71442,-.10814,1.54595,-.71662,-.16752,1.63496,-.60055,-.19799,1.63707,-.5747,-.26343,1.61986,-.54045,-.32247,1.58502,-.50112,-.36933,1.53596,-.46059,-.39941,1.47747,-.4228,-.40978,1.41529,-.39147,-.39941,1.3555,-.36966,-.36933,1.30396,-.35951,-.32247,1.2657,-.362,-.26343,1.24448,-.37689,-.19799,1.24237,-.40273,-.13254,1.25957,-.43699,-.0735,1.29442,-.47631,-.02664,1.34348,-.51685,.00344,1.40197,-.55463,.0138,1.46415,-.58596,.00344,1.52394,-.60777,-.02664,1.57548,-.61793,-.0735,1.61374,-.61544,-.13254,1.69132,-.48926,-.16073,1.69112,-.46254,-.22585,1.6708,-.4295,-.2846,1.63236,-.39339,-.33123,1.57956,-.35774,-.36116,1.51756,-.32604,-.37148,1.45243,-.30139,-.36116,1.39055,-.2862,-.33123,1.33798,-.28196,-.2846,1.29986,-.28909,-.22585,1.27993,-.30688,-.16073,1.28013,-.33361,-.0956,1.30044,-.36664,-.03685,1.33888,-.40275,.00978,1.39169,-.4384,.03971,1.45369,-.4701,.05003,1.51881,-.49476,.03971,1.58069,-.50995,.00978,1.63326,-.51418,-.03685,1.67138,-.50706,-.0956,1.73612,-.37218,-.12192,1.73336,-.34498,-.18679,1.70993,-.31364,-.24531,1.66811,-.28124,-.29175,1.612,-.25095,-.32156,1.54708,-.22573,-.33184,1.47972,-.20805,-.32156,1.41651,-.19964,-.29175,1.36363,-.20132,-.24531,1.32627,-.21294,-.18679,1.30807,-.23334,-.12192,1.31083,-.26055,-.05705,1.33426,-.29188,.00147,1.37608,-.32428,.04791,1.43219,-.35458,.07773,1.49711,-.3798,.088,1.56447,-.39748,.07773,1.62768,-.40589,.04791,1.68056,-.40421,.00147,1.71792,-.39259,-.05705,1.76865,-.25065,-.08194,1.76318,-.22341,-.14662,1.73671,-.19426,-.20497,1.69181,-.16604,-.25127,1.6329,-.14154,-.281,1.56573,-.12313,-.29125,1.49688,-.11263,-.281,1.43309,-.11105,-.25127,1.3806,-.11857,-.20497,1.34456,-.13443,-.14662,1.32848,-.1571,-.08194,1.33395,-.18434,-.01726,1.36043,-.21349,.04109,1.40532,-.2417,.0874,1.46424,-.26621,.11713,1.53141,-.28462,.12737,1.60026,-.29512,.11713,1.66405,-.29669,.0874,1.71653,-.28918,.04109,1.75258,-.27331,-.01726,1.78839,-.12609,-.04117,1.78013,-.09928,-.10573,1.75078,-.07279,-.16398,1.70321,-.04922,-.2102,1.64207,-.03086,-.23988,1.57335,-.01953,-.25011,1.50378,-.01632,-.23988,1.44016,-.02155,-.2102,1.38872,-.03471,-.16398,1.35451,-.05451,-.10573,1.34086,-.07901,-.04117,1.34911,-.10582,.0234,1.37846,-.13231,.08164,1.42603,-.15588,.12787,1.48717,-.17424,.15755,1.55589,-.18557,.16777,1.62546,-.18878,.15755,1.68908,-.18355,.12787,1.74052,-.17039,.08164,1.77473,-.15059,.0234],indices:[0,1,20,20,1,21,1,2,21,21,2,22,2,3,22,22,3,23,3,4,23,23,4,24,4,5,24,24,5,25,5,6,25,25,6,26,6,7,26,26,7,27,7,8,27,27,8,28,8,9,28,28,9,29,9,10,29,29,10,30,10,11,30,30,11,31,11,12,31,31,12,32,12,13,32,32,13,33,13,14,33,33,14,34,14,15,34,34,15,35,15,16,35,35,16,36,16,17,36,36,17,37,17,18,37,37,18,38,18,19,38,38,19,39,19,0,39,39,0,20,20,21,40,40,21,41,21,22,41,41,22,42,22,23,42,42,23,43,23,24,43,43,24,44,24,25,44,44,25,45,25,26,45,45,26,46,26,27,46,46,27,47,27,28,47,47,28,48,28,29,48,48,29,49,29,30,49,49,30,50,30,31,50,50,31,51,31,32,51,51,32,52,32,33,52,52,33,53,33,34,53,53,34,54,34,35,54,54,35,55,35,36,55,55,36,56,36,37,56,56,37,57,37,38,57,57,38,58,38,39,58,58,39,59,39,20,59,59,20,40,40,41,60,60,41,61,41,42,61,61,42,62,42,43,62,62,43,63,43,44,63,63,44,64,44,45,64,64,45,65,45,46,65,65,46,66,46,47,66,66,47,67,47,48,67,67,48,68,48,49,68,68,49,69,49,50,69,69,50,70,50,51,70,70,51,71,51,52,71,71,52,72,52,53,72,72,53,73,53,54,73,73,54,74,54,55,74,74,55,75,55,56,75,75,56,76,56,57,76,76,57,77,57,58,77,77,58,78,58,59,78,78,59,79,59,40,79,79,40,60,60,61,80,80,61,81,61,62,81,81,62,82,62,63,82,82,63,83,63,64,83,83,64,84,64,65,84,84,65,85,65,66,85,85,66,86,66,67,86,86,67,87,67,68,87,87,68,88,68,69,88,88,69,89,69,70,89,89,70,90,70,71,90,90,71,91,71,72,91,91,72,92,72,73,92,92,73,93,73,74,93,93,74,94,74,75,94,94,75,95,75,76,95,95,76,96,76,77,96,96,77,97,77,78,97,97,78,98,78,79,98,98,79,99,79,60,99,99,60,80,80,81,100,100,81,101,81,82,101,101,82,102,82,83,102,102,83,103,83,84,103,103,84,104,84,85,104,104,85,105,85,86,105,105,86,106,86,87,106,106,87,107,87,88,107,107,88,108,88,89,108,108,89,109,89,90,109,109,90,110,90,91,110,110,91,111,91,92,111,111,92,112,92,93,112,112,93,113,93,94,113,113,94,114,94,95,114,114,95,115,95,96,115,115,96,116,96,97,116,116,97,117,97,98,117,117,98,118,98,99,118,118,99,119,99,80,119,119,80,100,100,101,120,120,101,121,101,102,121,121,102,122,102,103,122,122,103,123,103,104,123,123,104,124,104,105,124,124,105,125,105,106,125,125,106,126,106,107,126,126,107,127,107,108,127,127,108,128,108,109,128,128,109,129,109,110,129,129,110,130,110,111,130,130,111,131,111,112,131,131,112,132,112,113,132,132,113,133,113,114,133,133,114,134,114,115,134,134,115,135,115,116,135,135,116,136,116,117,136,136,117,137,117,118,137,137,118,138,118,119,138,138,119,139,119,100,139,139,100,120,120,121,140,140,121,141,121,122,141,141,122,142,122,123,142,142,123,143,123,124,143,143,124,144,124,125,144,144,125,145,125,126,145,145,126,146,126,127,146,146,127,147,127,128,147,147,128,148,128,129,148,148,129,149,129,130,149,149,130,150,130,131,150,150,131,151,131,132,151,151,132,152,132,133,152,152,133,153,133,134,153,153,134,154,134,135,154,154,135,155,135,136,155,155,136,156,136,137,156,156,137,157,137,138,157,157,138,158,138,139,158,158,139,159,139,120,159,159,120,140,140,141,160,160,141,161,141,142,161,161,142,162,142,143,162,162,143,163,143,144,163,163,144,164,144,145,164,164,145,165,145,146,165,165,146,166,146,147,166,166,147,167,147,148,167,167,148,168,148,149,168,168,149,169,149,150,169,169,150,170,150,151,170,170,151,171,151,152,171,171,152,172,152,153,172,172,153,173,153,154,173,173,154,174,154,155,174,174,155,175,155,156,175,175,156,176,156,157,176,176,157,177,157,158,177,177,158,178,158,159,178,178,159,179,159,140,179,179,140,160,160,161,180,180,161,181,161,162,181,181,162,182,162,163,182,182,163,183,163,164,183,183,164,184,164,165,184,184,165,185,165,166,185,185,166,186,166,167,186,186,167,187,167,168,187,187,168,188,168,169,188,188,169,189,169,170,189,189,170,190,170,171,190,190,171,191,171,172,191,191,172,192,172,173,192,192,173,193,173,174,193,193,174,194,174,175,194,194,175,195,175,176,195,195,176,196,176,177,196,196,177,197,177,178,197,197,178,198,178,179,198,198,179,199,179,160,199,199,160,180,180,181,200,200,181,201,181,182,201,201,182,202,182,183,202,202,183,203,183,184,203,203,184,204,184,185,204,204,185,205,185,186,205,205,186,206,186,187,206,206,187,207,187,188,207,207,188,208,188,189,208,208,189,209,189,190,209,209,190,210,190,191,210,210,191,211,191,192,211,211,192,212,192,193,212,212,193,213,193,194,213,213,194,214,194,195,214,214,195,215,195,196,215,215,196,216,196,197,216,216,197,217,197,198,217,217,198,218,198,199,218,218,199,219,199,180,219,219,180,200,200,201,220,220,201,221,201,202,221,221,202,222,202,203,222,222,203,223,203,204,223,223,204,224,204,205,224,224,205,225,205,206,225,225,206,226,206,207,226,226,207,227,207,208,227,227,208,228,208,209,228,228,209,229,209,210,229,229,210,230,210,211,230,230,211,231,211,212,231,231,212,232,212,213,232,232,213,233,213,214,233,233,214,234,214,215,234,234,215,235,215,216,235,235,216,236,216,217,236,236,217,237,217,218,237,237,218,238,218,219,238,238,219,239,219,200,239,239,200,220,220,221,240,240,221,241,221,222,241,241,222,242,222,223,242,242,223,243,223,224,243,243,224,244,224,225,244,244,225,245,225,226,245,245,226,246,226,227,246,246,227,247,227,228,247,247,228,248,228,229,248,248,229,249,229,230,249,249,230,250,230,231,250,250,231,251,231,232,251,251,232,252,232,233,252,252,233,253,233,234,253,253,234,254,234,235,254,254,235,255,235,236,255,255,236,256,236,237,256,256,237,257,237,238,257,257,238,258,238,239,258,258,239,259,239,220,259,259,220,240,240,241,260,260,241,261,241,242,261,261,242,262,242,243,262,262,243,263,243,244,263,263,244,264,244,245,264,264,245,265,245,246,265,265,246,266,246,247,266,266,247,267,247,248,267,267,248,268,248,249,268,268,249,269,249,250,269,269,250,270,250,251,270,270,251,271,251,252,271,271,252,272,252,253,272,272,253,273,253,254,273,273,254,274,254,255,274,274,255,275,255,256,275,275,256,276,256,257,276,276,257,277,257,258,277,277,258,278,258,259,278,278,259,279,259,240,279,279,240,260,260,261,280,280,261,281,261,262,281,281,262,282,262,263,282,282,263,283,263,264,283,283,264,284,264,265,284,284,265,285,265,266,285,285,266,286,266,267,286,286,267,287,267,268,287,287,268,288,268,269,288,288,269,289,269,270,289,289,270,290,270,271,290,290,271,291,271,272,291,291,272,292,272,273,292,292,273,293,273,274,293,293,274,294,274,275,294,294,275,295,275,276,295,295,276,296,276,277,296,296,277,297,277,278,297,297,278,298,278,279,298,298,279,299,279,260,299,299,260,280,280,281,300,300,281,301,281,282,301,301,282,302,282,283,302,302,283,303,283,284,303,303,284,304,284,285,304,304,285,305,285,286,305,305,286,306,286,287,306,306,287,307,287,288,307,307,288,308,288,289,308,308,289,309,289,290,309,309,290,310,290,291,310,310,291,311,291,292,311,311,292,312,292,293,312,312,293,313,293,294,313,313,294,314,294,295,314,314,295,315,295,296,315,315,296,316,296,297,316,316,297,317,297,298,317,317,298,318,298,299,318,318,299,319,299,280,319,319,280,300,300,301,320,320,301,321,301,302,321,321,302,322,302,303,322,322,303,323,303,304,323,323,304,324,304,305,324,324,305,325,305,306,325,325,306,326,306,307,326,326,307,327,307,308,327,327,308,328,308,309,328,328,309,329,309,310,329,329,310,330,310,311,330,330,311,331,311,312,331,331,312,332,312,313,332,332,313,333,313,314,333,333,314,334,314,315,334,334,315,335,315,316,335,335,316,336,316,317,336,336,317,337,317,318,337,337,318,338,318,319,338,338,319,339,319,300,339,339,300,320,320,321,340,340,321,341,321,322,341,341,322,342,322,323,342,342,323,343,323,324,343,343,324,344,324,325,344,344,325,345,325,326,345,345,326,346,326,327,346,346,327,347,327,328,347,347,328,348,328,329,348,348,329,349,329,330,349,349,330,350,330,331,350,350,331,351,331,332,351,351,332,352,332,333,352,352,333,353,333,334,353,353,334,354,334,335,354,354,335,355,335,336,355,355,336,356,336,337,356,356,337,357,337,338,357,357,338,358,338,339,358,358,339,359,339,320,359,359,320,340,340,341,360,360,341,361,341,342,361,361,342,362,342,343,362,362,343,363,343,344,363,363,344,364,344,345,364,364,345,365,345,346,365,365,346,366,346,347,366,366,347,367,347,348,367,367,348,368,348,349,368,368,349,369,349,350,369,369,350,370,350,351,370,370,351,371,351,352,371,371,352,372,352,353,372,372,353,373,353,354,373,373,354,374,354,355,374,374,355,375,355,356,375,375,356,376,356,357,376,376,357,377,357,358,377,377,358,378,358,359,378,378,359,379,359,340,379,379,340,360,360,361,380,380,361,381,361,362,381,381,362,382,362,363,382,382,363,383,363,364,383,383,364,384,364,365,384,384,365,385,365,366,385,385,366,386,366,367,386,386,367,387,367,368,387,387,368,388,368,369,388,388,369,389,369,370,389,389,370,390,370,371,390,390,371,391,371,372,391,391,372,392,372,373,392,392,373,393,373,374,393,393,374,394,374,375,394,394,375,395,375,376,395,395,376,396,376,377,396,396,377,397,377,378,397,397,378,398,378,379,398,398,379,399,379,360,399,399,360,380,380,381,400,400,381,401,381,382,401,401,382,402,382,383,402,402,383,403,383,384,403,403,384,404,384,385,404,404,385,405,385,386,405,405,386,406,386,387,406,406,387,407,387,388,407,407,388,408,388,389,408,408,389,409,389,390,409,409,390,410,390,391,410,410,391,411,391,392,411,411,392,412,392,393,412,412,393,413,393,394,413,413,394,414,394,395,414,414,395,415,395,396,415,415,396,416,396,397,416,416,397,417,397,398,417,417,398,418,398,399,418,418,399,419,399,380,419,419,380,400,400,401,420,420,401,421,401,402,421,421,402,422,402,403,422,422,403,423,403,404,423,423,404,424,404,405,424,424,405,425,405,406,425,425,406,426,406,407,426,426,407,427,407,408,427,427,408,428,408,409,428,428,409,429,409,410,429,429,410,430,410,411,430,430,411,431,411,412,431,431,412,432,412,413,432,432,413,433,413,414,433,433,414,434,414,415,434,434,415,435,415,416,435,435,416,436,416,417,436,436,417,437,417,418,437,437,418,438,418,419,438,438,419,439,419,400,439,439,400,420,420,421,440,440,421,441,421,422,441,441,422,442,422,423,442,442,423,443,423,424,443,443,424,444,424,425,444,444,425,445,425,426,445,445,426,446,426,427,446,446,427,447,427,428,447,447,428,448,428,429,448,448,429,449,429,430,449,449,430,450,430,431,450,450,431,451,431,432,451,451,432,452,432,433,452,452,433,453,433,434,453,453,434,454,434,435,454,454,435,455,435,436,455,455,436,456,436,437,456,456,437,457,437,438,457,457,438,458,438,439,458,458,439,459,439,420,459,459,420,440,440,441,460,460,441,461,441,442,461,461,442,462,442,443,462,462,443,463,443,444,463,463,444,464,444,445,464,464,445,465,445,446,465,465,446,466,446,447,466,466,447,467,447,448,467,467,448,468,448,449,468,468,449,469,449,450,469,469,450,470,450,451,470,470,451,471,451,452,471,471,452,472,452,453,472,472,453,473,453,454,473,473,454,474,454,455,474,474,455,475,455,456,475,475,456,476,456,457,476,476,457,477,457,458,477,477,458,478,458,459,478,478,459,479,459,440,479,479,440,460,460,461,480,480,461,481,461,462,481,481,462,482,462,463,482,482,463,483,463,464,483,483,464,484,464,465,484,484,465,485,465,466,485,485,466,486,466,467,486,486,467,487,467,468,487,487,468,488,468,469,488,488,469,489,469,470,489,489,470,490,470,471,490,490,471,491,471,472,491,491,472,492,472,473,492,492,473,493,473,474,493,493,474,494,474,475,494,494,475,495,475,476,495,495,476,496,476,477,496,496,477,497,477,478,497,497,478,498,478,479,498,498,479,499,479,460,499,499,460,480,480,481,500,500,481,501,481,482,501,501,482,502,482,483,502,502,483,503,483,484,503,503,484,504,484,485,504,504,485,505,485,486,505,505,486,506,486,487,506,506,487,507,487,488,507,507,488,508,488,489,508,508,489,509,489,490,509,509,490,510,490,491,510,510,491,511,491,492,511,511,492,512,492,493,512,512,493,513,493,494,513,513,494,514,494,495,514,514,495,515,495,496,515,515,496,516,496,497,516,516,497,517,497,498,517,517,498,518,498,499,518,518,499,519,499,480,519,519,480,500,500,501,520,520,501,521,501,502,521,521,502,522,502,503,522,522,503,523,503,504,523,523,504,524,504,505,524,524,505,525,505,506,525,525,506,526,506,507,526,526,507,527,507,508,527,527,508,528,508,509,528,528,509,529,509,510,529,529,510,530,510,511,530,530,511,531,511,512,531,531,512,532,512,513,532,532,513,533,513,514,533,533,514,534,514,515,534,534,515,535,515,516,535,535,516,536,516,517,536,536,517,537,517,518,537,537,518,538,518,519,538,538,519,539,519,500,539,539,500,520,520,521,540,540,521,541,521,522,541,541,522,542,522,523,542,542,523,543,523,524,543,543,524,544,524,525,544,544,525,545,525,526,545,545,526,546,526,527,546,546,527,547,527,528,547,547,528,548,528,529,548,548,529,549,529,530,549,549,530,550,530,531,550,550,531,551,531,532,551,551,532,552,532,533,552,552,533,553,533,534,553,553,534,554,534,535,554,554,535,555,535,536,555,555,536,556,536,537,556,556,537,557,537,538,557,557,538,558,538,539,558,558,539,559,539,520,559,559,520,540,540,541,560,560,541,561,541,542,561,561,542,562,542,543,562,562,543,563,543,544,563,563,544,564,544,545,564,564,545,565,545,546,565,565,546,566,546,547,566,566,547,567,547,548,567,567,548,568,548,549,568,568,549,569,549,550,569,569,550,570,550,551,570,570,551,571,551,552,571,571,552,572,552,553,572,572,553,573,553,554,573,573,554,574,554,555,574,574,555,575,555,556,575,575,556,576,556,557,576,576,557,577,557,558,577,577,558,578,558,559,578,578,559,579,559,540,579,579,540,560,560,561,580,580,561,581,561,562,581,581,562,582,562,563,582,582,563,583,563,564,583,583,564,584,564,565,584,584,565,585,565,566,585,585,566,586,566,567,586,586,567,587,567,568,587,587,568,588,568,569,588,588,569,589,569,570,589,589,570,590,570,571,590,590,571,591,571,572,591,591,572,592,572,573,592,592,573,593,573,574,593,593,574,594,574,575,594,594,575,595,575,576,595,595,576,596,576,577,596,596,577,597,577,578,597,597,578,598,578,579,598,598,579,599,579,560,599,599,560,580,580,581,600,600,581,601,581,582,601,601,582,602,582,583,602,602,583,603,583,584,603,603,584,604,584,585,604,604,585,605,585,586,605,605,586,606,586,587,606,606,587,607,587,588,607,607,588,608,588,589,608,608,589,609,589,590,609,609,590,610,590,591,610,610,591,611,591,592,611,611,592,612,592,593,612,612,593,613,593,594,613,613,594,614,594,595,614,614,595,615,595,596,615,615,596,616,596,597,616,616,597,617,597,598,617,617,598,618,598,599,618,618,599,619,599,580,619,619,580,600,600,601,620,620,601,621,601,602,621,621,602,622,602,603,622,622,603,623,603,604,623,623,604,624,604,605,624,624,605,625,605,606,625,625,606,626,606,607,626,626,607,627,607,608,627,627,608,628,608,609,628,628,609,629,609,610,629,629,610,630,610,611,630,630,611,631,611,612,631,631,612,632,612,613,632,632,613,633,613,614,633,633,614,634,614,615,634,634,615,635,615,616,635,635,616,636,616,617,636,636,617,637,617,618,637,637,618,638,618,619,638,638,619,639,619,600,639,639,600,620,620,621,640,640,621,641,621,622,641,641,622,642,622,623,642,642,623,643,623,624,643,643,624,644,624,625,644,644,625,645,625,626,645,645,626,646,626,627,646,646,627,647,627,628,647,647,628,648,628,629,648,648,629,649,629,630,649,649,630,650,630,631,650,650,631,651,631,632,651,651,632,652,632,633,652,652,633,653,633,634,653,653,634,654,634,635,654,654,635,655,635,636,655,655,636,656,636,637,656,656,637,657,637,638,657,657,638,658,638,639,658,658,639,659,639,620,659,659,620,640,640,641,660,660,641,661,641,642,661,661,642,662,642,643,662,662,643,663,643,644,663,663,644,664,644,645,664,664,645,665,645,646,665,665,646,666,646,647,666,666,647,667,647,648,667,667,648,668,648,649,668,668,649,669,649,650,669,669,650,670,650,651,670,670,651,671,651,652,671,671,652,672,652,653,672,672,653,673,653,654,673,673,654,674,654,655,674,674,655,675,655,656,675,675,656,676,656,657,676,676,657,677,657,658,677,677,658,678,658,659,678,678,659,679,659,640,679,679,640,660,660,661,680,680,661,681,661,662,681,681,662,682,662,663,682,682,663,683,663,664,683,683,664,684,664,665,684,684,665,685,665,666,685,685,666,686,666,667,686,686,667,687,667,668,687,687,668,688,668,669,688,688,669,689,669,670,689,689,670,690,670,671,690,690,671,691,671,672,691,691,672,692,672,673,692,692,673,693,673,674,693,693,674,694,674,675,694,694,675,695,675,676,695,695,676,696,676,677,696,696,677,697,677,678,697,697,678,698,678,679,698,698,679,699,679,660,699,699,660,680,680,681,700,700,681,701,681,682,701,701,682,702,682,683,702,702,683,703,683,684,703,703,684,704,684,685,704,704,685,705,685,686,705,705,686,706,686,687,706,706,687,707,687,688,707,707,688,708,688,689,708,708,689,709,689,690,709,709,690,710,690,691,710,710,691,711,691,692,711,711,692,712,692,693,712,712,693,713,693,694,713,713,694,714,694,695,714,714,695,715,695,696,715,715,696,716,696,697,716,716,697,717,697,698,717,717,698,718,698,699,718,718,699,719,699,680,719,719,680,700,700,701,720,720,701,721,701,702,721,721,702,722,702,703,722,722,703,723,703,704,723,723,704,724,704,705,724,724,705,725,705,706,725,725,706,726,706,707,726,726,707,727,707,708,727,727,708,728,708,709,728,728,709,729,709,710,729,729,710,730,710,711,730,730,711,731,711,712,731,731,712,732,712,713,732,732,713,733,713,714,733,733,714,734,714,715,734,734,715,735,715,716,735,735,716,736,716,717,736,736,717,737,717,718,737,737,718,738,718,719,738,738,719,739,719,700,739,739,700,720,720,721,740,740,721,741,721,722,741,741,722,742,722,723,742,742,723,743,723,724,743,743,724,744,724,725,744,744,725,745,725,726,745,745,726,746,726,727,746,746,727,747,727,728,747,747,728,748,728,729,748,748,729,749,729,730,749,749,730,750,730,731,750,750,731,751,731,732,751,751,732,752,732,733,752,752,733,753,733,734,753,753,734,754,734,735,754,754,735,755,735,736,755,755,736,756,736,737,756,756,737,757,737,738,757,757,738,758,738,739,758,758,739,759,739,720,759,759,720,740,740,741,760,760,741,761,741,742,761,761,742,762,742,743,762,762,743,763,743,744,763,763,744,764,744,745,764,764,745,765,745,746,765,765,746,766,746,747,766,766,747,767,747,748,767,767,748,768,748,749,768,768,749,769,749,750,769,769,750,770,750,751,770,770,751,771,751,752,771,771,752,772,752,753,772,772,753,773,753,754,773,773,754,774,754,755,774,774,755,775,755,756,775,775,756,776,756,757,776,776,757,777,757,758,777,777,758,778,758,759,778,778,759,779,759,740,779,779,740,760,760,761,780,780,761,781,761,762,781,781,762,782,762,763,782,782,763,783,763,764,783,783,764,784,764,765,784,784,765,785,765,766,785,785,766,786,766,767,786,786,767,787,767,768,787,787,768,788,768,769,788,788,769,789,769,770,789,789,770,790,770,771,790,790,771,791,771,772,791,791,772,792,772,773,792,792,773,793,773,774,793,793,774,794,774,775,794,794,775,795,775,776,795,795,776,796,776,777,796,796,777,797,777,778,797,797,778,798,778,779,798,798,779,799,779,760,799,799,760,780,780,781,800,800,781,801,781,782,801,801,782,802,782,783,802,802,783,803,783,784,803,803,784,804,784,785,804,804,785,805,785,786,805,805,786,806,786,787,806,806,787,807,787,788,807,807,788,808,788,789,808,808,789,809,789,790,809,809,790,810,790,791,810,810,791,811,791,792,811,811,792,812,792,793,812,812,793,813,793,794,813,813,794,814,794,795,814,814,795,815,795,796,815,815,796,816,796,797,816,816,797,817,797,798,817,817,798,818,798,799,818,818,799,819,799,780,819,819,780,800,800,801,820,820,801,821,801,802,821,821,802,822,802,803,822,822,803,823,803,804,823,823,804,824,804,805,824,824,805,825,805,806,825,825,806,826,806,807,826,826,807,827,807,808,827,827,808,828,808,809,828,828,809,829,809,810,829,829,810,830,810,811,830,830,811,831,811,812,831,831,812,832,812,813,832,832,813,833,813,814,833,833,814,834,814,815,834,834,815,835,815,816,835,835,816,836,816,817,836,836,817,837,817,818,837,837,818,838,818,819,838,838,819,839,819,800,839,839,800,820,820,821,840,840,821,841,821,822,841,841,822,842,822,823,842,842,823,843,823,824,843,843,824,844,824,825,844,844,825,845,825,826,845,845,826,846,826,827,846,846,827,847,827,828,847,847,828,848,828,829,848,848,829,849,829,830,849,849,830,850,830,831,850,850,831,851,831,832,851,851,832,852,832,833,852,852,833,853,833,834,853,853,834,854,834,835,854,854,835,855,835,836,855,855,836,856,836,837,856,856,837,857,837,838,857,857,838,858,838,839,858,858,839,859,839,820,859,859,820,840,840,841,860,860,841,861,841,842,861,861,842,862,842,843,862,862,843,863,843,844,863,863,844,864,844,845,864,864,845,865,845,846,865,865,846,866,846,847,866,866,847,867,847,848,867,867,848,868,848,849,868,868,849,869,849,850,869,869,850,870,850,851,870,870,851,871,851,852,871,871,852,872,852,853,872,872,853,873,853,854,873,873,854,874,854,855,874,874,855,875,855,856,875,875,856,876,856,857,876,876,857,877,857,858,877,877,858,878,858,859,878,878,859,879,859,840,879,879,840,860,860,861,880,880,861,881,861,862,881,881,862,882,862,863,882,882,863,883,863,864,883,883,864,884,864,865,884,884,865,885,865,866,885,885,866,886,866,867,886,886,867,887,867,868,887,887,868,888,868,869,888,888,869,889,869,870,889,889,870,890,870,871,890,890,871,891,871,872,891,891,872,892,872,873,892,892,873,893,873,874,893,893,874,894,874,875,894,894,875,895,875,876,895,895,876,896,876,877,896,896,877,897,877,878,897,897,878,898,878,879,898,898,879,899,879,860,899,899,860,880,880,881,900,900,881,901,881,882,901,901,882,902,882,883,902,902,883,903,883,884,903,903,884,904,884,885,904,904,885,905,885,886,905,905,886,906,886,887,906,906,887,907,887,888,907,907,888,908,888,889,908,908,889,909,889,890,909,909,890,910,890,891,910,910,891,911,891,892,911,911,892,912,892,893,912,912,893,913,893,894,913,913,894,914,894,895,914,914,895,915,895,896,915,915,896,916,896,897,916,916,897,917,897,898,917,917,898,918,898,899,918,918,899,919,899,880,919,919,880,900,900,901,920,920,901,921,901,902,921,921,902,922,902,903,922,922,903,923,903,904,923,923,904,924,904,905,924,924,905,925,905,906,925,925,906,926,906,907,926,926,907,927,907,908,927,927,908,928,908,909,928,928,909,929,909,910,929,929,910,930,910,911,930,930,911,931,911,912,931,931,912,932,912,913,932,932,913,933,913,914,933,933,914,934,914,915,934,934,915,935,915,916,935,935,916,936,916,917,936,936,917,937,917,918,937,937,918,938,918,919,938,938,919,939,919,900,939,939,900,920,920,921,940,940,921,941,921,922,941,941,922,942,922,923,942,942,923,943,923,924,943,943,924,944,924,925,944,944,925,945,925,926,945,945,926,946,926,927,946,946,927,947,927,928,947,947,928,948,928,929,948,948,929,949,929,930,949,949,930,950,930,931,950,950,931,951,931,932,951,951,932,952,932,933,952,952,933,953,933,934,953,953,934,954,934,935,954,954,935,955,935,936,955,955,936,956,936,937,956,956,937,957,937,938,957,957,938,958,938,939,958,958,939,959,939,920,959,959,920,940,940,941,960,960,941,961,941,942,961,961,942,962,942,943,962,962,943,963,943,944,963,963,944,964,944,945,964,964,945,965,945,946,965,965,946,966,946,947,966,966,947,967,947,948,967,967,948,968,948,949,968,968,949,969,949,950,969,969,950,970,950,951,970,970,951,971,951,952,971,971,952,972,952,953,972,972,953,973,953,954,973,973,954,974,954,955,974,974,955,975,955,956,975,975,956,976,956,957,976,976,957,977,957,958,977,977,958,978,958,959,978,978,959,979,959,940,979,979,940,960,960,961,980,980,961,981,961,962,981,981,962,982,962,963,982,982,963,983,963,964,983,983,964,984,964,965,984,984,965,985,965,966,985,985,966,986,966,967,986,986,967,987,967,968,987,987,968,988,968,969,988,988,969,989,969,970,989,989,970,990,970,971,990,990,971,991,971,972,991,991,972,992,972,973,992,992,973,993,973,974,993,993,974,994,974,975,994,994,975,995,975,976,995,995,976,996,976,977,996,996,977,997,977,978,997,997,978,998,978,979,998,998,979,999,979,960,999,999,960,980,980,981,1e3,1e3,981,1001,981,982,1001,1001,982,1002,982,983,1002,1002,983,1003,983,984,1003,1003,984,1004,984,985,1004,1004,985,1005,985,986,1005,1005,986,1006,986,987,1006,1006,987,1007,987,988,1007,1007,988,1008,988,989,1008,1008,989,1009,989,990,1009,1009,990,1010,990,991,1010,1010,991,1011,991,992,1011,1011,992,1012,992,993,1012,1012,993,1013,993,994,1013,1013,994,1014,994,995,1014,1014,995,1015,995,996,1015,1015,996,1016,996,997,1016,1016,997,1017,997,998,1017,1017,998,1018,998,999,1018,1018,999,1019,999,980,1019,1019,980,1e3,1e3,1001,1020,1020,1001,1021,1001,1002,1021,1021,1002,1022,1002,1003,1022,1022,1003,1023,1003,1004,1023,1023,1004,1024,1004,1005,1024,1024,1005,1025,1005,1006,1025,1025,1006,1026,1006,1007,1026,1026,1007,1027,1007,1008,1027,1027,1008,1028,1008,1009,1028,1028,1009,1029,1009,1010,1029,1029,1010,1030,1010,1011,1030,1030,1011,1031,1011,1012,1031,1031,1012,1032,1012,1013,1032,1032,1013,1033,1013,1014,1033,1033,1014,1034,1014,1015,1034,1034,1015,1035,1015,1016,1035,1035,1016,1036,1016,1017,1036,1036,1017,1037,1017,1018,1037,1037,1018,1038,1018,1019,1038,1038,1019,1039,1019,1e3,1039,1039,1e3,1020,1020,1021,1040,1040,1021,1041,1021,1022,1041,1041,1022,1042,1022,1023,1042,1042,1023,1043,1023,1024,1043,1043,1024,1044,1024,1025,1044,1044,1025,1045,1025,1026,1045,1045,1026,1046,1026,1027,1046,1046,1027,1047,1027,1028,1047,1047,1028,1048,1028,1029,1048,1048,1029,1049,1029,1030,1049,1049,1030,1050,1030,1031,1050,1050,1031,1051,1031,1032,1051,1051,1032,1052,1032,1033,1052,1052,1033,1053,1033,1034,1053,1053,1034,1054,1034,1035,1054,1054,1035,1055,1035,1036,1055,1055,1036,1056,1036,1037,1056,1056,1037,1057,1037,1038,1057,1057,1038,1058,1038,1039,1058,1058,1039,1059,1039,1020,1059,1059,1020,1040,1040,1041,1060,1060,1041,1061,1041,1042,1061,1061,1042,1062,1042,1043,1062,1062,1043,1063,1043,1044,1063,1063,1044,1064,1044,1045,1064,1064,1045,1065,1045,1046,1065,1065,1046,1066,1046,1047,1066,1066,1047,1067,1047,1048,1067,1067,1048,1068,1048,1049,1068,1068,1049,1069,1049,1050,1069,1069,1050,1070,1050,1051,1070,1070,1051,1071,1051,1052,1071,1071,1052,1072,1052,1053,1072,1072,1053,1073,1053,1054,1073,1073,1054,1074,1054,1055,1074,1074,1055,1075,1055,1056,1075,1075,1056,1076,1056,1057,1076,1076,1057,1077,1057,1058,1077,1077,1058,1078,1058,1059,1078,1078,1059,1079,1059,1040,1079,1079,1040,1060,1060,1061,1080,1080,1061,1081,1061,1062,1081,1081,1062,1082,1062,1063,1082,1082,1063,1083,1063,1064,1083,1083,1064,1084,1064,1065,1084,1084,1065,1085,1065,1066,1085,1085,1066,1086,1066,1067,1086,1086,1067,1087,1067,1068,1087,1087,1068,1088,1068,1069,1088,1088,1069,1089,1069,1070,1089,1089,1070,1090,1070,1071,1090,1090,1071,1091,1071,1072,1091,1091,1072,1092,1072,1073,1092,1092,1073,1093,1073,1074,1093,1093,1074,1094,1074,1075,1094,1094,1075,1095,1075,1076,1095,1095,1076,1096,1076,1077,1096,1096,1077,1097,1077,1078,1097,1097,1078,1098,1078,1079,1098,1098,1079,1099,1079,1060,1099,1099,1060,1080,1080,1081,1100,1100,1081,1101,1081,1082,1101,1101,1082,1102,1082,1083,1102,1102,1083,1103,1083,1084,1103,1103,1084,1104,1084,1085,1104,1104,1085,1105,1085,1086,1105,1105,1086,1106,1086,1087,1106,1106,1087,1107,1087,1088,1107,1107,1088,1108,1088,1089,1108,1108,1089,1109,1089,1090,1109,1109,1090,1110,1090,1091,1110,1110,1091,1111,1091,1092,1111,1111,1092,1112,1092,1093,1112,1112,1093,1113,1093,1094,1113,1113,1094,1114,1094,1095,1114,1114,1095,1115,1095,1096,1115,1115,1096,1116,1096,1097,1116,1116,1097,1117,1097,1098,1117,1117,1098,1118,1098,1099,1118,1118,1099,1119,1099,1080,1119,1119,1080,1100,1100,1101,1120,1120,1101,1121,1101,1102,1121,1121,1102,1122,1102,1103,1122,1122,1103,1123,1103,1104,1123,1123,1104,1124,1104,1105,1124,1124,1105,1125,1105,1106,1125,1125,1106,1126,1106,1107,1126,1126,1107,1127,1107,1108,1127,1127,1108,1128,1108,1109,1128,1128,1109,1129,1109,1110,1129,1129,1110,1130,1110,1111,1130,1130,1111,1131,1111,1112,1131,1131,1112,1132,1112,1113,1132,1132,1113,1133,1113,1114,1133,1133,1114,1134,1114,1115,1134,1134,1115,1135,1115,1116,1135,1135,1116,1136,1116,1117,1136,1136,1117,1137,1117,1118,1137,1137,1118,1138,1118,1119,1138,1138,1119,1139,1119,1100,1139,1139,1100,1120,1120,1121,1140,1140,1121,1141,1121,1122,1141,1141,1122,1142,1122,1123,1142,1142,1123,1143,1123,1124,1143,1143,1124,1144,1124,1125,1144,1144,1125,1145,1125,1126,1145,1145,1126,1146,1126,1127,1146,1146,1127,1147,1127,1128,1147,1147,1128,1148,1128,1129,1148,1148,1129,1149,1129,1130,1149,1149,1130,1150,1130,1131,1150,1150,1131,1151,1131,1132,1151,1151,1132,1152,1132,1133,1152,1152,1133,1153,1133,1134,1153,1153,1134,1154,1134,1135,1154,1154,1135,1155,1135,1136,1155,1155,1136,1156,1136,1137,1156,1156,1137,1157,1137,1138,1157,1157,1138,1158,1138,1139,1158,1158,1139,1159,1139,1120,1159,1159,1120,1140,1140,1141,1160,1160,1141,1161,1141,1142,1161,1161,1142,1162,1142,1143,1162,1162,1143,1163,1143,1144,1163,1163,1144,1164,1144,1145,1164,1164,1145,1165,1145,1146,1165,1165,1146,1166,1146,1147,1166,1166,1147,1167,1147,1148,1167,1167,1148,1168,1148,1149,1168,1168,1149,1169,1149,1150,1169,1169,1150,1170,1150,1151,1170,1170,1151,1171,1151,1152,1171,1171,1152,1172,1152,1153,1172,1172,1153,1173,1153,1154,1173,1173,1154,1174,1154,1155,1174,1174,1155,1175,1155,1156,1175,1175,1156,1176,1156,1157,1176,1176,1157,1177,1157,1158,1177,1177,1158,1178,1158,1159,1178,1178,1159,1179,1159,1140,1179,1179,1140,1160,1160,1161,1180,1180,1161,1181,1161,1162,1181,1181,1162,1182,1162,1163,1182,1182,1163,1183,1163,1164,1183,1183,1164,1184,1164,1165,1184,1184,1165,1185,1165,1166,1185,1185,1166,1186,1166,1167,1186,1186,1167,1187,1167,1168,1187,1187,1168,1188,1168,1169,1188,1188,1169,1189,1169,1170,1189,1189,1170,1190,1170,1171,1190,1190,1171,1191,1171,1172,1191,1191,1172,1192,1172,1173,1192,1192,1173,1193,1173,1174,1193,1193,1174,1194,1174,1175,1194,1194,1175,1195,1175,1176,1195,1195,1176,1196,1176,1177,1196,1196,1177,1197,1177,1178,1197,1197,1178,1198,1178,1179,1198,1198,1179,1199,1179,1160,1199,1199,1160,1180,1180,1181,1200,1200,1181,1201,1181,1182,1201,1201,1182,1202,1182,1183,1202,1202,1183,1203,1183,1184,1203,1203,1184,1204,1184,1185,1204,1204,1185,1205,1185,1186,1205,1205,1186,1206,1186,1187,1206,1206,1187,1207,1187,1188,1207,1207,1188,1208,1188,1189,1208,1208,1189,1209,1189,1190,1209,1209,1190,1210,1190,1191,1210,1210,1191,1211,1191,1192,1211,1211,1192,1212,1192,1193,1212,1212,1193,1213,1193,1194,1213,1213,1194,1214,1194,1195,1214,1214,1195,1215,1195,1196,1215,1215,1196,1216,1196,1197,1216,1216,1197,1217,1197,1198,1217,1217,1198,1218,1198,1199,1218,1218,1199,1219,1199,1180,1219,1219,1180,1200,1200,1201,1220,1220,1201,1221,1201,1202,1221,1221,1202,1222,1202,1203,1222,1222,1203,1223,1203,1204,1223,1223,1204,1224,1204,1205,1224,1224,1205,1225,1205,1206,1225,1225,1206,1226,1206,1207,1226,1226,1207,1227,1207,1208,1227,1227,1208,1228,1208,1209,1228,1228,1209,1229,1209,1210,1229,1229,1210,1230,1210,1211,1230,1230,1211,1231,1211,1212,1231,1231,1212,1232,1212,1213,1232,1232,1213,1233,1213,1214,1233,1233,1214,1234,1214,1215,1234,1234,1215,1235,1215,1216,1235,1235,1216,1236,1216,1217,1236,1236,1217,1237,1217,1218,1237,1237,1218,1238,1218,1219,1238,1238,1219,1239,1219,1200,1239,1239,1200,1220,1220,1221,1240,1240,1221,1241,1221,1222,1241,1241,1222,1242,1222,1223,1242,1242,1223,1243,1223,1224,1243,1243,1224,1244,1224,1225,1244,1244,1225,1245,1225,1226,1245,1245,1226,1246,1226,1227,1246,1246,1227,1247,1227,1228,1247,1247,1228,1248,1228,1229,1248,1248,1229,1249,1229,1230,1249,1249,1230,1250,1230,1231,1250,1250,1231,1251,1231,1232,1251,1251,1232,1252,1232,1233,1252,1252,1233,1253,1233,1234,1253,1253,1234,1254,1234,1235,1254,1254,1235,1255,1235,1236,1255,1255,1236,1256,1236,1237,1256,1256,1237,1257,1237,1238,1257,1257,1238,1258,1238,1239,1258,1258,1239,1259,1239,1220,1259,1259,1220,1240,1240,1241,1260,1260,1241,1261,1241,1242,1261,1261,1242,1262,1242,1243,1262,1262,1243,1263,1243,1244,1263,1263,1244,1264,1244,1245,1264,1264,1245,1265,1245,1246,1265,1265,1246,1266,1246,1247,1266,1266,1247,1267,1247,1248,1267,1267,1248,1268,1248,1249,1268,1268,1249,1269,1249,1250,1269,1269,1250,1270,1250,1251,1270,1270,1251,1271,1251,1252,1271,1271,1252,1272,1252,1253,1272,1272,1253,1273,1253,1254,1273,1273,1254,1274,1254,1255,1274,1274,1255,1275,1255,1256,1275,1275,1256,1276,1256,1257,1276,1276,1257,1277,1257,1258,1277,1277,1258,1278,1258,1259,1278,1278,1259,1279,1259,1240,1279,1279,1240,1260,1260,1261,1280,1280,1261,1281,1261,1262,1281,1281,1262,1282,1262,1263,1282,1282,1263,1283,1263,1264,1283,1283,1264,1284,1264,1265,1284,1284,1265,1285,1265,1266,1285,1285,1266,1286,1266,1267,1286,1286,1267,1287,1267,1268,1287,1287,1268,1288,1268,1269,1288,1288,1269,1289,1269,1270,1289,1289,1270,1290,1270,1271,1290,1290,1271,1291,1271,1272,1291,1291,1272,1292,1272,1273,1292,1292,1273,1293,1273,1274,1293,1293,1274,1294,1274,1275,1294,1294,1275,1295,1275,1276,1295,1295,1276,1296,1276,1277,1296,1296,1277,1297,1277,1278,1297,1297,1278,1298,1278,1279,1298,1298,1279,1299,1279,1260,1299,1299,1260,1280,1280,1281,1300,1300,1281,1301,1281,1282,1301,1301,1282,1302,1282,1283,1302,1302,1283,1303,1283,1284,1303,1303,1284,1304,1284,1285,1304,1304,1285,1305,1285,1286,1305,1305,1286,1306,1286,1287,1306,1306,1287,1307,1287,1288,1307,1307,1288,1308,1288,1289,1308,1308,1289,1309,1289,1290,1309,1309,1290,1310,1290,1291,1310,1310,1291,1311,1291,1292,1311,1311,1292,1312,1292,1293,1312,1312,1293,1313,1293,1294,1313,1313,1294,1314,1294,1295,1314,1314,1295,1315,1295,1296,1315,1315,1296,1316,1296,1297,1316,1316,1297,1317,1297,1298,1317,1317,1298,1318,1298,1299,1318,1318,1299,1319,1299,1280,1319,1319,1280,1300,1300,1301,1320,1320,1301,1321,1301,1302,1321,1321,1302,1322,1302,1303,1322,1322,1303,1323,1303,1304,1323,1323,1304,1324,1304,1305,1324,1324,1305,1325,1305,1306,1325,1325,1306,1326,1306,1307,1326,1326,1307,1327,1307,1308,1327,1327,1308,1328,1308,1309,1328,1328,1309,1329,1309,1310,1329,1329,1310,1330,1310,1311,1330,1330,1311,1331,1311,1312,1331,1331,1312,1332,1312,1313,1332,1332,1313,1333,1313,1314,1333,1333,1314,1334,1314,1315,1334,1334,1315,1335,1315,1316,1335,1335,1316,1336,1316,1317,1336,1336,1317,1337,1317,1318,1337,1337,1318,1338,1318,1319,1338,1338,1319,1339,1319,1300,1339,1339,1300,1320,1320,1321,1340,1340,1321,1341,1321,1322,1341,1341,1322,1342,1322,1323,1342,1342,1323,1343,1323,1324,1343,1343,1324,1344,1324,1325,1344,1344,1325,1345,1325,1326,1345,1345,1326,1346,1326,1327,1346,1346,1327,1347,1327,1328,1347,1347,1328,1348,1328,1329,1348,1348,1329,1349,1329,1330,1349,1349,1330,1350,1330,1331,1350,1350,1331,1351,1331,1332,1351,1351,1332,1352,1332,1333,1352,1352,1333,1353,1333,1334,1353,1353,1334,1354,1334,1335,1354,1354,1335,1355,1335,1336,1355,1355,1336,1356,1336,1337,1356,1356,1337,1357,1337,1338,1357,1357,1338,1358,1338,1339,1358,1358,1339,1359,1339,1320,1359,1359,1320,1340,1340,1341,1360,1360,1341,1361,1341,1342,1361,1361,1342,1362,1342,1343,1362,1362,1343,1363,1343,1344,1363,1363,1344,1364,1344,1345,1364,1364,1345,1365,1345,1346,1365,1365,1346,1366,1346,1347,1366,1366,1347,1367,1347,1348,1367,1367,1348,1368,1348,1349,1368,1368,1349,1369,1349,1350,1369,1369,1350,1370,1350,1351,1370,1370,1351,1371,1351,1352,1371,1371,1352,1372,1352,1353,1372,1372,1353,1373,1353,1354,1373,1373,1354,1374,1354,1355,1374,1374,1355,1375,1355,1356,1375,1375,1356,1376,1356,1357,1376,1376,1357,1377,1357,1358,1377,1377,1358,1378,1358,1359,1378,1378,1359,1379,1359,1340,1379,1379,1340,1360,1360,1361,1380,1380,1361,1381,1361,1362,1381,1381,1362,1382,1362,1363,1382,1382,1363,1383,1363,1364,1383,1383,1364,1384,1364,1365,1384,1384,1365,1385,1365,1366,1385,1385,1366,1386,1366,1367,1386,1386,1367,1387,1367,1368,1387,1387,1368,1388,1368,1369,1388,1388,1369,1389,1369,1370,1389,1389,1370,1390,1370,1371,1390,1390,1371,1391,1371,1372,1391,1391,1372,1392,1372,1373,1392,1392,1373,1393,1373,1374,1393,1393,1374,1394,1374,1375,1394,1394,1375,1395,1375,1376,1395,1395,1376,1396,1376,1377,1396,1396,1377,1397,1377,1378,1397,1397,1378,1398,1378,1379,1398,1398,1379,1399,1379,1360,1399,1399,1360,1380,1380,1381,1400,1400,1381,1401,1381,1382,1401,1401,1382,1402,1382,1383,1402,1402,1383,1403,1383,1384,1403,1403,1384,1404,1384,1385,1404,1404,1385,1405,1385,1386,1405,1405,1386,1406,1386,1387,1406,1406,1387,1407,1387,1388,1407,1407,1388,1408,1388,1389,1408,1408,1389,1409,1389,1390,1409,1409,1390,1410,1390,1391,1410,1410,1391,1411,1391,1392,1411,1411,1392,1412,1392,1393,1412,1412,1393,1413,1393,1394,1413,1413,1394,1414,1394,1395,1414,1414,1395,1415,1395,1396,1415,1415,1396,1416,1396,1397,1416,1416,1397,1417,1397,1398,1417,1417,1398,1418,1398,1399,1418,1418,1399,1419,1399,1380,1419,1419,1380,1400,1400,1401,1420,1420,1401,1421,1401,1402,1421,1421,1402,1422,1402,1403,1422,1422,1403,1423,1403,1404,1423,1423,1404,1424,1404,1405,1424,1424,1405,1425,1405,1406,1425,1425,1406,1426,1406,1407,1426,1426,1407,1427,1407,1408,1427,1427,1408,1428,1408,1409,1428,1428,1409,1429,1409,1410,1429,1429,1410,1430,1410,1411,1430,1430,1411,1431,1411,1412,1431,1431,1412,1432,1412,1413,1432,1432,1413,1433,1413,1414,1433,1433,1414,1434,1414,1415,1434,1434,1415,1435,1415,1416,1435,1435,1416,1436,1416,1417,1436,1436,1417,1437,1417,1418,1437,1437,1418,1438,1418,1419,1438,1438,1419,1439,1419,1400,1439,1439,1400,1420,1420,1421,1440,1440,1421,1441,1421,1422,1441,1441,1422,1442,1422,1423,1442,1442,1423,1443,1423,1424,1443,1443,1424,1444,1424,1425,1444,1444,1425,1445,1425,1426,1445,1445,1426,1446,1426,1427,1446,1446,1427,1447,1427,1428,1447,1447,1428,1448,1428,1429,1448,1448,1429,1449,1429,1430,1449,1449,1430,1450,1430,1431,1450,1450,1431,1451,1431,1432,1451,1451,1432,1452,1432,1433,1452,1452,1433,1453,1433,1434,1453,1453,1434,1454,1434,1435,1454,1454,1435,1455,1435,1436,1455,1455,1436,1456,1436,1437,1456,1456,1437,1457,1437,1438,1457,1457,1438,1458,1438,1439,1458,1458,1439,1459,1439,1420,1459,1459,1420,1440,1440,1441,1460,1460,1441,1461,1441,1442,1461,1461,1442,1462,1442,1443,1462,1462,1443,1463,1443,1444,1463,1463,1444,1464,1444,1445,1464,1464,1445,1465,1445,1446,1465,1465,1446,1466,1446,1447,1466,1466,1447,1467,1447,1448,1467,1467,1448,1468,1448,1449,1468,1468,1449,1469,1449,1450,1469,1469,1450,1470,1450,1451,1470,1470,1451,1471,1451,1452,1471,1471,1452,1472,1452,1453,1472,1472,1453,1473,1453,1454,1473,1473,1454,1474,1454,1455,1474,1474,1455,1475,1455,1456,1475,1475,1456,1476,1456,1457,1476,1476,1457,1477,1457,1458,1477,1477,1458,1478,1458,1459,1478,1478,1459,1479,1459,1440,1479,1479,1440,1460,1460,1461,1480,1480,1461,1481,1461,1462,1481,1481,1462,1482,1462,1463,1482,1482,1463,1483,1463,1464,1483,1483,1464,1484,1464,1465,1484,1484,1465,1485,1465,1466,1485,1485,1466,1486,1466,1467,1486,1486,1467,1487,1467,1468,1487,1487,1468,1488,1468,1469,1488,1488,1469,1489,1469,1470,1489,1489,1470,1490,1470,1471,1490,1490,1471,1491,1471,1472,1491,1491,1472,1492,1472,1473,1492,1492,1473,1493,1473,1474,1493,1493,1474,1494,1474,1475,1494,1494,1475,1495,1475,1476,1495,1495,1476,1496,1476,1477,1496,1496,1477,1497,1477,1478,1497,1497,1478,1498,1478,1479,1498,1498,1479,1499,1479,1460,1499,1499,1460,1480,1480,1481,1500,1500,1481,1501,1481,1482,1501,1501,1482,1502,1482,1483,1502,1502,1483,1503,1483,1484,1503,1503,1484,1504,1484,1485,1504,1504,1485,1505,1485,1486,1505,1505,1486,1506,1486,1487,1506,1506,1487,1507,1487,1488,1507,1507,1488,1508,1488,1489,1508,1508,1489,1509,1489,1490,1509,1509,1490,1510,1490,1491,1510,1510,1491,1511,1491,1492,1511,1511,1492,1512,1492,1493,1512,1512,1493,1513,1493,1494,1513,1513,1494,1514,1494,1495,1514,1514,1495,1515,1495,1496,1515,1515,1496,1516,1496,1497,1516,1516,1497,1517,1497,1498,1517,1517,1498,1518,1498,1499,1518,1518,1499,1519,1499,1480,1519,1519,1480,1500,1500,1501,1520,1520,1501,1521,1501,1502,1521,1521,1502,1522,1502,1503,1522,1522,1503,1523,1503,1504,1523,1523,1504,1524,1504,1505,1524,1524,1505,1525,1505,1506,1525,1525,1506,1526,1506,1507,1526,1526,1507,1527,1507,1508,1527,1527,1508,1528,1508,1509,1528,1528,1509,1529,1509,1510,1529,1529,1510,1530,1510,1511,1530,1530,1511,1531,1511,1512,1531,1531,1512,1532,1512,1513,1532,1532,1513,1533,1513,1514,1533,1533,1514,1534,1514,1515,1534,1534,1515,1535,1515,1516,1535,1535,1516,1536,1516,1517,1536,1536,1517,1537,1517,1518,1537,1537,1518,1538,1518,1519,1538,1538,1519,1539,1519,1500,1539,1539,1500,1520,1520,1521,1540,1540,1521,1541,1521,1522,1541,1541,1522,1542,1522,1523,1542,1542,1523,1543,1523,1524,1543,1543,1524,1544,1524,1525,1544,1544,1525,1545,1525,1526,1545,1545,1526,1546,1526,1527,1546,1546,1527,1547,1527,1528,1547,1547,1528,1548,1528,1529,1548,1548,1529,1549,1529,1530,1549,1549,1530,1550,1530,1531,1550,1550,1531,1551,1531,1532,1551,1551,1532,1552,1532,1533,1552,1552,1533,1553,1533,1534,1553,1553,1534,1554,1534,1535,1554,1554,1535,1555,1535,1536,1555,1555,1536,1556,1536,1537,1556,1556,1537,1557,1537,1538,1557,1557,1538,1558,1538,1539,1558,1558,1539,1559,1539,1520,1559,1559,1520,1540,1540,1541,1560,1560,1541,1561,1541,1542,1561,1561,1542,1562,1542,1543,1562,1562,1543,1563,1543,1544,1563,1563,1544,1564,1544,1545,1564,1564,1545,1565,1545,1546,1565,1565,1546,1566,1546,1547,1566,1566,1547,1567,1547,1548,1567,1567,1548,1568,1548,1549,1568,1568,1549,1569,1549,1550,1569,1569,1550,1570,1550,1551,1570,1570,1551,1571,1551,1552,1571,1571,1552,1572,1552,1553,1572,1572,1553,1573,1553,1554,1573,1573,1554,1574,1554,1555,1574,1574,1555,1575,1555,1556,1575,1575,1556,1576,1556,1557,1576,1576,1557,1577,1557,1558,1577,1577,1558,1578,1558,1559,1578,1578,1559,1579,1559,1540,1579,1579,1540,1560,1560,1561,1580,1580,1561,1581,1561,1562,1581,1581,1562,1582,1562,1563,1582,1582,1563,1583,1563,1564,1583,1583,1564,1584,1564,1565,1584,1584,1565,1585,1565,1566,1585,1585,1566,1586,1566,1567,1586,1586,1567,1587,1567,1568,1587,1587,1568,1588,1568,1569,1588,1588,1569,1589,1569,1570,1589,1589,1570,1590,1570,1571,1590,1590,1571,1591,1571,1572,1591,1591,1572,1592,1572,1573,1592,1592,1573,1593,1573,1574,1593,1593,1574,1594,1574,1575,1594,1594,1575,1595,1575,1576,1595,1595,1576,1596,1576,1577,1596,1596,1577,1597,1577,1578,1597,1597,1578,1598,1578,1579,1598,1598,1579,1599,1579,1560,1599,1599,1560,1580,1580,1581,1600,1600,1581,1601,1581,1582,1601,1601,1582,1602,1582,1583,1602,1602,1583,1603,1583,1584,1603,1603,1584,1604,1584,1585,1604,1604,1585,1605,1585,1586,1605,1605,1586,1606,1586,1587,1606,1606,1587,1607,1587,1588,1607,1607,1588,1608,1588,1589,1608,1608,1589,1609,1589,1590,1609,1609,1590,1610,1590,1591,1610,1610,1591,1611,1591,1592,1611,1611,1592,1612,1592,1593,1612,1612,1593,1613,1593,1594,1613,1613,1594,1614,1594,1595,1614,1614,1595,1615,1595,1596,1615,1615,1596,1616,1596,1597,1616,1616,1597,1617,1597,1598,1617,1617,1598,1618,1598,1599,1618,1618,1599,1619,1599,1580,1619,1619,1580,1600,1600,1601,1620,1620,1601,1621,1601,1602,1621,1621,1602,1622,1602,1603,1622,1622,1603,1623,1603,1604,1623,1623,1604,1624,1604,1605,1624,1624,1605,1625,1605,1606,1625,1625,1606,1626,1606,1607,1626,1626,1607,1627,1607,1608,1627,1627,1608,1628,1608,1609,1628,1628,1609,1629,1609,1610,1629,1629,1610,1630,1610,1611,1630,1630,1611,1631,1611,1612,1631,1631,1612,1632,1612,1613,1632,1632,1613,1633,1613,1614,1633,1633,1614,1634,1614,1615,1634,1634,1615,1635,1615,1616,1635,1635,1616,1636,1616,1617,1636,1636,1617,1637,1617,1618,1637,1637,1618,1638,1618,1619,1638,1638,1619,1639,1619,1600,1639,1639,1600,1620,1620,1621,1640,1640,1621,1641,1621,1622,1641,1641,1622,1642,1622,1623,1642,1642,1623,1643,1623,1624,1643,1643,1624,1644,1624,1625,1644,1644,1625,1645,1625,1626,1645,1645,1626,1646,1626,1627,1646,1646,1627,1647,1627,1628,1647,1647,1628,1648,1628,1629,1648,1648,1629,1649,1629,1630,1649,1649,1630,1650,1630,1631,1650,1650,1631,1651,1631,1632,1651,1651,1632,1652,1632,1633,1652,1652,1633,1653,1633,1634,1653,1653,1634,1654,1634,1635,1654,1654,1635,1655,1635,1636,1655,1655,1636,1656,1636,1637,1656,1656,1637,1657,1637,1638,1657,1657,1638,1658,1638,1639,1658,1658,1639,1659,1639,1620,1659,1659,1620,1640,1640,1641,1660,1660,1641,1661,1641,1642,1661,1661,1642,1662,1642,1643,1662,1662,1643,1663,1643,1644,1663,1663,1644,1664,1644,1645,1664,1664,1645,1665,1645,1646,1665,1665,1646,1666,1646,1647,1666,1666,1647,1667,1647,1648,1667,1667,1648,1668,1648,1649,1668,1668,1649,1669,1649,1650,1669,1669,1650,1670,1650,1651,1670,1670,1651,1671,1651,1652,1671,1671,1652,1672,1652,1653,1672,1672,1653,1673,1653,1654,1673,1673,1654,1674,1654,1655,1674,1674,1655,1675,1655,1656,1675,1675,1656,1676,1656,1657,1676,1676,1657,1677,1657,1658,1677,1677,1658,1678,1658,1659,1678,1678,1659,1679,1659,1640,1679,1679,1640,1660,1660,1661,1680,1680,1661,1681,1661,1662,1681,1681,1662,1682,1662,1663,1682,1682,1663,1683,1663,1664,1683,1683,1664,1684,1664,1665,1684,1684,1665,1685,1665,1666,1685,1685,1666,1686,1666,1667,1686,1686,1667,1687,1667,1668,1687,1687,1668,1688,1668,1669,1688,1688,1669,1689,1669,1670,1689,1689,1670,1690,1670,1671,1690,1690,1671,1691,1671,1672,1691,1691,1672,1692,1672,1673,1692,1692,1673,1693,1673,1674,1693,1693,1674,1694,1674,1675,1694,1694,1675,1695,1675,1676,1695,1695,1676,1696,1676,1677,1696,1696,1677,1697,1677,1678,1697,1697,1678,1698,1678,1679,1698,1698,1679,1699,1679,1660,1699,1699,1660,1680,1680,1681,1700,1700,1681,1701,1681,1682,1701,1701,1682,1702,1682,1683,1702,1702,1683,1703,1683,1684,1703,1703,1684,1704,1684,1685,1704,1704,1685,1705,1685,1686,1705,1705,1686,1706,1686,1687,1706,1706,1687,1707,1687,1688,1707,1707,1688,1708,1688,1689,1708,1708,1689,1709,1689,1690,1709,1709,1690,1710,1690,1691,1710,1710,1691,1711,1691,1692,1711,1711,1692,1712,1692,1693,1712,1712,1693,1713,1693,1694,1713,1713,1694,1714,1694,1695,1714,1714,1695,1715,1695,1696,1715,1715,1696,1716,1696,1697,1716,1716,1697,1717,1697,1698,1717,1717,1698,1718,1698,1699,1718,1718,1699,1719,1699,1680,1719,1719,1680,1700,1700,1701,1720,1720,1701,1721,1701,1702,1721,1721,1702,1722,1702,1703,1722,1722,1703,1723,1703,1704,1723,1723,1704,1724,1704,1705,1724,1724,1705,1725,1705,1706,1725,1725,1706,1726,1706,1707,1726,1726,1707,1727,1707,1708,1727,1727,1708,1728,1708,1709,1728,1728,1709,1729,1709,1710,1729,1729,1710,1730,1710,1711,1730,1730,1711,1731,1711,1712,1731,1731,1712,1732,1712,1713,1732,1732,1713,1733,1713,1714,1733,1733,1714,1734,1714,1715,1734,1734,1715,1735,1715,1716,1735,1735,1716,1736,1716,1717,1736,1736,1717,1737,1717,1718,1737,1737,1718,1738,1718,1719,1738,1738,1719,1739,1719,1700,1739,1739,1700,1720,1720,1721,1740,1740,1721,1741,1721,1722,1741,1741,1722,1742,1722,1723,1742,1742,1723,1743,1723,1724,1743,1743,1724,1744,1724,1725,1744,1744,1725,1745,1725,1726,1745,1745,1726,1746,1726,1727,1746,1746,1727,1747,1727,1728,1747,1747,1728,1748,1728,1729,1748,1748,1729,1749,1729,1730,1749,1749,1730,1750,1730,1731,1750,1750,1731,1751,1731,1732,1751,1751,1732,1752,1732,1733,1752,1752,1733,1753,1733,1734,1753,1753,1734,1754,1734,1735,1754,1754,1735,1755,1735,1736,1755,1755,1736,1756,1736,1737,1756,1756,1737,1757,1737,1738,1757,1757,1738,1758,1738,1739,1758,1758,1739,1759,1739,1720,1759,1759,1720,1740,1740,1741,1760,1760,1741,1761,1741,1742,1761,1761,1742,1762,1742,1743,1762,1762,1743,1763,1743,1744,1763,1763,1744,1764,1744,1745,1764,1764,1745,1765,1745,1746,1765,1765,1746,1766,1746,1747,1766,1766,1747,1767,1747,1748,1767,1767,1748,1768,1748,1749,1768,1768,1749,1769,1749,1750,1769,1769,1750,1770,1750,1751,1770,1770,1751,1771,1751,1752,1771,1771,1752,1772,1752,1753,1772,1772,1753,1773,1753,1754,1773,1773,1754,1774,1754,1755,1774,1774,1755,1775,1755,1756,1775,1775,1756,1776,1756,1757,1776,1776,1757,1777,1757,1758,1777,1777,1758,1778,1758,1759,1778,1778,1759,1779,1759,1740,1779,1779,1740,1760,1760,1761,1780,1780,1761,1781,1761,1762,1781,1781,1762,1782,1762,1763,1782,1782,1763,1783,1763,1764,1783,1783,1764,1784,1764,1765,1784,1784,1765,1785,1765,1766,1785,1785,1766,1786,1766,1767,1786,1786,1767,1787,1767,1768,1787,1787,1768,1788,1768,1769,1788,1788,1769,1789,1769,1770,1789,1789,1770,1790,1770,1771,1790,1790,1771,1791,1771,1772,1791,1791,1772,1792,1772,1773,1792,1792,1773,1793,1773,1774,1793,1793,1774,1794,1774,1775,1794,1794,1775,1795,1775,1776,1795,1795,1776,1796,1776,1777,1796,1796,1777,1797,1777,1778,1797,1797,1778,1798,1778,1779,1798,1798,1779,1799,1779,1760,1799,1799,1760,1780,1780,1781,1800,1800,1781,1801,1781,1782,1801,1801,1782,1802,1782,1783,1802,1802,1783,1803,1783,1784,1803,1803,1784,1804,1784,1785,1804,1804,1785,1805,1785,1786,1805,1805,1786,1806,1786,1787,1806,1806,1787,1807,1787,1788,1807,1807,1788,1808,1788,1789,1808,1808,1789,1809,1789,1790,1809,1809,1790,1810,1790,1791,1810,1810,1791,1811,1791,1792,1811,1811,1792,1812,1792,1793,1812,1812,1793,1813,1793,1794,1813,1813,1794,1814,1794,1795,1814,1814,1795,1815,1795,1796,1815,1815,1796,1816,1796,1797,1816,1816,1797,1817,1797,1798,1817,1817,1798,1818,1798,1799,1818,1818,1799,1819,1799,1780,1819,1819,1780,1800,1800,1801,1820,1820,1801,1821,1801,1802,1821,1821,1802,1822,1802,1803,1822,1822,1803,1823,1803,1804,1823,1823,1804,1824,1804,1805,1824,1824,1805,1825,1805,1806,1825,1825,1806,1826,1806,1807,1826,1826,1807,1827,1807,1808,1827,1827,1808,1828,1808,1809,1828,1828,1809,1829,1809,1810,1829,1829,1810,1830,1810,1811,1830,1830,1811,1831,1811,1812,1831,1831,1812,1832,1812,1813,1832,1832,1813,1833,1813,1814,1833,1833,1814,1834,1814,1815,1834,1834,1815,1835,1815,1816,1835,1835,1816,1836,1816,1817,1836,1836,1817,1837,1817,1818,1837,1837,1818,1838,1818,1819,1838,1838,1819,1839,1819,1800,1839,1839,1800,1820,1820,1821,1840,1840,1821,1841,1821,1822,1841,1841,1822,1842,1822,1823,1842,1842,1823,1843,1823,1824,1843,1843,1824,1844,1824,1825,1844,1844,1825,1845,1825,1826,1845,1845,1826,1846,1826,1827,1846,1846,1827,1847,1827,1828,1847,1847,1828,1848,1828,1829,1848,1848,1829,1849,1829,1830,1849,1849,1830,1850,1830,1831,1850,1850,1831,1851,1831,1832,1851,1851,1832,1852,1832,1833,1852,1852,1833,1853,1833,1834,1853,1853,1834,1854,1834,1835,1854,1854,1835,1855,1835,1836,1855,1855,1836,1856,1836,1837,1856,1856,1837,1857,1837,1838,1857,1857,1838,1858,1838,1839,1858,1858,1839,1859,1839,1820,1859,1859,1820,1840,1840,1841,1860,1860,1841,1861,1841,1842,1861,1861,1842,1862,1842,1843,1862,1862,1843,1863,1843,1844,1863,1863,1844,1864,1844,1845,1864,1864,1845,1865,1845,1846,1865,1865,1846,1866,1846,1847,1866,1866,1847,1867,1847,1848,1867,1867,1848,1868,1848,1849,1868,1868,1849,1869,1849,1850,1869,1869,1850,1870,1850,1851,1870,1870,1851,1871,1851,1852,1871,1871,1852,1872,1852,1853,1872,1872,1853,1873,1853,1854,1873,1873,1854,1874,1854,1855,1874,1874,1855,1875,1855,1856,1875,1875,1856,1876,1856,1857,1876,1876,1857,1877,1857,1858,1877,1877,1858,1878,1858,1859,1878,1878,1859,1879,1859,1840,1879,1879,1840,1860,1860,1861,1880,1880,1861,1881,1861,1862,1881,1881,1862,1882,1862,1863,1882,1882,1863,1883,1863,1864,1883,1883,1864,1884,1864,1865,1884,1884,1865,1885,1865,1866,1885,1885,1866,1886,1866,1867,1886,1886,1867,1887,1867,1868,1887,1887,1868,1888,1868,1869,1888,1888,1869,1889,1869,1870,1889,1889,1870,1890,1870,1871,1890,1890,1871,1891,1871,1872,1891,1891,1872,1892,1872,1873,1892,1892,1873,1893,1873,1874,1893,1893,1874,1894,1874,1875,1894,1894,1875,1895,1875,1876,1895,1895,1876,1896,1876,1877,1896,1896,1877,1897,1877,1878,1897,1897,1878,1898,1878,1879,1898,1898,1879,1899,1879,1860,1899,1899,1860,1880,1880,1881,1900,1900,1881,1901,1881,1882,1901,1901,1882,1902,1882,1883,1902,1902,1883,1903,1883,1884,1903,1903,1884,1904,1884,1885,1904,1904,1885,1905,1885,1886,1905,1905,1886,1906,1886,1887,1906,1906,1887,1907,1887,1888,1907,1907,1888,1908,1888,1889,1908,1908,1889,1909,1889,1890,1909,1909,1890,1910,1890,1891,1910,1910,1891,1911,1891,1892,1911,1911,1892,1912,1892,1893,1912,1912,1893,1913,1893,1894,1913,1913,1894,1914,1894,1895,1914,1914,1895,1915,1895,1896,1915,1915,1896,1916,1896,1897,1916,1916,1897,1917,1897,1898,1917,1917,1898,1918,1898,1899,1918,1918,1899,1919,1899,1880,1919,1919,1880,1900,1900,1901,1920,1920,1901,1921,1901,1902,1921,1921,1902,1922,1902,1903,1922,1922,1903,1923,1903,1904,1923,1923,1904,1924,1904,1905,1924,1924,1905,1925,1905,1906,1925,1925,1906,1926,1906,1907,1926,1926,1907,1927,1907,1908,1927,1927,1908,1928,1908,1909,1928,1928,1909,1929,1909,1910,1929,1929,1910,1930,1910,1911,1930,1930,1911,1931,1911,1912,1931,1931,1912,1932,1912,1913,1932,1932,1913,1933,1913,1914,1933,1933,1914,1934,1914,1915,1934,1934,1915,1935,1915,1916,1935,1935,1916,1936,1916,1917,1936,1936,1917,1937,1917,1918,1937,1937,1918,1938,1918,1919,1938,1938,1919,1939,1919,1900,1939,1939,1900,1920,1920,1921,1940,1940,1921,1941,1921,1922,1941,1941,1922,1942,1922,1923,1942,1942,1923,1943,1923,1924,1943,1943,1924,1944,1924,1925,1944,1944,1925,1945,1925,1926,1945,1945,1926,1946,1926,1927,1946,1946,1927,1947,1927,1928,1947,1947,1928,1948,1928,1929,1948,1948,1929,1949,1929,1930,1949,1949,1930,1950,1930,1931,1950,1950,1931,1951,1931,1932,1951,1951,1932,1952,1932,1933,1952,1952,1933,1953,1933,1934,1953,1953,1934,1954,1934,1935,1954,1954,1935,1955,1935,1936,1955,1955,1936,1956,1936,1937,1956,1956,1937,1957,1937,1938,1957,1957,1938,1958,1938,1939,1958,1958,1939,1959,1939,1920,1959,1959,1920,1940,1940,1941,1960,1960,1941,1961,1941,1942,1961,1961,1942,1962,1942,1943,1962,1962,1943,1963,1943,1944,1963,1963,1944,1964,1944,1945,1964,1964,1945,1965,1945,1946,1965,1965,1946,1966,1946,1947,1966,1966,1947,1967,1947,1948,1967,1967,1948,1968,1948,1949,1968,1968,1949,1969,1949,1950,1969,1969,1950,1970,1950,1951,1970,1970,1951,1971,1951,1952,1971,1971,1952,1972,1952,1953,1972,1972,1953,1973,1953,1954,1973,1973,1954,1974,1954,1955,1974,1974,1955,1975,1955,1956,1975,1975,1956,1976,1956,1957,1976,1976,1957,1977,1957,1958,1977,1977,1958,1978,1958,1959,1978,1978,1959,1979,1959,1940,1979,1979,1940,1960,1960,1961,1980,1980,1961,1981,1961,1962,1981,1981,1962,1982,1962,1963,1982,1982,1963,1983,1963,1964,1983,1983,1964,1984,1964,1965,1984,1984,1965,1985,1965,1966,1985,1985,1966,1986,1966,1967,1986,1986,1967,1987,1967,1968,1987,1987,1968,1988,1968,1969,1988,1988,1969,1989,1969,1970,1989,1989,1970,1990,1970,1971,1990,1990,1971,1991,1971,1972,1991,1991,1972,1992,1972,1973,1992,1992,1973,1993,1973,1974,1993,1993,1974,1994,1974,1975,1994,1994,1975,1995,1975,1976,1995,1995,1976,1996,1976,1977,1996,1996,1977,1997,1977,1978,1997,1997,1978,1998,1978,1979,1998,1998,1979,1999,1979,1960,1999,1999,1960,1980,1980,1981,2e3,2e3,1981,2001,1981,1982,2001,2001,1982,2002,1982,1983,2002,2002,1983,2003,1983,1984,2003,2003,1984,2004,1984,1985,2004,2004,1985,2005,1985,1986,2005,2005,1986,2006,1986,1987,2006,2006,1987,2007,1987,1988,2007,2007,1988,2008,1988,1989,2008,2008,1989,2009,1989,1990,2009,2009,1990,2010,1990,1991,2010,2010,1991,2011,1991,1992,2011,2011,1992,2012,1992,1993,2012,2012,1993,2013,1993,1994,2013,2013,1994,2014,1994,1995,2014,2014,1995,2015,1995,1996,2015,2015,1996,2016,1996,1997,2016,2016,1997,2017,1997,1998,2017,2017,1998,2018,1998,1999,2018,2018,1999,2019,1999,1980,2019,2019,1980,2e3,2e3,2001,2020,2020,2001,2021,2001,2002,2021,2021,2002,2022,2002,2003,2022,2022,2003,2023,2003,2004,2023,2023,2004,2024,2004,2005,2024,2024,2005,2025,2005,2006,2025,2025,2006,2026,2006,2007,2026,2026,2007,2027,2007,2008,2027,2027,2008,2028,2008,2009,2028,2028,2009,2029,2009,2010,2029,2029,2010,2030,2010,2011,2030,2030,2011,2031,2011,2012,2031,2031,2012,2032,2012,2013,2032,2032,2013,2033,2013,2014,2033,2033,2014,2034,2014,2015,2034,2034,2015,2035,2015,2016,2035,2035,2016,2036,2016,2017,2036,2036,2017,2037,2017,2018,2037,2037,2018,2038,2018,2019,2038,2038,2019,2039,2019,2e3,2039,2039,2e3,2020,2020,2021,2040,2040,2021,2041,2021,2022,2041,2041,2022,2042,2022,2023,2042,2042,2023,2043,2023,2024,2043,2043,2024,2044,2024,2025,2044,2044,2025,2045,2025,2026,2045,2045,2026,2046,2026,2027,2046,2046,2027,2047,2027,2028,2047,2047,2028,2048,2028,2029,2048,2048,2029,2049,2029,2030,2049,2049,2030,2050,2030,2031,2050,2050,2031,2051,2031,2032,2051,2051,2032,2052,2032,2033,2052,2052,2033,2053,2033,2034,2053,2053,2034,2054,2034,2035,2054,2054,2035,2055,2035,2036,2055,2055,2036,2056,2036,2037,2056,2056,2037,2057,2037,2038,2057,2057,2038,2058,2038,2039,2058,2058,2039,2059,2039,2020,2059,2059,2020,2040,2040,2041,2060,2060,2041,2061,2041,2042,2061,2061,2042,2062,2042,2043,2062,2062,2043,2063,2043,2044,2063,2063,2044,2064,2044,2045,2064,2064,2045,2065,2045,2046,2065,2065,2046,2066,2046,2047,2066,2066,2047,2067,2047,2048,2067,2067,2048,2068,2048,2049,2068,2068,2049,2069,2049,2050,2069,2069,2050,2070,2050,2051,2070,2070,2051,2071,2051,2052,2071,2071,2052,2072,2052,2053,2072,2072,2053,2073,2053,2054,2073,2073,2054,2074,2054,2055,2074,2074,2055,2075,2055,2056,2075,2075,2056,2076,2056,2057,2076,2076,2057,2077,2057,2058,2077,2077,2058,2078,2058,2059,2078,2078,2059,2079,2059,2040,2079,2079,2040,2060,2060,2061,2080,2080,2061,2081,2061,2062,2081,2081,2062,2082,2062,2063,2082,2082,2063,2083,2063,2064,2083,2083,2064,2084,2064,2065,2084,2084,2065,2085,2065,2066,2085,2085,2066,2086,2066,2067,2086,2086,2067,2087,2067,2068,2087,2087,2068,2088,2068,2069,2088,2088,2069,2089,2069,2070,2089,2089,2070,2090,2070,2071,2090,2090,2071,2091,2071,2072,2091,2091,2072,2092,2072,2073,2092,2092,2073,2093,2073,2074,2093,2093,2074,2094,2074,2075,2094,2094,2075,2095,2075,2076,2095,2095,2076,2096,2076,2077,2096,2096,2077,2097,2077,2078,2097,2097,2078,2098,2078,2079,2098,2098,2079,2099,2079,2060,2099,2099,2060,2080,2080,2081,2100,2100,2081,2101,2081,2082,2101,2101,2082,2102,2082,2083,2102,2102,2083,2103,2083,2084,2103,2103,2084,2104,2084,2085,2104,2104,2085,2105,2085,2086,2105,2105,2086,2106,2086,2087,2106,2106,2087,2107,2087,2088,2107,2107,2088,2108,2088,2089,2108,2108,2089,2109,2089,2090,2109,2109,2090,2110,2090,2091,2110,2110,2091,2111,2091,2092,2111,2111,2092,2112,2092,2093,2112,2112,2093,2113,2093,2094,2113,2113,2094,2114,2094,2095,2114,2114,2095,2115,2095,2096,2115,2115,2096,2116,2096,2097,2116,2116,2097,2117,2097,2098,2117,2117,2098,2118,2098,2099,2118,2118,2099,2119,2099,2080,2119,2119,2080,2100,2100,2101,2120,2120,2101,2121,2101,2102,2121,2121,2102,2122,2102,2103,2122,2122,2103,2123,2103,2104,2123,2123,2104,2124,2104,2105,2124,2124,2105,2125,2105,2106,2125,2125,2106,2126,2106,2107,2126,2126,2107,2127,2107,2108,2127,2127,2108,2128,2108,2109,2128,2128,2109,2129,2109,2110,2129,2129,2110,2130,2110,2111,2130,2130,2111,2131,2111,2112,2131,2131,2112,2132,2112,2113,2132,2132,2113,2133,2113,2114,2133,2133,2114,2134,2114,2115,2134,2134,2115,2135,2115,2116,2135,2135,2116,2136,2116,2117,2136,2136,2117,2137,2117,2118,2137,2137,2118,2138,2118,2119,2138,2138,2119,2139,2119,2100,2139,2139,2100,2120,2120,2121,2140,2140,2121,2141,2121,2122,2141,2141,2122,2142,2122,2123,2142,2142,2123,2143,2123,2124,2143,2143,2124,2144,2124,2125,2144,2144,2125,2145,2125,2126,2145,2145,2126,2146,2126,2127,2146,2146,2127,2147,2127,2128,2147,2147,2128,2148,2128,2129,2148,2148,2129,2149,2129,2130,2149,2149,2130,2150,2130,2131,2150,2150,2131,2151,2131,2132,2151,2151,2132,2152,2132,2133,2152,2152,2133,2153,2133,2134,2153,2153,2134,2154,2134,2135,2154,2154,2135,2155,2135,2136,2155,2155,2136,2156,2136,2137,2156,2156,2137,2157,2137,2138,2157,2157,2138,2158,2138,2139,2158,2158,2139,2159,2139,2120,2159,2159,2120,2140,2140,2141,2160,2160,2141,2161,2141,2142,2161,2161,2142,2162,2142,2143,2162,2162,2143,2163,2143,2144,2163,2163,2144,2164,2144,2145,2164,2164,2145,2165,2145,2146,2165,2165,2146,2166,2146,2147,2166,2166,2147,2167,2147,2148,2167,2167,2148,2168,2148,2149,2168,2168,2149,2169,2149,2150,2169,2169,2150,2170,2150,2151,2170,2170,2151,2171,2151,2152,2171,2171,2152,2172,2152,2153,2172,2172,2153,2173,2153,2154,2173,2173,2154,2174,2154,2155,2174,2174,2155,2175,2155,2156,2175,2175,2156,2176,2156,2157,2176,2176,2157,2177,2157,2158,2177,2177,2158,2178,2158,2159,2178,2178,2159,2179,2159,2140,2179,2179,2140,2160,2160,2161,2180,2180,2161,2181,2161,2162,2181,2181,2162,2182,2162,2163,2182,2182,2163,2183,2163,2164,2183,2183,2164,2184,2164,2165,2184,2184,2165,2185,2165,2166,2185,2185,2166,2186,2166,2167,2186,2186,2167,2187,2167,2168,2187,2187,2168,2188,2168,2169,2188,2188,2169,2189,2169,2170,2189,2189,2170,2190,2170,2171,2190,2190,2171,2191,2171,2172,2191,2191,2172,2192,2172,2173,2192,2192,2173,2193,2173,2174,2193,2193,2174,2194,2174,2175,2194,2194,2175,2195,2175,2176,2195,2195,2176,2196,2176,2177,2196,2196,2177,2197,2177,2178,2197,2197,2178,2198,2178,2179,2198,2198,2179,2199,2179,2160,2199,2199,2160,2180,2180,2181,2200,2200,2181,2201,2181,2182,2201,2201,2182,2202,2182,2183,2202,2202,2183,2203,2183,2184,2203,2203,2184,2204,2184,2185,2204,2204,2185,2205,2185,2186,2205,2205,2186,2206,2186,2187,2206,2206,2187,2207,2187,2188,2207,2207,2188,2208,2188,2189,2208,2208,2189,2209,2189,2190,2209,2209,2190,2210,2190,2191,2210,2210,2191,2211,2191,2192,2211,2211,2192,2212,2192,2193,2212,2212,2193,2213,2193,2194,2213,2213,2194,2214,2194,2195,2214,2214,2195,2215,2195,2196,2215,2215,2196,2216,2196,2197,2216,2216,2197,2217,2197,2198,2217,2217,2198,2218,2198,2199,2218,2218,2199,2219,2199,2180,2219,2219,2180,2200,2200,2201,2220,2220,2201,2221,2201,2202,2221,2221,2202,2222,2202,2203,2222,2222,2203,2223,2203,2204,2223,2223,2204,2224,2204,2205,2224,2224,2205,2225,2205,2206,2225,2225,2206,2226,2206,2207,2226,2226,2207,2227,2207,2208,2227,2227,2208,2228,2208,2209,2228,2228,2209,2229,2209,2210,2229,2229,2210,2230,2210,2211,2230,2230,2211,2231,2211,2212,2231,2231,2212,2232,2212,2213,2232,2232,2213,2233,2213,2214,2233,2233,2214,2234,2214,2215,2234,2234,2215,2235,2215,2216,2235,2235,2216,2236,2216,2217,2236,2236,2217,2237,2217,2218,2237,2237,2218,2238,2218,2219,2238,2238,2219,2239,2219,2200,2239,2239,2200,2220,2220,2221,2240,2240,2221,2241,2221,2222,2241,2241,2222,2242,2222,2223,2242,2242,2223,2243,2223,2224,2243,2243,2224,2244,2224,2225,2244,2244,2225,2245,2225,2226,2245,2245,2226,2246,2226,2227,2246,2246,2227,2247,2227,2228,2247,2247,2228,2248,2228,2229,2248,2248,2229,2249,2229,2230,2249,2249,2230,2250,2230,2231,2250,2250,2231,2251,2231,2232,2251,2251,2232,2252,2232,2233,2252,2252,2233,2253,2233,2234,2253,2253,2234,2254,2234,2235,2254,2254,2235,2255,2235,2236,2255,2255,2236,2256,2236,2237,2256,2256,2237,2257,2237,2238,2257,2257,2238,2258,2238,2239,2258,2258,2239,2259,2239,2220,2259,2259,2220,2240,2240,2241,2260,2260,2241,2261,2241,2242,2261,2261,2242,2262,2242,2243,2262,2262,2243,2263,2243,2244,2263,2263,2244,2264,2244,2245,2264,2264,2245,2265,2245,2246,2265,2265,2246,2266,2246,2247,2266,2266,2247,2267,2247,2248,2267,2267,2248,2268,2248,2249,2268,2268,2249,2269,2249,2250,2269,2269,2250,2270,2250,2251,2270,2270,2251,2271,2251,2252,2271,2271,2252,2272,2252,2253,2272,2272,2253,2273,2253,2254,2273,2273,2254,2274,2254,2255,2274,2274,2255,2275,2255,2256,2275,2275,2256,2276,2256,2257,2276,2276,2257,2277,2257,2258,2277,2277,2258,2278,2258,2259,2278,2278,2259,2279,2259,2240,2279,2279,2240,2260,2260,2261,2280,2280,2261,2281,2261,2262,2281,2281,2262,2282,2262,2263,2282,2282,2263,2283,2263,2264,2283,2283,2264,2284,2264,2265,2284,2284,2265,2285,2265,2266,2285,2285,2266,2286,2266,2267,2286,2286,2267,2287,2267,2268,2287,2287,2268,2288,2268,2269,2288,2288,2269,2289,2269,2270,2289,2289,2270,2290,2270,2271,2290,2290,2271,2291,2271,2272,2291,2291,2272,2292,2272,2273,2292,2292,2273,2293,2273,2274,2293,2293,2274,2294,2274,2275,2294,2294,2275,2295,2275,2276,2295,2295,2276,2296,2276,2277,2296,2296,2277,2297,2277,2278,2297,2297,2278,2298,2278,2279,2298,2298,2279,2299,2279,2260,2299,2299,2260,2280,2280,2281,2300,2300,2281,2301,2281,2282,2301,2301,2282,2302,2282,2283,2302,2302,2283,2303,2283,2284,2303,2303,2284,2304,2284,2285,2304,2304,2285,2305,2285,2286,2305,2305,2286,2306,2286,2287,2306,2306,2287,2307,2287,2288,2307,2307,2288,2308,2288,2289,2308,2308,2289,2309,2289,2290,2309,2309,2290,2310,2290,2291,2310,2310,2291,2311,2291,2292,2311,2311,2292,2312,2292,2293,2312,2312,2293,2313,2293,2294,2313,2313,2294,2314,2294,2295,2314,2314,2295,2315,2295,2296,2315,2315,2296,2316,2296,2297,2316,2316,2297,2317,2297,2298,2317,2317,2298,2318,2298,2299,2318,2318,2299,2319,2299,2280,2319,2319,2280,2300,2300,2301,2320,2320,2301,2321,2301,2302,2321,2321,2302,2322,2302,2303,2322,2322,2303,2323,2303,2304,2323,2323,2304,2324,2304,2305,2324,2324,2305,2325,2305,2306,2325,2325,2306,2326,2306,2307,2326,2326,2307,2327,2307,2308,2327,2327,2308,2328,2308,2309,2328,2328,2309,2329,2309,2310,2329,2329,2310,2330,2310,2311,2330,2330,2311,2331,2311,2312,2331,2331,2312,2332,2312,2313,2332,2332,2313,2333,2313,2314,2333,2333,2314,2334,2314,2315,2334,2334,2315,2335,2315,2316,2335,2335,2316,2336,2316,2317,2336,2336,2317,2337,2317,2318,2337,2337,2318,2338,2318,2319,2338,2338,2319,2339,2319,2300,2339,2339,2300,2320,2320,2321,2340,2340,2321,2341,2321,2322,2341,2341,2322,2342,2322,2323,2342,2342,2323,2343,2323,2324,2343,2343,2324,2344,2324,2325,2344,2344,2325,2345,2325,2326,2345,2345,2326,2346,2326,2327,2346,2346,2327,2347,2327,2328,2347,2347,2328,2348,2328,2329,2348,2348,2329,2349,2329,2330,2349,2349,2330,2350,2330,2331,2350,2350,2331,2351,2331,2332,2351,2351,2332,2352,2332,2333,2352,2352,2333,2353,2333,2334,2353,2353,2334,2354,2334,2335,2354,2354,2335,2355,2335,2336,2355,2355,2336,2356,2336,2337,2356,2356,2337,2357,2337,2338,2357,2357,2338,2358,2338,2339,2358,2358,2339,2359,2339,2320,2359,2359,2320,2340,2340,2341,2360,2360,2341,2361,2341,2342,2361,2361,2342,2362,2342,2343,2362,2362,2343,2363,2343,2344,2363,2363,2344,2364,2344,2345,2364,2364,2345,2365,2345,2346,2365,2365,2346,2366,2346,2347,2366,2366,2347,2367,2347,2348,2367,2367,2348,2368,2348,2349,2368,2368,2349,2369,2349,2350,2369,2369,2350,2370,2350,2351,2370,2370,2351,2371,2351,2352,2371,2371,2352,2372,2352,2353,2372,2372,2353,2373,2353,2354,2373,2373,2354,2374,2354,2355,2374,2374,2355,2375,2355,2356,2375,2375,2356,2376,2356,2357,2376,2376,2357,2377,2357,2358,2377,2377,2358,2378,2358,2359,2378,2378,2359,2379,2359,2340,2379,2379,2340,2360,2360,2361,2380,2380,2361,2381,2361,2362,2381,2381,2362,2382,2362,2363,2382,2382,2363,2383,2363,2364,2383,2383,2364,2384,2364,2365,2384,2384,2365,2385,2365,2366,2385,2385,2366,2386,2366,2367,2386,2386,2367,2387,2367,2368,2387,2387,2368,2388,2368,2369,2388,2388,2369,2389,2369,2370,2389,2389,2370,2390,2370,2371,2390,2390,2371,2391,2371,2372,2391,2391,2372,2392,2372,2373,2392,2392,2373,2393,2373,2374,2393,2393,2374,2394,2374,2375,2394,2394,2375,2395,2375,2376,2395,2395,2376,2396,2376,2377,2396,2396,2377,2397,2377,2378,2397,2397,2378,2398,2378,2379,2398,2398,2379,2399,2379,2360,2399,2399,2360,2380,2380,2381,2400,2400,2381,2401,2381,2382,2401,2401,2382,2402,2382,2383,2402,2402,2383,2403,2383,2384,2403,2403,2384,2404,2384,2385,2404,2404,2385,2405,2385,2386,2405,2405,2386,2406,2386,2387,2406,2406,2387,2407,2387,2388,2407,2407,2388,2408,2388,2389,2408,2408,2389,2409,2389,2390,2409,2409,2390,2410,2390,2391,2410,2410,2391,2411,2391,2392,2411,2411,2392,2412,2392,2393,2412,2412,2393,2413,2393,2394,2413,2413,2394,2414,2394,2395,2414,2414,2395,2415,2395,2396,2415,2415,2396,2416,2396,2397,2416,2416,2397,2417,2397,2398,2417,2417,2398,2418,2398,2399,2418,2418,2399,2419,2399,2380,2419,2419,2380,2400,2400,2401,2420,2420,2401,2421,2401,2402,2421,2421,2402,2422,2402,2403,2422,2422,2403,2423,2403,2404,2423,2423,2404,2424,2404,2405,2424,2424,2405,2425,2405,2406,2425,2425,2406,2426,2406,2407,2426,2426,2407,2427,2407,2408,2427,2427,2408,2428,2408,2409,2428,2428,2409,2429,2409,2410,2429,2429,2410,2430,2410,2411,2430,2430,2411,2431,2411,2412,2431,2431,2412,2432,2412,2413,2432,2432,2413,2433,2413,2414,2433,2433,2414,2434,2414,2415,2434,2434,2415,2435,2415,2416,2435,2435,2416,2436,2416,2417,2436,2436,2417,2437,2417,2418,2437,2437,2418,2438,2418,2419,2438,2438,2419,2439,2419,2400,2439,2439,2400,2420,2420,2421,2440,2440,2421,2441,2421,2422,2441,2441,2422,2442,2422,2423,2442,2442,2423,2443,2423,2424,2443,2443,2424,2444,2424,2425,2444,2444,2425,2445,2425,2426,2445,2445,2426,2446,2426,2427,2446,2446,2427,2447,2427,2428,2447,2447,2428,2448,2428,2429,2448,2448,2429,2449,2429,2430,2449,2449,2430,2450,2430,2431,2450,2450,2431,2451,2431,2432,2451,2451,2432,2452,2432,2433,2452,2452,2433,2453,2433,2434,2453,2453,2434,2454,2434,2435,2454,2454,2435,2455,2435,2436,2455,2455,2436,2456,2436,2437,2456,2456,2437,2457,2437,2438,2457,2457,2438,2458,2438,2439,2458,2458,2439,2459,2439,2420,2459,2459,2420,2440,2440,2441,2460,2460,2441,2461,2441,2442,2461,2461,2442,2462,2442,2443,2462,2462,2443,2463,2443,2444,2463,2463,2444,2464,2444,2445,2464,2464,2445,2465,2445,2446,2465,2465,2446,2466,2446,2447,2466,2466,2447,2467,2447,2448,2467,2467,2448,2468,2448,2449,2468,2468,2449,2469,2449,2450,2469,2469,2450,2470,2450,2451,2470,2470,2451,2471,2451,2452,2471,2471,2452,2472,2452,2453,2472,2472,2453,2473,2453,2454,2473,2473,2454,2474,2454,2455,2474,2474,2455,2475,2455,2456,2475,2475,2456,2476,2456,2457,2476,2476,2457,2477,2457,2458,2477,2477,2458,2478,2458,2459,2478,2478,2459,2479,2459,2440,2479,2479,2440,2460,2460,2461,2480,2480,2461,2481,2461,2462,2481,2481,2462,2482,2462,2463,2482,2482,2463,2483,2463,2464,2483,2483,2464,2484,2464,2465,2484,2484,2465,2485,2465,2466,2485,2485,2466,2486,2466,2467,2486,2486,2467,2487,2467,2468,2487,2487,2468,2488,2468,2469,2488,2488,2469,2489,2469,2470,2489,2489,2470,2490,2470,2471,2490,2490,2471,2491,2471,2472,2491,2491,2472,2492,2472,2473,2492,2492,2473,2493,2473,2474,2493,2493,2474,2494,2474,2475,2494,2494,2475,2495,2475,2476,2495,2495,2476,2496,2476,2477,2496,2496,2477,2497,2477,2478,2497,2497,2478,2498,2478,2479,2498,2498,2479,2499,2479,2460,2499,2499,2460,2480,2480,2481,2500,2500,2481,2501,2481,2482,2501,2501,2482,2502,2482,2483,2502,2502,2483,2503,2483,2484,2503,2503,2484,2504,2484,2485,2504,2504,2485,2505,2485,2486,2505,2505,2486,2506,2486,2487,2506,2506,2487,2507,2487,2488,2507,2507,2488,2508,2488,2489,2508,2508,2489,2509,2489,2490,2509,2509,2490,2510,2490,2491,2510,2510,2491,2511,2491,2492,2511,2511,2492,2512,2492,2493,2512,2512,2493,2513,2493,2494,2513,2513,2494,2514,2494,2495,2514,2514,2495,2515,2495,2496,2515,2515,2496,2516,2496,2497,2516,2516,2497,2517,2497,2498,2517,2517,2498,2518,2498,2499,2518,2518,2499,2519,2499,2480,2519,2519,2480,2500,2500,2501,2520,2520,2501,2521,2501,2502,2521,2521,2502,2522,2502,2503,2522,2522,2503,2523,2503,2504,2523,2523,2504,2524,2504,2505,2524,2524,2505,2525,2505,2506,2525,2525,2506,2526,2506,2507,2526,2526,2507,2527,2507,2508,2527,2527,2508,2528,2508,2509,2528,2528,2509,2529,2509,2510,2529,2529,2510,2530,2510,2511,2530,2530,2511,2531,2511,2512,2531,2531,2512,2532,2512,2513,2532,2532,2513,2533,2513,2514,2533,2533,2514,2534,2514,2515,2534,2534,2515,2535,2515,2516,2535,2535,2516,2536,2516,2517,2536,2536,2517,2537,2517,2518,2537,2537,2518,2538,2518,2519,2538,2538,2519,2539,2519,2500,2539,2539,2500,2520,2520,2521,2540,2540,2521,2541,2521,2522,2541,2541,2522,2542,2522,2523,2542,2542,2523,2543,2523,2524,2543,2543,2524,2544,2524,2525,2544,2544,2525,2545,2525,2526,2545,2545,2526,2546,2526,2527,2546,2546,2527,2547,2527,2528,2547,2547,2528,2548,2528,2529,2548,2548,2529,2549,2529,2530,2549,2549,2530,2550,2530,2531,2550,2550,2531,2551,2531,2532,2551,2551,2532,2552,2532,2533,2552,2552,2533,2553,2533,2534,2553,2553,2534,2554,2534,2535,2554,2554,2535,2555,2535,2536,2555,2555,2536,2556,2536,2537,2556,2556,2537,2557,2537,2538,2557,2557,2538,2558,2538,2539,2558,2558,2539,2559,2539,2520,2559,2559,2520,2540,2540,2541,2560,2560,2541,2561,2541,2542,2561,2561,2542,2562,2542,2543,2562,2562,2543,2563,2543,2544,2563,2563,2544,2564,2544,2545,2564,2564,2545,2565,2545,2546,2565,2565,2546,2566,2546,2547,2566,2566,2547,2567,2547,2548,2567,2567,2548,2568,2548,2549,2568,2568,2549,2569,2549,2550,2569,2569,2550,2570,2550,2551,2570,2570,2551,2571,2551,2552,2571,2571,2552,2572,2552,2553,2572,2572,2553,2573,2553,2554,2573,2573,2554,2574,2554,2555,2574,2574,2555,2575,2555,2556,2575,2575,2556,2576,2556,2557,2576,2576,2557,2577,2557,2558,2577,2577,2558,2578,2558,2559,2578,2578,2559,2579,2559,2540,2579,2579,2540,2560,2560,2561,2580,2580,2561,2581,2561,2562,2581,2581,2562,2582,2562,2563,2582,2582,2563,2583,2563,2564,2583,2583,2564,2584,2564,2565,2584,2584,2565,2585,2565,2566,2585,2585,2566,2586,2566,2567,2586,2586,2567,2587,2567,2568,2587,2587,2568,2588,2568,2569,2588,2588,2569,2589,2569,2570,2589,2589,2570,2590,2570,2571,2590,2590,2571,2591,2571,2572,2591,2591,2572,2592,2572,2573,2592,2592,2573,2593,2573,2574,2593,2593,2574,2594,2574,2575,2594,2594,2575,2595,2575,2576,2595,2595,2576,2596,2576,2577,2596,2596,2577,2597,2577,2578,2597,2597,2578,2598,2578,2579,2598,2598,2579,2599,2579,2560,2599,2599,2560,2580,2580,2581,2600,2600,2581,2601,2581,2582,2601,2601,2582,2602,2582,2583,2602,2602,2583,2603,2583,2584,2603,2603,2584,2604,2584,2585,2604,2604,2585,2605,2585,2586,2605,2605,2586,2606,2586,2587,2606,2606,2587,2607,2587,2588,2607,2607,2588,2608,2588,2589,2608,2608,2589,2609,2589,2590,2609,2609,2590,2610,2590,2591,2610,2610,2591,2611,2591,2592,2611,2611,2592,2612,2592,2593,2612,2612,2593,2613,2593,2594,2613,2613,2594,2614,2594,2595,2614,2614,2595,2615,2595,2596,2615,2615,2596,2616,2596,2597,2616,2616,2597,2617,2597,2598,2617,2617,2598,2618,2598,2599,2618,2618,2599,2619,2599,2580,2619,2619,2580,2600,2600,2601,2620,2620,2601,2621,2601,2602,2621,2621,2602,2622,2602,2603,2622,2622,2603,2623,2603,2604,2623,2623,2604,2624,2604,2605,2624,2624,2605,2625,2605,2606,2625,2625,2606,2626,2606,2607,2626,2626,2607,2627,2607,2608,2627,2627,2608,2628,2608,2609,2628,2628,2609,2629,2609,2610,2629,2629,2610,2630,2610,2611,2630,2630,2611,2631,2611,2612,2631,2631,2612,2632,2612,2613,2632,2632,2613,2633,2613,2614,2633,2633,2614,2634,2614,2615,2634,2634,2615,2635,2615,2616,2635,2635,2616,2636,2616,2617,2636,2636,2617,2637,2617,2618,2637,2637,2618,2638,2618,2619,2638,2638,2619,2639,2619,2600,2639,2639,2600,2620,2620,2621,2640,2640,2621,2641,2621,2622,2641,2641,2622,2642,2622,2623,2642,2642,2623,2643,2623,2624,2643,2643,2624,2644,2624,2625,2644,2644,2625,2645,2625,2626,2645,2645,2626,2646,2626,2627,2646,2646,2627,2647,2627,2628,2647,2647,2628,2648,2628,2629,2648,2648,2629,2649,2629,2630,2649,2649,2630,2650,2630,2631,2650,2650,2631,2651,2631,2632,2651,2651,2632,2652,2632,2633,2652,2652,2633,2653,2633,2634,2653,2653,2634,2654,2634,2635,2654,2654,2635,2655,2635,2636,2655,2655,2636,2656,2636,2637,2656,2656,2637,2657,2637,2638,2657,2657,2638,2658,2638,2639,2658,2658,2639,2659,2639,2620,2659,2659,2620,2640,2640,2641,2660,2660,2641,2661,2641,2642,2661,2661,2642,2662,2642,2643,2662,2662,2643,2663,2643,2644,2663,2663,2644,2664,2644,2645,2664,2664,2645,2665,2645,2646,2665,2665,2646,2666,2646,2647,2666,2666,2647,2667,2647,2648,2667,2667,2648,2668,2648,2649,2668,2668,2649,2669,2649,2650,2669,2669,2650,2670,2650,2651,2670,2670,2651,2671,2651,2652,2671,2671,2652,2672,2652,2653,2672,2672,2653,2673,2653,2654,2673,2673,2654,2674,2654,2655,2674,2674,2655,2675,2655,2656,2675,2675,2656,2676,2656,2657,2676,2676,2657,2677,2657,2658,2677,2677,2658,2678,2658,2659,2678,2678,2659,2679,2659,2640,2679,2679,2640,2660,2660,2661,2680,2680,2661,2681,2661,2662,2681,2681,2662,2682,2662,2663,2682,2682,2663,2683,2663,2664,2683,2683,2664,2684,2664,2665,2684,2684,2665,2685,2665,2666,2685,2685,2666,2686,2666,2667,2686,2686,2667,2687,2667,2668,2687,2687,2668,2688,2668,2669,2688,2688,2669,2689,2669,2670,2689,2689,2670,2690,2670,2671,2690,2690,2671,2691,2671,2672,2691,2691,2672,2692,2672,2673,2692,2692,2673,2693,2673,2674,2693,2693,2674,2694,2674,2675,2694,2694,2675,2695,2675,2676,2695,2695,2676,2696,2676,2677,2696,2696,2677,2697,2677,2678,2697,2697,2678,2698,2678,2679,2698,2698,2679,2699,2679,2660,2699,2699,2660,2680,2680,2681,2700,2700,2681,2701,2681,2682,2701,2701,2682,2702,2682,2683,2702,2702,2683,2703,2683,2684,2703,2703,2684,2704,2684,2685,2704,2704,2685,2705,2685,2686,2705,2705,2686,2706,2686,2687,2706,2706,2687,2707,2687,2688,2707,2707,2688,2708,2688,2689,2708,2708,2689,2709,2689,2690,2709,2709,2690,2710,2690,2691,2710,2710,2691,2711,2691,2692,2711,2711,2692,2712,2692,2693,2712,2712,2693,2713,2693,2694,2713,2713,2694,2714,2694,2695,2714,2714,2695,2715,2695,2696,2715,2715,2696,2716,2696,2697,2716,2716,2697,2717,2697,2698,2717,2717,2698,2718,2698,2699,2718,2718,2699,2719,2699,2680,2719,2719,2680,2700,2700,2701,2720,2720,2701,2721,2701,2702,2721,2721,2702,2722,2702,2703,2722,2722,2703,2723,2703,2704,2723,2723,2704,2724,2704,2705,2724,2724,2705,2725,2705,2706,2725,2725,2706,2726,2706,2707,2726,2726,2707,2727,2707,2708,2727,2727,2708,2728,2708,2709,2728,2728,2709,2729,2709,2710,2729,2729,2710,2730,2710,2711,2730,2730,2711,2731,2711,2712,2731,2731,2712,2732,2712,2713,2732,2732,2713,2733,2713,2714,2733,2733,2714,2734,2714,2715,2734,2734,2715,2735,2715,2716,2735,2735,2716,2736,2716,2717,2736,2736,2717,2737,2717,2718,2737,2737,2718,2738,2718,2719,2738,2738,2719,2739,2719,2700,2739,2739,2700,2720,2720,2721,2740,2740,2721,2741,2721,2722,2741,2741,2722,2742,2722,2723,2742,2742,2723,2743,2723,2724,2743,2743,2724,2744,2724,2725,2744,2744,2725,2745,2725,2726,2745,2745,2726,2746,2726,2727,2746,2746,2727,2747,2727,2728,2747,2747,2728,2748,2728,2729,2748,2748,2729,2749,2729,2730,2749,2749,2730,2750,2730,2731,2750,2750,2731,2751,2731,2732,2751,2751,2732,2752,2732,2733,2752,2752,2733,2753,2733,2734,2753,2753,2734,2754,2734,2735,2754,2754,2735,2755,2735,2736,2755,2755,2736,2756,2736,2737,2756,2756,2737,2757,2737,2738,2757,2757,2738,2758,2738,2739,2758,2758,2739,2759,2739,2720,2759,2759,2720,2740,2740,2741,2760,2760,2741,2761,2741,2742,2761,2761,2742,2762,2742,2743,2762,2762,2743,2763,2743,2744,2763,2763,2744,2764,2744,2745,2764,2764,2745,2765,2745,2746,2765,2765,2746,2766,2746,2747,2766,2766,2747,2767,2747,2748,2767,2767,2748,2768,2748,2749,2768,2768,2749,2769,2749,2750,2769,2769,2750,2770,2750,2751,2770,2770,2751,2771,2751,2752,2771,2771,2752,2772,2752,2753,2772,2772,2753,2773,2753,2754,2773,2773,2754,2774,2754,2755,2774,2774,2755,2775,2755,2756,2775,2775,2756,2776,2756,2757,2776,2776,2757,2777,2757,2758,2777,2777,2758,2778,2758,2759,2778,2778,2759,2779,2759,2740,2779,2779,2740,2760,2760,2761,2780,2780,2761,2781,2761,2762,2781,2781,2762,2782,2762,2763,2782,2782,2763,2783,2763,2764,2783,2783,2764,2784,2764,2765,2784,2784,2765,2785,2765,2766,2785,2785,2766,2786,2766,2767,2786,2786,2767,2787,2767,2768,2787,2787,2768,2788,2768,2769,2788,2788,2769,2789,2769,2770,2789,2789,2770,2790,2770,2771,2790,2790,2771,2791,2771,2772,2791,2791,2772,2792,2772,2773,2792,2792,2773,2793,2773,2774,2793,2793,2774,2794,2774,2775,2794,2794,2775,2795,2775,2776,2795,2795,2776,2796,2776,2777,2796,2796,2777,2797,2777,2778,2797,2797,2778,2798,2778,2779,2798,2798,2779,2799,2779,2760,2799,2799,2760,2780,2780,2781,2800,2800,2781,2801,2781,2782,2801,2801,2782,2802,2782,2783,2802,2802,2783,2803,2783,2784,2803,2803,2784,2804,2784,2785,2804,2804,2785,2805,2785,2786,2805,2805,2786,2806,2786,2787,2806,2806,2787,2807,2787,2788,2807,2807,2788,2808,2788,2789,2808,2808,2789,2809,2789,2790,2809,2809,2790,2810,2790,2791,2810,2810,2791,2811,2791,2792,2811,2811,2792,2812,2792,2793,2812,2812,2793,2813,2793,2794,2813,2813,2794,2814,2794,2795,2814,2814,2795,2815,2795,2796,2815,2815,2796,2816,2796,2797,2816,2816,2797,2817,2797,2798,2817,2817,2798,2818,2798,2799,2818,2818,2799,2819,2799,2780,2819,2819,2780,2800,2800,2801,2820,2820,2801,2821,2801,2802,2821,2821,2802,2822,2802,2803,2822,2822,2803,2823,2803,2804,2823,2823,2804,2824,2804,2805,2824,2824,2805,2825,2805,2806,2825,2825,2806,2826,2806,2807,2826,2826,2807,2827,2807,2808,2827,2827,2808,2828,2808,2809,2828,2828,2809,2829,2809,2810,2829,2829,2810,2830,2810,2811,2830,2830,2811,2831,2811,2812,2831,2831,2812,2832,2812,2813,2832,2832,2813,2833,2813,2814,2833,2833,2814,2834,2814,2815,2834,2834,2815,2835,2815,2816,2835,2835,2816,2836,2816,2817,2836,2836,2817,2837,2817,2818,2837,2837,2818,2838,2818,2819,2838,2838,2819,2839,2819,2800,2839,2839,2800,2820,2820,2821,2840,2840,2821,2841,2821,2822,2841,2841,2822,2842,2822,2823,2842,2842,2823,2843,2823,2824,2843,2843,2824,2844,2824,2825,2844,2844,2825,2845,2825,2826,2845,2845,2826,2846,2826,2827,2846,2846,2827,2847,2827,2828,2847,2847,2828,2848,2828,2829,2848,2848,2829,2849,2829,2830,2849,2849,2830,2850,2830,2831,2850,2850,2831,2851,2831,2832,2851,2851,2832,2852,2832,2833,2852,2852,2833,2853,2833,2834,2853,2853,2834,2854,2834,2835,2854,2854,2835,2855,2835,2836,2855,2855,2836,2856,2836,2837,2856,2856,2837,2857,2837,2838,2857,2857,2838,2858,2838,2839,2858,2858,2839,2859,2839,2820,2859,2859,2820,2840,2840,2841,2860,2860,2841,2861,2841,2842,2861,2861,2842,2862,2842,2843,2862,2862,2843,2863,2843,2844,2863,2863,2844,2864,2844,2845,2864,2864,2845,2865,2845,2846,2865,2865,2846,2866,2846,2847,2866,2866,2847,2867,2847,2848,2867,2867,2848,2868,2848,2849,2868,2868,2849,2869,2849,2850,2869,2869,2850,2870,2850,2851,2870,2870,2851,2871,2851,2852,2871,2871,2852,2872,2852,2853,2872,2872,2853,2873,2853,2854,2873,2873,2854,2874,2854,2855,2874,2874,2855,2875,2855,2856,2875,2875,2856,2876,2856,2857,2876,2876,2857,2877,2857,2858,2877,2877,2858,2878,2858,2859,2878,2878,2859,2879,2859,2840,2879,2879,2840,2860,2860,2861,2880,2880,2861,2881,2861,2862,2881,2881,2862,2882,2862,2863,2882,2882,2863,2883,2863,2864,2883,2883,2864,2884,2864,2865,2884,2884,2865,2885,2865,2866,2885,2885,2866,2886,2866,2867,2886,2886,2867,2887,2867,2868,2887,2887,2868,2888,2868,2869,2888,2888,2869,2889,2869,2870,2889,2889,2870,2890,2870,2871,2890,2890,2871,2891,2871,2872,2891,2891,2872,2892,2872,2873,2892,2892,2873,2893,2873,2874,2893,2893,2874,2894,2874,2875,2894,2894,2875,2895,2875,2876,2895,2895,2876,2896,2876,2877,2896,2896,2877,2897,2877,2878,2897,2897,2878,2898,2878,2879,2898,2898,2879,2899,2879,2860,2899,2899,2860,2880,2880,2881,2900,2900,2881,2901,2881,2882,2901,2901,2882,2902,2882,2883,2902,2902,2883,2903,2883,2884,2903,2903,2884,2904,2884,2885,2904,2904,2885,2905,2885,2886,2905,2905,2886,2906,2886,2887,2906,2906,2887,2907,2887,2888,2907,2907,2888,2908,2888,2889,2908,2908,2889,2909,2889,2890,2909,2909,2890,2910,2890,2891,2910,2910,2891,2911,2891,2892,2911,2911,2892,2912,2892,2893,2912,2912,2893,2913,2893,2894,2913,2913,2894,2914,2894,2895,2914,2914,2895,2915,2895,2896,2915,2915,2896,2916,2896,2897,2916,2916,2897,2917,2897,2898,2917,2917,2898,2918,2898,2899,2918,2918,2899,2919,2899,2880,2919,2919,2880,2900,2900,2901,2920,2920,2901,2921,2901,2902,2921,2921,2902,2922,2902,2903,2922,2922,2903,2923,2903,2904,2923,2923,2904,2924,2904,2905,2924,2924,2905,2925,2905,2906,2925,2925,2906,2926,2906,2907,2926,2926,2907,2927,2907,2908,2927,2927,2908,2928,2908,2909,2928,2928,2909,2929,2909,2910,2929,2929,2910,2930,2910,2911,2930,2930,2911,2931,2911,2912,2931,2931,2912,2932,2912,2913,2932,2932,2913,2933,2913,2914,2933,2933,2914,2934,2914,2915,2934,2934,2915,2935,2915,2916,2935,2935,2916,2936,2916,2917,2936,2936,2917,2937,2917,2918,2937,2937,2918,2938,2918,2919,2938,2938,2919,2939,2919,2900,2939,2939,2900,2920,2920,2921,2940,2940,2921,2941,2921,2922,2941,2941,2922,2942,2922,2923,2942,2942,2923,2943,2923,2924,2943,2943,2924,2944,2924,2925,2944,2944,2925,2945,2925,2926,2945,2945,2926,2946,2926,2927,2946,2946,2927,2947,2927,2928,2947,2947,2928,2948,2928,2929,2948,2948,2929,2949,2929,2930,2949,2949,2930,2950,2930,2931,2950,2950,2931,2951,2931,2932,2951,2951,2932,2952,2932,2933,2952,2952,2933,2953,2933,2934,2953,2953,2934,2954,2934,2935,2954,2954,2935,2955,2935,2936,2955,2955,2936,2956,2936,2937,2956,2956,2937,2957,2937,2938,2957,2957,2938,2958,2938,2939,2958,2958,2939,2959,2939,2920,2959,2959,2920,2940,2940,2941,2960,2960,2941,2961,2941,2942,2961,2961,2942,2962,2942,2943,2962,2962,2943,2963,2943,2944,2963,2963,2944,2964,2944,2945,2964,2964,2945,2965,2945,2946,2965,2965,2946,2966,2946,2947,2966,2966,2947,2967,2947,2948,2967,2967,2948,2968,2948,2949,2968,2968,2949,2969,2949,2950,2969,2969,2950,2970,2950,2951,2970,2970,2951,2971,2951,2952,2971,2971,2952,2972,2952,2953,2972,2972,2953,2973,2953,2954,2973,2973,2954,2974,2954,2955,2974,2974,2955,2975,2955,2956,2975,2975,2956,2976,2956,2957,2976,2976,2957,2977,2957,2958,2977,2977,2958,2978,2958,2959,2978,2978,2959,2979,2959,2940,2979,2979,2940,2960,2960,2961,2980,2980,2961,2981,2961,2962,2981,2981,2962,2982,2962,2963,2982,2982,2963,2983,2963,2964,2983,2983,2964,2984,2964,2965,2984,2984,2965,2985,2965,2966,2985,2985,2966,2986,2966,2967,2986,2986,2967,2987,2967,2968,2987,2987,2968,2988,2968,2969,2988,2988,2969,2989,2969,2970,2989,2989,2970,2990,2970,2971,2990,2990,2971,2991,2971,2972,2991,2991,2972,2992,2972,2973,2992,2992,2973,2993,2973,2974,2993,2993,2974,2994,2974,2975,2994,2994,2975,2995,2975,2976,2995,2995,2976,2996,2976,2977,2996,2996,2977,2997,2977,2978,2997,2997,2978,2998,2978,2979,2998,2998,2979,2999,2979,2960,2999,2999,2960,2980,2980,2981,3e3,3e3,2981,3001,2981,2982,3001,3001,2982,3002,2982,2983,3002,3002,2983,3003,2983,2984,3003,3003,2984,3004,2984,2985,3004,3004,2985,3005,2985,2986,3005,3005,2986,3006,2986,2987,3006,3006,2987,3007,2987,2988,3007,3007,2988,3008,2988,2989,3008,3008,2989,3009,2989,2990,3009,3009,2990,3010,2990,2991,3010,3010,2991,3011,2991,2992,3011,3011,2992,3012,2992,2993,3012,3012,2993,3013,2993,2994,3013,3013,2994,3014,2994,2995,3014,3014,2995,3015,2995,2996,3015,3015,2996,3016,2996,2997,3016,3016,2997,3017,2997,2998,3017,3017,2998,3018,2998,2999,3018,3018,2999,3019,2999,2980,3019,3019,2980,3e3,3e3,3001,3020,3020,3001,3021,3001,3002,3021,3021,3002,3022,3002,3003,3022,3022,3003,3023,3003,3004,3023,3023,3004,3024,3004,3005,3024,3024,3005,3025,3005,3006,3025,3025,3006,3026,3006,3007,3026,3026,3007,3027,3007,3008,3027,3027,3008,3028,3008,3009,3028,3028,3009,3029,3009,3010,3029,3029,3010,3030,3010,3011,3030,3030,3011,3031,3011,3012,3031,3031,3012,3032,3012,3013,3032,3032,3013,3033,3013,3014,3033,3033,3014,3034,3014,3015,3034,3034,3015,3035,3015,3016,3035,3035,3016,3036,3016,3017,3036,3036,3017,3037,3017,3018,3037,3037,3018,3038,3018,3019,3038,3038,3019,3039,3019,3e3,3039,3039,3e3,3020,3020,3021,3040,3040,3021,3041,3021,3022,3041,3041,3022,3042,3022,3023,3042,3042,3023,3043,3023,3024,3043,3043,3024,3044,3024,3025,3044,3044,3025,3045,3025,3026,3045,3045,3026,3046,3026,3027,3046,3046,3027,3047,3027,3028,3047,3047,3028,3048,3028,3029,3048,3048,3029,3049,3029,3030,3049,3049,3030,3050,3030,3031,3050,3050,3031,3051,3031,3032,3051,3051,3032,3052,3032,3033,3052,3052,3033,3053,3033,3034,3053,3053,3034,3054,3034,3035,3054,3054,3035,3055,3035,3036,3055,3055,3036,3056,3036,3037,3056,3056,3037,3057,3037,3038,3057,3057,3038,3058,3038,3039,3058,3058,3039,3059,3039,3020,3059,3059,3020,3040,3040,3041,3060,3060,3041,3061,3041,3042,3061,3061,3042,3062,3042,3043,3062,3062,3043,3063,3043,3044,3063,3063,3044,3064,3044,3045,3064,3064,3045,3065,3045,3046,3065,3065,3046,3066,3046,3047,3066,3066,3047,3067,3047,3048,3067,3067,3048,3068,3048,3049,3068,3068,3049,3069,3049,3050,3069,3069,3050,3070,3050,3051,3070,3070,3051,3071,3051,3052,3071,3071,3052,3072,3052,3053,3072,3072,3053,3073,3053,3054,3073,3073,3054,3074,3054,3055,3074,3074,3055,3075,3055,3056,3075,3075,3056,3076,3056,3057,3076,3076,3057,3077,3057,3058,3077,3077,3058,3078,3058,3059,3078,3078,3059,3079,3059,3040,3079,3079,3040,3060,3060,3061,3080,3080,3061,3081,3061,3062,3081,3081,3062,3082,3062,3063,3082,3082,3063,3083,3063,3064,3083,3083,3064,3084,3064,3065,3084,3084,3065,3085,3065,3066,3085,3085,3066,3086,3066,3067,3086,3086,3067,3087,3067,3068,3087,3087,3068,3088,3068,3069,3088,3088,3069,3089,3069,3070,3089,3089,3070,3090,3070,3071,3090,3090,3071,3091,3071,3072,3091,3091,3072,3092,3072,3073,3092,3092,3073,3093,3073,3074,3093,3093,3074,3094,3074,3075,3094,3094,3075,3095,3075,3076,3095,3095,3076,3096,3076,3077,3096,3096,3077,3097,3077,3078,3097,3097,3078,3098,3078,3079,3098,3098,3079,3099,3079,3060,3099,3099,3060,3080,3080,3081,3100,3100,3081,3101,3081,3082,3101,3101,3082,3102,3082,3083,3102,3102,3083,3103,3083,3084,3103,3103,3084,3104,3084,3085,3104,3104,3085,3105,3085,3086,3105,3105,3086,3106,3086,3087,3106,3106,3087,3107,3087,3088,3107,3107,3088,3108,3088,3089,3108,3108,3089,3109,3089,3090,3109,3109,3090,3110,3090,3091,3110,3110,3091,3111,3091,3092,3111,3111,3092,3112,3092,3093,3112,3112,3093,3113,3093,3094,3113,3113,3094,3114,3094,3095,3114,3114,3095,3115,3095,3096,3115,3115,3096,3116,3096,3097,3116,3116,3097,3117,3097,3098,3117,3117,3098,3118,3098,3099,3118,3118,3099,3119,3099,3080,3119,3119,3080,3100,3100,3101,3120,3120,3101,3121,3101,3102,3121,3121,3102,3122,3102,3103,3122,3122,3103,3123,3103,3104,3123,3123,3104,3124,3104,3105,3124,3124,3105,3125,3105,3106,3125,3125,3106,3126,3106,3107,3126,3126,3107,3127,3107,3108,3127,3127,3108,3128,3108,3109,3128,3128,3109,3129,3109,3110,3129,3129,3110,3130,3110,3111,3130,3130,3111,3131,3111,3112,3131,3131,3112,3132,3112,3113,3132,3132,3113,3133,3113,3114,3133,3133,3114,3134,3114,3115,3134,3134,3115,3135,3115,3116,3135,3135,3116,3136,3116,3117,3136,3136,3117,3137,3117,3118,3137,3137,3118,3138,3118,3119,3138,3138,3119,3139,3119,3100,3139,3139,3100,3120,3120,3121,3140,3140,3121,3141,3121,3122,3141,3141,3122,3142,3122,3123,3142,3142,3123,3143,3123,3124,3143,3143,3124,3144,3124,3125,3144,3144,3125,3145,3125,3126,3145,3145,3126,3146,3126,3127,3146,3146,3127,3147,3127,3128,3147,3147,3128,3148,3128,3129,3148,3148,3129,3149,3129,3130,3149,3149,3130,3150,3130,3131,3150,3150,3131,3151,3131,3132,3151,3151,3132,3152,3132,3133,3152,3152,3133,3153,3133,3134,3153,3153,3134,3154,3134,3135,3154,3154,3135,3155,3135,3136,3155,3155,3136,3156,3136,3137,3156,3156,3137,3157,3137,3138,3157,3157,3138,3158,3138,3139,3158,3158,3139,3159,3139,3120,3159,3159,3120,3140,3140,3141,3160,3160,3141,3161,3141,3142,3161,3161,3142,3162,3142,3143,3162,3162,3143,3163,3143,3144,3163,3163,3144,3164,3144,3145,3164,3164,3145,3165,3145,3146,3165,3165,3146,3166,3146,3147,3166,3166,3147,3167,3147,3148,3167,3167,3148,3168,3148,3149,3168,3168,3149,3169,3149,3150,3169,3169,3150,3170,3150,3151,3170,3170,3151,3171,3151,3152,3171,3171,3152,3172,3152,3153,3172,3172,3153,3173,3153,3154,3173,3173,3154,3174,3154,3155,3174,3174,3155,3175,3155,3156,3175,3175,3156,3176,3156,3157,3176,3176,3157,3177,3157,3158,3177,3177,3158,3178,3158,3159,3178,3178,3159,3179,3159,3140,3179,3179,3140,3160,3160,3161,3180,3180,3161,3181,3161,3162,3181,3181,3162,3182,3162,3163,3182,3182,3163,3183,3163,3164,3183,3183,3164,3184,3164,3165,3184,3184,3165,3185,3165,3166,3185,3185,3166,3186,3166,3167,3186,3186,3167,3187,3167,3168,3187,3187,3168,3188,3168,3169,3188,3188,3169,3189,3169,3170,3189,3189,3170,3190,3170,3171,3190,3190,3171,3191,3171,3172,3191,3191,3172,3192,3172,3173,3192,3192,3173,3193,3173,3174,3193,3193,3174,3194,3174,3175,3194,3194,3175,3195,3175,3176,3195,3195,3176,3196,3176,3177,3196,3196,3177,3197,3177,3178,3197,3197,3178,3198,3178,3179,3198,3198,3179,3199,3179,3160,3199,3199,3160,3180,3180,3181,3200,3200,3181,3201,3181,3182,3201,3201,3182,3202,3182,3183,3202,3202,3183,3203,3183,3184,3203,3203,3184,3204,3184,3185,3204,3204,3185,3205,3185,3186,3205,3205,3186,3206,3186,3187,3206,3206,3187,3207,3187,3188,3207,3207,3188,3208,3188,3189,3208,3208,3189,3209,3189,3190,3209,3209,3190,3210,3190,3191,3210,3210,3191,3211,3191,3192,3211,3211,3192,3212,3192,3193,3212,3212,3193,3213,3193,3194,3213,3213,3194,3214,3194,3195,3214,3214,3195,3215,3195,3196,3215,3215,3196,3216,3196,3197,3216,3216,3197,3217,3197,3198,3217,3217,3198,3218,3198,3199,3218,3218,3199,3219,3199,3180,3219,3219,3180,3200,3200,3201,3220,3220,3201,3221,3201,3202,3221,3221,3202,3222,3202,3203,3222,3222,3203,3223,3203,3204,3223,3223,3204,3224,3204,3205,3224,3224,3205,3225,3205,3206,3225,3225,3206,3226,3206,3207,3226,3226,3207,3227,3207,3208,3227,3227,3208,3228,3208,3209,3228,3228,3209,3229,3209,3210,3229,3229,3210,3230,3210,3211,3230,3230,3211,3231,3211,3212,3231,3231,3212,3232,3212,3213,3232,3232,3213,3233,3213,3214,3233,3233,3214,3234,3214,3215,3234,3234,3215,3235,3215,3216,3235,3235,3216,3236,3216,3217,3236,3236,3217,3237,3217,3218,3237,3237,3218,3238,3218,3219,3238,3238,3219,3239,3219,3200,3239,3239,3200,3220,3220,3221,3240,3240,3221,3241,3221,3222,3241,3241,3222,3242,3222,3223,3242,3242,3223,3243,3223,3224,3243,3243,3224,3244,3224,3225,3244,3244,3225,3245,3225,3226,3245,3245,3226,3246,3226,3227,3246,3246,3227,3247,3227,3228,3247,3247,3228,3248,3228,3229,3248,3248,3229,3249,3229,3230,3249,3249,3230,3250,3230,3231,3250,3250,3231,3251,3231,3232,3251,3251,3232,3252,3232,3233,3252,3252,3233,3253,3233,3234,3253,3253,3234,3254,3234,3235,3254,3254,3235,3255,3235,3236,3255,3255,3236,3256,3236,3237,3256,3256,3237,3257,3237,3238,3257,3257,3238,3258,3238,3239,3258,3258,3239,3259,3239,3220,3259,3259,3220,3240,3240,3241,3260,3260,3241,3261,3241,3242,3261,3261,3242,3262,3242,3243,3262,3262,3243,3263,3243,3244,3263,3263,3244,3264,3244,3245,3264,3264,3245,3265,3245,3246,3265,3265,3246,3266,3246,3247,3266,3266,3247,3267,3247,3248,3267,3267,3248,3268,3248,3249,3268,3268,3249,3269,3249,3250,3269,3269,3250,3270,3250,3251,3270,3270,3251,3271,3251,3252,3271,3271,3252,3272,3252,3253,3272,3272,3253,3273,3253,3254,3273,3273,3254,3274,3254,3255,3274,3274,3255,3275,3255,3256,3275,3275,3256,3276,3256,3257,3276,3276,3257,3277,3257,3258,3277,3277,3258,3278,3258,3259,3278,3278,3259,3279,3259,3240,3279,3279,3240,3260,3260,3261,3280,3280,3261,3281,3261,3262,3281,3281,3262,3282,3262,3263,3282,3282,3263,3283,3263,3264,3283,3283,3264,3284,3264,3265,3284,3284,3265,3285,3265,3266,3285,3285,3266,3286,3266,3267,3286,3286,3267,3287,3267,3268,3287,3287,3268,3288,3268,3269,3288,3288,3269,3289,3269,3270,3289,3289,3270,3290,3270,3271,3290,3290,3271,3291,3271,3272,3291,3291,3272,3292,3272,3273,3292,3292,3273,3293,3273,3274,3293,3293,3274,3294,3274,3275,3294,3294,3275,3295,3275,3276,3295,3295,3276,3296,3276,3277,3296,3296,3277,3297,3277,3278,3297,3297,3278,3298,3278,3279,3298,3298,3279,3299,3279,3260,3299,3299,3260,3280,3280,3281,3300,3300,3281,3301,3281,3282,3301,3301,3282,3302,3282,3283,3302,3302,3283,3303,3283,3284,3303,3303,3284,3304,3284,3285,3304,3304,3285,3305,3285,3286,3305,3305,3286,3306,3286,3287,3306,3306,3287,3307,3287,3288,3307,3307,3288,3308,3288,3289,3308,3308,3289,3309,3289,3290,3309,3309,3290,3310,3290,3291,3310,3310,3291,3311,3291,3292,3311,3311,3292,3312,3292,3293,3312,3312,3293,3313,3293,3294,3313,3313,3294,3314,3294,3295,3314,3314,3295,3315,3295,3296,3315,3315,3296,3316,3296,3297,3316,3316,3297,3317,3297,3298,3317,3317,3298,3318,3298,3299,3318,3318,3299,3319,3299,3280,3319,3319,3280,3300,3300,3301,3320,3320,3301,3321,3301,3302,3321,3321,3302,3322,3302,3303,3322,3322,3303,3323,3303,3304,3323,3323,3304,3324,3304,3305,3324,3324,3305,3325,3305,3306,3325,3325,3306,3326,3306,3307,3326,3326,3307,3327,3307,3308,3327,3327,3308,3328,3308,3309,3328,3328,3309,3329,3309,3310,3329,3329,3310,3330,3310,3311,3330,3330,3311,3331,3311,3312,3331,3331,3312,3332,3312,3313,3332,3332,3313,3333,3313,3314,3333,3333,3314,3334,3314,3315,3334,3334,3315,3335,3315,3316,3335,3335,3316,3336,3316,3317,3336,3336,3317,3337,3317,3318,3337,3337,3318,3338,3318,3319,3338,3338,3319,3339,3319,3300,3339,3339,3300,3320,3320,3321,3340,3340,3321,3341,3321,3322,3341,3341,3322,3342,3322,3323,3342,3342,3323,3343,3323,3324,3343,3343,3324,3344,3324,3325,3344,3344,3325,3345,3325,3326,3345,3345,3326,3346,3326,3327,3346,3346,3327,3347,3327,3328,3347,3347,3328,3348,3328,3329,3348,3348,3329,3349,3329,3330,3349,3349,3330,3350,3330,3331,3350,3350,3331,3351,3331,3332,3351,3351,3332,3352,3332,3333,3352,3352,3333,3353,3333,3334,3353,3353,3334,3354,3334,3335,3354,3354,3335,3355,3335,3336,3355,3355,3336,3356,3336,3337,3356,3356,3337,3357,3337,3338,3357,3357,3338,3358,3338,3339,3358,3358,3339,3359,3339,3320,3359,3359,3320,3340,3340,3341,3360,3360,3341,3361,3341,3342,3361,3361,3342,3362,3342,3343,3362,3362,3343,3363,3343,3344,3363,3363,3344,3364,3344,3345,3364,3364,3345,3365,3345,3346,3365,3365,3346,3366,3346,3347,3366,3366,3347,3367,3347,3348,3367,3367,3348,3368,3348,3349,3368,3368,3349,3369,3349,3350,3369,3369,3350,3370,3350,3351,3370,3370,3351,3371,3351,3352,3371,3371,3352,3372,3352,3353,3372,3372,3353,3373,3353,3354,3373,3373,3354,3374,3354,3355,3374,3374,3355,3375,3355,3356,3375,3375,3356,3376,3356,3357,3376,3376,3357,3377,3357,3358,3377,3377,3358,3378,3358,3359,3378,3378,3359,3379,3359,3340,3379,3379,3340,3360,3360,3361,3380,3380,3361,3381,3361,3362,3381,3381,3362,3382,3362,3363,3382,3382,3363,3383,3363,3364,3383,3383,3364,3384,3364,3365,3384,3384,3365,3385,3365,3366,3385,3385,3366,3386,3366,3367,3386,3386,3367,3387,3367,3368,3387,3387,3368,3388,3368,3369,3388,3388,3369,3389,3369,3370,3389,3389,3370,3390,3370,3371,3390,3390,3371,3391,3371,3372,3391,3391,3372,3392,3372,3373,3392,3392,3373,3393,3373,3374,3393,3393,3374,3394,3374,3375,3394,3394,3375,3395,3375,3376,3395,3395,3376,3396,3376,3377,3396,3396,3377,3397,3377,3378,3397,3397,3378,3398,3378,3379,3398,3398,3379,3399,3379,3360,3399,3399,3360,3380,3380,3381,3400,3400,3381,3401,3381,3382,3401,3401,3382,3402,3382,3383,3402,3402,3383,3403,3383,3384,3403,3403,3384,3404,3384,3385,3404,3404,3385,3405,3385,3386,3405,3405,3386,3406,3386,3387,3406,3406,3387,3407,3387,3388,3407,3407,3388,3408,3388,3389,3408,3408,3389,3409,3389,3390,3409,3409,3390,3410,3390,3391,3410,3410,3391,3411,3391,3392,3411,3411,3392,3412,3392,3393,3412,3412,3393,3413,3393,3394,3413,3413,3394,3414,3394,3395,3414,3414,3395,3415,3395,3396,3415,3415,3396,3416,3396,3397,3416,3416,3397,3417,3397,3398,3417,3417,3398,3418,3398,3399,3418,3418,3399,3419,3399,3380,3419,3419,3380,3400,3400,3401,3420,3420,3401,3421,3401,3402,3421,3421,3402,3422,3402,3403,3422,3422,3403,3423,3403,3404,3423,3423,3404,3424,3404,3405,3424,3424,3405,3425,3405,3406,3425,3425,3406,3426,3406,3407,3426,3426,3407,3427,3407,3408,3427,3427,3408,3428,3408,3409,3428,3428,3409,3429,3409,3410,3429,3429,3410,3430,3410,3411,3430,3430,3411,3431,3411,3412,3431,3431,3412,3432,3412,3413,3432,3432,3413,3433,3413,3414,3433,3433,3414,3434,3414,3415,3434,3434,3415,3435,3415,3416,3435,3435,3416,3436,3416,3417,3436,3436,3417,3437,3417,3418,3437,3437,3418,3438,3418,3419,3438,3438,3419,3439,3419,3400,3439,3439,3400,3420,3420,3421,3440,3440,3421,3441,3421,3422,3441,3441,3422,3442,3422,3423,3442,3442,3423,3443,3423,3424,3443,3443,3424,3444,3424,3425,3444,3444,3425,3445,3425,3426,3445,3445,3426,3446,3426,3427,3446,3446,3427,3447,3427,3428,3447,3447,3428,3448,3428,3429,3448,3448,3429,3449,3429,3430,3449,3449,3430,3450,3430,3431,3450,3450,3431,3451,3431,3432,3451,3451,3432,3452,3432,3433,3452,3452,3433,3453,3433,3434,3453,3453,3434,3454,3434,3435,3454,3454,3435,3455,3435,3436,3455,3455,3436,3456,3436,3437,3456,3456,3437,3457,3437,3438,3457,3457,3438,3458,3438,3439,3458,3458,3439,3459,3439,3420,3459,3459,3420,3440,3440,3441,3460,3460,3441,3461,3441,3442,3461,3461,3442,3462,3442,3443,3462,3462,3443,3463,3443,3444,3463,3463,3444,3464,3444,3445,3464,3464,3445,3465,3445,3446,3465,3465,3446,3466,3446,3447,3466,3466,3447,3467,3447,3448,3467,3467,3448,3468,3448,3449,3468,3468,3449,3469,3449,3450,3469,3469,3450,3470,3450,3451,3470,3470,3451,3471,3451,3452,3471,3471,3452,3472,3452,3453,3472,3472,3453,3473,3453,3454,3473,3473,3454,3474,3454,3455,3474,3474,3455,3475,3455,3456,3475,3475,3456,3476,3456,3457,3476,3476,3457,3477,3457,3458,3477,3477,3458,3478,3458,3459,3478,3478,3459,3479,3459,3440,3479,3479,3440,3460,3460,3461,3480,3480,3461,3481,3461,3462,3481,3481,3462,3482,3462,3463,3482,3482,3463,3483,3463,3464,3483,3483,3464,3484,3464,3465,3484,3484,3465,3485,3465,3466,3485,3485,3466,3486,3466,3467,3486,3486,3467,3487,3467,3468,3487,3487,3468,3488,3468,3469,3488,3488,3469,3489,3469,3470,3489,3489,3470,3490,3470,3471,3490,3490,3471,3491,3471,3472,3491,3491,3472,3492,3472,3473,3492,3492,3473,3493,3473,3474,3493,3493,3474,3494,3474,3475,3494,3494,3475,3495,3475,3476,3495,3495,3476,3496,3476,3477,3496,3496,3477,3497,3477,3478,3497,3497,3478,3498,3478,3479,3498,3498,3479,3499,3479,3460,3499,3499,3460,3480,3480,3481,3500,3500,3481,3501,3481,3482,3501,3501,3482,3502,3482,3483,3502,3502,3483,3503,3483,3484,3503,3503,3484,3504,3484,3485,3504,3504,3485,3505,3485,3486,3505,3505,3486,3506,3486,3487,3506,3506,3487,3507,3487,3488,3507,3507,3488,3508,3488,3489,3508,3508,3489,3509,3489,3490,3509,3509,3490,3510,3490,3491,3510,3510,3491,3511,3491,3492,3511,3511,3492,3512,3492,3493,3512,3512,3493,3513,3493,3494,3513,3513,3494,3514,3494,3495,3514,3514,3495,3515,3495,3496,3515,3515,3496,3516,3496,3497,3516,3516,3497,3517,3497,3498,3517,3517,3498,3518,3498,3499,3518,3518,3499,3519,3499,3480,3519,3519,3480,3500,3500,3501,3520,3520,3501,3521,3501,3502,3521,3521,3502,3522,3502,3503,3522,3522,3503,3523,3503,3504,3523,3523,3504,3524,3504,3505,3524,3524,3505,3525,3505,3506,3525,3525,3506,3526,3506,3507,3526,3526,3507,3527,3507,3508,3527,3527,3508,3528,3508,3509,3528,3528,3509,3529,3509,3510,3529,3529,3510,3530,3510,3511,3530,3530,3511,3531,3511,3512,3531,3531,3512,3532,3512,3513,3532,3532,3513,3533,3513,3514,3533,3533,3514,3534,3514,3515,3534,3534,3515,3535,3515,3516,3535,3535,3516,3536,3516,3517,3536,3536,3517,3537,3517,3518,3537,3537,3518,3538,3518,3519,3538,3538,3519,3539,3519,3500,3539,3539,3500,3520,3520,3521,3540,3540,3521,3541,3521,3522,3541,3541,3522,3542,3522,3523,3542,3542,3523,3543,3523,3524,3543,3543,3524,3544,3524,3525,3544,3544,3525,3545,3525,3526,3545,3545,3526,3546,3526,3527,3546,3546,3527,3547,3527,3528,3547,3547,3528,3548,3528,3529,3548,3548,3529,3549,3529,3530,3549,3549,3530,3550,3530,3531,3550,3550,3531,3551,3531,3532,3551,3551,3532,3552,3532,3533,3552,3552,3533,3553,3533,3534,3553,3553,3534,3554,3534,3535,3554,3554,3535,3555,3535,3536,3555,3555,3536,3556,3536,3537,3556,3556,3537,3557,3537,3538,3557,3557,3538,3558,3538,3539,3558,3558,3539,3559,3539,3520,3559,3559,3520,3540,3540,3541,3560,3560,3541,3561,3541,3542,3561,3561,3542,3562,3542,3543,3562,3562,3543,3563,3543,3544,3563,3563,3544,3564,3544,3545,3564,3564,3545,3565,3545,3546,3565,3565,3546,3566,3546,3547,3566,3566,3547,3567,3547,3548,3567,3567,3548,3568,3548,3549,3568,3568,3549,3569,3549,3550,3569,3569,3550,3570,3550,3551,3570,3570,3551,3571,3551,3552,3571,3571,3552,3572,3552,3553,3572,3572,3553,3573,3553,3554,3573,3573,3554,3574,3554,3555,3574,3574,3555,3575,3555,3556,3575,3575,3556,3576,3556,3557,3576,3576,3557,3577,3557,3558,3577,3577,3558,3578,3558,3559,3578,3578,3559,3579,3559,3540,3579,3579,3540,3560,3560,3561,3580,3580,3561,3581,3561,3562,3581,3581,3562,3582,3562,3563,3582,3582,3563,3583,3563,3564,3583,3583,3564,3584,3564,3565,3584,3584,3565,3585,3565,3566,3585,3585,3566,3586,3566,3567,3586,3586,3567,3587,3567,3568,3587,3587,3568,3588,3568,3569,3588,3588,3569,3589,3569,3570,3589,3589,3570,3590,3570,3571,3590,3590,3571,3591,3571,3572,3591,3591,3572,3592,3572,3573,3592,3592,3573,3593,3573,3574,3593,3593,3574,3594,3574,3575,3594,3594,3575,3595,3575,3576,3595,3595,3576,3596,3576,3577,3596,3596,3577,3597,3577,3578,3597,3597,3578,3598,3578,3579,3598,3598,3579,3599,3579,3560,3599,3599,3560,3580,3580,3581,3600,3600,3581,3601,3581,3582,3601,3601,3582,3602,3582,3583,3602,3602,3583,3603,3583,3584,3603,3603,3584,3604,3584,3585,3604,3604,3585,3605,3585,3586,3605,3605,3586,3606,3586,3587,3606,3606,3587,3607,3587,3588,3607,3607,3588,3608,3588,3589,3608,3608,3589,3609,3589,3590,3609,3609,3590,3610,3590,3591,3610,3610,3591,3611,3591,3592,3611,3611,3592,3612,3592,3593,3612,3612,3593,3613,3593,3594,3613,3613,3594,3614,3594,3595,3614,3614,3595,3615,3595,3596,3615,3615,3596,3616,3596,3597,3616,3616,3597,3617,3597,3598,3617,3617,3598,3618,3598,3599,3618,3618,3599,3619,3599,3580,3619,3619,3580,3600,3600,3601,3620,3620,3601,3621,3601,3602,3621,3621,3602,3622,3602,3603,3622,3622,3603,3623,3603,3604,3623,3623,3604,3624,3604,3605,3624,3624,3605,3625,3605,3606,3625,3625,3606,3626,3606,3607,3626,3626,3607,3627,3607,3608,3627,3627,3608,3628,3608,3609,3628,3628,3609,3629,3609,3610,3629,3629,3610,3630,3610,3611,3630,3630,3611,3631,3611,3612,3631,3631,3612,3632,3612,3613,3632,3632,3613,3633,3613,3614,3633,3633,3614,3634,3614,3615,3634,3634,3615,3635,3615,3616,3635,3635,3616,3636,3616,3617,3636,3636,3617,3637,3617,3618,3637,3637,3618,3638,3618,3619,3638,3638,3619,3639,3619,3600,3639,3639,3600,3620,3620,3621,3640,3640,3621,3641,3621,3622,3641,3641,3622,3642,3622,3623,3642,3642,3623,3643,3623,3624,3643,3643,3624,3644,3624,3625,3644,3644,3625,3645,3625,3626,3645,3645,3626,3646,3626,3627,3646,3646,3627,3647,3627,3628,3647,3647,3628,3648,3628,3629,3648,3648,3629,3649,3629,3630,3649,3649,3630,3650,3630,3631,3650,3650,3631,3651,3631,3632,3651,3651,3632,3652,3632,3633,3652,3652,3633,3653,3633,3634,3653,3653,3634,3654,3634,3635,3654,3654,3635,3655,3635,3636,3655,3655,3636,3656,3636,3637,3656,3656,3637,3657,3637,3638,3657,3657,3638,3658,3638,3639,3658,3658,3639,3659,3639,3620,3659,3659,3620,3640,3640,3641,3660,3660,3641,3661,3641,3642,3661,3661,3642,3662,3642,3643,3662,3662,3643,3663,3643,3644,3663,3663,3644,3664,3644,3645,3664,3664,3645,3665,3645,3646,3665,3665,3646,3666,3646,3647,3666,3666,3647,3667,3647,3648,3667,3667,3648,3668,3648,3649,3668,3668,3649,3669,3649,3650,3669,3669,3650,3670,3650,3651,3670,3670,3651,3671,3651,3652,3671,3671,3652,3672,3652,3653,3672,3672,3653,3673,3653,3654,3673,3673,3654,3674,3654,3655,3674,3674,3655,3675,3655,3656,3675,3675,3656,3676,3656,3657,3676,3676,3657,3677,3657,3658,3677,3677,3658,3678,3658,3659,3678,3678,3659,3679,3659,3640,3679,3679,3640,3660,3660,3661,3680,3680,3661,3681,3661,3662,3681,3681,3662,3682,3662,3663,3682,3682,3663,3683,3663,3664,3683,3683,3664,3684,3664,3665,3684,3684,3665,3685,3665,3666,3685,3685,3666,3686,3666,3667,3686,3686,3667,3687,3667,3668,3687,3687,3668,3688,3668,3669,3688,3688,3669,3689,3669,3670,3689,3689,3670,3690,3670,3671,3690,3690,3671,3691,3671,3672,3691,3691,3672,3692,3672,3673,3692,3692,3673,3693,3673,3674,3693,3693,3674,3694,3674,3675,3694,3694,3675,3695,3675,3676,3695,3695,3676,3696,3676,3677,3696,3696,3677,3697,3677,3678,3697,3697,3678,3698,3678,3679,3698,3698,3679,3699,3679,3660,3699,3699,3660,3680,3680,3681,3700,3700,3681,3701,3681,3682,3701,3701,3682,3702,3682,3683,3702,3702,3683,3703,3683,3684,3703,3703,3684,3704,3684,3685,3704,3704,3685,3705,3685,3686,3705,3705,3686,3706,3686,3687,3706,3706,3687,3707,3687,3688,3707,3707,3688,3708,3688,3689,3708,3708,3689,3709,3689,3690,3709,3709,3690,3710,3690,3691,3710,3710,3691,3711,3691,3692,3711,3711,3692,3712,3692,3693,3712,3712,3693,3713,3693,3694,3713,3713,3694,3714,3694,3695,3714,3714,3695,3715,3695,3696,3715,3715,3696,3716,3696,3697,3716,3716,3697,3717,3697,3698,3717,3717,3698,3718,3698,3699,3718,3718,3699,3719,3699,3680,3719,3719,3680,3700,3700,3701,3720,3720,3701,3721,3701,3702,3721,3721,3702,3722,3702,3703,3722,3722,3703,3723,3703,3704,3723,3723,3704,3724,3704,3705,3724,3724,3705,3725,3705,3706,3725,3725,3706,3726,3706,3707,3726,3726,3707,3727,3707,3708,3727,3727,3708,3728,3708,3709,3728,3728,3709,3729,3709,3710,3729,3729,3710,3730,3710,3711,3730,3730,3711,3731,3711,3712,3731,3731,3712,3732,3712,3713,3732,3732,3713,3733,3713,3714,3733,3733,3714,3734,3714,3715,3734,3734,3715,3735,3715,3716,3735,3735,3716,3736,3716,3717,3736,3736,3717,3737,3717,3718,3737,3737,3718,3738,3718,3719,3738,3738,3719,3739,3719,3700,3739,3739,3700,3720,3720,3721,3740,3740,3721,3741,3721,3722,3741,3741,3722,3742,3722,3723,3742,3742,3723,3743,3723,3724,3743,3743,3724,3744,3724,3725,3744,3744,3725,3745,3725,3726,3745,3745,3726,3746,3726,3727,3746,3746,3727,3747,3727,3728,3747,3747,3728,3748,3728,3729,3748,3748,3729,3749,3729,3730,3749,3749,3730,3750,3730,3731,3750,3750,3731,3751,3731,3732,3751,3751,3732,3752,3732,3733,3752,3752,3733,3753,3733,3734,3753,3753,3734,3754,3734,3735,3754,3754,3735,3755,3735,3736,3755,3755,3736,3756,3736,3737,3756,3756,3737,3757,3737,3738,3757,3757,3738,3758,3738,3739,3758,3758,3739,3759,3739,3720,3759,3759,3720,3740,3740,3741,3760,3760,3741,3761,3741,3742,3761,3761,3742,3762,3742,3743,3762,3762,3743,3763,3743,3744,3763,3763,3744,3764,3744,3745,3764,3764,3745,3765,3745,3746,3765,3765,3746,3766,3746,3747,3766,3766,3747,3767,3747,3748,3767,3767,3748,3768,3748,3749,3768,3768,3749,3769,3749,3750,3769,3769,3750,3770,3750,3751,3770,3770,3751,3771,3751,3752,3771,3771,3752,3772,3752,3753,3772,3772,3753,3773,3753,3754,3773,3773,3754,3774,3754,3755,3774,3774,3755,3775,3755,3756,3775,3775,3756,3776,3756,3757,3776,3776,3757,3777,3757,3758,3777,3777,3758,3778,3758,3759,3778,3778,3759,3779,3759,3740,3779,3779,3740,3760,3760,3761,3780,3780,3761,3781,3761,3762,3781,3781,3762,3782,3762,3763,3782,3782,3763,3783,3763,3764,3783,3783,3764,3784,3764,3765,3784,3784,3765,3785,3765,3766,3785,3785,3766,3786,3766,3767,3786,3786,3767,3787,3767,3768,3787,3787,3768,3788,3768,3769,3788,3788,3769,3789,3769,3770,3789,3789,3770,3790,3770,3771,3790,3790,3771,3791,3771,3772,3791,3791,3772,3792,3772,3773,3792,3792,3773,3793,3773,3774,3793,3793,3774,3794,3774,3775,3794,3794,3775,3795,3775,3776,3795,3795,3776,3796,3776,3777,3796,3796,3777,3797,3777,3778,3797,3797,3778,3798,3778,3779,3798,3798,3779,3799,3779,3760,3799,3799,3760,3780,3780,3781,3800,3800,3781,3801,3781,3782,3801,3801,3782,3802,3782,3783,3802,3802,3783,3803,3783,3784,3803,3803,3784,3804,3784,3785,3804,3804,3785,3805,3785,3786,3805,3805,3786,3806,3786,3787,3806,3806,3787,3807,3787,3788,3807,3807,3788,3808,3788,3789,3808,3808,3789,3809,3789,3790,3809,3809,3790,3810,3790,3791,3810,3810,3791,3811,3791,3792,3811,3811,3792,3812,3792,3793,3812,3812,3793,3813,3793,3794,3813,3813,3794,3814,3794,3795,3814,3814,3795,3815,3795,3796,3815,3815,3796,3816,3796,3797,3816,3816,3797,3817,3797,3798,3817,3817,3798,3818,3798,3799,3818,3818,3799,3819,3799,3780,3819,3819,3780,3800,3800,3801,3820,3820,3801,3821,3801,3802,3821,3821,3802,3822,3802,3803,3822,3822,3803,3823,3803,3804,3823,3823,3804,3824,3804,3805,3824,3824,3805,3825,3805,3806,3825,3825,3806,3826,3806,3807,3826,3826,3807,3827,3807,3808,3827,3827,3808,3828,3808,3809,3828,3828,3809,3829,3809,3810,3829,3829,3810,3830,3810,3811,3830,3830,3811,3831,3811,3812,3831,3831,3812,3832,3812,3813,3832,3832,3813,3833,3813,3814,3833,3833,3814,3834,3814,3815,3834,3834,3815,3835,3815,3816,3835,3835,3816,3836,3816,3817,3836,3836,3817,3837,3817,3818,3837,3837,3818,3838,3818,3819,3838,3838,3819,3839,3819,3800,3839,3839,3800,3820,3820,3821,0,0,3821,1,3821,3822,1,1,3822,2,3822,3823,2,2,3823,3,3823,3824,3,3,3824,4,3824,3825,4,4,3825,5,3825,3826,5,5,3826,6,3826,3827,6,6,3827,7,3827,3828,7,7,3828,8,3828,3829,8,8,3829,9,3829,3830,9,9,3830,10,3830,3831,10,10,3831,11,3831,3832,11,11,3832,12,3832,3833,12,12,3833,13,3833,3834,13,13,3834,14,3834,3835,14,14,3835,15,3835,3836,15,15,3836,16,3836,3837,16,16,3837,17,3837,3838,17,17,3838,18,3838,3839,18,18,3839,19,3839,3820,19,19,3820,0]};function i5(i,t){let e=new f0({canvas:i,alpha:!0,antialias:!0,powerPreference:"low-power"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),e.setClearColor(0,0),e.toneMapping=rs,e.toneMappingExposure=1.5;let n=new Xi,s=new Ee(36,1,.1,30);s.position.set(0,0,7.8);let r=new vn;n.add(r);let a=new ze;a.setAttribute("position",new ve(ka.positions,3)),a.setIndex(ka.indices),a.computeVertexNormals();let o=new ji({color:6650952,metalness:.42,roughness:.24,clearcoat:1,clearcoatRoughness:.16}),c=new Re(a,o);r.add(c),r.rotation.set(.45,-.35,-.3),n.add(new ns(16775656,3164470,3));let l=new Jn(16774620,6);l.position.set(-3,4,5),n.add(l);let d=new Jn(14740991,5);d.position.set(4,-1,2),n.add(d);let p=new Jn(15247994,4);p.position.set(0,2,-4),n.add(p);let h=new Qi(.085,20,16),g=new Ti({color:12089424,metalness:.45,roughness:.25}),v=Array.from({length:5},(pt,mt)=>{let Xt=new Re(h,g),Dt=mt*Math.PI*2/5;return Xt.position.set(Math.cos(Dt)*2,Math.sin(Dt)*1.65,Math.sin(Dt)*.6),r.add(Xt),Xt}),M=window.matchMedia("(prefers-reduced-motion: reduce)"),m=window.matchMedia("(hover: hover) and (pointer: fine)"),u=0,A=0,R=0,y=!0,S=!1,T=!1,w=0,x=0,E=0,P=0,N=()=>M.matches||document.documentElement.classList.contains("no-motion");function B(pt=0){if(u=0,T||S)return;let mt=A?Math.min((pt-A)/1e3,.05):0;A=pt,N()||(R+=mt),E+=(w-E)*.06,P+=(x-P)*.06,r.rotation.y=-.35+R*.14+E*.38,r.rotation.x=.45+Math.sin(R*.35)*.12+P*.22,r.position.y=Math.sin(R*.8)*.07,v.forEach((Xt,Dt)=>{Xt.scale.setScalar(1+Math.sin(R+Dt)*.18)}),e.render(n,s),y&&!document.hidden&&!N()&&(u=requestAnimationFrame(B))}function k(){cancelAnimationFrame(u),u=0,A=0,N()&&(w=x=E=P=0),y&&!document.hidden&&!S&&B()}function D(){let{width:pt,height:mt}=i.getBoundingClientRect();!pt||!mt||(e.setSize(pt,mt,!1),s.aspect=pt/mt,s.position.z=s.aspect<.9?8.6:7.8,s.updateProjectionMatrix(),k())}function G(pt){if(N()||!m.matches||pt.pointerType==="touch")return;let mt=t.getBoundingClientRect();w=(pt.clientX-mt.left)/mt.width-.5,x=(pt.clientY-mt.top)/mt.height-.5}let J=()=>{w=x=0},q=pt=>{pt.preventDefault(),S=!0,cancelAnimationFrame(u),i.parentElement.classList.remove("is-rendered")},nt=()=>{S=!1,i.parentElement.classList.add("is-rendered"),D()},W=new ResizeObserver(D);W.observe(i);let Q=new IntersectionObserver(pt=>{y=pt[0].isIntersecting,k()});Q.observe(t);let tt=new MutationObserver(k);return tt.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),M.addEventListener("change",k),document.addEventListener("visibilitychange",k),t.addEventListener("pointermove",G,{passive:!0}),t.addEventListener("pointerleave",J),i.addEventListener("webglcontextlost",q),i.addEventListener("webglcontextrestored",nt),D(),()=>{T=!0,cancelAnimationFrame(u),W.disconnect(),Q.disconnect(),tt.disconnect(),M.removeEventListener("change",k),document.removeEventListener("visibilitychange",k),t.removeEventListener("pointermove",G),t.removeEventListener("pointerleave",J),i.removeEventListener("webglcontextlost",q),i.removeEventListener("webglcontextrestored",nt),a.dispose(),o.dispose(),h.dispose(),g.dispose(),e.dispose()}}export{i5 as createHeroScene};
/*! For license information please see hero-webgl-KQQAGUUE.js.LEGAL.txt */
