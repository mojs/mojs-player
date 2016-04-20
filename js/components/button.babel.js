import Module   from './module';
import HammerJS from 'hammerjs';

require('css/blocks/button.postcss.css');
let CLASSES = require('css/blocks/button.postcss.css.json');

class Button extends Module {
  /*
    Method to declare defaults for the module.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    super._declareDefaults()
    this._defaults.title         = '';
    this._defaults.onPointerDown = null;
    this._defaults.onPointerup   = null;
    this._defaults.onDoubleTap   = null;
  }
  /*
    Initial render method.
    @private
    @overrides @ Module
    @returns this
  */
  _render () {
    this._addMainElement();
    this.el.classList.add( CLASSES.button );
    this.el.setAttribute( 'title', this._props.title );
    this._addListeners();
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

export default Button;
