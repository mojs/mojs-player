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
      parent: this.el,
      onProgress: this._onLeftBoundProgress.bind(this)
    });
    this.track = new Slider({
      parent: this.el,
      className: CLASSES.slider,
      onProgress: this._onTrackProgress.bind(this)
    });

    this.rightBound = new Slider({
      isEl:       false,
      isTrack:    false,
      parent:     this.el,
      isInversed: true,
      onProgress: this._onRightBoundProgress.bind(this)
    });

    this.leftBound.setProgress( .25 );
    this.track.setProgress( .5 );
    this.rightBound.setProgress( .75 );

    this._props.parent.appendChild( this.el );
  }
  /*
    Method that should be called on track update.
    @private
    @param {Number} Track progress value [0...1].
  */
  _onTrackProgress ( p ) {
    console.log( `track progress: ${p}` );
  }
  /*
    Method that should be called on left bound update.
    @private
    @param {Number} Track progress value [0...1].
  */
  _onLeftBoundProgress ( p ) {
    console.log( `left bound progress: ${p}` );
  }
  /*
    Method that should be called on right bound update.
    @private
    @param {Number} Track progress value [0...1].
  */
  _onRightBoundProgress ( p ) {
    console.log( `right bound progress: ${p}` );
  }
}

export default PlayerSlider;
