'use strict';

exports.__esModule = true;

var _opacitySwitch = require('./opacity-switch');

var _opacitySwitch2 = _interopRequireDefault(_opacitySwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../../css/blocks/repeat-button.postcss.css');
var CLASSES = require('../../css/blocks/repeat-button.postcss.css.json');

var RepeatButton = function (_OpacitySwitch) {
  _inherits(RepeatButton, _OpacitySwitch);

  function RepeatButton() {
    _classCallCheck(this, RepeatButton);

    return _possibleConstructorReturn(this, _OpacitySwitch.apply(this, arguments));
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