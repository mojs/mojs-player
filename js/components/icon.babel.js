import Module   from './module';
import HammerJS from 'hammerjs'

require('css/blocks/icon.postcss.css');
let CLASSES = require('css/blocks/icon.postcss.css.json');

class Icon extends Module {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    this._defaults = {
      className:       '',
      parent:          document.body,
      shape:           '',
      // onPointerDown:   null,
      // onPointerUp:     null,
      // onDoubleTap:     null
    }
    this.NS = 'http://www.w3.org/2000/svg';
  }
  /*
    Initial render method.
    @private
    @overrides @ Module
    @returns this
  */
  _render () {
    var p = this._props;
    this._addMainElement();
    this.el.classList.add( CLASSES.icon );
    this._renderIcon();
  }
  /*
    Method to render svg icon into the el.
    @private
  */
  _renderIcon () {
    let svg = document.createElementNS( this.NS, 'svg' ),
        use = document.createElementNS( this.NS, 'use' );

    use.setAttribute( 'xlink:href', `#${ this._props.shape }-icon-shape` );
    svg.appendChild( use );
    this.el.appendChild( svg );
    // this.el.setAttribute( 'data-rand', (10*Math.random()).toFixed(0) )
  }
}

export default Icon;
