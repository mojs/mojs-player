import Module from './module';
import Handle from './handle';

require('css/blocks/timeline-slider.postcss.css');

class Slider extends Module {
  /*
    Method to declare _defaults.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    this._defaults = {
      className: '',
      parent:    document.body
    }
  }
  /*
    Method to render the component.
    @private
    @overrides @ Module
  */
  _render () {
    var p      = this._props;
    
    this.el     = document.createElement('div');
    this.track  = document.createElement('div');

    this.el    .classList.add(`${p.className}`);
    this.track .classList.add(`${p.className}__track`);

    this.el.appendChild( this.track );
    p.parent.appendChild( this.el );

    this.handle = new Handle({
      parent: this.el,
      onProgress: (p) => { console.log(p); }
    });
    
    this.el.appendChild( this.handle.el );

    this.handle.setProgress(.5);
  }
}

export default Slider;