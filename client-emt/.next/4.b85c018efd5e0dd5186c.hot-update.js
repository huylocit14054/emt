webpackHotUpdate(4,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__graphql_mutations_gql__ = __webpack_require__("./graphql/mutations.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__graphql_mutations_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__graphql_mutations_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_If__ = __webpack_require__("./utils/If.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__MembersTap_AddMemberForm__ = __webpack_require__("./components/project/projectComponent/MembersTap/AddMemberForm.js");
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
query:__WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql__["getMembersByProjectId"],
variables:{projectId:this.props.router.query.id},__source:{fileName:_jsxFileName,lineNumber:34}},

function(_ref){var loading=_ref.loading,error=_ref.error,data=_ref.data;
if(loading)return'Loading...';
if(error)return"Error! ".concat(error.message);
return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["ApolloConsumer"],{__source:{fileName:_jsxFileName,lineNumber:42}},
function(client){
var project=client.readFragment({
id:"Project:".concat(_this.props.router.query.id),
fragment:__WEBPACK_IMPORTED_MODULE_7_graphql_tag___default()(_templateObject)});var





isManagedByCurrentUser=project.isManagedByCurrentUser;

return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:55}},
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__utils_If__["a" /* default */],{condition:isManagedByCurrentUser,then:__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__MembersTap_AddMemberForm__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:56}}),"else":null,__source:{fileName:_jsxFileName,lineNumber:56}}),
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_table___default.a,{loading:loading,dataSource:data.projectMembers,rowKey:"id",__source:{fileName:_jsxFileName,lineNumber:57}},
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Column,{
title:"Username",
key:"username",
render:function render(member){return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a",{href:"javascript:;",__source:{fileName:_jsxFileName,lineNumber:61}},member.user.username);},__source:{fileName:_jsxFileName,lineNumber:58}}),

__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Column,{
title:"Email",
key:"email",
render:function render(member){return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a",{href:"javascript:;",__source:{fileName:_jsxFileName,lineNumber:66}},member.user.email);},__source:{fileName:_jsxFileName,lineNumber:63}}),

__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Column,{
title:"Role",
key:"role",
render:function render(member){
if(member.user.role==='root_admin'){
return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_tag___default.a,{color:"gold",__source:{fileName:_jsxFileName,lineNumber:73}},"Root admin");
}
return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["Mutation"],{
mutation:__WEBPACK_IMPORTED_MODULE_9__graphql_mutations_gql__["updateMemberRoleInProject"],
onCompleted:function onCompleted(data){
console.log(data);
},
onError:function onError(error){
// If you want to send error to external service?
error.graphQLErrors.map(function(_ref2,i){var message=_ref2.message;
__WEBPACK_IMPORTED_MODULE_0_antd_lib_message___default.a.error(message,3);
});
},__source:{fileName:_jsxFileName,lineNumber:76}},

function(updateMemberRoleInProject,_ref3){var loading=_ref3.loading,data=_ref3.data,error=_ref3.error;return(
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__utils_If__["a" /* default */],{
condition:isManagedByCurrentUser,
then:
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(RadioGroup,{
onChange:function onChange(e){return(
_onChange(updateMemberRoleInProject,e,member.id));},

defaultValue:member.role,__source:{fileName:_jsxFileName,lineNumber:92}},

__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(RadioButton,{value:"member",__source:{fileName:_jsxFileName,lineNumber:98}},"Member"),
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(RadioButton,{value:"project_admin",__source:{fileName:_jsxFileName,lineNumber:99}},"Project Admin")),


"else":
member.role==='project_admin'?
__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_tag___default.a,{color:"cyan",__source:{fileName:_jsxFileName,lineNumber:104}},humanizeString(member.role)):

__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:106}},humanizeString(member.role)),__source:{fileName:_jsxFileName,lineNumber:89}}));}));






},__source:{fileName:_jsxFileName,lineNumber:68}}))));




}));


}));


}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return MembersTab;}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);var _default=
Object(__WEBPACK_IMPORTED_MODULE_5_next_router__["withRouter"])(MembersTab);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(RadioButton,"RadioButton","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(RadioGroup,"RadioGroup","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(Column,"Column","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(ColumnGroup,"ColumnGroup","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(_onChange,"onChange","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(MembersTab,"MembersTab","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/components/project/projectComponent/MembersTab.js");leaveModule(module);})();;
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
//# sourceMappingURL=4.b85c018efd5e0dd5186c.hot-update.js.map