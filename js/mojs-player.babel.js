
import Polyfill       from 'classlist-polyfill';
import Icons          from './components/icons';
import Module         from './components/module';
import PlayerSlider   from './components/player-slider';
import IconButton     from './components/icon-button';
import SpeedControl   from './components/speed-control';
import PlayButton     from './components/play-button';
import StopButton     from './components/stop-button';
import RepeatButton   from './components/repeat-button';
import BoundsButton   from './components/bounds-button';
import HideButton     from './components/hide-button';

require('css/blocks/mojs-player.postcss.css');
let CLASSES = require('css/blocks/mojs-player.postcss.css.json');

/*
  TODO:
    - optimize arrays in args calls
*/

class MojsPlayer extends Module {
  /*
    Method to declare defaults.
    @private
    @overrides @ Module
  */
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
    this._defaults.speedValue = this._fallbackTo( m.speedValue, 1 );
    this._defaults.isSpeed    = this._fallbackTo( m.isSpeed,    false );
    this._defaults.isHidden   = this._fallbackTo( m.isHidden,    false );

    let str = 'mojs-player';
    this._defaults.prefix     = `${str}-${ this._hashCode( str ) }-`;
  }
  /*
    Callback for keyup on document.
    @private
    @param {Object} Original event object.
  */
  _keyUp ( e ) {
    if ( e.altKey ) {
      switch ( e.keyCode ) {
        case 80: // alt + P => PLAY/PAUSE TOGGLE
          this._props.isPlaying = !this._props.isPlaying;
          this._onPlayStateChange( this._props.isPlaying );
          break;
        case 83: // alt + S => STOP
          this._onStop();
          break;
        case 82: // alt + R => REPEAT TOGGLE
          this._props.isRepeat = !this._props.isRepeat;
          var method = ( this._props.isRepeat ) ? 'on' : 'off';
          this.repeatButton[ method ]();
          break;
        case 66: // alt + B => BOUNDS TOGGLE
          this._props.isBounds = !this._props.isBounds;
          var method = ( this._props.isBounds ) ? 'on' : 'off';
          this.boundsButton[ method ]();
          break;
        case 72: // alt + H => HIDE PLAYER TOGGLE
          this._props.isHidden = !this._props.isHidden;
          this._onHideStateChange( this._props.isHidden );
          var method = ( this._props.isHidden ) ? 'on' : 'off';
          this.hideButton[ method ]();
          break;
        case 49: // alt + 1 => RESET SPEED TO 1x
          this.speedControl.reset();
          break;
      }
    }
  }
  /*
    Method to declare properties.
    @private
    @overrides @ Module
  */
  _vars () {
    this._hideCount = 0;
  }
  /*
    Method to render the module.
    @private
    @overrides @ Module
  */
  _render () {
    this._initTimeline();
    let p         = this._props,
        className = 'mojs-player',
        icons     = new Icons({ prefix: this._props.prefix });
    super._render();
    this.el.classList.add( CLASSES[ className ] );
    this.el.setAttribute( 'id', 'js-mojs-player' );

    let left  = this._createChild( 'div', CLASSES[ `${ className }__left` ] ),
        mid   = this._createChild( 'div', CLASSES[ `${ className }__mid` ] ),
        right = this._createChild( 'div', CLASSES[ `${ className }__right` ] );

    this.repeatButton = new RepeatButton({
      parent:             left,
      isOn:               p.isRepeat,
      onStateChange:      this._onRepeatStateChange.bind( this ),
      prefix:             this._props.prefix
    });

    this.playerSlider = new PlayerSlider({
      parent:             mid,
      isBounds:           p.isBounds,
      leftProgress:       p.leftBound,
      rightProgress:      p.rightBound,
      progress:           p.progress,
      onLeftProgress:     this._onLeftProgress.bind( this ),
      onProgress:         this._onProgress.bind( this ),
      onRightProgress:    this._onRightProgress.bind( this ),
      onSeekStart:        this._onSeekStart.bind( this ),
      onSeekEnd:          this._onSeekEnd.bind( this )
    });
    
    this.boundsButton = new BoundsButton({
      isOn:           p.isBounds,
      parent:         left,
      onStateChange:  this._boundsStateChange.bind( this ),
      prefix:         this._props.prefix
    });

    this.speedControl = new SpeedControl({
      parent:         left,
      progress:       p.speed,
      isOn:           p.isSpeed,
      onSpeedChange:  this._onSpeedChange.bind( this ),
      onIsSpeed:      this._onIsSpeed.bind( this ),
      prefix:         this._props.prefix
    });

    this.stopButton   = new StopButton({
      parent:         left,
      isPrepend:      true,
      onPointerUp:    this._onStop.bind( this ),
      prefix:         this._props.prefix
    });

    this.playButton   = new PlayButton({
      parent:         left,
      isOn:           p.isPlaying,
      isPrepend:      true,
      onStateChange:  this._onPlayStateChange.bind( this ),
      prefix:         this._props.prefix
    });
    
    this.mojsButton   = new IconButton({
      parent:   right,
      icon:     'mojs',
      link:     'https://github.com/legomushroom/mojs-player',
      title:    'mo • js',
      prefix:   this._props.prefix
    });

    this.hideButton   = new HideButton({
      parent:         this.el,
      className:      CLASSES[ `${ className }__hide-button` ],
      isOn:           p.isHidden,
      onStateChange:  this._onHideStateChange.bind( this ),
      prefix:         this._props.prefix
    });

    this._listen();
  }
  /*
    Method to initialize event listeners.
    @private
  */
  _listen () {
    window.addEventListener( 'beforeunload', this._onUnload.bind(this) );
    document.addEventListener( 'keyup' , this._keyUp.bind(this) );
  }
  /*
    Method that is invoked when user touches the track.
    @private
    @param {Object} Original event object.
  */
  _onSeekStart ( e ) { this._sysTween.pause(); }
  /*
    Method that is invoked when user touches the track.
    @private
    @param {Object} Original event object.
  */
  _onSeekEnd ( e ) {
    clearTimeout( this._endTimer );
    this._endTimer = setTimeout( () => {
      this._props.isPlaying &&this._play();
    }, 20 );
  }
  /*
    Method to init timeline.
    @private
  */
  _initTimeline () {
    this.timeline = new mojs.Timeline({});
    this.timeline.add( this._o.add );

    this._sysTween = new mojs.Tween({
      duration:        this.timeline._props.repeatTime,
      onProgress:      this._onSysProgress.bind( this ),
      onComplete:      this._onSysTweenComplete.bind( this ),
      onPlaybackStop:  () => { this._setPlayState( 'off' ); },
      onPlaybackPause: () => { this._setPlayState( 'off' ); },
      onPlaybackStart: () => { this._setPlayState( 'on' ) }
    });
  }
  /*
    Method that is invoked on system tween progress.
    @private
    @param {Number} Progress value [0...1].
  */
  _onSysProgress ( p ) {
    this.playerSlider.setTrackProgress( p );
    let rightBound = ( this._props.isBounds ) ? this._props.rightBound : 1,
        leftBound  = ( this._props.isBounds ) ? this._props.leftBound : -1;

    if ( p < leftBound && p !== 0 ) {
      this._sysTween.pause();
      this._defer( this._play );
    }
    if ( p >= rightBound ) {
      this._sysTween.pause();
      if ( this._props.isRepeat ) {
        this._defer( this._play );
      } else { this._props.isPlaying = false; }
    }
  }
  /*
    Method to set play button state.
    @private
    @param {String} Method name to call it on playButton.
  */
  _setPlayState ( method ) {
    clearTimeout( this._playTimeout );
    this._playTimeout = setTimeout( () => {
      this.playButton && this.playButton[ method ]( false );
    }, 2);
  }
  /*
    Method that is invoked on system tween completion.
    @private
    @param {Boolean} If forward direction.
  */
  _onSysTweenComplete ( isForward ) {
    if ( this._props.isPlaying && isForward ) {
      if ( this._props.isRepeat ) {
        this._sysTween.stop();
        this._play();
      }
    }
  }
  /*
    Method that is invoked play button state change.
    @private
    @param {Boolean} Repeat button state.
  */
  _onPlayStateChange ( isPlay ) {
    this._props.isPlaying = isPlay;
    if ( isPlay ) { this._play(); } else { this._sysTween.pause(); }
  }
  /*
    Callback for hide button change state.
    @private
    @param {Boolean}
  */
  _onHideStateChange ( isHidden ) {
    this._props.isHidden = isHidden;
    let method = ( isHidden ) ? 'add' : 'remove';
    this.el.classList[ method ]( CLASSES[ 'is-hidden' ] );
    // enable CSS transition on subsequent calls
    if ( this._hideCount++ === 1 ) {
      this.el.classList.add( CLASSES[ 'is-transition' ] );
    }
  }
  /*
    Method to play system tween from progress.
    @private
  */
  _play () {
    let p         = this._props,
        leftBound = ( p.isBounds ) ? p.leftBound : p.progress,
        progress  = ( p.progress >= this._getBound( 'right' ) )
          ? leftBound : p.progress;

    this._sysTween
      .setProgress( progress )
      .setSpeed( p.speedValue )
      .play();
  }
  /*
    Method that is invoked on stop button tap.
    @private
  */
  _onStop ( ) {
    this._props.isPlaying = false;
    // this.playButton.off();
    this._sysTween.stop();
  }
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
    this.playerSlider._props.isBounds = isOn;
    this.playerSlider[ `${ ( isOn ) ? 'enable' : 'disable' }Bounds` ]();
    this._props.isBounds = isOn;
  }
  /* 
    Method that is invoked on speed value change.
    @private
    @param {Number} Speed value.
    @param {Number} Slider progress.
  */
  _onSpeedChange ( speed, progress ) {
    this._props.speed = progress;
    this._props.speedValue = speed;
    this._sysTween.setSpeed( speed );
  }
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
  _onProgress ( progress ) {
    this._props.progress = progress;
    if ( !this.timeline._prevTime ) {
      this.timeline.setProgress( 0 );
    }
    this.timeline.setProgress( progress );
  }
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
  /*
    Method to get bound regarding isBound option.
    @private
    @param {String} Bound name.
  */
  _getBound ( boundName ) {
    let p        = this._props,
        fallback = ( boundName === 'left' ) ? 0 : 1;
   
    return ( p.isBounds ) ? p[ `${ boundName }Bound` ] : fallback;
  }
  /*
    Method to defer a method.
    @private
    @param {Function} Function that should be defered.
  */
  _defer (fn) { setTimeout( fn.bind(this), 1 ); }
  /*
    Method to generate hash code.
    @private
    @return {String} Hash code.
  */
  _hashCode ( str ) {
    var hash = 0, i, chr, len;
    if (str.length === 0) return hash;
    for (i = 0, len = str.length; i < len; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }
}

let el = document.querySelector( '#js-el' );
let tw = new mojs.Tween({
  duration:  4000,
  onUpdate (p) {
    el.style.transform = `translateX(${ 1000 * p }px)`;
  }
});

let mojsPlayer = new MojsPlayer({
  add: tw
});

export default MojsPlayer;