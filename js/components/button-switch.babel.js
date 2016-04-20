import Button from './button';

require('css/blocks/button-switch.postcss.css');
let CLASSES = require('css/blocks/button-switch.postcss.css.json');

class ButtonSwitch extends Button {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Button
  */
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.isOn          = false;
    this._defaults.onStateChange = null;
  }
  /*
    Initial render method.
    @private
    @overrides @ Button
    @returns this
  */
  _render () {
    super._render();
    this.el.classList.add( CLASSES[ 'button-switch' ] );
    this._setState();
  }
  /*
    Method to invoke onPointerUp callback if excist.
    @private
    @overrides @ Button
    @param {Object} Original event object.
  */
  _pointerUp ( e ) {
    this._changeState();
    super._pointerUp( e );
  }
  /*
    Method to switch icons.
    @private
  */
  _changeState () {
    this._props.isOn = !this._props.isOn;
    this._callIfFunction( this._props.onStateChange );
    this._setState();
  }
  /*
    Method that have been called on switch state change.
    @private
  */
  _setState () {
    console.log('change')
  }
 
}

export default ButtonSwitch;
