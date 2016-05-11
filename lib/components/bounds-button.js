'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _repeatButton = require('./repeat-button');

var _repeatButton2 = _interopRequireDefault(_repeatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require('css/blocks/repeat-button.postcss.css');
// let CLASSES = require('css/blocks/repeat-button.postcss.css.json');

var BoundsButton = function (_RepeatButton) {
  (0, _inherits3.default)(BoundsButton, _RepeatButton);

  function BoundsButton() {
    (0, _classCallCheck3.default)(this, BoundsButton);
    return (0, _possibleConstructorReturn3.default)(this, _RepeatButton.apply(this, arguments));
  }

  /*
    Method to declare defaults.
    @private
    @overrides @ RepeatButton
  */

  BoundsButton.prototype._declareDefaults = function _declareDefaults() {
    _RepeatButton.prototype._declareDefaults.call(this);
    this._defaults.icon = 'bounds';
    this._defaults.title = 'progress bounds (alt + b)';
  };

  return BoundsButton;
}(_repeatButton2.default);

exports.default = BoundsButton;