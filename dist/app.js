require("./common");
require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.tsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.tsx ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_Projects_Gitee_Taro_demo_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_Projects_Gitee_Taro_demo_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_Projects_Gitee_Taro_demo_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_Projects_Gitee_Taro_demo_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _services_keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/services/keys */ "./src/services/keys.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/api */ "./src/services/api.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




/**
 * entrance
 * @author demon3443002624@outlook.com
 * @description 非必要所有模块请按需引入
 */









var store = (0,_store__WEBPACK_IMPORTED_MODULE_4__["default"])();
var App = /*#__PURE__*/function (_Component) {
  (0,E_Projects_Gitee_Taro_demo_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _Component);
  var _super = (0,E_Projects_Gitee_Taro_demo_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_7__["default"])(App);
  function App(props) {
    (0,E_Projects_Gitee_Taro_demo_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this, App);
    return _super.call(this, props);
  }
  (0,E_Projects_Gitee_Taro_demo_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var p = {
        code: "",
        invited: null
      };
      (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.login)({
        success: function success(res) {
          var _getCurrentInstance$r;
          var params = (_getCurrentInstance$r = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.getCurrentInstance)().router) === null || _getCurrentInstance$r === void 0 ? void 0 : _getCurrentInstance$r.params;
          var invitedOpId = params === null || params === void 0 ? void 0 : params.invitedOpId;
          var code = res === null || res === void 0 ? void 0 : res.code;
          var openid = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.getStorageSync)(_services_keys__WEBPACK_IMPORTED_MODULE_10__.openidStorageKey);
          code && (p.code = code);
          invitedOpId && (p.invited = invitedOpId);
          openid && console.info("*** 用户非首次加载 ***\n", openid);
          openid && !invitedOpId || (0,_services_api__WEBPACK_IMPORTED_MODULE_0__.login)(p).then(function (value) {
            var _value$data;
            openid = value === null || value === void 0 ? void 0 : (_value$data = value.data) === null || _value$data === void 0 ? void 0 : _value$data.openid;
            openid && (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.setStorage)({
              key: _services_keys__WEBPACK_IMPORTED_MODULE_10__.openidStorageKey,
              data: openid,
              success: function success() {
                console.info("*** 用户静默登录成功(首次) ***\n", value, openid);
              }
            }) || new Error("*** 获取用户凭证失败,请检查网络 ***");
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      // this.props.children 是将要会渲染的页面
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
        store: store,
        children: this.props.children
      });
    }
  }]);
  return App;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_5___namespace_cache;
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "./node_modules/@tarojs/plugin-framework-react/dist/runtime.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./app.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");











var config = {"debug":true,"entryPagePath":"pages/test/index","pages":["pages/index/index","pages/enter-customer-information/index","pages/to-be-partner/index","pages/h5-fpss/index","pages/test/index","pages/test/redux-use-class-component","pages/test/redux-use-func-component"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#6190E8","navigationBarTitleText":"发电熊猫合伙人","navigationBarTextStyle":"white"},"tabBar":{"color":"#a7b1b6","selectedColor":"#73ba60","list":[{"pagePath":"pages/index/index","iconPath":"assets/icon/main-page.png","selectedIconPath":"assets/icon/main-page-selected.png","text":"首页"},{"pagePath":"pages/enter-customer-information/index","iconPath":"assets/icon/customer.png","selectedIconPath":"assets/icon/customer-selected.png","text":"录入客户"},{"pagePath":"pages/to-be-partner/index","iconPath":"assets/icon/partner.png","selectedIconPath":"assets/icon/partner-selected.png","text":"合伙人"},{"pagePath":"pages/test/index","iconPath":"assets/icon/partner.png","selectedIconPath":"assets/icon/partner-selected.png","text":"测试"}]},"plugins":{},"permission":{}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__.createReactApp)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"], /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_5__, 2))), react_dom__WEBPACK_IMPORTED_MODULE_6__["default"], config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__.initPxTransform)({
  designWidth: 750,
  deviceRatio: {"640":1.17,"750":1,"828":0.905}
})


/***/ }),

/***/ "./src/constants/conuter.ts":
/*!**********************************!*\
  !*** ./src/constants/conuter.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD": function() { return /* binding */ ADD; },
/* harmony export */   "MINUS": function() { return /* binding */ MINUS; }
/* harmony export */ });
var ADD = 'ADD';
var MINUS = 'MINUS';

/***/ }),

/***/ "./src/reducers/counter.ts":
/*!*********************************!*\
  !*** ./src/reducers/counter.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ counter; }
/* harmony export */ });
/* harmony import */ var E_Projects_Gitee_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _constants_conuter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants/conuter */ "./src/constants/conuter.ts");


var INITIAL_STATE = {
  num: 0
};
function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _constants_conuter__WEBPACK_IMPORTED_MODULE_0__.ADD:
      return (0,E_Projects_Gitee_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,E_Projects_Gitee_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state), {}, {
        num: state.num + 1
      });
    case _constants_conuter__WEBPACK_IMPORTED_MODULE_0__.MINUS:
      return (0,E_Projects_Gitee_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,E_Projects_Gitee_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state), {}, {
        num: state.num - 1
      });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ "./src/reducers/counter.ts");


/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  counter: _counter__WEBPACK_IMPORTED_MODULE_0__["default"]
}));

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ configStore; }
/* harmony export */ });
/* harmony import */ var E_Projects_Gitee_Taro_demo_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/reducers */ "./src/reducers/index.ts");
/* provided dependency */ var window = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"];




var composeEnhancers =
// @ts-ignore
(typeof window === "undefined" ? "undefined" : (0,E_Projects_Gitee_Taro_demo_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(window)) === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
// @ts-ignore
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : redux__WEBPACK_IMPORTED_MODULE_2__.compose;
var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]];
if (false) {}
var enhancer = composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware.apply(void 0, middlewares)
// other store enhancers if any
);

function configStore() {
  var store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_0__["default"], enhancer);
  return store;
}

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.production.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.production.min.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-is.production.min.js */ "./node_modules/react-is/cjs/react-is.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-reconciler/cjs/react-reconciler-constants.production.min.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-reconciler/cjs/react-reconciler-constants.production.min.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_unused_export__=1;__webpack_unused_export__=4;exports.DefaultEventPriority=16;__webpack_unused_export__=1;__webpack_unused_export__=536870912;__webpack_unused_export__=0;


/***/ }),

/***/ "./node_modules/react-reconciler/cjs/react-reconciler.production.min.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-reconciler/cjs/react-reconciler.production.min.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function $$$reconciler($$$hostConfig) {
    var exports = {};
'use strict';var aa=__webpack_require__(/*! react */ "./node_modules/react/index.js"),ba=__webpack_require__(/*! scheduler */ "./node_modules/react-reconciler/node_modules/scheduler/index.js"),ca=Object.assign;function n(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var ea=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),ha=Symbol.for("react.portal"),ia=Symbol.for("react.fragment"),ja=Symbol.for("react.strict_mode"),ka=Symbol.for("react.profiler"),la=Symbol.for("react.provider"),ma=Symbol.for("react.context"),na=Symbol.for("react.forward_ref"),oa=Symbol.for("react.suspense"),pa=Symbol.for("react.suspense_list"),qa=Symbol.for("react.memo"),ra=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var sa=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var ta=Symbol.iterator;function ua(a){if(null===a||"object"!==typeof a)return null;a=ta&&a[ta]||a["@@iterator"];return"function"===typeof a?a:null}
function va(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ia:return"Fragment";case ha:return"Portal";case ka:return"Profiler";case ja:return"StrictMode";case oa:return"Suspense";case pa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ma:return(a.displayName||"Context")+".Consumer";case la:return(a._context.displayName||"Context")+".Provider";case na:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case qa:return b=a.displayName||null,null!==b?b:va(a.type)||"Memo";case ra:b=a._payload;a=a._init;try{return va(a(b))}catch(c){}}return null}
function xa(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return va(b);case 8:return b===ja?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function ya(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function za(a){if(ya(a)!==a)throw Error(n(188));}
function Aa(a){var b=a.alternate;if(!b){b=ya(a);if(null===b)throw Error(n(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return za(e),a;if(f===d)return za(e),b;f=f.sibling}throw Error(n(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(n(189));}}if(c.alternate!==d)throw Error(n(190));}if(3!==c.tag)throw Error(n(188));return c.stateNode.current===c?a:b}function Ba(a){a=Aa(a);return null!==a?Ca(a):null}function Ca(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=Ca(a);if(null!==b)return b;a=a.sibling}return null}
function Da(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){if(4!==a.tag){var b=Da(a);if(null!==b)return b}a=a.sibling}return null}
var Ea=Array.isArray,Fa=$$$hostConfig.getPublicInstance,Ga=$$$hostConfig.getRootHostContext,Ha=$$$hostConfig.getChildHostContext,Ia=$$$hostConfig.prepareForCommit,Ja=$$$hostConfig.resetAfterCommit,Ka=$$$hostConfig.createInstance,La=$$$hostConfig.appendInitialChild,Ma=$$$hostConfig.finalizeInitialChildren,Na=$$$hostConfig.prepareUpdate,Oa=$$$hostConfig.shouldSetTextContent,Pa=$$$hostConfig.createTextInstance,Qa=$$$hostConfig.scheduleTimeout,Ra=$$$hostConfig.cancelTimeout,Sa=$$$hostConfig.noTimeout,
Ta=$$$hostConfig.isPrimaryRenderer,Ua=$$$hostConfig.supportsMutation,Va=$$$hostConfig.supportsPersistence,p=$$$hostConfig.supportsHydration,Wa=$$$hostConfig.getInstanceFromNode,Xa=$$$hostConfig.preparePortalMount,Ya=$$$hostConfig.getCurrentEventPriority,Za=$$$hostConfig.detachDeletedInstance,$a=$$$hostConfig.supportsMicrotasks,ab=$$$hostConfig.scheduleMicrotask,bb=$$$hostConfig.supportsTestSelectors,cb=$$$hostConfig.findFiberRoot,db=$$$hostConfig.getBoundingRect,eb=$$$hostConfig.getTextContent,fb=
$$$hostConfig.isHiddenSubtree,gb=$$$hostConfig.matchAccessibilityRole,hb=$$$hostConfig.setFocusIfFocusable,ib=$$$hostConfig.setupIntersectionObserver,jb=$$$hostConfig.appendChild,kb=$$$hostConfig.appendChildToContainer,lb=$$$hostConfig.commitTextUpdate,mb=$$$hostConfig.commitMount,nb=$$$hostConfig.commitUpdate,ob=$$$hostConfig.insertBefore,pb=$$$hostConfig.insertInContainerBefore,qb=$$$hostConfig.removeChild,rb=$$$hostConfig.removeChildFromContainer,sb=$$$hostConfig.resetTextContent,tb=$$$hostConfig.hideInstance,
ub=$$$hostConfig.hideTextInstance,vb=$$$hostConfig.unhideInstance,wb=$$$hostConfig.unhideTextInstance,xb=$$$hostConfig.clearContainer,yb=$$$hostConfig.cloneInstance,zb=$$$hostConfig.createContainerChildSet,Ab=$$$hostConfig.appendChildToContainerChildSet,Bb=$$$hostConfig.finalizeContainerChildren,Cb=$$$hostConfig.replaceContainerChildren,Db=$$$hostConfig.cloneHiddenInstance,Eb=$$$hostConfig.cloneHiddenTextInstance,Fb=$$$hostConfig.canHydrateInstance,Gb=$$$hostConfig.canHydrateTextInstance,Hb=$$$hostConfig.canHydrateSuspenseInstance,
Ib=$$$hostConfig.isSuspenseInstancePending,Jb=$$$hostConfig.isSuspenseInstanceFallback,Kb=$$$hostConfig.registerSuspenseInstanceRetry,Lb=$$$hostConfig.getNextHydratableSibling,Mb=$$$hostConfig.getFirstHydratableChild,Nb=$$$hostConfig.getFirstHydratableChildWithinContainer,Ob=$$$hostConfig.getFirstHydratableChildWithinSuspenseInstance,Pb=$$$hostConfig.hydrateInstance,Qb=$$$hostConfig.hydrateTextInstance,Rb=$$$hostConfig.hydrateSuspenseInstance,Sb=$$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
Tb=$$$hostConfig.commitHydratedContainer,Ub=$$$hostConfig.commitHydratedSuspenseInstance,Vb=$$$hostConfig.clearSuspenseBoundary,Wb=$$$hostConfig.clearSuspenseBoundaryFromContainer,Xb=$$$hostConfig.shouldDeleteUnhydratedTailInstances,Yb=$$$hostConfig.didNotMatchHydratedContainerTextInstance,Zb=$$$hostConfig.didNotMatchHydratedTextInstance,$b;function ac(a){if(void 0===$b)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);$b=b&&b[1]||""}return"\n"+$b+a}var bc=!1;
function cc(a,b){if(!a||bc)return"";bc=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{bc=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?ac(a):""}var dc=Object.prototype.hasOwnProperty,ec=[],fc=-1;function gc(a){return{current:a}}
function x(a){0>fc||(a.current=ec[fc],ec[fc]=null,fc--)}function y(a,b){fc++;ec[fc]=a.current;a.current=b}var hc={},A=gc(hc),B=gc(!1),ic=hc;function jc(a,b){var c=a.type.contextTypes;if(!c)return hc;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function C(a){a=a.childContextTypes;return null!==a&&void 0!==a}function kc(){x(B);x(A)}function lc(a,b,c){if(A.current!==hc)throw Error(n(168));y(A,b);y(B,c)}function mc(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(n(108,xa(a)||"Unknown",e));return ca({},c,d)}
function nc(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||hc;ic=A.current;y(A,a);y(B,B.current);return!0}function oc(a,b,c){var d=a.stateNode;if(!d)throw Error(n(169));c?(a=mc(a,b,ic),d.__reactInternalMemoizedMergedChildContext=a,x(B),x(A),y(A,a)):x(B);y(B,c)}var qc=Math.clz32?Math.clz32:pc,rc=Math.log,sc=Math.LN2;function pc(a){a>>>=0;return 0===a?32:31-(rc(a)/sc|0)|0}var tc=64,uc=4194304;
function vc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function wc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=vc(h):(f&=g,0!==f&&(d=vc(f)))}else g=c&~e,0!==g?d=vc(g):0!==f&&(d=vc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-qc(b),e=1<<c,d|=a[c],b&=~e;return d}
function xc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function yc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-qc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=xc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function zc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Ac(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}function Bc(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-qc(b);a[b]=c}
function Cc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-qc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}function Dc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-qc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var D=0;function Ec(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}
var Fc=ba.unstable_scheduleCallback,Gc=ba.unstable_cancelCallback,Hc=ba.unstable_shouldYield,Ic=ba.unstable_requestPaint,E=ba.unstable_now,Jc=ba.unstable_ImmediatePriority,Kc=ba.unstable_UserBlockingPriority,Lc=ba.unstable_NormalPriority,Mc=ba.unstable_IdlePriority,Nc=null,Oc=null;function Pc(a){if(Oc&&"function"===typeof Oc.onCommitFiberRoot)try{Oc.onCommitFiberRoot(Nc,a,void 0,128===(a.current.flags&128))}catch(b){}}function Qc(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var Rc="function"===typeof Object.is?Object.is:Qc,Sc=null,Tc=!1,Uc=!1;function Vc(a){null===Sc?Sc=[a]:Sc.push(a)}function Wc(a){Tc=!0;Vc(a)}function Xc(){if(!Uc&&null!==Sc){Uc=!0;var a=0,b=D;try{var c=Sc;for(D=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}Sc=null;Tc=!1}catch(e){throw null!==Sc&&(Sc=Sc.slice(a+1)),Fc(Jc,Xc),e;}finally{D=b,Uc=!1}}return null}var Yc=ea.ReactCurrentBatchConfig;
function Zc(a,b){if(Rc(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!dc.call(b,e)||!Rc(a[e],b[e]))return!1}return!0}
function $c(a){switch(a.tag){case 5:return ac(a.type);case 16:return ac("Lazy");case 13:return ac("Suspense");case 19:return ac("SuspenseList");case 0:case 2:case 15:return a=cc(a.type,!1),a;case 11:return a=cc(a.type.render,!1),a;case 1:return a=cc(a.type,!0),a;default:return""}}function ad(a,b){if(a&&a.defaultProps){b=ca({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var bd=gc(null),cd=null,dd=null,ed=null;function fd(){ed=dd=cd=null}
function gd(a,b,c){Ta?(y(bd,b._currentValue),b._currentValue=c):(y(bd,b._currentValue2),b._currentValue2=c)}function hd(a){var b=bd.current;x(bd);Ta?a._currentValue=b:a._currentValue2=b}function id(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function jd(a,b){cd=a;ed=dd=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(kd=!0),a.firstContext=null)}function ld(a){var b=Ta?a._currentValue:a._currentValue2;if(ed!==a)if(a={context:a,memoizedValue:b,next:null},null===dd){if(null===cd)throw Error(n(308));dd=a;cd.dependencies={lanes:0,firstContext:a}}else dd=dd.next=a;return b}var md=null,nd=!1;
function od(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pd(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function qd(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function rd(a,b){var c=a.updateQueue;null!==c&&(c=c.shared,null!==F&&0!==(a.mode&1)&&0===(G&2)?(a=c.interleaved,null===a?(b.next=b,null===md?md=[c]:md.push(c)):(b.next=a.next,a.next=b),c.interleaved=b):(a=c.pending,null===a?b.next=b:(b.next=a.next,a.next=b),c.pending=b))}function sd(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Dc(a,c)}}
function td(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function ud(a,b,c,d){var e=a.updateQueue;nd=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var v=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,z=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:z,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var q=a,N=h;r=b;z=c;switch(N.tag){case 1:q=N.payload;if("function"===typeof q){v=q.call(z,v,r);break a}v=q;break a;case 3:q.flags=q.flags&-65537|128;case 0:q=N.payload;r="function"===typeof q?q.call(z,v,r):q;if(null===r||void 0===r)break a;v=ca({},v,r);break a;case 2:nd=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else z={eventTime:z,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=z,k=v):m=m.next=z,g|=
r;h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=v);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);vd|=g;a.lanes=g;a.memoizedState=v}}
function wd(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(n(191,e));e.call(d)}}}var xd=(new aa.Component).refs;function yd(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:ca({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Bd={isMounted:function(a){return(a=a._reactInternals)?ya(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=H(),e=zd(a),f=qd(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);rd(a,f);b=Ad(a,e,d);null!==b&&sd(b,a,e)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=H(),e=zd(a),f=qd(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);rd(a,f);b=Ad(a,e,d);null!==b&&sd(b,a,e)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=H(),d=zd(a),e=qd(c,
d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);rd(a,e);b=Ad(a,d,c);null!==b&&sd(b,a,d)}};function Cd(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Zc(c,d)||!Zc(e,f):!0}
function Dd(a,b,c){var d=!1,e=hc;var f=b.contextType;"object"===typeof f&&null!==f?f=ld(f):(e=C(b)?ic:A.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?jc(a,e):hc);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Bd;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ed(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Bd.enqueueReplaceState(b,b.state,null)}
function Fd(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=xd;od(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=ld(f):(f=C(b)?ic:A.current,e.context=jc(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(yd(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Bd.enqueueReplaceState(e,e.state,null),ud(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}var Gd=[],Hd=0,Id=null,Jd=0,Kd=[],Ld=0,Md=null,Nd=1,Od="";function Pd(a,b){Gd[Hd++]=Jd;Gd[Hd++]=Id;Id=a;Jd=b}
function Qd(a,b,c){Kd[Ld++]=Nd;Kd[Ld++]=Od;Kd[Ld++]=Md;Md=a;var d=Nd;a=Od;var e=32-qc(d)-1;d&=~(1<<e);c+=1;var f=32-qc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;Nd=1<<32-qc(b)+e|c<<e|d;Od=f+a}else Nd=1<<f|c<<e|d,Od=a}function Rd(a){null!==a.return&&(Pd(a,1),Qd(a,1,0))}function Sd(a){for(;a===Id;)Id=Gd[--Hd],Gd[Hd]=null,Jd=Gd[--Hd],Gd[Hd]=null;for(;a===Md;)Md=Kd[--Ld],Kd[Ld]=null,Od=Kd[--Ld],Kd[Ld]=null,Nd=Kd[--Ld],Kd[Ld]=null}var Td=null,Ud=null,I=!1,Vd=!1,Wd=null;
function Xd(a,b){var c=Yd(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Zd(a,b){switch(a.tag){case 5:return b=Fb(b,a.type,a.pendingProps),null!==b?(a.stateNode=b,Td=a,Ud=Mb(b),!0):!1;case 6:return b=Gb(b,a.pendingProps),null!==b?(a.stateNode=b,Td=a,Ud=null,!0):!1;case 13:b=Hb(b);if(null!==b){var c=null!==Md?{id:Nd,overflow:Od}:null;a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824};c=Yd(18,null,null,0);c.stateNode=b;c.return=a;a.child=c;Td=a;Ud=null;return!0}return!1;default:return!1}}function $d(a){return 0!==(a.mode&1)&&0===(a.flags&128)}
function ae(a){if(I){var b=Ud;if(b){var c=b;if(!Zd(a,b)){if($d(a))throw Error(n(418));b=Lb(c);var d=Td;b&&Zd(a,b)?Xd(d,c):(a.flags=a.flags&-4097|2,I=!1,Td=a)}}else{if($d(a))throw Error(n(418));a.flags=a.flags&-4097|2;I=!1;Td=a}}}function be(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Td=a}
function ce(a){if(!p||a!==Td)return!1;if(!I)return be(a),I=!0,!1;if(3!==a.tag&&(5!==a.tag||Xb(a.type)&&!Oa(a.type,a.memoizedProps))){var b=Ud;if(b){if($d(a)){for(a=Ud;a;)a=Lb(a);throw Error(n(418));}for(;b;)Xd(a,b),b=Lb(b)}}be(a);if(13===a.tag){if(!p)throw Error(n(316));a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(n(317));Ud=Sb(a)}else Ud=Td?Lb(a.stateNode):null;return!0}function de(){p&&(Ud=Td=null,Vd=I=!1)}function ee(a){null===Wd?Wd=[a]:Wd.push(a)}
function fe(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(n(309));var d=c.stateNode}if(!d)throw Error(n(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===xd&&(b=e.refs={});null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(n(284));if(!c._owner)throw Error(n(290,a));}return a}
function ge(a,b){a=Object.prototype.toString.call(b);throw Error(n(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function he(a){var b=a._init;return b(a._payload)}
function ie(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=je(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=ke(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ia)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===ra&&he(f)===b.type))return d=e(b,c.props),d.ref=fe(a,b,c),d.return=a,d;d=le(c.type,c.key,c.props,null,a.mode,d);d.ref=fe(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=me(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=ne(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function v(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=ke(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case fa:return c=le(b.type,b.key,b.props,null,a.mode,c),
c.ref=fe(a,null,b),c.return=a,c;case ha:return b=me(b,a.mode,c),b.return=a,b;case ra:var d=b._init;return v(a,d(b._payload),c)}if(Ea(b)||ua(b))return b=ne(b,a.mode,c,null),b.return=a,b;ge(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case fa:return c.key===e?k(a,b,c,d):null;case ha:return c.key===e?l(a,b,c,d):null;case ra:return e=c._init,r(a,
b,e(c._payload),d)}if(Ea(c)||ua(c))return null!==e?null:m(a,b,c,d,null);ge(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case fa:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case ha:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case ra:var f=d._init;return z(a,b,c,f(d._payload),e)}if(Ea(d)||ua(d))return a=a.get(c)||null,m(b,a,d,e,null);ge(b,d)}return null}
function q(e,g,h,k){for(var l=null,m=null,w=g,u=g=0,t=null;null!==w&&u<h.length;u++){w.index>u?(t=w,w=null):t=w.sibling;var q=r(e,w,h[u],k);if(null===q){null===w&&(w=t);break}a&&w&&null===q.alternate&&b(e,w);g=f(q,g,u);null===m?l=q:m.sibling=q;m=q;w=t}if(u===h.length)return c(e,w),I&&Pd(e,u),l;if(null===w){for(;u<h.length;u++)w=v(e,h[u],k),null!==w&&(g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);I&&Pd(e,u);return l}for(w=d(e,w);u<h.length;u++)t=z(w,e,u,h[u],k),null!==t&&(a&&null!==t.alternate&&w.delete(null===
t.key?u:t.key),g=f(t,g,u),null===m?l=t:m.sibling=t,m=t);a&&w.forEach(function(a){return b(e,a)});I&&Pd(e,u);return l}function N(e,g,h,k){var l=ua(h);if("function"!==typeof l)throw Error(n(150));h=l.call(h);if(null==h)throw Error(n(151));for(var w=l=null,m=g,u=g=0,q=null,t=h.next();null!==m&&!t.done;u++,t=h.next()){m.index>u?(q=m,m=null):q=m.sibling;var V=r(e,m,t.value,k);if(null===V){null===m&&(m=q);break}a&&m&&null===V.alternate&&b(e,m);g=f(V,g,u);null===w?l=V:w.sibling=V;w=V;m=q}if(t.done)return c(e,
m),I&&Pd(e,u),l;if(null===m){for(;!t.done;u++,t=h.next())t=v(e,t.value,k),null!==t&&(g=f(t,g,u),null===w?l=t:w.sibling=t,w=t);I&&Pd(e,u);return l}for(m=d(e,m);!t.done;u++,t=h.next())t=z(m,e,u,t.value,k),null!==t&&(a&&null!==t.alternate&&m.delete(null===t.key?u:t.key),g=f(t,g,u),null===w?l=t:w.sibling=t,w=t);a&&m.forEach(function(a){return b(e,a)});I&&Pd(e,u);return l}function da(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ia&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==
f){switch(f.$$typeof){case fa:a:{for(var k=f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ia){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===ra&&he(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=fe(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ia?(d=ne(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=le(f.type,f.key,f.props,null,a.mode,h),h.ref=fe(a,d,f),h.return=
a,a=h)}return g(a);case ha:a:{for(l=f.key;null!==d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=me(f,a.mode,h);d.return=a;a=d}return g(a);case ra:return l=f._init,da(a,d,l(f._payload),h)}if(Ea(f))return q(a,d,f,h);if(ua(f))return N(a,d,f,h);ge(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&
6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=ke(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return da}var oe=ie(!0),pe=ie(!1),qe={},re=gc(qe),se=gc(qe),te=gc(qe);function ue(a){if(a===qe)throw Error(n(174));return a}function ve(a,b){y(te,b);y(se,a);y(re,qe);a=Ga(b);x(re);y(re,a)}function we(){x(re);x(se);x(te)}function xe(a){var b=ue(te.current),c=ue(re.current);b=Ha(c,a.type,b);c!==b&&(y(se,a),y(re,b))}function ye(a){se.current===a&&(x(re),x(se))}var J=gc(0);
function ze(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||Ib(c)||Jb(c)))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Ae=[];
function Be(){for(var a=0;a<Ae.length;a++){var b=Ae[a];Ta?b._workInProgressVersionPrimary=null:b._workInProgressVersionSecondary=null}Ae.length=0}var Ce=ea.ReactCurrentDispatcher,De=ea.ReactCurrentBatchConfig,Ee=0,K=null,L=null,M=null,Fe=!1,Ge=!1,He=0,Ie=0;function O(){throw Error(n(321));}function Je(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!Rc(a[c],b[c]))return!1;return!0}
function Ke(a,b,c,d,e,f){Ee=f;K=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ce.current=null===a||null===a.memoizedState?Le:Me;a=c(d,e);if(Ge){f=0;do{Ge=!1;He=0;if(25<=f)throw Error(n(301));f+=1;M=L=null;b.updateQueue=null;Ce.current=Ne;a=c(d,e)}while(Ge)}Ce.current=Oe;b=null!==L&&null!==L.next;Ee=0;M=L=K=null;Fe=!1;if(b)throw Error(n(300));return a}function Pe(){var a=0!==He;He=0;return a}
function Qe(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===M?K.memoizedState=M=a:M=M.next=a;return M}function Re(){if(null===L){var a=K.alternate;a=null!==a?a.memoizedState:null}else a=L.next;var b=null===M?K.memoizedState:M.next;if(null!==b)M=b,L=a;else{if(null===a)throw Error(n(310));L=a;a={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null};null===M?K.memoizedState=M=a:M=M.next=a}return M}
function Se(a,b){return"function"===typeof b?b(a):b}
function Te(a){var b=Re(),c=b.queue;if(null===c)throw Error(n(311));c.lastRenderedReducer=a;var d=L,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Ee&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var v={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=v,g=d):k=k.next=v;K.lanes|=m;vd|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;Rc(d,b.memoizedState)||(kd=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,K.lanes|=f,vd|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function Ue(a){var b=Re(),c=b.queue;if(null===c)throw Error(n(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);Rc(f,b.memoizedState)||(kd=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Ve(){}
function We(a,b){var c=K,d=Re(),e=b(),f=!Rc(d.memoizedState,e);f&&(d.memoizedState=e,kd=!0);d=d.queue;Xe(Ye.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==M&&M.memoizedState.tag&1){c.flags|=2048;Ze(9,$e.bind(null,c,d,e,b),void 0,null);if(null===F)throw Error(n(349));0!==(Ee&30)||af(c,b,e)}return e}function af(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=K.updateQueue;null===b?(b={lastEffect:null,stores:null},K.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function $e(a,b,c,d){b.value=c;b.getSnapshot=d;bf(b)&&Ad(a,1,-1)}function Ye(a,b,c){return c(function(){bf(b)&&Ad(a,1,-1)})}function bf(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!Rc(a,c)}catch(d){return!0}}function cf(a){var b=Qe();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Se,lastRenderedState:a};b.queue=a;a=a.dispatch=df.bind(null,K,a);return[b.memoizedState,a]}
function Ze(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=K.updateQueue;null===b?(b={lastEffect:null,stores:null},K.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ef(){return Re().memoizedState}function ff(a,b,c,d){var e=Qe();K.flags|=a;e.memoizedState=Ze(1|b,c,void 0,void 0===d?null:d)}
function gf(a,b,c,d){var e=Re();d=void 0===d?null:d;var f=void 0;if(null!==L){var g=L.memoizedState;f=g.destroy;if(null!==d&&Je(d,g.deps)){e.memoizedState=Ze(b,c,f,d);return}}K.flags|=a;e.memoizedState=Ze(1|b,c,f,d)}function hf(a,b){return ff(8390656,8,a,b)}function Xe(a,b){return gf(2048,8,a,b)}function jf(a,b){return gf(4,2,a,b)}function kf(a,b){return gf(4,4,a,b)}
function lf(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function mf(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return gf(4,4,lf.bind(null,b,a),c)}function nf(){}function of(a,b){var c=Re();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Je(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function pf(a,b){var c=Re();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Je(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function qf(a,b){var c=D;D=0!==c&&4>c?c:4;a(!0);var d=De.transition;De.transition={};try{a(!1),b()}finally{D=c,De.transition=d}}function rf(){return Re().memoizedState}function sf(a,b,c){var d=zd(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};tf(a)?uf(b,c):(vf(a,b,c),c=H(),a=Ad(a,d,c),null!==a&&wf(a,b,d))}
function df(a,b,c){var d=zd(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(tf(a))uf(b,e);else{vf(a,b,e);var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(Rc(h,g))return}catch(k){}finally{}c=H();a=Ad(a,d,c);null!==a&&wf(a,b,d)}}function tf(a){var b=a.alternate;return a===K||null!==b&&b===K}
function uf(a,b){Ge=Fe=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function vf(a,b,c){null!==F&&0!==(a.mode&1)&&0===(G&2)?(a=b.interleaved,null===a?(c.next=c,null===md?md=[b]:md.push(b)):(c.next=a.next,a.next=c),b.interleaved=c):(a=b.pending,null===a?c.next=c:(c.next=a.next,a.next=c),b.pending=c)}function wf(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Dc(a,c)}}
var Oe={readContext:ld,useCallback:O,useContext:O,useEffect:O,useImperativeHandle:O,useInsertionEffect:O,useLayoutEffect:O,useMemo:O,useReducer:O,useRef:O,useState:O,useDebugValue:O,useDeferredValue:O,useTransition:O,useMutableSource:O,useSyncExternalStore:O,useId:O,unstable_isNewReconciler:!1},Le={readContext:ld,useCallback:function(a,b){Qe().memoizedState=[a,void 0===b?null:b];return a},useContext:ld,useEffect:hf,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ff(4194308,
4,lf.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ff(4194308,4,a,b)},useInsertionEffect:function(a,b){return ff(4,2,a,b)},useMemo:function(a,b){var c=Qe();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Qe();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=sf.bind(null,K,a);return[d.memoizedState,a]},useRef:function(a){var b=
Qe();a={current:a};return b.memoizedState=a},useState:cf,useDebugValue:nf,useDeferredValue:function(a){var b=cf(a),c=b[0],d=b[1];hf(function(){var b=De.transition;De.transition={};try{d(a)}finally{De.transition=b}},[a]);return c},useTransition:function(){var a=cf(!1),b=a[0];a=qf.bind(null,a[1]);Qe().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=K,e=Qe();if(I){if(void 0===c)throw Error(n(407));c=c()}else{c=b();if(null===F)throw Error(n(349));
0!==(Ee&30)||af(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;hf(Ye.bind(null,d,f,a),[a]);d.flags|=2048;Ze(9,$e.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Qe(),b=F.identifierPrefix;if(I){var c=Od;var d=Nd;c=(d&~(1<<32-qc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=He++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Ie++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Me={readContext:ld,useCallback:of,useContext:ld,useEffect:Xe,useImperativeHandle:mf,
useInsertionEffect:jf,useLayoutEffect:kf,useMemo:pf,useReducer:Te,useRef:ef,useState:function(){return Te(Se)},useDebugValue:nf,useDeferredValue:function(a){var b=Te(Se),c=b[0],d=b[1];Xe(function(){var b=De.transition;De.transition={};try{d(a)}finally{De.transition=b}},[a]);return c},useTransition:function(){var a=Te(Se)[0],b=Re().memoizedState;return[a,b]},useMutableSource:Ve,useSyncExternalStore:We,useId:rf,unstable_isNewReconciler:!1},Ne={readContext:ld,useCallback:of,useContext:ld,useEffect:Xe,
useImperativeHandle:mf,useInsertionEffect:jf,useLayoutEffect:kf,useMemo:pf,useReducer:Ue,useRef:ef,useState:function(){return Ue(Se)},useDebugValue:nf,useDeferredValue:function(a){var b=Ue(Se),c=b[0],d=b[1];Xe(function(){var b=De.transition;De.transition={};try{d(a)}finally{De.transition=b}},[a]);return c},useTransition:function(){var a=Ue(Se)[0],b=Re().memoizedState;return[a,b]},useMutableSource:Ve,useSyncExternalStore:We,useId:rf,unstable_isNewReconciler:!1};
function xf(a,b){try{var c="",d=b;do c+=$c(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function yf(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var zf="function"===typeof WeakMap?WeakMap:Map;function Af(a,b,c){c=qd(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Bf||(Bf=!0,Cf=d);yf(a,b)};return c}
function Df(a,b,c){c=qd(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){yf(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){yf(a,b);"function"!==typeof d&&(null===Ef?Ef=new Set([this]):Ef.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Ff(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new zf;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Gf.bind(null,a,b,c),b.then(a,a))}function Hf(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function If(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=qd(-1,1),b.tag=2,rd(c,b))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}function Jf(a){a.flags|=4}function Kf(a,b){if(null!==a&&a.child===b.child)return!0;if(0!==(b.flags&16))return!1;for(a=b.child;null!==a;){if(0!==(a.flags&12854)||0!==(a.subtreeFlags&12854))return!1;a=a.sibling}return!0}var Lf,Mf,Nf,Of;
if(Ua)Lf=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)La(a,c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}},Mf=function(){},Nf=function(a,b,c,d,e){a=a.memoizedProps;if(a!==d){var f=b.stateNode,g=ue(re.current);c=Na(f,c,a,d,e,g);(b.updateQueue=c)&&Jf(b)}},Of=function(a,b,c,d){c!==d&&Jf(b)};else if(Va){Lf=function(a,
b,c,d){for(var e=b.child;null!==e;){if(5===e.tag){var f=e.stateNode;c&&d&&(f=Db(f,e.type,e.memoizedProps,e));La(a,f)}else if(6===e.tag)f=e.stateNode,c&&d&&(f=Eb(f,e.memoizedProps,e)),La(a,f);else if(4!==e.tag)if(22===e.tag&&null!==e.memoizedState)f=e.child,null!==f&&(f.return=e),Lf(a,e,!0,!0);else if(null!==e.child){e.child.return=e;e=e.child;continue}if(e===b)break;for(;null===e.sibling;){if(null===e.return||e.return===b)return;e=e.return}e.sibling.return=e.return;e=e.sibling}};var Pf=function(a,
b,c,d){for(var e=b.child;null!==e;){if(5===e.tag){var f=e.stateNode;c&&d&&(f=Db(f,e.type,e.memoizedProps,e));Ab(a,f)}else if(6===e.tag)f=e.stateNode,c&&d&&(f=Eb(f,e.memoizedProps,e)),Ab(a,f);else if(4!==e.tag)if(22===e.tag&&null!==e.memoizedState)f=e.child,null!==f&&(f.return=e),Pf(a,e,!0,!0);else if(null!==e.child){e.child.return=e;e=e.child;continue}if(e===b)break;for(;null===e.sibling;){if(null===e.return||e.return===b)return;e=e.return}e.sibling.return=e.return;e=e.sibling}};Mf=function(a,b){var c=
b.stateNode;if(!Kf(a,b)){a=c.containerInfo;var d=zb(a);Pf(d,b,!1,!1);c.pendingChildren=d;Jf(b);Bb(a,d)}};Nf=function(a,b,c,d,e){var f=a.stateNode,g=a.memoizedProps;if((a=Kf(a,b))&&g===d)b.stateNode=f;else{var h=b.stateNode,k=ue(re.current),l=null;g!==d&&(l=Na(h,c,g,d,e,k));a&&null===l?b.stateNode=f:(f=yb(f,l,c,g,d,b,a,h),Ma(f,c,d,e,k)&&Jf(b),b.stateNode=f,a?Jf(b):Lf(f,b,!1,!1))}};Of=function(a,b,c,d){c!==d?(a=ue(te.current),c=ue(re.current),b.stateNode=Pa(d,a,c,b),Jf(b)):b.stateNode=a.stateNode}}else Mf=
function(){},Nf=function(){},Of=function(){};function Qf(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function P(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Rf(a,b,c){var d=b.pendingProps;Sd(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return P(b),null;case 1:return C(b.type)&&kc(),P(b),null;case 3:d=b.stateNode;we();x(B);x(A);Be();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)ce(b)?Jf(b):null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==Wd&&(Sf(Wd),Wd=null));Mf(a,b);P(b);return null;case 5:ye(b);c=ue(te.current);var e=
b.type;if(null!==a&&null!=b.stateNode)Nf(a,b,e,d,c),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(n(166));P(b);return null}a=ue(re.current);if(ce(b)){if(!p)throw Error(n(175));a=Pb(b.stateNode,b.type,b.memoizedProps,c,a,b,!Vd);b.updateQueue=a;null!==a&&Jf(b)}else{var f=Ka(e,d,c,a,b);Lf(f,b,!1,!1);b.stateNode=f;Ma(f,e,d,c,a)&&Jf(b)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}P(b);return null;case 6:if(a&&null!=b.stateNode)Of(a,b,a.memoizedProps,d);else{if("string"!==
typeof d&&null===b.stateNode)throw Error(n(166));a=ue(te.current);c=ue(re.current);if(ce(b)){if(!p)throw Error(n(176));a=b.stateNode;d=b.memoizedProps;if(c=Qb(a,d,b,!Vd))if(e=Td,null!==e)switch(f=0!==(e.mode&1),e.tag){case 3:Yb(e.stateNode.containerInfo,a,d,f);break;case 5:Zb(e.type,e.memoizedProps,e.stateNode,a,d,f)}c&&Jf(b)}else b.stateNode=Pa(d,a,c,b)}P(b);return null;case 13:x(J);d=b.memoizedState;if(I&&null!==Ud&&0!==(b.mode&1)&&0===(b.flags&128)){for(a=Ud;a;)a=Lb(a);de();b.flags|=98560;return b}if(null!==
d&&null!==d.dehydrated){d=ce(b);if(null===a){if(!d)throw Error(n(318));if(!p)throw Error(n(344));a=b.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(n(317));Rb(a,b)}else de(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;P(b);return null}null!==Wd&&(Sf(Wd),Wd=null);if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;c=!1;null===a?ce(b):c=null!==a.memoizedState;d&&!c&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(J.current&1)?0===Q&&(Q=3):Tf()));null!==b.updateQueue&&(b.flags|=
4);P(b);return null;case 4:return we(),Mf(a,b),null===a&&Xa(b.stateNode.containerInfo),P(b),null;case 10:return hd(b.type._context),P(b),null;case 17:return C(b.type)&&kc(),P(b),null;case 19:x(J);e=b.memoizedState;if(null===e)return P(b),null;d=0!==(b.flags&128);f=e.rendering;if(null===f)if(d)Qf(e,!1);else{if(0!==Q||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){f=ze(a);if(null!==f){b.flags|=128;Qf(e,!1);a=f.updateQueue;null!==a&&(b.updateQueue=a,b.flags|=4);b.subtreeFlags=0;a=c;for(d=b.child;null!==
d;)c=d,e=a,c.flags&=14680066,f=c.alternate,null===f?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=f.childLanes,c.lanes=f.lanes,c.child=f.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=f.memoizedProps,c.memoizedState=f.memoizedState,c.updateQueue=f.updateQueue,c.type=f.type,e=f.dependencies,c.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),d=d.sibling;
y(J,J.current&1|2);return b.child}a=a.sibling}null!==e.tail&&E()>Uf&&(b.flags|=128,d=!0,Qf(e,!1),b.lanes=4194304)}else{if(!d)if(a=ze(f),null!==a){if(b.flags|=128,d=!0,a=a.updateQueue,null!==a&&(b.updateQueue=a,b.flags|=4),Qf(e,!0),null===e.tail&&"hidden"===e.tailMode&&!f.alternate&&!I)return P(b),null}else 2*E()-e.renderingStartTime>Uf&&1073741824!==c&&(b.flags|=128,d=!0,Qf(e,!1),b.lanes=4194304);e.isBackwards?(f.sibling=b.child,b.child=f):(a=e.last,null!==a?a.sibling=f:b.child=f,e.last=f)}if(null!==
e.tail)return b=e.tail,e.rendering=b,e.tail=b.sibling,e.renderingStartTime=E(),b.sibling=null,a=J.current,y(J,d?a&1|2:a&1),b;P(b);return null;case 22:case 23:return Vf(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(Wf&1073741824)&&(P(b),Ua&&b.subtreeFlags&6&&(b.flags|=8192)):P(b),null;case 24:return null;case 25:return null}throw Error(n(156,b.tag));}var Xf=ea.ReactCurrentOwner,kd=!1;
function R(a,b,c,d){b.child=null===a?pe(b,null,c,d):oe(b,a.child,c,d)}function Yf(a,b,c,d,e){c=c.render;var f=b.ref;jd(b,e);d=Ke(a,b,c,d,f,e);c=Pe();if(null!==a&&!kd)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zf(a,b,e);I&&c&&Rd(b);b.flags|=1;R(a,b,d,e);return b.child}
function $f(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!ag(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bg(a,b,f,d,e);a=le(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Zc;if(c(g,d)&&a.ref===b.ref)return Zf(a,b,e)}b.flags|=1;a=je(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bg(a,b,c,d,e){if(null!==a&&Zc(a.memoizedProps,d)&&a.ref===b.ref)if(kd=!1,0!==(a.lanes&e))0!==(a.flags&131072)&&(kd=!0);else return b.lanes=a.lanes,Zf(a,b,e);return cg(a,b,c,d,e)}
function dg(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null},y(eg,Wf),Wf|=c;else if(0!==(c&1073741824))b.memoizedState={baseLanes:0,cachePool:null},d=null!==f?f.baseLanes:c,y(eg,Wf),Wf|=d;else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null},b.updateQueue=null,y(eg,Wf),Wf|=a,null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):
d=c,y(eg,Wf),Wf|=d;R(a,b,e,c);return b.child}function fg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function cg(a,b,c,d,e){var f=C(c)?ic:A.current;f=jc(b,f);jd(b,e);c=Ke(a,b,c,d,f,e);d=Pe();if(null!==a&&!kd)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zf(a,b,e);I&&d&&Rd(b);b.flags|=1;R(a,b,c,e);return b.child}
function gg(a,b,c,d,e){if(C(c)){var f=!0;nc(b)}else f=!1;jd(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Dd(b,c,d),Fd(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=ld(l):(l=C(c)?ic:A.current,l=jc(b,l));var m=c.getDerivedStateFromProps,v="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;v||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==
typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ed(b,g,d,l);nd=!1;var r=b.memoizedState;g.state=r;ud(b,d,g,e);k=b.memoizedState;h!==d||r!==k||B.current||nd?("function"===typeof m&&(yd(b,c,m,d),k=b.memoizedState),(h=nd||Cd(b,c,h,d,r,k,l))?(v||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&
(b.flags|=4194308)):("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;pd(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:ad(b.type,h);g.props=l;v=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=ld(k):(k=C(c)?ic:A.current,k=jc(b,k));var z=c.getDerivedStateFromProps;(m="function"===typeof z||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==v||r!==k)&&Ed(b,g,d,k);nd=!1;r=b.memoizedState;g.state=r;ud(b,d,g,e);var q=b.memoizedState;h!==v||r!==q||B.current||nd?("function"===typeof z&&(yd(b,c,z,d),q=b.memoizedState),(l=nd||Cd(b,c,l,d,r,q,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
q,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,q,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=q),g.props=d,g.state=q,g.context=k,d=l):("function"!==
typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return hg(a,b,c,d,f,e)}
function hg(a,b,c,d,e,f){fg(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&oc(b,c,!1),Zf(a,b,f);d=b.stateNode;Xf.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=oe(b,a.child,null,f),b.child=oe(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&oc(b,c,!0);return b.child}function ig(a){var b=a.stateNode;b.pendingContext?lc(a,b.pendingContext,b.pendingContext!==b.context):b.context&&lc(a,b.context,!1);ve(a,b.containerInfo)}
function jg(a,b,c,d,e){de();ee(e);b.flags|=256;R(a,b,c,d);return b.child}var kg={dehydrated:null,treeContext:null,retryLane:0};function lg(a){return{baseLanes:a,cachePool:null}}
function mg(a,b,c){var d=b.pendingProps,e=J.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;y(J,e&1);if(null===a){ae(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:Jb(a)?b.lanes=8:b.lanes=1073741824,null;e=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,e={mode:"hidden",children:e},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=e):
f=ng(e,d,0,null),a=ne(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=lg(c),b.memoizedState=kg,a):og(b,e)}e=a.memoizedState;if(null!==e){h=e.dehydrated;if(null!==h){if(g){if(b.flags&256)return b.flags&=-257,pg(a,b,c,Error(n(422)));if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=ng({mode:"visible",children:d.children},e,0,null);f=ne(f,e,c,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&oe(b,a.child,
null,c);b.child.memoizedState=lg(c);b.memoizedState=kg;return f}if(0===(b.mode&1))b=pg(a,b,c,null);else if(Jb(h))b=pg(a,b,c,Error(n(419)));else if(d=0!==(c&a.childLanes),kd||d){d=F;if(null!==d){switch(c&-c){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=
268435456;break;default:f=0}d=0!==(f&(d.suspendedLanes|c))?0:f;0!==d&&d!==e.retryLane&&(e.retryLane=d,Ad(a,d,-1))}Tf();b=pg(a,b,c,Error(n(421)))}else Ib(h)?(b.flags|=128,b.child=a.child,b=qg.bind(null,a),Kb(h,b),b=null):(c=e.treeContext,p&&(Ud=Ob(h),Td=b,I=!0,Wd=null,Vd=!1,null!==c&&(Kd[Ld++]=Nd,Kd[Ld++]=Od,Kd[Ld++]=Md,Nd=c.id,Od=c.overflow,Md=b)),b=og(b,b.pendingProps.children),b.flags|=4096);return b}if(f)return d=rg(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=
null===e?lg(c):{baseLanes:e.baseLanes|c,cachePool:null},f.childLanes=a.childLanes&~c,b.memoizedState=kg,d;c=sg(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=rg(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?lg(c):{baseLanes:e.baseLanes|c,cachePool:null},f.childLanes=a.childLanes&~c,b.memoizedState=kg,d;c=sg(a,b,d.children,c);b.memoizedState=null;return c}
function og(a,b){b=ng({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sg(a,b,c,d){var e=a.child;a=e.sibling;c=je(e,{mode:"visible",children:c});0===(b.mode&1)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(d=b.deletions,null===d?(b.deletions=[a],b.flags|=16):d.push(a));return b.child=c}
function rg(a,b,c,d,e){var f=b.mode;a=a.child;var g=a.sibling,h={mode:"hidden",children:c};0===(f&1)&&b.child!==a?(c=b.child,c.childLanes=0,c.pendingProps=h,b.deletions=null):(c=je(a,h),c.subtreeFlags=a.subtreeFlags&14680064);null!==g?d=je(g,d):(d=ne(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function pg(a,b,c,d){null!==d&&ee(d);oe(b,a.child,null,c);a=og(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function tg(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);id(a.return,b,c)}function ug(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function vg(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=J.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&tg(a,c,b);else if(19===a.tag)tg(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}y(J,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ze(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);ug(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ze(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}ug(b,!0,c,null,f);break;case "together":ug(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function Zf(a,b,c){null!==a&&(b.dependencies=a.dependencies);vd|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(n(153));if(null!==b.child){a=b.child;c=je(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=je(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function wg(a,b,c){switch(b.tag){case 3:ig(b);de();break;case 5:xe(b);break;case 1:C(b.type)&&nc(b);break;case 4:ve(b,b.stateNode.containerInfo);break;case 10:gd(b,b.type._context,b.memoizedProps.value);break;case 13:var d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return y(J,J.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return mg(a,b,c);y(J,J.current&1);a=Zf(a,b,c);return null!==a?a.sibling:null}y(J,J.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&128)){if(d)return vg(a,
b,c);b.flags|=128}var e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);y(J,J.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dg(a,b,c)}return Zf(a,b,c)}
function xg(a,b){Sd(b);switch(b.tag){case 1:return C(b.type)&&kc(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return we(),x(B),x(A),Be(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return ye(b),null;case 13:x(J);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(n(340));de()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return x(J),null;case 4:return we(),null;case 10:return hd(b.type._context),null;case 22:case 23:return Vf(),
null;case 24:return null;default:return null}}var yg=!1,zg=!1,Ag="function"===typeof WeakSet?WeakSet:Set,S=null;function Bg(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){T(a,b,d)}else c.current=null}function Cg(a,b,c){try{c()}catch(d){T(a,b,d)}}var Dg=!1;
function Eg(a,b){Ia(a.containerInfo);for(S=b;null!==S;)if(a=S,b=a.child,0!==(a.subtreeFlags&1028)&&null!==b)b.return=a,S=b;else for(;null!==S;){a=S;try{var c=a.alternate;if(0!==(a.flags&1024))switch(a.tag){case 0:case 11:case 15:break;case 1:if(null!==c){var d=c.memoizedProps,e=c.memoizedState,f=a.stateNode,g=f.getSnapshotBeforeUpdate(a.elementType===a.type?d:ad(a.type,d),e);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:Ua&&xb(a.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;
default:throw Error(n(163));}}catch(h){T(a,a.return,h)}b=a.sibling;if(null!==b){b.return=a.return;S=b;break}S=a.return}c=Dg;Dg=!1;return c}function Fg(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Cg(b,c,f)}e=e.next}while(e!==d)}}function Gg(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Hg(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=Fa(c);break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Ig(a,b,c){if(Oc&&"function"===typeof Oc.onCommitFiberUnmount)try{Oc.onCommitFiberUnmount(Nc,b)}catch(g){}switch(b.tag){case 0:case 11:case 14:case 15:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a=a.next;do{var e=d,f=e.destroy;e=e.tag;void 0!==f&&(0!==(e&2)?Cg(b,c,f):0!==(e&4)&&Cg(b,c,f));d=d.next}while(d!==a)}break;case 1:Bg(b,c);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(g){T(b,
c,g)}break;case 5:Bg(b,c);break;case 4:Ua?Jg(a,b,c):Va&&Va&&(b=b.stateNode.containerInfo,c=zb(b),Cb(b,c))}}function Kg(a,b,c){for(var d=b;;)if(Ig(a,d,c),null===d.child||Ua&&4===d.tag){if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return}d.sibling.return=d.return;d=d.sibling}else d.child.return=d,d=d.child}
function Lg(a){var b=a.alternate;null!==b&&(a.alternate=null,Lg(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&Za(b));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Mg(a){return 5===a.tag||3===a.tag||4===a.tag}
function Ng(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Mg(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Og(a){if(Ua){a:{for(var b=a.return;null!==b;){if(Mg(b))break a;b=b.return}throw Error(n(160));}var c=b;switch(c.tag){case 5:b=c.stateNode;c.flags&32&&(sb(b),c.flags&=-33);c=Ng(a);Pg(a,c,b);break;case 3:case 4:b=c.stateNode.containerInfo;c=Ng(a);Qg(a,c,b);break;default:throw Error(n(161));}}}function Qg(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?pb(c,a,b):kb(c,a);else if(4!==d&&(a=a.child,null!==a))for(Qg(a,b,c),a=a.sibling;null!==a;)Qg(a,b,c),a=a.sibling}
function Pg(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?ob(c,a,b):jb(c,a);else if(4!==d&&(a=a.child,null!==a))for(Pg(a,b,c),a=a.sibling;null!==a;)Pg(a,b,c),a=a.sibling}
function Jg(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(n(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag)Kg(a,d,c),g?rb(f,d.stateNode):qb(f,d.stateNode);else if(18===d.tag)g?Wb(f,d.stateNode):Vb(f,d.stateNode);else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ig(a,d,c),null!==
d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Rg(a,b){if(Ua){switch(b.tag){case 0:case 11:case 14:case 15:Fg(3,b,b.return);Gg(3,b);Fg(5,b,b.return);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&nb(c,f,e,a,d,b)}return;case 6:if(null===b.stateNode)throw Error(n(162));c=b.memoizedProps;lb(b.stateNode,null!==a?a.memoizedProps:c,c);return;case 3:p&&null!==a&&a.memoizedState.isDehydrated&&Tb(b.stateNode.containerInfo);return;
case 12:return;case 13:Sg(b);return;case 19:Sg(b);return;case 17:return}throw Error(n(163));}switch(b.tag){case 0:case 11:case 14:case 15:Fg(3,b,b.return);Gg(3,b);Fg(5,b,b.return);return;case 12:return;case 13:Sg(b);return;case 19:Sg(b);return;case 3:p&&null!==a&&a.memoizedState.isDehydrated&&Tb(b.stateNode.containerInfo);break;case 22:case 23:return}a:if(Va){switch(b.tag){case 1:case 5:case 6:break a;case 3:case 4:b=b.stateNode;Cb(b.containerInfo,b.pendingChildren);break a}throw Error(n(163));}}
function Sg(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ag);b.forEach(function(b){var d=Tg.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function Ug(a,b){for(S=b;null!==S;){b=S;var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a;Ua?Jg(f,e,b):Kg(f,e,b);var g=e.alternate;null!==g&&(g.return=null);e.return=null}catch(wa){T(e,b,wa)}}c=b.child;if(0!==(b.subtreeFlags&12854)&&null!==c)c.return=b,S=c;else for(;null!==S;){b=S;try{var h=b.flags;h&32&&Ua&&sb(b.stateNode);if(h&512){var k=b.alternate;if(null!==k){var l=k.ref;null!==l&&("function"===typeof l?l(null):l.current=null)}}if(h&8192)switch(b.tag){case 13:if(null!==
b.memoizedState){var m=b.alternate;if(null===m||null===m.memoizedState)Vg=E()}break;case 22:var v=null!==b.memoizedState,r=b.alternate,z=null!==r&&null!==r.memoizedState;c=b;if(Ua)a:if(d=c,e=v,f=null,Ua)for(var q=d;;){if(5===q.tag){if(null===f){f=q;var N=q.stateNode;e?tb(N):vb(q.stateNode,q.memoizedProps)}}else if(6===q.tag){if(null===f){var da=q.stateNode;e?ub(da):wb(da,q.memoizedProps)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===d)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===
d)break;for(;null===q.sibling;){if(null===q.return||q.return===d)break a;f===q&&(f=null);q=q.return}f===q&&(f=null);q.sibling.return=q.return;q=q.sibling}if(v&&!z&&0!==(c.mode&1)){S=c;for(var t=c.child;null!==t;){for(c=S=t;null!==S;){d=S;var w=d.child;switch(d.tag){case 0:case 11:case 14:case 15:Fg(4,d,d.return);break;case 1:Bg(d,d.return);var u=d.stateNode;if("function"===typeof u.componentWillUnmount){var V=d.return;try{u.props=d.memoizedProps,u.state=d.memoizedState,u.componentWillUnmount()}catch(wa){T(d,
V,wa)}}break;case 5:Bg(d,d.return);break;case 22:if(null!==d.memoizedState){Wg(c);continue}}null!==w?(w.return=d,S=w):Wg(c)}t=t.sibling}}}switch(h&4102){case 2:Og(b);b.flags&=-3;break;case 6:Og(b);b.flags&=-3;Rg(b.alternate,b);break;case 4096:b.flags&=-4097;break;case 4100:b.flags&=-4097;Rg(b.alternate,b);break;case 4:Rg(b.alternate,b)}}catch(wa){T(b,b.return,wa)}c=b.sibling;if(null!==c){c.return=b.return;S=c;break}S=b.return}}}function Xg(a,b,c){S=a;Yg(a,b,c)}
function Yg(a,b,c){for(var d=0!==(a.mode&1);null!==S;){var e=S,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||yg;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||zg;h=yg;var l=zg;yg=g;if((zg=k)&&!l)for(S=e;null!==S;)g=S,k=g.child,22===g.tag&&null!==g.memoizedState?Zg(e):null!==k?(k.return=g,S=k):Zg(e);for(;null!==f;)S=f,Yg(f,b,c),f=f.sibling;S=e;yg=h;zg=l}$g(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,S=f):$g(a,b,c)}}
function $g(a){for(;null!==S;){var b=S;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:zg||Gg(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!zg)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:ad(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&wd(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
Fa(b.child.stateNode);break;case 1:c=b.child.stateNode}wd(b,g,c)}break;case 5:var h=b.stateNode;null===c&&b.flags&4&&mb(h,b.type,b.memoizedProps,b);break;case 6:break;case 4:break;case 12:break;case 13:if(p&&null===b.memoizedState){var k=b.alternate;if(null!==k){var l=k.memoizedState;if(null!==l){var m=l.dehydrated;null!==m&&Ub(m)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(n(163));}zg||b.flags&512&&Hg(b)}catch(v){T(b,b.return,v)}}if(b===a){S=null;break}c=b.sibling;if(null!==
c){c.return=b.return;S=c;break}S=b.return}}function Wg(a){for(;null!==S;){var b=S;if(b===a){S=null;break}var c=b.sibling;if(null!==c){c.return=b.return;S=c;break}S=b.return}}
function Zg(a){for(;null!==S;){var b=S;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Gg(4,b)}catch(k){T(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){T(b,e,k)}}var f=b.return;try{Hg(b)}catch(k){T(b,f,k)}break;case 5:var g=b.return;try{Hg(b)}catch(k){T(b,g,k)}}}catch(k){T(b,b.return,k)}if(b===a){S=null;break}var h=b.sibling;if(null!==h){h.return=b.return;S=h;break}S=b.return}}
var ah=0,bh=1,ch=2,dh=3,eh=4;if("function"===typeof Symbol&&Symbol.for){var fh=Symbol.for;ah=fh("selector.component");bh=fh("selector.has_pseudo_class");ch=fh("selector.role");dh=fh("selector.test_id");eh=fh("selector.text")}function gh(a){var b=Wa(a);if(null!=b){if("string"!==typeof b.memoizedProps["data-testname"])throw Error(n(364));return b}a=cb(a);if(null===a)throw Error(n(362));return a.stateNode.current}
function hh(a,b){switch(b.$$typeof){case ah:if(a.type===b.value)return!0;break;case bh:a:{b=b.value;a=[a,0];for(var c=0;c<a.length;){var d=a[c++],e=a[c++],f=b[e];if(5!==d.tag||!fb(d)){for(;null!=f&&hh(d,f);)e++,f=b[e];if(e===b.length){b=!0;break a}else for(d=d.child;null!==d;)a.push(d,e),d=d.sibling}}b=!1}return b;case ch:if(5===a.tag&&gb(a.stateNode,b.value))return!0;break;case eh:if(5===a.tag||6===a.tag)if(a=eb(a),null!==a&&0<=a.indexOf(b.value))return!0;break;case dh:if(5===a.tag&&(a=a.memoizedProps["data-testname"],
"string"===typeof a&&a.toLowerCase()===b.value.toLowerCase()))return!0;break;default:throw Error(n(365));}return!1}function ih(a){switch(a.$$typeof){case ah:return"<"+(va(a.value)||"Unknown")+">";case bh:return":has("+(ih(a)||"")+")";case ch:return'[role="'+a.value+'"]';case eh:return'"'+a.value+'"';case dh:return'[data-testname="'+a.value+'"]';default:throw Error(n(365));}}
function jh(a,b){var c=[];a=[a,0];for(var d=0;d<a.length;){var e=a[d++],f=a[d++],g=b[f];if(5!==e.tag||!fb(e)){for(;null!=g&&hh(e,g);)f++,g=b[f];if(f===b.length)c.push(e);else for(e=e.child;null!==e;)a.push(e,f),e=e.sibling}}return c}function kh(a,b){if(!bb)throw Error(n(363));a=gh(a);a=jh(a,b);b=[];a=Array.from(a);for(var c=0;c<a.length;){var d=a[c++];if(5===d.tag)fb(d)||b.push(d.stateNode);else for(d=d.child;null!==d;)a.push(d),d=d.sibling}return b}
var lh=Math.ceil,mh=ea.ReactCurrentDispatcher,nh=ea.ReactCurrentOwner,U=ea.ReactCurrentBatchConfig,G=0,F=null,W=null,X=0,Wf=0,eg=gc(0),Q=0,oh=null,vd=0,ph=0,qh=0,rh=null,Y=null,Vg=0,Uf=Infinity;function sh(){Uf=E()+500}var Bf=!1,Cf=null,Ef=null,th=!1,uh=null,vh=0,wh=0,xh=null,yh=-1,zh=0;function H(){return 0!==(G&6)?E():-1!==yh?yh:yh=E()}
function zd(a){if(0===(a.mode&1))return 1;if(0!==(G&2)&&0!==X)return X&-X;if(null!==Yc.transition)return 0===zh&&(a=tc,tc<<=1,0===(tc&4194240)&&(tc=64),zh=a),zh;a=D;return 0!==a?a:Ya()}function Ad(a,b,c){if(50<wh)throw wh=0,xh=null,Error(n(185));var d=Ah(a,b);if(null===d)return null;Bc(d,b,c);if(0===(G&2)||d!==F)d===F&&(0===(G&2)&&(ph|=b),4===Q&&Bh(d,X)),Z(d,c),1===b&&0===G&&0===(a.mode&1)&&(sh(),Tc&&Xc());return d}
function Ah(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Z(a,b){var c=a.callbackNode;yc(a,b);var d=wc(a,a===F?X:0);if(0===d)null!==c&&Gc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&Gc(c);if(1===b)0===a.tag?Wc(Ch.bind(null,a)):Vc(Ch.bind(null,a)),$a?ab(function(){0===G&&Xc()}):Fc(Jc,Xc),c=null;else{switch(Ec(d)){case 1:c=Jc;break;case 4:c=Kc;break;case 16:c=Lc;break;case 536870912:c=Mc;break;default:c=Lc}c=Dh(c,Eh.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Eh(a,b){yh=-1;zh=0;if(0!==(G&6))throw Error(n(327));var c=a.callbackNode;if(Fh()&&a.callbackNode!==c)return null;var d=wc(a,a===F?X:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Gh(a,d);else{b=d;var e=G;G|=2;var f=Hh();if(F!==a||X!==b)sh(),Ih(a,b);do try{Jh();break}catch(h){Kh(a,h)}while(1);fd();mh.current=f;G=e;null!==W?b=0:(F=null,X=0,b=Q)}if(0!==b){2===b&&(e=zc(a),0!==e&&(d=e,b=Lh(a,e)));if(1===b)throw c=oh,Ih(a,0),Bh(a,d),Z(a,E()),c;if(6===b)Bh(a,d);else{e=a.current.alternate;
if(0===(d&30)&&!Mh(e)&&(b=Gh(a,d),2===b&&(f=zc(a),0!==f&&(d=f,b=Lh(a,f))),1===b))throw c=oh,Ih(a,0),Bh(a,d),Z(a,E()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(n(345));case 2:Nh(a,Y);break;case 3:Bh(a,d);if((d&130023424)===d&&(b=Vg+500-E(),10<b)){if(0!==wc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){H();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Qa(Nh.bind(null,a,Y),b);break}Nh(a,Y);break;case 4:Bh(a,d);if((d&4194240)===d)break;b=a.eventTimes;for(e=-1;0<
d;){var g=31-qc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=E()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lh(d/1960))-d;if(10<d){a.timeoutHandle=Qa(Nh.bind(null,a,Y),d);break}Nh(a,Y);break;case 5:Nh(a,Y);break;default:throw Error(n(329));}}}Z(a,E());return a.callbackNode===c?Eh.bind(null,a):null}function Lh(a,b){var c=rh;a.current.memoizedState.isDehydrated&&(Ih(a,b).flags|=256);a=Gh(a,b);2!==a&&(b=Y,Y=c,null!==b&&Sf(b));return a}
function Sf(a){null===Y?Y=a:Y.push.apply(Y,a)}function Mh(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!Rc(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Bh(a,b){b&=~qh;b&=~ph;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-qc(b),d=1<<c;a[c]=-1;b&=~d}}function Ch(a){if(0!==(G&6))throw Error(n(327));Fh();var b=wc(a,0);if(0===(b&1))return Z(a,E()),null;var c=Gh(a,b);if(0!==a.tag&&2===c){var d=zc(a);0!==d&&(b=d,c=Lh(a,d))}if(1===c)throw c=oh,Ih(a,0),Bh(a,b),Z(a,E()),c;if(6===c)throw Error(n(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Nh(a,Y);Z(a,E());return null}
function Oh(a){null!==uh&&0===uh.tag&&0===(G&6)&&Fh();var b=G;G|=1;var c=U.transition,d=D;try{if(U.transition=null,D=1,a)return a()}finally{D=d,U.transition=c,G=b,0===(G&6)&&Xc()}}function Vf(){Wf=eg.current;x(eg)}
function Ih(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;c!==Sa&&(a.timeoutHandle=Sa,Ra(c));if(null!==W)for(c=W.return;null!==c;){var d=c;Sd(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&kc();break;case 3:we();x(B);x(A);Be();break;case 5:ye(d);break;case 4:we();break;case 13:x(J);break;case 19:x(J);break;case 10:hd(d.type._context);break;case 22:case 23:Vf()}c=c.return}F=a;W=a=je(a.current,null);X=Wf=b;Q=0;oh=null;qh=ph=vd=0;Y=rh=null;if(null!==md){for(b=
0;b<md.length;b++)if(c=md[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}md=null}return a}
function Kh(a,b){do{var c=W;try{fd();Ce.current=Oe;if(Fe){for(var d=K.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Fe=!1}Ee=0;M=L=K=null;Ge=!1;He=0;nh.current=null;if(null===c||null===c.return){Q=1;oh=b;W=null;break}a:{var f=a,g=c.return,h=c,k=b;b=X;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,v=m.tag;if(0===(m.mode&1)&&(0===v||11===v||15===v)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var z=Hf(g);if(null!==z){z.flags&=-257;If(z,g,h,f,b);z.mode&1&&Ff(f,l,b);b=z;k=l;var q=b.updateQueue;if(null===q){var N=new Set;N.add(k);b.updateQueue=N}else q.add(k);break a}else{if(0===(b&1)){Ff(f,l,b);Tf();break a}k=Error(n(426))}}else if(I&&h.mode&1){var da=Hf(g);if(null!==da){0===(da.flags&65536)&&(da.flags|=256);If(da,g,h,f,b);ee(k);break a}}f=k;4!==Q&&(Q=2);null===rh?rh=[f]:rh.push(f);k=xf(k,h);h=g;do{switch(h.tag){case 3:h.flags|=
65536;b&=-b;h.lanes|=b;var t=Af(h,k,b);td(h,t);break a;case 1:f=k;var w=h.type,u=h.stateNode;if(0===(h.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ef||!Ef.has(u)))){h.flags|=65536;b&=-b;h.lanes|=b;var V=Df(h,f,b);td(h,V);break a}}h=h.return}while(null!==h)}Ph(c)}catch(wa){b=wa;W===c&&null!==c&&(W=c=c.return);continue}break}while(1)}function Hh(){var a=mh.current;mh.current=Oe;return null===a?Oe:a}
function Tf(){if(0===Q||3===Q||2===Q)Q=4;null===F||0===(vd&268435455)&&0===(ph&268435455)||Bh(F,X)}function Gh(a,b){var c=G;G|=2;var d=Hh();F===a&&X===b||Ih(a,b);do try{Qh();break}catch(e){Kh(a,e)}while(1);fd();G=c;mh.current=d;if(null!==W)throw Error(n(261));F=null;X=0;return Q}function Qh(){for(;null!==W;)Rh(W)}function Jh(){for(;null!==W&&!Hc();)Rh(W)}function Rh(a){var b=Sh(a.alternate,a,Wf);a.memoizedProps=a.pendingProps;null===b?Ph(a):W=b;nh.current=null}
function Ph(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Rf(c,b,Wf),null!==c){W=c;return}}else{c=xg(c,b);if(null!==c){c.flags&=32767;W=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{Q=6;W=null;return}}b=b.sibling;if(null!==b){W=b;return}W=b=a}while(null!==b);0===Q&&(Q=5)}function Nh(a,b){var c=D,d=U.transition;try{U.transition=null,D=1,Th(a,b,c)}finally{U.transition=d,D=c}return null}
function Th(a,b,c){do Fh();while(null!==uh);if(0!==(G&6))throw Error(n(327));var d=a.finishedWork,e=a.finishedLanes;if(null===d)return null;a.finishedWork=null;a.finishedLanes=0;if(d===a.current)throw Error(n(177));a.callbackNode=null;a.callbackPriority=0;var f=d.lanes|d.childLanes;Cc(a,f);a===F&&(W=F=null,X=0);0===(d.subtreeFlags&2064)&&0===(d.flags&2064)||th||(th=!0,Dh(Lc,function(){Fh();return null}));f=0!==(d.flags&15990);if(0!==(d.subtreeFlags&15990)||f){f=U.transition;U.transition=null;var g=
D;D=1;var h=G;G|=4;nh.current=null;Eg(a,d);Ug(a,d,e);Ja(a.containerInfo);a.current=d;Xg(d,a,e);Ic();G=h;D=g;U.transition=f}else a.current=d;th&&(th=!1,uh=a,vh=e);f=a.pendingLanes;0===f&&(Ef=null);Pc(d.stateNode,c);Z(a,E());if(null!==b)for(c=a.onRecoverableError,d=0;d<b.length;d++)c(b[d]);if(Bf)throw Bf=!1,a=Cf,Cf=null,a;0!==(vh&1)&&0!==a.tag&&Fh();f=a.pendingLanes;0!==(f&1)?a===xh?wh++:(wh=0,xh=a):wh=0;Xc();return null}
function Fh(){if(null!==uh){var a=Ec(vh),b=U.transition,c=D;try{U.transition=null;D=16>a?16:a;if(null===uh)var d=!1;else{a=uh;uh=null;vh=0;if(0!==(G&6))throw Error(n(331));var e=G;G|=4;for(S=a.current;null!==S;){var f=S,g=f.child;if(0!==(S.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(S=l;null!==S;){var m=S;switch(m.tag){case 0:case 11:case 15:Fg(8,m,f)}var v=m.child;if(null!==v)v.return=m,S=v;else for(;null!==S;){m=S;var r=m.sibling,z=m.return;Lg(m);if(m===
l){S=null;break}if(null!==r){r.return=z;S=r;break}S=z}}}var q=f.alternate;if(null!==q){var N=q.child;if(null!==N){q.child=null;do{var da=N.sibling;N.sibling=null;N=da}while(null!==N)}}S=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,S=g;else b:for(;null!==S;){f=S;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Fg(9,f,f.return)}var t=f.sibling;if(null!==t){t.return=f.return;S=t;break b}S=f.return}}var w=a.current;for(S=w;null!==S;){g=S;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,S=u;else b:for(g=w;null!==S;){h=S;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Gg(9,h)}}catch(wa){T(h,h.return,wa)}if(h===g){S=null;break b}var V=h.sibling;if(null!==V){V.return=h.return;S=V;break b}S=h.return}}G=e;Xc();if(Oc&&"function"===typeof Oc.onPostCommitFiberRoot)try{Oc.onPostCommitFiberRoot(Nc,a)}catch(wa){}d=!0}return d}finally{D=c,U.transition=b}}return!1}function Uh(a,b,c){b=xf(c,b);b=Af(a,b,1);rd(a,b);b=H();a=Ah(a,1);null!==a&&(Bc(a,1,b),Z(a,b))}
function T(a,b,c){if(3===a.tag)Uh(a,a,c);else for(;null!==b;){if(3===b.tag){Uh(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ef||!Ef.has(d))){a=xf(c,a);a=Df(b,a,1);rd(b,a);a=H();b=Ah(b,1);null!==b&&(Bc(b,1,a),Z(b,a));break}}b=b.return}}
function Gf(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=H();a.pingedLanes|=a.suspendedLanes&c;F===a&&(X&c)===c&&(4===Q||3===Q&&(X&130023424)===X&&500>E()-Vg?Ih(a,0):qh|=c);Z(a,b)}function Vh(a,b){0===b&&(0===(a.mode&1)?b=1:(b=uc,uc<<=1,0===(uc&130023424)&&(uc=4194304)));var c=H();a=Ah(a,b);null!==a&&(Bc(a,b,c),Z(a,c))}function qg(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Vh(a,c)}
function Tg(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(n(314));}null!==d&&d.delete(b);Vh(a,c)}var Sh;
Sh=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||B.current)kd=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return kd=!1,wg(a,b,c);kd=0!==(a.flags&131072)?!0:!1}else kd=!1,I&&0!==(b.flags&1048576)&&Qd(b,Jd,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;var e=jc(b,A.current);jd(b,c);e=Ke(null,b,d,a,e,c);var f=Pe();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?
(b.tag=1,b.memoizedState=null,b.updateQueue=null,C(d)?(f=!0,nc(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,od(b),e.updater=Bd,b.stateNode=e,e._reactInternals=b,Fd(b,d,a,c),b=hg(null,b,d,!0,f,c)):(b.tag=0,I&&f&&Rd(b),R(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Wh(d);a=ad(d,a);switch(e){case 0:b=cg(null,b,d,a,c);break a;case 1:b=gg(null,b,d,
a,c);break a;case 11:b=Yf(null,b,d,a,c);break a;case 14:b=$f(null,b,d,ad(d.type,a),c);break a}throw Error(n(306,d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ad(d,e),cg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ad(d,e),gg(a,b,d,e,c);case 3:a:{ig(b);if(null===a)throw Error(n(387));d=b.pendingProps;f=b.memoizedState;e=f.element;pd(a,b);ud(b,d,null,c);var g=b.memoizedState;d=g.element;if(p&&f.isDehydrated)if(f={element:d,isDehydrated:!1,
cache:g.cache,transitions:g.transitions},b.updateQueue.baseState=f,b.memoizedState=f,b.flags&256){e=Error(n(423));b=jg(a,b,d,c,e);break a}else if(d!==e){e=Error(n(424));b=jg(a,b,d,c,e);break a}else for(p&&(Ud=Nb(b.stateNode.containerInfo),Td=b,I=!0,Wd=null,Vd=!1),c=pe(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{de();if(d===e){b=Zf(a,b,c);break a}R(a,b,d,c)}b=b.child}return b;case 5:return xe(b),null===a&&ae(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,
Oa(d,e)?g=null:null!==f&&Oa(d,f)&&(b.flags|=32),fg(a,b),R(a,b,g,c),b.child;case 6:return null===a&&ae(b),null;case 13:return mg(a,b,c);case 4:return ve(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=oe(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ad(d,e),Yf(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=
b.type._context;e=b.pendingProps;f=b.memoizedProps;g=e.value;gd(b,d,g);if(null!==f)if(Rc(f.value,g)){if(f.children===e.children&&!B.current){b=Zf(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=qd(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=
c);id(f.return,c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(n(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);id(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,jd(b,c),e=ld(e),d=d(e),b.flags|=
1,R(a,b,d,c),b.child;case 14:return d=b.type,e=ad(d,b.pendingProps),e=ad(d.type,e),$f(a,b,d,e,c);case 15:return bg(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ad(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,C(d)?(a=!0,nc(b)):a=!1,jd(b,c),Dd(b,d,e),Fd(b,d,e,c),hg(null,b,d,!0,a,c);case 19:return vg(a,b,c);case 22:return dg(a,b,c)}throw Error(n(156,b.tag));};function Dh(a,b){return Fc(a,b)}
function Xh(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Yd(a,b,c,d){return new Xh(a,b,c,d)}function ag(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Wh(a){if("function"===typeof a)return ag(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===na)return 11;if(a===qa)return 14}return 2}
function je(a,b){var c=a.alternate;null===c?(c=Yd(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function le(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ag(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ia:return ne(c.children,e,f,b);case ja:g=8;e|=8;break;case ka:return a=Yd(12,c,b,e|2),a.elementType=ka,a.lanes=f,a;case oa:return a=Yd(13,c,b,e),a.elementType=oa,a.lanes=f,a;case pa:return a=Yd(19,c,b,e),a.elementType=pa,a.lanes=f,a;case sa:return ng(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case la:g=10;break a;case ma:g=9;break a;case na:g=11;
break a;case qa:g=14;break a;case ra:g=16;d=null;break a}throw Error(n(130,null==a?a:typeof a,""));}b=Yd(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function ne(a,b,c,d){a=Yd(7,a,d,b);a.lanes=c;return a}function ng(a,b,c,d){a=Yd(22,a,d,b);a.elementType=sa;a.lanes=c;a.stateNode={};return a}function ke(a,b,c){a=Yd(6,a,null,b);a.lanes=c;return a}
function me(a,b,c){b=Yd(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function Yh(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=Sa;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=Ac(0);this.expirationTimes=Ac(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Ac(0);this.identifierPrefix=d;this.onRecoverableError=e;p&&(this.mutableSourceEagerHydrationData=
null)}function Zh(a,b,c,d,e,f,g,h,k){a=new Yh(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Yd(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null};od(f);return a}
function $h(a){if(!a)return hc;a=a._reactInternals;a:{if(ya(a)!==a||1!==a.tag)throw Error(n(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(C(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(n(171));}if(1===a.tag){var c=a.type;if(C(c))return mc(a,c,b)}return b}
function ai(a){var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(n(188));a=Object.keys(a).join(",");throw Error(n(268,a));}a=Ba(b);return null===a?null:a.stateNode}function bi(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ci(a,b){bi(a,b);(a=a.alternate)&&bi(a,b)}function di(a){a=Ba(a);return null===a?null:a.stateNode}function ei(){return null}
exports.attemptContinuousHydration=function(a){if(13===a.tag){var b=H();Ad(a,134217728,b);ci(a,134217728)}};exports.attemptHydrationAtCurrentPriority=function(a){if(13===a.tag){var b=H(),c=zd(a);Ad(a,c,b);ci(a,c)}};exports.attemptSynchronousHydration=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=vc(b.pendingLanes);0!==c&&(Dc(b,c|1),Z(b,E()),0===(G&6)&&(sh(),Xc()))}break;case 13:var d=H();Oh(function(){return Ad(a,1,d)});ci(a,1)}};
exports.batchedUpdates=function(a,b){var c=G;G|=1;try{return a(b)}finally{G=c,0===G&&(sh(),Tc&&Xc())}};exports.createComponentSelector=function(a){return{$$typeof:ah,value:a}};exports.createContainer=function(a,b,c,d,e,f,g){return Zh(a,b,!1,null,c,d,e,f,g)};exports.createHasPseudoClassSelector=function(a){return{$$typeof:bh,value:a}};
exports.createHydrationContainer=function(a,b,c,d,e,f,g,h,k){a=Zh(c,d,!0,a,e,f,g,h,k);a.context=$h(null);c=a.current;d=H();e=zd(c);f=qd(d,e);f.callback=void 0!==b&&null!==b?b:null;rd(c,f);a.current.lanes=e;Bc(a,e,d);Z(a,d);return a};exports.createPortal=function(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ha,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}};exports.createRoleSelector=function(a){return{$$typeof:ch,value:a}};
exports.createTestNameSelector=function(a){return{$$typeof:dh,value:a}};exports.createTextSelector=function(a){return{$$typeof:eh,value:a}};exports.deferredUpdates=function(a){var b=D,c=U.transition;try{return U.transition=null,D=16,a()}finally{D=b,U.transition=c}};exports.discreteUpdates=function(a,b,c,d,e){var f=D,g=U.transition;try{return U.transition=null,D=1,a(b,c,d,e)}finally{D=f,U.transition=g,0===G&&sh()}};exports.findAllNodes=kh;
exports.findBoundingRects=function(a,b){if(!bb)throw Error(n(363));b=kh(a,b);a=[];for(var c=0;c<b.length;c++)a.push(db(b[c]));for(b=a.length-1;0<b;b--){c=a[b];for(var d=c.x,e=d+c.width,f=c.y,g=f+c.height,h=b-1;0<=h;h--)if(b!==h){var k=a[h],l=k.x,m=l+k.width,v=k.y,r=v+k.height;if(d>=l&&f>=v&&e<=m&&g<=r){a.splice(b,1);break}else if(!(d!==l||c.width!==k.width||r<f||v>g)){v>f&&(k.height+=v-f,k.y=f);r<g&&(k.height=g-v);a.splice(b,1);break}else if(!(f!==v||c.height!==k.height||m<d||l>e)){l>d&&(k.width+=
l-d,k.x=d);m<e&&(k.width=e-l);a.splice(b,1);break}}}return a};exports.findHostInstance=ai;exports.findHostInstanceWithNoPortals=function(a){a=Aa(a);a=null!==a?Da(a):null;return null===a?null:a.stateNode};exports.findHostInstanceWithWarning=function(a){return ai(a)};exports.flushControlled=function(a){var b=G;G|=1;var c=U.transition,d=D;try{U.transition=null,D=1,a()}finally{D=d,U.transition=c,G=b,0===G&&(sh(),Xc())}};exports.flushPassiveEffects=Fh;exports.flushSync=Oh;
exports.focusWithin=function(a,b){if(!bb)throw Error(n(363));a=gh(a);b=jh(a,b);b=Array.from(b);for(a=0;a<b.length;){var c=b[a++];if(!fb(c)){if(5===c.tag&&hb(c.stateNode))return!0;for(c=c.child;null!==c;)b.push(c),c=c.sibling}}return!1};exports.getCurrentUpdatePriority=function(){return D};
exports.getFindAllNodesFailureDescription=function(a,b){if(!bb)throw Error(n(363));var c=0,d=[];a=[gh(a),0];for(var e=0;e<a.length;){var f=a[e++],g=a[e++],h=b[g];if(5!==f.tag||!fb(f))if(hh(f,h)&&(d.push(ih(h)),g++,g>c&&(c=g)),g<b.length)for(f=f.child;null!==f;)a.push(f,g),f=f.sibling}if(c<b.length){for(a=[];c<b.length;c++)a.push(ih(b[c]));return"findAllNodes was able to match part of the selector:\n  "+(d.join(" > ")+"\n\nNo matching component was found for:\n  ")+a.join(" > ")}return null};
exports.getPublicRootInstance=function(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return Fa(a.child.stateNode);default:return a.child.stateNode}};
exports.injectIntoDevTools=function(a){a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ea.ReactCurrentDispatcher,findHostInstanceByFiber:di,findFiberByHostInstance:a.findFiberByHostInstance||
ei,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"};if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)a=!1;else{var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)a=!0;else{try{Nc=b.inject(a),Oc=b}catch(c){}a=b.checkDCE?!0:!1}}return a};exports.isAlreadyRendering=function(){return!1};
exports.observeVisibleRects=function(a,b,c,d){if(!bb)throw Error(n(363));a=kh(a,b);var e=ib(a,c,d).disconnect;return{disconnect:function(){e()}}};exports.registerMutableSourceForHydration=function(a,b){var c=b._getVersion;c=c(b._source);null==a.mutableSourceEagerHydrationData?a.mutableSourceEagerHydrationData=[b,c]:a.mutableSourceEagerHydrationData.push(b,c)};exports.runWithPriority=function(a,b){var c=D;try{return D=a,b()}finally{D=c}};exports.shouldError=function(){return null};
exports.shouldSuspend=function(){return!1};exports.updateContainer=function(a,b,c,d){var e=b.current,f=H(),g=zd(e);c=$h(c);null===b.context?b.context=c:b.pendingContext=c;b=qd(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);rd(e,b);a=Ad(e,g,f);null!==a&&sd(a,e,g);return g};

    return exports;
};


/***/ }),

/***/ "./node_modules/react-reconciler/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/react-reconciler/constants.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-reconciler-constants.production.min.js */ "./node_modules/react-reconciler/cjs/react-reconciler-constants.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-reconciler/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-reconciler/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-reconciler.production.min.js */ "./node_modules/react-reconciler/cjs/react-reconciler.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-reconciler/node_modules/scheduler/cjs/scheduler.production.min.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-reconciler/node_modules/scheduler/cjs/scheduler.production.min.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var navigator = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"];
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ "./node_modules/react-reconciler/node_modules/scheduler/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-reconciler/node_modules/scheduler/index.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.production.min.js */ "./node_modules/react-reconciler/node_modules/scheduler/cjs/scheduler.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactReduxContext": function() { return /* binding */ ReactReduxContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const ReactReduxContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

if (false) {}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");





function Provider({
  store,
  context,
  children,
  serverState
}) {
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.createSubscription)(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : undefined
    };
  }, [store, serverState]);
  const previousState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => store.getState(), [store]);
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = undefined;
    };
  }, [contextValue, previousState]);
  const Context = context || _Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connect.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/connect.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeConnect": function() { return /* binding */ initializeConnect; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-is */ "./node_modules/react-redux/node_modules/react-is/index.js");
/* harmony import */ var _connect_selectorFactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../connect/selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");
/* harmony import */ var _connect_mapDispatchToProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../connect/mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _connect_mapStateToProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../connect/mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _connect_mergeProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../connect/mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useSyncExternalStore */ "./node_modules/react-redux/es/utils/useSyncExternalStore.js");


const _excluded = ["reactReduxForwardedRef"];

/* eslint-disable valid-jsdoc, @typescript-eslint/no-unused-vars */













let useSyncExternalStore = _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_6__.notInitialized;
const initializeConnect = fn => {
  useSyncExternalStore = fn;
}; // Define some constant arrays just to avoid re-creating these

const EMPTY_ARRAY = [null, 0];
const NO_SUBSCRIPTION_ARRAY = [null, null]; // Attempts to stringify whatever not-really-a-component value we were given
// for logging in an error message

const stringifyComponent = Comp => {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

// This is "just" a `useLayoutEffect`, but with two modifications:
// - we need to fall back to `useEffect` in SSR to avoid annoying warnings
// - we extract this to a separate function to avoid closing over values
//   and causing memory leaks
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => effectFunc(...effectArgs), dependencies);
} // Effect callback, extracted: assign the latest props values to refs for later usage


function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, // actualChildProps: unknown,
childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
} // Effect callback, extracted: subscribe to the Redux store or nearest connected ancestor,
// check for updates after dispatched actions, and trigger re-renders.


function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, // forceComponentUpdateDispatch: React.Dispatch<any>,
additionalSubscribeListener) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return () => {}; // Capture values for checking if and when this component unmounts

  let didUnsubscribe = false;
  let lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    } // TODO We're currently calling getState ourselves here, rather than letting `uSES` do it


    const latestStoreState = store.getState();
    let newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // TODO This is hacky and not how `uSES` is meant to be used
      // Trigger the React `useSyncExternalStore` subscriber

      additionalSubscribeListener();
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
} // Reducer initial state creation for our update reducer


const initStateUpdates = () => EMPTY_ARRAY;

function strictEqual(a, b) {
  return a === b;
}
/**
 * Infers the type of props that a connector will inject into a component.
 */


let hasWarnedAboutDeprecatedPureOption = false;
/**
 * Connects a React component to a Redux store.
 *
 * - Without arguments, just wraps the component, without changing the behavior / props
 *
 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
 * is to override ownProps (as stated in the docs), so what remains is everything that's
 * not a state or dispatch prop
 *
 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
 * should be valid component props, because it depends on mergeProps implementation.
 * As such, it is the user's responsibility to extend ownProps interface from state or
 * dispatch props or both when applicable
 *
 * @param mapStateToProps A function that extracts values from state
 * @param mapDispatchToProps Setup for dispatching actions
 * @param mergeProps Optional callback to merge state and dispatch props together
 * @param options Options for configuring the connection
 *
 */

function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_7__["default"],
  areStatePropsEqual = _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_7__["default"],
  areMergedPropsEqual = _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_7__["default"],
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = _Context__WEBPACK_IMPORTED_MODULE_5__.ReactReduxContext
} = {}) {
  if (false) {}

  const Context = context;
  const initMapStateToProps = (0,_connect_mapStateToProps__WEBPACK_IMPORTED_MODULE_8__.mapStateToPropsFactory)(mapStateToProps);
  const initMapDispatchToProps = (0,_connect_mapDispatchToProps__WEBPACK_IMPORTED_MODULE_9__.mapDispatchToPropsFactory)(mapDispatchToProps);
  const initMergeProps = (0,_connect_mergeProps__WEBPACK_IMPORTED_MODULE_10__.mergePropsFactory)(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);

  const wrapWithConnect = WrappedComponent => {
    if (false) {}

    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      // @ts-ignore
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };

    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        const {
          reactReduxForwardedRef
        } = props,
              wrapperProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_11__["default"])(props, _excluded);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]);
      const ContextToUse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && // @ts-ignore
        (0,react_is__WEBPACK_IMPORTED_MODULE_2__.isContextConsumer)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (false) {} // Based on the previous check, one of these must be true


      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return (0,_connect_selectorFactory__WEBPACK_IMPORTED_MODULE_12__["default"])(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        const subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_3__.createSubscription)(store, didStoreComeFromProps ? undefined : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]); // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.

      const overriddenContextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_13__["default"])({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // Set up refs to coordinate values between the subscription effect and the render logic

      const lastChildProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
      const lastWrapperProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(wrapperProps);
      const childPropsFromStoreUpdate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
      const renderIsScheduled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
      const isProcessingDispatch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
      const isMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
      const latestSubscriptionCallbackError = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
      (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        const selector = () => {
          // Tricky logic here:
          // - This render may have been triggered by a Redux store update that produced new child props
          // - However, we may have gotten new wrapper props after that
          // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
          // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
          // So, we'll use the child props from store update only if the wrapper props are the same as last time.
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          } // TODO We're reading the store directly in render() here. Bad idea?
          // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
          // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
          // to determine what the child props should be.


          return childPropsSelector(store.getState(), wrapperProps);
        };

        return selector;
      }, [store, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      const subscribeForReact = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        const subscribe = reactListener => {
          if (!subscription) {
            return () => {};
          }

          return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore
          childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
        };

        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      let actualChildProps;

      try {
        actualChildProps = useSyncExternalStore( // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
        subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
        // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
        actualChildPropsSelector, getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector);
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          ;
          err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`;
        }

        throw err;
      }

      (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
        latestSubscriptionCallbackError.current = undefined;
        childPropsFromStoreUpdate.current = undefined;
        lastChildProps.current = actualChildProps;
      }); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      const renderedWrappedComponent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        return (
          /*#__PURE__*/
          // @ts-ignore
          react__WEBPACK_IMPORTED_MODULE_1__.createElement(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_13__["default"])({}, actualChildProps, {
            ref: reactReduxForwardedRef
          }))
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      const renderedChild = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }

    const _Connect = react__WEBPACK_IMPORTED_MODULE_1__.memo(ConnectFunction);

    // Add a hacky cast to get the right output type
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      const _forwarded = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function forwardConnectRef(props, ref) {
        // @ts-ignore
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Connect, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_13__["default"])({}, props, {
          reactReduxForwardedRef: ref
        }));
      });

      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(Connect, WrappedComponent);
  };

  return wrapWithConnect;
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (connect);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/invalidArgFactory.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/invalidArgFactory.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInvalidArgFactory": function() { return /* binding */ createInvalidArgFactory; }
/* harmony export */ });
function createInvalidArgFactory(arg, name) {
  return (dispatch, options) => {
    throw new Error(`Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapDispatchToPropsFactory": function() { return /* binding */ mapDispatchToPropsFactory; }
/* harmony export */ });
/* harmony import */ var _utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/bindActionCreators */ "./node_modules/react-redux/es/utils/bindActionCreators.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");
/* harmony import */ var _invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invalidArgFactory */ "./node_modules/react-redux/es/connect/invalidArgFactory.js");



function mapDispatchToPropsFactory(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(dispatch => // @ts-ignore
  (0,_utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_1__["default"])(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(dispatch => ({
    dispatch
  })) : typeof mapDispatchToProps === 'function' ? // @ts-ignore
  (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : (0,_invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__.createInvalidArgFactory)(mapDispatchToProps, 'mapDispatchToProps');
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapStateToPropsFactory": function() { return /* binding */ mapStateToPropsFactory; }
/* harmony export */ });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");
/* harmony import */ var _invalidArgFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalidArgFactory */ "./node_modules/react-redux/es/connect/invalidArgFactory.js");


function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(() => ({})) : typeof mapStateToProps === 'function' ? // @ts-ignore
  (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : (0,_invalidArgFactory__WEBPACK_IMPORTED_MODULE_1__.createInvalidArgFactory)(mapStateToProps, 'mapStateToProps');
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergePropsFactory": function() { return /* binding */ mergePropsFactory; }
/* harmony export */ });
/* unused harmony exports defaultMergeProps, wrapMergePropsFunc */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _invalidArgFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalidArgFactory */ "./node_modules/react-redux/es/connect/invalidArgFactory.js");



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  // @ts-ignore
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, {
    displayName,
    areMergedPropsEqual
  }) {
    let hasRunOnce = false;
    let mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false) {}
      }

      return mergedProps;
    };
  };
}
function mergePropsFactory(mergeProps) {
  return !mergeProps ? () => defaultMergeProps : typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : (0,_invalidArgFactory__WEBPACK_IMPORTED_MODULE_1__.createInvalidArgFactory)(mergeProps, 'mergeProps');
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ finalPropsSelectorFactory; }
/* harmony export */ });
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

const _excluded = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
  areStatesEqual,
  areOwnPropsEqual,
  areStatePropsEqual
}) {
  let hasRunAtLeastOnce = false;
  let state;
  let ownProps;
  let stateProps;
  let dispatchProps;
  let mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    const nextStateProps = mapStateToProps(state, ownProps);
    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    const stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
// TODO: Add more comments
// The selector returned by selectorFactory will memoize its results,
// allowing connect's shouldComponentUpdate to return false if final
// props have not changed.
function finalPropsSelectorFactory(dispatch, _ref) {
  let {
    initMapStateToProps,
    initMapDispatchToProps,
    initMergeProps
  } = _ref,
      options = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  const mapStateToProps = initMapStateToProps(dispatch, options);
  const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  const mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapMapToPropsConstant": function() { return /* binding */ wrapMapToPropsConstant; },
/* harmony export */   "wrapMapToPropsFunc": function() { return /* binding */ wrapMapToPropsFunc; }
/* harmony export */ });
/* unused harmony export getDependsOnOwnProps */

function wrapMapToPropsConstant( // * Note:
//  It seems that the dispatch argument
//  could be a dispatch function in some cases (ex: whenMapDispatchToPropsIsMissing)
//  and a state object in some others (ex: whenMapStateToPropsIsMissing)
// eslint-disable-next-line no-unused-vars
getConstant) {
  return function initConstantSelector(dispatch) {
    const constant = getConstant(dispatch);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
// TODO Can this get pulled out so that we can subscribe directly to the store if we don't need ownProps?

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, {
    displayName
  }) {
    const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, undefined);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      let props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/exports.js":
/*!************************************************!*\
  !*** ./node_modules/react-redux/es/exports.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Provider": function() { return /* reexport safe */ _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var _components_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connect */ "./node_modules/react-redux/es/components/connect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");










/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony exports createDispatchHook, useDispatch */
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext) {
  const useStore = // @ts-ignore
  context === _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext ? _useStore__WEBPACK_IMPORTED_MODULE_1__.useStore : (0,_useStore__WEBPACK_IMPORTED_MODULE_1__.createStoreHook)(context);
  return function useDispatch() {
    const store = useStore(); // @ts-ignore

    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

const useDispatch = /*#__PURE__*/createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useReduxContext": function() { return /* binding */ useReduxContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");



/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */
function useReduxContext() {
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext);

  if (false) {}

  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeUseSelector": function() { return /* binding */ initializeUseSelector; }
/* harmony export */ });
/* unused harmony exports createSelectorHook, useSelector */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useSyncExternalStore */ "./node_modules/react-redux/es/utils/useSyncExternalStore.js");




let useSyncExternalStoreWithSelector = _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_3__.notInitialized;
const initializeUseSelector = fn => {
  useSyncExternalStoreWithSelector = fn;
};

const refEquality = (a, b) => a === b;
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext) {
  const useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__.useReduxContext : () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  return function useSelector(selector, equalityFn = refEquality) {
    if (false) {}

    const {
      store,
      subscription,
      getServerState
    } = useReduxContext();
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, selector, equalityFn);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

const useSelector = /*#__PURE__*/createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStoreHook": function() { return /* binding */ createStoreHook; },
/* harmony export */   "useStore": function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext) {
  const useReduxContext = // @ts-ignore
  context === _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__.useReduxContext : () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  return function useStore() {
    const {
      store
    } = useReduxContext(); // @ts-ignore

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

const useStore = /*#__PURE__*/createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Provider": function() { return /* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.Provider; }
/* harmony export */ });
/* harmony import */ var use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sync-external-store/shim */ "./node_modules/use-sync-external-store/shim/index.js");
/* harmony import */ var use_sync_external_store_shim_with_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-sync-external-store/shim/with-selector */ "./node_modules/use-sync-external-store/shim/with-selector.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony import */ var _components_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/connect */ "./node_modules/react-redux/es/components/connect.js");
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exports */ "./node_modules/react-redux/es/exports.js");
// The primary entry point assumes we're working with standard ReactDOM/RN, but
// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
// Because of that, the useSyncExternalStore compat shim is needed.






(0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_3__.initializeUseSelector)(use_sync_external_store_shim_with_selector__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStoreWithSelector);
(0,_components_connect__WEBPACK_IMPORTED_MODULE_4__.initializeConnect)(use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore); // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

(0,_utils_batch__WEBPACK_IMPORTED_MODULE_5__.setBatch)(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_2__.unstable_batchedUpdates);



/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSubscription": function() { return /* binding */ createSubscription; }
/* harmony export */ });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  const batch = (0,_batch__WEBPACK_IMPORTED_MODULE_0__.getBatch)();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },

    notify() {
      batch(() => {
        let listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },

    get() {
      let listeners = [];
      let listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },

    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }

  };
}

const nullListeners = {
  notify() {},

  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setBatch": function() { return /* binding */ setBatch; },
/* harmony export */   "getBatch": function() { return /* binding */ getBatch; }
/* harmony export */ });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

let batch = defaultNoopBatch; // Allow injecting another batching function later

const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

const getBatch = () => batch;

/***/ }),

/***/ "./node_modules/react-redux/es/utils/bindActionCreators.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/bindActionCreators.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ bindActionCreators; }
/* harmony export */ });
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};

  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
    }
  }

  return boundActionCreators;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unstable_batchedUpdates": function() { return /* reexport safe */ react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates; }
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ shallowEqual; }
/* harmony export */ });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsomorphicLayoutEffect": function() { return /* binding */ useIsomorphicLayoutEffect; }
/* harmony export */ });
/* unused harmony export canUseDOM */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var window = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"];
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed
// Matches logic in React's `shared/ExecutionEnvironment` file

const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
const useIsomorphicLayoutEffect = canUseDOM ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useSyncExternalStore.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useSyncExternalStore.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notInitialized": function() { return /* binding */ notInitialized; }
/* harmony export */ });
const notInitialized = () => {
  throw new Error('uSES not initialized!');
};

/***/ }),

/***/ "./node_modules/react-redux/node_modules/react-is/cjs/react-is.production.min.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/cjs/react-is.production.min.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}__webpack_unused_export__=h;__webpack_unused_export__=g;__webpack_unused_export__=b;__webpack_unused_export__=l;__webpack_unused_export__=d;__webpack_unused_export__=q;__webpack_unused_export__=p;__webpack_unused_export__=c;__webpack_unused_export__=f;__webpack_unused_export__=e;__webpack_unused_export__=m;
__webpack_unused_export__=n;__webpack_unused_export__=function(){return!1};__webpack_unused_export__=function(){return!1};exports.isContextConsumer=function(a){return v(a)===h};__webpack_unused_export__=function(a){return v(a)===g};__webpack_unused_export__=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};__webpack_unused_export__=function(a){return v(a)===l};__webpack_unused_export__=function(a){return v(a)===d};__webpack_unused_export__=function(a){return v(a)===q};__webpack_unused_export__=function(a){return v(a)===p};
__webpack_unused_export__=function(a){return v(a)===c};__webpack_unused_export__=function(a){return v(a)===f};__webpack_unused_export__=function(a){return v(a)===e};__webpack_unused_export__=function(a){return v(a)===m};__webpack_unused_export__=function(a){return v(a)===n};
__webpack_unused_export__=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};__webpack_unused_export__=v;


/***/ }),

/***/ "./node_modules/react-redux/node_modules/react-is/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/index.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-is.production.min.js */ "./node_modules/react-redux/node_modules/react-is/cjs/react-is.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */
function createThunkMiddleware(extraArgument) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  var middleware = function middleware(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
        // If this "action" is really a function, call it and return the result.
        if (typeof action === 'function') {
          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
          return action(dispatch, getState, extraArgument);
        } // Otherwise, pass the action down the middleware chain as usual


        return next(action);
      };
    };
  };

  return middleware;
}

var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks

thunk.withExtraArgument = createThunkMiddleware;
/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyMiddleware": function() { return /* binding */ applyMiddleware; },
/* harmony export */   "combineReducers": function() { return /* binding */ combineReducers; },
/* harmony export */   "compose": function() { return /* binding */ compose; },
/* harmony export */   "createStore": function() { return /* binding */ createStore; }
/* harmony export */ });
/* unused harmony exports __DO_NOT_USE__ActionTypes, bindActionCreators, legacy_createStore */
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/redux/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (false) {}

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( true ? formatProdErrorMessage(0) : 0);
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(1) : 0);
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( true ? formatProdErrorMessage(2) : 0);
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 0);
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( true ? formatProdErrorMessage(4) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 0);
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 0);
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : 0);
    }

    if (typeof action.type === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(8) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 0);
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(10) : 0);
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : 0);
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = createStore;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(12) : 0);
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(13) : 0);
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : 0);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : 0);
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( true ? formatProdErrorMessage(15) : 0);
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}




/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var window = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"];
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(/*! react */ "./node_modules/react/index.js");function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;


/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h=__webpack_require__(/*! react */ "./node_modules/react/index.js"),n=__webpack_require__(/*! use-sync-external-store/shim */ "./node_modules/use-sync-external-store/shim/index.js");function p(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q="function"===typeof Object.is?Object.is:p,r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;
exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r(a,c[0],c[1]);
u(function(){f.hasValue=!0;f.value=d},[d]);w(d);return d};


/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/index.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim.production.min.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/with-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/with-selector.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim/with-selector.production.min.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),

/***/ "./node_modules/redux/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/redux/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/redux/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/redux/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/redux/node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectSpread2; }
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/redux/node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

/***/ }),

/***/ "./node_modules/redux/node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/redux/node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/redux/node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/redux/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/redux/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/redux/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/redux/node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/redux/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!******************************************************************************!*\
  !*** ./node_modules/redux/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/app.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;
//# sourceMappingURL=app.js.map