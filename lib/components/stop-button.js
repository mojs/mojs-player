'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _iconButton = require('./icon-button');

var _iconButton2 = _interopRequireDefault(_iconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../css/blocks/stop-button.postcss.css');
var CLASSES = require('../../css/blocks/stop-button.postcss.css.json');

var StopButton = function (_IconButton) {
  (0, _inherits3.default)(StopButton, _IconButton);

  function StopButton() {
    (0, _classCallCheck3.default)(this, StopButton);
    return (0, _possibleConstructorReturn3.default)(this, _IconButton.apply(this, arguments));
  }

  StopButton.prototype._declareDefaults = function _declareDefaults() {
    _IconButton.prototype._declareDefaults.call(this);
    this._defaults.icon = 'stop';
    this._defaults.title = 'stop (alt + s)';
  };
  /*
    Initial render method.
    @private
    @overrides @ Button
    @returns this
  */


  StopButton.prototype._render = function _render() {
    _IconButton.prototype._render.call(this);
    this._addClass(this.el, CLASSES['stop-button']);
  };

  return StopButton;
}(_iconButton2.default);

exports.default = StopButton;