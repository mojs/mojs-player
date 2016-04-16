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
      className: '',
      parent:    document.body,
      isEl:      true,
      isTrack:   true
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
  }
  /*
    Method to render the component.
    @private
    @overrides @ Module
  */
  _render () {
    var p = this._props;
    
    if ( p.isEl ) {
      this.el = document.createElement('div');
      this.el.classList.add(`${CLASSES.slider}`);
      this.el.classList.add(`${p.className}`);
      p.parent.appendChild( this.el );
    }

    let rootEl = ( p.isEl ) ? this.el : p.parent;

    this.track = new Track({
      className:  CLASSES.track,
      onProgress: this._onTrackProgress.bind(this),
      isTrack:    this._props.isTrack
    });
    rootEl.appendChild( this.track.el );

    this.handle = new Handle({
      className:  CLASSES.handle,
      onProgress: this._onHandleProgress.bind(this)
    });
    rootEl.appendChild( this.handle.el );
  }
  /*
    Method that is invoked on handle progress change.
    @private
    @param {Number} Progress [0...1].
  */
  _onHandleProgress ( p ) { this.track.setProgress( p, false ); }
  /*
    Method that is invoked on track progress change.
    @private
    @param {Number} Progress [0...1].
  */
  _onTrackProgress ( p ) { this.handle.setProgress( p, false ); }
}

export default Slider;