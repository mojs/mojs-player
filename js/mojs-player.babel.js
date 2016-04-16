
import PlayerSlider from './components/player-slider';
import Polyfill from 'classlist-polyfill';

let playerSlider = new PlayerSlider();

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