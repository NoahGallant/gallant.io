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
        }, role[1]), role[2]);
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

      var jobs = [("https://sight.industries", "Sight", "CEO"), ("https://nautil.us", "Nautilus", "Technology Lead"), ("https://columbia.edu", "Columbia", "Student, Researcher"), ("https://ibm.com", "IBM", "Extreme Blue Intern"), ("https://bcdfa,com", "Design for America", "President")];
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
        css: ".floating.__jsx-style-dynamic-selector{position:absolute;left:30%;top:50%;margin-left:var(--window-width);margin-top:var(--window-half-width);z-index:1000;}.scroll.__jsx-style-dynamic-selector{width:100%;position:fixed;top:".concat(-this.state.offset * 100, "vh;height:600vh;}.empty.__jsx-style-dynamic-selector{width:100%;height:750vh;}@media (min-width:52em){.hero.__jsx-style-dynamic-selector{padding-top:8rem;}}.location.__jsx-style-dynamic-selector{position:fixed;bottom:0;line-height:70px;width:100%;text-align:center;color:#1d1d1d;}.location.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{vertical-align:middle;width:35px;margin-right:20px;margin-bottom:3px;}.noah.__jsx-style-dynamic-selector{position:fixed;top:0;line-height:70px;width:100%;text-align:center;color:black;}.noah.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{vertical-align:middle;width:35px;margin-bottom:3px;margin-right:20px;margin-left:20px;}.noah.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin-left:10px;margin-right:10px;}.floating-anchor.__jsx-style-dynamic-selector{position:absolute;}#noah.__jsx-style-dynamic-selector{top:0vh;}#works.__jsx-style-dynamic-selector{top:100vh;}#projects.__jsx-style-dynamic-selector{top:220vh;}#philosophy.__jsx-style-dynamic-selector{top:340vh;}#interests.__jsx-style-dynamic-selector{top:460vh;}@media (max-width:700px){.floating.__jsx-style-dynamic-selector{left:50%;margin-left:var(--window-half-width);top:175px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2luZG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlNb0IsQUFHOEIsQUFRUCxBQU1BLEFBS1MsQUFJTCxBQVFPLEFBTVAsQUFTTyxBQU9MLEFBSUMsQUFHVixBQUdFLEFBR0EsQUFHQSxBQUdBLEFBS0csUUFoQmQsQ0FpQjBDLENBZDFDLEFBR0EsQUFHQSxBQUdBLENBaEVnQixBQU1GLElBU0gsQUFjSCxFQWxCTixBQWtDaUIsQ0FyRFQsQUF5RFYsR0FuQmtCLENBUEwsQUFlQSxFQS9CYixBQVNrQixFQWZtQixDQVIzQixNQStCUyxBQWVBLEVBN0NlLEFBb0RsQyxHQWZZLEdBZEEsS0FxREcsR0F0Q0ksRUFQQSxBQWVBLENBdEJBLElBcURqQixLQXJFWSxNQVB3QixBQXNDeEIsRUFQZCxBQWVrQixDQXRCSCxJQWhCZixLQWdDQSxLQWZBLEVBc0JBLGlCQTlDZSxhQUNmIiwiZmlsZSI6ImNvbXBvbmVudHMvd2luZG93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ub2FoZ2FsbGFudC9Eb2N1bWVudHMvV29yay9wZXJzb25hbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rQnV0dG9uIGZyb20gJy4vbGlua2J1dHRvbidcbmltcG9ydCBHbG9iZSBmcm9tICcuL2dsb2JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50J1xuaW1wb3J0IEJhY2tncm91bmRzIGZyb20gJy4vYmFja2dyb3VuZHMnXG5pbXBvcnQgQW5jaG9yTGluayBmcm9tICdyZWFjdC1hbmNob3ItbGluay1zbW9vdGgtc2Nyb2xsJ1xuXG5jbGFzcyBXaW5kb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBvZmZzZXQ6IDBcbiAgfVxuXG4gIGdldFNjcm9sbFBlcmNlbnQoKSB7XG4gICAgdmFyIGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIFxuICAgICAgICBiID0gZG9jdW1lbnQuYm9keSxcbiAgICAgICAgc3QgPSAnc2Nyb2xsVG9wJyxcbiAgICAgICAgc2ggPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICByZXR1cm4gKGhbc3RdfHxiW3N0XSkgLyAoKGhbc2hdfHxiW3NoXSkgLSBoLmNsaWVudEhlaWdodCk7XG4gIH1cblxuICBmdWNrKHBjLCByLCBsaW1pdCwgcmF0ZSl7XG4gICAgaWYgKHIgPj0gbGltaXQpe1xuICAgICAgcmV0dXJuIGxpbWl0XG4gICAgfVxuICAgIGlmKHBjID4gcil7XG4gICAgICBwYyAtPSByYXRlXG4gICAgICBpZiAocGMgPCByKXtcbiAgICAgICAgcmV0dXJuIHJcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYocGMgPiByKzEpe1xuICAgICAgICByZXR1cm4gdGhpcy5mdWNrKHBjLCByKzEsIGxpbWl0LCByYXRlKVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIHBjXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICByZXR1cm4gcGNcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3Njcm9sbDInKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICB2YXIgc2NyZWVucyA9IDY7XG4gICAgICB2YXIgcmF0ZSA9IDAuNTtcbiAgICAgIHZhciB0b3RhbCA9IHJhdGUgKiBzY3JlZW5zICsgKHNjcmVlbnMtMSk7XG5cbiAgICAgIHZhciBvZmZzZXQgPSB0aGlzLmdldFNjcm9sbFBlcmNlbnQoKSAqIHRvdGFsO1xuXG4gICAgICBpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPiA3MDApe1xuICAgICAgICAgIG9mZnNldCA9IHRoaXMuZnVjayhvZmZzZXQsIDEsIHNjcmVlbnMtMSwgcmF0ZSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhvZmZzZXQpXG5cblxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtvZmZzZXR9KTtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgdGhpcy5zY3JvbGxNZSA9IHRoaXMuc2Nyb2xsTWUuYmluZCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByZW5kZXJSb2xlID0gKHJvbGUsIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvbGVcIiBrZXk9e2l9PjxhIGhyZWY9e3JvbGVbMF19Pntyb2xlWzFdfTwvYT57cm9sZVsyXX08L3NwYW4+XG4gICAgICApXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlclJvbGVzID0gKHJvbGVzKSA9PiB7XG4gICAgICByb2xlcyA9IHJvbGVzLm1hcChyZW5kZXJSb2xlKVxuICAgIFxuICAgICAgdmFyIG91dHB1dCA9IFtdXG4gICAgICByb2xlcy5mb3JFYWNoKGZ1bmN0aW9uKHJvbGUsIGkpIHtcbiAgICAgICAgLy8gaWYgbGlzdCBpcyBtb3JlIHRoYW4gb25lIGl0ZW0gYW5kIHRoaXMgaXMgdGhlIGxhc3QgaXRlbSwgcHJlZml4IHdpdGggJ2FuZCAnXG4gICAgICAgIGlmIChyb2xlcy5sZW5ndGggPiAxICYmIGkgPT09IHJvbGVzLmxlbmd0aCAtIDEpIG91dHB1dC5wdXNoKCdhbmQgJylcbiAgICAgICAgLy8gb3V0cHV0IHRoZSBpdGVtXG4gICAgICAgIG91dHB1dC5wdXNoKHJvbGUpXG4gICAgICAgIC8vIGlmIGxpc3QgaXMgbW9yZSB0aGFuIDIgaXRlbXMsIGFwcGVuZCBhIGNvbW1hIHRvIGFsbCBidXQgdGhlIGxhc3QgaXRlbVxuICAgICAgICBpZiAocm9sZXMubGVuZ3RoID4gMiAmJiBpIDwgcm9sZXMubGVuZ3RoIC0gMSkgb3V0cHV0LnB1c2goJywnKVxuICAgICAgICAvLyBpZiBsaXN0IGlzIG1vcmUgdGhhbiAxIGl0ZW0sIGFwcGVuZCBhIHNwYWNlIHRvIGFsbCBidXQgdGhlIGxhc3QgaXRlbVxuICAgICAgICBpZiAocm9sZXMubGVuZ3RoID4gMSAmJiBpIDwgcm9sZXMubGVuZ3RoIC0gMSkgb3V0cHV0LnB1c2goJyAnKVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgcmV0dXJuIG91dHB1dFxuICAgIH1cblxuICAgIGNvbnN0IGpvYnMgPSBbKFwiaHR0cHM6Ly9zaWdodC5pbmR1c3RyaWVzXCIsIFwiU2lnaHRcIiwgXCJDRU9cIiksXG4gICAgICAgICAgICAgICAgICAoXCJodHRwczovL25hdXRpbC51c1wiLCBcIk5hdXRpbHVzXCIsIFwiVGVjaG5vbG9neSBMZWFkXCIpLFxuICAgICAgICAgICAgICAgICAgKFwiaHR0cHM6Ly9jb2x1bWJpYS5lZHVcIiwgXCJDb2x1bWJpYVwiLCBcIlN0dWRlbnQsIFJlc2VhcmNoZXJcIiksXG4gICAgICAgICAgICAgICAgICAoXCJodHRwczovL2libS5jb21cIiwgXCJJQk1cIiwgXCJFeHRyZW1lIEJsdWUgSW50ZXJuXCIpLFxuICAgICAgICAgICAgICAgICAgKFwiaHR0cHM6Ly9iY2RmYSxjb21cIiwgXCJEZXNpZ24gZm9yIEFtZXJpY2FcIiwgXCJQcmVzaWRlbnRcIildXG4gICAgICAgICAgICAgICAgICBcbiAgICBjb25zdCByZW5kZXJKb2JzID0gcmVuZGVyUm9sZXMoam9icylcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICA8QmFja2dyb3VuZHMgb2Zmc2V0PXt0aGlzLnN0YXRlLm9mZnNldH0vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nXCI+XG4gICAgICAgICAgPEdsb2JlIG9mZnNldD17dGhpcy5zdGF0ZS5vZmZzZXR9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsXCI+XG4gICAgICAgICAgPENvbnRlbnQgdGl0bGU9eydIaSwgSVxcJ20gTm9haCBHYWxsYW50J30gYW5jaG9yPXsnbm9haCd9PlxuICAgICAgICAgICAgPHA+SSdtIGFuIGVuZ2luZWVyLCBkZXNpZ25lciwgYXJ0aXN0LCBkZXZlbG9wZXIsIGFuZCByZXNlYXJjaGVyLjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRleHRcIj5TY3JvbGwgZm9yIG1vcmUuPC9wPlxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICA8Q29udGVudCB0aXRsZT17J015IFdvcmsnfSBhbmNob3I9eyd3b3JrJ30+XG4gICAgICAgICAgICA8aDI+Q3VycmVudDwvaDI+XG4gICAgICAgICAgICAgIHtyZW5kZXJKb2JzfVxuICAgICAgICAgICAgPGgyPlBhc3Q8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3Jlc2VhcmNoLnlhbGUuZWR1XCI+WWFsZSBNZWRpY2FsIFNjaG9vbDwvYT4gXG4gICAgICAgICAgICAgIDxici8+PHNwYW4gY2xhc3NOYW1lPVwiY29udGV4dFwiPlJlc2VhcmNoZXI8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL21hZGV3aXRob3Zlci5jb21cIj5PdmVyIEFwcHM8L2E+IFxuICAgICAgICAgICAgPGJyLz48c3BhbiBjbGFzc05hbWU9XCJjb250ZXh0XCI+TWFjaGluZSBMZWFybmluZzwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICA8Q29udGVudCB0aXRsZT17J1NvbWUgUHJvamVjdHMnfSBhbmNob3I9eydwcm9qZWN0cyd9PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vc2lnaHQubmV0d29ya1wiPlNpZ2h0IE5ldHdvcms8L2E+XG4gICAgICAgICAgICAgICAgICA8YnIvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHRcIj5SZW1vdmluZyBhZHMgYW5kIHBheXdhbGxzIGZyb20gaW50ZXJuZXQgcHVibGlzaGluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2ppZy5zaFwiPkppZzwvYT4gXG4gICAgICAgICAgICAgICAgICA8YnIvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHRcIj5TaW1wbGlmaWVkIG11c2ljIHNoYXJpbmc8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL05vYWhHYWxsYW50XCI+RGlzdHJpYnV0ZWQgU2lnbi1pbjwvYT4gXG4gICAgICAgICAgICAgICAgICA8YnIvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHRcIj5Tb2NpYWwtZW5naW5lZXJpbmctcHJvb2YgYXV0aGVudGljYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL05vYWhHYWxsYW50XCI+TWFnaWNyb3A8L2E+IFxuICAgICAgICAgICAgICAgICAgPGJyLz48c3BhbiBjbGFzc05hbWU9XCJjb250ZXh0XCI+TWFnaWNhbCBvYmplY3QgYXV0by1jcm9wcGluZyBhbGdvcml0aG08L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICA8Q29udGVudCB0aXRsZT17J015IFBoaWxvc29waHknfSBhbmNob3I9eydwaGlsb3NvcGh5J30+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSSBiZWxpZXZlIGluIGRlc2lnbmluZyBzeXN0ZW1zIGFuZCB0ZWNobm9sb2dpZXMgZm9yIGh1bWFuaXR5LiBQcm9kdWN0IGlubm92YXRpb24gd2lsbCBkcml2ZSBzb2NpZXR5IGZvcndhcmQgc28gbG9uZyBhcyB3ZSBjb21taXQgb3Vyc2VsdmVzIHRvIG1ha2luZyBncmVhdCBwcm9kdWN0cy5cbiAgICAgICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICAgICAgICA8aT5cbiAgICAgICAgICAgICAg4oCcRGVzaWduIGlzIG5vdCBqdXN0IHdoYXQgaXQgbG9va3MgbGlrZSBhbmQgZmVlbHMgbGlrZS4gRGVzaWduIGlzIGhvdyBpdCB3b3Jrcy7igJ1cbiAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cImNvbnRleHRcIj4gLSBTdGV2ZSBKb2JzPC9iPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgPENvbnRlbnQgdGl0bGU9eydJbnRlcmVzdHMnfSBhbmNob3I9eydpbnRlcmVzdHMnfT5cbiAgICAgICAgICAgIDxoMj5Ta2lsbHM8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+RGVzaWduIHRoaW5raW5nICg8YSBocmVmPVwiaHR0cHM6Ly93d3cuc3VidHJhY3Rpb24uY29tLzIwMTgvMDQvMDIvaW4tZGVmZW5zZS1vZi1kZXNpZ24tdGhpbmtpbmctd2hpY2gtaXMtdGVycmlibGUvXCI+TW9zdGx5PC9hPik8L2xpPlxuICAgICAgICAgICAgICA8bGk+V2ViIGRlc2lnbiA8L2xpPlxuICAgICAgICAgICAgICA8bGk+VlIgKDxhIGhyZWY9XCJodHRwOi8vd3d3Lm5vcm1hbHZyLmNvbS9ibG9nL2FuLW9wZW4tc291cmNlLWtleWJvYXJkLXRvLW1ha2UteW91ci1vd24vXCI+Tm90IG1lIGJ1dCB2ZXJ5IGNvb2w8L2E+KTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5CbG9ja2NoYWluIGZvciBnb29kICg8YSBocmVmPVwiaHR0cHM6Ly9iYWlsYmxvYy50aGVuZXdpbnF1aXJ5LmNvbVwiPmFuIGV4YW1wbGU8L2E+KTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGgyPk1pc2NlbGxhbmVvdXM8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+SHVtbXVzPC9saT5cbiAgICAgICAgICAgICAgPGxpPlN1c3RhaW5hYmxlIGFyY2hpdGVjdHVyZTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Ud2l0dGVyICg8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9uZ2xudFwiPm1lPC9hPik8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgPENvbnRlbnQgdGl0bGU9eydSZWFjaCBtZSd9PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vbmdsbnRcIj5Ud2l0dGVyPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwibWFpbHRvOm5hZzIxNDVAY29sdW1iaWEuZWR1XCI+RW1haWw8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTm9haEdhbGxhbnRcIj5HaXRodWI8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2tleWJhc2UuaW8vbm9haGdhbGxhbnRcIj5LZXliYXNlPC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9nbG9iZS5zdmdcIi8+IFxuICAgICAgICAgIEkgYW0gY3VycmVudGx5IGluIDxpPkR1cmhhbSwgTkM8L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vYWhcIj5cbiAgICAgICAgICA8QW5jaG9yTGluayBjbGFzc05hbWU9XCJhXCIgaHJlZj1cIiN3b3Jrc1wiPldvcms8L0FuY2hvckxpbms+PHNwYW4vPlxuICAgICAgICAgIDxBbmNob3JMaW5rIGNsYXNzTmFtZT1cImFcIiBocmVmPVwiI3Byb2plY3RzXCI+UHJvamVjdHM8L0FuY2hvckxpbms+PHNwYW4vPlxuICAgICAgICAgIDxBbmNob3JMaW5rIGNsYXNzTmFtZT1cImFcIiBocmVmPVwiI25vYWhcIiA+PGltZyBzcmM9XCIuLi9zdGF0aWMvbm9haC5zdmdcIi8+PC9BbmNob3JMaW5rPjxzcGFuLz5cbiAgICAgICAgICA8QW5jaG9yTGluayBjbGFzc05hbWU9XCJhXCIgaHJlZj1cIiNwaGlsb3NvcGh5XCI+VGhvdWdodHM8L0FuY2hvckxpbms+PHNwYW4vPlxuICAgICAgICAgIDxBbmNob3JMaW5rIGNsYXNzTmFtZT1cImFcIiBocmVmPVwiI2ludGVyZXN0c1wiPkxpa2VzPC9BbmNob3JMaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0aW5nLWFuY2hvclwiIGlkPVwibm9haFwiLz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdGluZy1hbmNob3JcIiBpZD1cIndvcmtzXCIvPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0aW5nLWFuY2hvclwiIGlkPVwicHJvamVjdHNcIi8+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXRpbmctYW5jaG9yXCIgaWQ9XCJwaGlsb3NvcGh5XCIvPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0aW5nLWFuY2hvclwiIGlkPVwiaW50ZXJlc3RzXCIvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZsb2F0aW5nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDozMCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS13aW5kb3ctd2lkdGgpO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0td2luZG93LWhhbGYtd2lkdGgpO1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNjcm9sbHtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgIHRvcDogJHstdGhpcy5zdGF0ZS5vZmZzZXQqMTAwfXZoO1xuICAgICAgICAgICAgaGVpZ2h0OjYwMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZW1wdHl7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0Ojc1MHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTJlbSkge1xuICAgICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvY2F0aW9ue1xuICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDo3MHB4O1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IzFkMWQxZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvY2F0aW9uIGltZ3tcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vYWh7XG4gICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjcwcHg7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vYWggaW1ne1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjNweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDoyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vYWggc3BhbntcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZsb2F0aW5nLWFuY2hvcntcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjbm9haHtcbiAgICAgICAgICAgIHRvcDowdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgICN3b3Jrc3tcbiAgICAgICAgICAgIHRvcDoxMDB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3Byb2plY3Rze1xuICAgICAgICAgICAgdG9wOjIyMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcGhpbG9zb3BoeXtcbiAgICAgICAgICAgIHRvcDozNDB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2ludGVyZXN0c3tcbiAgICAgICAgICAgIHRvcDo0NjB2aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgIC5mbG9hdGluZyB7XG4gICAgICAgICAgICAgICAgbGVmdDo1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6dmFyKC0td2luZG93LWhhbGYtd2lkdGgpO1xuICAgICAgICAgICAgICAgIHRvcDoxNzVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2luZG93XG4iXX0= */\n/*@ sourceURL=components/window.js */"),
        dynamic: [-this.state.offset * 100]
      }));
    }
  }]);

  return Window;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Window);

/***/ })

})
//# sourceMappingURL=5.94318c601d6e545b27a7.hot-update.js.map