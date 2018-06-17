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
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/navigationLayout.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}




var

Sider=__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a.Sider,Content=__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a.Content;var

NavigationLayout=/*#__PURE__*/function(_React$Component){_inherits(NavigationLayout,_React$Component);function NavigationLayout(){var _ref;var _temp,_this;_classCallCheck(this,NavigationLayout);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _possibleConstructorReturn(_this,(_temp=_this=_possibleConstructorReturn(this,(_ref=NavigationLayout.__proto__||Object.getPrototypeOf(NavigationLayout)).call.apply(_ref,[this].concat(args))),Object.defineProperty(_assertThisInitialized(_this),"state",{configurable:true,enumerable:true,writable:true,value:
{
collapsed:false}}),Object.defineProperty(_assertThisInitialized(_this),"onCollapse",{configurable:true,enumerable:true,writable:true,value:

function value(collapsed){
console.log(collapsed);
_this.setState({collapsed:collapsed});
}}),_temp));}_createClass(NavigationLayout,[{key:"render",value:function render()

{
var currentPage=this.props.router.pathname;
currentPage=
currentPage.includes('project')||currentPage==='/'?
'projects':
currentPage.replace('/','');
return(
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a,{id:"navigation-layout",__source:{fileName:_jsxFileName,lineNumber:26}},
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["ApolloConsumer"],{__source:{fileName:_jsxFileName,lineNumber:27}},
function(client){
var data=client.readQuery({
query:__WEBPACK_IMPORTED_MODULE_7__graphql_queries_gql__["getCurrentUser"]});

var currentUserSync=data.currentUser;
return(
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Sider,{
collapsed:false,
style:{paddingTop:0,height:'100vh',position:'fixed'},__source:{fileName:_jsxFileName,lineNumber:34}},

__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a,{mode:"inline",theme:"dark",selectedKeys:[currentPage],__source:{fileName:_jsxFileName,lineNumber:38}},
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a.Item,{key:"projects",style:{marginTop:0},__source:{fileName:_jsxFileName,lineNumber:39}},
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a,{prefetch:true,href:"/",__source:{fileName:_jsxFileName,lineNumber:40}},
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:41}},
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a,{type:"folder-open",__source:{fileName:_jsxFileName,lineNumber:42}}),
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:43}},"Projects")))),



currentUserSync.role==='root_admin'&&
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_menu___default.a.Item,{key:"users",__source:{fileName:_jsxFileName,lineNumber:48}},
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a,{prefetch:true,href:"/users",__source:{fileName:_jsxFileName,lineNumber:49}},
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:50}},
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a,{type:"team",__source:{fileName:_jsxFileName,lineNumber:51}}),
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:52}},"Users")))))));







}),

__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a,{style:{marginLeft:this.state.collapsed?0:120},__source:{fileName:_jsxFileName,lineNumber:62}},
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__topHeader__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:63}}),

__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Content,{
style:{
margin:'15px 16px 16px 100px',
padding:24,
background:'#fff',
minHeight:'100vh'},__source:{fileName:_jsxFileName,lineNumber:65}},


this.props.children))));




}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return NavigationLayout;}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);var _default=
Object(__WEBPACK_IMPORTED_MODULE_4_next_router__["withRouter"])(NavigationLayout);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(Sider,"Sider","/home/nenjamin2405/redpola/emt/client-emt/components/navigationLayout.js");reactHotLoader.register(Content,"Content","/home/nenjamin2405/redpola/emt/client-emt/components/navigationLayout.js");reactHotLoader.register(NavigationLayout,"NavigationLayout","/home/nenjamin2405/redpola/emt/client-emt/components/navigationLayout.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/components/navigationLayout.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/topHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_dropdown__ = __webpack_require__("./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_menu__ = __webpack_require__("./node_modules/antd/lib/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_list__ = __webpack_require__("./node_modules/antd/lib/list/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout__ = __webpack_require__("./node_modules/antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_cloudinary_react__ = __webpack_require__("./node_modules/cloudinary-react/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_cloudinary_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_cloudinary_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_cookie__ = __webpack_require__("./node_modules/cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_redirect__ = __webpack_require__("./lib/redirect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_topHeader_less__ = __webpack_require__("./styles/topHeader.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styles_topHeader_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__styles_topHeader_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__topHeader_ChangeAvatarModal__ = __webpack_require__("./components/topHeader/ChangeAvatarModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants__ = __webpack_require__("./constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__graphql_queries_gql__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/topHeader.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}








var

Header=__WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default.a.Header;var

TopHeader=/*#__PURE__*/function(_React$Component){_inherits(TopHeader,_React$Component);function TopHeader(){var _ref;var _temp,_this;_classCallCheck(this,TopHeader);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _possibleConstructorReturn(_this,(_temp=_this=_possibleConstructorReturn(this,(_ref=TopHeader.__proto__||Object.getPrototypeOf(TopHeader)).call.apply(_ref,[this].concat(args))),Object.defineProperty(_assertThisInitialized(_this),"signout",{configurable:true,enumerable:true,writable:true,value:
function value(){
document.cookie=__WEBPACK_IMPORTED_MODULE_9_cookie___default.a.serialize('token','',{
maxAge:-1// Expire the cookie immediately
});
window.location.replace('/login');
}}),_temp));}_createClass(TopHeader,[{key:"render",value:function render()

{var _this2=this;
return(
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["ApolloConsumer"],{__source:{fileName:_jsxFileName,lineNumber:24}},
function(client){
var data=client.readQuery({
query:__WEBPACK_IMPORTED_MODULE_14__graphql_queries_gql__["getCurrentUser"]});

var currentUserSync=data.currentUser;
var menu=
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default.a,{className:"menu-dropdown",__source:{fileName:_jsxFileName,lineNumber:31}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default.a.Item,{key:"user",__source:{fileName:_jsxFileName,lineNumber:32}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_list___default.a.Item.Meta,{
avatar:
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_cloudinary_react__["Image"],{
cloudName:__WEBPACK_IMPORTED_MODULE_13__constants__["CLOUD_NAME"],
publicId:currentUserSync.avatar,
width:"40",
crop:"scale",
style:{borderRadius:'50%'},__source:{fileName:_jsxFileName,lineNumber:35}}),


title:__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:43}},currentUserSync.username),
description:__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__topHeader_ChangeAvatarModal__["a" /* default */],{currentUserId:currentUserSync.id,__source:{fileName:_jsxFileName,lineNumber:44}}),__source:{fileName:_jsxFileName,lineNumber:33}})),


__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default.a.Divider,{__source:{fileName:_jsxFileName,lineNumber:47}}),
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default.a.Item,{key:"profile",__source:{fileName:_jsxFileName,lineNumber:48}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a,{prefetch:true,as:"/me/profile",href:"/profile",__source:{fileName:_jsxFileName,lineNumber:49}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:50}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a,{type:"profile",__source:{fileName:_jsxFileName,lineNumber:51}})," Profile"))),



__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_menu___default.a.Item,{key:"logout",__source:{fileName:_jsxFileName,lineNumber:55}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{onClick:_this2.signout,__source:{fileName:_jsxFileName,lineNumber:56}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a,{type:"logout",__source:{fileName:_jsxFileName,lineNumber:57}})," Sign out")));





return(
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Header,{
style:{
backgroundColor:'white',
padding:0},

className:"topHeader",__source:{fileName:_jsxFileName,lineNumber:64}},

__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("style",{dangerouslySetInnerHTML:{__html:__WEBPACK_IMPORTED_MODULE_11__styles_topHeader_less___default.a},__source:{fileName:_jsxFileName,lineNumber:71}}),
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_dropdown___default.a,{overlay:menu,__source:{fileName:_jsxFileName,lineNumber:72}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"ant-dropdown-link user-dropdown",href:"#",__source:{fileName:_jsxFileName,lineNumber:73}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_cloudinary_react__["Image"],{
cloudName:__WEBPACK_IMPORTED_MODULE_13__constants__["CLOUD_NAME"],
publicId:currentUserSync.avatar,
width:"40",
crop:"scale",
style:{borderRadius:'50%'},__source:{fileName:_jsxFileName,lineNumber:74}}))),



__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:83}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a,{prefetch:true,href:"/",__source:{fileName:_jsxFileName,lineNumber:84}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:85}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img",{
src:"http://sv1.upsieutoc.com/2018/06/14/company_logo.jpg",
className:"company-logo",__source:{fileName:_jsxFileName,lineNumber:86}}))))));






}));


}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return TopHeader;}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);var _default=
Object(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["withApollo"])(TopHeader);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(Header,"Header","/home/nenjamin2405/redpola/emt/client-emt/components/topHeader.js");reactHotLoader.register(TopHeader,"TopHeader","/home/nenjamin2405/redpola/emt/client-emt/components/topHeader.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/components/topHeader.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/topHeader/ChangeAvatarModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__ = __webpack_require__("./node_modules/antd/lib/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_upload__ = __webpack_require__("./node_modules/antd/lib/upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_spin__ = __webpack_require__("./node_modules/antd/lib/spin/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_spin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_spin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_message__ = __webpack_require__("./node_modules/antd/lib/message/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_cloudinary_react__ = __webpack_require__("./node_modules/cloudinary-react/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_cloudinary_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_cloudinary_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_mutations_gql__ = __webpack_require__("./graphql/mutations.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_mutations_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__graphql_mutations_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__graphql_queries_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants__ = __webpack_require__("./constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__styles_updateAvatar_less__ = __webpack_require__("./styles/updateAvatar.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__styles_updateAvatar_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__styles_updateAvatar_less__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/topHeader/ChangeAvatarModal.js";var _templateObject=/*#__PURE__*/_taggedTemplateLiteral(["\n            fragment myUser on User {\n              avatar\n            }\n          "]);(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _next(value){step("next",value);}function _throw(err){step("throw",err);}_next();});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}






var

ChangeAvatarModal=/*#__PURE__*/function(_React$Component){_inherits(ChangeAvatarModal,_React$Component);function ChangeAvatarModal(){var _ref;var _temp,_this;_classCallCheck(this,ChangeAvatarModal);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _possibleConstructorReturn(_this,(_temp=_this=_possibleConstructorReturn(this,(_ref=ChangeAvatarModal.__proto__||Object.getPrototypeOf(ChangeAvatarModal)).call.apply(_ref,[this].concat(args))),Object.defineProperty(_assertThisInitialized(_this),"state",{configurable:true,enumerable:true,writable:true,value:
{
visible:false,
loading:false}}),Object.defineProperty(_assertThisInitialized(_this),"beforeUpload",{configurable:true,enumerable:true,writable:true,value:

function value(file){
var isJPG=file.type==='image/jpeg'||'image/png';
if(!isJPG){
__WEBPACK_IMPORTED_MODULE_5_antd_lib_message___default.a.error('You can only upload JPG or PNG file!');
return false;
}
var isLt2M=file.size/1024/1024<2;
if(!isLt2M){
__WEBPACK_IMPORTED_MODULE_5_antd_lib_message___default.a.error('Image must smaller than 2MB!');
return false;
}
_this.startUpload(file);
return false;
}}),Object.defineProperty(_assertThisInitialized(_this),"startUpload",{configurable:true,enumerable:true,writable:true,value:function(){var _value=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default.a.mark(
function _callee(file){return __WEBPACK_IMPORTED_MODULE_4__babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:
_this.setState({loading:true});

_this.props.client.
mutate({
mutation:__WEBPACK_IMPORTED_MODULE_10__graphql_mutations_gql__["updateAvatar"],
variables:{
input:{
avatar:file}}}).



then(function(data){var
avatarUrl=data.data.updateAvatar.avatarUrl;

_this.props.client.writeFragment({
id:"User:".concat(_this.props.currentUserId),
fragment:__WEBPACK_IMPORTED_MODULE_8_graphql_tag___default()(_templateObject),




data:{
avatar:avatarUrl,
__typename:'User'}});



_this.setState({
loading:false});

});case 2:case"end":return _context.stop();}}},_callee,this);}));return function value(_x){return _value.apply(this,arguments);};}()}),Object.defineProperty(_assertThisInitialized(_this),"showModal",{configurable:true,enumerable:true,writable:true,value:

function value(){
_this.setState({
visible:true});

}}),Object.defineProperty(_assertThisInitialized(_this),"handleOk",{configurable:true,enumerable:true,writable:true,value:
function value(e){
console.log(e);
_this.setState({
visible:false});

}}),Object.defineProperty(_assertThisInitialized(_this),"handleCancel",{configurable:true,enumerable:true,writable:true,value:
function value(e){
console.log(e);
_this.setState({
visible:false});

}}),_temp));}_createClass(ChangeAvatarModal,[{key:"render",value:function render()
{var _this2=this;
return(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:81}},
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("a",{onClick:this.showModal,__source:{fileName:_jsxFileName,lineNumber:82}},"Change Avatar"),
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default.a,{
title:"Change Picture",
visible:this.state.visible,
footer:null,
onCancel:this.handleCancel,__source:{fileName:_jsxFileName,lineNumber:83}},

__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["ApolloConsumer"],{__source:{fileName:_jsxFileName,lineNumber:89}},
function(client){
var data=client.readQuery({
query:__WEBPACK_IMPORTED_MODULE_11__graphql_queries_gql__["getCurrentUser"]});var

currentUser=data.currentUser;
return(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div",{className:"upload-avatar-layout",__source:{fileName:_jsxFileName,lineNumber:96}},
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_upload___default.a,{
name:"avatar",
listType:"picture-card",
className:"avatar-uploader",
showUploadList:false,
beforeUpload:_this2.beforeUpload,__source:{fileName:_jsxFileName,lineNumber:97}},

__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("style",{dangerouslySetInnerHTML:{__html:__WEBPACK_IMPORTED_MODULE_13__styles_updateAvatar_less___default.a},__source:{fileName:_jsxFileName,lineNumber:104}}),
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_spin___default.a,{
spinning:_this2.state.loading,
style:{right:'0%'},
indicator:__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default.a,{type:"loading",style:{fontSize:24},spin:true,__source:{fileName:_jsxFileName,lineNumber:108}}),__source:{fileName:_jsxFileName,lineNumber:105}},

__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_cloudinary_react__["Image"],{
cloudName:__WEBPACK_IMPORTED_MODULE_12__constants__["CLOUD_NAME"],
publicId:currentUser.avatar,
width:"300",
crop:"scale",
style:{margin:'auto'},__source:{fileName:_jsxFileName,lineNumber:110}})))));





}))));




}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return ChangeAvatarModal;}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);var _default=
Object(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["withApollo"])(ChangeAvatarModal);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(ChangeAvatarModal,"ChangeAvatarModal","/home/nenjamin2405/redpola/emt/client-emt/components/topHeader/ChangeAvatarModal.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/components/topHeader/ChangeAvatarModal.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./graphql/mutations.gql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatedUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateAvatar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAvatarInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAvatar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addMemberToProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddMemberToProjectInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addMemberToProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addedMember"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[]}]}}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePasswordInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"passwordIsUpdated"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdProject"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateMemberRoleInProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMemberRoleInProjectInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMemberRoleInProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updated"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":1178}};
    doc.loc.source = {"body":"mutation loginUser($input: LoginInput!) {\n  loginUser(input: $input) {\n    token\n  }\n}\n\nmutation createUser($input: CreateUserInput!) {\n  createUser(input: $input) {\n    createdUser {\n      id\n      username\n      email\n      createdAt\n      avatar\n    }\n  }\n}\n\nmutation updateUserInfo($input: UpdateUserInput!) {\n  updateUser(input: $input) {\n    updatedUser {\n      id\n      username\n      email\n    }\n  }\n}\n\nmutation updateAvatar($input: UpdateAvatarInput!) {\n  updateAvatar(input: $input) {\n    avatarUrl\n  }\n}\nmutation addMemberToProject($input: AddMemberToProjectInput!) {\n  addMemberToProject(input: $input) {\n    addedMember {\n      id\n      role\n      user {\n        id\n        email\n        username\n        role\n        avatar\n      }\n    }\n  }\n}\n\nmutation updatePassword($input: UpdatePasswordInput!) {\n  updatePassword(input: $input) {\n    passwordIsUpdated\n  }\n}\n\nmutation createProject($input: CreateProjectInput!) {\n  createProject(input: $input) {\n    createdProject {\n      id\n      name\n      description\n    }\n  }\n}\n\nmutation updateMemberRoleInProject($input: UpdateMemberRoleInProjectInput!) {\n  updateMemberRoleInProject(input: $input) {\n    updated\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["loginUser"] = oneQuery(doc, "loginUser");
        
        module.exports["createUser"] = oneQuery(doc, "createUser");
        
        module.exports["updateUserInfo"] = oneQuery(doc, "updateUserInfo");
        
        module.exports["updateAvatar"] = oneQuery(doc, "updateAvatar");
        
        module.exports["addMemberToProject"] = oneQuery(doc, "addMemberToProject");
        
        module.exports["updatePassword"] = oneQuery(doc, "updatePassword");
        
        module.exports["createProject"] = oneQuery(doc, "createProject");
        
        module.exports["updateMemberRoleInProject"] = oneQuery(doc, "updateMemberRoleInProject");
        


/***/ }),

/***/ "./graphql/queries.gql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUser"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"usersSuggestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersSuggestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUserProfile"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"profile"},"name":{"kind":"Name","value":"currentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUserOnClient"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"arguments":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"},"arguments":[]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllUsers"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectOfCurrentUser"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectsAsMemberOfCurrentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"projectsAsAdminOfCurrentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMembersByProjectId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isManagedByCurrentUser"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":998}};
    doc.loc.source = {"body":"query getCurrentUser {\n  currentUser {\n    id\n    username\n    role\n    avatar\n  }\n}\n\nquery usersSuggestion($query: String!) {\n  usersSuggestion(query: $query) {\n    id\n    username\n    email\n    avatar\n  }\n}\n\nquery getCurrentUserProfile {\n  profile: currentUser {\n    id\n    username\n    email\n    role\n    avatar\n  }\n}\n\nquery getCurrentUserOnClient {\n  currentUser @client {\n    id\n    username\n    role\n    avatar\n  }\n}\n\nquery getAllUsers {\n  users {\n    avatar\n    id\n    username\n    email\n    createdAt\n  }\n}\n\nquery getProjectOfCurrentUser {\n  projectsAsMemberOfCurrentUser {\n    id\n    name\n    description\n  }\n  projectsAsAdminOfCurrentUser {\n    id\n    name\n    description\n  }\n}\n\nquery getMembersByProjectId($projectId: ID!) {\n  projectMembers(projectId: $projectId) {\n    id\n    role\n    user {\n      id\n      email\n      username\n      role\n      avatar\n    }\n  }\n}\n\nquery getProjectById($id: ID!) {\n  project(id: $id) {\n    id\n    name\n    description\n    isManagedByCurrentUser\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
        
        module.exports["usersSuggestion"] = oneQuery(doc, "usersSuggestion");
        
        module.exports["getCurrentUserProfile"] = oneQuery(doc, "getCurrentUserProfile");
        
        module.exports["getCurrentUserOnClient"] = oneQuery(doc, "getCurrentUserOnClient");
        
        module.exports["getAllUsers"] = oneQuery(doc, "getAllUsers");
        
        module.exports["getProjectOfCurrentUser"] = oneQuery(doc, "getProjectOfCurrentUser");
        
        module.exports["getMembersByProjectId"] = oneQuery(doc, "getMembersByProjectId");
        
        module.exports["getProjectById"] = oneQuery(doc, "getProjectById");
        


/***/ }),

/***/ "./lib/redirect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_router__);
(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();var _default=

function _default(context,target){
if(context.res){
// server
// 303: "See other"
context.res.writeHead(303,{Location:target});
context.res.end();
}else{
// In the browser, we just pretend like this never even happened ;)
__WEBPACK_IMPORTED_MODULE_0_next_router___default.a.replace(target);
}
};/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/lib/redirect.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/withApollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
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
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/lib/withApollo.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _next(value){step("next",value);}function _throw(err){step("throw",err);}_next();});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}







function parseCookies(req){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
return __WEBPACK_IMPORTED_MODULE_2_cookie___default.a.parse(
req?req.headers.cookie||'':document.cookie,
options);

}var _default=

function _default(App){var _class,_temp;
return _temp=_class=/*#__PURE__*/function(_React$Component){_inherits(WithData,_React$Component);_createClass(WithData,null,[{key:"getInitialProps",value:function(){var _getInitialProps=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(





ctx){var Component,router,_ctx$ctx,req,res,apollo,appProps,apolloState;return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:
Component=ctx.Component,router=ctx.router,_ctx$ctx=ctx.ctx,req=_ctx$ctx.req,res=_ctx$ctx.res;
apollo=Object(__WEBPACK_IMPORTED_MODULE_6__initApollo__["a" /* default */])({},{
getToken:function getToken(){return parseCookies(req).token;}});


ctx.ctx.apolloClient=apollo;

appProps={};if(!
App.getInitialProps){_context.next=8;break;}_context.next=7;return(
App.getInitialProps(ctx));case 7:appProps=_context.sent;case 8:if(!(


res&&res.finished)){_context.next=10;break;}return _context.abrupt("return",


{});case 10:_context.prev=10;_context.next=13;return(






Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["getDataFromTree"])(
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(App,_extends({},
appProps,{
Component:Component,
router:router,
apolloClient:apollo,__source:{fileName:_jsxFileName,lineNumber:47}}))));case 13:_context.next=18;break;case 15:_context.prev=15;_context.t0=_context["catch"](10);



// Prevent Apollo Client GraphQL errors from crashing SSR.
// Handle them in components via the data.error prop:
// http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
console.error('Error while running `getDataFromTree`',_context.t0);case 18:


if(!process.browser){
// getDataFromTree does not call componentWillUnmount
// head side effect therefore need to be cleared manually
__WEBPACK_IMPORTED_MODULE_5_next_head___default.a.rewind();
}

// Extract query data from the Apollo's store
apolloState=apollo.cache.extract();return _context.abrupt("return",_objectSpread({},


appProps,{
apolloState:apolloState}));case 21:case"end":return _context.stop();}}},_callee,this,[[10,15]]);}));return function getInitialProps(_x){return _getInitialProps.apply(this,arguments);};}()}]);



function WithData(props){var _this;_classCallCheck(this,WithData);
_this=_possibleConstructorReturn(this,(WithData.__proto__||Object.getPrototypeOf(WithData)).call(this,props));
// `getDataFromTree` renders the component first, the client is passed off as a property.
// After that rendering is done using Next's normal rendering pipeline
_this.apolloClient=Object(__WEBPACK_IMPORTED_MODULE_6__initApollo__["a" /* default */])(props.apolloState,{
getToken:function getToken(){return parseCookies().token;}});return _this;

}_createClass(WithData,[{key:"render",value:function render()

{
return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(App,_extends({},this.props,{apolloClient:this.apolloClient,__source:{fileName:_jsxFileName,lineNumber:86}}));
}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return WithData;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component),Object.defineProperty(_class,"displayName",{configurable:true,enumerable:true,writable:true,value:"WithData(".concat(App.displayName,")")}),Object.defineProperty(_class,"propTypes",{configurable:true,enumerable:true,writable:true,value:{apolloState:__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired}}),_temp;};/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(parseCookies,"parseCookies","/home/nenjamin2405/redpola/emt/client-emt/lib/withApollo.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/lib/withApollo.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/antd/lib/dropdown/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdown = __webpack_require__("./node_modules/antd/lib/dropdown/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _dropdownButton = __webpack_require__("./node_modules/antd/lib/dropdown/dropdown-button.js");

var _dropdownButton2 = _interopRequireDefault(_dropdownButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_dropdown2['default'].Button = _dropdownButton2['default'];
exports['default'] = _dropdown2['default'];
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/menu/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _rcMenu = __webpack_require__("./node_modules/rc-menu/es/index.js");

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _openAnimation = __webpack_require__("./node_modules/antd/lib/_util/openAnimation.js");

var _openAnimation2 = _interopRequireDefault(_openAnimation);

var _warning = __webpack_require__("./node_modules/antd/lib/_util/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _SubMenu = __webpack_require__("./node_modules/antd/lib/menu/SubMenu.js");

var _SubMenu2 = _interopRequireDefault(_SubMenu);

var _MenuItem = __webpack_require__("./node_modules/antd/lib/menu/MenuItem.js");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Menu = function (_React$Component) {
    (0, _inherits3['default'])(Menu, _React$Component);

    function Menu(props) {
        (0, _classCallCheck3['default'])(this, Menu);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.inlineOpenKeys = [];
        _this.handleClick = function (e) {
            _this.handleOpenChange([]);
            var onClick = _this.props.onClick;

            if (onClick) {
                onClick(e);
            }
        };
        _this.handleOpenChange = function (openKeys) {
            _this.setOpenKeys(openKeys);
            var onOpenChange = _this.props.onOpenChange;

            if (onOpenChange) {
                onOpenChange(openKeys);
            }
        };
        (0, _warning2['default'])(!('onOpen' in props || 'onClose' in props), '`onOpen` and `onClose` are removed, please use `onOpenChange` instead, ' + 'see: https://u.ant.design/menu-on-open-change.');
        (0, _warning2['default'])(!('inlineCollapsed' in props && props.mode !== 'inline'), '`inlineCollapsed` should only be used when Menu\'s `mode` is inline.');
        var openKeys = void 0;
        if ('defaultOpenKeys' in props) {
            openKeys = props.defaultOpenKeys;
        } else if ('openKeys' in props) {
            openKeys = props.openKeys;
        }
        _this.state = {
            openKeys: openKeys || []
        };
        return _this;
    }

    (0, _createClass3['default'])(Menu, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                inlineCollapsed: this.getInlineCollapsed(),
                antdMenuTheme: this.props.theme
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextContext) {
            var prefixCls = this.props.prefixCls;

            if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
                this.switchModeFromInline = true;
            }
            if ('openKeys' in nextProps) {
                this.setState({ openKeys: nextProps.openKeys });
                return;
            }
            if (nextProps.inlineCollapsed && !this.props.inlineCollapsed || nextContext.siderCollapsed && !this.context.siderCollapsed) {
                var menuNode = (0, _reactDom.findDOMNode)(this);
                this.switchModeFromInline = !!this.state.openKeys.length && !!menuNode.querySelectorAll('.' + prefixCls + '-submenu-open').length;
                this.inlineOpenKeys = this.state.openKeys;
                this.setState({ openKeys: [] });
            }
            if (!nextProps.inlineCollapsed && this.props.inlineCollapsed || !nextContext.siderCollapsed && this.context.siderCollapsed) {
                this.setState({ openKeys: this.inlineOpenKeys });
                this.inlineOpenKeys = [];
            }
        }
    }, {
        key: 'setOpenKeys',
        value: function setOpenKeys(openKeys) {
            if (!('openKeys' in this.props)) {
                this.setState({ openKeys: openKeys });
            }
        }
    }, {
        key: 'getRealMenuMode',
        value: function getRealMenuMode() {
            var inlineCollapsed = this.getInlineCollapsed();
            if (this.switchModeFromInline && inlineCollapsed) {
                return 'inline';
            }
            var mode = this.props.mode;

            return inlineCollapsed ? 'vertical' : mode;
        }
    }, {
        key: 'getInlineCollapsed',
        value: function getInlineCollapsed() {
            var inlineCollapsed = this.props.inlineCollapsed;

            if (this.context.siderCollapsed !== undefined) {
                return this.context.siderCollapsed;
            }
            return inlineCollapsed;
        }
    }, {
        key: 'getMenuOpenAnimation',
        value: function getMenuOpenAnimation(menuMode) {
            var _this2 = this;

            var _props = this.props,
                openAnimation = _props.openAnimation,
                openTransitionName = _props.openTransitionName;

            var menuOpenAnimation = openAnimation || openTransitionName;
            if (openAnimation === undefined && openTransitionName === undefined) {
                switch (menuMode) {
                    case 'horizontal':
                        menuOpenAnimation = 'slide-up';
                        break;
                    case 'vertical':
                    case 'vertical-left':
                    case 'vertical-right':
                        // When mode switch from inline
                        // submenu should hide without animation
                        if (this.switchModeFromInline) {
                            menuOpenAnimation = '';
                            this.switchModeFromInline = false;
                        } else {
                            menuOpenAnimation = 'zoom-big';
                        }
                        break;
                    case 'inline':
                        menuOpenAnimation = (0, _extends3['default'])({}, _openAnimation2['default'], { leave: function leave(node, done) {
                                return _openAnimation2['default'].leave(node, function () {
                                    // Make sure inline menu leave animation finished before mode is switched
                                    _this2.switchModeFromInline = false;
                                    _this2.setState({});
                                    // when inlineCollapsed change false to true, all submenu will be unmounted,
                                    // so that we don't need handle animation leaving.
                                    if (_this2.getRealMenuMode() === 'vertical') {
                                        return;
                                    }
                                    done();
                                });
                            } });
                        break;
                    default:
                }
            }
            return menuOpenAnimation;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                className = _props2.className,
                theme = _props2.theme;

            var menuMode = this.getRealMenuMode();
            var menuOpenAnimation = this.getMenuOpenAnimation(menuMode);
            var menuClassName = (0, _classnames2['default'])(className, prefixCls + '-' + theme, (0, _defineProperty3['default'])({}, prefixCls + '-inline-collapsed', this.getInlineCollapsed()));
            var menuProps = {
                openKeys: this.state.openKeys,
                onOpenChange: this.handleOpenChange,
                className: menuClassName,
                mode: menuMode
            };
            if (menuMode !== 'inline') {
                // closing vertical popup submenu after click it
                menuProps.onClick = this.handleClick;
                menuProps.openTransitionName = menuOpenAnimation;
            } else {
                menuProps.openAnimation = menuOpenAnimation;
            }
            // https://github.com/ant-design/ant-design/issues/8587
            var collapsedWidth = this.context.collapsedWidth;

            if (this.getInlineCollapsed() && (collapsedWidth === 0 || collapsedWidth === '0' || collapsedWidth === '0px')) {
                return null;
            }
            return React.createElement(_rcMenu2['default'], (0, _extends3['default'])({}, this.props, menuProps));
        }
    }]);
    return Menu;
}(React.Component);

exports['default'] = Menu;

Menu.Divider = _rcMenu.Divider;
Menu.Item = _MenuItem2['default'];
Menu.SubMenu = _SubMenu2['default'];
Menu.ItemGroup = _rcMenu.ItemGroup;
Menu.defaultProps = {
    prefixCls: 'ant-menu',
    className: '',
    theme: 'light',
    focusable: false
};
Menu.childContextTypes = {
    inlineCollapsed: _propTypes2['default'].bool,
    antdMenuTheme: _propTypes2['default'].string
};
Menu.contextTypes = {
    siderCollapsed: _propTypes2['default'].bool,
    collapsedWidth: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string])
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "./node_modules/dom-scroll-into-view/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("./node_modules/dom-scroll-into-view/lib/dom-scroll-into-view.js");

/***/ }),

/***/ "./node_modules/rc-menu/es/Menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mini_store__ = __webpack_require__("./node_modules/mini-store/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SubPopupMenu__ = __webpack_require__("./node_modules/rc-menu/es/SubPopupMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util__ = __webpack_require__("./node_modules/rc-menu/es/util.js");











var Menu = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Menu, _React$Component);

  function Menu(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Menu);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.isRootMenu = true;

    var selectedKeys = props.defaultSelectedKeys;
    var openKeys = props.defaultOpenKeys;
    if ('selectedKeys' in props) {
      selectedKeys = props.selectedKeys || [];
    }
    if ('openKeys' in props) {
      openKeys = props.openKeys || [];
    }

    _this.store = Object(__WEBPACK_IMPORTED_MODULE_7_mini_store__["create"])({
      selectedKeys: selectedKeys,
      openKeys: openKeys,
      activeKey: { '0-menu-': Object(__WEBPACK_IMPORTED_MODULE_8__SubPopupMenu__["b" /* getActiveKey */])(props, props.activeKey) }
    });
    return _this;
  }

  Menu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('selectedKeys' in nextProps) {
      this.store.setState({
        selectedKeys: nextProps.selectedKeys || []
      });
    }
    if ('openKeys' in nextProps) {
      this.store.setState({
        openKeys: nextProps.openKeys || []
      });
    }
  };

  // onKeyDown needs to be exposed as a instance method
  // e.g., in rc-select, we need to navigate menu item while
  // current active item is rc-select input box rather than the menu itself


  Menu.prototype.render = function render() {
    var _this2 = this;

    var props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(this.props, []);

    props.className += ' ' + props.prefixCls + '-root';
    props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
      onClick: this.onClick,
      onOpenChange: this.onOpenChange,
      onDeselect: this.onDeselect,
      onSelect: this.onSelect,
      openTransitionName: this.getOpenTransitionName(),
      parentMenu: this
    });
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_7_mini_store__["Provider"],
      { store: this.store },
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8__SubPopupMenu__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { ref: function ref(c) {
            return _this2.innerMenu = c;
          } }),
        this.props.children
      )
    );
  };

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Menu.propTypes = {
  defaultSelectedKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  defaultActiveFirst: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  selectedKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  defaultOpenKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  openKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  mode: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
  getPopupContainer: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onDeselect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onDestroy: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  openTransitionName: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  openAnimation: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object]),
  subMenuOpenDelay: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  subMenuCloseDelay: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  forceSubMenuRender: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  triggerSubMenuAction: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  level: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  selectable: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  multiple: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  className: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  activeKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  prefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string
};
Menu.defaultProps = {
  selectable: true,
  onClick: __WEBPACK_IMPORTED_MODULE_9__util__["f" /* noop */],
  onSelect: __WEBPACK_IMPORTED_MODULE_9__util__["f" /* noop */],
  onOpenChange: __WEBPACK_IMPORTED_MODULE_9__util__["f" /* noop */],
  onDeselect: __WEBPACK_IMPORTED_MODULE_9__util__["f" /* noop */],
  defaultSelectedKeys: [],
  defaultOpenKeys: [],
  subMenuOpenDelay: 0.1,
  subMenuCloseDelay: 0.1,
  triggerSubMenuAction: 'hover',
  prefixCls: 'rc-menu',
  className: '',
  mode: 'vertical',
  style: {}
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onSelect = function (selectInfo) {
    var props = _this3.props;
    if (props.selectable) {
      // root menu
      var selectedKeys = _this3.store.getState().selectedKeys;
      var selectedKey = selectInfo.key;
      if (props.multiple) {
        selectedKeys = selectedKeys.concat([selectedKey]);
      } else {
        selectedKeys = [selectedKey];
      }
      if (!('selectedKeys' in props)) {
        _this3.store.setState({
          selectedKeys: selectedKeys
        });
      }
      props.onSelect(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, selectInfo, {
        selectedKeys: selectedKeys
      }));
    }
  };

  this.onClick = function (e) {
    _this3.props.onClick(e);
  };

  this.onKeyDown = function (e, callback) {
    _this3.innerMenu.getWrappedInstance().onKeyDown(e, callback);
  };

  this.onOpenChange = function (event) {
    var props = _this3.props;
    var openKeys = _this3.store.getState().openKeys.concat();
    var changed = false;
    var processSingle = function processSingle(e) {
      var oneChanged = false;
      if (e.open) {
        oneChanged = openKeys.indexOf(e.key) === -1;
        if (oneChanged) {
          openKeys.push(e.key);
        }
      } else {
        var index = openKeys.indexOf(e.key);
        oneChanged = index !== -1;
        if (oneChanged) {
          openKeys.splice(index, 1);
        }
      }
      changed = changed || oneChanged;
    };
    if (Array.isArray(event)) {
      // batch change call
      event.forEach(processSingle);
    } else {
      processSingle(event);
    }
    if (changed) {
      if (!('openKeys' in _this3.props)) {
        _this3.store.setState({ openKeys: openKeys });
      }
      props.onOpenChange(openKeys);
    }
  };

  this.onDeselect = function (selectInfo) {
    var props = _this3.props;
    if (props.selectable) {
      var selectedKeys = _this3.store.getState().selectedKeys.concat();
      var selectedKey = selectInfo.key;
      var index = selectedKeys.indexOf(selectedKey);
      if (index !== -1) {
        selectedKeys.splice(index, 1);
      }
      if (!('selectedKeys' in props)) {
        _this3.store.setState({
          selectedKeys: selectedKeys
        });
      }
      props.onDeselect(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, selectInfo, {
        selectedKeys: selectedKeys
      }));
    }
  };

  this.getOpenTransitionName = function () {
    var props = _this3.props;
    var transitionName = props.openTransitionName;
    var animationName = props.openAnimation;
    if (!transitionName && typeof animationName === 'string') {
      transitionName = props.prefixCls + '-open-' + animationName;
    }
    return transitionName;
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

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

/***/ "./node_modules/rc-menu/es/MenuItemGroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util__ = __webpack_require__("./node_modules/rc-menu/es/util.js");









var MenuItemGroup = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(MenuItemGroup, _React$Component);

  function MenuItemGroup() {
    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, MenuItemGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderInnerMenuItem = function (item) {
      var _this$props = _this.props,
          renderMenuItem = _this$props.renderMenuItem,
          index = _this$props.index;

      return renderMenuItem(item, index, _this.props.subMenuKey);
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  MenuItemGroup.prototype.render = function render() {
    var props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(this.props, []);

    var _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        rootPrefixCls = props.rootPrefixCls;

    var titleClassName = rootPrefixCls + '-item-group-title';
    var listClassName = rootPrefixCls + '-item-group-list';
    var title = props.title,
        children = props.children;

    __WEBPACK_IMPORTED_MODULE_7__util__["e" /* menuAllProps */].forEach(function (key) {
      return delete props[key];
    });

    // Set onClick to null, to ignore propagated onClick event
    delete props.onClick;

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      'li',
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { className: className + ' ' + rootPrefixCls + '-item-group' }),
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        {
          className: titleClassName,
          title: typeof title === 'string' ? title : undefined
        },
        title
      ),
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'ul',
        { className: listClassName },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.map(children, this.renderInnerMenuItem)
      )
    );
  };

  return MenuItemGroup;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

MenuItemGroup.propTypes = {
  renderMenuItem: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  index: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  className: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  subMenuKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  rootPrefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string
};
MenuItemGroup.defaultProps = {
  disabled: true
};


MenuItemGroup.isMenuItemGroup = true;

/* harmony default export */ __webpack_exports__["a"] = (MenuItemGroup);

/***/ }),

/***/ "./node_modules/rc-menu/es/SubPopupMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getActiveKey;
/* unused harmony export saveRef */
/* unused harmony export SubPopupMenu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mini_store__ = __webpack_require__("./node_modules/mini-store/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rc_util_es_KeyCode__ = __webpack_require__("./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rc_util_es_createChainedFunction__ = __webpack_require__("./node_modules/rc-util/es/createChainedFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util__ = __webpack_require__("./node_modules/rc-menu/es/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__DOMWrap__ = __webpack_require__("./node_modules/rc-menu/es/DOMWrap.js");














function allDisabled(arr) {
  if (!arr.length) {
    return true;
  }
  return arr.every(function (c) {
    return !!c.props.disabled;
  });
}

function updateActiveKey(store, menuId, activeKey) {
  var _extends2;

  var state = store.getState();
  store.setState({
    activeKey: __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, state.activeKey, (_extends2 = {}, _extends2[menuId] = activeKey, _extends2))
  });
}

function getActiveKey(props, originalActiveKey) {
  var activeKey = originalActiveKey;
  var children = props.children,
      eventKey = props.eventKey;

  if (activeKey) {
    var found = void 0;
    Object(__WEBPACK_IMPORTED_MODULE_11__util__["c" /* loopMenuItem */])(children, function (c, i) {
      if (c && !c.props.disabled && activeKey === Object(__WEBPACK_IMPORTED_MODULE_11__util__["a" /* getKeyFromChildrenIndex */])(c, eventKey, i)) {
        found = true;
      }
    });
    if (found) {
      return activeKey;
    }
  }
  activeKey = null;
  if (props.defaultActiveFirst) {
    Object(__WEBPACK_IMPORTED_MODULE_11__util__["c" /* loopMenuItem */])(children, function (c, i) {
      if (!activeKey && c && !c.props.disabled) {
        activeKey = Object(__WEBPACK_IMPORTED_MODULE_11__util__["a" /* getKeyFromChildrenIndex */])(c, eventKey, i);
      }
    });
    return activeKey;
  }
  return activeKey;
}

function saveRef(c) {
  if (c) {
    var index = this.instanceArray.indexOf(c);
    if (index !== -1) {
      // update component if it's already inside instanceArray
      this.instanceArray[index] = c;
    } else {
      // add component if it's not in instanceArray yet;
      this.instanceArray.push(c);
    }
  }
}

var SubPopupMenu = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(SubPopupMenu, _React$Component);

  function SubPopupMenu(props) {
    var _extends3;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, SubPopupMenu);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    props.store.setState({
      activeKey: __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, props.store.getState().activeKey, (_extends3 = {}, _extends3[props.eventKey] = getActiveKey(props, props.activeKey), _extends3))
    });
    return _this;
  }

  SubPopupMenu.prototype.componentWillMount = function componentWillMount() {
    this.instanceArray = [];
  };

  SubPopupMenu.prototype.componentDidMount = function componentDidMount() {
    // invoke customized ref to expose component to mixin
    if (this.props.manualRef) {
      this.props.manualRef(this);
    }
  };

  SubPopupMenu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var originalActiveKey = 'activeKey' in nextProps ? nextProps.activeKey : this.getStore().getState().activeKey[this.getEventKey()];
    var activeKey = getActiveKey(nextProps, originalActiveKey);
    if (activeKey !== originalActiveKey) {
      updateActiveKey(this.getStore(), this.getEventKey(), activeKey);
    }
  };

  SubPopupMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.visible || nextProps.visible;
  };

  // all keyboard events callbacks run from here at first


  SubPopupMenu.prototype.render = function render() {
    var _this2 = this;

    var props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(this.props, []);

    this.instanceArray = [];
    var className = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(props.prefixCls, props.className, props.prefixCls + '-' + props.mode);
    var domProps = {
      className: className,
      // role could be 'select' and by default set to menu
      role: props.role || 'menu'
    };
    if (props.id) {
      domProps.id = props.id;
    }
    if (props.focusable) {
      domProps.tabIndex = '0';
      domProps.onKeyDown = this.onKeyDown;
    }
    var prefixCls = props.prefixCls,
        eventKey = props.eventKey,
        visible = props.visible;

    __WEBPACK_IMPORTED_MODULE_11__util__["e" /* menuAllProps */].forEach(function (key) {
      return delete props[key];
    });

    // Otherwise, the propagated click event will trigger another onClick
    delete props.onClick;
    return (
      // ESLint is not smart enough to know that the type of `children` was checked.
      /* eslint-disable */
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_12__DOMWrap__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, props, {
          tag: 'ul',
          hiddenClassName: prefixCls + '-hidden',
          visible: visible
        }, domProps),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.map(props.children, function (c, i) {
          return _this2.renderMenuItem(c, i, eventKey || '0-menu-');
        })
      )
      /*eslint-enable */

    );
  };

  return SubPopupMenu;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

SubPopupMenu.propTypes = {
  onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onDeselect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onOpenChange: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onDestroy: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  openTransitionName: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  openAnimation: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object]),
  openKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  visible: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  parentMenu: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  eventKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  store: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
    getState: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
    setState: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
  }),

  // adding in refactor
  focusable: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  multiple: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  style: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  defaultActiveFirst: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  activeKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  selectedKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  defaultSelectedKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  defaultOpenKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  level: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  mode: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
  triggerSubMenuAction: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['click', 'hover']),
  inlineIndent: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string]),
  manualRef: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
};
SubPopupMenu.defaultProps = {
  prefixCls: 'rc-menu',
  className: '',
  mode: 'vertical',
  level: 1,
  inlineIndent: 24,
  visible: true,
  focusable: true,
  style: {},
  manualRef: __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */]
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onKeyDown = function (e, callback) {
    var keyCode = e.keyCode;
    var handled = void 0;
    _this3.getFlatInstanceArray().forEach(function (obj) {
      if (obj && obj.props.active && obj.onKeyDown) {
        handled = obj.onKeyDown(e);
      }
    });
    if (handled) {
      return 1;
    }
    var activeItem = null;
    if (keyCode === __WEBPACK_IMPORTED_MODULE_8_rc_util_es_KeyCode__["a" /* default */].UP || keyCode === __WEBPACK_IMPORTED_MODULE_8_rc_util_es_KeyCode__["a" /* default */].DOWN) {
      activeItem = _this3.step(keyCode === __WEBPACK_IMPORTED_MODULE_8_rc_util_es_KeyCode__["a" /* default */].UP ? -1 : 1);
    }
    if (activeItem) {
      e.preventDefault();
      updateActiveKey(_this3.getStore(), _this3.getEventKey(), activeItem.props.eventKey);

      if (typeof callback === 'function') {
        callback(activeItem);
      }

      return 1;
    }
  };

  this.onItemHover = function (e) {
    var key = e.key,
        hover = e.hover;

    updateActiveKey(_this3.getStore(), _this3.getEventKey(), hover ? key : null);
  };

  this.onDeselect = function (selectInfo) {
    _this3.props.onDeselect(selectInfo);
  };

  this.onSelect = function (selectInfo) {
    _this3.props.onSelect(selectInfo);
  };

  this.onClick = function (e) {
    _this3.props.onClick(e);
  };

  this.onOpenChange = function (e) {
    _this3.props.onOpenChange(e);
  };

  this.onDestroy = function (key) {
    /* istanbul ignore next */
    _this3.props.onDestroy(key);
  };

  this.getFlatInstanceArray = function () {
    return _this3.instanceArray;
  };

  this.getStore = function () {
    return _this3.props.store;
  };

  this.getEventKey = function () {
    // when eventKey not available ,it's menu and return menu id '0-menu-'
    return _this3.props.eventKey || '0-menu-';
  };

  this.getOpenTransitionName = function () {
    return _this3.props.openTransitionName;
  };

  this.step = function (direction) {
    var children = _this3.getFlatInstanceArray();
    var activeKey = _this3.getStore().getState().activeKey[_this3.getEventKey()];
    var len = children.length;
    if (!len) {
      return null;
    }
    if (direction < 0) {
      children = children.concat().reverse();
    }
    // find current activeIndex
    var activeIndex = -1;
    children.every(function (c, ci) {
      if (c && c.props.eventKey === activeKey) {
        activeIndex = ci;
        return false;
      }
      return true;
    });
    if (!_this3.props.defaultActiveFirst && activeIndex !== -1 && allDisabled(children.slice(activeIndex, len - 1))) {
      return undefined;
    }
    var start = (activeIndex + 1) % len;
    var i = start;

    do {
      var child = children[i];
      if (!child || child.props.disabled) {
        i = (i + 1) % len;
      } else {
        return child;
      }
    } while (i !== start);

    return null;
  };

  this.renderCommonMenuItem = function (child, i, extraProps) {
    var state = _this3.getStore().getState();
    var props = _this3.props;
    var key = Object(__WEBPACK_IMPORTED_MODULE_11__util__["a" /* getKeyFromChildrenIndex */])(child, props.eventKey, i);
    var childProps = child.props;
    var isActive = key === state.activeKey;
    var newChildProps = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({
      mode: props.mode,
      level: props.level,
      inlineIndent: props.inlineIndent,
      renderMenuItem: _this3.renderMenuItem,
      rootPrefixCls: props.prefixCls,
      index: i,
      parentMenu: props.parentMenu,
      // customized ref function, need to be invoked manually in child's componentDidMount
      manualRef: childProps.disabled ? undefined : Object(__WEBPACK_IMPORTED_MODULE_9_rc_util_es_createChainedFunction__["a" /* default */])(child.ref, saveRef.bind(_this3)),
      eventKey: key,
      active: !childProps.disabled && isActive,
      multiple: props.multiple,
      onClick: function onClick(e) {
        (childProps.onClick || __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */])(e);
        _this3.onClick(e);
      },
      onItemHover: _this3.onItemHover,
      openTransitionName: _this3.getOpenTransitionName(),
      openAnimation: props.openAnimation,
      subMenuOpenDelay: props.subMenuOpenDelay,
      subMenuCloseDelay: props.subMenuCloseDelay,
      forceSubMenuRender: props.forceSubMenuRender,
      onOpenChange: _this3.onOpenChange,
      onDeselect: _this3.onDeselect,
      onSelect: _this3.onSelect
    }, extraProps);
    if (props.mode === 'inline') {
      newChildProps.triggerSubMenuAction = 'click';
    }
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(child, newChildProps);
  };

  this.renderMenuItem = function (c, i, subMenuKey) {
    /* istanbul ignore if */
    if (!c) {
      return null;
    }
    var state = _this3.getStore().getState();
    var extraProps = {
      openKeys: state.openKeys,
      selectedKeys: state.selectedKeys,
      triggerSubMenuAction: _this3.props.triggerSubMenuAction,
      subMenuKey: subMenuKey
    };
    return _this3.renderCommonMenuItem(c, i, extraProps);
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7_mini_store__["connect"])()(SubPopupMenu));

/***/ }),

/***/ "./node_modules/rc-notification/es/Notification.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom__ = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_animate__ = __webpack_require__("./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rc_util_es_createChainedFunction__ = __webpack_require__("./node_modules/rc-util/es/createChainedFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Notice__ = __webpack_require__("./node_modules/rc-notification/es/Notice.js");















var seed = 0;
var now = Date.now();

function getUuid() {
  return 'rcNotification_' + now + '_' + seed++;
}

var Notification = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      notices: []
    }, _this.add = function (notice) {
      var key = notice.key = notice.key || getUuid();
      var maxCount = _this.props.maxCount;

      _this.setState(function (previousState) {
        var notices = previousState.notices;
        var noticeIndex = notices.map(function (v) {
          return v.key;
        }).indexOf(key);
        var updatedNotices = notices.concat();
        if (noticeIndex !== -1) {
          updatedNotices.splice(noticeIndex, 1, notice);
        } else {
          if (maxCount && notices.length >= maxCount) {
                                                notice.updateKey = updatedNotices[0].updateKey || updatedNotices[0].key;
            updatedNotices.shift();
          }
          updatedNotices.push(notice);
        }
        return {
          notices: updatedNotices
        };
      });
    }, _this.remove = function (key) {
      _this.setState(function (previousState) {
        return {
          notices: previousState.notices.filter(function (notice) {
            return notice.key !== key;
          })
        };
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Notification, [{
    key: 'getTransitionName',
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = props.prefixCls + '-' + props.animation;
      }
      return transitionName;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _className;

      var props = this.props;
      var notices = this.state.notices;

      var noticeNodes = notices.map(function (notice, index) {
        var update = Boolean(index === notices.length - 1 && notice.updateKey);
        var key = notice.updateKey ? notice.updateKey : notice.key;
        var onClose = Object(__WEBPACK_IMPORTED_MODULE_11_rc_util_es_createChainedFunction__["a" /* default */])(_this2.remove.bind(_this2, notice.key), notice.onClose);
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_13__Notice__["a" /* default */],
          __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
            prefixCls: props.prefixCls
          }, notice, {
            key: key,
            update: update,
            onClose: onClose
          }),
          notice.content
        );
      });
      var className = (_className = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_className, props.prefixCls, 1), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_className, props.className, !!props.className), _className);
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_12_classnames___default()(className), style: props.style },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10_rc_animate__["default"],
          { transitionName: this.getTransitionName() },
          noticeNodes
        )
      );
    }
  }]);

  return Notification;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Notification.propTypes = {
  prefixCls: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  transitionName: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  animation: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object]),
  style: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object,
  maxCount: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number
};
Notification.defaultProps = {
  prefixCls: 'rc-notification',
  animation: 'fade',
  style: {
    top: 65,
    left: '50%'
  }
};


Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _ref2 = properties || {},
      getContainer = _ref2.getContainer,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref2, ['getContainer']);

  var div = document.createElement('div');
  if (getContainer) {
    var root = getContainer();
    root.appendChild(div);
  } else {
    document.body.appendChild(div);
  }
  var called = false;
  function ref(notification) {
    if (called) {
      return;
    }
    called = true;
    callback({
      notice: function notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice: function removeNotice(key) {
        notification.remove(key);
      },

      component: notification,
      destroy: function destroy() {
        __WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
      }
    });
  }
  __WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(Notification, __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, props, { ref: ref })), div);
};

/* harmony default export */ __webpack_exports__["a"] = (Notification);

/***/ }),

/***/ "./node_modules/rc-progress/es/Circle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__enhancer__ = __webpack_require__("./node_modules/rc-progress/es/enhancer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__types__ = __webpack_require__("./node_modules/rc-progress/es/types.js");





/* eslint react/prop-types: 0 */





var Circle = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Circle, _Component);

  function Circle() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Circle);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
  }

  Circle.prototype.getPathStyles = function getPathStyles() {
    var _props = this.props,
        percent = _props.percent,
        strokeWidth = _props.strokeWidth,
        _props$gapDegree = _props.gapDegree,
        gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree,
        gapPosition = _props.gapPosition;

    var radius = 50 - strokeWidth / 2;
    var beginPositionX = 0;
    var beginPositionY = -radius;
    var endPositionX = 0;
    var endPositionY = -2 * radius;
    switch (gapPosition) {
      case 'left':
        beginPositionX = -radius;
        beginPositionY = 0;
        endPositionX = 2 * radius;
        endPositionY = 0;
        break;
      case 'right':
        beginPositionX = radius;
        beginPositionY = 0;
        endPositionX = -2 * radius;
        endPositionY = 0;
        break;
      case 'bottom':
        beginPositionY = radius;
        endPositionY = 2 * radius;
        break;
      default:
    }
    var pathString = 'M 50,50 m ' + beginPositionX + ',' + beginPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + endPositionX + ',' + -endPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + -endPositionX + ',' + endPositionY;
    var len = Math.PI * 2 * radius;
    var trailPathStyle = {
      strokeDasharray: len - gapDegree + 'px ' + len + 'px',
      strokeDashoffset: '-' + gapDegree / 2 + 'px',
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
    };
    var strokePathStyle = {
      strokeDasharray: percent / 100 * (len - gapDegree) + 'px ' + len + 'px',
      strokeDashoffset: '-' + gapDegree / 2 + 'px',
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
    };
    return { pathString: pathString, trailPathStyle: trailPathStyle, strokePathStyle: strokePathStyle };
  };

  Circle.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        strokeWidth = _props2.strokeWidth,
        trailWidth = _props2.trailWidth,
        strokeColor = _props2.strokeColor,
        percent = _props2.percent,
        trailColor = _props2.trailColor,
        strokeLinecap = _props2.strokeLinecap,
        style = _props2.style,
        className = _props2.className,
        restProps = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props2, ['prefixCls', 'strokeWidth', 'trailWidth', 'strokeColor', 'percent', 'trailColor', 'strokeLinecap', 'style', 'className']);

    var _getPathStyles = this.getPathStyles(),
        pathString = _getPathStyles.pathString,
        trailPathStyle = _getPathStyles.trailPathStyle,
        strokePathStyle = _getPathStyles.strokePathStyle;

    delete restProps.percent;
    delete restProps.gapDegree;
    delete restProps.gapPosition;
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      'svg',
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        className: prefixCls + '-circle ' + className,
        viewBox: '0 0 100 100',
        style: style
      }, restProps),
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('path', {
        className: prefixCls + '-circle-trail',
        d: pathString,
        stroke: trailColor,
        strokeWidth: trailWidth || strokeWidth,
        fillOpacity: '0',
        style: trailPathStyle
      }),
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('path', {
        className: prefixCls + '-circle-path',
        d: pathString,
        strokeLinecap: strokeLinecap,
        stroke: strokeColor,
        strokeWidth: this.props.percent === 0 ? 0 : strokeWidth,
        fillOpacity: '0',
        ref: function ref(path) {
          _this2.path = path;
        },
        style: strokePathStyle
      })
    );
  };

  return Circle;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Circle.propTypes = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_8__types__["b" /* propTypes */], {
  gapPosition: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['top', 'bottom', 'left', 'right'])
});

Circle.defaultProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_8__types__["a" /* defaultProps */], {
  gapPosition: 'top'
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7__enhancer__["a" /* default */])(Circle));

/***/ }),

/***/ "./node_modules/rc-progress/es/Line.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enhancer__ = __webpack_require__("./node_modules/rc-progress/es/enhancer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__types__ = __webpack_require__("./node_modules/rc-progress/es/types.js");









var Line = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Line, _Component);

  function Line() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Line);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
  }

  Line.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        percent = _props.percent,
        prefixCls = _props.prefixCls,
        strokeColor = _props.strokeColor,
        strokeLinecap = _props.strokeLinecap,
        strokeWidth = _props.strokeWidth,
        style = _props.style,
        trailColor = _props.trailColor,
        trailWidth = _props.trailWidth,
        restProps = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['className', 'percent', 'prefixCls', 'strokeColor', 'strokeLinecap', 'strokeWidth', 'style', 'trailColor', 'trailWidth']);

    delete restProps.gapPosition;

    var pathStyle = {
      strokeDasharray: '100px, 100px',
      strokeDashoffset: 100 - percent + 'px',
      transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s linear'
    };

    var center = strokeWidth / 2;
    var right = 100 - strokeWidth / 2;
    var pathString = 'M ' + (strokeLinecap === 'round' ? center : 0) + ',' + center + '\n           L ' + (strokeLinecap === 'round' ? right : 100) + ',' + center;
    var viewBoxString = '0 0 100 ' + strokeWidth;

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      'svg',
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        className: prefixCls + '-line ' + className,
        viewBox: viewBoxString,
        preserveAspectRatio: 'none',
        style: style
      }, restProps),
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('path', {
        className: prefixCls + '-line-trail',
        d: pathString,
        strokeLinecap: strokeLinecap,
        stroke: trailColor,
        strokeWidth: trailWidth || strokeWidth,
        fillOpacity: '0'
      }),
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('path', {
        className: prefixCls + '-line-path',
        d: pathString,
        strokeLinecap: strokeLinecap,
        stroke: strokeColor,
        strokeWidth: strokeWidth,
        fillOpacity: '0',
        ref: function ref(path) {
          _this2.path = path;
        },
        style: pathStyle
      })
    );
  };

  return Line;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Line.propTypes = __WEBPACK_IMPORTED_MODULE_7__types__["b" /* propTypes */];

Line.defaultProps = __WEBPACK_IMPORTED_MODULE_7__types__["a" /* defaultProps */];

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6__enhancer__["a" /* default */])(Line));

/***/ }),

/***/ "./node_modules/rc-select/es/DropdownMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_util_es_Children_toArray__ = __webpack_require__("./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rc_menu__ = __webpack_require__("./node_modules/rc-menu/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view__ = __webpack_require__("./node_modules/dom-scroll-into-view/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util__ = __webpack_require__("./node_modules/rc-select/es/util.js");












var DropdownMenu = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, DropdownMenu);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.lastInputValue = props.inputValue;
    _this.saveMenuRef = Object(__WEBPACK_IMPORTED_MODULE_10__util__["q" /* saveRef */])(_this, 'menuRef');
    return _this;
  }

  DropdownMenu.prototype.componentDidMount = function componentDidMount() {
    this.scrollActiveItemToView();
    this.lastVisible = this.props.visible;
  };

  DropdownMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (!nextProps.visible) {
      this.lastVisible = false;
    }
    // freeze when hide
    return nextProps.visible;
  };

  DropdownMenu.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var props = this.props;
    if (!prevProps.visible && props.visible) {
      this.scrollActiveItemToView();
    }
    this.lastVisible = props.visible;
    this.lastInputValue = props.inputValue;
  };

  DropdownMenu.prototype.renderMenu = function renderMenu() {
    var _this2 = this;

    var props = this.props;
    var menuItems = props.menuItems,
        defaultActiveFirstOption = props.defaultActiveFirstOption,
        value = props.value,
        prefixCls = props.prefixCls,
        multiple = props.multiple,
        onMenuSelect = props.onMenuSelect,
        inputValue = props.inputValue,
        firstActiveValue = props.firstActiveValue,
        backfillValue = props.backfillValue;

    if (menuItems && menuItems.length) {
      var menuProps = {};
      if (multiple) {
        menuProps.onDeselect = props.onMenuDeselect;
        menuProps.onSelect = onMenuSelect;
      } else {
        menuProps.onClick = onMenuSelect;
      }

      var selectedKeys = Object(__WEBPACK_IMPORTED_MODULE_10__util__["i" /* getSelectKeys */])(menuItems, value);
      var activeKeyProps = {};

      var clonedMenuItems = menuItems;
      if (selectedKeys.length || firstActiveValue) {
        if (props.visible && !this.lastVisible) {
          activeKeyProps.activeKey = selectedKeys[0] || firstActiveValue;
        }
        var foundFirst = false;
        // set firstActiveItem via cloning menus
        // for scroll into view
        var clone = function clone(item) {
          if (!foundFirst && selectedKeys.indexOf(item.key) !== -1 || !foundFirst && !selectedKeys.length && firstActiveValue.indexOf(item.key) !== -1) {
            foundFirst = true;
            return Object(__WEBPACK_IMPORTED_MODULE_4_react__["cloneElement"])(item, {
              ref: function ref(_ref) {
                _this2.firstActiveItem = _ref;
              }
            });
          }
          return item;
        };

        clonedMenuItems = menuItems.map(function (item) {
          if (item.type.isMenuItemGroup) {
            var children = Object(__WEBPACK_IMPORTED_MODULE_7_rc_util_es_Children_toArray__["a" /* default */])(item.props.children).map(clone);
            return Object(__WEBPACK_IMPORTED_MODULE_4_react__["cloneElement"])(item, {}, children);
          }
          return clone(item);
        });
      } else {
        // Clear firstActiveItem when dropdown menu items was empty
        // Avoid `Unable to find node on an unmounted component`
        // https://github.com/ant-design/ant-design/issues/10774
        this.firstActiveItem = null;
      }

      // clear activeKey when inputValue change
      var lastValue = value && value[value.length - 1];
      if (inputValue !== this.lastInputValue && (!lastValue || lastValue !== backfillValue)) {
        activeKeyProps.activeKey = '';
      }
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8_rc_menu__["default"],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          ref: this.saveMenuRef,
          style: this.props.dropdownMenuStyle,
          defaultActiveFirst: defaultActiveFirstOption,
          role: 'listbox'
        }, activeKeyProps, {
          multiple: multiple
        }, menuProps, {
          selectedKeys: selectedKeys,
          prefixCls: prefixCls + '-menu'
        }),
        clonedMenuItems
      );
    }
    return null;
  };

  DropdownMenu.prototype.render = function render() {
    var renderMenu = this.renderMenu();
    return renderMenu ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      {
        style: { overflow: 'auto' },
        onFocus: this.props.onPopupFocus,
        onMouseDown: __WEBPACK_IMPORTED_MODULE_10__util__["p" /* preventDefaultEvent */],
        onScroll: this.props.onPopupScroll
      },
      renderMenu
    ) : null;
  };

  return DropdownMenu;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

DropdownMenu.propTypes = {
  defaultActiveFirstOption: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  value: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  dropdownMenuStyle: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  multiple: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  onPopupFocus: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onPopupScroll: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onMenuDeSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onMenuSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  prefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  menuItems: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  inputValue: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  visible: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.scrollActiveItemToView = function () {
    // scroll into view
    var itemComponent = Object(__WEBPACK_IMPORTED_MODULE_5_react_dom__["findDOMNode"])(_this3.firstActiveItem);
    var props = _this3.props;

    if (itemComponent) {
      var scrollIntoViewOpts = {
        onlyScrollIfNeeded: true
      };
      if ((!props.value || props.value.length === 0) && props.firstActiveValue) {
        scrollIntoViewOpts.alignWithTop = true;
      }

      __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view___default()(itemComponent, Object(__WEBPACK_IMPORTED_MODULE_5_react_dom__["findDOMNode"])(_this3.menuRef), scrollIntoViewOpts);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (DropdownMenu);


DropdownMenu.displayName = 'DropdownMenu';

/***/ }),

/***/ "./node_modules/rc-select/es/Select.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_lifecycles_compat__ = __webpack_require__("./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__ = __webpack_require__("./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rc_util_es_Children_toArray__ = __webpack_require__("./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_animate__ = __webpack_require__("./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_component_classes__ = __webpack_require__("./node_modules/component-classes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_component_classes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_component_classes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rc_menu__ = __webpack_require__("./node_modules/rc-menu/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Option__ = __webpack_require__("./node_modules/rc-select/es/Option.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__util__ = __webpack_require__("./node_modules/rc-select/es/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__SelectTrigger__ = __webpack_require__("./node_modules/rc-select/es/SelectTrigger.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__PropTypes__ = __webpack_require__("./node_modules/rc-select/es/PropTypes.js");




/* eslint func-names: 1 */
















function noop() {}

function chaining() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    // eslint-disable-line
    // eslint-disable-line
    for (var i = 0; i < fns.length; i++) {
      if (fns[i] && typeof fns[i] === 'function') {
        fns[i].apply(this, args);
      }
    }
  };
}

var Select = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Select, _React$Component);

  function Select(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Select);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var optionsInfo = Select.getOptionsInfoFromProps(props);
    _this.state = {
      value: Select.getValueFromProps(props, true), // true: use default value
      inputValue: props.combobox ? Select.getInputValueForCombobox(props, optionsInfo, true // use default value
      ) : '',
      open: props.defaultOpen,
      optionsInfo: optionsInfo,
      // a flag for aviod redundant getOptionsInfoFromProps call
      skipBuildOptionsInfo: true
    };

    _this.saveInputRef = Object(__WEBPACK_IMPORTED_MODULE_15__util__["q" /* saveRef */])(_this, 'inputRef');
    _this.saveInputMirrorRef = Object(__WEBPACK_IMPORTED_MODULE_15__util__["q" /* saveRef */])(_this, 'inputMirrorRef');
    _this.saveTopCtrlRef = Object(__WEBPACK_IMPORTED_MODULE_15__util__["q" /* saveRef */])(_this, 'topCtrlRef');
    _this.saveSelectTriggerRef = Object(__WEBPACK_IMPORTED_MODULE_15__util__["q" /* saveRef */])(_this, 'selectTriggerRef');
    _this.saveRootRef = Object(__WEBPACK_IMPORTED_MODULE_15__util__["q" /* saveRef */])(_this, 'rootRef');
    _this.saveSelectionRef = Object(__WEBPACK_IMPORTED_MODULE_15__util__["q" /* saveRef */])(_this, 'selectionRef');
    return _this;
  }

  Select.prototype.componentDidMount = function componentDidMount() {
    if (this.props.autoFocus) {
      this.focus();
    }
  };

  Select.prototype.componentDidUpdate = function componentDidUpdate() {
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(this.props)) {
      var inputNode = this.getInputDOMNode();
      var mirrorNode = this.getInputMirrorDOMNode();
      if (inputNode.value) {
        inputNode.style.width = '';
        inputNode.style.width = mirrorNode.clientWidth + 'px';
      } else {
        inputNode.style.width = '';
      }
    }
    this.forcePopupAlign();
  };

  Select.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearFocusTime();
    this.clearBlurTime();
    if (this.dropdownContainer) {
      __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.unmountComponentAtNode(this.dropdownContainer);
      document.body.removeChild(this.dropdownContainer);
      this.dropdownContainer = null;
    }
  };

  // combobox ignore


  Select.prototype.focus = function focus() {
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["o" /* isSingleMode */])(this.props)) {
      this.selectionRef.focus();
    } else {
      this.getInputDOMNode().focus();
    }
  };

  Select.prototype.blur = function blur() {
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["o" /* isSingleMode */])(this.props)) {
      this.selectionRef.blur();
    } else {
      this.getInputDOMNode().blur();
    }
  };

  Select.prototype.renderClear = function renderClear() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        allowClear = _props.allowClear;
    var _state = this.state,
        value = _state.value,
        inputValue = _state.inputValue;

    var clear = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('span', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
      key: 'clear',
      onMouseDown: __WEBPACK_IMPORTED_MODULE_15__util__["p" /* preventDefaultEvent */],
      style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */]
    }, __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */], {
      className: prefixCls + '-selection__clear',
      onClick: this.onClearSelection
    }));
    if (!allowClear) {
      return null;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["l" /* isCombobox */])(this.props)) {
      if (inputValue) {
        return clear;
      }
      return null;
    }
    if (inputValue || value.length) {
      return clear;
    }
    return null;
  };

  Select.prototype.render = function render() {
    var _rootCls;

    var props = this.props;
    var multiple = Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(props);
    var state = this.state;
    var className = props.className,
        disabled = props.disabled,
        prefixCls = props.prefixCls;

    var ctrlNode = this.renderTopControlNode();
    var extraSelectionProps = {};
    var open = this.state.open;

    if (open) {
      this._options = this.renderFilterOptions();
    }
    var realOpen = this.getRealOpenState();
    var options = this._options || [];
    if (!Object(__WEBPACK_IMPORTED_MODULE_15__util__["n" /* isMultipleOrTagsOrCombobox */])(props)) {
      extraSelectionProps = {
        onKeyDown: this.onKeyDown,
        tabIndex: props.disabled ? -1 : 0
      };
    }
    var rootCls = (_rootCls = {}, _rootCls[className] = !!className, _rootCls[prefixCls] = 1, _rootCls[prefixCls + '-open'] = open, _rootCls[prefixCls + '-focused'] = open || !!this._focused, _rootCls[prefixCls + '-combobox'] = Object(__WEBPACK_IMPORTED_MODULE_15__util__["l" /* isCombobox */])(props), _rootCls[prefixCls + '-disabled'] = disabled, _rootCls[prefixCls + '-enabled'] = !disabled, _rootCls[prefixCls + '-allow-clear'] = !!props.allowClear, _rootCls[prefixCls + '-no-arrow'] = !props.showArrow, _rootCls);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_16__SelectTrigger__["a" /* default */],
      {
        onPopupFocus: this.onPopupFocus,
        onMouseEnter: this.props.onMouseEnter,
        onMouseLeave: this.props.onMouseLeave,
        dropdownAlign: props.dropdownAlign,
        dropdownClassName: props.dropdownClassName,
        dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle,
        transitionName: props.transitionName,
        animation: props.animation,
        prefixCls: props.prefixCls,
        dropdownStyle: props.dropdownStyle,
        combobox: props.combobox,
        showSearch: props.showSearch,
        options: options,
        multiple: multiple,
        disabled: disabled,
        visible: realOpen,
        inputValue: state.inputValue,
        value: state.value,
        backfillValue: state.backfillValue,
        firstActiveValue: props.firstActiveValue,
        onDropdownVisibleChange: this.onDropdownVisibleChange,
        getPopupContainer: props.getPopupContainer,
        onMenuSelect: this.onMenuSelect,
        onMenuDeselect: this.onMenuDeselect,
        onPopupScroll: props.onPopupScroll,
        showAction: props.showAction,
        ref: this.saveSelectTriggerRef
      },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        {
          style: props.style,
          ref: this.saveRootRef,
          onBlur: this.onOuterBlur,
          onFocus: this.onOuterFocus,
          className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(rootCls)
        },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            ref: this.saveSelectionRef,
            key: 'selection',
            className: prefixCls + '-selection\n            ' + prefixCls + '-selection--' + (multiple ? 'multiple' : 'single'),
            role: 'combobox',
            'aria-autocomplete': 'list',
            'aria-haspopup': 'true',
            'aria-expanded': realOpen
          }, extraSelectionProps),
          ctrlNode,
          this.renderClear(),
          multiple || !props.showArrow ? null : __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'span',
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
              key: 'arrow',
              className: prefixCls + '-arrow',
              style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */]
            }, __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */], {
              onClick: this.onArrowClick
            }),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('b', null)
          )
        )
      )
    );
  };

  return Select;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Select.propTypes = __WEBPACK_IMPORTED_MODULE_17__PropTypes__["a" /* SelectPropTypes */];
Select.defaultProps = {
  prefixCls: 'rc-select',
  defaultOpen: false,
  labelInValue: false,
  defaultActiveFirstOption: true,
  showSearch: true,
  allowClear: false,
  placeholder: '',
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  onSelect: noop,
  onSearch: noop,
  onDeselect: noop,
  onInputKeyDown: noop,
  showArrow: true,
  dropdownMatchSelectWidth: true,
  dropdownStyle: {},
  dropdownMenuStyle: {},
  optionFilterProp: 'value',
  optionLabelProp: 'value',
  notFoundContent: 'Not Found',
  backfill: false,
  showAction: ['click'],
  tokenSeparators: [],
  autoClearSearchValue: true
};

Select.getDerivedStateFromProps = function (nextProps, prevState) {
  var optionsInfo = prevState.skipBuildOptionsInfo ? prevState.optionsInfo : Select.getOptionsInfoFromProps(nextProps, prevState);

  var newState = {
    optionsInfo: optionsInfo,
    skipBuildOptionsInfo: false
  };

  if ('open' in nextProps) {
    newState.open = nextProps.open;
  }

  if ('value' in nextProps) {
    var value = Select.getValueFromProps(nextProps);
    newState.value = value;
    if (nextProps.combobox) {
      newState.inputValue = Select.getInputValueForCombobox(nextProps, optionsInfo);
    }
  }
  return newState;
};

Select.getOptionsFromChildren = function (children) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.forEach(children, function (child) {
    if (!child) {
      return;
    }
    if (child.type.isSelectOptGroup) {
      Select.getOptionsFromChildren(child.props.children, options);
    } else {
      options.push(child);
    }
  });
  return options;
};

Select.getInputValueForCombobox = function (props, optionsInfo, useDefaultValue) {
  var value = [];
  if ('value' in props && !useDefaultValue) {
    value = Object(__WEBPACK_IMPORTED_MODULE_15__util__["s" /* toArray */])(props.value);
  }
  if ('defaultValue' in props && useDefaultValue) {
    value = Object(__WEBPACK_IMPORTED_MODULE_15__util__["s" /* toArray */])(props.defaultValue);
  }
  if (value.length) {
    value = value[0];
  } else {
    return '';
  }
  var label = value;
  if (props.labelInValue) {
    label = value.label;
  } else if (optionsInfo[Object(__WEBPACK_IMPORTED_MODULE_15__util__["g" /* getMapKey */])(value)]) {
    label = optionsInfo[Object(__WEBPACK_IMPORTED_MODULE_15__util__["g" /* getMapKey */])(value)].label;
  }
  if (label === undefined) {
    label = '';
  }
  return label;
};

Select.getLabelFromOption = function (props, option) {
  return Object(__WEBPACK_IMPORTED_MODULE_15__util__["h" /* getPropValue */])(option, props.optionLabelProp);
};

Select.getOptionsInfoFromProps = function (props, preState) {
  var options = Select.getOptionsFromChildren(props.children);
  var optionsInfo = {};
  options.forEach(function (option) {
    var singleValue = Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(option);
    optionsInfo[Object(__WEBPACK_IMPORTED_MODULE_15__util__["g" /* getMapKey */])(singleValue)] = {
      option: option,
      value: singleValue,
      label: Select.getLabelFromOption(props, option),
      title: option.props.title
    };
  });
  if (preState) {
    // keep option info in pre state value.
    var oldOptionsInfo = preState.optionsInfo;
    var value = preState.value;
    value.forEach(function (v) {
      var key = Object(__WEBPACK_IMPORTED_MODULE_15__util__["g" /* getMapKey */])(v);
      if (!optionsInfo[key]) {
        optionsInfo[key] = oldOptionsInfo[key];
      }
    });
  }
  return optionsInfo;
};

Select.getValueFromProps = function (props, useDefaultValue) {
  var value = [];
  if ('value' in props && !useDefaultValue) {
    value = Object(__WEBPACK_IMPORTED_MODULE_15__util__["s" /* toArray */])(props.value);
  }
  if ('defaultValue' in props && useDefaultValue) {
    value = Object(__WEBPACK_IMPORTED_MODULE_15__util__["s" /* toArray */])(props.defaultValue);
  }
  if (props.labelInValue) {
    value = value.map(function (v) {
      return v.key;
    });
  }
  return value;
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onInputChange = function (event) {
    var tokenSeparators = _this2.props.tokenSeparators;

    var val = event.target.value;
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(_this2.props) && tokenSeparators.length && Object(__WEBPACK_IMPORTED_MODULE_15__util__["k" /* includesSeparators */])(val, tokenSeparators)) {
      var nextValue = _this2.getValueByInput(val);
      if (nextValue !== undefined) {
        _this2.fireChange(nextValue);
      }
      _this2.setOpenState(false, true);
      _this2.setInputValue('', false);
      return;
    }
    _this2.setInputValue(val);
    _this2.setState({
      open: true
    });
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["l" /* isCombobox */])(_this2.props)) {
      _this2.fireChange([val]);
    }
  };

  this.onDropdownVisibleChange = function (open) {
    if (open && !_this2._focused) {
      _this2.clearBlurTime();
      _this2.timeoutFocus();
      _this2._focused = true;
      _this2.updateFocusClassName();
    }
    _this2.setOpenState(open);
  };

  this.onKeyDown = function (event) {
    var props = _this2.props;
    if (props.disabled) {
      return;
    }
    var keyCode = event.keyCode;
    if (_this2.state.open && !_this2.getInputDOMNode()) {
      _this2.onInputKeyDown(event);
    } else if (keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].ENTER || keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].DOWN) {
      _this2.setOpenState(true);
      event.preventDefault();
    }
  };

  this.onInputKeyDown = function (event) {
    var props = _this2.props;
    if (props.disabled) {
      return;
    }
    var state = _this2.state;
    var keyCode = event.keyCode;
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(props) && !event.target.value && keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].BACKSPACE) {
      event.preventDefault();
      var value = state.value;

      if (value.length) {
        _this2.removeSelected(value[value.length - 1]);
      }
      return;
    }
    if (keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].DOWN) {
      if (!state.open) {
        _this2.openIfHasChildren();
        event.preventDefault();
        event.stopPropagation();
        return;
      }
    } else if (keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].ESC) {
      if (state.open) {
        _this2.setOpenState(false);
        event.preventDefault();
        event.stopPropagation();
      }
      return;
    }

    if (state.open) {
      var menu = _this2.selectTriggerRef.getInnerMenu();
      if (menu && menu.onKeyDown(event, _this2.handleBackfill)) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  };

  this.onMenuSelect = function (_ref) {
    var item = _ref.item;

    if (!item) {
      return;
    }
    var value = _this2.state.value;
    var props = _this2.props;
    var selectedValue = Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(item);
    var lastValue = value[value.length - 1];
    _this2.fireSelect(selectedValue);
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(props)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["e" /* findIndexInValueBySingleValue */])(value, selectedValue) !== -1) {
        return;
      }
      value = value.concat([selectedValue]);
    } else {
      if (lastValue && lastValue === selectedValue && selectedValue !== _this2.state.backfillValue) {
        _this2.setOpenState(false, true);
        return;
      }
      value = [selectedValue];
      _this2.setOpenState(false, true);
    }
    _this2.fireChange(value);
    var inputValue = void 0;
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["l" /* isCombobox */])(props)) {
      inputValue = Object(__WEBPACK_IMPORTED_MODULE_15__util__["h" /* getPropValue */])(item, props.optionLabelProp);
    } else {
      inputValue = '';
    }
    if (props.autoClearSearchValue) {
      _this2.setInputValue(inputValue, false);
    }
  };

  this.onMenuDeselect = function (_ref2) {
    var item = _ref2.item,
        domEvent = _ref2.domEvent;

    if (domEvent.type === 'click') {
      _this2.removeSelected(Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(item));
    }
    var props = _this2.props;

    if (props.autoClearSearchValue) {
      _this2.setInputValue('', false);
    }
  };

  this.onArrowClick = function (e) {
    e.stopPropagation();
    e.preventDefault();
    if (!_this2.props.disabled) {
      _this2.setOpenState(!_this2.state.open, !_this2.state.open);
    }
  };

  this.onPlaceholderClick = function () {
    if (_this2.getInputDOMNode()) {
      _this2.getInputDOMNode().focus();
    }
  };

  this.onOuterFocus = function (e) {
    if (_this2.props.disabled) {
      e.preventDefault();
      return;
    }
    _this2.clearBlurTime();
    if (!Object(__WEBPACK_IMPORTED_MODULE_15__util__["n" /* isMultipleOrTagsOrCombobox */])(_this2.props) && e.target === _this2.getInputDOMNode()) {
      return;
    }
    if (_this2._focused) {
      return;
    }
    _this2._focused = true;
    _this2.updateFocusClassName();
    _this2.timeoutFocus();
  };

  this.onPopupFocus = function () {
    // fix ie scrollbar, focus element again
    _this2.maybeFocus(true, true);
  };

  this.onOuterBlur = function (e) {
    if (_this2.props.disabled) {
      e.preventDefault();
      return;
    }
    _this2.blurTimer = setTimeout(function () {
      _this2._focused = false;
      _this2.updateFocusClassName();
      var props = _this2.props;
      var value = _this2.state.value;
      var inputValue = _this2.state.inputValue;

      if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["o" /* isSingleMode */])(props) && props.showSearch && inputValue && props.defaultActiveFirstOption) {
        var options = _this2._options || [];
        if (options.length) {
          var firstOption = Object(__WEBPACK_IMPORTED_MODULE_15__util__["d" /* findFirstMenuItem */])(options);
          if (firstOption) {
            value = [Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(firstOption)];
            _this2.fireChange(value);
          }
        }
      } else if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(props) && inputValue) {
        // why not use setState?
        _this2.state.inputValue = _this2.getInputDOMNode().value = '';

        value = _this2.getValueByInput(inputValue);
        if (value !== undefined) {
          _this2.fireChange(value);
        }
      }
      props.onBlur(_this2.getVLForOnChange(value));
      _this2.setOpenState(false);
    }, 10);
  };

  this.onClearSelection = function (event) {
    var props = _this2.props;
    var state = _this2.state;
    if (props.disabled) {
      return;
    }
    var inputValue = state.inputValue,
        value = state.value;

    event.stopPropagation();
    if (inputValue || value.length) {
      if (value.length) {
        _this2.fireChange([]);
      }
      _this2.setOpenState(false, true);
      if (inputValue) {
        _this2.setInputValue('');
      }
    }
  };

  this.onChoiceAnimationLeave = function () {
    _this2.forcePopupAlign();
  };

  this.getOptionInfoBySingleValue = function (value, optionsInfo) {
    var info = void 0;
    optionsInfo = optionsInfo || _this2.state.optionsInfo;
    if (optionsInfo[Object(__WEBPACK_IMPORTED_MODULE_15__util__["g" /* getMapKey */])(value)]) {
      info = optionsInfo[Object(__WEBPACK_IMPORTED_MODULE_15__util__["g" /* getMapKey */])(value)];
    }
    if (info) {
      return info;
    }
    var defaultLabel = value;
    if (_this2.props.labelInValue) {
      var label = Object(__WEBPACK_IMPORTED_MODULE_15__util__["f" /* getLabelFromPropsValue */])(_this2.props.value, value);
      if (label !== undefined) {
        defaultLabel = label;
      }
    }
    var defaultInfo = {
      option: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_14__Option__["a" /* default */],
        { value: value, key: value },
        value
      ),
      value: value,
      label: defaultLabel
    };
    return defaultInfo;
  };

  this.getOptionBySingleValue = function (value) {
    var _getOptionInfoBySingl = _this2.getOptionInfoBySingleValue(value),
        option = _getOptionInfoBySingl.option;

    return option;
  };

  this.getOptionsBySingleValue = function (values) {
    return values.map(function (value) {
      return _this2.getOptionBySingleValue(value);
    });
  };

  this.getValueByLabel = function (label) {
    if (label === undefined) {
      return null;
    }
    var value = null;
    Object.keys(_this2.state.optionsInfo).forEach(function (key) {
      var info = _this2.state.optionsInfo[key];
      if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["s" /* toArray */])(info.label).join('') === label) {
        value = info.value;
      }
    });
    return value;
  };

  this.getVLBySingleValue = function (value) {
    if (_this2.props.labelInValue) {
      return {
        key: value,
        label: _this2.getLabelBySingleValue(value)
      };
    }
    return value;
  };

  this.getVLForOnChange = function (vls_) {
    var vls = vls_;
    if (vls !== undefined) {
      if (!_this2.props.labelInValue) {
        vls = vls.map(function (v) {
          return v;
        });
      } else {
        vls = vls.map(function (vl) {
          return {
            key: vl,
            label: _this2.getLabelBySingleValue(vl)
          };
        });
      }
      return Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(_this2.props) ? vls : vls[0];
    }
    return vls;
  };

  this.getLabelBySingleValue = function (value, optionsInfo) {
    var _getOptionInfoBySingl2 = _this2.getOptionInfoBySingleValue(value, optionsInfo),
        label = _getOptionInfoBySingl2.label;

    return label;
  };

  this.getDropdownContainer = function () {
    if (!_this2.dropdownContainer) {
      _this2.dropdownContainer = document.createElement('div');
      document.body.appendChild(_this2.dropdownContainer);
    }
    return _this2.dropdownContainer;
  };

  this.getPlaceholderElement = function () {
    var props = _this2.props,
        state = _this2.state;

    var hidden = false;
    if (state.inputValue) {
      hidden = true;
    }
    if (state.value.length) {
      hidden = true;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["l" /* isCombobox */])(props) && state.value.length === 1 && !state.value[0]) {
      hidden = false;
    }
    var placeholder = props.placeholder;
    if (placeholder) {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          onMouseDown: __WEBPACK_IMPORTED_MODULE_15__util__["p" /* preventDefaultEvent */],
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            display: hidden ? 'none' : 'block'
          }, __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */])
        }, __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */], {
          onClick: _this2.onPlaceholderClick,
          className: props.prefixCls + '-selection__placeholder'
        }),
        placeholder
      );
    }
    return null;
  };

  this.getInputElement = function () {
    var _classnames;

    var props = _this2.props;
    var inputElement = props.getInputElement ? props.getInputElement() : __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', { id: props.id, autoComplete: 'off' });
    var inputCls = __WEBPACK_IMPORTED_MODULE_9_classnames___default()(inputElement.props.className, (_classnames = {}, _classnames[props.prefixCls + '-search__field'] = true, _classnames));
    // https://github.com/ant-design/ant-design/issues/4992#issuecomment-281542159
    // Add space to the end of the inputValue as the width measurement tolerance
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      { className: props.prefixCls + '-search__field__wrap' },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(inputElement, {
        ref: _this2.saveInputRef,
        onChange: _this2.onInputChange,
        onKeyDown: chaining(_this2.onInputKeyDown, inputElement.props.onKeyDown, _this2.props.onInputKeyDown),
        value: _this2.state.inputValue,
        disabled: props.disabled,
        className: inputCls
      }),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'span',
        {
          ref: _this2.saveInputMirrorRef,
          className: props.prefixCls + '-search__field__mirror'
        },
        _this2.state.inputValue,
        '\xA0'
      )
    );
  };

  this.getInputDOMNode = function () {
    return _this2.topCtrlRef ? _this2.topCtrlRef.querySelector('input,textarea,div[contentEditable]') : _this2.inputRef;
  };

  this.getInputMirrorDOMNode = function () {
    return _this2.inputMirrorRef;
  };

  this.getPopupDOMNode = function () {
    return _this2.selectTriggerRef.getPopupDOMNode();
  };

  this.getPopupMenuComponent = function () {
    return _this2.selectTriggerRef.getInnerMenu();
  };

  this.setOpenState = function (open, needFocus) {
    var props = _this2.props,
        state = _this2.state;

    if (state.open === open) {
      _this2.maybeFocus(open, needFocus);
      return;
    }
    var nextState = {
      open: open,
      backfillValue: undefined
    };
    // clear search input value when open is false in singleMode.
    if (!open && Object(__WEBPACK_IMPORTED_MODULE_15__util__["o" /* isSingleMode */])(props) && props.showSearch) {
      _this2.setInputValue('', false);
    }
    if (!open) {
      _this2.maybeFocus(open, needFocus);
    }
    _this2.setState(nextState, function () {
      if (open) {
        _this2.maybeFocus(open, needFocus);
      }
    });
  };

  this.setInputValue = function (inputValue) {
    var fireSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (inputValue !== _this2.state.inputValue) {
      _this2.setState({
        inputValue: inputValue
      }, _this2.forcePopupAlign);
      if (fireSearch) {
        _this2.props.onSearch(inputValue);
      }
    }
  };

  this.getValueByInput = function (string) {
    var _props2 = _this2.props,
        multiple = _props2.multiple,
        tokenSeparators = _props2.tokenSeparators;

    var nextValue = _this2.state.value;
    var hasNewValue = false;
    Object(__WEBPACK_IMPORTED_MODULE_15__util__["r" /* splitBySeparators */])(string, tokenSeparators).forEach(function (label) {
      var selectedValue = [label];
      if (multiple) {
        var value = _this2.getValueByLabel(label);
        if (value && Object(__WEBPACK_IMPORTED_MODULE_15__util__["e" /* findIndexInValueBySingleValue */])(nextValue, value) === -1) {
          nextValue = nextValue.concat(value);
          hasNewValue = true;
          _this2.fireSelect(value);
        }
      } else {
        // tag
        if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["e" /* findIndexInValueBySingleValue */])(nextValue, label) === -1) {
          nextValue = nextValue.concat(selectedValue);
          hasNewValue = true;
          _this2.fireSelect(label);
        }
      }
    });
    return hasNewValue ? nextValue : undefined;
  };

  this.getRealOpenState = function () {
    var open = _this2.state.open;
    var options = _this2._options || [];
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["n" /* isMultipleOrTagsOrCombobox */])(_this2.props) || !_this2.props.showSearch) {
      if (open && !options.length) {
        open = false;
      }
    }
    return open;
  };

  this.handleBackfill = function (item) {
    if (!_this2.props.backfill || !(Object(__WEBPACK_IMPORTED_MODULE_15__util__["o" /* isSingleMode */])(_this2.props) || Object(__WEBPACK_IMPORTED_MODULE_15__util__["l" /* isCombobox */])(_this2.props))) {
      return;
    }

    var key = Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(item);

    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["l" /* isCombobox */])(_this2.props)) {
      _this2.setInputValue(key, false);
    }

    _this2.setState({
      value: [key],
      backfillValue: key
    });
  };

  this.filterOption = function (input, child) {
    var defaultFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_15__util__["c" /* defaultFilterFn */];
    var value = _this2.state.value;

    var lastValue = value[value.length - 1];
    if (!input || lastValue && lastValue === _this2.state.backfillValue) {
      return true;
    }
    var filterFn = _this2.props.filterOption;
    if ('filterOption' in _this2.props) {
      if (_this2.props.filterOption === true) {
        filterFn = defaultFilter;
      }
    } else {
      filterFn = defaultFilter;
    }

    if (!filterFn) {
      return true;
    } else if (typeof filterFn === 'function') {
      return filterFn.call(_this2, input, child);
    } else if (child.props.disabled) {
      return false;
    }
    return true;
  };

  this.timeoutFocus = function () {
    if (_this2.focusTimer) {
      _this2.clearFocusTime();
    }
    _this2.focusTimer = setTimeout(function () {
      _this2.props.onFocus();
    }, 10);
  };

  this.clearFocusTime = function () {
    if (_this2.focusTimer) {
      clearTimeout(_this2.focusTimer);
      _this2.focusTimer = null;
    }
  };

  this.clearBlurTime = function () {
    if (_this2.blurTimer) {
      clearTimeout(_this2.blurTimer);
      _this2.blurTimer = null;
    }
  };

  this.updateFocusClassName = function () {
    var rootRef = _this2.rootRef,
        props = _this2.props;
    // avoid setState and its side effect

    if (_this2._focused) {
      __WEBPACK_IMPORTED_MODULE_11_component_classes___default()(rootRef).add(props.prefixCls + '-focused');
    } else {
      __WEBPACK_IMPORTED_MODULE_11_component_classes___default()(rootRef).remove(props.prefixCls + '-focused');
    }
  };

  this.maybeFocus = function (open, needFocus) {
    if (needFocus || open) {
      var input = _this2.getInputDOMNode();
      var _document = document,
          activeElement = _document.activeElement;

      if (input && (open || Object(__WEBPACK_IMPORTED_MODULE_15__util__["n" /* isMultipleOrTagsOrCombobox */])(_this2.props))) {
        if (activeElement !== input) {
          input.focus();
          _this2._focused = true;
        }
      } else {
        if (activeElement !== _this2.selectionRef) {
          _this2.selectionRef.focus();
          _this2._focused = true;
        }
      }
    }
  };

  this.removeSelected = function (selectedKey, e) {
    var props = _this2.props;
    if (props.disabled || _this2.isChildDisabled(selectedKey)) {
      return;
    }

    // Do not trigger Trigger popup
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }

    var value = _this2.state.value.filter(function (singleValue) {
      return singleValue !== selectedKey;
    });
    var canMultiple = Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(props);

    if (canMultiple) {
      var event = selectedKey;
      if (props.labelInValue) {
        event = {
          key: selectedKey,
          label: _this2.getLabelBySingleValue(selectedKey)
        };
      }
      props.onDeselect(event, _this2.getOptionBySingleValue(selectedKey));
    }
    _this2.fireChange(value);
  };

  this.openIfHasChildren = function () {
    var props = _this2.props;
    if (__WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.count(props.children) || Object(__WEBPACK_IMPORTED_MODULE_15__util__["o" /* isSingleMode */])(props)) {
      _this2.setOpenState(true);
    }
  };

  this.fireSelect = function (value) {
    _this2.props.onSelect(_this2.getVLBySingleValue(value), _this2.getOptionBySingleValue(value));
  };

  this.fireChange = function (value) {
    var props = _this2.props;
    if (!('value' in props)) {
      _this2.setState({
        value: value
      }, _this2.forcePopupAlign);
    }
    var vls = _this2.getVLForOnChange(value);
    var options = _this2.getOptionsBySingleValue(value);
    props.onChange(vls, Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(_this2.props) ? options : options[0]);
  };

  this.isChildDisabled = function (key) {
    return Object(__WEBPACK_IMPORTED_MODULE_8_rc_util_es_Children_toArray__["a" /* default */])(_this2.props.children).some(function (child) {
      var childValue = Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(child);
      return childValue === key && child.props && child.props.disabled;
    });
  };

  this.forcePopupAlign = function () {
    _this2.selectTriggerRef.triggerRef.forcePopupAlign();
  };

  this.renderFilterOptions = function () {
    var inputValue = _this2.state.inputValue;
    var _props3 = _this2.props,
        children = _props3.children,
        tags = _props3.tags,
        filterOption = _props3.filterOption,
        notFoundContent = _props3.notFoundContent;

    var menuItems = [];
    var childrenKeys = [];
    var options = _this2.renderFilterOptionsFromChildren(children, childrenKeys, menuItems);
    if (tags) {
      // tags value must be string
      var value = _this2.state.value;
      value = value.filter(function (singleValue) {
        return childrenKeys.indexOf(singleValue) === -1 && (!inputValue || String(singleValue).indexOf(String(inputValue)) > -1);
      });
      value.forEach(function (singleValue) {
        var key = singleValue;
        var menuItem = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_12_rc_menu__["Item"],
          {
            style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */],
            role: 'option',
            attribute: __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */],
            value: key,
            key: key
          },
          key
        );
        options.push(menuItem);
        menuItems.push(menuItem);
      });
      if (inputValue) {
        var notFindInputItem = menuItems.every(function (option) {
          // this.filterOption return true has two meaning,
          // 1, some one exists after filtering
          // 2, filterOption is set to false
          // condition 2 does not mean the option has same value with inputValue
          var filterFn = function filterFn() {
            return Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(option) === inputValue;
          };
          if (filterOption !== false) {
            return !_this2.filterOption.call(_this2, inputValue, option, filterFn);
          }
          return !filterFn();
        });
        if (notFindInputItem) {
          options.unshift(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_rc_menu__["Item"],
            {
              style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */],
              role: 'option',
              attribute: __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */],
              value: inputValue,
              key: inputValue
            },
            inputValue
          ));
        }
      }
    }

    if (!options.length && notFoundContent) {
      options = [__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_12_rc_menu__["Item"],
        {
          style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */],
          attribute: __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */],
          disabled: true,
          role: 'option',
          value: 'NOT_FOUND',
          key: 'NOT_FOUND'
        },
        notFoundContent
      )];
    }
    return options;
  };

  this.renderFilterOptionsFromChildren = function (children, childrenKeys, menuItems) {
    var sel = [];
    var props = _this2.props;
    var inputValue = _this2.state.inputValue;

    var tags = props.tags;
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.forEach(children, function (child) {
      if (!child) {
        return;
      }
      if (child.type.isSelectOptGroup) {
        var innerItems = _this2.renderFilterOptionsFromChildren(child.props.children, childrenKeys, menuItems);
        if (innerItems.length) {
          var label = child.props.label;
          var key = child.key;
          if (!key && typeof label === 'string') {
            key = label;
          } else if (!label && key) {
            label = key;
          }
          sel.push(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_rc_menu__["ItemGroup"],
            { key: key, title: label },
            innerItems
          ));
        }
        return;
      }

      __WEBPACK_IMPORTED_MODULE_13_warning___default()(child.type.isSelectOption, 'the children of `Select` should be `Select.Option` or `Select.OptGroup`, ' + ('instead of `' + (child.type.name || child.type.displayName || child.type) + '`.'));

      var childValue = Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(child);

      Object(__WEBPACK_IMPORTED_MODULE_15__util__["u" /* validateOptionValue */])(childValue, _this2.props);

      if (_this2.filterOption(inputValue, child)) {
        var menuItem = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_rc_menu__["Item"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */],
          attribute: __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */],
          value: childValue,
          key: childValue,
          role: 'option'
        }, child.props));
        sel.push(menuItem);
        menuItems.push(menuItem);
      }
      if (tags && !child.props.disabled) {
        childrenKeys.push(childValue);
      }
    });

    return sel;
  };

  this.renderTopControlNode = function () {
    var _state2 = _this2.state,
        value = _state2.value,
        open = _state2.open,
        inputValue = _state2.inputValue;

    var props = _this2.props;
    var choiceTransitionName = props.choiceTransitionName,
        prefixCls = props.prefixCls,
        maxTagTextLength = props.maxTagTextLength,
        maxTagCount = props.maxTagCount,
        maxTagPlaceholder = props.maxTagPlaceholder,
        showSearch = props.showSearch;

    var className = prefixCls + '-selection__rendered';
    // search input is inside topControlNode in single, multiple & combobox. 2016/04/13
    var innerNode = null;
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["o" /* isSingleMode */])(props)) {
      var selectedValue = null;
      if (value.length) {
        var showSelectedValue = false;
        var opacity = 1;
        if (!showSearch) {
          showSelectedValue = true;
        } else {
          if (open) {
            showSelectedValue = !inputValue;
            if (showSelectedValue) {
              opacity = 0.4;
            }
          } else {
            showSelectedValue = true;
          }
        }
        var singleValue = value[0];

        var _getOptionInfoBySingl3 = _this2.getOptionInfoBySingleValue(singleValue),
            label = _getOptionInfoBySingl3.label,
            title = _getOptionInfoBySingl3.title;

        selectedValue = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          {
            key: 'value',
            className: prefixCls + '-selection-selected-value',
            title: Object(__WEBPACK_IMPORTED_MODULE_15__util__["t" /* toTitle */])(title || label),
            style: {
              display: showSelectedValue ? 'block' : 'none',
              opacity: opacity
            }
          },
          label
        );
      }
      if (!showSearch) {
        innerNode = [selectedValue];
      } else {
        innerNode = [selectedValue, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          {
            className: prefixCls + '-search ' + prefixCls + '-search--inline',
            key: 'input',
            style: {
              display: open ? 'block' : 'none'
            }
          },
          _this2.getInputElement()
        )];
      }
    } else {
      var selectedValueNodes = [];
      var limitedCountValue = value;
      var maxTagPlaceholderEl = void 0;
      if (maxTagCount !== undefined && value.length > maxTagCount) {
        limitedCountValue = limitedCountValue.slice(0, maxTagCount);
        var omittedValues = _this2.getVLForOnChange(value.slice(maxTagCount, value.length));
        var content = '+ ' + (value.length - maxTagCount) + ' ...';
        if (maxTagPlaceholder) {
          content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
        }
        maxTagPlaceholderEl = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'li',
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */]
          }, __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */], {
            onMouseDown: __WEBPACK_IMPORTED_MODULE_15__util__["p" /* preventDefaultEvent */],
            className: prefixCls + '-selection__choice ' + prefixCls + '-selection__choice__disabled',
            key: 'maxTagPlaceholder',
            title: Object(__WEBPACK_IMPORTED_MODULE_15__util__["t" /* toTitle */])(content)
          }),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'div',
            { className: prefixCls + '-selection__choice__content' },
            content
          )
        );
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(props)) {
        selectedValueNodes = limitedCountValue.map(function (singleValue) {
          var info = _this2.getOptionInfoBySingleValue(singleValue);
          var content = info.label;
          var title = info.title || content;
          if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
            content = content.slice(0, maxTagTextLength) + '...';
          }
          var disabled = _this2.isChildDisabled(singleValue);
          var choiceClassName = disabled ? prefixCls + '-selection__choice ' + prefixCls + '-selection__choice__disabled' : prefixCls + '-selection__choice';
          return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'li',
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
              style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */]
            }, __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */], {
              onMouseDown: __WEBPACK_IMPORTED_MODULE_15__util__["p" /* preventDefaultEvent */],
              className: choiceClassName,
              key: singleValue,
              title: Object(__WEBPACK_IMPORTED_MODULE_15__util__["t" /* toTitle */])(title)
            }),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'div',
              { className: prefixCls + '-selection__choice__content' },
              content
            ),
            disabled ? null : __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('span', {
              className: prefixCls + '-selection__choice__remove',
              onClick: function onClick(event) {
                _this2.removeSelected(singleValue, event);
              }
            })
          );
        });
      }
      if (maxTagPlaceholderEl) {
        selectedValueNodes.push(maxTagPlaceholderEl);
      }
      selectedValueNodes.push(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'li',
        {
          className: prefixCls + '-search ' + prefixCls + '-search--inline',
          key: '__input'
        },
        _this2.getInputElement()
      ));

      if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(props) && choiceTransitionName) {
        innerNode = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10_rc_animate__["default"],
          {
            onLeave: _this2.onChoiceAnimationLeave,
            component: 'ul',
            transitionName: choiceTransitionName
          },
          selectedValueNodes
        );
      } else {
        innerNode = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'ul',
          null,
          selectedValueNodes
        );
      }
    }
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      { className: className, ref: _this2.saveTopCtrlRef },
      _this2.getPlaceholderElement(),
      innerNode
    );
  };
};

Select.displayName = 'Select';

Object(__WEBPACK_IMPORTED_MODULE_6_react_lifecycles_compat__["polyfill"])(Select);

/* harmony default export */ __webpack_exports__["a"] = (Select);

/***/ }),

/***/ "./node_modules/rc-select/es/SelectTrigger.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_trigger__ = __webpack_require__("./node_modules/rc-trigger/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DropdownMenu__ = __webpack_require__("./node_modules/rc-select/es/DropdownMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom__ = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util__ = __webpack_require__("./node_modules/rc-select/es/util.js");













__WEBPACK_IMPORTED_MODULE_5_rc_trigger__["a" /* default */].displayName = 'Trigger';

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

var SelectTrigger = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(SelectTrigger, _React$Component);

  function SelectTrigger(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, SelectTrigger);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.saveDropdownMenuRef = Object(__WEBPACK_IMPORTED_MODULE_11__util__["q" /* saveRef */])(_this, 'dropdownMenuRef');
    _this.saveTriggerRef = Object(__WEBPACK_IMPORTED_MODULE_11__util__["q" /* saveRef */])(_this, 'triggerRef');

    _this.state = {
      dropdownWidth: null
    };
    return _this;
  }

  SelectTrigger.prototype.componentDidMount = function componentDidMount() {
    this.setDropdownWidth();
  };

  SelectTrigger.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setDropdownWidth();
  };

  SelectTrigger.prototype.render = function render() {
    var _popupClassName;

    var _props = this.props,
        onPopupFocus = _props.onPopupFocus,
        props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['onPopupFocus']);

    var multiple = props.multiple,
        visible = props.visible,
        inputValue = props.inputValue,
        dropdownAlign = props.dropdownAlign,
        disabled = props.disabled,
        showSearch = props.showSearch,
        dropdownClassName = props.dropdownClassName,
        dropdownStyle = props.dropdownStyle,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;

    var dropdownPrefixCls = this.getDropdownPrefixCls();
    var popupClassName = (_popupClassName = {}, _popupClassName[dropdownClassName] = !!dropdownClassName, _popupClassName[dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single')] = 1, _popupClassName);
    var popupElement = this.getDropdownElement({
      menuItems: props.options,
      onPopupFocus: onPopupFocus,
      multiple: multiple,
      inputValue: inputValue,
      visible: visible
    });
    var hideAction = void 0;
    if (disabled) {
      hideAction = [];
    } else if (Object(__WEBPACK_IMPORTED_MODULE_11__util__["o" /* isSingleMode */])(props) && !showSearch) {
      hideAction = ['click'];
    } else {
      hideAction = ['blur'];
    }
    var popupStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, dropdownStyle);
    var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';
    if (this.state.dropdownWidth) {
      popupStyle[widthProp] = this.state.dropdownWidth + 'px';
    }

    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_rc_trigger__["a" /* default */],
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        showAction: disabled ? [] : this.props.showAction,
        hideAction: hideAction,
        ref: this.saveTriggerRef,
        popupPlacement: 'bottomLeft',
        builtinPlacements: BUILT_IN_PLACEMENTS,
        prefixCls: dropdownPrefixCls,
        popupTransitionName: this.getDropdownTransitionName(),
        onPopupVisibleChange: props.onDropdownVisibleChange,
        popup: popupElement,
        popupAlign: dropdownAlign,
        popupVisible: visible,
        getPopupContainer: props.getPopupContainer,
        popupClassName: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(popupClassName),
        popupStyle: popupStyle
      }),
      props.children
    );
  };

  return SelectTrigger;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

SelectTrigger.propTypes = {
  onPopupFocus: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onPopupScroll: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  dropdownMatchSelectWidth: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  dropdownAlign: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  visible: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  showSearch: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  dropdownClassName: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  multiple: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  inputValue: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  filterOption: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any,
  options: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any,
  prefixCls: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  popupClassName: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any,
  showAction: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string)
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.setDropdownWidth = function () {
    var width = __WEBPACK_IMPORTED_MODULE_10_react_dom___default.a.findDOMNode(_this2).offsetWidth;
    if (width !== _this2.state.dropdownWidth) {
      _this2.setState({ dropdownWidth: width });
    }
  };

  this.getInnerMenu = function () {
    return _this2.dropdownMenuRef && _this2.dropdownMenuRef.menuRef;
  };

  this.getPopupDOMNode = function () {
    return _this2.triggerRef.getPopupDomNode();
  };

  this.getDropdownElement = function (newProps) {
    var props = _this2.props;
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__DropdownMenu__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
      ref: _this2.saveDropdownMenuRef
    }, newProps, {
      prefixCls: _this2.getDropdownPrefixCls(),
      onMenuSelect: props.onMenuSelect,
      onMenuDeselect: props.onMenuDeselect,
      onPopupScroll: props.onPopupScroll,
      value: props.value,
      backfillValue: props.backfillValue,
      firstActiveValue: props.firstActiveValue,
      defaultActiveFirstOption: props.defaultActiveFirstOption,
      dropdownMenuStyle: props.dropdownMenuStyle
    }));
  };

  this.getDropdownTransitionName = function () {
    var props = _this2.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = _this2.getDropdownPrefixCls() + '-' + props.animation;
    }
    return transitionName;
  };

  this.getDropdownPrefixCls = function () {
    return _this2.props.prefixCls + '-dropdown';
  };
};

/* harmony default export */ __webpack_exports__["a"] = (SelectTrigger);


SelectTrigger.displayName = 'SelectTrigger';

/***/ }),

/***/ "./node_modules/rc-tooltip/es/Tooltip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_trigger__ = __webpack_require__("./node_modules/rc-trigger/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__placements__ = __webpack_require__("./node_modules/rc-tooltip/es/placements.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Content__ = __webpack_require__("./node_modules/rc-tooltip/es/Content.js");











var Tooltip = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Tooltip, _Component);

  function Tooltip() {
    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getPopupElement = function () {
      var _this$props = _this.props,
          arrowContent = _this$props.arrowContent,
          overlay = _this$props.overlay,
          prefixCls = _this$props.prefixCls,
          id = _this$props.id;

      return [__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: prefixCls + '-arrow', key: 'arrow' },
        arrowContent
      ), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Content__["a" /* default */], {
        key: 'content',
        trigger: _this.trigger,
        prefixCls: prefixCls,
        id: id,
        overlay: overlay
      })];
    }, _this.saveTrigger = function (node) {
      _this.trigger = node;
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  Tooltip.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.trigger.getPopupDomNode();
  };

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        overlayClassName = _props.overlayClassName,
        trigger = _props.trigger,
        mouseEnterDelay = _props.mouseEnterDelay,
        mouseLeaveDelay = _props.mouseLeaveDelay,
        overlayStyle = _props.overlayStyle,
        prefixCls = _props.prefixCls,
        children = _props.children,
        onVisibleChange = _props.onVisibleChange,
        afterVisibleChange = _props.afterVisibleChange,
        transitionName = _props.transitionName,
        animation = _props.animation,
        placement = _props.placement,
        align = _props.align,
        destroyTooltipOnHide = _props.destroyTooltipOnHide,
        defaultVisible = _props.defaultVisible,
        getTooltipContainer = _props.getTooltipContainer,
        restProps = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'children', 'onVisibleChange', 'afterVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

    var extraProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, restProps);
    if ('visible' in this.props) {
      extraProps.popupVisible = this.props.visible;
    }
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_7_rc_trigger__["a" /* default */],
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        popupClassName: overlayClassName,
        ref: this.saveTrigger,
        prefixCls: prefixCls,
        popup: this.getPopupElement,
        action: trigger,
        builtinPlacements: __WEBPACK_IMPORTED_MODULE_8__placements__["a" /* placements */],
        popupPlacement: placement,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltipOnHide,
        mouseLeaveDelay: mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay: mouseEnterDelay
      }, extraProps),
      children
    );
  };

  return Tooltip;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Tooltip.propTypes = {
  trigger: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  defaultVisible: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  visible: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  placement: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  transitionName: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object]),
  animation: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  onVisibleChange: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  afterVisibleChange: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  overlay: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func]).isRequired,
  overlayStyle: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  overlayClassName: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  prefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  mouseEnterDelay: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  mouseLeaveDelay: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  getTooltipContainer: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  destroyTooltipOnHide: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  align: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  arrowContent: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  id: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string
};
Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  mouseEnterDelay: 0,
  destroyTooltipOnHide: false,
  mouseLeaveDelay: 0.1,
  align: {},
  placement: 'right',
  trigger: ['hover'],
  arrowContent: null
};


/* harmony default export */ __webpack_exports__["a"] = (Tooltip);

/***/ }),

/***/ "./node_modules/rc-trigger/es/LazyRenderBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);







var LazyRenderBox = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(LazyRenderBox, _Component);

  function LazyRenderBox() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, LazyRenderBox);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['hiddenClassName', 'visible']);

    if (hiddenClassName || __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.count(props.children) > 1) {
      if (!visible && hiddenClassName) {
        props.className += ' ' + hiddenClassName;
      }
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('div', props);
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.only(props.children);
  };

  return LazyRenderBox;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

LazyRenderBox.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
  className: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  visible: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  hiddenClassName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string
};


/* harmony default export */ __webpack_exports__["a"] = (LazyRenderBox);

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

/***/ "./node_modules/warning/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_app__ = __webpack_require__("./node_modules/next/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_withApollo__ = __webpack_require__("./lib/withApollo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__("./index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_progressBar__ = __webpack_require__("./components/progressBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navigationLayout__ = __webpack_require__("./components/navigationLayout.js");
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/pages/_app.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _next(value){step("next",value);}function _throw(err){step("throw",err);}_next();});};}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}





var

MyApp=/*#__PURE__*/function(_App){_inherits(MyApp,_App);function MyApp(){_classCallCheck(this,MyApp);return _possibleConstructorReturn(this,(MyApp.__proto__||Object.getPrototypeOf(MyApp)).apply(this,arguments));}_createClass(MyApp,[{key:"render",value:function render()









{var _props=
this.props,Component=_props.Component,pageProps=_props.pageProps,apolloClient=_props.apolloClient;var
pathname=this.props.router.pathname;

return(
__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_app__["Container"],{__source:{fileName:_jsxFileName,lineNumber:24}},
__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"],{client:apolloClient,__source:{fileName:_jsxFileName,lineNumber:25}},
__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__index__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:26}},
__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_progressBar__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:27}},
pathname==="/login"?
__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component,_extends({},pageProps,{__source:{fileName:_jsxFileName,lineNumber:29}})):

__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_navigationLayout__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:31}},
__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component,_extends({},pageProps,{__source:{fileName:_jsxFileName,lineNumber:32}}))))))));







}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}],[{key:"getInitialProps",value:function(){var _getInitialProps=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref){var Component,router,ctx,pageProps;return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:Component=_ref.Component,router=_ref.router,ctx=_ref.ctx;pageProps={};if(!Component.getInitialProps){_context.next=6;break;}_context.next=5;return Component.getInitialProps(ctx);case 5:pageProps=_context.sent;case 6:return _context.abrupt("return",{pageProps:pageProps});case 7:case"end":return _context.stop();}}},_callee,this);}));return function getInitialProps(_x){return _getInitialProps.apply(this,arguments);};}()}]);return MyApp;}(__WEBPACK_IMPORTED_MODULE_1_next_app___default.a);var _default=
Object(__WEBPACK_IMPORTED_MODULE_4__lib_withApollo__["a" /* default */])(MyApp);/* harmony default export */ __webpack_exports__["default"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(MyApp,"MyApp","/home/nenjamin2405/redpola/emt/client-emt/pages/_app.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/pages/_app.js");leaveModule(module);})();;
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
//# sourceMappingURL=0.ec5a3ff86a155e0e9509.hot-update.js.map