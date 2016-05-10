'use strict';

exports.__esModule = true;

var _buttonSwitch = require('./button-switch');

var _buttonSwitch2 = _interopRequireDefault(_buttonSwitch);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../../css/blocks/hide-button.postcss.css');
var CLASSES = require('../../css/blocks/hide-button.postcss.css.json'),
    className = 'hide-button';

var HideButton = function (_ButtonSwitch) {
  _inherits(HideButton, _ButtonSwitch);

  function HideButton() {
    _classCallCheck(this, HideButton);

    return _possibleConstructorReturn(this, _ButtonSwitch.apply(this, arguments));
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