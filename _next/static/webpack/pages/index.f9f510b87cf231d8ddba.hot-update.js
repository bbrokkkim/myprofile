webpackHotUpdate_N_E("pages/index",{

/***/ "./component/common/CommonDescription.tsx":
/*!************************************************!*\
  !*** ./component/common/CommonDescription.tsx ***!
  \************************************************/
/*! exports provided: CommonDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonDescription", function() { return CommonDescription; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./component/common/index.tsx");


var _jsxFileName = "C:\\Users\\rudrh\\Desktop\\myprofile\\component\\common\\CommonDescription.tsx";

/** Description Recusion Generator */

function CommonDescription(_ref) {
  var _this = this;

  var descriptions = _ref.descriptions,
      option = _ref.option;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: descriptions ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: option !== null && option !== void 0 && option.padding ? 'pt-2' : '',
      children: descriptions.map(function (description, descIndex) {
        if (description.indexOf("||") != -1) {
          var splice = description.split("||");
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: splice[1],
              target: "_blank",
              children: splice[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 48
            }, _this)
          }, descIndex.toString(), false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 17
          }, _this);
        }

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Description, {
            description: description
          }, descIndex.toString(), false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 17
          }, _this), description.descriptions ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DescriptionRecursion, {
            descriptions: description.descriptions
          }, descIndex.toString(), false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 19
          }, _this) : '']
        }, void 0, true);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this) : ''
  }, void 0, false);
} // ul 태그 depth 표현을 위한 재귀

_c = CommonDescription;

function DescriptionRecursion(_ref2) {
  var _this2 = this;

  var descriptions = _ref2.descriptions;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    children: descriptions.map(function (description, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Description, {
          description: description
        }, index.toString(), false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, _this2), description.descriptions ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DescriptionRecursion, {
          descriptions: description.descriptions
        }, index.toString(), false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }, _this2) : '']
      }, void 0, true);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_c2 = DescriptionRecursion;

function Description(_ref3) {
  var _this3 = this;

  var description = _ref3.description;
  var content = description.content,
      href = description.href,
      postImage = description.postImage,
      postHref = description.postHref,
      weight = description.weight;

  var component = function () {
    if (href && postImage) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        style: getFontWeight(weight),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_1__["HrefTargetBlank"], {
          url: href,
          text: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this3), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: postImage,
          alt: postImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 57
        }, _this3)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this3);
    }

    if (href) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        style: getFontWeight(weight),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_1__["HrefTargetBlank"], {
          url: href,
          text: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this3)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this3);
    }

    if (postHref && postImage) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        style: getFontWeight(weight),
        children: [content, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_1__["HrefTargetBlank"], {
          url: postHref,
          text: postHref
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, _this3), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: postImage,
          alt: postImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this3)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this3);
    }

    if (postHref) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        style: getFontWeight(weight),
        children: [content, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_1__["HrefTargetBlank"], {
          url: postHref,
          text: postHref
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, _this3)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this3);
    }

    if (postImage) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        style: getFontWeight(weight),
        children: [content, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: postImage,
          alt: postImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, _this3)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, _this3);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      style: getFontWeight(weight),
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 12
    }, _this3);
  }();

  return component;
}

_c3 = Description;

function getFontWeight(weight) {
  if (!weight) {
    // style 에 fontWeight 범벅 되는것을 방지
    return {};
  }

  return {
    fontWeight: fontWeight[weight || 'DEFAULT']
  };
} // Noto Sans KR Weights: 300, 400, 500, 700


var fontWeight = {
  DEFAULT: 300,
  LIGHT: 300,
  REGULAR: 300,
  MEDIUM: 500,
  // BOLD: 700,
  BOLD: 500
};

var _c, _c2, _c3;

$RefreshReg$(_c, "CommonDescription");
$RefreshReg$(_c2, "DescriptionRecursion");
$RefreshReg$(_c3, "Description");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2NvbW1vbi9Db21tb25EZXNjcmlwdGlvbi50c3giXSwibmFtZXMiOlsiQ29tbW9uRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbnMiLCJvcHRpb24iLCJwYWRkaW5nIiwibWFwIiwiZGVzY3JpcHRpb24iLCJkZXNjSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwic3BsaXQiLCJ0b1N0cmluZyIsIkRlc2NyaXB0aW9uUmVjdXJzaW9uIiwiaW5kZXgiLCJEZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJocmVmIiwicG9zdEltYWdlIiwicG9zdEhyZWYiLCJ3ZWlnaHQiLCJjb21wb25lbnQiLCJnZXRGb250V2VpZ2h0IiwiZm9udFdlaWdodCIsIkRFRkFVTFQiLCJMSUdIVCIsIlJFR1VMQVIiLCJNRURJVU0iLCJCT0xEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBOztBQUNPLFNBQVNBLGlCQUFULE9BR3FGO0FBQUE7O0FBQUEsTUFGMUZDLFlBRTBGLFFBRjFGQSxZQUUwRjtBQUFBLE1BRDFGQyxNQUMwRixRQUQxRkEsTUFDMEY7QUFDMUYsc0JBQ0U7QUFBQSxjQUNHRCxZQUFZLGdCQUNYO0FBQUksZUFBUyxFQUFFQyxNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLElBQUFBLE1BQU0sQ0FBRUMsT0FBUixHQUFrQixNQUFsQixHQUEyQixFQUExQztBQUFBLGdCQUNHRixZQUFZLENBQUNHLEdBQWIsQ0FBaUIsVUFBQ0MsV0FBRCxFQUFjQyxTQUFkLEVBQTRCO0FBQzNDLFlBQUdELFdBQVcsQ0FBQ0UsT0FBWixDQUFvQixJQUFwQixLQUE2QixDQUFDLENBQWpDLEVBQW1DO0FBQ2xDLGNBQU1DLE1BQU0sR0FBR0gsV0FBVyxDQUFDSSxLQUFaLENBQWtCLElBQWxCLENBQWY7QUFDQSw4QkFDRTtBQUFBLG1DQUErQjtBQUFHLGtCQUFJLEVBQUVELE1BQU0sQ0FBQyxDQUFELENBQWY7QUFBb0Isb0JB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O0FBQ0xHLGNBQVUsRUFBRUEsVUFBVSxDQUFDSCxNQUFNLElBQUksU0FBWDtBQURqQixHQUFQO0FBR0QsQyxDQUVEOzs7QUFDQSxJQUFNRyxVQUErQyxHQUFHO0FBQ3REQyxTQUFPLEVBQUUsR0FENkM7QUFFdERDLE9BQUssRUFBRSxHQUYrQztBQUd0REMsU0FBTyxFQUFFLEdBSDZDO0FBSXREQyxRQUFNLEVBQUUsR0FKOEM7QUFLdEQ7QUFDQUMsTUFBSSxFQUFFO0FBTmdELENBQXhEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY5ZjUxMGI4N2NmMjMxZDhkZGJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9wc1dpdGhDaGlsZHJlbiwgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSVJvdyB9IGZyb20gJy4vSVJvdyc7XHJcbmltcG9ydCB7IEhyZWZUYXJnZXRCbGFuayB9IGZyb20gJy4nO1xyXG5cclxuLyoqIERlc2NyaXB0aW9uIFJlY3VzaW9uIEdlbmVyYXRvciAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQ29tbW9uRGVzY3JpcHRpb24oe1xyXG4gIGRlc2NyaXB0aW9ucyxcclxuICBvcHRpb24sXHJcbn06IFByb3BzV2l0aENoaWxkcmVuPHsgZGVzY3JpcHRpb25zOiBJUm93LkRlc2NyaXB0aW9uW107IG9wdGlvbj86IHsgcGFkZGluZz86IGJvb2xlYW4gfSB9Pikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7ZGVzY3JpcHRpb25zID8gKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e29wdGlvbj8ucGFkZGluZyA/ICdwdC0yJyA6ICcnfT5cclxuICAgICAgICAgIHtkZXNjcmlwdGlvbnMubWFwKChkZXNjcmlwdGlvbiwgZGVzY0luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICBpZihkZXNjcmlwdGlvbi5pbmRleE9mKFwifHxcIikgIT0gLTEpe1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNwbGljZSA9IGRlc2NyaXB0aW9uLnNwbGl0KFwifHxcIilcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17ZGVzY0luZGV4LnRvU3RyaW5nKCl9PjxhIGhyZWY9e3NwbGljZVsxXX0gdGFyZ2V0PVwiX2JsYW5rXCI+e3NwbGljZVswXX08L2E+PC9saT4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IGtleT17ZGVzY0luZGV4LnRvU3RyaW5nKCl9IC8+XHJcbiAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24uZGVzY3JpcHRpb25zID8gKFxyXG4gICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb25SZWN1cnNpb25cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbnM9e2Rlc2NyaXB0aW9uLmRlc2NyaXB0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2Rlc2NJbmRleC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICcnXHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG4vLyB1bCDtg5zqt7ggZGVwdGgg7ZGc7ZiE7J2EIOychO2VnCDsnqzqt4BcclxuZnVuY3Rpb24gRGVzY3JpcHRpb25SZWN1cnNpb24oe1xyXG4gIGRlc2NyaXB0aW9ucyxcclxufTogUHJvcHNXaXRoQ2hpbGRyZW48eyBkZXNjcmlwdGlvbnM6IElSb3cuRGVzY3JpcHRpb25bXSB9Pikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWw+XHJcbiAgICAgIHtkZXNjcmlwdGlvbnMubWFwKChkZXNjcmlwdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0ga2V5PXtpbmRleC50b1N0cmluZygpfSAvPlxyXG4gICAgICAgICAgICB7ZGVzY3JpcHRpb24uZGVzY3JpcHRpb25zID8gKFxyXG4gICAgICAgICAgICAgIDxEZXNjcmlwdGlvblJlY3Vyc2lvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25zPXtkZXNjcmlwdGlvbi5kZXNjcmlwdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4LnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2NyaXB0aW9uKHsgZGVzY3JpcHRpb24gfTogUHJvcHNXaXRoQ2hpbGRyZW48eyBkZXNjcmlwdGlvbjogSVJvdy5EZXNjcmlwdGlvbiB9Pikge1xyXG4gIGNvbnN0IHsgY29udGVudCwgaHJlZiwgcG9zdEltYWdlLCBwb3N0SHJlZiwgd2VpZ2h0IH0gPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3QgY29tcG9uZW50ID0gKCgpID0+IHtcclxuICAgIGlmIChocmVmICYmIHBvc3RJbWFnZSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBzdHlsZT17Z2V0Rm9udFdlaWdodCh3ZWlnaHQpfT5cclxuICAgICAgICAgIDxIcmVmVGFyZ2V0QmxhbmsgdXJsPXtocmVmfSB0ZXh0PXtjb250ZW50fSAvPiA8aW1nIHNyYz17cG9zdEltYWdlfSBhbHQ9e3Bvc3RJbWFnZX0gLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGhyZWYpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgc3R5bGU9e2dldEZvbnRXZWlnaHQod2VpZ2h0KX0+XHJcbiAgICAgICAgICA8SHJlZlRhcmdldEJsYW5rIHVybD17aHJlZn0gdGV4dD17Y29udGVudH0gLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHBvc3RIcmVmICYmIHBvc3RJbWFnZSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBzdHlsZT17Z2V0Rm9udFdlaWdodCh3ZWlnaHQpfT5cclxuICAgICAgICAgIHtjb250ZW50fSA8SHJlZlRhcmdldEJsYW5rIHVybD17cG9zdEhyZWZ9IHRleHQ9e3Bvc3RIcmVmfSAvPnsnICd9XHJcbiAgICAgICAgICA8aW1nIHNyYz17cG9zdEltYWdlfSBhbHQ9e3Bvc3RJbWFnZX0gLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHBvc3RIcmVmKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIHN0eWxlPXtnZXRGb250V2VpZ2h0KHdlaWdodCl9PlxyXG4gICAgICAgICAge2NvbnRlbnR9IDxIcmVmVGFyZ2V0QmxhbmsgdXJsPXtwb3N0SHJlZn0gdGV4dD17cG9zdEhyZWZ9IC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChwb3N0SW1hZ2UpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgc3R5bGU9e2dldEZvbnRXZWlnaHQod2VpZ2h0KX0+XHJcbiAgICAgICAgICB7Y29udGVudH0gPGltZyBzcmM9e3Bvc3RJbWFnZX0gYWx0PXtwb3N0SW1hZ2V9IC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiA8bGkgc3R5bGU9e2dldEZvbnRXZWlnaHQod2VpZ2h0KX0+e2NvbnRlbnR9PC9saT47XHJcbiAgfSkoKTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9udFdlaWdodCh3ZWlnaHQ/OiBJUm93LkRlc2NyaXB0aW9uWyd3ZWlnaHQnXSk6IENTU1Byb3BlcnRpZXMge1xyXG4gIGlmICghd2VpZ2h0KSB7XHJcbiAgICAvLyBzdHlsZSDsl5AgZm9udFdlaWdodCDrspTrsoUg65CY64qU6rKD7J2EIOuwqeyngFxyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgZm9udFdlaWdodDogZm9udFdlaWdodFt3ZWlnaHQgfHwgJ0RFRkFVTFQnXSxcclxuICB9O1xyXG59XHJcblxyXG4vLyBOb3RvIFNhbnMgS1IgV2VpZ2h0czogMzAwLCA0MDAsIDUwMCwgNzAwXHJcbmNvbnN0IGZvbnRXZWlnaHQ6IFJlY29yZDxJUm93LkZvbnRXZWlnaHRUeXBlLCBudW1iZXI+ID0ge1xyXG4gIERFRkFVTFQ6IDMwMCxcclxuICBMSUdIVDogMzAwLFxyXG4gIFJFR1VMQVI6IDMwMCxcclxuICBNRURJVU06IDUwMCxcclxuICAvLyBCT0xEOiA3MDAsXHJcbiAgQk9MRDogNTAwLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9