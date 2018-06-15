webpackHotUpdate(4,{

/***/ "./components/projects/projectsList/CreateProjectModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_message__ = __webpack_require__("./node_modules/antd/lib/message/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_list__ = __webpack_require__("./node_modules/antd/lib/list/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_card__ = __webpack_require__("./node_modules/antd/lib/card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_mutations_gql__ = __webpack_require__("./graphql/mutations.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_mutations_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__graphql_mutations_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__createProjectModal_CreateProjectForm__ = __webpack_require__("./components/projects/projectsList/createProjectModal/CreateProjectForm.js");
var _jsxFileName="/home/huyloc/code/rubyonrails/emt/client-emt/components/projects/projectsList/CreateProjectModal.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}var addNewProject=[{title:"Add new project"}];var CreateProjectModal=/*#__PURE__*/function(_React$Component){_inherits(CreateProjectModal,_React$Component);function CreateProjectModal(){var _ref;var _temp,_this;_classCallCheck(this,CreateProjectModal);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _possibleConstructorReturn(_this,(_temp=_this=_possibleConstructorReturn(this,(_ref=CreateProjectModal.__proto__||Object.getPrototypeOf(CreateProjectModal)).call.apply(_ref,[this].concat(args))),Object.defineProperty(_assertThisInitialized(_this),"state",{configurable:true,enumerable:true,writable:true,value:{visible:false}}),Object.defineProperty(_assertThisInitialized(_this),"showModal",{configurable:true,enumerable:true,writable:true,value:function value(){_this.setState({visible:true});}}),Object.defineProperty(_assertThisInitialized(_this),"handleCancel",{configurable:true,enumerable:true,writable:true,value:function value(){_this.setState({visible:false});}}),Object.defineProperty(_assertThisInitialized(_this),"handleCreate",{configurable:true,enumerable:true,writable:true,value:function value(createProject){var form=_this.formRef.props.form;form.validateFields(function(err,values){if(err){return;}createProject({variables:{input:{attributes:JSON.stringify(values)}},update:function update(store,_ref2){var createdProject=_ref2.data.createProject.createdProject;var data=store.readQuery({query:__WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql__["getProjectOfCurrentUser"]});data.projectsAsAdminOfCurrentUser.splice(0,0,createdProject);store.writeQuery({query:__WEBPACK_IMPORTED_MODULE_8__graphql_queries_gql__["getProjectOfCurrentUser"],data:data});__WEBPACK_IMPORTED_MODULE_6_next_router___default.a.push("/project/".concat(createdProject.id,"/members"),"/projectMembers?id=".concat(createdProject.id));}});});}}),Object.defineProperty(_assertThisInitialized(_this),"saveFormRef",{configurable:true,enumerable:true,writable:true,value:function value(formRef){_this.formRef=formRef;}}),_temp));}_createClass(CreateProjectModal,[{key:"render",value:function render(){var _this2=this;return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:65}},__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_list___default.a,{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3},dataSource:addNewProject,renderItem:function renderItem(item){return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_list___default.a.Item,{__source:{fileName:_jsxFileName,lineNumber:78}},__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_card___default.a,{className:"add-project-btn",onClick:_this2.showModal,__source:{fileName:_jsxFileName,lineNumber:79}},__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("b",{__source:{fileName:_jsxFileName,lineNumber:80}},__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default.a,{type:"plus",__source:{fileName:_jsxFileName,lineNumber:81}})," ",item.title)));},__source:{fileName:_jsxFileName,lineNumber:66}}),__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["Mutation"],{mutation:__WEBPACK_IMPORTED_MODULE_7__graphql_mutations_gql__["createProject"],onCompleted:function onCompleted(data){console.log(data);var form=_this2.formRef.props.form;// this.setState({ visible: false });
__WEBPACK_IMPORTED_MODULE_0_antd_lib_message___default.a.success("Project Created");form.resetFields();},onError:function onError(error){// If you want to send error to external service?
error.graphQLErrors.map(function(_ref3,i){var message=_ref3.message;__WEBPACK_IMPORTED_MODULE_0_antd_lib_message___default.a.error(message,3);});},__source:{fileName:_jsxFileName,lineNumber:88}},function(createProject,_ref4){var loading=_ref4.loading,data=_ref4.data,error=_ref4.error;return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__createProjectModal_CreateProjectForm__["a" /* default */],{wrappedComponentRef:_this2.saveFormRef,confirmLoading:loading,visible:_this2.state.visible,onCancel:_this2.handleCancel,onCreate:function onCreate(){return _this2.handleCreate(createProject);},__source:{fileName:_jsxFileName,lineNumber:105}});}));}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return CreateProjectModal;}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);var _default=CreateProjectModal;/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(addNewProject,"addNewProject","/home/huyloc/code/rubyonrails/emt/client-emt/components/projects/projectsList/CreateProjectModal.js");reactHotLoader.register(CreateProjectModal,"CreateProjectModal","/home/huyloc/code/rubyonrails/emt/client-emt/components/projects/projectsList/CreateProjectModal.js");reactHotLoader.register(_default,"default","/home/huyloc/code/rubyonrails/emt/client-emt/components/projects/projectsList/CreateProjectModal.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./graphql/mutations.gql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdProject"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateMemberRoleInProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMemberRoleInProjectInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMemberRoleInProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updated"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":549}};
    doc.loc.source = {"body":"mutation loginUser($input: LoginInput!) {\n  loginUser(input: $input) {\n    token\n  }\n}\n\nmutation createUser($input: CreateUserInput!) {\n  createUser(input: $input) {\n    createdUser {\n      id\n      username\n      email\n      createdAt\n    }\n  }\n}\n\nmutation createProject($input: CreateProjectInput!) {\n  createProject(input: $input) {\n    createdProject {\n      id\n      name\n      description\n    }\n  }\n}\n\nmutation updateMemberRoleInProject($input: UpdateMemberRoleInProjectInput!) {\n  updateMemberRoleInProject(input: $input) {\n    updated\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
        
        module.exports["createProject"] = oneQuery(doc, "createProject");
        
        module.exports["updateMemberRoleInProject"] = oneQuery(doc, "updateMemberRoleInProject");
        


/***/ })

})
//# sourceMappingURL=4.3d59fff7af3abc551f69.hot-update.js.map