webpackHotUpdate(5,{

/***/ "./components/window.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkbutton__ = __webpack_require__("./components/linkbutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globe__ = __webpack_require__("./components/globe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content__ = __webpack_require__("./components/content.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__backgrounds__ = __webpack_require__("./components/backgrounds.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll__ = __webpack_require__("./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll__);
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
        offset: 0
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

      var event = new Event('scroll2');
      document.addEventListener('scroll', function () {
        var screens = 6;
        var rate = 0.5;
        var total = rate * screens + (screens - 1);
        var pc = _this2.getScrollPercent() * total;

        var offset = _this2.fuck(pc, 1, screens - 1, rate);

        _this2.setState({
          offset: offset
        });

        document.dispatchEvent(event);
        _this2.scrollMe = _this2.scrollMe.bind(_this2);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "container"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "floating-container"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__backgrounds__["a" /* default */], {
        offset: this.state.offset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "floating"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__globe__["a" /* default */], {
        offset: this.state.offset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "scroll"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__content__["a" /* default */], {
        title: 'Hi, I\'m Noah Gallant',
        anchor: 'noah',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "I'm an engineer, designer, artist, developer, and researcher."), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "context"
      }, "Scroll for more.")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__content__["a" /* default */], {
        title: 'My Work',
        anchor: 'work',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Current"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://sight.industries",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Sight"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "context"
      }, "CEO")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://nautil.us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Nautilus"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "context"
      }, "Lead Developer")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://columbia.edu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Columbia University"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "context"
      }, "Student, Researcher")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://ibm.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "IBM"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "context"
      }, "Extreme Blue Intern")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://bcdfa.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Barnard + Columbia Design for America"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "context"
      }, "President"))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Past"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://research.yale.edu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Yale Medical School"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "context"
      }, "Researcher")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://madewithover.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Over Apps"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "context"
      }, "Machine Learning")))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__content__["a" /* default */], {
        title: 'Some Projects',
        anchor: 'projects',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://sight.network",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Sight Network"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "context"
      }, "Removing ads and paywalls from internet publishing")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://jig.sh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Jig"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "context"
      }, "Simplified music sharing")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://github.com/NoahGallant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Distributed Sign-in"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "context"
      }, "Social-engineering-proof authentication")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://github.com/NoahGallant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Magicrop"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "context"
      }, "Magical object auto-cropping algorithm")))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__content__["a" /* default */], {
        title: 'My Philosophy',
        anchor: 'philosophy',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "I believe in designing systems and technologies for humanity. Product innovation will drive society forward so long as we commit ourselves to making great products.", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "\u201CDesign is not just what it looks like and feels like. Design is how it works.\u201D"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "context"
      }, " - Steve Jobs"))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__content__["a" /* default */], {
        title: 'Interests',
        anchor: 'interests',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Skills"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Design thinking (", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://www.subtraction.com/2018/04/02/in-defense-of-design-thinking-which-is-terrible/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Mostly"), ")"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Web design "), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "VR (", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "http://www.normalvr.com/blog/an-open-source-keyboard-to-make-your-own/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Not me but very cool"), ")"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Blockchain for good (", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://bailbloc.thenewinquiry.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "an example"), ")")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Miscellaneous"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Hummus"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Sustainable architecture"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Twitter (", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://twitter.com/nglnt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "me"), ")"))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__content__["a" /* default */], {
        title: 'Reach me',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://twitter.com/nglnt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Twitter")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "mailto:nag2145@columbia.edu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Email")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://github.com/NoahGallant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Github")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://keybase.io/noahgallant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Keybase"))))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "location"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", {
        src: "../static/globe.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), "I am currently in ", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }, "Durham, NC")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "noah"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#works",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, "Works"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, "Projects"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#noah",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", {
        src: "../static/noah.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#philosophy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, "Philosophy"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#interests",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, "Interests")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "empty"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        id: "noah",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        id: "works",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        id: "projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        id: "philosophy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        id: "interests",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3824536321", [-this.state.offset * 100]]]) + " " + "floating-anchor"
      })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3824536321",
        css: ".floating.__jsx-style-dynamic-selector{position:absolute;left:30%;top:50%;margin-left:var(--window-width);margin-top:var(--window-half-width);z-index:1000;}.scroll.__jsx-style-dynamic-selector{width:100%;position:fixed;top:".concat(-this.state.offset * 100, "vh;height:600vh;}.empty.__jsx-style-dynamic-selector{width:100%;height:750vh;}@media (min-width:52em){.hero.__jsx-style-dynamic-selector{padding-top:8rem;}}.location.__jsx-style-dynamic-selector{position:fixed;bottom:0;line-height:70px;width:100%;text-align:center;color:#1d1d1d;}.location.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{vertical-align:middle;width:35px;margin-right:20px;margin-bottom:3px;}.noah.__jsx-style-dynamic-selector{position:fixed;top:0;line-height:70px;width:100%;text-align:center;color:black;}.noah.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{vertical-align:middle;width:35px;margin-bottom:3px;margin-right:20px;margin-left:20px;}.noah.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin-left:10px;margin-right:10px;}.floating-anchor.__jsx-style-dynamic-selector{position:absolute;}#noah.__jsx-style-dynamic-selector{top:0vh;}#works.__jsx-style-dynamic-selector{top:100vh;}#projects.__jsx-style-dynamic-selector{top:220vh;}#philosophy.__jsx-style-dynamic-selector{top:340vh;}#interests.__jsx-style-dynamic-selector{top:460vh;}@media (max-width:800px){.floating.__jsx-style-dynamic-selector{left:50%;margin-left:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2luZG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRLb0IsQUFHOEIsQUFRUCxBQU1BLEFBS1MsQUFJTCxBQVFPLEFBTVAsQUFTTyxBQU9MLEFBSUMsQUFHVixBQUdFLEFBR0EsQUFHQSxBQUdBLEFBS0csUUFoQmQsQ0FpQm1CLENBZG5CLEFBR0EsQUFHQSxBQUdBLENBaEVnQixBQU1GLElBU0gsQUFjSCxFQWxCTixBQWtDaUIsQ0FyRFQsQUF5RFYsR0FuQmtCLENBUEwsQUFlQSxDQWdDWCxDQS9ERixBQVNrQixFQWZtQixDQVIzQixNQStCUyxBQWVBLEVBN0NlLEFBb0RsQyxHQWZZLEdBZEEsUUFlTyxFQVBBLEFBZUEsQ0F0QkEsU0FoQkwsTUFQd0IsQUFzQ3hCLEVBUGQsQUFla0IsQ0F0QkgsSUFoQmYsS0FnQ0EsS0FmQSxFQXNCQSxpQkE5Q2UsYUFDZiIsImZpbGUiOiJjb21wb25lbnRzL3dpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbm9haGdhbGxhbnQvRG9jdW1lbnRzL1dvcmsvcGVyc29uYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGlua0J1dHRvbiBmcm9tICcuL2xpbmtidXR0b24nXG5pbXBvcnQgR2xvYmUgZnJvbSAnLi9nbG9iZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29udGVudCdcbmltcG9ydCBCYWNrZ3JvdW5kcyBmcm9tICcuL2JhY2tncm91bmRzJ1xuaW1wb3J0IEFuY2hvckxpbmsgZnJvbSAncmVhY3QtYW5jaG9yLWxpbmstc21vb3RoLXNjcm9sbCdcblxuY2xhc3MgV2luZG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb2Zmc2V0OiAwXG4gIH1cblxuICBnZXRTY3JvbGxQZXJjZW50KCkge1xuICAgIHZhciBoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBcbiAgICAgICAgYiA9IGRvY3VtZW50LmJvZHksXG4gICAgICAgIHN0ID0gJ3Njcm9sbFRvcCcsXG4gICAgICAgIHNoID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgcmV0dXJuIChoW3N0XXx8YltzdF0pIC8gKChoW3NoXXx8YltzaF0pIC0gaC5jbGllbnRIZWlnaHQpO1xuICB9XG5cbiAgZnVjayhwYywgciwgbGltaXQsIHJhdGUpe1xuICAgIGlmIChyID49IGxpbWl0KXtcbiAgICAgIHJldHVybiBsaW1pdFxuICAgIH1cbiAgICBpZihwYyA+IHIpe1xuICAgICAgcGMgLT0gcmF0ZVxuICAgICAgaWYgKHBjIDwgcil7XG4gICAgICAgIHJldHVybiByXG4gICAgICB9XG4gICAgICBlbHNlIGlmKHBjID4gcisxKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVjayhwYywgcisxLCBsaW1pdCwgcmF0ZSlcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHJldHVybiBwY1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIHBjXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdzY3JvbGwyJyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgdmFyIHNjcmVlbnMgPSA2O1xuICAgICAgdmFyIHJhdGUgPSAwLjU7XG4gICAgICB2YXIgdG90YWwgPSByYXRlICogc2NyZWVucyArIChzY3JlZW5zLTEpO1xuXG4gICAgICB2YXIgcGMgPSB0aGlzLmdldFNjcm9sbFBlcmNlbnQoKSAqIHRvdGFsO1xuICAgICAgdmFyIG9mZnNldCA9IHRoaXMuZnVjayhwYywgMSwgc2NyZWVucy0xLCByYXRlKTtcblxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtvZmZzZXR9KTtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgdGhpcy5zY3JvbGxNZSA9IHRoaXMuc2Nyb2xsTWUuYmluZCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZy1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgPEJhY2tncm91bmRzIG9mZnNldD17dGhpcy5zdGF0ZS5vZmZzZXR9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZ1wiPlxuICAgICAgICAgIDxHbG9iZSBvZmZzZXQ9e3RoaXMuc3RhdGUub2Zmc2V0fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbFwiPlxuICAgICAgICAgIDxDb250ZW50IHRpdGxlPXsnSGksIElcXCdtIE5vYWggR2FsbGFudCd9IGFuY2hvcj17J25vYWgnfT5cbiAgICAgICAgICAgIDxwPkknbSBhbiBlbmdpbmVlciwgZGVzaWduZXIsIGFydGlzdCwgZGV2ZWxvcGVyLCBhbmQgcmVzZWFyY2hlci48L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250ZXh0XCI+U2Nyb2xsIGZvciBtb3JlLjwvcD5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgPENvbnRlbnQgdGl0bGU9eydNeSBXb3JrJ30gYW5jaG9yPXsnd29yayd9PlxuICAgICAgICAgICAgPGgyPkN1cnJlbnQ8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3NpZ2h0LmluZHVzdHJpZXNcIj5TaWdodDwvYT5cbiAgICAgICAgICAgICAgICA8YnIvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHRcIj5DRU88L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL25hdXRpbC51c1wiPk5hdXRpbHVzPC9hPiBcbiAgICAgICAgICAgICAgICA8YnIvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHRcIj5MZWFkIERldmVsb3Blcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vY29sdW1iaWEuZWR1XCI+Q29sdW1iaWEgVW5pdmVyc2l0eTwvYT4gXG4gICAgICAgICAgICAgICAgPGJyLz48c3BhbiBjbGFzc05hbWU9XCJjb250ZXh0XCI+U3R1ZGVudCwgUmVzZWFyY2hlcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vaWJtLmNvbVwiPklCTTwvYT4gXG4gICAgICAgICAgICAgICAgPGJyLz48c3BhbiBjbGFzc05hbWU9XCJjb250ZXh0XCI+RXh0cmVtZSBCbHVlIEludGVybjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vYmNkZmEuY29tXCI+QmFybmFyZCArIENvbHVtYmlhIERlc2lnbiBmb3IgQW1lcmljYTwvYT4gXG4gICAgICAgICAgICAgIDxici8+PHNwYW4gY2xhc3NOYW1lPVwiY29udGV4dFwiPlByZXNpZGVudDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGgyPlBhc3Q8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3Jlc2VhcmNoLnlhbGUuZWR1XCI+WWFsZSBNZWRpY2FsIFNjaG9vbDwvYT4gXG4gICAgICAgICAgICAgIDxici8+PHNwYW4gY2xhc3NOYW1lPVwiY29udGV4dFwiPlJlc2VhcmNoZXI8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL21hZGV3aXRob3Zlci5jb21cIj5PdmVyIEFwcHM8L2E+IFxuICAgICAgICAgICAgPGJyLz48c3BhbiBjbGFzc05hbWU9XCJjb250ZXh0XCI+TWFjaGluZSBMZWFybmluZzwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICA8Q29udGVudCB0aXRsZT17J1NvbWUgUHJvamVjdHMnfSBhbmNob3I9eydwcm9qZWN0cyd9PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vc2lnaHQubmV0d29ya1wiPlNpZ2h0IE5ldHdvcms8L2E+XG4gICAgICAgICAgICAgICAgICA8YnIvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHRcIj5SZW1vdmluZyBhZHMgYW5kIHBheXdhbGxzIGZyb20gaW50ZXJuZXQgcHVibGlzaGluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2ppZy5zaFwiPkppZzwvYT4gXG4gICAgICAgICAgICAgICAgICA8YnIvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHRcIj5TaW1wbGlmaWVkIG11c2ljIHNoYXJpbmc8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL05vYWhHYWxsYW50XCI+RGlzdHJpYnV0ZWQgU2lnbi1pbjwvYT4gXG4gICAgICAgICAgICAgICAgICA8YnIvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHRcIj5Tb2NpYWwtZW5naW5lZXJpbmctcHJvb2YgYXV0aGVudGljYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL05vYWhHYWxsYW50XCI+TWFnaWNyb3A8L2E+IFxuICAgICAgICAgICAgICAgICAgPGJyLz48c3BhbiBjbGFzc05hbWU9XCJjb250ZXh0XCI+TWFnaWNhbCBvYmplY3QgYXV0by1jcm9wcGluZyBhbGdvcml0aG08L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICA8Q29udGVudCB0aXRsZT17J015IFBoaWxvc29waHknfSBhbmNob3I9eydwaGlsb3NvcGh5J30+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSSBiZWxpZXZlIGluIGRlc2lnbmluZyBzeXN0ZW1zIGFuZCB0ZWNobm9sb2dpZXMgZm9yIGh1bWFuaXR5LiBQcm9kdWN0IGlubm92YXRpb24gd2lsbCBkcml2ZSBzb2NpZXR5IGZvcndhcmQgc28gbG9uZyBhcyB3ZSBjb21taXQgb3Vyc2VsdmVzIHRvIG1ha2luZyBncmVhdCBwcm9kdWN0cy5cbiAgICAgICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICAgICAgICA8aT5cbiAgICAgICAgICAgICAg4oCcRGVzaWduIGlzIG5vdCBqdXN0IHdoYXQgaXQgbG9va3MgbGlrZSBhbmQgZmVlbHMgbGlrZS4gRGVzaWduIGlzIGhvdyBpdCB3b3Jrcy7igJ1cbiAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImNvbnRleHRcIj4gLSBTdGV2ZSBKb2JzPC9iPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgPENvbnRlbnQgdGl0bGU9eydJbnRlcmVzdHMnfSBhbmNob3I9eydpbnRlcmVzdHMnfT5cbiAgICAgICAgICAgIDxoMj5Ta2lsbHM8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+RGVzaWduIHRoaW5raW5nICg8YSBocmVmPVwiaHR0cHM6Ly93d3cuc3VidHJhY3Rpb24uY29tLzIwMTgvMDQvMDIvaW4tZGVmZW5zZS1vZi1kZXNpZ24tdGhpbmtpbmctd2hpY2gtaXMtdGVycmlibGUvXCI+TW9zdGx5PC9hPik8L2xpPlxuICAgICAgICAgICAgICA8bGk+V2ViIGRlc2lnbiA8L2xpPlxuICAgICAgICAgICAgICA8bGk+VlIgKDxhIGhyZWY9XCJodHRwOi8vd3d3Lm5vcm1hbHZyLmNvbS9ibG9nL2FuLW9wZW4tc291cmNlLWtleWJvYXJkLXRvLW1ha2UteW91ci1vd24vXCI+Tm90IG1lIGJ1dCB2ZXJ5IGNvb2w8L2E+KTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5CbG9ja2NoYWluIGZvciBnb29kICg8YSBocmVmPVwiaHR0cHM6Ly9iYWlsYmxvYy50aGVuZXdpbnF1aXJ5LmNvbVwiPmFuIGV4YW1wbGU8L2E+KTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGgyPk1pc2NlbGxhbmVvdXM8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+SHVtbXVzPC9saT5cbiAgICAgICAgICAgICAgPGxpPlN1c3RhaW5hYmxlIGFyY2hpdGVjdHVyZTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Ud2l0dGVyICg8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9uZ2xudFwiPm1lPC9hPik8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgPENvbnRlbnQgdGl0bGU9eydSZWFjaCBtZSd9PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vbmdsbnRcIj5Ud2l0dGVyPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwibWFpbHRvOm5hZzIxNDVAY29sdW1iaWEuZWR1XCI+RW1haWw8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTm9haEdhbGxhbnRcIj5HaXRodWI8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2tleWJhc2UuaW8vbm9haGdhbGxhbnRcIj5LZXliYXNlPC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9nbG9iZS5zdmdcIi8+IFxuICAgICAgICAgIEkgYW0gY3VycmVudGx5IGluIDxpPkR1cmhhbSwgTkM8L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vYWhcIj5cbiAgICAgICAgICA8QW5jaG9yTGluayBjbGFzc05hbWU9XCJhXCIgaHJlZj1cIiN3b3Jrc1wiPldvcmtzPC9BbmNob3JMaW5rPjxzcGFuLz5cbiAgICAgICAgICA8QW5jaG9yTGluayBjbGFzc05hbWU9XCJhXCIgaHJlZj1cIiNwcm9qZWN0c1wiPlByb2plY3RzPC9BbmNob3JMaW5rPjxzcGFuLz5cbiAgICAgICAgICA8QW5jaG9yTGluayBjbGFzc05hbWU9XCJhXCIgaHJlZj1cIiNub2FoXCIgPjxpbWcgc3JjPVwiLi4vc3RhdGljL25vYWguc3ZnXCIvPjwvQW5jaG9yTGluaz48c3Bhbi8+XG4gICAgICAgICAgPEFuY2hvckxpbmsgY2xhc3NOYW1lPVwiYVwiIGhyZWY9XCIjcGhpbG9zb3BoeVwiPlBoaWxvc29waHk8L0FuY2hvckxpbms+PHNwYW4vPlxuICAgICAgICAgIDxBbmNob3JMaW5rIGNsYXNzTmFtZT1cImFcIiBocmVmPVwiI2ludGVyZXN0c1wiPkludGVyZXN0czwvQW5jaG9yTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdGluZy1hbmNob3JcIiBpZD1cIm5vYWhcIi8+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXRpbmctYW5jaG9yXCIgaWQ9XCJ3b3Jrc1wiLz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdGluZy1hbmNob3JcIiBpZD1cInByb2plY3RzXCIvPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0aW5nLWFuY2hvclwiIGlkPVwicGhpbG9zb3BoeVwiLz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdGluZy1hbmNob3JcIiBpZD1cImludGVyZXN0c1wiLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5mbG9hdGluZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6MzAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0td2luZG93LXdpZHRoKTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXdpbmRvdy1oYWxmLXdpZHRoKTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zY3JvbGx7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICB0b3A6ICR7LXRoaXMuc3RhdGUub2Zmc2V0KjEwMH12aDtcbiAgICAgICAgICAgIGhlaWdodDo2MDB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmVtcHR5e1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIGhlaWdodDo3NTB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDUyZW0pIHtcbiAgICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2NhdGlvbntcbiAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6NzBweDtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiMxZDFkMWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2NhdGlvbiBpbWd7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDoyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTozcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub2Foe1xuICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDo3MHB4O1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub2FoIGltZ3tcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTozcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub2FoIHNwYW57XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mbG9hdGluZy1hbmNob3J7XG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI25vYWh7XG4gICAgICAgICAgICB0b3A6MHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjd29ya3N7XG4gICAgICAgICAgICB0b3A6MTAwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNwcm9qZWN0c3tcbiAgICAgICAgICAgIHRvcDoyMjB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3BoaWxvc29waHl7XG4gICAgICAgICAgICB0b3A6MzQwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNpbnRlcmVzdHN7XG4gICAgICAgICAgICB0b3A6NDYwdmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgICAuZmxvYXRpbmcge1xuICAgICAgICAgICAgICAgIGxlZnQ6NTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvd1xuIl19 */\n/*@ sourceURL=components/window.js */"),
        dynamic: [-this.state.offset * 100]
      }));
    }
  }]);

  return Window;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Window);

/***/ })

})
//# sourceMappingURL=5.8effdcb18b8c2d112a5c.hot-update.js.map