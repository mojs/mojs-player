import Slider from './slider';
import Module from './module';

require('css/blocks/player-slider.postcss.css');
let CLASSES = require('css/blocks/player-slider.postcss.css.json');
let SLIDER_CLASSES = require('css/blocks/slider.postcss.css.json');

class PlayerSlider extends Module {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    this._defaults = {
      className: CLASSES['player-slider'],
      parent:    document.body,
      // isEl:      true
    }
  }
  /*
    Initial render method.
    @private
    @overrides @ Module
    @returns this
  */
  _render () {
    this.el = document.createElement( 'div' );
    this.el.classList.add( `${ this._props.className }` );
    this.el.classList.add( `${ SLIDER_CLASSES.slider }` );

    this.leftBound = new Slider({
      isEl:    false,
      isTrack: false,
      parent: this.el
    });
    this.track = new Slider({
      parent: this.el,
      className: CLASSES.slider
    });

    this.leftBound.setProgress( .25 );
    this.track.setProgress( .5 );


    this._props.parent.appendChild( this.el );
  }
}

export default PlayerSlider;
