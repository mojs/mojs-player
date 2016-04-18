import Icon from './icon';
// import HammerJS from 'hammerjs'

require('css/blocks/icon-switch.postcss.css');
let CLASSES = require('css/blocks/icon-switch.postcss.css.json');

class IconSwitch extends Icon {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.isOn = false;
  }
  /*
    Initial render method.
    @private
    @overrides @ Icon
    @returns this
  */
  _render () {
    super._render();
    this.el.classList.add( CLASSES[ 'icon-switch' ] );
    this._addListeners();
    this._setState();
  }
  /*
    Method to invoke onPointerUp callback if excist.
    @private
    @overrides @ Icon
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

export default IconSwitch;
