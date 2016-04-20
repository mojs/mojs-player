
import PlayerSlider from './components/player-slider';
import Polyfill     from 'classlist-polyfill';
import Icon         from './components/icon';
import IconButton   from './components/icon-button';
import IconFork     from './components/icon-fork';
import SpeedControl from './components/speed-control';
import Button       from './components/button';
import PlayerButton from './components/player-button';

let speedControl = new SpeedControl;

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