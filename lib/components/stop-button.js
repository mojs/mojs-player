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

var _iconButton = _interopRequireDefault(require("./icon-button.js"));

var _stopButton = _interopRequireDefault(require("../../css/blocks/stop-button.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StopButton = /*#__PURE__*/function (_IconButton) {
  (0, _inherits2["default"])(StopButton, _IconButton);

  var _super = _createSuper(StopButton);

  function StopButton() {
    (0, _classCallCheck2["default"])(this, StopButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(StopButton, [{
    key: "_declareDefaults",
    value: function _declareDefaults() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(StopButton.prototype), "_declareDefaults", this).call(this);
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
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(StopButton.prototype), "_render", this).call(this);

      this._addClass(this.el, _stopButton["default"]['stop-button']);
    }
  }]);
  return StopButton;
}(_iconButton["default"]);

var _default = StopButton;
exports["default"] = _default;