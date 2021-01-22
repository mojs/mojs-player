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

var _button = _interopRequireDefault(require("./button.js"));

var _buttonSwitch = _interopRequireDefault(require("../../css/blocks/button-switch.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ButtonSwitch = /*#__PURE__*/function (_Button) {
  (0, _inherits2["default"])(ButtonSwitch, _Button);

  var _super = _createSuper(ButtonSwitch);

  function ButtonSwitch() {
    (0, _classCallCheck2["default"])(this, ButtonSwitch);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ButtonSwitch, [{
    key: "_declareDefaults",

    /*
      Method to declare _defaults.
      @private
      @overrides @ Button
    */
    value: function _declareDefaults() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(ButtonSwitch.prototype), "_declareDefaults", this).call(this);
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
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(ButtonSwitch.prototype), "_render", this).call(this);
      this.el.classList.add(_buttonSwitch["default"]['button-switch']);

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

      (0, _get2["default"])((0, _getPrototypeOf2["default"])(ButtonSwitch.prototype), "_pointerUp", this).call(this, e);
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
}(_button["default"]);

var _default = ButtonSwitch;
exports["default"] = _default;