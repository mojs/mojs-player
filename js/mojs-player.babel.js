
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
    let m = JSON.parse( localStorage.getItem('mojs-player-model') ) || {};

    this._defaults.isBounds   = this._fallbackTo( m.isBounds,   false );
    this._defaults.leftBound  = this._fallbackTo( m.leftBound,  0 );
    this._defaults.rightBound = this._fallbackTo( m.rightBound, 1 );
    this._defaults.progress   = this._fallbackTo( m.progress,   0 );
    this._defaults.isPlaying  = this._fallbackTo( m.isPlaying,  false );
    this._defaults.isRepeat   = this._fallbackTo( m.isRepeat,   false );
    this._defaults.speed      = this._fallbackTo( m.speed,      .5 );
    this._defaults.isSpeed    = this._fallbackTo( m.isSpeed,    false );
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

    this.playButton   = new PlayButton({
      parent:            left,
      isOn:              p.isPlaying,
      onStateChange:     this._onPlayStateChange.bind( this )
    });
    this.stopButton   = new StopButton({
      parent:            left,
      onTap:             this._onStop.bind( this )
    });

    this.repeatButton = new RepeatButton({
      parent:             left,
      isOn:               p.isRepeat,
      onStateChange:      this._onRepeatStateChange.bind( this )
    });

    this.playerSlider = new PlayerSlider({
      parent:             mid,
      leftProgress:       p.leftBound,
      rightProgress:      p.rightBound,
      progress:           p.progress,
      onLeftProgress:     this._onLeftProgress.bind( this ),
      onProgress:         this._onProgress.bind( this ),
      onRightProgress:    this._onRightProgress.bind( this )
    });
    
    this.boundsButton = new BoundsButton({
      isOn:           p.isBounds,
      parent:         left,
      onStateChange:  this._boundsStateChange.bind( this )
    });

    this.speedControl = new SpeedControl({
      parent:         left,
      progress:       p.speed,
      isOn:           p.isSpeed,
      onSpeedChange:  this._onSpeedChange.bind( this ),
      onIsSpeed:      this._onIsSpeed.bind( this )
    });
    
    this.mojsButton   = new IconButton({
      parent:   right,
      icon:     'mojs',
      link:     'https://github.com/legomushroom/mojs-player',
      title:    'mo • js'
    });
    window.addEventListener('beforeunload', this._onUnload.bind(this));
  }
  /*
    Method that is invoked play button state change.
    @private
    @param {Boolean} Repeat button state.
  */
  _onPlayStateChange ( isPlay ) {
    this._props.isPlaying = isPlay;
  }
  /*
    Method that is invoked on stop button tap.
    @private
  */
  _onStop ( ) { console.log( 'stop' ); }
  /*
    Method that is invoked on repeat switch state change.
    @private
    @param {Boolean} Repeat button state.
  */
  _onRepeatStateChange ( isOn ) { this._props.isRepeat = isOn; }
  /*
    Method that is invoked on bounds switch state change.
    @private
    @param {Boolean} Bounds state.
  */
  _boundsStateChange ( isOn ) {
    this.playerSlider[ `${ ( isOn ) ? 'enable' : 'disable' }Bounds` ]();
    this._props.isBounds = isOn;
  }
  /* 
    Method that is invoked on speed value change.
    @private
    @param {Number} Speed value.
    @param {Number} Slider progress.
  */
  _onSpeedChange ( speed, progress ) { this._props.speed = progress; }
  /*
    Method that is invoked on speed state change.
    @private
    @param {Boolean} Speed control state.
  */
  _onIsSpeed ( isOn ) { this._props.isSpeed = isOn; }
  /*
    Method that is invoked on timeline's left bound progress.
    @private
    @param {Number} Progress value [0...1].
  */
  _onLeftProgress ( progress ) { this._props.leftBound = progress; }
  /*
    Method that is invoked on timeline progress.
    @private
    @param {Number} Progress value [0...1].
  */
  _onProgress ( progress ) { this._props.progress = progress; }
  /*
    Method that is invoked on timeline's right bound progress.
    @private
    @param {Number} Progress value [0...1].
  */
  _onRightProgress ( progress ) { this._props.rightBound = progress; }
  /*
    Method that is invoked on window unload.
    @private
    @param {Object} Original even object.
  */
  _onUnload ( e ) {
    localStorage.setItem('mojs-player-model', JSON.stringify( this._props ) );
  }
  /*
    Method that returns the second argument if the first one isn't set.
    @private
    @param {Any} Property to set.
    @param {Any} Property to return as fallback.
    @returns {Any} If set - the first property, if not - the second.
  */
  _fallbackTo ( prop, fallback ) { return ( prop != null ) ? prop : fallback; }
}

let mojsPlayer = new MojsPlayer({

});


export default MojsPlayer;