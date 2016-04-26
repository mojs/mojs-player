'use strict';

exports.__esModule = true;

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('css/blocks/button-switch.postcss.css');
var CLASSES = require('css/blocks/button-switch.postcss.css.json');

var ButtonSwitch = function (_Button) {
  _inherits(ButtonSwitch, _Button);

  function ButtonSwitch() {
    _classCallCheck(this, ButtonSwitch);

    return _possibleConstructorReturn(this, _Button.apply(this, arguments));
  }

  /*
    Method to declare _defaults.
    @private
    @overrides @ Button
  */

  ButtonSwitch.prototype._declareDefaults = function _declareDefaults() {
    _Button.prototype._declareDefaults.call(this);
    this._defaults.isOn = false;
    this._defaults.onStateChange = null;
  };
  /*
    Method to set the state to `true`.
    @public
    @param {Boolean} If should invoke callback.
  */


  ButtonSwitch.prototype.on = function on() {
    var isCallback = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    // set to true because the next step is toggle
    this._props.isOn = true;
    this._reactOnStateChange(isCallback);
  };
  /*
    Method to set the state to `false`.
    @public
    @param {Boolean} If should invoke callback.
  */


  ButtonSwitch.prototype.off = function off() {
    var isCallback = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    // set to true because the next step is toggle
    this._props.isOn = false;
    this._reactOnStateChange(isCallback);
  };

  // ---

  /*
    Initial render method.
    @private
    @overrides @ Button
    @returns this
  */


  ButtonSwitch.prototype._render = function _render() {
    _Button.prototype._render.call(this);
    this.el.classList.add(CLASSES['button-switch']);
    this._setState();
    this._reactOnStateChange();
  };
  /*
    Method to invoke onPointerUp callback if excist.
    @private
    @overrides @ Button
    @param {Object} Original event object.
  */


  ButtonSwitch.prototype._pointerUp = function _pointerUp(e) {
    this._changeState();
    _Button.prototype._pointerUp.call(this, e);
  };
  /*
    Method to switch icons.
    @private
  */


  ButtonSwitch.prototype._changeState = function _changeState() {
    this._props.isOn = !this._props.isOn;
    this._reactOnStateChange();
  };
  /*
    Method to react on state change.
    @private
    @param {Boolean} If should invoke callback.
  */


  ButtonSwitch.prototype._reactOnStateChange = function _reactOnStateChange() {
    var isCallback = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    if (isCallback) {
      this._callIfFunction(this._props.onStateChange, this._props.isOn);
    }
    this._setState();
  };
  /*
    Method that have been called on switch state change.
    @private
  */


  ButtonSwitch.prototype._setState = function _setState() {
    // console.log('change');
  };

  return ButtonSwitch;
}(_button2.default);

exports.default = ButtonSwitch;