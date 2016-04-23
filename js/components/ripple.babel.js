import Module  from './module';
import HammerJS from 'hammerjs';
import mojs    from 'mo-js';

// require('css/blocks/handle.postcss.css');
// let CLASSES = require('css/blocks/handle.postcss.css.json');

class Ripple extends Module {
  /*
    Method to render the component.
    @private
    @overrides @ Module
  */
  _render () {
    super._render();
    this.transit = new mojs.Transit({
      parent:       this.el,
      strokeWidth:  { 10 : 0 },
      fill:         'none',
      // stroke:       'white',
      stroke:       'hotpink',
      fill:         'hotpink',
      fillOpacity:  .75,
      opacity:      { .5: 0 },
      radius:       { 0: 40 },
      isShowEnd:    false,
      onStart: () => { this.isStart = true; },
      onUpdate: ( p ) => {
        if ( p >= .15 && this.isStart && !this.isRelease ) {
          this.setSpeed( .02 );
          this.isStart = false;
        }
      }
    });
  }
  /*
    Method that should be run on touch serface release.
    @private
  */
  _release () {
    this.isRelease = true;
    this.transit.setSpeed( 1 ).play();
  }
  /*
    Method that should be run on touch serface hold.
    @private
    @param {Object} Origin event object.
  */
  _hold ( e ) {
    this.isRelease = false;
    this.transit.tune({ x: e.layerX, y: e.layerY }).replay();
  }
  /*
    Method that should be run on touch serface cancel.
    @private
  */
  _cancel () {
    this.isRelease = true;
    this.transit
      .pause()
      .setSpeed( 1 )
      .playBackward();
  }
}

export default Ripple;