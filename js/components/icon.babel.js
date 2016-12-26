import Module   from './module';
import HammerJS from 'hammerjs'

require('../../css/blocks/icon.postcss.css');
let CLASSES = require('../../css/blocks/icon.postcss.css.json');

class Icon extends Module {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.shape  = '';
    this._defaults.size   = 'x1';
    this.NS = 'http://www.w3.org/2000/svg';
  }
  /*
    Initial render method.
    @private
    @overrides @ Module
    @returns this
  */
  _render () {
    this._addMainElement();
    this.el.classList.add( CLASSES.icon );
    this.el.classList.add( CLASSES[ `is-${ this._props.size }` ] );
    this.el.setAttribute('data-component', 'icon');
    this._renderIcon();
  }
  /*
    Method to render svg icon into the el.
    @private
  */
  _renderIcon () {
    let p   = this._props,
        svg = document.createElementNS( this.NS, 'svg' ),
        content = `<use xlink:href="#${ p.prefix }${ p.shape }-icon-shape" />`;
    svg.setAttribute( 'viewBox', '0 0 32 32' );
    this._addSVGHtml( svg, content );
    this.el.appendChild( svg );
  }
  /*
    Add HTML to SVG element.
    @private
    @param {Object} SVG node.
    @param {String} SVG content to add.
  */
  _addSVGHtml ( svg, content ) {
    let receptacle  = this._createElement( 'div' ),
        svgfragment = `<svg> ${ content } </svg>`;
    receptacle.innerHTML = svgfragment;
    let nodes = Array.prototype.slice.call(receptacle.childNodes[0].childNodes);
    for (let i = 0; i < nodes.length; i++) {
      svg.appendChild( nodes[i] );
    }
  }
}

export default Icon;
