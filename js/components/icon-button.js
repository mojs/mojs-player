import Icon     from './icon.js';
import Button   from './button.js';
import CLASSES from '../../css/blocks/icon-button.pcss';

class IconButton extends Button {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Button
  */
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.icon      = '';
    this._defaults.iconClass = '';
  }
  /*
    Initial render method.
    @private
    @overrides @ Button
    @returns this
  */
  _render () {
    super._render();
    let p         = this._props,
        className = 'icon-button';
    this.el.classList.add( CLASSES[ className ] );

    let icon = new Icon({
      shape:      p.icon,
      parent:     this.el,
      className:  [ CLASSES[ `icon` ], p.iconClass ],
      prefix:     p.prefix
    });
  }
}

export default IconButton;
