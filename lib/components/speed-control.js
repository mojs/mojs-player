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

var _labelButton = require('./label-button');

var _labelButton2 = _interopRequireDefault(_labelButton);

var _slider = require('./slider');

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../css/blocks/speed-control.postcss.css');
var CLASSES = require('../../css/blocks/speed-control.postcss.css.json');

var SpeedControl = function (_Module) {
  (0, _inherits3.default)(SpeedControl, _Module);

  function SpeedControl() {
    (0, _classCallCheck3.default)(this, SpeedControl);
    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
  }

  /*
    Method to declare defaults for the module.
    @private
    @overrides @ Module
  */

  SpeedControl.prototype._declareDefaults = function _declareDefaults() {
    _Module.prototype._declareDefaults.call(this);
    this._defaults.isOn = false;
    this._defaults.speed = 1;
    this._defaults.progress = .5;
    this._defaults.onSpeedChange = null;
    this._defaults.onIsSpeed = null;
  };
  /*
    Method to reset speed to 1x.
    @public
    @returns this
  */


  SpeedControl.prototype.reset = function reset() {
    this._onDoubleTap();
  };
  /*
    Method to decrease speed value.
    @public
    @param {Number} Value that the slider should be decreased by.
    @returns this.
  */


  SpeedControl.prototype.decreaseSpeed = function decreaseSpeed() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0.01 : arguments[0];

    var p = this._props;
    p.progress -= amount;
    p.progress = p.progress < 0 ? 0 : p.progress;
    this.slider.setProgress(p.progress);
    return this;
  };
  /*
    Method to inclease speed value.
    @public
    @param {Number} Value that the slider should be increased by.
    @returns this.
  */


  SpeedControl.prototype.increaseSpeed = function increaseSpeed() {
    var amount = arguments.length <= 0 || arguments[0] === undefined ? 0.01 : arguments[0];

    var p = this._props;
    p.progress += amount;
    p.progress = p.progress > 1 ? 1 : p.progress;
    this.slider.setProgress(p.progress);
    return this;
  };
  /*
    Initial render method.
    @private
    @overrides @ Module
  */


  SpeedControl.prototype._render = function _render() {
    var p = this._props,
        className = 'speed-control',
        slider = this._createElement('div'),
        sliderIn = this._createElement('div'),
        icon = this._createElement('div');

    this._addMainElement();
    this.el.classList.add(CLASSES[className]);
    // places for child components
    slider.classList.add(CLASSES[className + '__slider']);
    // sliderIn.classList.add( CLASSES[ `${ className }__slider-inner` ] );
    // slider.appendChild( sliderIn );
    this.el.appendChild(slider);
    // child components
    this.labelButton = new _labelButton2.default({
      parent: this.el,
      isOn: p.isOn,
      className: CLASSES[className + '__icon'],
      onStateChange: this._onButtonStateChange.bind(this),
      onDoubleTap: this._onDoubleTap.bind(this)
    });
    this.slider = new _slider2.default({
      parent: slider,
      isProgress: false,
      direction: 'y',
      onProgress: this._onSliderProgress.bind(this),
      snapPoint: .5,
      snapStrength: .05
    });

    this.slider.setProgress(this._speedToProgress(this._props.speed));
  };
  /*
    Method that is invoked on slider progress.
    @private
    @param {Number} Progress of the slider.
  */


  SpeedControl.prototype._onSliderProgress = function _onSliderProgress(p) {
    // progress should be at least 0.01
    p = Math.max(p, 0.0001);

    var props = this._props,
        args = [];

    this._callIfFunction(props.onSpeedChange, this._progressToSpeed(p), p);
    this.labelButton.setLabelText(this._progressToLabel(props.progress = p));
  };
  /*
    Method that is invoked on button state change.
    @private
    @param {Boolean} State of the button switch.
  */


  SpeedControl.prototype._onButtonStateChange = function _onButtonStateChange(isOn) {
    var method = isOn ? 'add' : 'remove';
    this.el.classList[method](CLASSES['is-on']);
    this._callIfFunction(this._props.onIsSpeed, isOn);
  };
  /*
    Method to recalc progress to label string.
    @private
    @param {Number} Progress [0...1].
    @returns {String} String for a label to set.
  */


  SpeedControl.prototype._progressToLabel = function _progressToLabel(progress) {
    var text = this._progressToSpeed(progress).toFixed(2),
        zeros = /\.+00$/;

    if (text.match(zeros)) {
      text = text.replace(zeros, '');
    }

    return text + 'x';
  };
  /*
    Method to recalc progress to speed.
    @private
    @param   {Number} Progress [0...1].
    @returns {Number} Speed [0...10].
  */


  SpeedControl.prototype._progressToSpeed = function _progressToSpeed(progress) {
    var speed = progress;
    if (progress < .5) {
      speed = 2 * progress;
    }
    if (progress === .5) {
      speed = 1;
    }
    if (progress > .5) {
      progress -= .5;
      speed = 1 + progress * 18;
      // console.log( speed/10, mojs.easing.cubic.out( speed/10 ) );
      // console.log( .5 + ( speed - 1 ) / 18 );
    }
    return speed;
  };
  /*
    Method to recalc progress to speed.
    @private
    @param   {Number} Progress [0...1].
    @returns {Number} Speed [0...10].
  */


  SpeedControl.prototype._speedToProgress = function _speedToProgress(speed) {
    var progress = speed;
    if (speed < 1) {
      progress = speed / 2;
    }
    if (speed === 1) {
      progress = .5;
    }
    if (speed > 1) {
      progress = .5 + (speed - 1) / 18;
    }
    return progress;
  };
  /*
    Method that is invoked on double button tap.
    @private
  */


  SpeedControl.prototype._onDoubleTap = function _onDoubleTap() {
    this.slider.setProgress(.5);
    this.labelButton.off();
  };

  return SpeedControl;
}(_module2.default);

exports.default = SpeedControl;