'use strict';

exports.__esModule = true;

var _module = require('./module');

var _module2 = _interopRequireDefault(_module);

var _hammerjs = require('hammerjs');

var _hammerjs2 = _interopRequireDefault(_hammerjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('css/blocks/icon.postcss.css');
var CLASSES = require('css/blocks/icon.postcss.css.json');

var Icon = function (_Module) {
  _inherits(Icon, _Module);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _Module.apply(this, arguments));
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