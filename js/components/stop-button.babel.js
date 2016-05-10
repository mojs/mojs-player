import IconButton from './icon-button';

require('../../css/blocks/stop-button.postcss.css');
let CLASSES = require('../../css/blocks/stop-button.postcss.css.json');

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
