'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _buttonSwitch = require('./button-switch');

var _buttonSwitch2 = _interopRequireDefault(_buttonSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../css/blocks/opacity-switch.postcss.css');
var CLASSES = require('../../css/blocks/opacity-switch.postcss.css.json');

var OpacitySwitch = function (_ButtonSwitch) {
  (0, _inherits3.default)(OpacitySwitch, _ButtonSwitch);

  function OpacitySwitch() {
    (0, _classCallCheck3.default)(this, OpacitySwitch);
    return (0, _possibleConstructorReturn3.default)(this, _ButtonSwitch.apply(this, arguments));
  }

  /*
    Method to decalre defaults.
    @private
    @overrides @ ButtonSwitch
  */

  OpacitySwitch.prototype._declareDefaults = function _declareDefaults() {
    _ButtonSwitch.prototype._declareDefaults.call(this);
    this._defaults.icon = '';
    this._defaults.iconSize = '';
  };
  /*
    Method to render the module.
    @private
    @overrides @ ButtonSwitch
  */


  OpacitySwitch.prototype._render = function _render() {
    _ButtonSwitch.prototype._render.call(this);
    this.el.classList.add(CLASSES['opacity-switch']);

    var p = this._props,
        icon = new _icon2.default({
      parent: this.el,
      shape: p.icon,
      size: p.iconSize,
      className: CLASSES['icon'],
      prefix: p.prefix
    });
    this.el.appendChild(icon.el);
  };
  /*
    Method to react to switch state change.
    @private
    @overrides @ ButtonSwitch
  */


  OpacitySwitch.prototype._setState = function _setState() {
    var method = this._props.isOn ? 'add' : 'remove';
    this.el.classList[method](CLASSES['is-on']);
  };

  return OpacitySwitch;
}(_buttonSwitch2.default);

exports.default = OpacitySwitch;