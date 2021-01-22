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

var _opacitySwitch = _interopRequireDefault(require("./opacity-switch.js"));

var _repeatButton = _interopRequireDefault(require("../../css/blocks/repeat-button.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var RepeatButton = /*#__PURE__*/function (_OpacitySwitch) {
  (0, _inherits2["default"])(RepeatButton, _OpacitySwitch);

  var _super = _createSuper(RepeatButton);

  function RepeatButton() {
    (0, _classCallCheck2["default"])(this, RepeatButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(RepeatButton, [{
    key: "_declareDefaults",

    /*
      Method to declare defaults.
      @private
      @overrides @ OpacitySwitch
    */
    value: function _declareDefaults() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(RepeatButton.prototype), "_declareDefaults", this).call(this);
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
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(RepeatButton.prototype), "_render", this).call(this);

      this._addClass(this.el, _repeatButton["default"]['repeat-button']);
    }
  }]);
  return RepeatButton;
}(_opacitySwitch["default"]);

var _default = RepeatButton;
exports["default"] = _default;