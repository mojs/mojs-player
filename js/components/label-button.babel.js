import ButtonSwitch from './button-switch';

require('../../css/blocks/label-button.postcss.css');
let CLASSES = require('../../css/blocks/label-button.postcss.css.json');

class LabelButton extends ButtonSwitch {
  /*
    Method to declare defaults.
    @private
    @overrides @ OpacitySwitch
  */
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.title    = 'speed (reset: alt + 1)';
  }
  /*
    Method to populate the label with progress text.
    @public
    @param {String} Text to set.
  */
  setLabelText ( text ) {
    this.label.innerHTML = text;
  }

  /*
    ^  PUBLIC  ^
    v PPRIVATE v
  */

  /*
    Initial render method.
    @private
    @overrides @ Button
    @returns this
  */
  _render () {
    super._render();
    this._addClass( this.el, CLASSES[ 'label-button' ] );
    this._addLabel();
    // this.setLabelText( this._props.progress );
  }
  /*
    Method to add label to the `el`.
    @private
  */
  _addLabel () {
    this.label = this._createElement('div');
    this.label.classList.add( CLASSES[ `label-button__label` ] );
    this.el.appendChild( this.label );
  }
}

export default LabelButton;
