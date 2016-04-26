'use strict';

exports.__esModule = true;

var _iconButton = require('./icon-button');

var _iconButton2 = _interopRequireDefault(_iconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('css/blocks/stop-button.postcss.css');
var CLASSES = require('css/blocks/stop-button.postcss.css.json');

var StopButton = function (_IconButton) {
  _inherits(StopButton, _IconButton);

  function StopButton() {
    _classCallCheck(this, StopButton);

    return _possibleConstructorReturn(this, _IconButton.apply(this, arguments));
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