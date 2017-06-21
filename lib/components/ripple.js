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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ripple = function (_Module) {
  (0, _inherits3.default)(Ripple, _Module);

  function Ripple() {
    (0, _classCallCheck3.default)(this, Ripple);
    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
  }

  /*
    Method to declare defaults.
    @private
    @overrides @ Module.
  */

  Ripple.prototype._declareDefaults = function _declareDefaults() {
    _Module.prototype._declareDefaults.call(this);
    this._defaults.withHold = true;
  };
  /*
    Method to render the component.
    @private
    @overrides @ Module
  */


  Ripple.prototype._render = function _render() {
    _Module.prototype._render.call(this);
    this.curtain = document.createElement('div');
    // this.curtain.style.background = 'rgba(255,255,255,.15)';
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
  };
  /*
    Method to construct ripple object.
    @private
  */


  Ripple.prototype._addRipple = function _addRipple() {
    var _this2 = this,
        _ref;

    this.shape = new mojs.Shape((_ref = {
      parent: this.el,
      left: 0, top: this._o.top || 0,
      // strokeWidth:  10,
      strokeWidth: { 10: 0 },
      fill: 'none',
      stroke: 'hotpink'
    }, _ref['fill'] = 'hotpink', _ref.fillOpacity = .75, _ref.opacity = { .85: 0 }, _ref.radius = 40, _ref.scale = { 0: 1 }, _ref.isShowEnd = false, _ref.onStart = function onStart() {
      _this2.isStart = true;
    }, _ref.onUpdate = this._onUpdate.bind(this), _ref.onComplete = function onComplete() {
      _this2.isStart = false;
    }, _ref));
  };
  /*
    Method that is invoked on ripple update.
    @private
    @param {Number} Curret progress [0...1].
  */


  Ripple.prototype._onUpdate = function _onUpdate(p) {
    if (!this._props.withHold) {
      return;
    }
    if (p >= .15 && this.isStart && !this.isRelease) {
      this.isStart = false;

      if (mojs.Shape) {
        this.shape.setSpeed(.02);
      }
    }
  };
  /*
    Method that should be run on touch serface release.
    @private
  */


  Ripple.prototype._release = function _release() {
    if (!this._props.withHold) {
      return;
    }
    this.isRelease = true;

    if (mojs.Shape) {
      this.shape.setSpeed(1).play();
    }
  };
  /*
    Method that should be run on touch serface hold.
    @private
    @param {Object} Origin event object.
  */


  Ripple.prototype._hold = function _hold(e) {
    var x = e.offsetX != null ? e.offsetX : e.layerX,
        y = e.offsetY != null ? e.offsetY : e.layerY;

    this.isRelease = false;
    if (mojs.Shape) {
      this.shape.tune({ x: x, y: y }).replay();
    }
  };
  /*
    Method that should be run on touch serface cancel.
    @private
  */


  Ripple.prototype._cancel = function _cancel() {
    if (!this._props.withHold) {
      return;
    }
    this.isRelease = true;

    if (mojs.Shape) {
      this.shape.pause().setSpeed(1).playBackward();
    }
  };

  return Ripple;
}(_module2.default);

exports.default = Ripple;