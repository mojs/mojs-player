"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _module = _interopRequireDefault(require("./module.js"));

var _labelButton = _interopRequireDefault(require("./label-button.js"));

var _slider = _interopRequireDefault(require("./slider.js"));

var _speedControl = _interopRequireDefault(require("../../css/blocks/speed-control.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SpeedControl = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(SpeedControl, _Module);

  var _super = _createSuper(SpeedControl);

  function SpeedControl() {
    (0, _classCallCheck2["default"])(this, SpeedControl);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SpeedControl, [{
    key: "_declareDefaults",

    /*
      Method to declare defaults for the module.
      @private
      @overrides @ Module
    */
    value: function _declareDefaults() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(SpeedControl.prototype), "_declareDefaults", this).call(this);
      this._defaults.isOn = false;
      this._defaults.speed = 1;
      this._defaults.progress = .5;
      this._defaults.onSpeedChange = null;
      this._defaults.onIsSpeed = null;
    }
    /*
      Method to reset speed to 1x.
      @public
      @returns this
    */

  }, {
    key: "reset",
    value: function reset() {
      this._onDoubleTap();
    }
    /*
      Method to decrease speed value.
      @public
      @param {Number} Value that the slider should be decreased by.
      @returns this.
    */

  }, {
    key: "decreaseSpeed",
    value: function decreaseSpeed() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.01;
      var p = this._props;
      p.progress -= amount;
      p.progress = p.progress < 0 ? 0 : p.progress;
      this.slider.setProgress(p.progress);
      return this;
    }
    /*
      Method to inclease speed value.
      @public
      @param {Number} Value that the slider should be increased by.
      @returns this.
    */

  }, {
    key: "increaseSpeed",
    value: function increaseSpeed() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.01;
      var p = this._props;
      p.progress += amount;
      p.progress = p.progress > 1 ? 1 : p.progress;
      this.slider.setProgress(p.progress);
      return this;
    }
    /*
      Initial render method.
      @private
      @overrides @ Module
    */

  }, {
    key: "_render",
    value: function _render() {
      var p = this._props,
          className = 'speed-control',
          slider = this._createElement('div'),
          sliderIn = this._createElement('div'),
          icon = this._createElement('div');

      this._addMainElement();

      this.el.classList.add(_speedControl["default"][className]); // places for child components

      slider.classList.add(_speedControl["default"]["".concat(className, "__slider")]); // sliderIn.classList.add( CLASSES[ `${ className }__slider-inner` ] );
      // slider.appendChild( sliderIn );

      this.el.appendChild(slider); // child components

      this.labelButton = new _labelButton["default"]({
        parent: this.el,
        isOn: p.isOn,
        className: _speedControl["default"]["".concat(className, "__icon")],
        onStateChange: this._onButtonStateChange.bind(this),
        onDoubleTap: this._onDoubleTap.bind(this)
      });
      this.slider = new _slider["default"]({
        parent: slider,
        isProgress: false,
        direction: 'y',
        onProgress: this._onSliderProgress.bind(this),
        snapPoint: .5,
        snapStrength: .05
      });
      this.slider.setProgress(this._speedToProgress(this._props.speed));
    }
    /*
      Method that is invoked on slider progress.
      @private
      @param {Number} Progress of the slider.
    */

  }, {
    key: "_onSliderProgress",
    value: function _onSliderProgress(p) {
      // progress should be at least 0.01
      p = Math.max(p, 0.0001);
      var props = this._props,
          args = [];

      this._callIfFunction(props.onSpeedChange, this._progressToSpeed(p), p);

      this.labelButton.setLabelText(this._progressToLabel(props.progress = p));
    }
    /*
      Method that is invoked on button state change.
      @private
      @param {Boolean} State of the button switch.
    */

  }, {
    key: "_onButtonStateChange",
    value: function _onButtonStateChange(isOn) {
      var method = isOn ? 'add' : 'remove';
      this.el.classList[method](_speedControl["default"]['is-on']);

      this._callIfFunction(this._props.onIsSpeed, isOn);
    }
    /*
      Method to recalc progress to label string.
      @private
      @param {Number} Progress [0...1].
      @returns {String} String for a label to set.
    */

  }, {
    key: "_progressToLabel",
    value: function _progressToLabel(progress) {
      var text = this._progressToSpeed(progress).toFixed(2),
          zeros = /\.+00$/;

      if (text.match(zeros)) {
        text = text.replace(zeros, '');
      }

      return "".concat(text, "x");
    }
    /*
      Method to recalc progress to speed.
      @private
      @param   {Number} Progress [0...1].
      @returns {Number} Speed [0...10].
    */

  }, {
    key: "_progressToSpeed",
    value: function _progressToSpeed(progress) {
      var speed = progress;

      if (progress < .5) {
        speed = 2 * progress;
      }

      if (progress === .5) {
        speed = 1;
      }

      if (progress > .5) {
        progress -= .5;
        speed = 1 + progress * 18; // console.log( speed/10, mojs.easing.cubic.out( speed/10 ) );
        // console.log( .5 + ( speed - 1 ) / 18 );
      }

      return speed;
    }
    /*
      Method to recalc progress to speed.
      @private
      @param   {Number} Progress [0...1].
      @returns {Number} Speed [0...10].
    */

  }, {
    key: "_speedToProgress",
    value: function _speedToProgress(speed) {
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
    }
    /*
      Method that is invoked on double button tap.
      @private
    */

  }, {
    key: "_onDoubleTap",
    value: function _onDoubleTap() {
      this.slider.setProgress(.5);
      this.labelButton.off();
    }
  }]);
  return SpeedControl;
}(_module["default"]);

var _default = SpeedControl;
exports["default"] = _default;