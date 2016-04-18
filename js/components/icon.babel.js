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
      onPointerDown:   null,
      onPointerUp:     null,
      onDoubleTap:     null
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
    this.el = document.createElement( 'div' );
    p.className && this.el.classList.add( `${ p.className }` );
    this.el.classList.add( `${ CLASSES.icon }` );
    this._renderIcon();
    p.parent.appendChild( this.el );
    this._addListeners();
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
  /*
    Method to add event listeners to the icon.
    @private
  */
  _addListeners () {
    this._addPointerDownEvent( this.el, this._pointerDown.bind( this ) );
    this._addPointerUpEvent( this.el, this._pointerUp.bind( this ) );
    HammerJS(this.el).on('doubletap', this._doubleTap.bind( this ) );
  }
  /*
    Method to invoke onPointerDown callback if excist.
    @private
    @param {Object} Original event object.
  */
  _pointerDown ( e ) {
    this._callIfFunction( this._props.onPointerDown );
  }
  /*
    Method to invoke onPointerUp callback if excist.
    @private
    @param {Object} Original event object.
  */
  _pointerUp ( e ) {
    this._callIfFunction( this._props.onPointerUp );
  }
  /*
    Method to invoke onDoubleTap callback if excist.
    @private
    @param {Object} Original event object.
  */
  _doubleTap ( e ) {
    this._callIfFunction( this._props.onDoubleTap ); 
  }
}

export default Icon;
