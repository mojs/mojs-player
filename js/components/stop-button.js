import IconButton from './icon-button.js';
import CLASSES from '../../css/blocks/stop-button.pcss';

class StopButton extends IconButton {
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.icon = 'stop';
    this._defaults.title = 'stop (alt + s)';
  }
  /*
    Initial render method.
    @private
    @overrides @ Button
    @returns this
  */
  _render () {
    super._render();
    this._addClass( this.el, CLASSES[ 'stop-button' ] );
  }
}

export default StopButton;
