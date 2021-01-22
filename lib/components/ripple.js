"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _module = _interopRequireDefault(require("./module.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Ripple = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(Ripple, _Module);

  var _super = _createSuper(Ripple);

  function Ripple() {
    (0, _classCallCheck2["default"])(this, Ripple);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Ripple, [{
    key: "_declareDefaults",

    /*
      Method to declare defaults.
      @private
      @overrides @ Module.
    */
    value: function _declareDefaults() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Ripple.prototype), "_declareDefaults", this).call(this);
      this._defaults.withHold = true;
    }
    /*
      Method to render the component.
      @private
      @overrides @ Module
    */

  }, {
    key: "_render",
    value: function _render() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Ripple.prototype), "_render", this).call(this);
      this.curtain = document.createElement('div'); // this.curtain.style.background = 'rgba(255,255,255,.15)';
      // this.curtain.style.background = 'yellow';

      this.curtain.style.position = 'absolute';
      this.curtain.style.width = '100%';
      this.curtain.style.height = '100%';
      this.curtain.style.left = 0;
      this.curtain.style.top = 0;
      this.curtain.style.zIndex = 1;
      this.el.appendChild(this.curtain);

      if (mojs.Shape) {
        this._addRipple();
      }
    }
    /*
      Method to construct ripple object.
      @private
    */

  }, {
    key: "_addRipple",
    value: function _addRipple() {
      var _this = this,
          _mojs$Shape;

      this.shape = new mojs.Shape((_mojs$Shape = {
        parent: this.el,
        left: 0,
        top: this._o.top || 0,
        // strokeWidth:  10,
        strokeWidth: {
          10: 0
        },
        fill: 'none',
        stroke: 'hotpink'
      }, (0, _defineProperty2["default"])(_mojs$Shape, "fill", 'hotpink'), (0, _defineProperty2["default"])(_mojs$Shape, "fillOpacity", .75), (0, _defineProperty2["default"])(_mojs$Shape, "opacity", {
        .85: 0
      }), (0, _defineProperty2["default"])(_mojs$Shape, "radius", 40), (0, _defineProperty2["default"])(_mojs$Shape, "scale", {
        0: 1
      }), (0, _defineProperty2["default"])(_mojs$Shape, "isShowEnd", false), (0, _defineProperty2["default"])(_mojs$Shape, "onStart", function onStart() {
        _this.isStart = true;
      }), (0, _defineProperty2["default"])(_mojs$Shape, "onUpdate", this._onUpdate.bind(this)), (0, _defineProperty2["default"])(_mojs$Shape, "onComplete", function onComplete() {
        _this.isStart = false;
      }), _mojs$Shape));
    }
    /*
      Method that is invoked on ripple update.
      @private
      @param {Number} Curret progress [0...1].
    */

  }, {
    key: "_onUpdate",
    value: function _onUpdate(p) {
      if (!this._props.withHold) {
        return;
      }

      if (p >= .15 && this.isStart && !this.isRelease) {
        this.isStart = false;

        if (mojs.Shape) {
          this.shape.setSpeed(.02);
        }
      }
    }
    /*
      Method that should be run on touch serface release.
      @private
    */

  }, {
    key: "_release",
    value: function _release() {
      if (!this._props.withHold) {
        return;
      }

      this.isRelease = true;

      if (mojs.Shape) {
        this.shape.setSpeed(1).play();
      }
    }
    /*
      Method that should be run on touch serface hold.
      @private
      @param {Object} Origin event object.
    */

  }, {
    key: "_hold",
    value: function _hold(e) {
      var x = e.offsetX != null ? e.offsetX : e.layerX,
          y = e.offsetY != null ? e.offsetY : e.layerY;
      this.isRelease = false;

      if (mojs.Shape) {
        this.shape.tune({
          x: x,
          y: y
        }).replay();
      }
    }
    /*
      Method that should be run on touch serface cancel.
      @private
    */

  }, {
    key: "_cancel",
    value: function _cancel() {
      if (!this._props.withHold) {
        return;
      }

      this.isRelease = true;

      if (mojs.Shape) {
        this.shape.pause().setSpeed(1).playBackward();
      }
    }
  }]);
  return Ripple;
}(_module["default"]);

var _default = Ripple;
exports["default"] = _default;