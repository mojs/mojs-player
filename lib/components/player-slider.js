'use strict';

exports.__esModule = true;

var _slider = require('./slider');

var _slider2 = _interopRequireDefault(_slider);

var _module = require('./module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('css/blocks/player-slider.postcss.css');
var CLASSES = require('css/blocks/player-slider.postcss.css.json');
var SLIDER_CLASSES = require('css/blocks/slider.postcss.css.json');

var PlayerSlider = function (_Module) {
  _inherits(PlayerSlider, _Module);

  function PlayerSlider() {
    _classCallCheck(this, PlayerSlider);

    return _possibleConstructorReturn(this, _Module.apply(this, arguments));
  }

  /*
    Method to declare _defaults.
    @private
    @overrides @ Module
  */

  PlayerSlider.prototype._declareDefaults = function _declareDefaults() {
    this._defaults = {
      className: CLASSES['player-slider'],
      parent: document.body,
      progress: 0,
      leftProgress: 0,
      rightProgress: 1,
      isBounds: false,
      onLeftProgress: null,
      onProgress: null,
      onRightProgress: null,
      onSeekStart: null,
      onSeekEnd: null
    };
  };
  /*
    Method to disable bounds.
    @public
    @returns this.
  */


  PlayerSlider.prototype.disableBounds = function disableBounds() {
    this.track.setBounds(0, 1);
    this.rightBound.hide();
    this.leftBound.hide();
    return this;
  };
  /*
    Method to enable bounds.
    @public
    @returns this.
  */


  PlayerSlider.prototype.enableBounds = function enableBounds() {
    var p = this._props;
    this.track.setBounds(p.leftProgress, p.rightProgress);
    this.rightBound.show();
    this.leftBound.show();
    return this;
  };
  /*
    Method to set progress of the track.
    @public
    @param {Number} Progress to set [0...1].
    @returns this.
  */


  PlayerSlider.prototype.setTrackProgress = function setTrackProgress(p) {
    this.track.setProgress(p);
    return this;
  };
  /*
    Method to decrease progress value.
    @public
    @param {Number} Value that the slider should be decreased by.
    @returns this.
  */


  PlayerSlider.prototype.decreaseProgress = function decreaseProgress() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0.01 : arguments[0];

    var progress = this.track._progress;
    progress -= amount;
    progress = progress < 0 ? 0 : progress;
    this.setTrackProgress(progress);
    return this;
  };
  /*
    Method to inclease progress value.
    @public
    @param {Number} Value that the slider should be increased by.
    @returns this.
  */


  PlayerSlider.prototype.increaseProgress = function increaseProgress() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0.01 : arguments[0];

    var progress = this.track._progress;
    progress += amount;
    progress = progress > 1 ? 1 : progress;
    this.setTrackProgress(progress);
    return this;
  };
  /*
    Initial render method.
    @private
    @overrides @ Module
    @returns this
  */


  PlayerSlider.prototype._render = function _render() {
    var p = this._props;

    this._addMainElement();
    this.el.classList.add(SLIDER_CLASSES.slider);

    this.leftBound = new _slider2.default({
      isBound: true,
      parent: this.el,
      isRipple: false,
      onProgress: this._onLeftBoundProgress.bind(this),
      onSeekStart: p.onSeekStart,
      onSeekEnd: p.onSeekEnd
    });

    this.track = new _slider2.default({
      parent: this.el,
      className: CLASSES.slider,
      onProgress: this._onTrackProgress.bind(this),
      onSeekStart: p.onSeekStart,
      onSeekEnd: p.onSeekEnd
    });
    this.rightBound = new _slider2.default({
      isBound: true,
      parent: this.el,
      isRipple: false,
      isInversed: true,
      onProgress: this._onRightBoundProgress.bind(this),
      onSeekStart: p.onSeekStart,
      onSeekEnd: p.onSeekEnd
    });

    this.rightBound.setProgress(p.rightProgress);
    this.track.setProgress(p.progress);
    this.leftBound.setProgress(p.leftProgress);

    p.parent.appendChild(this.el);
  };
  /*
    Method that should be called on track update.
    @private
    @param {Number} Track progress value [0...1].
  */


  PlayerSlider.prototype._onTrackProgress = function _onTrackProgress(p) {
    this._callIfFunction(this._props.onProgress, p);
  };
  /*
    Method that should be called on left bound update.
    @private
    @param {Number} Track progress value [0...1].
  */


  PlayerSlider.prototype._onLeftBoundProgress = function _onLeftBoundProgress(p) {
    if (!this._props.isBounds) {
      return;
    }
    this._props.leftProgress = p;
    this.track.setMinBound(p);
    this.rightBound.setMinBound(p);
    this._callIfFunction(this._props.onLeftProgress, p);
  };
  /*
    Method that should be called on right bound update.
    @private
    @param {Number} Track progress value [0...1].
  */


  PlayerSlider.prototype._onRightBoundProgress = function _onRightBoundProgress(p) {
    if (!this._props.isBounds) {
      return;
    }
    this._props.rightProgress = p;
    this.track.setMaxBound(p);
    this.leftBound.setMaxBound(p);
    this._callIfFunction(this._props.onRightProgress, p);
  };

  return PlayerSlider;
}(_module2.default);

exports.default = PlayerSlider;