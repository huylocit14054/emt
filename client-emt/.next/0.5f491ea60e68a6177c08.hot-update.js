webpackHotUpdate(0,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_cloudinary_react__ = __webpack_require__("./node_modules/cloudinary-react/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_cloudinary_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_cloudinary_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__graphql_mutations_gql__ = __webpack_require__("./graphql/mutations.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__graphql_mutations_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__graphql_mutations_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__graphql_queries_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants__ = __webpack_require__("./constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__styles_updateAvatar_less__ = __webpack_require__("./styles/updateAvatar.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__styles_updateAvatar_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__styles_updateAvatar_less__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/topHeader/ChangeAvatarModal.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _next(value){step("next",value);}function _throw(err){step("throw",err);}_next();});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}





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
mutation:__WEBPACK_IMPORTED_MODULE_9__graphql_mutations_gql__["updateAvatar"],
variables:{
input:{
avatar:file}}}).



then(function(data){var
avatarUrl=data.data.updateAvatar.avatarUrl;var _this$props$client$re=

_this.props.client.readQuery({
query:__WEBPACK_IMPORTED_MODULE_10__graphql_queries_gql__["getCurrentUser"]}),currentUser=_this$props$client$re.currentUser;

currentUser.avatar=avatarUrl;
_this.props.client.writeQuery({
query:__WEBPACK_IMPORTED_MODULE_10__graphql_queries_gql__["getCurrentUser"],
data:{currentUser:currentUser}});


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
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:76}},
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("a",{onClick:this.showModal,className:"change-avatar-link",__source:{fileName:_jsxFileName,lineNumber:77}},"Change Avatar"),


__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default.a,{
title:"Change Picture",
visible:this.state.visible,
footer:null,
onCancel:this.handleCancel,__source:{fileName:_jsxFileName,lineNumber:80}},

__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["ApolloConsumer"],{__source:{fileName:_jsxFileName,lineNumber:86}},
function(client){
var data=client.readQuery({
query:__WEBPACK_IMPORTED_MODULE_10__graphql_queries_gql__["getCurrentUser"]});var

currentUser=data.currentUser;
return(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div",{className:"upload-avatar-layout",__source:{fileName:_jsxFileName,lineNumber:93}},
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_upload___default.a,{
name:"avatar",
listType:"picture-card",
className:"avatar-uploader",
showUploadList:false,
beforeUpload:_this2.beforeUpload,__source:{fileName:_jsxFileName,lineNumber:94}},

__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("style",{dangerouslySetInnerHTML:{__html:__WEBPACK_IMPORTED_MODULE_12__styles_updateAvatar_less___default.a},__source:{fileName:_jsxFileName,lineNumber:101}}),
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_spin___default.a,{
tip:"Uploading...",
spinning:_this2.state.loading,
style:{right:'0%'},
indicator:__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default.a,{type:"loading",style:{fontSize:24},spin:true,__source:{fileName:_jsxFileName,lineNumber:106}}),__source:{fileName:_jsxFileName,lineNumber:102}},

__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_cloudinary_react__["Image"],{
cloudName:__WEBPACK_IMPORTED_MODULE_11__constants__["CLOUD_NAME"],
publicId:currentUser.avatar,
width:"300",
crop:"scale",
style:{margin:'auto'},__source:{fileName:_jsxFileName,lineNumber:108}})))));





}))));




}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return ChangeAvatarModal;}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);var _default=
Object(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["withApollo"])(ChangeAvatarModal);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(ChangeAvatarModal,"ChangeAvatarModal","/home/nenjamin2405/redpola/emt/client-emt/components/topHeader/ChangeAvatarModal.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/components/topHeader/ChangeAvatarModal.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=0.5f491ea60e68a6177c08.hot-update.js.map