webpackHotUpdate(5,{

/***/ "./components/project/projectComponent/MembersTab.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_table__ = __webpack_require__("./node_modules/antd/lib/table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_message__ = __webpack_require__("./node_modules/antd/lib/message/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_radio__ = __webpack_require__("./node_modules/antd/lib/radio/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__graphql_queries_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_mutations_gql__ = __webpack_require__("./graphql/mutations.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_mutations_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__graphql_mutations_gql__);
var _jsxFileName="/home/huyloc/code/rubyonrails/emt/client-emt/components/project/projectComponent/MembersTab.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}// import AddMemberForm from "./MembersTap/AddMemberForm";
var RadioButton=__WEBPACK_IMPORTED_MODULE_2_antd_lib_radio___default.a.Button;var RadioGroup=__WEBPACK_IMPORTED_MODULE_2_antd_lib_radio___default.a.Group;function _onChange(updateMemberRoleInProject,e,memberId){updateMemberRoleInProject({variables:{input:{projectMemberId:memberId,role:e.target.value}}});console.log("radio checked:".concat(e.target.value));}var columns=[{title:"Username",render:function render(member){return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a",{href:"javascript:;",__source:{fileName:_jsxFileName,lineNumber:26}},member.user.username);}},{title:"Email",render:function render(member){return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a",{href:"javascript:;",__source:{fileName:_jsxFileName,lineNumber:30}},member.user.email);}},{title:"Role",render:function render(member){if(member.user.role==="root_admin"){return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:36}},"Root Admin");}return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["Mutation"],{mutation:__WEBPACK_IMPORTED_MODULE_7__graphql_mutations_gql__["updateMemberRoleInProject"],onCompleted:function onCompleted(data){console.log(data);},onError:function onError(error){// If you want to send error to external service?
error.graphQLErrors.map(function(_ref,i){var message=_ref.message;__WEBPACK_IMPORTED_MODULE_1_antd_lib_message___default.a.error(message,3);});},__source:{fileName:_jsxFileName,lineNumber:39}},function(updateMemberRoleInProject,_ref2){var loading=_ref2.loading,data=_ref2.data,error=_ref2.error;return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(RadioGroup,{onChange:function onChange(e){return _onChange(updateMemberRoleInProject,e,member.id);},defaultValue:member.role,__source:{fileName:_jsxFileName,lineNumber:52}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(RadioButton,{value:"member",__source:{fileName:_jsxFileName,lineNumber:56}},"Member"),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(RadioButton,{value:"project_admin",__source:{fileName:_jsxFileName,lineNumber:57}},"Project Admin"));});}}];var MembersTab=/*#__PURE__*/function(_React$Component){_inherits(MembersTab,_React$Component);function MembersTab(){_classCallCheck(this,MembersTab);return _possibleConstructorReturn(this,(MembersTab.__proto__||Object.getPrototypeOf(MembersTab)).apply(this,arguments));}_createClass(MembersTab,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:69}},__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br",{__source:{fileName:_jsxFileName,lineNumber:70}}),__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["Query"],{query:__WEBPACK_IMPORTED_MODULE_6__graphql_queries_gql__["getMembersByProjectId"],variables:{projectId:this.props.router.query.id},__source:{fileName:_jsxFileName,lineNumber:71}},function(_ref3){var loading=_ref3.loading,error=_ref3.error,data=_ref3.data;if(loading)return"Loading...";if(error)return"Error! ".concat(error.message);return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_table___default.a,{columns:columns,dataSource:data.projectMembers,rowKey:"id",__source:{fileName:_jsxFileName,lineNumber:79}});}));}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return MembersTab;}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);var _default=Object(__WEBPACK_IMPORTED_MODULE_4_next_router__["withRouter"])(MembersTab);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(RadioButton,"RadioButton","/home/huyloc/code/rubyonrails/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(RadioGroup,"RadioGroup","/home/huyloc/code/rubyonrails/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(_onChange,"onChange","/home/huyloc/code/rubyonrails/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(columns,"columns","/home/huyloc/code/rubyonrails/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(MembersTab,"MembersTab","/home/huyloc/code/rubyonrails/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(_default,"default","/home/huyloc/code/rubyonrails/emt/client-emt/components/project/projectComponent/MembersTab.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/project/projectComponent/MembersTap/AddMemberForm.js":
false,

/***/ "./node_modules/antd/lib/form/Form.js":
false,

/***/ "./node_modules/antd/lib/form/FormItem.js":
false,

/***/ "./node_modules/antd/lib/form/constants.js":
false,

/***/ "./node_modules/antd/lib/form/index.js":
false,

/***/ "./node_modules/antd/lib/grid/col.js":
false,

/***/ "./node_modules/antd/lib/grid/row.js":
false,

/***/ "./node_modules/antd/lib/input/Group.js":
false,

/***/ "./node_modules/antd/lib/input/Input.js":
false,

/***/ "./node_modules/antd/lib/input/Search.js":
false,

/***/ "./node_modules/antd/lib/input/TextArea.js":
false,

/***/ "./node_modules/antd/lib/input/calculateNodeHeight.js":
false,

/***/ "./node_modules/antd/lib/input/index.js":
false,

/***/ "./node_modules/async-validator/es/index.js":
false,

/***/ "./node_modules/async-validator/es/messages.js":
false,

/***/ "./node_modules/async-validator/es/rule/enum.js":
false,

/***/ "./node_modules/async-validator/es/rule/index.js":
false,

/***/ "./node_modules/async-validator/es/rule/pattern.js":
false,

/***/ "./node_modules/async-validator/es/rule/range.js":
false,

/***/ "./node_modules/async-validator/es/rule/required.js":
false,

/***/ "./node_modules/async-validator/es/rule/type.js":
false,

/***/ "./node_modules/async-validator/es/rule/whitespace.js":
false,

/***/ "./node_modules/async-validator/es/util.js":
false,

/***/ "./node_modules/async-validator/es/validator/array.js":
false,

/***/ "./node_modules/async-validator/es/validator/boolean.js":
false,

/***/ "./node_modules/async-validator/es/validator/date.js":
false,

/***/ "./node_modules/async-validator/es/validator/enum.js":
false,

/***/ "./node_modules/async-validator/es/validator/float.js":
false,

/***/ "./node_modules/async-validator/es/validator/index.js":
false,

/***/ "./node_modules/async-validator/es/validator/integer.js":
false,

/***/ "./node_modules/async-validator/es/validator/method.js":
false,

/***/ "./node_modules/async-validator/es/validator/number.js":
false,

/***/ "./node_modules/async-validator/es/validator/object.js":
false,

/***/ "./node_modules/async-validator/es/validator/pattern.js":
false,

/***/ "./node_modules/async-validator/es/validator/regexp.js":
false,

/***/ "./node_modules/async-validator/es/validator/required.js":
false,

/***/ "./node_modules/async-validator/es/validator/string.js":
false,

/***/ "./node_modules/async-validator/es/validator/type.js":
false,

/***/ "./node_modules/enquire.js/src/MediaQuery.js":
false,

/***/ "./node_modules/enquire.js/src/MediaQueryDispatch.js":
false,

/***/ "./node_modules/enquire.js/src/QueryHandler.js":
false,

/***/ "./node_modules/enquire.js/src/Util.js":
false,

/***/ "./node_modules/enquire.js/src/index.js":
false,

/***/ "./node_modules/intersperse/lib/intersperse.js":
false,

/***/ "./node_modules/lodash/_baseHas.js":
false,

/***/ "./node_modules/lodash/_baseSet.js":
false,

/***/ "./node_modules/lodash/_hasPath.js":
false,

/***/ "./node_modules/lodash/has.js":
false,

/***/ "./node_modules/lodash/set.js":
false,

/***/ "./node_modules/rc-form/lib/createBaseForm.js":
false,

/***/ "./node_modules/rc-form/lib/createDOMForm.js":
false,

/***/ "./node_modules/rc-form/lib/createFieldsStore.js":
false,

/***/ "./node_modules/rc-form/lib/createForm.js":
false,

/***/ "./node_modules/rc-form/lib/createFormField.js":
false,

/***/ "./node_modules/rc-form/lib/utils.js":
false

})
//# sourceMappingURL=5.485d11bd8b5f1e0dcf91.hot-update.js.map