'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _opacitySwitch = require('./opacity-switch');

var _opacitySwitch2 = _interopRequireDefault(_opacitySwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../css/blocks/repeat-button.postcss.css');
var CLASSES = require('../../css/blocks/repeat-button.postcss.css.json');

var RepeatButton = function (_OpacitySwitch) {
  (0, _inherits3.default)(RepeatButton, _OpacitySwitch);

  function RepeatButton() {
    (0, _classCallCheck3.default)(this, RepeatButton);
    return (0, _possibleConstructorReturn3.default)(this, _OpacitySwitch.apply(this, arguments));
  }

  /*
    Method to declare defaults.
    @private
    @overrides @ OpacitySwitch
  */

  RepeatButton.prototype._declareDefaults = function _declareDefaults() {
    _OpacitySwitch.prototype._declareDefaults.call(this);
    this._defaults.icon = 'repeat';
    this._defaults.iconSize = 'x2';
    this._defaults.title = 'repeat (alt + r)';
  };
  /*
    Initial render method.
    @private
    @overrides @ Button
    @returns this
  */


  RepeatButton.prototype._render = function _render() {
    _OpacitySwitch.prototype._render.call(this);
    this._addClass(this.el, CLASSES['repeat-button']);
  };

  return RepeatButton;
}(_opacitySwitch2.default);

exports.default = RepeatButton;