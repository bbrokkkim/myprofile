webpackHotUpdate_N_E("pages/index",{

/***/ "./component/project/row.tsx":
/*!***********************************!*\
  !*** ./component/project/row.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectRow; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_CommonRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/CommonRow */ "./component/common/CommonRow.tsx");
/* harmony import */ var _common_Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Util */ "./component/common/Util.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./component/common/index.tsx");

var _jsxFileName = "C:\\Users\\rudrh\\Desktop\\myprofile\\component\\project\\row.tsx";




function ProjectRow(_ref) {
  var _this = this;

  var payload = _ref.payload;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common__WEBPACK_IMPORTED_MODULE_4__["EmptyRowCol"], {
    children: payload.list.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_CommonRow__WEBPACK_IMPORTED_MODULE_2__["CommonRows"], {
        payload: serialize(item),
        index: index
      }, index.toString(), false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 16
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
_c = ProjectRow;

function serialize(payload) {
  var DATE_FORMAT = _common_Util__WEBPACK_IMPORTED_MODULE_3__["default"].LUXON_DATE_FORMAT;
  var startedAt = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].fromFormat(payload.startedAt, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL);

  var title = function () {
    if (payload.endedAt) {
      var endedAt = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].fromFormat(payload.endedAt, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL);
      return "".concat(startedAt, "  ").concat(endedAt);
    }

    return " ";
  }();

  return {
    left: {
      title: title
    },
    right: {
      title: payload.title,
      subTitle: payload.where,
      descriptions: payload.descriptions
    }
  };
}

var _c;

$RefreshReg$(_c, "ProjectRow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3Byb2plY3Qvcm93LnRzeCJdLCJuYW1lcyI6WyJQcm9qZWN0Um93IiwicGF5bG9hZCIsImxpc3QiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzZXJpYWxpemUiLCJ0b1N0cmluZyIsIkRBVEVfRk9STUFUIiwiVXRpbCIsIkxVWE9OX0RBVEVfRk9STUFUIiwic3RhcnRlZEF0IiwiRGF0ZVRpbWUiLCJmcm9tRm9ybWF0IiwiWVlZWV9MTCIsInRvRm9ybWF0IiwiWVlZWV9ET1RfTEwiLCJ0aXRsZSIsImVuZGVkQXQiLCJsZWZ0IiwicmlnaHQiLCJzdWJUaXRsZSIsIndoZXJlIiwiZGVzY3JpcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLFVBQVQsT0FBbUY7QUFBQTs7QUFBQSxNQUE3REMsT0FBNkQsUUFBN0RBLE9BQTZEO0FBQ2hHLHNCQUNFLHFFQUFDLG1EQUFEO0FBQUEsY0FDR0EsT0FBTyxDQUFDQyxJQUFSLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ2pDLDBCQUFPLHFFQUFDLDREQUFEO0FBQW1DLGVBQU8sRUFBRUMsU0FBUyxDQUFDRixJQUFELENBQXJEO0FBQTZELGFBQUssRUFBRUM7QUFBcEUsU0FBaUJBLEtBQUssQ0FBQ0UsUUFBTixFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxLQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7S0FSdUJQLFU7O0FBVXhCLFNBQVNNLFNBQVQsQ0FBbUJMLE9BQW5CLEVBQXlEO0FBQ3ZELE1BQU1PLFdBQVcsR0FBR0Msb0RBQUksQ0FBQ0MsaUJBQXpCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyw4Q0FBUSxDQUFDQyxVQUFULENBQW9CWixPQUFPLENBQUNVLFNBQTVCLEVBQXVDSCxXQUFXLENBQUNNLE9BQW5ELEVBQTREQyxRQUE1RCxDQUNoQlAsV0FBVyxDQUFDUSxXQURJLENBQWxCOztBQUdBLE1BQU1DLEtBQUssR0FBSSxZQUFNO0FBQ25CLFFBQUloQixPQUFPLENBQUNpQixPQUFaLEVBQXFCO0FBQ25CLFVBQU1BLE9BQU8sR0FBR04sOENBQVEsQ0FBQ0MsVUFBVCxDQUFvQlosT0FBTyxDQUFDaUIsT0FBNUIsRUFBcUNWLFdBQVcsQ0FBQ00sT0FBakQsRUFBMERDLFFBQTFELENBQ2RQLFdBQVcsQ0FBQ1EsV0FERSxDQUFoQjtBQUdBLHVCQUFVTCxTQUFWLGVBQXdCTyxPQUF4QjtBQUNEOztBQUNEO0FBQ0QsR0FSYSxFQUFkOztBQVVBLFNBQU87QUFDTEMsUUFBSSxFQUFFO0FBQ0pGLFdBQUssRUFBTEE7QUFESSxLQUREO0FBSUxHLFNBQUssRUFBRTtBQUNMSCxXQUFLLEVBQUVoQixPQUFPLENBQUNnQixLQURWO0FBRUxJLGNBQVEsRUFBRXBCLE9BQU8sQ0FBQ3FCLEtBRmI7QUFHTEMsa0JBQVksRUFBRXRCLE9BQU8sQ0FBQ3NCO0FBSGpCO0FBSkYsR0FBUDtBQVVEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxOWU2ZTJmZTUwNjRiMDRlM2FhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcclxuaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElQcm9qZWN0IH0gZnJvbSAnLi9JUHJvamVjdCc7XHJcbmltcG9ydCB7IENvbW1vblJvd3MgfSBmcm9tICcuLi9jb21tb24vQ29tbW9uUm93JztcclxuaW1wb3J0IHsgSVJvdyB9IGZyb20gJy4uL2NvbW1vbi9JUm93JztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29tbW9uL1V0aWwnO1xyXG5pbXBvcnQgeyBFbXB0eVJvd0NvbCB9IGZyb20gJy4uL2NvbW1vbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0Um93KHsgcGF5bG9hZCB9OiBQcm9wc1dpdGhDaGlsZHJlbjx7IHBheWxvYWQ6IElQcm9qZWN0LlBheWxvYWQgfT4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEVtcHR5Um93Q29sPlxyXG4gICAgICB7cGF5bG9hZC5saXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gPENvbW1vblJvd3Mga2V5PXtpbmRleC50b1N0cmluZygpfSBwYXlsb2FkPXtzZXJpYWxpemUoaXRlbSl9IGluZGV4PXtpbmRleH0gLz47XHJcbiAgICAgIH0pfVxyXG4gICAgPC9FbXB0eVJvd0NvbD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXJpYWxpemUocGF5bG9hZDogSVByb2plY3QuSXRlbSk6IElSb3cuUGF5bG9hZCB7XHJcbiAgY29uc3QgREFURV9GT1JNQVQgPSBVdGlsLkxVWE9OX0RBVEVfRk9STUFUO1xyXG4gIGNvbnN0IHN0YXJ0ZWRBdCA9IERhdGVUaW1lLmZyb21Gb3JtYXQocGF5bG9hZC5zdGFydGVkQXQsIERBVEVfRk9STUFULllZWVlfTEwpLnRvRm9ybWF0KFxyXG4gICAgREFURV9GT1JNQVQuWVlZWV9ET1RfTEwsXHJcbiAgKTtcclxuICBjb25zdCB0aXRsZSA9ICgoKSA9PiB7XHJcbiAgICBpZiAocGF5bG9hZC5lbmRlZEF0KSB7XHJcbiAgICAgIGNvbnN0IGVuZGVkQXQgPSBEYXRlVGltZS5mcm9tRm9ybWF0KHBheWxvYWQuZW5kZWRBdCwgREFURV9GT1JNQVQuWVlZWV9MTCkudG9Gb3JtYXQoXHJcbiAgICAgICAgREFURV9GT1JNQVQuWVlZWV9ET1RfTEwsXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBgJHtzdGFydGVkQXR9ICAke2VuZGVkQXR9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBgIGA7XHJcbiAgfSkoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxlZnQ6IHtcclxuICAgICAgdGl0bGUsXHJcbiAgICB9LFxyXG4gICAgcmlnaHQ6IHtcclxuICAgICAgdGl0bGU6IHBheWxvYWQudGl0bGUsXHJcbiAgICAgIHN1YlRpdGxlOiBwYXlsb2FkLndoZXJlLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IHBheWxvYWQuZGVzY3JpcHRpb25zLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=