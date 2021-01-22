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

var _icon = _interopRequireDefault(require("./icon.js"));

var _buttonSwitch = _interopRequireDefault(require("./button-switch.js"));

var _opacitySwitch = _interopRequireDefault(require("../../css/blocks/opacity-switch.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var OpacitySwitch = /*#__PURE__*/function (_ButtonSwitch) {
  (0, _inherits2["default"])(OpacitySwitch, _ButtonSwitch);

  var _super = _createSuper(OpacitySwitch);

  function OpacitySwitch() {
    (0, _classCallCheck2["default"])(this, OpacitySwitch);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(OpacitySwitch, [{
    key: "_declareDefaults",

    /*
      Method to decalre defaults.
      @private
      @overrides @ ButtonSwitch
    */
    value: function _declareDefaults() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(OpacitySwitch.prototype), "_declareDefaults", this).call(this);
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
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(OpacitySwitch.prototype), "_render", this).call(this);
      this.el.classList.add(_opacitySwitch["default"]['opacity-switch']);
      var p = this._props,
          icon = new _icon["default"]({
        parent: this.el,
        shape: p.icon,
        size: p.iconSize,
        className: _opacitySwitch["default"]['icon'],
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
      this.el.classList[method](_opacitySwitch["default"]['is-on']);
    }
  }]);
  return OpacitySwitch;
}(_buttonSwitch["default"]);

var _default = OpacitySwitch;
exports["default"] = _default;