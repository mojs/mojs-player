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
      isBound:    true,
      parent:     this.el,
      onProgress: this._onLeftBoundProgress.bind(this)
    });
    this.track = new Slider({
      parent:     this.el,
      className:  CLASSES.slider,
      onProgress: this._onTrackProgress.bind(this)
    });

    this.rightBound = new Slider({
      isBound:    true,
      parent:     this.el,
      isInversed: true,
      onProgress: this._onRightBoundProgress.bind(this)
    });

    this.rightBound.setProgress( .75 );
    this.track.setProgress( .5 );
    this.leftBound.setProgress( .25 );
    
    this._props.parent.appendChild( this.el );
  }
  /*
    Method that should be called on track update.
    @private
    @param {Number} Track progress value [0...1].
  */
  _onTrackProgress ( p ) {
    // console.log( `track progress: ${p}` );
  }
  /*
    Method that should be called on left bound update.
    @private
    @param {Number} Track progress value [0...1].
  */
  _onLeftBoundProgress ( p ) {
    this.track.setMinBound( p );
    this.rightBound.setMinBound( p );
  }
  /*
    Method that should be called on right bound update.
    @private
    @param {Number} Track progress value [0...1].
  */
  _onRightBoundProgress ( p ) {
    this.track.setMaxBound( p );
    this.leftBound.setMaxBound( p );
  }
}

export default PlayerSlider;
