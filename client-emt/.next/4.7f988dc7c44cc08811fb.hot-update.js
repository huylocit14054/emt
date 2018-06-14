webpackHotUpdate(4,{

/***/ "./components/projects/projectsList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_list__ = __webpack_require__("./node_modules/antd/lib/list/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_card__ = __webpack_require__("./node_modules/antd/lib/card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/components/projects/projectsList.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var data=[{title:'Title 1'},{title:'Title 2'},{title:'Title 3'},{title:'Title 4'},{title:'Title 5'},{title:'Title 6'}];var ProjectsList=/*#__PURE__*/function(_React$Component){_inherits(ProjectsList,_React$Component);function ProjectsList(){_classCallCheck(this,ProjectsList);return _possibleConstructorReturn(this,(ProjectsList.__proto__||Object.getPrototypeOf(ProjectsList)).apply(this,arguments));}_createClass(ProjectsList,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:26}},__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a,{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3},dataSource:data,renderItem:function renderItem(item){return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a.Item,{__source:{fileName:_jsxFileName,lineNumber:31}},__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_card___default.a,{title:item.title,__source:{fileName:_jsxFileName,lineNumber:32}},"Card content"));},__source:{fileName:_jsxFileName,lineNumber:27}}));}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}]);return ProjectsList;}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);var _default=ProjectsList;/* harmony default export */ __webpack_exports__["a"] = (_default);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(data,"data","/home/nenjamin2405/redpola/emt/client-emt/components/projects/projectsList.js");reactHotLoader.register(ProjectsList,"ProjectsList","/home/nenjamin2405/redpola/emt/client-emt/components/projects/projectsList.js");reactHotLoader.register(_default,"default","/home/nenjamin2405/redpola/emt/client-emt/components/projects/projectsList.js");leaveModule(module);})();;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/antd/lib/_util/isFlexSupported.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = isFlexSupported;
function isFlexSupported() {
    if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
        var documentElement = window.document.documentElement;

        return 'flex' in documentElement.style || 'webkitFlex' in documentElement.style || 'Flex' in documentElement.style || 'msFlex' in documentElement.style;
    }
    return false;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/_util/throttleByAnimationFrame.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports['default'] = throttleByAnimationFrame;
exports.throttleByAnimationFrameDecorator = throttleByAnimationFrameDecorator;

var _raf = __webpack_require__("./node_modules/raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function throttleByAnimationFrame(fn) {
    var requestId = void 0;
    var later = function later(args) {
        return function () {
            requestId = null;
            fn.apply(undefined, (0, _toConsumableArray3['default'])(args));
        };
    };
    var throttled = function throttled() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (requestId == null) {
            requestId = (0, _raf2['default'])(later(args));
        }
    };
    throttled.cancel = function () {
        return _raf2['default'].cancel(requestId);
    };
    return throttled;
}
function throttleByAnimationFrameDecorator() {
    return function (target, key, descriptor) {
        var fn = descriptor.value;
        var definingProperty = false;
        return {
            configurable: true,
            get: function get() {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                var boundFn = throttleByAnimationFrame(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                    value: boundFn,
                    configurable: true,
                    writable: true
                });
                definingProperty = false;
                return boundFn;
            }
        };
    };
}

/***/ }),

/***/ "./node_modules/antd/lib/card/Grid.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

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

exports['default'] = function (props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-card' : _props$prefixCls,
        className = props.className,
        others = __rest(props, ["prefixCls", "className"]);

    var classString = (0, _classnames2['default'])(prefixCls + '-grid', className);
    return React.createElement('div', (0, _extends3['default'])({}, others, { className: classString }));
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/card/Meta.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

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

exports['default'] = function (props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-card' : _props$prefixCls,
        className = props.className,
        avatar = props.avatar,
        title = props.title,
        description = props.description,
        others = __rest(props, ["prefixCls", "className", "avatar", "title", "description"]);

    var classString = (0, _classnames2['default'])(prefixCls + '-meta', className);
    var avatarDom = avatar ? React.createElement(
        'div',
        { className: prefixCls + '-meta-avatar' },
        avatar
    ) : null;
    var titleDom = title ? React.createElement(
        'div',
        { className: prefixCls + '-meta-title' },
        title
    ) : null;
    var descriptionDom = description ? React.createElement(
        'div',
        { className: prefixCls + '-meta-description' },
        description
    ) : null;
    var MetaDetail = titleDom || descriptionDom ? React.createElement(
        'div',
        { className: prefixCls + '-meta-detail' },
        titleDom,
        descriptionDom
    ) : null;
    return React.createElement(
        'div',
        (0, _extends3['default'])({}, others, { className: classString }),
        avatarDom,
        MetaDetail
    );
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/card/index.js":
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

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _addEventListener = __webpack_require__("./node_modules/rc-util/lib/Dom/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _omit = __webpack_require__("./node_modules/omit.js/es/index.js");

var _omit2 = _interopRequireDefault(_omit);

var _Grid = __webpack_require__("./node_modules/antd/lib/card/Grid.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _Meta = __webpack_require__("./node_modules/antd/lib/card/Meta.js");

var _Meta2 = _interopRequireDefault(_Meta);

var _tabs = __webpack_require__("./node_modules/antd/lib/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _row = __webpack_require__("./node_modules/antd/lib/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__("./node_modules/antd/lib/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _throttleByAnimationFrame = __webpack_require__("./node_modules/antd/lib/_util/throttleByAnimationFrame.js");

var _warning = __webpack_require__("./node_modules/antd/lib/_util/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3["default"])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Card = function (_React$Component) {
    (0, _inherits3["default"])(Card, _React$Component);

    function Card() {
        (0, _classCallCheck3["default"])(this, Card);

        var _this = (0, _possibleConstructorReturn3["default"])(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));

        _this.state = {
            widerPadding: false
        };
        _this.updateWiderPaddingCalled = false;
        _this.onTabChange = function (key) {
            if (_this.props.onTabChange) {
                _this.props.onTabChange(key);
            }
        };
        _this.saveRef = function (node) {
            _this.container = node;
        };
        return _this;
    }

    (0, _createClass3["default"])(Card, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.updateWiderPadding();
            this.resizeEvent = (0, _addEventListener2["default"])(window, 'resize', this.updateWiderPadding);
            if ('noHovering' in this.props) {
                (0, _warning2["default"])(!this.props.noHovering, '`noHovering` of Card is deprecated, you can remove it safely or use `hoverable` instead.');
                (0, _warning2["default"])(!!this.props.noHovering, '`noHovering={false}` of Card is deprecated, use `hoverable` instead.');
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.resizeEvent) {
                this.resizeEvent.remove();
            }
            this.updateWiderPadding.cancel();
        }
    }, {
        key: "updateWiderPadding",
        value: function updateWiderPadding() {
            var _this2 = this;

            if (!this.container) {
                return;
            }
            // 936 is a magic card width pixel number indicated by designer
            var WIDTH_BOUNDARY_PX = 936;
            if (this.container.offsetWidth >= WIDTH_BOUNDARY_PX && !this.state.widerPadding) {
                this.setState({ widerPadding: true }, function () {
                    _this2.updateWiderPaddingCalled = true; // first render without css transition
                });
            }
            if (this.container.offsetWidth < WIDTH_BOUNDARY_PX && this.state.widerPadding) {
                this.setState({ widerPadding: false }, function () {
                    _this2.updateWiderPaddingCalled = true; // first render without css transition
                });
            }
        }
    }, {
        key: "isContainGrid",
        value: function isContainGrid() {
            var containGrid = void 0;
            React.Children.forEach(this.props.children, function (element) {
                if (element && element.type && element.type === _Grid2["default"]) {
                    containGrid = true;
                }
            });
            return containGrid;
        }
    }, {
        key: "getAction",
        value: function getAction(actions) {
            if (!actions || !actions.length) {
                return null;
            }
            var actionList = actions.map(function (action, index) {
                return React.createElement(
                    "li",
                    { style: { width: 100 / actions.length + "%" }, key: "action-" + index },
                    React.createElement(
                        "span",
                        null,
                        action
                    )
                );
            });
            return actionList;
        }
        // For 2.x compatible

    }, {
        key: "getCompatibleHoverable",
        value: function getCompatibleHoverable() {
            var _props = this.props,
                noHovering = _props.noHovering,
                hoverable = _props.hoverable;

            if ('noHovering' in this.props) {
                return !noHovering || hoverable;
            }
            return !!hoverable;
        }
    }, {
        key: "render",
        value: function render() {
            var _classNames;

            var _a = this.props,
                _a$prefixCls = _a.prefixCls,
                prefixCls = _a$prefixCls === undefined ? 'ant-card' : _a$prefixCls,
                className = _a.className,
                extra = _a.extra,
                _a$bodyStyle = _a.bodyStyle,
                bodyStyle = _a$bodyStyle === undefined ? {} : _a$bodyStyle,
                noHovering = _a.noHovering,
                hoverable = _a.hoverable,
                title = _a.title,
                loading = _a.loading,
                _a$bordered = _a.bordered,
                bordered = _a$bordered === undefined ? true : _a$bordered,
                type = _a.type,
                cover = _a.cover,
                actions = _a.actions,
                tabList = _a.tabList,
                children = _a.children,
                activeTabKey = _a.activeTabKey,
                defaultActiveTabKey = _a.defaultActiveTabKey,
                others = __rest(_a, ["prefixCls", "className", "extra", "bodyStyle", "noHovering", "hoverable", "title", "loading", "bordered", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey"]);
            var classString = (0, _classnames2["default"])(prefixCls, className, (_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + "-loading", loading), (0, _defineProperty3["default"])(_classNames, prefixCls + "-bordered", bordered), (0, _defineProperty3["default"])(_classNames, prefixCls + "-hoverable", this.getCompatibleHoverable()), (0, _defineProperty3["default"])(_classNames, prefixCls + "-wider-padding", this.state.widerPadding), (0, _defineProperty3["default"])(_classNames, prefixCls + "-padding-transition", this.updateWiderPaddingCalled), (0, _defineProperty3["default"])(_classNames, prefixCls + "-contain-grid", this.isContainGrid()), (0, _defineProperty3["default"])(_classNames, prefixCls + "-contain-tabs", tabList && tabList.length), (0, _defineProperty3["default"])(_classNames, prefixCls + "-type-" + type, !!type), _classNames));
            var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? { padding: 24 } : undefined;
            var loadingBlock = React.createElement(
                "div",
                { className: prefixCls + "-loading-content", style: loadingBlockStyle },
                React.createElement(
                    _row2["default"],
                    { gutter: 8 },
                    React.createElement(
                        _col2["default"],
                        { span: 22 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                React.createElement(
                    _row2["default"],
                    { gutter: 8 },
                    React.createElement(
                        _col2["default"],
                        { span: 8 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    ),
                    React.createElement(
                        _col2["default"],
                        { span: 15 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                React.createElement(
                    _row2["default"],
                    { gutter: 8 },
                    React.createElement(
                        _col2["default"],
                        { span: 6 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    ),
                    React.createElement(
                        _col2["default"],
                        { span: 18 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                React.createElement(
                    _row2["default"],
                    { gutter: 8 },
                    React.createElement(
                        _col2["default"],
                        { span: 13 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    ),
                    React.createElement(
                        _col2["default"],
                        { span: 9 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                React.createElement(
                    _row2["default"],
                    { gutter: 8 },
                    React.createElement(
                        _col2["default"],
                        { span: 4 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    ),
                    React.createElement(
                        _col2["default"],
                        { span: 3 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    ),
                    React.createElement(
                        _col2["default"],
                        { span: 16 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                React.createElement(
                    _row2["default"],
                    { gutter: 8 },
                    React.createElement(
                        _col2["default"],
                        { span: 8 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    ),
                    React.createElement(
                        _col2["default"],
                        { span: 6 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    ),
                    React.createElement(
                        _col2["default"],
                        { span: 8 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    )
                )
            );
            var hasActiveTabKey = activeTabKey !== undefined;
            var extraProps = (0, _defineProperty3["default"])({}, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey);
            var head = void 0;
            var tabs = tabList && tabList.length ? React.createElement(
                _tabs2["default"],
                (0, _extends3["default"])({}, extraProps, { className: prefixCls + "-head-tabs", size: "large", onChange: this.onTabChange }),
                tabList.map(function (item) {
                    return React.createElement(_tabs2["default"].TabPane, { tab: item.tab, key: item.key });
                })
            ) : null;
            if (title || extra || tabs) {
                head = React.createElement(
                    "div",
                    { className: prefixCls + "-head" },
                    React.createElement(
                        "div",
                        { className: prefixCls + "-head-wrapper" },
                        title && React.createElement(
                            "div",
                            { className: prefixCls + "-head-title" },
                            title
                        ),
                        extra && React.createElement(
                            "div",
                            { className: prefixCls + "-extra" },
                            extra
                        )
                    ),
                    tabs
                );
            }
            var coverDom = cover ? React.createElement(
                "div",
                { className: prefixCls + "-cover" },
                cover
            ) : null;
            var body = React.createElement(
                "div",
                { className: prefixCls + "-body", style: bodyStyle },
                loading ? loadingBlock : children
            );
            var actionDom = actions && actions.length ? React.createElement(
                "ul",
                { className: prefixCls + "-actions" },
                this.getAction(actions)
            ) : null;
            var divProps = (0, _omit2["default"])(others, ['onTabChange']);
            return React.createElement(
                "div",
                (0, _extends3["default"])({}, divProps, { className: classString, ref: this.saveRef }),
                head,
                coverDom,
                body,
                actionDom
            );
        }
    }]);
    return Card;
}(React.Component);

exports["default"] = Card;

Card.Grid = _Grid2["default"];
Card.Meta = _Meta2["default"];
__decorate([(0, _throttleByAnimationFrame.throttleByAnimationFrameDecorator)()], Card.prototype, "updateWiderPadding", null);
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/antd/lib/col/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grid = __webpack_require__("./node_modules/antd/lib/grid/index.js");

exports['default'] = _grid.Col;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/grid/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _row = __webpack_require__("./node_modules/antd/lib/grid/row.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__("./node_modules/antd/lib/grid/col.js");

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.Row = _row2['default'];
exports.Col = _col2['default'];

/***/ }),

/***/ "./node_modules/antd/lib/list/Item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Meta = undefined;

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

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _grid = __webpack_require__("./node_modules/antd/lib/grid/index.js");

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
var Meta = exports.Meta = function Meta(props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-list' : _props$prefixCls,
        className = props.className,
        avatar = props.avatar,
        title = props.title,
        description = props.description,
        others = __rest(props, ["prefixCls", "className", "avatar", "title", "description"]);

    var classString = (0, _classnames2['default'])(prefixCls + '-item-meta', className);
    var content = React.createElement(
        'div',
        { className: prefixCls + '-item-meta-content' },
        title && React.createElement(
            'h4',
            { className: prefixCls + '-item-meta-title' },
            title
        ),
        description && React.createElement(
            'div',
            { className: prefixCls + '-item-meta-description' },
            description
        )
    );
    return React.createElement(
        'div',
        (0, _extends3['default'])({}, others, { className: classString }),
        avatar && React.createElement(
            'div',
            { className: prefixCls + '-item-meta-avatar' },
            avatar
        ),
        (title || description) && content
    );
};
function getGrid(grid, t) {
    return grid[t] && Math.floor(24 / grid[t]);
}
var GridColumns = ['', 1, 2, 3, 4, 6, 8, 12, 24];

var Item = function (_React$Component) {
    (0, _inherits3['default'])(Item, _React$Component);

    function Item() {
        (0, _classCallCheck3['default'])(this, Item);
        return (0, _possibleConstructorReturn3['default'])(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Item, [{
        key: 'render',
        value: function render() {
            var grid = this.context.grid;
            var _a = this.props,
                _a$prefixCls = _a.prefixCls,
                prefixCls = _a$prefixCls === undefined ? 'ant-list' : _a$prefixCls,
                children = _a.children,
                actions = _a.actions,
                extra = _a.extra,
                className = _a.className,
                others = __rest(_a, ["prefixCls", "children", "actions", "extra", "className"]);
            var classString = (0, _classnames2['default'])(prefixCls + '-item', className);
            var metaContent = [];
            var otherContent = [];
            React.Children.forEach(children, function (element) {
                if (element && element.type && element.type === Meta) {
                    metaContent.push(element);
                } else {
                    otherContent.push(element);
                }
            });
            var contentClassString = (0, _classnames2['default'])(prefixCls + '-item-content', (0, _defineProperty3['default'])({}, prefixCls + '-item-content-single', metaContent.length < 1));
            var content = otherContent.length > 0 ? React.createElement(
                'div',
                { className: contentClassString },
                otherContent
            ) : null;
            var actionsContent = void 0;
            if (actions && actions.length > 0) {
                var actionsContentItem = function actionsContentItem(action, i) {
                    return React.createElement(
                        'li',
                        { key: prefixCls + '-item-action-' + i },
                        action,
                        i !== actions.length - 1 && React.createElement('em', { className: prefixCls + '-item-action-split' })
                    );
                };
                actionsContent = React.createElement(
                    'ul',
                    { className: prefixCls + '-item-action' },
                    actions.map(function (action, i) {
                        return actionsContentItem(action, i);
                    })
                );
            }
            var extraContent = React.createElement(
                'div',
                { className: prefixCls + '-item-extra-wrap' },
                React.createElement(
                    'div',
                    { className: prefixCls + '-item-main' },
                    metaContent,
                    content,
                    actionsContent
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-item-extra' },
                    extra
                )
            );
            var mainContent = grid ? React.createElement(
                _grid.Col,
                { span: getGrid(grid, 'column'), xs: getGrid(grid, 'xs'), sm: getGrid(grid, 'sm'), md: getGrid(grid, 'md'), lg: getGrid(grid, 'lg'), xl: getGrid(grid, 'xl'), xxl: getGrid(grid, 'xxl') },
                React.createElement(
                    'div',
                    (0, _extends3['default'])({}, others, { className: classString }),
                    extra && extraContent,
                    !extra && metaContent,
                    !extra && content,
                    !extra && actionsContent
                )
            ) : React.createElement(
                'div',
                (0, _extends3['default'])({}, others, { className: classString }),
                extra && extraContent,
                !extra && metaContent,
                !extra && content,
                !extra && actionsContent
            );
            return mainContent;
        }
    }]);
    return Item;
}(React.Component);

exports['default'] = Item;

Item.Meta = Meta;
Item.propTypes = {
    column: _propTypes2['default'].oneOf(GridColumns),
    xs: _propTypes2['default'].oneOf(GridColumns),
    sm: _propTypes2['default'].oneOf(GridColumns),
    md: _propTypes2['default'].oneOf(GridColumns),
    lg: _propTypes2['default'].oneOf(GridColumns),
    xl: _propTypes2['default'].oneOf(GridColumns),
    xxl: _propTypes2['default'].oneOf(GridColumns)
};
Item.contextTypes = {
    grid: _propTypes2['default'].any
};

/***/ }),

/***/ "./node_modules/antd/lib/list/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

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

var _LocaleReceiver = __webpack_require__("./node_modules/antd/lib/locale-provider/LocaleReceiver.js");

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _default = __webpack_require__("./node_modules/antd/lib/locale-provider/default.js");

var _default2 = _interopRequireDefault(_default);

var _spin = __webpack_require__("./node_modules/antd/lib/spin/index.js");

var _spin2 = _interopRequireDefault(_spin);

var _pagination = __webpack_require__("./node_modules/antd/lib/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _grid = __webpack_require__("./node_modules/antd/lib/grid/index.js");

var _Item = __webpack_require__("./node_modules/antd/lib/list/Item.js");

var _Item2 = _interopRequireDefault(_Item);

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

var List = function (_React$Component) {
    (0, _inherits3['default'])(List, _React$Component);

    function List() {
        (0, _classCallCheck3['default'])(this, List);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));

        _this.state = {
            paginationCurrent: 1
        };
        _this.defaultPaginationProps = {
            current: 1,
            pageSize: 10,
            onChange: function onChange(page, pageSize) {
                var pagination = _this.props.pagination;

                _this.setState({
                    paginationCurrent: page
                });
                if (pagination && pagination.onChange) {
                    pagination.onChange(page, pageSize);
                }
            },
            total: 0
        };
        _this.keys = {};
        _this.renderItem = function (item, index) {
            var _this$props = _this.props,
                dataSource = _this$props.dataSource,
                renderItem = _this$props.renderItem,
                rowKey = _this$props.rowKey;

            var key = void 0;
            if (typeof rowKey === 'function') {
                key = rowKey(dataSource[index]);
            } else if (typeof rowKey === 'string') {
                key = dataSource[rowKey];
            } else {
                key = dataSource.key;
            }
            if (!key) {
                key = 'list-item-' + index;
            }
            _this.keys[index] = key;
            return renderItem(item, index);
        };
        _this.renderEmpty = function (contextLocale) {
            var locale = (0, _extends3['default'])({}, contextLocale, _this.props.locale);
            return React.createElement(
                'div',
                { className: _this.props.prefixCls + '-empty-text' },
                locale.emptyText
            );
        };
        return _this;
    }

    (0, _createClass3['default'])(List, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                grid: this.props.grid
            };
        }
    }, {
        key: 'isSomethingAfterLastItem',
        value: function isSomethingAfterLastItem() {
            var _props = this.props,
                loadMore = _props.loadMore,
                pagination = _props.pagination,
                footer = _props.footer;

            return !!(loadMore || pagination || footer);
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var paginationCurrent = this.state.paginationCurrent;
            var _a = this.props,
                bordered = _a.bordered,
                split = _a.split,
                className = _a.className,
                children = _a.children,
                itemLayout = _a.itemLayout,
                loadMore = _a.loadMore,
                pagination = _a.pagination,
                prefixCls = _a.prefixCls,
                grid = _a.grid,
                dataSource = _a.dataSource,
                size = _a.size,
                rowKey = _a.rowKey,
                renderItem = _a.renderItem,
                header = _a.header,
                footer = _a.footer,
                loading = _a.loading,
                locale = _a.locale,
                rest = __rest(_a, ["bordered", "split", "className", "children", "itemLayout", "loadMore", "pagination", "prefixCls", "grid", "dataSource", "size", "rowKey", "renderItem", "header", "footer", "loading", "locale"]);
            var loadingProp = loading;
            if (typeof loadingProp === 'boolean') {
                loadingProp = {
                    spinning: loadingProp
                };
            }
            var isLoading = loadingProp && loadingProp.spinning;
            // large => lg
            // small => sm
            var sizeCls = '';
            switch (size) {
                case 'large':
                    sizeCls = 'lg';
                    break;
                case 'small':
                    sizeCls = 'sm';
                default:
                    break;
            }
            var classString = (0, _classnames2['default'])(prefixCls, className, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-vertical', itemLayout === 'vertical'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + sizeCls, sizeCls), (0, _defineProperty3['default'])(_classNames, prefixCls + '-split', split), (0, _defineProperty3['default'])(_classNames, prefixCls + '-bordered', bordered), (0, _defineProperty3['default'])(_classNames, prefixCls + '-loading', isLoading), (0, _defineProperty3['default'])(_classNames, prefixCls + '-grid', grid), (0, _defineProperty3['default'])(_classNames, prefixCls + '-something-after-last-item', this.isSomethingAfterLastItem()), _classNames));
            var paginationProps = (0, _extends3['default'])({}, this.defaultPaginationProps, { total: dataSource.length, current: paginationCurrent }, pagination || {});
            var largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);
            if (paginationProps.current > largestPage) {
                paginationProps.current = largestPage;
            }
            var paginationContent = pagination ? React.createElement(
                'div',
                { className: prefixCls + '-pagination' },
                React.createElement(_pagination2['default'], (0, _extends3['default'])({}, paginationProps, { onChange: this.defaultPaginationProps.onChange }))
            ) : null;
            var splitDataSource = [].concat((0, _toConsumableArray3['default'])(dataSource));
            if (pagination) {
                if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
                    splitDataSource = [].concat((0, _toConsumableArray3['default'])(dataSource)).splice((paginationProps.current - 1) * paginationProps.pageSize, paginationProps.pageSize);
                }
            }
            var childrenContent = void 0;
            childrenContent = isLoading && React.createElement('div', { style: { minHeight: 53 } });
            if (splitDataSource.length > 0) {
                var items = splitDataSource.map(function (item, index) {
                    return _this2.renderItem(item, index);
                });
                var childrenList = React.Children.map(items, function (child, index) {
                    return React.cloneElement(child, {
                        key: _this2.keys[index]
                    });
                });
                childrenContent = grid ? React.createElement(
                    _grid.Row,
                    { gutter: grid.gutter },
                    childrenList
                ) : childrenList;
            } else if (!children && !isLoading) {
                childrenContent = React.createElement(
                    _LocaleReceiver2['default'],
                    { componentName: 'Table', defaultLocale: _default2['default'].Table },
                    this.renderEmpty
                );
            }
            var paginationPosition = paginationProps.position || 'bottom';
            return React.createElement(
                'div',
                (0, _extends3['default'])({ className: classString }, rest),
                (paginationPosition === 'top' || paginationPosition === 'both') && paginationContent,
                header && React.createElement(
                    'div',
                    { className: prefixCls + '-header' },
                    header
                ),
                React.createElement(
                    _spin2['default'],
                    loadingProp,
                    childrenContent,
                    children
                ),
                footer && React.createElement(
                    'div',
                    { className: prefixCls + '-footer' },
                    footer
                ),
                loadMore || (paginationPosition === 'bottom' || paginationPosition === 'both') && paginationContent
            );
        }
    }]);
    return List;
}(React.Component);

exports['default'] = List;

List.Item = _Item2['default'];
List.childContextTypes = {
    grid: _propTypes2['default'].any
};
List.defaultProps = {
    dataSource: [],
    prefixCls: 'ant-list',
    bordered: false,
    split: true,
    loading: false,
    pagination: false
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/row/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grid = __webpack_require__("./node_modules/antd/lib/grid/index.js");

exports['default'] = _grid.Row;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/tabs/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var ReactDOM = _interopRequireWildcard(_reactDom);

var _rcTabs = __webpack_require__("./node_modules/rc-tabs/es/index.js");

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _ScrollableInkTabBar = __webpack_require__("./node_modules/rc-tabs/lib/ScrollableInkTabBar.js");

var _ScrollableInkTabBar2 = _interopRequireDefault(_ScrollableInkTabBar);

var _TabContent = __webpack_require__("./node_modules/rc-tabs/lib/TabContent.js");

var _TabContent2 = _interopRequireDefault(_TabContent);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__("./node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _warning = __webpack_require__("./node_modules/antd/lib/_util/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _isFlexSupported = __webpack_require__("./node_modules/antd/lib/_util/isFlexSupported.js");

var _isFlexSupported2 = _interopRequireDefault(_isFlexSupported);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Tabs = function (_React$Component) {
    (0, _inherits3['default'])(Tabs, _React$Component);

    function Tabs() {
        (0, _classCallCheck3['default'])(this, Tabs);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));

        _this.createNewTab = function (targetKey) {
            var onEdit = _this.props.onEdit;
            if (onEdit) {
                onEdit(targetKey, 'add');
            }
        };
        _this.removeTab = function (targetKey, e) {
            e.stopPropagation();
            if (!targetKey) {
                return;
            }
            var onEdit = _this.props.onEdit;
            if (onEdit) {
                onEdit(targetKey, 'remove');
            }
        };
        _this.handleChange = function (activeKey) {
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange(activeKey);
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(Tabs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var NO_FLEX = ' no-flex';
            var tabNode = ReactDOM.findDOMNode(this);
            if (tabNode && !(0, _isFlexSupported2['default'])() && tabNode.className.indexOf(NO_FLEX) === -1) {
                tabNode.className += NO_FLEX;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                size = _props.size,
                _props$type = _props.type,
                type = _props$type === undefined ? 'line' : _props$type,
                tabPosition = _props.tabPosition,
                children = _props.children,
                tabBarExtraContent = _props.tabBarExtraContent,
                tabBarStyle = _props.tabBarStyle,
                hideAdd = _props.hideAdd,
                onTabClick = _props.onTabClick,
                onPrevClick = _props.onPrevClick,
                onNextClick = _props.onNextClick,
                _props$animated = _props.animated,
                animated = _props$animated === undefined ? true : _props$animated,
                tabBarGutter = _props.tabBarGutter;

            var _ref = (typeof animated === 'undefined' ? 'undefined' : (0, _typeof3['default'])(animated)) === 'object' ? {
                inkBarAnimated: animated.inkBar, tabPaneAnimated: animated.tabPane
            } : {
                inkBarAnimated: animated, tabPaneAnimated: animated
            },
                inkBarAnimated = _ref.inkBarAnimated,
                tabPaneAnimated = _ref.tabPaneAnimated;
            // card tabs should not have animation


            if (type !== 'line') {
                tabPaneAnimated = 'animated' in this.props ? tabPaneAnimated : false;
            }
            (0, _warning2['default'])(!(type.indexOf('card') >= 0 && (size === 'small' || size === 'large')), 'Tabs[type=card|editable-card] doesn\'t have small or large size, it\'s by designed.');
            var cls = (0, _classnames2['default'])(className, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-vertical', tabPosition === 'left' || tabPosition === 'right'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + size, !!size), (0, _defineProperty3['default'])(_classNames, prefixCls + '-card', type.indexOf('card') >= 0), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-no-animation', !tabPaneAnimated), _classNames));
            // only card type tabs can be added and closed
            var childrenWithClose = [];
            if (type === 'editable-card') {
                childrenWithClose = [];
                React.Children.forEach(children, function (child, index) {
                    var closable = child.props.closable;
                    closable = typeof closable === 'undefined' ? true : closable;
                    var closeIcon = closable ? React.createElement(_icon2['default'], { type: 'close', onClick: function onClick(e) {
                            return _this2.removeTab(child.key, e);
                        } }) : null;
                    childrenWithClose.push(React.cloneElement(child, {
                        tab: React.createElement(
                            'div',
                            { className: closable ? undefined : prefixCls + '-tab-unclosable' },
                            child.props.tab,
                            closeIcon
                        ),
                        key: child.key || index
                    }));
                });
                // Add new tab handler
                if (!hideAdd) {
                    tabBarExtraContent = React.createElement(
                        'span',
                        null,
                        React.createElement(_icon2['default'], { type: 'plus', className: prefixCls + '-new-tab', onClick: this.createNewTab }),
                        tabBarExtraContent
                    );
                }
            }
            tabBarExtraContent = tabBarExtraContent ? React.createElement(
                'div',
                { className: prefixCls + '-extra-content' },
                tabBarExtraContent
            ) : null;
            var renderTabBar = function renderTabBar() {
                return React.createElement(_ScrollableInkTabBar2['default'], { inkBarAnimated: inkBarAnimated, extraContent: tabBarExtraContent, onTabClick: onTabClick, onPrevClick: onPrevClick, onNextClick: onNextClick, style: tabBarStyle, tabBarGutter: tabBarGutter });
            };
            return React.createElement(
                _rcTabs2['default'],
                (0, _extends3['default'])({}, this.props, { className: cls, tabBarPosition: tabPosition, renderTabBar: renderTabBar, renderTabContent: function renderTabContent() {
                        return React.createElement(_TabContent2['default'], { animated: tabPaneAnimated, animatedWithMargin: true });
                    }, onChange: this.handleChange }),
                childrenWithClose.length > 0 ? childrenWithClose : children
            );
        }
    }]);
    return Tabs;
}(React.Component);

exports['default'] = Tabs;

Tabs.TabPane = _rcTabs.TabPane;
Tabs.defaultProps = {
    prefixCls: 'ant-tabs',
    hideAdd: false
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    now = __webpack_require__("./node_modules/lodash/now.js"),
    toNumber = __webpack_require__("./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/rc-tabs/es/KeyCode.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40 // also NUM_SOUTH
});

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabContent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class__ = __webpack_require__("./node_modules/create-react-class/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__("./node_modules/rc-tabs/es/utils.js");








var TabContent = __WEBPACK_IMPORTED_MODULE_3_create_react_class___default()({
  displayName: 'TabContent',
  propTypes: {
    animated: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    animatedWithMargin: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    prefixCls: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
    activeKey: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    style: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
    tabBarPosition: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      animated: true
    };
  },
  getTabPanes: function getTabPanes() {
    var props = this.props;
    var activeKey = props.activeKey;
    var children = props.children;
    var newChildren = [];

    __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.forEach(children, function (child) {
      if (!child) {
        return;
      }
      var key = child.key;
      var active = activeKey === key;
      newChildren.push(__WEBPACK_IMPORTED_MODULE_2_react___default.a.cloneElement(child, {
        active: active,
        destroyInactiveTabPane: props.destroyInactiveTabPane,
        rootPrefixCls: props.prefixCls
      }));
    });

    return newChildren;
  },
  render: function render() {
    var _classnames;

    var props = this.props;
    var prefixCls = props.prefixCls,
        children = props.children,
        activeKey = props.activeKey,
        tabBarPosition = props.tabBarPosition,
        animated = props.animated,
        animatedWithMargin = props.animatedWithMargin;
    var style = props.style;

    var classes = __WEBPACK_IMPORTED_MODULE_5_classnames___default()((_classnames = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls + '-content', true), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, animated ? prefixCls + '-content-animated' : prefixCls + '-content-no-animated', true), _classnames));
    if (animated) {
      var activeIndex = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* getActiveIndex */])(children, activeKey);
      if (activeIndex !== -1) {
        var animatedStyle = animatedWithMargin ? Object(__WEBPACK_IMPORTED_MODULE_6__utils__["c" /* getMarginStyle */])(activeIndex, tabBarPosition) : Object(__WEBPACK_IMPORTED_MODULE_6__utils__["e" /* getTransformPropValue */])(Object(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* getTransformByIndex */])(activeIndex, tabBarPosition));
        style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, animatedStyle);
      } else {
        style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, {
          display: 'none'
        });
      }
    }
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'div',
      {
        className: classes,
        style: style
      },
      this.getTabPanes()
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (TabContent);

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabPane.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_create_react_class__ = __webpack_require__("./node_modules/create-react-class/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__("./node_modules/rc-tabs/es/utils.js");









var TabPane = __WEBPACK_IMPORTED_MODULE_5_create_react_class___default()({
  displayName: 'TabPane',
  propTypes: {
    className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    active: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    style: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
    destroyInactiveTabPane: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    forceRender: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    placeholder: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node
  },
  getDefaultProps: function getDefaultProps() {
    return { placeholder: null };
  },
  render: function render() {
    var _classnames;

    var _props = this.props,
        className = _props.className,
        destroyInactiveTabPane = _props.destroyInactiveTabPane,
        active = _props.active,
        forceRender = _props.forceRender,
        rootPrefixCls = _props.rootPrefixCls,
        style = _props.style,
        children = _props.children,
        placeholder = _props.placeholder,
        restProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['className', 'destroyInactiveTabPane', 'active', 'forceRender', 'rootPrefixCls', 'style', 'children', 'placeholder']);

    this._isActived = this._isActived || active;
    var prefixCls = rootPrefixCls + '-tabpane';
    var cls = __WEBPACK_IMPORTED_MODULE_6_classnames___default()((_classnames = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls, 1), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls + '-inactive', !active), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls + '-active', active), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, className, className), _classnames));
    var isRender = destroyInactiveTabPane ? active : this._isActived;
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'div',
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        style: style,
        role: 'tabpanel',
        'aria-hidden': active ? 'false' : 'true',
        className: cls
      }, Object(__WEBPACK_IMPORTED_MODULE_7__utils__["b" /* getDataAttr */])(restProps)),
      isRender || forceRender ? children : placeholder
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (TabPane);

/***/ }),

/***/ "./node_modules/rc-tabs/es/Tabs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__KeyCode__ = __webpack_require__("./node_modules/rc-tabs/es/KeyCode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__TabPane__ = __webpack_require__("./node_modules/rc-tabs/es/TabPane.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils__ = __webpack_require__("./node_modules/rc-tabs/es/utils.js");














function noop() {}

function getDefaultActiveKey(props) {
  var activeKey = void 0;
  __WEBPACK_IMPORTED_MODULE_7_react___default.a.Children.forEach(props.children, function (child) {
    if (child && !activeKey && !child.props.disabled) {
      activeKey = child.key;
    }
  });
  return activeKey;
}

function activeKeyIsValid(props, key) {
  var keys = __WEBPACK_IMPORTED_MODULE_7_react___default.a.Children.map(props.children, function (child) {
    return child && child.key;
  });
  return keys.indexOf(key) >= 0;
}

var Tabs = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Tabs, _React$Component);

  function Tabs(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Tabs);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _initialiseProps.call(_this);

    var activeKey = void 0;
    if ('activeKey' in props) {
      activeKey = props.activeKey;
    } else if ('defaultActiveKey' in props) {
      activeKey = props.defaultActiveKey;
    } else {
      activeKey = getDefaultActiveKey(props);
    }

    _this.state = {
      activeKey: activeKey
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Tabs, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('activeKey' in nextProps) {
        this.setState({
          activeKey: nextProps.activeKey
        });
      } else if (!activeKeyIsValid(nextProps, this.state.activeKey)) {
        // https://github.com/ant-design/ant-design/issues/7093
        this.setState({
          activeKey: getDefaultActiveKey(nextProps)
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var props = this.props;

      var prefixCls = props.prefixCls,
          tabBarPosition = props.tabBarPosition,
          className = props.className,
          renderTabContent = props.renderTabContent,
          renderTabBar = props.renderTabBar,
          destroyInactiveTabPane = props.destroyInactiveTabPane,
          restProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(props, ['prefixCls', 'tabBarPosition', 'className', 'renderTabContent', 'renderTabBar', 'destroyInactiveTabPane']);

      var cls = __WEBPACK_IMPORTED_MODULE_11_classnames___default()((_classnames = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls, 1), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls + '-' + tabBarPosition, 1), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, className, !!className), _classnames));

      this.tabBar = renderTabBar();
      var contents = [__WEBPACK_IMPORTED_MODULE_7_react___default.a.cloneElement(this.tabBar, {
        prefixCls: prefixCls,
        key: 'tabBar',
        onKeyDown: this.onNavKeyDown,
        tabBarPosition: tabBarPosition,
        onTabClick: this.onTabClick,
        panels: props.children,
        activeKey: this.state.activeKey
      }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.cloneElement(renderTabContent(), {
        prefixCls: prefixCls,
        tabBarPosition: tabBarPosition,
        activeKey: this.state.activeKey,
        destroyInactiveTabPane: destroyInactiveTabPane,
        children: props.children,
        onChange: this.setActiveKey,
        key: 'tabContent'
      })];
      if (tabBarPosition === 'bottom') {
        contents.reverse();
      }
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          className: cls,
          style: props.style
        }, Object(__WEBPACK_IMPORTED_MODULE_12__utils__["b" /* getDataAttr */])(restProps)),
        contents
      );
    }
  }]);

  return Tabs;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onTabClick = function (activeKey) {
    if (_this2.tabBar.props.onTabClick) {
      _this2.tabBar.props.onTabClick(activeKey);
    }
    _this2.setActiveKey(activeKey);
  };

  this.onNavKeyDown = function (e) {
    var eventKeyCode = e.keyCode;
    if (eventKeyCode === __WEBPACK_IMPORTED_MODULE_9__KeyCode__["a" /* default */].RIGHT || eventKeyCode === __WEBPACK_IMPORTED_MODULE_9__KeyCode__["a" /* default */].DOWN) {
      e.preventDefault();
      var nextKey = _this2.getNextActiveKey(true);
      _this2.onTabClick(nextKey);
    } else if (eventKeyCode === __WEBPACK_IMPORTED_MODULE_9__KeyCode__["a" /* default */].LEFT || eventKeyCode === __WEBPACK_IMPORTED_MODULE_9__KeyCode__["a" /* default */].UP) {
      e.preventDefault();
      var previousKey = _this2.getNextActiveKey(false);
      _this2.onTabClick(previousKey);
    }
  };

  this.setActiveKey = function (activeKey) {
    if (_this2.state.activeKey !== activeKey) {
      if (!('activeKey' in _this2.props)) {
        _this2.setState({
          activeKey: activeKey
        });
      }
      _this2.props.onChange(activeKey);
    }
  };

  this.getNextActiveKey = function (next) {
    var activeKey = _this2.state.activeKey;
    var children = [];
    __WEBPACK_IMPORTED_MODULE_7_react___default.a.Children.forEach(_this2.props.children, function (c) {
      if (c && !c.props.disabled) {
        if (next) {
          children.push(c);
        } else {
          children.unshift(c);
        }
      }
    });
    var length = children.length;
    var ret = length && children[0].key;
    children.forEach(function (child, i) {
      if (child.key === activeKey) {
        if (i === length - 1) {
          ret = children[0].key;
        } else {
          ret = children[i + 1].key;
        }
      }
    });
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Tabs);


Tabs.propTypes = {
  destroyInactiveTabPane: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  renderTabBar: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired,
  renderTabContent: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired,
  onChange: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.any,
  prefixCls: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  tabBarPosition: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object,
  activeKey: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  defaultActiveKey: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string
};

Tabs.defaultProps = {
  prefixCls: 'rc-tabs',
  destroyInactiveTabPane: false,
  onChange: noop,
  tabBarPosition: 'top',
  style: {}
};

Tabs.TabPane = __WEBPACK_IMPORTED_MODULE_10__TabPane__["a" /* default */];

/***/ }),

/***/ "./node_modules/rc-tabs/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tabs__ = __webpack_require__("./node_modules/rc-tabs/es/Tabs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TabPane__ = __webpack_require__("./node_modules/rc-tabs/es/TabPane.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabContent__ = __webpack_require__("./node_modules/rc-tabs/es/TabContent.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return __WEBPACK_IMPORTED_MODULE_1__TabPane__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabContent", function() { return __WEBPACK_IMPORTED_MODULE_2__TabContent__["a"]; });




/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Tabs__["a" /* default */]);


/***/ }),

/***/ "./node_modules/rc-tabs/es/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toArray */
/* harmony export (immutable) */ __webpack_exports__["a"] = getActiveIndex;
/* unused harmony export getActiveKey */
/* unused harmony export setTransform */
/* unused harmony export isTransformSupported */
/* unused harmony export setTransition */
/* harmony export (immutable) */ __webpack_exports__["e"] = getTransformPropValue;
/* unused harmony export isVertical */
/* harmony export (immutable) */ __webpack_exports__["d"] = getTransformByIndex;
/* harmony export (immutable) */ __webpack_exports__["c"] = getMarginStyle;
/* unused harmony export getStyle */
/* unused harmony export setPxStyle */
/* harmony export (immutable) */ __webpack_exports__["b"] = getDataAttr;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



function toArray(children) {
  // allow [c,[a,b]]
  var c = [];
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.forEach(children, function (child) {
    if (child) {
      c.push(child);
    }
  });
  return c;
}

function getActiveIndex(children, activeKey) {
  var c = toArray(children);
  for (var i = 0; i < c.length; i++) {
    if (c[i].key === activeKey) {
      return i;
    }
  }
  return -1;
}

function getActiveKey(children, index) {
  var c = toArray(children);
  return c[index].key;
}

function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

function isTransformSupported(style) {
  return 'transform' in style || 'webkitTransform' in style || 'MozTransform' in style;
}

function setTransition(style, v) {
  style.transition = v;
  style.webkitTransition = v;
  style.MozTransition = v;
}
function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v
  };
}

function isVertical(tabBarPosition) {
  return tabBarPosition === 'left' || tabBarPosition === 'right';
}

function getTransformByIndex(index, tabBarPosition) {
  var translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';
  return translate + '(' + -index * 100 + '%) translateZ(0)';
}

function getMarginStyle(index, tabBarPosition) {
  var marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, marginDirection, -index * 100 + '%');
}

function getStyle(el, property) {
  return +getComputedStyle(el).getPropertyValue(property).replace('px', '');
}

function setPxStyle(el, value, vertical) {
  value = vertical ? '0px, ' + value + 'px, 0px' : value + 'px, 0px, 0px';
  setTransform(el.style, 'translate3d(' + value + ')');
}

function getDataAttr(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

/***/ }),

/***/ "./node_modules/rc-tabs/lib/InkTabBarMixin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.getScroll = getScroll;

var _utils = __webpack_require__("./node_modules/rc-tabs/lib/utils.js");

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var isDev = "development" !== 'production';

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function offset(elem) {
  var box = void 0;
  var x = void 0;
  var y = void 0;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  box = elem.getBoundingClientRect();
  x = box.left;
  y = box.top;
  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  var w = doc.defaultView || doc.parentWindow;
  x += getScroll(w);
  y += getScroll(w, true);
  return {
    left: x, top: y
  };
}

function _componentDidUpdate(component, init) {
  var styles = component.props.styles;

  var rootNode = component.root;
  var wrapNode = component.nav || rootNode;
  var containerOffset = offset(wrapNode);
  var inkBarNode = component.inkBar;
  var activeTab = component.activeTab;
  var inkBarNodeStyle = inkBarNode.style;
  var tabBarPosition = component.props.tabBarPosition;
  if (init) {
    // prevent mount animation
    inkBarNodeStyle.display = 'none';
  }
  if (activeTab) {
    var tabNode = activeTab;
    var tabOffset = offset(tabNode);
    var transformSupported = (0, _utils.isTransformSupported)(inkBarNodeStyle);
    if (tabBarPosition === 'top' || tabBarPosition === 'bottom') {
      var left = tabOffset.left - containerOffset.left;
      var width = tabNode.offsetWidth;

      // If tabNode'width width equal to wrapNode'width when tabBarPosition is top or bottom
      // It means no css working, then ink bar should not have width until css is loaded
      // Fix https://github.com/ant-design/ant-design/issues/7564
      if (width === rootNode.offsetWidth) {
        width = 0;
      } else if (styles.inkBar && styles.inkBar.width !== undefined) {
        width = parseFloat(styles.inkBar.width, 10);
        if (width) {
          left = left + (tabNode.offsetWidth - width) / 2;
        }
      }
      // use 3d gpu to optimize render
      if (transformSupported) {
        (0, _utils.setTransform)(inkBarNodeStyle, 'translate3d(' + left + 'px,0,0)');
        inkBarNodeStyle.width = width + 'px';
        inkBarNodeStyle.height = '';
      } else {
        inkBarNodeStyle.left = left + 'px';
        inkBarNodeStyle.top = '';
        inkBarNodeStyle.bottom = '';
        inkBarNodeStyle.right = wrapNode.offsetWidth - left - width + 'px';
      }
    } else {
      var top = tabOffset.top - containerOffset.top;
      var height = tabNode.offsetHeight;
      if (styles.inkBar && styles.inkBar.height !== undefined) {
        height = parseFloat(styles.inkBar.height, 10);
        if (height) {
          top = top + (tabNode.offsetHeight - height) / 2;
        }
      }
      if (transformSupported) {
        (0, _utils.setTransform)(inkBarNodeStyle, 'translate3d(0,' + top + 'px,0)');
        inkBarNodeStyle.height = height + 'px';
        inkBarNodeStyle.width = '';
      } else {
        inkBarNodeStyle.left = '';
        inkBarNodeStyle.right = '';
        inkBarNodeStyle.top = top + 'px';
        inkBarNodeStyle.bottom = wrapNode.offsetHeight - top - height + 'px';
      }
    }
  }
  inkBarNodeStyle.display = activeTab ? 'block' : 'none';
}

exports['default'] = {
  getDefaultProps: function getDefaultProps() {
    return {
      inkBarAnimated: true
    };
  },
  componentDidUpdate: function componentDidUpdate() {
    _componentDidUpdate(this);
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    if (isDev) {
      // https://github.com/ant-design/ant-design/issues/8678
      this.timeout = setTimeout(function () {
        _componentDidUpdate(_this, true);
      }, 0);
    } else {
      _componentDidUpdate(this, true);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    clearTimeout(this.timeout);
  },
  getInkBarNode: function getInkBarNode() {
    var _classnames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        styles = _props.styles,
        inkBarAnimated = _props.inkBarAnimated;

    var className = prefixCls + '-ink-bar';
    var classes = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, className, true), (0, _defineProperty3['default'])(_classnames, inkBarAnimated ? className + '-animated' : className + '-no-animated', true), _classnames));
    return _react2['default'].createElement('div', {
      style: styles.inkBar,
      className: classes,
      key: 'inkBar',
      ref: this.saveRef('inkBar')
    });
  }
};

/***/ }),

/***/ "./node_modules/rc-tabs/lib/RefMixin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  saveRef: function saveRef(name) {
    var _this = this;

    return function (node) {
      _this[name] = node;
    };
  }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/ScrollableInkTabBar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _InkTabBarMixin = __webpack_require__("./node_modules/rc-tabs/lib/InkTabBarMixin.js");

var _InkTabBarMixin2 = _interopRequireDefault(_InkTabBarMixin);

var _ScrollableTabBarMixin = __webpack_require__("./node_modules/rc-tabs/lib/ScrollableTabBarMixin.js");

var _ScrollableTabBarMixin2 = _interopRequireDefault(_ScrollableTabBarMixin);

var _TabBarMixin = __webpack_require__("./node_modules/rc-tabs/lib/TabBarMixin.js");

var _TabBarMixin2 = _interopRequireDefault(_TabBarMixin);

var _RefMixin = __webpack_require__("./node_modules/rc-tabs/lib/RefMixin.js");

var _RefMixin2 = _interopRequireDefault(_RefMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ScrollableInkTabBar = (0, _createReactClass2['default'])({
  displayName: 'ScrollableInkTabBar',
  mixins: [_RefMixin2['default'], _TabBarMixin2['default'], _InkTabBarMixin2['default'], _ScrollableTabBarMixin2['default']],
  render: function render() {
    var inkBarNode = this.getInkBarNode();
    var tabs = this.getTabs();
    var scrollbarNode = this.getScrollBarNode([inkBarNode, tabs]);
    return this.getRootNode(scrollbarNode);
  }
});

exports['default'] = ScrollableInkTabBar;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/ScrollableTabBarMixin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classnames5 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames6 = _interopRequireDefault(_classnames5);

var _utils = __webpack_require__("./node_modules/rc-tabs/lib/utils.js");

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _addEventListener = __webpack_require__("./node_modules/rc-util/lib/Dom/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _debounce = __webpack_require__("./node_modules/lodash/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  getDefaultProps: function getDefaultProps() {
    return {
      scrollAnimated: true,
      onPrevClick: function onPrevClick() {},
      onNextClick: function onNextClick() {}
    };
  },
  getInitialState: function getInitialState() {
    this.offset = 0;
    return {
      next: false,
      prev: false
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    this.componentDidUpdate();
    this.debouncedResize = (0, _debounce2['default'])(function () {
      _this.setNextPrev();
      _this.scrollToActiveTab();
    }, 200);
    this.resizeEvent = (0, _addEventListener2['default'])(window, 'resize', this.debouncedResize);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    var props = this.props;
    if (prevProps && prevProps.tabBarPosition !== props.tabBarPosition) {
      this.setOffset(0);
      return;
    }
    var nextPrev = this.setNextPrev();
    // wait next, prev show hide
    /* eslint react/no-did-update-set-state:0 */
    if (this.isNextPrevShown(this.state) !== this.isNextPrevShown(nextPrev)) {
      this.setState({}, this.scrollToActiveTab);
    } else if (!prevProps || props.activeKey !== prevProps.activeKey) {
      // can not use props.activeKey
      this.scrollToActiveTab();
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.resizeEvent) {
      this.resizeEvent.remove();
    }
    if (this.debouncedResize && this.debouncedResize.cancel) {
      this.debouncedResize.cancel();
    }
  },
  setNextPrev: function setNextPrev() {
    var navNode = this.nav;
    var navNodeWH = this.getScrollWH(navNode);
    var containerWH = this.getOffsetWH(this.container);
    var navWrapNodeWH = this.getOffsetWH(this.navWrap);
    var offset = this.offset;

    var minOffset = containerWH - navNodeWH;
    var _state = this.state,
        next = _state.next,
        prev = _state.prev;

    if (minOffset >= 0) {
      next = false;
      this.setOffset(0, false);
      offset = 0;
    } else if (minOffset < offset) {
      next = true;
    } else {
      next = false;
      // Fix https://github.com/ant-design/ant-design/issues/8861
      // Test with container offset which is stable
      // and set the offset of the nav wrap node
      var realOffset = navWrapNodeWH - navNodeWH;
      this.setOffset(realOffset, false);
      offset = realOffset;
    }

    if (offset < 0) {
      prev = true;
    } else {
      prev = false;
    }

    this.setNext(next);
    this.setPrev(prev);
    return {
      next: next,
      prev: prev
    };
  },
  getOffsetWH: function getOffsetWH(node) {
    var tabBarPosition = this.props.tabBarPosition;
    var prop = 'offsetWidth';
    if (tabBarPosition === 'left' || tabBarPosition === 'right') {
      prop = 'offsetHeight';
    }
    return node[prop];
  },
  getScrollWH: function getScrollWH(node) {
    var tabBarPosition = this.props.tabBarPosition;
    var prop = 'scrollWidth';
    if (tabBarPosition === 'left' || tabBarPosition === 'right') {
      prop = 'scrollHeight';
    }
    return node[prop];
  },
  getOffsetLT: function getOffsetLT(node) {
    var tabBarPosition = this.props.tabBarPosition;
    var prop = 'left';
    if (tabBarPosition === 'left' || tabBarPosition === 'right') {
      prop = 'top';
    }
    return node.getBoundingClientRect()[prop];
  },
  setOffset: function setOffset(offset) {
    var checkNextPrev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var target = Math.min(0, offset);
    if (this.offset !== target) {
      this.offset = target;
      var navOffset = {};
      var tabBarPosition = this.props.tabBarPosition;
      var navStyle = this.nav.style;
      var transformSupported = (0, _utils.isTransformSupported)(navStyle);
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        if (transformSupported) {
          navOffset = {
            value: 'translate3d(0,' + target + 'px,0)'
          };
        } else {
          navOffset = {
            name: 'top',
            value: target + 'px'
          };
        }
      } else {
        if (transformSupported) {
          navOffset = {
            value: 'translate3d(' + target + 'px,0,0)'
          };
        } else {
          navOffset = {
            name: 'left',
            value: target + 'px'
          };
        }
      }
      if (transformSupported) {
        (0, _utils.setTransform)(navStyle, navOffset.value);
      } else {
        navStyle[navOffset.name] = navOffset.value;
      }
      if (checkNextPrev) {
        this.setNextPrev();
      }
    }
  },
  setPrev: function setPrev(v) {
    if (this.state.prev !== v) {
      this.setState({
        prev: v
      });
    }
  },
  setNext: function setNext(v) {
    if (this.state.next !== v) {
      this.setState({
        next: v
      });
    }
  },
  isNextPrevShown: function isNextPrevShown(state) {
    if (state) {
      return state.next || state.prev;
    }
    return this.state.next || this.state.prev;
  },
  prevTransitionEnd: function prevTransitionEnd(e) {
    if (e.propertyName !== 'opacity') {
      return;
    }
    var container = this.container;

    this.scrollToActiveTab({
      target: container,
      currentTarget: container
    });
  },
  scrollToActiveTab: function scrollToActiveTab(e) {
    var activeTab = this.activeTab,
        navWrap = this.navWrap;

    if (e && e.target !== e.currentTarget || !activeTab) {
      return;
    }

    // when not scrollable or enter scrollable first time, don't emit scrolling
    var needToSroll = this.isNextPrevShown() && this.lastNextPrevShown;
    this.lastNextPrevShown = this.isNextPrevShown();
    if (!needToSroll) {
      return;
    }

    var activeTabWH = this.getScrollWH(activeTab);
    var navWrapNodeWH = this.getOffsetWH(navWrap);
    var offset = this.offset;

    var wrapOffset = this.getOffsetLT(navWrap);
    var activeTabOffset = this.getOffsetLT(activeTab);
    if (wrapOffset > activeTabOffset) {
      offset += wrapOffset - activeTabOffset;
      this.setOffset(offset);
    } else if (wrapOffset + navWrapNodeWH < activeTabOffset + activeTabWH) {
      offset -= activeTabOffset + activeTabWH - (wrapOffset + navWrapNodeWH);
      this.setOffset(offset);
    }
  },
  prev: function prev(e) {
    this.props.onPrevClick(e);
    var navWrapNode = this.navWrap;
    var navWrapNodeWH = this.getOffsetWH(navWrapNode);
    var offset = this.offset;

    this.setOffset(offset + navWrapNodeWH);
  },
  next: function next(e) {
    this.props.onNextClick(e);
    var navWrapNode = this.navWrap;
    var navWrapNodeWH = this.getOffsetWH(navWrapNode);
    var offset = this.offset;

    this.setOffset(offset - navWrapNodeWH);
  },
  getScrollBarNode: function getScrollBarNode(content) {
    var _classnames, _classnames2, _classnames3, _classnames4;

    var _state2 = this.state,
        next = _state2.next,
        prev = _state2.prev;
    var _props = this.props,
        prefixCls = _props.prefixCls,
        scrollAnimated = _props.scrollAnimated;

    var showNextPrev = prev || next;

    var prevButton = _react2['default'].createElement(
      'span',
      {
        onClick: prev ? this.prev : null,
        unselectable: 'unselectable',
        className: (0, _classnames6['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-prev', 1), (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-btn-disabled', !prev), (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-arrow-show', showNextPrev), _classnames)),
        onTransitionEnd: this.prevTransitionEnd
      },
      _react2['default'].createElement('span', { className: prefixCls + '-tab-prev-icon' })
    );

    var nextButton = _react2['default'].createElement(
      'span',
      {
        onClick: next ? this.next : null,
        unselectable: 'unselectable',
        className: (0, _classnames6['default'])((_classnames2 = {}, (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-next', 1), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-btn-disabled', !next), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-arrow-show', showNextPrev), _classnames2))
      },
      _react2['default'].createElement('span', { className: prefixCls + '-tab-next-icon' })
    );

    var navClassName = prefixCls + '-nav';
    var navClasses = (0, _classnames6['default'])((_classnames3 = {}, (0, _defineProperty3['default'])(_classnames3, navClassName, true), (0, _defineProperty3['default'])(_classnames3, scrollAnimated ? navClassName + '-animated' : navClassName + '-no-animated', true), _classnames3));

    return _react2['default'].createElement(
      'div',
      {
        className: (0, _classnames6['default'])((_classnames4 = {}, (0, _defineProperty3['default'])(_classnames4, prefixCls + '-nav-container', 1), (0, _defineProperty3['default'])(_classnames4, prefixCls + '-nav-container-scrolling', showNextPrev), _classnames4)),
        key: 'container',
        ref: this.saveRef('container')
      },
      prevButton,
      nextButton,
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-nav-wrap', ref: this.saveRef('navWrap') },
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-nav-scroll' },
          _react2['default'].createElement(
            'div',
            { className: navClasses, ref: this.saveRef('nav') },
            content
          )
        )
      )
    );
  }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/TabBarMixin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _utils = __webpack_require__("./node_modules/rc-tabs/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  getDefaultProps: function getDefaultProps() {
    return {
      styles: {}
    };
  },
  onTabClick: function onTabClick(key) {
    this.props.onTabClick(key);
  },
  getTabs: function getTabs() {
    var _this = this;

    var _props = this.props,
        children = _props.panels,
        activeKey = _props.activeKey,
        prefixCls = _props.prefixCls,
        tabBarGutter = _props.tabBarGutter;

    var rst = [];

    _react2['default'].Children.forEach(children, function (child, index) {
      if (!child) {
        return;
      }
      var key = child.key;
      var cls = activeKey === key ? prefixCls + '-tab-active' : '';
      cls += ' ' + prefixCls + '-tab';
      var events = {};
      if (child.props.disabled) {
        cls += ' ' + prefixCls + '-tab-disabled';
      } else {
        events = {
          onClick: _this.onTabClick.bind(_this, key)
        };
      }
      var ref = {};
      if (activeKey === key) {
        ref.ref = _this.saveRef('activeTab');
      }
      (0, _warning2['default'])('tab' in child.props, 'There must be `tab` property on children of Tabs.');
      rst.push(_react2['default'].createElement(
        'div',
        (0, _extends3['default'])({
          role: 'tab',
          'aria-disabled': child.props.disabled ? 'true' : 'false',
          'aria-selected': activeKey === key ? 'true' : 'false'
        }, events, {
          className: cls,
          key: key,
          style: { marginRight: tabBarGutter && index === children.length - 1 ? 0 : tabBarGutter }
        }, ref),
        child.props.tab
      ));
    });

    return rst;
  },
  getRootNode: function getRootNode(contents) {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        onKeyDown = _props2.onKeyDown,
        className = _props2.className,
        extraContent = _props2.extraContent,
        style = _props2.style,
        tabBarPosition = _props2.tabBarPosition,
        restProps = (0, _objectWithoutProperties3['default'])(_props2, ['prefixCls', 'onKeyDown', 'className', 'extraContent', 'style', 'tabBarPosition']);

    var cls = (0, _classnames3['default'])(prefixCls + '-bar', (0, _defineProperty3['default'])({}, className, !!className));
    var topOrBottom = tabBarPosition === 'top' || tabBarPosition === 'bottom';
    var tabBarExtraContentStyle = topOrBottom ? { float: 'right' } : {};
    var extraContentStyle = extraContent && extraContent.props ? extraContent.props.style : {};
    var children = contents;
    if (extraContent) {
      children = [(0, _react.cloneElement)(extraContent, {
        key: 'extra',
        style: (0, _extends3['default'])({}, tabBarExtraContentStyle, extraContentStyle)
      }), (0, _react.cloneElement)(contents, { key: 'content' })];
      children = topOrBottom ? children : children.reverse();
    }
    return _react2['default'].createElement(
      'div',
      (0, _extends3['default'])({
        role: 'tablist',
        className: cls,
        tabIndex: '0',
        ref: this.saveRef('root'),
        onKeyDown: onKeyDown,
        style: style
      }, (0, _utils.getDataAttr)(restProps)),
      children
    );
  }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/TabContent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _utils = __webpack_require__("./node_modules/rc-tabs/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TabContent = (0, _createReactClass2['default'])({
  displayName: 'TabContent',
  propTypes: {
    animated: _propTypes2['default'].bool,
    animatedWithMargin: _propTypes2['default'].bool,
    prefixCls: _propTypes2['default'].string,
    children: _propTypes2['default'].any,
    activeKey: _propTypes2['default'].string,
    style: _propTypes2['default'].any,
    tabBarPosition: _propTypes2['default'].string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      animated: true
    };
  },
  getTabPanes: function getTabPanes() {
    var props = this.props;
    var activeKey = props.activeKey;
    var children = props.children;
    var newChildren = [];

    _react2['default'].Children.forEach(children, function (child) {
      if (!child) {
        return;
      }
      var key = child.key;
      var active = activeKey === key;
      newChildren.push(_react2['default'].cloneElement(child, {
        active: active,
        destroyInactiveTabPane: props.destroyInactiveTabPane,
        rootPrefixCls: props.prefixCls
      }));
    });

    return newChildren;
  },
  render: function render() {
    var _classnames;

    var props = this.props;
    var prefixCls = props.prefixCls,
        children = props.children,
        activeKey = props.activeKey,
        tabBarPosition = props.tabBarPosition,
        animated = props.animated,
        animatedWithMargin = props.animatedWithMargin;
    var style = props.style;

    var classes = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-content', true), (0, _defineProperty3['default'])(_classnames, animated ? prefixCls + '-content-animated' : prefixCls + '-content-no-animated', true), _classnames));
    if (animated) {
      var activeIndex = (0, _utils.getActiveIndex)(children, activeKey);
      if (activeIndex !== -1) {
        var animatedStyle = animatedWithMargin ? (0, _utils.getMarginStyle)(activeIndex, tabBarPosition) : (0, _utils.getTransformPropValue)((0, _utils.getTransformByIndex)(activeIndex, tabBarPosition));
        style = (0, _extends3['default'])({}, style, animatedStyle);
      } else {
        style = (0, _extends3['default'])({}, style, {
          display: 'none'
        });
      }
    }
    return _react2['default'].createElement(
      'div',
      {
        className: classes,
        style: style
      },
      this.getTabPanes()
    );
  }
});

exports['default'] = TabContent;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.toArray = toArray;
exports.getActiveIndex = getActiveIndex;
exports.getActiveKey = getActiveKey;
exports.setTransform = setTransform;
exports.isTransformSupported = isTransformSupported;
exports.setTransition = setTransition;
exports.getTransformPropValue = getTransformPropValue;
exports.isVertical = isVertical;
exports.getTransformByIndex = getTransformByIndex;
exports.getMarginStyle = getMarginStyle;
exports.getStyle = getStyle;
exports.setPxStyle = setPxStyle;
exports.getDataAttr = getDataAttr;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function toArray(children) {
  // allow [c,[a,b]]
  var c = [];
  _react2['default'].Children.forEach(children, function (child) {
    if (child) {
      c.push(child);
    }
  });
  return c;
}

function getActiveIndex(children, activeKey) {
  var c = toArray(children);
  for (var i = 0; i < c.length; i++) {
    if (c[i].key === activeKey) {
      return i;
    }
  }
  return -1;
}

function getActiveKey(children, index) {
  var c = toArray(children);
  return c[index].key;
}

function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

function isTransformSupported(style) {
  return 'transform' in style || 'webkitTransform' in style || 'MozTransform' in style;
}

function setTransition(style, v) {
  style.transition = v;
  style.webkitTransition = v;
  style.MozTransition = v;
}
function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v
  };
}

function isVertical(tabBarPosition) {
  return tabBarPosition === 'left' || tabBarPosition === 'right';
}

function getTransformByIndex(index, tabBarPosition) {
  var translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';
  return translate + '(' + -index * 100 + '%) translateZ(0)';
}

function getMarginStyle(index, tabBarPosition) {
  var marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
  return (0, _defineProperty3['default'])({}, marginDirection, -index * 100 + '%');
}

function getStyle(el, property) {
  return +getComputedStyle(el).getPropertyValue(property).replace('px', '');
}

function setPxStyle(el, value, vertical) {
  value = vertical ? '0px, ' + value + 'px, 0px' : value + 'px, 0px, 0px';
  setTransform(el.style, 'translate3d(' + value + ')');
}

function getDataAttr(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_redirect__ = __webpack_require__("./lib/redirect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_checkLoggedIn__ = __webpack_require__("./lib/checkLoggedIn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_projects_projectsList__ = __webpack_require__("./components/projects/projectsList.js");
var _jsxFileName="/home/nenjamin2405/redpola/emt/client-emt/pages/index.js";(function(){var enterModule=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;enterModule&&enterModule(module);})();function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _next(value){step("next",value);}function _throw(err){step("throw",err);}_next();});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Projects=/*#__PURE__*/function(_React$Component){_inherits(Projects,_React$Component);function Projects(){_classCallCheck(this,Projects);return _possibleConstructorReturn(this,(Projects.__proto__||Object.getPrototypeOf(Projects)).apply(this,arguments));}_createClass(Projects,[{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment,{__source:{fileName:_jsxFileName,lineNumber:18}},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_projects_projectsList__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:19}}));}},{key:"__reactstandin__regenerateByEval",// @ts-ignore
value:function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);}}],[{key:"getInitialProps",value:function(){var _getInitialProps=_asyncToGenerator(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context){var _ref,currentUser;return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Object(__WEBPACK_IMPORTED_MODULE_3__lib_checkLoggedIn__["a" /* default */])(context.apolloClient);case 2:_ref=_context.sent;currentUser=_ref.currentUser;if(!currentUser){// Already signed in? No need to continue.
// Throw them back to the main page
Object(__WEBPACK_IMPORTED_MODULE_2__lib_redirect__["a" /* default */])(context,"/login");}return _context.abrupt("return",{});case 6:case"end":return _context.stop();}}},_callee,this);}));return function getInitialProps(_x){return _getInitialProps.apply(this,arguments);};}()}]);return Projects;}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);;(function(){var reactHotLoader=__webpack_require__("./node_modules/react-hot-loader/index.js").default;var leaveModule=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;if(!reactHotLoader){return;}reactHotLoader.register(Projects,"Projects","/home/nenjamin2405/redpola/emt/client-emt/pages/index.js");leaveModule(module);})();;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.7f988dc7c44cc08811fb.hot-update.js.map