
import Module         from './components/module';
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

require('css/blocks/mojs-player.postcss.css');
let CLASSES = require('css/blocks/mojs-player.postcss.css.json');

class MojsPlayer extends Module {
  _declareDefaults () {
    super._declareDefaults();

    this._defaults.isBounds   = false;
    this._defaults.leftBound  = 0;
    this._defaults.rightBound = 1;
    this._defaults.progress   = 0;
    this._defaults.isPlaying  = false;
  }
  /*
    Method to render the module.
    @private
    @overrides @ Module
  */
  _render () {
    let p         = this._props,
        className = 'mojs-player';
    super._render();
    this.el.classList.add( CLASSES[ className ] );

    let left  = this._createChild( 'div', CLASSES[ `${ className }__left` ] ),
        mid   = this._createChild( 'div', CLASSES[ `${ className }__mid` ] ),
        right = this._createChild( 'div', CLASSES[ `${ className }__right` ] );

    this.playButton   = new PlayButton({ parent: left, isOn: p.isPlaying });
    this.stopButton   = new StopButton({ parent: left });
    this.repeatButton = new RepeatButton({ parent: left });

    this.playerSlider = new PlayerSlider({
      parent:             mid,
      leftProgress:       p.leftBound,
      rightProgress:      p.rightBound,
      progress:           p.progress
    });
    
    this.boundsButton = new BoundsButton({
      isOn:           p.isBounds,
      parent:         left,
      onStateChange:  this._boundsStateChange.bind( this )
    });

    this.speedControl = new SpeedControl({ parent: left });
    
    this.mojsButton   = new IconButton({
          parent:   right,
          icon:     'mojs',
          link:     'https://github.com/legomushroom/mojs-player',
          title:    'mo • js'
        });

    // this._boundsStateChange( p.isBounds );
  }
  /*
    Method that is invoked on bounds switch state change.
    @private
    @param {Boolean} Bounds state.
  */
  _boundsStateChange ( isOn ) {
    this.playerSlider[ `${ ( isOn ) ? 'enable' : 'disable' }Bounds` ]();
  }
}

new MojsPlayer({
  isBounds:     true,
  leftBound:    .5,
  rightBound:   .75,
  progress:     .6125,
  isPlaying:    true
});


export default MojsPlayer;