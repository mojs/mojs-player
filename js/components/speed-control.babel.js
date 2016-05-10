
import Module       from './module'
import LabelButton  from './label-button';
import Slider       from './slider';

require('../../css/blocks/speed-control.postcss.css');
let CLASSES = require('../../css/blocks/speed-control.postcss.css.json');

class SpeedControl extends Module {
  /*
    Method to declare defaults for the module.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.isOn          = false;
    this._defaults.speed         = 1;
    this._defaults.progress      = .5;
    this._defaults.onSpeedChange = null;
    this._defaults.onIsSpeed     = null
  }
  /*
    Method to reset speed to 1x.
    @public
    @returns this
  */
  reset () { this._onDoubleTap(); }
  /*
    Method to decrease speed value.
    @public
    @param {Number} Value that the slider should be decreased by.
    @returns this.
  */
  decreaseSpeed ( amount = 0.01 ) {
    let p = this._props;
    p.progress -= amount;
    p.progress = ( p.progress < 0 ) ? 0 : p.progress;
    this.slider.setProgress( p.progress );
    return this;
  }
  /*
    Method to inclease speed value.
    @public
    @param {Number} Value that the slider should be increased by.
    @returns this.
  */
  increaseSpeed ( amount = 0.01 ) {
    let p = this._props;
    p.progress += amount;
    p.progress = ( p.progress > 1 ) ? 1 : p.progress;
    this.slider.setProgress( p.progress );
    return this;
  }
  /*
    Initial render method.
    @private
    @overrides @ Module
  */
  _render () {
    let p         = this._props,
        className = 'speed-control',
        slider    = this._createElement( 'div' ),
        sliderIn  = this._createElement( 'div' ),
        icon      = this._createElement( 'div' );

    this._addMainElement();
    this.el.classList.add( CLASSES[ className ] );
    // places for child components
    slider.classList.add( CLASSES[ `${ className }__slider` ] );
    // sliderIn.classList.add( CLASSES[ `${ className }__slider-inner` ] );
    // slider.appendChild( sliderIn );
    this.el.appendChild( slider );
    // child components
    this.labelButton = new LabelButton({
      parent:         this.el,
      isOn:           p.isOn,
      className:      CLASSES[ `${ className }__icon` ],
      onStateChange:  this._onButtonStateChange.bind( this ),
      onDoubleTap:    this._onDoubleTap.bind( this )
    });
    this.slider      = new Slider({
      parent:       slider,
      isProgress:   false,
      direction:    'y',
      onProgress:   this._onSliderProgress.bind( this ),
      snapPoint:    .5,
      snapStrength: .05
    });

    this.slider.setProgress( this._speedToProgress( this._props.speed ) );
  }
  /*
    Method that is invoked on slider progress.
    @private
    @param {Number} Progress of the slider.
  */
  _onSliderProgress ( p ) {
    // progress should be at least 0.01
    p = Math.max( p, 0.0001 );

    let props = this._props,
        args  = [  ];

    this._callIfFunction( props.onSpeedChange, this._progressToSpeed(p), p );
    this.labelButton.setLabelText( this._progressToLabel( props.progress = p ) );
  }
  /*
    Method that is invoked on button state change.
    @private
    @param {Boolean} State of the button switch.
  */
  _onButtonStateChange ( isOn ) {
    let method = ( isOn ) ? 'add' : 'remove' ;
    this.el.classList[ method ]( CLASSES[ 'is-on' ] );
    this._callIfFunction( this._props.onIsSpeed, isOn );
  }
  /*
    Method to recalc progress to label string.
    @private
    @param {Number} Progress [0...1].
    @returns {String} String for a label to set.
  */
  _progressToLabel ( progress ) {
    let text    = this._progressToSpeed(progress).toFixed( 2 ),
        zeros = /\.+00$/;

    if ( text.match( zeros ) ) { text = text.replace( zeros, '' ); }

    return `${ text }x`;
  }
  /*
    Method to recalc progress to speed.
    @private
    @param   {Number} Progress [0...1].
    @returns {Number} Speed [0...10].
  */
  _progressToSpeed ( progress ) {
    let speed = progress;
    if ( progress < .5 ) {
      speed = 2*progress;
    }
    if ( progress === .5 ) { speed = 1; }
    if ( progress > .5 ) {
      progress -= .5;
      speed = 1 + progress*18;
      // console.log( speed/10, mojs.easing.cubic.out( speed/10 ) );
      // console.log( .5 + ( speed - 1 ) / 18 );
    }
    return speed;
  }
  /*
    Method to recalc progress to speed.
    @private
    @param   {Number} Progress [0...1].
    @returns {Number} Speed [0...10].
  */
  _speedToProgress ( speed ) {
    let progress = speed;
    if ( speed < 1 ) { progress = speed/2; }
    if ( speed === 1 ) { progress = .5; }
    if ( speed > 1 ) {
      progress = .5 + ( ( speed - 1 ) / 18 );
    }
    return progress;
  }
  /*
    Method that is invoked on double button tap.
    @private
  */
  _onDoubleTap () {
    this.slider.setProgress( .5 );
    this.labelButton.off();
  }
}

export default SpeedControl;
