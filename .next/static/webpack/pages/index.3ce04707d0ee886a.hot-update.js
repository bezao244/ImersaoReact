"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n//criando um estilo global para a página\nfunction GlobalStyle() {\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: \"54d8daeaa9a4ff80\",\n        children: \"*{margin:0;\\npadding:0;\\nbox-sizing:border-box}\\nbody{font-family:sans-serif}\"\n    }, void 0, false, void 0, this);\n}\n_c = GlobalStyle;\n//criando um componente de titulo para normalizar, recebendo o texto como argumento\nfunction Title(arg) {\n    //pegando o atrubuto tag do elemento\n    var Tag = arg.tag;\n    return(//normalizando uma criacao de tag com o mesmo estilo, a <Tag> recebe dentro o argumento passado anteriormente\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"21e9cdb3b2e1d57b\",\n                        [\n                            Tag\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: arg.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\berna\\\\OneDrive\\\\Documentos\\\\imersao-react\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"21e9cdb3b2e1d57b\",\n                dynamic: [\n                    Tag\n                ],\n                children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:red;\\nfont-size:24px;\\nfont-weight:600}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c1 = Title;\n//componente\nfunction HomePage() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\berna\\\\OneDrive\\\\Documentos\\\\imersao-react\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                tag: \"h2\",\n                children: \"Boas vindas de volta!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\berna\\\\OneDrive\\\\Documentos\\\\imersao-react\\\\pages\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Discord - Alura Matrix\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\berna\\\\OneDrive\\\\Documentos\\\\imersao-react\\\\pages\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\berna\\\\OneDrive\\\\Documentos\\\\imersao-react\\\\pages\\\\index.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this));\n}\n_c2 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c1, \"Title\");\n$RefreshReg$(_c2, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLEVBQXdDO1NBQy9CQSxXQUFXLEdBQUUsQ0FBQztJQUNuQixNQUFNLCtEQUFDOzs7O0FBWVgsQ0FBQztLQWJRQSxXQUFXO0FBY3BCLEVBQW1GO1NBQzFFQyxLQUFLLENBQUNDLEdBQUcsRUFBQyxDQUFDO0lBQ2hCLEVBQW9DO0lBQ3BDLEdBQUssQ0FBQ0MsR0FBRyxHQUFHRCxHQUFHLENBQUNFLEdBQUc7SUFDbkIsTUFBTSxDQUNGLEVBQTZHOzs7d0ZBRXhHRCxHQUFHOzs7Ozs0QkFFRkEsR0FBRzs7Ozt3Q0FGQ0QsR0FBRyxDQUFDRyxRQUFROzs7Ozs7Ozs7b0JBRWhCRixHQUFHOztvQ0FBSEEsR0FBRzs7OztBQVNqQixDQUFDO01BakJRRixLQUFLO0FBa0JkLEVBQVk7U0FDSEssUUFBUSxHQUFFLENBQUM7SUFDaEIsTUFBTSw2RUFDTEMsQ0FBRzs7d0ZBQ0NQLFdBQVc7Ozs7O3dGQUNYQyxLQUFLO2dCQUFDRyxHQUFHLEVBQUMsQ0FBSTswQkFBQyxDQUFxQjs7Ozs7O3dGQUNwQ0ksQ0FBRTswQkFBQyxDQUFzQjs7Ozs7Ozs7Ozs7O0FBR2xDLENBQUM7TUFSUUYsUUFBUTtBQVVqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy9jcmlhbmRvIHVtIGVzdGlsbyBnbG9iYWwgcGFyYSBhIHDDoWdpbmFcclxuZnVuY3Rpb24gR2xvYmFsU3R5bGUoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAqe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keXtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgKTtcclxufVxyXG4vL2NyaWFuZG8gdW0gY29tcG9uZW50ZSBkZSB0aXR1bG8gcGFyYSBub3JtYWxpemFyLCByZWNlYmVuZG8gbyB0ZXh0byBjb21vIGFyZ3VtZW50b1xyXG5mdW5jdGlvbiBUaXRsZShhcmcpe1xyXG4gICAgLy9wZWdhbmRvIG8gYXRydWJ1dG8gdGFnIGRvIGVsZW1lbnRvXHJcbiAgICBjb25zdCBUYWcgPSBhcmcudGFnO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIC8vbm9ybWFsaXphbmRvIHVtYSBjcmlhY2FvIGRlIHRhZyBjb20gbyBtZXNtbyBlc3RpbG8sIGEgPFRhZz4gcmVjZWJlIGRlbnRybyBvIGFyZ3VtZW50byBwYXNzYWRvIGFudGVyaW9ybWVudGVcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VGFnPnthcmcuY2hpbGRyZW59PC9UYWc+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgJHtUYWd9IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgICBcclxuICAgICk7XHJcbn1cclxuLy9jb21wb25lbnRlXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8R2xvYmFsU3R5bGUvPlxyXG4gICAgICAgIDxUaXRsZSB0YWc9XCJoMlwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0bGU+XHJcbiAgICAgICAgPGgyPkRpc2NvcmQgLSBBbHVyYSBNYXRyaXg8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJUaXRsZSIsImFyZyIsIlRhZyIsInRhZyIsImNoaWxkcmVuIiwiSG9tZVBhZ2UiLCJkaXYiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});