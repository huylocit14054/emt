module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/topHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_dropdown__ = __webpack_require__("antd/lib/dropdown");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar__ = __webpack_require__("antd/lib/avatar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_menu__ = __webpack_require__("antd/lib/menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout__ = __webpack_require__("antd/lib/layout");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_topHeader_less__ = __webpack_require__("./styles/topHeader.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_topHeader_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_topHeader_less__);
var _jsxFileName="/home/nenjamin2405/redpola/client-emt/components/topHeader.js";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Header=__WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default.a.Header;var onClick=function onClick(_ref){var key=_ref.key;message.info("Click on item ".concat(key));};var menu=__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default.a,{onClick:onClick,className:"menu-dropdown",__source:{fileName:_jsxFileName,lineNumber:10}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default.a.Item,{key:"1",__source:{fileName:_jsxFileName,lineNumber:11}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:12}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default.a,{type:"profile",__source:{fileName:_jsxFileName,lineNumber:13}})," Profile")),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default.a.Item,{key:"2",__source:{fileName:_jsxFileName,lineNumber:16}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:17}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default.a,{type:"logout",__source:{fileName:_jsxFileName,lineNumber:18}})," Sign out")));var TopHeader=/*#__PURE__*/function(_React$Component){_inherits(TopHeader,_React$Component);function TopHeader(){_classCallCheck(this,TopHeader);return _possibleConstructorReturn(this,(TopHeader.__proto__||Object.getPrototypeOf(TopHeader)).apply(this,arguments));}_createClass(TopHeader,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:27}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("style",{dangerouslySetInnerHTML:{__html:__WEBPACK_IMPORTED_MODULE_6__styles_topHeader_less___default.a},__source:{fileName:_jsxFileName,lineNumber:28}}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Header,{style:{background:'#fff',padding:0},__source:{fileName:_jsxFileName,lineNumber:29}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_dropdown___default.a,{overlay:menu,__source:{fileName:_jsxFileName,lineNumber:33}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"ant-dropdown-link user-dropdown",href:"#",__source:{fileName:_jsxFileName,lineNumber:34}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar___default.a,{src:"https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100",__source:{fileName:_jsxFileName,lineNumber:35}})))));}}]);return TopHeader;}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_menu__ = __webpack_require__("antd/lib/menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__ = __webpack_require__("antd/lib/layout");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_topHeader__ = __webpack_require__("./components/topHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_projects_less__ = __webpack_require__("./styles/projects.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_projects_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_projects_less__);
var _jsxFileName="/home/nenjamin2405/redpola/client-emt/pages/index.js";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}var Sider=__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a.Sider,Content=__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a.Content;var Projects=/*#__PURE__*/function(_React$Component){_inherits(Projects,_React$Component);function Projects(){var _ref;var _temp,_this;_classCallCheck(this,Projects);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _possibleConstructorReturn(_this,(_temp=_this=_possibleConstructorReturn(this,(_ref=Projects.__proto__||Object.getPrototypeOf(Projects)).call.apply(_ref,[this].concat(args))),Object.defineProperty(_assertThisInitialized(_this),"state",{configurable:true,enumerable:true,writable:true,value:{collapsed:false}}),Object.defineProperty(_assertThisInitialized(_this),"onCollapse",{configurable:true,enumerable:true,writable:true,value:function value(collapsed){console.log(collapsed);_this.setState({collapsed:collapsed});}}),_temp));}_createClass(Projects,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a,{id:"components-layout-demo-custom-trigger",__source:{fileName:_jsxFileName,lineNumber:21}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("style",{dangerouslySetInnerHTML:{__html:__WEBPACK_IMPORTED_MODULE_6__styles_projects_less___default.a},__source:{fileName:_jsxFileName,lineNumber:22}}),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Sider,{style:{backgroundColor:'white'},trigger:null,collapsible:true,collapsed:this.state.collapsed,onCollapse:this.onCollapse,__source:{fileName:_jsxFileName,lineNumber:23}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a,{prefetch:true,href:"/",__source:{fileName:_jsxFileName,lineNumber:24}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:25}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img",{src:"https://redpola-my.sharepoint.com/personal/phuc_tran_enhance_vn/Documents/Microsoft%20Teams%20Chat%20Files/g-suite%20logo%202.png",className:"logo",alt:"Hospital Review Logo",__source:{fileName:_jsxFileName,lineNumber:26}}))),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a,{mode:"inline",defaultSelectedKeys:['1'],__source:{fileName:_jsxFileName,lineNumber:33}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a.Item,{key:"1",__source:{fileName:_jsxFileName,lineNumber:34}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a,{type:"user",__source:{fileName:_jsxFileName,lineNumber:35}}),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:36}},"nav 1")),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a.Item,{key:"2",__source:{fileName:_jsxFileName,lineNumber:38}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a,{type:"video-camera",__source:{fileName:_jsxFileName,lineNumber:39}}),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:40}},"nav 2")),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a.Item,{key:"3",__source:{fileName:_jsxFileName,lineNumber:42}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a,{type:"upload",__source:{fileName:_jsxFileName,lineNumber:43}}),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:44}},"nav 3")))),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a,{__source:{fileName:_jsxFileName,lineNumber:48}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_topHeader__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:49}}),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Content,{style:{margin:'24px 16px',padding:24,background:'#fff',height:'100vh'},__source:{fileName:_jsxFileName,lineNumber:50}},"Content")));}}]);return Projects;}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/***/ }),

/***/ "./styles/projects.less":
/***/ (function(module, exports) {

;(function(){"use strict";module.exports="#components-layout-demo-custom-trigger .trigger {\n  font-size: 18px;\n  line-height: 64px;\n  padding: 0 24px;\n  cursor: pointer;\n  -webkit-transition: color .3s;\n  transition: color .3s;\n}\n#components-layout-demo-custom-trigger .trigger:hover {\n  color: #1890ff;\n}\n.logo {\n  width: 140px;\n  /* you can use % */\n  height: auto;\n  padding-top: 4%;\n  margin-bottom: 23px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n";})();

/***/ }),

/***/ "./styles/topHeader.less":
/***/ (function(module, exports) {

;(function(){"use strict";module.exports=".user-dropdown {\n  float: right;\n  margin-right: 1%;\n  cursor: pointer;\n  -webkit-transition: background-color 0.5s;\n  transition: background-color 0.5s;\n  padding: 0 15px;\n}\n.user-dropdown:hover {\n  background-color: #b5f5ec;\n}\n.menu-dropdown i {\n  padding-right: 10px;\n}\n";})();

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "antd/lib/avatar":
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/dropdown":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "antd/lib/icon":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/layout":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/menu":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map