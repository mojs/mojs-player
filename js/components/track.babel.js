import Handle  from './handle';
import HamerJS from 'hammerjs';
import mojs    from 'mo-js';

require('css/blocks/track.postcss.css');
let CLASSES = require('css/blocks/track.postcss.css.json');


class Track extends Handle {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Handle
  */
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.isProgress = true;
  }
  /*
    Method to set handle shift.
    @private
    @overrides @ Handle
    @param {Number} Shift in `px`.
    @param {Boolean} It should invoke onProgress callback.
    @returns {Number}.
  */
  // _setShift ( shift, isCallback = true ) {
  //   return super._setShift( shift, isCallback );
  // }
  /*
    Method to apply shift to the DOMElement.
    @private
    @overrides @ Handle.
    @param {Number} Shift in pixels.
  */
  _applyShift ( shift ) {
    if ( !this._props.isProgress ) { return; }
    if ( this._props.isInversed ) { shift = this._maxWidth - shift; }
    // translateZ(0)
    let transform = `scaleX( ${shift} )`;
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
    let p = this._props;
    super._hammerTime();
    this._addPointerDownEvent( this.el, (e) => {
      this._isPointerDown = true;
      let x = (this._props.direction === 'x' ) ? e.layerX : e.layerY;

      if ( p.direction === 'y' ) { x = this._maxWidth - e.layerY; }
      x = ( this._props.isInversed && x < 0 ) ? this._maxWidth + x : x;
      this.setProgress( this._shiftToProgress( x ) );

      this._callIfFunction( p.onSeekStart, [ e ] );
    });
  }
}

export default Track;