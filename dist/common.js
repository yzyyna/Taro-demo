"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "publicityGetRichText": function() { return /* binding */ publicityGetRichText; },
/* harmony export */   "addCustomer": function() { return /* binding */ addCustomer; },
/* harmony export */   "login": function() { return /* binding */ login; },
/* harmony export */   "toBePartner": function() { return /* binding */ toBePartner; }
/* harmony export */ });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http */ "./src/services/http.ts");
/**
 * api
 * @author demon3443002624@outlook.com
 */


var publicityGetRichText = function publicityGetRichText() {
  return _http__WEBPACK_IMPORTED_MODULE_0__["default"].post("/wx/api/index/leafletData");
};
var addCustomer = function addCustomer(p) {
  return _http__WEBPACK_IMPORTED_MODULE_0__["default"].post("/wx/api/clue/add", p);
};
var login = function login(p) {
  return _http__WEBPACK_IMPORTED_MODULE_0__["default"].post("/wx/api/auth/login", p);
};
var toBePartner = function toBePartner(p) {
  return _http__WEBPACK_IMPORTED_MODULE_0__["default"].post("/wx/api/wx_partner/apply", p);
};

/***/ }),

/***/ "./src/services/base-url.ts":
/*!**********************************!*\
  !*** ./src/services/base-url.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var getBaseUrl = function getBaseUrl() {
  var BASE_URL = "";
  if (true) {
    // 开发环境
    BASE_URL = "http://192.168.110.133";
    console.info("*** getBaseUrl ***\nprocess.env.NODE_ENV:", "development");
  } else {}
  return BASE_URL;
};
/* harmony default export */ __webpack_exports__["default"] = (getBaseUrl);

/***/ }),

/***/ "./src/services/config.ts":
/*!********************************!*\
  !*** ./src/services/config.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTTP_STATUS": function() { return /* binding */ HTTP_STATUS; }
/* harmony export */ });
var HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
};

/***/ }),

/***/ "./src/services/http.ts":
/*!******************************!*\
  !*** ./src/services/http.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _base_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-url */ "./src/services/base-url.ts");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interceptors */ "./src/services/interceptors.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);



_interceptors__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(function (interceptorItem) {
  return (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.addInterceptor)(interceptorItem);
});
function baseOptions(params) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
  var url = params.url,
    data = params.data;
  var contentType = "application/json";
  var BASE_URL = (0,_base_url__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var option = {
    url: BASE_URL + url,
    data: data,
    method: method,
    // 请求超时时间:20s
    timeout: 20000,
    header: {
      "content-type": contentType
      // TODO 暂无登录鉴权
      // 'Authorization': Taro.getStorageSync('Authorization')
    }
  };

  contentType = params.contentType || contentType;
  return (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.request)(option);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var option = {
      url: url,
      data: data
    };
    return baseOptions(option);
  },
  post: function post(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "application/json";
    var params = {
      url: url,
      data: data,
      contentType: contentType
    };
    return baseOptions(params, "POST");
  },
  put: function put(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var option = {
      url: url,
      data: data
    };
    return baseOptions(option, "PUT");
  },
  delete: function _delete(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var option = {
      url: url,
      data: data
    };
    return baseOptions(option, "DELETE");
  }
});

/***/ }),

/***/ "./src/services/interceptors.ts":
/*!**************************************!*\
  !*** ./src/services/interceptors.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/services/utils.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/**
 * 洋葱模型拦截器
 * @author demon3443002624@outlook.com
 */




var customInterceptor = function customInterceptor(chain) {
  var requestParams = chain.requestParams;
  return chain.proceed(requestParams).then(function (res) {
    // 只要请求成功，不管返回什么状态码，都走这个回调
    if (res.statusCode === _config__WEBPACK_IMPORTED_MODULE_1__.HTTP_STATUS.NOT_FOUND) {
      return Promise.reject("*** 请求资源不存在 ***");
    } else if (res.statusCode === _config__WEBPACK_IMPORTED_MODULE_1__.HTTP_STATUS.BAD_GATEWAY) {
      return Promise.reject("*** 服务端出现了问题 ***");
    } else if (res.statusCode === _config__WEBPACK_IMPORTED_MODULE_1__.HTTP_STATUS.FORBIDDEN) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pageToLogin)();
      (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.setStorageSync)("Authorization", "");
      return Promise.reject("*** 没有权限访问 ***");
    } else if (res.statusCode === _config__WEBPACK_IMPORTED_MODULE_1__.HTTP_STATUS.AUTHENTICATE) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pageToLogin)();
      (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.setStorageSync)("Authorization", "");
      return Promise.reject("*** 需要鉴权 ***");
    } else if (res.statusCode === _config__WEBPACK_IMPORTED_MODULE_1__.HTTP_STATUS.SUCCESS) {
      return res.data;
    }
  });
};

// Taro 提供了两个内置拦截器,logInterceptor - 用于打印请求相关信息,timeoutInterceptor - 在请求超时时抛出错误
var interceptors = [customInterceptor, _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.interceptors.logInterceptor, _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.interceptors.timeoutInterceptor];
/* harmony default export */ __webpack_exports__["default"] = (interceptors);

/***/ }),

/***/ "./src/services/keys.ts":
/*!******************************!*\
  !*** ./src/services/keys.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openidStorageKey": function() { return /* binding */ openidStorageKey; }
/* harmony export */ });
/* unused harmony export txMapKey */
var openidStorageKey = "FPSS_OPENID";
var txMapKey = "CK5BZ-3C63I-UQCG2-UGFI7-NCK25-FCBBI";

/***/ }),

/***/ "./src/services/utils.ts":
/*!*******************************!*\
  !*** ./src/services/utils.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageToLogin": function() { return /* binding */ pageToLogin; }
/* harmony export */ });
/* unused harmony exports getCurrentPageUrl, locationPicker */
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/**
 * common tools
 * @author demon3443002624@outlook.com
 */


var getCurrentPageUrl = function getCurrentPageUrl() {
  var pages = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.getCurrentPages)();
  var currentPage = pages[pages.length - 1];
  var url = currentPage.route;
  return url;
};

// TODO 暂无登录鉴权
var pageToLogin = function pageToLogin() {
  var path = getCurrentPageUrl();
  if (!(path !== null && path !== void 0 && path.includes("login"))) {
    (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.navigateTo)({
      url: "/pages/index/index"
    });
  }
};

/**
 * 小程序地图选点插件
 * @author demon3443002624@outlook.com
 * @description https://lbs.qq.com/miniProgram/plugin/pluginGuide/locationPicker
 */

var locationPicker = function locationPicker(p) {
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.navigateTo)({
    url: "plugin://chooseLocation/index?key=" + p.key + "&referer=" + p.referer + "&location=" + p.location + "&category=" + p.category
  });
};

/***/ })

}]);
//# sourceMappingURL=common.js.map