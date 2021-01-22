"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _module = _interopRequireDefault(require("./module.js"));

var _hammerjs = _interopRequireDefault(require("hammerjs"));

var _ripple = _interopRequireDefault(require("./ripple.js"));

var _button = _interopRequireDefault(require("../../css/blocks/button.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Button = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(Button, _Module);

  var _super = _createSuper(Button);

  function Button() {
    (0, _classCallCheck2["default"])(this, Button);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Button, [{
    key: "_declareDefaults",

    /*
      Method to declare defaults for the module.
      @private
      @overrides @ Module
    */
    value: function _declareDefaults() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Button.prototype), "_declareDefaults", this).call(this);
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

      this.el.classList.add(_button["default"][className]);
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
      this.ripple = new _ripple["default"]({
        className: _button["default"]["button__ripple"],
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

      (0, _hammerjs["default"])(this.el).on('doubletap', this._doubleTap.bind(this));
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
}(_module["default"]);

var _default = Button;
exports["default"] = _default;