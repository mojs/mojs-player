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

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../css/blocks/icon-button.postcss.css');
var CLASSES = require('../../css/blocks/icon-button.postcss.css.json');

var IconButton = function (_Button) {
  (0, _inherits3.default)(IconButton, _Button);

  function IconButton() {
    (0, _classCallCheck3.default)(this, IconButton);
    return (0, _possibleConstructorReturn3.default)(this, _Button.apply(this, arguments));
  }

  /*
    Method to declare _defaults.
    @private
    @overrides @ Button
  */

  IconButton.prototype._declareDefaults = function _declareDefaults() {
    _Button.prototype._declareDefaults.call(this);
    this._defaults.icon = '';
    this._defaults.iconClass = '';
  };
  /*
    Initial render method.
    @private
    @overrides @ Button
    @returns this
  */


  IconButton.prototype._render = function _render() {
    _Button.prototype._render.call(this);
    var p = this._props,
        className = 'icon-button';
    this.el.classList.add(CLASSES[className]);

    var icon = new _icon2.default({
      shape: p.icon,
      parent: this.el,
      className: [CLASSES['icon'], p.iconClass],
      prefix: p.prefix
    });
  };

  return IconButton;
}(_button2.default);

exports.default = IconButton;