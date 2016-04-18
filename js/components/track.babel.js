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
      isProgress:   true, // if should render bold progress line
      isBound:      false,
      isInversed:   false,
      direction:    'x',
      minBound:     0,
      maxBound:     1,
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
    if ( !this._props.isProgress ) { return; }
    if ( this._props.isInversed ) { shift = this._maxWidth - shift; }
    let transform = `scaleX( ${shift} ) translateZ(0)`;
    this.trackProgressEl.style.transform = transform;
  }
  /*
    Method to add classes on `this.el`.
    @private
    @overrides @ Handle.
  */
  _addMainClasses () {
    let p         = this._props,
        classList = this.el.classList;

    classList.add( CLASSES.track );
    if ( p.isInversed ) { classList.add( CLASSES[ 'is-inversed' ] ); }
    if ( p.isBound )    { classList.add( CLASSES[ 'is-bound' ] ); }
    if ( p.direction === 'y' ) { classList.add( CLASSES[ 'is-y' ] ); }
  }
  /*
    Method to add DOM elements on render.
    @private
  */
  _addElements () {
    let p      = this._props;

    if ( p.isProgress ) {
      // progress track
      let trackP = document.createElement('div');
      trackP.classList.add(`${ CLASSES['track__track-progress'] }`);
      this.trackProgressEl = trackP;
      this.el.appendChild( trackP );
    }

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
      let p = this._props,
          x = (this._props.direction === 'x' ) ? e.layerX : e.layerY;

      if ( p.direction === 'y' ) { x = this._maxWidth - e.layerY; }
      x = ( this._props.isInversed && x < 0 ) ? this._maxWidth + x : x;

      this.setProgress( this._shiftToProgress( x ) );
    });
  }
}

export default Track;