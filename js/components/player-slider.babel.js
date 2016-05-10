import Slider from './slider';
import Module from './module';

require('../../css/blocks/player-slider.postcss.css');
let CLASSES = require('../../css/blocks/player-slider.postcss.css.json');
let SLIDER_CLASSES = require('../../css/blocks/slider.postcss.css.json');

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
      onLeftProgress:   null,
      onProgress:       null,
      onRightProgress:  null,
      onSeekStart:      null,
      onSeekEnd:        null
    }
  }
  /*
    Method to disable bounds.
    @public
    @returns this.
  */
  disableBounds () {
    this.track.setBounds( 0, 1 );
    this.rightBound.hide();
    this.leftBound.hide();
    return this;
  }
  /*
    Method to enable bounds.
    @public
    @returns this.
  */
  enableBounds () {
    let p = this._props;
    this.track.setBounds( p.leftProgress, p.rightProgress );
    this.rightBound.show();
    this.leftBound.show();
    return this;
  }
  /*
    Method to set progress of the track.
    @public
    @param {Number} Progress to set [0...1].
    @returns this.
  */
  setTrackProgress ( p ) {
    this.track.setProgress( p );
    return this;
  }
  /*
    Method to decrease progress value.
    @public
    @param {Number} Value that the slider should be decreased by.
    @returns this.
  */
  decreaseProgress ( amount = 0.01 ) {
    let progress = this.track._progress;
    progress -= amount;
    progress = ( progress < 0 ) ? 0 : progress;
    this.setTrackProgress( progress );
    return this;
  }
  /*
    Method to inclease progress value.
    @public
    @param {Number} Value that the slider should be increased by.
    @returns this.
  */
  increaseProgress ( amount = 0.01 ) {
    let progress = this.track._progress;
    progress += amount;
    progress = ( progress > 1 ) ? 1 : progress;
    this.setTrackProgress( progress );
    return this;
  }
  /*
    Initial render method.
    @private
    @overrides @ Module
    @returns this
  */
  _render () {
    let p = this._props;

    this._addMainElement();
    this.el.classList.add( SLIDER_CLASSES.slider );

    this.leftBound = new Slider({
      isBound:        true,
      parent:         this.el,
      isRipple:       false,
      onProgress:     this._onLeftBoundProgress.bind(this),
      onSeekStart:    p.onSeekStart,
      onSeekEnd:      p.onSeekEnd
    });

    this.track = new Slider({
      parent:         this.el,
      className:      CLASSES.slider,
      onProgress:     this._onTrackProgress.bind(this),
      onSeekStart:    p.onSeekStart,
      onSeekEnd:      p.onSeekEnd
    });
    this.rightBound = new Slider({
      isBound:        true,
      parent:         this.el,
      isRipple:       false,
      isInversed:     true,
      onProgress:     this._onRightBoundProgress.bind(this),
      onSeekStart:    p.onSeekStart,
      onSeekEnd:      p.onSeekEnd
    });

    this.rightBound.setProgress( p.rightProgress );
    this.track.setProgress( p.progress );
    this.leftBound.setProgress( p.leftProgress );
    
    p.parent.appendChild( this.el );

  }
  /*
    Method that should be called on track update.
    @private
    @param {Number} Track progress value [0...1].
  */
  _onTrackProgress ( p ) {
    this._callIfFunction( this._props.onProgress, p );
  }
  /*
    Method that should be called on left bound update.
    @private
    @param {Number} Track progress value [0...1].
  */
  _onLeftBoundProgress ( p ) {
    if ( !this._props.isBounds ) { return; }
    this._props.leftProgress = p;
    this.track.setMinBound( p );
    this.rightBound.setMinBound( p );
    this._callIfFunction( this._props.onLeftProgress, p );
  }
  /*
    Method that should be called on right bound update.
    @private
    @param {Number} Track progress value [0...1].
  */
  _onRightBoundProgress ( p ) {
    if ( !this._props.isBounds ) { return; }
    this._props.rightProgress = p;
    this.track.setMaxBound( p );
    this.leftBound.setMaxBound( p );
    this._callIfFunction( this._props.onRightProgress, p );
  }
}

export default PlayerSlider;
