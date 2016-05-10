import OpacitySwitch from './opacity-switch';

require('../../css/blocks/repeat-button.postcss.css');
let CLASSES = require('../../css/blocks/repeat-button.postcss.css.json');

class RepeatButton extends OpacitySwitch {
  /*
    Method to declare defaults.
    @private
    @overrides @ OpacitySwitch
  */
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.icon     = 'repeat';
    this._defaults.iconSize = 'x2';
    this._defaults.title    = 'repeat (alt + r)';
  }
  /*
    Initial render method.
    @private
    @overrides @ Button
    @returns this
  */
  _render () {
    super._render();
    this._addClass( this.el, CLASSES[ 'repeat-button' ] );
  }
}

export default RepeatButton;
