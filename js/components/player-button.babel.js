import Button from './button';

require('css/blocks/player-button.postcss.css');
let CLASSES = require('css/blocks/player-button.postcss.css.json');

class PlayerButton extends Button {
  /*
    Initial render method.
    @private
    @overrides @ Button
    @returns this
  */
  _render () {
    super._render();
    this.el.classList.add( CLASSES[ 'player-button' ] );
  }
}

export default PlayerButton;
