'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _module = require('./module');

var _module2 = _interopRequireDefault(_module);

var _handle = require('./handle');

var _handle2 = _interopRequireDefault(_handle);

var _track = require('./track');

var _track2 = _interopRequireDefault(_track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../css/blocks/slider.postcss.css');
var CLASSES = require('../../css/blocks/slider.postcss.css.json');

var Slider = function (_Module) {
  (0, _inherits3.default)(Slider, _Module);

  function Slider() {
    (0, _classCallCheck3.default)(this, Slider);
    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
  }

  /*
    Method to declare _defaults.
    @private
    @overrides @ Module
  */

  Slider.prototype._declareDefaults = function _declareDefaults() {
    this._defaults = {
      className: '',
      parent: document.body,
      isBound: false,
      isInversed: false,
      isRipple: true,
      isProgress: true,
      onProgress: null,
      onSeekStart: null,
      onSeekEnd: null,
      direction: 'x',
      snapPoint: 0,
      snapStrength: 0
    };
  };
  /*
    Method to set slider progress.
    @public
    @param {Number} Progress to set.
    @returns this.
  */


  Slider.prototype.setProgress = function setProgress(progress) {
    this.handle.setProgress(progress);
    this.track.setProgress(progress);
    return this;
  };
  /*
    Method to set bounds of progress.
    @public
    @param {Number} Min bound to set [0...1].
    @param {Number} Max bound to set [0...1].
    @returns this.
  */


  Slider.prototype.setBounds = function setBounds(min, max) {
    this.handle.setBounds(min, max);
    this.track.setBounds(min, max);
    return this;
  };
  /*
    Method to set min bound of progress.
    @public
    @param {Number} Min bound to set [0...1].
    @returns this.
  */


  Slider.prototype.setMinBound = function setMinBound(min) {
    this.handle.setMinBound(min);
    this.track.setMinBound(min);
    return this;
  };
  /*
    Method to set max bound of progress.
    @public
    @param {Number} Max bound to set [0...1].
    @returns this.
  */


  Slider.prototype.setMaxBound = function setMaxBound(max) {
    this.handle.setMaxBound(max);
    this.track.setMaxBound(max);
    return this;
  };
  /*
    Method to hide elements.
    @public
  */


  Slider.prototype.show = function show() {
    this.track.el.style.display = 'block';
    this.handle.el.style.display = 'block';
  };
  /*
    Method to hide elements.
    @public
  */


  Slider.prototype.hide = function hide() {
    this.track.el.style.display = 'none';
    this.handle.el.style.display = 'none';
  };
  /*
    Method to render the component.
    @private
    @overrides @ Module
  */


  Slider.prototype._render = function _render() {
    var p = this._props;

    if (!p.isBound) {
      var el = this._createElement('div'),
          classList = el.classList;
      this.el = el;

      this.inner = this._createElement('div');
      this.inner.classList.add(CLASSES['slider__inner']);
      this.el.appendChild(this.inner);

      classList.add(CLASSES.slider);
      p.direction === 'y' && classList.add(CLASSES['is-y']);
      p.className && classList.add(p.className);
      p.parent.appendChild(el);
    }

    var rootEl = !p.isBound ? this.inner : p.parent;

    this.track = new _track2.default({
      className: CLASSES.track,
      onProgress: this._onTrackProgress.bind(this),
      onSeekStart: p.onSeekStart,
      onSeekEnd: p.onSeekEnd,
      isBound: p.isBound,
      isInversed: p.isInversed,
      isRipple: p.isRipple,
      isProgress: p.isProgress,
      parent: rootEl,
      direction: p.direction,
      snapPoint: p.snapPoint,
      snapStrength: p.snapStrength
    });
    rootEl.appendChild(this.track.el);

    var handleClass = [CLASSES.handle];
    if (!p.isBound) {
      handleClass.push(CLASSES['progress-handle']);
    }

    this.handle = new _handle2.default({
      className: handleClass,
      onProgress: this._onHandleProgress.bind(this),
      onSeekStart: p.onSeekStart,
      onSeekEnd: p.onSeekEnd,
      isBound: p.isBound,
      isInversed: p.isInversed,
      parent: rootEl,
      direction: p.direction,
      snapPoint: p.snapPoint,
      snapStrength: p.snapStrength
    });
    rootEl.appendChild(this.handle.el);
  };
  /*
    Method that is invoked on handle progress change.
    @private
    @param {Number} Progress [0...1].
  */


  Slider.prototype._onHandleProgress = function _onHandleProgress(p) {
    this.track.setProgress(p, false);
    this._onProgress(p);
  };
  /*
    Method that is invoked on track progress change.
    @private
    @param {Number} Progress [0...1].
  */


  Slider.prototype._onTrackProgress = function _onTrackProgress(p) {
    this.handle.setProgress(p, false);
    this._onProgress(p);
  };
  /*
    Method to call onProgress callback.
    @private
    @param {Number} Progress value [0...1].
  */


  Slider.prototype._onProgress = function _onProgress(progress) {
    var p = this._props;
    if (typeof p.onProgress === 'function' && this._progress !== progress) {
      this._progress = progress;
      p.onProgress.call(this, progress);
    }
  };

  return Slider;
}(_module2.default);

exports.default = Slider;