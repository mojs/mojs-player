import Icon     from './icon';
import Button   from './button';

require('css/blocks/icon-button.postcss.css');
let CLASSES = require('css/blocks/icon-button.postcss.css.json');

class IconButton extends Button {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Button
  */
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.icon = '';
  }
  /*
    Initial render method.
    @private
    @overrides @ Button
    @returns this
  */
  _render () {
    super._render();
    this.el.classList.add( CLASSES[ 'icon-button' ] );
    
    let icon = new Icon({ shape: this._props.icon, parent: this.el });
  }
}

export default IconButton;
