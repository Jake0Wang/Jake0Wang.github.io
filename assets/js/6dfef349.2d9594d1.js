(self.webpackChunktc_chinese_tutor=self.webpackChunktc_chinese_tutor||[]).push([[765],{8647:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(7294);const r="heroBanner_jsEf",i="heroTitle_FGBM",s="heroSubtitle_JZTr",o="underline_nuEI";var l=a(6010);const c=e=>{let{title:t,body:a,extra:c}=e;return n.createElement("header",{className:(0,l.Z)("hero hero--primary",r)},n.createElement("div",{className:"container"},n.createElement("h1",{className:(0,l.Z)("hero__title",i)},t),n.createElement("div",{className:"padding-bottom--lg",style:{display:"flex",justifyContent:"center"}}," ",n.createElement("div",{className:o})),n.createElement("p",{className:(0,l.Z)("hero__subtitle",s)},a),c))}},7251:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(7294),r=a(5697),i=a.n(r),s=a(6010);const o="youtubeSize_kLzc",l=e=>{let{embedId:t,width:a,height:r}=e;return n.createElement("div",{className:(0,s.Z)(o)},n.createElement("iframe",{width:a,height:r,src:`https://www.youtube.com/embed/${t}`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"}))};l.propTypes={embedId:i().string.isRequired};const c=l},5890:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>L});var n=a(7294),r=a(3285);const i="buttons_LQBA";var s=a(6010),o=a(9960),l=a(7462);const c={layout:"layout_MKhV",column:"column_MFmk",row:"row_GHZ9",latestLabel:"latestLabel__npZ",latestBlock:"latestBlock_y3B1",dashed:"dashed_nW8B",pagination:"pagination_mWbx",paginationItem:"paginationItem_Z0uk",active:"active_b5yP",paginationLayout:"paginationLayout_u2xg",youtubeBlock:"youtubeBlock_uVGJ"};var p=a(7251),u=a(1358),d=a.n(u),g={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function m(e){var t=function(e){if("number"==typeof e)return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();t=a.includes(".")?parseFloat(a):parseInt(a,10);var n=(e.match(/[^0-9]*$/)||"").toString();return g[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var f=function(){return f=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},f.apply(this,arguments)},b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},v=function(e,t,a){var n="react-spinners-".concat(e,"-").concat(a);if("undefined"==typeof window||!window.document)return n;var r=document.createElement("style");document.head.appendChild(r);var i=r.sheet,s="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(s,0),n}("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");const h=function(e){var t=e.loading,a=void 0===t||t,r=e.color,i=void 0===r?"#000000":r,s=e.speedMultiplier,o=void 0===s?1:s,l=e.cssOverride,c=void 0===l?{}:l,p=e.size,u=void 0===p?15:p,d=e.margin,g=void 0===d?2:d,h=b(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),y=f({display:"inherit"},c),C=function(e){return{display:"inline-block",backgroundColor:i,width:m(u),height:m(u),margin:m(g),borderRadius:"100%",animation:"".concat(v," ").concat(.7/o,"s ").concat(e%2?"0s":"".concat(.35/o,"s")," infinite linear"),animationFillMode:"both"}};return a?n.createElement("span",f({style:y},h),n.createElement("span",{style:C(1)}),n.createElement("span",{style:C(2)}),n.createElement("span",{style:C(3)})):null},y=e=>{let{video_code:t,title:a,description:r,answer:i,width:o,height:l,isNew:u}=e;return n.createElement("div",{className:(0,s.Z)("text--center",c.column)},n.createElement("div",{className:(0,s.Z)(c.youtubeBlock)},n.createElement(p.Z,{embedId:t,width:o,height:l}),n.createElement("div",{className:(0,s.Z)(c.description)},n.createElement("h3",null,a," ",u&&n.createElement("span",{className:(0,s.Z)(c.latestLabel)},"(Latest)")),n.createElement("p",null,r),i&&n.createElement(n.Fragment,null,n.createElement("div",{className:c.dashed}),n.createElement("h3",null,"Answers for the video questions:"),n.createElement("p",null,i)))))};function C(e){let{latestItem:t}=e;return n.createElement("div",{className:(0,s.Z)("row",c.latestBlock)},n.createElement(y,(0,l.Z)({width:640,height:480,isNew:!0},t)))}function k(e){let{currentItems:t}=e;return n.createElement("div",{className:(0,s.Z)("row",c.row)},t&&t.map(((e,t)=>n.createElement(y,(0,l.Z)({key:t,width:480,height:360},e)))))}function P(e){let{itemsPerPage:t}=e;const[a,r]=(0,n.useState)(0),[i,o]=(0,n.useState)([]),[l,p]=(0,n.useState)([]),[u,g]=(0,n.useState)(!0);(0,n.useEffect)((()=>{(async()=>{try{const e=await fetch("https://vasqhjczkzaqsexezhhn.functions.supabase.co/youtube-videos"),t=await e.json();p(t.shift()),o(t),g(!1)}catch(e){console.error(e)}})()}),[]);const m=a+t,f=i.slice(a,m),b=Math.ceil(i.length/t);return n.createElement(n.Fragment,null,u?n.createElement(h,{color:"#6EA4CA"}):n.createElement(n.Fragment,null,0===a&&n.createElement(C,{latestItem:l}),n.createElement(k,{currentItems:f}),n.createElement("div",{className:c.paginationLayout},n.createElement(d(),{nextLabel:"next >",onPageChange:e=>{const a=e.selected*t%i.length;r(a)},pageRangeDisplayed:3,marginPagesDisplayed:2,pageCount:b,previousLabel:"< prev",pageClassName:(0,s.Z)(c.paginationItem),pageLinkClassName:(0,s.Z)(c.paginationItem),previousClassName:(0,s.Z)(c.paginationItem),previousLinkClassName:(0,s.Z)(c.paginationItem),nextClassName:(0,s.Z)(c.paginationItem),nextLinkClassName:(0,s.Z)(c.paginationItem),breakLabel:"...",breakClassName:(0,s.Z)(c.paginationItem),breakLinkClassName:(0,s.Z)(c.paginationItem),containerClassName:(0,s.Z)(c.pagination),activeClassName:(0,s.Z)(c.active)}))))}const N=()=>n.createElement("section",{className:c.layout},n.createElement("div",null,n.createElement(P,{itemsPerPage:12})));var x=a(8647);const L=()=>n.createElement(r.Z,null,n.createElement(x.Z,{title:"LUKE'S YOUTUBE LESSONS",body:"Check out my free Youtube lessons followed by over 41,500 subscribers around the world.",extra:n.createElement(o.Z,{className:(0,s.Z)("button button--secondary button--lg",i),href:"https://www.youtube.com/playlist?list=PLKOUVoZGWfShsiJcd03cmabtzBt_2MwXd"},"Subscribe")}),n.createElement("main",null,n.createElement(N,null)))},1358:function(e,t,a){var n;n=e=>(()=>{var t={703:(e,t,a)=>{"use strict";var n=a(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,i,s){if(s!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}},697:(e,t,a)=>{e.exports=a(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:t=>{"use strict";t.exports=e}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{default:()=>k});var e=n(98),t=n.n(e),a=n(697),i=n.n(a);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}var o=function(e){var a=e.pageClassName,n=e.pageLinkClassName,r=e.page,i=e.selected,o=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,d=e.extraAriaContext,g=e.pageLabelBuilder,m=e.rel,f=e.ariaLabel||"Page "+r+(d?" "+d:""),b=null;return i&&(b="page",f=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+o:o,void 0!==n?void 0!==l&&(n=n+" "+l):n=l),t().createElement("li",{className:a},t().createElement("a",s({rel:m,role:u?void 0:"button",className:n,href:u,tabIndex:i?"-1":"0","aria-label":f,"aria-current":b,onKeyPress:p},c(p)),g(r)))};o.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};const l=o;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}var p=function(e){var a=e.breakLabel,n=e.breakAriaLabel,r=e.breakClassName,i=e.breakLinkClassName,s=e.breakHandler,o=e.getEventListener,l=r||"break";return t().createElement("li",{className:l},t().createElement("a",c({className:i,role:"button",tabIndex:"0","aria-label":n,onKeyPress:s},o(s)),a))};p.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};const u=p;function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:t}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function b(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(o,e);var a,n,r,i,s=(r=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(i){var a=h(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return b(this,e)});function o(e){var a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),y(v(a=s.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;a.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0})})),y(v(a),"handleNextPage",(function(e){var t=a.state.selected,n=a.props.pageCount;a.handleClick(e,null,t<n-1?t+1:void 0,{isNext:!0})})),y(v(a),"handlePageSelected",(function(e,t){if(a.state.selected===e)return a.callActiveCallback(e),void a.handleClick(t,null,void 0,{isActive:!0});a.handleClick(t,null,e)})),y(v(a),"handlePageChange",(function(e){a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),y(v(a),"getEventListener",(function(e){return y({},a.props.eventListener,e)})),y(v(a),"handleClick",(function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.isPrevious,s=void 0!==i&&i,o=r.isNext,l=void 0!==o&&o,c=r.isBreak,p=void 0!==c&&c,u=r.isActive,d=void 0!==u&&u;e.preventDefault?e.preventDefault():e.returnValue=!1;var g=a.state.selected,m=a.props.onClick,f=n;if(m){var b=m({index:t,selected:g,nextSelectedPage:n,event:e,isPrevious:s,isNext:l,isBreak:p,isActive:d});if(!1===b)return;Number.isInteger(b)&&(f=b)}void 0!==f&&a.handlePageChange(f)})),y(v(a),"handleBreakClick",(function(e,t){var n=a.state.selected;a.handleClick(t,e,n<e?a.getForwardJump():a.getBackwardJump(),{isBreak:!0})})),y(v(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),y(v(a),"callActiveCallback",(function(e){void 0!==a.props.onPageActive&&"function"==typeof a.props.onPageActive&&a.props.onPageActive({selected:e})})),y(v(a),"getElementPageRel",(function(e){var t=a.state.selected,n=a.props,r=n.nextPageRel,i=n.prevPageRel,s=n.selectedPageRel;return t-1===e?i:t===e?s:t+1===e?r:void 0})),y(v(a),"pagination",(function(){var e=[],n=a.props,r=n.pageRangeDisplayed,i=n.pageCount,s=n.marginPagesDisplayed,o=n.breakLabel,l=n.breakClassName,c=n.breakLinkClassName,p=n.breakAriaLabels,d=a.state.selected;if(i<=r)for(var g=0;g<i;g++)e.push(a.getPageElement(g));else{var m=r/2,f=r-m;d>i-r/2?m=r-(f=i-d):d<r/2&&(f=r-(m=d));var b,v,h=function(e){return a.getPageElement(e)},y=[];for(b=0;b<i;b++){var C=b+1;if(C<=s)y.push({type:"page",index:b,display:h(b)});else if(C>i-s)y.push({type:"page",index:b,display:h(b)});else if(b>=d-m&&b<=d+(0===d&&r>1?f-1:f))y.push({type:"page",index:b,display:h(b)});else if(o&&y.length>0&&y[y.length-1].display!==v&&(r>0||s>0)){var k=b<d?p.backward:p.forward;v=t().createElement(u,{key:b,breakAriaLabel:k,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,b),getEventListener:a.getEventListener}),y.push({type:"break",index:b,display:v})}}y.forEach((function(t,a){var n=t;"break"===t.type&&y[a-1]&&"page"===y[a-1].type&&y[a+1]&&"page"===y[a+1].type&&y[a+1].index-y[a-1].index<=2&&(n={type:"page",index:t.index,display:h(t.index)}),e.push(n.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:n},a}return a=o,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext,r=e.pageCount,i=e.forcePage;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(r)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(r,"). Did you forget a Math.ceil()?")),void 0!==t&&t>r-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(r-1,").")),void 0!==i&&i>r-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(r-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount,r=t.hrefAllControls;if(a)return r||e>=0&&e<n?a(e+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var a=this.state.selected,n=this.props,r=n.pageClassName,i=n.pageLinkClassName,s=n.activeClassName,o=n.activeLinkClassName,c=n.extraAriaContext,p=n.pageLabelBuilder;return t().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,rel:this.getElementPageRel(e),pageClassName:r,pageLinkClassName:i,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var a=this.props,n=a.disabledClassName,r=a.disabledLinkClassName,i=a.pageCount,s=a.className,o=a.containerClassName,l=a.previousLabel,c=a.previousClassName,p=a.previousLinkClassName,u=a.previousAriaLabel,g=a.prevRel,f=a.nextLabel,b=a.nextClassName,v=a.nextLinkClassName,h=a.nextAriaLabel,y=a.nextRel,C=this.state.selected,k=0===C,P=C===i-1,N="".concat(d(c)).concat(k?" ".concat(d(n)):""),x="".concat(d(b)).concat(P?" ".concat(d(n)):""),L="".concat(d(p)).concat(k?" ".concat(d(r)):""),E="".concat(d(v)).concat(P?" ".concat(d(r)):""),w=k?"true":"false",O=P?"true":"false";return t().createElement("ul",{className:s||o,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:N},t().createElement("a",m({className:L,href:this.getElementHref(C-1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":w,"aria-label":u,rel:g},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),t().createElement("li",{className:x},t().createElement("a",m({className:E,href:this.getElementHref(C+1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":O,"aria-label":h,rel:y},this.getEventListener(this.handleNextPage)),f)))}}])&&function(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),o}(e.Component);y(C,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),y(C,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const k=C})(),r})(),e.exports=n(a(7294))}}]);