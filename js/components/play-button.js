
import IconFork from './icon-fork.js';
import CLASSES from '../../css/blocks/play-button.pcss';

class PlayButton extends IconFork {
  /*
    Method to declare defaults on the module.
    @private
    @overrides @ ButtonSwitch
  */
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.icon1 = 'pause';
    this._defaults.icon2 = 'play';
    this._defaults.title = 'play/pause (alt + p)';
  }
  /*
    Method to render the module.
    @private
  */
  _render () {
    super._render();
    this._addClass( this.el, CLASSES[ 'play-button' ] );
  }
}

export default PlayButton;
