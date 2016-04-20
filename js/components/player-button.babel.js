import Button from './button';

require('css/blocks/player-button.postcss.css');
let CLASSES = require('css/blocks/player-button.postcss.css.json');

class PlayerButton extends Button {
  /*
    Initial render method.
    @private
    @overrides @ Module
    @returns this
  */
  // _render () {
  //   var p = this._props;
  //   this._addMainElement();
  //   this.el.classList.add( CLASSES.button );
  //   this._addListeners();
  // }
}

export default PlayerButton;
