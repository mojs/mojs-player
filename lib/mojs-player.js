/*! 
	:: MojsPlayer :: Player controls for [mojs](mojs.io). Intended to help you to craft `mojs` animation sequences.
	Oleg Solomka @LegoMushroom 2016 MIT
	0.40.1 
*/

'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _classlistPolyfill = require('classlist-polyfill');

var _classlistPolyfill2 = _interopRequireDefault(_classlistPolyfill);

var _icons = require('./components/icons');

var _icons2 = _interopRequireDefault(_icons);

var _module = require('./components/module');

var _module2 = _interopRequireDefault(_module);

var _playerSlider = require('./components/player-slider');

var _playerSlider2 = _interopRequireDefault(_playerSlider);

var _iconButton = require('./components/icon-button');

var _iconButton2 = _interopRequireDefault(_iconButton);

var _speedControl = require('./components/speed-control');

var _speedControl2 = _interopRequireDefault(_speedControl);

var _playButton = require('./components/play-button');

var _playButton2 = _interopRequireDefault(_playButton);

var _stopButton = require('./components/stop-button');

var _stopButton2 = _interopRequireDefault(_stopButton);

var _repeatButton = require('./components/repeat-button');

var _repeatButton2 = _interopRequireDefault(_repeatButton);

var _boundsButton = require('./components/bounds-button');

var _boundsButton2 = _interopRequireDefault(_boundsButton);

var _hideButton = require('./components/hide-button');

var _hideButton2 = _interopRequireDefault(_hideButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('css/blocks/mojs-player.postcss.css');
var CLASSES = require('css/blocks/mojs-player.postcss.css.json');

var MojsPlayer = function (_Module) {
  _inherits(MojsPlayer, _Module);

  function MojsPlayer() {
    _classCallCheck(this, MojsPlayer);

    return _possibleConstructorReturn(this, _Module.apply(this, arguments));
  }

  /*
    Method to declare defaults.
    @private
    @overrides @ Module
  */

  MojsPlayer.prototype._declareDefaults = function _declareDefaults() {
    _Module.prototype._declareDefaults.call(this);

    this._defaults.isSaveState = true;
    this._defaults.isPlaying = false;
    this._defaults.progress = 0;
    this._defaults.isRepeat = false;
    this._defaults.isBounds = false;
    this._defaults.leftBound = 0;
    this._defaults.rightBound = 1;
    this._defaults.isSpeed = false;
    this._defaults.speed = 1;
    this._defaults.isHidden = false;

    var str = 'mojs-player';
    this.revision = '0.40.1';
    this._prefix = str + '-' + this._hashCode(str) + '-';
    this._localStorage = this._prefix + 'model';
  };
  /*
    Method to copy `_o` options to `_props` object
    with fallback to `localStorage` and `_defaults`.
    @private
  */


  MojsPlayer.prototype._extendDefaults = function _extendDefaults() {
    this._props = {};
    var p = this._props,
        o = this._o,
        defs = this._defaults;

    // get localstorage regarding isSaveState option
    p.isSaveState = this._fallbackTo(o.isSaveState, defs.isSaveState);
    var m = p.isSaveState ? JSON.parse(localStorage.getItem(this._localStorage)) || {} : {};

    for (var key in defs) {
      var value = this._fallbackTo(m[key], o[key]);
      this._assignProp(key, this._fallbackTo(value, defs[key]));
    }
    // get raw-speed option
    this._props['raw-speed'] = this._fallbackTo(m['raw-speed'], .5);
  };
  /*
    Callback for keyup on document.
    @private
    @param {Object} Original event object.
  */


  MojsPlayer.prototype._keyUp = function _keyUp(e) {
    if (e.altKey) {
      switch (e.keyCode) {
        case 80:
          // alt + P => PLAY/PAUSE TOGGLE
          this._props.isPlaying = !this._props.isPlaying;
          this._onPlayStateChange(this._props.isPlaying);
          break;
        case 189:
          // alt + - => DECREASE PROGRESS
          this.playButton.off();
          this.playerSlider.decreaseProgress(e.shiftKey ? .1 : .01);
          break;
        case 187:
          // alt + + => INCREASE PROGRESS
          this.playButton.off();
          this.playerSlider.increaseProgress(e.shiftKey ? .1 : .01);
          break;
        case 83:
          // alt + S => STOP
          this._onStop();
          break;
        case 82:
          // alt + R => REPEAT TOGGLE
          this._props.isRepeat = !this._props.isRepeat;
          var method = this._props.isRepeat ? 'on' : 'off';
          this.repeatButton[method]();
          break;
        case 66:
          // alt + B => BOUNDS TOGGLE
          this._props.isBounds = !this._props.isBounds;
          var method = this._props.isBounds ? 'on' : 'off';
          this.boundsButton[method]();
          break;
        case 72:
          // alt + H => HIDE PLAYER TOGGLE
          this._props.isHidden = !this._props.isHidden;
          this._onHideStateChange(this._props.isHidden);
          var method = this._props.isHidden ? 'on' : 'off';
          this.hideButton[method]();
          break;
        // case 49: // alt + 1 => RESET SPEED TO 1x
        case 81:
          // alt + q => RESET SPEED TO 1x
          this.speedControl.reset();
          break;
        case 50:
          // alt + 2 => DECREASE SPEEED by .05
          this.speedControl.decreaseSpeed(e.shiftKey ? .05 : .01);
          break;
        case 51:
          // alt + 3 => INCREASE SPEED by .05
          this.speedControl.increaseSpeed(e.shiftKey ? .05 : .01);
          break;
      }
    }
  };
  /*
    Method to declare properties.
    @private
    @overrides @ Module
  */


  MojsPlayer.prototype._vars = function _vars() {
    this._hideCount = 0;
  };
  /*
    Method to render the module.
    @private
    @overrides @ Module
  */


  MojsPlayer.prototype._render = function _render() {
    this._initTimeline();
    var p = this._props,
        className = 'mojs-player',
        icons = new _icons2.default({ prefix: this._props.prefix });
    _Module.prototype._render.call(this);
    // this.el.classList.add(p.classNAme );
    this.el.classList.add(CLASSES[className]);
    this.el.setAttribute('id', 'js-mojs-player');

    var left = this._createChild('div', CLASSES[className + '__left']),
        mid = this._createChild('div', CLASSES[className + '__mid']),
        right = this._createChild('div', CLASSES[className + '__right']);

    this.repeatButton = new _repeatButton2.default({
      parent: left,
      isOn: p.isRepeat,
      onStateChange: this._onRepeatStateChange.bind(this),
      prefix: this._props.prefix
    });

    this.playerSlider = new _playerSlider2.default({
      parent: mid,
      isBounds: p.isBounds,
      leftProgress: p.leftBound,
      rightProgress: p.rightBound,
      progress: p.progress,
      onLeftProgress: this._onLeftProgress.bind(this),
      onProgress: this._onProgress.bind(this),
      onRightProgress: this._onRightProgress.bind(this),
      onSeekStart: this._onSeekStart.bind(this),
      onSeekEnd: this._onSeekEnd.bind(this)
    });

    this.boundsButton = new _boundsButton2.default({
      isOn: p.isBounds,
      parent: left,
      onStateChange: this._boundsStateChange.bind(this),
      prefix: this._props.prefix
    });

    this.speedControl = new _speedControl2.default({
      parent: left,
      // progress:       p.speed,
      speed: p.speed,
      isOn: p.isSpeed,
      onSpeedChange: this._onSpeedChange.bind(this),
      onIsSpeed: this._onIsSpeed.bind(this),
      prefix: this._props.prefix
    });

    var proc = 0,
        progress = [],
        procToSpeed = [],
        speedToProc = [];

    this.stopButton = new _stopButton2.default({
      parent: left,
      isPrepend: true,
      onPointerUp: this._onStop.bind(this),
      prefix: this._props.prefix
    });

    this.playButton = new _playButton2.default({
      parent: left,
      isOn: p.isPlaying,
      isPrepend: true,
      onStateChange: this._onPlayStateChange.bind(this),
      prefix: this._props.prefix
    });

    this.mojsButton = new _iconButton2.default({
      parent: right,
      icon: 'mojs',
      link: 'https://github.com/legomushroom/mojs-player',
      title: 'mo • js',
      prefix: this._props.prefix
    });

    this.hideButton = new _hideButton2.default({
      parent: this.el,
      className: CLASSES[className + '__hide-button'],
      isOn: p.isHidden,
      onStateChange: this._onHideStateChange.bind(this),
      prefix: this._props.prefix
    });

    this._listen();
  };
  /*
    Method to initialize event listeners.
    @private
  */


  MojsPlayer.prototype._listen = function _listen() {
    window.addEventListener('beforeunload', this._onUnload.bind(this));
    document.addEventListener('keyup', this._keyUp.bind(this));
  };
  /*
    Method that is invoked when user touches the track.
    @private
    @param {Object} Original event object.
  */


  MojsPlayer.prototype._onSeekStart = function _onSeekStart(e) {
    this._sysTween.pause();
  };
  /*
    Method that is invoked when user touches the track.
    @private
    @param {Object} Original event object.
  */


  MojsPlayer.prototype._onSeekEnd = function _onSeekEnd(e) {
    var _this2 = this;

    clearTimeout(this._endTimer);
    this._endTimer = setTimeout(function () {
      _this2._props.isPlaying && _this2._play();
    }, 20);
  };
  /*
    Method to init timeline.
    @private
  */


  MojsPlayer.prototype._initTimeline = function _initTimeline() {
    var _this3 = this;

    this.timeline = new mojs.Timeline({});
    this.timeline.add(this._o.add);

    this._sysTween = new mojs.Tween({
      duration: this.timeline._props.repeatTime,
      onProgress: this._onSysProgress.bind(this),
      onComplete: this._onSysTweenComplete.bind(this),
      onPlaybackStop: function onPlaybackStop() {
        _this3._setPlayState('off');
      },
      onPlaybackPause: function onPlaybackPause() {
        _this3._setPlayState('off');
      },
      onPlaybackStart: function onPlaybackStart() {
        _this3._setPlayState('on');
      }
    });
  };
  /*
    Method that is invoked on system tween progress.
    @private
    @param {Number} Progress value [0...1].
  */


  MojsPlayer.prototype._onSysProgress = function _onSysProgress(p) {
    this.playerSlider.setTrackProgress(p);
    var rightBound = this._props.isBounds ? this._props.rightBound : 1,
        leftBound = this._props.isBounds ? this._props.leftBound : -1;

    if (p < leftBound && p !== 0) {
      this._sysTween.pause();
      this._defer(this._play);
    }
    if (p >= rightBound) {
      this._sysTween.pause();
      if (this._props.isRepeat) {
        this._defer(this._play);
      } else {
        this._props.isPlaying = false;
      }
    }
  };
  /*
    Method to set play button state.
    @private
    @param {String} Method name to call it on playButton.
  */


  MojsPlayer.prototype._setPlayState = function _setPlayState(method) {
    var _this4 = this;

    clearTimeout(this._playTimeout);
    this._playTimeout = setTimeout(function () {
      _this4.playButton && _this4.playButton[method](false);
    }, 2);
  };
  /*
    Method that is invoked on system tween completion.
    @private
    @param {Boolean} If forward direction.
  */


  MojsPlayer.prototype._onSysTweenComplete = function _onSysTweenComplete(isForward) {
    if (this._props.isPlaying && isForward) {
      if (this._props.isRepeat) {
        this._sysTween.stop();
        this._play();
      }
    }
  };
  /*
    Method that is invoked play button state change.
    @private
    @param {Boolean} Repeat button state.
  */


  MojsPlayer.prototype._onPlayStateChange = function _onPlayStateChange(isPlay) {
    this._props.isPlaying = isPlay;
    if (isPlay) {
      this._play();
    } else {
      this._sysTween.pause();
    }
  };
  /*
    Callback for hide button change state.
    @private
    @param {Boolean}
  */


  MojsPlayer.prototype._onHideStateChange = function _onHideStateChange(isHidden) {
    this._props.isHidden = isHidden;
    var method = isHidden ? 'add' : 'remove';
    this.el.classList[method](CLASSES['is-hidden']);
    // enable CSS transition on subsequent calls
    if (this._hideCount++ === 1) {
      this.el.classList.add(CLASSES['is-transition']);
    }
  };
  /*
    Method to play system tween from progress.
    @private
  */


  MojsPlayer.prototype._play = function _play() {
    var p = this._props,
        leftBound = p.isBounds ? p.leftBound : p.progress,
        progress = p.progress >= this._getBound('right') ? leftBound : p.progress;

    this._sysTween.setProgress(progress).setSpeed(p.speed).play();
  };
  /*
    Method that is invoked on stop button tap.
    @private
  */


  MojsPlayer.prototype._onStop = function _onStop() {
    this._props.isPlaying = false;
    // this.playButton.off();
    this._sysTween.stop();
  };
  /*
    Method that is invoked on repeat switch state change.
    @private
    @param {Boolean} Repeat button state.
  */


  MojsPlayer.prototype._onRepeatStateChange = function _onRepeatStateChange(isOn) {
    this._props.isRepeat = isOn;
  };
  /*
    Method that is invoked on bounds switch state change.
    @private
    @param {Boolean} Bounds state.
  */


  MojsPlayer.prototype._boundsStateChange = function _boundsStateChange(isOn) {
    this.playerSlider._props.isBounds = isOn;
    this.playerSlider[(isOn ? 'enable' : 'disable') + 'Bounds']();
    this._props.isBounds = isOn;
  };
  /* 
    Method that is invoked on speed value change.
    @private
    @param {Number} Speed value.
    @param {Number} Slider progress.
  */


  MojsPlayer.prototype._onSpeedChange = function _onSpeedChange(speed, progress) {
    this._props['raw-speed'] = progress;
    this._props.speed = speed;
    this._sysTween.setSpeed(speed);
  };
  /*
    Method that is invoked on speed state change.
    @private
    @param {Boolean} Speed control state.
  */


  MojsPlayer.prototype._onIsSpeed = function _onIsSpeed(isOn) {
    this._props.isSpeed = isOn;
  };
  /*
    Method that is invoked on timeline's left bound progress.
    @private
    @param {Number} Progress value [0...1].
  */


  MojsPlayer.prototype._onLeftProgress = function _onLeftProgress(progress) {
    this._props.leftBound = progress;
  };
  /*
    Method that is invoked on timeline progress.
    @private
    @param {Number} Progress value [0...1].
  */


  MojsPlayer.prototype._onProgress = function _onProgress(progress) {
    this._props.progress = progress;
    if (!this.timeline._prevTime) {
      this.timeline.setProgress(0);
    }
    this.timeline.setProgress(progress);
  };
  /*
    Method that is invoked on timeline's right bound progress.
    @private
    @param {Number} Progress value [0...1].
  */


  MojsPlayer.prototype._onRightProgress = function _onRightProgress(progress) {
    this._props.rightBound = progress;
  };
  /*
    Method that is invoked on window unload.
    @private
    @param {Object} Original even object.
  */


  MojsPlayer.prototype._onUnload = function _onUnload(e) {
    if (!this._props.isSaveState) {
      return localStorage.removeItem(this._localStorage);
    }

    delete this._props.parent;
    delete this._props.className;
    delete this._props.isSaveState;
    localStorage.setItem(this._localStorage, JSON.stringify(this._props));
  };
  /*
    Method that returns the second argument if the first one isn't set.
    @private
    @param {Any} Property to set.
    @param {Any} Property to return as fallback.
    @returns {Any} If set - the first property, if not - the second.
  */


  MojsPlayer.prototype._fallbackTo = function _fallbackTo(prop, fallback) {
    return prop != null ? prop : fallback;
  };
  /*
    Method to get bound regarding isBound option.
    @private
    @param {String} Bound name.
  */


  MojsPlayer.prototype._getBound = function _getBound(boundName) {
    var p = this._props,
        fallback = boundName === 'left' ? 0 : 1;

    return p.isBounds ? p[boundName + 'Bound'] : fallback;
  };
  /*
    Method to defer a method.
    @private
    @param {Function} Function that should be defered.
  */


  MojsPlayer.prototype._defer = function _defer(fn) {
    setTimeout(fn.bind(this), 1);
  };
  /*
    Method to generate hash code.
    @private
    @return {String} Hash code.
  */


  MojsPlayer.prototype._hashCode = function _hashCode(str) {
    var hash = 0,
        i,
        chr,
        len;
    if (str.length === 0) return hash;
    for (i = 0, len = str.length; i < len; i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  return MojsPlayer;
}(_module2.default);

if (typeof define === "function" && define.amd) {
  define(function () {
    return MojsPlayer;
  });
}
if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
  module.exports = MojsPlayer;
}

var _global = typeof global !== 'undefined' ? global : window;
_global.MojsPlayer = MojsPlayer;

exports.default = MojsPlayer;