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
      let shift = mojs.h.clamp( this._shift + e.deltaX, 0, this._maxWidth );
      this.el.style.transform = `translateX( ${shift}px ) translateZ(0)`;
    });

    hammerTime.on('panend', ( e ) => { this._shift += this._delta; });
  }
  /*
    Method to call onProgress callback.
    @private
    @param {Number} Shift in `px`.
  */
  _onProgress ( shift ) {
    let p        = this._props,
        progress = this._shiftToProgress( shift );
    if ( typeof p.onProgress === 'function' ) {
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
    return this._maxWidth / shift;
  }
}

export default Handle;