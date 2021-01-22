"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classlistPolyfill = _interopRequireDefault(require("classlist-polyfill"));

var _icons = _interopRequireDefault(require("./components/icons"));

var _module = _interopRequireDefault(require("./components/module"));

var _playerSlider = _interopRequireDefault(require("./components/player-slider"));

var _iconButton = _interopRequireDefault(require("./components/icon-button"));

var _speedControl = _interopRequireDefault(require("./components/speed-control"));

var _playButton = _interopRequireDefault(require("./components/play-button"));

var _stopButton = _interopRequireDefault(require("./components/stop-button"));

var _repeatButton = _interopRequireDefault(require("./components/repeat-button"));

var _boundsButton = _interopRequireDefault(require("./components/bounds-button"));

var _hideButton = _interopRequireDefault(require("./components/hide-button"));

var _mojsPlayer = _interopRequireDefault(require("../css/blocks/mojs-player.pcss"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MojsPlayer = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(MojsPlayer, _Module);

  var _super = _createSuper(MojsPlayer);

  function MojsPlayer(o) {
    (0, _classCallCheck2["default"])(this, MojsPlayer);

    if (typeof mojs === 'undefined') {
      throw new Error("MojsPlayer relies on mojs^0.225.2, please include it before player initialization. [ https://github.com/legomushroom/mojs ] ");
    }

    return _super.call(this, o);
  }
  /*
    Method to declare defaults.
    @private
    @overrides @ Module
  */


  (0, _createClass2["default"])(MojsPlayer, [{
    key: "_declareDefaults",
    value: function _declareDefaults() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(MojsPlayer.prototype), "_declareDefaults", this).call(this);
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
      this._defaults.precision = 0.1;
      this._defaults.name = 'mojs-player';
      this._defaults.onToggleHide = null;
      this._defaults.onPlayStateChange = null;
      this._defaults.onSeekStart = null;
      this._defaults.onSeekEnd = null;
      this._defaults.onProgress = null;
      this._play = this._play.bind(this);
      this.revision = '0';

      var str = this._fallbackTo(this._o.name, this._defaults.name);

      str += str === this._defaults.name ? '' : "__".concat(this._defaults.name);
      this._localStorage = "".concat(str, "__").concat(this._hashCode(str));
    }
    /*
      Method to copy `_o` options to `_props` object
      with fallback to `localStorage` and `_defaults`.
      @private
    */

  }, {
    key: "_extendDefaults",
    value: function _extendDefaults() {
      this._props = {};
      var p = this._props,
          o = this._o,
          defs = this._defaults; // get localstorage regarding isSaveState option

      p.isSaveState = this._fallbackTo(o.isSaveState, defs.isSaveState);
      var m = p.isSaveState ? JSON.parse(localStorage.getItem(this._localStorage)) || {} : {};

      for (var key in defs) {
        var value = this._fallbackTo(m[key], o[key]);

        this._assignProp(key, this._fallbackTo(value, defs[key]));
      } // get raw-speed option


      this._props['raw-speed'] = this._fallbackTo(m['raw-speed'], .5);
    }
    /*
      Callback for keyup on document.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_keyUp",
    value: function _keyUp(e) {
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
    }
    /*
      Method to declare properties.
      @private
      @overrides @ Module
    */

  }, {
    key: "_vars",
    value: function _vars() {
      this._hideCount = 0;
    }
    /*
      Method to render the module.
      @private
      @overrides @ Module
    */

  }, {
    key: "_render",
    value: function _render() {
      this._initTimeline();

      var p = this._props,
          className = 'mojs-player',
          icons = new _icons["default"]({
        prefix: this._props.prefix
      });
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(MojsPlayer.prototype), "_render", this).call(this); // this.el.classList.add(p.classNAme );

      this.el.classList.add(_mojsPlayer["default"][className]);
      this.el.setAttribute('id', 'js-mojs-player');

      var left = this._createChild('div', _mojsPlayer["default"]["".concat(className, "__left")]),
          mid = this._createChild('div', _mojsPlayer["default"]["".concat(className, "__mid")]),
          right = this._createChild('div', _mojsPlayer["default"]["".concat(className, "__right")]);

      this.repeatButton = new _repeatButton["default"]({
        parent: left,
        isOn: p.isRepeat,
        onStateChange: this._onRepeatStateChange.bind(this),
        prefix: this._props.prefix
      });
      this.playerSlider = new _playerSlider["default"]({
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
      this.boundsButton = new _boundsButton["default"]({
        isOn: p.isBounds,
        parent: left,
        onStateChange: this._boundsStateChange.bind(this),
        prefix: this._props.prefix
      });
      this.speedControl = new _speedControl["default"]({
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
      this.stopButton = new _stopButton["default"]({
        parent: left,
        isPrepend: true,
        onPointerUp: this._onStop.bind(this),
        prefix: this._props.prefix
      });
      this.playButton = new _playButton["default"]({
        parent: left,
        isOn: p.isPlaying,
        isPrepend: true,
        onStateChange: this._onPlayStateChange.bind(this),
        prefix: this._props.prefix
      });
      this.mojsButton = new _iconButton["default"]({
        parent: right,
        className: _mojsPlayer["default"]["".concat(className, "__mojs-logo")],
        icon: 'mojs',
        target: '_blank',
        link: 'https://github.com/legomushroom/mojs-player',
        title: 'mo • js',
        prefix: this._props.prefix
      });
      this.hideButton = new _hideButton["default"]({
        parent: this.el,
        className: _mojsPlayer["default"]["".concat(className, "__hide-button")],
        isOn: p.isHidden,
        onStateChange: this._onHideStateChange.bind(this),
        prefix: this._props.prefix
      });

      this._listen();
    }
    /*
      Method to initialize event listeners.
      @private
    */

  }, {
    key: "_listen",
    value: function _listen() {
      var unloadEvent = 'onpagehide' in window ? 'pagehide' : 'beforeunload';
      window.addEventListener(unloadEvent, this._onUnload.bind(this));
      document.addEventListener('keyup', this._keyUp.bind(this));
    }
    /*
      Method that is invoked when user touches the track.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_onSeekStart",
    value: function _onSeekStart(e) {
      this._sysTween.pause();

      var onSeekStart = this._props.onSeekStart;

      if (this._isFunction(onSeekStart)) {
        onSeekStart(e);
      }
    }
    /*
      Method that is invoked when user touches the track.
      @private
      @param {Object} Original event object.
    */

  }, {
    key: "_onSeekEnd",
    value: function _onSeekEnd(e) {
      var _this = this;

      clearTimeout(this._endTimer);
      this._endTimer = setTimeout(function () {
        _this._props.isPlaying && _this._play();
      }, 20);
    }
    /*
      Method to init timeline.
      @private
    */

  }, {
    key: "_initTimeline",
    value: function _initTimeline() {
      var _this2 = this;

      this.timeline = new mojs.Timeline({});
      var add = this._o.add; // check whether the `add` option meets the next criterias:

      var isUndefined = typeof add === 'undefined';

      if (!isUndefined) {
        add = add.timeline || add.tween || add;
      }

      var isAdd = !!add.setProgress;

      if (isUndefined || !isAdd) {
        throw new Error('MojsPlayer expects Tween/Timeline/Module as `add` option in constructor call. [ new MojsPlayer({ add: new mojs.Tween }); ]');
        return;
      }

      this.timeline.add(this._o.add);
      var _props = this.timeline._props;
      var duration = _props.repeatTime !== void 0 ? _props : _props.delay + _props.duration;
      this._sysTween = new mojs.Tween({
        easing: 'linear.none',
        duration: duration,
        onUpdate: this._onSysProgress.bind(this),
        onComplete: this._onSysTweenComplete.bind(this),
        onPlaybackStop: function onPlaybackStop() {
          _this2._setPlayState('off');
        },
        onPlaybackPause: function onPlaybackPause() {
          _this2._setPlayState('off');
        },
        onPlaybackStart: function onPlaybackStart() {
          _this2._setPlayState('on');
        }
      });
    }
    /*
      Method that is invoked on system tween progress.
      @private
      @param {Number} Progress value [0...1].
    */

  }, {
    key: "_onSysProgress",
    value: function _onSysProgress(p) {
      this.playerSlider.setTrackProgress(p);
      var rightBound = this._props.isBounds ? this._props.rightBound : 1,
          leftBound = this._props.isBounds ? this._props.leftBound : -1; // since js is really bed in numbers precision,
      // if we set a progress in the `_play` method it returns slighly
      // different when piped thru tween, so add `0.01` gap to soften that

      if (p < leftBound - 0.01 && p !== 0) {
        this._reset();

        requestAnimationFrame(this._play);
      }

      if (p >= rightBound) {
        this._reset(rightBound === 1);

        if (this._props.isRepeat) {
          requestAnimationFrame(this._play);
        } else {
          this._props.isPlaying = false;
        }
      }
    }
    /*
      Method to play system tween from progress.
      @private
    */

  }, {
    key: "_play",
    value: function _play() {
      var p = this._props;
      var leftBound = p.isBounds ? p.leftBound : p.progress;
      var progress = p.progress >= this._getBound('right') ? leftBound : p.progress;

      if (progress === 1) {
        progress = p.isBounds ? p.leftBound : 0;
      }

      ;

      if (progress !== 0) {
        this._sysTween.setProgress(progress);
      }

      ;

      this._sysTween.play();
    }
    /*
      Method to reset sysTween and timeline.
      @param {Boolean} If should not set progress to 0.
      @private
    */

  }, {
    key: "_reset",
    value: function _reset(isPause) {
      this._sysTween.reset(); // if ( !isPause ) {
      //   const p        = this._props,
      //         progress = p.progress;
      //
      //   let   start = progress,
      //         leftBound = (p.isBounds) ? p.leftBound : 0;
      //
      //   // while ( (start - p.precision) >= leftBound ) {
      //   //   start -= p.precision;
      //   //   this.timeline.setProgress( start );
      //   // }
      // }


      this.timeline.reset();
    }
    /*
      Method to set play button state.
      @private
      @param {String} Method name to call it on playButton.
    */

  }, {
    key: "_setPlayState",
    value: function _setPlayState(method) {
      var _this3 = this;

      clearTimeout(this._playTimeout);
      this._playTimeout = setTimeout(function () {
        _this3.playButton && _this3.playButton[method](false);
      }, 20);
    }
    /*
      Method that is invoked on system tween completion.
      @private
      @param {Boolean} If forward direction.
    */

  }, {
    key: "_onSysTweenComplete",
    value: function _onSysTweenComplete(isForward) {// console.log(' complete ', this._props.isPlaying, isForward, this._props.isRepeat);
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

  }, {
    key: "_onPlayStateChange",
    value: function _onPlayStateChange(isPlay) {
      this._props.isPlaying = isPlay;

      if (isPlay) {
        this._play();
      } else {
        this._sysTween.pause();
      }

      var onPlayStateChange = this._props.onPlayStateChange;

      if (this._isFunction(onPlayStateChange)) {
        onPlayStateChange(isPlay);
      }
    }
    /*
      Callback for hide button change state.
      @private
      @param {Boolean}
    */

  }, {
    key: "_onHideStateChange",
    value: function _onHideStateChange(isHidden) {
      this._props.isHidden = isHidden;
      var onToggleHide = this._props.onToggleHide;

      if (this._isFunction(onToggleHide)) {
        onToggleHide(isHidden);
      }

      var method = isHidden ? 'add' : 'remove';
      this.el.classList[method](_mojsPlayer["default"]['is-hidden']); // enable CSS transition on subsequent calls

      if (this._hideCount++ === 1) {
        this.el.classList.add(_mojsPlayer["default"]['is-transition']);
      }
    }
    /*
      Method that is invoked on stop button tap.
      @private
    */

  }, {
    key: "_onStop",
    value: function _onStop() {
      var p = this._props;
      p.isPlaying = false;
      var leftBound = p.isBounds ? p.leftBound : 0; // set sysTween progress twice because it could be _reset already

      this._sysTween.setProgress(leftBound + 0.01);

      this._sysTween.setProgress(leftBound);

      this._reset();
    }
    /*
      Method that is invoked on repeat switch state change.
      @private
      @param {Boolean} Repeat button state.
    */

  }, {
    key: "_onRepeatStateChange",
    value: function _onRepeatStateChange(isOn) {
      this._props.isRepeat = isOn;
    }
    /*
      Method that is invoked on bounds switch state change.
      @private
      @param {Boolean} Bounds state.
    */

  }, {
    key: "_boundsStateChange",
    value: function _boundsStateChange(isOn) {
      this.playerSlider._props.isBounds = isOn;
      this.playerSlider["".concat(isOn ? 'enable' : 'disable', "Bounds")]();
      this._props.isBounds = isOn;
    }
    /*
      Method that is invoked on speed value change.
      @private
      @param {Number} Speed value.
      @param {Number} Slider progress.
    */

  }, {
    key: "_onSpeedChange",
    value: function _onSpeedChange(speed, progress) {
      this._props['raw-speed'] = progress;
      this._props.speed = speed;

      this._sysTween.setSpeed(speed);
    }
    /*
      Method that is invoked on speed state change.
      @private
      @param {Boolean} Speed control state.
    */

  }, {
    key: "_onIsSpeed",
    value: function _onIsSpeed(isOn) {
      this._props.isSpeed = isOn;
    }
    /*
      Method that is invoked on timeline's left bound progress.
      @private
      @param {Number} Progress value [0...1].
    */

  }, {
    key: "_onLeftProgress",
    value: function _onLeftProgress(progress) {
      this._props.leftBound = progress;
    }
    /*
      Method that is invoked on timeline progress.
      @private
      @param {Number} Progress value [0...1].
    */

  }, {
    key: "_onProgress",
    value: function _onProgress(progress) {
      this._props.progress = progress; // if timeline was reset - refresh it's state
      // by incremental updates until progress (0 always)
      // if ( !this.timeline._prevTime && progress > 0 ) {
      //   let start = 0;
      //   do {
      //     this.timeline.setProgress( start );
      //     start += this._props.precision;
      //   } while ( start + this._props.precision < progress );
      // }
      // console.log(`timeline.setProgress: ${progress}`);

      this.timeline.setProgress(progress);
    }
    /*
      Method that is invoked on timeline's right bound progress.
      @private
      @param {Number} Progress value [0...1].
    */

  }, {
    key: "_onRightProgress",
    value: function _onRightProgress(progress) {
      this._props.rightBound = progress;
    }
    /*
      Method that is invoked on window unload.
      @private
      @param {Object} Original even object.
    */

  }, {
    key: "_onUnload",
    value: function _onUnload(e) {
      if (!this._props.isSaveState) {
        return localStorage.removeItem(this._localStorage);
      }

      var props = _objectSpread({}, this._props);

      delete props.parent;
      delete props.className;
      delete props.isSaveState;
      delete props.precision;
      localStorage.setItem(this._localStorage, JSON.stringify(props));
    }
    /*
      Method that returns the second argument if the first one isn't set.
      @private
      @param {Any} Property to set.
      @param {Any} Property to return as fallback.
      @returns {Any} If set - the first property, if not - the second.
    */

  }, {
    key: "_fallbackTo",
    value: function _fallbackTo(prop, fallback) {
      return prop != null ? prop : fallback;
    }
    /*
      Method to get bound regarding isBound option.
      @private
      @param {String} Bound name.
    */

  }, {
    key: "_getBound",
    value: function _getBound(boundName) {
      var p = this._props,
          fallback = boundName === 'left' ? 0 : 1;
      return p.isBounds ? p["".concat(boundName, "Bound")] : fallback;
    }
    /*
      Method to defer a method.
      @private
      @param {Function} Function that should be defered.
    */

  }, {
    key: "_defer",
    value: function _defer(fn) {
      setTimeout(fn.bind(this), 1);
    }
    /*
      Method to generate hash code.
      @private
      @return {String} Hash code.
    */

  }, {
    key: "_hashCode",
    value: function _hashCode(str) {
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

      return Math.abs(hash);
    }
    /*
      Method to determine if variable is a function
      @private
      @param {Function} Function to be guarenteed.
      @return {Boolean} true/false whether variable reference was a function
    */

  }, {
    key: "_isFunction",
    value: function _isFunction(fn) {
      return typeof fn === 'function';
    }
  }]);
  return MojsPlayer;
}(_module["default"]);

if (typeof define === "function" && define.amd) {
  define(function () {
    return MojsPlayer;
  });
}

if ((typeof module === "undefined" ? "undefined" : (0, _typeof2["default"])(module)) === "object" && (0, _typeof2["default"])(module.exports) === "object") {
  module.exports = MojsPlayer;
}

var _global = typeof global !== 'undefined' ? global : window;

_global.MojsPlayer = MojsPlayer;
var _default = MojsPlayer;
exports["default"] = _default;