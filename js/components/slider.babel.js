import Module from './module';
import Handle from './handle';
import Track  from './track';

require('css/blocks/timeline-slider.postcss.css');

class Slider extends Module {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    this._defaults = {
      className: '',
      parent:    document.body
    }
  }
  /*
    Method to render the component.
    @private
    @overrides @ Module
  */
  _render () {
    var p      = this._props;
    
    this.el     = document.createElement('div');
    // this.track  = document.createElement('div');

    this.el    .classList.add(`${p.className}`);
    // this.track .classList.add(`${p.className}__track`);

    // this.el.appendChild( this.track );
    p.parent.appendChild( this.el );

    this.track = new Track({
      parent: this.el
      // onProgress: (p) => { this._onHandleProgress( p ); }
    });
    this.el.appendChild( this.track.el );

    this.handle = new Handle({
      parent: this.el,
      onProgress: (p) => { this._onHandleProgress( p ); }
    });
    this.el.appendChild( this.handle.el );

    this.handle.setProgress(.5);
    this.track.setProgress(.5);
  }
  /*
    Method that is invoked on handle progress change.
    @private
    @param {Number} Progress [0...1].
  */
  _onHandleProgress ( p ) {

    // this._setTrackProgress( p );
  }
}

export default Slider;