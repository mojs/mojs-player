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

    this.el    .classList.add(`${CLASSES.slider}`);
    // this.track .classList.add(`${p.className}__track`);

    // this.el.appendChild( this.track );
    p.parent.appendChild( this.el );

    this.track = new Track({
      // parent:    this.el,
      className:  CLASSES.track,
      onProgress: (p) => { this._onTrackProgress( p ); }
    });
    this.el.appendChild( this.track.el );

    this.handle = new Handle({
      // parent: this.el,
      className:   CLASSES.handle,
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
    this.track.setProgress( p, false );
  }
  /*
    Method that is invoked on track progress change.
    @private
    @param {Number} Progress [0...1].
  */
  _onTrackProgress ( p ) {
    this.handle.setProgress( p, false );
  }
  /*
    Method to initialize HammerJS an set up all even listeners.
    @private
  */
  // _hammerTime () {
  //   let hammerTime = HamerJS(this.el);
  //   hammerTime.on('pan', ( e ) => {
  //     this._delta = e.deltaX;
  //     this._setShift( this._shift + e.deltaX );
  //   });

  //   hammerTime.on('panend', ( e ) => { this._saveDelta(); });
  // }
}

export default Slider;