import Module  from './module';

// require('css/blocks/handle.postcss.css');
// let CLASSES = require('css/blocks/handle.postcss.css.json');

class Ripple extends Module {
  /*
    Method to declare defaults.
    @private
    @overrides @ Module.
  */
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.withHold = true;
  }
  /*
    Method to render the component.
    @private
    @overrides @ Module
  */
  _render () {
    super._render();
    this._addRipple();
  }
  /*
    Method to construct ripple object.
    @private
  */
  _addRipple () {
    this.transit = new mojs.Transit({
      parent:       this.el,
      left: 0,  top: 0,
      // strokeWidth:  10,
      strokeWidth:  { 10 : 0 },
      fill:         'none',
      stroke:       'hotpink',
      fill:         'hotpink',
      fillOpacity:  .75,
      opacity:      { .85: 0 },
      radius:       40,
      scale:        { 0: 1 },
      isShowEnd:    false,
      // isForce3d:    true,
      onStart:      () => { this.isStart = true; },
      onUpdate:     this._onUpdate.bind( this ),
      onComplete:   () => { this.isStart = false; }
    });
  }
  /*
    Method that is invoked on ripple update.
    @private
    @param {Number} Curret progress [0...1].
  */
  _onUpdate ( p ) {
    if ( !this._props.withHold ) { return; }
    if ( p >= .15 && this.isStart && !this.isRelease ) {
      this.isStart = false;
      this.transit.setSpeed( .02 );
    }
  }
  /*
    Method that should be run on touch serface release.
    @private
  */
  _release () {
    if ( !this._props.withHold ) { return; }
    this.isRelease = true;
    this.transit.setSpeed( 1 ).play();
  }
  /*
    Method that should be run on touch serface hold.
    @private
    @param {Object} Origin event object.
  */
  _hold ( e ) {
    let x = ( e.offsetX != null ) ? e.offsetX : e.layerX,
        y = ( e.offsetY != null ) ? e.offsetY : e.layerY;

    this.isRelease = false;
    this.transit.tune({ x: x, y: y }).replay();
  }
  /*
    Method that should be run on touch serface cancel.
    @private
  */
  _cancel () {
    if ( !this._props.withHold ) { return; }
    this.isRelease = true;
    this.transit
      .pause()
      .setSpeed( 1 )
      .playBackward();
  }
}

export default Ripple;