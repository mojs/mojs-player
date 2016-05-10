
import IconFork from './icon-fork';

require('../../css/blocks/play-button.postcss.css');
let CLASSES = require('../../css/blocks/play-button.postcss.css.json');
    // PLAYER_BTN_CLASSES = require('css/blocks/player-button.postcss.css.json');

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
