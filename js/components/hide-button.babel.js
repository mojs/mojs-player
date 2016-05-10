
import ButtonSwitch from './button-switch';
import Icon         from './icon';

require('../../css/blocks/hide-button.postcss.css');
let CLASSES   = require('../../css/blocks/hide-button.postcss.css.json'),
    className = 'hide-button';

class HideButton extends ButtonSwitch {
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.title = 'hide (alt + h)'
  }
  /*
    Initial render method.
    @private
    @overrides @ Button
    @returns this
  */
  _render () {
    super._render();
    this.el.classList.add( CLASSES[ className ] );
    this._addIcon();
  }
  /*
    Method to add icon.
    @private
  */
  _addIcon () {
    this.icon = new Icon({
      parent:     this.el,
      className:  CLASSES[ `${ className }__icon` ],
      shape:      'hide',
      prefix:     this._props.prefix
    });
  }
  /*
    Method that have been called on switch state change.
    @private
    @override @ ButtonSwitch
  */
  _setState () {
    let method = ( this._props.isOn ) ? 'add' : 'remove' ;
    this.el.classList[ method ]( CLASSES[ `is-hidden` ] );
  }
}

export default HideButton;
