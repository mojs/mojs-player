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

// import HammerJS from 'hammerjs'

require('../../css/blocks/icon-fork.postcss.css');
var CLASSES = require('../../css/blocks/icon-fork.postcss.css.json');

var IconFork = function (_ButtonSwitch) {
  (0, _inherits3.default)(IconFork, _ButtonSwitch);

  function IconFork() {
    (0, _classCallCheck3.default)(this, IconFork);
    return (0, _possibleConstructorReturn3.default)(this, _ButtonSwitch.apply(this, arguments));
  }

  /*
    Initial render method.
    @private
    @overrides @ Icon
    @returns this
  */

  IconFork.prototype._render = function _render() {
    _ButtonSwitch.prototype._render.call(this);
    this.el.classList.add(CLASSES['icon-fork']);
    var p = this._props,
        prefix = p.prefix,
        parent = this.el,
        className = CLASSES.icon;

    this.icon1 = new _icon2.default({ shape: p.icon1, prefix: prefix, parent: parent, className: className });
    this.icon2 = new _icon2.default({ shape: p.icon2, prefix: prefix, parent: parent, className: className });
  };
  /*
    Method that should be called on state change.
    @private
    @override @ IconSwitch
  */


  IconFork.prototype._setState = function _setState() {
    var p = this._props,
        classList = this.el.classList,
        method = p.isOn ? 'add' : 'remove';

    classList[method](CLASSES['is-on']);
  };

  return IconFork;
}(_buttonSwitch2.default);

exports.default = IconFork;