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

var _handle = _interopRequireDefault(require("./handle.js"));

var _ripple = _interopRequireDefault(require("./ripple.js"));

var _track = _interopRequireDefault(require("../../css/blocks/track.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Track = /*#__PURE__*/function (_Handle) {
  (0, _inherits2["default"])(Track, _Handle);

  var _super = _createSuper(Track);

  function Track() {
    (0, _classCallCheck2["default"])(this, Track);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Track, [{
    key: "_declareDefaults",

    /*
      Method to declare _defaults.
      @private
      @overrides @ Handle
    */
    value: function _declareDefaults() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Track.prototype), "_declareDefaults", this).call(this);
      this._defaults.isProgress = true;
      this._defaults.isRipple = true;
    }
    /*
      Method to render the component.
      @private
      @overrides @ Handle
    */

  }, {
    key: "_render",
    value: function _render() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Track.prototype), "_render", this).call(this);

      if (!this._props.isRipple) {
        return;
      }

      this.ripple = new _ripple["default"]({
        withHold: false,
        className: _track["default"]["track__ripple"],
        // top:        '50%',
        parent: this.el
      });
    }
    /*
      Method to apply shift to the DOMElement.
      @private
      @overrides @ Handle.
      @param {Number} Shift in pixels.x
    */

  }, {
    key: "_applyShift",
    value: function _applyShift(shift) {
      if (!this._props.isProgress) {
        return;
      }

      if (this._props.isInversed) {
        shift = this._maxWidth - shift;
      }

      var transform = "scaleX( ".concat(shift, " ) translateZ(0)");
      this.trackProgressEl.style.transform = transform; // this.trackProgressEl.style.width = `${shift}px`;
    }
    /*
      Method to add classes on `this.el`.
      @private
      @overrides @ Handle.
    */

  }, {
    key: "_addMainClasses",
    value: function _addMainClasses() {
      var p = this._props,
          classList = this.el.classList;
      classList.add(_track["default"].track);

      if (p.isInversed) {
        classList.add(_track["default"]['is-inversed']);
      }

      if (p.isBound) {
        classList.add(_track["default"]['is-bound']);
      }

      if (p.direction === 'y') {
        classList.add(_track["default"]['is-y']);
      }
    }
    /*
      Method to add DOM elements on render.
      @private
    */

  }, {
    key: "_addElements",
    value: function _addElements() {
      var p = this._props;

      if (p.isProgress) {
        // progress track
        var trackP = document.createElement('div');
        trackP.classList.add("".concat(_track["default"]['track__track-progress']));
        this.trackProgressEl = trackP;
        this.el.appendChild(trackP);
      } // track


      if (!p.isBound) {
        var track = document.createElement('div');
        track.classList.add("".concat(_track["default"].track__track));
        this.el.appendChild(track);
      }
    }
    /*
      Callback for pointer down on main el.
      @private
      @param {Object} Original event object.
      @overrides @ Handle
    */

  }, {
    key: "_pointerDown",
    value: function _pointerDown(e) {
      var p = this._props,
          x = p.direction === 'x' ? e.layerX : e.layerY;
      this._isPointerDown = true;

      if (p.direction === 'y') {
        x = this._maxWidth - e.layerY;
      }

      x = this._props.isInversed && x < 0 ? this._maxWidth + x : x; // if near the snap point - set it to the snap point

      var progress = this._shiftToProgress(x);

      progress = Math.abs(p.snapPoint - progress) < p.snapStrength ? p.snapPoint : progress;
      this.setProgress(progress);
      p.isRipple && this.ripple._hold(e);

      this._callIfFunction(p.onSeekStart, e);
    }
  }]);
  return Track;
}(_handle["default"]);

var _default = Track;
exports["default"] = _default;