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
      className:        CLASSES['player-slider'],
      parent:           document.body,
      progress:         0,
      leftProgress:     0,
      rightProgress:    1,
      isBounds:         false,
    }
  }
  /*
    Method to disable bounds.
    @public
  */
  disableBounds () {
    let p = this._props;
    // p.isBounds = false;
    this._rightProgress = this.rightBound._progress;
    this._leftProgress  = this.leftBound._progress;

    console.log( 'disable', this._leftProgress, this._rightProgress );

    this.rightBound.setProgress( 1 );
    this.leftBound.setProgress( 0 );

    this.rightBound.hide();
    this.leftBound.hide();
  }
  /*
    Method to enable bounds.
    @public
  */
  enableBounds () {
    let p = this._props;
    // p.isBounds = false;
    // this._rightProgress = p.rightProgress;
    // this._leftProgress  = p.leftProgress;
    console.log( this._leftProgress, this._rightProgress );
    this.rightBound.setProgress( this._rightProgress );
    this.leftBound.setProgress( this._leftProgress );
    
    this.rightBound.show();
    this.leftBound.show();
  }
  /*
    Initial render method.
    @private
    @overrides @ Module
    @returns this
  */
  _render () {
    this._addMainElement();
    this.el.classList.add( SLIDER_CLASSES.slider );

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

    let p = this._props;
    this.rightBound.setProgress( p.rightProgress );
    this.track.setProgress( p.progress );
    this.leftBound.setProgress( p.leftProgress );
    
    p.parent.appendChild( this.el );

    ( p.isBounds ) ? this.enableBounds() : this.disableBounds();

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
