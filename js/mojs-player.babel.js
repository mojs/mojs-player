
import PlayerSlider   from './components/player-slider';
import Polyfill       from 'classlist-polyfill';
import Icon           from './components/icon';
import IconButton     from './components/icon-button';
import IconFork       from './components/icon-fork';
import SpeedControl   from './components/speed-control';
import Button         from './components/button';
import PlayerButton   from './components/player-button';
import PlayButton     from './components/play-button';
import StopButton     from './components/stop-button';
import OpacitySwitch  from './components/opacity-switch';
import RepeatButton   from './components/repeat-button';
import BoundsButton   from './components/bounds-button';
import LabelButton    from './components/label-button';

// let speedControl = new SpeedControl;

let playButton   = new PlayButton();
let stopButton   = new StopButton();
let repeatButton = new RepeatButton();
let boundsButton = new BoundsButton();
let labelButton  = new LabelButton({ progress: .7 });

require('css/main.postcss.css');
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