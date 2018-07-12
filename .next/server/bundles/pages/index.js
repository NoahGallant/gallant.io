module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/backgrounds.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/noahgallant/Documents/Work/personal/components/backgrounds.js";



var Backgrounds = function Backgrounds(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1309395053", [1 - props.offset, 2 - props.offset, 3 - props.offset, 4 - props.offset, 5 - props.offset]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1309395053", [1 - props.offset, 2 - props.offset, 3 - props.offset, 4 - props.offset, 5 - props.offset]]]) + " " + "bg bg-6"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1309395053", [1 - props.offset, 2 - props.offset, 3 - props.offset, 4 - props.offset, 5 - props.offset]]]) + " " + "bg bg-5"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1309395053", [1 - props.offset, 2 - props.offset, 3 - props.offset, 4 - props.offset, 5 - props.offset]]]) + " " + "bg bg-4"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1309395053", [1 - props.offset, 2 - props.offset, 3 - props.offset, 4 - props.offset, 5 - props.offset]]]) + " " + "bg bg-3"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1309395053", [1 - props.offset, 2 - props.offset, 3 - props.offset, 4 - props.offset, 5 - props.offset]]]) + " " + "bg bg-2"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1309395053", [1 - props.offset, 2 - props.offset, 3 - props.offset, 4 - props.offset, 5 - props.offset]]]) + " " + "bg bg-1"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1309395053",
    css: ".content.__jsx-style-dynamic-selector{margin-bottom:0;}.bg.__jsx-style-dynamic-selector{top:0px;left:0px;right:0px;bottom:0px;position:fixed;}.bg-1.__jsx-style-dynamic-selector{background-color:#dfdfdf;z-index:-1;opacity:".concat(1 - props.offset, ";}.bg-2.__jsx-style-dynamic-selector{background-color:#FFDFE4;z-index:-1;opacity:").concat(2 - props.offset, ";}.bg-3.__jsx-style-dynamic-selector{background-color:#FFF3E2;z-index:-1;opacity:").concat(3 - props.offset, ";}.bg-4.__jsx-style-dynamic-selector{background-color:#EAFFEC;z-index:-1;opacity:").concat(4 - props.offset, ";}.bg-5.__jsx-style-dynamic-selector{background-color:#F4F6FF;z-index:-1;opacity:").concat(5 - props.offset, ";}.bg-6.__jsx-style-dynamic-selector{background-color:#F3E7FF;z-index:-1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFja2dyb3VuZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2dCLEFBR3lCLEFBR1IsQUFPaUIsQUFLQSxBQUtELEFBS0MsQUFLQSxBQUtBLFFBL0JoQixRQUhYLENBSVksUUFNQSxBQUtBLEFBS0EsQUFLQSxBQUtBLEFBS0EsRUE5QkMsU0FNMEIsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQUt2QyxFQTlCZ0IsZUFDaEIsb0JBS0EsQUFLQSxBQUtBLEFBS0EsQUFLQSIsImZpbGUiOiJjb21wb25lbnRzL2JhY2tncm91bmRzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ub2FoZ2FsbGFudC9Eb2N1bWVudHMvV29yay9wZXJzb25hbCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJhY2tncm91bmRzID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWUgPVwiYmcgYmctNlwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lID1cImJnIGJnLTVcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZSA9XCJiZyBiZy00XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWUgPVwiYmcgYmctM1wiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lID1cImJnIGJnLTJcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZSA9XCJiZyBiZy0xXCI+PC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGVudCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgICAuYmd7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgIH1cbiAgICAgIC5iZy0xe1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xuICAgICAgICB6LWluZGV4Oi0xO1xuICAgICAgICBvcGFjaXR5OiAkezEtcHJvcHMub2Zmc2V0fTtcbiAgICAgIH1cbiAgICAgIC5iZy0ye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERkU0O1xuICAgICAgICB6LWluZGV4Oi0xO1xuICAgICAgICBvcGFjaXR5OiAkezItcHJvcHMub2Zmc2V0fTtcbiAgICAgIH1cbiAgICAgIC5iZy0ze1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkYzRTI7XG4gICAgICAgIHotaW5kZXg6LTE7XG4gICAgICAgIG9wYWNpdHk6ICR7My1wcm9wcy5vZmZzZXR9O1xuICAgICAgfVxuICAgICAgLmJnLTR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQUZGRUM7XG4gICAgICAgIHotaW5kZXg6LTE7XG4gICAgICAgIG9wYWNpdHk6ICR7NC1wcm9wcy5vZmZzZXR9O1xuICAgICAgfVxuICAgICAgLmJnLTV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY2RkY7XG4gICAgICAgIHotaW5kZXg6LTE7XG4gICAgICAgIG9wYWNpdHk6ICR7NS1wcm9wcy5vZmZzZXR9O1xuICAgICAgfVxuICAgICAgLmJnLTZ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0U3RkY7XG4gICAgICAgIHotaW5kZXg6LTE7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZHNcbiJdfQ== */\n/*@ sourceURL=components/backgrounds.js */"),
    dynamic: [1 - props.offset, 2 - props.offset, 3 - props.offset, 4 - props.offset, 5 - props.offset]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Backgrounds);

/***/ }),

/***/ "./components/content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/noahgallant/Documents/Work/personal/components/content.js";



var Content = function Content(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-1465494984"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-1465494984"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    name: props.anchor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-1465494984"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-1465494984" + " " + "middle"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-1465494984" + " " + "info"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1465494984"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1465494984"
  }, props.title), props.children))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1465494984",
    css: "section.jsx-1465494984{border-bottom:none;height:100vh;display:table;margin-left:30vw;padding-right:200px;padding-left:50px;top:0;z-index:10;}.info.jsx-1465494984{padding-left:3rem;z-index:100;}.middle.jsx-1465494984{display:table-cell;height:100%;width:100vw;vertical-align:middle;}@media (max-width:700px){.middle.jsx-1465494984{vertical-align:bottom;}section.jsx-1465494984{left:0;padding-left:50px;padding-right:50px;right:0;margin:0px;}.info.jsx-1465494984{padding-left:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFHNEIsQUFVRixBQUlFLEFBT0ksQUFHYixBQU9NLE9BTkssUUFPckIsR0FyQlcsQ0FWQyxBQWNELEdBT1gsR0FJc0IsS0FkeEIsQ0FJYSxDQWRFLFdBZVMsQ0FVWCxFQXhCSyxNQXlCRCxXQXhCSSxBQXlCbkIsRUFYRixrQkFibUIsa0JBQ1osTUFDSyxXQUNaIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbm9haGdhbGxhbnQvRG9jdW1lbnRzL1dvcmsvcGVyc29uYWwiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb250ZW50ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8YSBuYW1lPXtwcm9wcy5hbmNob3J9PjwvYT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkZGxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgaGVpZ2h0OjEwMHZoO1xuICAgICAgICBkaXNwbGF5OnRhYmxlO1xuICAgICAgICBtYXJnaW4tbGVmdDozMHZ3O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OjIwMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6NTBweDtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIHotaW5kZXg6MTA7XG4gICAgICB9XG4gICAgICAuaW5mb3tcbiAgICAgICAgcGFkZGluZy1sZWZ0OjNyZW07IFxuICAgICAgICB6LWluZGV4OjEwMDtcbiAgICAgIH1cbiAgICAgIC5taWRkbGUge1xuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgd2lkdGg6MTAwdnc7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgLm1pZGRsZSB7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246Ym90dG9tO1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjUwcHg7XG4gICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm97XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50XG4iXX0= */\n/*@ sourceURL=components/content.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),

/***/ "./components/globe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/noahgallant/Documents/Work/personal/components/globe.js";



var Globe = function Globe(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]]) + " " + "globe"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    width: "1344",
    height: "224",
    viewBox: "0 0 1344 224",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    "clip-path": "url(#clip0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ellipse", {
    cx: "52.0813",
    cy: "104.706",
    rx: "52.0813",
    ry: "104.706",
    transform: "translate(60.2024 140.704)",
    fill: "#7A7ECF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M11.5898 8.91841C11.5898 3.99322 8.99598 0 5.79489 0C2.59379 0 0 3.99322 0 8.91841C0 13.8458 2.59379 17.8391 5.79489 17.8391C8.99598 17.8391 11.5898 13.8458 11.5898 8.91841Z",
    transform: "translate(62.9701 131.576) scale(1.25 -1.25)",
    fill: "#FFC09D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M11.5898 8.91841C11.5898 3.99322 8.99598 0 5.79489 0C2.59379 0 0 3.99322 0 8.91841C0 13.8458 2.59379 17.8391 5.79489 17.8391C8.99598 17.8391 11.5898 13.8458 11.5898 8.91841Z",
    transform: "translate(146.996 131.576) scale(1.25 -1.25)",
    fill: "#FFC09D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M0 32.191C0 51.2006 14.5289 66.6116 32.4514 66.6116C50.3738 66.6116 64.9027 51.2006 64.9027 32.191C64.9027 13.1836 50.3738 6.12379e-07 32.4514 6.12379e-07C14.5289 6.12379e-07 0 13.1836 0 32.191Z",
    transform: "translate(71.662 162.234) scale(1.25 -1.25)",
    fill: "#FFC09D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M2.31796 0C1.03844 0 0 0.996633 0 2.2296V6.68881C0 7.91955 1.03844 8.91841 2.31796 8.91841C3.59747 8.91841 4.63591 7.91955 4.63591 6.68881V2.2296C4.63591 0.996633 3.59747 0 2.31796 0Z",
    transform: "translate(91.9442 126.001) scale(1.25 -1.25)",
    fill: "#662113",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M2.31796 0C1.03613 0 0 0.996633 0 2.2296V6.68881C0 7.91955 1.03613 8.91841 2.31796 8.91841C3.59978 8.91841 4.63591 7.91955 4.63591 6.68881V2.2296C4.63591 0.996633 3.59978 0 2.31796 0Z",
    transform: "translate(126.714 126.001) scale(1.25 -1.25)",
    fill: "#662113",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M16.2272 0C6.51957 0 1.49193 2.36561 1.28331 2.46371C0.138243 3.01442 -0.327666 4.35442 0.244869 5.45584C0.817404 6.5528 2.1989 7.00095 3.34629 6.45693C3.46451 6.40342 7.80836 4.45921 16.2272 4.45921C24.7225 4.45921 29.0686 6.43909 29.1127 6.46139C30.2624 6.99872 31.6462 6.5372 32.2095 5.44023C32.7727 4.34104 32.3115 3.01442 31.171 2.46371C30.9601 2.36561 25.9324 0 16.2272 0Z",
    transform: "translate(91.9425 148.297) scale(1.25 -1.25)",
    fill: "#C1694F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M6.95387 0H2.31796C1.03844 0 0 0.996633 0 2.2296C0 3.46257 1.03844 4.45921 2.31796 4.45921H6.95387C8.23569 4.45921 9.27182 3.46257 9.27182 2.2296C9.27182 0.996633 8.23569 0 6.95387 0Z",
    transform: "translate(106.431 134.363) scale(1.25 -1.25)",
    fill: "#C1694F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M34.7693 40.2587C13.3746 40.2587 0 25.851 0 13.8468C0 1.84036 2.67492 -2.96221 5.34984 1.84036C8.02476 6.64292 10.6974 11.4455 10.6974 11.4455C10.6974 11.4455 19.487 11.722 24.8346 16.5245C24.8346 16.5245 22.352 7.60611 40.1215 16.2458C40.1215 16.2458 39.7367 7.60611 52.154 16.5245C52.154 16.5245 61.5162 13.8468 64.1865 1.84036C64.9305 -1.49067 69.5386 1.84036 69.5386 13.8468C69.5386 25.851 58.8413 40.2587 34.7693 40.2587Z",
    transform: "translate(68.7653 115.999) scale(1.25 -1.25)",
    fill: "#814C1D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M36.9969 28.1982L31.6348 22.807C31.6348 22.807 28.0581 21.0106 24.4834 24.6054C20.9047 28.1982 22.6941 31.793 22.6941 31.793L28.0581 37.1842C29.8474 38.9806 27.6983 40.6276 26.085 40.6276C18.1631 40.6276 11.743 34.1751 11.743 26.2151C11.743 25.0948 11.8838 24.0118 12.1224 22.9642L0 10.7804L10.7262 0L22.8505 12.1838C23.8928 11.942 24.9703 11.8025 26.085 11.8025C34.0049 11.8025 40.425 18.255 40.425 26.2151C40.425 27.8464 38.7843 29.9966 36.9969 28.1982Z",
    transform: "translate(329.469 123.785) scale(1.25 -1.25)",
    fill: "#8899A6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M7.5347 4.42667C5.93312 4.42667 4.63659 5.73172 4.63659 7.33945C4.63659 8.94915 5.93312 10.2542 7.5347 10.2542C9.13629 10.2542 10.4328 8.94915 10.4328 7.33945C10.4328 5.73172 9.13629 4.42667 7.5347 4.42667ZM26.0283 36.8054L2.19412 12.8505C-0.731373 9.91025 -0.731373 5.14405 2.19412 2.20375C5.11961 -0.734584 9.85984 -0.734584 12.7873 2.20375L36.6195 26.1586L26.0283 36.8054V36.8054Z",
    transform: "translate(296.668 156.753) scale(1.25 -1.25)",
    fill: "#8899A6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M47.2782 1.79156C49.5584 -0.500143 53.1879 -0.608243 55.337 1.55374C57.4881 3.71573 57.3806 7.36162 55.1004 9.65333L9.60471 55.3813C7.32454 57.673 3.69701 57.7811 1.54592 55.6191C-0.60518 53.4571 -0.497624 49.8112 1.78254 47.5195L47.2782 1.79156Z",
    transform: "translate(308.265 157) scale(1.25 -1.25)",
    fill: "#F4900C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M41.9355 32.3206C41.9355 32.3206 30.2023 38.2169 20.4246 28.3897C11.6246 19.5452 6.73576 14.6316 6.73576 14.6316C6.73576 14.6316 4.78021 16.5971 2.82467 14.6316L0.86913 12.6662C0.86913 12.6662 -1.08641 10.7007 0.86913 8.7353C2.82467 6.76985 8.6913 0.87353 8.6913 0.87353C8.6913 0.87353 10.6468 -1.09191 12.6024 0.87353L14.5579 2.83897C14.5579 2.83897 16.5135 4.80441 14.5579 6.76985C14.5129 6.81506 14.4543 6.87402 14.4054 6.92316C15.9112 8.38348 18.1659 9.87132 20.4246 8.7353L28.2467 16.5971C28.2467 16.5971 26.2912 22.4934 30.2023 26.4243C34.1133 30.3552 36.0689 30.3552 39.98 30.3552C43.8911 30.3552 41.9355 32.3206 41.9355 32.3206Z",
    transform: "translate(292 115.594) scale(1.25 -1.25)",
    fill: "#66757F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M56.2105 3.74936C56.2105 1.67862 54.5336 0 52.4632 0H3.74737C1.67882 0 0 1.67862 0 3.74936V35.6245C0 37.6952 1.67882 39.3739 3.74737 39.3739H52.4632C54.5336 39.3739 56.2105 37.6952 56.2105 35.6245V3.74936Z",
    transform: "translate(523.026 126.217) scale(1.25 -1.25)",
    fill: "#CCD6DD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M67.4526 3.74936C67.4526 1.67862 65.7757 0 63.7053 0H3.74737C1.67882 0 0 1.67862 0 3.74936L3.74737 12.8894C4.37131 14.7659 5.42619 16.6406 7.49474 16.6406H59.9579C62.0283 16.6406 62.9239 14.6875 63.7053 12.8894L67.4526 3.74936Z",
    transform: "translate(516 147.018) scale(1.25 -1.25)",
    fill: "#CCD6DD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M71.2 7.57901H0L1.87368 0H71.2V7.57901Z",
    transform: "translate(516 152) scale(1.25 -1.25)",
    fill: "#9AAAB4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M48.7158 1.87468C48.7158 0.838377 47.8783 0 46.8421 0H1.87368C0.839411 0 0 0.838377 0 1.87468V30.0005C0 31.0349 0.839411 31.8751 1.87368 31.8751H46.8421C47.8783 31.8751 48.7158 31.0349 48.7158 30.0005V1.87468Z",
    transform: "translate(527.711 121.53) scale(1.25 -1.25)",
    fill: "#5DADEC",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M55.6155 1.87468L54.1915 5.93586C53.7437 6.79478 53.0017 7.50058 51.9674 7.50058H3.53455C2.50028 7.50058 1.83699 6.73876 1.36857 5.56615L0.0794797 1.87468C-0.328983 0.761822 0.91889 0 1.95316 0H16.1519C16.1519 0 17.9076 0.0877588 18.2186 1.13526C18.5784 2.34522 18.9962 4.16761 19.0861 4.48691C19.2248 4.97985 19.8131 5.4784 20.69 5.4784H36.7606C37.6974 5.4784 38.1602 5.00599 38.2802 4.42155C38.3588 4.04064 38.8666 2.29107 39.1008 1.09419C39.3088 0.0298753 41.3867 0 41.3867 0H53.7418C54.7779 0 56.0258 0.879456 55.6155 1.87468",
    transform: "translate(523.551 137.79) scale(1.25 -1.25)",
    fill: "#AEBBC1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M15.5062 0H0.927025C0.224393 0 -0.0810164 0.640453 0.0182888 1.26037C0.119468 1.87841 0.692815 4.60641 0.73591 4.9257C0.780878 5.24499 1.25117 5.6259 1.71772 5.6259H14.8616C15.4181 5.6259 15.7797 5.32155 15.8921 4.71097C16.0046 4.10226 16.458 1.64875 16.4936 1.08858C16.5311 0.526553 16.1788 0 15.5062 0Z",
    transform: "translate(549.022 140.281) scale(1.25 -1.25)",
    fill: "#9AAAB4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "672",
    y: "0",
    width: "224",
    height: "224",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "112",
    cy: "112",
    r: "112",
    transform: "translate(672)",
    fill: "#CDCDCD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    mask: "url(#mask0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    width: "6",
    height: "66",
    transform: "translate(781 162)",
    fill: "#77B255",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M67.8957 28.3107C61.0922 28.3107 43.9568 21.134 36.2098 13.8359V38.4217C36.2098 39.54 35.3106 40.4439 34.1982 40.4439C33.0877 40.4439 32.1865 39.54 32.1865 38.4217V13.4658C24.6367 20.8913 7.0225 28.3107 0.104363 28.3107C-1.76448 28.3107 21.9531 0.0161774 32.1865 2.83309V2.02219C32.1865 0.903921 33.0877 0 34.1982 0C35.3106 0 36.2098 0.903921 36.2098 2.02219V2.74209C46.6464 0.732034 69.7404 28.3107 67.8957 28.3107Z",
    transform: "translate(741 195) scale(1.25 -1.25)",
    fill: "#77B255",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M28.1634 19.3787C28.1634 6.53573 24.7295 0 14.0817 0C3.43191 0 0 6.53573 0 19.3787C0 32.2216 10.0584 46.5105 14.0817 46.5105C18.105 46.5105 28.1634 32.2216 28.1634 19.3787Z",
    transform: "translate(766.146 162.138) scale(1.25 -1.25)",
    fill: "#EA596E",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M31.7744 42.4661C30.8087 42.4661 23.5144 13.6073 22.1123 3.4802C20.6116 13.6073 13.0376 42.4661 12.07 42.4661C10.0584 42.4661 0 24.2663 0 16.1776C0 8.08878 11.4806 0 22.1284 0C32.7762 0 43.8444 8.08878 43.8444 16.1776C43.8444 24.2663 33.786 42.4661 31.7744 42.4661Z",
    transform: "translate(756.087 162.14) scale(1.25 -1.25)",
    fill: "#F4ABBA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M67.2 41.5373C67.2 51.7341 58.9 60 48.6632 60C42.4485 60 36.9647 56.9447 33.6 52.2748C30.2372 56.9447 24.7515 60 18.5387 60C8.29996 60 0 51.7341 0 41.5373C0 40.0929 0.184107 38.6934 0.499724 37.3445C3.07538 21.4188 20.8551 4.6138 33.6 0C46.343 4.6138 64.1265 21.4188 66.6965 37.3445C67.0159 38.6934 67.2 40.0929 67.2 41.5373Z",
    transform: "translate(966 162) scale(1.25 -1.25)",
    fill: "#E75A70",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M24.4396 14.5355L17.2556 17.1848L14.5954 24.3394C14.323 25.0747 13.6185 25.563 12.8332 25.563C12.0479 25.563 11.3434 25.0747 11.0729 24.3394L8.41268 17.1848L1.22865 14.5355C0.490333 14.2642 0 13.5626 0 12.7824C0 12.0004 0.490333 11.2988 1.22865 11.0275L8.41268 8.37819L11.0729 1.22361C11.3434 0.488323 12.0479 0 12.8332 0C13.6185 0 14.323 0.488323 14.5954 1.22361L17.2556 8.37819L24.4396 11.0275C25.1779 11.2988 25.6664 12.0004 25.6664 12.7824C25.6664 13.5626 25.1779 14.2642 24.4396 14.5355Z",
    transform: "translate(1015.84 156.453) scale(1.25 -1.25)",
    fill: "#FDCB58",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M16.9249 10.7936L12.4819 12.4326L10.838 16.8555C10.5638 17.5908 9.86113 18.0773 9.07585 18.0773C8.28869 18.0773 7.58607 17.5908 7.31366 16.8555L5.66794 12.4326L1.22677 10.7936C0.488454 10.5204 0 9.8207 0 9.03864C0 8.25657 0.488454 7.55683 1.22677 7.28367L5.66794 5.64657L7.31366 1.22174C7.58607 0.486451 8.28869 0 9.07585 0C9.86113 0 10.5638 0.486451 10.838 1.22174L12.4819 5.64657L16.9249 7.28367C17.6632 7.55683 18.1517 8.25657 18.1517 9.03864C18.1517 9.8207 17.6632 10.5204 16.9249 10.7936Z",
    transform: "translate(971.221 114.355) scale(1.25 -1.25)",
    fill: "#FDCB58",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M65.3333 45C65.3333 52.9725 59.4701 58.125 50.4 58.125C49.3677 58.125 48.5333 57.285 48.5333 56.25C48.5333 55.215 49.3677 54.375 50.4 54.375C53.7675 54.375 61.6 53.4619 61.6 45C61.6 39.5981 58.1448 37.1775 54.0325 36.2025C53.7264 36.3394 53.4203 36.4781 53.0843 36.5625C46.5491 38.2031 44.8 35.625 33.6 35.625C25.8253 35.625 23.4472 43.8881 20.8469 48.9487C20.1637 52.785 18.2952 60 16.8 60C15.6613 60 14.1773 56.1994 13.1917 52.3837C11.9653 55.2619 10.3656 58.125 9.33333 58.125C8.00613 58.125 6.68267 53.3906 6.02747 49.3013C2.5424 46.9125 0 43.4494 0 39.375C0 33.75 13.0667 30 13.0667 30C17.0203 27.93 18.1869 24.8119 19.236 21.9825C23.0851 10.0125 22.6221 0 25.2 0C27.7779 0 29.8667 6.29437 29.8667 14.0625C29.8667 14.46 29.8573 14.85 29.8461 15.2381C35.7355 15.4275 42.4555 17.2538 48.1208 15.7875C50.6595 7.36313 51.2699 0 53.2 0C54.9883 0 56.5413 7.095 57.3235 14.0325C57.3813 14.2969 57.4243 14.5894 57.4243 14.9569L57.4429 15.1594C57.5027 15.7575 57.5568 16.3519 57.6053 16.9369L58.5667 27.4219C58.5667 29.5069 58.0925 31.5788 57.1592 33.24C62.4381 35.2106 65.3333 39.2644 65.3333 45Z",
    transform: "translate(1183.33 223) scale(1.25 -1.25)",
    fill: "#C1694F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M3.73333 1.875C3.73333 0.84 2.89707 0 1.86667 0C0.836267 0 0 0.84 0 1.875C0 2.91 0.836267 3.75 1.86667 3.75C2.89707 3.75 3.73333 2.91 3.73333 1.875Z",
    transform: "translate(1195 171.438) scale(1.25 -1.25)",
    fill: "#292F33",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M5.6 4.92187C3.73333 3.75 3.73333 0 2.8 0C1.86667 0 0 2.205 0 4.92187C0 7.64062 7.89413 6.36375 5.6 4.92187Z",
    transform: "translate(1181 176.125) scale(1.25 -1.25)",
    fill: "#292F33",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M0.934455 0C0.590988 0 0.262455 0.189375 0.0981879 0.5175C-0.131412 0.980625 0.0552546 1.545 0.516321 1.77563C4.51285 3.78188 12.0411 1.92563 12.3603 1.84688C12.8606 1.72125 13.163 1.21313 13.0379 0.710625C12.9147 0.21 12.407 -0.09 11.9067 0.028125C11.8358 0.046875 4.72752 1.79438 1.35072 0.099375C1.21632 0.031875 1.07445 0 0.934455 0Z",
    transform: "translate(1186.83 177.297) scale(1.25 -1.25)",
    fill: "#662113",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M10.2667 0C10.0893 0 9.91013 0.050625 9.7496 0.1575C9.69547 0.195 4.34 3.75 0.933333 3.75C0.418133 3.75 0 4.17 0 4.6875C0 5.205 0.418133 5.625 0.933333 5.625C4.90373 5.625 10.5467 1.87688 10.7856 1.7175C11.2131 1.43063 11.3307 0.849375 11.0451 0.418125C10.864 0.14625 10.5691 0 10.2667 0Z",
    transform: "translate(1186.83 181.984) scale(1.25 -1.25)",
    fill: "#662113",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("clipPath", {
    id: "clip0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("rect", {
    width: "1344",
    height: "224",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["113482249", [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]]])
  }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "113482249",
    css: ".globe.__jsx-style-dynamic-selector{height:".concat(props.windowWidth, "px;opacity:").concat(props.windowOn ? 1 : 0, ";overflow:hidden;-webkit-transform:translate(0);-ms-transform:translate(0);transform:translate(0);border-radius:50%;box-shadow:0px 5px 10px rgba(0,0,0,0.1);width:").concat(props.windowWidth, "px;background-color:white;z-index:100000;position:fixed;}.globe.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector{position:absolute;-webkit-transform:translateX(").concat(-props.windowWidth * props.offset + "px", ");-ms-transform:translateX(").concat(-props.windowWidth * props.offset + "px", ");transform:translateX(").concat(-props.windowWidth * props.offset + "px", ");background-color:rgba(255,255,255,1);height:100%;width:600%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2xvYmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RnQixBQUcrQyxBQWVyQixrQkFFa0Msb0JBaEJkLHFDQUNyQixnQkFDTyxpRkFDTixXQWN1QixPQVpELDhCQWEzQixVQVp5QixFQWExQixXQUNiLHdCQWJ3Qix1QkFDUCxlQUNELGVBRWhCIiwiZmlsZSI6ImNvbXBvbmVudHMvZ2xvYmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25vYWhnYWxsYW50L0RvY3VtZW50cy9Xb3JrL3BlcnNvbmFsIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2xvYmUgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJnbG9iZVwiPlxuICA8c3ZnIHdpZHRoPVwiMTM0NFwiIGhlaWdodD1cIjIyNFwiIHZpZXdCb3g9XCIwIDAgMTM0NCAyMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxnIGNsaXAtcGF0aD1cInVybCgjY2xpcDApXCI+XG48ZWxsaXBzZSBjeD1cIjUyLjA4MTNcIiBjeT1cIjEwNC43MDZcIiByeD1cIjUyLjA4MTNcIiByeT1cIjEwNC43MDZcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNjAuMjAyNCAxNDAuNzA0KVwiIGZpbGw9XCIjN0E3RUNGXCIvPlxuPHBhdGggZD1cIk0xMS41ODk4IDguOTE4NDFDMTEuNTg5OCAzLjk5MzIyIDguOTk1OTggMCA1Ljc5NDg5IDBDMi41OTM3OSAwIDAgMy45OTMyMiAwIDguOTE4NDFDMCAxMy44NDU4IDIuNTkzNzkgMTcuODM5MSA1Ljc5NDg5IDE3LjgzOTFDOC45OTU5OCAxNy44MzkxIDExLjU4OTggMTMuODQ1OCAxMS41ODk4IDguOTE4NDFaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDYyLjk3MDEgMTMxLjU3Nikgc2NhbGUoMS4yNSAtMS4yNSlcIiBmaWxsPVwiI0ZGQzA5RFwiLz5cbjxwYXRoIGQ9XCJNMTEuNTg5OCA4LjkxODQxQzExLjU4OTggMy45OTMyMiA4Ljk5NTk4IDAgNS43OTQ4OSAwQzIuNTkzNzkgMCAwIDMuOTkzMjIgMCA4LjkxODQxQzAgMTMuODQ1OCAyLjU5Mzc5IDE3LjgzOTEgNS43OTQ4OSAxNy44MzkxQzguOTk1OTggMTcuODM5MSAxMS41ODk4IDEzLjg0NTggMTEuNTg5OCA4LjkxODQxWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDYuOTk2IDEzMS41NzYpIHNjYWxlKDEuMjUgLTEuMjUpXCIgZmlsbD1cIiNGRkMwOURcIi8+XG48cGF0aCBkPVwiTTAgMzIuMTkxQzAgNTEuMjAwNiAxNC41Mjg5IDY2LjYxMTYgMzIuNDUxNCA2Ni42MTE2QzUwLjM3MzggNjYuNjExNiA2NC45MDI3IDUxLjIwMDYgNjQuOTAyNyAzMi4xOTFDNjQuOTAyNyAxMy4xODM2IDUwLjM3MzggNi4xMjM3OWUtMDcgMzIuNDUxNCA2LjEyMzc5ZS0wN0MxNC41Mjg5IDYuMTIzNzllLTA3IDAgMTMuMTgzNiAwIDMyLjE5MVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzEuNjYyIDE2Mi4yMzQpIHNjYWxlKDEuMjUgLTEuMjUpXCIgZmlsbD1cIiNGRkMwOURcIi8+XG48cGF0aCBkPVwiTTIuMzE3OTYgMEMxLjAzODQ0IDAgMCAwLjk5NjYzMyAwIDIuMjI5NlY2LjY4ODgxQzAgNy45MTk1NSAxLjAzODQ0IDguOTE4NDEgMi4zMTc5NiA4LjkxODQxQzMuNTk3NDcgOC45MTg0MSA0LjYzNTkxIDcuOTE5NTUgNC42MzU5MSA2LjY4ODgxVjIuMjI5NkM0LjYzNTkxIDAuOTk2NjMzIDMuNTk3NDcgMCAyLjMxNzk2IDBaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkxLjk0NDIgMTI2LjAwMSkgc2NhbGUoMS4yNSAtMS4yNSlcIiBmaWxsPVwiIzY2MjExM1wiLz5cbjxwYXRoIGQ9XCJNMi4zMTc5NiAwQzEuMDM2MTMgMCAwIDAuOTk2NjMzIDAgMi4yMjk2VjYuNjg4ODFDMCA3LjkxOTU1IDEuMDM2MTMgOC45MTg0MSAyLjMxNzk2IDguOTE4NDFDMy41OTk3OCA4LjkxODQxIDQuNjM1OTEgNy45MTk1NSA0LjYzNTkxIDYuNjg4ODFWMi4yMjk2QzQuNjM1OTEgMC45OTY2MzMgMy41OTk3OCAwIDIuMzE3OTYgMFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTI2LjcxNCAxMjYuMDAxKSBzY2FsZSgxLjI1IC0xLjI1KVwiIGZpbGw9XCIjNjYyMTEzXCIvPlxuPHBhdGggZD1cIk0xNi4yMjcyIDBDNi41MTk1NyAwIDEuNDkxOTMgMi4zNjU2MSAxLjI4MzMxIDIuNDYzNzFDMC4xMzgyNDMgMy4wMTQ0MiAtMC4zMjc2NjYgNC4zNTQ0MiAwLjI0NDg2OSA1LjQ1NTg0QzAuODE3NDA0IDYuNTUyOCAyLjE5ODkgNy4wMDA5NSAzLjM0NjI5IDYuNDU2OTNDMy40NjQ1MSA2LjQwMzQyIDcuODA4MzYgNC40NTkyMSAxNi4yMjcyIDQuNDU5MjFDMjQuNzIyNSA0LjQ1OTIxIDI5LjA2ODYgNi40MzkwOSAyOS4xMTI3IDYuNDYxMzlDMzAuMjYyNCA2Ljk5ODcyIDMxLjY0NjIgNi41MzcyIDMyLjIwOTUgNS40NDAyM0MzMi43NzI3IDQuMzQxMDQgMzIuMzExNSAzLjAxNDQyIDMxLjE3MSAyLjQ2MzcxQzMwLjk2MDEgMi4zNjU2MSAyNS45MzI0IDAgMTYuMjI3MiAwWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MS45NDI1IDE0OC4yOTcpIHNjYWxlKDEuMjUgLTEuMjUpXCIgZmlsbD1cIiNDMTY5NEZcIi8+XG48cGF0aCBkPVwiTTYuOTUzODcgMEgyLjMxNzk2QzEuMDM4NDQgMCAwIDAuOTk2NjMzIDAgMi4yMjk2QzAgMy40NjI1NyAxLjAzODQ0IDQuNDU5MjEgMi4zMTc5NiA0LjQ1OTIxSDYuOTUzODdDOC4yMzU2OSA0LjQ1OTIxIDkuMjcxODIgMy40NjI1NyA5LjI3MTgyIDIuMjI5NkM5LjI3MTgyIDAuOTk2NjMzIDguMjM1NjkgMCA2Ljk1Mzg3IDBaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwNi40MzEgMTM0LjM2Mykgc2NhbGUoMS4yNSAtMS4yNSlcIiBmaWxsPVwiI0MxNjk0RlwiLz5cbjxwYXRoIGQ9XCJNMzQuNzY5MyA0MC4yNTg3QzEzLjM3NDYgNDAuMjU4NyAwIDI1Ljg1MSAwIDEzLjg0NjhDMCAxLjg0MDM2IDIuNjc0OTIgLTIuOTYyMjEgNS4zNDk4NCAxLjg0MDM2QzguMDI0NzYgNi42NDI5MiAxMC42OTc0IDExLjQ0NTUgMTAuNjk3NCAxMS40NDU1QzEwLjY5NzQgMTEuNDQ1NSAxOS40ODcgMTEuNzIyIDI0LjgzNDYgMTYuNTI0NUMyNC44MzQ2IDE2LjUyNDUgMjIuMzUyIDcuNjA2MTEgNDAuMTIxNSAxNi4yNDU4QzQwLjEyMTUgMTYuMjQ1OCAzOS43MzY3IDcuNjA2MTEgNTIuMTU0IDE2LjUyNDVDNTIuMTU0IDE2LjUyNDUgNjEuNTE2MiAxMy44NDY4IDY0LjE4NjUgMS44NDAzNkM2NC45MzA1IC0xLjQ5MDY3IDY5LjUzODYgMS44NDAzNiA2OS41Mzg2IDEzLjg0NjhDNjkuNTM4NiAyNS44NTEgNTguODQxMyA0MC4yNTg3IDM0Ljc2OTMgNDAuMjU4N1pcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNjguNzY1MyAxMTUuOTk5KSBzY2FsZSgxLjI1IC0xLjI1KVwiIGZpbGw9XCIjODE0QzFEXCIvPlxuPHBhdGggZD1cIk0zNi45OTY5IDI4LjE5ODJMMzEuNjM0OCAyMi44MDdDMzEuNjM0OCAyMi44MDcgMjguMDU4MSAyMS4wMTA2IDI0LjQ4MzQgMjQuNjA1NEMyMC45MDQ3IDI4LjE5ODIgMjIuNjk0MSAzMS43OTMgMjIuNjk0MSAzMS43OTNMMjguMDU4MSAzNy4xODQyQzI5Ljg0NzQgMzguOTgwNiAyNy42OTgzIDQwLjYyNzYgMjYuMDg1IDQwLjYyNzZDMTguMTYzMSA0MC42Mjc2IDExLjc0MyAzNC4xNzUxIDExLjc0MyAyNi4yMTUxQzExLjc0MyAyNS4wOTQ4IDExLjg4MzggMjQuMDExOCAxMi4xMjI0IDIyLjk2NDJMMCAxMC43ODA0TDEwLjcyNjIgMEwyMi44NTA1IDEyLjE4MzhDMjMuODkyOCAxMS45NDIgMjQuOTcwMyAxMS44MDI1IDI2LjA4NSAxMS44MDI1QzM0LjAwNDkgMTEuODAyNSA0MC40MjUgMTguMjU1IDQwLjQyNSAyNi4yMTUxQzQwLjQyNSAyNy44NDY0IDM4Ljc4NDMgMjkuOTk2NiAzNi45OTY5IDI4LjE5ODJaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMyOS40NjkgMTIzLjc4NSkgc2NhbGUoMS4yNSAtMS4yNSlcIiBmaWxsPVwiIzg4OTlBNlwiLz5cbjxwYXRoIGQ9XCJNNy41MzQ3IDQuNDI2NjdDNS45MzMxMiA0LjQyNjY3IDQuNjM2NTkgNS43MzE3MiA0LjYzNjU5IDcuMzM5NDVDNC42MzY1OSA4Ljk0OTE1IDUuOTMzMTIgMTAuMjU0MiA3LjUzNDcgMTAuMjU0MkM5LjEzNjI5IDEwLjI1NDIgMTAuNDMyOCA4Ljk0OTE1IDEwLjQzMjggNy4zMzk0NUMxMC40MzI4IDUuNzMxNzIgOS4xMzYyOSA0LjQyNjY3IDcuNTM0NyA0LjQyNjY3Wk0yNi4wMjgzIDM2LjgwNTRMMi4xOTQxMiAxMi44NTA1Qy0wLjczMTM3MyA5LjkxMDI1IC0wLjczMTM3MyA1LjE0NDA1IDIuMTk0MTIgMi4yMDM3NUM1LjExOTYxIC0wLjczNDU4NCA5Ljg1OTg0IC0wLjczNDU4NCAxMi43ODczIDIuMjAzNzVMMzYuNjE5NSAyNi4xNTg2TDI2LjAyODMgMzYuODA1NFYzNi44MDU0WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyOTYuNjY4IDE1Ni43NTMpIHNjYWxlKDEuMjUgLTEuMjUpXCIgZmlsbD1cIiM4ODk5QTZcIi8+XG48cGF0aCBkPVwiTTQ3LjI3ODIgMS43OTE1NkM0OS41NTg0IC0wLjUwMDE0MyA1My4xODc5IC0wLjYwODI0MyA1NS4zMzcgMS41NTM3NEM1Ny40ODgxIDMuNzE1NzMgNTcuMzgwNiA3LjM2MTYyIDU1LjEwMDQgOS42NTMzM0w5LjYwNDcxIDU1LjM4MTNDNy4zMjQ1NCA1Ny42NzMgMy42OTcwMSA1Ny43ODExIDEuNTQ1OTIgNTUuNjE5MUMtMC42MDUxOCA1My40NTcxIC0wLjQ5NzYyNCA0OS44MTEyIDEuNzgyNTQgNDcuNTE5NUw0Ny4yNzgyIDEuNzkxNTZaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMwOC4yNjUgMTU3KSBzY2FsZSgxLjI1IC0xLjI1KVwiIGZpbGw9XCIjRjQ5MDBDXCIvPlxuPHBhdGggZD1cIk00MS45MzU1IDMyLjMyMDZDNDEuOTM1NSAzMi4zMjA2IDMwLjIwMjMgMzguMjE2OSAyMC40MjQ2IDI4LjM4OTdDMTEuNjI0NiAxOS41NDUyIDYuNzM1NzYgMTQuNjMxNiA2LjczNTc2IDE0LjYzMTZDNi43MzU3NiAxNC42MzE2IDQuNzgwMjEgMTYuNTk3MSAyLjgyNDY3IDE0LjYzMTZMMC44NjkxMyAxMi42NjYyQzAuODY5MTMgMTIuNjY2MiAtMS4wODY0MSAxMC43MDA3IDAuODY5MTMgOC43MzUzQzIuODI0NjcgNi43Njk4NSA4LjY5MTMgMC44NzM1MyA4LjY5MTMgMC44NzM1M0M4LjY5MTMgMC44NzM1MyAxMC42NDY4IC0xLjA5MTkxIDEyLjYwMjQgMC44NzM1M0wxNC41NTc5IDIuODM4OTdDMTQuNTU3OSAyLjgzODk3IDE2LjUxMzUgNC44MDQ0MSAxNC41NTc5IDYuNzY5ODVDMTQuNTEyOSA2LjgxNTA2IDE0LjQ1NDMgNi44NzQwMiAxNC40MDU0IDYuOTIzMTZDMTUuOTExMiA4LjM4MzQ4IDE4LjE2NTkgOS44NzEzMiAyMC40MjQ2IDguNzM1M0wyOC4yNDY3IDE2LjU5NzFDMjguMjQ2NyAxNi41OTcxIDI2LjI5MTIgMjIuNDkzNCAzMC4yMDIzIDI2LjQyNDNDMzQuMTEzMyAzMC4zNTUyIDM2LjA2ODkgMzAuMzU1MiAzOS45OCAzMC4zNTUyQzQzLjg5MTEgMzAuMzU1MiA0MS45MzU1IDMyLjMyMDYgNDEuOTM1NSAzMi4zMjA2WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyOTIgMTE1LjU5NCkgc2NhbGUoMS4yNSAtMS4yNSlcIiBmaWxsPVwiIzY2NzU3RlwiLz5cbjxwYXRoIGQ9XCJNNTYuMjEwNSAzLjc0OTM2QzU2LjIxMDUgMS42Nzg2MiA1NC41MzM2IDAgNTIuNDYzMiAwSDMuNzQ3MzdDMS42Nzg4MiAwIDAgMS42Nzg2MiAwIDMuNzQ5MzZWMzUuNjI0NUMwIDM3LjY5NTIgMS42Nzg4MiAzOS4zNzM5IDMuNzQ3MzcgMzkuMzczOUg1Mi40NjMyQzU0LjUzMzYgMzkuMzczOSA1Ni4yMTA1IDM3LjY5NTIgNTYuMjEwNSAzNS42MjQ1VjMuNzQ5MzZaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUyMy4wMjYgMTI2LjIxNykgc2NhbGUoMS4yNSAtMS4yNSlcIiBmaWxsPVwiI0NDRDZERFwiLz5cbjxwYXRoIGQ9XCJNNjcuNDUyNiAzLjc0OTM2QzY3LjQ1MjYgMS42Nzg2MiA2NS43NzU3IDAgNjMuNzA1MyAwSDMuNzQ3MzdDMS42Nzg4MiAwIDAgMS42Nzg2MiAwIDMuNzQ5MzZMMy43NDczNyAxMi44ODk0QzQuMzcxMzEgMTQuNzY1OSA1LjQyNjE5IDE2LjY0MDYgNy40OTQ3NCAxNi42NDA2SDU5Ljk1NzlDNjIuMDI4MyAxNi42NDA2IDYyLjkyMzkgMTQuNjg3NSA2My43MDUzIDEyLjg4OTRMNjcuNDUyNiAzLjc0OTM2WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MTYgMTQ3LjAxOCkgc2NhbGUoMS4yNSAtMS4yNSlcIiBmaWxsPVwiI0NDRDZERFwiLz5cbjxwYXRoIGQ9XCJNNzEuMiA3LjU3OTAxSDBMMS44NzM2OCAwSDcxLjJWNy41NzkwMVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTE2IDE1Mikgc2NhbGUoMS4yNSAtMS4yNSlcIiBmaWxsPVwiIzlBQUFCNFwiLz5cbjxwYXRoIGQ9XCJNNDguNzE1OCAxLjg3NDY4QzQ4LjcxNTggMC44MzgzNzcgNDcuODc4MyAwIDQ2Ljg0MjEgMEgxLjg3MzY4QzAuODM5NDExIDAgMCAwLjgzODM3NyAwIDEuODc0NjhWMzAuMDAwNUMwIDMxLjAzNDkgMC44Mzk0MTEgMzEuODc1MSAxLjg3MzY4IDMxLjg3NTFINDYuODQyMUM0Ny44NzgzIDMxLjg3NTEgNDguNzE1OCAzMS4wMzQ5IDQ4LjcxNTggMzAuMDAwNVYxLjg3NDY4WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MjcuNzExIDEyMS41Mykgc2NhbGUoMS4yNSAtMS4yNSlcIiBmaWxsPVwiIzVEQURFQ1wiLz5cbjxwYXRoIGQ9XCJNNTUuNjE1NSAxLjg3NDY4TDU0LjE5MTUgNS45MzU4NkM1My43NDM3IDYuNzk0NzggNTMuMDAxNyA3LjUwMDU4IDUxLjk2NzQgNy41MDA1OEgzLjUzNDU1QzIuNTAwMjggNy41MDA1OCAxLjgzNjk5IDYuNzM4NzYgMS4zNjg1NyA1LjU2NjE1TDAuMDc5NDc5NyAxLjg3NDY4Qy0wLjMyODk4MyAwLjc2MTgyMiAwLjkxODg5IDAgMS45NTMxNiAwSDE2LjE1MTlDMTYuMTUxOSAwIDE3LjkwNzYgMC4wODc3NTg4IDE4LjIxODYgMS4xMzUyNkMxOC41Nzg0IDIuMzQ1MjIgMTguOTk2MiA0LjE2NzYxIDE5LjA4NjEgNC40ODY5MUMxOS4yMjQ4IDQuOTc5ODUgMTkuODEzMSA1LjQ3ODQgMjAuNjkgNS40Nzg0SDM2Ljc2MDZDMzcuNjk3NCA1LjQ3ODQgMzguMTYwMiA1LjAwNTk5IDM4LjI4MDIgNC40MjE1NUMzOC4zNTg4IDQuMDQwNjQgMzguODY2NiAyLjI5MTA3IDM5LjEwMDggMS4wOTQxOUMzOS4zMDg4IDAuMDI5ODc1MyA0MS4zODY3IDAgNDEuMzg2NyAwSDUzLjc0MThDNTQuNzc3OSAwIDU2LjAyNTggMC44Nzk0NTYgNTUuNjE1NSAxLjg3NDY4XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUyMy41NTEgMTM3Ljc5KSBzY2FsZSgxLjI1IC0xLjI1KVwiIGZpbGw9XCIjQUVCQkMxXCIvPlxuPHBhdGggZD1cIk0xNS41MDYyIDBIMC45MjcwMjVDMC4yMjQzOTMgMCAtMC4wODEwMTY0IDAuNjQwNDUzIDAuMDE4Mjg4OCAxLjI2MDM3QzAuMTE5NDY4IDEuODc4NDEgMC42OTI4MTUgNC42MDY0MSAwLjczNTkxIDQuOTI1N0MwLjc4MDg3OCA1LjI0NDk5IDEuMjUxMTcgNS42MjU5IDEuNzE3NzIgNS42MjU5SDE0Ljg2MTZDMTUuNDE4MSA1LjYyNTkgMTUuNzc5NyA1LjMyMTU1IDE1Ljg5MjEgNC43MTA5N0MxNi4wMDQ2IDQuMTAyMjYgMTYuNDU4IDEuNjQ4NzUgMTYuNDkzNiAxLjA4ODU4QzE2LjUzMTEgMC41MjY1NTMgMTYuMTc4OCAwIDE1LjUwNjIgMFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTQ5LjAyMiAxNDAuMjgxKSBzY2FsZSgxLjI1IC0xLjI1KVwiIGZpbGw9XCIjOUFBQUI0XCIvPlxuPG1hc2sgaWQ9XCJtYXNrMFwiIG1hc2stdHlwZT1cImFscGhhXCIgbWFza1VuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4PVwiNjcyXCIgeT1cIjBcIiB3aWR0aD1cIjIyNFwiIGhlaWdodD1cIjIyNFwiPlxuPGNpcmNsZSBjeD1cIjExMlwiIGN5PVwiMTEyXCIgcj1cIjExMlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg2NzIpXCIgZmlsbD1cIiNDRENEQ0RcIi8+XG48L21hc2s+XG48ZyBtYXNrPVwidXJsKCNtYXNrMClcIj5cbjxyZWN0IHdpZHRoPVwiNlwiIGhlaWdodD1cIjY2XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDc4MSAxNjIpXCIgZmlsbD1cIiM3N0IyNTVcIi8+XG48L2c+XG48cGF0aCBkPVwiTTY3Ljg5NTcgMjguMzEwN0M2MS4wOTIyIDI4LjMxMDcgNDMuOTU2OCAyMS4xMzQgMzYuMjA5OCAxMy44MzU5VjM4LjQyMTdDMzYuMjA5OCAzOS41NCAzNS4zMTA2IDQwLjQ0MzkgMzQuMTk4MiA0MC40NDM5QzMzLjA4NzcgNDAuNDQzOSAzMi4xODY1IDM5LjU0IDMyLjE4NjUgMzguNDIxN1YxMy40NjU4QzI0LjYzNjcgMjAuODkxMyA3LjAyMjUgMjguMzEwNyAwLjEwNDM2MyAyOC4zMTA3Qy0xLjc2NDQ4IDI4LjMxMDcgMjEuOTUzMSAwLjAxNjE3NzQgMzIuMTg2NSAyLjgzMzA5VjIuMDIyMTlDMzIuMTg2NSAwLjkwMzkyMSAzMy4wODc3IDAgMzQuMTk4MiAwQzM1LjMxMDYgMCAzNi4yMDk4IDAuOTAzOTIxIDM2LjIwOTggMi4wMjIxOVYyLjc0MjA5QzQ2LjY0NjQgMC43MzIwMzQgNjkuNzQwNCAyOC4zMTA3IDY3Ljg5NTcgMjguMzEwN1pcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzQxIDE5NSkgc2NhbGUoMS4yNSAtMS4yNSlcIiBmaWxsPVwiIzc3QjI1NVwiLz5cbjxwYXRoIGQ9XCJNMjguMTYzNCAxOS4zNzg3QzI4LjE2MzQgNi41MzU3MyAyNC43Mjk1IDAgMTQuMDgxNyAwQzMuNDMxOTEgMCAwIDYuNTM1NzMgMCAxOS4zNzg3QzAgMzIuMjIxNiAxMC4wNTg0IDQ2LjUxMDUgMTQuMDgxNyA0Ni41MTA1QzE4LjEwNSA0Ni41MTA1IDI4LjE2MzQgMzIuMjIxNiAyOC4xNjM0IDE5LjM3ODdaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDc2Ni4xNDYgMTYyLjEzOCkgc2NhbGUoMS4yNSAtMS4yNSlcIiBmaWxsPVwiI0VBNTk2RVwiLz5cbjxwYXRoIGQ9XCJNMzEuNzc0NCA0Mi40NjYxQzMwLjgwODcgNDIuNDY2MSAyMy41MTQ0IDEzLjYwNzMgMjIuMTEyMyAzLjQ4MDJDMjAuNjExNiAxMy42MDczIDEzLjAzNzYgNDIuNDY2MSAxMi4wNyA0Mi40NjYxQzEwLjA1ODQgNDIuNDY2MSAwIDI0LjI2NjMgMCAxNi4xNzc2QzAgOC4wODg3OCAxMS40ODA2IDAgMjIuMTI4NCAwQzMyLjc3NjIgMCA0My44NDQ0IDguMDg4NzggNDMuODQ0NCAxNi4xNzc2QzQzLjg0NDQgMjQuMjY2MyAzMy43ODYgNDIuNDY2MSAzMS43NzQ0IDQyLjQ2NjFaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDc1Ni4wODcgMTYyLjE0KSBzY2FsZSgxLjI1IC0xLjI1KVwiIGZpbGw9XCIjRjRBQkJBXCIvPlxuPHBhdGggZD1cIk02Ny4yIDQxLjUzNzNDNjcuMiA1MS43MzQxIDU4LjkgNjAgNDguNjYzMiA2MEM0Mi40NDg1IDYwIDM2Ljk2NDcgNTYuOTQ0NyAzMy42IDUyLjI3NDhDMzAuMjM3MiA1Ni45NDQ3IDI0Ljc1MTUgNjAgMTguNTM4NyA2MEM4LjI5OTk2IDYwIDAgNTEuNzM0MSAwIDQxLjUzNzNDMCA0MC4wOTI5IDAuMTg0MTA3IDM4LjY5MzQgMC40OTk3MjQgMzcuMzQ0NUMzLjA3NTM4IDIxLjQxODggMjAuODU1MSA0LjYxMzggMzMuNiAwQzQ2LjM0MyA0LjYxMzggNjQuMTI2NSAyMS40MTg4IDY2LjY5NjUgMzcuMzQ0NUM2Ny4wMTU5IDM4LjY5MzQgNjcuMiA0MC4wOTI5IDY3LjIgNDEuNTM3M1pcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTY2IDE2Mikgc2NhbGUoMS4yNSAtMS4yNSlcIiBmaWxsPVwiI0U3NUE3MFwiLz5cbjxwYXRoIGQ9XCJNMjQuNDM5NiAxNC41MzU1TDE3LjI1NTYgMTcuMTg0OEwxNC41OTU0IDI0LjMzOTRDMTQuMzIzIDI1LjA3NDcgMTMuNjE4NSAyNS41NjMgMTIuODMzMiAyNS41NjNDMTIuMDQ3OSAyNS41NjMgMTEuMzQzNCAyNS4wNzQ3IDExLjA3MjkgMjQuMzM5NEw4LjQxMjY4IDE3LjE4NDhMMS4yMjg2NSAxNC41MzU1QzAuNDkwMzMzIDE0LjI2NDIgMCAxMy41NjI2IDAgMTIuNzgyNEMwIDEyLjAwMDQgMC40OTAzMzMgMTEuMjk4OCAxLjIyODY1IDExLjAyNzVMOC40MTI2OCA4LjM3ODE5TDExLjA3MjkgMS4yMjM2MUMxMS4zNDM0IDAuNDg4MzIzIDEyLjA0NzkgMCAxMi44MzMyIDBDMTMuNjE4NSAwIDE0LjMyMyAwLjQ4ODMyMyAxNC41OTU0IDEuMjIzNjFMMTcuMjU1NiA4LjM3ODE5TDI0LjQzOTYgMTEuMDI3NUMyNS4xNzc5IDExLjI5ODggMjUuNjY2NCAxMi4wMDA0IDI1LjY2NjQgMTIuNzgyNEMyNS42NjY0IDEzLjU2MjYgMjUuMTc3OSAxNC4yNjQyIDI0LjQzOTYgMTQuNTM1NVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTAxNS44NCAxNTYuNDUzKSBzY2FsZSgxLjI1IC0xLjI1KVwiIGZpbGw9XCIjRkRDQjU4XCIvPlxuPHBhdGggZD1cIk0xNi45MjQ5IDEwLjc5MzZMMTIuNDgxOSAxMi40MzI2TDEwLjgzOCAxNi44NTU1QzEwLjU2MzggMTcuNTkwOCA5Ljg2MTEzIDE4LjA3NzMgOS4wNzU4NSAxOC4wNzczQzguMjg4NjkgMTguMDc3MyA3LjU4NjA3IDE3LjU5MDggNy4zMTM2NiAxNi44NTU1TDUuNjY3OTQgMTIuNDMyNkwxLjIyNjc3IDEwLjc5MzZDMC40ODg0NTQgMTAuNTIwNCAwIDkuODIwNyAwIDkuMDM4NjRDMCA4LjI1NjU3IDAuNDg4NDU0IDcuNTU2ODMgMS4yMjY3NyA3LjI4MzY3TDUuNjY3OTQgNS42NDY1N0w3LjMxMzY2IDEuMjIxNzRDNy41ODYwNyAwLjQ4NjQ1MSA4LjI4ODY5IDAgOS4wNzU4NSAwQzkuODYxMTMgMCAxMC41NjM4IDAuNDg2NDUxIDEwLjgzOCAxLjIyMTc0TDEyLjQ4MTkgNS42NDY1N0wxNi45MjQ5IDcuMjgzNjdDMTcuNjYzMiA3LjU1NjgzIDE4LjE1MTcgOC4yNTY1NyAxOC4xNTE3IDkuMDM4NjRDMTguMTUxNyA5LjgyMDcgMTcuNjYzMiAxMC41MjA0IDE2LjkyNDkgMTAuNzkzNlpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTcxLjIyMSAxMTQuMzU1KSBzY2FsZSgxLjI1IC0xLjI1KVwiIGZpbGw9XCIjRkRDQjU4XCIvPlxuPHBhdGggZD1cIk02NS4zMzMzIDQ1QzY1LjMzMzMgNTIuOTcyNSA1OS40NzAxIDU4LjEyNSA1MC40IDU4LjEyNUM0OS4zNjc3IDU4LjEyNSA0OC41MzMzIDU3LjI4NSA0OC41MzMzIDU2LjI1QzQ4LjUzMzMgNTUuMjE1IDQ5LjM2NzcgNTQuMzc1IDUwLjQgNTQuMzc1QzUzLjc2NzUgNTQuMzc1IDYxLjYgNTMuNDYxOSA2MS42IDQ1QzYxLjYgMzkuNTk4MSA1OC4xNDQ4IDM3LjE3NzUgNTQuMDMyNSAzNi4yMDI1QzUzLjcyNjQgMzYuMzM5NCA1My40MjAzIDM2LjQ3ODEgNTMuMDg0MyAzNi41NjI1QzQ2LjU0OTEgMzguMjAzMSA0NC44IDM1LjYyNSAzMy42IDM1LjYyNUMyNS44MjUzIDM1LjYyNSAyMy40NDcyIDQzLjg4ODEgMjAuODQ2OSA0OC45NDg3QzIwLjE2MzcgNTIuNzg1IDE4LjI5NTIgNjAgMTYuOCA2MEMxNS42NjEzIDYwIDE0LjE3NzMgNTYuMTk5NCAxMy4xOTE3IDUyLjM4MzdDMTEuOTY1MyA1NS4yNjE5IDEwLjM2NTYgNTguMTI1IDkuMzMzMzMgNTguMTI1QzguMDA2MTMgNTguMTI1IDYuNjgyNjcgNTMuMzkwNiA2LjAyNzQ3IDQ5LjMwMTNDMi41NDI0IDQ2LjkxMjUgMCA0My40NDk0IDAgMzkuMzc1QzAgMzMuNzUgMTMuMDY2NyAzMCAxMy4wNjY3IDMwQzE3LjAyMDMgMjcuOTMgMTguMTg2OSAyNC44MTE5IDE5LjIzNiAyMS45ODI1QzIzLjA4NTEgMTAuMDEyNSAyMi42MjIxIDAgMjUuMiAwQzI3Ljc3NzkgMCAyOS44NjY3IDYuMjk0MzcgMjkuODY2NyAxNC4wNjI1QzI5Ljg2NjcgMTQuNDYgMjkuODU3MyAxNC44NSAyOS44NDYxIDE1LjIzODFDMzUuNzM1NSAxNS40Mjc1IDQyLjQ1NTUgMTcuMjUzOCA0OC4xMjA4IDE1Ljc4NzVDNTAuNjU5NSA3LjM2MzEzIDUxLjI2OTkgMCA1My4yIDBDNTQuOTg4MyAwIDU2LjU0MTMgNy4wOTUgNTcuMzIzNSAxNC4wMzI1QzU3LjM4MTMgMTQuMjk2OSA1Ny40MjQzIDE0LjU4OTQgNTcuNDI0MyAxNC45NTY5TDU3LjQ0MjkgMTUuMTU5NEM1Ny41MDI3IDE1Ljc1NzUgNTcuNTU2OCAxNi4zNTE5IDU3LjYwNTMgMTYuOTM2OUw1OC41NjY3IDI3LjQyMTlDNTguNTY2NyAyOS41MDY5IDU4LjA5MjUgMzEuNTc4OCA1Ny4xNTkyIDMzLjI0QzYyLjQzODEgMzUuMjEwNiA2NS4zMzMzIDM5LjI2NDQgNjUuMzMzMyA0NVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTE4My4zMyAyMjMpIHNjYWxlKDEuMjUgLTEuMjUpXCIgZmlsbD1cIiNDMTY5NEZcIi8+XG48cGF0aCBkPVwiTTMuNzMzMzMgMS44NzVDMy43MzMzMyAwLjg0IDIuODk3MDcgMCAxLjg2NjY3IDBDMC44MzYyNjcgMCAwIDAuODQgMCAxLjg3NUMwIDIuOTEgMC44MzYyNjcgMy43NSAxLjg2NjY3IDMuNzVDMi44OTcwNyAzLjc1IDMuNzMzMzMgMi45MSAzLjczMzMzIDEuODc1WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMTk1IDE3MS40MzgpIHNjYWxlKDEuMjUgLTEuMjUpXCIgZmlsbD1cIiMyOTJGMzNcIi8+XG48cGF0aCBkPVwiTTUuNiA0LjkyMTg3QzMuNzMzMzMgMy43NSAzLjczMzMzIDAgMi44IDBDMS44NjY2NyAwIDAgMi4yMDUgMCA0LjkyMTg3QzAgNy42NDA2MiA3Ljg5NDEzIDYuMzYzNzUgNS42IDQuOTIxODdaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDExODEgMTc2LjEyNSkgc2NhbGUoMS4yNSAtMS4yNSlcIiBmaWxsPVwiIzI5MkYzM1wiLz5cbjxwYXRoIGQ9XCJNMC45MzQ0NTUgMEMwLjU5MDk4OCAwIDAuMjYyNDU1IDAuMTg5Mzc1IDAuMDk4MTg3OSAwLjUxNzVDLTAuMTMxNDEyIDAuOTgwNjI1IDAuMDU1MjU0NiAxLjU0NSAwLjUxNjMyMSAxLjc3NTYzQzQuNTEyODUgMy43ODE4OCAxMi4wNDExIDEuOTI1NjMgMTIuMzYwMyAxLjg0Njg4QzEyLjg2MDYgMS43MjEyNSAxMy4xNjMgMS4yMTMxMyAxMy4wMzc5IDAuNzEwNjI1QzEyLjkxNDcgMC4yMSAxMi40MDcgLTAuMDkgMTEuOTA2NyAwLjAyODEyNUMxMS44MzU4IDAuMDQ2ODc1IDQuNzI3NTIgMS43OTQzOCAxLjM1MDcyIDAuMDk5Mzc1QzEuMjE2MzIgMC4wMzE4NzUgMS4wNzQ0NSAwIDAuOTM0NDU1IDBaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDExODYuODMgMTc3LjI5Nykgc2NhbGUoMS4yNSAtMS4yNSlcIiBmaWxsPVwiIzY2MjExM1wiLz5cbjxwYXRoIGQ9XCJNMTAuMjY2NyAwQzEwLjA4OTMgMCA5LjkxMDEzIDAuMDUwNjI1IDkuNzQ5NiAwLjE1NzVDOS42OTU0NyAwLjE5NSA0LjM0IDMuNzUgMC45MzMzMzMgMy43NUMwLjQxODEzMyAzLjc1IDAgNC4xNyAwIDQuNjg3NUMwIDUuMjA1IDAuNDE4MTMzIDUuNjI1IDAuOTMzMzMzIDUuNjI1QzQuOTAzNzMgNS42MjUgMTAuNTQ2NyAxLjg3Njg4IDEwLjc4NTYgMS43MTc1QzExLjIxMzEgMS40MzA2MyAxMS4zMzA3IDAuODQ5Mzc1IDExLjA0NTEgMC40MTgxMjVDMTAuODY0IDAuMTQ2MjUgMTAuNTY5MSAwIDEwLjI2NjcgMFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTE4Ni44MyAxODEuOTg0KSBzY2FsZSgxLjI1IC0xLjI1KVwiIGZpbGw9XCIjNjYyMTEzXCIvPlxuPC9nPlxuPGRlZnM+XG48Y2xpcFBhdGggaWQ9XCJjbGlwMFwiPlxuPHJlY3Qgd2lkdGg9XCIxMzQ0XCIgaGVpZ2h0PVwiMjI0XCIgZmlsbD1cIndoaXRlXCIvPlxuPC9jbGlwUGF0aD5cbjwvZGVmcz5cbjwvc3ZnPlxuICAgIDwvZGl2PlxuICBcbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZ2xvYmUge1xuICAgICAgICBoZWlnaHQ6ICR7cHJvcHMud2luZG93V2lkdGh9cHg7XG4gICAgICAgIG9wYWNpdHk6ICR7cHJvcHMud2luZG93T24gPyAxIDogMH07XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgLypib3JkZXI6IDVweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDYpOyovXG4gICAgICAgIGJveC1zaGFkb3c6MHB4IDVweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgd2lkdGg6ICR7cHJvcHMud2luZG93V2lkdGh9cHg7IFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDA7XG4gICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAvKmFuaW1hdGlvbjogcm90YXRpb25Jbm5lciAxcyBsaW5lYXIgMHMgaW5maW5pdGU7Ki9cbiAgICAgIH1cblxuICAgICAgLmdsb2JlIHN2ZyB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7IC0gcHJvcHMud2luZG93V2lkdGgqcHJvcHMub2Zmc2V0ICsgXCJweFwifSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDYwMCU7IFxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4gICAgKTtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmVcbiJdfQ== */\n/*@ sourceURL=components/globe.js */"),
    dynamic: [props.windowWidth, props.windowOn ? 1 : 0, props.windowWidth, -props.windowWidth * props.offset + "px"]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Globe);

/***/ }),

/***/ "./components/window.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globe__ = __webpack_require__("./components/globe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content__ = __webpack_require__("./components/content.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__backgrounds__ = __webpack_require__("./components/backgrounds.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_anchor_link_smooth_scroll__ = __webpack_require__("react-anchor-link-smooth-scroll");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_anchor_link_smooth_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_anchor_link_smooth_scroll__);
var _jsxFileName = "/Users/noahgallant/Documents/Work/personal/components/window.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Window =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Window, _React$Component);

  function Window() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Window);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Window.__proto__ || Object.getPrototypeOf(Window)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        'offset': 0,
        'windowWidth': 200,
        'windowOn': true
      }
    }), _temp));
  }

  _createClass(Window, [{
    key: "getScrollPercent",
    value: function getScrollPercent() {
      var h = document.documentElement,
          b = document.body,
          st = 'scrollTop',
          sh = 'scrollHeight';
      return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
    }
  }, {
    key: "fuck",
    value: function fuck(pc, r, limit, rate) {
      if (r >= limit) {
        return limit;
      }

      if (pc > r) {
        pc -= rate;

        if (pc < r) {
          return r;
        } else if (pc > r + 1) {
          return this.fuck(pc, r + 1, limit, rate);
        } else {
          return pc;
        }
      } else {
        return pc;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.addEventListener('scroll', function () {
        _this2.refreshWindow();
      });
      this.refreshWindow();
    }
  }, {
    key: "refreshWindow",
    value: function refreshWindow() {
      var screens = 6;
      var rate = 0.5;
      var total = rate * screens + (screens - 1);
      var offset = this.getScrollPercent() * total;
      offset = this.fuck(offset, 1, screens - 1, rate);
      var windowOn = document.documentElement.clientWidth > 700;
      this.setState({
        'offset': offset,
        'windowOn': windowOn
      });
    }
  }, {
    key: "render",
    value: function render() {
      var renderRole = function renderRole(role, i) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
          className: "role",
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
          href: role[0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, role[1]), " - ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
          className: "context",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, role[2]));
      };

      var renderRoleBr = function renderRoleBr(role, i) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
          className: "role",
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
          href: role[0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, role[1]), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
          className: "context",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, role[2]));
      };

      var renderRoles = function renderRoles(roles) {
        var nbr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (nbr) {
          roles = roles.map(renderRoleBr);
        } else {
          roles = roles.map(renderRole);
        }

        return roles;
      };

      var jobs = [["https://sight.industries", "Sight", "CEO"], ["https://nautil.us", "Nautilus", "Technology Lead"], ["https://columbia.edu", "Columbia", "Student, Researcher"], ["https://bcdfa,com", "Design for America", "President"]];
      var past = [["https://research.yale.edu", "Yale Medical School", "Researcher"], ["https://madewithover.com", "Over Apps", "Machine Learning Intern"]];
      var projects = [["https://sight.network", "Sight Network", "Removing ads and paywalls from internet publishing"], ["https://madewithover.com", "Jig", "Simplified music sharing"], ["https://www.medtronicdiabetes.com/products/sugar.iq-diabetes-assistant", "Sugar.IQ", "Intelligent diabetes management"]];
      var research = [["https://sight.network/whitepaper.pdf", "Sight Network", "Utilizing applied advantage theory to create an ad-less profit network for internet publishers"], ["../static/bitcoin.as.advantage.theory.gallant.pdf", "Bitcoin as Game Theory", "An exploration of applied advantage theory"], ["https://github.com/NoahGallant", "Distributed Sign-in", "Social-engineering-proof though advantage theory system"], ["https://github.com/NoahGallant", "Magicrop", "Magical object auto-cropping algorithm"]];
      var renderProjects = renderRoles(projects, true);
      var renderJobs = renderRoles(jobs);
      var renderPast = renderRoles(past);
      var renderResearch = renderRoles(research);
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        onresize: this.refreshWindow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]]) + " " + "container"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]]) + " " + "floating-container"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__backgrounds__["a" /* default */], {
        offset: this.state.offset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]]) + " " + "floating"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__globe__["a" /* default */], {
        offset: this.state.offset,
        windowOn: this.state.windowOn,
        windowWidth: this.state.windowWidth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]]) + " " + "scroll"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__content__["a" /* default */], {
        title: 'Hi, I\'m Noah Gallant',
        anchor: 'noah',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, "I'm an engineer, designer, artist, developer, and researcher."), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]]) + " " + "context"
      }, "Scroll for more.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__content__["a" /* default */], {
        title: 'My Work',
        anchor: 'work',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, "Current"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, renderJobs), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, "Past"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, renderPast)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__content__["a" /* default */], {
        title: 'My Philosophy',
        anchor: 'philosophy',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, "I believe in designing systems and technologies for humanity. Product innovation will drive society forward so long as we commit ourselves to making great products.", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, "\u201CDesign is not just what it looks like and feels like. Design is how it works.\u201D"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]]) + " " + "context"
      }, " - Steve Jobs"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__content__["a" /* default */], {
        title: 'Research',
        anchor: 'projects',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, renderResearch)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__content__["a" /* default */], {
        title: 'Projects',
        anchor: 'interests',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, renderProjects)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__content__["a" /* default */], {
        title: 'Reach me',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "https://twitter.com/nglnt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, "Twitter")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "mailto:nag2145@columbia.edu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, "Email")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "https://github.com/NoahGallant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, "Github")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "https://keybase.io/noahgallant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, "Keybase"))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]]) + " " + "location"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        src: "../static/globe.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }), "I am currently in ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }, "Durham, NC")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]]) + " " + "noah"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, "Work"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#philosophy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, "Philosophy"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#noah",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        src: "../static/noah.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#research",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, "Research"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]])
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, "Projects")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]]) + " " + "empty"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        id: "noah",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        id: "work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        id: "philosophy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        id: "research",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        id: "interests",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1398527822", [-this.state.offset * 100, -this.state.windowWidth / 2]]]) + " " + "floating-anchor"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1398527822",
        css: ".floating.__jsx-style-dynamic-selector{position:absolute;left:30%;top:50%;margin-left:var(--window-width);margin-top:var(--window-half-width);z-index:1000;}.scroll.__jsx-style-dynamic-selector{width:100%;position:fixed;top:".concat(-this.state.offset * 100, "vh;height:600vh;}.empty.__jsx-style-dynamic-selector{width:100%;height:750vh;}@media (min-width:52em){.hero.__jsx-style-dynamic-selector{padding-top:8rem;}}.location.__jsx-style-dynamic-selector{position:fixed;bottom:0;line-height:70px;width:100%;text-align:center;color:#1d1d1d;}.location.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{vertical-align:middle;width:35px;margin-right:20px;margin-bottom:3px;}.noah.__jsx-style-dynamic-selector{position:fixed;top:0;line-height:70px;width:100%;text-align:center;color:black;}.noah.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;font-weight:800px;}.noah.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{vertical-align:middle;width:35px;margin-bottom:3px;margin-right:20px;margin-left:20px;}.noah.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin-left:10px;margin-right:10px;}.floating-anchor.__jsx-style-dynamic-selector{position:absolute;}#noah.__jsx-style-dynamic-selector{top:0vh;}#works.__jsx-style-dynamic-selector{top:100vh;}#projects.__jsx-style-dynamic-selector{top:220vh;}#philosophy.__jsx-style-dynamic-selector{top:340vh;}#interests.__jsx-style-dynamic-selector{top:460vh;}@media (max-width:700px){.floating.__jsx-style-dynamic-selector{left:50%;margin-left:").concat(-this.state.windowWidth / 2, "px;top:150px;}body.__jsx-style-dynamic-selector{font-size:14px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2luZG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBMb0IsQUFHOEIsQUFRUCxBQU1BLEFBS1MsQUFJTCxBQVFPLEFBTVAsQUFTTSxBQUlDLEFBT0wsQUFJQyxBQUdWLEFBR0UsQUFHQSxBQUdBLEFBR0EsQUFLRyxBQUtJLFFBckJsQixDQWlCZ0QsQ0FkaEQsQUFHQSxBQUdBLEFBR0EsQ0FwRWdCLEFBTUYsSUFTSCxBQWNILEFBaUROLEVBbkVBLEFBc0NpQixDQXpEVCxBQTZEVixHQXZCa0IsQ0FQTCxBQW1CQSxFQW5DYixBQVNrQixFQWZtQixDQVIzQixNQStCUyxBQW1CQSxFQWpEZSxBQXdEbEMsR0FuQlksR0FkQSxRQWVPLENBTUEsQ0FiQSxBQW1CQSxDQTFCQSxBQXdESixTQXhFRCxDQXlFWixLQWhGb0MsQUFzQ3hCLENBTWQsQ0FiQSxBQW1Ca0IsQ0ExQkgsSUFoQmYsS0FnQ0EsS0FmQSxFQTBCQSxpQkFsRGUsYUFDZiIsImZpbGUiOiJjb21wb25lbnRzL3dpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbm9haGdhbGxhbnQvRG9jdW1lbnRzL1dvcmsvcGVyc29uYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmUgZnJvbSAnLi9nbG9iZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29udGVudCdcbmltcG9ydCBCYWNrZ3JvdW5kcyBmcm9tICcuL2JhY2tncm91bmRzJ1xuaW1wb3J0IEFuY2hvckxpbmsgZnJvbSAncmVhY3QtYW5jaG9yLWxpbmstc21vb3RoLXNjcm9sbCdcblxuY2xhc3MgV2luZG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgJ29mZnNldCc6IDAsXG4gICAgJ3dpbmRvd1dpZHRoJzogMjAwLFxuICAgICd3aW5kb3dPbic6IHRydWVcbiAgfVxuXG4gIGdldFNjcm9sbFBlcmNlbnQoKSB7XG5cbiAgICAgIHZhciBoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBcbiAgICAgICAgICBiID0gZG9jdW1lbnQuYm9keSxcbiAgICAgICAgICBzdCA9ICdzY3JvbGxUb3AnLFxuICAgICAgICAgIHNoID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICByZXR1cm4gKGhbc3RdfHxiW3N0XSkgLyAoKGhbc2hdfHxiW3NoXSkgLSBoLmNsaWVudEhlaWdodCk7XG4gIH1cblxuICBmdWNrKHBjLCByLCBsaW1pdCwgcmF0ZSl7XG4gICAgaWYgKHIgPj0gbGltaXQpe1xuICAgICAgcmV0dXJuIGxpbWl0XG4gICAgfVxuICAgIGlmKHBjID4gcil7XG4gICAgICBwYyAtPSByYXRlXG4gICAgICBpZiAocGMgPCByKXtcbiAgICAgICAgcmV0dXJuIHJcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYocGMgPiByKzEpe1xuICAgICAgICByZXR1cm4gdGhpcy5mdWNrKHBjLCByKzEsIGxpbWl0LCByYXRlKVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIHBjXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICByZXR1cm4gcGNcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hXaW5kb3coKVxuICAgIH0pO1xuICAgIHRoaXMucmVmcmVzaFdpbmRvdygpXG4gIH1cblxuICByZWZyZXNoV2luZG93KCl7XG5cbiAgICAgIHZhciBzY3JlZW5zID0gNjtcbiAgICAgIHZhciByYXRlID0gMC41O1xuICAgICAgdmFyIHRvdGFsID0gcmF0ZSAqIHNjcmVlbnMgKyAoc2NyZWVucy0xKTtcblxuICAgICAgdmFyIG9mZnNldCA9IHRoaXMuZ2V0U2Nyb2xsUGVyY2VudCgpICogdG90YWw7XG5cblxuICAgICAgb2Zmc2V0ID0gdGhpcy5mdWNrKG9mZnNldCwgMSwgc2NyZWVucy0xLCByYXRlKTtcbiAgICAgIHZhciB3aW5kb3dPbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA+IDcwMDtcbiAgICBcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7J29mZnNldCc6IG9mZnNldCwgJ3dpbmRvd09uJzogd2luZG93T259KTtcbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByZW5kZXJSb2xlID0gKHJvbGUsIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJyb2xlXCIga2V5PXtpfT48YSBocmVmPXtyb2xlWzBdfT57cm9sZVsxXX08L2E+IC0gPHNwYW4gY2xhc3NOYW1lPVwiY29udGV4dFwiPntyb2xlWzJdfTwvc3Bhbj48L2xpPlxuICAgICAgKVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByZW5kZXJSb2xlQnIgPSAocm9sZSwgaSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJvbGVcIiBrZXk9e2l9PjxhIGhyZWY9e3JvbGVbMF19Pntyb2xlWzFdfTwvYT48YnIvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHRcIj57cm9sZVsyXX08L3NwYW4+PC9saT5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJSb2xlcyA9IChyb2xlcywgbmJyPWZhbHNlKSA9PiB7XG4gICAgICBcbiAgICAgIGlmIChuYnIpe1xuICAgICAgICByb2xlcyA9IHJvbGVzLm1hcChyZW5kZXJSb2xlQnIpXG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICByb2xlcyA9IHJvbGVzLm1hcChyZW5kZXJSb2xlKVxuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gcm9sZXNcbiAgICB9XG5cbiAgICBjb25zdCBqb2JzID0gW1tcImh0dHBzOi8vc2lnaHQuaW5kdXN0cmllc1wiLCBcIlNpZ2h0XCIsIFwiQ0VPXCJdLFxuICAgICAgICAgICAgICAgICAgW1wiaHR0cHM6Ly9uYXV0aWwudXNcIiwgXCJOYXV0aWx1c1wiLCBcIlRlY2hub2xvZ3kgTGVhZFwiXSxcbiAgICAgICAgICAgICAgICAgIFtcImh0dHBzOi8vY29sdW1iaWEuZWR1XCIsIFwiQ29sdW1iaWFcIiwgXCJTdHVkZW50LCBSZXNlYXJjaGVyXCJdLFxuICAgICAgICAgICAgICAgICAgW1wiaHR0cHM6Ly9iY2RmYSxjb21cIiwgXCJEZXNpZ24gZm9yIEFtZXJpY2FcIiwgXCJQcmVzaWRlbnRcIl1dO1xuXG4gICAgY29uc3QgcGFzdD0gW1tcImh0dHBzOi8vcmVzZWFyY2gueWFsZS5lZHVcIiwgXCJZYWxlIE1lZGljYWwgU2Nob29sXCIsIFwiUmVzZWFyY2hlclwiXSxcbiAgICAgICAgICAgICAgICAgW1wiaHR0cHM6Ly9tYWRld2l0aG92ZXIuY29tXCIsIFwiT3ZlciBBcHBzXCIsIFwiTWFjaGluZSBMZWFybmluZyBJbnRlcm5cIl1dO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBbW1wiaHR0cHM6Ly9zaWdodC5uZXR3b3JrXCIsIFwiU2lnaHQgTmV0d29ya1wiLCBcIlJlbW92aW5nIGFkcyBhbmQgcGF5d2FsbHMgZnJvbSBpbnRlcm5ldCBwdWJsaXNoaW5nXCJdLFxuICAgICAgICAgICAgICAgICAgICAgIFtcImh0dHBzOi8vbWFkZXdpdGhvdmVyLmNvbVwiLCBcIkppZ1wiLCBcIlNpbXBsaWZpZWQgbXVzaWMgc2hhcmluZ1wiXSxcbiAgICAgICAgICAgICAgICAgICAgICBbXCJodHRwczovL3d3dy5tZWR0cm9uaWNkaWFiZXRlcy5jb20vcHJvZHVjdHMvc3VnYXIuaXEtZGlhYmV0ZXMtYXNzaXN0YW50XCIsIFwiU3VnYXIuSVFcIiwgXCJJbnRlbGxpZ2VudCBkaWFiZXRlcyBtYW5hZ2VtZW50XCJdXTtcblxuICBjb25zdCByZXNlYXJjaCA9IFtbXCJodHRwczovL3NpZ2h0Lm5ldHdvcmsvd2hpdGVwYXBlci5wZGZcIiwgXCJTaWdodCBOZXR3b3JrXCIsIFwiVXRpbGl6aW5nIGFwcGxpZWQgYWR2YW50YWdlIHRoZW9yeSB0byBjcmVhdGUgYW4gYWQtbGVzcyBwcm9maXQgbmV0d29yayBmb3IgaW50ZXJuZXQgcHVibGlzaGVyc1wiXSxcbiAgICAgICAgICAgICAgICAgICAgW1wiLi4vc3RhdGljL2JpdGNvaW4uYXMuYWR2YW50YWdlLnRoZW9yeS5nYWxsYW50LnBkZlwiLCBcIkJpdGNvaW4gYXMgR2FtZSBUaGVvcnlcIiwgXCJBbiBleHBsb3JhdGlvbiBvZiBhcHBsaWVkIGFkdmFudGFnZSB0aGVvcnlcIl0sXG4gICAgICAgICAgICAgICAgICAgIFtcImh0dHBzOi8vZ2l0aHViLmNvbS9Ob2FoR2FsbGFudFwiLCBcIkRpc3RyaWJ1dGVkIFNpZ24taW5cIiwgXCJTb2NpYWwtZW5naW5lZXJpbmctcHJvb2YgdGhvdWdoIGFkdmFudGFnZSB0aGVvcnkgc3lzdGVtXCJdLFxuICAgICAgICAgICAgICAgICAgICBbXCJodHRwczovL2dpdGh1Yi5jb20vTm9haEdhbGxhbnRcIiwgXCJNYWdpY3JvcFwiLCBcIk1hZ2ljYWwgb2JqZWN0IGF1dG8tY3JvcHBpbmcgYWxnb3JpdGhtXCJdXTtcblxuXG4gICAgY29uc3QgcmVuZGVyUHJvamVjdHMgPSByZW5kZXJSb2xlcyhwcm9qZWN0cywgdHJ1ZSlcbiAgICBjb25zdCByZW5kZXJKb2JzID0gcmVuZGVyUm9sZXMoam9icylcbiAgICBjb25zdCByZW5kZXJQYXN0ID0gcmVuZGVyUm9sZXMocGFzdClcbiAgICBjb25zdCByZW5kZXJSZXNlYXJjaCA9IHJlbmRlclJvbGVzKHJlc2VhcmNoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgb25yZXNpemU9e3RoaXMucmVmcmVzaFdpbmRvd30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmctY29udGFpbmVyXCI+PC9kaXY+XG4gICAgICAgIDxCYWNrZ3JvdW5kcyBvZmZzZXQ9e3RoaXMuc3RhdGUub2Zmc2V0fS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmdcIj5cbiAgICAgICAgICA8R2xvYmUgb2Zmc2V0PXt0aGlzLnN0YXRlLm9mZnNldH0gd2luZG93T249e3RoaXMuc3RhdGUud2luZG93T259IHdpbmRvd1dpZHRoPXt0aGlzLnN0YXRlLndpbmRvd1dpZHRofS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbFwiPlxuICAgICAgICAgIDxDb250ZW50IHRpdGxlPXsnSGksIElcXCdtIE5vYWggR2FsbGFudCd9IGFuY2hvcj17J25vYWgnfT5cbiAgICAgICAgICAgIDxwPkknbSBhbiBlbmdpbmVlciwgZGVzaWduZXIsIGFydGlzdCwgZGV2ZWxvcGVyLCBhbmQgcmVzZWFyY2hlci48L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250ZXh0XCI+U2Nyb2xsIGZvciBtb3JlLjwvcD5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgPENvbnRlbnQgdGl0bGU9eydNeSBXb3JrJ30gYW5jaG9yPXsnd29yayd9PlxuICAgICAgICAgICAgPGgyPkN1cnJlbnQ8L2gyPlxuICAgICAgICAgICAgICA8dWw+e3JlbmRlckpvYnN9PC91bD5cbiAgICAgICAgICAgIDxoMj5QYXN0PC9oMj5cbiAgICAgICAgICAgICAgPHVsPntyZW5kZXJQYXN0fTwvdWw+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgPENvbnRlbnQgdGl0bGU9eydNeSBQaGlsb3NvcGh5J30gYW5jaG9yPXsncGhpbG9zb3BoeSd9PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEkgYmVsaWV2ZSBpbiBkZXNpZ25pbmcgc3lzdGVtcyBhbmQgdGVjaG5vbG9naWVzIGZvciBodW1hbml0eS4gUHJvZHVjdCBpbm5vdmF0aW9uIHdpbGwgZHJpdmUgc29jaWV0eSBmb3J3YXJkIHNvIGxvbmcgYXMgd2UgY29tbWl0IG91cnNlbHZlcyB0byBtYWtpbmcgZ3JlYXQgcHJvZHVjdHMuXG4gICAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgICAgPGk+XG4gICAgICAgICAgICAgIOKAnERlc2lnbiBpcyBub3QganVzdCB3aGF0IGl0IGxvb2tzIGxpa2UgYW5kIGZlZWxzIGxpa2UuIERlc2lnbiBpcyBob3cgaXQgd29ya3Mu4oCdXG4gICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZXh0XCI+IC0gU3RldmUgSm9iczwvc3Bhbj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgIDxDb250ZW50IHRpdGxlPXsnUmVzZWFyY2gnfSBhbmNob3I9eydwcm9qZWN0cyd9PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7cmVuZGVyUmVzZWFyY2h9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvQ29udGVudD5cblxuICAgICAgICAgIDxDb250ZW50IHRpdGxlPXsnUHJvamVjdHMnfSBhbmNob3I9eydpbnRlcmVzdHMnfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3JlbmRlclByb2plY3RzfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgPENvbnRlbnQgdGl0bGU9eydSZWFjaCBtZSd9PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vbmdsbnRcIj5Ud2l0dGVyPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwibWFpbHRvOm5hZzIxNDVAY29sdW1iaWEuZWR1XCI+RW1haWw8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTm9haEdhbGxhbnRcIj5HaXRodWI8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2tleWJhc2UuaW8vbm9haGdhbGxhbnRcIj5LZXliYXNlPC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9nbG9iZS5zdmdcIi8+IFxuICAgICAgICAgIEkgYW0gY3VycmVudGx5IGluIDxpPkR1cmhhbSwgTkM8L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vYWhcIj5cbiAgICAgICAgICA8QW5jaG9yTGluayBjbGFzc05hbWU9XCJhXCIgaHJlZj1cIiN3b3JrXCI+V29yazwvQW5jaG9yTGluaz48c3Bhbi8+XG4gICAgICAgICAgPEFuY2hvckxpbmsgY2xhc3NOYW1lPVwiYVwiIGhyZWY9XCIjcGhpbG9zb3BoeVwiPlBoaWxvc29waHk8L0FuY2hvckxpbms+XG4gICAgICAgICAgPEFuY2hvckxpbmsgY2xhc3NOYW1lPVwiYVwiIGhyZWY9XCIjbm9haFwiID48aW1nIHNyYz1cIi4uL3N0YXRpYy9ub2FoLnN2Z1wiLz48L0FuY2hvckxpbms+XG4gICAgICAgICAgPEFuY2hvckxpbmsgY2xhc3NOYW1lPVwiYVwiIGhyZWY9XCIjcmVzZWFyY2hcIj5SZXNlYXJjaDwvQW5jaG9yTGluaz48c3Bhbi8+XG4gICAgICAgICAgPEFuY2hvckxpbmsgY2xhc3NOYW1lPVwiYVwiIGhyZWY9XCIjcHJvamVjdHNcIj5Qcm9qZWN0czwvQW5jaG9yTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdGluZy1hbmNob3JcIiBpZD1cIm5vYWhcIi8+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXRpbmctYW5jaG9yXCIgaWQ9XCJ3b3JrXCIvPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0aW5nLWFuY2hvclwiIGlkPVwicGhpbG9zb3BoeVwiLz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdGluZy1hbmNob3JcIiBpZD1cInJlc2VhcmNoXCIvPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0aW5nLWFuY2hvclwiIGlkPVwiaW50ZXJlc3RzXCIvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZsb2F0aW5nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDozMCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS13aW5kb3ctd2lkdGgpO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0td2luZG93LWhhbGYtd2lkdGgpO1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNjcm9sbHtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgIHRvcDogJHstdGhpcy5zdGF0ZS5vZmZzZXQqMTAwfXZoO1xuICAgICAgICAgICAgaGVpZ2h0OjYwMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZW1wdHl7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0Ojc1MHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTJlbSkge1xuICAgICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvY2F0aW9ue1xuICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDo3MHB4O1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IzFkMWQxZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvY2F0aW9uIGltZ3tcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vYWh7XG4gICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjcwcHg7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vYWggYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6ODAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub2FoIGltZ3tcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTozcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub2FoIHNwYW57XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mbG9hdGluZy1hbmNob3J7XG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI25vYWh7XG4gICAgICAgICAgICB0b3A6MHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjd29ya3N7XG4gICAgICAgICAgICB0b3A6MTAwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNwcm9qZWN0c3tcbiAgICAgICAgICAgIHRvcDoyMjB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3BoaWxvc29waHl7XG4gICAgICAgICAgICB0b3A6MzQwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNpbnRlcmVzdHN7XG4gICAgICAgICAgICB0b3A6NDYwdmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAuZmxvYXRpbmcge1xuICAgICAgICAgICAgICAgIGxlZnQ6NTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiR7LXRoaXMuc3RhdGUud2luZG93V2lkdGgvMn1weDtcbiAgICAgICAgICAgICAgICB0b3A6MTUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2luZG93XG4iXX0= */\n/*@ sourceURL=components/window.js */"),
        dynamic: [-this.state.offset * 100, -this.state.windowWidth / 2]
      }));
    }
  }]);

  return Window;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Window);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_window__ = __webpack_require__("./components/window.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css__ = __webpack_require__("./style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_css__);
var _jsxFileName = "/Users/noahgallant/Documents/Work/personal/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Main =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-929260662"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_window__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "929260662",
        css: "@media (max-width:52em){section.jsx-929260662>*.jsx-929260662{margin:0 auto;max-width:24em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUl5QixjQUNDLGVBQ2pCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ub2FoZ2FsbGFudC9Eb2N1bWVudHMvV29yay9wZXJzb25hbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBXaW5kb3cgZnJvbSAnLi4vY29tcG9uZW50cy93aW5kb3cnXG5pbXBvcnQgXCIuLi9zdHlsZS5jc3NcIlxuXG5jbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgPGRpdj5cbiAgICA8V2luZG93IC8+XG5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MmVtKSB7XG4gICAgICAgIHNlY3Rpb24gPiAqIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDI0ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5cbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
      }));
    }
  }]);

  return Main;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./style.css":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map