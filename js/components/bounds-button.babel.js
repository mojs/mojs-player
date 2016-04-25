import RepeatButton from './repeat-button';

// require('css/blocks/repeat-button.postcss.css');
// let CLASSES = require('css/blocks/repeat-button.postcss.css.json');

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
