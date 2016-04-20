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
    this._defaults = {
      className:  '',
      parent:     document.body,
    };
  }
  /*
    Method to add pointer down even listener to el.
    @param {Object}   HTMLElement to add event listener on.
    @param {Function} Event listener callback.
  */
  _addPointerDownEvent (el, fn) {
    if (window.navigator.msPointerEnabled) {
        el.addEventListener('MSPointerDown', fn);
      } else if ( window.ontouchstart !== undefined ) {
        el.addEventListener('touchstart', fn);
        el.addEventListener('mousedown', fn);
      } else {
        el.addEventListener('mousedown', fn);
      }
  }
  /*
    Method to add pointer up even listener to el.
    @param {Object}   HTMLElement to add event listener on.
    @param {Function} Event listener callback.
  */
  _addPointerUpEvent (el, fn) {
    if (window.navigator.msPointerEnabled) {
      el.addEventListener('MSPointerUp', fn);
    } else if ( window.ontouchstart !== undefined ) {
      el.addEventListener('touchend', fn);
      el.addEventListener('mouseup', fn);
    } else {
      el.addEventListener('mouseup', fn);
    }
  }
  /*
    Method to check if variable holds link to a function.
    @param {Function?} A variable to check.
    @returns {Boolean} If passed variable is a function.
  */
  _isFunction ( fn ) { return ( typeof fn === 'function' ); }
  /*
    Method to a function or silently fail.
    @param {Function?} A variable to check.
    @param {Array like} Arguments.
  */
  _callIfFunction ( fn, args ) {
    this._isFunction( fn ) && fn.apply( this, args );
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
  _render () { this._addMainElement(); }
  /*
    Method to add `this.el` on the module.
    @private
  */
  _addMainElement () {
    let p = this._props;

    this.el = this._createElement( 'div' );
    this._addMainClasses();
    p.parent.appendChild( this.el );
  }
  /*
    Method to classes on `this.el`.
    @private
  */
  _addMainClasses () {
    let p = this._props;
    if ( p.className instanceof Array ) {
      for (var i = 0; i < p.className.length; i++) {
        this._addClass( this.el, p.className[i] );
      }
    } else { this._addClass( this.el, p.className ); }
  }
  /*
    Method to add a class on el.
    @private
    @param {Object} HTML element to add the class on.
    @param {String} Class name to add.
  */
  _addClass ( el, className ) { className && el.classList.add( className ); }
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
  /*
    Method to create HTMLElement from tag name.
    @private
    @param {String} Name of the tag to create `HTML` element.
    @returns {Object} HtmlElement.
  */
  _createElement ( tagName ) { return document.createElement( tagName ); }
}

export default Module;