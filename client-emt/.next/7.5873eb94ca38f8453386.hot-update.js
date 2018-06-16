webpackHotUpdate(7,{

/***/ "./components/profile/UserProfile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_tabs__ = __webpack_require__("./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userProfile_UpdateInfoForm__ = __webpack_require__("./components/profile/userProfile/UpdateInfoForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userProfile_UpdateSecurityForm__ = __webpack_require__("./components/profile/userProfile/UpdateSecurityForm.js");
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/profile/UserProfile.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

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




}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return ProfileLayout;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);var _default=
ProfileLayout;/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(TabPane,"TabPane","/home/nenjamin2405/redpola/emt/client-emt/components/profile/UserProfile.js");reactHotLoader.register(ProfileLayout,"ProfileLayout","/home/nenjamin2405/redpola/emt/client-emt/components/profile/UserProfile.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/components/profile/UserProfile.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/profile/userProfile/UpdateInfoForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_spin__ = __webpack_require__("./node_modules/antd/lib/spin/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_spin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_spin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__("./node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input__ = __webpack_require__("./node_modules/antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_message__ = __webpack_require__("./node_modules/antd/lib/message/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_form__ = __webpack_require__("./node_modules/antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_mutations_gql__ = __webpack_require__("./graphql/mutations.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_mutations_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__graphql_mutations_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__graphql_queries_gql__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateInfoForm.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}




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





}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return _class2;}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component));var _default=
Object(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["withApollo"])(UpdateUserForm);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(FormItem,"FormItem","/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateInfoForm.js");reactHotLoader.register(antIcon,"antIcon","/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateInfoForm.js");reactHotLoader.register(UpdateUserForm,"UpdateUserForm","/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateInfoForm.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateInfoForm.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/profile/userProfile/UpdateSecurityForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_spin__ = __webpack_require__("./node_modules/antd/lib/spin/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_spin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_spin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__("./node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input__ = __webpack_require__("./node_modules/antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_message__ = __webpack_require__("./node_modules/antd/lib/message/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_form__ = __webpack_require__("./node_modules/antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_mutations_gql__ = __webpack_require__("./graphql/mutations.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_mutations_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__graphql_mutations_gql__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateSecurityForm.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}



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








}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return _class2;}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component));var _default=
Object(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["withApollo"])(UpdatePasswordForm);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(FormItem,"FormItem","/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateSecurityForm.js");reactHotLoader.register(antIcon,"antIcon","/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateSecurityForm.js");reactHotLoader.register(UpdatePasswordForm,"UpdatePasswordForm","/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateSecurityForm.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateSecurityForm.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

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
        


/***/ })

})
//# sourceMappingURL=7.5873eb94ca38f8453386.hot-update.js.map