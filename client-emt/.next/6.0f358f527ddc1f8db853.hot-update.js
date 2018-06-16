webpackHotUpdate(6,{

/***/ "./components/project/projectComponent/MembersTab.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_message__ = __webpack_require__("./node_modules/antd/lib/message/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_tag__ = __webpack_require__("./node_modules/antd/lib/tag/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_table__ = __webpack_require__("./node_modules/antd/lib/table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_radio__ = __webpack_require__("./node_modules/antd/lib/radio/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_cloudinary_react__ = __webpack_require__("./node_modules/cloudinary-react/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_cloudinary_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_cloudinary_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants__ = __webpack_require__("./constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__graphql_queries_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_mutations_gql__ = __webpack_require__("./graphql/mutations.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_mutations_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__graphql_mutations_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_If__ = __webpack_require__("./utils/If.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__MembersTap_AddMemberForm__ = __webpack_require__("./components/project/projectComponent/MembersTap/AddMemberForm.js");
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js";var _templateObject=/*#__PURE__*/_taggedTemplateLiteral(["\n                    fragment currentProject on Project {\n                      isManagedByCurrentUser\n                    }\n                  "]);(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}











var humanizeString=__webpack_require__("./node_modules/humanize-string/index.js");

var RadioButton=__WEBPACK_IMPORTED_MODULE_3_antd_lib_radio___default.a.Button;
var RadioGroup=__WEBPACK_IMPORTED_MODULE_3_antd_lib_radio___default.a.Group;var
Column=__WEBPACK_IMPORTED_MODULE_2_antd_lib_table___default.a.Column,ColumnGroup=__WEBPACK_IMPORTED_MODULE_2_antd_lib_table___default.a.ColumnGroup;

function _onChange(updateMemberRoleInProject,e,memberId){
updateMemberRoleInProject({
variables:{
input:{
projectMemberId:memberId,
role:e.target.value}}});



console.log("radio checked:".concat(e.target.value));
}var

MembersTab=/*#__PURE__*/function(_React$Component){_inherits(MembersTab,_React$Component);function MembersTab(){_classCallCheck(this,MembersTab);return _possibleConstructorReturn(this,(MembersTab.__proto__||Object.getPrototypeOf(MembersTab)).apply(this,arguments));}_createClass(MembersTab,[{key:"render",value:function render()
{var _this=this;
return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["Query"],{
query:__WEBPACK_IMPORTED_MODULE_10__graphql_queries_gql__["getMembersByProjectId"],
variables:{projectId:this.props.router.query.id},__source:{fileName:_jsxFileName,lineNumber:36}},

function(_ref){var loading=_ref.loading,error=_ref.error,data=_ref.data;
if(loading)return'Loading...';
if(error)return"Error! ".concat(error.message);
return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["ApolloConsumer"],{__source:{fileName:_jsxFileName,lineNumber:44}},
function(client){
var project=client.readFragment({
id:"Project:".concat(_this.props.router.query.id),
fragment:__WEBPACK_IMPORTED_MODULE_7_graphql_tag___default()(_templateObject)});var





isManagedByCurrentUser=project.isManagedByCurrentUser;

return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:57}},
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__utils_If__["a" /* default */],{condition:isManagedByCurrentUser,then:__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__MembersTap_AddMemberForm__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:58}}),"else":null,__source:{fileName:_jsxFileName,lineNumber:58}}),
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_table___default.a,{loading:loading,dataSource:data.projectMembers,rowKey:"id",__source:{fileName:_jsxFileName,lineNumber:59}},
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Column,{
title:"Username",
key:"username",
render:function render(member){return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a",{href:"javascript:;",__source:{fileName:_jsxFileName,lineNumber:63}},member.user.username);},__source:{fileName:_jsxFileName,lineNumber:60}}),

__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Column,{
title:"Email",
key:"email",
render:function render(member){return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a",{href:"javascript:;",__source:{fileName:_jsxFileName,lineNumber:68}},member.user.email);},__source:{fileName:_jsxFileName,lineNumber:65}}),

__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Column,{
title:"Role",
key:"role",
render:function render(member){
if(member.user.role==='root_admin'){
return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_tag___default.a,{color:"gold",__source:{fileName:_jsxFileName,lineNumber:75}},"Root admin");
}
return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["Mutation"],{
mutation:__WEBPACK_IMPORTED_MODULE_11__graphql_mutations_gql__["updateMemberRoleInProject"],
onCompleted:function onCompleted(data){
console.log(data);
},
onError:function onError(error){
// If you want to send error to external service?
error.graphQLErrors.map(function(_ref2,i){var message=_ref2.message;
__WEBPACK_IMPORTED_MODULE_0_antd_lib_message___default.a.error(message,3);
});
},__source:{fileName:_jsxFileName,lineNumber:78}},

function(updateMemberRoleInProject,_ref3){var loading=_ref3.loading,data=_ref3.data,error=_ref3.error;return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__utils_If__["a" /* default */],{
condition:isManagedByCurrentUser,
then:
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(RadioGroup,{
onChange:function onChange(e){return(
_onChange(updateMemberRoleInProject,e,member.id));},

defaultValue:member.role,__source:{fileName:_jsxFileName,lineNumber:94}},

__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(RadioButton,{value:"member",__source:{fileName:_jsxFileName,lineNumber:100}},"Member"),
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(RadioButton,{value:"project_admin",__source:{fileName:_jsxFileName,lineNumber:101}},"Project Admin")),


"else":
member.role==='project_admin'?
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_tag___default.a,{color:"cyan",__source:{fileName:_jsxFileName,lineNumber:106}},humanizeString(member.role)):

__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:108}},humanizeString(member.role)),__source:{fileName:_jsxFileName,lineNumber:91}}));}));






},__source:{fileName:_jsxFileName,lineNumber:70}}))));




}));


}));


}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return MembersTab;}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);var _default=
Object(__WEBPACK_IMPORTED_MODULE_5_next_router__["withRouter"])(MembersTab);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(RadioButton,"RadioButton","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(RadioGroup,"RadioGroup","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(Column,"Column","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(ColumnGroup,"ColumnGroup","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(_onChange,"onChange","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(MembersTab,"MembersTab","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.0f358f527ddc1f8db853.hot-update.js.map