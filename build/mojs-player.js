/*! 
	:: MojsPlayer :: Player controls for [mojs](mojs.io). Intended to help you to craft `mojs` animation sequences.
	Oleg Solomka @LegoMushroom 2016 MIT
	0.45.0 
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mojs-player", [], factory);
	else if(typeof exports === 'object')
		exports["mojs-player"] = factory();
	else
		root["mojs-player"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 506:
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ 575:
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 913:
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ 713:
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ 525:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var superPropBase = __webpack_require__(331);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ 754:
/***/ (function(module) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ 205:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(489);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ 585:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(8);

var assertThisInitialized = __webpack_require__(506);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ 489:
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ 331:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(754);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ 8:
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ js_mojs_player; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(8);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(713);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(575);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(913);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/get.js
var get = __webpack_require__(525);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(205);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(585);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(754);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/classlist-polyfill/src/index.js
var src = __webpack_require__(241);
;// CONCATENATED MODULE: ./js/components/module.js




/*
  Base class for all modules.
  Extends _defaults to _props
*/
var Module = /*#__PURE__*/function () {
  /*
    constructor method calls scaffolding methods.
  */
  function Module() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    classCallCheck_default()(this, Module);

    this._o = o;
    this._index = this._o.index || 0;

    this._declareDefaults();

    this._extendDefaults();

    this._vars();

    this._render();
  }
  /*
    Method to declare defaults.
    @private
  */


  createClass_default()(Module, [{
    key: "_declareDefaults",
    value: function _declareDefaults() {
      this._defaults = {
        className: '',
        parent: document.body,
        isPrepend: false,
        isRipple: false,
        prefix: ''
      };
    }
    /*
      Method to add pointer down even listener to el.
      @param {Object}   HTMLElement to add event listener on.
      @param {Function} Event listener callback.
    */

  }, {
    key: "_addPointerDownEvent",
    value: function _addPointerDownEvent(el, fn) {
      if (window.navigator.msPointerEnabled) {
        el.addEventListener('MSPointerDown', fn);
      } else if (window.ontouchstart !== undefined) {
        el.addEventListener('touchstart', fn);
        el.addEventListener('mousedown', fn);
      } else {
        el.addEventListener('mousedown', fn);
      }
    }
    /*
      Method to add pointer up even listener to el.
      @param {Object}   HTMLElement to add event listener on.
      @param {Function} Event listener callback.
    */

  }, {
    key: "_addPointerUpEvent",
    value: function _addPointerUpEvent(el, fn) {
      if (window.navigator.msPointerEnabled) {
        el.addEventListener('MSPointerUp', fn);
      } else if (window.ontouchstart !== undefined) {
        el.addEventListener('touchend', fn);
        el.addEventListener('mouseup', fn);
      } else {
        el.addEventListener('mouseup', fn);
      }
    }
    /*
      Method to check if variable holds link to a function.
      @param {Function?} A variable to check.
      @returns {Boolean} If passed variable is a function.
    */

  }, {
    key: "_isFunction",
    value: function _isFunction(fn) {
      return typeof fn === 'function';
    }
    /*
      Method to a function or silently fail.
      @param {Function?} A variable to check.
      @param {Array like} Arguments.
    */

  }, {
    key: "_callIfFunction",
    value: function _callIfFunction(fn) {
      Array.prototype.shift.call(arguments);
      this._isFunction(fn) && fn.apply(this, arguments);
    }
    /*
      Method to declare module's variables.
      @private
    */

  }, {
    key: "_vars",
    value: function _vars() {}
    /*
      Method to render on initialization.
      @private
    */

  }, {
    key: "_render",
    value: function _render() {
      this._addMainElement();
    }
    /*
      Method to add `this.el` on the module.
      @private
      @param {String} Tag name of the element.
    */

  }, {
    key: "_addMainElement",
    value: function _addMainElement() {
      var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
      var p = this._props;
      this.el = this._createElement(tagName);

      this._addMainClasses();

      var method = p.isPrepend ? 'prepend' : 'append';
      this["_".concat(method, "Child")](p.parent, this.el);
    }
    /*
      Method to classes on `this.el`.
      @private
    */

  }, {
    key: "_addMainClasses",
    value: function _addMainClasses() {
      var p = this._props;

      if (p.className instanceof Array) {
        for (var i = 0; i < p.className.length; i++) {
          this._addClass(this.el, p.className[i]);
        }
      } else {
        this._addClass(this.el, p.className);
      }
    }
    /*
      Method to add a class on el.
      @private
      @param {Object} HTML element to add the class on.
      @param {String} Class name to add.
    */

  }, {
    key: "_addClass",
    value: function _addClass(el, className) {
      className && el.classList.add(className);
    }
    /*
      Method to set property on the module.
      @private
      @param {String, Object} Name of the property to set
                              or object with properties to set.
      @param {Any} Value for the property to set. Could be
                    undefined if the first param is object.
    */

  }, {
    key: "_setProp",
    value: function _setProp(attr, value) {
      if (typeof_default()(attr) === 'object') {
        for (var key in attr) {
          this._assignProp(key, attr[key]);
        }
      } else {
        this._assignProp(attr, value);
      }
    }
    /*
      Method to assign single property's value.
      @private
      @param {String} Property name.
      @param {Any}    Property value.
    */

  }, {
    key: "_assignProp",
    value: function _assignProp(key, value) {
      this._props[key] = value;
    }
    /*
      Method to copy `_o` options to `_props` object
      with fallback to `_defaults`.
      @private
    */

  }, {
    key: "_extendDefaults",
    value: function _extendDefaults() {
      this._props = {}; // this._deltas = {};

      for (var key in this._defaults) {
        var value = this._o[key];
        this.isIt && console.log(key); // copy the properties to the _o object

        this._assignProp(key, value != null ? value : this._defaults[key]);
      }
    }
    /*
      Method to create HTMLElement from tag name.
      @private
      @param {String} Name of the tag to create `HTML` element.
      @returns {Object} HtmlElement.
    */

  }, {
    key: "_createElement",
    value: function _createElement(tagName) {
      return document.createElement(tagName);
    }
    /*
      Method to create HTMLElement and append it to the `el` with a className.
      @private
      @param {String} The tagname for the HTMLElement.
      @param {String} Optional class name to add to the new child.
      @returns {Object} The newely created HTMLElement.
    */

  }, {
    key: "_createChild",
    value: function _createChild(tagName, className) {
      var child = this._createElement('div');

      className && child.classList.add(className);
      this.el.appendChild(child);
      return child;
    }
    /*
      Method to prepend child to the el.
      @private
      @param {Object} Parent HTMLElement.
      @param {Object} Child HTMLElement.
    */

  }, {
    key: "_appendChild",
    value: function _appendChild(el, childEl) {
      el.appendChild(childEl);
    }
    /*
      Method to prepend child to the el.
      @private
      @param {Object} Parent HTMLElement.
      @param {Object} Child HTMLElement.
    */

  }, {
    key: "_prependChild",
    value: function _prependChild(el, childEl) {
      el.insertBefore(childEl, el.firstChild);
    }
  }]);

  return Module;
}();

/* harmony default export */ var components_module = (Module);
;// CONCATENATED MODULE: ./js/components/icons.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Icons = /*#__PURE__*/function (_Module) {
  inherits_default()(Icons, _Module);

  var _super = _createSuper(Icons);

  function Icons() {
    classCallCheck_default()(this, Icons);

    return _super.apply(this, arguments);
  }

  createClass_default()(Icons, [{
    key: "_render",

    /*
      Initial render method.
      @private
      @overrides @ Module
    */
    value: function _render() {
      this.el = this._createElement('div');
      this.el.innerHTML = this.getIcons();
      this.el.setAttribute('id', "".concat(this._props.prefix, "icons"));

      this._prependChild(document.body, this.el);
    }
    /*
      Method to get icons shapes.
      @private
    */

  }, {
    key: "getIcons",
    value: function getIcons() {
      var prefix = this._props.prefix;
      return "<svg height=\"0\" xmlns=\"http://www.w3.org/2000/svg\" style=\"position:absolute; margin-left: -100%; width:0; height:0;\">\n              <path id=\"".concat(prefix, "play-icon-shape\" d=\"M.0005 31.9982c-.0012-10.666 0-21.3321 0-31.9982C10.668 5.3312 21.334 10.6648 32 15.9985A257392.6329 257392.6329 0 01.0005 31.9982z\"/>\n              <path id=\"").concat(prefix, "pause-icon-shape\" d=\"M0 0c3.5553-.0002 7.1106-.0002 10.6667 0 .0002 10.667.0002 21.333 0 32-3.5561.0002-7.1114.0002-10.6667 0V0zM21.3333 0C24.8894-.0002 28.4447-.0002 32 0v32c-3.5553.0002-7.1106.0002-10.6667 0-.0002-10.667-.0002-21.333 0-32z\"/>\n              <path id=\"").concat(prefix, "stop-icon-shape\" d=\"M0 0h32v32H0z\"/>\n              <path id=\"").concat(prefix, "repeat-icon-shape\" d=\"M9.871 1.48C12.322.209 15.176-.247 17.906.137c3.008.419 5.856 1.904 7.917 4.137 1.536 1.622 2.629 3.642 3.21 5.795.439-.395.792-.946 1.389-1.114.581-.176 1.274.139 1.487.715.197.485.063 1.066-.309 1.43-.887.913-1.792 1.808-2.69 2.711-.201.2-.404.42-.68.512-.458.175-1.006.056-1.349-.293-.963-1.009-1.968-1.978-2.943-2.975-.396-.399-.427-1.073-.118-1.532.284-.451.861-.679 1.376-.535.483.11.77.548 1.114.864-.965-2.703-3.008-5.023-5.616-6.241-1.981-.958-4.26-1.267-6.43-.922-3.688.549-6.973 3.164-8.367 6.617-.2.566-.797.995-1.409.878-.625-.071-1.122-.683-1.089-1.306.014-.234.113-.449.202-.662 1.203-2.895 3.488-5.305 6.27-6.736zM3.374 12.873c.481-.472 1.326-.397 1.777.079.887.911 1.784 1.813 2.688 2.707.21.205.422.429.504.72.262.798-.491 1.741-1.339 1.617-.574-.033-.935-.526-1.312-.895.965 2.748 3.074 5.067 5.714 6.294 2.843 1.317 6.26 1.342 9.108.028 2.334-1.043 4.261-2.953 5.35-5.263.208-.407.321-.905.724-1.173.474-.352 1.188-.3 1.607.114.332.318.492.825.346 1.268-1.19 3.108-3.598 5.719-6.58 7.19-3.71 1.862-8.291 1.846-11.988-.039-3.428-1.697-6.042-4.932-7.013-8.628-.336.325-.641.688-1.025.958-.53.333-1.32.227-1.696-.29-.382-.518-.287-1.306.192-1.732.984-.982 1.943-1.99 2.943-2.955z\"/>\n              <path id=\"").concat(prefix, "bounds-icon-shape\" d=\"M16 6V0h2v6h3.9941C23.102 6 24 6.8982 24 7.9908v16.0184C24 25.1087 23.103 26 21.9941 26H18v6h-2v-6h-3.9941C10.898 26 10 25.1018 10 24.0092V7.9908C10 6.8913 10.897 6 12.0059 6H16z\"/>\n              <path id=\"").concat(prefix, "mojs-icon-shape\" d=\"M18.4679 2.677c1.0207.5806 1.811 1.5072 2.4103 2.5204 3.2026 5.304 6.3995 10.614 9.602 15.918.6518 1.0458 1.2904 2.1493 1.4553 3.4009.2528 1.5456-.2435 3.22-1.3766 4.287-1.1087 1.0824-2.6781 1.515-4.1783 1.5015-6.9295.0039-13.857.0039-20.7866 0-1.8784.0385-3.8955-.7325-4.9106-2.4338-1.09-1.761-.781-4.0795.2566-5.7867 3.403-5.6713 6.8265-11.331 10.2426-16.9946.7922-1.3419 2.002-2.4877 3.5022-2.9068 1.2604-.3672 2.65-.171 3.783.4941zm-3.1344 6.8383c.2811-.4775.7457-.4928 1.045-.0223l8.8979 13.9807c.296.4651.0804.8422-.469.8422H7.6231c-.555 0-.7769-.3872-.4958-.8645l8.2062-13.9361z\" fill-rule=\"evenodd\"/>\n              <path id=\"").concat(prefix, "hide-icon-shape\" d=\"M18.0298 24.5025a3.2656 3.2656 0 00.2492-.225L31.0557 11.501c1.259-1.2591 1.259-3.2974 0-4.5566-1.2592-1.259-3.2975-1.259-4.5566 0L15.9992 17.4442 5.501 6.9459c-1.2576-1.2576-3.2974-1.2592-4.5566 0-1.259 1.2591-1.259 3.2974 0 4.5565L13.721 24.279c1.1795 1.1796 3.0429 1.2541 4.3089.2237l-.0001-.0002z\"/>\n            </svg>");
    }
  }]);

  return Icons;
}(components_module);

/* harmony default export */ var components_icons = (Icons);
// EXTERNAL MODULE: ./node_modules/hammerjs/hammer.js
var hammer = __webpack_require__(840);
var hammer_default = /*#__PURE__*/__webpack_require__.n(hammer);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/handle.pcss
var handle = __webpack_require__(695);
;// CONCATENATED MODULE: ./css/blocks/handle.pcss

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(handle/* default */.Z, options);



/* harmony default export */ var blocks_handle = (handle/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/handle.js







function handle_createSuper(Derived) { var hasNativeReflectConstruct = handle_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function handle_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Handle = /*#__PURE__*/function (_Module) {
  inherits_default()(Handle, _Module);

  var _super = handle_createSuper(Handle);

  function Handle() {
    classCallCheck_default()(this, Handle);

    return _super.apply(this, arguments);
  }

  createClass_default()(Handle, [{
    key: "_declareDefaults",

    /*
      Method to declare _defaults.
      @private
      @overrides @ Module
    */
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(Handle.prototype), "_declareDefaults", this).call(this);

      this._defaults.minBound = 0;
      this._defaults.maxBound = 1;
      this._defaults.isBound = false;
      this._defaults.isInversed = false;
      this._defaults.direction = 'x';
      this._defaults.onSeekStart = null;
      this._defaults.onSeekEnd = null;
      this._defaults.onProgress = null;
      this._defaults.snapPoint = 0;
      this._defaults.snapStrength = 0;
    }
    /*
      Method to set handle progress.
      @public
      @param {Number} Progress [0...1].
      @param {Boolean} If should invoke onProgress callback.
      @returns this.
    */

  }, {
    key: "setProgress",
    value: function setProgress(progress) {
      var isCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var shift = this._progressToShift(progress);

      this._setShift(shift, isCallback); // calc delta and save it


      this._delta = shift - this._shift;

      this._saveDelta();

      return this;
    }
    /*
      Method to set bounds of progress.
      @public
      @param {Number} Min bound to set [0...1].
      @param {Number} Max bound to set [0...1].
      @returns this.
    */

  }, {
    key: "setBounds",
    value: function setBounds(min, max) {
      this.setMinBound(min);
      this.setMaxBound(max);
      return this;
    }
    /*
      Method to set min bound of progress.
      @public
      @param {Number} Min bound to set [0...1].
      @returns this.
    */

  }, {
    key: "setMinBound",
    value: function setMinBound(min) {
      this._props.minBound = Math.max(min, 0);

      if (this._progress < min) {
        this.setProgress(min);
      }

      return this;
    }
    /*
      Method to set max bound of progress.
      @public
      @param {Number} Max bound to set [0...1].
      @returns this.
    */

  }, {
    key: "setMaxBound",
    value: function setMaxBound(max) {
      this._props.maxBound = Math.min(max, 1);

      if (this._progress > max) {
        this.setProgress(max);
      }

      return this;
    }
    /*
      Method to declare properties.
      @private
      @overrides @ Module.
    */

  }, {
    key: "_vars",
    value: function _vars() {
      // `progress` of the handle [0..1]
      this._progress = 0; // `shift` of the handle ( position in `px` )

      this._shift = 0; // `delta` deviation from the current `shift`

      this._delta = 0;
    }
    /*
      Method to set handle shift.
      @private
      @param {Number} Shift in `px`.
      @param {Boolean} If should invoke onProgress callback.
      @returns {Number}.
    */

  }, {
    key: "_setShift",
    value: function _setShift(shift) {
      var isCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var p = this._props,
          minBound = p.minBound * this._maxWidth,
          maxBound = p.maxBound * this._maxWidth;
      shift = this.clamp(shift, minBound, maxBound);

      this._applyShift(shift);

      if (isCallback) {
        this._onProgress(shift);
      } else {
        this._progress = this._shiftToProgress(shift);
      }

      return shift;
    }
    /**
     * clamp - functiboundson to clamp a `value` between `min` and `max`
     *
     * @param  {Number} value Value to clamp.
     * @param  {Number} min Min bound
     * @param  {Number} max Max bound
     * @return {Number} Clamped value.
     */

  }, {
    key: "clamp",
    value: function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }
    /*
      Method to apply shift to the DOMElement.
      @private
      @param {Number} Shift in pixels.
    */

  }, {
    key: "_applyShift",
    value: function _applyShift(shift) {
      var p = this._props; // translateZ(0)

      this.el.style.transform = p.direction === 'x' ? "translateX( ".concat(shift, "px )") : "translateY( ".concat(-shift, "px )");
    }
    /*
      Method to get max width of the parent.
      @private
    */

  }, {
    key: "_getMaxWidth",
    value: function _getMaxWidth() {
      var p = this._props,
          parent = p.parent;
      this._maxWidth = p.direction === 'x' ? parent.clientWidth : parent.clientHeight;
    }
    /*
      Method to render the component.
      @private
      @overrides @ Module
    */

  }, {
    key: "_render",
    value: function _render() {
      get_default()(getPrototypeOf_default()(Handle.prototype), "_render", this).call(this);

      this._addElements();

      this._getMaxWidth();

      this._hammerTime();
    }
    /*
      Method to classes on `this.el`.
      @private
      @overrides @ Module
    */

  }, {
    key: "_addMainClasses",
    value: function _addMainClasses() {
      get_default()(getPrototypeOf_default()(Handle.prototype), "_addMainClasses", this).call(this);

      var p = this._props,
          classList = this.el.classList;
      classList.add(blocks_handle.handle);

      if (p.isBound) {
        classList.add(blocks_handle["is-bound"]);
      }

      if (p.isInversed) {
        classList.add(blocks_handle["is-inversed"]);
      }
    }
    /*
      Method to add DOM elements on render.
      @private
    */

  }, {
    key: "_addElements",
    value: function _addElements() {
      var inner = this._createElement('div'),
          shadow = this._createElement('div');

      inner.classList.add("".concat(blocks_handle.handle__inner));
      shadow.classList.add("".concat(blocks_handle.handle__shadow));
      this.el.appendChild(shadow);
      this.el.appendChild(inner);
    }
    /*
      Method to initialize HammerJS an set up all even listeners.
      @private
    */

  }, {
    key: "_hammerTime",
    value: function _hammerTime() {
      var p = this._props,
          direction = p.direction === 'x' ? 'HORIZONTAL' : 'VERTICAL',
          hm = new (hammer_default()).Manager(this.el, {
        recognizers: [[(hammer_default()).Pan, {
          direction: (hammer_default())["DIRECTION_".concat(direction)]
        }]]
      });
      hm.on('pan', this._pan.bind(this));
      hm.on('panend', this._panEnd.bind(this));

      this._addPointerDownEvent(this.el, this._pointerDown.bind(this));

      this._addPointerUpEvent(this.el, this._pointerUp.bind(this)); // add listener on document to cover edge cases
      // like when you press -> leave the element -> release


      this._addPointerUpEvent(document, this._pointerUpDoc.bind(this));

      window.addEventListener('resize', this._onWindowResize.bind(this));
    }
    /*
      Callback for pan end on main el.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_pan",
    value: function _pan(e) {
      var p = this._props;
      this._delta = p.direction === 'x' ? e.deltaX : -e.deltaY; // get progress from the shift to undestand how far is the snapPoint

      var shift = this._shift + this._delta,
          proc = this._shiftToProgress(shift); // if progress is around snapPoint set it to the snap point


      proc = Math.abs(proc - p.snapPoint) < p.snapStrength ? p.snapPoint : proc; // recalculate the progress to shift and set it

      this._setShift(this._progressToShift(proc));
    }
    /*
      Callback for pan end on main el.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_panEnd",
    value: function _panEnd(e) {
      this._saveDelta();

      this._callIfFunction(this._props.onSeekEnd, e);
    }
    /*
      Callback for pointer down on main el.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_pointerDown",
    value: function _pointerDown(e) {
      var p = this._props;
      this._isPointerDown = true;

      this._callIfFunction(p.onSeekStart, e);
    }
    /*
      Callback for pointer up on main el.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_pointerUp",
    value: function _pointerUp(e) {
      this._callIfFunction(this._props.onSeekEnd, e);

      e.preventDefault();
      return false;
    }
    /*
      Callback for pointer up on document.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_pointerUpDoc",
    value: function _pointerUpDoc(e) {
      if (!this._isPointerDown) {
        return;
      }

      this._callIfFunction(this._props.onSeekEnd, e);

      this._isPointerDown = false;
    }
    /*
      Method to add _delta to _shift.
      @private
    */

  }, {
    key: "_saveDelta",
    value: function _saveDelta() {
      this._shift += this._delta;
    }
    /*
      Method to call onProgress callback.
      @private
      @param {Number} Shift in `px`.
    */

  }, {
    key: "_onProgress",
    value: function _onProgress(shift) {
      var p = this._props,
          progress = this._shiftToProgress(shift);

      if (this._progress !== progress) {
        this._progress = progress;

        if (this._isFunction(p.onProgress)) {
          p.onProgress.call(this, progress);
        }
      }
    }
    /*
      Method to recalc shift to progress.
      @private
      @param {Number} Shift in `px`.
      @returns {Number} Progress [0...1].
    */

  }, {
    key: "_shiftToProgress",
    value: function _shiftToProgress(shift) {
      return shift / this._maxWidth;
    }
    /*
      Method to progress shift to shift.
      @private
      @param   {Number} Progress [0...1].
      @returns {Number} Shift in `px`.
     */

  }, {
    key: "_progressToShift",
    value: function _progressToShift(progress) {
      return progress * this._maxWidth;
    }
    /*
      Callback for window resize event.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_onWindowResize",
    value: function _onWindowResize(e) {
      this._getMaxWidth();

      this.setProgress(this._progress);
    }
  }]);

  return Handle;
}(components_module);

/* harmony default export */ var components_handle = (Handle);
;// CONCATENATED MODULE: ./js/components/ripple.js








function ripple_createSuper(Derived) { var hasNativeReflectConstruct = ripple_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function ripple_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Ripple = /*#__PURE__*/function (_Module) {
  inherits_default()(Ripple, _Module);

  var _super = ripple_createSuper(Ripple);

  function Ripple() {
    classCallCheck_default()(this, Ripple);

    return _super.apply(this, arguments);
  }

  createClass_default()(Ripple, [{
    key: "_declareDefaults",

    /*
      Method to declare defaults.
      @private
      @overrides @ Module.
    */
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(Ripple.prototype), "_declareDefaults", this).call(this);

      this._defaults.withHold = true;
    }
    /*
      Method to render the component.
      @private
      @overrides @ Module
    */

  }, {
    key: "_render",
    value: function _render() {
      get_default()(getPrototypeOf_default()(Ripple.prototype), "_render", this).call(this);

      this.curtain = document.createElement('div'); // this.curtain.style.background = 'rgba(255,255,255,.15)';
      // this.curtain.style.background = 'yellow';

      this.curtain.style.position = 'absolute';
      this.curtain.style.width = '100%';
      this.curtain.style.height = '100%';
      this.curtain.style.left = 0;
      this.curtain.style.top = 0;
      this.curtain.style.zIndex = 1;
      this.el.appendChild(this.curtain);

      if (mojs.Shape) {
        this._addRipple();
      }
    }
    /*
      Method to construct ripple object.
      @private
    */

  }, {
    key: "_addRipple",
    value: function _addRipple() {
      var _this = this,
          _mojs$Shape;

      this.shape = new mojs.Shape((_mojs$Shape = {
        parent: this.el,
        left: 0,
        top: this._o.top || 0,
        // strokeWidth:  10,
        strokeWidth: {
          10: 0
        },
        fill: 'none',
        stroke: 'hotpink'
      }, defineProperty_default()(_mojs$Shape, "fill", 'hotpink'), defineProperty_default()(_mojs$Shape, "fillOpacity", .75), defineProperty_default()(_mojs$Shape, "opacity", {
        .85: 0
      }), defineProperty_default()(_mojs$Shape, "radius", 40), defineProperty_default()(_mojs$Shape, "scale", {
        0: 1
      }), defineProperty_default()(_mojs$Shape, "isShowEnd", false), defineProperty_default()(_mojs$Shape, "onStart", function onStart() {
        _this.isStart = true;
      }), defineProperty_default()(_mojs$Shape, "onUpdate", this._onUpdate.bind(this)), defineProperty_default()(_mojs$Shape, "onComplete", function onComplete() {
        _this.isStart = false;
      }), _mojs$Shape));
    }
    /*
      Method that is invoked on ripple update.
      @private
      @param {Number} Curret progress [0...1].
    */

  }, {
    key: "_onUpdate",
    value: function _onUpdate(p) {
      if (!this._props.withHold) {
        return;
      }

      if (p >= .15 && this.isStart && !this.isRelease) {
        this.isStart = false;

        if (mojs.Shape) {
          this.shape.setSpeed(.02);
        }
      }
    }
    /*
      Method that should be run on touch serface release.
      @private
    */

  }, {
    key: "_release",
    value: function _release() {
      if (!this._props.withHold) {
        return;
      }

      this.isRelease = true;

      if (mojs.Shape) {
        this.shape.setSpeed(1).play();
      }
    }
    /*
      Method that should be run on touch serface hold.
      @private
      @param {Object} Origin event object.
    */

  }, {
    key: "_hold",
    value: function _hold(e) {
      var x = e.offsetX != null ? e.offsetX : e.layerX,
          y = e.offsetY != null ? e.offsetY : e.layerY;
      this.isRelease = false;

      if (mojs.Shape) {
        this.shape.tune({
          x: x,
          y: y
        }).replay();
      }
    }
    /*
      Method that should be run on touch serface cancel.
      @private
    */

  }, {
    key: "_cancel",
    value: function _cancel() {
      if (!this._props.withHold) {
        return;
      }

      this.isRelease = true;

      if (mojs.Shape) {
        this.shape.pause().setSpeed(1).playBackward();
      }
    }
  }]);

  return Ripple;
}(components_module);

/* harmony default export */ var ripple = (Ripple);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/track.pcss
var track = __webpack_require__(739);
;// CONCATENATED MODULE: ./css/blocks/track.pcss

            

var track_options = {};

track_options.insert = "head";
track_options.singleton = false;

var track_update = injectStylesIntoStyleTag_default()(track/* default */.Z, track_options);



/* harmony default export */ var blocks_track = (track/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/track.js







function track_createSuper(Derived) { var hasNativeReflectConstruct = track_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function track_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Track = /*#__PURE__*/function (_Handle) {
  inherits_default()(Track, _Handle);

  var _super = track_createSuper(Track);

  function Track() {
    classCallCheck_default()(this, Track);

    return _super.apply(this, arguments);
  }

  createClass_default()(Track, [{
    key: "_declareDefaults",

    /*
      Method to declare _defaults.
      @private
      @overrides @ Handle
    */
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(Track.prototype), "_declareDefaults", this).call(this);

      this._defaults.isProgress = true;
      this._defaults.isRipple = true;
    }
    /*
      Method to render the component.
      @private
      @overrides @ Handle
    */

  }, {
    key: "_render",
    value: function _render() {
      get_default()(getPrototypeOf_default()(Track.prototype), "_render", this).call(this);

      if (!this._props.isRipple) {
        return;
      }

      this.ripple = new ripple({
        withHold: false,
        className: blocks_track.track__ripple,
        // top:        '50%',
        parent: this.el
      });
    }
    /*
      Method to apply shift to the DOMElement.
      @private
      @overrides @ Handle.
      @param {Number} Shift in pixels.x
    */

  }, {
    key: "_applyShift",
    value: function _applyShift(shift) {
      if (!this._props.isProgress) {
        return;
      }

      if (this._props.isInversed) {
        shift = this._maxWidth - shift;
      }

      var transform = "scaleX( ".concat(shift, " ) translateZ(0)");
      this.trackProgressEl.style.transform = transform; // this.trackProgressEl.style.width = `${shift}px`;
    }
    /*
      Method to add classes on `this.el`.
      @private
      @overrides @ Handle.
    */

  }, {
    key: "_addMainClasses",
    value: function _addMainClasses() {
      var p = this._props,
          classList = this.el.classList;
      classList.add(blocks_track.track);

      if (p.isInversed) {
        classList.add(blocks_track["is-inversed"]);
      }

      if (p.isBound) {
        classList.add(blocks_track["is-bound"]);
      }

      if (p.direction === 'y') {
        classList.add(blocks_track["is-y"]);
      }
    }
    /*
      Method to add DOM elements on render.
      @private
    */

  }, {
    key: "_addElements",
    value: function _addElements() {
      var p = this._props;

      if (p.isProgress) {
        // progress track
        var trackP = document.createElement('div');
        trackP.classList.add("".concat(blocks_track["track__track-progress"]));
        this.trackProgressEl = trackP;
        this.el.appendChild(trackP);
      } // track


      if (!p.isBound) {
        var track = document.createElement('div');
        track.classList.add("".concat(blocks_track.track__track));
        this.el.appendChild(track);
      }
    }
    /*
      Callback for pointer down on main el.
      @private
      @param {Object} Original event object.
      @overrides @ Handle
    */

  }, {
    key: "_pointerDown",
    value: function _pointerDown(e) {
      var p = this._props,
          x = p.direction === 'x' ? e.layerX : e.layerY;
      this._isPointerDown = true;

      if (p.direction === 'y') {
        x = this._maxWidth - e.layerY;
      }

      x = this._props.isInversed && x < 0 ? this._maxWidth + x : x; // if near the snap point - set it to the snap point

      var progress = this._shiftToProgress(x);

      progress = Math.abs(p.snapPoint - progress) < p.snapStrength ? p.snapPoint : progress;
      this.setProgress(progress);
      p.isRipple && this.ripple._hold(e);

      this._callIfFunction(p.onSeekStart, e);
    }
  }]);

  return Track;
}(components_handle);

/* harmony default export */ var components_track = (Track);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/slider.pcss
var slider = __webpack_require__(864);
;// CONCATENATED MODULE: ./css/blocks/slider.pcss

            

var slider_options = {};

slider_options.insert = "head";
slider_options.singleton = false;

var slider_update = injectStylesIntoStyleTag_default()(slider/* default */.Z, slider_options);



/* harmony default export */ var blocks_slider = (slider/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/slider.js






function slider_createSuper(Derived) { var hasNativeReflectConstruct = slider_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function slider_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Slider = /*#__PURE__*/function (_Module) {
  inherits_default()(Slider, _Module);

  var _super = slider_createSuper(Slider);

  function Slider() {
    classCallCheck_default()(this, Slider);

    return _super.apply(this, arguments);
  }

  createClass_default()(Slider, [{
    key: "_declareDefaults",

    /*
      Method to declare _defaults.
      @private
      @overrides @ Module
    */
    value: function _declareDefaults() {
      this._defaults = {
        className: '',
        parent: document.body,
        isBound: false,
        isInversed: false,
        isRipple: true,
        isProgress: true,
        onProgress: null,
        onSeekStart: null,
        onSeekEnd: null,
        direction: 'x',
        snapPoint: 0,
        snapStrength: 0
      };
    }
    /*
      Method to set slider progress.
      @public
      @param {Number} Progress to set.
      @returns this.
    */

  }, {
    key: "setProgress",
    value: function setProgress(progress) {
      this.handle.setProgress(progress);
      this.track.setProgress(progress);
      return this;
    }
    /*
      Method to set bounds of progress.
      @public
      @param {Number} Min bound to set [0...1].
      @param {Number} Max bound to set [0...1].
      @returns this.
    */

  }, {
    key: "setBounds",
    value: function setBounds(min, max) {
      this.handle.setBounds(min, max);
      this.track.setBounds(min, max);
      return this;
    }
    /*
      Method to set min bound of progress.
      @public
      @param {Number} Min bound to set [0...1].
      @returns this.
    */

  }, {
    key: "setMinBound",
    value: function setMinBound(min) {
      this.handle.setMinBound(min);
      this.track.setMinBound(min);
      return this;
    }
    /*
      Method to set max bound of progress.
      @public
      @param {Number} Max bound to set [0...1].
      @returns this.
    */

  }, {
    key: "setMaxBound",
    value: function setMaxBound(max) {
      this.handle.setMaxBound(max);
      this.track.setMaxBound(max);
      return this;
    }
    /*
      Method to hide elements.
      @public
    */

  }, {
    key: "show",
    value: function show() {
      this.track.el.style.display = 'block';
      this.handle.el.style.display = 'block';
    }
    /*
      Method to hide elements.
      @public
    */

  }, {
    key: "hide",
    value: function hide() {
      this.track.el.style.display = 'none';
      this.handle.el.style.display = 'none';
    }
    /*
      Method to render the component.
      @private
      @overrides @ Module
    */

  }, {
    key: "_render",
    value: function _render() {
      var p = this._props;

      if (!p.isBound) {
        var el = this._createElement('div'),
            classList = el.classList;

        this.el = el;
        this.inner = this._createElement('div');
        this.inner.classList.add(blocks_slider.slider__inner);
        this.el.appendChild(this.inner);
        classList.add(blocks_slider.slider);
        p.direction === 'y' && classList.add(blocks_slider["is-y"]);
        p.className && classList.add(p.className);
        p.parent.appendChild(el);
      }

      var rootEl = !p.isBound ? this.inner : p.parent;
      this.track = new components_track({
        className: blocks_slider.track,
        onProgress: this._onTrackProgress.bind(this),
        onSeekStart: p.onSeekStart,
        onSeekEnd: p.onSeekEnd,
        isBound: p.isBound,
        isInversed: p.isInversed,
        isRipple: p.isRipple,
        isProgress: p.isProgress,
        parent: rootEl,
        direction: p.direction,
        snapPoint: p.snapPoint,
        snapStrength: p.snapStrength
      });
      rootEl.appendChild(this.track.el);
      var handleClass = [blocks_slider.handle];

      if (!p.isBound) {
        handleClass.push(blocks_slider["progress-handle"]);
      }

      this.handle = new components_handle({
        className: handleClass,
        onProgress: this._onHandleProgress.bind(this),
        onSeekStart: p.onSeekStart,
        onSeekEnd: p.onSeekEnd,
        isBound: p.isBound,
        isInversed: p.isInversed,
        parent: rootEl,
        direction: p.direction,
        snapPoint: p.snapPoint,
        snapStrength: p.snapStrength
      });
      rootEl.appendChild(this.handle.el);
    }
    /*
      Method that is invoked on handle progress change.
      @private
      @param {Number} Progress [0...1].
    */

  }, {
    key: "_onHandleProgress",
    value: function _onHandleProgress(p) {
      this.track.setProgress(p, false);

      this._onProgress(p);
    }
    /*
      Method that is invoked on track progress change.
      @private
      @param {Number} Progress [0...1].
    */

  }, {
    key: "_onTrackProgress",
    value: function _onTrackProgress(p) {
      this.handle.setProgress(p, false);

      this._onProgress(p);
    }
    /*
      Method to call onProgress callback.
      @private
      @param {Number} Progress value [0...1].
    */

  }, {
    key: "_onProgress",
    value: function _onProgress(progress) {
      var p = this._props;

      if (typeof p.onProgress === 'function' && this._progress !== progress) {
        this._progress = progress;
        p.onProgress.call(this, progress);
      }
    }
  }]);

  return Slider;
}(components_module);

/* harmony default export */ var components_slider = (Slider);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/player-slider.pcss
var player_slider = __webpack_require__(186);
;// CONCATENATED MODULE: ./css/blocks/player-slider.pcss

            

var player_slider_options = {};

player_slider_options.insert = "head";
player_slider_options.singleton = false;

var player_slider_update = injectStylesIntoStyleTag_default()(player_slider/* default */.Z, player_slider_options);



/* harmony default export */ var blocks_player_slider = (player_slider/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/player-slider.js






function player_slider_createSuper(Derived) { var hasNativeReflectConstruct = player_slider_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function player_slider_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var PlayerSlider = /*#__PURE__*/function (_Module) {
  inherits_default()(PlayerSlider, _Module);

  var _super = player_slider_createSuper(PlayerSlider);

  function PlayerSlider() {
    classCallCheck_default()(this, PlayerSlider);

    return _super.apply(this, arguments);
  }

  createClass_default()(PlayerSlider, [{
    key: "_declareDefaults",

    /*
      Method to declare _defaults.
      @private
      @overrides @ Module
    */
    value: function _declareDefaults() {
      this._defaults = {
        className: blocks_player_slider["player-slider"],
        parent: document.body,
        progress: 0,
        leftProgress: 0,
        rightProgress: 1,
        isBounds: false,
        onLeftProgress: null,
        onProgress: null,
        onRightProgress: null,
        onSeekStart: null,
        onSeekEnd: null
      };
    }
    /*
      Method to disable bounds.
      @public
      @returns this.
    */

  }, {
    key: "disableBounds",
    value: function disableBounds() {
      this.track.setBounds(0, 1);
      this.rightBound.hide();
      this.leftBound.hide();
      return this;
    }
    /*
      Method to enable bounds.
      @public
      @returns this.
    */

  }, {
    key: "enableBounds",
    value: function enableBounds() {
      var p = this._props;
      this.track.setBounds(p.leftProgress, p.rightProgress);
      this.rightBound.show();
      this.leftBound.show();
      return this;
    }
    /*
      Method to set progress of the track.
      @public
      @param {Number} Progress to set [0...1].
      @returns this.
    */

  }, {
    key: "setTrackProgress",
    value: function setTrackProgress(p) {
      this.track.setProgress(p);
      return this;
    }
    /*
      Method to decrease progress value.
      @public
      @param {Number} Value that the slider should be decreased by.
      @returns this.
    */

  }, {
    key: "decreaseProgress",
    value: function decreaseProgress() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.01;
      var progress = this.track._progress;
      progress -= amount;
      progress = progress < 0 ? 0 : progress;
      this.setTrackProgress(progress);
      return this;
    }
    /*
      Method to inclease progress value.
      @public
      @param {Number} Value that the slider should be increased by.
      @returns this.
    */

  }, {
    key: "increaseProgress",
    value: function increaseProgress() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.01;
      var progress = this.track._progress;
      progress += amount;
      progress = progress > 1 ? 1 : progress;
      this.setTrackProgress(progress);
      return this;
    }
    /*
      Initial render method.
      @private
      @overrides @ Module
      @returns this
    */

  }, {
    key: "_render",
    value: function _render() {
      var p = this._props;

      this._addMainElement();

      this.el.classList.add(blocks_slider.slider);
      this.leftBound = new components_slider({
        isBound: true,
        parent: this.el,
        isRipple: false,
        onProgress: this._onLeftBoundProgress.bind(this),
        onSeekStart: p.onSeekStart,
        onSeekEnd: p.onSeekEnd
      });
      this.track = new components_slider({
        parent: this.el,
        className: blocks_player_slider.slider,
        onProgress: this._onTrackProgress.bind(this),
        onSeekStart: p.onSeekStart,
        onSeekEnd: p.onSeekEnd
      });
      this.rightBound = new components_slider({
        isBound: true,
        parent: this.el,
        isRipple: false,
        isInversed: true,
        onProgress: this._onRightBoundProgress.bind(this),
        onSeekStart: p.onSeekStart,
        onSeekEnd: p.onSeekEnd
      });
      this.rightBound.setProgress(p.rightProgress);
      this.track.setProgress(p.progress);
      this.leftBound.setProgress(p.leftProgress);
      p.parent.appendChild(this.el);
    }
    /*
      Method that should be called on track update.
      @private
      @param {Number} Track progress value [0...1].
    */

  }, {
    key: "_onTrackProgress",
    value: function _onTrackProgress(p) {
      this._callIfFunction(this._props.onProgress, p);
    }
    /*
      Method that should be called on left bound update.
      @private
      @param {Number} Track progress value [0...1].
    */

  }, {
    key: "_onLeftBoundProgress",
    value: function _onLeftBoundProgress(p) {
      if (!this._props.isBounds) {
        return;
      }

      this._props.leftProgress = p;
      this.track.setMinBound(p);
      this.rightBound.setMinBound(p);

      this._callIfFunction(this._props.onLeftProgress, p);
    }
    /*
      Method that should be called on right bound update.
      @private
      @param {Number} Track progress value [0...1].
    */

  }, {
    key: "_onRightBoundProgress",
    value: function _onRightBoundProgress(p) {
      if (!this._props.isBounds) {
        return;
      }

      this._props.rightProgress = p;
      this.track.setMaxBound(p);
      this.leftBound.setMaxBound(p);

      this._callIfFunction(this._props.onRightProgress, p);
    }
  }]);

  return PlayerSlider;
}(components_module);

/* harmony default export */ var components_player_slider = (PlayerSlider);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/icon.pcss
var icon = __webpack_require__(991);
;// CONCATENATED MODULE: ./css/blocks/icon.pcss

            

var icon_options = {};

icon_options.insert = "head";
icon_options.singleton = false;

var icon_update = injectStylesIntoStyleTag_default()(icon/* default */.Z, icon_options);



/* harmony default export */ var blocks_icon = (icon/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/icon.js







function icon_createSuper(Derived) { var hasNativeReflectConstruct = icon_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function icon_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Icon = /*#__PURE__*/function (_Module) {
  inherits_default()(Icon, _Module);

  var _super = icon_createSuper(Icon);

  function Icon() {
    classCallCheck_default()(this, Icon);

    return _super.apply(this, arguments);
  }

  createClass_default()(Icon, [{
    key: "_declareDefaults",

    /*
      Method to declare _defaults.
      @private
      @overrides @ Module
    */
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(Icon.prototype), "_declareDefaults", this).call(this);

      this._defaults.shape = '';
      this._defaults.size = 'x1';
      this.NS = 'http://www.w3.org/2000/svg';
    }
    /*
      Initial render method.
      @private
      @overrides @ Module
      @returns this
    */

  }, {
    key: "_render",
    value: function _render() {
      this._addMainElement();

      this.el.classList.add(blocks_icon.icon);
      this.el.classList.add(blocks_icon["is-".concat(this._props.size)]);
      this.el.setAttribute('data-component', 'icon');

      this._renderIcon();
    }
    /*
      Method to render svg icon into the el.
      @private
    */

  }, {
    key: "_renderIcon",
    value: function _renderIcon() {
      var p = this._props,
          svg = document.createElementNS(this.NS, 'svg'),
          content = "<use xlink:href=\"#".concat(p.prefix).concat(p.shape, "-icon-shape\" />");
      svg.setAttribute('viewBox', '0 0 32 32');

      this._addSVGHtml(svg, content);

      this.el.appendChild(svg);
    }
    /*
      Add HTML to SVG element.
      @private
      @param {Object} SVG node.
      @param {String} SVG content to add.
    */

  }, {
    key: "_addSVGHtml",
    value: function _addSVGHtml(svg, content) {
      var receptacle = this._createElement('div'),
          svgfragment = "<svg> ".concat(content, " </svg>");

      receptacle.innerHTML = svgfragment;
      var nodes = Array.prototype.slice.call(receptacle.childNodes[0].childNodes);

      for (var i = 0; i < nodes.length; i++) {
        svg.appendChild(nodes[i]);
      }
    }
  }]);

  return Icon;
}(components_module);

/* harmony default export */ var components_icon = (Icon);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/button.pcss
var blocks_button = __webpack_require__(84);
;// CONCATENATED MODULE: ./css/blocks/button.pcss

            

var button_options = {};

button_options.insert = "head";
button_options.singleton = false;

var button_update = injectStylesIntoStyleTag_default()(blocks_button/* default */.Z, button_options);



/* harmony default export */ var css_blocks_button = (blocks_button/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/button.js







function button_createSuper(Derived) { var hasNativeReflectConstruct = button_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function button_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Button = /*#__PURE__*/function (_Module) {
  inherits_default()(Button, _Module);

  var _super = button_createSuper(Button);

  function Button() {
    classCallCheck_default()(this, Button);

    return _super.apply(this, arguments);
  }

  createClass_default()(Button, [{
    key: "_declareDefaults",

    /*
      Method to declare defaults for the module.
      @private
      @overrides @ Module
    */
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(Button.prototype), "_declareDefaults", this).call(this);

      this._defaults.link = null;
      this._defaults.title = '';
      this._defaults.target = null;
      this._defaults.onPointerDown = null;
      this._defaults.onPointerUp = null;
      this._defaults.onDoubleTap = null;
    }
    /*
      Initial render method.
      @private
      @overrides @ Module
    */

  }, {
    key: "_render",
    value: function _render() {
      var p = this._props,
          className = 'button',
          tagName = p.link != null ? 'a' : 'div';

      this._addMainElement(tagName);

      this.el.classList.add(css_blocks_button[className]);
      this.el.setAttribute('title', p.title);
      p.link && this.el.setAttribute('href', p.link);
      p.link && p.target && this.el.setAttribute('target', p.target);

      this._addListeners();

      this._createRipple();
    }
    /*
      Method to create ripple.
      @private
    */

  }, {
    key: "_createRipple",
    value: function _createRipple() {
      this.ripple = new ripple({
        className: css_blocks_button.button__ripple,
        parent: this.el
      });
    }
    /*
      Method to add event listeners to the icon.
      @private
    */

  }, {
    key: "_addListeners",
    value: function _addListeners() {
      this._addPointerDownEvent(this.el, this._pointerDown.bind(this));

      this._addPointerUpEvent(this.el, this._pointerUp.bind(this));

      this._addPointerUpEvent(document, this._pointerCancel.bind(this));

      hammer_default()(this.el).on('doubletap', this._doubleTap.bind(this));
    }
    /*
      Method to invoke onPointerDown callback if exist.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_pointerDown",
    value: function _pointerDown(e) {
      this.wasTouched = true;

      this._callIfFunction(this._props.onPointerDown);

      this.ripple._hold(e);
    }
    /*
      Method to invoke onPointerUp callback if exist.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_pointerUp",
    value: function _pointerUp(e) {
      if (!this.wasTouched) {
        e.stopPropagation();
        return;
      }

      this.wasTouched = false;

      this._callIfFunction(this._props.onPointerUp);

      this.ripple._release();

      e.preventDefault();
      return false;
    }
    /*
      Method to invoke onPointerCancel callback if exist.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_pointerCancel",
    value: function _pointerCancel(e) {
      if (!this.wasTouched) {
        return;
      }

      ;
      this.wasTouched = false;

      this.ripple._cancel();
    }
    /*
      Method to invoke onDoubleTap callback if exist.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_doubleTap",
    value: function _doubleTap(e) {
      this._callIfFunction(this._props.onDoubleTap);
    }
  }]);

  return Button;
}(components_module);

/* harmony default export */ var components_button = (Button);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/icon-button.pcss
var icon_button = __webpack_require__(797);
;// CONCATENATED MODULE: ./css/blocks/icon-button.pcss

            

var icon_button_options = {};

icon_button_options.insert = "head";
icon_button_options.singleton = false;

var icon_button_update = injectStylesIntoStyleTag_default()(icon_button/* default */.Z, icon_button_options);



/* harmony default export */ var blocks_icon_button = (icon_button/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/icon-button.js







function icon_button_createSuper(Derived) { var hasNativeReflectConstruct = icon_button_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function icon_button_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var IconButton = /*#__PURE__*/function (_Button) {
  inherits_default()(IconButton, _Button);

  var _super = icon_button_createSuper(IconButton);

  function IconButton() {
    classCallCheck_default()(this, IconButton);

    return _super.apply(this, arguments);
  }

  createClass_default()(IconButton, [{
    key: "_declareDefaults",

    /*
      Method to declare _defaults.
      @private
      @overrides @ Button
    */
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(IconButton.prototype), "_declareDefaults", this).call(this);

      this._defaults.icon = '';
      this._defaults.iconClass = '';
    }
    /*
      Initial render method.
      @private
      @overrides @ Button
      @returns this
    */

  }, {
    key: "_render",
    value: function _render() {
      get_default()(getPrototypeOf_default()(IconButton.prototype), "_render", this).call(this);

      var p = this._props,
          className = 'icon-button';
      this.el.classList.add(blocks_icon_button[className]);
      var icon = new components_icon({
        shape: p.icon,
        parent: this.el,
        className: [blocks_icon_button.icon, p.iconClass],
        prefix: p.prefix
      });
    }
  }]);

  return IconButton;
}(components_button);

/* harmony default export */ var components_icon_button = (IconButton);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/button-switch.pcss
var button_switch = __webpack_require__(352);
;// CONCATENATED MODULE: ./css/blocks/button-switch.pcss

            

var button_switch_options = {};

button_switch_options.insert = "head";
button_switch_options.singleton = false;

var button_switch_update = injectStylesIntoStyleTag_default()(button_switch/* default */.Z, button_switch_options);



/* harmony default export */ var blocks_button_switch = (button_switch/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/button-switch.js







function button_switch_createSuper(Derived) { var hasNativeReflectConstruct = button_switch_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function button_switch_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var ButtonSwitch = /*#__PURE__*/function (_Button) {
  inherits_default()(ButtonSwitch, _Button);

  var _super = button_switch_createSuper(ButtonSwitch);

  function ButtonSwitch() {
    classCallCheck_default()(this, ButtonSwitch);

    return _super.apply(this, arguments);
  }

  createClass_default()(ButtonSwitch, [{
    key: "_declareDefaults",

    /*
      Method to declare _defaults.
      @private
      @overrides @ Button
    */
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(ButtonSwitch.prototype), "_declareDefaults", this).call(this);

      this._defaults.isOn = false;
      this._defaults.onStateChange = null;
    }
    /*
      Method to set the state to `true`.
      @public
      @param {Boolean} If should invoke callback.
    */

  }, {
    key: "on",
    value: function on() {
      var isCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // set to true because the next step is toggle
      this._props.isOn = true;

      this._reactOnStateChange(isCallback);
    }
    /*
      Method to set the state to `false`.
      @public
      @param {Boolean} If should invoke callback.
    */

  }, {
    key: "off",
    value: function off() {
      var isCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // set to true because the next step is toggle
      this._props.isOn = false;

      this._reactOnStateChange(isCallback);
    } // ---

    /*
      Initial render method.
      @private
      @overrides @ Button
      @returns this
    */

  }, {
    key: "_render",
    value: function _render() {
      get_default()(getPrototypeOf_default()(ButtonSwitch.prototype), "_render", this).call(this);

      this.el.classList.add(blocks_button_switch["button-switch"]);

      this._setState();

      this._reactOnStateChange();
    }
    /*
      Method to invoke onPointerUp callback if excist.
      @private
      @overrides @ Button
      @param {Object} Original event object.
    */

  }, {
    key: "_pointerUp",
    value: function _pointerUp(e) {
      if (!this.wasTouched) {
        this.wasTouched = false;
        e.stopPropagation();
        return;
      }

      this._changeState();

      get_default()(getPrototypeOf_default()(ButtonSwitch.prototype), "_pointerUp", this).call(this, e);
    }
    /*
      Method to switch icons.
      @private
    */

  }, {
    key: "_changeState",
    value: function _changeState() {
      this._props.isOn = !this._props.isOn;

      this._reactOnStateChange();
    }
    /*
      Method to react on state change.
      @private
      @param {Boolean} If should invoke callback.
    */

  }, {
    key: "_reactOnStateChange",
    value: function _reactOnStateChange() {
      var isCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (isCallback) {
        this._callIfFunction(this._props.onStateChange, this._props.isOn);
      }

      this._setState();
    }
    /*
      Method that have been called on switch state change.
      @private
    */

  }, {
    key: "_setState",
    value: function _setState() {// console.log('change');
    }
  }]);

  return ButtonSwitch;
}(components_button);

/* harmony default export */ var components_button_switch = (ButtonSwitch);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/label-button.pcss
var label_button = __webpack_require__(383);
;// CONCATENATED MODULE: ./css/blocks/label-button.pcss

            

var label_button_options = {};

label_button_options.insert = "head";
label_button_options.singleton = false;

var label_button_update = injectStylesIntoStyleTag_default()(label_button/* default */.Z, label_button_options);



/* harmony default export */ var blocks_label_button = (label_button/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/label-button.js







function label_button_createSuper(Derived) { var hasNativeReflectConstruct = label_button_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function label_button_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var LabelButton = /*#__PURE__*/function (_ButtonSwitch) {
  inherits_default()(LabelButton, _ButtonSwitch);

  var _super = label_button_createSuper(LabelButton);

  function LabelButton() {
    classCallCheck_default()(this, LabelButton);

    return _super.apply(this, arguments);
  }

  createClass_default()(LabelButton, [{
    key: "_declareDefaults",

    /*
      Method to declare defaults.
      @private
      @overrides @ OpacitySwitch
    */
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(LabelButton.prototype), "_declareDefaults", this).call(this);

      this._defaults.title = 'speed (reset: alt + 1)';
    }
    /*
      Method to populate the label with progress text.
      @public
      @param {String} Text to set.
    */

  }, {
    key: "setLabelText",
    value: function setLabelText(text) {
      this.label.innerHTML = text;
    }
    /*
      ^  PUBLIC  ^
      v PPRIVATE v
    */

    /*
      Initial render method.
      @private
      @overrides @ Button
      @returns this
    */

  }, {
    key: "_render",
    value: function _render() {
      get_default()(getPrototypeOf_default()(LabelButton.prototype), "_render", this).call(this);

      this._addClass(this.el, blocks_label_button["label-button"]);

      this._addLabel(); // this.setLabelText( this._props.progress );

    }
    /*
      Method to add label to the `el`.
      @private
    */

  }, {
    key: "_addLabel",
    value: function _addLabel() {
      this.label = this._createElement('div');
      this.label.classList.add(blocks_label_button["label-button__label"]);
      this.el.appendChild(this.label);
    }
  }]);

  return LabelButton;
}(components_button_switch);

/* harmony default export */ var components_label_button = (LabelButton);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/speed-control.pcss
var speed_control = __webpack_require__(513);
;// CONCATENATED MODULE: ./css/blocks/speed-control.pcss

            

var speed_control_options = {};

speed_control_options.insert = "head";
speed_control_options.singleton = false;

var speed_control_update = injectStylesIntoStyleTag_default()(speed_control/* default */.Z, speed_control_options);



/* harmony default export */ var blocks_speed_control = (speed_control/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/speed-control.js







function speed_control_createSuper(Derived) { var hasNativeReflectConstruct = speed_control_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function speed_control_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var SpeedControl = /*#__PURE__*/function (_Module) {
  inherits_default()(SpeedControl, _Module);

  var _super = speed_control_createSuper(SpeedControl);

  function SpeedControl() {
    classCallCheck_default()(this, SpeedControl);

    return _super.apply(this, arguments);
  }

  createClass_default()(SpeedControl, [{
    key: "_declareDefaults",

    /*
      Method to declare defaults for the module.
      @private
      @overrides @ Module
    */
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(SpeedControl.prototype), "_declareDefaults", this).call(this);

      this._defaults.isOn = false;
      this._defaults.speed = 1;
      this._defaults.progress = .5;
      this._defaults.onSpeedChange = null;
      this._defaults.onIsSpeed = null;
    }
    /*
      Method to reset speed to 1x.
      @public
      @returns this
    */

  }, {
    key: "reset",
    value: function reset() {
      this._onDoubleTap();
    }
    /*
      Method to decrease speed value.
      @public
      @param {Number} Value that the slider should be decreased by.
      @returns this.
    */

  }, {
    key: "decreaseSpeed",
    value: function decreaseSpeed() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.01;
      var p = this._props;
      p.progress -= amount;
      p.progress = p.progress < 0 ? 0 : p.progress;
      this.slider.setProgress(p.progress);
      return this;
    }
    /*
      Method to inclease speed value.
      @public
      @param {Number} Value that the slider should be increased by.
      @returns this.
    */

  }, {
    key: "increaseSpeed",
    value: function increaseSpeed() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.01;
      var p = this._props;
      p.progress += amount;
      p.progress = p.progress > 1 ? 1 : p.progress;
      this.slider.setProgress(p.progress);
      return this;
    }
    /*
      Initial render method.
      @private
      @overrides @ Module
    */

  }, {
    key: "_render",
    value: function _render() {
      var p = this._props,
          className = 'speed-control',
          slider = this._createElement('div'),
          sliderIn = this._createElement('div'),
          icon = this._createElement('div');

      this._addMainElement();

      this.el.classList.add(blocks_speed_control[className]); // places for child components

      slider.classList.add(blocks_speed_control["".concat(className, "__slider")]); // sliderIn.classList.add( CLASSES[ `${ className }__slider-inner` ] );
      // slider.appendChild( sliderIn );

      this.el.appendChild(slider); // child components

      this.labelButton = new components_label_button({
        parent: this.el,
        isOn: p.isOn,
        className: blocks_speed_control["".concat(className, "__icon")],
        onStateChange: this._onButtonStateChange.bind(this),
        onDoubleTap: this._onDoubleTap.bind(this)
      });
      this.slider = new components_slider({
        parent: slider,
        isProgress: false,
        direction: 'y',
        onProgress: this._onSliderProgress.bind(this),
        snapPoint: .5,
        snapStrength: .05
      });
      this.slider.setProgress(this._speedToProgress(this._props.speed));
    }
    /*
      Method that is invoked on slider progress.
      @private
      @param {Number} Progress of the slider.
    */

  }, {
    key: "_onSliderProgress",
    value: function _onSliderProgress(p) {
      // progress should be at least 0.01
      p = Math.max(p, 0.0001);
      var props = this._props,
          args = [];

      this._callIfFunction(props.onSpeedChange, this._progressToSpeed(p), p);

      this.labelButton.setLabelText(this._progressToLabel(props.progress = p));
    }
    /*
      Method that is invoked on button state change.
      @private
      @param {Boolean} State of the button switch.
    */

  }, {
    key: "_onButtonStateChange",
    value: function _onButtonStateChange(isOn) {
      var method = isOn ? 'add' : 'remove';
      this.el.classList[method](blocks_speed_control["is-on"]);

      this._callIfFunction(this._props.onIsSpeed, isOn);
    }
    /*
      Method to recalc progress to label string.
      @private
      @param {Number} Progress [0...1].
      @returns {String} String for a label to set.
    */

  }, {
    key: "_progressToLabel",
    value: function _progressToLabel(progress) {
      var text = this._progressToSpeed(progress).toFixed(2),
          zeros = /\.+00$/;

      if (text.match(zeros)) {
        text = text.replace(zeros, '');
      }

      return "".concat(text, "x");
    }
    /*
      Method to recalc progress to speed.
      @private
      @param   {Number} Progress [0...1].
      @returns {Number} Speed [0...10].
    */

  }, {
    key: "_progressToSpeed",
    value: function _progressToSpeed(progress) {
      var speed = progress;

      if (progress < .5) {
        speed = 2 * progress;
      }

      if (progress === .5) {
        speed = 1;
      }

      if (progress > .5) {
        progress -= .5;
        speed = 1 + progress * 18; // console.log( speed/10, mojs.easing.cubic.out( speed/10 ) );
        // console.log( .5 + ( speed - 1 ) / 18 );
      }

      return speed;
    }
    /*
      Method to recalc progress to speed.
      @private
      @param   {Number} Progress [0...1].
      @returns {Number} Speed [0...10].
    */

  }, {
    key: "_speedToProgress",
    value: function _speedToProgress(speed) {
      var progress = speed;

      if (speed < 1) {
        progress = speed / 2;
      }

      if (speed === 1) {
        progress = .5;
      }

      if (speed > 1) {
        progress = .5 + (speed - 1) / 18;
      }

      return progress;
    }
    /*
      Method that is invoked on double button tap.
      @private
    */

  }, {
    key: "_onDoubleTap",
    value: function _onDoubleTap() {
      this.slider.setProgress(.5);
      this.labelButton.off();
    }
  }]);

  return SpeedControl;
}(components_module);

/* harmony default export */ var components_speed_control = (SpeedControl);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/icon-fork.pcss
var icon_fork = __webpack_require__(58);
;// CONCATENATED MODULE: ./css/blocks/icon-fork.pcss

            

var icon_fork_options = {};

icon_fork_options.insert = "head";
icon_fork_options.singleton = false;

var icon_fork_update = injectStylesIntoStyleTag_default()(icon_fork/* default */.Z, icon_fork_options);



/* harmony default export */ var blocks_icon_fork = (icon_fork/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/icon-fork.js







function icon_fork_createSuper(Derived) { var hasNativeReflectConstruct = icon_fork_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function icon_fork_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var IconFork = /*#__PURE__*/function (_ButtonSwitch) {
  inherits_default()(IconFork, _ButtonSwitch);

  var _super = icon_fork_createSuper(IconFork);

  function IconFork() {
    classCallCheck_default()(this, IconFork);

    return _super.apply(this, arguments);
  }

  createClass_default()(IconFork, [{
    key: "_render",

    /*
      Initial render method.
      @private
      @overrides @ Icon
      @returns this
    */
    value: function _render() {
      get_default()(getPrototypeOf_default()(IconFork.prototype), "_render", this).call(this);

      this.el.classList.add(blocks_icon_fork["icon-fork"]);
      var p = this._props,
          prefix = p.prefix,
          parent = this.el,
          className = blocks_icon_fork.icon;
      this.icon1 = new components_icon({
        shape: p.icon1,
        prefix: prefix,
        parent: parent,
        className: className
      });
      this.icon2 = new components_icon({
        shape: p.icon2,
        prefix: prefix,
        parent: parent,
        className: className
      });
    }
    /*
      Method that should be called on state change.
      @private
      @override @ IconSwitch
    */

  }, {
    key: "_setState",
    value: function _setState() {
      var p = this._props,
          classList = this.el.classList,
          method = p.isOn ? 'add' : 'remove';
      classList[method](blocks_icon_fork["is-on"]);
    }
  }]);

  return IconFork;
}(components_button_switch);

/* harmony default export */ var components_icon_fork = (IconFork);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/play-button.pcss
var play_button = __webpack_require__(733);
;// CONCATENATED MODULE: ./css/blocks/play-button.pcss

            

var play_button_options = {};

play_button_options.insert = "head";
play_button_options.singleton = false;

var play_button_update = injectStylesIntoStyleTag_default()(play_button/* default */.Z, play_button_options);



/* harmony default export */ var blocks_play_button = (play_button/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/play-button.js







function play_button_createSuper(Derived) { var hasNativeReflectConstruct = play_button_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function play_button_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var PlayButton = /*#__PURE__*/function (_IconFork) {
  inherits_default()(PlayButton, _IconFork);

  var _super = play_button_createSuper(PlayButton);

  function PlayButton() {
    classCallCheck_default()(this, PlayButton);

    return _super.apply(this, arguments);
  }

  createClass_default()(PlayButton, [{
    key: "_declareDefaults",

    /*
      Method to declare defaults on the module.
      @private
      @overrides @ ButtonSwitch
    */
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(PlayButton.prototype), "_declareDefaults", this).call(this);

      this._defaults.icon1 = 'pause';
      this._defaults.icon2 = 'play';
      this._defaults.title = 'play/pause (alt + p)';
    }
    /*
      Method to render the module.
      @private
    */

  }, {
    key: "_render",
    value: function _render() {
      get_default()(getPrototypeOf_default()(PlayButton.prototype), "_render", this).call(this);

      this._addClass(this.el, blocks_play_button["play-button"]);
    }
  }]);

  return PlayButton;
}(components_icon_fork);

/* harmony default export */ var components_play_button = (PlayButton);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/stop-button.pcss
var stop_button = __webpack_require__(938);
;// CONCATENATED MODULE: ./css/blocks/stop-button.pcss

            

var stop_button_options = {};

stop_button_options.insert = "head";
stop_button_options.singleton = false;

var stop_button_update = injectStylesIntoStyleTag_default()(stop_button/* default */.Z, stop_button_options);



/* harmony default export */ var blocks_stop_button = (stop_button/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/stop-button.js







function stop_button_createSuper(Derived) { var hasNativeReflectConstruct = stop_button_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function stop_button_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var StopButton = /*#__PURE__*/function (_IconButton) {
  inherits_default()(StopButton, _IconButton);

  var _super = stop_button_createSuper(StopButton);

  function StopButton() {
    classCallCheck_default()(this, StopButton);

    return _super.apply(this, arguments);
  }

  createClass_default()(StopButton, [{
    key: "_declareDefaults",
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(StopButton.prototype), "_declareDefaults", this).call(this);

      this._defaults.icon = 'stop';
      this._defaults.title = 'stop (alt + s)';
    }
    /*
      Initial render method.
      @private
      @overrides @ Button
      @returns this
    */

  }, {
    key: "_render",
    value: function _render() {
      get_default()(getPrototypeOf_default()(StopButton.prototype), "_render", this).call(this);

      this._addClass(this.el, blocks_stop_button["stop-button"]);
    }
  }]);

  return StopButton;
}(components_icon_button);

/* harmony default export */ var components_stop_button = (StopButton);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/opacity-switch.pcss
var opacity_switch = __webpack_require__(374);
;// CONCATENATED MODULE: ./css/blocks/opacity-switch.pcss

            

var opacity_switch_options = {};

opacity_switch_options.insert = "head";
opacity_switch_options.singleton = false;

var opacity_switch_update = injectStylesIntoStyleTag_default()(opacity_switch/* default */.Z, opacity_switch_options);



/* harmony default export */ var blocks_opacity_switch = (opacity_switch/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/opacity-switch.js







function opacity_switch_createSuper(Derived) { var hasNativeReflectConstruct = opacity_switch_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function opacity_switch_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var OpacitySwitch = /*#__PURE__*/function (_ButtonSwitch) {
  inherits_default()(OpacitySwitch, _ButtonSwitch);

  var _super = opacity_switch_createSuper(OpacitySwitch);

  function OpacitySwitch() {
    classCallCheck_default()(this, OpacitySwitch);

    return _super.apply(this, arguments);
  }

  createClass_default()(OpacitySwitch, [{
    key: "_declareDefaults",

    /*
      Method to decalre defaults.
      @private
      @overrides @ ButtonSwitch
    */
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(OpacitySwitch.prototype), "_declareDefaults", this).call(this);

      this._defaults.icon = '';
      this._defaults.iconSize = '';
    }
    /*
      Method to render the module.
      @private
      @overrides @ ButtonSwitch
    */

  }, {
    key: "_render",
    value: function _render() {
      get_default()(getPrototypeOf_default()(OpacitySwitch.prototype), "_render", this).call(this);

      this.el.classList.add(blocks_opacity_switch["opacity-switch"]);
      var p = this._props,
          icon = new components_icon({
        parent: this.el,
        shape: p.icon,
        size: p.iconSize,
        className: blocks_opacity_switch.icon,
        prefix: p.prefix
      });
      this.el.appendChild(icon.el);
    }
    /*
      Method to react to switch state change.
      @private
      @overrides @ ButtonSwitch
    */

  }, {
    key: "_setState",
    value: function _setState() {
      var method = this._props.isOn ? 'add' : 'remove';
      this.el.classList[method](blocks_opacity_switch["is-on"]);
    }
  }]);

  return OpacitySwitch;
}(components_button_switch);

/* harmony default export */ var components_opacity_switch = (OpacitySwitch);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/repeat-button.pcss
var repeat_button = __webpack_require__(600);
;// CONCATENATED MODULE: ./css/blocks/repeat-button.pcss

            

var repeat_button_options = {};

repeat_button_options.insert = "head";
repeat_button_options.singleton = false;

var repeat_button_update = injectStylesIntoStyleTag_default()(repeat_button/* default */.Z, repeat_button_options);



/* harmony default export */ var blocks_repeat_button = (repeat_button/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/repeat-button.js







function repeat_button_createSuper(Derived) { var hasNativeReflectConstruct = repeat_button_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function repeat_button_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var RepeatButton = /*#__PURE__*/function (_OpacitySwitch) {
  inherits_default()(RepeatButton, _OpacitySwitch);

  var _super = repeat_button_createSuper(RepeatButton);

  function RepeatButton() {
    classCallCheck_default()(this, RepeatButton);

    return _super.apply(this, arguments);
  }

  createClass_default()(RepeatButton, [{
    key: "_declareDefaults",

    /*
      Method to declare defaults.
      @private
      @overrides @ OpacitySwitch
    */
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(RepeatButton.prototype), "_declareDefaults", this).call(this);

      this._defaults.icon = 'repeat';
      this._defaults.iconSize = 'x2';
      this._defaults.title = 'repeat (alt + r)';
    }
    /*
      Initial render method.
      @private
      @overrides @ Button
      @returns this
    */

  }, {
    key: "_render",
    value: function _render() {
      get_default()(getPrototypeOf_default()(RepeatButton.prototype), "_render", this).call(this);

      this._addClass(this.el, blocks_repeat_button["repeat-button"]);
    }
  }]);

  return RepeatButton;
}(components_opacity_switch);

/* harmony default export */ var components_repeat_button = (RepeatButton);
;// CONCATENATED MODULE: ./js/components/bounds-button.js







function bounds_button_createSuper(Derived) { var hasNativeReflectConstruct = bounds_button_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function bounds_button_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var BoundsButton = /*#__PURE__*/function (_RepeatButton) {
  inherits_default()(BoundsButton, _RepeatButton);

  var _super = bounds_button_createSuper(BoundsButton);

  function BoundsButton() {
    classCallCheck_default()(this, BoundsButton);

    return _super.apply(this, arguments);
  }

  createClass_default()(BoundsButton, [{
    key: "_declareDefaults",

    /*
      Method to declare defaults.
      @private
      @overrides @ RepeatButton
    */
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(BoundsButton.prototype), "_declareDefaults", this).call(this);

      this._defaults.icon = 'bounds';
      this._defaults.title = 'progress bounds (alt + b)';
    }
  }]);

  return BoundsButton;
}(components_repeat_button);

/* harmony default export */ var bounds_button = (BoundsButton);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/hide-button.pcss
var hide_button = __webpack_require__(698);
;// CONCATENATED MODULE: ./css/blocks/hide-button.pcss

            

var hide_button_options = {};

hide_button_options.insert = "head";
hide_button_options.singleton = false;

var hide_button_update = injectStylesIntoStyleTag_default()(hide_button/* default */.Z, hide_button_options);



/* harmony default export */ var blocks_hide_button = (hide_button/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/components/hide-button.js







function hide_button_createSuper(Derived) { var hasNativeReflectConstruct = hide_button_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function hide_button_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var className = 'hide-button';

var HideButton = /*#__PURE__*/function (_ButtonSwitch) {
  inherits_default()(HideButton, _ButtonSwitch);

  var _super = hide_button_createSuper(HideButton);

  function HideButton() {
    classCallCheck_default()(this, HideButton);

    return _super.apply(this, arguments);
  }

  createClass_default()(HideButton, [{
    key: "_declareDefaults",
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(HideButton.prototype), "_declareDefaults", this).call(this);

      this._defaults.title = 'hide (alt + h)';
    }
    /*
      Initial render method.
      @private
      @overrides @ Button
      @returns this
    */

  }, {
    key: "_render",
    value: function _render() {
      get_default()(getPrototypeOf_default()(HideButton.prototype), "_render", this).call(this);

      this.el.classList.add(blocks_hide_button[className]);

      this._addIcon();
    }
    /*
      Method to add icon.
      @private
    */

  }, {
    key: "_addIcon",
    value: function _addIcon() {
      this.icon = new components_icon({
        parent: this.el,
        className: blocks_hide_button["".concat(className, "__icon")],
        shape: 'hide',
        prefix: this._props.prefix
      });
    }
    /*
      Method that have been called on switch state change.
      @private
      @override @ ButtonSwitch
    */

  }, {
    key: "_setState",
    value: function _setState() {
      var method = this._props.isOn ? 'add' : 'remove';
      this.el.classList[method](blocks_hide_button["is-hidden"]);
    }
  }]);

  return HideButton;
}(components_button_switch);

/* harmony default export */ var components_hide_button = (HideButton);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./css/blocks/mojs-player.pcss
var mojs_player = __webpack_require__(561);
;// CONCATENATED MODULE: ./css/blocks/mojs-player.pcss

            

var mojs_player_options = {};

mojs_player_options.insert = "head";
mojs_player_options.singleton = false;

var mojs_player_update = injectStylesIntoStyleTag_default()(mojs_player/* default */.Z, mojs_player_options);



/* harmony default export */ var blocks_mojs_player = (mojs_player/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./js/mojs-player.js
/* module decorator */ module = __webpack_require__.hmd(module);









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function mojs_player_createSuper(Derived) { var hasNativeReflectConstruct = mojs_player_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function mojs_player_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var MojsPlayer = /*#__PURE__*/function (_Module) {
  inherits_default()(MojsPlayer, _Module);

  var _super = mojs_player_createSuper(MojsPlayer);

  function MojsPlayer(o) {
    classCallCheck_default()(this, MojsPlayer);

    if (typeof mojs === 'undefined') {
      throw new Error("MojsPlayer relies on mojs^0.225.2, please include it before player initialization. [ https://github.com/legomushroom/mojs ] ");
    }

    return _super.call(this, o);
  }
  /*
    Method to declare defaults.
    @private
    @overrides @ Module
  */


  createClass_default()(MojsPlayer, [{
    key: "_declareDefaults",
    value: function _declareDefaults() {
      get_default()(getPrototypeOf_default()(MojsPlayer.prototype), "_declareDefaults", this).call(this);

      this._defaults.isSaveState = true;
      this._defaults.isPlaying = false;
      this._defaults.progress = 0;
      this._defaults.isRepeat = false;
      this._defaults.isBounds = false;
      this._defaults.leftBound = 0;
      this._defaults.rightBound = 1;
      this._defaults.isSpeed = false;
      this._defaults.speed = 1;
      this._defaults.isHidden = false;
      this._defaults.precision = 0.1;
      this._defaults.name = 'mojs-player';
      this._defaults.onToggleHide = null;
      this._defaults.onPlayStateChange = null;
      this._defaults.onSeekStart = null;
      this._defaults.onSeekEnd = null;
      this._defaults.onProgress = null;
      this._play = this._play.bind(this);
      this.revision = '0';

      var str = this._fallbackTo(this._o.name, this._defaults.name);

      str += str === this._defaults.name ? '' : "__".concat(this._defaults.name);
      this._localStorage = "".concat(str, "__").concat(this._hashCode(str));
    }
    /*
      Method to copy `_o` options to `_props` object
      with fallback to `localStorage` and `_defaults`.
      @private
    */

  }, {
    key: "_extendDefaults",
    value: function _extendDefaults() {
      this._props = {};
      var p = this._props,
          o = this._o,
          defs = this._defaults; // get localstorage regarding isSaveState option

      p.isSaveState = this._fallbackTo(o.isSaveState, defs.isSaveState);
      var m = p.isSaveState ? JSON.parse(localStorage.getItem(this._localStorage)) || {} : {};

      for (var key in defs) {
        var value = this._fallbackTo(m[key], o[key]);

        this._assignProp(key, this._fallbackTo(value, defs[key]));
      } // get raw-speed option


      this._props['raw-speed'] = this._fallbackTo(m['raw-speed'], .5);
    }
    /*
      Callback for keyup on document.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_keyUp",
    value: function _keyUp(e) {
      if (e.altKey) {
        switch (e.keyCode) {
          case 80:
            // alt + P => PLAY/PAUSE TOGGLE
            this._props.isPlaying = !this._props.isPlaying;

            this._onPlayStateChange(this._props.isPlaying);

            break;

          case 189:
            // alt + - => DECREASE PROGRESS
            this.playButton.off();
            this.playerSlider.decreaseProgress(e.shiftKey ? .1 : .01);
            break;

          case 187:
            // alt + + => INCREASE PROGRESS
            this.playButton.off();
            this.playerSlider.increaseProgress(e.shiftKey ? .1 : .01);
            break;

          case 83:
            // alt + S => STOP
            this._onStop();

            break;

          case 82:
            // alt + R => REPEAT TOGGLE
            this._props.isRepeat = !this._props.isRepeat;
            var method = this._props.isRepeat ? 'on' : 'off';
            this.repeatButton[method]();
            break;

          case 66:
            // alt + B => BOUNDS TOGGLE
            this._props.isBounds = !this._props.isBounds;
            var method = this._props.isBounds ? 'on' : 'off';
            this.boundsButton[method]();
            break;

          case 72:
            // alt + H => HIDE PLAYER TOGGLE
            this._props.isHidden = !this._props.isHidden;

            this._onHideStateChange(this._props.isHidden);

            var method = this._props.isHidden ? 'on' : 'off';
            this.hideButton[method]();
            break;
          // case 49: // alt + 1 => RESET SPEED TO 1x

          case 81:
            // alt + q => RESET SPEED TO 1x
            this.speedControl.reset();
            break;

          case 50:
            // alt + 2 => DECREASE SPEEED by .05
            this.speedControl.decreaseSpeed(e.shiftKey ? .05 : .01);
            break;

          case 51:
            // alt + 3 => INCREASE SPEED by .05
            this.speedControl.increaseSpeed(e.shiftKey ? .05 : .01);
            break;
        }
      }
    }
    /*
      Method to declare properties.
      @private
      @overrides @ Module
    */

  }, {
    key: "_vars",
    value: function _vars() {
      this._hideCount = 0;
    }
    /*
      Method to render the module.
      @private
      @overrides @ Module
    */

  }, {
    key: "_render",
    value: function _render() {
      this._initTimeline();

      var p = this._props,
          className = 'mojs-player',
          icons = new components_icons({
        prefix: this._props.prefix
      });

      get_default()(getPrototypeOf_default()(MojsPlayer.prototype), "_render", this).call(this); // this.el.classList.add(p.classNAme );


      this.el.classList.add(blocks_mojs_player[className]);
      this.el.setAttribute('id', 'js-mojs-player');

      var left = this._createChild('div', blocks_mojs_player["".concat(className, "__left")]),
          mid = this._createChild('div', blocks_mojs_player["".concat(className, "__mid")]),
          right = this._createChild('div', blocks_mojs_player["".concat(className, "__right")]);

      this.repeatButton = new components_repeat_button({
        parent: left,
        isOn: p.isRepeat,
        onStateChange: this._onRepeatStateChange.bind(this),
        prefix: this._props.prefix
      });
      this.playerSlider = new components_player_slider({
        parent: mid,
        isBounds: p.isBounds,
        leftProgress: p.leftBound,
        rightProgress: p.rightBound,
        progress: p.progress,
        onLeftProgress: this._onLeftProgress.bind(this),
        onProgress: this._onProgress.bind(this),
        onRightProgress: this._onRightProgress.bind(this),
        onSeekStart: this._onSeekStart.bind(this),
        onSeekEnd: this._onSeekEnd.bind(this)
      });
      this.boundsButton = new bounds_button({
        isOn: p.isBounds,
        parent: left,
        onStateChange: this._boundsStateChange.bind(this),
        prefix: this._props.prefix
      });
      this.speedControl = new components_speed_control({
        parent: left,
        // progress:       p.speed,
        speed: p.speed,
        isOn: p.isSpeed,
        onSpeedChange: this._onSpeedChange.bind(this),
        onIsSpeed: this._onIsSpeed.bind(this),
        prefix: this._props.prefix
      });
      var proc = 0,
          progress = [],
          procToSpeed = [],
          speedToProc = [];
      this.stopButton = new components_stop_button({
        parent: left,
        isPrepend: true,
        onPointerUp: this._onStop.bind(this),
        prefix: this._props.prefix
      });
      this.playButton = new components_play_button({
        parent: left,
        isOn: p.isPlaying,
        isPrepend: true,
        onStateChange: this._onPlayStateChange.bind(this),
        prefix: this._props.prefix
      });
      this.mojsButton = new components_icon_button({
        parent: right,
        className: blocks_mojs_player["".concat(className, "__mojs-logo")],
        icon: 'mojs',
        target: '_blank',
        link: 'https://github.com/legomushroom/mojs-player',
        title: 'mo • js',
        prefix: this._props.prefix
      });
      this.hideButton = new components_hide_button({
        parent: this.el,
        className: blocks_mojs_player["".concat(className, "__hide-button")],
        isOn: p.isHidden,
        onStateChange: this._onHideStateChange.bind(this),
        prefix: this._props.prefix
      });

      this._listen();
    }
    /*
      Method to initialize event listeners.
      @private
    */

  }, {
    key: "_listen",
    value: function _listen() {
      var unloadEvent = 'onpagehide' in window ? 'pagehide' : 'beforeunload';
      window.addEventListener(unloadEvent, this._onUnload.bind(this));
      document.addEventListener('keyup', this._keyUp.bind(this));
    }
    /*
      Method that is invoked when user touches the track.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_onSeekStart",
    value: function _onSeekStart(e) {
      this._sysTween.pause();

      var onSeekStart = this._props.onSeekStart;

      if (this._isFunction(onSeekStart)) {
        onSeekStart(e);
      }
    }
    /*
      Method that is invoked when user touches the track.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_onSeekEnd",
    value: function _onSeekEnd(e) {
      var _this = this;

      clearTimeout(this._endTimer);
      this._endTimer = setTimeout(function () {
        _this._props.isPlaying && _this._play();
      }, 20);
    }
    /*
      Method to init timeline.
      @private
    */

  }, {
    key: "_initTimeline",
    value: function _initTimeline() {
      var _this2 = this;

      this.timeline = new mojs.Timeline({});
      var add = this._o.add; // check whether the `add` option meets the next criterias:

      var isUndefined = typeof add === 'undefined';

      if (!isUndefined) {
        add = add.timeline || add.tween || add;
      }

      var isAdd = !!add.setProgress;

      if (isUndefined || !isAdd) {
        throw new Error('MojsPlayer expects Tween/Timeline/Module as `add` option in constructor call. [ new MojsPlayer({ add: new mojs.Tween }); ]');
        return;
      }

      this.timeline.add(this._o.add);
      var _props = this.timeline._props;
      var duration = _props.repeatTime !== void 0 ? _props : _props.delay + _props.duration;
      this._sysTween = new mojs.Tween({
        easing: 'linear.none',
        duration: duration,
        onUpdate: this._onSysProgress.bind(this),
        onComplete: this._onSysTweenComplete.bind(this),
        onPlaybackStop: function onPlaybackStop() {
          _this2._setPlayState('off');
        },
        onPlaybackPause: function onPlaybackPause() {
          _this2._setPlayState('off');
        },
        onPlaybackStart: function onPlaybackStart() {
          _this2._setPlayState('on');
        }
      });
    }
    /*
      Method that is invoked on system tween progress.
      @private
      @param {Number} Progress value [0...1].
    */

  }, {
    key: "_onSysProgress",
    value: function _onSysProgress(p) {
      this.playerSlider.setTrackProgress(p);
      var rightBound = this._props.isBounds ? this._props.rightBound : 1,
          leftBound = this._props.isBounds ? this._props.leftBound : -1; // since js is really bed in numbers precision,
      // if we set a progress in the `_play` method it returns slighly
      // different when piped thru tween, so add `0.01` gap to soften that

      if (p < leftBound - 0.01 && p !== 0) {
        this._reset();

        requestAnimationFrame(this._play);
      }

      if (p >= rightBound) {
        this._reset(rightBound === 1);

        if (this._props.isRepeat) {
          requestAnimationFrame(this._play);
        } else {
          this._props.isPlaying = false;
        }
      }
    }
    /*
      Method to play system tween from progress.
      @private
    */

  }, {
    key: "_play",
    value: function _play() {
      var p = this._props;
      var leftBound = p.isBounds ? p.leftBound : p.progress;
      var progress = p.progress >= this._getBound('right') ? leftBound : p.progress;

      if (progress === 1) {
        progress = p.isBounds ? p.leftBound : 0;
      }

      ;

      if (progress !== 0) {
        this._sysTween.setProgress(progress);
      }

      ;

      this._sysTween.play();
    }
    /*
      Method to reset sysTween and timeline.
      @param {Boolean} If should not set progress to 0.
      @private
    */

  }, {
    key: "_reset",
    value: function _reset(isPause) {
      this._sysTween.reset(); // if ( !isPause ) {
      //   const p        = this._props,
      //         progress = p.progress;
      //
      //   let   start = progress,
      //         leftBound = (p.isBounds) ? p.leftBound : 0;
      //
      //   // while ( (start - p.precision) >= leftBound ) {
      //   //   start -= p.precision;
      //   //   this.timeline.setProgress( start );
      //   // }
      // }


      this.timeline.reset();
    }
    /*
      Method to set play button state.
      @private
      @param {String} Method name to call it on playButton.
    */

  }, {
    key: "_setPlayState",
    value: function _setPlayState(method) {
      var _this3 = this;

      clearTimeout(this._playTimeout);
      this._playTimeout = setTimeout(function () {
        _this3.playButton && _this3.playButton[method](false);
      }, 20);
    }
    /*
      Method that is invoked on system tween completion.
      @private
      @param {Boolean} If forward direction.
    */

  }, {
    key: "_onSysTweenComplete",
    value: function _onSysTweenComplete(isForward) {// console.log(' complete ', this._props.isPlaying, isForward, this._props.isRepeat);
      // if ( this._props.isPlaying && isForward ) {
      //   if ( this._props.isRepeat ) {
      //     console.log('reset 2')
      //     // this._sysTween.reset();
      //     // this._play();
      //   }
      // }
    }
    /*
      Method that is invoked play button state change.
      @private
      @param {Boolean} Repeat button state.
    */

  }, {
    key: "_onPlayStateChange",
    value: function _onPlayStateChange(isPlay) {
      this._props.isPlaying = isPlay;

      if (isPlay) {
        this._play();
      } else {
        this._sysTween.pause();
      }

      var onPlayStateChange = this._props.onPlayStateChange;

      if (this._isFunction(onPlayStateChange)) {
        onPlayStateChange(isPlay);
      }
    }
    /*
      Callback for hide button change state.
      @private
      @param {Boolean}
    */

  }, {
    key: "_onHideStateChange",
    value: function _onHideStateChange(isHidden) {
      this._props.isHidden = isHidden;
      var onToggleHide = this._props.onToggleHide;

      if (this._isFunction(onToggleHide)) {
        onToggleHide(isHidden);
      }

      var method = isHidden ? 'add' : 'remove';
      this.el.classList[method](blocks_mojs_player["is-hidden"]); // enable CSS transition on subsequent calls

      if (this._hideCount++ === 1) {
        this.el.classList.add(blocks_mojs_player["is-transition"]);
      }
    }
    /*
      Method that is invoked on stop button tap.
      @private
    */

  }, {
    key: "_onStop",
    value: function _onStop() {
      var p = this._props;
      p.isPlaying = false;
      var leftBound = p.isBounds ? p.leftBound : 0; // set sysTween progress twice because it could be _reset already

      this._sysTween.setProgress(leftBound + 0.01);

      this._sysTween.setProgress(leftBound);

      this._reset();
    }
    /*
      Method that is invoked on repeat switch state change.
      @private
      @param {Boolean} Repeat button state.
    */

  }, {
    key: "_onRepeatStateChange",
    value: function _onRepeatStateChange(isOn) {
      this._props.isRepeat = isOn;
    }
    /*
      Method that is invoked on bounds switch state change.
      @private
      @param {Boolean} Bounds state.
    */

  }, {
    key: "_boundsStateChange",
    value: function _boundsStateChange(isOn) {
      this.playerSlider._props.isBounds = isOn;
      this.playerSlider["".concat(isOn ? 'enable' : 'disable', "Bounds")]();
      this._props.isBounds = isOn;
    }
    /*
      Method that is invoked on speed value change.
      @private
      @param {Number} Speed value.
      @param {Number} Slider progress.
    */

  }, {
    key: "_onSpeedChange",
    value: function _onSpeedChange(speed, progress) {
      this._props['raw-speed'] = progress;
      this._props.speed = speed;

      this._sysTween.setSpeed(speed);
    }
    /*
      Method that is invoked on speed state change.
      @private
      @param {Boolean} Speed control state.
    */

  }, {
    key: "_onIsSpeed",
    value: function _onIsSpeed(isOn) {
      this._props.isSpeed = isOn;
    }
    /*
      Method that is invoked on timeline's left bound progress.
      @private
      @param {Number} Progress value [0...1].
    */

  }, {
    key: "_onLeftProgress",
    value: function _onLeftProgress(progress) {
      this._props.leftBound = progress;
    }
    /*
      Method that is invoked on timeline progress.
      @private
      @param {Number} Progress value [0...1].
    */

  }, {
    key: "_onProgress",
    value: function _onProgress(progress) {
      this._props.progress = progress; // if timeline was reset - refresh it's state
      // by incremental updates until progress (0 always)
      // if ( !this.timeline._prevTime && progress > 0 ) {
      //   let start = 0;
      //   do {
      //     this.timeline.setProgress( start );
      //     start += this._props.precision;
      //   } while ( start + this._props.precision < progress );
      // }
      // console.log(`timeline.setProgress: ${progress}`);

      this.timeline.setProgress(progress);
    }
    /*
      Method that is invoked on timeline's right bound progress.
      @private
      @param {Number} Progress value [0...1].
    */

  }, {
    key: "_onRightProgress",
    value: function _onRightProgress(progress) {
      this._props.rightBound = progress;
    }
    /*
      Method that is invoked on window unload.
      @private
      @param {Object} Original even object.
    */

  }, {
    key: "_onUnload",
    value: function _onUnload(e) {
      if (!this._props.isSaveState) {
        return localStorage.removeItem(this._localStorage);
      }

      var props = _objectSpread({}, this._props);

      delete props.parent;
      delete props.className;
      delete props.isSaveState;
      delete props.precision;
      localStorage.setItem(this._localStorage, JSON.stringify(props));
    }
    /*
      Method that returns the second argument if the first one isn't set.
      @private
      @param {Any} Property to set.
      @param {Any} Property to return as fallback.
      @returns {Any} If set - the first property, if not - the second.
    */

  }, {
    key: "_fallbackTo",
    value: function _fallbackTo(prop, fallback) {
      return prop != null ? prop : fallback;
    }
    /*
      Method to get bound regarding isBound option.
      @private
      @param {String} Bound name.
    */

  }, {
    key: "_getBound",
    value: function _getBound(boundName) {
      var p = this._props,
          fallback = boundName === 'left' ? 0 : 1;
      return p.isBounds ? p["".concat(boundName, "Bound")] : fallback;
    }
    /*
      Method to defer a method.
      @private
      @param {Function} Function that should be defered.
    */

  }, {
    key: "_defer",
    value: function _defer(fn) {
      setTimeout(fn.bind(this), 1);
    }
    /*
      Method to generate hash code.
      @private
      @return {String} Hash code.
    */

  }, {
    key: "_hashCode",
    value: function _hashCode(str) {
      var hash = 0,
          i,
          chr,
          len;
      if (str.length === 0) return hash;

      for (i = 0, len = str.length; i < len; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
      }

      return Math.abs(hash);
    }
    /*
      Method to determine if variable is a function
      @private
      @param {Function} Function to be guarenteed.
      @return {Boolean} true/false whether variable reference was a function
    */

  }, {
    key: "_isFunction",
    value: function _isFunction(fn) {
      return typeof fn === 'function';
    }
  }]);

  return MojsPlayer;
}(components_module);

if (typeof define === "function" && __webpack_require__.amdO) {
  define(function () {
    return MojsPlayer;
  });
}

if (( false ? 0 : typeof_default()(module)) === "object" && typeof_default()(module.exports) === "object") {
  module.exports = MojsPlayer;
}

var _global = typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : window;

_global.MojsPlayer = MojsPlayer;
/* harmony default export */ var js_mojs_player = (MojsPlayer);

/***/ }),

/***/ 241:
/***/ (function() {

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20170427
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in window.self) {

// Full polyfill for browsers with no classList support
// Including IE < Edge missing SVGElement.classList
if (!("classList" in document.createElement("_")) 
	|| document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

(function (view) {

"use strict";

if (!('Element' in view)) return;

var
	  classListProp = "classList"
	, protoProp = "prototype"
	, elemCtrProto = view.Element[protoProp]
	, objCtr = Object
	, strTrim = String[protoProp].trim || function () {
		return this.replace(/^\s+|\s+$/g, "");
	}
	, arrIndexOf = Array[protoProp].indexOf || function (item) {
		var
			  i = 0
			, len = this.length
		;
		for (; i < len; i++) {
			if (i in this && this[i] === item) {
				return i;
			}
		}
		return -1;
	}
	// Vendors: please allow content code to instantiate DOMExceptions
	, DOMEx = function (type, message) {
		this.name = type;
		this.code = DOMException[type];
		this.message = message;
	}
	, checkTokenAndGetIndex = function (classList, token) {
		if (token === "") {
			throw new DOMEx(
				  "SYNTAX_ERR"
				, "An invalid or illegal string was specified"
			);
		}
		if (/\s/.test(token)) {
			throw new DOMEx(
				  "INVALID_CHARACTER_ERR"
				, "String contains an invalid character"
			);
		}
		return arrIndexOf.call(classList, token);
	}
	, ClassList = function (elem) {
		var
			  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
			, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
			, i = 0
			, len = classes.length
		;
		for (; i < len; i++) {
			this.push(classes[i]);
		}
		this._updateClassName = function () {
			elem.setAttribute("class", this.toString());
		};
	}
	, classListProto = ClassList[protoProp] = []
	, classListGetter = function () {
		return new ClassList(this);
	}
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
	return this[i] || null;
};
classListProto.contains = function (token) {
	token += "";
	return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
	;
	do {
		token = tokens[i] + "";
		if (checkTokenAndGetIndex(this, token) === -1) {
			this.push(token);
			updated = true;
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.remove = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
		, index
	;
	do {
		token = tokens[i] + "";
		index = checkTokenAndGetIndex(this, token);
		while (index !== -1) {
			this.splice(index, 1);
			updated = true;
			index = checkTokenAndGetIndex(this, token);
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.toggle = function (token, force) {
	token += "";

	var
		  result = this.contains(token)
		, method = result ?
			force !== true && "remove"
		:
			force !== false && "add"
	;

	if (method) {
		this[method](token);
	}

	if (force === true || force === false) {
		return force;
	} else {
		return !result;
	}
};
classListProto.toString = function () {
	return this.join(" ");
};

if (objCtr.defineProperty) {
	var classListPropDesc = {
		  get: classListGetter
		, enumerable: true
		, configurable: true
	};
	try {
		objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	} catch (ex) { // IE 8 doesn't support enumerable:true
		// adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
		// modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
		if (ex.number === undefined || ex.number === -0x7FF5EC54) {
			classListPropDesc.enumerable = false;
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		}
	}
} else if (objCtr[protoProp].__defineGetter__) {
	elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(window.self));

}

// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

(function () {
	"use strict";

	var testElement = document.createElement("_");

	testElement.classList.add("c1", "c2");

	// Polyfill for IE 10/11 and Firefox <26, where classList.add and
	// classList.remove exist but support only one argument at a time.
	if (!testElement.classList.contains("c2")) {
		var createMethod = function(method) {
			var original = DOMTokenList.prototype[method];

			DOMTokenList.prototype[method] = function(token) {
				var i, len = arguments.length;

				for (i = 0; i < len; i++) {
					token = arguments[i];
					original.call(this, token);
				}
			};
		};
		createMethod('add');
		createMethod('remove');
	}

	testElement.classList.toggle("c3", false);

	// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	// support the second argument.
	if (testElement.classList.contains("c3")) {
		var _toggle = DOMTokenList.prototype.toggle;

		DOMTokenList.prototype.toggle = function(token, force) {
			if (1 in arguments && !this.contains(token) === !force) {
				return force;
			} else {
				return _toggle.call(this, token);
			}
		};

	}

	testElement = null;
}());

}


/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".button-switch___2fv0I {\n  position: relative;\n  display: inline-block;\n}\n\n  .button-switch___2fv0I > .icon___C66eq {\n    position: absolute;\n  }\n\n.button-switch___2fv0I:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1;\n  }\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"button-switch": "button-switch___2fv0I",
	"icon": "icon___C66eq"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".button___1KCbj {\n  position: relative;\n  width: 35px;\n  height: 40px;\n  cursor: pointer;\n  fill: #fff;\n  display: inline-block;\n}\n\n  .button__ripple___1RN9J {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 5;\n    overflow: hidden\n  }\n\n  .button__ripple___1RN9J:after {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      z-index: 1;\n      cursor: pointer;\n    }\n\n.button___1KCbj:hover {\n    opacity: 0.85;\n  }\n\n.button___1KCbj:active {\n    opacity: 1;\n  }\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"button": "button___1KCbj",
	"button__ripple": "button__ripple___1RN9J"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".handle___-tCG2 {\n  width: 13px;\n  height: 13px;\n  cursor: pointer;\n  transform: translateX(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n  .handle__inner___eWrIV,\n  .handle__shadow___ZAb1V {\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    cursor: pointer;\n  }\n\n  .handle__inner___eWrIV {\n    background: #fff;\n  }\n\n  .handle__shadow___ZAb1V {\n    box-shadow: 1px 1px 2px black;\n    opacity: 0.35;\n    z-index: 0;\n  }\n\n  .handle___-tCG2:hover .handle__inner___eWrIV,\n  .handle___-tCG2:hover .handle__shadow___ZAb1V {\n    transform: scale(1.1);\n  }\n\n  .handle___-tCG2:active .handle__inner___eWrIV {\n    transform: scale(1.2);\n  }\n\n  .handle___-tCG2:active .handle__shadow___ZAb1V {\n    opacity: 0.85;\n    transform: scale(1);\n  }\n\n.handle___-tCG2.is-bound___L6p93 {\n    width: 9px;\n    height: calc((9px + 1px) * 2);\n    margin-left: calc(9px * -1);\n    margin-top: calc((9px + 1px) * -1);\n  }\n\n.handle___-tCG2.is-bound___L6p93 .handle__inner___eWrIV {\n    background: #ff512f\n  }\n\n.handle___-tCG2.is-bound___L6p93 .handle__inner___eWrIV:after {\n      content: \"\";\n      position: absolute;\n      right: 0;\n      top: 50%;\n      margin-top: calc(40px / 2 * -1);\n      width: 1px;\n      height: 40px;\n      background: #ff512f;\n    }\n\n.handle___-tCG2.is-bound___L6p93 .handle__inner___eWrIV,\n  .handle___-tCG2.is-bound___L6p93 .handle__shadow___ZAb1V {\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n.handle___-tCG2.is-inversed___2MUrh {\n    margin-left: 0;\n  }\n\n.handle___-tCG2.is-inversed___2MUrh .handle__shadow___ZAb1V {\n    box-shadow: -1px 1px 2px black;\n  }\n\n.handle___-tCG2.is-inversed___2MUrh .handle__inner___eWrIV {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px\n  }\n\n.handle___-tCG2.is-inversed___2MUrh .handle__inner___eWrIV:after {\n      right: auto;\n      left: 0;\n    }\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"handle": "handle___-tCG2",
	"handle__inner": "handle__inner___eWrIV",
	"handle__shadow": "handle__shadow___ZAb1V",
	"is-bound": "is-bound___L6p93",
	"is-inversed": "is-inversed___2MUrh"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hide-button___csE1O {\n  width: 22px;\n  height: 16px;\n  background: #3a0839;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n\n  .hide-button__icon___2fzCU {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 8px;\n    height: 8px;\n    margin-top: 1px;\n    transform: translate(-50%, -50%);\n  }\n\n  .hide-button___csE1O.is-hidden___2bcEG .hide-button__icon___2fzCU {\n    transform: translate(-50%, -65%) rotate(180deg);\n  }\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hide-button": "hide-button___csE1O",
	"hide-button__icon": "hide-button__icon___2fzCU",
	"is-hidden": "is-hidden___2bcEG"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon-button___1BlK- .icon___1bMix {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"icon-button": "icon-button___1BlK-",
	"icon": "icon___1bMix"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon-fork___2W8IC > .icon___10etw {\n    opacity: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  .icon-fork___2W8IC > .icon___10etw:nth-of-type(3) {\n    position: absolute;\n    opacity: 1;\n  }\n.icon-fork___2W8IC.is-on___1-kIT > .icon___10etw:nth-of-type(2) {\n    opacity: 1;\n  }\n.icon-fork___2W8IC.is-on___1-kIT > .icon___10etw:nth-of-type(3) {\n    opacity: 0;\n  }\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"icon-fork": "icon-fork___2W8IC",
	"icon": "icon___10etw",
	"is-on": "is-on___1-kIT"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon___18-Fl {\n  position: relative;\n  width: 12px;\n  height: 12px;\n  cursor: pointer;\n}\n\n  .icon___18-Fl > svg {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    fill: inherit;\n  }\n\n  .icon___18-Fl > svg > use {\n      fill: inherit;\n    }\n\n.icon___18-Fl:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1;\n  }\n\n.icon___18-Fl.is-x2___3jkfi {\n    width: 16px;\n    height: 16px;\n  }\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"icon": "icon___18-Fl",
	"is-x2": "is-x2___3jkfi"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".label-button___2IJCy {\n  font-family: Arial, sans-serif;\n  font-size: 9px;\n  letter-spacing: 0.5px;\n  color: white;\n}\n\n  .label-button__label___rrdg9 {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"label-button": "label-button___2IJCy",
	"label-button__label": "label-button__label___rrdg9"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mojs-player___2j6ky {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 40px;\n  background: rgba(58, 8, 57, 0.85);\n  z-index: 100;\n}\n\n  .mojs-player___2j6ky * {\n    box-sizing: border-box;\n  }\n\n  .mojs-player__left___wVxem {\n    position: absolute;\n    left: 0;\n    width: 5;\n  }\n\n  .mojs-player__mid___3IWi4 {\n    position: absolute;\n    left: calc(5 * 35px);\n    right: calc(35px / 2);\n    overflow: hidden;\n    padding: 0 20px;\n  }\n\n  .mojs-player__right___3XmLz {\n    position: absolute;\n    right: 0;\n  }\n\n  .mojs-player__hide-button___2K0tS {\n    position: absolute;\n    right: 6px;\n    bottom: 100%;\n  }\n\n  .mojs-player__mojs-logo___2CW3D [data-component=\"icon\"] {\n      fill: #ff512f;\n    }\n\n.mojs-player___2j6ky.is-hidden___1ZZtB {\n    transform: translateY(100%);\n  }\n\n.mojs-player___2j6ky.is-transition___1EYyY {\n    transition: all 0.15s ease-out;\n  }\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mojs-player": "mojs-player___2j6ky",
	"mojs-player__left": "mojs-player__left___wVxem",
	"mojs-player__mid": "mojs-player__mid___3IWi4",
	"mojs-player__right": "mojs-player__right___3XmLz",
	"mojs-player__hide-button": "mojs-player__hide-button___2K0tS",
	"mojs-player__mojs-logo": "mojs-player__mojs-logo___2CW3D",
	"is-hidden": "is-hidden___1ZZtB",
	"is-transition": "is-transition___1EYyY"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".opacity-switch___39bax {\n  opacity: 0.5;\n}\n\n  .opacity-switch___39bax .icon___Zy36a {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n.opacity-switch___39bax:hover {\n    opacity: 0.4;\n  }\n\n.opacity-switch___39bax.is-on___16SLG {\n    opacity: 1\n  }\n\n.opacity-switch___39bax.is-on___16SLG:hover {\n      opacity: 0.85;\n    }\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"opacity-switch": "opacity-switch___39bax",
	"icon": "icon___Zy36a",
	"is-on": "is-on___16SLG"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".play-button___1UNy- {\n  /* styles */\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"play-button": "play-button___1UNy-"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".player-slider___GAEqU {\n  height: 40px;\n}\n\n  .player-slider___GAEqU > div {\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 2;\n  }\n\n  .player-slider___GAEqU .slider___2a1Fe {\n    z-index: 1;\n    height: 100%;\n  }\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"player-slider": "player-slider___GAEqU",
	"slider": "slider___2a1Fe"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".repeat-button___34PDu {\n  /* styles */\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"repeat-button": "repeat-button___34PDu"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".slider___giv74 {\n  position: relative;\n  width: 100%;\n  height: 30px;\n}\n\n  .slider__inner___2vtvH {\n    width: 100%;\n    height: 100%;\n    position: relative;\n  }\n\n  .slider___giv74 .handle___13IFH,\n  .slider___giv74 .progress-handle___euwMa {\n    z-index: 3;\n    position: absolute;\n    top: 50%;\n  }\n\n  .slider___giv74 .progress-handle___euwMa {\n    left: 0;\n    margin-left: calc(13px / 2 * -1);\n    margin-top: calc(13px / 2 * -1);\n  }\n\n  .slider___giv74 .track___1tSd5 {\n    z-index: 2;\n  }\n\n.slider___giv74.is-y___10zoB {\n    width: 30px;\n    height: 100%;\n  }\n\n.slider___giv74.is-y___10zoB .handle___13IFH {\n      left: 50%;\n      top: auto;\n      bottom: 0;\n      margin-top: 0;\n      margin-bottom: calc(13px / 2 * -1);\n    }\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"slider": "slider___giv74",
	"slider__inner": "slider__inner___2vtvH",
	"handle": "handle___13IFH",
	"progress-handle": "progress-handle___euwMa",
	"track": "track___1tSd5",
	"is-y": "is-y___10zoB"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".speed-control___3Vgox {\n  position: relative;\n  display: inline-block;\n  height: 40px;\n}\n\n  .speed-control__slider___OEBIU {\n    position: absolute;\n    bottom: 100%;\n    left: 3px;\n    width: 30px;\n    height: calc((80px + (2 * 20px)));\n    padding-top: 20px;\n    padding-bottom: 20px;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px;\n    background: #3a0839;\n    transform: translate(\n      -99999999px,\n      -99999999px\n    );\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden\n  }\n\n  .speed-control__slider___OEBIU:before,\n    .speed-control__slider___OEBIU:after {\n      content: \"\";\n      position: absolute;\n      top: 50%;\n      width: 3px;\n      height: 1px;\n      background: #fff;\n    }\n\n  .speed-control__slider___OEBIU:before {\n      left: 5px;\n    }\n\n  .speed-control__slider___OEBIU:after {\n      right: 5px;\n    }\n\n  .speed-control__button___3tOsG {\n    border: 1px solid cyan;\n  }\n\n  .speed-control___3Vgox.is-on___3A-hk .speed-control__slider___OEBIU {\n    transform: translate(0, 0);\n  }\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"speed-control": "speed-control___3Vgox",
	"speed-control__slider": "speed-control__slider___OEBIU",
	"speed-control__button": "speed-control__button___3tOsG",
	"is-on": "is-on___3A-hk"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".stop-button___2x4Jg {\n  /* styles */\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"stop-button": "stop-button___2x4Jg"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".track___OjfTk {\n  position: relative;\n  height: 100%;\n}\n\n  .track__track___3FpX6 {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background: #fff;\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5)\n  }\n\n  .track__track___3FpX6:after {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      top: calc(-40px / 2);\n      width: 100%;\n      height: 40px;\n      cursor: pointer;\n    }\n\n  .track__track-progress___r_SRr {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    margin-top: -1px;\n    height: 3px;\n    width: 0.0625em;\n    background: #fff;\n    z-index: 1;\n    transform-origin: left center\n  }\n\n  .track__track-progress___r_SRr:after {\n      position: absolute;\n      left: 0;\n      top: calc(-40px / 2);\n      width: 100%;\n      height: 40px;\n      cursor: pointer;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden;\n    }\n\n  .track__ripple___1cNCj {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n  }\n\n.track___OjfTk.is-inversed___3kiEQ {\n    left: auto;\n    right: 0;\n  }\n\n.track___OjfTk.is-inversed___3kiEQ .track__track-progress___r_SRr {\n    transform-origin: right center;\n  }\n\n.track___OjfTk.is-bound___3h1iT .track__track-progress___r_SRr {\n    background: #ff512f;\n  }\n\n.track___OjfTk.is-y___mH4D8 .track__track___3FpX6 {\n    top: 0;\n    left: 50%;\n    height: 100%;\n    width: 1px;\n  }\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"track": "track___OjfTk",
	"track__track": "track__track___3FpX6",
	"track__track-progress": "track__track-progress___r_SRr",
	"track__ripple": "track__ripple___1cNCj",
	"is-inversed": "is-inversed___3kiEQ",
	"is-bound": "is-bound___3h1iT",
	"is-y": "is-y___mH4D8"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ 379:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(919);
/******/ })()
;
});