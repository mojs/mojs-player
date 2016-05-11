'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _iconFork = require('./icon-fork');

var _iconFork2 = _interopRequireDefault(_iconFork);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../css/blocks/play-button.postcss.css');
var CLASSES = require('../../css/blocks/play-button.postcss.css.json');
// PLAYER_BTN_CLASSES = require('css/blocks/player-button.postcss.css.json');

var PlayButton = function (_IconFork) {
  (0, _inherits3.default)(PlayButton, _IconFork);

  function PlayButton() {
    (0, _classCallCheck3.default)(this, PlayButton);
    return (0, _possibleConstructorReturn3.default)(this, _IconFork.apply(this, arguments));
  }

  /*
    Method to declare defaults on the module.
    @private
    @overrides @ ButtonSwitch
  */

  PlayButton.prototype._declareDefaults = function _declareDefaults() {
    _IconFork.prototype._declareDefaults.call(this);
    this._defaults.icon1 = 'pause';
    this._defaults.icon2 = 'play';
    this._defaults.title = 'play/pause (alt + p)';
  };
  /*
    Method to render the module.
    @private
  */


  PlayButton.prototype._render = function _render() {
    _IconFork.prototype._render.call(this);
    this._addClass(this.el, CLASSES['play-button']);
  };

  return PlayButton;
}(_iconFork2.default);

exports.default = PlayButton;