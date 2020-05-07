(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("C:\\Pessoal\\smartframe\\node_modules\\@reach\\router\\index.js"), require("C:\\Pessoal\\smartframe\\node_modules\\core-js\\modules\\web.dom.iterable.js"), require("fs"), require("C:\\Pessoal\\smartframe\\node_modules\\lodash\\lodash.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["C:\\Pessoal\\smartframe\\node_modules\\@reach\\router\\index.js", "C:\\Pessoal\\smartframe\\node_modules\\core-js\\modules\\web.dom.iterable.js", "fs", "C:\\Pessoal\\smartframe\\node_modules\\lodash\\lodash.js", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("C:\\Pessoal\\smartframe\\node_modules\\@reach\\router\\index.js"), require("C:\\Pessoal\\smartframe\\node_modules\\core-js\\modules\\web.dom.iterable.js"), require("fs"), require("C:\\Pessoal\\smartframe\\node_modules\\lodash\\lodash.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["C:\\Pessoal\\smartframe\\node_modules\\@reach\\router\\index.js"], root["C:\\Pessoal\\smartframe\\node_modules\\core-js\\modules\\web.dom.iterable.js"], root["fs"], root["C:\\Pessoal\\smartframe\\node_modules\\lodash\\lodash.js"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins=[{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),options:{"plugins":[]}}];// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]
const apis=__webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js");// Run the specified API in any plugins that have implemented it
module.exports=(api,args,defaultReturn,argTransform)=>{if(!apis[api]){console.log(`This API doesn't exist`,api);}// Run each plugin in series.
// eslint-disable-next-line no-undef
let results=plugins.map(plugin=>{if(!plugin.plugin[api]){return undefined;}const result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args,result});}return result;});// Filter out undefined results.
results=results.filter(result=>typeof result!==`undefined`);if(results.length>0){return results;}else{return[defaultReturn];}};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */ /**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */exports.replaceRenderer=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */exports.onRenderBody=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */exports.onPreRenderHTML=true;/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */exports.wrapPageElement=true;/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */exports.wrapRootElement=true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function HTML(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html",props.htmlAttributes,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{charSet:"utf-8"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),props.headComponents),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",props.bodyAttributes,props.preBodyComponents,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:`body`,id:"___gatsby",dangerouslySetInnerHTML:{__html:props.body}}),props.postBodyComponents));}HTML.propTypes={htmlAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,headComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,bodyAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,preBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,body:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,postBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array};

/***/ }),

/***/ "./.cache/route-announcer-props.js":
/*!*****************************************!*\
  !*** ./.cache/route-announcer-props.js ***!
  \*****************************************/
/*! exports provided: RouteAnnouncerProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteAnnouncerProps", function() { return RouteAnnouncerProps; });
// This is extracted to separate module because it's shared
// between browser and SSR code
const RouteAnnouncerProps={id:`gatsby-announcer`,style:{position:`absolute`,top:0,width:1,height:1,padding:0,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,whiteSpace:`nowrap`,border:0},"aria-live":`assertive`,"aria-atomic":`true`};

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: sanitizeComponents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeComponents", function() { return sanitizeComponents; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}const React=__webpack_require__(/*! react */ "react");const fs=__webpack_require__(/*! fs */ "fs");const{join}=__webpack_require__(/*! path */ "path");const{renderToString,renderToStaticMarkup}=__webpack_require__(/*! react-dom/server */ "react-dom/server");const{ServerLocation,Router,isRedirect}=__webpack_require__(/*! @reach/router */ "@reach/router");const{get,merge,isObject,flatten,uniqBy,flattenDeep,replace,concat,memoize}=__webpack_require__(/*! lodash */ "lodash");const{RouteAnnouncerProps}=__webpack_require__(/*! ./route-announcer-props */ "./.cache/route-announcer-props.js");const apiRunner=__webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");const syncRequires=__webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");const{version:gatsbyVersion}=__webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json");const stats=JSON.parse(fs.readFileSync(`${process.cwd()}/public/webpack.stats.json`,`utf-8`));const chunkMapping=JSON.parse(fs.readFileSync(`${process.cwd()}/public/chunk-map.json`,`utf-8`));// const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.
const testRequireError=(moduleName,err)=>{const regex=new RegExp(`Error: Cannot find module\\s.${moduleName}`);const firstLine=err.toString().split(`\n`)[0];return regex.test(firstLine);};let Html;try{Html=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));}catch(err){if(testRequireError(`../src/html`,err)){Html=__webpack_require__(/*! ./default-html */ "./.cache/default-html.js");}else{throw err;}}Html=Html&&Html.__esModule?Html.default:Html;const getPageDataPath=path=>{const fixedPagePath=path===`/`?`index`:path;return join(`page-data`,fixedPagePath,`page-data.json`);};const getPageDataUrl=pagePath=>{const pageDataPath=getPageDataPath(pagePath);return`${""}/${pageDataPath}`;};const getPageData=pagePath=>{const pageDataPath=getPageDataPath(pagePath);const absolutePageDataPath=join(process.cwd(),`public`,pageDataPath);const pageDataRaw=fs.readFileSync(absolutePageDataPath);try{return JSON.parse(pageDataRaw.toString());}catch(err){return null;}};const appDataPath=join(`page-data`,`app-data.json`);const getAppDataUrl=memoize(()=>{let appData;try{const absoluteAppDataPath=join(process.cwd(),`public`,appDataPath);const appDataRaw=fs.readFileSync(absoluteAppDataPath);appData=JSON.parse(appDataRaw.toString());if(!appData){return null;}}catch(err){return null;}return`${""}/${appDataPath}`;});const loadPageDataSync=pagePath=>{const pageDataPath=getPageDataPath(pagePath);const pageDataFile=join(process.cwd(),`public`,pageDataPath);try{const pageDataJson=fs.readFileSync(pageDataFile);return JSON.parse(pageDataJson);}catch(error){// not an error if file is not found. There's just no page data
return null;}};const createElement=React.createElement;const sanitizeComponents=components=>{const componentsArray=ensureArray(components);return componentsArray.map(component=>{// Ensure manifest is always loaded from content server
// And not asset server when an assetPrefix is used
if(false){}return component;});};const ensureArray=components=>{if(Array.isArray(components)){// remove falsy items and flatten
return flattenDeep(components.filter(val=>Array.isArray(val)?val.length>0:val));}else{// we also accept single components, so we need to handle this case as well
return components?[components]:[];}};/* harmony default export */ __webpack_exports__["default"] = ((pagePath,callback)=>{var _postBodyComponents;let bodyHtml=``;let headComponents=[/*#__PURE__*/React.createElement("meta",{name:"generator",content:`Gatsby ${gatsbyVersion}`,key:`generator-${gatsbyVersion}`})];let htmlAttributes={};let bodyAttributes={};let preBodyComponents=[];let postBodyComponents=[];let bodyProps={};const replaceBodyHTMLString=body=>{bodyHtml=body;};const setHeadComponents=components=>{headComponents=headComponents.concat(sanitizeComponents(components));};const setHtmlAttributes=attributes=>{htmlAttributes=merge(htmlAttributes,attributes);};const setBodyAttributes=attributes=>{bodyAttributes=merge(bodyAttributes,attributes);};const setPreBodyComponents=components=>{preBodyComponents=preBodyComponents.concat(sanitizeComponents(components));};const setPostBodyComponents=components=>{postBodyComponents=postBodyComponents.concat(sanitizeComponents(components));};const setBodyProps=props=>{bodyProps=merge({},bodyProps,props);};const getHeadComponents=()=>headComponents;const replaceHeadComponents=components=>{headComponents=sanitizeComponents(components);};const getPreBodyComponents=()=>preBodyComponents;const replacePreBodyComponents=components=>{preBodyComponents=sanitizeComponents(components);};const getPostBodyComponents=()=>postBodyComponents;const replacePostBodyComponents=components=>{postBodyComponents=sanitizeComponents(components);};const pageData=getPageData(pagePath);const pageDataUrl=getPageDataUrl(pagePath);const appDataUrl=getAppDataUrl();const{componentChunkName}=pageData;class RouteHandler extends React.Component{render(){const props={...this.props,...pageData.result,// pathContext was deprecated in v2. Renamed to pageContext
pathContext:pageData.result?pageData.result.pageContext:undefined};const pageElement=createElement(syncRequires.components[componentChunkName],props);const wrappedPage=apiRunner(`wrapPageElement`,{element:pageElement,props},pageElement,({result})=>{return{element:result,props};}).pop();return wrappedPage;}}const routerElement=/*#__PURE__*/React.createElement(ServerLocation,{url:`${""}${pagePath}`},/*#__PURE__*/React.createElement(Router,{id:"gatsby-focus-wrapper",baseuri:""},/*#__PURE__*/React.createElement(RouteHandler,{path:"/*"})),/*#__PURE__*/React.createElement("div",RouteAnnouncerProps));const bodyComponent=apiRunner(`wrapRootElement`,{element:routerElement,pathname:pagePath},routerElement,({result})=>{return{element:result,pathname:pagePath};}).pop();// Let the site or plugin render the page component.
apiRunner(`replaceRenderer`,{bodyComponent,replaceBodyHTMLString,setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,pathPrefix:""});// If no one stepped up, we'll handle it.
if(!bodyHtml){try{bodyHtml=renderToString(bodyComponent);}catch(e){// ignore @reach/router redirect errors
if(!isRedirect(e))throw e;}}// Create paths to scripts
let scriptsAndStyles=flatten([`app`,componentChunkName].map(s=>{const fetchKey=`assetsByChunkName[${s}]`;let chunks=get(stats,fetchKey);const namedChunkGroups=get(stats,`namedChunkGroups`);if(!chunks){return null;}chunks=chunks.map(chunk=>{if(chunk===`/`){return null;}return{rel:`preload`,name:chunk};});namedChunkGroups[s].assets.forEach(asset=>chunks.push({rel:`preload`,name:asset}));const childAssets=namedChunkGroups[s].childAssets;for(const rel in childAssets){chunks=concat(chunks,childAssets[rel].map(chunk=>{return{rel,name:chunk};}));}return chunks;})).filter(s=>isObject(s)).sort((s1,s2)=>s1.rel==`preload`?-1:1);// given priority to preload
scriptsAndStyles=uniqBy(scriptsAndStyles,item=>item.name);const scripts=scriptsAndStyles.filter(script=>script.name&&script.name.endsWith(`.js`));const styles=scriptsAndStyles.filter(style=>style.name&&style.name.endsWith(`.css`));apiRunner(`onRenderBody`,{setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,loadPageDataSync,bodyHtml,scripts,styles,pathPrefix:""});scripts.slice(0).reverse().forEach(script=>{// Add preload/prefetch <link>s for scripts.
headComponents.push(/*#__PURE__*/React.createElement("link",{as:"script",rel:script.rel,key:script.name,href:`${""}/${script.name}`}));});if(pageData){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"fetch",rel:"preload",key:pageDataUrl,href:pageDataUrl,crossOrigin:"anonymous"}));}if(appDataUrl){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"fetch",rel:"preload",key:appDataUrl,href:appDataUrl,crossOrigin:"anonymous"}));}styles.slice(0).reverse().forEach(style=>{// Add <link>s for styles that should be prefetched
// otherwise, inline as a <style> tag
if(style.rel===`prefetch`){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"style",rel:style.rel,key:style.name,href:`${""}/${style.name}`}));}else{headComponents.unshift(/*#__PURE__*/React.createElement("style",{"data-href":`${""}/${style.name}`,dangerouslySetInnerHTML:{__html:fs.readFileSync(join(process.cwd(),`public`,style.name),`utf-8`)}}));}});// Add page metadata for the current page
const windowPageData=`/*<![CDATA[*/window.pagePath="${pagePath}";/*]]>*/`;postBodyComponents.push(/*#__PURE__*/React.createElement("script",{key:`script-loader`,id:`gatsby-script-loader`,dangerouslySetInnerHTML:{__html:windowPageData}}));// Add chunk mapping metadata
const scriptChunkMapping=`/*<![CDATA[*/window.___chunkMapping=${JSON.stringify(chunkMapping)};/*]]>*/`;postBodyComponents.push(/*#__PURE__*/React.createElement("script",{key:`chunk-mapping`,id:`gatsby-chunk-mapping`,dangerouslySetInnerHTML:{__html:scriptChunkMapping}}));// Filter out prefetched bundles as adding them as a script tag
// would force high priority fetching.
const bodyScripts=scripts.filter(s=>s.rel!==`prefetch`).map(s=>{const scriptPath=`${""}/${JSON.stringify(s.name).slice(1,-1)}`;return/*#__PURE__*/React.createElement("script",{key:scriptPath,src:scriptPath,async:true});});(_postBodyComponents=postBodyComponents).push.apply(_postBodyComponents,_toConsumableArray(bodyScripts));apiRunner(`onPreRenderHTML`,{getHeadComponents,replaceHeadComponents,getPreBodyComponents,replacePreBodyComponents,getPostBodyComponents,replacePostBodyComponents,pathname:pagePath,pathPrefix:""});const html=`<!DOCTYPE html>${renderToStaticMarkup(/*#__PURE__*/React.createElement(Html,Object.assign({},bodyProps,{headComponents:headComponents,htmlAttributes:htmlAttributes,bodyAttributes:bodyAttributes,preBodyComponents:preBodyComponents,postBodyComponents:postBodyComponents,body:bodyHtml,path:pagePath})))}`;callback(null,html);});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const{hot}=__webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");// prefer default export if available
const preferDefault=m=>m&&m.default||m;exports.components={"component---src-pages-index-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js")))};

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.onRenderBody=void 0;var _reactHelmet=__webpack_require__(/*! react-helmet */ "react-helmet");var onRenderBody=function onRenderBody(_ref){var setHeadComponents=_ref.setHeadComponents,setHtmlAttributes=_ref.setHtmlAttributes,setBodyAttributes=_ref.setBodyAttributes;var helmet=_reactHelmet.Helmet.renderStatic();// These action functions were added partway through the Gatsby 1.x cycle.
if(setHtmlAttributes){setHtmlAttributes(helmet.htmlAttributes.toComponent());}if(setBodyAttributes){setBodyAttributes(helmet.bodyAttributes.toComponent());}setHeadComponents([helmet.title.toComponent(),helmet.link.toComponent(),helmet.meta.toComponent(),helmet.noscript.toComponent(),helmet.script.toComponent(),helmet.style.toComponent(),helmet.base.toComponent()]);};exports.onRenderBody=onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// noop

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: name, description, version, author, bin, bugs, dependencies, devDependencies, engines, files, homepage, keywords, license, main, module, peerDependencies, repository, resolutions, scripts, types, yargs, gitHead, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"gatsby\",\"description\":\"Blazing fast modern site generator for React\",\"version\":\"2.21.13\",\"author\":\"Kyle Mathews <mathews.kyle@gmail.com>\",\"bin\":{\"gatsby\":\"./dist/bin/gatsby.js\"},\"bugs\":{\"url\":\"https://github.com/gatsbyjs/gatsby/issues\"},\"dependencies\":{\"@babel/code-frame\":\"^7.8.3\",\"@babel/core\":\"^7.9.6\",\"@babel/parser\":\"^7.9.6\",\"@babel/polyfill\":\"^7.8.7\",\"@babel/runtime\":\"^7.9.6\",\"@babel/traverse\":\"^7.9.6\",\"@hapi/joi\":\"^15.1.1\",\"@mikaelkristiansson/domready\":\"^1.0.10\",\"@pieh/friendly-errors-webpack-plugin\":\"1.7.0-chalk-2\",\"@pmmmwh/react-refresh-webpack-plugin\":\"^0.2.0\",\"@reach/router\":\"^1.3.3\",\"@typescript-eslint/eslint-plugin\":\"^2.24.0\",\"@typescript-eslint/parser\":\"^2.24.0\",\"address\":\"1.1.2\",\"autoprefixer\":\"^9.7.6\",\"axios\":\"^0.19.2\",\"babel-core\":\"7.0.0-bridge.0\",\"babel-eslint\":\"^10.1.0\",\"babel-loader\":\"^8.1.0\",\"babel-plugin-add-module-exports\":\"^0.3.3\",\"babel-plugin-dynamic-import-node\":\"^2.3.3\",\"babel-plugin-remove-graphql-queries\":\"^2.9.1\",\"babel-preset-gatsby\":\"^0.4.1\",\"better-opn\":\"1.0.0\",\"better-queue\":\"^3.8.10\",\"bluebird\":\"^3.7.2\",\"browserslist\":\"^4.12.0\",\"cache-manager\":\"^2.11.1\",\"cache-manager-fs-hash\":\"^0.0.8\",\"chalk\":\"^2.4.2\",\"chokidar\":\"3.4.0\",\"common-tags\":\"^1.8.0\",\"compression\":\"^1.7.4\",\"convert-hrtime\":\"^3.0.0\",\"copyfiles\":\"^2.2.0\",\"core-js\":\"^2.6.11\",\"cors\":\"^2.8.5\",\"css-loader\":\"^1.0.1\",\"date-fns\":\"^2.12.0\",\"debug\":\"^3.2.6\",\"del\":\"^5.1.0\",\"detect-port\":\"^1.3.0\",\"devcert\":\"^1.1.0\",\"dotenv\":\"^8.2.0\",\"eslint\":\"^6.8.0\",\"eslint-config-react-app\":\"^5.2.1\",\"eslint-loader\":\"^2.2.1\",\"eslint-plugin-flowtype\":\"^3.13.0\",\"eslint-plugin-graphql\":\"^3.1.1\",\"eslint-plugin-import\":\"^2.20.2\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"eslint-plugin-react\":\"^7.19.0\",\"eslint-plugin-react-hooks\":\"^1.7.0\",\"event-source-polyfill\":\"^1.0.12\",\"express\":\"^4.17.1\",\"express-graphql\":\"^0.9.0\",\"fast-levenshtein\":\"^2.0.6\",\"file-loader\":\"^1.1.11\",\"flat\":\"^4.1.0\",\"fs-exists-cached\":\"1.0.0\",\"fs-extra\":\"^8.1.0\",\"gatsby-cli\":\"^2.12.10\",\"gatsby-core-utils\":\"^1.2.1\",\"gatsby-graphiql-explorer\":\"^0.4.1\",\"gatsby-link\":\"^2.4.1\",\"gatsby-plugin-page-creator\":\"^2.3.1\",\"gatsby-plugin-typescript\":\"^2.4.2\",\"gatsby-react-router-scroll\":\"^2.3.1\",\"gatsby-telemetry\":\"^1.3.2\",\"glob\":\"^7.1.6\",\"got\":\"8.3.2\",\"graphql\":\"^14.6.0\",\"graphql-compose\":\"^6.3.8\",\"graphql-playground-middleware-express\":\"^1.7.14\",\"hasha\":\"^5.2.0\",\"invariant\":\"^2.2.4\",\"is-relative\":\"^1.0.0\",\"is-relative-url\":\"^3.0.0\",\"is-wsl\":\"^2.2.0\",\"jest-worker\":\"^24.9.0\",\"json-loader\":\"^0.5.7\",\"json-stringify-safe\":\"^5.0.1\",\"latest-version\":\"5.1.0\",\"lodash\":\"^4.17.15\",\"lokijs\":\"^1.5.8\",\"md5\":\"^2.2.1\",\"md5-file\":\"^3.2.3\",\"micromatch\":\"^3.1.10\",\"mime\":\"^2.4.5\",\"mini-css-extract-plugin\":\"^0.8.2\",\"mitt\":\"^1.2.0\",\"mkdirp\":\"^0.5.1\",\"moment\":\"^2.25.3\",\"name-all-modules-plugin\":\"^1.0.1\",\"normalize-path\":\"^2.1.1\",\"null-loader\":\"^3.0.0\",\"opentracing\":\"^0.14.4\",\"optimize-css-assets-webpack-plugin\":\"^5.0.3\",\"p-defer\":\"^3.0.0\",\"parseurl\":\"^1.3.3\",\"physical-cpu-count\":\"^2.0.0\",\"pnp-webpack-plugin\":\"^1.6.4\",\"postcss-flexbugs-fixes\":\"^4.2.1\",\"postcss-loader\":\"^3.0.0\",\"prompts\":\"^2.3.2\",\"prop-types\":\"^15.7.2\",\"raw-loader\":\"^0.5.1\",\"react-dev-utils\":\"^4.2.3\",\"react-error-overlay\":\"^3.0.0\",\"react-hot-loader\":\"^4.12.21\",\"react-refresh\":\"^0.7.0\",\"redux\":\"^4.0.5\",\"redux-thunk\":\"^2.3.0\",\"semver\":\"^5.7.1\",\"shallow-compare\":\"^1.2.2\",\"sift\":\"^5.1.0\",\"signal-exit\":\"^3.0.3\",\"slugify\":\"^1.4.0\",\"socket.io\":\"^2.3.0\",\"stack-trace\":\"^0.0.10\",\"string-similarity\":\"^1.2.2\",\"style-loader\":\"^0.23.1\",\"terser-webpack-plugin\":\"^1.4.3\",\"true-case-path\":\"^2.2.1\",\"type-of\":\"^2.0.1\",\"url-loader\":\"^1.1.2\",\"util.promisify\":\"^1.0.1\",\"uuid\":\"^3.4.0\",\"v8-compile-cache\":\"^1.1.2\",\"webpack\":\"~4.43.0\",\"webpack-dev-middleware\":\"^3.7.2\",\"webpack-dev-server\":\"^3.10.3\",\"webpack-hot-middleware\":\"^2.25.0\",\"webpack-merge\":\"^4.2.2\",\"webpack-stats-plugin\":\"^0.3.1\",\"xstate\":\"^4.9.1\",\"yaml-loader\":\"^0.6.0\"},\"devDependencies\":{\"@babel/cli\":\"^7.8.4\",\"@babel/runtime\":\"^7.9.6\",\"@types/hapi__joi\":\"^16.0.12\",\"@types/socket.io\":\"^2.1.4\",\"babel-preset-gatsby-package\":\"^0.4.1\",\"cross-env\":\"^5.2.1\",\"documentation\":\"^12.3.0\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"react\":\"^16.12.0\",\"react-dom\":\"^16.12.0\",\"rimraf\":\"^3.0.2\",\"xhr-mock\":\"^2.5.1\",\"zipkin\":\"^0.19.2\",\"zipkin-javascript-opentracing\":\"^2.1.0\",\"zipkin-transport-http\":\"^0.19.2\"},\"engines\":{\"node\":\">=10.13.0\"},\"files\":[\"apis.json\",\"ipc.json\",\"cache-dir\",\"dist\",\"graphql.js\",\"index.d.ts\",\"scripts/postinstall.js\",\"utils.js\"],\"homepage\":\"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme\",\"keywords\":[\"blog\",\"generator\",\"jekyll\",\"markdown\",\"react\",\"ssg\",\"website\"],\"license\":\"MIT\",\"main\":\"cache-dir/commonjs/gatsby-browser-entry.js\",\"module\":\"cache-dir/gatsby-browser-entry.js\",\"peerDependencies\":{\"react\":\"^16.4.2\",\"react-dom\":\"^16.4.2\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/gatsbyjs/gatsby.git\"},\"resolutions\":{\"graphql\":\"^14.6.0\"},\"scripts\":{\"build\":\"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs\",\"postbuild\":\"node scripts/output-api-file.js\",\"build:internal-plugins\":\"copyfiles -u 1 src/internal-plugins/**/package.json dist\",\"build:rawfiles\":\"copyfiles -u 1 src/internal-plugins/**/raw_* dist\",\"build:cjs\":\"babel cache-dir --out-dir cache-dir/commonjs --ignore \\\"**/__tests__\\\"\",\"build:src\":\"babel src --out-dir dist --source-maps --verbose --ignore \\\"**/gatsby-cli.js,src/internal-plugins/dev-404-page/raw_dev-404-page.js,**/__tests__\\\" --extensions \\\".ts,.js\\\"\",\"clean-test-bundles\":\"find test/ -type f -name bundle.js* -exec rm -rf {} +\",\"prebuild\":\"rimraf dist && rimraf cache-dir/commonjs\",\"postinstall\":\"node scripts/postinstall.js\",\"prepare\":\"cross-env NODE_ENV=production npm run build\",\"watch\":\"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch\"},\"types\":\"index.d.ts\",\"yargs\":{\"boolean-negation\":false},\"gitHead\":\"d1b51519328f2f0a404b640dc2184d2577de2dbc\"}");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function (a) {
    return a;
  };
}


/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const Footer=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"text-center p-4 text-gray-600 mt-10"},"Created by",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:"border-b text-blue-500",href:"https://twitter.com/mithicher",target:"_blank",rel:"noopener noreferrer"},"@mithicher"),". Inspired by dribble shot",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://dribbble.com/shots/8807920-Quickpay-Hero-section/attachments/1015863",target:"_blank",className:"border-b text-blue-500",rel:"noopener noreferrer"},"https://dribbble.com/vadimdrut"));};/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const Header=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"bg-gray-200 px-4 py-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"/",className:"inline-block py-2 text-gray-800 text-2xl font-bold"},"SmartFrame.me")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"hidden md:block"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"/",className:"inline-block py-1 md:py-4 text-gray-600 mr-6 font-bold"},"How it Works"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"/",className:"inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"},"Solutions"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"/",className:"inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"},"Pricing"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"/",className:"inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"},"Desktop"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"hidden md:block"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"/",className:"inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"},"Login"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"/",className:"inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg"},"Create account"))));};/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
const Layout=({children})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"font-sans bg-white flex flex-col min-h-screen w-full"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"],null),children,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"],null)));};/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-helmet */ "./node_modules/gatsby-plugin-react-helmet/index.js");
/* harmony import */ var gatsby_plugin_react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");
const Index=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_plugin_react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,{title:"foo bar",defer:false}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"bg-gray-200 md:overflow-hidden"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"px-4 py-16"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"relative w-full md:max-w-2xl md:mx-auto text-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6"},"A simple and smart tool that will transform your old tablet/phone"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"text-gray-600 md:text-xl md:px-18"},"into a digital frame."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"hidden md:block h-40 w-40 rounded-full bg-blue-800 absolute right-0 bottom-0 -mb-64 -mr-48"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"hidden md:block h-5 w-5 rounded-full bg-yellow-500 absolute top-0 right-0 -mr-40 mt-32"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{className:"fill-current bg-gray-200 text-white hidden md:block",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{fillOpacity:"1",d:"M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"max-w-4xl mx-auto bg-white shadow-lg relative z-20 hidden md:block",style:{marginTop:"-320px",borderRadius:"20px"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-20 w-20 rounded-full bg-yellow-500 absolute top-0 left-0 -ml-10 -mt-10",style:{zIndex:-1}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-5 w-5 rounded-full bg-blue-500 absolute top-0 left-0 -ml-32 mt-12",style:{zIndex:-1}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-10 bg-white rounded-t-lg border-b border-gray-100"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex",style:{height:"550px"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-32 bg-gray-200 p-6 overflow-hidden rounded-bl-lg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center mb-10"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-10 h-10 rounded-full bg-blue-800 mb-4 mx-auto"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 rounded-full bg-blue-800"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center mb-10"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 rounded-full bg-gray-300"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center mb-10"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 rounded-full bg-gray-300"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 rounded-full bg-gray-300"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex-1 py-6 px-8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex flex-wrap -mx-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-2/3 px-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex flex-wrap -mx-4 mb-10"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/4 px-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center mb-10 bg-white shadow rounded-lg p-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-10 h-10 rounded-full bg-green-600 mb-4 mx-auto"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 rounded-full bg-gray-200"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/4 px-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center mb-10 bg-white shadow rounded-lg p-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-10 h-10 rounded-full bg-blue-600 mb-4 mx-auto"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 rounded-full bg-gray-200"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/4 px-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center mb-10 bg-white shadow rounded-lg p-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-10 h-10 rounded-full bg-orange-400 mb-4 mx-auto"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 rounded-full bg-gray-200"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/4 px-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center mb-10 bg-white shadow rounded-lg p-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-10 h-10 rounded-full bg-blue-800 mb-4 mx-auto"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 rounded-full bg-gray-200"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-32 percentage mb-10 pt-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-4 bg-gray-200 w-64 mb-4 block"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-4 bg-gray-200 w-32 mb-4 block"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-4 bg-gray-200 w-40 mb-4 block"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-4 bg-gray-200 w-20 mb-4 block"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-full flex flex-wrap mb-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex items-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-8 w-8 rounded-full bg-gray-200 mr-4"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-16 bg-gray-200 mb-1 rounded-full"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-10 bg-gray-100 rounded-full"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex items-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-8 w-8 rounded-full bg-gray-200 mr-4"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-16 bg-gray-200 mb-1 rounded-full"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-10 bg-gray-100 rounded-full"}))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-full flex flex-wrap"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex items-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-8 w-8 rounded-full bg-gray-200 mr-4"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-16 bg-gray-200 mb-1 rounded-full"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-10 bg-gray-100 rounded-full"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex items-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-8 w-8 rounded-full bg-gray-200 mr-4"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-16 bg-gray-200 mb-1 rounded-full"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-10 bg-gray-100 rounded-full"})))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/3 px-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"rounded-lg shadow-lg p-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"block w-12 h-2 rounded-full bg-gray-200 mb-6"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{height:"150",width:"150",viewBox:"0 0 20 20",className:"mx-auto mb-12"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle",{r:"10",cx:"10",cy:"10",fill:"#4299e1"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle",{r:"5",cx:"10",cy:"10",fill:"transparent",stroke:"#2b6cb0",strokeWidth:"10",strokeDasharray:"11 31.4",transform:"rotate(-90) translate(-20)"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex flex-wrap -mx-2 mb-10"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/3 px-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"block h-2 rounded-full bg-gray-200"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/3 px-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"block h-2 rounded-full bg-gray-200"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/3 px-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"block h-2 rounded-full bg-gray-200"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex justify-between my-10"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-10 bg-gray-300 rounded-full mb-2"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-16 bg-gray-300 rounded-full mb-2"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-8 bg-gray-300 rounded-full"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"ml-auto h-2 w-5 bg-gray-300 rounded-full mb-2"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"ml-auto h-2 w-6 bg-gray-300 rounded-full mb-2"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"ml-auto h-2 w-8 bg-gray-300 rounded-full"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-right flex justify-end"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"rounded-lg h-8 w-20 px-4 bg-gray-200 mr-2"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"rounded-lg h-8 w-20 px-4 bg-green-400"}))))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"px-4 md:hidden"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"-mt-10 max-w-4xl mx-auto bg-white shadow-lg relative z-20",style:{borderRadius:"20px"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-10 bg-white rounded-t-lg border-b border-gray-100"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex",style:{height:"340px"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-16 bg-gray-200 px-2 py-6 overflow-hidden rounded-bl-lg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center mb-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-4 h-4 rounded-full bg-blue-800 mb-2 mx-auto"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-8 mx-auto rounded-full bg-blue-800"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center mb-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-4 h-4 rounded-full bg-gray-300 mb-2 mx-auto"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-8 mx-auto rounded-full bg-gray-300"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center mb-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-4 h-4 rounded-full bg-gray-300 mb-2 mx-auto"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-8 mx-auto rounded-full bg-gray-300"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-4 h-4 rounded-full bg-gray-300 mb-2 mx-auto"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-8 mx-auto rounded-full bg-gray-300"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex-1 py-6 px-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex flex-wrap -mx-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/3 px-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center mb-6 bg-white shadow rounded-lg px-2 py-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-4 h-4 rounded-full bg-green-600 mb-2 mx-auto"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-8 mx-auto rounded-full bg-gray-200"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/3 px-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center mb-6 bg-white shadow rounded-lg px-2 py-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-4 h-4 rounded-full bg-blue-600 mb-2 mx-auto"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-8 mx-auto rounded-full bg-gray-200"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/3 px-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center mb-6 bg-white shadow rounded-lg px-2 py-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-4 h-4 rounded-full bg-orange-600 mb-2 mx-auto"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-8 mx-auto rounded-full bg-gray-200"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex flex-wrap -mx-2 mb-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/2 px-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"shadow h-24 p-2 rounded-lg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-20 percentage pt-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 bg-gray-200 w-24 mb-2 block"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 bg-gray-200 w-12 mb-2 block"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 bg-gray-200 w-20 mb-2 block"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 bg-gray-200 w-8 mb-2 block"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/2 px-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"rounded-lg shadow px-2 py-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"block w-8 h-2 rounded-full bg-gray-200 mb-2"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"mb-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{height:"50",width:"50",viewBox:"0 0 20 20",className:"mx-auto"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle",{r:"10",cx:"10",cy:"10",fill:"#ddd"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle",{r:"5",cx:"10",cy:"10",fill:"transparent",stroke:"#eee",strokeWidth:"10",strokeDasharray:"11 31.4",transform:"rotate(-90) translate(-20)"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex flex-wrap -mx-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/3 px-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"block h-2 rounded-full bg-gray-200"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/3 px-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"block h-2 rounded-full bg-gray-200"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/3 px-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"block h-2 rounded-full bg-gray-200"})))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-full flex flex-wrap mb-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex items-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-4 w-4 rounded-full bg-gray-200 mr-4"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-10 bg-gray-200 mb-1 rounded-full"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-6 bg-gray-100 rounded-full"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex items-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-4 w-4 rounded-full bg-gray-200 mr-4"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-10 bg-gray-200 mb-1 rounded-full"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-6 bg-gray-100 rounded-full"}))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-full flex flex-wrap mb-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex items-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-4 w-4 rounded-full bg-gray-200 mr-4"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-10 bg-gray-200 mb-1 rounded-full"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-6 bg-gray-100 rounded-full"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-1/2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"flex items-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-4 w-4 rounded-full bg-gray-200 mr-4"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-10 bg-gray-200 mb-1 rounded-full"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"h-2 w-6 bg-gray-100 rounded-full"}))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-right flex justify-end"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"rounded-lg h-6 w-16 px-4 bg-gray-200 mr-2"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"rounded-lg h-6 w-16 px-4 bg-green-400"})))))));};/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "@reach/router":
/*!**********************************************************************************!*\
  !*** external "C:\\Pessoal\\smartframe\\node_modules\\@reach\\router\\index.js" ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***********************************************************************************************!*\
  !*** external "C:\\Pessoal\\smartframe\\node_modules\\core-js\\modules\\web.dom.iterable.js" ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!***************************************************************************!*\
  !*** external "C:\\Pessoal\\smartframe\\node_modules\\lodash\\lodash.js" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map