import Module  from './module';
import HamerJS from 'hammerjs';
import mojs    from 'mo-js';

require('css/blocks/handle.postcss.css');
let CLASSES = require('css/blocks/handle.postcss.css.json');

class Handle extends Module {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    this._defaults = {
      className:    '',
      parent:       document.body,
      minBound:     0,
      maxBound:     1,
      isBound:      false,
      isInversed:   false,
      onProgress:   null
    }
  }
  /*
    Method to set handle progress.
    @public
    @param {Number} Progress [0...1].
    @param {Boolean} If should invoke onProgress callback.
    @returns this.
  */
  setProgress ( progress, isCallback = true ) {
    let shift = this._progressToShift( progress );
    this._setShift( shift, isCallback );
    // calc delta and save it
    this._delta = shift - this._shift;
    this._saveDelta();
    return this;
  }
  /*
    Method to set bounds of progress.
    @public
    @param {Number} Min bound to set [0...1].
    @param {Number} Max bound to set [0...1].
    @returns this.
  */
  setBounds ( min, max ) {
    this.setMinBound( min );
    this.setMaxBound( max );
    return this;
  }
  /*
    Method to set min bound of progress.
    @public
    @param {Number} Min bound to set [0...1].
    @returns this.
  */
  setMinBound ( min ) {
    this._props.minBound = Math.max( min, 0 );
    if ( this._progress < min ) { this.setProgress( min ); }
    return this;
  }
  /*
    Method to set max bound of progress.
    @public
    @param {Number} Max bound to set [0...1].
    @returns this.
  */
  setMaxBound ( max ) {
    this._props.maxBound = Math.min( max, 1 );
    if ( this._progress > max ) { this.setProgress( max ); }
    return this;
  }
  /*
    Method to declare properties.
    @private
    @overrides @ Module.
  */
  _vars () {
    // `progress` of the handle [0..1]
    this._progress = 0;
    // `shift` of the handle ( position in `px` )
    this._shift    = 0;
    // `delta` deviation from the current `shift`
    this._delta    = 0;
    this._getMaxWidth();
  }
  /*
    Method to set handle shift.
    @private
    @param {Number} Shift in `px`.
    @param {Boolean} If should invoke onProgress callback.
    @returns {Number}.
  */
  _setShift ( shift, isCallback = true ) {
    let p        = this._props,
        minBound = p.minBound*this._maxWidth,
        maxBound = p.maxBound*this._maxWidth;

    shift = mojs.h.clamp( shift, minBound, maxBound );
    this._applyShift( shift );
    isCallback && this._onProgress( shift );
    return shift;
  }
  /*
    Method to apply shift to the DOMElement.
    @private
    @param {Number} Shift in pixels.
  */
  _applyShift ( shift ) {
    this.el.style.transform = `translateX( ${shift}px ) translateZ(0)`;
  }
  /*
    Method to get max width of the parent.
    @private
  */
  _getMaxWidth () { this._maxWidth = this._props.parent.clientWidth; }
  /*
    Method to render the component.
    @private
    @overrides @ Module
  */
  _render () {
    this._addElements();
    this._hammerTime();
  }
  /*
    Method to add DOM elements on render.
    @private
  */
  _addElements () {
    var p      = this._props,
        inner  = document.createElement('div'),
        shadow = document.createElement('div');

    this.el = document.createElement('div');

    inner.classList.add( `${ CLASSES.handle__inner }` );
    shadow.classList.add( `${ CLASSES.handle__shadow }` );
    let classList = this.el.classList;
    classList.add( `${ CLASSES.handle }` );
    classList.add( `${ this._props.className }` );
    if ( p.isBound ) { classList.add( `${ CLASSES['is-bound'] }` ); }
    if ( p.isInversed ) { classList.add( `${ CLASSES['is-inversed'] }` ); }
    
    this.el.appendChild( shadow );
    this.el.appendChild( inner );
  }
  /*
    Method to initialize HammerJS an set up all even listeners.
    @private
  */
  _hammerTime () {
    let hammerTime = HamerJS(this.el);
    hammerTime.on('pan', ( e ) => {
      this._delta = e.deltaX;
      this._setShift( this._shift + e.deltaX );
    });

    hammerTime.on('panend', ( e ) => { this._saveDelta(); });
  }
  /*
    Method to add _delta to _shift.
    @private
  */
  _saveDelta () { this._shift += this._delta; }
  /*
    Method to call onProgress callback.
    @private
    @param {Number} Shift in `px`.
  */
  _onProgress ( shift ) {
    let p        = this._props,
        progress = this._shiftToProgress( shift );
    if ( typeof p.onProgress === 'function' && this._progress !== progress) {
      this._progress = progress;
      p.onProgress.call( this, progress );
    }
  }
  /*
    Method to recalc shift to progress.
    @private
    @param {Number} Shift in `px`.
    @returns {Number} Progress [0...1].
  */
  _shiftToProgress ( shift ) {
    return shift / this._maxWidth;
  }
  /*
    Method to progress shift to shift.
    @private
    @param   {Number} Progress [0...1].
    @returns {Number} Shift in `px`.

  */
  _progressToShift ( progress ) {
    return progress*this._maxWidth;
  }
}

export default Handle;