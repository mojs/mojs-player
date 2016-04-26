'use strict';

exports.__esModule = true;

var _iconFork = require('./icon-fork');

var _iconFork2 = _interopRequireDefault(_iconFork);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('css/blocks/play-button.postcss.css');
var CLASSES = require('css/blocks/play-button.postcss.css.json');
// PLAYER_BTN_CLASSES = require('css/blocks/player-button.postcss.css.json');

var PlayButton = function (_IconFork) {
  _inherits(PlayButton, _IconFork);

  function PlayButton() {
    _classCallCheck(this, PlayButton);

    return _possibleConstructorReturn(this, _IconFork.apply(this, arguments));
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