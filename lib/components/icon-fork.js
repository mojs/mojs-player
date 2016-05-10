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

// import HammerJS from 'hammerjs'

require('../../css/blocks/icon-fork.postcss.css');
var CLASSES = require('../../css/blocks/icon-fork.postcss.css.json');

var IconFork = function (_ButtonSwitch) {
  _inherits(IconFork, _ButtonSwitch);

  function IconFork() {
    _classCallCheck(this, IconFork);

    return _possibleConstructorReturn(this, _ButtonSwitch.apply(this, arguments));
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