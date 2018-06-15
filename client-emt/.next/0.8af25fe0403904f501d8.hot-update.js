webpackHotUpdate(0,{

/***/ "./components/navigationLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_menu__ = __webpack_require__("./node_modules/antd/lib/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__ = __webpack_require__("./node_modules/antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__graphql_queries_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__topHeader__ = __webpack_require__("./components/topHeader.js");
var _jsxFileName="/home/huyloc/code/rubyonrails/emt/client-emt/components/navigationLayout.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}var Sider=__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a.Sider,Content=__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a.Content;var NavigationLayout=/*#__PURE__*/function(_React$Component){_inherits(NavigationLayout,_React$Component);function NavigationLayout(){var _ref;var _temp,_this;_classCallCheck(this,NavigationLayout);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _possibleConstructorReturn(_this,(_temp=_this=_possibleConstructorReturn(this,(_ref=NavigationLayout.__proto__||Object.getPrototypeOf(NavigationLayout)).call.apply(_ref,[this].concat(args))),Object.defineProperty(_assertThisInitialized(_this),"state",{configurable:true,enumerable:true,writable:true,value:{collapsed:false}}),Object.defineProperty(_assertThisInitialized(_this),"onCollapse",{configurable:true,enumerable:true,writable:true,value:function value(collapsed){console.log(collapsed);_this.setState({collapsed:collapsed});}}),_temp));}_createClass(NavigationLayout,[{key:"render",value:function render(){var _this2=this;var currentPage=this.props.router.pathname;currentPage=currentPage.includes("project")||currentPage==="/"?"projects":currentPage.replace("/","");return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a,{id:"navigation-layout",__source:{fileName:_jsxFileName,lineNumber:25}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__topHeader__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:26}}),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a,{__source:{fileName:_jsxFileName,lineNumber:28}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["Query"],{query:__WEBPACK_IMPORTED_MODULE_7__graphql_queries_gql__["getCurrentUser"],__source:{fileName:_jsxFileName,lineNumber:29}},function(_ref2){var loading=_ref2.loading,error=_ref2.error,data=_ref2.data;if(loading)return"Loading...";if(error)return"Error! ".concat(error.message);var currentUserSync=data.currentUser;return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Sider,{collapsible:true,collapsed:_this2.state.collapsed,onCollapse:_this2.onCollapse,style:{paddingTop:0,height:"110vh"},__source:{fileName:_jsxFileName,lineNumber:35}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a,{mode:"inline",theme:"dark",selectedKeys:[currentPage],__source:{fileName:_jsxFileName,lineNumber:41}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a.Item,{key:"projects",style:{marginTop:0},__source:{fileName:_jsxFileName,lineNumber:42}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a,{prefetch:true,href:"/",__source:{fileName:_jsxFileName,lineNumber:43}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:44}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a,{type:"folder-open",__source:{fileName:_jsxFileName,lineNumber:45}}),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:46}},"Projects")))),currentUserSync.role==="root_admin"&&__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a.Item,{key:"users",__source:{fileName:_jsxFileName,lineNumber:51}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a,{prefetch:true,href:"/users",__source:{fileName:_jsxFileName,lineNumber:52}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:53}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a,{type:"team",__source:{fileName:_jsxFileName,lineNumber:54}}),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:55}},"Users"))))));}),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Content,{style:{margin:"24px 16px",padding:24,background:"#fff",height:"100%"},__source:{fileName:_jsxFileName,lineNumber:65}},this.props.children)));}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return NavigationLayout;}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);var _default=Object(__WEBPACK_IMPORTED_MODULE_4_next_router__["withRouter"])(NavigationLayout);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(Sider,"Sider","/home/huyloc/code/rubyonrails/emt/client-emt/components/navigationLayout.js");reactHotLoader.register(Content,"Content","/home/huyloc/code/rubyonrails/emt/client-emt/components/navigationLayout.js");reactHotLoader.register(NavigationLayout,"NavigationLayout","/home/huyloc/code/rubyonrails/emt/client-emt/components/navigationLayout.js");reactHotLoader.register(_default,"default","/home/huyloc/code/rubyonrails/emt/client-emt/components/navigationLayout.js");leaveModule(module);})();;
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
});window.location.replace("/login");}}),_temp));}_createClass(TopHeader,[{key:"render",value:function render(){var menu=__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default.a,{className:"menu-dropdown",__source:{fileName:_jsxFileName,lineNumber:20}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default.a.Item,{key:"profile",__source:{fileName:_jsxFileName,lineNumber:21}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:22}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default.a,{type:"profile",__source:{fileName:_jsxFileName,lineNumber:23}})," Profile")),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default.a.Item,{key:"logout",__source:{fileName:_jsxFileName,lineNumber:26}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{onClick:this.signout,__source:{fileName:_jsxFileName,lineNumber:27}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default.a,{type:"logout",__source:{fileName:_jsxFileName,lineNumber:28}})," Sign out")));return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["Query"],{query:__WEBPACK_IMPORTED_MODULE_11__graphql_queries_gql__["getCurrentUser"],__source:{fileName:_jsxFileName,lineNumber:35}},function(_ref2){var loading=_ref2.loading,error=_ref2.error,data=_ref2.data;if(loading)return"Loading...";if(error)return"Error! ".concat(error.message);var currentUserSync=data.currentUser;return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Header,{style:{backgroundColor:"white",padding:0},className:"topHeader",__source:{fileName:_jsxFileName,lineNumber:41}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("style",{dangerouslySetInnerHTML:{__html:__WEBPACK_IMPORTED_MODULE_10__styles_topHeader_less___default.a},__source:{fileName:_jsxFileName,lineNumber:48}}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_dropdown___default.a,{overlay:menu,__source:{fileName:_jsxFileName,lineNumber:49}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"ant-dropdown-link user-dropdown",href:"#",__source:{fileName:_jsxFileName,lineNumber:50}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar___default.a,{src:"https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100",__source:{fileName:_jsxFileName,lineNumber:51}}))),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:54}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a,{prefetch:true,href:"/",__source:{fileName:_jsxFileName,lineNumber:55}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:56}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img",{src:"http://sv1.upsieutoc.com/2018/06/14/company_logo.jpg",className:"company-logo",__source:{fileName:_jsxFileName,lineNumber:57}})))));});}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return TopHeader;}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);var _default=Object(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["withApollo"])(TopHeader);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(Header,"Header","/home/huyloc/code/rubyonrails/emt/client-emt/components/topHeader.js");reactHotLoader.register(TopHeader,"TopHeader","/home/huyloc/code/rubyonrails/emt/client-emt/components/topHeader.js");reactHotLoader.register(_default,"default","/home/huyloc/code/rubyonrails/emt/client-emt/components/topHeader.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./graphql/queries.gql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUser"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllUsers"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectOfCurrentUser"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectsAsMemberOfCurrentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"projectsAsAdminOfCurrentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMembersByProjectId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":591}};
    doc.loc.source = {"body":"query getCurrentUser {\n  currentUser {\n    id\n    username\n    role\n  }\n}\n\nquery getAllUsers {\n  users {\n    id\n    username\n    email\n    createdAt\n  }\n}\n\nquery getProjectOfCurrentUser {\n  projectsAsMemberOfCurrentUser {\n    id\n    name\n    description\n  }\n  projectsAsAdminOfCurrentUser {\n    id\n    name\n    description\n  }\n}\n\nquery getMembersByProjectId($projectId: ID!) {\n  projectMembers(projectId: $projectId) {\n    id\n    role\n    user {\n      id\n      email\n      username\n      role\n    }\n  }\n}\n\nquery getProjectById($id: ID!) {\n  project(id: $id) {\n    name\n    description\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["getCurrentUser"] = oneQuery(doc, "getCurrentUser");
        
        module.exports["getAllUsers"] = oneQuery(doc, "getAllUsers");
        
        module.exports["getProjectOfCurrentUser"] = oneQuery(doc, "getProjectOfCurrentUser");
        
        module.exports["getMembersByProjectId"] = oneQuery(doc, "getMembersByProjectId");
        
        module.exports["getProjectById"] = oneQuery(doc, "getProjectById");
        


/***/ })

})
//# sourceMappingURL=0.8af25fe0403904f501d8.hot-update.js.map