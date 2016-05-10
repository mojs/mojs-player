import ButtonSwitch from './button-switch';
import Icon       from './icon';
// import HammerJS from 'hammerjs'

require('../../css/blocks/icon-fork.postcss.css');
let CLASSES = require('../../css/blocks/icon-fork.postcss.css.json');

class IconFork extends ButtonSwitch {
  /*
    Initial render method.
    @private
    @overrides @ Icon
    @returns this
  */
  _render () {
    super._render();
    this.el.classList.add( CLASSES[ 'icon-fork' ] );
    let p         = this._props,
        prefix    = p.prefix,
        parent    = this.el,
        className = CLASSES.icon;

    this.icon1 = new Icon({ shape: p.icon1, prefix, parent, className });
    this.icon2 = new Icon({ shape: p.icon2, prefix, parent, className });
  }
  /*
    Method that should be called on state change.
    @private
    @override @ IconSwitch
  */
  _setState () {
    let p         = this._props,
        classList = this.el.classList,
        method    = ( p.isOn ) ? 'add' : 'remove';

    classList[ method ]( CLASSES[ 'is-on' ] )
  }
}

export default IconFork;
