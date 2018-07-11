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
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "container"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "floating-container"
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
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "floating"
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
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "scroll"
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
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "I'm an engineer, designer, artist, developer, and researcher."), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "context"
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
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Current"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://sight.industries",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Sight"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "context"
      }, "CEO")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://nautil.us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Nautilus"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "context"
      }, "Lead Developer")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://columbia.edu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Columbia University"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "context"
      }, "Student, Researcher")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://ibm.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "IBM"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "context"
      }, "Extreme Blue Intern")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://bcdfa.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Barnard + Columbia Design for America"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "context"
      }, "President"))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Past"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://research.yale.edu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Yale Medical School"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "context"
      }, "Researcher")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://madewithover.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Over Apps"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "context"
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
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://sight.network",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Sight Network"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "context"
      }, "Removing ads and paywalls from internet publishing")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://jig.sh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Jig"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "context"
      }, "Simplified music sharing")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://github.com/NoahGallant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Distributed Sign-in"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "context"
      }, "Social-engineering-proof authentication")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://github.com/NoahGallant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Magicrop"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "context"
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
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "I believe in designing systems and technologies for humanity. Product innovation will drive society forward so long as we commit ourselves to making great products.", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "\u201CDesign is not just what it looks like and feels like. Design is how it works.\u201D"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "context"
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
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Skills"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Design thinking (", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://www.subtraction.com/2018/04/02/in-defense-of-design-thinking-which-is-terrible/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Mostly"), ")"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Web design "), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "VR (", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "http://www.normalvr.com/blog/an-open-source-keyboard-to-make-your-own/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Not me but very cool"), ")"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Blockchain for good (", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://bailbloc.thenewinquiry.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "an example"), ")")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Miscellaneous"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Hummus"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Sustainable architecture"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Twitter (", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://twitter.com/nglnt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
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
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://twitter.com/nglnt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Twitter")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "mailto:nag2145@columbia.edu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Email")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://github.com/NoahGallant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Github")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://keybase.io/noahgallant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Keybase"))))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "location"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", {
        src: "../static/globe.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), "I am currently in ", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }, "Durham, NC")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "noah"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#works",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, "Work"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
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
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
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
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#philosophy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, "Thoughts"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#interests",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, "Likes")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "empty"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        id: "noah",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        id: "works",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        id: "projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        id: "philosophy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        id: "interests",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1169599449", [-this.state.offset * 100]]]) + " " + "floating-anchor"
      })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1169599449",
        css: ".floating.__jsx-style-dynamic-selector{position:absolute;left:30%;top:50%;margin-left:var(--window-width);margin-top:var(--window-half-width);z-index:1000;}.scroll.__jsx-style-dynamic-selector{width:100%;position:fixed;top:".concat(-this.state.offset * 100, "vh;height:600vh;}.empty.__jsx-style-dynamic-selector{width:100%;height:750vh;}@media (min-width:52em){.hero.__jsx-style-dynamic-selector{padding-top:8rem;}}.location.__jsx-style-dynamic-selector{position:fixed;bottom:0;line-height:70px;width:100%;text-align:center;color:#1d1d1d;}.location.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{vertical-align:middle;width:35px;margin-right:20px;margin-bottom:3px;}.noah.__jsx-style-dynamic-selector{position:fixed;top:0;line-height:70px;width:100%;text-align:center;color:black;}.noah.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{vertical-align:middle;width:35px;margin-bottom:3px;margin-right:20px;margin-left:20px;}.noah.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin-left:10px;margin-right:10px;}.floating-anchor.__jsx-style-dynamic-selector{position:absolute;}#noah.__jsx-style-dynamic-selector{top:0vh;}#works.__jsx-style-dynamic-selector{top:100vh;}#projects.__jsx-style-dynamic-selector{top:220vh;}#philosophy.__jsx-style-dynamic-selector{top:340vh;}#interests.__jsx-style-dynamic-selector{top:460vh;}@media (max-width:800px){.floating.__jsx-style-dynamic-selector{left:50%;margin-left:var(--window-half-width);top:150px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2luZG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRLb0IsQUFHOEIsQUFRUCxBQU1BLEFBS1MsQUFJTCxBQVFPLEFBTVAsQUFTTyxBQU9MLEFBSUMsQUFHVixBQUdFLEFBR0EsQUFHQSxBQUdBLEFBS0csUUFoQmQsQ0FpQjBDLENBZDFDLEFBR0EsQUFHQSxBQUdBLENBaEVnQixBQU1GLElBU0gsQUFjSCxFQWxCTixBQWtDaUIsQ0FyRFQsQUF5RFYsR0FuQmtCLENBUEwsQUFlQSxFQS9CYixBQVNrQixFQWZtQixDQVIzQixNQStCUyxBQWVBLEVBN0NlLEFBb0RsQyxHQWZZLEdBZEEsS0FxREcsR0F0Q0ksRUFQQSxBQWVBLENBdEJBLElBcURqQixLQXJFWSxNQVB3QixBQXNDeEIsRUFQZCxBQWVrQixDQXRCSCxJQWhCZixLQWdDQSxLQWZBLEVBc0JBLGlCQTlDZSxhQUNmIiwiZmlsZSI6ImNvbXBvbmVudHMvd2luZG93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ub2FoZ2FsbGFudC9Eb2N1bWVudHMvV29yay9wZXJzb25hbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rQnV0dG9uIGZyb20gJy4vbGlua2J1dHRvbidcbmltcG9ydCBHbG9iZSBmcm9tICcuL2dsb2JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50J1xuaW1wb3J0IEJhY2tncm91bmRzIGZyb20gJy4vYmFja2dyb3VuZHMnXG5pbXBvcnQgQW5jaG9yTGluayBmcm9tICdyZWFjdC1hbmNob3ItbGluay1zbW9vdGgtc2Nyb2xsJ1xuXG5jbGFzcyBXaW5kb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBvZmZzZXQ6IDBcbiAgfVxuXG4gIGdldFNjcm9sbFBlcmNlbnQoKSB7XG4gICAgdmFyIGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIFxuICAgICAgICBiID0gZG9jdW1lbnQuYm9keSxcbiAgICAgICAgc3QgPSAnc2Nyb2xsVG9wJyxcbiAgICAgICAgc2ggPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICByZXR1cm4gKGhbc3RdfHxiW3N0XSkgLyAoKGhbc2hdfHxiW3NoXSkgLSBoLmNsaWVudEhlaWdodCk7XG4gIH1cblxuICBmdWNrKHBjLCByLCBsaW1pdCwgcmF0ZSl7XG4gICAgaWYgKHIgPj0gbGltaXQpe1xuICAgICAgcmV0dXJuIGxpbWl0XG4gICAgfVxuICAgIGlmKHBjID4gcil7XG4gICAgICBwYyAtPSByYXRlXG4gICAgICBpZiAocGMgPCByKXtcbiAgICAgICAgcmV0dXJuIHJcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYocGMgPiByKzEpe1xuICAgICAgICByZXR1cm4gdGhpcy5mdWNrKHBjLCByKzEsIGxpbWl0LCByYXRlKVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIHBjXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICByZXR1cm4gcGNcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3Njcm9sbDInKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICB2YXIgc2NyZWVucyA9IDY7XG4gICAgICB2YXIgcmF0ZSA9IDAuNTtcbiAgICAgIHZhciB0b3RhbCA9IHJhdGUgKiBzY3JlZW5zICsgKHNjcmVlbnMtMSk7XG5cbiAgICAgIHZhciBwYyA9IHRoaXMuZ2V0U2Nyb2xsUGVyY2VudCgpICogdG90YWw7XG4gICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5mdWNrKHBjLCAxLCBzY3JlZW5zLTEsIHJhdGUpO1xuXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe29mZnNldH0pO1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICB0aGlzLnNjcm9sbE1lID0gdGhpcy5zY3JvbGxNZS5iaW5kKHRoaXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICA8QmFja2dyb3VuZHMgb2Zmc2V0PXt0aGlzLnN0YXRlLm9mZnNldH0vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nXCI+XG4gICAgICAgICAgPEdsb2JlIG9mZnNldD17dGhpcy5zdGF0ZS5vZmZzZXR9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsXCI+XG4gICAgICAgICAgPENvbnRlbnQgdGl0bGU9eydIaSwgSVxcJ20gTm9haCBHYWxsYW50J30gYW5jaG9yPXsnbm9haCd9PlxuICAgICAgICAgICAgPHA+SSdtIGFuIGVuZ2luZWVyLCBkZXNpZ25lciwgYXJ0aXN0LCBkZXZlbG9wZXIsIGFuZCByZXNlYXJjaGVyLjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRleHRcIj5TY3JvbGwgZm9yIG1vcmUuPC9wPlxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICA8Q29udGVudCB0aXRsZT17J015IFdvcmsnfSBhbmNob3I9eyd3b3JrJ30+XG4gICAgICAgICAgICA8aDI+Q3VycmVudDwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vc2lnaHQuaW5kdXN0cmllc1wiPlNpZ2h0PC9hPlxuICAgICAgICAgICAgICAgIDxici8+PHNwYW4gY2xhc3NOYW1lPVwiY29udGV4dFwiPkNFTzwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vbmF1dGlsLnVzXCI+TmF1dGlsdXM8L2E+IFxuICAgICAgICAgICAgICAgIDxici8+PHNwYW4gY2xhc3NOYW1lPVwiY29udGV4dFwiPkxlYWQgRGV2ZWxvcGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9jb2x1bWJpYS5lZHVcIj5Db2x1bWJpYSBVbml2ZXJzaXR5PC9hPiBcbiAgICAgICAgICAgICAgICA8YnIvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHRcIj5TdHVkZW50LCBSZXNlYXJjaGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9pYm0uY29tXCI+SUJNPC9hPiBcbiAgICAgICAgICAgICAgICA8YnIvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHRcIj5FeHRyZW1lIEJsdWUgSW50ZXJuPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9iY2RmYS5jb21cIj5CYXJuYXJkICsgQ29sdW1iaWEgRGVzaWduIGZvciBBbWVyaWNhPC9hPiBcbiAgICAgICAgICAgICAgPGJyLz48c3BhbiBjbGFzc05hbWU9XCJjb250ZXh0XCI+UHJlc2lkZW50PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8aDI+UGFzdDwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vcmVzZWFyY2gueWFsZS5lZHVcIj5ZYWxlIE1lZGljYWwgU2Nob29sPC9hPiBcbiAgICAgICAgICAgICAgPGJyLz48c3BhbiBjbGFzc05hbWU9XCJjb250ZXh0XCI+UmVzZWFyY2hlcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vbWFkZXdpdGhvdmVyLmNvbVwiPk92ZXIgQXBwczwvYT4gXG4gICAgICAgICAgICA8YnIvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHRcIj5NYWNoaW5lIExlYXJuaW5nPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgIDxDb250ZW50IHRpdGxlPXsnU29tZSBQcm9qZWN0cyd9IGFuY2hvcj17J3Byb2plY3RzJ30+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9zaWdodC5uZXR3b3JrXCI+U2lnaHQgTmV0d29yazwvYT5cbiAgICAgICAgICAgICAgICAgIDxici8+PHNwYW4gY2xhc3NOYW1lPVwiY29udGV4dFwiPlJlbW92aW5nIGFkcyBhbmQgcGF5d2FsbHMgZnJvbSBpbnRlcm5ldCBwdWJsaXNoaW5nPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vamlnLnNoXCI+SmlnPC9hPiBcbiAgICAgICAgICAgICAgICAgIDxici8+PHNwYW4gY2xhc3NOYW1lPVwiY29udGV4dFwiPlNpbXBsaWZpZWQgbXVzaWMgc2hhcmluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTm9haEdhbGxhbnRcIj5EaXN0cmlidXRlZCBTaWduLWluPC9hPiBcbiAgICAgICAgICAgICAgICAgIDxici8+PHNwYW4gY2xhc3NOYW1lPVwiY29udGV4dFwiPlNvY2lhbC1lbmdpbmVlcmluZy1wcm9vZiBhdXRoZW50aWNhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTm9haEdhbGxhbnRcIj5NYWdpY3JvcDwvYT4gXG4gICAgICAgICAgICAgICAgICA8YnIvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHRcIj5NYWdpY2FsIG9iamVjdCBhdXRvLWNyb3BwaW5nIGFsZ29yaXRobTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgIDxDb250ZW50IHRpdGxlPXsnTXkgUGhpbG9zb3BoeSd9IGFuY2hvcj17J3BoaWxvc29waHknfT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJIGJlbGlldmUgaW4gZGVzaWduaW5nIHN5c3RlbXMgYW5kIHRlY2hub2xvZ2llcyBmb3IgaHVtYW5pdHkuIFByb2R1Y3QgaW5ub3ZhdGlvbiB3aWxsIGRyaXZlIHNvY2lldHkgZm9yd2FyZCBzbyBsb25nIGFzIHdlIGNvbW1pdCBvdXJzZWx2ZXMgdG8gbWFraW5nIGdyZWF0IHByb2R1Y3RzLlxuICAgICAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgICAgIDxpPlxuICAgICAgICAgICAgICDigJxEZXNpZ24gaXMgbm90IGp1c3Qgd2hhdCBpdCBsb29rcyBsaWtlIGFuZCBmZWVscyBsaWtlLiBEZXNpZ24gaXMgaG93IGl0IHdvcmtzLuKAnVxuICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwiY29udGV4dFwiPiAtIFN0ZXZlIEpvYnM8L2I+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICA8Q29udGVudCB0aXRsZT17J0ludGVyZXN0cyd9IGFuY2hvcj17J2ludGVyZXN0cyd9PlxuICAgICAgICAgICAgPGgyPlNraWxsczwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5EZXNpZ24gdGhpbmtpbmcgKDxhIGhyZWY9XCJodHRwczovL3d3dy5zdWJ0cmFjdGlvbi5jb20vMjAxOC8wNC8wMi9pbi1kZWZlbnNlLW9mLWRlc2lnbi10aGlua2luZy13aGljaC1pcy10ZXJyaWJsZS9cIj5Nb3N0bHk8L2E+KTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5XZWIgZGVzaWduIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5WUiAoPGEgaHJlZj1cImh0dHA6Ly93d3cubm9ybWFsdnIuY29tL2Jsb2cvYW4tb3Blbi1zb3VyY2Uta2V5Ym9hcmQtdG8tbWFrZS15b3VyLW93bi9cIj5Ob3QgbWUgYnV0IHZlcnkgY29vbDwvYT4pPC9saT5cbiAgICAgICAgICAgICAgPGxpPkJsb2NrY2hhaW4gZm9yIGdvb2QgKDxhIGhyZWY9XCJodHRwczovL2JhaWxibG9jLnRoZW5ld2lucXVpcnkuY29tXCI+YW4gZXhhbXBsZTwvYT4pPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8aDI+TWlzY2VsbGFuZW91czwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5IdW1tdXM8L2xpPlxuICAgICAgICAgICAgICA8bGk+U3VzdGFpbmFibGUgYXJjaGl0ZWN0dXJlPC9saT5cbiAgICAgICAgICAgICAgPGxpPlR3aXR0ZXIgKDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL25nbG50XCI+bWU8L2E+KTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICA8Q29udGVudCB0aXRsZT17J1JlYWNoIG1lJ30+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9uZ2xudFwiPlR3aXR0ZXI8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJtYWlsdG86bmFnMjE0NUBjb2x1bWJpYS5lZHVcIj5FbWFpbDwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Ob2FoR2FsbGFudFwiPkdpdGh1YjwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8va2V5YmFzZS5pby9ub2FoZ2FsbGFudFwiPktleWJhc2U8L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvblwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2dsb2JlLnN2Z1wiLz4gXG4gICAgICAgICAgSSBhbSBjdXJyZW50bHkgaW4gPGk+RHVyaGFtLCBOQzwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9haFwiPlxuICAgICAgICAgIDxBbmNob3JMaW5rIGNsYXNzTmFtZT1cImFcIiBocmVmPVwiI3dvcmtzXCI+V29yazwvQW5jaG9yTGluaz48c3Bhbi8+XG4gICAgICAgICAgPEFuY2hvckxpbmsgY2xhc3NOYW1lPVwiYVwiIGhyZWY9XCIjcHJvamVjdHNcIj5Qcm9qZWN0czwvQW5jaG9yTGluaz48c3Bhbi8+XG4gICAgICAgICAgPEFuY2hvckxpbmsgY2xhc3NOYW1lPVwiYVwiIGhyZWY9XCIjbm9haFwiID48aW1nIHNyYz1cIi4uL3N0YXRpYy9ub2FoLnN2Z1wiLz48L0FuY2hvckxpbms+PHNwYW4vPlxuICAgICAgICAgIDxBbmNob3JMaW5rIGNsYXNzTmFtZT1cImFcIiBocmVmPVwiI3BoaWxvc29waHlcIj5UaG91Z2h0czwvQW5jaG9yTGluaz48c3Bhbi8+XG4gICAgICAgICAgPEFuY2hvckxpbmsgY2xhc3NOYW1lPVwiYVwiIGhyZWY9XCIjaW50ZXJlc3RzXCI+TGlrZXM8L0FuY2hvckxpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5XCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXRpbmctYW5jaG9yXCIgaWQ9XCJub2FoXCIvPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0aW5nLWFuY2hvclwiIGlkPVwid29ya3NcIi8+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXRpbmctYW5jaG9yXCIgaWQ9XCJwcm9qZWN0c1wiLz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdGluZy1hbmNob3JcIiBpZD1cInBoaWxvc29waHlcIi8+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXRpbmctYW5jaG9yXCIgaWQ9XCJpbnRlcmVzdHNcIi8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZmxvYXRpbmcge1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OjMwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLXdpbmRvdy13aWR0aCk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS13aW5kb3ctaGFsZi13aWR0aCk7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2Nyb2xse1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgdG9wOiAkey10aGlzLnN0YXRlLm9mZnNldCoxMDB9dmg7XG4gICAgICAgICAgICBoZWlnaHQ6NjAwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lbXB0eXtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6NzUwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MmVtKSB7XG4gICAgICAgICAgICAuaGVybyB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAubG9jYXRpb257XG4gICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjcwcHg7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjojMWQxZDFkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9jYXRpb24gaW1ne1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206M3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm9haHtcbiAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6NzBweDtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAubm9haCBpbWd7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206M3B4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm9haCBzcGFue1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmxvYXRpbmctYW5jaG9ye1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNub2Foe1xuICAgICAgICAgICAgdG9wOjB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3dvcmtze1xuICAgICAgICAgICAgdG9wOjEwMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcHJvamVjdHN7XG4gICAgICAgICAgICB0b3A6MjIwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNwaGlsb3NvcGh5e1xuICAgICAgICAgICAgdG9wOjM0MHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjaW50ZXJlc3Rze1xuICAgICAgICAgICAgdG9wOjQ2MHZoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgICAgLmZsb2F0aW5nIHtcbiAgICAgICAgICAgICAgICBsZWZ0OjUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDp2YXIoLS13aW5kb3ctaGFsZi13aWR0aCk7XG4gICAgICAgICAgICAgICAgdG9wOjE1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3dcbiJdfQ== */\n/*@ sourceURL=components/window.js */"),
        dynamic: [-this.state.offset * 100]
      }));
    }
  }]);

  return Window;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Window);

/***/ })

})
//# sourceMappingURL=5.84207c07d79e7f23697d.hot-update.js.map