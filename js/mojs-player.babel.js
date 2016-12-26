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

// TODO

require('../css/blocks/mojs-player.postcss.css');
let CLASSES = require('../css/blocks/mojs-player.postcss.css.json');

class MojsPlayer extends Module {
  constructor ( o ) {
    if ( typeof mojs === 'undefined' ) {
      throw new Error(`MojsPlayer relies on mojs^0.225.2, please include it before player initialization. [ https://github.com/legomushroom/mojs ] `);
    }
    super( o );
  }
  /*
    Method to declare defaults.
    @private
    @overrides @ Module
  */
  _declareDefaults () {
    super._declareDefaults();

    this._defaults.isSaveState  = true;
    this._defaults.isPlaying    = false;
    this._defaults.progress     = 0;
    this._defaults.isRepeat     = false;
    this._defaults.isBounds     = false;
    this._defaults.leftBound    = 0;
    this._defaults.rightBound   = 1;
    this._defaults.isSpeed      = false;
    this._defaults.speed        = 1;
    this._defaults.isHidden     = false;
    this._defaults.precision    = 0.1;
    this._defaults.name         = 'mojs-player';

    this.revision = '0.43.16';

    let str = this._fallbackTo( this._o.name, this._defaults.name );
    str += ( str === this._defaults.name ) ? '' : `__${this._defaults.name}`;
    this._localStorage = `${str}__${ this._hashCode( str ) }`;
  }
  /*
    Method to copy `_o` options to `_props` object
    with fallback to `localStorage` and `_defaults`.
    @private
  */
  _extendDefaults () {
    this._props  = {};
    let p           = this._props,
        o           = this._o,
        defs        = this._defaults;

    // get localstorage regarding isSaveState option
    p.isSaveState = this._fallbackTo( o.isSaveState, defs.isSaveState );
    let m = ( p.isSaveState )
          ? JSON.parse( localStorage.getItem(this._localStorage) ) || {}
          : {};

    for (let key in defs) {
        let value = this._fallbackTo( m[ key ], o[ key ] );
      this._assignProp( key, this._fallbackTo( value, defs[ key ] ) );
    }
    // get raw-speed option
    this._props[ 'raw-speed' ] = this._fallbackTo( m[ 'raw-speed' ], .5 );
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
        case 189: // alt + - => DECREASE PROGRESS
          this.playButton.off();
          this.playerSlider.decreaseProgress( ( e.shiftKey ) ? .1 : .01 );
          break;
        case 187: // alt + + => INCREASE PROGRESS
          this.playButton.off();
          this.playerSlider.increaseProgress( ( e.shiftKey ) ? .1 : .01 );
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
        // case 49: // alt + 1 => RESET SPEED TO 1x
        case 81: // alt + q => RESET SPEED TO 1x
          this.speedControl.reset();
          break;
        case 50: // alt + 2 => DECREASE SPEEED by .05
          this.speedControl.decreaseSpeed( ( e.shiftKey ) ? .05 : .01 );
          break;
        case 51: // alt + 3 => INCREASE SPEED by .05
          this.speedControl.increaseSpeed( ( e.shiftKey ) ? .05 : .01 );
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
    // this.el.classList.add(p.classNAme );
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
      // progress:       p.speed,
      speed:          p.speed,
      isOn:           p.isSpeed,
      onSpeedChange:  this._onSpeedChange.bind( this ),
      onIsSpeed:      this._onIsSpeed.bind( this ),
      prefix:         this._props.prefix
    });

    let proc        = 0,
        progress    = [],
        procToSpeed = [],
        speedToProc = [];

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
      parent:     right,
      className:  CLASSES[ `${ className }__mojs-logo` ],
      icon:       'mojs',
      target:     '_blank',
      link:       'https://github.com/legomushroom/mojs-player',
      title:      'mo • js',
      prefix:     this._props.prefix
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
    const unloadEvent = ('onpagehide' in window) ? 'pagehide' : 'beforeunload';
    window.addEventListener( unloadEvent, this._onUnload.bind(this) );
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

    let add = this._o.add;
    // check whether the `add` option meets the next criterias:
    let isUndefined = typeof add === 'undefined';

    if ( !isUndefined ) { add = add.timeline || add; }

    let isTween     = add instanceof mojs.Tween;
    let isTimeline  = add instanceof mojs.Timeline;

    if ( isUndefined || !( isTween || isTimeline ) ) {
      throw new Error('MojsPlayer expects Tween/Timeline/Module as `add` option in constructor call. [ new MojsPlayer({ add: new mojs.Tween }); ]');
      return;
    }

    this.timeline.add( this._o.add );

    this._sysTween = new mojs.Tween({
      easing:          'linear.none',
      duration:        this.timeline._props.repeatTime,
      onProgress:      this._onSysProgress.bind( this ),
      onComplete:      this._onSysTweenComplete.bind( this ),
      onPlaybackStop:  () => { this._setPlayState( 'off' ); },
      onPlaybackPause: () => { this._setPlayState( 'off' ); },
      onPlaybackStart: () => { this._setPlayState( 'on' ); }
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

    // since js is really bed in numbers precision,
    // if we set a progress in the `_play` method it returns slighly
    // different when piped thru tween, so add `0.01` gap to soften that
    if ( p < leftBound - 0.01 && p !== 0 ) {
      this._reset();
      requestAnimationFrame(this._play.bind(this));
    }

    if ( p >= rightBound ) {

      this._reset( rightBound === 1 );

      // if ( rightBound === 1 ) { this._sysTween.stop( ); }
      // else { this._reset() }

      if ( this._props.isRepeat ) {
        requestAnimationFrame(this._play.bind(this));
      } else { this._props.isPlaying = false; }
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

    if (progress === 1) { progress = ( p.isBounds ) ? p.leftBound : 0 };
    if ( progress !== 0 ) { this._sysTween.setProgress( progress ); };

    this._sysTween.play();
  }
  /*
    Method to reset sysTween and timeline.
    @param {Boolean} If should not set progress to 0.
    @private
  */
  _reset (isPause) {
    this._sysTween.reset();

    if ( !isPause ) {
      // this.timeline.pause();
      const p        = this._props,
            progress = p.progress;

      let   start = progress,
            leftBound = ( p.isBounds ) ? p.leftBound : 0;

      while ( (start - p.precision) >= leftBound ) {
        start -= p.precision;
        this.timeline.setProgress( start );
      }
    }

    this.timeline.reset();
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
    }, 20);
  }
  /*
    Method that is invoked on system tween completion.
    @private
    @param {Boolean} If forward direction.
  */
  _onSysTweenComplete ( isForward ) {
    // console.log(' complete ', this._props.isPlaying, isForward, this._props.isRepeat);
    // if ( this._props.isPlaying && isForward ) {
    //   if ( this._props.isRepeat ) {
    //     console.log('reset 2')
    //     // this._sysTween.reset();
    //     // this._play();
    //   }
    // }
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
    Method that is invoked on stop button tap.
    @private
  */
  _onStop ( ) {
    const p = this._props;
    p.isPlaying = false;

    const leftBound = ( p.isBounds ) ? p.leftBound : 0;
    // set sysTween progress twice because it could be _reset already
    this._sysTween.setProgress( leftBound + 0.01 );
    this._sysTween.setProgress( leftBound );

    this._reset();
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
    this._props[ 'raw-speed' ] = progress;
    this._props.speed = speed;
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
    // if timeline was reset - refresh it's state
    // by incremental updates until progress (0 always)
    if ( !this.timeline._prevTime && progress > 0 ) {
      let start = 0;
      do {
        this.timeline.setProgress( start );
        start += this._props.precision;
      } while ( start + this._props.precision < progress );
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
    if ( !this._props.isSaveState ) {
      return localStorage.removeItem( this._localStorage );
    }

    const props = { ...this._props };
    delete props.parent;
    delete props.className;
    delete props.isSaveState;
    delete props.precision;

    localStorage.setItem(this._localStorage, JSON.stringify( props ) );
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
    return Math.abs( hash );
  }
}

if ( (typeof define === "function") && define.amd ) {
  define(function () { return MojsPlayer; });
}
if ( (typeof module === "object") && (typeof module.exports === "object") ) {
  module.exports = MojsPlayer;
}

let _global = ( typeof global !== 'undefined' ) ? global : window;
_global.MojsPlayer = MojsPlayer;

export default MojsPlayer;
