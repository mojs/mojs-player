import Icon         from './icon';
import ButtonSwitch from './button-switch';

require('../../css/blocks/opacity-switch.postcss.css');
let CLASSES = require('../../css/blocks/opacity-switch.postcss.css.json');

class OpacitySwitch extends ButtonSwitch {
  /*
    Method to decalre defaults.
    @private
    @overrides @ ButtonSwitch
  */
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.icon     = '';
    this._defaults.iconSize = '';
  }
  /*
    Method to render the module.
    @private
    @overrides @ ButtonSwitch
  */
  _render () {
    super._render();
    this.el.classList.add( CLASSES[ 'opacity-switch' ] );
    
    let p    = this._props,
        icon = new Icon({
          parent:     this.el,
          shape:      p.icon,
          size:       p.iconSize,
          className:  CLASSES[ 'icon' ],
          prefix:     p.prefix
        });
    this.el.appendChild( icon.el );
  }
  /*
    Method to react to switch state change.
    @private
    @overrides @ ButtonSwitch
  */
  _setState () {
    let method = ( this._props.isOn ) ? 'add' : 'remove';
    this.el.classList[ method ]( CLASSES[ 'is-on' ] );
  }
}

export default OpacitySwitch;
