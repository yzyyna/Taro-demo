"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/enter-customer-information/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/enter-customer-information/index.tsx":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/enter-customer-information/index.tsx ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ enterCustomerInformation; }
/* harmony export */ });
/* harmony import */ var E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _agreement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agreement */ "./src/pages/enter-customer-information/agreement.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/api */ "./src/services/api.ts");
/* harmony import */ var _services_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/keys */ "./src/services/keys.ts");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


/**
 * 录入合伙人页面
 * @author demon3443002624@outlook.com
 */










// const chooseLocation = requirePlugin("chooseLocation");


function enterCustomerInformation() {
  // React Hook must be top call
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = (0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    address = _useState2[0],
    setAddress = _useState2[1];
  // Must initial this state *** 避免更新 state 时 ts 报错找不着参数
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: "",
      phone: "",
      scene: "",
      power: "",
      rentTime: ""
    }),
    _useState4 = (0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    form = _useState4[0],
    setForm = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState5, 2),
    isOpened = _useState6[0],
    setIsOpened = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = (0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState7, 2),
    modalTitle = _useState8[0],
    setModalTitle = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = (0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState9, 2),
    modalContent = _useState10[0],
    setModalContent = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = (0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState11, 2),
    radioCheckedAgreement = _useState12[0],
    setRadioCheckedAgreement = _useState12[1];
  var selector = ["工地用电", "工业用电", "展会用电", "演唱会用电", "其他"];
  var selectorRentTime = [];
  var imageSrcLocation = __webpack_require__(/*! ../../../src/assets/icon/select-location.png */ "./src/assets/icon/select-location.png");
  var imageSrcLocationSize = "28px";
  var lpShowToast = function lpShowToast(title) {
    (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.showToast)({
      title: title,
      icon: "error"
    });
  };
  var judgeFormValid = function judgeFormValid() {
    var result = true;
    !form.name && (lpShowToast("请输入姓名"), result = false);
    !form.phone && (lpShowToast("请输入手机号码"), result = false);
    return result;
  };
  var onSubmit = function onSubmit() {
    var openid = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.getStorageSync)(_services_keys__WEBPACK_IMPORTED_MODULE_6__.openidStorageKey);
    var submitForm = (0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, address), form), {}, {
      openid: openid,
      term: form.rentTime
    });
    (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.showLoading)({
      title: "数据提交中...",
      mask: true
    });
    if (judgeFormValid()) {
      if (radioCheckedAgreement) {
        (0,_services_api__WEBPACK_IMPORTED_MODULE_3__.addCustomer)((0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, submitForm)).then(function () {
          (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.showToast)({
            title: "提交成功"
          });
        }).finally(function () {
          // 微信文档:Taro.showLoading 和 Taro.showToast 同时只能显示一个,所以调不调用 hideLoading 都无所吊谓
          (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.hideLoading)();
        });
      } else {
        (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.showToast)({
          title: "请查看同意《用户服务协议》《隐私政策》等条款",
          icon: "none"
        });
      }
    }
  };
  var onChangeFrom = {
    name: function name(_name) {
      setForm((0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, form), {}, {
        name: _name
      }));
      return _name;
    },
    phone: function phone(_phone) {
      setForm((0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, form), {}, {
        phone: _phone
      }));
      return _phone;
    },
    power: function power(_power) {
      setForm((0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, form), {}, {
        power: _power
      }));
      return _power;
    },
    scene: function scene(e) {
      var _e$detail;
      var value = Number(e === null || e === void 0 ? void 0 : (_e$detail = e.detail) === null || _e$detail === void 0 ? void 0 : _e$detail.value);
      setForm((0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, form), {}, {
        scene: selector[value]
      }));
    },
    rentTime: function rentTime(e) {
      var _e$detail2;
      var value = Number(e === null || e === void 0 ? void 0 : (_e$detail2 = e.detail) === null || _e$detail2 === void 0 ? void 0 : _e$detail2.value);
      setForm((0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,E_Projects_Taro_demo_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, form), {}, {
        rentTime: selectorRentTime[value]
      }));
    }
  };
  var onClickSelectAddress = function onClickSelectAddress() {
    // locationPicker({
    //   key: txMapKey,
    //   referer: "fortrust-panda",
    //   location: "",
    //   category: "",
    // });
  };
  var onClickShowAgreement = function onClickShowAgreement(type) {
    setIsOpened(true);
    if (type === "agreement") {
      setModalTitle("《用户服务协议》");
      setModalContent(_agreement__WEBPACK_IMPORTED_MODULE_1__["default"].agreement);
    }
    if (type === "privacy") {
      setModalTitle("《隐私政策》");
      setModalContent(_agreement__WEBPACK_IMPORTED_MODULE_1__["default"].privacy);
    }
  };
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.useDidShow)(function () {
    // const location = chooseLocation.getLocation();
    // location &&
    //   setAddress({
    //     province: location?.province,
    //     city: location?.city,
    //     address: location?.address,
    //   });
  });
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.useUnload)(function () {
    // chooseLocation.setLocation(null);
  });
  for (var i = 1; i < 13; i++) {
    selectorRentTime.push(i + "个月");
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
    className: "index",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtForm, {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtInput, {
        title: "\u59D3\u540D",
        name: "name",
        required: true,
        value: form === null || form === void 0 ? void 0 : form.name,
        type: "text",
        placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D",
        focus: true,
        onChange: onChangeFrom.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtInput, {
        title: "\u624B\u673A\u53F7",
        name: "phone",
        required: true,
        value: form === null || form === void 0 ? void 0 : form.phone,
        type: "phone",
        placeholder: "\u8BF7\u8F93\u5165\u8054\u7CFB\u65B9\u5F0F",
        onChange: onChangeFrom.phone
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtInput, {
        title: "\u9700\u6C42\u529F\u80FD(kW)",
        name: "power",
        value: form === null || form === void 0 ? void 0 : form.power,
        type: "number",
        placeholder: "\u8BF7\u8F93\u5165\u9700\u6C42\u529F\u7387",
        onChange: onChangeFrom.power
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "at-input-simulation",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Picker, {
          name: "scene",
          mode: "selector",
          range: selector,
          onChange: onChangeFrom.scene,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtList, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtListItem, {
              title: "\u7528\u7535\u573A\u666F",
              extraText: form === null || form === void 0 ? void 0 : form.scene
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "at-input-simulation",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Picker, {
          name: "rentTime",
          mode: "selector",
          range: selectorRentTime,
          onChange: onChangeFrom.rentTime,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtList, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtListItem, {
              title: "\u79DF\u8D41\u65F6\u957F",
              extraText: form === null || form === void 0 ? void 0 : form.rentTime
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "rent-location-view at-input",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          style: {
            width: "172rpx"
          },
          children: "\u79DF\u8D41\u5730\u5740"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Input, {
          name: "rentAddress",
          type: "text",
          placeholder: "\u70B9\u51FB\u53F3\u4FA7\u56FE\u6807\u9009\u62E9",
          disabled: true,
          value: address === null || address === void 0 ? void 0 : address.address
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
          style: {
            width: imageSrcLocationSize,
            height: imageSrcLocationSize
          },
          mode: "aspectFit",
          onClick: onClickSelectAddress,
          src: imageSrcLocation
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "at-input",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          children: "\u9884\u4F30\u8D39\u7528:xxxx\u5143/\u6708,\u5408\u8BA1:xxxx\u5143/\u6708"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "at-input describe",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          children: "\u9884\u4F30\u8D39\u7528\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u4F5C\u4E3A\u6700\u7EC8\u5408\u540C\u4EF7\u683C\u3002"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          children: "\u9884\u4F30\u8D39\u7528\u4E3A\u88F8\u673A\u8D39\u7528\uFF0C\u4E0D\u5305\u62EC\u8FD0\u8F93\u3001\u540A\u88C5\u3001\u71C3\u6CB9\u3001\u503C\u5B88\u4EBA\u5458\u76F8\u5173\u8D39\u7528\u3002"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          children: "\u8FD0\u8F93\u3001\u540A\u88C5\u3001\u71C3\u6CB9\u4EE5\u5B9E\u9645\u53D1\u751F\u60C5\u51B5\u4E3A\u51C6\uFF0C\u7531\u5BA2\u6237\u627F\u62C5\u3002"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "user-agreement",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Radio, {
          checked: radioCheckedAgreement,
          onClick: function onClick() {
            setRadioCheckedAgreement(!radioCheckedAgreement);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          children: ["\u672C\u4EBA\u5DF2\u9605\u8BFB\u5E76\u540C\u610F", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: "click-text",
            onClick: function onClick() {
              return onClickShowAgreement("agreeent");
            },
            children: "\u300A\u7528\u6237\u670D\u52A1\u534F\u8BAE\u300B"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            className: "click-text",
            onClick: function onClick() {
              return onClickShowAgreement("privacy");
            },
            children: "\u300A\u9690\u79C1\u653F\u7B56\u300B"
          }), "\u7B49\u6761\u6B3E\u3002"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "btn-view",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtButton, {
          type: "primary",
          onClick: onSubmit,
          children: "\u63D0\u4EA4\u9700\u6C42"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtModal, {
      isOpened: isOpened,
      className: "modal-agreement",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtModalHeader, {
        children: modalTitle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtModalContent, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.RichText, {
          nodes: modalContent
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtModalAction, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          onClick: function onClick() {
            setIsOpened(false);
          },
          children: "\u5173\u95ED"
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/enter-customer-information/agreement.ts":
/*!***********************************************************!*\
  !*** ./src/pages/enter-customer-information/agreement.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__["default"] = ({
  agreement: "\n\u4E00\u3001\u603B\u5219\n1.1 \u672C\u534F\u8BAE\u662F\u7531 \u53D1\u7535\u718A\u732B\u4E91\u79DF\u8D41\u5E73\u53F0\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u672C\u5E73\u53F0\u201D\uFF09\u4E0E\u4F7F\u7528\u672C\u5E73\u53F0\u670D\u52A1\u7684\u7528\u6237\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u7528\u6237\u201D\uFF09\u6240\u8BA2\u7ACB\u7684\u534F\u8BAE\u3002\n1.2 \u7528\u6237\u5728\u4F7F\u7528\u672C\u5E73\u53F0\u63D0\u4F9B\u7684\u5404\u9879\u670D\u52A1\u4E4B\u524D\uFF0C\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u672C\u534F\u8BAE\u7684\u6240\u6709\u6761\u6B3E\u3002\u5982\u7528\u6237\u4E0D\u540C\u610F\u672C\u534F\u8BAE\u4E2D\u4EFB\u4F55\u6761\u6B3E\u6216\u5176\u66F4\u65B0\u7248\u672C\uFF0C\u5219\u5E94\u7ACB\u5373\u505C\u6B62\u4F7F\u7528\u672C\u5E73\u53F0\u670D\u52A1\u3002\n1.3 \u7528\u6237\u5728\u4F7F\u7528\u672C\u5E73\u53F0\u670D\u52A1\u65F6\uFF0C\u5FC5\u987B\u9075\u5B88\u4E2D\u56FD\u6709\u5173\u6CD5\u5F8B\u6CD5\u89C4\uFF0C\u5C0A\u91CD\u5176\u4ED6\u7528\u6237\u7684\u5408\u6CD5\u6743\u76CA\uFF0C\u5E76\u627F\u62C5\u56E0\u81EA\u5DF1\u884C\u4E3A\u4EA7\u751F\u7684\u5168\u90E8\u8D23\u4EFB\u3002\n\u4E8C\u3001\u670D\u52A1\u5185\u5BB9\n2.1 \u672C\u5E73\u53F0\u4E3A\u7528\u6237\u63D0\u4F9B\u67F4\u6CB9\u53D1\u52A8\u673A\u79DF\u8D41\u670D\u52A1\uFF0C\u4EE5\u53CA\u57FA\u4E8E\u8BE5\u79DF\u8D41\u670D\u52A1\u6269\u5C55\u76F8\u5173\u7684\u8FD0\u8425\u3001\u8FD0\u7EF4\u7B49\u670D\u52A1\u3002\n2.2 \u672C\u5E73\u53F0\u5C06\u6839\u636E\u7528\u6237\u7684\u9700\u6C42\u63D0\u4F9B\u76F8\u5E94\u7684\u670D\u52A1\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u79DF\u8D41\u670D\u52A1\u3001\u7528\u6237\u63A8\u5E7F\u3001\u79DF\u8D41\u7BA1\u7406\u7B49\u3002\n2.3 \u672C\u5E73\u53F0\u5C06\u5B9A\u671F\u66F4\u65B0\u548C\u6539\u8FDB\u670D\u52A1\u5185\u5BB9\uFF0C\u4EE5\u4FDD\u8BC1\u670D\u52A1\u8D28\u91CF\u3002\n\u4E09\u3001\u7528\u6237\u6743\u5229\u548C\u4E49\u52A1\n3.1 \u7528\u6237\u6709\u6743\u968F\u65F6\u4F7F\u7528\u672C\u5E73\u53F0\u63D0\u4F9B\u7684\u670D\u52A1\u3002\n3.2 \u7528\u6237\u5E94\u5F53\u81EA\u884C\u627F\u62C5\u56E0\u4F7F\u7528\u672C\u5E73\u53F0\u670D\u52A1\u800C\u4EA7\u751F\u7684\u5168\u90E8\u8D39\u7528\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u7F51\u7EDC\u901A\u4FE1\u8D39\u7528\u7B49\u3002\n3.3 \u7528\u6237\u5E94\u5F53\u81EA\u884C\u627F\u62C5\u56E0\u4F7F\u7528\u672C\u5E73\u53F0\u670D\u52A1\u800C\u53EF\u80FD\u4EA7\u751F\u7684\u98CE\u9669\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4FE1\u606F\u6CC4\u9732\u3001\u7CFB\u7EDF\u6545\u969C\u7B49\u3002\n3.4 \u7528\u6237\u4E0D\u5F97\u5229\u7528\u672C\u5E73\u53F0\u670D\u52A1\u8FDB\u884C\u4EFB\u4F55\u8FDD\u6CD5\u3001\u4FB5\u72AF\u4ED6\u4EBA\u5408\u6CD5\u6743\u76CA\u6216\u635F\u5BB3\u793E\u4F1A\u516C\u5171\u5229\u76CA\u7684\u6D3B\u52A8\uFF0C\u5426\u5219\u5C06\u627F\u62C5\u7531\u6B64\u4EA7\u751F\u7684\u5168\u90E8\u8D23\u4EFB\u3002\n\u56DB\u3001\u77E5\u8BC6\u4EA7\u6743\n4.1 \u672C\u5E73\u53F0\u6240\u63D0\u4F9B\u7684\u6240\u6709\u670D\u52A1\u53CA\u8F6F\u4EF6\u5747\u5C5E\u4E8E\u672C\u5E73\u53F0\u6240\u6709\uFF0C\u53D7\u5230\u76F8\u5173\u6CD5\u5F8B\u4FDD\u62A4\u3002\n4.2 \u7528\u6237\u5728\u4F7F\u7528\u672C\u5E73\u53F0\u670D\u52A1\u65F6\uFF0C\u5FC5\u987B\u9075\u5B88\u4E2D\u56FD\u6709\u5173\u77E5\u8BC6\u4EA7\u6743\u548C\u8457\u4F5C\u6743\u6CD5\u5F8B\u6CD5\u89C4\uFF0C\u4E0D\u5F97\u4EE5\u4EFB\u4F55\u65B9\u5F0F\u4FB5\u72AF\u672C\u5E73\u53F0\u7684\u77E5\u8BC6\u4EA7\u6743\u3002\n\u4E94\u3001\u514D\u8D23\u58F0\u660E\n5.1 \u672C\u5E73\u53F0\u65E0\u6CD5\u5B8C\u5168\u4FDD\u8BC1\u670D\u52A1\u7684\u7A33\u5B9A\u6027\u3001\u51C6\u786E\u6027\u548C\u53CA\u65F6\u6027\uFF0C\u5BF9\u56E0\u670D\u52A1\u6545\u969C\u6216\u5176\u4ED6\u539F\u56E0\u5BFC\u81F4\u7684\u4EFB\u4F55\u635F\u5931\u6216\u635F\u5BB3\u4E0D\u8D1F\u4EFB\u4F55\u8D23\u4EFB\u3002\n5.2 \u672C\u5E73\u53F0\u4E0D\u5BF9\u7528\u6237\u4F7F\u7528\u672C\u5E73\u53F0\u670D\u52A1\u4EA7\u751F\u7684\u4EFB\u4F55\u76F4\u63A5\u6216\u95F4\u63A5\u635F\u5931\u627F\u62C5\u8D54\u507F\u8D23\u4EFB\u3002\n5.3 \u672C\u5E73\u53F0\u4E0D\u5BF9\u7528\u6237\u56E0\u4F7F\u7528\u672C\u5E73\u53F0\u670D\u52A1\u800C\u53EF\u80FD\u4EA7\u751F\u7684\u98CE\u9669\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002\n\u516D\u3001\u534F\u8BAE\u66F4\u65B0\u4E0E\u53D8\u66F4\n6.1 \u672C\u5E73\u53F0\u6709\u6743\u6839\u636E\u9700\u8981\u5BF9\u672C\u534F\u8BAE\u8FDB\u884C\u66F4\u65B0\u548C\u53D8\u66F4\uFF0C\u65E0\u9700\u4E8B\u5148\u901A\u77E5\u7528\u6237\u3002\n6.2 \u66F4\u65B0\u548C\u53D8\u66F4\u540E\u7684\u534F\u8BAE\u4E00\u7ECF\u516C\u5E03\uFF0C\u7ACB\u5373\u81EA\u52A8\u751F\u6548\uFF0C\u6210\u4E3A\u7528\u6237\u4F7F\u7528\u672C\u5E73\u53F0\u670D\u52A1\u7684\u65B0\u7684\u7EA6\u5B9A\u548C\u6761\u6B3E\u3002\n\u4E03\u3001\u534F\u8BAE\u7EC8\u6B62\n7.1 \u7528\u6237\u53EF\u4EE5\u968F\u65F6\u505C\u6B62\u4F7F\u7528\u672C\u5E73\u53F0\u670D\u52A1\uFF0C\u7EC8\u6B62\u672C\u534F\u8BAE\u3002\n7.2 \u672C\u5E73\u53F0\u6709\u6743\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u7EC8\u6B62\u672C\u534F\u8BAE\uFF0C\u5E76\u968F\u65F6\u505C\u6B62\u5411\u7528\u6237\u63D0\u4F9B\u670D\u52A1\uFF0C\u65E0\u9700\u4E8B\u5148\u901A\u77E5\u7528\u6237\u3002\n\u516B\u3001\u6CD5\u5F8B\u9002\u7528\u548C\u7BA1\u8F96\n8.1 \u672C\u534F\u8BAE\u9002\u7528\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6CD5\u5F8B\u3002\n8.2 \u5982\u672C\u534F\u8BAE\u4E2D\u4EFB\u4F55\u6761\u6B3E\u56E0\u8FDD\u53CD\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6CD5\u5F8B\u800C\u65E0\u6548\uFF0C\u4E0D\u5F71\u54CD\u5176\u4ED6\u6761\u6B3E\u7684\u6548\u529B\u3002\n8.3 \u5728\u4F7F\u7528\u672C\u5E73\u53F0\u670D\u52A1\u8FC7\u7A0B\u4E2D\u53D1\u751F\u7684\u4EFB\u4F55\u7EA0\u7EB7\uFF0C\u5E94\u901A\u8FC7\u53CB\u597D\u534F\u5546\u89E3\u51B3\u3002\u5982\u534F\u5546\u4E0D\u6210\uFF0C\u53CC\u65B9\u540C\u610F\u5C06\u4E89\u8BAE\u63D0\u4EA4\u81F3\u672C\u5E73\u53F0\u6240\u5728\u5730\u4EBA\u6C11\u6CD5\u9662\u88C1\u51B3\u3002\n    ",
  privacy: "\n    \u6B22\u8FCE\u4F7F\u7528\u5B5A\u521B\u53D1\u7535\u718A\u732B\u4E91\u79DF\u8D41\u670D\u52A1\u3002\u6211\u4EEC\u975E\u5E38\u5C0A\u91CD\u60A8\u7684\u9690\u79C1\u6743\uFF0C\u56E0\u6B64\u6211\u4EEC\u5236\u5B9A\u4E86\u8FD9\u4EFD\u9690\u79C1\u534F\u8BAE\uFF0C\u4EE5\u660E\u786E\u89E3\u91CA\u6211\u4EEC\u5982\u4F55\u6536\u96C6\u3001\u4F7F\u7528\u3001\u4FDD\u62A4\u548C\u5904\u7406\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002\n\u4E00.\u4FE1\u606F\u6536\u96C6\n\u4E3A\u4E86\u63D0\u4F9B\u66F4\u597D\u7684\u670D\u52A1\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u6536\u96C6\u4EE5\u4E0B\u7C7B\u578B\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF1A\n    \u59D3\u540D\n    \u624B\u673A\u53F7\u7801\n    \u7535\u5B50\u90AE\u4EF6\u5730\u5740\n    \u4FE1\u606F\u4F7F\u7528\n\u6211\u4EEC\u53EA\u4F7F\u7528\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u6765\u63D0\u4F9B\u79DF\u8D41\u670D\u52A1\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u5728\u4EFB\u4F55\u65F6\u5019\u4E0E\u7B2C\u4E09\u65B9\u5171\u4EAB\u3002\u6211\u4EEC\u4E0D\u4F1A\u5411\u5E7F\u544A\u5546\u6216\u5176\u4ED6\u8425\u9500\u673A\u6784\u51FA\u552E\u6216\u51FA\u79DF\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u4EC5\u7528\u4E8E\u53D1\u7535\u79DF\u8D41\u4E1A\u52A1\u6269\u5C55\u4F7F\u7528\u3002\n\u4E8C.\u4FE1\u606F\u4FDD\u62A4\n\u6211\u4EEC\u91C7\u53D6\u6280\u672F\u548C\u7269\u7406\u63AA\u65BD\u6765\u4FDD\u62A4\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u514D\u53D7\u672A\u7ECF\u6388\u6743\u7684\u8BBF\u95EE\u3001\u4F7F\u7528\u6216\u6CC4\u9732\u3002\u6211\u4EEC\u9650\u5236\u5BF9\u4E2A\u4EBA\u4FE1\u606F\u7684\u8BBF\u95EE\uFF0C\u53EA\u6709\u9700\u8981\u8FD9\u4E9B\u4FE1\u606F\u6765\u5C65\u884C\u5DE5\u4F5C\u804C\u8D23\u7684\u5458\u5DE5\u624D\u80FD\u591F\u8BBF\u95EE\u5B83\u4EEC\u3002\n\u4E09.\u6CD5\u5F8B\u8981\u6C42\n\u6211\u4EEC\u5C06\u5728\u6CD5\u5F8B\u8981\u6C42\u4E0B\u62AB\u9732\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u4F8B\u5982\u534F\u52A9\u8C03\u67E5\u8BC8\u9A97\u3001\u8FDD\u53CD\u6CD5\u5F8B\u7684\u6D3B\u52A8\u6216\u5176\u4ED6\u8FDD\u6CD5\u884C\u4E3A\u3002\n\u56DB.Cookie\n\u6211\u4EEC\u53EF\u80FD\u4F1A\u5C06 Cookie \u5B58\u50A8\u5728\u60A8\u7684\u8BBE\u5907\u4E0A\u3002Cookie \u662F\u4E00\u79CD\u5141\u8BB8\u6211\u4EEC\u8BC6\u522B\u60A8\u7684\u6D4F\u89C8\u5668\u6216\u8BBE\u5907\u5E76\u8BB0\u5F55\u6709\u5173\u60A8\u4F7F\u7528\u670D\u52A1\u7684\u4FE1\u606F\u7684\u6280\u672F\u3002\n\u4E94.\u66F4\u65B0\u9690\u79C1\u534F\u8BAE\n\u6211\u4EEC\u53EF\u80FD\u4F1A\u4E0D\u65F6\u66F4\u65B0\u672C\u9690\u79C1\u534F\u8BAE\u3002\u5982\u679C\u6211\u4EEC\u8FDB\u884C\u5B9E\u8D28\u6027\u66F4\u6539\uFF0C\u6211\u4EEC\u4F1A\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u5411\u60A8\u53D1\u9001\u901A\u77E5\u3002\n\u5982\u679C\u60A8\u5BF9\u6211\u4EEC\u7684\u9690\u79C1\u653F\u7B56\u6709\u4EFB\u4F55\u7591\u95EE\u6216\u610F\u89C1\uFF0C\u8BF7\u8054\u7CFB\u6211\u4EEC\u7684\u5BA2\u6237\u670D\u52A1\u56E2\u961F\uFF0C\u90AE\u7BB1\u4E3A info@fortrust.cn\u3002\n\u672C\u534F\u8BAE\u6700\u540E\u66F4\u65B0\u4E8E2023\u5E7404\u6708\u3002\n    "
});

/***/ }),

/***/ "./src/pages/enter-customer-information/index.tsx":
/*!********************************************************!*\
  !*** ./src/pages/enter-customer-information/index.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/enter-customer-information/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/enter-customer-information/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/assets/icon/select-location.png":
/*!*********************************************!*\
  !*** ./src/assets/icon/select-location.png ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/icon/select-location.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/enter-customer-information/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map