
import PlayerSlider from './components/player-slider';
import Polyfill     from 'classlist-polyfill';
import Icon         from './components/icon'

let playerSlider = new PlayerSlider;

let icon = new Icon({
  'shape': 'stop',
  onPointerDown () {
    console.log('pointer down');
  },
  onPointerUp () {
    console.log('pointer up');
  },
  onDoubleTap () {
    console.log('double tap');
  }

});

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