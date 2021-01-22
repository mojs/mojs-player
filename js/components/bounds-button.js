import RepeatButton from './repeat-button.js';

class BoundsButton extends RepeatButton {
  /*
    Method to declare defaults.
    @private
    @overrides @ RepeatButton
  */
  _declareDefaults () {
    super._declareDefaults();
    this._defaults.icon  = 'bounds';
    this._defaults.title = 'progress bounds (alt + b)';
  }
}

export default BoundsButton;
