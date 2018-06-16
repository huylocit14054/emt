webpackHotUpdate(4,{

/***/ "./components/users/UsersList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_table__ = __webpack_require__("./node_modules/antd/lib/table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_timeago__ = __webpack_require__("./node_modules/react-timeago/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_timeago___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_timeago__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cloudinary_react__ = __webpack_require__("./node_modules/cloudinary-react/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cloudinary_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cloudinary_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__graphql_queries_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userLists_CreateUserModal__ = __webpack_require__("./components/users/userLists/CreateUserModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__("./constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__constants__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/users/UsersList.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}







var columns=[
{
title:'Username',
dataIndex:'username',
render:function render(text,user){return(
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{href:"javascript:;",__source:{fileName:_jsxFileName,lineNumber:14}},
' ',
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_cloudinary_react__["Image"],{
cloudName:__WEBPACK_IMPORTED_MODULE_7__constants__["CLOUD_NAME"],
publicId:user.avatar,
width:"40",
crop:"scale",
style:{borderRadius:'50%',marginRight:11},__source:{fileName:_jsxFileName,lineNumber:16}}),

user.username));}},



{
title:'Email',
dataIndex:'email'},

{
title:'Created at',
dataIndex:'createdAt',
render:function render(date){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_timeago___default.a,{date:date,__source:{fileName:_jsxFileName,lineNumber:34}});}}];var



UsersList=/*#__PURE__*/function(_React$Component){_inherits(UsersList,_React$Component);function UsersList(){_classCallCheck(this,UsersList);return _possibleConstructorReturn(this,(UsersList.__proto__||Object.getPrototypeOf(UsersList)).apply(this,arguments));}_createClass(UsersList,[{key:"render",value:function render()
{
return(
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:41}},
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__userLists_CreateUserModal__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:42}}),
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Query"],{query:__WEBPACK_IMPORTED_MODULE_5__graphql_queries_gql__["getAllUsers"],__source:{fileName:_jsxFileName,lineNumber:43}},
function(_ref){var loading=_ref.loading,error=_ref.error,data=_ref.data;
if(loading)return'Loading...';
if(error)return"Error! ".concat(error.message);
return(
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_table___default.a,{columns:columns,loading:loading,dataSource:data.users,rowKey:"id",__source:{fileName:_jsxFileName,lineNumber:48}}));

})));



}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return UsersList;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(columns,"columns","/home/nenjamin2405/redpola/emt/client-emt/components/users/UsersList.js");reactHotLoader.register(UsersList,"UsersList","/home/nenjamin2405/redpola/emt/client-emt/components/users/UsersList.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.b025ef21c2c995fb6911.hot-update.js.map