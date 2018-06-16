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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/profile/UserProfile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_tabs__ = __webpack_require__("antd/lib/tabs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userProfile_UpdateInfoForm__ = __webpack_require__("./components/profile/userProfile/UpdateInfoForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userProfile_UpdateSecurityForm__ = __webpack_require__("./components/profile/userProfile/UpdateSecurityForm.js");
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/profile/UserProfile.js";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var

TabPane=__WEBPACK_IMPORTED_MODULE_0_antd_lib_tabs___default.a.TabPane;var
ProfileLayout=/*#__PURE__*/function(_React$Component){_inherits(ProfileLayout,_React$Component);function ProfileLayout(){_classCallCheck(this,ProfileLayout);return _possibleConstructorReturn(this,(ProfileLayout.__proto__||Object.getPrototypeOf(ProfileLayout)).apply(this,arguments));}_createClass(ProfileLayout,[{key:"render",value:function render()
{var
currentUser=this.props.currentUser;
return(
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:10}},
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2",{__source:{fileName:_jsxFileName,lineNumber:11}},"Your Profile"),

__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_tabs___default.a,{defaultActiveKey:"profile",__source:{fileName:_jsxFileName,lineNumber:13}},
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TabPane,{tab:"Profile",key:"profile",__source:{fileName:_jsxFileName,lineNumber:14}},
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__userProfile_UpdateInfoForm__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:15}})),

__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TabPane,{tab:"Security",key:"security",__source:{fileName:_jsxFileName,lineNumber:17}},
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__userProfile_UpdateSecurityForm__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:18}})))));




}}]);return ProfileLayout;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


/* harmony default export */ __webpack_exports__["a"] = (ProfileLayout);

/***/ }),

/***/ "./components/profile/userProfile/UpdateInfoForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_spin__ = __webpack_require__("antd/lib/spin");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_spin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_spin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input__ = __webpack_require__("antd/lib/input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_message__ = __webpack_require__("antd/lib/message");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_form__ = __webpack_require__("antd/lib/form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_mutations_gql__ = __webpack_require__("./graphql/mutations.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_mutations_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__graphql_mutations_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__graphql_queries_gql__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateInfoForm.js";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}




var FormItem=__WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default.a.Item;

var antIcon=__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default.a,{type:"loading",style:{fontSize:24},spin:true,__source:{fileName:_jsxFileName,lineNumber:8}});

var UpdateUserForm=__WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default.a.create({})(/*#__PURE__*/function(_React$Component){_inherits(_class2,_React$Component);function _class2(){var _ref;var _temp,_this;_classCallCheck(this,_class2);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _possibleConstructorReturn(_this,(_temp=_this=_possibleConstructorReturn(this,(_ref=_class2.__proto__||Object.getPrototypeOf(_class2)).call.apply(_ref,[this].concat(args))),Object.defineProperty(_assertThisInitialized(_this),"handleUpdate",{configurable:true,enumerable:true,writable:true,value:
function value(e,updateUserInfo){
e.preventDefault();var
form=_this.props.form;
form.validateFields(function(err,values){
if(err){
return;
}
updateUserInfo({
variables:{
input:{
attributes:JSON.stringify(values)}}});



});
}}),_temp));}_createClass(_class2,[{key:"render",value:function render()

{var _this2=this;var
form=this.props.form;var
getFieldDecorator=form.getFieldDecorator;
var formItemLayout={
labelCol:{
xs:{span:24},
sm:{span:2}},

wrapperCol:{
xs:{span:24},
sm:{span:6}}};


var tailFormItemLayout={
wrapperCol:{
xs:{
span:24,
offset:0},

sm:{
span:8,
offset:2}}};




return(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["Mutation"],{
mutation:__WEBPACK_IMPORTED_MODULE_8__graphql_mutations_gql__["updateUserInfo"],
onCompleted:function onCompleted(){
__WEBPACK_IMPORTED_MODULE_3_antd_lib_message___default.a.success('Your Profile is updated!',3);
},
onError:function onError(error){
// If you want to send error to external service?
error.graphQLErrors.map(function(_ref2,i){var message=_ref2.message;
__WEBPACK_IMPORTED_MODULE_3_antd_lib_message___default.a.error(message,3);
});
},__source:{fileName:_jsxFileName,lineNumber:55}},

function(updateUserInfo,_ref3){var loading=_ref3.loading,data=_ref3.data,error=_ref3.error;return(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_spin___default.a,{indicator:antIcon,spinning:loading,tip:"Updating Profile...",__source:{fileName:_jsxFileName,lineNumber:68}},
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("br",{__source:{fileName:_jsxFileName,lineNumber:69}}),
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["Query"],{
query:__WEBPACK_IMPORTED_MODULE_9__graphql_queries_gql__["getCurrentUserProfile"],
onCompleted:function onCompleted(data){},
onError:function onError(error){
// If you want to send error to external service?
},__source:{fileName:_jsxFileName,lineNumber:70}},

function(_ref4){var loading=_ref4.loading,error=_ref4.error,data=_ref4.data;var
profile=data.profile;
if(loading)return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:79}},"loading...");

return(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default.a,{onSubmit:function onSubmit(e){return _this2.handleUpdate(e,updateUserInfo);},__source:{fileName:_jsxFileName,lineNumber:82}},
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FormItem,_extends({},formItemLayout,{label:"id",style:{display:'none'},__source:{fileName:_jsxFileName,lineNumber:83}}),
getFieldDecorator('id',{
initialValue:profile.id})(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default.a,{__source:{fileName:_jsxFileName,lineNumber:86}}))),

__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FormItem,_extends({},formItemLayout,{label:"Username",__source:{fileName:_jsxFileName,lineNumber:88}}),
getFieldDecorator('username',{
rules:[
{
required:true,
message:'Please input your username!'}],


initialValue:profile.username})(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default.a,{__source:{fileName:_jsxFileName,lineNumber:97}}))),

__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FormItem,_extends({},formItemLayout,{label:"Email",__source:{fileName:_jsxFileName,lineNumber:99}}),
getFieldDecorator('email',{
rules:[
{
required:true,
message:'Please input your email!'}],


initialValue:profile.email})(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default.a,{__source:{fileName:_jsxFileName,lineNumber:108}}))),


__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FormItem,_extends({},tailFormItemLayout,{__source:{fileName:_jsxFileName,lineNumber:111}}),
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a,{type:"primary",htmlType:"submit",loading:loading,__source:{fileName:_jsxFileName,lineNumber:112}},"Save"))));





})));}));





}}]);return _class2;}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component));


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["withApollo"])(UpdateUserForm));

/***/ }),

/***/ "./components/profile/userProfile/UpdateSecurityForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_spin__ = __webpack_require__("antd/lib/spin");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_spin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_spin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input__ = __webpack_require__("antd/lib/input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_message__ = __webpack_require__("antd/lib/message");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_form__ = __webpack_require__("antd/lib/form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_mutations_gql__ = __webpack_require__("./graphql/mutations.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_mutations_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__graphql_mutations_gql__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateSecurityForm.js";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}



var FormItem=__WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default.a.Item;
var antIcon=__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default.a,{type:"loading",style:{fontSize:24},spin:true,__source:{fileName:_jsxFileName,lineNumber:6}});

var UpdatePasswordForm=__WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default.a.create({})(/*#__PURE__*/function(_React$Component){_inherits(_class2,_React$Component);function _class2(){var _ref;var _temp,_this;_classCallCheck(this,_class2);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _possibleConstructorReturn(_this,(_temp=_this=_possibleConstructorReturn(this,(_ref=_class2.__proto__||Object.getPrototypeOf(_class2)).call.apply(_ref,[this].concat(args))),Object.defineProperty(_assertThisInitialized(_this),"handleUpdate",{configurable:true,enumerable:true,writable:true,value:
function value(e,updateRecord){
e.preventDefault();var
form=_this.props.form;
form.validateFields(function(err,values){
if(err){
return;
}

updateRecord({
variables:{
input:{
oldPassword:values.oldPassword,
newPassword:values.newPassword}}});



});
}}),_temp));}_createClass(_class2,[{key:"render",value:function render()

{var _this2=this;var
form=this.props.form;var
getFieldDecorator=form.getFieldDecorator;
var formItemLayout={
labelCol:{
xs:{span:24},
sm:{span:2}},

wrapperCol:{
xs:{span:24},
sm:{span:6}}};


var tailFormItemLayout={
wrapperCol:{
xs:{
span:24,
offset:0},

sm:{
span:8,
offset:2}}};



return(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["Mutation"],{
mutation:__WEBPACK_IMPORTED_MODULE_8__graphql_mutations_gql__["updatePassword"],
onCompleted:function onCompleted(_ref2){var passwordIsUpdated=_ref2.updatePassword.passwordIsUpdated;
if(passwordIsUpdated){
__WEBPACK_IMPORTED_MODULE_3_antd_lib_message___default.a.success('Your Password is updated!',3);
}
},
onError:function onError(error){
// If you want to send error to external service?
error.graphQLErrors.map(function(_ref3,i){var message=_ref3.message;
__WEBPACK_IMPORTED_MODULE_3_antd_lib_message___default.a.error(message,3);
});
},__source:{fileName:_jsxFileName,lineNumber:54}},

function(updateRecord,_ref4){var loading=_ref4.loading,data=_ref4.data,error=_ref4.error;return(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_spin___default.a,{indicator:antIcon,spinning:loading,tip:"Updating Password...",__source:{fileName:_jsxFileName,lineNumber:69}},
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default.a,{onSubmit:function onSubmit(e){return _this2.handleUpdate(e,updateRecord);},__source:{fileName:_jsxFileName,lineNumber:70}},
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FormItem,_extends({},formItemLayout,{label:"Old Password",__source:{fileName:_jsxFileName,lineNumber:71}}),
getFieldDecorator('oldPassword',{
rules:[
{
required:true,
message:'Please input your old password!'}]})(


__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default.a,{type:"password",__source:{fileName:_jsxFileName,lineNumber:79}}))),


__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FormItem,_extends({},formItemLayout,{label:"New Password",__source:{fileName:_jsxFileName,lineNumber:82}}),
getFieldDecorator('newPassword',{
rules:[
{
required:true,
message:'Please input your new password!'}]})(


__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default.a,{type:"password",__source:{fileName:_jsxFileName,lineNumber:90}}))),

__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FormItem,_extends({},tailFormItemLayout,{__source:{fileName:_jsxFileName,lineNumber:92}}),
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a,{type:"primary",htmlType:"submit",loading:loading,__source:{fileName:_jsxFileName,lineNumber:93}},"Save")))));}));








}}]);return _class2;}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component));


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["withApollo"])(UpdatePasswordForm));

/***/ }),

/***/ "./graphql/mutations.gql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatedUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePasswordInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"passwordIsUpdated"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdProject"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateMemberRoleInProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMemberRoleInProjectInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMemberRoleInProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updated"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":817}};
    doc.loc.source = {"body":"mutation loginUser($input: LoginInput!) {\n  loginUser(input: $input) {\n    token\n  }\n}\n\nmutation createUser($input: CreateUserInput!) {\n  createUser(input: $input) {\n    createdUser {\n      id\n      username\n      email\n      createdAt\n    }\n  }\n}\n\nmutation updateUserInfo($input: UpdateUserInput!) {\n  updateUser(input: $input) {\n    updatedUser {\n      id\n      username\n      email\n    }\n  }\n}\n\nmutation updatePassword($input: UpdatePasswordInput!) {\n  updatePassword(input: $input) {\n    passwordIsUpdated\n  }\n}\n\nmutation createProject($input: CreateProjectInput!) {\n  createProject(input: $input) {\n    createdProject {\n      id\n      name\n      description\n    }\n  }\n}\n\nmutation updateMemberRoleInProject($input: UpdateMemberRoleInProjectInput!) {\n  updateMemberRoleInProject(input: $input) {\n    updated\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
        
        module.exports["updatePassword"] = oneQuery(doc, "updatePassword");
        
        module.exports["createProject"] = oneQuery(doc, "createProject");
        
        module.exports["updateMemberRoleInProject"] = oneQuery(doc, "updateMemberRoleInProject");
        


/***/ }),

/***/ "./graphql/queries.gql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUser"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUserProfile"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"profile"},"name":{"kind":"Name","value":"currentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUserOnClient"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"arguments":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"},"arguments":[]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllUsers"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectOfCurrentUser"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectsAsMemberOfCurrentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"projectsAsAdminOfCurrentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMembersByProjectId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":783}};
    doc.loc.source = {"body":"query getCurrentUser {\n  currentUser {\n    id\n    username\n    role\n  }\n}\n\nquery getCurrentUserProfile {\n  profile: currentUser {\n    id\n    username\n    email\n    role\n  }\n}\n\nquery getCurrentUserOnClient {\n  currentUser @client {\n    id\n    username\n    role\n  }\n}\n\nquery getAllUsers {\n  users {\n    id\n    username\n    email\n    createdAt\n  }\n}\n\nquery getProjectOfCurrentUser {\n  projectsAsMemberOfCurrentUser {\n    id\n    name\n    description\n  }\n  projectsAsAdminOfCurrentUser {\n    id\n    name\n    description\n  }\n}\n\nquery getMembersByProjectId($projectId: ID!) {\n  projectMembers(projectId: $projectId) {\n    id\n    role\n    user {\n      id\n      email\n      username\n      role\n    }\n  }\n}\n\nquery getProjectById($id: ID!) {\n  project(id: $id) {\n    name\n    description\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
        
        module.exports["getCurrentUserProfile"] = oneQuery(doc, "getCurrentUserProfile");
        
        module.exports["getCurrentUserOnClient"] = oneQuery(doc, "getCurrentUserOnClient");
        
        module.exports["getAllUsers"] = oneQuery(doc, "getAllUsers");
        
        module.exports["getProjectOfCurrentUser"] = oneQuery(doc, "getProjectOfCurrentUser");
        
        module.exports["getMembersByProjectId"] = oneQuery(doc, "getMembersByProjectId");
        
        module.exports["getProjectById"] = oneQuery(doc, "getProjectById");
        


/***/ }),

/***/ "./lib/checkLoggedIn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__graphql_queries_gql__);


/* harmony default export */ __webpack_exports__["a"] = (function(apolloClient){return(
apolloClient.
query({query:__WEBPACK_IMPORTED_MODULE_1__graphql_queries_gql__["getCurrentUser"]}).
then(function(_ref){var data=_ref.data;
console.log(data);
return{currentUser:data.currentUser};
}).
catch(function(err){
console.log(err);
// Fail gracefully
return{currentUser:{}};
}));});

/***/ }),

/***/ "./lib/redirect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_router__);


/* harmony default export */ __webpack_exports__["a"] = (function(context,target){
if(context.res){
// server
// 303: "See other"
context.res.writeHead(303,{Location:target});
context.res.end();
}else{
// In the browser, we just pretend like this never even happened ;)
__WEBPACK_IMPORTED_MODULE_0_next_router___default.a.replace(target);
}
});

/***/ }),

/***/ "./pages/profile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_redirect__ = __webpack_require__("./lib/redirect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_checkLoggedIn__ = __webpack_require__("./lib/checkLoggedIn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_profile_UserProfile__ = __webpack_require__("./components/profile/UserProfile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_projects_less__ = __webpack_require__("./styles/projects.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_projects_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_projects_less__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/pages/profile.js";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _next(value){step("next",value);}function _throw(err){step("throw",err);}_next();});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}


var

Projects=/*#__PURE__*/function(_React$Component){_inherits(Projects,_React$Component);function Projects(){_classCallCheck(this,Projects);return _possibleConstructorReturn(this,(Projects.__proto__||Object.getPrototypeOf(Projects)).apply(this,arguments));}_createClass(Projects,[{key:"render",value:function render()











{
return(
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:20}},
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style",{dangerouslySetInnerHTML:{__html:__WEBPACK_IMPORTED_MODULE_5__styles_projects_less___default.a},__source:{fileName:_jsxFileName,lineNumber:21}}),
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_profile_UserProfile__["a" /* default */],{currentUser:this.props.currentUser,__source:{fileName:_jsxFileName,lineNumber:22}})));


}}],[{key:"getInitialProps",value:function(){var _getInitialProps=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context){var _ref,currentUser;return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Object(__WEBPACK_IMPORTED_MODULE_3__lib_checkLoggedIn__["a" /* default */])(context.apolloClient);case 2:_ref=_context.sent;currentUser=_ref.currentUser;if(!currentUser){// Already signed in? No need to continue.
// Throw them back to the main page
Object(__WEBPACK_IMPORTED_MODULE_2__lib_redirect__["a" /* default */])(context,'/');}return _context.abrupt("return",{currentUser:currentUser});case 6:case"end":return _context.stop();}}},_callee,this);}));return function getInitialProps(_x){return _getInitialProps.apply(this,arguments);};}()}]);return Projects;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/***/ }),

/***/ "./styles/projects.less":
/***/ (function(module, exports) {

;(function(){"use strict";module.exports=".projects-list {\n  padding-top: 0.5%;\n}\n.projects-list .add-project-btn {\n  padding: 5%;\n}\n.projects-list .add-project-btn div.ant-card-body {\n  text-align: center;\n}\n.projects-list span.ant-avatar {\n  margin: 0px 3px;\n}\n.projects-list span.ant-divider-inner-text {\n  background-color: #00b5d0;\n  font-size: 14pt;\n  font-weight: 900;\n  color: #fff;\n}\n.projects-list div.ant-card {\n  cursor: pointer;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;\n}\n.projects-list div.ant-card:hover {\n  -webkit-box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1) !important;\n          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1) !important;\n}\n";})();

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/profile.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd/lib/button":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/form":
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/icon":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/input":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/message":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/spin":
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "antd/lib/tabs":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ })

/******/ });
//# sourceMappingURL=profile.js.map