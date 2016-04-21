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
      onLeftProgress:   null,
      onProgress:       null,
      onRightProgress:  null
    }
  }
  /*
    Method to disable bounds.
    @public
  */
  disableBounds () {
    // let p = this._props;
    // p.isBounds = false;
    // this._rightProgress = this.rightBound._progress;
    // this._leftProgress  = this.leftBound._progress;
    // console.log( 'disable', this._leftProgress, this._rightProgress );
    // this.rightBound.setProgress( 1 );
    // this.leftBound.setProgress( 0 );

    this.rightBound.hide();
    this.leftBound.hide();
  }
  /*
    Method to enable bounds.
    @public
  */
  enableBounds () {
    // let p     = this._props,
    //     // if no chached value - use the value from props
    //     left  = ( this._leftProgress == null )
    //       ? p.leftProgress : this._leftProgress,
    //     right = ( this._rightProgress == null )
    //       ? p.rightProgress : this._rightProgress;

    // this.rightBound.setProgress( right );
    // this.leftBound.setProgress( left );
    
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

    // ( p.isBounds ) ? this.enableBounds() : this.disableBounds();

  }
  /*
    Method that should be called on track update.
    @private
    @param {Number} Track progress value [0...1].
  */
  _onTrackProgress ( p ) {
    console.log( `track: ${ p }` );
    this._callIfFunction( this._props.onProgress, [ p ] );
  }
  /*
    Method that should be called on left bound update.
    @private
    @param {Number} Track progress value [0...1].
  */
  _onLeftBoundProgress ( p ) {
    console.log( `left: ${ p }` );
    this.track.setMinBound( p );
    this.rightBound.setMinBound( p );
    this._callIfFunction( this._props.onLeftProgress, [ p ] );
  }
  /*
    Method that should be called on right bound update.
    @private
    @param {Number} Track progress value [0...1].
  */
  _onRightBoundProgress ( p ) {
    console.log( `right: ${ p }` );
    this.track.setMaxBound( p );
    this.leftBound.setMaxBound( p );
    this._callIfFunction( this._props.onRightProgress, [ p ] );
  }
}

export default PlayerSlider;
