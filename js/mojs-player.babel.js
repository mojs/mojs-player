
import Slider from './components/slider';
import Polyfill from 'classlist-polyfill';

let slider = new Slider({ className: 'timeline-slider' });

require('css/main.postcss.css')
const Main = {
  /*
    Initialization method.
    @public
    @param {Object} Initialization options.
  */
  init (o) {
    console.log( `Hello, ${o.name}!` );
  }
}

Main.init( { name: 'World' } )


export default Main;