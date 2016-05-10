import Button from './button';

require('../../css/blocks/button-switch.postcss.css');
let CLASSES = require('../../css/blocks/button-switch.postcss.css.json');

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
    Method to set the state to `true`.
    @public
    @param {Boolean} If should invoke callback.
  */
  on ( isCallback = true ) {
    // set to true because the next step is toggle
    this._props.isOn = true;
    this._reactOnStateChange( isCallback );
  }
  /*
    Method to set the state to `false`.
    @public
    @param {Boolean} If should invoke callback.
  */
  off ( isCallback = true ) {
    // set to true because the next step is toggle
    this._props.isOn = false;
    this._reactOnStateChange( isCallback );
  }

  // ---

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
    this._reactOnStateChange();
  }
  /*
    Method to invoke onPointerUp callback if excist.
    @private
    @overrides @ Button
    @param {Object} Original event object.
  */
  _pointerUp ( e ) {
    if ( !this.wasTouched ) {
      this.wasTouched = false;
      e.stopPropagation();
      return;
    }
    this._changeState();
    super._pointerUp( e );
  }
  /*
    Method to switch icons.
    @private
  */
  _changeState () {
    this._props.isOn = !this._props.isOn;
    this._reactOnStateChange();
  }
  /*
    Method to react on state change.
    @private
    @param {Boolean} If should invoke callback.
  */
  _reactOnStateChange ( isCallback = true ) {
    if ( isCallback ) {
      this._callIfFunction( this._props.onStateChange, this._props.isOn );
    }
    this._setState();
  }
  /*
    Method that have been called on switch state change.
    @private
  */
  _setState () {
    // console.log('change');
  }
 
}

export default ButtonSwitch;
