
import Module       from './module'
import LabelButton  from './label-button';
import Slider       from './slider';
import mojs         from  'mo-js'

require('css/blocks/speed-control.postcss.css');
let CLASSES = require('css/blocks/speed-control.postcss.css.json');

class SpeedControl extends Module {
  /*
    Method to declare defaults for the module.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.isOn          = false;
    this._defaults.progress      = .5;
    this._defaults.onSpeedChange = null;
    this._defaults.onIsSpeed     = null
  }
  /*
    Initial render method.
    @private
    @overrides @ Module
    @returns this
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

    this.slider.setProgress( this._props.progress );
    // this._onButtonStateChange( p.isOn );
  }
  /*
    Method that is invoked on slider progress.
    @private
    @param {Number} Progress of the slider.
  */
  _onSliderProgress ( p ) {
    let props = this._props,
        args  = [ this._progressToSpeed(p), p ];

    this._callIfFunction( props.onSpeedChange, args );
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
    this._callIfFunction( this._props.onIsSpeed, [ isOn ] );
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
    if ( progress === .5 ) { speed = 1; }
    if ( progress > .5 ) {
      // normalize to 10
      speed = 1 + 18*(progress-.5);
      // pipe thru cubic.in easing to have nice pricision for start numbers
      speed = 1 + (9 * mojs.easing.cubic.in( speed/10 ));
    }
    return speed;
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
