import Handle  from './handle';
import HamerJS from 'hammerjs';
import mojs    from 'mo-js';

require('css/blocks/track.postcss.css');
let CLASSES = require('css/blocks/track.postcss.css.json');

var addTouchStartEvent = function (el, fn) {
  if (window.navigator.msPointerEnabled) {
      el.addEventListener('MSPointerDown', fn);
    } else if ( window.ontouchstart !== undefined ) {
      el.addEventListener('touchstart', fn);
      el.addEventListener('mousedown', fn);
    } else {
      el.addEventListener('mousedown', fn);
    }
}

class Track extends Handle {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    this._defaults = {
      className:  '',
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
    let classList = this.el.classList;
    classList.add( `${ CLASSES.track }` )
    classList.add( `${ this._props.className }` );

    track.classList.add(`${ CLASSES.track__track }`);
    trackP.classList.add(`${ CLASSES['track__track-progress'] }`);
    this.trackProgressEl = trackP;
    
    this.el.appendChild( track );
    this.el.appendChild( trackP );
  }

  _hammerTime () {
    super._hammerTime();
    // let hammerTime = new HamerJS.Manager(this.el, {
    //   recognizers: [
    //       // RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
    //       [Hammer.Pan],
    //       [Hammer.Tap],
    //     ]
    // });

    // console.log(hammerTime)

    // // hammerTime.add( new Hammer.Tap )
    // // hammerTime.add( new Hammer.Pan )

    // hammerTime.on('hammer.input', ( e ) => {
    //   // console.log( e );
    //   console.log(e)
    //   this.setProgress( this._shiftToProgress( e.center.x ) );
    // });

    addTouchStartEvent( this.el, (e) => {
      this.setProgress( this._shiftToProgress( e.layerX ) );
    });
  }
}

export default Track;