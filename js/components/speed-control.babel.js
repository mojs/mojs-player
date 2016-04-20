

import Module     from './module'
import Icon       from './icon';
import Slider     from './slider';
// import HammerJS from 'hammerjs'

require('css/blocks/speed-control.postcss.css');
let CLASSES = require('css/blocks/speed-control.postcss.css.json');

class SpeedControl extends Module {
  /*
    Initial render method.
    @private
    @overrides @ Module
    @returns this
  */
  _render () {
    let p         = this._props,
        className = 'speed-control',
        slider    = this._createElement( 'div' ),
        sliderIn  = this._createElement( 'div' ),
        icon      = this._createElement( 'div' );

    this._addMainElement();
    this.el.classList.add( CLASSES[ className ] );
    // places for child components
    slider.classList.add( CLASSES[ `${ className }__slider` ] );
    sliderIn.classList.add( CLASSES[ `${ className }__slider-inner` ] );
    icon.classList.add( CLASSES[ `${ className }__icon` ] );
    slider.appendChild( sliderIn );
    this.el.appendChild( slider );
    this.el.appendChild( icon );
    // child components
    this.icon   = new Icon({ isText: true, parent: icon });
    this.slider = new Slider({
      parent:       sliderIn,
      isProgress:   false,
      direction:    'y',
      onProgress:   this._onSliderProgress.bind( this ),
      snapPoint:    .5,
      snapStrength: .05
    });

    this.slider.setProgress( .5 );
  }
  /*
    Method that is invoked on slider progress.
    @private
    @param {Number} Progress of the slider.
  */
  _onSliderProgress ( p ) {
    // console.log( p );
  }
}

export default SpeedControl;
