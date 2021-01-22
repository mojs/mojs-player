"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _slider = _interopRequireDefault(require("./slider.js"));

var _module = _interopRequireDefault(require("./module.js"));

var _playerSlider = _interopRequireDefault(require("../../css/blocks/player-slider.pcss"));

var _slider2 = _interopRequireDefault(require("../../css/blocks/slider.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PlayerSlider = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(PlayerSlider, _Module);

  var _super = _createSuper(PlayerSlider);

  function PlayerSlider() {
    (0, _classCallCheck2["default"])(this, PlayerSlider);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(PlayerSlider, [{
    key: "_declareDefaults",

    /*
      Method to declare _defaults.
      @private
      @overrides @ Module
    */
    value: function _declareDefaults() {
      this._defaults = {
        className: _playerSlider["default"]['player-slider'],
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
    }
    /*
      Method to disable bounds.
      @public
      @returns this.
    */

  }, {
    key: "disableBounds",
    value: function disableBounds() {
      this.track.setBounds(0, 1);
      this.rightBound.hide();
      this.leftBound.hide();
      return this;
    }
    /*
      Method to enable bounds.
      @public
      @returns this.
    */

  }, {
    key: "enableBounds",
    value: function enableBounds() {
      var p = this._props;
      this.track.setBounds(p.leftProgress, p.rightProgress);
      this.rightBound.show();
      this.leftBound.show();
      return this;
    }
    /*
      Method to set progress of the track.
      @public
      @param {Number} Progress to set [0...1].
      @returns this.
    */

  }, {
    key: "setTrackProgress",
    value: function setTrackProgress(p) {
      this.track.setProgress(p);
      return this;
    }
    /*
      Method to decrease progress value.
      @public
      @param {Number} Value that the slider should be decreased by.
      @returns this.
    */

  }, {
    key: "decreaseProgress",
    value: function decreaseProgress() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.01;
      var progress = this.track._progress;
      progress -= amount;
      progress = progress < 0 ? 0 : progress;
      this.setTrackProgress(progress);
      return this;
    }
    /*
      Method to inclease progress value.
      @public
      @param {Number} Value that the slider should be increased by.
      @returns this.
    */

  }, {
    key: "increaseProgress",
    value: function increaseProgress() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.01;
      var progress = this.track._progress;
      progress += amount;
      progress = progress > 1 ? 1 : progress;
      this.setTrackProgress(progress);
      return this;
    }
    /*
      Initial render method.
      @private
      @overrides @ Module
      @returns this
    */

  }, {
    key: "_render",
    value: function _render() {
      var p = this._props;

      this._addMainElement();

      this.el.classList.add(_slider2["default"].slider);
      this.leftBound = new _slider["default"]({
        isBound: true,
        parent: this.el,
        isRipple: false,
        onProgress: this._onLeftBoundProgress.bind(this),
        onSeekStart: p.onSeekStart,
        onSeekEnd: p.onSeekEnd
      });
      this.track = new _slider["default"]({
        parent: this.el,
        className: _playerSlider["default"].slider,
        onProgress: this._onTrackProgress.bind(this),
        onSeekStart: p.onSeekStart,
        onSeekEnd: p.onSeekEnd
      });
      this.rightBound = new _slider["default"]({
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
    }
    /*
      Method that should be called on track update.
      @private
      @param {Number} Track progress value [0...1].
    */

  }, {
    key: "_onTrackProgress",
    value: function _onTrackProgress(p) {
      this._callIfFunction(this._props.onProgress, p);
    }
    /*
      Method that should be called on left bound update.
      @private
      @param {Number} Track progress value [0...1].
    */

  }, {
    key: "_onLeftBoundProgress",
    value: function _onLeftBoundProgress(p) {
      if (!this._props.isBounds) {
        return;
      }

      this._props.leftProgress = p;
      this.track.setMinBound(p);
      this.rightBound.setMinBound(p);

      this._callIfFunction(this._props.onLeftProgress, p);
    }
    /*
      Method that should be called on right bound update.
      @private
      @param {Number} Track progress value [0...1].
    */

  }, {
    key: "_onRightBoundProgress",
    value: function _onRightBoundProgress(p) {
      if (!this._props.isBounds) {
        return;
      }

      this._props.rightProgress = p;
      this.track.setMaxBound(p);
      this.leftBound.setMaxBound(p);

      this._callIfFunction(this._props.onRightProgress, p);
    }
  }]);
  return PlayerSlider;
}(_module["default"]);

var _default = PlayerSlider;
exports["default"] = _default;