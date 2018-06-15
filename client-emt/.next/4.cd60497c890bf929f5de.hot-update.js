webpackHotUpdate(4,{

/***/ "./components/projects/projectsList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar__ = __webpack_require__("./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_divider__ = __webpack_require__("./node_modules/antd/lib/divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_list__ = __webpack_require__("./node_modules/antd/lib/list/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_card__ = __webpack_require__("./node_modules/antd/lib/card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__graphql_queries_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projectsList_ListItem__ = __webpack_require__("./components/projects/projectsList/ListItem.js");
var _jsxFileName="/home/huyloc/code/rubyonrails/emt/client-emt/components/projects/projectsList.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var addNewProject=[{title:"Add new project"}];var ProjectsList=/*#__PURE__*/function(_React$Component){_inherits(ProjectsList,_React$Component);function ProjectsList(){_classCallCheck(this,ProjectsList);return _possibleConstructorReturn(this,(ProjectsList.__proto__||Object.getPrototypeOf(ProjectsList)).apply(this,arguments));}_createClass(ProjectsList,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"projects-list",__source:{fileName:_jsxFileName,lineNumber:14}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_list___default.a,{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3},dataSource:addNewProject,renderItem:function renderItem(item){return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_list___default.a.Item,{__source:{fileName:_jsxFileName,lineNumber:27}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_card___default.a,{className:"add-project-btn",__source:{fileName:_jsxFileName,lineNumber:28}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("b",{__source:{fileName:_jsxFileName,lineNumber:29}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default.a,{type:"plus",__source:{fileName:_jsxFileName,lineNumber:30}})," ",item.title)));},__source:{fileName:_jsxFileName,lineNumber:15}}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["Query"],{query:__WEBPACK_IMPORTED_MODULE_7__graphql_queries_gql__["getProjectOfCurrentUser"],__source:{fileName:_jsxFileName,lineNumber:36}},function(_ref){var loading=_ref.loading,error=_ref.error,data=_ref.data;if(loading)return"Loading...";if(error)return"Error! ".concat(error.message);var projectsAsAdminOfCurrentUser=data.projectsAsAdminOfCurrentUser,projectsAsMemberOfCurrentUser=data.projectsAsMemberOfCurrentUser;return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:45}},projectsAsAdminOfCurrentUser.length>0&&__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:47}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_divider___default.a,{orientation:"left",__source:{fileName:_jsxFileName,lineNumber:48}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default.a,{type:"solution",style:{marginRight:8},__source:{fileName:_jsxFileName,lineNumber:49}}),"As Admin"),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_list___default.a,{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3},dataSource:projectsAsAdminOfCurrentUser,renderItem:function renderItem(project){return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__projectsList_ListItem__["a" /* default */],{project:project,__source:{fileName:_jsxFileName,lineNumber:63}});},__source:{fileName:_jsxFileName,lineNumber:52}}),projectsAsMemberOfCurrentUser.length>0&&__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:67}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_divider___default.a,{orientation:"left",__source:{fileName:_jsxFileName,lineNumber:68}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default.a,{type:"user",style:{marginRight:8},__source:{fileName:_jsxFileName,lineNumber:69}}),"As Member"),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_list___default.a,{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3},dataSource:projectsAsMemberOfCurrentUser,renderItem:function renderItem(project){return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_list___default.a.Item,{__source:{fileName:_jsxFileName,lineNumber:84}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_card___default.a,{__source:{fileName:_jsxFileName,lineNumber:85}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h2",{__source:{fileName:_jsxFileName,lineNumber:86}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("b",{__source:{fileName:_jsxFileName,lineNumber:87}},project.name)),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:89}},project.description),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:90}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{icon:"user",__source:{fileName:_jsxFileName,lineNumber:91}}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{__source:{fileName:_jsxFileName,lineNumber:92}},"U"),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{__source:{fileName:_jsxFileName,lineNumber:93}},"USER"),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",__source:{fileName:_jsxFileName,lineNumber:94}}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{style:{color:"#f56a00",backgroundColor:"#fde3cf"},__source:{fileName:_jsxFileName,lineNumber:95}},"U"),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{style:{backgroundColor:"#87d068"},icon:"user",__source:{fileName:_jsxFileName,lineNumber:103}}))));},__source:{fileName:_jsxFileName,lineNumber:72}}))));}));}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return ProjectsList;}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);var _default=ProjectsList;/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(addNewProject,"addNewProject","/home/huyloc/code/rubyonrails/emt/client-emt/components/projects/projectsList.js");reactHotLoader.register(ProjectsList,"ProjectsList","/home/huyloc/code/rubyonrails/emt/client-emt/components/projects/projectsList.js");reactHotLoader.register(_default,"default","/home/huyloc/code/rubyonrails/emt/client-emt/components/projects/projectsList.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/projects/projectsList/CreateProjectModal.js":
false,

/***/ "./components/projects/projectsList/createProjectModal/CreateProjectForm.js":
false,

/***/ "./graphql/mutations.gql":
false,

/***/ "./node_modules/antd/lib/button/button-group.js":
false,

/***/ "./node_modules/antd/lib/button/button.js":
false,

/***/ "./node_modules/antd/lib/button/index.js":
false,

/***/ "./node_modules/antd/lib/form/Form.js":
false,

/***/ "./node_modules/antd/lib/form/FormItem.js":
false,

/***/ "./node_modules/antd/lib/form/constants.js":
false,

/***/ "./node_modules/antd/lib/form/index.js":
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

/***/ "./node_modules/antd/lib/message/index.js":
false,

/***/ "./node_modules/antd/lib/modal/ActionButton.js":
false,

/***/ "./node_modules/antd/lib/modal/Modal.js":
false,

/***/ "./node_modules/antd/lib/modal/confirm.js":
false,

/***/ "./node_modules/antd/lib/modal/index.js":
false,

/***/ "./node_modules/antd/lib/modal/locale.js":
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

/***/ "./node_modules/intersperse/lib/intersperse.js":
false,

/***/ "./node_modules/lodash/_Hash.js":
false,

/***/ "./node_modules/lodash/_ListCache.js":
false,

/***/ "./node_modules/lodash/_Map.js":
false,

/***/ "./node_modules/lodash/_MapCache.js":
false,

/***/ "./node_modules/lodash/_arrayMap.js":
false,

/***/ "./node_modules/lodash/_assignValue.js":
false,

/***/ "./node_modules/lodash/_assocIndexOf.js":
false,

/***/ "./node_modules/lodash/_baseAssignValue.js":
false,

/***/ "./node_modules/lodash/_baseGet.js":
false,

/***/ "./node_modules/lodash/_baseHas.js":
false,

/***/ "./node_modules/lodash/_baseSet.js":
false,

/***/ "./node_modules/lodash/_baseToString.js":
false,

/***/ "./node_modules/lodash/_castPath.js":
false,

/***/ "./node_modules/lodash/_getMapData.js":
false,

/***/ "./node_modules/lodash/_hasPath.js":
false,

/***/ "./node_modules/lodash/_hashClear.js":
false,

/***/ "./node_modules/lodash/_hashDelete.js":
false,

/***/ "./node_modules/lodash/_hashGet.js":
false,

/***/ "./node_modules/lodash/_hashHas.js":
false,

/***/ "./node_modules/lodash/_hashSet.js":
false,

/***/ "./node_modules/lodash/_isIndex.js":
false,

/***/ "./node_modules/lodash/_isKey.js":
false,

/***/ "./node_modules/lodash/_isKeyable.js":
false,

/***/ "./node_modules/lodash/_listCacheClear.js":
false,

/***/ "./node_modules/lodash/_listCacheDelete.js":
false,

/***/ "./node_modules/lodash/_listCacheGet.js":
false,

/***/ "./node_modules/lodash/_listCacheHas.js":
false,

/***/ "./node_modules/lodash/_listCacheSet.js":
false,

/***/ "./node_modules/lodash/_mapCacheClear.js":
false,

/***/ "./node_modules/lodash/_mapCacheDelete.js":
false,

/***/ "./node_modules/lodash/_mapCacheGet.js":
false,

/***/ "./node_modules/lodash/_mapCacheHas.js":
false,

/***/ "./node_modules/lodash/_mapCacheSet.js":
false,

/***/ "./node_modules/lodash/_memoizeCapped.js":
false,

/***/ "./node_modules/lodash/_nativeCreate.js":
false,

/***/ "./node_modules/lodash/_stringToPath.js":
false,

/***/ "./node_modules/lodash/_toKey.js":
false,

/***/ "./node_modules/lodash/eq.js":
false,

/***/ "./node_modules/lodash/get.js":
false,

/***/ "./node_modules/lodash/has.js":
false,

/***/ "./node_modules/lodash/isLength.js":
false,

/***/ "./node_modules/lodash/memoize.js":
false,

/***/ "./node_modules/lodash/set.js":
false,

/***/ "./node_modules/lodash/toString.js":
false,

/***/ "./node_modules/rc-dialog/es/Dialog.js":
false,

/***/ "./node_modules/rc-dialog/es/DialogWrap.js":
false,

/***/ "./node_modules/rc-dialog/es/LazyRenderBox.js":
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
false,

/***/ "./node_modules/rc-notification/es/Notice.js":
false,

/***/ "./node_modules/rc-notification/es/Notification.js":
false,

/***/ "./node_modules/rc-notification/es/index.js":
false,

/***/ "./node_modules/rc-util/es/getScrollBarSize.js":
false

})
//# sourceMappingURL=4.cd60497c890bf929f5de.hot-update.js.map