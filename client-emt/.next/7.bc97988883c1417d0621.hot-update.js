webpackHotUpdate(7,{

/***/ "./components/profile/userProfile/UpdateInfoForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button__ = __webpack_require__("./node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_input__ = __webpack_require__("./node_modules/antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_message__ = __webpack_require__("./node_modules/antd/lib/message/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_form__ = __webpack_require__("./node_modules/antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphql_mutations_gql__ = __webpack_require__("./graphql/mutations.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphql_mutations_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__graphql_mutations_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__graphql_queries_gql__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateInfoForm.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}




var FormItem=__WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default.a.Item;

var loadingMessage=function loadingMessage(loading){
if(loading){
__WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.loading('Updating your profile...',0);
}else{
__WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.loading('Updating your profile...',0);
}
};
var UpdateUserForm=__WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default.a.create({})(/*#__PURE__*/function(_React$Component){_inherits(_class2,_React$Component);function _class2(){var _ref;var _temp,_this;_classCallCheck(this,_class2);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _possibleConstructorReturn(_this,(_temp=_this=_possibleConstructorReturn(this,(_ref=_class2.__proto__||Object.getPrototypeOf(_class2)).call.apply(_ref,[this].concat(args))),Object.defineProperty(_assertThisInitialized(_this),"handleUpdate",{configurable:true,enumerable:true,writable:true,value:
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
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["Mutation"],{
mutation:__WEBPACK_IMPORTED_MODULE_6__graphql_mutations_gql__["updateUserInfo"],
onCompleted:function onCompleted(){
__WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.success('Your Profile is updated!',3);
},
onError:function onError(error){
// If you want to send error to external service?
error.graphQLErrors.map(function(_ref2,i){var message=_ref2.message;
__WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(message,3);
});
},__source:{fileName:_jsxFileName,lineNumber:60}},

function(updateUserInfo,_ref3){var loading=_ref3.loading,data=_ref3.data,error=_ref3.error;return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:73}},
loadingMessage(loading),
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["Query"],{
query:__WEBPACK_IMPORTED_MODULE_7__graphql_queries_gql__["getCurrentUserProfile"],
onCompleted:function onCompleted(data){},
onError:function onError(error){
// If you want to send error to external service?
},__source:{fileName:_jsxFileName,lineNumber:75}},

function(_ref4){var loading=_ref4.loading,error=_ref4.error,data=_ref4.data;var
profile=data.profile;
if(loading)return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:84}},"loading...");

return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default.a,{onSubmit:function onSubmit(e){return _this2.handleUpdate(e,updateUserInfo);},__source:{fileName:_jsxFileName,lineNumber:87}},
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(FormItem,_extends({},formItemLayout,{label:"id",style:{display:'none'},__source:{fileName:_jsxFileName,lineNumber:88}}),
getFieldDecorator('id',{
initialValue:profile.id})(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default.a,{__source:{fileName:_jsxFileName,lineNumber:91}}))),

__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(FormItem,_extends({},formItemLayout,{label:"Username",__source:{fileName:_jsxFileName,lineNumber:93}}),
getFieldDecorator('username',{
rules:[
{
required:true,
message:'Please input your username!'}],


initialValue:profile.username})(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default.a,{__source:{fileName:_jsxFileName,lineNumber:102}}))),

__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(FormItem,_extends({},formItemLayout,{label:"Email",__source:{fileName:_jsxFileName,lineNumber:104}}),
getFieldDecorator('email',{
rules:[
{
required:true,
message:'Please input your email!'}],


initialValue:profile.email})(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default.a,{__source:{fileName:_jsxFileName,lineNumber:113}}))),


__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(FormItem,_extends({},tailFormItemLayout,{__source:{fileName:_jsxFileName,lineNumber:116}}),
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default.a,{type:"primary",htmlType:"submit",loading:loading,__source:{fileName:_jsxFileName,lineNumber:117}},"Save"))));





})));}));





}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return _class2;}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component));var _default=
Object(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"])(UpdateUserForm);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(FormItem,"FormItem","/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateInfoForm.js");reactHotLoader.register(loadingMessage,"loadingMessage","/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateInfoForm.js");reactHotLoader.register(UpdateUserForm,"UpdateUserForm","/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateInfoForm.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/components/profile/userProfile/UpdateInfoForm.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.bc97988883c1417d0621.hot-update.js.map