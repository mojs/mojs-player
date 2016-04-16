/*
  Base class for all modules.
  Extends _defaults to _props
*/
class Module {
  /*
    constructor method calls scaffolding methods.
  */
  constructor ( o = {} ) {
    this._o     = o;
    this._index = this._o.index || 0;
    this._declareDefaults();
    this._extendDefaults();
    this._vars()
    this._render();
  }
  /*
    Method to declare defaults.
    @private
  */
  _declareDefaults () {
    this._defaults = { };
  }
  /*
    Method to declare module's variables.
    @private
  */
  _vars () { }
  /*
    Method to render on initialization.
    @private
  */
  _render () { }
  /*
    Method to set property on the module.
    @private
    @param {String, Object} Name of the property to set
                            or object with properties to set.
    @param {Any} Value for the property to set. Could be
                  undefined if the first param is object.
  */
  _setProp ( attr, value ) {
    if ( typeof attr === 'object' ) {
      for ( var key in attr ) { this._assignProp( key, attr[key] ); }
    } else { this._assignProp( attr, value ); }
  }
  /*
    Method to assign single property's value.
    @private
    @param {String} Property name.
    @param {Any}    Property value.
  */
  _assignProp ( key, value ) {
    this._props[key] = value;
  }
  /*
    Method to copy `_o` options to `_props` object
    with fallback to `_defaults`.
    @private
  */
  _extendDefaults ( ) {
    this._props  = {};
    this._deltas = {};
    for (var key in this._defaults) {
      // TODO skip property if it is listed in _skipProps
      // if (this._skipProps && this._skipProps[key]) { continue; }
      // copy the properties to the _o object
      this._assignProp( key, this._o[key] || this._defaults[key] );
    }
  }
}

export default Module;