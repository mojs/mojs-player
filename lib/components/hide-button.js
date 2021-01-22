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

var _buttonSwitch = _interopRequireDefault(require("./button-switch.js"));

var _icon = _interopRequireDefault(require("./icon.js"));

var _hideButton = _interopRequireDefault(require("../../css/blocks/hide-button.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var className = 'hide-button';

var HideButton = /*#__PURE__*/function (_ButtonSwitch) {
  (0, _inherits2["default"])(HideButton, _ButtonSwitch);

  var _super = _createSuper(HideButton);

  function HideButton() {
    (0, _classCallCheck2["default"])(this, HideButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(HideButton, [{
    key: "_declareDefaults",
    value: function _declareDefaults() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(HideButton.prototype), "_declareDefaults", this).call(this);
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
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(HideButton.prototype), "_render", this).call(this);
      this.el.classList.add(_hideButton["default"][className]);

      this._addIcon();
    }
    /*
      Method to add icon.
      @private
    */

  }, {
    key: "_addIcon",
    value: function _addIcon() {
      this.icon = new _icon["default"]({
        parent: this.el,
        className: _hideButton["default"]["".concat(className, "__icon")],
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
      this.el.classList[method](_hideButton["default"]["is-hidden"]);
    }
  }]);
  return HideButton;
}(_buttonSwitch["default"]);

var _default = HideButton;
exports["default"] = _default;