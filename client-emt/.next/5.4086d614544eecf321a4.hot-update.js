webpackHotUpdate(5,{

/***/ "./components/project/ProjectLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_tabs__ = __webpack_require__("./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projectComponent_MembersTab__ = __webpack_require__("./components/project/projectComponent/MembersTab.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__graphql_queries_gql__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/project/ProjectLayout.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}



var

TabPane=__WEBPACK_IMPORTED_MODULE_0_antd_lib_tabs___default.a.TabPane;var
ProjectLayout=/*#__PURE__*/function(_React$Component){_inherits(ProjectLayout,_React$Component);function ProjectLayout(){_classCallCheck(this,ProjectLayout);return _possibleConstructorReturn(this,(ProjectLayout.__proto__||Object.getPrototypeOf(ProjectLayout)).apply(this,arguments));}_createClass(ProjectLayout,[{key:"render",value:function render()
{var
activeKey=this.props.activeKey;
return(
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:12}},
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["Query"],{query:__WEBPACK_IMPORTED_MODULE_5__graphql_queries_gql__["getProjectById"],variables:{id:this.props.router.query.id},__source:{fileName:_jsxFileName,lineNumber:13}},
function(_ref){var loading=_ref.loading,error=_ref.error,data=_ref.data;
if(loading)return'Loading...';
if(error)return"Error! ".concat(error.message);var
project=data.project;
return(
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{style:{marginBottom:'1%'},__source:{fileName:_jsxFileName,lineNumber:19}},
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2",{__source:{fileName:_jsxFileName,lineNumber:20}},project.name),
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:21}},project.description)));


}),


__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_tabs___default.a,{activeKey:activeKey,__source:{fileName:_jsxFileName,lineNumber:27}},
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TabPane,{tab:"Members",key:"members",__source:{fileName:_jsxFileName,lineNumber:28}},
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__projectComponent_MembersTab__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:29}})),

__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TabPane,{tab:"Dimensions",key:"dimensions",__source:{fileName:_jsxFileName,lineNumber:31}},"Content of Tab Pane 2"),


__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TabPane,{tab:"Assignments",key:"assignments",__source:{fileName:_jsxFileName,lineNumber:34}},"Content of Tab Pane 3"))));





}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return ProjectLayout;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);var _default=
Object(__WEBPACK_IMPORTED_MODULE_2_next_router__["withRouter"])(ProjectLayout);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(TabPane,"TabPane","/home/nenjamin2405/redpola/emt/client-emt/components/project/ProjectLayout.js");reactHotLoader.register(ProjectLayout,"ProjectLayout","/home/nenjamin2405/redpola/emt/client-emt/components/project/ProjectLayout.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/components/project/ProjectLayout.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
{
var projectId=this.props.router.query.id;
return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["Query"],{query:__WEBPACK_IMPORTED_MODULE_10__graphql_queries_gql__["getMembersByProjectId"],variables:{projectId:projectId},__source:{fileName:_jsxFileName,lineNumber:37}},
function(_ref){var loading=_ref.loading,error=_ref.error,data=_ref.data;
if(loading)return'Loading...';
if(error)return"Error! ".concat(error.message);
return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["ApolloConsumer"],{__source:{fileName:_jsxFileName,lineNumber:42}},
function(client){
var project=client.readFragment({
id:"Project:".concat(projectId),
fragment:__WEBPACK_IMPORTED_MODULE_7_graphql_tag___default()(_templateObject)});var





isManagedByCurrentUser=project.isManagedByCurrentUser;

return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:55}},
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__utils_If__["a" /* default */],{
condition:isManagedByCurrentUser,
then:__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__MembersTap_AddMemberForm__["a" /* default */],{projectId:projectId,__source:{fileName:_jsxFileName,lineNumber:58}}),
"else":null,__source:{fileName:_jsxFileName,lineNumber:56}}),

__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("br",{__source:{fileName:_jsxFileName,lineNumber:61}}),
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_table___default.a,{
pagination:{pageSize:7},
loading:loading,
dataSource:data.projectMembers,
rowKey:"id",__source:{fileName:_jsxFileName,lineNumber:62}},

__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Column,{
title:"Username",
key:"username",
render:function render(member){return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a",{href:"javascript:;",__source:{fileName:_jsxFileName,lineNumber:72}},
' ',
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_cloudinary_react__["Image"],{
cloudName:__WEBPACK_IMPORTED_MODULE_9__constants__["CLOUD_NAME"],
publicId:member.user.avatar,
width:"40",
crop:"scale",
style:{borderRadius:'50%',marginRight:20},__source:{fileName:_jsxFileName,lineNumber:74}}),

member.user.username));},__source:{fileName:_jsxFileName,lineNumber:68}}),



__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Column,{
title:"Email",
key:"email",
render:function render(member){return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a",{href:"javascript:;",__source:{fileName:_jsxFileName,lineNumber:88}},member.user.email);},__source:{fileName:_jsxFileName,lineNumber:85}}),

__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Column,{
title:"Role",
key:"role",
render:function render(member){
if(member.user.role==='root_admin'){
return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_tag___default.a,{color:"gold",__source:{fileName:_jsxFileName,lineNumber:95}},"Root admin");
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
},__source:{fileName:_jsxFileName,lineNumber:98}},

function(updateMemberRoleInProject,_ref3){var loading=_ref3.loading,data=_ref3.data,error=_ref3.error;return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__utils_If__["a" /* default */],{
condition:isManagedByCurrentUser,
then:
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(RadioGroup,{
onChange:function onChange(e){return(
_onChange(updateMemberRoleInProject,e,member.id));},

defaultValue:member.role,__source:{fileName:_jsxFileName,lineNumber:114}},

__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(RadioButton,{value:"member",__source:{fileName:_jsxFileName,lineNumber:120}},"Member"),
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(RadioButton,{value:"project_admin",__source:{fileName:_jsxFileName,lineNumber:121}},"Project Admin")),


"else":
member.role==='project_admin'?
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_tag___default.a,{color:"cyan",__source:{fileName:_jsxFileName,lineNumber:126}},humanizeString(member.role)):

__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:128}},humanizeString(member.role)),__source:{fileName:_jsxFileName,lineNumber:111}}));}));






},__source:{fileName:_jsxFileName,lineNumber:90}}))));




}));


}));


}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return MembersTab;}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);var _default=
Object(__WEBPACK_IMPORTED_MODULE_5_next_router__["withRouter"])(MembersTab);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(RadioButton,"RadioButton","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(RadioGroup,"RadioGroup","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(Column,"Column","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(ColumnGroup,"ColumnGroup","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(_onChange,"onChange","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(MembersTab,"MembersTab","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/project/projectComponent/MembersTap/AddMemberForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button__ = __webpack_require__("./node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_message__ = __webpack_require__("./node_modules/antd/lib/message/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_select__ = __webpack_require__("./node_modules/antd/lib/select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_form__ = __webpack_require__("./node_modules/antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_highlight_words__ = __webpack_require__("./node_modules/react-highlight-words/dist/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_highlight_words___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_highlight_words__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_cloudinary_react__ = __webpack_require__("./node_modules/cloudinary-react/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_cloudinary_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_cloudinary_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants__ = __webpack_require__("./constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__graphql_queries_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_mutations_gql__ = __webpack_require__("./graphql/mutations.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_mutations_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__graphql_mutations_gql__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTap/AddMemberForm.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _next(value){step("next",value);}function _throw(err){step("throw",err);}_next();});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}








var FormItem=__WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default.a.Item;var
Option=__WEBPACK_IMPORTED_MODULE_4_antd_lib_select___default.a.Option;

var antIcon=__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default.a,{type:"loading",style:{fontSize:24},spin:true,__source:{fileName:_jsxFileName,lineNumber:15}});
var AddMemberForm=__WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default.a.create()(/*#__PURE__*/function(_React$Component){_inherits(_class2,_React$Component);function _class2(){var _ref;var _temp,_this;_classCallCheck(this,_class2);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _possibleConstructorReturn(_this,(_temp=_this=_possibleConstructorReturn(this,(_ref=_class2.__proto__||Object.getPrototypeOf(_class2)).call.apply(_ref,[this].concat(args))),Object.defineProperty(_assertThisInitialized(_this),"state",{configurable:true,enumerable:true,writable:true,value:
{
usersSuggestion:[],
value:'',
fetching:false}}),Object.defineProperty(_assertThisInitialized(_this),"fetchUserSuggestion",{configurable:true,enumerable:true,writable:true,value:function(){var _value2=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(

function _callee(_value){var _ref2,data,usersSuggestion;return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:
_this.setState({fetching:true});
_this.setState({value:_value});_context.next=4;return(
_this.props.client.query({
query:__WEBPACK_IMPORTED_MODULE_11__graphql_queries_gql__["usersSuggestion"],
variables:{
query:_value}}));case 4:_ref2=_context.sent;data=_ref2.data;


usersSuggestion=data.usersSuggestion;

_this.setState({usersSuggestion:usersSuggestion,fetching:false});case 8:case"end":return _context.stop();}}},_callee,this);}));return function value(_x){return _value2.apply(this,arguments);};}()}),Object.defineProperty(_assertThisInitialized(_this),"onAdd",{configurable:true,enumerable:true,writable:true,value:function(){var _value3=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(


function _callee2(e,addMemberToProject){return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:
e.preventDefault();
_this.props.form.validateFields(function(err,values){
if(!err){
console.log('Received values of form: ',values);
addMemberToProject({
variables:{
input:_objectSpread({
projectId:parseInt(_this.props.projectId)},
values)},


refetchQueries:[
{
query:__WEBPACK_IMPORTED_MODULE_11__graphql_queries_gql__["getMembersByProjectId"],
variables:{
projectId:_this.props.projectId}}]});




}
});case 2:case"end":return _context2.stop();}}},_callee2,this);}));return function value(_x2,_x3){return _value3.apply(this,arguments);};}()}),_temp));}_createClass(_class2,[{key:"render",value:function render()

{var _this2=this;var _state=
this.state,fetching=_state.fetching,usersSuggestion=_state.usersSuggestion,value=_state.value;var
getFieldDecorator=this.props.form.getFieldDecorator;var
projectId=this.props.projectId;

return(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["Mutation"],{
mutation:__WEBPACK_IMPORTED_MODULE_12__graphql_mutations_gql__["addMemberToProject"],
onCompleted:function onCompleted(data){var
form=_this2.props.form;

__WEBPACK_IMPORTED_MODULE_1_antd_lib_message___default.a.success('Member Added');
form.resetFields();
},
onError:function onError(error){

_this2.props.form.resetFields();

error.graphQLErrors.map(function(_ref3,i){var message=_ref3.message;
__WEBPACK_IMPORTED_MODULE_1_antd_lib_message___default.a.error(message,3);
});
},__source:{fileName:_jsxFileName,lineNumber:66}},

function(addMemberToProject,_ref4){var loading=_ref4.loading;return(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_form___default.a,{layout:"inline",onSubmit:function onSubmit(e){return _this2.onAdd(e,addMemberToProject);},__source:{fileName:_jsxFileName,lineNumber:84}},
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FormItem,{__source:{fileName:_jsxFileName,lineNumber:85}},
getFieldDecorator('username',{
rules:[
{
required:true,
message:'Please input the username/email of user!'}],


initialValue:''})(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_select___default.a,{
mode:"combobox",
placeholder:"Username or email address",
notFoundContent:
fetching?__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default.a,{type:"loading",style:{fontSize:24},spin:true,__source:{fileName:_jsxFileName,lineNumber:98}}):null,

filterOption:false,
defaultActiveFirstOption:false,
showArrow:false,

onChange:_this2.fetchUserSuggestion,
style:{width:'350px'},__source:{fileName:_jsxFileName,lineNumber:94}},

usersSuggestion.map(function(user){return(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option,{key:user.username,__source:{fileName:_jsxFileName,lineNumber:108}},
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_cloudinary_react__["Image"],{
cloudName:__WEBPACK_IMPORTED_MODULE_10__constants__["CLOUD_NAME"],
publicId:user.avatar,
width:"25",
crop:"scale",
style:{borderRadius:'50%',marginRight:10},__source:{fileName:_jsxFileName,lineNumber:109}}),

__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_highlight_words___default.a,{
highlightClassName:"highlight-keyword-username",
searchWords:[_this2.state.value],
autoEscape:true,
textToHighlight:user.username,__source:{fileName:_jsxFileName,lineNumber:116}}),
' ',"|",

__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_highlight_words___default.a,{
className:"small-email-text",
highlightClassName:"highlight-keyword-email",
searchWords:[_this2.state.value],
autoEscape:true,
textToHighlight:user.email,
style:{marginLeft:40},__source:{fileName:_jsxFileName,lineNumber:123}})));})))),






__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FormItem,{__source:{fileName:_jsxFileName,lineNumber:136}},
getFieldDecorator('role',{
initialValue:'member'})(
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_select___default.a,{placeholder:"Please select member's role",__source:{fileName:_jsxFileName,lineNumber:139}},
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option,{key:"member",__source:{fileName:_jsxFileName,lineNumber:140}},"member"),
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option,{key:"project_admin",__source:{fileName:_jsxFileName,lineNumber:141}},"admin")))),


__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FormItem,{__source:{fileName:_jsxFileName,lineNumber:144}},
__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default.a,{type:"primary",htmlType:"submit",loading:loading,__source:{fileName:_jsxFileName,lineNumber:145}},"Add"))));}));







}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return _class2;}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component));var _default=
Object(__WEBPACK_IMPORTED_MODULE_7_react_apollo__["withApollo"])(AddMemberForm);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(FormItem,"FormItem","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTap/AddMemberForm.js");reactHotLoader.register(Option,"Option","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTap/AddMemberForm.js");reactHotLoader.register(antIcon,"antIcon","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTap/AddMemberForm.js");reactHotLoader.register(AddMemberForm,"AddMemberForm","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTap/AddMemberForm.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTap/AddMemberForm.js");leaveModule(module);})();;
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

/***/ "./lib/checkLoggedIn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__graphql_queries_gql__);
(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();
var _default=
function _default(apolloClient){return(
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
}));};/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/lib/checkLoggedIn.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.4086d614544eecf321a4.hot-update.js.map