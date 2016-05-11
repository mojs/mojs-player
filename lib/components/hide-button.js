'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _buttonSwitch = require('./button-switch');

var _buttonSwitch2 = _interopRequireDefault(_buttonSwitch);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../css/blocks/hide-button.postcss.css');
var CLASSES = require('../../css/blocks/hide-button.postcss.css.json'),
    className = 'hide-button';

var HideButton = function (_ButtonSwitch) {
  (0, _inherits3.default)(HideButton, _ButtonSwitch);

  function HideButton() {
    (0, _classCallCheck3.default)(this, HideButton);
    return (0, _possibleConstructorReturn3.default)(this, _ButtonSwitch.apply(this, arguments));
  }

  HideButton.prototype._declareDefaults = function _declareDefaults() {
    _ButtonSwitch.prototype._declareDefaults.call(this);
    this._defaults.title = 'hide (alt + h)';
  };
  /*
    Initial render method.
    @private
    @overrides @ Button
    @returns this
  */


  HideButton.prototype._render = function _render() {
    _ButtonSwitch.prototype._render.call(this);
    this.el.classList.add(CLASSES[className]);
    this._addIcon();
  };
  /*
    Method to add icon.
    @private
  */


  HideButton.prototype._addIcon = function _addIcon() {
    this.icon = new _icon2.default({
      parent: this.el,
      className: CLASSES[className + '__icon'],
      shape: 'hide',
      prefix: this._props.prefix
    });
  };
  /*
    Method that have been called on switch state change.
    @private
    @override @ ButtonSwitch
  */


  HideButton.prototype._setState = function _setState() {
    var method = this._props.isOn ? 'add' : 'remove';
    this.el.classList[method](CLASSES['is-hidden']);
  };

  return HideButton;
}(_buttonSwitch2.default);

exports.default = HideButton;