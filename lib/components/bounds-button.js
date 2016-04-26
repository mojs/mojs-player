'use strict';

exports.__esModule = true;

var _repeatButton = require('./repeat-button');

var _repeatButton2 = _interopRequireDefault(_repeatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('css/blocks/repeat-button.postcss.css');
// let CLASSES = require('css/blocks/repeat-button.postcss.css.json');

var BoundsButton = function (_RepeatButton) {
  _inherits(BoundsButton, _RepeatButton);

  function BoundsButton() {
    _classCallCheck(this, BoundsButton);

    return _possibleConstructorReturn(this, _RepeatButton.apply(this, arguments));
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