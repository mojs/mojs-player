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

var _labelButton = _interopRequireDefault(require("../../css/blocks/label-button.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var LabelButton = /*#__PURE__*/function (_ButtonSwitch) {
  (0, _inherits2["default"])(LabelButton, _ButtonSwitch);

  var _super = _createSuper(LabelButton);

  function LabelButton() {
    (0, _classCallCheck2["default"])(this, LabelButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LabelButton, [{
    key: "_declareDefaults",

    /*
      Method to declare defaults.
      @private
      @overrides @ OpacitySwitch
    */
    value: function _declareDefaults() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(LabelButton.prototype), "_declareDefaults", this).call(this);
      this._defaults.title = 'speed (reset: alt + 1)';
    }
    /*
      Method to populate the label with progress text.
      @public
      @param {String} Text to set.
    */

  }, {
    key: "setLabelText",
    value: function setLabelText(text) {
      this.label.innerHTML = text;
    }
    /*
      ^  PUBLIC  ^
      v PPRIVATE v
    */

    /*
      Initial render method.
      @private
      @overrides @ Button
      @returns this
    */

  }, {
    key: "_render",
    value: function _render() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(LabelButton.prototype), "_render", this).call(this);

      this._addClass(this.el, _labelButton["default"]['label-button']);

      this._addLabel(); // this.setLabelText( this._props.progress );

    }
    /*
      Method to add label to the `el`.
      @private
    */

  }, {
    key: "_addLabel",
    value: function _addLabel() {
      this.label = this._createElement('div');
      this.label.classList.add(_labelButton["default"]["label-button__label"]);
      this.el.appendChild(this.label);
    }
  }]);
  return LabelButton;
}(_buttonSwitch["default"]);

var _default = LabelButton;
exports["default"] = _default;