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

var _hammerjs = require('hammerjs');

var _hammerjs2 = _interopRequireDefault(_hammerjs);

var _ripple = require('./ripple');

var _ripple2 = _interopRequireDefault(_ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../css/blocks/button.postcss.css');
var CLASSES = require('../../css/blocks/button.postcss.css.json');

var Button = function (_Module) {
  (0, _inherits3.default)(Button, _Module);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
  }

  /*
    Method to declare defaults for the module.
    @private
    @overrides @ Module
  */

  Button.prototype._declareDefaults = function _declareDefaults() {
    _Module.prototype._declareDefaults.call(this);
    this._defaults.link = null;
    this._defaults.title = '';
    this._defaults.target = null;
    this._defaults.onPointerDown = null;
    this._defaults.onPointerUp = null;
    this._defaults.onDoubleTap = null;
  };
  /*
    Initial render method.
    @private
    @overrides @ Module
  */


  Button.prototype._render = function _render() {
    var p = this._props,
        className = 'button',
        tagName = p.link != null ? 'a' : 'div';

    this._addMainElement(tagName);
    this.el.classList.add(CLASSES[className]);
    this.el.setAttribute('title', p.title);
    p.link && this.el.setAttribute('href', p.link);
    p.link && p.target && this.el.setAttribute('target', p.target);
    this._addListeners();

    this._createRipple();
  };
  /*
    Method to create ripple.
    @private
  */


  Button.prototype._createRipple = function _createRipple() {
    this.ripple = new _ripple2.default({
      className: CLASSES['button__ripple'],
      parent: this.el
    });
  };
  /*
    Method to add event listeners to the icon.
    @private
  */


  Button.prototype._addListeners = function _addListeners() {
    this._addPointerDownEvent(this.el, this._pointerDown.bind(this));
    this._addPointerUpEvent(this.el, this._pointerUp.bind(this));
    this._addPointerUpEvent(document, this._pointerCancel.bind(this));
    (0, _hammerjs2.default)(this.el).on('doubletap', this._doubleTap.bind(this));
  };
  /*
    Method to invoke onPointerDown callback if exist.
    @private
    @param {Object} Original event object.
  */


  Button.prototype._pointerDown = function _pointerDown(e) {
    this.wasTouched = true;
    this._callIfFunction(this._props.onPointerDown);
    this.ripple._hold(e);
  };
  /*
    Method to invoke onPointerUp callback if exist.
    @private
    @param {Object} Original event object.
  */


  Button.prototype._pointerUp = function _pointerUp(e) {
    if (!this.wasTouched) {
      e.stopPropagation();return;
    }

    this.wasTouched = false;
    this._callIfFunction(this._props.onPointerUp);
    this.ripple._release();
    e.preventDefault();
    return false;
  };
  /*
    Method to invoke onPointerCancel callback if exist.
    @private
    @param {Object} Original event object.
  */


  Button.prototype._pointerCancel = function _pointerCancel(e) {
    if (!this.wasTouched) {
      return;
    };
    this.wasTouched = false;
    this.ripple._cancel();
  };
  /*
    Method to invoke onDoubleTap callback if exist.
    @private
    @param {Object} Original event object.
  */


  Button.prototype._doubleTap = function _doubleTap(e) {
    this._callIfFunction(this._props.onDoubleTap);
  };

  return Button;
}(_module2.default);

exports.default = Button;