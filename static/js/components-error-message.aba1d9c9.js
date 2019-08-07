(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./docs/components/ErrorMessage.mdx":function(e,r,t){"use strict";t.r(r);var o=t("./node_modules/react/index.js"),n=t.n(o),s=t("./node_modules/@mdx-js/tag/dist/index.js"),a=t("./node_modules/docz/dist/index.m.js"),i=t("./node_modules/react-native-web/dist/exports/Text/index.js"),c=t("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"),p=t("./src/modules/theme.ts");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,r){return!r||"object"!==l(r)&&"function"!==typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,r){return(d=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}var y=function(e){function r(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),f(this,m(r).apply(this,arguments))}var t,n,s;return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&d(e,r)}(r,o["Component"]),t=r,(n=[{key:"render",value:function(){var e=this.props,r=e.message,t=e.style;return r?o.createElement(i.a,{style:[b.errorMessage,t]},r):null}}])&&u(t.prototype,n),s&&u(t,s),r}(),g=Object(p.a)(),b=c.a.create({errorMessage:{fontFamily:"Lato-Regular",color:g.errorColor}});try{y.displayName="ErrorMessage",y.__docgenInfo={description:"",displayName:"ErrorMessage",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<TextStyle>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:y.__docgenInfo,name:"ErrorMessage",path:"src/components/ErrorMessage.tsx#ErrorMessage"})}catch(e){}function E(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}r.default=function(e){var r=e.components,t=E(e,["components"]);return n.a.createElement(s.MDXTag,{name:"wrapper",components:r},n.a.createElement(s.MDXTag,{name:"h1",components:r,props:{id:"errormessage"}},"ErrorMessage"),n.a.createElement(s.MDXTag,{name:"h2",components:r,props:{id:"properties"}},"Properties"),n.a.createElement(a.PropsTable,{of:y}),n.a.createElement(s.MDXTag,{name:"h2",components:r,props:{id:"example"}},"Example"),n.a.createElement(a.Playground,{__position:1,__code:'<ErrorMessage message="The field is required." />',__scope:{props:t,ErrorMessage:y}},n.a.createElement(y,{message:"The field is required."})))}}}]);