'use strict';

exports.__esModule = true;

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../../css/blocks/icon-button.postcss.css');
var CLASSES = require('../../css/blocks/icon-button.postcss.css.json');

var IconButton = function (_Button) {
  _inherits(IconButton, _Button);

  function IconButton() {
    _classCallCheck(this, IconButton);

    return _possibleConstructorReturn(this, _Button.apply(this, arguments));
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