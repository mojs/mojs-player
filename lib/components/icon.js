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

var _icon = _interopRequireDefault(require("../../css/blocks/icon.pcss"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Icon = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(Icon, _Module);

  var _super = _createSuper(Icon);

  function Icon() {
    (0, _classCallCheck2["default"])(this, Icon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Icon, [{
    key: "_declareDefaults",

    /*
      Method to declare _defaults.
      @private
      @overrides @ Module
    */
    value: function _declareDefaults() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Icon.prototype), "_declareDefaults", this).call(this);
      this._defaults.shape = '';
      this._defaults.size = 'x1';
      this.NS = 'http://www.w3.org/2000/svg';
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
      this._addMainElement();

      this.el.classList.add(_icon["default"].icon);
      this.el.classList.add(_icon["default"]["is-".concat(this._props.size)]);
      this.el.setAttribute('data-component', 'icon');

      this._renderIcon();
    }
    /*
      Method to render svg icon into the el.
      @private
    */

  }, {
    key: "_renderIcon",
    value: function _renderIcon() {
      var p = this._props,
          svg = document.createElementNS(this.NS, 'svg'),
          content = "<use xlink:href=\"#".concat(p.prefix).concat(p.shape, "-icon-shape\" />");
      svg.setAttribute('viewBox', '0 0 32 32');

      this._addSVGHtml(svg, content);

      this.el.appendChild(svg);
    }
    /*
      Add HTML to SVG element.
      @private
      @param {Object} SVG node.
      @param {String} SVG content to add.
    */

  }, {
    key: "_addSVGHtml",
    value: function _addSVGHtml(svg, content) {
      var receptacle = this._createElement('div'),
          svgfragment = "<svg> ".concat(content, " </svg>");

      receptacle.innerHTML = svgfragment;
      var nodes = Array.prototype.slice.call(receptacle.childNodes[0].childNodes);

      for (var i = 0; i < nodes.length; i++) {
        svg.appendChild(nodes[i]);
      }
    }
  }]);
  return Icon;
}(_module["default"]);

var _default = Icon;
exports["default"] = _default;