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
var _jsxFileName="/home/huyloc/code/rubyonrails/emt/client-emt/components/projects/projectsList.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var truncate=__webpack_require__("./node_modules/truncate/truncate.js");var addNewProject=[{title:"Add new project"}];var ProjectsList=/*#__PURE__*/function(_React$Component){_inherits(ProjectsList,_React$Component);function ProjectsList(){_classCallCheck(this,ProjectsList);return _possibleConstructorReturn(this,(ProjectsList.__proto__||Object.getPrototypeOf(ProjectsList)).apply(this,arguments));}_createClass(ProjectsList,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"projects-list",__source:{fileName:_jsxFileName,lineNumber:13}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_list___default.a,{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3},dataSource:addNewProject,renderItem:function renderItem(item){return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_list___default.a.Item,{__source:{fileName:_jsxFileName,lineNumber:26}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_card___default.a,{className:"add-project-btn",__source:{fileName:_jsxFileName,lineNumber:27}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("b",{__source:{fileName:_jsxFileName,lineNumber:28}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default.a,{type:"plus",__source:{fileName:_jsxFileName,lineNumber:29}})," ",item.title)));},__source:{fileName:_jsxFileName,lineNumber:14}}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["Query"],{query:__WEBPACK_IMPORTED_MODULE_7__graphql_queries_gql__["getProjectOfCurrentUser"],__source:{fileName:_jsxFileName,lineNumber:35}},function(_ref){var loading=_ref.loading,error=_ref.error,data=_ref.data;if(loading)return"Loading...";if(error)return"Error! ".concat(error.message);var projectsAsAdminOfCurrentUser=data.projectsAsAdminOfCurrentUser,projectsAsMemberOfCurrentUser=data.projectsAsMemberOfCurrentUser;return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:44}},projectsAsAdminOfCurrentUser.length>0&&__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:46}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_divider___default.a,{orientation:"left",__source:{fileName:_jsxFileName,lineNumber:47}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default.a,{type:"solution",style:{marginRight:8},__source:{fileName:_jsxFileName,lineNumber:48}}),"As Admin"),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_list___default.a,{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3},dataSource:projectsAsAdminOfCurrentUser,renderItem:function renderItem(project){return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_list___default.a.Item,{__source:{fileName:_jsxFileName,lineNumber:63}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_card___default.a,{__source:{fileName:_jsxFileName,lineNumber:64}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h2",{__source:{fileName:_jsxFileName,lineNumber:65}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("b",{__source:{fileName:_jsxFileName,lineNumber:66}},project.name)),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:68}},truncate(project.description,30)),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:69}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{icon:"user",__source:{fileName:_jsxFileName,lineNumber:70}}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{__source:{fileName:_jsxFileName,lineNumber:71}},"U"),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{__source:{fileName:_jsxFileName,lineNumber:72}},"USER"),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",__source:{fileName:_jsxFileName,lineNumber:73}}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{style:{color:"#f56a00",backgroundColor:"#fde3cf"},__source:{fileName:_jsxFileName,lineNumber:74}},"U"),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{style:{backgroundColor:"#87d068"},icon:"user",__source:{fileName:_jsxFileName,lineNumber:82}}))));},__source:{fileName:_jsxFileName,lineNumber:51}}),projectsAsMemberOfCurrentUser.length>0&&__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:93}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_divider___default.a,{orientation:"left",__source:{fileName:_jsxFileName,lineNumber:94}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default.a,{type:"user",style:{marginRight:8},__source:{fileName:_jsxFileName,lineNumber:95}}),"As Member"),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_list___default.a,{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3},dataSource:projectsAsMemberOfCurrentUser,renderItem:function renderItem(project){return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_list___default.a.Item,{__source:{fileName:_jsxFileName,lineNumber:110}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_card___default.a,{__source:{fileName:_jsxFileName,lineNumber:111}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h2",{__source:{fileName:_jsxFileName,lineNumber:112}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("b",{__source:{fileName:_jsxFileName,lineNumber:113}},project.name)),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:115}},project.description),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:116}},__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{icon:"user",__source:{fileName:_jsxFileName,lineNumber:117}}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{__source:{fileName:_jsxFileName,lineNumber:118}},"U"),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{__source:{fileName:_jsxFileName,lineNumber:119}},"USER"),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",__source:{fileName:_jsxFileName,lineNumber:120}}),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{style:{color:"#f56a00",backgroundColor:"#fde3cf"},__source:{fileName:_jsxFileName,lineNumber:121}},"U"),__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_avatar___default.a,{style:{backgroundColor:"#87d068"},icon:"user",__source:{fileName:_jsxFileName,lineNumber:129}}))));},__source:{fileName:_jsxFileName,lineNumber:98}}))));}));}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return ProjectsList;}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);var _default=ProjectsList;/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(addNewProject,"addNewProject","/home/huyloc/code/rubyonrails/emt/client-emt/components/projects/projectsList.js");reactHotLoader.register(ProjectsList,"ProjectsList","/home/huyloc/code/rubyonrails/emt/client-emt/components/projects/projectsList.js");reactHotLoader.register(_default,"default","/home/huyloc/code/rubyonrails/emt/client-emt/components/projects/projectsList.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.30c3b9dcb9053b4eb746.hot-update.js.map