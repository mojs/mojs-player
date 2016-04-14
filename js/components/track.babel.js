import Handle  from './handle';
import HamerJS from 'hammerjs';
import mojs    from 'mo-js';

require('css/blocks/track.postcss.css');

class Track extends Handle {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    this._defaults = {
      className:  'track',
      parent:     document.body,
      onProgress: null
    }
  }
  /*
    Method to apply shift to the DOMElement.
    @private
    @overrides @ Handle.
    @param {Number} Shift in pixels.
  */
  _applyShift ( shift ) {
    let transform = `scaleX( ${shift} ) translateZ(0)`;
    this.trackProgressEl.style.transform = transform;
  }
  /*
    Method to add DOM elements on render.
    @private
  */
  _addElements () {
    var p      = this._props,
        track  = document.createElement('div'),
        trackP = document.createElement('div');

    this.el = document.createElement('div');
    this.el.classList.add( `${p.className}` );

    track.classList.add(`${p.className}__track`);
    trackP.classList.add(`${p.className}__track-progress`);
    this.trackProgressEl = trackP;
    
    this.el.appendChild( track );
    this.el.appendChild( trackP );
  }
}

export default Track;