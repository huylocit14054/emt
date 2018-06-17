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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/projects/projectsList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_list__ = __webpack_require__("antd/lib/list");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_card__ = __webpack_require__("antd/lib/card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar__ = __webpack_require__("antd/lib/avatar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_divider__ = __webpack_require__("antd/lib/divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__projectsList_ListItem__ = __webpack_require__("./components/projects/projectsList/ListItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projectsList_CreateProjectModal__ = __webpack_require__("./components/projects/projectsList/CreateProjectModal.js");
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/projects/projectsList.js";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}






var truncate=__webpack_require__("truncate");var

ProjectsList=/*#__PURE__*/function(_React$Component){_inherits(ProjectsList,_React$Component);function ProjectsList(){_classCallCheck(this,ProjectsList);return _possibleConstructorReturn(this,(ProjectsList.__proto__||Object.getPrototypeOf(ProjectsList)).apply(this,arguments));}_createClass(ProjectsList,[{key:"render",value:function render()
{var
currentUser=this.props.currentUser;
return(
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{className:"projects-list",__source:{fileName:_jsxFileName,lineNumber:14}},
currentUser.role==='root_admin'&&__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__projectsList_CreateProjectModal__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:15}}),
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["Query"],{query:__WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql__["getProjectOfCurrentUser"],__source:{fileName:_jsxFileName,lineNumber:16}},
function(_ref){var loading=_ref.loading,error=_ref.error,data=_ref.data;
if(loading)return'Loading...';
if(error)return"Error! ".concat(error.message);var
projectsAsAdminOfCurrentUser=data.projectsAsAdminOfCurrentUser,projectsAsMemberOfCurrentUser=data.projectsAsMemberOfCurrentUser;
return(
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:22}},
projectsAsAdminOfCurrentUser.length>0&&
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:24}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_divider___default.a,{orientation:"left",__source:{fileName:_jsxFileName,lineNumber:25}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default.a,{type:"solution",style:{marginRight:8},__source:{fileName:_jsxFileName,lineNumber:26}}),"As Admin"),


__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a,{
grid:{
gutter:16,
xs:1,
sm:2,
md:4,
lg:4,
xl:6,
xxl:3},

dataSource:projectsAsAdminOfCurrentUser,
renderItem:function renderItem(project){return(
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a.Item,{__source:{fileName:_jsxFileName,lineNumber:41}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a,{
prefetch:true,
as:"/project/".concat(project.id,"/members"),
href:"/projectMembers?id=".concat(project.id),__source:{fileName:_jsxFileName,lineNumber:42}},

__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:47}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_card___default.a,{__source:{fileName:_jsxFileName,lineNumber:48}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h4",{__source:{fileName:_jsxFileName,lineNumber:49}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("b",{__source:{fileName:_jsxFileName,lineNumber:50}},project.name)),

__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:52}},truncate(project.description,30)),
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:53}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{icon:"user",__source:{fileName:_jsxFileName,lineNumber:54}}),
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{__source:{fileName:_jsxFileName,lineNumber:55}},"U"),
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{__source:{fileName:_jsxFileName,lineNumber:56}},"USER"),
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",__source:{fileName:_jsxFileName,lineNumber:57}}),
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{
style:{
color:'#f56a00',
backgroundColor:'#fde3cf'},__source:{fileName:_jsxFileName,lineNumber:58}},"U"),




__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{style:{backgroundColor:'#87d068'},icon:"user",__source:{fileName:_jsxFileName,lineNumber:66}})))))));},__source:{fileName:_jsxFileName,lineNumber:29}}),








projectsAsMemberOfCurrentUser.length>0&&
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:76}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_divider___default.a,{orientation:"left",__source:{fileName:_jsxFileName,lineNumber:77}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default.a,{type:"user",style:{marginRight:8},__source:{fileName:_jsxFileName,lineNumber:78}}),"As Member"),


__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a,{
grid:{
gutter:16,
xs:1,
sm:2,
md:4,
lg:4,
xl:6,
xxl:3},

dataSource:projectsAsMemberOfCurrentUser,
renderItem:function renderItem(project){return(
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a.Item,{__source:{fileName:_jsxFileName,lineNumber:93}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a,{
prefetch:true,
as:"/project/".concat(project.id,"/members"),
href:"/projectMembers?id=".concat(project.id),__source:{fileName:_jsxFileName,lineNumber:94}},

__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:99}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_card___default.a,{__source:{fileName:_jsxFileName,lineNumber:100}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h2",{__source:{fileName:_jsxFileName,lineNumber:101}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("b",{__source:{fileName:_jsxFileName,lineNumber:102}},project.name)),

__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:104}},truncate(project.description,70)),
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:105}},
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{icon:"user",__source:{fileName:_jsxFileName,lineNumber:106}}),
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{__source:{fileName:_jsxFileName,lineNumber:107}},"U"),
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{__source:{fileName:_jsxFileName,lineNumber:108}},"USER"),
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",__source:{fileName:_jsxFileName,lineNumber:109}}),
__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{
style:{
color:'#f56a00',
backgroundColor:'#fde3cf'},__source:{fileName:_jsxFileName,lineNumber:110}},"U"),




__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{style:{backgroundColor:'#87d068'},icon:"user",__source:{fileName:_jsxFileName,lineNumber:118}})))))));},__source:{fileName:_jsxFileName,lineNumber:81}})))));













})));



}}]);return ProjectsList;}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);


/* harmony default export */ __webpack_exports__["a"] = (ProjectsList);

/***/ }),

/***/ "./components/projects/projectsList/CreateProjectModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_message__ = __webpack_require__("antd/lib/message");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_list__ = __webpack_require__("antd/lib/list");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_card__ = __webpack_require__("antd/lib/card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_mutations_gql__ = __webpack_require__("./graphql/mutations.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_mutations_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__graphql_mutations_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__createProjectModal_CreateProjectForm__ = __webpack_require__("./components/projects/projectsList/createProjectModal/CreateProjectForm.js");
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/projects/projectsList/CreateProjectModal.js";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}






var addNewProject=[
{
title:'Add new project'}];var


CreateProjectModal=/*#__PURE__*/function(_React$Component){_inherits(CreateProjectModal,_React$Component);function CreateProjectModal(){var _ref;var _temp,_this;_classCallCheck(this,CreateProjectModal);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _possibleConstructorReturn(_this,(_temp=_this=_possibleConstructorReturn(this,(_ref=CreateProjectModal.__proto__||Object.getPrototypeOf(CreateProjectModal)).call.apply(_ref,[this].concat(args))),Object.defineProperty(_assertThisInitialized(_this),"state",{configurable:true,enumerable:true,writable:true,value:
{
visible:false}}),Object.defineProperty(_assertThisInitialized(_this),"showModal",{configurable:true,enumerable:true,writable:true,value:

function value(){
_this.setState({visible:true});
}}),Object.defineProperty(_assertThisInitialized(_this),"handleCancel",{configurable:true,enumerable:true,writable:true,value:
function value(){
_this.setState({visible:false});
}}),Object.defineProperty(_assertThisInitialized(_this),"handleCreate",{configurable:true,enumerable:true,writable:true,value:
function value(createProject){
var form=_this.formRef.props.form;
form.validateFields(function(err,values){
if(err){
return;
}
createProject({
variables:{
input:{
attributes:JSON.stringify(values)}},


update:function update(
store,_ref2)





{var createdProject=_ref2.data.createProject.createdProject;
var data=store.readQuery({
query:__WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql__["getProjectOfCurrentUser"]});


data.projectsAsAdminOfCurrentUser.splice(0,0,createdProject);
store.writeQuery({
query:__WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql__["getProjectOfCurrentUser"],
data:data});

__WEBPACK_IMPORTED_MODULE_6_next_router___default.a.push("/projectMembers?id=".concat(
createdProject.id),"/project/".concat(
createdProject.id,"/members"));

}});

});
}}),Object.defineProperty(_assertThisInitialized(_this),"saveFormRef",{configurable:true,enumerable:true,writable:true,value:
function value(formRef){
_this.formRef=formRef;
}}),_temp));}_createClass(CreateProjectModal,[{key:"render",value:function render()
{var _this2=this;
return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:65}},
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_list___default.a,{
grid:{
gutter:16,
xs:1,
sm:2,
md:4,
lg:4,
xl:6,
xxl:3},

dataSource:addNewProject,
renderItem:function renderItem(item){return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_list___default.a.Item,{__source:{fileName:_jsxFileName,lineNumber:78}},
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_card___default.a,{className:"add-project-btn",onClick:_this2.showModal,__source:{fileName:_jsxFileName,lineNumber:79}},
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("b",{__source:{fileName:_jsxFileName,lineNumber:80}},
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default.a,{type:"plus",__source:{fileName:_jsxFileName,lineNumber:81}})," ",item.title))));},__source:{fileName:_jsxFileName,lineNumber:66}}),






__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["Mutation"],{
mutation:__WEBPACK_IMPORTED_MODULE_7__graphql_mutations_gql__["createProject"],
onCompleted:function onCompleted(data){
console.log(data);
var form=_this2.formRef.props.form;
// this.setState({ visible: false });
__WEBPACK_IMPORTED_MODULE_0_antd_lib_message___default.a.success('Project Created');
form.resetFields();
},
onError:function onError(error){
// If you want to send error to external service?
error.graphQLErrors.map(function(_ref3,i){var message=_ref3.message;
__WEBPACK_IMPORTED_MODULE_0_antd_lib_message___default.a.error(message,3);
});
},__source:{fileName:_jsxFileName,lineNumber:88}},

function(createProject,_ref4){var loading=_ref4.loading,data=_ref4.data,error=_ref4.error;return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__createProjectModal_CreateProjectForm__["a" /* default */],{
wrappedComponentRef:_this2.saveFormRef,
confirmLoading:loading,
visible:_this2.state.visible,
onCancel:_this2.handleCancel,
onCreate:function onCreate(){return _this2.handleCreate(createProject);},__source:{fileName:_jsxFileName,lineNumber:105}}));})));





}}]);return CreateProjectModal;}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);


/* harmony default export */ __webpack_exports__["a"] = (CreateProjectModal);

/***/ }),

/***/ "./components/projects/projectsList/ListItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_list__ = __webpack_require__("antd/lib/list");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_card__ = __webpack_require__("antd/lib/card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar__ = __webpack_require__("antd/lib/avatar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/projects/projectsList/ListItem.js";
var truncate=__webpack_require__("truncate");
var ListItem=function ListItem(_ref){var project=_ref.project;return(
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a.Item,{__source:{fileName:_jsxFileName,lineNumber:4}},
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_card___default.a,{__source:{fileName:_jsxFileName,lineNumber:5}},
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h2",{__source:{fileName:_jsxFileName,lineNumber:6}},
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("b",{__source:{fileName:_jsxFileName,lineNumber:7}},project.name)),

__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:9}},truncate(project.description,70)),
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:10}},
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{icon:"user",__source:{fileName:_jsxFileName,lineNumber:11}}),
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{__source:{fileName:_jsxFileName,lineNumber:12}},"U"),
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{__source:{fileName:_jsxFileName,lineNumber:13}},"USER"),
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",__source:{fileName:_jsxFileName,lineNumber:14}}),
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{
style:{
color:"#f56a00",
backgroundColor:"#fde3cf"},__source:{fileName:_jsxFileName,lineNumber:15}},"U"),




__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_avatar___default.a,{style:{backgroundColor:"#87d068"},icon:"user",__source:{fileName:_jsxFileName,lineNumber:23}})))));};





/* unused harmony default export */ var _unused_webpack_default_export = (ListItem);

/***/ }),

/***/ "./components/projects/projectsList/createProjectModal/CreateProjectForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__ = __webpack_require__("antd/lib/modal");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_form__ = __webpack_require__("antd/lib/form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input__ = __webpack_require__("antd/lib/input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/projects/projectsList/createProjectModal/CreateProjectForm.js";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

TextArea=__WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default.a.TextArea;
var FormItem=__WEBPACK_IMPORTED_MODULE_1_antd_lib_form___default.a.Item;

var CreateProjectForm=__WEBPACK_IMPORTED_MODULE_1_antd_lib_form___default.a.create()(/*#__PURE__*/function(_React$Component){_inherits(_class,_React$Component);function _class(){_classCallCheck(this,_class);return _possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments));}_createClass(_class,[{key:"render",value:function render()

{var _props=
this.props,visible=_props.visible,onCancel=_props.onCancel,onCreate=_props.onCreate,form=_props.form,confirmLoading=_props.confirmLoading;var

getFieldDecorator=form.getFieldDecorator;

return(
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default.a,{
confirmLoading:confirmLoading,
visible:visible,
okText:"create",
onCancel:onCancel,
cancelText:"cancel",
onOk:onCreate,__source:{fileName:_jsxFileName,lineNumber:14}},

__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_form___default.a,{layout:"vertical",onSubmit:onCreate,__source:{fileName:_jsxFileName,lineNumber:22}},
__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(FormItem,{label:"name",__source:{fileName:_jsxFileName,lineNumber:23}},
getFieldDecorator("name",{
rules:[
{
required:true,
message:"Please input the name of project!"}]})(


__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default.a,{__source:{fileName:_jsxFileName,lineNumber:31}}))),

__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(FormItem,{label:"description",__source:{fileName:_jsxFileName,lineNumber:33}},
getFieldDecorator("description",{
rules:[
{
required:true,
message:"Please input the description of project!"}]})(


__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(TextArea,{rows:4,__source:{fileName:_jsxFileName,lineNumber:41}}))))));




}}]);return _class;}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component));



/* harmony default export */ __webpack_exports__["a"] = (CreateProjectForm);

/***/ }),

/***/ "./graphql/mutations.gql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatedUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateAvatar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAvatarInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAvatar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePasswordInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"passwordIsUpdated"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdProject"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateMemberRoleInProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMemberRoleInProjectInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMemberRoleInProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updated"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":935}};
    doc.loc.source = {"body":"mutation loginUser($input: LoginInput!) {\n  loginUser(input: $input) {\n    token\n  }\n}\n\nmutation createUser($input: CreateUserInput!) {\n  createUser(input: $input) {\n    createdUser {\n      id\n      username\n      email\n      createdAt\n      avatar\n    }\n  }\n}\n\nmutation updateUserInfo($input: UpdateUserInput!) {\n  updateUser(input: $input) {\n    updatedUser {\n      id\n      username\n      email\n    }\n  }\n}\n\nmutation updateAvatar($input: UpdateAvatarInput!) {\n  updateAvatar(input: $input) {\n    avatarUrl\n  }\n}\n\nmutation updatePassword($input: UpdatePasswordInput!) {\n  updatePassword(input: $input) {\n    passwordIsUpdated\n  }\n}\n\nmutation createProject($input: CreateProjectInput!) {\n  createProject(input: $input) {\n    createdProject {\n      id\n      name\n      description\n    }\n  }\n}\n\nmutation updateMemberRoleInProject($input: UpdateMemberRoleInProjectInput!) {\n  updateMemberRoleInProject(input: $input) {\n    updated\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
        
        module.exports["updatePassword"] = oneQuery(doc, "updatePassword");
        
        module.exports["createProject"] = oneQuery(doc, "createProject");
        
        module.exports["updateMemberRoleInProject"] = oneQuery(doc, "updateMemberRoleInProject");
        


/***/ }),

/***/ "./graphql/queries.gql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUser"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUserProfile"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"profile"},"name":{"kind":"Name","value":"currentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUserOnClient"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"arguments":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"},"arguments":[]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllUsers"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectOfCurrentUser"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectsAsMemberOfCurrentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"projectsAsAdminOfCurrentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMembersByProjectId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isManagedByCurrentUser"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":874}};
    doc.loc.source = {"body":"query getCurrentUser {\n  currentUser {\n    id\n    username\n    role\n    avatar\n  }\n}\n\nquery getCurrentUserProfile {\n  profile: currentUser {\n    id\n    username\n    email\n    role\n    avatar\n  }\n}\n\nquery getCurrentUserOnClient {\n  currentUser @client {\n    id\n    username\n    role\n    avatar\n  }\n}\n\nquery getAllUsers {\n  users {\n    avatar\n    id\n    username\n    email\n    createdAt\n  }\n}\n\nquery getProjectOfCurrentUser {\n  projectsAsMemberOfCurrentUser {\n    id\n    name\n    description\n  }\n  projectsAsAdminOfCurrentUser {\n    id\n    name\n    description\n  }\n}\n\nquery getMembersByProjectId($projectId: ID!) {\n  projectMembers(projectId: $projectId) {\n    id\n    role\n    user {\n      id\n      email\n      username\n      role\n      avatar\n    }\n  }\n}\n\nquery getProjectById($id: ID!) {\n  project(id: $id) {\n    id\n    name\n    description\n    isManagedByCurrentUser\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

/***/ "./pages/index.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_projects_projectsList__ = __webpack_require__("./components/projects/projectsList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_projects_less__ = __webpack_require__("./styles/projects.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_projects_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_projects_less__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/pages/index.js";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _next(value){step("next",value);}function _throw(err){step("throw",err);}_next();});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}


var
Projects=/*#__PURE__*/function(_React$Component){_inherits(Projects,_React$Component);function Projects(){_classCallCheck(this,Projects);return _possibleConstructorReturn(this,(Projects.__proto__||Object.getPrototypeOf(Projects)).apply(this,arguments));}_createClass(Projects,[{key:"render",value:function render()











{
return(
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:19}},
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style",{dangerouslySetInnerHTML:{__html:__WEBPACK_IMPORTED_MODULE_5__styles_projects_less___default.a},__source:{fileName:_jsxFileName,lineNumber:20}}),
__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_projects_projectsList__["a" /* default */],{currentUser:this.props.currentUser,__source:{fileName:_jsxFileName,lineNumber:21}})));


}}],[{key:"getInitialProps",value:function(){var _getInitialProps=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context){var _ref,currentUser;return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Object(__WEBPACK_IMPORTED_MODULE_3__lib_checkLoggedIn__["a" /* default */])(context.apolloClient);case 2:_ref=_context.sent;currentUser=_ref.currentUser;if(!currentUser){// Already signed in? No need to continue.
// Throw them back to the main page
Object(__WEBPACK_IMPORTED_MODULE_2__lib_redirect__["a" /* default */])(context,"/login");}return _context.abrupt("return",{currentUser:currentUser});case 6:case"end":return _context.stop();}}},_callee,this);}));return function getInitialProps(_x){return _getInitialProps.apply(this,arguments);};}()}]);return Projects;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/***/ }),

/***/ "./styles/projects.less":
/***/ (function(module, exports) {

;(function(){"use strict";module.exports=".projects-list {\n  padding-top: 0.5%;\n}\n.projects-list .add-project-btn {\n  padding: 5%;\n}\n.projects-list .add-project-btn div.ant-card-body {\n  text-align: center;\n}\n.projects-list span.ant-avatar {\n  margin: 0px 3px;\n}\n.projects-list span.ant-divider-inner-text {\n  background-color: #00b5d0;\n  font-size: 14pt;\n  font-weight: 900;\n  color: #fff;\n}\n.projects-list div.ant-card {\n  cursor: pointer;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;\n}\n.projects-list div.ant-card:hover {\n  -webkit-box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1) !important;\n          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1) !important;\n}\n";})();

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd/lib/avatar":
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/card":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/divider":
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

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

/***/ "antd/lib/list":
/***/ (function(module, exports) {

module.exports = require("antd/lib/list");

/***/ }),

/***/ "antd/lib/message":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/modal":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

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

/***/ }),

/***/ "truncate":
/***/ (function(module, exports) {

module.exports = require("truncate");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map