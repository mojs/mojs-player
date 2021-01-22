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

var _hammerjs = _interopRequireDefault(require("hammerjs"));

var _handle = _interopRequireDefault(require("../../css/blocks/handle.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Handle = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(Handle, _Module);

  var _super = _createSuper(Handle);

  function Handle() {
    (0, _classCallCheck2["default"])(this, Handle);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Handle, [{
    key: "_declareDefaults",

    /*
      Method to declare _defaults.
      @private
      @overrides @ Module
    */
    value: function _declareDefaults() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Handle.prototype), "_declareDefaults", this).call(this);
      this._defaults.minBound = 0;
      this._defaults.maxBound = 1;
      this._defaults.isBound = false;
      this._defaults.isInversed = false;
      this._defaults.direction = 'x';
      this._defaults.onSeekStart = null;
      this._defaults.onSeekEnd = null;
      this._defaults.onProgress = null;
      this._defaults.snapPoint = 0;
      this._defaults.snapStrength = 0;
    }
    /*
      Method to set handle progress.
      @public
      @param {Number} Progress [0...1].
      @param {Boolean} If should invoke onProgress callback.
      @returns this.
    */

  }, {
    key: "setProgress",
    value: function setProgress(progress) {
      var isCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var shift = this._progressToShift(progress);

      this._setShift(shift, isCallback); // calc delta and save it


      this._delta = shift - this._shift;

      this._saveDelta();

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
      this.setMinBound(min);
      this.setMaxBound(max);
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
      this._props.minBound = Math.max(min, 0);

      if (this._progress < min) {
        this.setProgress(min);
      }

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
      this._props.maxBound = Math.min(max, 1);

      if (this._progress > max) {
        this.setProgress(max);
      }

      return this;
    }
    /*
      Method to declare properties.
      @private
      @overrides @ Module.
    */

  }, {
    key: "_vars",
    value: function _vars() {
      // `progress` of the handle [0..1]
      this._progress = 0; // `shift` of the handle ( position in `px` )

      this._shift = 0; // `delta` deviation from the current `shift`

      this._delta = 0;
    }
    /*
      Method to set handle shift.
      @private
      @param {Number} Shift in `px`.
      @param {Boolean} If should invoke onProgress callback.
      @returns {Number}.
    */

  }, {
    key: "_setShift",
    value: function _setShift(shift) {
      var isCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var p = this._props,
          minBound = p.minBound * this._maxWidth,
          maxBound = p.maxBound * this._maxWidth;
      shift = this.clamp(shift, minBound, maxBound);

      this._applyShift(shift);

      if (isCallback) {
        this._onProgress(shift);
      } else {
        this._progress = this._shiftToProgress(shift);
      }

      return shift;
    }
    /**
     * clamp - functiboundson to clamp a `value` between `min` and `max`
     *
     * @param  {Number} value Value to clamp.
     * @param  {Number} min Min bound
     * @param  {Number} max Max bound
     * @return {Number} Clamped value.
     */

  }, {
    key: "clamp",
    value: function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }
    /*
      Method to apply shift to the DOMElement.
      @private
      @param {Number} Shift in pixels.
    */

  }, {
    key: "_applyShift",
    value: function _applyShift(shift) {
      var p = this._props; // translateZ(0)

      this.el.style.transform = p.direction === 'x' ? "translateX( ".concat(shift, "px )") : "translateY( ".concat(-shift, "px )");
    }
    /*
      Method to get max width of the parent.
      @private
    */

  }, {
    key: "_getMaxWidth",
    value: function _getMaxWidth() {
      var p = this._props,
          parent = p.parent;
      this._maxWidth = p.direction === 'x' ? parent.clientWidth : parent.clientHeight;
    }
    /*
      Method to render the component.
      @private
      @overrides @ Module
    */

  }, {
    key: "_render",
    value: function _render() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Handle.prototype), "_render", this).call(this);

      this._addElements();

      this._getMaxWidth();

      this._hammerTime();
    }
    /*
      Method to classes on `this.el`.
      @private
      @overrides @ Module
    */

  }, {
    key: "_addMainClasses",
    value: function _addMainClasses() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Handle.prototype), "_addMainClasses", this).call(this);
      var p = this._props,
          classList = this.el.classList;
      classList.add(_handle["default"].handle);

      if (p.isBound) {
        classList.add(_handle["default"]['is-bound']);
      }

      if (p.isInversed) {
        classList.add(_handle["default"]['is-inversed']);
      }
    }
    /*
      Method to add DOM elements on render.
      @private
    */

  }, {
    key: "_addElements",
    value: function _addElements() {
      var inner = this._createElement('div'),
          shadow = this._createElement('div');

      inner.classList.add("".concat(_handle["default"].handle__inner));
      shadow.classList.add("".concat(_handle["default"].handle__shadow));
      this.el.appendChild(shadow);
      this.el.appendChild(inner);
    }
    /*
      Method to initialize HammerJS an set up all even listeners.
      @private
    */

  }, {
    key: "_hammerTime",
    value: function _hammerTime() {
      var p = this._props,
          direction = p.direction === 'x' ? 'HORIZONTAL' : 'VERTICAL',
          hm = new _hammerjs["default"].Manager(this.el, {
        recognizers: [[_hammerjs["default"].Pan, {
          direction: _hammerjs["default"]["DIRECTION_".concat(direction)]
        }]]
      });
      hm.on('pan', this._pan.bind(this));
      hm.on('panend', this._panEnd.bind(this));

      this._addPointerDownEvent(this.el, this._pointerDown.bind(this));

      this._addPointerUpEvent(this.el, this._pointerUp.bind(this)); // add listener on document to cover edge cases
      // like when you press -> leave the element -> release


      this._addPointerUpEvent(document, this._pointerUpDoc.bind(this));

      window.addEventListener('resize', this._onWindowResize.bind(this));
    }
    /*
      Callback for pan end on main el.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_pan",
    value: function _pan(e) {
      var p = this._props;
      this._delta = p.direction === 'x' ? e.deltaX : -e.deltaY; // get progress from the shift to undestand how far is the snapPoint

      var shift = this._shift + this._delta,
          proc = this._shiftToProgress(shift); // if progress is around snapPoint set it to the snap point


      proc = Math.abs(proc - p.snapPoint) < p.snapStrength ? p.snapPoint : proc; // recalculate the progress to shift and set it

      this._setShift(this._progressToShift(proc));
    }
    /*
      Callback for pan end on main el.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_panEnd",
    value: function _panEnd(e) {
      this._saveDelta();

      this._callIfFunction(this._props.onSeekEnd, e);
    }
    /*
      Callback for pointer down on main el.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_pointerDown",
    value: function _pointerDown(e) {
      var p = this._props;
      this._isPointerDown = true;

      this._callIfFunction(p.onSeekStart, e);
    }
    /*
      Callback for pointer up on main el.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_pointerUp",
    value: function _pointerUp(e) {
      this._callIfFunction(this._props.onSeekEnd, e);

      e.preventDefault();
      return false;
    }
    /*
      Callback for pointer up on document.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_pointerUpDoc",
    value: function _pointerUpDoc(e) {
      if (!this._isPointerDown) {
        return;
      }

      this._callIfFunction(this._props.onSeekEnd, e);

      this._isPointerDown = false;
    }
    /*
      Method to add _delta to _shift.
      @private
    */

  }, {
    key: "_saveDelta",
    value: function _saveDelta() {
      this._shift += this._delta;
    }
    /*
      Method to call onProgress callback.
      @private
      @param {Number} Shift in `px`.
    */

  }, {
    key: "_onProgress",
    value: function _onProgress(shift) {
      var p = this._props,
          progress = this._shiftToProgress(shift);

      if (this._progress !== progress) {
        this._progress = progress;

        if (this._isFunction(p.onProgress)) {
          p.onProgress.call(this, progress);
        }
      }
    }
    /*
      Method to recalc shift to progress.
      @private
      @param {Number} Shift in `px`.
      @returns {Number} Progress [0...1].
    */

  }, {
    key: "_shiftToProgress",
    value: function _shiftToProgress(shift) {
      return shift / this._maxWidth;
    }
    /*
      Method to progress shift to shift.
      @private
      @param   {Number} Progress [0...1].
      @returns {Number} Shift in `px`.
     */

  }, {
    key: "_progressToShift",
    value: function _progressToShift(progress) {
      return progress * this._maxWidth;
    }
    /*
      Callback for window resize event.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_onWindowResize",
    value: function _onWindowResize(e) {
      this._getMaxWidth();

      this.setProgress(this._progress);
    }
  }]);
  return Handle;
}(_module["default"]);

var _default = Handle;
exports["default"] = _default;