!function(){const t={DEBUG:!1};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,t)}catch(t){}globalThis.process={env:t}}();var t="simple-thermostat";const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:o,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,g=f?f.emptyScript:"",m=u.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>!o(t,e),$={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&c(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const r=n?.call(this);s?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(i)t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of n){const n=document.createElement("style"),s=e.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=i.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=n;const r=s.fromAttribute(e,t.type);this[n]=r??this._$Ej?.get(n)??r,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,s=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??_)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==s||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[v("elementProperties")]=new Map,b[v("finalized")]=new Map,m?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.1");const w=globalThis,x=w.trustedTypes,A=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+S,C=`<${O}>`,k=document,P=()=>k.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,j="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,U=/>/g,H=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,M=/"/g,V=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),D=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),B=new WeakMap,W=k.createTreeWalker(k,129);function q(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,n=[];let s,r=2===e?"<svg>":3===e?"<math>":"",a=N;for(let e=0;e<i;e++){const i=t[e];let o,c,l=-1,h=0;for(;h<i.length&&(a.lastIndex=h,c=a.exec(i),null!==c);)h=a.lastIndex,a===N?"!--"===c[1]?a=R:void 0!==c[1]?a=U:void 0!==c[2]?(V.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=H):void 0!==c[3]&&(a=H):a===H?">"===c[0]?(a=s??N,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,o=c[1],a=void 0===c[3]?H:'"'===c[3]?M:I):a===M||a===I?a=H:a===R||a===U?a=N:(a=H,s=void 0);const d=a===H&&t[e+1].startsWith("/>")?" ":"";r+=a===N?i+C:l>=0?(n.push(o),i.slice(0,l)+E+i.slice(l)+S+d):i+S+(-2===l?e:d)}return[q(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class Y{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const a=t.length-1,o=this.parts,[c,l]=J(t,e);if(this.el=Y.createElement(c,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=W.nextNode())&&o.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(E)){const e=l[r++],i=n.getAttribute(t).split(S),a=/([.?@])?(.*)/.exec(e);o.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?X:"?"===a[1]?tt:"@"===a[1]?et:Q}),n.removeAttribute(t)}else t.startsWith(S)&&(o.push({type:6,index:s}),n.removeAttribute(t));if(V.test(n.tagName)){const t=n.textContent.split(S),e=t.length-1;if(e>0){n.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],P()),W.nextNode(),o.push({type:2,index:++s});n.append(t[e],P())}}}else if(8===n.nodeType)if(n.data===O)o.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(S,t+1));)o.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,n){if(e===D)return e;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const r=z(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(e=Z(t,s._$AS(t,e.values),s,n)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??k).importNode(e,!0);W.currentNode=n;let s=W.nextNode(),r=0,a=0,o=i[0];for(;void 0!==o;){if(r===o.index){let e;2===o.type?e=new K(s,s.nextSibling,this,t):1===o.type?e=new o.ctor(s,o.name,o.strings,this,t):6===o.type&&(e=new it(s,this,t)),this._$AV.push(e),o=i[++a]}r!==o?.index&&(s=W.nextNode(),r++)}return W.currentNode=k,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),z(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==D&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==L&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new G(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new Y(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new K(this.O(P()),this.O(P()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(void 0===s)t=Z(this,t,e,0),r=!z(t)||t!==this._$AH&&t!==D,r&&(this._$AH=t);else{const n=t;let a,o;for(t=s[0],a=0;a<s.length-1;a++)o=Z(this,n[i+a],e,a),o===D&&(o=this._$AH[a]),r||=!z(o)||o!==this._$AH[a],o===L?t=L:t!==L&&(t+=(o??"")+s[a+1]),this._$AH[a]=o}r&&!n&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class et extends Q{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??L)===D)return;const i=this._$AH,n=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==L&&(i===L||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const nt=w.litHtmlPolyfillSupport;nt?.(Y,K),(w.litHtmlVersions??=[]).push("3.3.1");const st=globalThis;let rt=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let s=n._$litPart$;if(void 0===s){const t=i?.renderBefore??null;n._$litPart$=s=new K(e.insertBefore(P(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};rt._$litElement$=!0,rt.finalized=!0,st.litElementHydrateSupport?.({LitElement:rt});const at=st.litElementPolyfillSupport;at?.({LitElement:rt}),(st.litElementVersions??=[]).push("4.2.1");var ot=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new r(i,t,n)})`:host {
  --st-default-spacing: 4px;
}
ha-card {
  -webkit-font-smoothing: var(--paper-font-body1_-_-webkit-font-smoothing);
  font-size: var(--paper-font-body1_-_font-size);
  font-weight: var(--paper-font-body1_-_font-weight);
  line-height: var(--paper-font-body1_-_line-height);

  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);

  --auto-color: green;
  --heat_cool-color: springgreen;
  --cool-color: #2b9af9;
  --heat-color: #ff8100;
  --manual-color: #44739e;
  --off-color: #8a8a8a;
  --fan_only-color: #8a8a8a;
  --dry-color: #efbd07;
}

ha-card.no-header {
  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 4) 0;
}

.body {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(min-content, auto);
  align-items: center;
  justify-items: center;
  place-items: center;
  padding: 0 calc(var(--st-spacing, var(--st-default-spacing)) * 4);
  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}

.toggle-label {
  color: var(--st-toggle-label-color, var(--primary-text-color));
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  font-size: 16px;
  font-size: var(
    --st-font-size-toggle-label,
    var(--paper-font-subhead_-_font-size, 16px)
  );
}

.faults {
  display: flex;
  flex-direction: row;
  margin-left: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}
.fault-icon {
  padding: 2px;
  cursor: pointer;
  color: var(--st-fault-inactive-color, var(--secondary-background-color));
}
.fault-icon.active {
    color: var(--st-fault-active-color, var(--accent-color));
  }
.fault-icon.hide {
    display: none;
  }

.sensors {
  display: grid;
  grid-gap: var(--st-spacing, var(--st-default-spacing));
  font-size: 16px;
  font-size: var(
    --st-font-size-sensors,
    var(--paper-font-subhead_-_font-size, 16px)
  );
}
.sensors.as-list {
  grid-auto-flow: column;
  grid-template-columns: min-content;
}

.sensors.as-table.without-labels {
    grid: auto-flow / 100%;
    align-items: start;
    justify-items: start;
    place-items: start;
  }

.sensors.as-table.with-labels {
    grid: auto-flow / auto auto;
    align-items: start;
    justify-items: start;
    place-items: start;
  }

.sensor-value {
  display: flex;
  align-items: center;
  padding-bottom: 4px;
}
.sensor-heading {
  font-weight: 300;
  padding-right: 8px;
  padding-bottom: 4px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.sensors:empty {
  display: none;
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 6)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4);
}
.header__icon {
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  color: #44739e;
  color: var(--paper-item-icon-color, #44739e);
}
.header__title {
  font-size: 24px;
  font-size: var(--st-font-size-title, var(--ha-card-header-font-size, 24px));
  line-height: 24px;
  line-height: var(--st-font-size-title, var(--ha-card-header-font-size, 24px));
  -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
  font-weight: normal;
  margin: 0;
  align-self: left;
}
.current-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
}
.current-wrapper.row {
    flex-direction: row-reverse;
  }

.current-wrapper > ha-icon-button:first-child {
  margin-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2) !important;
}

.current-wrapper > ha-icon-button:last-child {
  margin-top: calc(var(--st-spacing, var(--st-default-spacing)) * 2) !important;
}

.current-wrapper > h3 {
  margin: 0 !important;
}
/* Force override all h3 elements in the card - match current temp size */
:host h3,
ha-card h3,
.current-wrapper h3,
h3.current--value,
h3 {
  font-weight: normal !important;
  font-size: 16px !important;
  font-size: var(--paper-font-subhead_-_font-size, 16px) !important;
  line-height: 16px !important;
  line-height: var(--paper-font-subhead_-_font-size, 16px) !important;
  margin: calc(var(--st-spacing, var(--st-default-spacing)) / 2) 0 !important;
  display: flex !important;
  align-items: center !important;
}

/* Updating state */
:host h3.updating,
ha-card h3.updating,
.current-wrapper h3.updating,
h3.current--value.updating,
h3.updating {
  color: var(--error-color) !important;
  font-weight: normal !important;
  font-size: 16px !important;
  font-size: var(--paper-font-subhead_-_font-size, 16px) !important;
  line-height: 16px !important;
  line-height: var(--paper-font-subhead_-_font-size, 16px) !important;
}

/* Legacy class for other temperature displays */
.current--value {
  display: flex;
  align-items: center;
  margin: 0;
  font-weight: 300;
  line-height: var(--st-font-size-l, var(--paper-font-display1_-_font-size));
  font-size: var(--st-font-size-l, var(--paper-font-display1_-_font-size));
}
@media (min-width: 768px) {
.current--value {
    font-size: var(--st-font-size-xl, var(--paper-font-display2_-_font-size));
    line-height: var(--st-font-size-xl, var(--paper-font-display2_-_font-size));
}
  }
.current--value.updating {
    color: var(--error-color);
  }
.current--unit {
  font-size: var(--st-font-size-m, var(--paper-font-title_-_font-size));
}
.thermostat-trigger {
  padding: 0px;
  margin: calc(var(--st-spacing, var(--st-default-spacing)) / 2) 0 !important;
}
.clickable {
  cursor: pointer;
}
.modes {
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: column;
  grid-gap: calc(var(--st-spacing, var(--st-default-spacing)) * 1.5);
  margin-top: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  padding: var(--st-spacing, var(--st-default-spacing)) 16px;
}
.modes.heading {
    grid-template-columns: min-content;
  }
.mode-title {
  padding: 0 12px 0 0;
  align-self: center;
  justify-self: center;
  place-self: center;
  font-size: 16px;
  font-size: var(
    --st-font-size-sensors,
    var(--paper-font-subhead_-_font-size, 16px)
  );
  font-weight: 300;
  white-space: nowrap;
}
.mode-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  min-height: 24px;
  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 2) 0;
  background: var(--st-mode-background, var(--secondary-background-color));
  color: var(--secondary-text-color);
  cursor: pointer;
  border-radius: var(--st-spacing, var(--st-default-spacing));
}
.mode-item:hover {
    color: var(--st-mode-active-color, var(--primary-text-color));
  }
.mode-item.active,.mode-item.active:hover {
    background: var(--st-mode-active-background, var(--primary-color));
    color: var(--st-mode-active-color, var(--text-primary-color));
  }
.mode-item.active.off {
    background: var(--st-mode-active-background, var(--off-color));
  }
.mode-item.active.heat {
    background: var(--st-mode-active-background, var(--heat-color));
  }
.mode-item.active.cool {
    background: var(--st-mode-active-background, var(--cool-color));
  }
.mode-item.active.heat_cool {
    background: var(--st-mode-active-background, var(--heat_cool-color));
  }
.mode-item.active.auto {
    background: var(--st-mode-active-background, var(--auto-color));
  }
.mode-item.active.dry {
    background: var(--st-mode-active-background, var(--dry-color));
  }
.mode-item.active.fan_only {
    background: var(--st-mode-active-background, var(--fan_only-color));
  }
.mode-icon {
  --iron-icon-width: 24px;
  --iron-icon-height: 24px;
  display: block;
}
ha-switch {
  padding: 16px 6px;
}
.side-by-side {
  display: flex;
  align-items: center;
}
.side-by-side > * {
  flex: 1;
  padding-right: 4px;
}
`;function ct(t,e,i,n={}){n=n||{},i=null==i?{}:i;const s=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,t.dispatchEvent(s),s}!function(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===i&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}(ot);const lt=[0,1],ht=[.5,1],dt=["column","row"],pt=["climate"],ut={header:{},layout:{mode:{}}};function ft(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;const gt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:_},mt=(t=gt,e,i)=>{const{kind:n,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,s,t)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const s=this[n];e.call(this,i),this.requestUpdate(n,s,t)}}throw Error("Unsupported decorator location: "+n)};function vt(t){return(e,i)=>"object"==typeof i?mt(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const yt=(t,e,i,n)=>{if("length"===i||"prototype"===i)return;if("arguments"===i||"caller"===i)return;const s=Object.getOwnPropertyDescriptor(t,i),r=Object.getOwnPropertyDescriptor(e,i);!_t(s,r)&&n||Object.defineProperty(t,i,r)},_t=function(t,e){return void 0===t||t.configurable||t.writable===e.writable&&t.enumerable===e.enumerable&&t.configurable===e.configurable&&(t.writable||t.value===e.value)},$t=(t,e)=>`/* Wrapped ${t}*/\n${e}`,bt=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),wt=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name");function xt(t,e,{ignoreNonConfigurable:i=!1}={}){const{name:n}=t;for(const n of Reflect.ownKeys(e))yt(t,e,n,i);return((t,e)=>{const i=Object.getPrototypeOf(e);i!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,i)})(t,e),((t,e,i)=>{const n=""===i?"":`with ${i.trim()}() `,s=$t.bind(null,n,e.toString());Object.defineProperty(s,"name",wt);const{writable:r,enumerable:a,configurable:o}=bt;Object.defineProperty(t,"toString",{value:s,writable:r,enumerable:a,configurable:o})})(t,e,n),t}const At=(t,e={})=>{if("function"!=typeof t)throw new TypeError(`Expected the first argument to be a function, got \`${typeof t}\``);const{wait:i=0,maxWait:n=Number.POSITIVE_INFINITY,before:s=!1,after:r=!0}=e;if(i<0||n<0)throw new RangeError("`wait` and `maxWait` must not be negative.");if(!s&&!r)throw new Error("Both `before` and `after` are false, function wouldn't be called.");let a,o,c;const l=function(...e){const l=this,h=()=>{o=void 0,a&&(clearTimeout(a),a=void 0),r&&(c=t.apply(l,e))},d=s&&!a;return clearTimeout(a),a=setTimeout(()=>{a=void 0,o&&(clearTimeout(o),o=void 0),r&&(c=t.apply(l,e))},i),n>0&&n!==Number.POSITIVE_INFINITY&&!o&&(o=setTimeout(h,n)),d&&(c=t.apply(l,e)),c};return xt(l,t),l.cancel=()=>{a&&(clearTimeout(a),a=void 0),o&&(clearTimeout(o),o=void 0)},l};function Et(t,{decimals:e=1,fallback:i="N/A"}={}){return null===t||""===t||["boolean","undefined"].includes(typeof t)?i:Number(t).toFixed(e)}function St({header:t,toggleEntityChanged:e,entity:i,openEntityPopover:n}){if(!1===t)return L;const s=i.attributes.hvac_action||i.state;let r=t.icon;"object"==typeof t.icon&&(r=r?.[s]??!1);const a=t?.name??!1;return F`
    <header>
      <div
        style="display: flex;"
        class="clickable"
        @click=${()=>n()}
      >
        ${function(t){return t?F` <ha-icon class="header__icon" .icon=${t}></ha-icon> `:L}(r)} ${function(t){return t?F`<h2 class="header__title">${t}</h2>`:L}(a)}
      </div>
      ${function(t,e){if(0===t.length)return L;const i=t.map(({icon:t,hide_inactive:i,state:n})=>F` <ha-icon
      class="fault-icon ${"on"===n.state?"active":i?" hide":""}"
      icon="${t||n.attributes.icon}"
      @click="${()=>e(n.entity_id)}"
    ></ha-icon>`);return F` <div class="faults">${i}</div>`}(t.faults,n)}
      ${function(t,e,i){return t?F`
    <div style="margin-left: auto;">
      <span
        class="clickable toggle-label"
        @click=${()=>e(t.entity.entity_id)}
        >${t.label}
      </span>
      <ha-switch
        .checked=${"on"===t.entity?.state}
        @change=${i}
      ></ha-switch>
    </div>
  `:L}(t.toggle,n,e)}
    </header>
  `}var Ot,Ct={exports:{}};function kt(){return Ot||(Ot=1,function(t){function e(t){var i,n,s=new Error(t);return i=s,n=e.prototype,Object.setPrototypeOf?Object.setPrototypeOf(i,n):i.__proto__=n,s}function i(t,i,n){var s=i.slice(0,n).split(/\n/),r=s.length,a=s[r-1].length+1;throw e(t+=" at line "+r+" col "+a+":\n\n  "+i.split(/\n/)[r-1]+"\n  "+Array(a).join(" ")+"^")}e.prototype=Object.create(Error.prototype,{name:{value:"Squirrelly Error",enumerable:!1}});var n=new Function("return this")().Promise,s=!1;try{s=new Function("return (async function(){}).constructor")()}catch(t){if(!(t instanceof SyntaxError))throw t}function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function a(t,e,i){for(var n in e)r(e,n)&&(null==e[n]||"object"!=typeof e[n]||"storage"!==n&&"prefixes"!==n||i?t[n]=e[n]:t[n]=a({},e[n]));return t}var o=/^async +/,c=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,l=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,h=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,d=/[.*+\-?^${}()|[\]\\]/g;function p(t){return d.test(t)?t.replace(d,"\\$&"):t}function u(t,n){n.rmWhitespace&&(t=t.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),c.lastIndex=0,l.lastIndex=0,h.lastIndex=0;var s=n.prefixes,r=[s.h,s.b,s.i,s.r,s.c,s.e].reduce(function(t,e){return t&&e?t+"|"+p(e):e?p(e):t},""),a=new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?"+p(n.tags[1])+")","g"),d=new RegExp("([^]*?)"+p(n.tags[0])+"(-|_)?\\s*("+r+")?\\s*","g"),u=0,f=!1;function g(e,s){var r,p={f:[]},g=0,m="c";function v(e){var s=t.slice(u,e),r=s.trim();if("f"===m)"safe"===r?p.raw=!0:n.async&&o.test(r)?(r=r.replace(o,""),p.f.push([r,"",!0])):p.f.push([r,""]);else if("fp"===m)p.f[p.f.length-1][1]+=r;else if("err"===m){if(r){var a=s.search(/\S/);i("invalid syntax",t,u+a)}}else p[m]=r;u=e+1}for("h"===s||"b"===s||"c"===s?m="n":"r"===s&&(p.raw=!0,s="i"),a.lastIndex=u;null!==(r=a.exec(t));){var y=r[1],_=r[2],$=r[3],b=r[4],w=r[5],x=r.index;if(y)"("===y?(0===g&&("n"===m?(v(x),m="p"):"f"===m&&(v(x),m="fp")),g++):")"===y?0===--g&&"c"!==m&&(v(x),m="err"):0===g&&"|"===y?(v(x),m="f"):"=>"===y&&(v(x),u+=1,m="res");else if(_)if("/*"===_){var A=t.indexOf("*/",a.lastIndex);-1===A&&i("unclosed comment",t,r.index),a.lastIndex=A+2}else"'"===_?(l.lastIndex=r.index,l.exec(t)?a.lastIndex=l.lastIndex:i("unclosed string",t,r.index)):'"'===_?(h.lastIndex=r.index,h.exec(t)?a.lastIndex=h.lastIndex:i("unclosed string",t,r.index)):"`"===_&&(c.lastIndex=r.index,c.exec(t)?a.lastIndex=c.lastIndex:i("unclosed string",t,r.index));else if($)return v(x),u=x+r[0].length,d.lastIndex=u,f=w,b&&"h"===s&&(s="s"),p.t=s,p}return i("unclosed tag",t,e),p}var m=function r(a,c){a.b=[],a.d=[];var l,h=!1,p=[];function m(t,e){t&&(t=function(t,e,i,n){var s,r;return"string"==typeof e.autoTrim?s=r=e.autoTrim:Array.isArray(e.autoTrim)&&(s=e.autoTrim[1],r=e.autoTrim[0]),(i||!1===i)&&(s=i),(n||!1===n)&&(r=n),"slurp"===s&&"slurp"===r?t.trim():("_"===s||"slurp"===s?t=String.prototype.trimLeft?t.trimLeft():t.replace(/^[\s\uFEFF\xA0]+/,""):"-"!==s&&"nl"!==s||(t=t.replace(/^(?:\n|\r|\r\n)/,"")),"_"===r||"slurp"===r?t=String.prototype.trimRight?t.trimRight():t.replace(/[\s\uFEFF\xA0]+$/,""):"-"!==r&&"nl"!==r||(t=t.replace(/(?:\n|\r|\r\n)$/,"")),t)}(t,n,f,e))&&(t=t.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),p.push(t))}for(;null!==(l=d.exec(t));){var v,y=l[1],_=l[2],$=l[3]||"";for(var b in s)if(s[b]===$){v=b;break}m(y,_),u=l.index+l[0].length,v||i("unrecognized tag type: "+$,t,u);var w=g(l.index,v),x=w.t;if("h"===x){var A=w.n||"";n.async&&o.test(A)&&(w.a=!0,w.n=A.replace(o,"")),w=r(w),p.push(w)}else if("c"===x){if(a.n===w.n)return h?(h.d=p,a.b.push(h)):a.d=p,a;i("Helper start and end don't match",t,l.index+l[0].length)}else if("b"===x){h?(h.d=p,a.b.push(h)):a.d=p;var E=w.n||"";n.async&&o.test(E)&&(w.a=!0,w.n=E.replace(o,"")),h=w,p=[]}else if("s"===x){var S=w.n||"";n.async&&o.test(S)&&(w.a=!0,w.n=S.replace(o,"")),p.push(w)}else p.push(w)}if(!c)throw e('unclosed helper "'+a.n+'"');return m(t.slice(u,t.length),!1),a.d=p,a}({f:[]},!0);if(n.plugins)for(var v=0;v<n.plugins.length;v++){var y=n.plugins[v];y.processAST&&(m.d=y.processAST(m.d,n))}return m.d}function f(t,e){var i=u(t,e),n="var tR='';"+(e.useWith?"with("+e.varName+"||{}){":"")+_(i,e)+"if(cb){cb(null,tR)} return tR"+(e.useWith?"}":"");if(e.plugins)for(var s=0;s<e.plugins.length;s++){var r=e.plugins[s];r.processFnString&&(n=r.processFnString(n,e))}return n}function g(t,e){for(var i=0;i<e.length;i++){var n=e[i][0],s=e[i][1];t=(e[i][2]?"await ":"")+"c.l('F','"+n+"')("+t,s&&(t+=","+s),t+=")"}return t}function m(t,e,i,n,s,r){var a="{exec:"+(s?"async ":"")+y(i,e,t)+",params:["+n+"]";return r&&(a+=",name:'"+r+"'"),s&&(a+=",async:true"),a+"}"}function v(t,e){for(var i="[",n=0;n<t.length;n++){var s=t[n];i+=m(e,s.res||"",s.d,s.p||"",s.a,s.n),n<t.length&&(i+=",")}return i+"]"}function y(t,e,i){return"function("+e+"){var tR='';"+_(t,i)+"return tR}"}function _(t,e){for(var i=0,n=t.length,s="";i<n;i++){var r=t[i];if("string"==typeof r)s+="tR+='"+r+"';";else{var a=r.t,o=r.c||"",c=r.f,l=r.n||"",h=r.p||"",d=r.res||"",p=r.b,u=!!r.a;if("i"===a){e.defaultFilter&&(o="c.l('F','"+e.defaultFilter+"')("+o+")");var f=g(o,c);!r.raw&&e.autoEscape&&(f="c.l('F','e')("+f+")"),s+="tR+="+f+";"}else if("h"===a)if(e.storage.nativeHelpers.get(l))s+=e.storage.nativeHelpers.get(l)(r,e);else{var y=(u?"await ":"")+"c.l('H','"+l+"')("+m(e,d,r.d,h,u);y+=p?","+v(p,e):",[]",s+="tR+="+g(y+=",c)",c)+";"}else"s"===a?s+="tR+="+g((u?"await ":"")+"c.l('H','"+l+"')({params:["+h+"]},[],c)",c)+";":"e"===a&&(s+=o+"\n")}}return s}var $=function(){function t(t){this.cache=t}return t.prototype.define=function(t,e){this.cache[t]=e},t.prototype.get=function(t){return this.cache[t]},t.prototype.remove=function(t){delete this.cache[t]},t.prototype.reset=function(){this.cache={}},t.prototype.load=function(t){a(this.cache,t,!0)},t}();function b(t,i,n,s){if(i&&i.length>0)throw e((s?"Native":"")+"Helper '"+t+"' doesn't accept blocks");if(n&&n.length>0)throw e((s?"Native":"")+"Helper '"+t+"' doesn't accept filters")}var w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function x(t){return w[t]}var A=new $({}),E=new $({each:function(t,e){var i="",n=t.params[0];if(b("each",e,!1),t.async)return new Promise(function(e){!function t(e,i,n,s,r){n(e[i],i).then(function(a){s+=a,i===e.length-1?r(s):t(e,i+1,n,s,r)})}(n,0,t.exec,i,e)});for(var s=0;s<n.length;s++)i+=t.exec(n[s],s);return i},foreach:function(t,e){var i=t.params[0];if(b("foreach",e,!1),t.async)return new Promise(function(e){!function t(e,i,n,s,r,a){s(i[n],e[i[n]]).then(function(o){r+=o,n===i.length-1?a(r):t(e,i,n+1,s,r,a)})}(i,Object.keys(i),0,t.exec,"",e)});var n="";for(var s in i)r(i,s)&&(n+=t.exec(s,i[s]));return n},include:function(t,i,n){b("include",i,!1);var s=n.storage.templates.get(t.params[0]);if(!s)throw e('Could not fetch template "'+t.params[0]+'"');return s(t.params[1],n)},extends:function(t,i,n){var s=t.params[1]||{};s.content=t.exec();for(var r=0;r<i.length;r++){var a=i[r];s[a.name]=a.exec()}var o=n.storage.templates.get(t.params[0]);if(!o)throw e('Could not fetch template "'+t.params[0]+'"');return o(s,n)},useScope:function(t,e){return b("useScope",e,!1),t.exec(t.params[0])}}),S=new $({if:function(t,e){b("if",!1,t.f,!0);var i="if("+t.p+"){"+_(t.d,e)+"}";if(t.b)for(var n=0;n<t.b.length;n++){var s=t.b[n];"else"===s.n?i+="else{"+_(s.d,e)+"}":"elif"===s.n&&(i+="else if("+s.p+"){"+_(s.d,e)+"}")}return i},try:function(t,i){if(b("try",!1,t.f,!0),!t.b||1!==t.b.length||"catch"!==t.b[0].n)throw e("native helper 'try' only accepts 1 block, 'catch'");var n="try{"+_(t.d,i)+"}",s=t.b[0];return n+"catch"+(s.res?"("+s.res+")":"")+"{"+_(s.d,i)+"}"},block:function(t,e){return b("block",t.b,t.f,!0),"if(!"+e.varName+"["+t.p+"]){tR+=("+y(t.d,"",e)+")()}else{tR+="+e.varName+"["+t.p+"]}"}}),O=new $({e:function(t){var e=String(t);return/[&<>"']/.test(e)?e.replace(/[&<>"']/g,x):e}}),C={varName:"it",autoTrim:[!1,"nl"],autoEscape:!0,defaultFilter:!1,tags:["{{","}}"],l:function(t,i){if("H"===t){var n=this.storage.helpers.get(i);if(n)return n;throw e("Can't find helper '"+i+"'")}if("F"===t){var s=this.storage.filters.get(i);if(s)return s;throw e("Can't find filter '"+i+"'")}},async:!1,storage:{helpers:E,nativeHelpers:S,filters:O,templates:A},prefixes:{h:"@",b:"#",i:"",r:"*",c:"/",e:"!"},cache:!1,plugins:[],useWith:!1};function k(t,e){var i={};return a(i,C),e&&a(i,e),t&&a(i,t),i.l.bind(i),i}function P(t,i){var n,r=k(i||{}),a=Function;if(r.async){if(!s)throw e("This environment doesn't support async/await");a=s}if(r.varName&&!1===(n=r.varName,/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(n)))throw e("options.varName must be a valid JS identifier");try{return new a(r.varName,"c","cb",f(t,r))}catch(i){throw i instanceof SyntaxError?e("Bad template syntax\n\n"+i.message+"\n"+Array(i.message.length+1).join("=")+"\n"+f(t,r)):i}}function z(t,e){var i;return e.cache&&e.name&&e.storage.templates.get(e.name)?e.storage.templates.get(e.name):(i="function"==typeof t?t:P(t,e),e.cache&&e.name&&e.storage.templates.define(e.name,i),i)}C.l.bind(C),t.compile=P,t.compileScope=_,t.compileScopeIntoFunction=y,t.compileToString=f,t.defaultConfig=C,t.filters=O,t.getConfig=k,t.helpers=E,t.nativeHelpers=S,t.parse=u,t.render=function(t,i,s,r){var a=k(s||{});if(!a.async)return z(t,a)(i,a);if(!r){if("function"==typeof n)return new n(function(e,n){try{e(z(t,a)(i,a))}catch(t){n(t)}});throw e("Please provide a callback function, this env doesn't support Promises")}try{z(t,a)(i,a,r)}catch(t){return r(t)}},t.templates=A,Object.defineProperty(t,"__esModule",{value:!0})}(Ct.exports)),Ct.exports}var Pt=kt();const zt=2;class Tt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class jt extends Tt{constructor(t){if(super(t),this.it=L,t.type!==zt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===L||null==t)return this._t=void 0,this.it=t;if(t===D)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}jt.directiveName="unsafeHTML",jt.resultType=1;const Nt=(t=>(...e)=>({_$litDirective$:t,values:e}))(jt),Rt=t=>`<ha-icon icon="${t}"></ha-icon>`;function Ut(t,e){const{type:i,labels:n}=t?.layout?.sensors??{type:"table",labels:!0};return F` <div class="sensors ${[n?"with-labels":"without-labels","list"===i?"as-list":"as-table"].join(" ")}">${e}</div> `}function Ht({hide:t=!1,hass:e,state:i,details:n,localize:s,openEntityPopover:r}){if(t||void 0===i)return;const{type:a,heading:o,icon:c,unit:l,decimals:h}=n;let d;if(process.env.DEBUG&&console.log("ST: infoItem",{state:i,details:n}),"relativetime"===a)d=F`
      <div class="sensor-value">
        <ha-relative-time .datetime=${i} .hass=${e}></ha-relative-time>
      </div>
    `;else if("object"==typeof i){const[t]=i.entity_id.split("."),e=["component",t,"state",i.attributes?.device_class??"_",""].join(".");let n=s(i.state,e);"number"==typeof h&&(n=Et(n,{decimals:h})),d=F`
      <div
        class="sensor-value clickable"
        @click="${()=>r(i.entity_id)}"
      >
        ${n} ${l||i.attributes.unit_of_measurement}
      </div>
    `}else{let t="number"==typeof h?Et(i,{decimals:h}):i;d=F` <div class="sensor-value">${t}${l}</div> `}if(!1===o)return d;const p=c?F` <ha-icon icon="${c}"></ha-icon> `:F` ${o}: `;return F`
    <div class="sensor-heading">${p}</div>
    ${d}
  `}var It;function Mt({state:t,mode:e,modeOptions:i,localize:n,setMode:s}){const{type:r,hide_when_off:a,mode:o="none",list:c,name:l}=e;if(0===c.length||a&&t===It.OFF)return null;let h=`state_attributes.climate.${r}_mode.`;"hvac"===r&&(h="component.climate.state._.");const d=l||n(`ui.card.climate.${"hvac"==r?"operation":`${r}_mode`}`),p=i?.headings??!0;return F`
    <div class="modes ${p?"heading":""}">
      ${p?F` <div class="mode-title">${d}</div> `:""}
      ${c.map(({value:t,icon:e,name:a})=>F`
          <div
            class="mode-item ${t===o?"active "+o:""}"
            @click=${()=>s(r,t)}
          >
            ${(t=>t?!1===i?.icons?null:F` <ha-icon class="mode-icon" .icon=${t}></ha-icon> `:null)(e)} ${(t=>!1===t||!1===i?.names?null:n(t,h))(a)}
          </div>
        `)}
    </div>
  `}Pt.defaultConfig.autoEscape=!1,Pt.filters.define("icon",Rt),Pt.filters.define("join",(t,e=", ")=>t.join(e)),Pt.filters.define("css",(t,e)=>`<span style="${Object.entries(e).reduce((t,[e,i])=>`${t}${e}:${i};`,"")}">${t}</span>`),Pt.filters.define("debug",t=>{try{return JSON.stringify(t)}catch{return`Not able to read valid JSON object from: ${t}`}}),function(t){t.OFF="off",t.HEAT="heat",t.COOL="cool",t.HEAT_COOL="heat_cool",t.AUTO="auto",t.DRY="dry",t.FAN_ONLY="fan_only"}(It||(It={}));const Vt={auto:"mdi:radiator",cooling:"mdi:snowflake",fan:"mdi:fan",heating:"mdi:radiator",idle:"mdi:radiator-disabled",off:"mdi:radiator-off"},Ft={auto:"hass:autorenew",cool:"hass:snowflake",dry:"hass:water-percent",fan_only:"hass:fan",heat_cool:"hass:autorenew",heat:"hass:fire",off:"hass:power"};function Dt(t,e){const i=e.states[t.entity];let n="";return n=!0===t?.name?i.attributes.name:t?.name??"",{entity:i,label:n}}function Lt(t,e){return Array.isArray(t)?t.map(({entity:t,...i})=>({...i,state:e.states[t],entity:t})):[]}var Bt;!function(t){t.HVAC="hvac",t.FAN="fan",t.PRESET="preset",t.SWING="swing"}(Bt||(Bt={}));const Wt=Object.values(Bt),qt=[Bt.HVAC,Bt.PRESET],Jt="hass:chevron-up",Yt="hass:chevron-down",Zt="mdi:plus",Gt="mdi:minus",Kt={temperature:!1,state:!1};function Qt(t,e,i={}){return e[`${t}_modes`].filter(t=>function(t,e){if("object"==typeof e[t])return!1!==e[t].include;return e?.[t]??!0}(t,i)).map(t=>{const e="object"==typeof i[t]?i[t]:{};return{icon:Ft[t],value:t,name:t,...e}})}class Xt extends rt{constructor(){super(...arguments),this.modes=[],this._hass={},this.sensors=[],this.showSensors=!0,this.name="",this.stepSize=.5,this._values={},this._updatingValues=!1,this._hide=Kt,this._debouncedSetTemperature=At(t=>{const{domain:e,service:i,data:n={}}=this.service;this._hass.callService(e,i,{entity_id:this.config.entity,...n,...t})},{wait:500}),this.localize=(t,e="")=>{const i=this._hass.selectedLanguage||this._hass.language,n=`${e}${t}`,s=this._hass.resources[i];return s?.[n]??t},this.toggleEntityChanged=t=>{if(!this.header||!this?.header?.toggle)return;const e=t.target;this._hass.callService("homeassistant",e.checked?"turn_on":"turn_off",{entity_id:this.header?.toggle?.entity?.entity_id})},this.setMode=(t,e)=>{t&&e?(this._hass.callService("climate",`set_${t}_mode`,{entity_id:this.config.entity,[`${t}_mode`]:e}),ct(this,"haptic","light")):ct(this,"haptic","failure")},this.openEntityPopover=(t=null)=>{ct(this,"hass-more-info",{entityId:t||this.config.entity})}}static get styles(){return ot}static getConfigElement(){return window.document.createElement(`${t}-editor`)}setConfig(t){this.config={decimals:1,...t}}updated(){super.connectedCallback();const t=Array.from(this.renderRoot.querySelectorAll("[with-hass]"));for(const e of Array.from(t))Array.from(e.attributes).forEach(t=>{t.name.startsWith("fwd-")&&(e[t.name.replace("fwd-","")]=t.value)}),e.hass=this._hass}set hass(t){if(!this.config.entity)return;const e=t.states[this.config.entity];if(void 0===typeof e)return;this._hass=t,this.entity!==e&&(this.entity=e),this.header=function(t,e,i){if(!1===t)return!1;let n;n="string"==typeof t?.name?t.name:!1!==t?.name&&e.attributes.friendly_name;let s=e.attributes.hvac_action?Vt:Ft;return void 0!==t?.icon&&(s=t.icon),{name:n,icon:s,toggle:t?.toggle?Dt(t.toggle,i):null,faults:Lt(t?.faults,i)}}(this.config.header,e,t),this.service=(this.config?.service??!1)||{domain:"climate",service:"set_temperature"};const i=e.attributes;let n=function(t,e){if(!1===t)return{};if(t)return Object.keys(t).reduce((i,n)=>{const s=t[n];return s?.hide?i:{...i,[n]:e?.[n]}},{});const i=function(t){return"number"==typeof t.target_temp_high&&"number"==typeof t.target_temp_low?"dual":"single"}(e);return"dual"===i?{target_temp_low:e.target_temp_low,target_temp_high:e.target_temp_high}:{temperature:e.temperature}}(this.config?.setpoints??null,i);this._updatingValues&&function(t,e){const i=Object.keys(t);return i.length===Object.keys(e).length&&!i.some(i=>t?.[i]!==e?.[i])}(n,this._values)?this._updatingValues=!1:this._updatingValues||(this._values=n);const s=t=>Wt.includes(t)&&i[`${t}_modes`],r=t=>t.filter(s).map(t=>({type:t,hide_when_off:!1,list:Qt(t,i)}));let a=[];if(!1===this.config.control)a=[];else if(Array.isArray(this.config.control))a=r(this.config.control);else if("object"==typeof this.config.control){const t=Object.entries(this.config.control);a=t.length>0?t.filter(([t])=>s(t)).map(([t,e])=>{const{_name:n,_hide_when_off:s,...r}=e;return{type:t,hide_when_off:s,name:n,list:Qt(t,i,r)}}):r(qt)}else a=r(qt);if(this.modes=a.map(t=>{if(t.type===Bt.HVAC){const i=[],n=Object.values(It);return t.list.forEach(t=>{const e=n.indexOf(t.value);i[e]=t}),{...t,list:i,mode:e.state}}const n=i[`${t.type}_mode`];return{...t,mode:n}}),this.config.step_size&&(this.stepSize=+this.config.step_size),this.config.hide&&(this._hide={...this._hide,...this.config.hide}),!1===this.config.sensors)this.showSensors=!1;else if(3===this.config.version){this.sensors=[];const t=this.config.sensors.map((t,e)=>{const i=t?.entity??this.config.entity;let n=this.entity;return t?.entity&&(n=this._hass.states[t.entity]),{id:t?.id??String(e),label:t?.label,template:t.template,show:!1!==t?.show,entityId:i,context:n}}),e=t.map(t=>t.id),i=[];e.includes("state")||i.push({id:"state",label:"{{ui.operation}}",template:"{{state.text}}",entityId:this.config.entity,context:this.entity}),e.includes("temperature")||i.push({id:"temperature",label:"{{ui.currently}}",template:"{{current_temperature|formatNumber}}",entityId:this.config.entity,context:this.entity}),this.sensors=[...i,...t]}else this.config.sensors&&(this.sensors=this.config.sensors.map(({name:e,entity:i,attribute:n,unit:s="",...r})=>{let a;const o=[e];return i?(a=t.states[i],o.push(a?.attributes?.friendly_name),n&&(a=a.attributes[n])):n&&n in this.entity.attributes&&(a=this.entity.attributes[n],o.push(n)),o.push(i),{...r,name:o.find(t=>!!t),state:a,entity:i,unit:s}}))}render({_hide:t,_values:e,_updatingValues:i,config:n,entity:s}=this){const r=[];if(this.stepSize<1&&0===this.config.decimals&&r.push(F`
        <hui-warning>
          Decimals is set to 0 and step_size is lower than 1. Decrementing a
          setpoint will likely not work. Change one of the settings to clear
          this warning.
        </hui-warning>
      `),!s)return F`
        <hui-warning> Entity not available: ${n.entity} </hui-warning>
      `;const{attributes:{min_temp:a=null,max_temp:o=null,hvac_action:c}}=s,l=this.getUnit(),h=this.config?.layout?.step??"column",d="row"===h,p=[!this.header&&"no-header",c].filter(t=>!!t);let u;return 3===this.config.version?(u=this.sensors.filter(t=>!1!==t.show).map(t=>function({context:t,entityId:e,template:i="{{state.text}}",label:n,hass:s,variables:r={},config:a,localize:o,openEntityPopover:c}){const{state:l,attributes:h}=t,[d]=e.split("."),p=s.selectedLanguage||s.language,u="ui.card.climate.",f=Object.entries(s.resources[p]).reduce((t,[e,i])=>(e.startsWith(u)&&(t[e.replace(u,"")]=i),t),{}),g={...h,state:{raw:l,text:o(l,`component.${d}.state._.`)},ui:f,v:r};Pt.filters.define("formatNumber",(t,e={decimals:a.decimals})=>String(Et(t,e))),Pt.filters.define("relativetime",(t,e={})=>`<ha-relative-time fwd-datetime=${t} with-hass></ha-relative-time>`),Pt.filters.define("translate",(t,e="")=>o(t,e||"climate"!==d&&"humidifier"!==d?e:`state_attributes.${d}.${t}`));const m=t=>Pt.render(t,g,{useWith:!0}),v=m(i);if(!1===n||!1===a?.layout?.sensors?.labels)return F`<div class="sensor-value">${Nt(v)}</div>`;const y=n||"{{friendly_name}}",_=y.match(/^(mdi|hass):.*/)?Rt(y):m(y);return F`
    <div class="sensor-heading">${Nt(_)}</div>
    <div class="sensor-value">${Nt(v)}</div>
  `}({...t,variables:this.config.variables,hass:this._hass,config:this.config,localize:this.localize,openEntityPopover:this.openEntityPopover})),u=Ut(this.config,u)):u=this.showSensors?function({_hide:t,entity:e,unit:i,hass:n,sensors:s,config:r,localize:a,openEntityPopover:o}){const{state:c,attributes:{hvac_action:l,current_temperature:h}}=e,d=r?.layout?.sensors?.labels??!0;let p=a(c,"component.climate.state._.");l&&(p=[a(l,"state_attributes.climate.hvac_action."),` (${p})`].join(""));const u=[Ht({hide:t.temperature,state:`${Et(h,r)}${i||""}`,hass:n,details:{heading:!!d&&(r?.label?.temperature??a("ui.card.climate.currently"))}}),Ht({hide:t.state,state:p,hass:n,details:{heading:!!d&&(r?.label?.state??a("ui.panel.lovelace.editor.card.generic.state"))}}),...s.map(({name:t,state:e,...i})=>Ht({state:e,hass:n,localize:a,openEntityPopover:o,details:{...i,heading:d&&t}}))||null].filter(t=>null!==t);return Ut(r,u)}({_hide:this._hide,unit:l,hass:this._hass,entity:this.entity,sensors:this.sensors,config:this.config,localize:this.localize,openEntityPopover:this.openEntityPopover}):"",F`
      <ha-card class="${p.join(" ")}">
        ${r}
        ${St({header:this.header,toggleEntityChanged:this.toggleEntityChanged,entity:this.entity,openEntityPopover:this.openEntityPopover})}
        <section class="body">
          ${u}
          ${Object.entries(e).map(([t,e])=>{const s=["string","number"].includes(typeof e),r=!1!==l&&s;return F`
              <div class="current-wrapper ${h}">
                <ha-icon-button
                  ?disabled=${null!==o&&e>=o}
                  class="thermostat-trigger"
                  icon=${d?Zt:Jt}
                  @click="${()=>this.setTemperature(this.stepSize,t)}"
                >
                  <ha-icon .icon=${d?Zt:Jt}></ha-icon>
                </ha-icon-button>

                <h3
                  @click=${()=>this.openEntityPopover()}
                  class="current--value ${i?"updating":L}"
                >
                  ${Et(e,n)}
                  ${r?F`<span class="current--unit">${l}</span>`:L}
                </h3>
                <ha-icon-button
                  ?disabled=${null!==a&&e<=a}
                  class="thermostat-trigger"
                  icon=${d?Gt:Yt}
                  @click="${()=>this.setTemperature(-this.stepSize,t)}"
                >
                  <ha-icon .icon=${d?Gt:Yt}></ha-icon>
                </ha-icon-button>
              </div>
            `})}
        </section>

        ${this.modes.map(t=>Mt({state:s.state,mode:t,localize:this.localize,modeOptions:this.config?.layout?.mode??{},setMode:this.setMode}))}
      </ha-card>
    `}setTemperature(t,e){this._updatingValues=!0;const i=this._values[e],n=Number(i)+t,{decimals:s}=this.config;this._values={...this._values,[e]:+Et(n,{decimals:s})},this._debouncedSetTemperature(this._values)}getCardSize(){return 3}getUnit(){return["boolean","string"].includes(typeof this.config.unit)?this.config?.unit:this._hass.config?.unit_system?.temperature??!1}}ft([vt()],Xt.prototype,"config",void 0),ft([vt()],Xt.prototype,"header",void 0),ft([vt()],Xt.prototype,"service",void 0),ft([vt()],Xt.prototype,"modes",void 0),ft([vt()],Xt.prototype,"entity",void 0),ft([vt()],Xt.prototype,"sensors",void 0),ft([vt()],Xt.prototype,"showSensors",void 0),ft([vt()],Xt.prototype,"name",void 0),ft([vt({type:Object})],Xt.prototype,"_values",void 0),ft([vt()],Xt.prototype,"_updatingValues",void 0),ft([vt()],Xt.prototype,"_hide",void 0),customElements.define(t,Xt),customElements.define(`${t}-editor`,class extends rt{static get styles(){return ot}static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{...ut}}setConfig(t){this.config=t||{...ut}}_openLink(){window.open("https://github.com/nervetattoo/simple-thermostat/blob/master/README.md")}render(){return this.hass?F`
      <div class="card-config">
        <div class="overall-config">
          <div class="side-by-side">
            <ha-entity-picker
              label="Entity (required)"
              .hass=${this.hass}
              .value="${this.config.entity}"
              .configValue=${"entity"}
              .includeDomains=${pt}
              @change="${this.valueChanged}"
              allow-custom-entity
            ></ha-entity-picker>
          </div>

          <ha-formfield label="Show header?">
            <ha-switch
              .checked=${!1!==this.config.header}
              @change=${this.toggleHeader}
            ></ha-switch>
          </ha-formfield>
          <ha-formfield label="Show mode names?">
            <ha-switch
              .checked=${!1!==this.config?.layout?.mode?.names}
              .configValue="${"layout.mode.names"}"
              @change=${this.valueChanged}
            ></ha-switch>
          </ha-formfield>
          <ha-formfield label="Show mode icons?">
            <ha-switch
              .checked=${!1!==this.config?.layout?.mode?.icons}
              .configValue="${"layout.mode.icons"}"
              @change=${this.valueChanged}
            ></ha-switch>
          </ha-formfield>
          <ha-formfield label="Show mode headings?">
            <ha-switch
              .checked=${!1!==this.config?.layout?.mode?.headings}
              .configValue="${"layout.mode.headings"}"
              @change=${this.valueChanged}
            ></ha-switch>
          </ha-formfield>

          ${!1!==this.config.header?F`
                <div class="side-by-side">
                  <paper-input
                    label="Name (optional)"
                    .value="${this.config.header?.name}"
                    .configValue="${"header.name"}"
                    @value-changed="${this.valueChanged}"
                  ></paper-input>

                  <ha-icon-input
                    label="Icon (optional)"
                    .value="${this.config.header?.icon}"
                    .configValue=${"header.icon"}
                    @value-changed=${this.valueChanged}
                  ></ha-icon-input>
                </div>

                <div class="side-by-side">
                  <ha-entity-picker
                    label="Toggle Entity (optional)"
                    .hass=${this.hass}
                    .value="${this.config?.header?.toggle?.entity}"
                    .configValue=${"header.toggle.entity"}
                    @change="${this.valueChanged}"
                    allow-custom-entity
                  ></ha-entity-picker>

                  <paper-input
                    label="Toggle entity label"
                    .value="${this.config?.header?.toggle?.name}"
                    .configValue="${"header.toggle.name"}"
                    @value-changed="${this.valueChanged}"
                  ></paper-input>
                </div>
              `:""}

          <div class="side-by-side">
            <paper-input
              label="Fallback Text (optional)"
              .value="${this.config.fallback}"
              .configValue="${"fallback"}"
              @value-changed="${this.valueChanged}"
            ></paper-input>
          </div>

          <div class="side-by-side">
            <paper-dropdown-menu
              label="Decimals (optional)"
              .configValue=${"decimals"}
              @value-changed="${this.valueChanged}"
              class="dropdown"
            >
              <paper-listbox
                slot="dropdown-content"
                .selected=${Object.values(lt).indexOf(+this.config.decimals)}
              >
                ${Object.values(lt).map(t=>F` <paper-item>${t}</paper-item> `)}
              </paper-listbox>
            </paper-dropdown-menu>

            <paper-input
              label="Unit (optional)"
              .value="${this.config.unit}"
              .configValue="${"unit"}"
              @value-changed="${this.valueChanged}"
            ></paper-input>
          </div>

          <div class="side-by-side">
            <paper-dropdown-menu
              label="Step Layout (optional)"
              .configValue=${"layout.step"}
              @value-changed="${this.valueChanged}"
              class="dropdown"
            >
              <paper-listbox
                slot="dropdown-content"
                .selected=${Object.values(dt).indexOf(this.config.layout?.step)}
              >
                ${Object.values(dt).map(t=>F` <paper-item>${t}</paper-item> `)}
              </paper-listbox>
            </paper-dropdown-menu>

            <paper-dropdown-menu
              label="Step Size (optional)"
              .configValue=${"step_size"}
              @value-changed="${this.valueChanged}"
              class="dropdown"
            >
              <paper-listbox
                slot="dropdown-content"
                .selected=${Object.values(ht).indexOf(+this.config.step_size)}
              >
                ${Object.values(ht).map(t=>F` <paper-item>${t}</paper-item> `)}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>

          <div class="side-by-side">
            <mwc-button @click=${this._openLink}>
              Configuration Options
            </mwc-button>

            Settings for label, control, sensors, faults and hiding UI elements
            can only be configured in the code editor
          </div>
        </div>
      </div>
    `:F``}valueChanged(t){if(!this.config||!this.hass)return;const{target:e}=t,i=(n=this.config,JSON.parse(JSON.stringify(n)));var n;e.configValue&&(""===e.value?delete i[e.configValue]:function(t,e,i){const n=e.split(".");let s=t;for(;n.length-1;){var r=n.shift();s.hasOwnProperty(r)||(s[r]={}),s=s[r]}s[n[0]]=i}(i,e.configValue,void 0!==e.checked?e.checked:e.value)),ct(this,"config-changed",{config:i})}toggleHeader(t){this.config.header=!!t.target.checked&&{},ct(this,"config-changed",{config:this.config})}}),console.info(`%c${t}: 2.2.2`,"font-weight: bold"),window.customCards=window.customCards||[],window.customCards.push({type:t,name:"Simple Thermostat",preview:!1,description:"A different take on the thermostat card"});
