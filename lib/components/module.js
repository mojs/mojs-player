"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

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
    (0, _classCallCheck2["default"])(this, Module);
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


  (0, _createClass2["default"])(Module, [{
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
      if ((0, _typeof2["default"])(attr) === 'object') {
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

var _default = Module;
exports["default"] = _default;