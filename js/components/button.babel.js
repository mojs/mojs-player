import Module   from './module';
import HammerJS from 'hammerjs';
import Ripple   from './ripple';

require('../../css/blocks/button.postcss.css');
let CLASSES = require('../../css/blocks/button.postcss.css.json');

class Button extends Module {
  /*
    Method to declare defaults for the module.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    super._declareDefaults()
    this._defaults.link          = null;
    this._defaults.title         = '';
    this._defaults.target        = null;
    this._defaults.onPointerDown = null;
    this._defaults.onPointerUp   = null;
    this._defaults.onDoubleTap   = null;
  }
  /*
    Initial render method.
    @private
    @overrides @ Module
  */
  _render () {
    let p         = this._props,
        className = 'button',
        tagName   = ( p.link != null ) ? 'a' : 'div';

    this._addMainElement( tagName );
    this.el.classList.add( CLASSES[ className ] );
    this.el.setAttribute( 'title', p.title );
    p.link && this.el.setAttribute( 'href', p.link );
    p.link && p.target && this.el.setAttribute( 'target', p.target );
    this._addListeners();

    this._createRipple();
  }
  /*
    Method to create ripple.
    @private
  */
  _createRipple () {
    this.ripple = new Ripple({
      className: CLASSES[ `button__ripple` ],
      parent:    this.el
    });
  }
  /*
    Method to add event listeners to the icon.
    @private
  */
  _addListeners () {
    this._addPointerDownEvent( this.el, this._pointerDown.bind( this ) );
    this._addPointerUpEvent( this.el, this._pointerUp.bind( this ) );
    this._addPointerUpEvent( document, this._pointerCancel.bind( this ) );
    HammerJS(this.el).on('doubletap', this._doubleTap.bind( this ) );
  }
  /*
    Method to invoke onPointerDown callback if exist.
    @private
    @param {Object} Original event object.
  */
  _pointerDown ( e ) {
    this.wasTouched = true;
    this._callIfFunction( this._props.onPointerDown );
    this.ripple._hold( e );
  }
  /*
    Method to invoke onPointerUp callback if exist.
    @private
    @param {Object} Original event object.
  */
  _pointerUp ( e ) {
    if ( !this.wasTouched ) { e.stopPropagation(); return; }

    this.wasTouched = false;
    this._callIfFunction( this._props.onPointerUp );
    this.ripple._release();
    e.preventDefault();
    return false;
  }
  /*
    Method to invoke onPointerCancel callback if exist.
    @private
    @param {Object} Original event object.
  */
  _pointerCancel ( e ) {
    if ( !this.wasTouched ) { return; };
    this.wasTouched = false;
    this.ripple._cancel();
  }
  /*
    Method to invoke onDoubleTap callback if exist.
    @private
    @param {Object} Original event object.
  */
  _doubleTap ( e ) {
    this._callIfFunction( this._props.onDoubleTap ); 
  }
}

export default Button;
