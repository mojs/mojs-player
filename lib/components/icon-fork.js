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

var _iconFork = _interopRequireDefault(require("../../css/blocks/icon-fork.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var IconFork = /*#__PURE__*/function (_ButtonSwitch) {
  (0, _inherits2["default"])(IconFork, _ButtonSwitch);

  var _super = _createSuper(IconFork);

  function IconFork() {
    (0, _classCallCheck2["default"])(this, IconFork);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(IconFork, [{
    key: "_render",

    /*
      Initial render method.
      @private
      @overrides @ Icon
      @returns this
    */
    value: function _render() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(IconFork.prototype), "_render", this).call(this);
      this.el.classList.add(_iconFork["default"]['icon-fork']);
      var p = this._props,
          prefix = p.prefix,
          parent = this.el,
          className = _iconFork["default"].icon;
      this.icon1 = new _icon["default"]({
        shape: p.icon1,
        prefix: prefix,
        parent: parent,
        className: className
      });
      this.icon2 = new _icon["default"]({
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
      classList[method](_iconFork["default"]['is-on']);
    }
  }]);
  return IconFork;
}(_buttonSwitch["default"]);

var _default = IconFork;
exports["default"] = _default;