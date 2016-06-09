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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../css/blocks/label-button.postcss.css');
var CLASSES = require('../../css/blocks/label-button.postcss.css.json');

var LabelButton = function (_ButtonSwitch) {
  (0, _inherits3.default)(LabelButton, _ButtonSwitch);

  function LabelButton() {
    (0, _classCallCheck3.default)(this, LabelButton);
    return (0, _possibleConstructorReturn3.default)(this, _ButtonSwitch.apply(this, arguments));
  }

  /*
    Method to declare defaults.
    @private
    @overrides @ OpacitySwitch
  */

  LabelButton.prototype._declareDefaults = function _declareDefaults() {
    _ButtonSwitch.prototype._declareDefaults.call(this);
    this._defaults.title = 'speed (reset: alt + 1)';
  };
  /*
    Method to populate the label with progress text.
    @public
    @param {String} Text to set.
  */


  LabelButton.prototype.setLabelText = function setLabelText(text) {
    this.label.innerHTML = text;
  };

  /*
    ^  PUBLIC  ^
    v PPRIVATE v
  */

  /*
    Initial render method.
    @private
    @overrides @ Button
    @returns this
  */


  LabelButton.prototype._render = function _render() {
    _ButtonSwitch.prototype._render.call(this);
    this._addClass(this.el, CLASSES['label-button']);
    this._addLabel();
    // this.setLabelText( this._props.progress );
  };
  /*
    Method to add label to the `el`.
    @private
  */


  LabelButton.prototype._addLabel = function _addLabel() {
    this.label = this._createElement('div');
    this.label.classList.add(CLASSES['label-button__label']);
    this.el.appendChild(this.label);
  };

  return LabelButton;
}(_buttonSwitch2.default);

exports.default = LabelButton;