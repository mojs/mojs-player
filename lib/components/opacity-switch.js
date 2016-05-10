'use strict';

exports.__esModule = true;

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _buttonSwitch = require('./button-switch');

var _buttonSwitch2 = _interopRequireDefault(_buttonSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../../css/blocks/opacity-switch.postcss.css');
var CLASSES = require('../../css/blocks/opacity-switch.postcss.css.json');

var OpacitySwitch = function (_ButtonSwitch) {
  _inherits(OpacitySwitch, _ButtonSwitch);

  function OpacitySwitch() {
    _classCallCheck(this, OpacitySwitch);

    return _possibleConstructorReturn(this, _ButtonSwitch.apply(this, arguments));
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