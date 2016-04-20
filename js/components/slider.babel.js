import Module from './module';
import Handle from './handle';
import Track  from './track';

require('css/blocks/slider.postcss.css');
let CLASSES = require('css/blocks/slider.postcss.css.json');

class Slider extends Module {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    this._defaults = {
      className:    '',
      parent:       document.body,
      isBound:      false,
      isInversed:   false,
      isProgress:   true,
      onProgress:   null,
      direction:    'x',
      snapPoint:    .5,
      snapStrength: .1
    }
  }
  /*
    Method to set slider progress.
    @public
    @param {Number} Progress to set.
    @returns this.
  */
  setProgress ( progress ) {
    this.handle.setProgress( progress );
    this.track.setProgress( progress );
    return this;
  }
  /*
    Method to set bounds of progress.
    @public
    @param {Number} Min bound to set [0...1].
    @param {Number} Max bound to set [0...1].
    @returns this.
  */
  setBounds ( min, max ) {
    this.handle.setBounds( min, max );
    this.track.setBounds( min, max );
    return this;
  }
  /*
    Method to set min bound of progress.
    @public
    @param {Number} Min bound to set [0...1].
    @returns this.
  */
  setMinBound ( min ) {
    this.handle.setMinBound( min );
    this.track.setMinBound( min );
    return this;
  }
  /*
    Method to set max bound of progress.
    @public
    @param {Number} Max bound to set [0...1].
    @returns this.
  */
  setMaxBound ( max ) {
    this.handle.setMaxBound( max );
    this.track.setMaxBound( max );
    return this;
  }
  /*
    Method to render the component.
    @private
    @overrides @ Module
  */
  _render () {
    var p = this._props;
    
    if ( !p.isBound ) {
      let el        = document.createElement('div'),
          classList = el.classList;
      this.el = el;
      classList.add( CLASSES.slider );
      ( p.direction === 'y' ) && classList.add( CLASSES[ 'is-y' ] );
      p.className && classList.add( p.className );
      p.parent.appendChild( el );
    }

    let rootEl = ( !p.isBound ) ? this.el : p.parent;

    this.track = new Track({
      className:      CLASSES.track,
      onProgress:     this._onTrackProgress.bind(this),
      isBound:        p.isBound,
      isInversed:     p.isInversed,
      isProgress:     p.isProgress,
      parent:         p.parent,
      direction:      p.direction
    });
    rootEl.appendChild( this.track.el );

    this.handle = new Handle({
      className:      CLASSES.handle,
      onProgress:     this._onHandleProgress.bind(this),
      isBound:        p.isBound,
      isInversed:     p.isInversed,
      parent:         p.parent,
      direction:      p.direction,
      snapPoint:      p.snapPoint,
      snapStrength:   p.snapStrength
    });
    rootEl.appendChild( this.handle.el );
  }
  /*
    Method that is invoked on handle progress change.
    @private
    @param {Number} Progress [0...1].
  */
  _onHandleProgress ( p ) {
    this.track.setProgress( p, false );
    this._onProgress( p );
  }
  /*
    Method that is invoked on track progress change.
    @private
    @param {Number} Progress [0...1].
  */
  _onTrackProgress ( p ) {
    this.handle.setProgress( p, false );
    this._onProgress( p );
  }
  /*
    Method to call onProgress callback.
    @private
    @param {Number} Progress value [0...1].
  */
  _onProgress ( progress ) {
    let p        = this._props;

    if ( typeof p.onProgress === 'function' && this._progress !== progress) {
      this._progress = progress;
      p.onProgress.call( this, progress );
    }
  }
}

export default Slider;