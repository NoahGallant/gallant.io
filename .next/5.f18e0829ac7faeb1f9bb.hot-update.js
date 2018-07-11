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
        var offset = _this2.getScrollPercent() * total;

        if (document.documentElement.clientWidth > 700) {
          offset = _this2.fuck(offset, 1, screens - 1, rate);
        }

        console.log(offset);

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
      var renderRole = function renderRole(role, i) {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
          className: "role",
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
          href: role[0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, role[1], " "), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
          className: "context",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, role[2]));
      };

      var renderRoles = function renderRoles(roles) {
        roles = roles.map(renderRole);
        var output = [];
        roles.forEach(function (role, i) {
          // if list is more than one item and this is the last item, prefix with 'and '
          if (roles.length > 1 && i === roles.length - 1) output.push('and '); // output the item

          output.push(role); // if list is more than 2 items, append a comma to all but the last item

          if (roles.length > 2 && i < roles.length - 1) output.push(','); // if list is more than 1 item, append a space to all but the last item

          if (roles.length > 1 && i < roles.length - 1) output.push(' ');
        });
        return output;
      };

      var jobs = [["https://sight.industries", "Sight", "CEO"], ["https://nautil.us", "Nautilus", "Technology Lead"], ["https://columbia.edu", "Columbia", "Student, Researcher"], ["https://ibm.com", "IBM", "Extreme Blue Intern"], ["https://bcdfa,com", "Design for America", "President"]];
      var renderJobs = renderRoles(jobs);
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "container"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "floating-container"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__backgrounds__["a" /* default */], {
        offset: this.state.offset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "floating"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__globe__["a" /* default */], {
        offset: this.state.offset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "scroll"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__content__["a" /* default */], {
        title: 'Hi, I\'m Noah Gallant',
        anchor: 'noah',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "I'm an engineer, designer, artist, developer, and researcher."), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "context"
      }, "Scroll for more.")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__content__["a" /* default */], {
        title: 'My Work',
        anchor: 'work',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Current"), renderJobs, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Past"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://research.yale.edu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Yale Medical School"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "context"
      }, "Researcher")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://madewithover.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Over Apps"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "context"
      }, "Machine Learning")))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__content__["a" /* default */], {
        title: 'Some Projects',
        anchor: 'projects',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://sight.network",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Sight Network"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "context"
      }, "Removing ads and paywalls from internet publishing")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://jig.sh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Jig"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "context"
      }, "Simplified music sharing")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://github.com/NoahGallant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Distributed Sign-in"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "context"
      }, "Social-engineering-proof authentication")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://github.com/NoahGallant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Magicrop"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "context"
      }, "Magical object auto-cropping algorithm")))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__content__["a" /* default */], {
        title: 'My Philosophy',
        anchor: 'philosophy',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "I believe in designing systems and technologies for humanity. Product innovation will drive society forward so long as we commit ourselves to making great products.", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "\u201CDesign is not just what it looks like and feels like. Design is how it works.\u201D"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "context"
      }, " - Steve Jobs"))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__content__["a" /* default */], {
        title: 'Interests',
        anchor: 'interests',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Skills"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Design thinking (", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://www.subtraction.com/2018/04/02/in-defense-of-design-thinking-which-is-terrible/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Mostly"), ")"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Web design "), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "VR (", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "http://www.normalvr.com/blog/an-open-source-keyboard-to-make-your-own/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Not me but very cool"), ")"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Blockchain for good (", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://bailbloc.thenewinquiry.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "an example"), ")")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Miscellaneous"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Hummus"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Sustainable architecture"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Twitter (", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://twitter.com/nglnt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "me"), ")"))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__content__["a" /* default */], {
        title: 'Reach me',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://twitter.com/nglnt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Twitter")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "mailto:nag2145@columbia.edu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Email")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://github.com/NoahGallant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Github")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://keybase.io/noahgallant",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Keybase"))))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "location"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", {
        src: "../static/globe.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }), "I am currently in ", __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }, "Durham, NC")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "noah"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#works",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, "Work"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, "Projects"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#noah",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", {
        src: "../static/noah.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#philosophy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, "Thoughts"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]])
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_anchor_link_smooth_scroll___default.a, {
        className: "a",
        href: "#interests",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, "Likes")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "empty"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        id: "noah",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        id: "works",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        id: "projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        id: "philosophy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "floating-anchor"
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        id: "interests",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3120617162", [-this.state.offset * 100]]]) + " " + "floating-anchor"
      })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3120617162",
        css: ".floating.__jsx-style-dynamic-selector{position:absolute;left:30%;top:50%;margin-left:var(--window-width);margin-top:var(--window-half-width);z-index:1000;}.scroll.__jsx-style-dynamic-selector{width:100%;position:fixed;top:".concat(-this.state.offset * 100, "vh;height:600vh;}.empty.__jsx-style-dynamic-selector{width:100%;height:750vh;}@media (min-width:52em){.hero.__jsx-style-dynamic-selector{padding-top:8rem;}}.location.__jsx-style-dynamic-selector{position:fixed;bottom:0;line-height:70px;width:100%;text-align:center;color:#1d1d1d;}.location.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{vertical-align:middle;width:35px;margin-right:20px;margin-bottom:3px;}.noah.__jsx-style-dynamic-selector{position:fixed;top:0;line-height:70px;width:100%;text-align:center;color:black;}.noah.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{vertical-align:middle;width:35px;margin-bottom:3px;margin-right:20px;margin-left:20px;}.noah.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin-left:10px;margin-right:10px;}.floating-anchor.__jsx-style-dynamic-selector{position:absolute;}#noah.__jsx-style-dynamic-selector{top:0vh;}#works.__jsx-style-dynamic-selector{top:100vh;}#projects.__jsx-style-dynamic-selector{top:220vh;}#philosophy.__jsx-style-dynamic-selector{top:340vh;}#interests.__jsx-style-dynamic-selector{top:460vh;}@media (max-width:700px){.floating.__jsx-style-dynamic-selector{left:50%;margin-left:var(--window-half-width);top:175px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2luZG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlNb0IsQUFHOEIsQUFRUCxBQU1BLEFBS1MsQUFJTCxBQVFPLEFBTVAsQUFTTyxBQU9MLEFBSUMsQUFHVixBQUdFLEFBR0EsQUFHQSxBQUdBLEFBS0csUUFoQmQsQ0FpQjBDLENBZDFDLEFBR0EsQUFHQSxBQUdBLENBaEVnQixBQU1GLElBU0gsQUFjSCxFQWxCTixBQWtDaUIsQ0FyRFQsQUF5RFYsR0FuQmtCLENBUEwsQUFlQSxFQS9CYixBQVNrQixFQWZtQixDQVIzQixNQStCUyxBQWVBLEVBN0NlLEFBb0RsQyxHQWZZLEdBZEEsS0FxREcsR0F0Q0ksRUFQQSxBQWVBLENBdEJBLElBcURqQixLQXJFWSxNQVB3QixBQXNDeEIsRUFQZCxBQWVrQixDQXRCSCxJQWhCZixLQWdDQSxLQWZBLEVBc0JBLGlCQTlDZSxhQUNmIiwiZmlsZSI6ImNvbXBvbmVudHMvd2luZG93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ub2FoZ2FsbGFudC9Eb2N1bWVudHMvV29yay9wZXJzb25hbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rQnV0dG9uIGZyb20gJy4vbGlua2J1dHRvbidcbmltcG9ydCBHbG9iZSBmcm9tICcuL2dsb2JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50J1xuaW1wb3J0IEJhY2tncm91bmRzIGZyb20gJy4vYmFja2dyb3VuZHMnXG5pbXBvcnQgQW5jaG9yTGluayBmcm9tICdyZWFjdC1hbmNob3ItbGluay1zbW9vdGgtc2Nyb2xsJ1xuXG5jbGFzcyBXaW5kb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBvZmZzZXQ6IDBcbiAgfVxuXG4gIGdldFNjcm9sbFBlcmNlbnQoKSB7XG4gICAgdmFyIGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIFxuICAgICAgICBiID0gZG9jdW1lbnQuYm9keSxcbiAgICAgICAgc3QgPSAnc2Nyb2xsVG9wJyxcbiAgICAgICAgc2ggPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICByZXR1cm4gKGhbc3RdfHxiW3N0XSkgLyAoKGhbc2hdfHxiW3NoXSkgLSBoLmNsaWVudEhlaWdodCk7XG4gIH1cblxuICBmdWNrKHBjLCByLCBsaW1pdCwgcmF0ZSl7XG4gICAgaWYgKHIgPj0gbGltaXQpe1xuICAgICAgcmV0dXJuIGxpbWl0XG4gICAgfVxuICAgIGlmKHBjID4gcil7XG4gICAgICBwYyAtPSByYXRlXG4gICAgICBpZiAocGMgPCByKXtcbiAgICAgICAgcmV0dXJuIHJcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYocGMgPiByKzEpe1xuICAgICAgICByZXR1cm4gdGhpcy5mdWNrKHBjLCByKzEsIGxpbWl0LCByYXRlKVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIHBjXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICByZXR1cm4gcGNcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3Njcm9sbDInKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICB2YXIgc2NyZWVucyA9IDY7XG4gICAgICB2YXIgcmF0ZSA9IDAuNTtcbiAgICAgIHZhciB0b3RhbCA9IHJhdGUgKiBzY3JlZW5zICsgKHNjcmVlbnMtMSk7XG5cbiAgICAgIHZhciBvZmZzZXQgPSB0aGlzLmdldFNjcm9sbFBlcmNlbnQoKSAqIHRvdGFsO1xuXG4gICAgICBpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPiA3MDApe1xuICAgICAgICAgIG9mZnNldCA9IHRoaXMuZnVjayhvZmZzZXQsIDEsIHNjcmVlbnMtMSwgcmF0ZSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhvZmZzZXQpXG5cblxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtvZmZzZXR9KTtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgdGhpcy5zY3JvbGxNZSA9IHRoaXMuc2Nyb2xsTWUuYmluZCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByZW5kZXJSb2xlID0gKHJvbGUsIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvbGVcIiBrZXk9e2l9PjxhIGhyZWY9e3JvbGVbMF19Pntyb2xlWzFdfSA8L2E+PHNwYW4gY2xhc3NOYW1lPVwiY29udGV4dFwiPntyb2xlWzJdfTwvc3Bhbj48L3NwYW4+XG4gICAgICApXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlclJvbGVzID0gKHJvbGVzKSA9PiB7XG4gICAgICByb2xlcyA9IHJvbGVzLm1hcChyZW5kZXJSb2xlKVxuICAgIFxuICAgICAgdmFyIG91dHB1dCA9IFtdXG4gICAgICByb2xlcy5mb3JFYWNoKGZ1bmN0aW9uKHJvbGUsIGkpIHtcbiAgICAgICAgLy8gaWYgbGlzdCBpcyBtb3JlIHRoYW4gb25lIGl0ZW0gYW5kIHRoaXMgaXMgdGhlIGxhc3QgaXRlbSwgcHJlZml4IHdpdGggJ2FuZCAnXG4gICAgICAgIGlmIChyb2xlcy5sZW5ndGggPiAxICYmIGkgPT09IHJvbGVzLmxlbmd0aCAtIDEpIG91dHB1dC5wdXNoKCdhbmQgJylcbiAgICAgICAgLy8gb3V0cHV0IHRoZSBpdGVtXG4gICAgICAgIG91dHB1dC5wdXNoKHJvbGUpXG4gICAgICAgIC8vIGlmIGxpc3QgaXMgbW9yZSB0aGFuIDIgaXRlbXMsIGFwcGVuZCBhIGNvbW1hIHRvIGFsbCBidXQgdGhlIGxhc3QgaXRlbVxuICAgICAgICBpZiAocm9sZXMubGVuZ3RoID4gMiAmJiBpIDwgcm9sZXMubGVuZ3RoIC0gMSkgb3V0cHV0LnB1c2goJywnKVxuICAgICAgICAvLyBpZiBsaXN0IGlzIG1vcmUgdGhhbiAxIGl0ZW0sIGFwcGVuZCBhIHNwYWNlIHRvIGFsbCBidXQgdGhlIGxhc3QgaXRlbVxuICAgICAgICBpZiAocm9sZXMubGVuZ3RoID4gMSAmJiBpIDwgcm9sZXMubGVuZ3RoIC0gMSkgb3V0cHV0LnB1c2goJyAnKVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgcmV0dXJuIG91dHB1dFxuICAgIH1cblxuICAgIGNvbnN0IGpvYnMgPSBbW1wiaHR0cHM6Ly9zaWdodC5pbmR1c3RyaWVzXCIsIFwiU2lnaHRcIiwgXCJDRU9cIl0sXG4gICAgICAgICAgICAgICAgICBbXCJodHRwczovL25hdXRpbC51c1wiLCBcIk5hdXRpbHVzXCIsIFwiVGVjaG5vbG9neSBMZWFkXCJdLFxuICAgICAgICAgICAgICAgICAgW1wiaHR0cHM6Ly9jb2x1bWJpYS5lZHVcIiwgXCJDb2x1bWJpYVwiLCBcIlN0dWRlbnQsIFJlc2VhcmNoZXJcIl0sXG4gICAgICAgICAgICAgICAgICBbXCJodHRwczovL2libS5jb21cIiwgXCJJQk1cIiwgXCJFeHRyZW1lIEJsdWUgSW50ZXJuXCJdLFxuICAgICAgICAgICAgICAgICAgW1wiaHR0cHM6Ly9iY2RmYSxjb21cIiwgXCJEZXNpZ24gZm9yIEFtZXJpY2FcIiwgXCJQcmVzaWRlbnRcIl1dO1xuICAgICAgICAgICAgICAgICAgXG4gICAgY29uc3QgcmVuZGVySm9icyA9IHJlbmRlclJvbGVzKGpvYnMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZy1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgPEJhY2tncm91bmRzIG9mZnNldD17dGhpcy5zdGF0ZS5vZmZzZXR9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZ1wiPlxuICAgICAgICAgIDxHbG9iZSBvZmZzZXQ9e3RoaXMuc3RhdGUub2Zmc2V0fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbFwiPlxuICAgICAgICAgIDxDb250ZW50IHRpdGxlPXsnSGksIElcXCdtIE5vYWggR2FsbGFudCd9IGFuY2hvcj17J25vYWgnfT5cbiAgICAgICAgICAgIDxwPkknbSBhbiBlbmdpbmVlciwgZGVzaWduZXIsIGFydGlzdCwgZGV2ZWxvcGVyLCBhbmQgcmVzZWFyY2hlci48L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250ZXh0XCI+U2Nyb2xsIGZvciBtb3JlLjwvcD5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgPENvbnRlbnQgdGl0bGU9eydNeSBXb3JrJ30gYW5jaG9yPXsnd29yayd9PlxuICAgICAgICAgICAgPGgyPkN1cnJlbnQ8L2gyPlxuICAgICAgICAgICAgICB7cmVuZGVySm9ic31cbiAgICAgICAgICAgIDxoMj5QYXN0PC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9yZXNlYXJjaC55YWxlLmVkdVwiPllhbGUgTWVkaWNhbCBTY2hvb2w8L2E+IFxuICAgICAgICAgICAgICA8YnIvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHRcIj5SZXNlYXJjaGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9tYWRld2l0aG92ZXIuY29tXCI+T3ZlciBBcHBzPC9hPiBcbiAgICAgICAgICAgIDxici8+PHNwYW4gY2xhc3NOYW1lPVwiY29udGV4dFwiPk1hY2hpbmUgTGVhcm5pbmc8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgPENvbnRlbnQgdGl0bGU9eydTb21lIFByb2plY3RzJ30gYW5jaG9yPXsncHJvamVjdHMnfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3NpZ2h0Lm5ldHdvcmtcIj5TaWdodCBOZXR3b3JrPC9hPlxuICAgICAgICAgICAgICAgICAgPGJyLz48c3BhbiBjbGFzc05hbWU9XCJjb250ZXh0XCI+UmVtb3ZpbmcgYWRzIGFuZCBwYXl3YWxscyBmcm9tIGludGVybmV0IHB1Ymxpc2hpbmc8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9qaWcuc2hcIj5KaWc8L2E+IFxuICAgICAgICAgICAgICAgICAgPGJyLz48c3BhbiBjbGFzc05hbWU9XCJjb250ZXh0XCI+U2ltcGxpZmllZCBtdXNpYyBzaGFyaW5nPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Ob2FoR2FsbGFudFwiPkRpc3RyaWJ1dGVkIFNpZ24taW48L2E+IFxuICAgICAgICAgICAgICAgICAgPGJyLz48c3BhbiBjbGFzc05hbWU9XCJjb250ZXh0XCI+U29jaWFsLWVuZ2luZWVyaW5nLXByb29mIGF1dGhlbnRpY2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Ob2FoR2FsbGFudFwiPk1hZ2ljcm9wPC9hPiBcbiAgICAgICAgICAgICAgICAgIDxici8+PHNwYW4gY2xhc3NOYW1lPVwiY29udGV4dFwiPk1hZ2ljYWwgb2JqZWN0IGF1dG8tY3JvcHBpbmcgYWxnb3JpdGhtPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgPENvbnRlbnQgdGl0bGU9eydNeSBQaGlsb3NvcGh5J30gYW5jaG9yPXsncGhpbG9zb3BoeSd9PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEkgYmVsaWV2ZSBpbiBkZXNpZ25pbmcgc3lzdGVtcyBhbmQgdGVjaG5vbG9naWVzIGZvciBodW1hbml0eS4gUHJvZHVjdCBpbm5vdmF0aW9uIHdpbGwgZHJpdmUgc29jaWV0eSBmb3J3YXJkIHNvIGxvbmcgYXMgd2UgY29tbWl0IG91cnNlbHZlcyB0byBtYWtpbmcgZ3JlYXQgcHJvZHVjdHMuXG4gICAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgICAgPGk+XG4gICAgICAgICAgICAgIOKAnERlc2lnbiBpcyBub3QganVzdCB3aGF0IGl0IGxvb2tzIGxpa2UgYW5kIGZlZWxzIGxpa2UuIERlc2lnbiBpcyBob3cgaXQgd29ya3Mu4oCdXG4gICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJjb250ZXh0XCI+IC0gU3RldmUgSm9iczwvYj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgIDxDb250ZW50IHRpdGxlPXsnSW50ZXJlc3RzJ30gYW5jaG9yPXsnaW50ZXJlc3RzJ30+XG4gICAgICAgICAgICA8aDI+U2tpbGxzPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPkRlc2lnbiB0aGlua2luZyAoPGEgaHJlZj1cImh0dHBzOi8vd3d3LnN1YnRyYWN0aW9uLmNvbS8yMDE4LzA0LzAyL2luLWRlZmVuc2Utb2YtZGVzaWduLXRoaW5raW5nLXdoaWNoLWlzLXRlcnJpYmxlL1wiPk1vc3RseTwvYT4pPC9saT5cbiAgICAgICAgICAgICAgPGxpPldlYiBkZXNpZ24gPC9saT5cbiAgICAgICAgICAgICAgPGxpPlZSICg8YSBocmVmPVwiaHR0cDovL3d3dy5ub3JtYWx2ci5jb20vYmxvZy9hbi1vcGVuLXNvdXJjZS1rZXlib2FyZC10by1tYWtlLXlvdXItb3duL1wiPk5vdCBtZSBidXQgdmVyeSBjb29sPC9hPik8L2xpPlxuICAgICAgICAgICAgICA8bGk+QmxvY2tjaGFpbiBmb3IgZ29vZCAoPGEgaHJlZj1cImh0dHBzOi8vYmFpbGJsb2MudGhlbmV3aW5xdWlyeS5jb21cIj5hbiBleGFtcGxlPC9hPik8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxoMj5NaXNjZWxsYW5lb3VzPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPkh1bW11czwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TdXN0YWluYWJsZSBhcmNoaXRlY3R1cmU8L2xpPlxuICAgICAgICAgICAgICA8bGk+VHdpdHRlciAoPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vbmdsbnRcIj5tZTwvYT4pPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgIDxDb250ZW50IHRpdGxlPXsnUmVhY2ggbWUnfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL25nbG50XCI+VHdpdHRlcjwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIm1haWx0bzpuYWcyMTQ1QGNvbHVtYmlhLmVkdVwiPkVtYWlsPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL05vYWhHYWxsYW50XCI+R2l0aHViPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9rZXliYXNlLmlvL25vYWhnYWxsYW50XCI+S2V5YmFzZTwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvZ2xvYmUuc3ZnXCIvPiBcbiAgICAgICAgICBJIGFtIGN1cnJlbnRseSBpbiA8aT5EdXJoYW0sIE5DPC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub2FoXCI+XG4gICAgICAgICAgPEFuY2hvckxpbmsgY2xhc3NOYW1lPVwiYVwiIGhyZWY9XCIjd29ya3NcIj5Xb3JrPC9BbmNob3JMaW5rPjxzcGFuLz5cbiAgICAgICAgICA8QW5jaG9yTGluayBjbGFzc05hbWU9XCJhXCIgaHJlZj1cIiNwcm9qZWN0c1wiPlByb2plY3RzPC9BbmNob3JMaW5rPjxzcGFuLz5cbiAgICAgICAgICA8QW5jaG9yTGluayBjbGFzc05hbWU9XCJhXCIgaHJlZj1cIiNub2FoXCIgPjxpbWcgc3JjPVwiLi4vc3RhdGljL25vYWguc3ZnXCIvPjwvQW5jaG9yTGluaz48c3Bhbi8+XG4gICAgICAgICAgPEFuY2hvckxpbmsgY2xhc3NOYW1lPVwiYVwiIGhyZWY9XCIjcGhpbG9zb3BoeVwiPlRob3VnaHRzPC9BbmNob3JMaW5rPjxzcGFuLz5cbiAgICAgICAgICA8QW5jaG9yTGluayBjbGFzc05hbWU9XCJhXCIgaHJlZj1cIiNpbnRlcmVzdHNcIj5MaWtlczwvQW5jaG9yTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdGluZy1hbmNob3JcIiBpZD1cIm5vYWhcIi8+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXRpbmctYW5jaG9yXCIgaWQ9XCJ3b3Jrc1wiLz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdGluZy1hbmNob3JcIiBpZD1cInByb2plY3RzXCIvPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0aW5nLWFuY2hvclwiIGlkPVwicGhpbG9zb3BoeVwiLz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdGluZy1hbmNob3JcIiBpZD1cImludGVyZXN0c1wiLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5mbG9hdGluZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6MzAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0td2luZG93LXdpZHRoKTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXdpbmRvdy1oYWxmLXdpZHRoKTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zY3JvbGx7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICB0b3A6ICR7LXRoaXMuc3RhdGUub2Zmc2V0KjEwMH12aDtcbiAgICAgICAgICAgIGhlaWdodDo2MDB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmVtcHR5e1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIGhlaWdodDo3NTB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDUyZW0pIHtcbiAgICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2NhdGlvbntcbiAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6NzBweDtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiMxZDFkMWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2NhdGlvbiBpbWd7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDoyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTozcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub2Foe1xuICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDo3MHB4O1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub2FoIGltZ3tcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTozcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub2FoIHNwYW57XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mbG9hdGluZy1hbmNob3J7XG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI25vYWh7XG4gICAgICAgICAgICB0b3A6MHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjd29ya3N7XG4gICAgICAgICAgICB0b3A6MTAwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNwcm9qZWN0c3tcbiAgICAgICAgICAgIHRvcDoyMjB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3BoaWxvc29waHl7XG4gICAgICAgICAgICB0b3A6MzQwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNpbnRlcmVzdHN7XG4gICAgICAgICAgICB0b3A6NDYwdmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAuZmxvYXRpbmcge1xuICAgICAgICAgICAgICAgIGxlZnQ6NTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OnZhcigtLXdpbmRvdy1oYWxmLXdpZHRoKTtcbiAgICAgICAgICAgICAgICB0b3A6MTc1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvd1xuIl19 */\n/*@ sourceURL=components/window.js */"),
        dynamic: [-this.state.offset * 100]
      }));
    }
  }]);

  return Window;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Window);

/***/ })

})
//# sourceMappingURL=5.f18e0829ac7faeb1f9bb.hot-update.js.map