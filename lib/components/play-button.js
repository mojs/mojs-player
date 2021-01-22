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

var _iconFork = _interopRequireDefault(require("./icon-fork.js"));

var _playButton = _interopRequireDefault(require("../../css/blocks/play-button.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PlayButton = /*#__PURE__*/function (_IconFork) {
  (0, _inherits2["default"])(PlayButton, _IconFork);

  var _super = _createSuper(PlayButton);

  function PlayButton() {
    (0, _classCallCheck2["default"])(this, PlayButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(PlayButton, [{
    key: "_declareDefaults",

    /*
      Method to declare defaults on the module.
      @private
      @overrides @ ButtonSwitch
    */
    value: function _declareDefaults() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(PlayButton.prototype), "_declareDefaults", this).call(this);
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
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(PlayButton.prototype), "_render", this).call(this);

      this._addClass(this.el, _playButton["default"]['play-button']);
    }
  }]);
  return PlayButton;
}(_iconFork["default"]);

var _default = PlayButton;
exports["default"] = _default;