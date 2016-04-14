import Module  from './module';
import HamerJS from 'hammerjs';
import mojs    from 'mo-js';


require('css/blocks/handle.postcss.css');

class Handle extends Module {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    this._defaults = {
      className:  'handle',
      parent:     document.body,
      onProgress: null
    }
  }
  /*
    Method to set handle progress.
    @public
    @param {Number} Progress [0...1].
    @returns this.
  */
  setProgress ( progress ) {
    let shift = this._progressToShift( progress );
    this._setShift( shift );
    // calc delta and save it
    this._delta = shift - this._shift;
    this._saveDelta();
    return this;
  }
  /*
    Method to set handle shift.
    @public
    @param {Number} Shift in `px`.
    @returns {Number}.
  */
  _setShift ( shift ) {
    shift = mojs.h.clamp( shift, 0, this._maxWidth );
    this._applyShift( shift );
    this._onProgress( shift );
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

    inner.classList.add(`${p.className}__inner`);
    shadow.classList.add(`${p.className}__shadow`);
    this.el.classList.add( `${p.className}` );
    
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