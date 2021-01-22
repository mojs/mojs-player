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

var _module = _interopRequireDefault(require("./module.js"));

var _handle = _interopRequireDefault(require("./handle.js"));

var _track = _interopRequireDefault(require("./track.js"));

var _slider = _interopRequireDefault(require("../../css/blocks/slider.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Slider = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(Slider, _Module);

  var _super = _createSuper(Slider);

  function Slider() {
    (0, _classCallCheck2["default"])(this, Slider);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Slider, [{
    key: "_declareDefaults",

    /*
      Method to declare _defaults.
      @private
      @overrides @ Module
    */
    value: function _declareDefaults() {
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
    }
    /*
      Method to set slider progress.
      @public
      @param {Number} Progress to set.
      @returns this.
    */

  }, {
    key: "setProgress",
    value: function setProgress(progress) {
      this.handle.setProgress(progress);
      this.track.setProgress(progress);
      return this;
    }
    /*
      Method to set bounds of progress.
      @public
      @param {Number} Min bound to set [0...1].
      @param {Number} Max bound to set [0...1].
      @returns this.
    */

  }, {
    key: "setBounds",
    value: function setBounds(min, max) {
      this.handle.setBounds(min, max);
      this.track.setBounds(min, max);
      return this;
    }
    /*
      Method to set min bound of progress.
      @public
      @param {Number} Min bound to set [0...1].
      @returns this.
    */

  }, {
    key: "setMinBound",
    value: function setMinBound(min) {
      this.handle.setMinBound(min);
      this.track.setMinBound(min);
      return this;
    }
    /*
      Method to set max bound of progress.
      @public
      @param {Number} Max bound to set [0...1].
      @returns this.
    */

  }, {
    key: "setMaxBound",
    value: function setMaxBound(max) {
      this.handle.setMaxBound(max);
      this.track.setMaxBound(max);
      return this;
    }
    /*
      Method to hide elements.
      @public
    */

  }, {
    key: "show",
    value: function show() {
      this.track.el.style.display = 'block';
      this.handle.el.style.display = 'block';
    }
    /*
      Method to hide elements.
      @public
    */

  }, {
    key: "hide",
    value: function hide() {
      this.track.el.style.display = 'none';
      this.handle.el.style.display = 'none';
    }
    /*
      Method to render the component.
      @private
      @overrides @ Module
    */

  }, {
    key: "_render",
    value: function _render() {
      var p = this._props;

      if (!p.isBound) {
        var el = this._createElement('div'),
            classList = el.classList;

        this.el = el;
        this.inner = this._createElement('div');
        this.inner.classList.add(_slider["default"]['slider__inner']);
        this.el.appendChild(this.inner);
        classList.add(_slider["default"].slider);
        p.direction === 'y' && classList.add(_slider["default"]['is-y']);
        p.className && classList.add(p.className);
        p.parent.appendChild(el);
      }

      var rootEl = !p.isBound ? this.inner : p.parent;
      this.track = new _track["default"]({
        className: _slider["default"].track,
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
      var handleClass = [_slider["default"].handle];

      if (!p.isBound) {
        handleClass.push(_slider["default"]['progress-handle']);
      }

      this.handle = new _handle["default"]({
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
    }
    /*
      Method that is invoked on handle progress change.
      @private
      @param {Number} Progress [0...1].
    */

  }, {
    key: "_onHandleProgress",
    value: function _onHandleProgress(p) {
      this.track.setProgress(p, false);

      this._onProgress(p);
    }
    /*
      Method that is invoked on track progress change.
      @private
      @param {Number} Progress [0...1].
    */

  }, {
    key: "_onTrackProgress",
    value: function _onTrackProgress(p) {
      this.handle.setProgress(p, false);

      this._onProgress(p);
    }
    /*
      Method to call onProgress callback.
      @private
      @param {Number} Progress value [0...1].
    */

  }, {
    key: "_onProgress",
    value: function _onProgress(progress) {
      var p = this._props;

      if (typeof p.onProgress === 'function' && this._progress !== progress) {
        this._progress = progress;
        p.onProgress.call(this, progress);
      }
    }
  }]);
  return Slider;
}(_module["default"]);

var _default = Slider;
exports["default"] = _default;