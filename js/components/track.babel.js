import Handle  from './handle';
import HamerJS from 'hammerjs';
import mojs    from 'mo-js';

require('css/blocks/track.postcss.css');
let CLASSES = require('css/blocks/track.postcss.css.json');


class Track extends Handle {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    this._defaults = {
      className:    '',
      parent:       document.body,
      onProgress:   null,
      isBound:      false,
      isInversed:   false
    }
  }
  /*
    Method to set handle shift.
    @private
    @overrides @ Handle
    @param {Number} Shift in `px`.
    @param {Boolean} It should invoke onProgress callback.
    @returns {Number}.
  */
  _setShift ( shift, isCallback = true ) {
    return super._setShift( shift, isCallback );
  }
  /*
    Method to apply shift to the DOMElement.
    @private
    @overrides @ Handle.
    @param {Number} Shift in pixels.
  */
  _applyShift ( shift ) {
    if ( this._props.isInversed ) { shift = this._maxWidth - shift; }
    let transform = `scaleX( ${shift} ) translateZ(0)`;
    this.trackProgressEl.style.transform = transform;
  }
  /*
    Method to add DOM elements on render.
    @private
  */
  _addElements () {
    let p      = this._props,
        trackP = document.createElement('div');

    // main element
    this.el = document.createElement('div');
    let classList = this.el.classList;
    classList.add( `${ CLASSES.track }` )
    classList.add( `${ this._props.className }` );
    if ( p.isInversed ) { classList.add( `${ CLASSES[ 'is-inversed' ] }` ); }
    if ( p.isBound ) {
      classList.add(`${ CLASSES['is-bound'] }`);
    }
    
    // progress track
    trackP.classList.add(`${ CLASSES['track__track-progress'] }`);
    this.trackProgressEl = trackP;
    this.el.appendChild( trackP );

    // track
    if ( !p.isBound ) {
      let track  = document.createElement('div');
      track.classList.add(`${ CLASSES.track__track }`);
      this.el.appendChild( track );
    }
    
  }

  _hammerTime () {
    super._hammerTime();
    this._addPointerDownEvent( this.el, (e) => {
      let x = e.layerX;
      x = ( this._props.isInversed && e.layerX < 0 )
        ? this._maxWidth + x : x;
      this.setProgress( this._shiftToProgress( x ) );
    });
  }
}

export default Track;