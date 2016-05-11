'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _handle = require('./handle');

var _handle2 = _interopRequireDefault(_handle);

var _hammerjs = require('hammerjs');

var _hammerjs2 = _interopRequireDefault(_hammerjs);

var _ripple = require('./ripple');

var _ripple2 = _interopRequireDefault(_ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../css/blocks/track.postcss.css');
var CLASSES = require('../../css/blocks/track.postcss.css.json');

var Track = function (_Handle) {
  (0, _inherits3.default)(Track, _Handle);

  function Track() {
    (0, _classCallCheck3.default)(this, Track);
    return (0, _possibleConstructorReturn3.default)(this, _Handle.apply(this, arguments));
  }

  /*
    Method to declare _defaults.
    @private
    @overrides @ Handle
  */

  Track.prototype._declareDefaults = function _declareDefaults() {
    _Handle.prototype._declareDefaults.call(this);
    this._defaults.isProgress = true;
    this._defaults.isRipple = true;
  };
  /*
    Method to render the component.
    @private
    @overrides @ Handle
  */


  Track.prototype._render = function _render() {
    _Handle.prototype._render.call(this);
    if (!this._props.isRipple) {
      return;
    }
    this.ripple = new _ripple2.default({
      withHold: false,
      className: CLASSES['track__ripple'],
      parent: this.el
    });
  };
  /*
    Method to apply shift to the DOMElement.
    @private
    @overrides @ Handle.
    @param {Number} Shift in pixels.
  */


  Track.prototype._applyShift = function _applyShift(shift) {
    if (!this._props.isProgress) {
      return;
    }
    if (this._props.isInversed) {
      shift = this._maxWidth - shift;
    }
    var transform = 'scaleX( ' + shift + ' )';
    this.trackProgressEl.style.transform = transform;
  };
  /*
    Method to add classes on `this.el`.
    @private
    @overrides @ Handle.
  */


  Track.prototype._addMainClasses = function _addMainClasses() {
    var p = this._props,
        classList = this.el.classList;

    classList.add(CLASSES.track);
    if (p.isInversed) {
      classList.add(CLASSES['is-inversed']);
    }
    if (p.isBound) {
      classList.add(CLASSES['is-bound']);
    }
    if (p.direction === 'y') {
      classList.add(CLASSES['is-y']);
    }
  };
  /*
    Method to add DOM elements on render.
    @private
  */


  Track.prototype._addElements = function _addElements() {
    var p = this._props;

    if (p.isProgress) {
      // progress track
      var trackP = document.createElement('div');
      trackP.classList.add('' + CLASSES['track__track-progress']);
      this.trackProgressEl = trackP;
      this.el.appendChild(trackP);
    }
    // track
    if (!p.isBound) {
      var track = document.createElement('div');
      track.classList.add('' + CLASSES.track__track);
      this.el.appendChild(track);
    }
  };
  /*
    Callback for pointer down on main el.
    @private
    @param {Object} Original event object.
    @overrides @ Handle
  */


  Track.prototype._pointerDown = function _pointerDown(e) {
    var p = this._props,
        x = p.direction === 'x' ? e.layerX : e.layerY;
    this._isPointerDown = true;

    if (p.direction === 'y') {
      x = this._maxWidth - e.layerY;
    }
    x = this._props.isInversed && x < 0 ? this._maxWidth + x : x;

    // if near the snap point - set it to the snap point
    var progress = this._shiftToProgress(x);
    progress = Math.abs(p.snapPoint - progress) < p.snapStrength ? p.snapPoint : progress;
    this.setProgress(progress);

    p.isRipple && this.ripple._hold(e);
    this._callIfFunction(p.onSeekStart, e);
  };

  return Track;
}(_handle2.default);

exports.default = Track;