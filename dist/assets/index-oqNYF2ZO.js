import{u as he,a0 as z,r as Ke,c as vr,j as d,B as br,a1 as mr,o as _r}from"./index-5bcgqmhL.js";const Ar=he.form`
  padding: 0 20px;
  overflow-y: auto;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`,ee=he.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  & > label {
    font-size: 0.8rem;
    color: #a9a9a9;
    margin-bottom: 5px;
  }

  & > p.inputTitle {
    margin-bottom: 0px;
  }

  & > div.inputWrap {
    display: flex;
  }

  & > div > label > input[type="radio"] {
    display: none;

    &:checked + span {
      background-color: #fffdfc;
      border: 1px solid #ff9078;
      color: #ff9078;
      font-weight: bold;
    }
  }
  & > div > label > span {
    display: inline-block;
    width: 100%;
    padding: 10px;
    border: 1px solid #a9a9a9;
    box-sizing: border-box;
    border-radius: 5px;
    text-align: center;
    font-size: 0.75rem;
  }

  & > div > input {
    flex: 1;
    border: 1px solid #a9a9a9;
    padding: 10px;
    border-radius: 5px;
    margin-right: 10px;
  }

  & > select {
    display: block;
    width: 60px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #a9a9a9;
  }
`,Vr=he.div`
  & > div.mentorTagInput {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;

    > div {
      padding: 10px;
    }

    > input {
      flex: 1;
      border: 1px solid #a9a9a9;
      padding: 10px;
      border-radius: 5px;
      margin-right: 10px;
    }

    > button {
      padding: 10px;
      border-radius: 5px;
      margin-right: 10px;
      font-size: 0.75rem;
    }
  }

  & > div.mentorTagWrap {
    width: 100%;
    display: flex;
    margin-top: 10px;
    /* overflow-x: auto; */
    flex-wrap: wrap;

    > div {
      padding: 5px 7px;
      background-color: #f8f8f8;
      color: #676767;
      font-size: 0.75rem;
      margin: 0 5px 5px 0;
      border-radius: 10px;
    }
  }
`,le=he.label`
  flex: 1;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
`,wr=he.section`
  & > input {
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    background-color: #f8f8f8;
    box-sizing: border-box;
    border: 1px solid #f8f8f8;
    resize: none;

    &:focus {
      border: 1px solid #a9a9a9;
      background-color: #fff;
      outline: none;
    }
  }
  & > textarea {
    width: 100%;
    height: 400px;
    padding: 20px;
    margin-bottom: 20px;
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    background-color: #f8f8f8;
    box-sizing: border-box;
    border: 1px solid #f8f8f8;
    resize: none;

    &:focus {
      border: 1px solid #a9a9a9;
      background-color: #fff;
      outline: none;
    }
  }
`;var ge=e=>e.type==="checkbox",oe=e=>e instanceof Date,L=e=>e==null;const sr=e=>typeof e=="object";var S=e=>!L(e)&&!Array.isArray(e)&&sr(e)&&!oe(e),Fr=e=>S(e)&&e.target?ge(e.target)?e.target.checked:e.target.value:e,jr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Dr=(e,s)=>e.has(jr(s)),Sr=e=>{const s=e.constructor&&e.constructor.prototype;return S(s)&&s.hasOwnProperty("isPrototypeOf")},Me=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function q(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Me&&(e instanceof Blob||e instanceof FileList))&&(t||S(e)))if(s=t?[]:{},!t&&!Sr(e))s=e;else for(const a in e)e.hasOwnProperty(a)&&(s[a]=q(e[a]));else return e;return s}var xe=e=>Array.isArray(e)?e.filter(Boolean):[],w=e=>e===void 0,y=(e,s,t)=>{if(!s||!S(e))return t;const a=xe(s.split(/[,[\].]+?/)).reduce((o,l)=>L(o)?o:o[l],e);return w(a)||a===e?w(e[s])?t:e[s]:a},Q=e=>typeof e=="boolean";const Ge={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},J={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};z.createContext(null);var kr=(e,s,t,a=!0)=>{const o={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(o,l,{get:()=>{const h=l;return s._proxyFormState[h]!==P.all&&(s._proxyFormState[h]=!a||P.all),t&&(t[h]=!0),e[h]}});return o},U=e=>S(e)&&!Object.keys(e).length,Tr=(e,s,t,a)=>{t(e);const{name:o,...l}=e;return U(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(h=>s[h]===(!a||P.all))},ke=e=>Array.isArray(e)?e:[e];function Er(e){const s=z.useRef(e);s.current=e,z.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var $=e=>typeof e=="string",Nr=(e,s,t,a,o)=>$(e)?(a&&s.watch.add(e),y(t,e,o)):Array.isArray(e)?e.map(l=>(a&&s.watch.add(l),y(t,l))):(a&&(s.watchAll=!0),t),Ce=e=>/^\w*$/.test(e),ir=e=>xe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,s,t)=>{let a=-1;const o=Ce(s)?[s]:ir(s),l=o.length,h=l-1;for(;++a<l;){const x=o[a];let O=t;if(a!==h){const T=e[x];O=S(T)||Array.isArray(T)?T:isNaN(+o[a+1])?{}:[]}e[x]=O,e=e[x]}return e},Mr=(e,s,t,a,o)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:o||!0}}:{},Je=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),Qe=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const ye=(e,s,t,a)=>{for(const o of t||Object.keys(e)){const l=y(e,o);if(l){const{_f:h,...x}=l;if(h){if(h.refs&&h.refs[0]&&s(h.refs[0],o)&&!a)break;if(h.ref&&s(h.ref,h.name)&&!a)break;ye(x,s)}else S(x)&&ye(x,s)}}};var Cr=(e,s,t)=>{const a=xe(y(e,t));return A(a,"root",s[t]),A(e,t,a),e},Le=e=>e.type==="file",Y=e=>typeof e=="function",_e=e=>{if(!Me)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},me=e=>$(e),Oe=e=>e.type==="radio",Ae=e=>e instanceof RegExp;const Xe={value:!1,isValid:!1},Ye={value:!0,isValid:!0};var nr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?Ye:{value:e[0].value,isValid:!0}:Ye:Xe}return Xe};const Ze={isValid:!1,value:null};var lr=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Ze):Ze;function er(e,s,t="validate"){if(me(e)||Array.isArray(e)&&e.every(me)||Q(e)&&!e)return{type:t,message:me(e)?e:"",ref:s}}var ae=e=>S(e)&&!Ae(e)?e:{value:e,message:""},rr=async(e,s,t,a,o)=>{const{ref:l,refs:h,required:x,maxLength:O,minLength:T,min:V,max:p,pattern:te,validate:H,name:C,valueAsNumber:N,mount:E,disabled:X}=e._f,b=y(s,C);if(!E||X)return{};const K=h?h[0]:l,G=v=>{a&&K.reportValidity&&(K.setCustomValidity(Q(v)?"":v||""),K.reportValidity())},F={},se=Oe(l),pe=ge(l),Z=se||pe,ie=(N||Le(l))&&w(l.value)&&w(b)||_e(l)&&l.value===""||b===""||Array.isArray(b)&&!b.length,I=Mr.bind(null,C,t,F),ve=(v,m,j,M=J.maxLength,W=J.minLength)=>{const B=v?m:j;F[C]={type:v?M:W,message:B,ref:l,...I(v?M:W,B)}};if(o?!Array.isArray(b)||!b.length:x&&(!Z&&(ie||L(b))||Q(b)&&!b||pe&&!nr(h).isValid||se&&!lr(h).isValid)){const{value:v,message:m}=me(x)?{value:!!x,message:x}:ae(x);if(v&&(F[C]={type:J.required,message:m,ref:K,...I(J.required,m)},!t))return G(m),F}if(!ie&&(!L(V)||!L(p))){let v,m;const j=ae(p),M=ae(V);if(!L(b)&&!isNaN(b)){const W=l.valueAsNumber||b&&+b;L(j.value)||(v=W>j.value),L(M.value)||(m=W<M.value)}else{const W=l.valueAsDate||new Date(b),B=de=>new Date(new Date().toDateString()+" "+de),ue=l.type=="time",ce=l.type=="week";$(j.value)&&b&&(v=ue?B(b)>B(j.value):ce?b>j.value:W>new Date(j.value)),$(M.value)&&b&&(m=ue?B(b)<B(M.value):ce?b<M.value:W<new Date(M.value))}if((v||m)&&(ve(!!v,j.message,M.message,J.max,J.min),!t))return G(F[C].message),F}if((O||T)&&!ie&&($(b)||o&&Array.isArray(b))){const v=ae(O),m=ae(T),j=!L(v.value)&&b.length>+v.value,M=!L(m.value)&&b.length<+m.value;if((j||M)&&(ve(j,v.message,m.message),!t))return G(F[C].message),F}if(te&&!ie&&$(b)){const{value:v,message:m}=ae(te);if(Ae(v)&&!b.match(v)&&(F[C]={type:J.pattern,message:m,ref:l,...I(J.pattern,m)},!t))return G(m),F}if(H){if(Y(H)){const v=await H(b,s),m=er(v,K);if(m&&(F[C]={...m,...I(J.validate,m.message)},!t))return G(m.message),F}else if(S(H)){let v={};for(const m in H){if(!U(v)&&!t)break;const j=er(await H[m](b,s),K,m);j&&(v={...j,...I(m,j.message)},G(j.message),t&&(F[C]=v))}if(!U(v)&&(F[C]={ref:K,...v},!t))return F}}return G(!0),F};function Lr(e,s){const t=s.slice(0,-1).length;let a=0;for(;a<t;)e=w(e)?a++:e[s[a++]];return e}function Or(e){for(const s in e)if(e.hasOwnProperty(s)&&!w(e[s]))return!1;return!0}function D(e,s){const t=Array.isArray(s)?s:Ce(s)?[s]:ir(s),a=t.length===1?e:Lr(e,t),o=t.length-1,l=t[o];return a&&delete a[l],o!==0&&(S(a)&&U(a)||Array.isArray(a)&&Or(a))&&D(e,t.slice(0,-1)),e}var Te=()=>{let e=[];return{get observers(){return e},next:o=>{for(const l of e)l.next&&l.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(l=>l!==o)}}),unsubscribe:()=>{e=[]}}},Ve=e=>L(e)||!sr(e);function re(e,s){if(Ve(e)||Ve(s))return e===s;if(oe(e)&&oe(s))return e.getTime()===s.getTime();const t=Object.keys(e),a=Object.keys(s);if(t.length!==a.length)return!1;for(const o of t){const l=e[o];if(!a.includes(o))return!1;if(o!=="ref"){const h=s[o];if(oe(l)&&oe(h)||S(l)&&S(h)||Array.isArray(l)&&Array.isArray(h)?!re(l,h):l!==h)return!1}}return!0}var ar=e=>e.type==="select-multiple",Rr=e=>Oe(e)||ge(e),Ee=e=>_e(e)&&e.isConnected,or=e=>{for(const s in e)if(Y(e[s]))return!0;return!1};function we(e,s={}){const t=Array.isArray(e);if(S(e)||t)for(const a in e)Array.isArray(e[a])||S(e[a])&&!or(e[a])?(s[a]=Array.isArray(e[a])?[]:{},we(e[a],s[a])):L(e[a])||(s[a]=!0);return s}function ur(e,s,t){const a=Array.isArray(e);if(S(e)||a)for(const o in e)Array.isArray(e[o])||S(e[o])&&!or(e[o])?w(s)||Ve(t[o])?t[o]=Array.isArray(e[o])?we(e[o],[]):{...we(e[o])}:ur(e[o],L(s)?{}:s[o],t[o]):t[o]=!re(e[o],s[o]);return t}var be=(e,s)=>ur(e,s,we(s)),cr=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:a})=>w(e)?e:s?e===""?NaN:e&&+e:t&&$(e)?new Date(e):a?a(e):e;function Ne(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Le(s)?s.files:Oe(s)?lr(e.refs).value:ar(s)?[...s.selectedOptions].map(({value:t})=>t):ge(s)?nr(e.refs).value:cr(w(s.value)?e.ref.value:s.value,e)}var Ur=(e,s,t,a)=>{const o={};for(const l of e){const h=y(s,l);h&&A(o,l,h._f)}return{criteriaMode:t,names:[...e],fields:o,shouldUseNativeValidation:a}},fe=e=>w(e)?e:Ae(e)?e.source:S(e)?Ae(e.value)?e.value.source:e.value:e,Ir=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function tr(e,s,t){const a=y(e,t);if(a||Ce(t))return{error:a,name:t};const o=t.split(".");for(;o.length;){const l=o.join("."),h=y(s,l),x=y(e,l);if(h&&!Array.isArray(h)&&t!==l)return{name:t};if(x&&x.type)return{name:l,error:x};o.pop()}return{name:t}}var Br=(e,s,t,a,o)=>o.isOnAll?!1:!t&&o.isOnTouch?!(s||e):(t?a.isOnBlur:o.isOnBlur)?!e:(t?a.isOnChange:o.isOnChange)?e:!0,qr=(e,s)=>!xe(y(e,s)).length&&D(e,s);const zr={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function Wr(e={}){let s={...zr,...e},t={submitCount:0,isDirty:!1,isLoading:Y(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},a={},o=S(s.defaultValues)||S(s.values)?q(s.defaultValues||s.values)||{}:{},l=s.shouldUnregister?{}:q(o),h={action:!1,mount:!1,watch:!1},x={mount:new Set,unMount:new Set,array:new Set,watch:new Set},O,T=0;const V={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={values:Te(),array:Te(),state:Te()},te=Je(s.mode),H=Je(s.reValidateMode),C=s.criteriaMode===P.all,N=r=>i=>{clearTimeout(T),T=setTimeout(r,i)},E=async r=>{if(V.isValid||r){const i=s.resolver?U((await Z()).errors):await I(a,!0);i!==t.isValid&&p.state.next({isValid:i})}},X=(r,i)=>{(V.isValidating||V.validatingFields)&&((r||Array.from(x.mount)).forEach(n=>{n&&(i?A(t.validatingFields,n,i):D(t.validatingFields,n))}),p.state.next({validatingFields:t.validatingFields,isValidating:!U(t.validatingFields)}))},b=(r,i=[],n,f,c=!0,u=!0)=>{if(f&&n){if(h.action=!0,u&&Array.isArray(y(a,r))){const g=n(y(a,r),f.argA,f.argB);c&&A(a,r,g)}if(u&&Array.isArray(y(t.errors,r))){const g=n(y(t.errors,r),f.argA,f.argB);c&&A(t.errors,r,g),qr(t.errors,r)}if(V.touchedFields&&u&&Array.isArray(y(t.touchedFields,r))){const g=n(y(t.touchedFields,r),f.argA,f.argB);c&&A(t.touchedFields,r,g)}V.dirtyFields&&(t.dirtyFields=be(o,l)),p.state.next({name:r,isDirty:v(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(l,r,i)},K=(r,i)=>{A(t.errors,r,i),p.state.next({errors:t.errors})},G=r=>{t.errors=r,p.state.next({errors:t.errors,isValid:!1})},F=(r,i,n,f)=>{const c=y(a,r);if(c){const u=y(l,r,w(n)?y(o,r):n);w(u)||f&&f.defaultChecked||i?A(l,r,i?u:Ne(c._f)):M(r,u),h.mount&&E()}},se=(r,i,n,f,c)=>{let u=!1,g=!1;const _={name:r},k=!!(y(a,r)&&y(a,r)._f.disabled);if(!n||f){V.isDirty&&(g=t.isDirty,t.isDirty=_.isDirty=v(),u=g!==_.isDirty);const R=k||re(y(o,r),i);g=!!(!k&&y(t.dirtyFields,r)),R||k?D(t.dirtyFields,r):A(t.dirtyFields,r,!0),_.dirtyFields=t.dirtyFields,u=u||V.dirtyFields&&g!==!R}if(n){const R=y(t.touchedFields,r);R||(A(t.touchedFields,r,n),_.touchedFields=t.touchedFields,u=u||V.touchedFields&&R!==n)}return u&&c&&p.state.next(_),u?_:{}},pe=(r,i,n,f)=>{const c=y(t.errors,r),u=V.isValid&&Q(i)&&t.isValid!==i;if(e.delayError&&n?(O=N(()=>K(r,n)),O(e.delayError)):(clearTimeout(T),O=null,n?A(t.errors,r,n):D(t.errors,r)),(n?!re(c,n):c)||!U(f)||u){const g={...f,...u&&Q(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...g},p.state.next(g)}},Z=async r=>{X(r,!0);const i=await s.resolver(l,s.context,Ur(r||x.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return X(r),i},ie=async r=>{const{errors:i}=await Z(r);if(r)for(const n of r){const f=y(i,n);f?A(t.errors,n,f):D(t.errors,n)}else t.errors=i;return i},I=async(r,i,n={valid:!0})=>{for(const f in r){const c=r[f];if(c){const{_f:u,...g}=c;if(u){const _=x.array.has(u.name);X([f],!0);const k=await rr(c,l,C,s.shouldUseNativeValidation&&!i,_);if(X([f]),k[u.name]&&(n.valid=!1,i))break;!i&&(y(k,u.name)?_?Cr(t.errors,k,u.name):A(t.errors,u.name,k[u.name]):D(t.errors,u.name))}g&&await I(g,i,n)}}return n.valid},ve=()=>{for(const r of x.unMount){const i=y(a,r);i&&(i._f.refs?i._f.refs.every(n=>!Ee(n)):!Ee(i._f.ref))&&Fe(r)}x.unMount=new Set},v=(r,i)=>(r&&i&&A(l,r,i),!re(Re(),o)),m=(r,i,n)=>Nr(r,x,{...h.mount?l:w(i)?o:$(r)?{[r]:i}:i},n,i),j=r=>xe(y(h.mount?l:o,r,e.shouldUnregister?y(o,r,[]):[])),M=(r,i,n={})=>{const f=y(a,r);let c=i;if(f){const u=f._f;u&&(!u.disabled&&A(l,r,cr(i,u)),c=_e(u.ref)&&L(i)?"":i,ar(u.ref)?[...u.ref.options].forEach(g=>g.selected=c.includes(g.value)):u.refs?ge(u.ref)?u.refs.length>1?u.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(c)?!!c.find(_=>_===g.value):c===g.value)):u.refs[0]&&(u.refs[0].checked=!!c):u.refs.forEach(g=>g.checked=g.value===c):Le(u.ref)?u.ref.value="":(u.ref.value=c,u.ref.type||p.values.next({name:r,values:{...l}})))}(n.shouldDirty||n.shouldTouch)&&se(r,c,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&de(r)},W=(r,i,n)=>{for(const f in i){const c=i[f],u=`${r}.${f}`,g=y(a,u);(x.array.has(r)||!Ve(c)||g&&!g._f)&&!oe(c)?W(u,c,n):M(u,c,n)}},B=(r,i,n={})=>{const f=y(a,r),c=x.array.has(r),u=q(i);A(l,r,u),c?(p.array.next({name:r,values:{...l}}),(V.isDirty||V.dirtyFields)&&n.shouldDirty&&p.state.next({name:r,dirtyFields:be(o,l),isDirty:v(r,u)})):f&&!f._f&&!L(u)?W(r,u,n):M(r,u,n),Qe(r,x)&&p.state.next({...t}),p.values.next({name:h.mount?r:void 0,values:{...l}})},ue=async r=>{h.mount=!0;const i=r.target;let n=i.name,f=!0;const c=y(a,n),u=()=>i.type?Ne(c._f):Fr(r),g=_=>{f=Number.isNaN(_)||_===y(l,n,_)};if(c){let _,k;const R=u(),ne=r.type===Ge.BLUR||r.type===Ge.FOCUS_OUT,gr=!Ir(c._f)&&!s.resolver&&!y(t.errors,n)&&!c._f.deps||Br(ne,y(t.touchedFields,n),t.isSubmitted,H,te),De=Qe(n,x,ne);A(l,n,R),ne?(c._f.onBlur&&c._f.onBlur(r),O&&O(0)):c._f.onChange&&c._f.onChange(r);const Se=se(n,R,ne,!1),xr=!U(Se)||De;if(!ne&&p.values.next({name:n,type:r.type,values:{...l}}),gr)return V.isValid&&E(),xr&&p.state.next({name:n,...De?{}:Se});if(!ne&&De&&p.state.next({...t}),s.resolver){const{errors:He}=await Z([n]);if(g(R),f){const pr=tr(t.errors,a,n),$e=tr(He,a,pr.name||n);_=$e.error,n=$e.name,k=U(He)}}else X([n],!0),_=(await rr(c,l,C,s.shouldUseNativeValidation))[n],X([n]),g(R),f&&(_?k=!1:V.isValid&&(k=await I(a,!0)));f&&(c._f.deps&&de(c._f.deps),pe(n,k,_,Se))}},ce=(r,i)=>{if(y(t.errors,i)&&r.focus)return r.focus(),1},de=async(r,i={})=>{let n,f;const c=ke(r);if(s.resolver){const u=await ie(w(r)?r:c);n=U(u),f=r?!c.some(g=>y(u,g)):n}else r?(f=(await Promise.all(c.map(async u=>{const g=y(a,u);return await I(g&&g._f?{[u]:g}:g)}))).every(Boolean),!(!f&&!t.isValid)&&E()):f=n=await I(a);return p.state.next({...!$(r)||V.isValid&&n!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:n}:{},errors:t.errors}),i.shouldFocus&&!f&&ye(a,ce,r?c:x.mount),f},Re=r=>{const i={...h.mount?l:o};return w(r)?i:$(r)?y(i,r):r.map(n=>y(i,n))},Ue=(r,i)=>({invalid:!!y((i||t).errors,r),isDirty:!!y((i||t).dirtyFields,r),isTouched:!!y((i||t).touchedFields,r),isValidating:!!y((i||t).validatingFields,r),error:y((i||t).errors,r)}),dr=r=>{r&&ke(r).forEach(i=>D(t.errors,i)),p.state.next({errors:r?t.errors:{}})},Ie=(r,i,n)=>{const f=(y(a,r,{_f:{}})._f||{}).ref;A(t.errors,r,{...i,ref:f}),p.state.next({name:r,errors:t.errors,isValid:!1}),n&&n.shouldFocus&&f&&f.focus&&f.focus()},fr=(r,i)=>Y(r)?p.values.subscribe({next:n=>r(m(void 0,i),n)}):m(r,i,!0),Fe=(r,i={})=>{for(const n of r?ke(r):x.mount)x.mount.delete(n),x.array.delete(n),i.keepValue||(D(a,n),D(l,n)),!i.keepError&&D(t.errors,n),!i.keepDirty&&D(t.dirtyFields,n),!i.keepTouched&&D(t.touchedFields,n),!i.keepIsValidating&&D(t.validatingFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&D(o,n);p.values.next({values:{...l}}),p.state.next({...t,...i.keepDirty?{isDirty:v()}:{}}),!i.keepIsValid&&E()},Be=({disabled:r,name:i,field:n,fields:f,value:c})=>{if(Q(r)){const u=r?void 0:w(c)?Ne(n?n._f:y(f,i)._f):c;A(l,i,u),se(i,u,!1,!1,!0)}},je=(r,i={})=>{let n=y(a,r);const f=Q(i.disabled);return A(a,r,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:r}},name:r,mount:!0,...i}}),x.mount.add(r),n?Be({field:n,disabled:i.disabled,name:r,value:i.value}):F(r,!0,i.value),{...f?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:fe(i.min),max:fe(i.max),minLength:fe(i.minLength),maxLength:fe(i.maxLength),pattern:fe(i.pattern)}:{},name:r,onChange:ue,onBlur:ue,ref:c=>{if(c){je(r,i),n=y(a,r);const u=w(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,g=Rr(u),_=n._f.refs||[];if(g?_.find(k=>k===u):u===n._f.ref)return;A(a,r,{_f:{...n._f,...g?{refs:[..._.filter(Ee),u,...Array.isArray(y(o,r))?[{}]:[]],ref:{type:u.type,name:r}}:{ref:u}}}),F(r,!1,void 0,u)}else n=y(a,r,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(Dr(x.array,r)&&h.action)&&x.unMount.add(r)}}},qe=()=>s.shouldFocusError&&ye(a,ce,x.mount),yr=r=>{Q(r)&&(p.state.next({disabled:r}),ye(a,(i,n)=>{let f=r;const c=y(a,n);c&&Q(c._f.disabled)&&(f||(f=c._f.disabled)),i.disabled=f},0,!1))},ze=(r,i)=>async n=>{let f;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let c=q(l);if(p.state.next({isSubmitting:!0}),s.resolver){const{errors:u,values:g}=await Z();t.errors=u,c=g}else await I(a);if(D(t.errors,"root"),U(t.errors)){p.state.next({errors:{}});try{await r(c,n)}catch(u){f=u}}else i&&await i({...t.errors},n),qe(),setTimeout(qe);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(t.errors)&&!f,submitCount:t.submitCount+1,errors:t.errors}),f)throw f},hr=(r,i={})=>{y(a,r)&&(w(i.defaultValue)?B(r,q(y(o,r))):(B(r,i.defaultValue),A(o,r,q(i.defaultValue))),i.keepTouched||D(t.touchedFields,r),i.keepDirty||(D(t.dirtyFields,r),t.isDirty=i.defaultValue?v(r,q(y(o,r))):v()),i.keepError||(D(t.errors,r),V.isValid&&E()),p.state.next({...t}))},We=(r,i={})=>{const n=r?q(r):o,f=q(n),c=U(r),u=c?o:f;if(i.keepDefaultValues||(o=n),!i.keepValues){if(i.keepDirtyValues)for(const g of x.mount)y(t.dirtyFields,g)?A(u,g,y(l,g)):B(g,y(u,g));else{if(Me&&w(r))for(const g of x.mount){const _=y(a,g);if(_&&_._f){const k=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(_e(k)){const R=k.closest("form");if(R){R.reset();break}}}}a={}}l=e.shouldUnregister?i.keepDefaultValues?q(o):{}:q(u),p.array.next({values:{...u}}),p.values.next({values:{...u}})}x={mount:i.keepDirtyValues?x.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!V.isValid||!!i.keepIsValid||!!i.keepDirtyValues,h.watch=!!e.shouldUnregister,p.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:c?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!re(r,o)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:c?[]:i.keepDirtyValues?i.keepDefaultValues&&l?be(o,l):t.dirtyFields:i.keepDefaultValues&&r?be(o,r):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Pe=(r,i)=>We(Y(r)?r(l):r,i);return{control:{register:je,unregister:Fe,getFieldState:Ue,handleSubmit:ze,setError:Ie,_executeSchema:Z,_getWatch:m,_getDirty:v,_updateValid:E,_removeUnmounted:ve,_updateFieldArray:b,_updateDisabledField:Be,_getFieldArray:j,_reset:We,_resetDefaultValues:()=>Y(s.defaultValues)&&s.defaultValues().then(r=>{Pe(r,s.resetOptions),p.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:yr,_subjects:p,_proxyFormState:V,_setErrors:G,get _fields(){return a},get _formValues(){return l},get _state(){return h},set _state(r){h=r},get _defaultValues(){return o},get _names(){return x},set _names(r){x=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:de,register:je,handleSubmit:ze,watch:fr,setValue:B,getValues:Re,reset:Pe,resetField:hr,clearErrors:dr,unregister:Fe,setError:Ie,setFocus:(r,i={})=>{const n=y(a,r),f=n&&n._f;if(f){const c=f.refs?f.refs[0]:f.ref;c.focus&&(c.focus(),i.shouldSelect&&c.select())}},getFieldState:Ue}}function Pr(e={}){const s=z.useRef(),t=z.useRef(),[a,o]=z.useState({isDirty:!1,isValidating:!1,isLoading:Y(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Y(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Wr(e),formState:a});const l=s.current.control;return l._options=e,Er({subject:l._subjects.state,next:h=>{Tr(h,l._proxyFormState,l._updateFormState,!0)&&o({...l._formState})}}),z.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),z.useEffect(()=>{if(l._proxyFormState.isDirty){const h=l._getDirty();h!==a.isDirty&&l._subjects.state.next({isDirty:h})}},[l,a.isDirty]),z.useEffect(()=>{e.values&&!re(e.values,t.current)?(l._reset(e.values,l._options.resetOptions),t.current=e.values,o(h=>({...h}))):l._resetDefaultValues()},[e.values,l]),z.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),z.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),z.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),s.current.formState=kr(a,l),s.current}const Jr=()=>{const{register:e,handleSubmit:s,watch:t,setValue:a,formState:{errors:o}}=Pr(),l=t("articleMentorNeeded"),h=t("articleType"),[x,O]=Ke.useState(),[T,V]=Ke.useState(""),p=vr(),te=new Date().toISOString().split("T")[0],H=N=>{N.preventDefault(),x&&(V(T+`#${x}`),console.log(T),a("articleMentorTag",T),O(""))},C=async N=>{try{const E=await mr({...N,articleMentorTag:T,articleStartDay:new Date().toISOString(),articleMentorNeeded:l==="yes"});if(console.log(E),E.success)_r.success("등록 완료!"),p("/home/articlelist");else throw new Error("등록 실패")}catch(E){console.log(`실패: ${E.message}`)}};return d.jsx(d.Fragment,{children:d.jsxs(Ar,{onSubmit:s(C),children:[d.jsx("h3",{children:"스터디 / 프로젝트 등록"}),d.jsxs(ee,{children:[d.jsx("p",{className:"inputTitle",children:"팀 유형"}),d.jsx("label",{children:"모집하는 팀의 유형을 선택해 주세요"}),d.jsxs("div",{className:"inputWrap",children:[d.jsxs(le,{children:[d.jsx("input",{type:"radio",value:"study",...e("articleType",{required:!0})}),d.jsx("span",{children:"스터디"})]}),d.jsxs(le,{children:[d.jsx("input",{type:"radio",value:"project",...e("articleType",{required:!0})}),d.jsx("span",{children:"프로젝트"})]})]}),o.articleType&&d.jsx("p",{style:{color:"red",fontSize:"0.75rem",margin:"0"},children:"팀 유형을 선택해 주세요"})]}),d.jsxs(ee,{children:[d.jsx("p",{className:"inputTitle",children:"모집 인원 "}),d.jsx("label",{htmlFor:"articleApply",children:"모집 인원을 선택해 주세요"}),d.jsx("select",{...e("articleApply",{required:!0}),children:Array.from({length:10},(N,E)=>E+1).map(N=>d.jsx("option",{value:N,children:N},N))}),o.articleApply&&d.jsx("p",{style:{color:"red",fontSize:"0.75rem",margin:"0"},children:"모집 인원 선택해 주세요"})]}),d.jsxs(ee,{children:[d.jsx("p",{className:"inputTitle",children:"모집 날짜"}),d.jsx("label",{children:"팀원을 모집하는 마지막 날짜를 입력해 주세요"}),d.jsx("div",{className:"inputWrap",children:d.jsx("input",{type:"date",...e("articleEndDay",{required:!0}),min:te})}),o.articleEndDay&&d.jsx("p",{style:{color:"red",fontSize:"0.75rem",margin:"0"},children:"날짜를 선택해 주세요"})]}),d.jsxs(ee,{children:[d.jsx("p",{className:"inputTitle",children:"연락 수단"}),d.jsxs("label",{children:["매칭이 성공한 팀원과 연락할 수 있는 방법을 입력해 주세요. ",d.jsx("br",{}),"매칭되기 전까지는 이 정보가 공개되지 않으니 안심하세요."]}),d.jsxs("div",{className:"inputWrap",children:[d.jsxs(le,{children:[d.jsx("input",{type:"radio",value:"전화번호",...e("articleContactMethod",{required:!0})}),d.jsx("span",{children:"전화번호"})]}),d.jsxs(le,{children:[d.jsx("input",{type:"radio",value:"카카오톡오픈채팅",...e("articleContactMethod",{required:!0})}),d.jsx("span",{children:"카카오톡 오픈채팅"})]})]}),o.articleContactMethod&&d.jsx("p",{style:{color:"red",fontSize:"0.75rem",margin:"0"},children:"소통 수단을 입력해 주세요"}),d.jsx("div",{className:"inputWrap",style:{marginTop:"10px"},children:d.jsx("input",{type:"input",placeholder:"전화번호 또는 카카오톡 오픈채팅 링크를 입력해 주세요",...e("articleContactInfo",{required:!0})})}),o.articleContactInfo&&d.jsx("p",{style:{color:"red",fontSize:"0.75rem",margin:"0"},children:"소통할 연락처를 입력해 주세요"})]}),d.jsxs(ee,{children:[d.jsx("p",{className:"inputTitle",children:"멘토 필요 여부"}),d.jsx("label",{children:" 멘토 필요 여부를 선택해 주세요"}),d.jsxs("div",{className:"inputWrap",children:[d.jsxs(le,{children:[d.jsx("input",{type:"radio",value:"yes",...e("articleMentorNeeded",{required:!0})}),d.jsx("span",{children:"네"})]}),d.jsxs(le,{children:[d.jsx("input",{type:"radio",value:"no",...e("articleMentorNeeded",{required:!0})}),d.jsx("span",{children:"아니요"})]})]}),o.articleMentorNeeded&&d.jsx("p",{style:{color:"red",fontSize:"0.75rem",margin:"0"},children:"멘토 필요 여부를 선택해 주세요"})]}),l==="yes"&&d.jsx("div",{children:d.jsx(ee,{children:d.jsxs(ee,{children:[d.jsxs("label",{style:{marginTop:"10px"},children:["원하는 멘토의 타입을 적어주세요",d.jsx("br",{})," ex 열정적인, 끝까지 완주 가능한, 자주 만남 가능한"]}),d.jsxs(Vr,{children:[d.jsxs("div",{className:"mentorTagInput",children:[d.jsx("div",{children:"#"}),d.jsx("input",{type:"text",value:x,onChange:N=>O(N.target.value)}),d.jsx("button",{type:"submit",onClick:H,children:"+"})]}),d.jsx("div",{className:"mentorTagWrap",children:T.length>=1&&T.split("#").map((N,E)=>d.jsx("div",{children:N},E))})]})]})})}),d.jsxs(wr,{children:[d.jsx("input",{placeholder:"제목을 입력해 주세요",...e("articleTitle")}),o.articleTitle&&d.jsx("p",{style:{color:"red",fontSize:"0.75rem",margin:"0"},children:"제목을 5자 이상으로 작성해 주세요"}),d.jsx("textarea",{...e("articleContent",{required:!0})}),o.articleContent&&d.jsx("p",{style:{color:"red",fontSize:"0.75rem",margin:"0"},children:"내용을 10자 이상으로 작성해 주세요"})]}),d.jsx("div",{className:"buttonWrap",children:d.jsx(br,{text:(h==="study"?"스터디":"프로젝트")+" 등록하기",type:"submit"})})]})})};export{Jr as default};
