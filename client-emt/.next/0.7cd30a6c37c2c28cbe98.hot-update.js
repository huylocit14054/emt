webpackHotUpdate(0,{

/***/ "./components/navigationLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_menu__ = __webpack_require__("./node_modules/antd/lib/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__ = __webpack_require__("./node_modules/antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__graphql_queries_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__topHeader__ = __webpack_require__("./components/topHeader.js");
var _jsxFileName="/home/huyloc/code/rubyonrails/emt/client-emt/components/navigationLayout.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}var Sider=__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a.Sider,Content=__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a.Content;var NavigationLayout=/*#__PURE__*/function(_React$Component){_inherits(NavigationLayout,_React$Component);function NavigationLayout(){var _ref;var _temp,_this;_classCallCheck(this,NavigationLayout);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _possibleConstructorReturn(_this,(_temp=_this=_possibleConstructorReturn(this,(_ref=NavigationLayout.__proto__||Object.getPrototypeOf(NavigationLayout)).call.apply(_ref,[this].concat(args))),Object.defineProperty(_assertThisInitialized(_this),"state",{configurable:true,enumerable:true,writable:true,value:{collapsed:false}}),Object.defineProperty(_assertThisInitialized(_this),"onCollapse",{configurable:true,enumerable:true,writable:true,value:function value(collapsed){console.log(collapsed);_this.setState({collapsed:collapsed});}}),_temp));}_createClass(NavigationLayout,[{key:"render",value:function render(){var _this2=this;var currentPage=this.props.currentPage;return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a,{id:"navigation-layout",__source:{fileName:_jsxFileName,lineNumber:20}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__topHeader__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:21}}),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a,{__source:{fileName:_jsxFileName,lineNumber:23}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["Query"],{query:__WEBPACK_IMPORTED_MODULE_6__graphql_queries_gql__["getCurrentUser"],__source:{fileName:_jsxFileName,lineNumber:24}},function(_ref2){var loading=_ref2.loading,error=_ref2.error,data=_ref2.data;if(loading)return"Loading...";if(error)return"Error! ".concat(error.message);var currentUserSync=data.currentUser;return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Sider,{collapsible:true,collapsed:_this2.state.collapsed,onCollapse:_this2.onCollapse,style:{paddingTop:0},__source:{fileName:_jsxFileName,lineNumber:30}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a,{mode:"inline",theme:"dark",selectedKeys:[currentPage],__source:{fileName:_jsxFileName,lineNumber:36}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a.Item,{key:"projects",style:{marginTop:0},__source:{fileName:_jsxFileName,lineNumber:37}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a,{prefetch:true,href:"/",__source:{fileName:_jsxFileName,lineNumber:38}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:39}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a,{type:"folder-open",__source:{fileName:_jsxFileName,lineNumber:40}}),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:41}},"Projects")))),currentUserSync.role==="root_admin"&&__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a.Item,{key:"users",__source:{fileName:_jsxFileName,lineNumber:46}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a,{prefetch:true,href:"/users",__source:{fileName:_jsxFileName,lineNumber:47}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:48}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a,{type:"team",__source:{fileName:_jsxFileName,lineNumber:49}}),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:50}},"Users"))))));}),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Content,{style:{margin:"24px 16px",padding:24,background:"#fff",height:"100vh"},__source:{fileName:_jsxFileName,lineNumber:60}},this.props.children)));}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return NavigationLayout;}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(Sider,"Sider","/home/huyloc/code/rubyonrails/emt/client-emt/components/navigationLayout.js");reactHotLoader.register(Content,"Content","/home/huyloc/code/rubyonrails/emt/client-emt/components/navigationLayout.js");reactHotLoader.register(NavigationLayout,"NavigationLayout","/home/huyloc/code/rubyonrails/emt/client-emt/components/navigationLayout.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/topHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_dropdown__ = __webpack_require__("./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar__ = __webpack_require__("./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_menu__ = __webpack_require__("./node_modules/antd/lib/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout__ = __webpack_require__("./node_modules/antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_cookie__ = __webpack_require__("./node_modules/cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_redirect__ = __webpack_require__("./lib/redirect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_topHeader_less__ = __webpack_require__("./styles/topHeader.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_topHeader_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__styles_topHeader_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__graphql_queries_gql__);
var _jsxFileName="/home/huyloc/code/rubyonrails/emt/client-emt/components/topHeader.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}var Header=__WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default.a.Header;var TopHeader=/*#__PURE__*/function(_React$Component){_inherits(TopHeader,_React$Component);function TopHeader(){var _ref;var _temp,_this;_classCallCheck(this,TopHeader);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _possibleConstructorReturn(_this,(_temp=_this=_possibleConstructorReturn(this,(_ref=TopHeader.__proto__||Object.getPrototypeOf(TopHeader)).call.apply(_ref,[this].concat(args))),Object.defineProperty(_assertThisInitialized(_this),"signout",{configurable:true,enumerable:true,writable:true,value:function value(){document.cookie=__WEBPACK_IMPORTED_MODULE_8_cookie___default.a.serialize("token","",{maxAge:-1// Expire the cookie immediately
});window.location.replace("/login");}}),_temp));}_createClass(TopHeader,[{key:"render",value:function render(){var menu=__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default.a,{className:"menu-dropdown",__source:{fileName:_jsxFileName,lineNumber:21}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default.a.Item,{key:"profile",__source:{fileName:_jsxFileName,lineNumber:22}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:23}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default.a,{type:"profile",__source:{fileName:_jsxFileName,lineNumber:24}})," Profile")),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default.a.Item,{key:"logout",__source:{fileName:_jsxFileName,lineNumber:27}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{onClick:this.signout,__source:{fileName:_jsxFileName,lineNumber:28}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default.a,{type:"logout",__source:{fileName:_jsxFileName,lineNumber:29}})," Sign out")));return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["Query"],{query:__WEBPACK_IMPORTED_MODULE_11__graphql_queries_gql__["getCurrentUser"],__source:{fileName:_jsxFileName,lineNumber:36}},function(_ref2){var loading=_ref2.loading,error=_ref2.error,data=_ref2.data;if(loading)return"Loading...";if(error)return"Error! ".concat(error.message);var currentUserSync=data.currentUser;return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Header,{style:{backgroundColor:"white",padding:0},className:"topHeader",__source:{fileName:_jsxFileName,lineNumber:42}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("style",{dangerouslySetInnerHTML:{__html:__WEBPACK_IMPORTED_MODULE_10__styles_topHeader_less___default.a},__source:{fileName:_jsxFileName,lineNumber:49}}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_dropdown___default.a,{overlay:menu,__source:{fileName:_jsxFileName,lineNumber:50}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"ant-dropdown-link user-dropdown",href:"#",__source:{fileName:_jsxFileName,lineNumber:51}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar___default.a,{src:"https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100",__source:{fileName:_jsxFileName,lineNumber:52}}))),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:55}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a,{prefetch:true,href:"/",__source:{fileName:_jsxFileName,lineNumber:56}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:57}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img",{src:"http://sv1.upsieutoc.com/2018/06/14/company_logo.jpg",className:"company-logo",__source:{fileName:_jsxFileName,lineNumber:58}})))));});}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return TopHeader;}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);var _default=Object(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["withApollo"])(TopHeader);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(Header,"Header","/home/huyloc/code/rubyonrails/emt/client-emt/components/topHeader.js");reactHotLoader.register(TopHeader,"TopHeader","/home/huyloc/code/rubyonrails/emt/client-emt/components/topHeader.js");reactHotLoader.register(_default,"default","/home/huyloc/code/rubyonrails/emt/client-emt/components/topHeader.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/withApollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie__ = __webpack_require__("./node_modules/cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__initApollo__ = __webpack_require__("./lib/initApollo.js");
var _jsxFileName="/home/huyloc/code/rubyonrails/emt/client-emt/lib/withApollo.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _next(value){step("next",value);}function _throw(err){step("throw",err);}_next();});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function parseCookies(req){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return __WEBPACK_IMPORTED_MODULE_2_cookie___default.a.parse(req?req.headers.cookie||'':document.cookie,options);}var _default=function _default(App){var _class,_temp;return _temp=_class=/*#__PURE__*/function(_React$Component){_inherits(WithData,_React$Component);_createClass(WithData,null,[{key:"getInitialProps",value:function(){var _getInitialProps=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx){var Component,router,_ctx$ctx,req,res,apollo,appProps,apolloState;return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:Component=ctx.Component,router=ctx.router,_ctx$ctx=ctx.ctx,req=_ctx$ctx.req,res=_ctx$ctx.res;apollo=Object(__WEBPACK_IMPORTED_MODULE_6__initApollo__["a" /* default */])({},{getToken:function getToken(){return parseCookies(req).token;}});ctx.ctx.apolloClient=apollo;appProps={};if(!App.getInitialProps){_context.next=8;break;}_context.next=7;return App.getInitialProps(ctx);case 7:appProps=_context.sent;case 8:if(!(res&&res.finished)){_context.next=10;break;}return _context.abrupt("return",{});case 10:_context.prev=10;_context.next=13;return Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["getDataFromTree"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(App,_extends({},appProps,{Component:Component,router:router,apolloClient:apollo,__source:{fileName:_jsxFileName,lineNumber:47}})));case 13:_context.next=18;break;case 15:_context.prev=15;_context.t0=_context["catch"](10);// Prevent Apollo Client GraphQL errors from crashing SSR.
// Handle them in components via the data.error prop:
// http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
console.error('Error while running `getDataFromTree`',_context.t0);case 18:if(!process.browser){// getDataFromTree does not call componentWillUnmount
// head side effect therefore need to be cleared manually
__WEBPACK_IMPORTED_MODULE_5_next_head___default.a.rewind();}// Extract query data from the Apollo's store
apolloState=apollo.cache.extract();return _context.abrupt("return",_objectSpread({},appProps,{apolloState:apolloState}));case 21:case"end":return _context.stop();}}},_callee,this,[[10,15]]);}));return function getInitialProps(_x){return _getInitialProps.apply(this,arguments);};}()}]);function WithData(props){var _this;_classCallCheck(this,WithData);_this=_possibleConstructorReturn(this,(WithData.__proto__||Object.getPrototypeOf(WithData)).call(this,props));// `getDataFromTree` renders the component first, the client is passed off as a property.
// After that rendering is done using Next's normal rendering pipeline
_this.apolloClient=Object(__WEBPACK_IMPORTED_MODULE_6__initApollo__["a" /* default */])(props.apolloState,{getToken:function getToken(){return parseCookies().token;}});return _this;}_createClass(WithData,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(App,_extends({},this.props,{apolloClient:this.apolloClient,__source:{fileName:_jsxFileName,lineNumber:86}}));}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return WithData;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component),Object.defineProperty(_class,"displayName",{configurable:true,enumerable:true,writable:true,value:"WithData(".concat(App.displayName,")")}),Object.defineProperty(_class,"propTypes",{configurable:true,enumerable:true,writable:true,value:{apolloState:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired}}),_temp;};/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(parseCookies,"parseCookies","/home/huyloc/code/rubyonrails/emt/client-emt/lib/withApollo.js");reactHotLoader.register(_default,"default","/home/huyloc/code/rubyonrails/emt/client-emt/lib/withApollo.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/dom-scroll-into-view/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("./node_modules/dom-scroll-into-view/lib/dom-scroll-into-view.js");

/***/ }),

/***/ "./node_modules/rc-menu/es/MenuItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MenuItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__ = __webpack_require__("./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view__ = __webpack_require__("./node_modules/dom-scroll-into-view/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mini_store__ = __webpack_require__("./node_modules/mini-store/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util__ = __webpack_require__("./node_modules/rc-menu/es/util.js");













/* eslint react/no-is-mounted:0 */

var MenuItem = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(MenuItem, _React$Component);

  function MenuItem(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MenuItem);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _this.onKeyDown = function (e) {
      var keyCode = e.keyCode;
      if (keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].ENTER) {
        _this.onClick(e);
        return true;
      }
    };

    _this.onMouseLeave = function (e) {
      var _this$props = _this.props,
          eventKey = _this$props.eventKey,
          onItemHover = _this$props.onItemHover,
          onMouseLeave = _this$props.onMouseLeave;

      onItemHover({
        key: eventKey,
        hover: false
      });
      onMouseLeave({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onMouseEnter = function (e) {
      var _this$props2 = _this.props,
          eventKey = _this$props2.eventKey,
          onItemHover = _this$props2.onItemHover,
          onMouseEnter = _this$props2.onMouseEnter;

      onItemHover({
        key: eventKey,
        hover: true
      });
      onMouseEnter({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onClick = function (e) {
      var _this$props3 = _this.props,
          eventKey = _this$props3.eventKey,
          multiple = _this$props3.multiple,
          onClick = _this$props3.onClick,
          onSelect = _this$props3.onSelect,
          onDeselect = _this$props3.onDeselect,
          isSelected = _this$props3.isSelected;

      var info = {
        key: eventKey,
        keyPath: [eventKey],
        item: _this,
        domEvent: e
      };
      onClick(info);
      if (multiple) {
        if (isSelected) {
          onDeselect(info);
        } else {
          onSelect(info);
        }
      } else if (!isSelected) {
        onSelect(info);
      }
    };

    return _this;
  }

  MenuItem.prototype.componentDidMount = function componentDidMount() {
    // invoke customized ref to expose component to mixin
    this.callRef();
  };

  MenuItem.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.props.active) {
      __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view___default()(__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.findDOMNode(this), __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.findDOMNode(this.props.parentMenu), {
        onlyScrollIfNeeded: true
      });
    }
    this.callRef();
  };

  MenuItem.prototype.componentWillUnmount = function componentWillUnmount() {
    var props = this.props;
    if (props.onDestroy) {
      props.onDestroy(props.eventKey);
    }
  };

  MenuItem.prototype.getPrefixCls = function getPrefixCls() {
    return this.props.rootPrefixCls + '-item';
  };

  MenuItem.prototype.getActiveClassName = function getActiveClassName() {
    return this.getPrefixCls() + '-active';
  };

  MenuItem.prototype.getSelectedClassName = function getSelectedClassName() {
    return this.getPrefixCls() + '-selected';
  };

  MenuItem.prototype.getDisabledClassName = function getDisabledClassName() {
    return this.getPrefixCls() + '-disabled';
  };

  MenuItem.prototype.callRef = function callRef() {
    if (this.props.manualRef) {
      this.props.manualRef(this);
    }
  };

  MenuItem.prototype.render = function render() {
    var _classNames;

    var props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props);
    var className = __WEBPACK_IMPORTED_MODULE_8_classnames___default()(this.getPrefixCls(), props.className, (_classNames = {}, _classNames[this.getActiveClassName()] = !props.disabled && props.active, _classNames[this.getSelectedClassName()] = props.isSelected, _classNames[this.getDisabledClassName()] = props.disabled, _classNames));
    var attrs = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.attribute, {
      title: props.title,
      className: className,
      // set to menuitem by default
      role: 'menuitem',
      'aria-disabled': props.disabled
    });

    if (props.role === 'option') {
      // overwrite to option
      attrs = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, attrs, {
        role: 'option',
        'aria-selected': props.isSelected
      });
    } else if (props.role === null) {
      // sometimes we want to specify role inside <li/> element
      // <li><a role='menuitem'>Link</a></li> would be a good example
      delete attrs.role;
    }
    // In case that onClick/onMouseLeave/onMouseEnter is passed down from owner
    var mouseEvent = {
      onClick: props.disabled ? null : this.onClick,
      onMouseLeave: props.disabled ? null : this.onMouseLeave,
      onMouseEnter: props.disabled ? null : this.onMouseEnter
    };
    var style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.style);
    if (props.mode === 'inline') {
      style.paddingLeft = props.inlineIndent * props.level;
    }
    __WEBPACK_IMPORTED_MODULE_11__util__["e" /* menuAllProps */].forEach(function (key) {
      return delete props[key];
    });
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'li',
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, attrs, mouseEvent, {
        style: style
      }),
      props.children
    );
  };

  return MenuItem;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

MenuItem.propTypes = {
  attribute: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  rootPrefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  eventKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  active: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  selectedKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array,
  disabled: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  title: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  onItemHover: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onDeselect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  parentMenu: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  onDestroy: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onMouseLeave: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  multiple: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  isSelected: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  manualRef: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
};
MenuItem.defaultProps = {
  onSelect: __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */],
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */],
  onMouseLeave: __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */],
  manualRef: __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */]
};
MenuItem.isMenuItem = true;

var connected = Object(__WEBPACK_IMPORTED_MODULE_10_mini_store__["connect"])(function (_ref, _ref2) {
  var activeKey = _ref.activeKey,
      selectedKeys = _ref.selectedKeys;
  var eventKey = _ref2.eventKey,
      subMenuKey = _ref2.subMenuKey;
  return {
    active: activeKey[subMenuKey] === eventKey,
    isSelected: selectedKeys.indexOf(eventKey) !== -1
  };
})(MenuItem);

/* harmony default export */ __webpack_exports__["a"] = (connected);

/***/ }),

/***/ "./node_modules/react-apollo/react-apollo.browser.umd.js":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__("./node_modules/react/cjs/react.development.js"), __webpack_require__("./node_modules/next/node_modules/prop-types/index.js"), __webpack_require__("./node_modules/apollo-client/index.js")) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'apollo-client'], factory) :
    (factory((global['react-apollo'] = {}),global.React,global.PropTypes,global.apolloClient));
}(this, (function (exports,React,PropTypes,apolloClient) { 'use strict';

    function getProps(element) {
        return element.props || element.attributes;
    }
    function isReactElement(element) {
        return !!element.type;
    }
    function isComponentClass(Comp) {
        return Comp.prototype && (Comp.prototype.render || Comp.prototype.isReactComponent);
    }
    function providesChildContext(instance) {
        return !!instance.getChildContext;
    }
    function walkTree(element, context, visitor) {
        if (Array.isArray(element)) {
            element.forEach(function (item) { return walkTree(item, context, visitor); });
            return;
        }
        if (!element) {
            return;
        }
        if (isReactElement(element)) {
            if (typeof element.type === 'function') {
                var Comp = element.type;
                var props = Object.assign({}, Comp.defaultProps, getProps(element));
                var childContext_1 = context;
                var child = void 0;
                if (isComponentClass(Comp)) {
                    var instance_1 = new Comp(props, context);
                    instance_1.props = instance_1.props || props;
                    instance_1.context = instance_1.context || context;
                    instance_1.state = instance_1.state || null;
                    instance_1.setState = function (newState) {
                        if (typeof newState === 'function') {
                            newState = newState(instance_1.state, instance_1.props, instance_1.context);
                        }
                        instance_1.state = Object.assign({}, instance_1.state, newState);
                    };
                    if (instance_1.componentWillMount) {
                        instance_1.componentWillMount();
                    }
                    if (providesChildContext(instance_1)) {
                        childContext_1 = Object.assign({}, context, instance_1.getChildContext());
                    }
                    if (visitor(element, instance_1, context, childContext_1) === false) {
                        return;
                    }
                    child = instance_1.render();
                }
                else {
                    if (visitor(element, null, context) === false) {
                        return;
                    }
                    child = Comp(props, context);
                }
                if (child) {
                    if (Array.isArray(child)) {
                        child.forEach(function (item) { return walkTree(item, childContext_1, visitor); });
                    }
                    else {
                        walkTree(child, childContext_1, visitor);
                    }
                }
            }
            else {
                if (visitor(element, null, context) === false) {
                    return;
                }
                if (element.props && element.props.children) {
                    React.Children.forEach(element.props.children, function (child) {
                        if (child) {
                            walkTree(child, context, visitor);
                        }
                    });
                }
            }
        }
        else if (typeof element === 'string' || typeof element === 'number') {
            visitor(element, null, context);
        }
    }
    function hasFetchDataFunction(instance) {
        return typeof instance.fetchData === 'function';
    }
    function isPromise(promise) {
        return typeof promise.then === 'function';
    }
    function getPromisesFromTree(_a) {
        var rootElement = _a.rootElement, _b = _a.rootContext, rootContext = _b === void 0 ? {} : _b;
        var promises = [];
        walkTree(rootElement, rootContext, function (_, instance, context, childContext) {
            if (instance && hasFetchDataFunction(instance)) {
                var promise = instance.fetchData();
                if (isPromise(promise)) {
                    promises.push({ promise: promise, context: childContext || context, instance: instance });
                    return false;
                }
            }
        });
        return promises;
    }
    function getDataFromTree(rootElement, rootContext) {
        if (rootContext === void 0) { rootContext = {}; }
        var promises = getPromisesFromTree({ rootElement: rootElement, rootContext: rootContext });
        if (!promises.length) {
            return Promise.resolve();
        }
        var errors = [];
        var mappedPromises = promises.map(function (_a) {
            var promise = _a.promise, context = _a.context, instance = _a.instance;
            return promise
                .then(function (_) { return getDataFromTree(instance.render(), context); })
                .catch(function (e) { return errors.push(e); });
        });
        return Promise.all(mappedPromises).then(function (_) {
            if (errors.length > 0) {
                var error = errors.length === 1
                    ? errors[0]
                    : new Error(errors.length + " errors were thrown when executing your fetchData functions.");
                error.queryErrors = errors;
                throw error;
            }
        });
    }

    var invariant = __webpack_require__("./node_modules/invariant/browser.js");
    var ApolloConsumer = function (props, context) {
        invariant(!!context.client, "Could not find \"client\" in the context of ApolloConsumer. Wrap the root component in an <ApolloProvider>");
        return props.children(context.client);
    };
    ApolloConsumer.contextTypes = {
        client: PropTypes.object.isRequired,
    };
    ApolloConsumer.propTypes = {
        children: PropTypes.func.isRequired,
    };

    var __extends = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var invariant$1 = __webpack_require__("./node_modules/invariant/browser.js");
    var ApolloProvider = (function (_super) {
        __extends(ApolloProvider, _super);
        function ApolloProvider(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.operations = new Map();
            invariant$1(props.client, 'ApolloClient was not passed a client instance. Make ' +
                'sure you pass in your client via the "client" prop.');
            if (!props.client.__operations_cache__) {
                props.client.__operations_cache__ = _this.operations;
            }
            return _this;
        }
        ApolloProvider.prototype.getChildContext = function () {
            return {
                client: this.props.client,
                operations: this.props.client.__operations_cache__,
            };
        };
        ApolloProvider.prototype.render = function () {
            return this.props.children;
        };
        ApolloProvider.propTypes = {
            client: PropTypes.object.isRequired,
            children: PropTypes.element.isRequired,
        };
        ApolloProvider.childContextTypes = {
            client: PropTypes.object.isRequired,
            operations: PropTypes.object,
        };
        return ApolloProvider;
    }(React.Component));

    var invariant$2 = __webpack_require__("./node_modules/invariant/browser.js");
    var DocumentType;
    (function (DocumentType) {
        DocumentType[DocumentType["Query"] = 0] = "Query";
        DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
        DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
    })(DocumentType || (DocumentType = {}));
    var cache = new Map();
    function parser(document) {
        var cached = cache.get(document);
        if (cached)
            return cached;
        var variables, type, name;
        invariant$2(!!document && !!document.kind, "Argument of " + document + " passed to parser was not a valid GraphQL " +
            "DocumentNode. You may need to use 'graphql-tag' or another method " +
            "to convert your operation into a document");
        var fragments = document.definitions.filter(function (x) { return x.kind === 'FragmentDefinition'; });
        var queries = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'query'; });
        var mutations = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'mutation'; });
        var subscriptions = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'subscription'; });
        invariant$2(!fragments.length || (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
            "You must include a query, subscription or mutation as well");
        invariant$2(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
            (document + " had " + queries.length + " queries, " + subscriptions.length + " ") +
            ("subscriptions and " + mutations.length + " mutations. ") +
            "You can use 'compose' to join multiple operation types to a component");
        type = queries.length ? DocumentType.Query : DocumentType.Mutation;
        if (!queries.length && !mutations.length)
            type = DocumentType.Subscription;
        var definitions = queries.length ? queries : mutations.length ? mutations : subscriptions;
        invariant$2(definitions.length === 1, "react-apollo only supports one defintion per HOC. " + document + " had " +
            (definitions.length + " definitions. ") +
            "You can use 'compose' to join multiple operation types to a component");
        var definition = definitions[0];
        variables = definition.variableDefinitions || [];
        if (definition.name && definition.name.kind === 'Name') {
            name = definition.name.value;
        }
        else {
            name = 'data';
        }
        var payload = { name: name, type: type, variables: variables };
        cache.set(document, payload);
        return payload;
    }

    var __extends$1 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    var __rest = (undefined && undefined.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
    var shallowEqual = __webpack_require__("./node_modules/fbjs/lib/shallowEqual.js");
    var invariant$3 = __webpack_require__("./node_modules/invariant/browser.js");
    function compact(obj) {
        return Object.keys(obj).reduce(function (acc, key) {
            if (obj[key] !== undefined) {
                acc[key] = obj[key];
            }
            return acc;
        }, {});
    }
    function observableQueryFields(observable) {
        var fields = {
            variables: observable.variables,
            refetch: observable.refetch.bind(observable),
            fetchMore: observable.fetchMore.bind(observable),
            updateQuery: observable.updateQuery.bind(observable),
            startPolling: observable.startPolling.bind(observable),
            stopPolling: observable.stopPolling.bind(observable),
            subscribeToMore: observable.subscribeToMore.bind(observable),
        };
        return fields;
    }
    var Query = (function (_super) {
        __extends$1(Query, _super);
        function Query(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.previousData = {};
            _this.startQuerySubscription = function () {
                if (_this.querySubscription)
                    return;
                var current = _this.getQueryResult();
                _this.querySubscription = _this.queryObservable.subscribe({
                    next: function () {
                        if (current && current.networkStatus === 7) {
                            current = undefined;
                            return;
                        }
                        _this.updateCurrentData();
                    },
                    error: function (error) {
                        _this.resubscribeToQuery();
                        if (!error.hasOwnProperty('graphQLErrors'))
                            throw error;
                        _this.updateCurrentData();
                    },
                });
            };
            _this.removeQuerySubscription = function () {
                if (_this.querySubscription) {
                    _this.querySubscription.unsubscribe();
                    delete _this.querySubscription;
                }
            };
            _this.updateCurrentData = function () {
                if (_this.hasMounted)
                    _this.forceUpdate();
            };
            _this.getQueryResult = function () {
                var data = { data: Object.create(null) };
                Object.assign(data, observableQueryFields(_this.queryObservable));
                var currentResult = _this.queryObservable.currentResult();
                var loading = currentResult.loading, networkStatus = currentResult.networkStatus, errors = currentResult.errors;
                var error = currentResult.error;
                if (errors && errors.length > 0) {
                    error = new apolloClient.ApolloError({ graphQLErrors: errors });
                }
                Object.assign(data, { loading: loading, networkStatus: networkStatus, error: error });
                if (loading) {
                    Object.assign(data.data, _this.previousData, currentResult.data);
                }
                else if (error) {
                    Object.assign(data, {
                        data: (_this.queryObservable.getLastResult() || {}).data,
                    });
                }
                else {
                    Object.assign(data.data, currentResult.data);
                    _this.previousData = currentResult.data;
                }
                if (!_this.querySubscription) {
                    var oldRefetch_1 = data.refetch;
                    data.refetch = function (args) {
                        if (_this.querySubscription) {
                            return oldRefetch_1(args);
                        }
                        else {
                            return new Promise(function (r, f) {
                                _this.refetcherQueue = { resolve: r, reject: f, args: args };
                            });
                        }
                    };
                }
                data.client = _this.client;
                return data;
            };
            _this.client = props.client || context.client;
            invariant$3(!!_this.client, "Could not find \"client\" in the context of Query or as passed props. Wrap the root component in an <ApolloProvider>");
            _this.initializeQueryObservable(props);
            return _this;
        }
        Query.prototype.fetchData = function () {
            if (this.props.skip)
                return false;
            var _a = this.props, children = _a.children, ssr = _a.ssr, displayName = _a.displayName, skip = _a.skip, client = _a.client, opts = __rest(_a, ["children", "ssr", "displayName", "skip", "client"]);
            var fetchPolicy = opts.fetchPolicy;
            if (ssr === false)
                return false;
            if (fetchPolicy === 'network-only' || fetchPolicy === 'cache-and-network') {
                fetchPolicy = 'cache-first';
            }
            var observable = this.client.watchQuery(__assign({}, opts, { fetchPolicy: fetchPolicy }));
            var result = this.queryObservable.currentResult();
            return result.loading ? observable.result() : false;
        };
        Query.prototype.componentDidMount = function () {
            this.hasMounted = true;
            if (this.props.skip)
                return;
            this.startQuerySubscription();
            if (this.refetcherQueue) {
                var _a = this.refetcherQueue, args = _a.args, resolve = _a.resolve, reject = _a.reject;
                this.queryObservable.refetch(args)
                    .then(resolve)
                    .catch(reject);
            }
        };
        Query.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
            if (nextProps.skip && !this.props.skip) {
                this.removeQuerySubscription();
                return;
            }
            var client = nextProps.client;
            if (shallowEqual(this.props, nextProps) &&
                (this.client === client || this.client === nextContext.client)) {
                return;
            }
            if (this.client !== client && this.client !== nextContext.client) {
                if (client) {
                    this.client = client;
                }
                else {
                    this.client = nextContext.client;
                }
                this.removeQuerySubscription();
                this.queryObservable = null;
                this.previousData = {};
                this.updateQuery(nextProps);
            }
            if (this.props.query !== nextProps.query) {
                this.removeQuerySubscription();
            }
            this.updateQuery(nextProps);
            if (nextProps.skip)
                return;
            this.startQuerySubscription();
        };
        Query.prototype.componentWillUnmount = function () {
            this.removeQuerySubscription();
            this.hasMounted = false;
        };
        Query.prototype.render = function () {
            var children = this.props.children;
            var queryResult = this.getQueryResult();
            return children(queryResult);
        };
        Query.prototype.extractOptsFromProps = function (props) {
            var variables = props.variables, pollInterval = props.pollInterval, fetchPolicy = props.fetchPolicy, errorPolicy = props.errorPolicy, notifyOnNetworkStatusChange = props.notifyOnNetworkStatusChange, query = props.query, _a = props.displayName, displayName = _a === void 0 ? 'Query' : _a, _b = props.context, context = _b === void 0 ? {} : _b;
            this.operation = parser(query);
            invariant$3(this.operation.type === DocumentType.Query, "The <Query /> component requires a graphql query, but got a " + (this.operation.type === DocumentType.Mutation ? 'mutation' : 'subscription') + ".");
            return compact({
                variables: variables,
                pollInterval: pollInterval,
                query: query,
                fetchPolicy: fetchPolicy,
                errorPolicy: errorPolicy,
                notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
                metadata: { reactComponent: { displayName: displayName } },
                context: context,
            });
        };
        Query.prototype.initializeQueryObservable = function (props) {
            var opts = this.extractOptsFromProps(props);
            if (this.context.operations) {
                this.context.operations.set(this.operation.name, {
                    query: opts.query,
                    variables: opts.variables,
                });
            }
            this.queryObservable = this.client.watchQuery(opts);
        };
        Query.prototype.updateQuery = function (props) {
            if (!this.queryObservable)
                this.initializeQueryObservable(props);
            this.queryObservable.setOptions(this.extractOptsFromProps(props))
                .catch(function () { return null; });
        };
        Query.prototype.resubscribeToQuery = function () {
            this.removeQuerySubscription();
            var lastError = this.queryObservable.getLastError();
            var lastResult = this.queryObservable.getLastResult();
            this.queryObservable.resetLastResults();
            this.startQuerySubscription();
            Object.assign(this.queryObservable, { lastError: lastError, lastResult: lastResult });
        };
        Query.contextTypes = {
            client: PropTypes.object.isRequired,
            operations: PropTypes.object,
        };
        Query.propTypes = {
            children: PropTypes.func.isRequired,
            fetchPolicy: PropTypes.string,
            notifyOnNetworkStatusChange: PropTypes.bool,
            pollInterval: PropTypes.number,
            query: PropTypes.object.isRequired,
            variables: PropTypes.object,
            ssr: PropTypes.bool,
        };
        return Query;
    }(React.Component));

    var __extends$2 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$1 = (undefined && undefined.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    var invariant$4 = __webpack_require__("./node_modules/invariant/browser.js");
    var shallowEqual$1 = __webpack_require__("./node_modules/fbjs/lib/shallowEqual.js");
    var initialState = {
        loading: false,
        called: false,
        error: undefined,
        data: undefined,
    };
    var Mutation = (function (_super) {
        __extends$2(Mutation, _super);
        function Mutation(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.runMutation = function (options) {
                if (options === void 0) { options = {}; }
                _this.onStartMutation();
                var mutationId = _this.generateNewMutationId();
                return _this.mutate(options)
                    .then(function (response) {
                    _this.onCompletedMutation(response, mutationId);
                    return response;
                })
                    .catch(function (e) {
                    _this.onMutationError(e, mutationId);
                    if (!_this.props.onError)
                        throw e;
                });
            };
            _this.mutate = function (options) {
                var _a = _this.props, mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, update = _a.update, _b = _a.context, context = _b === void 0 ? {} : _b;
                var refetchQueries = options.refetchQueries || _this.props.refetchQueries;
                if (refetchQueries && refetchQueries.length && Array.isArray(refetchQueries)) {
                    refetchQueries = refetchQueries.map(function (x) {
                        if (typeof x === 'string' && _this.context.operations)
                            return _this.context.operations.get(x) || x;
                        return x;
                    });
                    delete options.refetchQueries;
                }
                return _this.client.mutate(__assign$1({ mutation: mutation,
                    variables: variables,
                    optimisticResponse: optimisticResponse,
                    refetchQueries: refetchQueries,
                    update: update,
                    context: context }, options));
            };
            _this.onStartMutation = function () {
                if (!_this.state.loading && !_this.props.ignoreResults) {
                    _this.setState({
                        loading: true,
                        error: undefined,
                        data: undefined,
                        called: true,
                    });
                }
            };
            _this.onCompletedMutation = function (response, mutationId) {
                if (_this.hasMounted === false) {
                    return;
                }
                var _a = _this.props, onCompleted = _a.onCompleted, ignoreResults = _a.ignoreResults;
                var data = response.data;
                var callOncomplete = function () { return (onCompleted ? onCompleted(data) : null); };
                if (_this.isMostRecentMutation(mutationId) && !ignoreResults) {
                    _this.setState({ loading: false, data: data }, callOncomplete);
                }
                else {
                    callOncomplete();
                }
            };
            _this.onMutationError = function (error, mutationId) {
                if (_this.hasMounted === false) {
                    return;
                }
                var onError = _this.props.onError;
                var callOnError = function () { return (onError ? onError(error) : null); };
                if (_this.isMostRecentMutation(mutationId)) {
                    _this.setState({ loading: false, error: error }, callOnError);
                }
                else {
                    callOnError();
                }
            };
            _this.generateNewMutationId = function () {
                _this.mostRecentMutationId = _this.mostRecentMutationId + 1;
                return _this.mostRecentMutationId;
            };
            _this.isMostRecentMutation = function (mutationId) {
                return _this.mostRecentMutationId === mutationId;
            };
            _this.verifyDocumentIsMutation = function (mutation) {
                var operation = parser(mutation);
                invariant$4(operation.type === DocumentType.Mutation, "The <Mutation /> component requires a graphql mutation, but got a " + (operation.type === DocumentType.Query ? 'query' : 'subscription') + ".");
            };
            _this.verifyContext = function (context) {
                invariant$4(!!context.client, "Could not find \"client\" in the context of Mutation. Wrap the root component in an <ApolloProvider>");
            };
            _this.verifyContext(context);
            _this.client = context.client;
            _this.verifyDocumentIsMutation(props.mutation);
            _this.mostRecentMutationId = 0;
            _this.state = initialState;
            return _this;
        }
        Mutation.prototype.componentDidMount = function () {
            this.hasMounted = true;
        };
        Mutation.prototype.componentWillUnmount = function () {
            this.hasMounted = false;
        };
        Mutation.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
            if (shallowEqual$1(this.props, nextProps) && this.client === nextContext.client) {
                return;
            }
            if (this.props.mutation !== nextProps.mutation) {
                this.verifyDocumentIsMutation(nextProps.mutation);
            }
            if (this.client !== nextContext.client) {
                this.client = nextContext.client;
                this.setState(initialState);
            }
        };
        Mutation.prototype.render = function () {
            var children = this.props.children;
            var _a = this.state, loading = _a.loading, data = _a.data, error = _a.error, called = _a.called;
            var result = {
                called: called,
                loading: loading,
                data: data,
                error: error,
            };
            return children(this.runMutation, result);
        };
        Mutation.contextTypes = {
            client: PropTypes.object.isRequired,
            operations: PropTypes.object,
        };
        Mutation.propTypes = {
            mutation: PropTypes.object.isRequired,
            variables: PropTypes.object,
            optimisticResponse: PropTypes.object,
            refetchQueries: PropTypes.oneOfType([
                PropTypes.arrayOf(PropTypes.string),
                PropTypes.arrayOf(PropTypes.object),
                PropTypes.func,
            ]),
            update: PropTypes.func,
            children: PropTypes.func.isRequired,
            onCompleted: PropTypes.func,
            onError: PropTypes.func,
        };
        return Mutation;
    }(React.Component));

    var __extends$3 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var shallowEqual$2 = __webpack_require__("./node_modules/fbjs/lib/shallowEqual.js");
    var invariant$5 = __webpack_require__("./node_modules/invariant/browser.js");
    var Subscription = (function (_super) {
        __extends$3(Subscription, _super);
        function Subscription(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.initialize = function (props) {
                if (_this.queryObservable)
                    return;
                _this.queryObservable = _this.client.subscribe({
                    query: props.subscription,
                    variables: props.variables,
                });
            };
            _this.startSubscription = function () {
                if (_this.querySubscription)
                    return;
                _this.querySubscription = _this.queryObservable.subscribe({
                    next: _this.updateCurrentData,
                    error: _this.updateError,
                });
            };
            _this.getInitialState = function () { return ({
                loading: true,
                error: undefined,
                data: undefined,
            }); };
            _this.updateCurrentData = function (result) {
                _this.setState({
                    data: result.data,
                    loading: false,
                    error: undefined,
                });
            };
            _this.updateError = function (error) {
                _this.setState({
                    error: error,
                    loading: false,
                });
            };
            _this.endSubscription = function () {
                if (_this.querySubscription) {
                    _this.querySubscription.unsubscribe();
                    delete _this.querySubscription;
                }
            };
            invariant$5(!!context.client, "Could not find \"client\" in the context of Subscription. Wrap the root component in an <ApolloProvider>");
            _this.client = context.client;
            _this.initialize(props);
            _this.state = _this.getInitialState();
            return _this;
        }
        Subscription.prototype.componentDidMount = function () {
            this.startSubscription();
        };
        Subscription.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
            if (shallowEqual$2(this.props.variables, nextProps.variables) &&
                this.client === nextContext.client &&
                this.props.subscription === nextProps.subscription) {
                return;
            }
            var shouldResubscribe = nextProps.shouldResubscribe;
            if (typeof shouldResubscribe === 'function') {
                shouldResubscribe = !!shouldResubscribe(this.props, nextProps);
            }
            var shouldNotResubscribe = shouldResubscribe === false;
            if (this.client !== nextContext.client) {
                this.client = nextContext.client;
            }
            if (!shouldNotResubscribe) {
                this.endSubscription();
                delete this.queryObservable;
                this.initialize(nextProps);
                this.startSubscription();
                this.setState(this.getInitialState());
                return;
            }
            this.initialize(nextProps);
            this.startSubscription();
        };
        Subscription.prototype.componentWillUnmount = function () {
            this.endSubscription();
        };
        Subscription.prototype.render = function () {
            var result = Object.assign({}, this.state, {
                variables: this.props.variables,
            });
            return this.props.children(result);
        };
        Subscription.contextTypes = {
            client: PropTypes.object.isRequired,
        };
        Subscription.propTypes = {
            subscription: PropTypes.object.isRequired,
            variables: PropTypes.object,
            children: PropTypes.func.isRequired,
            shouldResubscribe: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
        };
        return Subscription;
    }(React.Component));

    var __extends$4 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var invariant$6 = __webpack_require__("./node_modules/invariant/browser.js");
    var defaultMapPropsToOptions = function () { return ({}); };
    var defaultMapPropsToSkip = function () { return false; };
    function getDisplayName(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }
    function calculateVariablesFromProps(operation, props, graphQLDisplayName, wrapperName) {
        var variables = {};
        for (var _i = 0, _a = operation.variables; _i < _a.length; _i++) {
            var _b = _a[_i], variable = _b.variable, type = _b.type;
            if (!variable.name || !variable.name.value)
                continue;
            var variableName = variable.name.value;
            var variableProp = props[variableName];
            if (typeof variableProp !== 'undefined') {
                variables[variableName] = variableProp;
                continue;
            }
            if (type.kind !== 'NonNullType') {
                variables[variableName] = null;
                continue;
            }
            if (operation.type === DocumentType.Mutation)
                return;
            invariant$6(typeof variableProp !== 'undefined', "The operation '" + operation.name + "' wrapping '" + wrapperName + "' " +
                ("is expecting a variable: '" + variable.name.value + "' but it was not found in the props ") +
                ("passed to '" + graphQLDisplayName + "'"));
        }
        return variables;
    }
    var GraphQLBase = (function (_super) {
        __extends$4(GraphQLBase, _super);
        function GraphQLBase(props) {
            var _this = _super.call(this, props) || this;
            _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
            return _this;
        }
        GraphQLBase.prototype.getWrappedInstance = function () {
            invariant$6(this.withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } in the options");
            return this.wrappedInstance;
        };
        GraphQLBase.prototype.setWrappedInstance = function (ref) {
            this.wrappedInstance = ref;
        };
        return GraphQLBase;
    }(React.Component));

    var __extends$5 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$2 = (undefined && undefined.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
    var hoistNonReactStatics = __webpack_require__("./node_modules/hoist-non-react-statics/index.js");
    function query(document, operationOptions) {
        if (operationOptions === void 0) { operationOptions = {}; }
        var operation = parser(document);
        var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.skip, skip = _b === void 0 ? defaultMapPropsToSkip : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c;
        var mapPropsToOptions = options;
        if (typeof mapPropsToOptions !== 'function')
            mapPropsToOptions = function () { return options; };
        var mapPropsToSkip = skip;
        if (typeof mapPropsToSkip !== 'function')
            mapPropsToSkip = function () { return skip; };
        var lastResultProps;
        return function (WrappedComponent) {
            var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
            var GraphQL = (function (_super) {
                __extends$5(GraphQL, _super);
                function GraphQL() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                GraphQL.prototype.render = function () {
                    var _this = this;
                    var props = this.props;
                    var shouldSkip = mapPropsToSkip(props);
                    var opts = shouldSkip ? Object.create(null) : mapPropsToOptions(props);
                    if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                        opts.variables = calculateVariablesFromProps(operation, props, graphQLDisplayName, getDisplayName(WrappedComponent));
                    }
                    return (React.createElement(Query, __assign$2({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, query: document, warnUnhandledError: true }), function (_a) {
                        var _ = _a.client, data = _a.data, r = __rest$1(_a, ["client", "data"]);
                        if (operationOptions.withRef) {
                            _this.withRef = true;
                            props = Object.assign({}, props, {
                                ref: _this.setWrappedInstance,
                            });
                        }
                        if (shouldSkip)
                            return React.createElement(WrappedComponent, __assign$2({}, props));
                        var result = Object.assign(r, data || {});
                        var name = operationOptions.name || 'data';
                        var childProps = (_b = {}, _b[name] = result, _b);
                        if (operationOptions.props) {
                            var newResult = (_c = {},
                                _c[name] = result,
                                _c.ownProps = props,
                                _c);
                            lastResultProps = operationOptions.props(newResult, lastResultProps);
                            childProps = lastResultProps;
                        }
                        return React.createElement(WrappedComponent, __assign$2({}, props, childProps));
                        var _b, _c;
                    }));
                };
                GraphQL.displayName = graphQLDisplayName;
                GraphQL.WrappedComponent = WrappedComponent;
                return GraphQL;
            }(GraphQLBase));
            return hoistNonReactStatics(GraphQL, WrappedComponent, {});
        };
    }

    var __extends$6 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$3 = (undefined && undefined.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    var hoistNonReactStatics$1 = __webpack_require__("./node_modules/hoist-non-react-statics/index.js");
    function mutation(document, operationOptions) {
        if (operationOptions === void 0) { operationOptions = {}; }
        var operation = parser(document);
        var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.alias, alias = _b === void 0 ? 'Apollo' : _b;
        var mapPropsToOptions = options;
        if (typeof mapPropsToOptions !== 'function')
            mapPropsToOptions = function () { return options; };
        return function (WrappedComponent) {
            var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
            var GraphQL = (function (_super) {
                __extends$6(GraphQL, _super);
                function GraphQL() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                GraphQL.prototype.render = function () {
                    var props = this.props;
                    var opts = mapPropsToOptions(props);
                    if (operationOptions.withRef) {
                        this.withRef = true;
                        props = Object.assign({}, props, {
                            ref: this.setWrappedInstance,
                        });
                    }
                    if (!opts.variables && operation.variables.length > 0) {
                        opts.variables = calculateVariablesFromProps(operation, props, graphQLDisplayName, getDisplayName(WrappedComponent));
                    }
                    return (React.createElement(Mutation, __assign$3({}, opts, { mutation: document, ignoreResults: true }), function (mutate, _result) {
                        var name = operationOptions.name || 'mutate';
                        var childProps = (_a = {}, _a[name] = mutate, _a);
                        if (operationOptions.props) {
                            var newResult = (_b = {},
                                _b[name] = mutate,
                                _b.ownProps = props,
                                _b);
                            childProps = operationOptions.props(newResult);
                        }
                        return React.createElement(WrappedComponent, __assign$3({}, props, childProps));
                        var _a, _b;
                    }));
                };
                GraphQL.displayName = graphQLDisplayName;
                GraphQL.WrappedComponent = WrappedComponent;
                return GraphQL;
            }(GraphQLBase));
            return hoistNonReactStatics$1(GraphQL, WrappedComponent, {});
        };
    }

    var __extends$7 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$4 = (undefined && undefined.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    var __rest$2 = (undefined && undefined.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
    var hoistNonReactStatics$2 = __webpack_require__("./node_modules/hoist-non-react-statics/index.js");
    function subscribe(document, operationOptions) {
        if (operationOptions === void 0) { operationOptions = {}; }
        var operation = parser(document);
        var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.skip, skip = _b === void 0 ? defaultMapPropsToSkip : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c, shouldResubscribe = operationOptions.shouldResubscribe;
        var mapPropsToOptions = options;
        if (typeof mapPropsToOptions !== 'function')
            mapPropsToOptions = function () { return options; };
        var mapPropsToSkip = skip;
        if (typeof mapPropsToSkip !== 'function')
            mapPropsToSkip = function () { return skip; };
        var lastResultProps;
        return function (WrappedComponent) {
            var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
            var GraphQL = (function (_super) {
                __extends$7(GraphQL, _super);
                function GraphQL(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = { resubscribe: false };
                    return _this;
                }
                GraphQL.prototype.componentWillReceiveProps = function (nextProps) {
                    if (!shouldResubscribe)
                        return;
                    this.setState({
                        resubscribe: shouldResubscribe(this.props, nextProps),
                    });
                };
                GraphQL.prototype.render = function () {
                    var _this = this;
                    var props = this.props;
                    var shouldSkip = mapPropsToSkip(props);
                    var opts = shouldSkip ? Object.create(null) : mapPropsToOptions(props);
                    if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                        opts.variables = calculateVariablesFromProps(operation, props, graphQLDisplayName, getDisplayName(WrappedComponent));
                    }
                    return (React.createElement(Subscription, __assign$4({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, subscription: document, shouldResubscribe: this.state.resubscribe }), function (_a) {
                        var data = _a.data, r = __rest$2(_a, ["data"]);
                        if (operationOptions.withRef) {
                            _this.withRef = true;
                            props = Object.assign({}, props, {
                                ref: _this.setWrappedInstance,
                            });
                        }
                        if (shouldSkip)
                            return React.createElement(WrappedComponent, __assign$4({}, props));
                        var result = Object.assign(r, data || {});
                        var name = operationOptions.name || 'data';
                        var childProps = (_b = {}, _b[name] = result, _b);
                        if (operationOptions.props) {
                            var newResult = (_c = {},
                                _c[name] = result,
                                _c.ownProps = props,
                                _c);
                            lastResultProps = operationOptions.props(newResult, lastResultProps);
                            childProps = lastResultProps;
                        }
                        return React.createElement(WrappedComponent, __assign$4({}, props, childProps));
                        var _b, _c;
                    }));
                };
                GraphQL.displayName = graphQLDisplayName;
                GraphQL.WrappedComponent = WrappedComponent;
                return GraphQL;
            }(GraphQLBase));
            return hoistNonReactStatics$2(GraphQL, WrappedComponent, {});
        };
    }

    function graphql(document, operationOptions) {
        if (operationOptions === void 0) { operationOptions = {}; }
        switch (parser(document).type) {
            case DocumentType.Mutation:
                return mutation(document, operationOptions);
            case DocumentType.Subscription:
                return subscribe(document, operationOptions);
            case DocumentType.Query:
            default:
                return query(document, operationOptions);
        }
    }

    var __extends$8 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign$5 = (undefined && undefined.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    var invariant$7 = __webpack_require__("./node_modules/invariant/browser.js");
    var hoistNonReactStatics$3 = __webpack_require__("./node_modules/hoist-non-react-statics/index.js");
    function getDisplayName$1(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }
    function withApollo(WrappedComponent, operationOptions) {
        if (operationOptions === void 0) { operationOptions = {}; }
        var withDisplayName = "withApollo(" + getDisplayName$1(WrappedComponent) + ")";
        var WithApollo = (function (_super) {
            __extends$8(WithApollo, _super);
            function WithApollo(props) {
                var _this = _super.call(this, props) || this;
                _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
                return _this;
            }
            WithApollo.prototype.getWrappedInstance = function () {
                invariant$7(operationOptions.withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } in the options");
                return this.wrappedInstance;
            };
            WithApollo.prototype.setWrappedInstance = function (ref) {
                this.wrappedInstance = ref;
            };
            WithApollo.prototype.render = function () {
                var _this = this;
                return (React.createElement(ApolloConsumer, null, function (client) {
                    var props = Object.assign({}, _this.props, {
                        client: client,
                        ref: operationOptions.withRef ? _this.setWrappedInstance : undefined,
                    });
                    return React.createElement(WrappedComponent, __assign$5({}, props));
                }));
            };
            WithApollo.displayName = withDisplayName;
            WithApollo.WrappedComponent = WrappedComponent;
            return WithApollo;
        }(React.Component));
        return hoistNonReactStatics$3(WithApollo, WrappedComponent, {});
    }

    var compose = __webpack_require__("./node_modules/lodash/flowRight.js");

    exports.compose = compose;
    exports.getDataFromTree = getDataFromTree;
    exports.ApolloConsumer = ApolloConsumer;
    exports.ApolloProvider = ApolloProvider;
    exports.Query = Query;
    exports.Mutation = Mutation;
    exports.Subscription = Subscription;
    exports.graphql = graphql;
    exports.withApollo = withApollo;
    exports.walkTree = walkTree;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-apollo.browser.umd.js.map


/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_app__ = __webpack_require__("./node_modules/next/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_withApollo__ = __webpack_require__("./lib/withApollo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__("./index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_progressBar__ = __webpack_require__("./components/progressBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navigationLayout__ = __webpack_require__("./components/navigationLayout.js");
var _jsxFileName="/home/huyloc/code/rubyonrails/emt/client-emt/pages/_app.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var MyApp=/*#__PURE__*/function(_App){_inherits(MyApp,_App);function MyApp(){_classCallCheck(this,MyApp);return _possibleConstructorReturn(this,(MyApp.__proto__||Object.getPrototypeOf(MyApp)).apply(this,arguments));}_createClass(MyApp,[{key:"render",value:function render(){var _props=this.props,Component=_props.Component,pageProps=_props.pageProps,apolloClient=_props.apolloClient;var pathname=this.props.router.pathname;var currentPage=pathname;currentPage=currentPage==="/"?"projects":currentPage.replace("/","");return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_next_app__["Container"],{__source:{fileName:_jsxFileName,lineNumber:17}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["ApolloProvider"],{client:apolloClient,__source:{fileName:_jsxFileName,lineNumber:18}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__index__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:19}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_progressBar__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:20}},pathname==="/login"?__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component,_extends({},pageProps,{__source:{fileName:_jsxFileName,lineNumber:22}})):__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_navigationLayout__["a" /* default */],{currentPage:currentPage,__source:{fileName:_jsxFileName,lineNumber:24}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component,_extends({},pageProps,{__source:{fileName:_jsxFileName,lineNumber:25}})))))));}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return MyApp;}(__WEBPACK_IMPORTED_MODULE_0_next_app___default.a);var _default=Object(__WEBPACK_IMPORTED_MODULE_3__lib_withApollo__["a" /* default */])(MyApp);/* harmony default export */ __webpack_exports__["default"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(MyApp,"MyApp","/home/huyloc/code/rubyonrails/emt/client-emt/pages/_app.js");reactHotLoader.register(_default,"default","/home/huyloc/code/rubyonrails/emt/client-emt/pages/_app.js");leaveModule(module);})();;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=0.7cd30a6c37c2c28cbe98.hot-update.js.map