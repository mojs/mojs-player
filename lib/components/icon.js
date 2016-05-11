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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../../css/blocks/icon.postcss.css');
var CLASSES = require('../../css/blocks/icon.postcss.css.json');

var Icon = function (_Module) {
  (0, _inherits3.default)(Icon, _Module);

  function Icon() {
    (0, _classCallCheck3.default)(this, Icon);
    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
  }

  /*
    Method to declare _defaults.
    @private
    @overrides @ Module
  */

  Icon.prototype._declareDefaults = function _declareDefaults() {
    _Module.prototype._declareDefaults.call(this);
    this._defaults.shape = '';
    this._defaults.size = 'x1';
    this.NS = 'http://www.w3.org/2000/svg';
  };
  /*
    Initial render method.
    @private
    @overrides @ Module
    @returns this
  */


  Icon.prototype._render = function _render() {
    this._addMainElement();
    this.el.classList.add(CLASSES.icon);
    this.el.classList.add(CLASSES['is-' + this._props.size]);
    this._renderIcon();
  };
  /*
    Method to render svg icon into the el.
    @private
  */


  Icon.prototype._renderIcon = function _renderIcon() {
    var p = this._props,
        svg = document.createElementNS(this.NS, 'svg'),
        content = '<use xlink:href="#' + p.prefix + p.shape + '-icon-shape" />';
    svg.setAttribute('viewBox', '0 0 32 32');
    this._addSVGHtml(svg, content);
    this.el.appendChild(svg);
  };
  /*
    Add HTML to SVG element.
    @private
    @param {Object} SVG node.
    @param {String} SVG content to add.
  */


  Icon.prototype._addSVGHtml = function _addSVGHtml(svg, content) {
    var receptacle = this._createElement('div'),
        svgfragment = '<svg> ' + content + ' </svg>';
    receptacle.innerHTML = svgfragment;
    var nodes = Array.prototype.slice.call(receptacle.childNodes[0].childNodes);
    for (var i = 0; i < nodes.length; i++) {
      svg.appendChild(nodes[i]);
    }
  };

  return Icon;
}(_module2.default);

exports.default = Icon;