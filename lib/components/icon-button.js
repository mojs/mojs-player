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

var _button = _interopRequireDefault(require("./button.js"));

var _iconButton = _interopRequireDefault(require("../../css/blocks/icon-button.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var IconButton = /*#__PURE__*/function (_Button) {
  (0, _inherits2["default"])(IconButton, _Button);

  var _super = _createSuper(IconButton);

  function IconButton() {
    (0, _classCallCheck2["default"])(this, IconButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(IconButton, [{
    key: "_declareDefaults",

    /*
      Method to declare _defaults.
      @private
      @overrides @ Button
    */
    value: function _declareDefaults() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(IconButton.prototype), "_declareDefaults", this).call(this);
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
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(IconButton.prototype), "_render", this).call(this);
      var p = this._props,
          className = 'icon-button';
      this.el.classList.add(_iconButton["default"][className]);
      var icon = new _icon["default"]({
        shape: p.icon,
        parent: this.el,
        className: [_iconButton["default"]["icon"], p.iconClass],
        prefix: p.prefix
      });
    }
  }]);
  return IconButton;
}(_button["default"]);

var _default = IconButton;
exports["default"] = _default;