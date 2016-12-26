import Handle  from './handle';
import HamerJS from 'hammerjs';
import Ripple  from './ripple';

require('../../css/blocks/track.postcss.css');
let CLASSES = require('../../css/blocks/track.postcss.css.json');

class Track extends Handle {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Handle
  */
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.isProgress = true;
    this._defaults.isRipple   = true;
  }
  /*
    Method to render the component.
    @private
    @overrides @ Handle
  */
  _render () {
    super._render();
    if ( !this._props.isRipple ) { return; }
    this.ripple = new Ripple({
      withHold:   false,
      className:  CLASSES[ `track__ripple` ],
      // top:        '50%',
      parent:     this.el
    });
  }
  /*
    Method to apply shift to the DOMElement.
    @private
    @overrides @ Handle.
    @param {Number} Shift in pixels.x
  */
  _applyShift ( shift ) {
    if ( !this._props.isProgress ) { return; }
    if ( this._props.isInversed ) { shift = this._maxWidth - shift; }
    let transform = `scaleX( ${shift} ) translateZ(0)`;
    this.trackProgressEl.style.transform = transform;
    // this.trackProgressEl.style.width = `${shift}px`;
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
      const trackP = document.createElement('div');
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
  /*
    Callback for pointer down on main el.
    @private
    @param {Object} Original event object.
    @overrides @ Handle
  */
  _pointerDown ( e ) {
    let p = this._props,
        x = (p.direction === 'x' ) ? e.layerX : e.layerY;
    this._isPointerDown = true;

    if ( p.direction === 'y' ) { x = this._maxWidth - e.layerY; }
    x = ( this._props.isInversed && x < 0 ) ? this._maxWidth + x : x;

    // if near the snap point - set it to the snap point
    let progress = this._shiftToProgress( x );
    progress = ( Math.abs( p.snapPoint - progress ) < p.snapStrength )
      ? p.snapPoint : progress;
    this.setProgress( progress );

    p.isRipple && this.ripple._hold( e );
    this._callIfFunction( p.onSeekStart, e );
  }
}

export default Track;
