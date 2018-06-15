webpackHotUpdate(5,{

/***/ "./components/login/LoginBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_spin__ = __webpack_require__("./node_modules/antd/lib/spin/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_spin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_spin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__("./node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_checkbox__ = __webpack_require__("./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input__ = __webpack_require__("./node_modules/antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_message__ = __webpack_require__("./node_modules/antd/lib/message/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_form__ = __webpack_require__("./node_modules/antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_redirect__ = __webpack_require__("./lib/redirect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_cookie__ = __webpack_require__("./node_modules/cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_mutations_gql__ = __webpack_require__("./graphql/mutations.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_mutations_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__graphql_mutations_gql__);
var _jsxFileName="/home/huyloc/code/rubyonrails/emt/client-emt/components/login/LoginBox.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var FormItem=__WEBPACK_IMPORTED_MODULE_6_antd_lib_form___default.a.Item;var antIcon=__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default.a,{type:"loading",style:{fontSize:24},spin:true,__source:{fileName:_jsxFileName,lineNumber:8}});__WEBPACK_IMPORTED_MODULE_4_antd_lib_message___default.a.config({top:100,duration:2,maxCount:3});var NormalLoginForm=/*#__PURE__*/function(_React$Component){_inherits(NormalLoginForm,_React$Component);function NormalLoginForm(){_classCallCheck(this,NormalLoginForm);return _possibleConstructorReturn(this,(NormalLoginForm.__proto__||Object.getPrototypeOf(NormalLoginForm)).apply(this,arguments));}_createClass(NormalLoginForm,[{key:"render",value:function render(){var _this=this;var client=this.props.client;var getFieldDecorator=this.props.form.getFieldDecorator;return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["Mutation"],{mutation:__WEBPACK_IMPORTED_MODULE_12__graphql_mutations_gql__["loginUser"],onCompleted:function onCompleted(data){console.log(data);// Store the token in cookie
document.cookie=__WEBPACK_IMPORTED_MODULE_10_cookie___default.a.serialize("token",data.loginUser.token,{maxAge:30*24*60*60// 30 days
});// Force a reload of all the current queries now that the user is
// logged in
client.cache.reset().then(function(){Object(__WEBPACK_IMPORTED_MODULE_9__lib_redirect__["a" /* default */])({},"/");});},onError:function onError(error){// If you want to send error to external service?
error.graphQLErrors.map(function(_ref,i){var message=_ref.message;__WEBPACK_IMPORTED_MODULE_4_antd_lib_message___default.a.error(message);});},__source:{fileName:_jsxFileName,lineNumber:19}},function(loginUser,_ref2){var data=_ref2.data,loading=_ref2.loading,error=_ref2.error;return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div",{className:"form-layout",__source:{fileName:_jsxFileName,lineNumber:45}},__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div",{className:"form-border",__source:{fileName:_jsxFileName,lineNumber:46}},__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_spin___default.a,{indicator:antIcon,spinning:loading,tip:"Signing in...",__source:{fileName:_jsxFileName,lineNumber:47}},__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_next_link___default.a,{prefetch:true,href:"/",__source:{fileName:_jsxFileName,lineNumber:48}},__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:49}},__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("img",{src:"http://sv1.upsieutoc.com/2018/06/14/company_logo.jpg",className:"logo",__source:{fileName:_jsxFileName,lineNumber:50}}))),__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_antd_lib_form___default.a,{onSubmit:function onSubmit(e){e.preventDefault();_this.props.form.validateFields(function(err,values){if(!err){console.log("Received values of form: ",values);loginUser({variables:{input:{username:values.username,password:values.password}}});}});},className:"login-form",__source:{fileName:_jsxFileName,lineNumber:57}},__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(FormItem,{__source:{fileName:_jsxFileName,lineNumber:76}},getFieldDecorator("username",{rules:[{required:true,message:"Please input your username!"}]})(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default.a,{prefix:__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default.a,{type:"user",style:{color:"rgba(0,0,0,.25)"},__source:{fileName:_jsxFileName,lineNumber:84}}),placeholder:"Username",__source:{fileName:_jsxFileName,lineNumber:82}}))),__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(FormItem,{__source:{fileName:_jsxFileName,lineNumber:93}},getFieldDecorator("password",{rules:[{required:true,message:"Please input your Password!"}]})(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default.a,{prefix:__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"},__source:{fileName:_jsxFileName,lineNumber:101}}),type:"password",placeholder:"Password",__source:{fileName:_jsxFileName,lineNumber:99}}))),__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(FormItem,{__source:{fileName:_jsxFileName,lineNumber:111}},getFieldDecorator("remember",{valuePropName:"checked",initialValue:true})(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_checkbox___default.a,{__source:{fileName:_jsxFileName,lineNumber:115}},"Remember me")),__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a",{className:"login-form-forgot",href:"",__source:{fileName:_jsxFileName,lineNumber:116}},"Forgot password"),__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a,{type:"primary",htmlType:"submit",className:"login-form-button",__source:{fileName:_jsxFileName,lineNumber:119}},"Log in"),"Or",__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_next_link___default.a,{prefetch:true,href:"/signup",__source:{fileName:_jsxFileName,lineNumber:127}},__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a",{href:"",__source:{fileName:_jsxFileName,lineNumber:128}}," Sign up Now!")))))));});}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return NormalLoginForm;}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);var WrappedNormalLoginForm=__WEBPACK_IMPORTED_MODULE_6_antd_lib_form___default.a.create()(NormalLoginForm);var _default=Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["withApollo"])(WrappedNormalLoginForm);/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(FormItem,"FormItem","/home/huyloc/code/rubyonrails/emt/client-emt/components/login/LoginBox.js");reactHotLoader.register(antIcon,"antIcon","/home/huyloc/code/rubyonrails/emt/client-emt/components/login/LoginBox.js");reactHotLoader.register(NormalLoginForm,"NormalLoginForm","/home/huyloc/code/rubyonrails/emt/client-emt/components/login/LoginBox.js");reactHotLoader.register(WrappedNormalLoginForm,"WrappedNormalLoginForm","/home/huyloc/code/rubyonrails/emt/client-emt/components/login/LoginBox.js");reactHotLoader.register(_default,"default","/home/huyloc/code/rubyonrails/emt/client-emt/components/login/LoginBox.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./graphql/queries.gql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUser"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllUsers"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"username"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectOfCurrentUser"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectsAsMemberOfCurrentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"projectsAsAdminOfCurrentUser"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":329}};
    doc.loc.source = {"body":"query getCurrentUser {\n  currentUser {\n    id\n    username\n    role\n  }\n}\n\nquery getAllUsers {\n  users {\n    id\n    username\n    email\n    createdAt\n  }\n}\n\nquery getProjectOfCurrentUser {\n  projectsAsMemberOfCurrentUser {\n    id\n    name\n    description\n  }\n  projectsAsAdminOfCurrentUser {\n    id\n    name\n    description\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
        
        module.exports["getAllUsers"] = oneQuery(doc, "getAllUsers");
        
        module.exports["getProjectOfCurrentUser"] = oneQuery(doc, "getProjectOfCurrentUser");
        


/***/ }),

/***/ "./lib/checkLoggedIn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphql_queries_gql__ = __webpack_require__("./graphql/queries.gql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphql_queries_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__graphql_queries_gql__);
(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();var _default=function _default(apolloClient){return apolloClient.query({query:__WEBPACK_IMPORTED_MODULE_1__graphql_queries_gql__["getCurrentUser"]}).then(function(_ref){var data=_ref.data;console.log(data);return{currentUser:data.currentUser};}).catch(function(err){console.log(err);// Fail gracefully
return{currentUser:{}};});};/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(_default,"default","/home/huyloc/code/rubyonrails/emt/client-emt/lib/checkLoggedIn.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/antd/lib/spin/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _rcAnimate = __webpack_require__("./node_modules/rc-animate/es/Animate.js");

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _omit = __webpack_require__("./node_modules/omit.js/es/index.js");

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Spin = function (_React$Component) {
    (0, _inherits3['default'])(Spin, _React$Component);

    function Spin(props) {
        (0, _classCallCheck3['default'])(this, Spin);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Spin.__proto__ || Object.getPrototypeOf(Spin)).call(this, props));

        var spinning = props.spinning;
        _this.state = {
            spinning: spinning
        };
        return _this;
    }

    (0, _createClass3['default'])(Spin, [{
        key: 'isNestedPattern',
        value: function isNestedPattern() {
            return !!(this.props && this.props.children);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props,
                spinning = _props.spinning,
                delay = _props.delay;

            if (spinning && delay && !isNaN(Number(delay))) {
                this.setState({ spinning: false });
                this.delayTimeout = window.setTimeout(function () {
                    return _this2.setState({ spinning: spinning });
                }, delay);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            if (this.delayTimeout) {
                clearTimeout(this.delayTimeout);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this3 = this;

            var currentSpinning = this.props.spinning;
            var spinning = nextProps.spinning;
            var delay = this.props.delay;

            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            if (currentSpinning && !spinning) {
                this.debounceTimeout = window.setTimeout(function () {
                    return _this3.setState({ spinning: spinning });
                }, 200);
                if (this.delayTimeout) {
                    clearTimeout(this.delayTimeout);
                }
            } else {
                if (spinning && delay && !isNaN(Number(delay))) {
                    if (this.delayTimeout) {
                        clearTimeout(this.delayTimeout);
                    }
                    this.delayTimeout = window.setTimeout(function () {
                        return _this3.setState({ spinning: spinning });
                    }, delay);
                } else {
                    this.setState({ spinning: spinning });
                }
            }
        }
    }, {
        key: 'renderIndicator',
        value: function renderIndicator() {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                indicator = _props2.indicator;

            var dotClassName = prefixCls + '-dot';
            if (React.isValidElement(indicator)) {
                return React.cloneElement(indicator, {
                    className: (0, _classnames2['default'])(indicator.props.className, dotClassName)
                });
            }
            return React.createElement(
                'span',
                { className: (0, _classnames2['default'])(dotClassName, prefixCls + '-dot-spin') },
                React.createElement('i', null),
                React.createElement('i', null),
                React.createElement('i', null),
                React.createElement('i', null)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                className = _a.className,
                size = _a.size,
                prefixCls = _a.prefixCls,
                tip = _a.tip,
                wrapperClassName = _a.wrapperClassName,
                restProps = __rest(_a, ["className", "size", "prefixCls", "tip", "wrapperClassName"]);var spinning = this.state.spinning;

            var spinClassName = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-spinning', spinning), (0, _defineProperty3['default'])(_classNames, prefixCls + '-show-text', !!tip), _classNames), className);
            // fix https://fb.me/react-unknown-prop
            var divProps = (0, _omit2['default'])(restProps, ['spinning', 'delay', 'indicator']);
            var spinElement = React.createElement(
                'div',
                (0, _extends3['default'])({}, divProps, { className: spinClassName }),
                this.renderIndicator(),
                tip ? React.createElement(
                    'div',
                    { className: prefixCls + '-text' },
                    tip
                ) : null
            );
            if (this.isNestedPattern()) {
                var _classNames2;

                var animateClassName = prefixCls + '-nested-loading';
                if (wrapperClassName) {
                    animateClassName += ' ' + wrapperClassName;
                }
                var containerClassName = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-container', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-blur', spinning), _classNames2));
                return React.createElement(
                    _rcAnimate2['default'],
                    (0, _extends3['default'])({}, divProps, { component: 'div', className: animateClassName, style: null, transitionName: 'fade' }),
                    spinning && React.createElement(
                        'div',
                        { key: 'loading' },
                        spinElement
                    ),
                    React.createElement(
                        'div',
                        { className: containerClassName, key: 'container' },
                        this.props.children
                    )
                );
            }
            return spinElement;
        }
    }]);
    return Spin;
}(React.Component);

exports['default'] = Spin;

Spin.defaultProps = {
    prefixCls: 'ant-spin',
    spinning: true,
    size: 'default',
    wrapperClassName: ''
};
Spin.propTypes = {
    prefixCls: _propTypes2['default'].string,
    className: _propTypes2['default'].string,
    spinning: _propTypes2['default'].bool,
    size: _propTypes2['default'].oneOf(['small', 'default', 'large']),
    wrapperClassName: _propTypes2['default'].string,
    indicator: _propTypes2['default'].node
};
module.exports = exports['default'];

/***/ })

})
//# sourceMappingURL=5.73be6fb54b5c87d88f86.hot-update.js.map