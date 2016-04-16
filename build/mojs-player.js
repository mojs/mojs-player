/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _playerSlider = __webpack_require__(2);

	var _playerSlider2 = _interopRequireDefault(_playerSlider);

	var _classlistPolyfill = __webpack_require__(127);

	var _classlistPolyfill2 = _interopRequireDefault(_classlistPolyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var playerSlider = new _playerSlider2.default();

	__webpack_require__(128);
	var Main = {
	  /*
	    Initialization method.
	    @public
	    @param {Object} Initialization options.
	  */

	  init: function init(o) {
	    console.log('Hello, ' + o.name + '!');
	  }
	};

	Main.init({ name: 'World' });

	exports.default = Main;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(4);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(69);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _slider = __webpack_require__(77);

	var _slider2 = _interopRequireDefault(_slider);

	var _module = __webpack_require__(78);

	var _module2 = _interopRequireDefault(_module);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(124);
	var CLASSES = __webpack_require__(126);
	var SLIDER_CLASSES = __webpack_require__(123);

	var PlayerSlider = function (_Module) {
	  (0, _inherits3.default)(PlayerSlider, _Module);

	  function PlayerSlider() {
	    (0, _classCallCheck3.default)(this, PlayerSlider);
	    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
	  }

	  /*
	    Method to declare _defaults.
	    @private
	    @overrides @ Module
	  */

	  PlayerSlider.prototype._declareDefaults = function _declareDefaults() {
	    this._defaults = {
	      className: CLASSES['player-slider'],
	      parent: document.body
	    };
	  };
	  /*
	    Initial render method.
	    @private
	    @overrides @ Module
	    @returns this
	  */


	  // isEl:      true

	  PlayerSlider.prototype._render = function _render() {
	    this.el = document.createElement('div');
	    this.el.classList.add('' + this._props.className);
	    this.el.classList.add('' + SLIDER_CLASSES.slider);

	    this.leftBound = new _slider2.default({
	      isEl: false,
	      isTrack: false,
	      parent: this.el
	    });
	    this.track = new _slider2.default({
	      parent: this.el,
	      className: CLASSES.slider
	    });

	    this.rightBound = new _slider2.default({
	      isEl: false,
	      isTrack: false,
	      parent: this.el,
	      isInversed: true
	    });

	    this.leftBound.setProgress(.25);
	    this.track.setProgress(.5);
	    this.rightBound.setProgress(.75);

	    this._props.parent.appendChild(this.el);
	  };

	  return PlayerSlider;
	}(_module2.default);

	exports.default = PlayerSlider;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(5);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(6);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(56);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(8);
	__webpack_require__(52);
	module.exports = __webpack_require__(49)('iterator');

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(9)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(12)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(10)
	  , defined   = __webpack_require__(11);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(13)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(29)
	  , hide           = __webpack_require__(19)
	  , has            = __webpack_require__(30)
	  , Iterators      = __webpack_require__(31)
	  , $iterCreate    = __webpack_require__(32)
	  , setToStringTag = __webpack_require__(48)
	  , getPrototypeOf = __webpack_require__(50)
	  , ITERATOR       = __webpack_require__(49)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(15)
	  , core      = __webpack_require__(16)
	  , ctx       = __webpack_require__(17)
	  , hide      = __webpack_require__(19)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 15 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.2.2'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(18);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(20)
	  , createDesc = __webpack_require__(28);
	module.exports = __webpack_require__(24) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(21)
	  , IE8_DOM_DEFINE = __webpack_require__(23)
	  , toPrimitive    = __webpack_require__(27)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(24) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(24) && !__webpack_require__(25)(function(){
	  return Object.defineProperty(__webpack_require__(26)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(25)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22)
	  , document = __webpack_require__(15).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(22);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);

/***/ },
/* 30 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(33)
	  , descriptor     = __webpack_require__(28)
	  , setToStringTag = __webpack_require__(48)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(19)(IteratorPrototype, __webpack_require__(49)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(21)
	  , dPs         = __webpack_require__(34)
	  , enumBugKeys = __webpack_require__(46)
	  , IE_PROTO    = __webpack_require__(43)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(26)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(47).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(20)
	  , anObject = __webpack_require__(21)
	  , getKeys  = __webpack_require__(35);

	module.exports = __webpack_require__(24) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(36)
	  , enumBugKeys = __webpack_require__(46);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(30)
	  , toIObject    = __webpack_require__(37)
	  , arrayIndexOf = __webpack_require__(40)(false)
	  , IE_PROTO     = __webpack_require__(43)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(38)
	  , defined = __webpack_require__(11);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(39);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(37)
	  , toLength  = __webpack_require__(41)
	  , toIndex   = __webpack_require__(42);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(10)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(10)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(44)('keys')
	  , uid    = __webpack_require__(45);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(15)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15).document && document.documentElement;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(20).f
	  , has = __webpack_require__(30)
	  , TAG = __webpack_require__(49)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(44)('wks')
	  , uid        = __webpack_require__(45)
	  , Symbol     = __webpack_require__(15).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(30)
	  , toObject    = __webpack_require__(51)
	  , IE_PROTO    = __webpack_require__(43)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(11);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	var global        = __webpack_require__(15)
	  , hide          = __webpack_require__(19)
	  , Iterators     = __webpack_require__(31)
	  , TO_STRING_TAG = __webpack_require__(49)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(54)
	  , step             = __webpack_require__(55)
	  , Iterators        = __webpack_require__(31)
	  , toIObject        = __webpack_require__(37);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(12)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(58);
	__webpack_require__(68);
	module.exports = __webpack_require__(16).Symbol;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(15)
	  , core           = __webpack_require__(16)
	  , has            = __webpack_require__(30)
	  , DESCRIPTORS    = __webpack_require__(24)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(29)
	  , META           = __webpack_require__(59).KEY
	  , $fails         = __webpack_require__(25)
	  , shared         = __webpack_require__(44)
	  , setToStringTag = __webpack_require__(48)
	  , uid            = __webpack_require__(45)
	  , wks            = __webpack_require__(49)
	  , keyOf          = __webpack_require__(60)
	  , enumKeys       = __webpack_require__(61)
	  , isArray        = __webpack_require__(64)
	  , anObject       = __webpack_require__(21)
	  , toIObject      = __webpack_require__(37)
	  , toPrimitive    = __webpack_require__(27)
	  , createDesc     = __webpack_require__(28)
	  , _create        = __webpack_require__(33)
	  , gOPNExt        = __webpack_require__(65)
	  , $GOPD          = __webpack_require__(67)
	  , $DP            = __webpack_require__(20)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = gOPD(it = toIObject(it), key = toPrimitive(key, true));
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , replacer, $replacer;
	  while(arguments.length > i)args.push(arguments[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var BUGGY_JSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(66).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(63).f  = $propertyIsEnumerable
	  __webpack_require__(62).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(13)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	for(var symbols = (
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; ){
	  var key     = symbols[i++]
	    , Wrapper = core.Symbol
	    , sym     = wks(key);
	  if(!(key in Wrapper))dP(Wrapper, key, {value: USE_NATIVE ? sym : wrap(sym)});
	};

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	if(!QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild)setter = true;

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || BUGGY_JSON), 'JSON', {stringify: $stringify});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(19)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(45)('meta')
	  , isObject = __webpack_require__(22)
	  , has      = __webpack_require__(30)
	  , setDesc  = __webpack_require__(20).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(25)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(35)
	  , toIObject = __webpack_require__(37);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(35)
	  , gOPS    = __webpack_require__(62)
	  , pIE     = __webpack_require__(63);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 63 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(39);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(37)
	  , gOPN      = __webpack_require__(66).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(36)
	  , hiddenKeys = __webpack_require__(46).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(63)
	  , createDesc     = __webpack_require__(28)
	  , toIObject      = __webpack_require__(37)
	  , toPrimitive    = __webpack_require__(27)
	  , has            = __webpack_require__(30)
	  , IE8_DOM_DEFINE = __webpack_require__(23)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(24) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(70);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(74);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(5);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	module.exports = __webpack_require__(16).Object.setPrototypeOf;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(14);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(73).set});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(22)
	  , anObject = __webpack_require__(21);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(17)(Function.call, __webpack_require__(67).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(76);
	var $Object = __webpack_require__(16).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(33)});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(4);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(69);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _module = __webpack_require__(78);

	var _module2 = _interopRequireDefault(_module);

	var _handle = __webpack_require__(79);

	var _handle2 = _interopRequireDefault(_handle);

	var _track = __webpack_require__(117);

	var _track2 = _interopRequireDefault(_track);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(121);
	var CLASSES = __webpack_require__(123);

	var Slider = function (_Module) {
	  (0, _inherits3.default)(Slider, _Module);

	  function Slider() {
	    (0, _classCallCheck3.default)(this, Slider);
	    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
	  }

	  /*
	    Method to declare _defaults.
	    @private
	    @overrides @ Module
	  */

	  Slider.prototype._declareDefaults = function _declareDefaults() {
	    this._defaults = {
	      className: '',
	      parent: document.body,
	      isEl: true,
	      isTrack: true,
	      isInversed: false
	    };
	  };
	  /*
	    Method to set slider progress.
	    @public
	    @param {Number} Progress to set.
	    @returns this.
	  */


	  Slider.prototype.setProgress = function setProgress(progress) {
	    this.handle.setProgress(progress);
	    this.track.setProgress(progress);
	  };
	  /*
	    Method to render the component.
	    @private
	    @overrides @ Module
	  */


	  Slider.prototype._render = function _render() {
	    var p = this._props;

	    if (p.isEl) {
	      this.el = document.createElement('div');
	      this.el.classList.add('' + CLASSES.slider);
	      this.el.classList.add('' + p.className);
	      p.parent.appendChild(this.el);
	    }

	    var rootEl = p.isEl ? this.el : p.parent;

	    this.track = new _track2.default({
	      className: CLASSES.track,
	      onProgress: this._onTrackProgress.bind(this),
	      isTrack: this._props.isTrack,
	      isInversed: this._props.isInversed
	    });
	    rootEl.appendChild(this.track.el);

	    this.handle = new _handle2.default({
	      className: CLASSES.handle,
	      onProgress: this._onHandleProgress.bind(this)
	    });
	    rootEl.appendChild(this.handle.el);
	  };
	  /*
	    Method that is invoked on handle progress change.
	    @private
	    @param {Number} Progress [0...1].
	  */


	  Slider.prototype._onHandleProgress = function _onHandleProgress(p) {
	    this.track.setProgress(p, false);
	  };
	  /*
	    Method that is invoked on track progress change.
	    @private
	    @param {Number} Progress [0...1].
	  */


	  Slider.prototype._onTrackProgress = function _onTrackProgress(p) {
	    this.handle.setProgress(p, false);
	  };

	  return Slider;
	}(_module2.default);

	exports.default = Slider;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(5);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	  Base class for all modules.
	  Extends _defaults to _props
	*/

	var Module = function () {
	  /*
	    constructor method calls scaffolding methods.
	  */

	  function Module() {
	    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    (0, _classCallCheck3.default)(this, Module);

	    this._o = o;
	    this._index = this._o.index || 0;
	    this._declareDefaults();
	    this._extendDefaults();
	    this._vars();
	    this._render();
	  }
	  /*
	    Method to declare defaults.
	    @private
	  */


	  Module.prototype._declareDefaults = function _declareDefaults() {
	    this._defaults = {};
	  };
	  /*
	    Method to declare module's variables.
	    @private
	  */


	  Module.prototype._vars = function _vars() {};
	  /*
	    Method to render on initialization.
	    @private
	  */


	  Module.prototype._render = function _render() {};
	  /*
	    Method to set property on the module.
	    @private
	    @param {String, Object} Name of the property to set
	                            or object with properties to set.
	    @param {Any} Value for the property to set. Could be
	                  undefined if the first param is object.
	  */


	  Module.prototype._setProp = function _setProp(attr, value) {
	    if ((typeof attr === 'undefined' ? 'undefined' : (0, _typeof3.default)(attr)) === 'object') {
	      for (var key in attr) {
	        this._assignProp(key, attr[key]);
	      }
	    } else {
	      this._assignProp(attr, value);
	    }
	  };
	  /*
	    Method to assign single property's value.
	    @private
	    @param {String} Property name.
	    @param {Any}    Property value.
	  */


	  Module.prototype._assignProp = function _assignProp(key, value) {
	    this._props[key] = value;
	  };
	  /*
	    Method to copy `_o` options to `_props` object
	    with fallback to `_defaults`.
	    @private
	  */


	  Module.prototype._extendDefaults = function _extendDefaults() {
	    this._props = {};
	    this._deltas = {};
	    for (var key in this._defaults) {
	      // skip property if it is listed in _skipProps
	      // if (this._skipProps && this._skipProps[key]) { continue; }
	      // copy the properties to the _o object
	      var value = this._o[key] != null ? this._o[key] : this._defaults[key];
	      this._assignProp(key, value);
	    }
	  };

	  return Module;
	}();

	exports.default = Module;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(4);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(69);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _module = __webpack_require__(78);

	var _module2 = _interopRequireDefault(_module);

	var _hammerjs = __webpack_require__(80);

	var _hammerjs2 = _interopRequireDefault(_hammerjs);

	var _moJs = __webpack_require__(81);

	var _moJs2 = _interopRequireDefault(_moJs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(112);
	var CLASSES = __webpack_require__(116);

	var Handle = function (_Module) {
	  (0, _inherits3.default)(Handle, _Module);

	  function Handle() {
	    (0, _classCallCheck3.default)(this, Handle);
	    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
	  }

	  /*
	    Method to declare _defaults.
	    @private
	    @overrides @ Module
	  */

	  Handle.prototype._declareDefaults = function _declareDefaults() {
	    this._defaults = {
	      className: '',
	      parent: document.body,
	      onProgress: null
	    };
	  };
	  /*
	    Method to set handle progress.
	    @public
	    @param {Number} Progress [0...1].
	    @param {Boolean} If should invoke onProgress callback.
	    @returns this.
	  */


	  Handle.prototype.setProgress = function setProgress(progress) {
	    var isCallback = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    var shift = this._progressToShift(progress);
	    this._setShift(shift, isCallback);
	    // calc delta and save it
	    this._delta = shift - this._shift;
	    this._saveDelta();
	    return this;
	  };
	  /*
	    Method to set handle shift.
	    @private
	    @param {Number} Shift in `px`.
	    @param {Boolean} If should invoke onProgress callback.
	    @returns {Number}.
	  */


	  Handle.prototype._setShift = function _setShift(shift) {
	    var isCallback = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    shift = _moJs2.default.h.clamp(shift, 0, this._maxWidth);
	    this._applyShift(shift);
	    isCallback && this._onProgress(shift);
	    return shift;
	  };
	  /*
	    Method to apply shift to the DOMElement.
	    @private
	    @param {Number} Shift in pixels.
	  */


	  Handle.prototype._applyShift = function _applyShift(shift) {
	    this.el.style.transform = 'translateX( ' + shift + 'px ) translateZ(0)';
	  };
	  /*
	    Method to declare properties.
	    @private
	    @overrides @ Module.
	  */


	  Handle.prototype._vars = function _vars() {
	    // `progress` of the handle [0..1]
	    this._progress = 0;
	    // `shift` of the handle ( position in `px` )
	    this._shift = 0;
	    // `delta` deviation from the current `shift`
	    this._delta = 0;
	    this._getMaxWidth();
	  };
	  /*
	    Method to get max width of the parent.
	    @private
	  */


	  Handle.prototype._getMaxWidth = function _getMaxWidth() {
	    this._maxWidth = this._props.parent.clientWidth;
	  };
	  /*
	    Method to render the component.
	    @private
	    @overrides @ Module
	  */


	  Handle.prototype._render = function _render() {
	    this._addElements();
	    this._hammerTime();
	  };
	  /*
	    Method to add DOM elements on render.
	    @private
	  */


	  Handle.prototype._addElements = function _addElements() {
	    var p = this._props,
	        inner = document.createElement('div'),
	        shadow = document.createElement('div');

	    this.el = document.createElement('div');

	    inner.classList.add('' + CLASSES.handle__inner);
	    shadow.classList.add('' + CLASSES.handle__shadow);
	    var classList = this.el.classList;
	    classList.add('' + CLASSES.handle);
	    classList.add('' + this._props.className);

	    this.el.appendChild(shadow);
	    this.el.appendChild(inner);
	  };
	  /*
	    Method to initialize HammerJS an set up all even listeners.
	    @private
	  */


	  Handle.prototype._hammerTime = function _hammerTime() {
	    var _this2 = this;

	    var hammerTime = (0, _hammerjs2.default)(this.el);
	    hammerTime.on('pan', function (e) {
	      _this2._delta = e.deltaX;
	      _this2._setShift(_this2._shift + e.deltaX);
	    });

	    hammerTime.on('panend', function (e) {
	      _this2._saveDelta();
	    });
	  };
	  /*
	    Method to add _delta to _shift.
	    @private
	  */


	  Handle.prototype._saveDelta = function _saveDelta() {
	    this._shift += this._delta;
	  };
	  /*
	    Method to call onProgress callback.
	    @private
	    @param {Number} Shift in `px`.
	  */


	  Handle.prototype._onProgress = function _onProgress(shift) {
	    var p = this._props,
	        progress = this._shiftToProgress(shift);
	    if (typeof p.onProgress === 'function' && this._progress !== progress) {
	      this._progress = progress;
	      p.onProgress.call(this, progress);
	    }
	  };
	  /*
	    Method to recalc shift to progress.
	    @private
	    @param {Number} Shift in `px`.
	    @returns {Number} Progress [0...1].
	  */


	  Handle.prototype._shiftToProgress = function _shiftToProgress(shift) {
	    return shift / this._maxWidth;
	  };
	  /*
	    Method to progress shift to shift.
	    @private
	    @param   {Number} Progress [0...1].
	    @returns {Number} Shift in `px`.
	   */


	  Handle.prototype._progressToShift = function _progressToShift(progress) {
	    return progress * this._maxWidth;
	  };

	  return Handle;
	}(_module2.default);

	exports.default = Handle;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.6 - 2015-12-23
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2015 Jorik Tangelder;
	 * Licensed under the  license */
	(function(window, document, exportName, undefined) {
	  'use strict';

	var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = document.createElement('div');

	var TYPE_FUNCTION = 'function';

	var round = Math.round;
	var abs = Math.abs;
	var now = Date.now;

	/**
	 * set a timeout with a given scope
	 * @param {Function} fn
	 * @param {Number} timeout
	 * @param {Object} context
	 * @returns {number}
	 */
	function setTimeoutContext(fn, timeout, context) {
	    return setTimeout(bindFn(fn, context), timeout);
	}

	/**
	 * if the argument is an array, we want to execute the fn on each entry
	 * if it aint an array we don't want to do a thing.
	 * this is used by all the methods that accept a single and array argument.
	 * @param {*|Array} arg
	 * @param {String} fn
	 * @param {Object} [context]
	 * @returns {Boolean}
	 */
	function invokeArrayArg(arg, fn, context) {
	    if (Array.isArray(arg)) {
	        each(arg, context[fn], context);
	        return true;
	    }
	    return false;
	}

	/**
	 * walk objects and arrays
	 * @param {Object} obj
	 * @param {Function} iterator
	 * @param {Object} context
	 */
	function each(obj, iterator, context) {
	    var i;

	    if (!obj) {
	        return;
	    }

	    if (obj.forEach) {
	        obj.forEach(iterator, context);
	    } else if (obj.length !== undefined) {
	        i = 0;
	        while (i < obj.length) {
	            iterator.call(context, obj[i], i, obj);
	            i++;
	        }
	    } else {
	        for (i in obj) {
	            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	        }
	    }
	}

	/**
	 * wrap a method with a deprecation warning and stack trace
	 * @param {Function} method
	 * @param {String} name
	 * @param {String} message
	 * @returns {Function} A new function wrapping the supplied method.
	 */
	function deprecate(method, name, message) {
	    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	    return function() {
	        var e = new Error('get-stack-trace');
	        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
	            .replace(/^\s+at\s+/gm, '')
	            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

	        var log = window.console && (window.console.warn || window.console.log);
	        if (log) {
	            log.call(window.console, deprecationMessage, stack);
	        }
	        return method.apply(this, arguments);
	    };
	}

	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} target
	 * @param {...Object} objects_to_assign
	 * @returns {Object} target
	 */
	var assign;
	if (typeof Object.assign !== 'function') {
	    assign = function assign(target) {
	        if (target === undefined || target === null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }

	        var output = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source !== undefined && source !== null) {
	                for (var nextKey in source) {
	                    if (source.hasOwnProperty(nextKey)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	        }
	        return output;
	    };
	} else {
	    assign = Object.assign;
	}

	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} dest
	 * @param {Object} src
	 * @param {Boolean=false} [merge]
	 * @returns {Object} dest
	 */
	var extend = deprecate(function extend(dest, src, merge) {
	    var keys = Object.keys(src);
	    var i = 0;
	    while (i < keys.length) {
	        if (!merge || (merge && dest[keys[i]] === undefined)) {
	            dest[keys[i]] = src[keys[i]];
	        }
	        i++;
	    }
	    return dest;
	}, 'extend', 'Use `assign`.');

	/**
	 * merge the values from src in the dest.
	 * means that properties that exist in dest will not be overwritten by src
	 * @param {Object} dest
	 * @param {Object} src
	 * @returns {Object} dest
	 */
	var merge = deprecate(function merge(dest, src) {
	    return extend(dest, src, true);
	}, 'merge', 'Use `assign`.');

	/**
	 * simple class inheritance
	 * @param {Function} child
	 * @param {Function} base
	 * @param {Object} [properties]
	 */
	function inherit(child, base, properties) {
	    var baseP = base.prototype,
	        childP;

	    childP = child.prototype = Object.create(baseP);
	    childP.constructor = child;
	    childP._super = baseP;

	    if (properties) {
	        assign(childP, properties);
	    }
	}

	/**
	 * simple function bind
	 * @param {Function} fn
	 * @param {Object} context
	 * @returns {Function}
	 */
	function bindFn(fn, context) {
	    return function boundFn() {
	        return fn.apply(context, arguments);
	    };
	}

	/**
	 * let a boolean value also be a function that must return a boolean
	 * this first item in args will be used as the context
	 * @param {Boolean|Function} val
	 * @param {Array} [args]
	 * @returns {Boolean}
	 */
	function boolOrFn(val, args) {
	    if (typeof val == TYPE_FUNCTION) {
	        return val.apply(args ? args[0] || undefined : undefined, args);
	    }
	    return val;
	}

	/**
	 * use the val2 when val1 is undefined
	 * @param {*} val1
	 * @param {*} val2
	 * @returns {*}
	 */
	function ifUndefined(val1, val2) {
	    return (val1 === undefined) ? val2 : val1;
	}

	/**
	 * addEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function addEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.addEventListener(type, handler, false);
	    });
	}

	/**
	 * removeEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function removeEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.removeEventListener(type, handler, false);
	    });
	}

	/**
	 * find if a node is in the given parent
	 * @method hasParent
	 * @param {HTMLElement} node
	 * @param {HTMLElement} parent
	 * @return {Boolean} found
	 */
	function hasParent(node, parent) {
	    while (node) {
	        if (node == parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}

	/**
	 * small indexOf wrapper
	 * @param {String} str
	 * @param {String} find
	 * @returns {Boolean} found
	 */
	function inStr(str, find) {
	    return str.indexOf(find) > -1;
	}

	/**
	 * split string on whitespace
	 * @param {String} str
	 * @returns {Array} words
	 */
	function splitStr(str) {
	    return str.trim().split(/\s+/g);
	}

	/**
	 * find if a array contains the object using indexOf or a simple polyFill
	 * @param {Array} src
	 * @param {String} find
	 * @param {String} [findByKey]
	 * @return {Boolean|Number} false when not found, or the index
	 */
	function inArray(src, find, findByKey) {
	    if (src.indexOf && !findByKey) {
	        return src.indexOf(find);
	    } else {
	        var i = 0;
	        while (i < src.length) {
	            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
	                return i;
	            }
	            i++;
	        }
	        return -1;
	    }
	}

	/**
	 * convert array-like objects to real arrays
	 * @param {Object} obj
	 * @returns {Array}
	 */
	function toArray(obj) {
	    return Array.prototype.slice.call(obj, 0);
	}

	/**
	 * unique array with objects based on a key (like 'id') or just by the array's value
	 * @param {Array} src [{id:1},{id:2},{id:1}]
	 * @param {String} [key]
	 * @param {Boolean} [sort=False]
	 * @returns {Array} [{id:1},{id:2}]
	 */
	function uniqueArray(src, key, sort) {
	    var results = [];
	    var values = [];
	    var i = 0;

	    while (i < src.length) {
	        var val = key ? src[i][key] : src[i];
	        if (inArray(values, val) < 0) {
	            results.push(src[i]);
	        }
	        values[i] = val;
	        i++;
	    }

	    if (sort) {
	        if (!key) {
	            results = results.sort();
	        } else {
	            results = results.sort(function sortUniqueArray(a, b) {
	                return a[key] > b[key];
	            });
	        }
	    }

	    return results;
	}

	/**
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String|Undefined} prefixed
	 */
	function prefixed(obj, property) {
	    var prefix, prop;
	    var camelProp = property[0].toUpperCase() + property.slice(1);

	    var i = 0;
	    while (i < VENDOR_PREFIXES.length) {
	        prefix = VENDOR_PREFIXES[i];
	        prop = (prefix) ? prefix + camelProp : property;

	        if (prop in obj) {
	            return prop;
	        }
	        i++;
	    }
	    return undefined;
	}

	/**
	 * get a unique id
	 * @returns {number} uniqueId
	 */
	var _uniqueId = 1;
	function uniqueId() {
	    return _uniqueId++;
	}

	/**
	 * get the window object of an element
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 */
	function getWindowForElement(element) {
	    var doc = element.ownerDocument || element;
	    return (doc.defaultView || doc.parentWindow || window);
	}

	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

	var SUPPORT_TOUCH = ('ontouchstart' in window);
	var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';

	var COMPUTE_INTERVAL = 25;

	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;

	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;

	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];

	/**
	 * create new input type manager
	 * @param {Manager} manager
	 * @param {Function} callback
	 * @returns {Input}
	 * @constructor
	 */
	function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget;

	    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	    // so when disabled the input events are completely bypassed.
	    this.domHandler = function(ev) {
	        if (boolOrFn(manager.options.enable, [manager])) {
	            self.handler(ev);
	        }
	    };

	    this.init();

	}

	Input.prototype = {
	    /**
	     * should handle the inputEvent data and trigger the callback
	     * @virtual
	     */
	    handler: function() { },

	    /**
	     * bind the events
	     */
	    init: function() {
	        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    },

	    /**
	     * unbind the events
	     */
	    destroy: function() {
	        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    }
	};

	/**
	 * create new input type manager
	 * called by the Manager constructor
	 * @param {Hammer} manager
	 * @returns {Input}
	 */
	function createInputInstance(manager) {
	    var Type;
	    var inputClass = manager.options.inputClass;

	    if (inputClass) {
	        Type = inputClass;
	    } else if (SUPPORT_POINTER_EVENTS) {
	        Type = PointerEventInput;
	    } else if (SUPPORT_ONLY_TOUCH) {
	        Type = TouchInput;
	    } else if (!SUPPORT_TOUCH) {
	        Type = MouseInput;
	    } else {
	        Type = TouchMouseInput;
	    }
	    return new (Type)(manager, inputHandler);
	}

	/**
	 * handle input events
	 * @param {Manager} manager
	 * @param {String} eventType
	 * @param {Object} input
	 */
	function inputHandler(manager, eventType, input) {
	    var pointersLen = input.pointers.length;
	    var changedPointersLen = input.changedPointers.length;
	    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
	    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

	    input.isFirst = !!isFirst;
	    input.isFinal = !!isFinal;

	    if (isFirst) {
	        manager.session = {};
	    }

	    // source event is the normalized value of the domEvents
	    // like 'touchstart, mouseup, pointerdown'
	    input.eventType = eventType;

	    // compute scale, rotation etc
	    computeInputData(manager, input);

	    // emit secret event
	    manager.emit('hammer.input', input);

	    manager.recognize(input);
	    manager.session.prevInput = input;
	}

	/**
	 * extend the data with some usable properties like scale, rotate, velocity etc
	 * @param {Object} manager
	 * @param {Object} input
	 */
	function computeInputData(manager, input) {
	    var session = manager.session;
	    var pointers = input.pointers;
	    var pointersLength = pointers.length;

	    // store the first input to calculate the distance and direction
	    if (!session.firstInput) {
	        session.firstInput = simpleCloneInputData(input);
	    }

	    // to compute scale and rotation we need to store the multiple touches
	    if (pointersLength > 1 && !session.firstMultiple) {
	        session.firstMultiple = simpleCloneInputData(input);
	    } else if (pointersLength === 1) {
	        session.firstMultiple = false;
	    }

	    var firstInput = session.firstInput;
	    var firstMultiple = session.firstMultiple;
	    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

	    var center = input.center = getCenter(pointers);
	    input.timeStamp = now();
	    input.deltaTime = input.timeStamp - firstInput.timeStamp;

	    input.angle = getAngle(offsetCenter, center);
	    input.distance = getDistance(offsetCenter, center);

	    computeDeltaXY(session, input);
	    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

	    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	    input.overallVelocityX = overallVelocity.x;
	    input.overallVelocityY = overallVelocity.y;
	    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

	    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

	    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
	        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

	    computeIntervalInputData(session, input);

	    // find the correct target
	    var target = manager.element;
	    if (hasParent(input.srcEvent.target, target)) {
	        target = input.srcEvent.target;
	    }
	    input.target = target;
	}

	function computeDeltaXY(session, input) {
	    var center = input.center;
	    var offset = session.offsetDelta || {};
	    var prevDelta = session.prevDelta || {};
	    var prevInput = session.prevInput || {};

	    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	        prevDelta = session.prevDelta = {
	            x: prevInput.deltaX || 0,
	            y: prevInput.deltaY || 0
	        };

	        offset = session.offsetDelta = {
	            x: center.x,
	            y: center.y
	        };
	    }

	    input.deltaX = prevDelta.x + (center.x - offset.x);
	    input.deltaY = prevDelta.y + (center.y - offset.y);
	}

	/**
	 * velocity is calculated every x ms
	 * @param {Object} session
	 * @param {Object} input
	 */
	function computeIntervalInputData(session, input) {
	    var last = session.lastInterval || input,
	        deltaTime = input.timeStamp - last.timeStamp,
	        velocity, velocityX, velocityY, direction;

	    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	        var deltaX = input.deltaX - last.deltaX;
	        var deltaY = input.deltaY - last.deltaY;

	        var v = getVelocity(deltaTime, deltaX, deltaY);
	        velocityX = v.x;
	        velocityY = v.y;
	        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
	        direction = getDirection(deltaX, deltaY);

	        session.lastInterval = input;
	    } else {
	        // use latest velocity info if it doesn't overtake a minimum period
	        velocity = last.velocity;
	        velocityX = last.velocityX;
	        velocityY = last.velocityY;
	        direction = last.direction;
	    }

	    input.velocity = velocity;
	    input.velocityX = velocityX;
	    input.velocityY = velocityY;
	    input.direction = direction;
	}

	/**
	 * create a simple clone from the input used for storage of firstInput and firstMultiple
	 * @param {Object} input
	 * @returns {Object} clonedInputData
	 */
	function simpleCloneInputData(input) {
	    // make a simple copy of the pointers because we will get a reference if we don't
	    // we only need clientXY for the calculations
	    var pointers = [];
	    var i = 0;
	    while (i < input.pointers.length) {
	        pointers[i] = {
	            clientX: round(input.pointers[i].clientX),
	            clientY: round(input.pointers[i].clientY)
	        };
	        i++;
	    }

	    return {
	        timeStamp: now(),
	        pointers: pointers,
	        center: getCenter(pointers),
	        deltaX: input.deltaX,
	        deltaY: input.deltaY
	    };
	}

	/**
	 * get the center of all the pointers
	 * @param {Array} pointers
	 * @return {Object} center contains `x` and `y` properties
	 */
	function getCenter(pointers) {
	    var pointersLength = pointers.length;

	    // no need to loop when only one touch
	    if (pointersLength === 1) {
	        return {
	            x: round(pointers[0].clientX),
	            y: round(pointers[0].clientY)
	        };
	    }

	    var x = 0, y = 0, i = 0;
	    while (i < pointersLength) {
	        x += pointers[i].clientX;
	        y += pointers[i].clientY;
	        i++;
	    }

	    return {
	        x: round(x / pointersLength),
	        y: round(y / pointersLength)
	    };
	}

	/**
	 * calculate the velocity between two points. unit is in px per ms.
	 * @param {Number} deltaTime
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Object} velocity `x` and `y`
	 */
	function getVelocity(deltaTime, x, y) {
	    return {
	        x: x / deltaTime || 0,
	        y: y / deltaTime || 0
	    };
	}

	/**
	 * get the direction between two points
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Number} direction
	 */
	function getDirection(x, y) {
	    if (x === y) {
	        return DIRECTION_NONE;
	    }

	    if (abs(x) >= abs(y)) {
	        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}

	/**
	 * calculate the absolute distance between two points
	 * @param {Object} p1 {x, y}
	 * @param {Object} p2 {x, y}
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} distance
	 */
	function getDistance(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];

	    return Math.sqrt((x * x) + (y * y));
	}

	/**
	 * calculate the angle between two coordinates
	 * @param {Object} p1
	 * @param {Object} p2
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} angle
	 */
	function getAngle(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	    return Math.atan2(y, x) * 180 / Math.PI;
	}

	/**
	 * calculate the rotation degrees between two pointersets
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} rotation
	 */
	function getRotation(start, end) {
	    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}

	/**
	 * calculate the scale factor between two pointersets
	 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} scale
	 */
	function getScale(start, end) {
	    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}

	var MOUSE_INPUT_MAP = {
	    mousedown: INPUT_START,
	    mousemove: INPUT_MOVE,
	    mouseup: INPUT_END
	};

	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

	/**
	 * Mouse events input
	 * @constructor
	 * @extends Input
	 */
	function MouseInput() {
	    this.evEl = MOUSE_ELEMENT_EVENTS;
	    this.evWin = MOUSE_WINDOW_EVENTS;

	    this.allow = true; // used by Input.TouchMouse to disable mouse events
	    this.pressed = false; // mousedown state

	    Input.apply(this, arguments);
	}

	inherit(MouseInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function MEhandler(ev) {
	        var eventType = MOUSE_INPUT_MAP[ev.type];

	        // on start we want to have the left mouse button down
	        if (eventType & INPUT_START && ev.button === 0) {
	            this.pressed = true;
	        }

	        if (eventType & INPUT_MOVE && ev.which !== 1) {
	            eventType = INPUT_END;
	        }

	        // mouse must be down, and mouse events are allowed (see the TouchMouse input)
	        if (!this.pressed || !this.allow) {
	            return;
	        }

	        if (eventType & INPUT_END) {
	            this.pressed = false;
	        }

	        this.callback(this.manager, eventType, {
	            pointers: [ev],
	            changedPointers: [ev],
	            pointerType: INPUT_TYPE_MOUSE,
	            srcEvent: ev
	        });
	    }
	});

	var POINTER_INPUT_MAP = {
	    pointerdown: INPUT_START,
	    pointermove: INPUT_MOVE,
	    pointerup: INPUT_END,
	    pointercancel: INPUT_CANCEL,
	    pointerout: INPUT_CANCEL
	};

	// in IE10 the pointer types is defined as an enum
	var IE10_POINTER_TYPE_ENUM = {
	    2: INPUT_TYPE_TOUCH,
	    3: INPUT_TYPE_PEN,
	    4: INPUT_TYPE_MOUSE,
	    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	};

	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

	// IE10 has prefixed support, and case-sensitive
	if (window.MSPointerEvent && !window.PointerEvent) {
	    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}

	/**
	 * Pointer events input
	 * @constructor
	 * @extends Input
	 */
	function PointerEventInput() {
	    this.evEl = POINTER_ELEMENT_EVENTS;
	    this.evWin = POINTER_WINDOW_EVENTS;

	    Input.apply(this, arguments);

	    this.store = (this.manager.session.pointerEvents = []);
	}

	inherit(PointerEventInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function PEhandler(ev) {
	        var store = this.store;
	        var removePointer = false;

	        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

	        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

	        // get index of the event in the store
	        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

	        // start and mouse must be down
	        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	            if (storeIndex < 0) {
	                store.push(ev);
	                storeIndex = store.length - 1;
	            }
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            removePointer = true;
	        }

	        // it not found, so the pointer hasn't been down (so it's probably a hover)
	        if (storeIndex < 0) {
	            return;
	        }

	        // update the event in the store
	        store[storeIndex] = ev;

	        this.callback(this.manager, eventType, {
	            pointers: store,
	            changedPointers: [ev],
	            pointerType: pointerType,
	            srcEvent: ev
	        });

	        if (removePointer) {
	            // remove from the store
	            store.splice(storeIndex, 1);
	        }
	    }
	});

	var SINGLE_TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Touch events input
	 * @constructor
	 * @extends Input
	 */
	function SingleTouchInput() {
	    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    this.started = false;

	    Input.apply(this, arguments);
	}

	inherit(SingleTouchInput, Input, {
	    handler: function TEhandler(ev) {
	        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

	        // should we handle the touch events?
	        if (type === INPUT_START) {
	            this.started = true;
	        }

	        if (!this.started) {
	            return;
	        }

	        var touches = normalizeSingleTouches.call(this, ev, type);

	        // when done, reset the started state
	        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	            this.started = false;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function normalizeSingleTouches(ev, type) {
	    var all = toArray(ev.touches);
	    var changed = toArray(ev.changedTouches);

	    if (type & (INPUT_END | INPUT_CANCEL)) {
	        all = uniqueArray(all.concat(changed), 'identifier', true);
	    }

	    return [all, changed];
	}

	var TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Multi-user touch events input
	 * @constructor
	 * @extends Input
	 */
	function TouchInput() {
	    this.evTarget = TOUCH_TARGET_EVENTS;
	    this.targetIds = {};

	    Input.apply(this, arguments);
	}

	inherit(TouchInput, Input, {
	    handler: function MTEhandler(ev) {
	        var type = TOUCH_INPUT_MAP[ev.type];
	        var touches = getTouches.call(this, ev, type);
	        if (!touches) {
	            return;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function getTouches(ev, type) {
	    var allTouches = toArray(ev.touches);
	    var targetIds = this.targetIds;

	    // when there is only one touch, the process can be simplified
	    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	        targetIds[allTouches[0].identifier] = true;
	        return [allTouches, allTouches];
	    }

	    var i,
	        targetTouches,
	        changedTouches = toArray(ev.changedTouches),
	        changedTargetTouches = [],
	        target = this.target;

	    // get target touches from touches
	    targetTouches = allTouches.filter(function(touch) {
	        return hasParent(touch.target, target);
	    });

	    // collect touches
	    if (type === INPUT_START) {
	        i = 0;
	        while (i < targetTouches.length) {
	            targetIds[targetTouches[i].identifier] = true;
	            i++;
	        }
	    }

	    // filter changed touches to only contain touches that exist in the collected target ids
	    i = 0;
	    while (i < changedTouches.length) {
	        if (targetIds[changedTouches[i].identifier]) {
	            changedTargetTouches.push(changedTouches[i]);
	        }

	        // cleanup removed touches
	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            delete targetIds[changedTouches[i].identifier];
	        }
	        i++;
	    }

	    if (!changedTargetTouches.length) {
	        return;
	    }

	    return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
	        changedTargetTouches
	    ];
	}

	/**
	 * Combined touch and mouse input
	 *
	 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	 * This because touch devices also emit mouse events while doing a touch.
	 *
	 * @constructor
	 * @extends Input
	 */
	function TouchMouseInput() {
	    Input.apply(this, arguments);

	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);
	}

	inherit(TouchMouseInput, Input, {
	    /**
	     * handle mouse and touch events
	     * @param {Hammer} manager
	     * @param {String} inputEvent
	     * @param {Object} inputData
	     */
	    handler: function TMEhandler(manager, inputEvent, inputData) {
	        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
	            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

	        // when we're in a touch event, so  block all upcoming mouse events
	        // most mobile browser also emit mouseevents, right after touchstart
	        if (isTouch) {
	            this.mouse.allow = false;
	        } else if (isMouse && !this.mouse.allow) {
	            return;
	        }

	        // reset the allowMouse when we're done
	        if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
	            this.mouse.allow = true;
	        }

	        this.callback(manager, inputEvent, inputData);
	    },

	    /**
	     * remove the event listeners
	     */
	    destroy: function destroy() {
	        this.touch.destroy();
	        this.mouse.destroy();
	    }
	});

	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

	// magical touchAction value
	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';

	/**
	 * Touch Action
	 * sets the touchAction property or uses the js alternative
	 * @param {Manager} manager
	 * @param {String} value
	 * @constructor
	 */
	function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	}

	TouchAction.prototype = {
	    /**
	     * set the touchAction value on the element or enable the polyfill
	     * @param {String} value
	     */
	    set: function(value) {
	        // find out the touch-action by the event handlers
	        if (value == TOUCH_ACTION_COMPUTE) {
	            value = this.compute();
	        }

	        if (NATIVE_TOUCH_ACTION && this.manager.element.style) {
	            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	        }
	        this.actions = value.toLowerCase().trim();
	    },

	    /**
	     * just re-set the touchAction value
	     */
	    update: function() {
	        this.set(this.manager.options.touchAction);
	    },

	    /**
	     * compute the value for the touchAction property based on the recognizer's settings
	     * @returns {String} value
	     */
	    compute: function() {
	        var actions = [];
	        each(this.manager.recognizers, function(recognizer) {
	            if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                actions = actions.concat(recognizer.getTouchAction());
	            }
	        });
	        return cleanTouchActions(actions.join(' '));
	    },

	    /**
	     * this method is called on each input cycle and provides the preventing of the browser behavior
	     * @param {Object} input
	     */
	    preventDefaults: function(input) {
	        // not needed with native support for the touchAction property
	        if (NATIVE_TOUCH_ACTION) {
	            return;
	        }

	        var srcEvent = input.srcEvent;
	        var direction = input.offsetDirection;

	        // if the touch action did prevented once this session
	        if (this.manager.session.prevented) {
	            srcEvent.preventDefault();
	            return;
	        }

	        var actions = this.actions;
	        var hasNone = inStr(actions, TOUCH_ACTION_NONE);
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);

	        if (hasNone) {
	            //do not prevent defaults if this is a tap gesture

	            var isTapPointer = input.pointers.length === 1;
	            var isTapMovement = input.distance < 2;
	            var isTapTouchTime = input.deltaTime < 250;

	            if (isTapPointer && isTapMovement && isTapTouchTime) {
	                return;
	            }
	        }

	        if (hasPanX && hasPanY) {
	            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	            return;
	        }

	        if (hasNone ||
	            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
	            (hasPanX && direction & DIRECTION_VERTICAL)) {
	            return this.preventSrc(srcEvent);
	        }
	    },

	    /**
	     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	     * @param {Object} srcEvent
	     */
	    preventSrc: function(srcEvent) {
	        this.manager.session.prevented = true;
	        srcEvent.preventDefault();
	    }
	};

	/**
	 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	 * @param {String} actions
	 * @returns {*}
	 */
	function cleanTouchActions(actions) {
	    // none
	    if (inStr(actions, TOUCH_ACTION_NONE)) {
	        return TOUCH_ACTION_NONE;
	    }

	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

	    // if both pan-x and pan-y are set (different recognizers
	    // for different directions, e.g. horizontal pan but vertical swipe?)
	    // we need none (as otherwise with pan-x pan-y combined none of these
	    // recognizers will work, since the browser would handle all panning
	    if (hasPanX && hasPanY) {
	        return TOUCH_ACTION_NONE;
	    }

	    // pan-x OR pan-y
	    if (hasPanX || hasPanY) {
	        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	    }

	    // manipulation
	    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	        return TOUCH_ACTION_MANIPULATION;
	    }

	    return TOUCH_ACTION_AUTO;
	}

	/**
	 * Recognizer flow explained; *
	 * All recognizers have the initial state of POSSIBLE when a input session starts.
	 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	 * Example session for mouse-input: mousedown -> mousemove -> mouseup
	 *
	 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	 * which determines with state it should be.
	 *
	 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	 * POSSIBLE to give it another change on the next cycle.
	 *
	 *               Possible
	 *                  |
	 *            +-----+---------------+
	 *            |                     |
	 *      +-----+-----+               |
	 *      |           |               |
	 *   Failed      Cancelled          |
	 *                          +-------+------+
	 *                          |              |
	 *                      Recognized       Began
	 *                                         |
	 *                                      Changed
	 *                                         |
	 *                                  Ended/Recognized
	 */
	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;

	/**
	 * Recognizer
	 * Every recognizer needs to extend from this class.
	 * @constructor
	 * @param {Object} options
	 */
	function Recognizer(options) {
	    this.options = assign({}, this.defaults, options || {});

	    this.id = uniqueId();

	    this.manager = null;

	    // default is enable true
	    this.options.enable = ifUndefined(this.options.enable, true);

	    this.state = STATE_POSSIBLE;

	    this.simultaneous = {};
	    this.requireFail = [];
	}

	Recognizer.prototype = {
	    /**
	     * @virtual
	     * @type {Object}
	     */
	    defaults: {},

	    /**
	     * set options
	     * @param {Object} options
	     * @return {Recognizer}
	     */
	    set: function(options) {
	        assign(this.options, options);

	        // also update the touchAction, in case something changed about the directions/enabled state
	        this.manager && this.manager.touchAction.update();
	        return this;
	    },

	    /**
	     * recognize simultaneous with an other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    recognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	            return this;
	        }

	        var simultaneous = this.simultaneous;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (!simultaneous[otherRecognizer.id]) {
	            simultaneous[otherRecognizer.id] = otherRecognizer;
	            otherRecognizer.recognizeWith(this);
	        }
	        return this;
	    },

	    /**
	     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRecognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        delete this.simultaneous[otherRecognizer.id];
	        return this;
	    },

	    /**
	     * recognizer can only run when an other is failing
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    requireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	            return this;
	        }

	        var requireFail = this.requireFail;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (inArray(requireFail, otherRecognizer) === -1) {
	            requireFail.push(otherRecognizer);
	            otherRecognizer.requireFailure(this);
	        }
	        return this;
	    },

	    /**
	     * drop the requireFailure link. it does not remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRequireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        var index = inArray(this.requireFail, otherRecognizer);
	        if (index > -1) {
	            this.requireFail.splice(index, 1);
	        }
	        return this;
	    },

	    /**
	     * has require failures boolean
	     * @returns {boolean}
	     */
	    hasRequireFailures: function() {
	        return this.requireFail.length > 0;
	    },

	    /**
	     * if the recognizer can recognize simultaneous with an other recognizer
	     * @param {Recognizer} otherRecognizer
	     * @returns {Boolean}
	     */
	    canRecognizeWith: function(otherRecognizer) {
	        return !!this.simultaneous[otherRecognizer.id];
	    },

	    /**
	     * You should use `tryEmit` instead of `emit` directly to check
	     * that all the needed recognizers has failed before emitting.
	     * @param {Object} input
	     */
	    emit: function(input) {
	        var self = this;
	        var state = this.state;

	        function emit(event) {
	            self.manager.emit(event, input);
	        }

	        // 'panstart' and 'panmove'
	        if (state < STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }

	        emit(self.options.event); // simple 'eventName' events

	        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
	            emit(input.additionalEvent);
	        }

	        // panend and pancancel
	        if (state >= STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	    },

	    /**
	     * Check that all the require failure recognizers has failed,
	     * if true, it emits a gesture event,
	     * otherwise, setup the state to FAILED.
	     * @param {Object} input
	     */
	    tryEmit: function(input) {
	        if (this.canEmit()) {
	            return this.emit(input);
	        }
	        // it's failing anyway
	        this.state = STATE_FAILED;
	    },

	    /**
	     * can we emit?
	     * @returns {boolean}
	     */
	    canEmit: function() {
	        var i = 0;
	        while (i < this.requireFail.length) {
	            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    },

	    /**
	     * update the recognizer
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        // make a new copy of the inputData
	        // so we can change the inputData without messing up the other recognizers
	        var inputDataClone = assign({}, inputData);

	        // is is enabled and allow recognizing?
	        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	            this.reset();
	            this.state = STATE_FAILED;
	            return;
	        }

	        // reset when we've reached the end
	        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	            this.state = STATE_POSSIBLE;
	        }

	        this.state = this.process(inputDataClone);

	        // the recognizer has recognized a gesture
	        // so trigger an event
	        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	            this.tryEmit(inputDataClone);
	        }
	    },

	    /**
	     * return the state of the recognizer
	     * the actual recognizing happens in this method
	     * @virtual
	     * @param {Object} inputData
	     * @returns {Const} STATE
	     */
	    process: function(inputData) { }, // jshint ignore:line

	    /**
	     * return the preferred touch-action
	     * @virtual
	     * @returns {Array}
	     */
	    getTouchAction: function() { },

	    /**
	     * called when the gesture isn't allowed to recognize
	     * like when another is being recognized or it is disabled
	     * @virtual
	     */
	    reset: function() { }
	};

	/**
	 * get a usable string, used as event postfix
	 * @param {Const} state
	 * @returns {String} state
	 */
	function stateStr(state) {
	    if (state & STATE_CANCELLED) {
	        return 'cancel';
	    } else if (state & STATE_ENDED) {
	        return 'end';
	    } else if (state & STATE_CHANGED) {
	        return 'move';
	    } else if (state & STATE_BEGAN) {
	        return 'start';
	    }
	    return '';
	}

	/**
	 * direction cons to string
	 * @param {Const} direction
	 * @returns {String}
	 */
	function directionStr(direction) {
	    if (direction == DIRECTION_DOWN) {
	        return 'down';
	    } else if (direction == DIRECTION_UP) {
	        return 'up';
	    } else if (direction == DIRECTION_LEFT) {
	        return 'left';
	    } else if (direction == DIRECTION_RIGHT) {
	        return 'right';
	    }
	    return '';
	}

	/**
	 * get a recognizer by name if it is bound to a manager
	 * @param {Recognizer|String} otherRecognizer
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer}
	 */
	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	    var manager = recognizer.manager;
	    if (manager) {
	        return manager.get(otherRecognizer);
	    }
	    return otherRecognizer;
	}

	/**
	 * This recognizer is just used as a base for the simple attribute recognizers.
	 * @constructor
	 * @extends Recognizer
	 */
	function AttrRecognizer() {
	    Recognizer.apply(this, arguments);
	}

	inherit(AttrRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof AttrRecognizer
	     */
	    defaults: {
	        /**
	         * @type {Number}
	         * @default 1
	         */
	        pointers: 1
	    },

	    /**
	     * Used to check if it the recognizer receives valid input, like input.distance > 10.
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {Boolean} recognized
	     */
	    attrTest: function(input) {
	        var optionPointers = this.options.pointers;
	        return optionPointers === 0 || input.pointers.length === optionPointers;
	    },

	    /**
	     * Process the input and return the state for the recognizer
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {*} State
	     */
	    process: function(input) {
	        var state = this.state;
	        var eventType = input.eventType;

	        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	        var isValid = this.attrTest(input);

	        // on cancel input and we've recognized before, return STATE_CANCELLED
	        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	            return state | STATE_CANCELLED;
	        } else if (isRecognized || isValid) {
	            if (eventType & INPUT_END) {
	                return state | STATE_ENDED;
	            } else if (!(state & STATE_BEGAN)) {
	                return STATE_BEGAN;
	            }
	            return state | STATE_CHANGED;
	        }
	        return STATE_FAILED;
	    }
	});

	/**
	 * Pan
	 * Recognized when the pointer is down and moved in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PanRecognizer() {
	    AttrRecognizer.apply(this, arguments);

	    this.pX = null;
	    this.pY = null;
	}

	inherit(PanRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PanRecognizer
	     */
	    defaults: {
	        event: 'pan',
	        threshold: 10,
	        pointers: 1,
	        direction: DIRECTION_ALL
	    },

	    getTouchAction: function() {
	        var direction = this.options.direction;
	        var actions = [];
	        if (direction & DIRECTION_HORIZONTAL) {
	            actions.push(TOUCH_ACTION_PAN_Y);
	        }
	        if (direction & DIRECTION_VERTICAL) {
	            actions.push(TOUCH_ACTION_PAN_X);
	        }
	        return actions;
	    },

	    directionTest: function(input) {
	        var options = this.options;
	        var hasMoved = true;
	        var distance = input.distance;
	        var direction = input.direction;
	        var x = input.deltaX;
	        var y = input.deltaY;

	        // lock to axis?
	        if (!(direction & options.direction)) {
	            if (options.direction & DIRECTION_HORIZONTAL) {
	                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                hasMoved = x != this.pX;
	                distance = Math.abs(input.deltaX);
	            } else {
	                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
	                hasMoved = y != this.pY;
	                distance = Math.abs(input.deltaY);
	            }
	        }
	        input.direction = direction;
	        return hasMoved && distance > options.threshold && direction & options.direction;
	    },

	    attrTest: function(input) {
	        return AttrRecognizer.prototype.attrTest.call(this, input) &&
	            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
	    },

	    emit: function(input) {

	        this.pX = input.deltaX;
	        this.pY = input.deltaY;

	        var direction = directionStr(input.direction);

	        if (direction) {
	            input.additionalEvent = this.options.event + direction;
	        }
	        this._super.emit.call(this, input);
	    }
	});

	/**
	 * Pinch
	 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PinchRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(PinchRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'pinch',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	    },

	    emit: function(input) {
	        if (input.scale !== 1) {
	            var inOut = input.scale < 1 ? 'in' : 'out';
	            input.additionalEvent = this.options.event + inOut;
	        }
	        this._super.emit.call(this, input);
	    }
	});

	/**
	 * Press
	 * Recognized when the pointer is down for x ms without any movement.
	 * @constructor
	 * @extends Recognizer
	 */
	function PressRecognizer() {
	    Recognizer.apply(this, arguments);

	    this._timer = null;
	    this._input = null;
	}

	inherit(PressRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PressRecognizer
	     */
	    defaults: {
	        event: 'press',
	        pointers: 1,
	        time: 251, // minimal time of the pointer to be pressed
	        threshold: 9 // a minimal movement is ok, but keep it low
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_AUTO];
	    },

	    process: function(input) {
	        var options = this.options;
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTime = input.deltaTime > options.time;

	        this._input = input;

	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
	            this.reset();
	        } else if (input.eventType & INPUT_START) {
	            this.reset();
	            this._timer = setTimeoutContext(function() {
	                this.state = STATE_RECOGNIZED;
	                this.tryEmit();
	            }, options.time, this);
	        } else if (input.eventType & INPUT_END) {
	            return STATE_RECOGNIZED;
	        }
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function(input) {
	        if (this.state !== STATE_RECOGNIZED) {
	            return;
	        }

	        if (input && (input.eventType & INPUT_END)) {
	            this.manager.emit(this.options.event + 'up', input);
	        } else {
	            this._input.timeStamp = now();
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	/**
	 * Rotate
	 * Recognized when two or more pointer are moving in a circular motion.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function RotateRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(RotateRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof RotateRecognizer
	     */
	    defaults: {
	        event: 'rotate',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	    }
	});

	/**
	 * Swipe
	 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function SwipeRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(SwipeRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof SwipeRecognizer
	     */
	    defaults: {
	        event: 'swipe',
	        threshold: 10,
	        velocity: 0.3,
	        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	        pointers: 1
	    },

	    getTouchAction: function() {
	        return PanRecognizer.prototype.getTouchAction.call(this);
	    },

	    attrTest: function(input) {
	        var direction = this.options.direction;
	        var velocity;

	        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	            velocity = input.overallVelocity;
	        } else if (direction & DIRECTION_HORIZONTAL) {
	            velocity = input.overallVelocityX;
	        } else if (direction & DIRECTION_VERTICAL) {
	            velocity = input.overallVelocityY;
	        }

	        return this._super.attrTest.call(this, input) &&
	            direction & input.offsetDirection &&
	            input.distance > this.options.threshold &&
	            input.maxPointers == this.options.pointers &&
	            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	    },

	    emit: function(input) {
	        var direction = directionStr(input.offsetDirection);
	        if (direction) {
	            this.manager.emit(this.options.event + direction, input);
	        }

	        this.manager.emit(this.options.event, input);
	    }
	});

	/**
	 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	 * a single tap.
	 *
	 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	 * multi-taps being recognized.
	 * @constructor
	 * @extends Recognizer
	 */
	function TapRecognizer() {
	    Recognizer.apply(this, arguments);

	    // previous time and center,
	    // used for tap counting
	    this.pTime = false;
	    this.pCenter = false;

	    this._timer = null;
	    this._input = null;
	    this.count = 0;
	}

	inherit(TapRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'tap',
	        pointers: 1,
	        taps: 1,
	        interval: 300, // max time between the multi-tap taps
	        time: 250, // max time of the pointer to be down (like finger on the screen)
	        threshold: 9, // a minimal movement is ok, but keep it low
	        posThreshold: 10 // a multi-tap can be a bit off the initial position
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_MANIPULATION];
	    },

	    process: function(input) {
	        var options = this.options;

	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTouchTime = input.deltaTime < options.time;

	        this.reset();

	        if ((input.eventType & INPUT_START) && (this.count === 0)) {
	            return this.failTimeout();
	        }

	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (validMovement && validTouchTime && validPointers) {
	            if (input.eventType != INPUT_END) {
	                return this.failTimeout();
	            }

	            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
	            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

	            this.pTime = input.timeStamp;
	            this.pCenter = input.center;

	            if (!validMultiTap || !validInterval) {
	                this.count = 1;
	            } else {
	                this.count += 1;
	            }

	            this._input = input;

	            // if tap count matches we have recognized it,
	            // else it has began recognizing...
	            var tapCount = this.count % options.taps;
	            if (tapCount === 0) {
	                // no failing requirements, immediately trigger the tap event
	                // or wait as long as the multitap interval to trigger
	                if (!this.hasRequireFailures()) {
	                    return STATE_RECOGNIZED;
	                } else {
	                    this._timer = setTimeoutContext(function() {
	                        this.state = STATE_RECOGNIZED;
	                        this.tryEmit();
	                    }, options.interval, this);
	                    return STATE_BEGAN;
	                }
	            }
	        }
	        return STATE_FAILED;
	    },

	    failTimeout: function() {
	        this._timer = setTimeoutContext(function() {
	            this.state = STATE_FAILED;
	        }, this.options.interval, this);
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function() {
	        if (this.state == STATE_RECOGNIZED) {
	            this._input.tapCount = this.count;
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	/**
	 * Simple way to create a manager with a default set of recognizers.
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Hammer(element, options) {
	    options = options || {};
	    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	    return new Manager(element, options);
	}

	/**
	 * @const {string}
	 */
	Hammer.VERSION = '2.0.6';

	/**
	 * default settings
	 * @namespace
	 */
	Hammer.defaults = {
	    /**
	     * set if DOM events are being triggered.
	     * But this is slower and unused by simple implementations, so disabled by default.
	     * @type {Boolean}
	     * @default false
	     */
	    domEvents: false,

	    /**
	     * The value for the touchAction property/fallback.
	     * When set to `compute` it will magically set the correct value based on the added recognizers.
	     * @type {String}
	     * @default compute
	     */
	    touchAction: TOUCH_ACTION_COMPUTE,

	    /**
	     * @type {Boolean}
	     * @default true
	     */
	    enable: true,

	    /**
	     * EXPERIMENTAL FEATURE -- can be removed/changed
	     * Change the parent input target element.
	     * If Null, then it is being set the to main element.
	     * @type {Null|EventTarget}
	     * @default null
	     */
	    inputTarget: null,

	    /**
	     * force an input class
	     * @type {Null|Function}
	     * @default null
	     */
	    inputClass: null,

	    /**
	     * Default recognizer setup when calling `Hammer()`
	     * When creating a new Manager these will be skipped.
	     * @type {Array}
	     */
	    preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, {enable: false}],
	        [PinchRecognizer, {enable: false}, ['rotate']],
	        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
	        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
	        [TapRecognizer],
	        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
	        [PressRecognizer]
	    ],

	    /**
	     * Some CSS properties can be used to improve the working of Hammer.
	     * Add them to this method and they will be set when creating a new Manager.
	     * @namespace
	     */
	    cssProps: {
	        /**
	         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userSelect: 'none',

	        /**
	         * Disable the Windows Phone grippers when pressing an element.
	         * @type {String}
	         * @default 'none'
	         */
	        touchSelect: 'none',

	        /**
	         * Disables the default callout shown when you touch and hold a touch target.
	         * On iOS, when you touch and hold a touch target such as a link, Safari displays
	         * a callout containing information about the link. This property allows you to disable that callout.
	         * @type {String}
	         * @default 'none'
	         */
	        touchCallout: 'none',

	        /**
	         * Specifies whether zooming is enabled. Used by IE10>
	         * @type {String}
	         * @default 'none'
	         */
	        contentZooming: 'none',

	        /**
	         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userDrag: 'none',

	        /**
	         * Overrides the highlight color shown when the user taps a link or a JavaScript
	         * clickable element in iOS. This property obeys the alpha value, if specified.
	         * @type {String}
	         * @default 'rgba(0,0,0,0)'
	         */
	        tapHighlightColor: 'rgba(0,0,0,0)'
	    }
	};

	var STOP = 1;
	var FORCED_STOP = 2;

	/**
	 * Manager
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Manager(element, options) {
	    this.options = assign({}, Hammer.defaults, options || {});

	    this.options.inputTarget = this.options.inputTarget || element;

	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];

	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);

	    toggleCssProps(this, true);

	    each(this.options.recognizers, function(item) {
	        var recognizer = this.add(new (item[0])(item[1]));
	        item[2] && recognizer.recognizeWith(item[2]);
	        item[3] && recognizer.requireFailure(item[3]);
	    }, this);
	}

	Manager.prototype = {
	    /**
	     * set options
	     * @param {Object} options
	     * @returns {Manager}
	     */
	    set: function(options) {
	        assign(this.options, options);

	        // Options that need a little more setup
	        if (options.touchAction) {
	            this.touchAction.update();
	        }
	        if (options.inputTarget) {
	            // Clean up existing event listeners and reinitialize
	            this.input.destroy();
	            this.input.target = options.inputTarget;
	            this.input.init();
	        }
	        return this;
	    },

	    /**
	     * stop recognizing for this session.
	     * This session will be discarded, when a new [input]start event is fired.
	     * When forced, the recognizer cycle is stopped immediately.
	     * @param {Boolean} [force]
	     */
	    stop: function(force) {
	        this.session.stopped = force ? FORCED_STOP : STOP;
	    },

	    /**
	     * run the recognizers!
	     * called by the inputHandler function on every movement of the pointers (touches)
	     * it walks through all the recognizers and tries to detect the gesture that is being made
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        var session = this.session;
	        if (session.stopped) {
	            return;
	        }

	        // run the touch-action polyfill
	        this.touchAction.preventDefaults(inputData);

	        var recognizer;
	        var recognizers = this.recognizers;

	        // this holds the recognizer that is being recognized.
	        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	        // if no recognizer is detecting a thing, it is set to `null`
	        var curRecognizer = session.curRecognizer;

	        // reset when the last recognizer is recognized
	        // or when we're in a new session
	        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
	            curRecognizer = session.curRecognizer = null;
	        }

	        var i = 0;
	        while (i < recognizers.length) {
	            recognizer = recognizers[i];

	            // find out if we are allowed try to recognize the input for this one.
	            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	            //      that is being recognized.
	            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	            //      this can be setup with the `recognizeWith()` method on the recognizer.
	            if (session.stopped !== FORCED_STOP && ( // 1
	                    !curRecognizer || recognizer == curRecognizer || // 2
	                    recognizer.canRecognizeWith(curRecognizer))) { // 3
	                recognizer.recognize(inputData);
	            } else {
	                recognizer.reset();
	            }

	            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	            // current active recognizer. but only if we don't already have an active recognizer
	            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                curRecognizer = session.curRecognizer = recognizer;
	            }
	            i++;
	        }
	    },

	    /**
	     * get a recognizer by its event name.
	     * @param {Recognizer|String} recognizer
	     * @returns {Recognizer|Null}
	     */
	    get: function(recognizer) {
	        if (recognizer instanceof Recognizer) {
	            return recognizer;
	        }

	        var recognizers = this.recognizers;
	        for (var i = 0; i < recognizers.length; i++) {
	            if (recognizers[i].options.event == recognizer) {
	                return recognizers[i];
	            }
	        }
	        return null;
	    },

	    /**
	     * add a recognizer to the manager
	     * existing recognizers with the same event name will be removed
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer|Manager}
	     */
	    add: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'add', this)) {
	            return this;
	        }

	        // remove existing
	        var existing = this.get(recognizer.options.event);
	        if (existing) {
	            this.remove(existing);
	        }

	        this.recognizers.push(recognizer);
	        recognizer.manager = this;

	        this.touchAction.update();
	        return recognizer;
	    },

	    /**
	     * remove a recognizer by name or instance
	     * @param {Recognizer|String} recognizer
	     * @returns {Manager}
	     */
	    remove: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'remove', this)) {
	            return this;
	        }

	        recognizer = this.get(recognizer);

	        // let's make sure this recognizer exists
	        if (recognizer) {
	            var recognizers = this.recognizers;
	            var index = inArray(recognizers, recognizer);

	            if (index !== -1) {
	                recognizers.splice(index, 1);
	                this.touchAction.update();
	            }
	        }

	        return this;
	    },

	    /**
	     * bind event
	     * @param {String} events
	     * @param {Function} handler
	     * @returns {EventEmitter} this
	     */
	    on: function(events, handler) {
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            handlers[event] = handlers[event] || [];
	            handlers[event].push(handler);
	        });
	        return this;
	    },

	    /**
	     * unbind event, leave emit blank to remove all handlers
	     * @param {String} events
	     * @param {Function} [handler]
	     * @returns {EventEmitter} this
	     */
	    off: function(events, handler) {
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            if (!handler) {
	                delete handlers[event];
	            } else {
	                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	            }
	        });
	        return this;
	    },

	    /**
	     * emit event to the listeners
	     * @param {String} event
	     * @param {Object} data
	     */
	    emit: function(event, data) {
	        // we also want to trigger dom events
	        if (this.options.domEvents) {
	            triggerDomEvent(event, data);
	        }

	        // no handlers, so skip it all
	        var handlers = this.handlers[event] && this.handlers[event].slice();
	        if (!handlers || !handlers.length) {
	            return;
	        }

	        data.type = event;
	        data.preventDefault = function() {
	            data.srcEvent.preventDefault();
	        };

	        var i = 0;
	        while (i < handlers.length) {
	            handlers[i](data);
	            i++;
	        }
	    },

	    /**
	     * destroy the manager and unbinds all events
	     * it doesn't unbind dom events, that is the user own responsibility
	     */
	    destroy: function() {
	        this.element && toggleCssProps(this, false);

	        this.handlers = {};
	        this.session = {};
	        this.input.destroy();
	        this.element = null;
	    }
	};

	/**
	 * add/remove the css properties as defined in manager.options.cssProps
	 * @param {Manager} manager
	 * @param {Boolean} add
	 */
	function toggleCssProps(manager, add) {
	    var element = manager.element;
	    if (!element.style) {
	        return;
	    }
	    each(manager.options.cssProps, function(value, name) {
	        element.style[prefixed(element.style, name)] = add ? value : '';
	    });
	}

	/**
	 * trigger dom event
	 * @param {String} event
	 * @param {Object} data
	 */
	function triggerDomEvent(event, data) {
	    var gestureEvent = document.createEvent('Event');
	    gestureEvent.initEvent(event, true, true);
	    gestureEvent.gesture = data;
	    data.target.dispatchEvent(gestureEvent);
	}

	assign(Hammer, {
	    INPUT_START: INPUT_START,
	    INPUT_MOVE: INPUT_MOVE,
	    INPUT_END: INPUT_END,
	    INPUT_CANCEL: INPUT_CANCEL,

	    STATE_POSSIBLE: STATE_POSSIBLE,
	    STATE_BEGAN: STATE_BEGAN,
	    STATE_CHANGED: STATE_CHANGED,
	    STATE_ENDED: STATE_ENDED,
	    STATE_RECOGNIZED: STATE_RECOGNIZED,
	    STATE_CANCELLED: STATE_CANCELLED,
	    STATE_FAILED: STATE_FAILED,

	    DIRECTION_NONE: DIRECTION_NONE,
	    DIRECTION_LEFT: DIRECTION_LEFT,
	    DIRECTION_RIGHT: DIRECTION_RIGHT,
	    DIRECTION_UP: DIRECTION_UP,
	    DIRECTION_DOWN: DIRECTION_DOWN,
	    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	    DIRECTION_ALL: DIRECTION_ALL,

	    Manager: Manager,
	    Input: Input,
	    TouchAction: TouchAction,

	    TouchInput: TouchInput,
	    MouseInput: MouseInput,
	    PointerEventInput: PointerEventInput,
	    TouchMouseInput: TouchMouseInput,
	    SingleTouchInput: SingleTouchInput,

	    Recognizer: Recognizer,
	    AttrRecognizer: AttrRecognizer,
	    Tap: TapRecognizer,
	    Pan: PanRecognizer,
	    Swipe: SwipeRecognizer,
	    Pinch: PinchRecognizer,
	    Rotate: RotateRecognizer,
	    Press: PressRecognizer,

	    on: addEventListeners,
	    off: removeEventListeners,
	    each: each,
	    merge: merge,
	    extend: extend,
	    assign: assign,
	    inherit: inherit,
	    bindFn: bindFn,
	    prefixed: prefixed
	});

	// this prevents errors when Hammer is loaded in the presence of an AMD
	//  style loader but by script tag, not by the loader.
	var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
	freeGlobal.Hammer = Hammer;

	if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return Hammer;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
	    module.exports = Hammer;
	} else {
	    window[exportName] = Hammer;
	}

	})(window, document, 'Hammer');


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _h = __webpack_require__(82);

	var _h2 = _interopRequireDefault(_h);

	var _shapesShapesMap = __webpack_require__(83);

	var _shapesShapesMap2 = _interopRequireDefault(_shapesShapesMap);

	var _burst = __webpack_require__(93);

	var _burst2 = _interopRequireDefault(_burst);

	var _transit = __webpack_require__(94);

	var _transit2 = _interopRequireDefault(_transit);

	var _swirl = __webpack_require__(107);

	var _swirl2 = _interopRequireDefault(_swirl);

	var _stagger = __webpack_require__(108);

	var _stagger2 = _interopRequireDefault(_stagger);

	var _spriter = __webpack_require__(109);

	var _spriter2 = _interopRequireDefault(_spriter);

	var _motionPath = __webpack_require__(110);

	var _motionPath2 = _interopRequireDefault(_motionPath);

	var _tweenTween = __webpack_require__(97);

	var _tweenTween2 = _interopRequireDefault(_tweenTween);

	var _tweenTimeline = __webpack_require__(105);

	var _tweenTimeline2 = _interopRequireDefault(_tweenTimeline);

	var _tweenTweener = __webpack_require__(98);

	var _tweenTweener2 = _interopRequireDefault(_tweenTweener);

	var _tweenTweenable = __webpack_require__(96);

	var _tweenTweenable2 = _interopRequireDefault(_tweenTweenable);

	var _thenable = __webpack_require__(95);

	var _thenable2 = _interopRequireDefault(_thenable);

	var _tunable = __webpack_require__(106);

	var _tunable2 = _interopRequireDefault(_tunable);

	var _module2 = __webpack_require__(85);

	var _module3 = _interopRequireDefault(_module2);

	var _tweenTweener3 = _interopRequireDefault(_tweenTweener);

	var _easingEasing = __webpack_require__(101);

	var _easingEasing2 = _interopRequireDefault(_easingEasing);

	var mojs = {
	  revision: '0.225.1', isDebug: true, helpers: _h2['default'],
	  Transit: _transit2['default'], Swirl: _swirl2['default'], Burst: _burst2['default'], stagger: _stagger2['default'], Spriter: _spriter2['default'], MotionPath: _motionPath2['default'],
	  Tween: _tweenTween2['default'], Timeline: _tweenTimeline2['default'], Tweenable: _tweenTweenable2['default'], Thenable: _thenable2['default'], Tunable: _tunable2['default'], Module: _module3['default'],
	  tweener: _tweenTweener3['default'], easing: _easingEasing2['default'], shapesMap: _shapesShapesMap2['default']
	};

	window.mojs = mojs;

	// TODO:
	/*
	  module names
	  swirls in then chains for x/y
	  parse rand(stagger(20, 10), 20) values
	  percentage for radius
	*/

	mojs.h = mojs.helpers;
	mojs.delta = mojs.h.delta;

	// ### istanbul ignore next ###
	if (true) {
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return mojs;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	// ### istanbul ignore next ###
	if (typeof module === "object" && typeof module.exports === "object") {
	  module.exports = mojs;
	}

/***/ },
/* 82 */
/***/ function(module, exports) {

	(function() {
	  var Helpers, h;

	  Helpers = (function() {
	    Helpers.prototype.NS = 'http://www.w3.org/2000/svg';

	    Helpers.prototype.logBadgeCss = 'background:#3A0839;color:#FF512F;border-radius:5px; padding: 1px 5px 2px; border: 1px solid #FF512F;';

	    Helpers.prototype.shortColors = {
	      transparent: 'rgba(0,0,0,0)',
	      none: 'rgba(0,0,0,0)',
	      aqua: 'rgb(0,255,255)',
	      black: 'rgb(0,0,0)',
	      blue: 'rgb(0,0,255)',
	      fuchsia: 'rgb(255,0,255)',
	      gray: 'rgb(128,128,128)',
	      green: 'rgb(0,128,0)',
	      lime: 'rgb(0,255,0)',
	      maroon: 'rgb(128,0,0)',
	      navy: 'rgb(0,0,128)',
	      olive: 'rgb(128,128,0)',
	      purple: 'rgb(128,0,128)',
	      red: 'rgb(255,0,0)',
	      silver: 'rgb(192,192,192)',
	      teal: 'rgb(0,128,128)',
	      white: 'rgb(255,255,255)',
	      yellow: 'rgb(255,255,0)',
	      orange: 'rgb(255,128,0)'
	    };

	    Helpers.prototype.chainOptionMap = {};

	    Helpers.prototype.callbacksMap = {
	      onStart: 1,
	      onComplete: 1,
	      onFirstUpdate: 1,
	      onUpdate: 1,
	      onProgress: 1,
	      onRepeatStart: 1,
	      onRepeatComplete: 1
	    };

	    Helpers.prototype.tweenOptionMap = {
	      duration: 1,
	      delay: 1,
	      speed: 1,
	      repeat: 1,
	      easing: 1,
	      yoyo: 1,
	      shiftTime: 1,
	      isReversed: 1
	    };

	    Helpers.prototype.unitOptionMap = {
	      left: 1,
	      top: 1,
	      x: 1,
	      y: 1,
	      rx: 1,
	      ry: 1
	    };

	    Helpers.prototype.RAD_TO_DEG = 180 / Math.PI;

	    function Helpers() {
	      this.vars();
	    }

	    Helpers.prototype.vars = function() {
	      var ua;
	      this.prefix = this.getPrefix();
	      this.getRemBase();
	      this.isFF = this.prefix.lowercase === 'moz';
	      this.isIE = this.prefix.lowercase === 'ms';
	      ua = navigator.userAgent;
	      this.isOldOpera = ua.match(/presto/gim);
	      this.isSafari = ua.indexOf('Safari') > -1;
	      this.isChrome = ua.indexOf('Chrome') > -1;
	      this.isOpera = ua.toLowerCase().indexOf("op") > -1;
	      this.isChrome && this.isSafari && (this.isSafari = false);
	      (ua.match(/PhantomJS/gim)) && (this.isSafari = false);
	      this.isChrome && this.isOpera && (this.isChrome = false);
	      this.is3d = this.checkIf3d();
	      this.uniqIDs = -1;
	      this.div = document.createElement('div');
	      return document.body.appendChild(this.div);
	    };

	    Helpers.prototype.cloneObj = function(obj, exclude) {
	      var i, key, keys, newObj;
	      keys = Object.keys(obj);
	      newObj = {};
	      i = keys.length;
	      while (i--) {
	        key = keys[i];
	        if (exclude != null) {
	          if (!exclude[key]) {
	            newObj[key] = obj[key];
	          }
	        } else {
	          newObj[key] = obj[key];
	        }
	      }
	      return newObj;
	    };

	    Helpers.prototype.extend = function(objTo, objFrom) {
	      var key, value;
	      for (key in objFrom) {
	        value = objFrom[key];
	        if (objTo[key] == null) {
	          objTo[key] = objFrom[key];
	        }
	      }
	      return objTo;
	    };

	    Helpers.prototype.getRemBase = function() {
	      var html, style;
	      html = document.querySelector('html');
	      style = getComputedStyle(html);
	      return this.remBase = parseFloat(style.fontSize);
	    };

	    Helpers.prototype.clamp = function(value, min, max) {
	      if (value < min) {
	        return min;
	      } else if (value > max) {
	        return max;
	      } else {
	        return value;
	      }
	    };

	    Helpers.prototype.setPrefixedStyle = function(el, name, value) {
	      (name === 'transform') && (el.style["" + this.prefix.css + name] = value);
	      return el.style[name] = value;
	    };

	    Helpers.prototype.style = function(el, name, value) {
	      var key, keys, len, _results;
	      if (typeof name === 'object') {
	        keys = Object.keys(name);
	        len = keys.length;
	        _results = [];
	        while (len--) {
	          key = keys[len];
	          value = name[key];
	          _results.push(this.setPrefixedStyle(el, key, value));
	        }
	        return _results;
	      } else {
	        return this.setPrefixedStyle(el, name, value);
	      }
	    };

	    Helpers.prototype.prepareForLog = function(args) {
	      args = Array.prototype.slice.apply(args);
	      args.unshift('::');
	      args.unshift(this.logBadgeCss);
	      args.unshift('%cmo·js%c');
	      return args;
	    };

	    Helpers.prototype.log = function() {
	      if (mojs.isDebug === false) {
	        return;
	      }
	      return console.log.apply(console, this.prepareForLog(arguments));
	    };

	    Helpers.prototype.warn = function() {
	      if (mojs.isDebug === false) {
	        return;
	      }
	      return console.warn.apply(console, this.prepareForLog(arguments));
	    };

	    Helpers.prototype.error = function() {
	      if (mojs.isDebug === false) {
	        return;
	      }
	      return console.error.apply(console, this.prepareForLog(arguments));
	    };

	    Helpers.prototype.parseUnit = function(value) {
	      var amount, isStrict, regex, returnVal, unit, _ref;
	      if (typeof value === 'number') {
	        return returnVal = {
	          unit: 'px',
	          isStrict: false,
	          value: value,
	          string: value === 0 ? "" + value : "" + value + "px"
	        };
	      } else if (typeof value === 'string') {
	        regex = /px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin/gim;
	        unit = (_ref = value.match(regex)) != null ? _ref[0] : void 0;
	        isStrict = true;
	        if (!unit) {
	          unit = 'px';
	          isStrict = false;
	        }
	        amount = parseFloat(value);
	        return returnVal = {
	          unit: unit,
	          isStrict: isStrict,
	          value: amount,
	          string: amount === 0 ? "" + amount : "" + amount + unit
	        };
	      }
	      return value;
	    };

	    Helpers.prototype.bind = function(func, context) {
	      var bindArgs, wrapper;
	      wrapper = function() {
	        var args, unshiftArgs;
	        args = Array.prototype.slice.call(arguments);
	        unshiftArgs = bindArgs.concat(args);
	        return func.apply(context, unshiftArgs);
	      };
	      bindArgs = Array.prototype.slice.call(arguments, 2);
	      return wrapper;
	    };

	    Helpers.prototype.getRadialPoint = function(o) {
	      var point, radAngle, radiusX, radiusY;
	      if (o == null) {
	        o = {};
	      }
	      if ((o.radius == null) || (o.angle == null) || (o.center == null)) {
	        return;
	      }
	      radAngle = (o.angle - 90) * (Math.PI / 180);
	      radiusX = o.radiusX != null ? o.radiusX : o.radius;
	      radiusY = o.radiusY != null ? o.radiusY : o.radius;
	      return point = {
	        x: o.center.x + (Math.cos(radAngle) * radiusX),
	        y: o.center.y + (Math.sin(radAngle) * radiusY)
	      };
	    };

	    Helpers.prototype.getPrefix = function() {
	      var dom, pre, styles, v;
	      styles = window.getComputedStyle(document.documentElement, "");
	      v = Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/);
	      pre = (v || (styles.OLink === "" && ["", "o"]))[1];
	      dom = "WebKit|Moz|MS|O".match(new RegExp("(" + pre + ")", "i"))[1];
	      return {
	        dom: dom,
	        lowercase: pre,
	        css: "-" + pre + "-",
	        js: pre[0].toUpperCase() + pre.substr(1)
	      };
	    };

	    Helpers.prototype.strToArr = function(string) {
	      var arr;
	      arr = [];
	      if (typeof string === 'number' && !isNaN(string)) {
	        arr.push(this.parseUnit(string));
	        return arr;
	      }
	      string.trim().split(/\s+/gim).forEach((function(_this) {
	        return function(str) {
	          return arr.push(_this.parseUnit(_this.parseIfRand(str)));
	        };
	      })(this));
	      return arr;
	    };

	    Helpers.prototype.calcArrDelta = function(arr1, arr2) {
	      var delta, i, num, _i, _len;
	      delta = [];
	      for (i = _i = 0, _len = arr1.length; _i < _len; i = ++_i) {
	        num = arr1[i];
	        delta[i] = this.parseUnit("" + (arr2[i].value - arr1[i].value) + arr2[i].unit);
	      }
	      return delta;
	    };

	    Helpers.prototype.isArray = function(variable) {
	      return variable instanceof Array;
	    };

	    Helpers.prototype.normDashArrays = function(arr1, arr2) {
	      var arr1Len, arr2Len, currItem, i, lenDiff, startI, _i, _j;
	      arr1Len = arr1.length;
	      arr2Len = arr2.length;
	      if (arr1Len > arr2Len) {
	        lenDiff = arr1Len - arr2Len;
	        startI = arr2.length;
	        for (i = _i = 0; 0 <= lenDiff ? _i < lenDiff : _i > lenDiff; i = 0 <= lenDiff ? ++_i : --_i) {
	          currItem = i + startI;
	          arr2.push(this.parseUnit("0" + arr1[currItem].unit));
	        }
	      } else if (arr2Len > arr1Len) {
	        lenDiff = arr2Len - arr1Len;
	        startI = arr1.length;
	        for (i = _j = 0; 0 <= lenDiff ? _j < lenDiff : _j > lenDiff; i = 0 <= lenDiff ? ++_j : --_j) {
	          currItem = i + startI;
	          arr1.push(this.parseUnit("0" + arr2[currItem].unit));
	        }
	      }
	      return [arr1, arr2];
	    };

	    Helpers.prototype.makeColorObj = function(color) {
	      var alpha, b, colorObj, g, isRgb, r, regexString1, regexString2, result, rgbColor;
	      if (color[0] === '#') {
	        result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(color);
	        colorObj = {};
	        if (result) {
	          r = result[1].length === 2 ? result[1] : result[1] + result[1];
	          g = result[2].length === 2 ? result[2] : result[2] + result[2];
	          b = result[3].length === 2 ? result[3] : result[3] + result[3];
	          colorObj = {
	            r: parseInt(r, 16),
	            g: parseInt(g, 16),
	            b: parseInt(b, 16),
	            a: 1
	          };
	        }
	      }
	      if (color[0] !== '#') {
	        isRgb = color[0] === 'r' && color[1] === 'g' && color[2] === 'b';
	        if (isRgb) {
	          rgbColor = color;
	        }
	        if (!isRgb) {
	          rgbColor = !this.shortColors[color] ? (this.div.style.color = color, this.computedStyle(this.div).color) : this.shortColors[color];
	        }
	        regexString1 = '^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),';
	        regexString2 = '\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$';
	        result = new RegExp(regexString1 + regexString2, 'gi').exec(rgbColor);
	        colorObj = {};
	        alpha = parseFloat(result[4] || 1);
	        if (result) {
	          colorObj = {
	            r: parseInt(result[1], 10),
	            g: parseInt(result[2], 10),
	            b: parseInt(result[3], 10),
	            a: (alpha != null) && !isNaN(alpha) ? alpha : 1
	          };
	        }
	      }
	      return colorObj;
	    };

	    Helpers.prototype.computedStyle = function(el) {
	      return getComputedStyle(el);
	    };

	    Helpers.prototype.capitalize = function(str) {
	      if (typeof str !== 'string') {
	        throw Error('String expected - nothing to capitalize');
	      }
	      return str.charAt(0).toUpperCase() + str.substring(1);
	    };

	    Helpers.prototype.parseRand = function(string) {
	      var rand, randArr, units;
	      randArr = string.split(/rand\(|\,|\)/);
	      units = this.parseUnit(randArr[2]);
	      rand = this.rand(parseFloat(randArr[1]), parseFloat(randArr[2]));
	      if (units.unit && randArr[2].match(units.unit)) {
	        return rand + units.unit;
	      } else {
	        return rand;
	      }
	    };

	    Helpers.prototype.parseStagger = function(string, index) {
	      var base, number, splittedValue, unit, unitValue, value;
	      value = string.split(/stagger\(|\)$/)[1].toLowerCase();
	      splittedValue = value.split(/(rand\(.*?\)|[^\(,\s]+)(?=\s*,|\s*$)/gim);
	      value = splittedValue.length > 3 ? (base = this.parseUnit(this.parseIfRand(splittedValue[1])), splittedValue[3]) : (base = this.parseUnit(0), splittedValue[1]);
	      value = this.parseIfRand(value);
	      unitValue = this.parseUnit(value);
	      number = index * unitValue.value + base.value;
	      unit = base.isStrict ? base.unit : unitValue.isStrict ? unitValue.unit : '';
	      if (unit) {
	        return "" + number + unit;
	      } else {
	        return number;
	      }
	    };

	    Helpers.prototype.parseIfStagger = function(value, i) {
	      if (!(typeof value === 'string' && value.match(/stagger/g))) {
	        return value;
	      } else {
	        return this.parseStagger(value, i);
	      }
	    };

	    Helpers.prototype.parseIfRand = function(str) {
	      if (typeof str === 'string' && str.match(/rand\(/)) {
	        return this.parseRand(str);
	      } else {
	        return str;
	      }
	    };

	    Helpers.prototype.parseDelta = function(key, value, index) {
	      var delta, end, endArr, endColorObj, i, start, startArr, startColorObj, _i, _len;
	      start = Object.keys(value)[0];
	      end = value[start];
	      delta = {
	        start: start
	      };
	      if (isNaN(parseFloat(start)) && !start.match(/rand\(/) && !start.match(/stagger\(/)) {
	        if (key === 'strokeLinecap') {
	          this.warn("Sorry, stroke-linecap property is not animatable yet, using the start(" + start + ") value instead", value);
	          return delta;
	        }
	        startColorObj = this.makeColorObj(start);
	        endColorObj = this.makeColorObj(end);
	        delta = {
	          start: startColorObj,
	          end: endColorObj,
	          type: 'color',
	          delta: {
	            r: endColorObj.r - startColorObj.r,
	            g: endColorObj.g - startColorObj.g,
	            b: endColorObj.b - startColorObj.b,
	            a: endColorObj.a - startColorObj.a
	          }
	        };
	      } else if (key === 'strokeDasharray' || key === 'strokeDashoffset') {
	        startArr = this.strToArr(start);
	        endArr = this.strToArr(end);
	        this.normDashArrays(startArr, endArr);
	        for (i = _i = 0, _len = startArr.length; _i < _len; i = ++_i) {
	          start = startArr[i];
	          end = endArr[i];
	          this.mergeUnits(start, end, key);
	        }
	        delta = {
	          start: startArr,
	          end: endArr,
	          delta: this.calcArrDelta(startArr, endArr),
	          type: 'array'
	        };
	      } else {
	        if (!this.callbacksMap[key] && !this.tweenOptionMap[key]) {
	          if (this.unitOptionMap[key]) {
	            end = this.parseUnit(this.parseStringOption(end, index));
	            start = this.parseUnit(this.parseStringOption(start, index));
	            this.mergeUnits(start, end, key);
	            delta = {
	              start: start,
	              end: end,
	              delta: end.value - start.value,
	              type: 'unit'
	            };
	          } else {
	            end = parseFloat(this.parseStringOption(end, index));
	            start = parseFloat(this.parseStringOption(start, index));
	            delta = {
	              start: start,
	              end: end,
	              delta: end - start,
	              type: 'number'
	            };
	          }
	        }
	      }
	      return delta;
	    };

	    Helpers.prototype.mergeUnits = function(start, end, key) {
	      if (!end.isStrict && start.isStrict) {
	        end.unit = start.unit;
	        return end.string = "" + end.value + end.unit;
	      } else if (end.isStrict && !start.isStrict) {
	        start.unit = end.unit;
	        return start.string = "" + start.value + start.unit;
	      } else if (end.isStrict && start.isStrict) {
	        if (end.unit !== start.unit) {
	          start.unit = end.unit;
	          start.string = "" + start.value + start.unit;
	          return this.warn("Two different units were specified on \"" + key + "\" delta property, mo · js will fallback to end \"" + end.unit + "\" unit ");
	        }
	      }
	    };

	    Helpers.prototype.rand = function(min, max) {
	      return (Math.random() * (max - min)) + min;
	    };

	    Helpers.prototype.isDOM = function(o) {
	      var isNode;
	      if (o == null) {
	        return false;
	      }
	      isNode = typeof o.nodeType === 'number' && typeof o.nodeName === 'string';
	      return typeof o === 'object' && isNode;
	    };

	    Helpers.prototype.getChildElements = function(element) {
	      var childNodes, children, i;
	      childNodes = element.childNodes;
	      children = [];
	      i = childNodes.length;
	      while (i--) {
	        if (childNodes[i].nodeType === 1) {
	          children.unshift(childNodes[i]);
	        }
	      }
	      return children;
	    };

	    Helpers.prototype.delta = function(start, end) {
	      var isType1, isType2, obj, type1, type2;
	      type1 = typeof start;
	      type2 = typeof end;
	      isType1 = type1 === 'string' || type1 === 'number' && !isNaN(start);
	      isType2 = type2 === 'string' || type2 === 'number' && !isNaN(end);
	      if (!isType1 || !isType2) {
	        this.error("delta method expects Strings or Numbers at input but got - " + start + ", " + end);
	        return;
	      }
	      obj = {};
	      obj[start] = end;
	      return obj;
	    };

	    Helpers.prototype.getUniqID = function() {
	      return ++this.uniqIDs;
	    };

	    Helpers.prototype.parsePath = function(path) {
	      var domPath;
	      if (typeof path === 'string') {
	        if (path.charAt(0).toLowerCase() === 'm') {
	          domPath = document.createElementNS(this.NS, 'path');
	          domPath.setAttributeNS(null, 'd', path);
	          return domPath;
	        } else {
	          return document.querySelector(path);
	        }
	      }
	      if (path.style) {
	        return path;
	      }
	    };

	    Helpers.prototype.closeEnough = function(num1, num2, eps) {
	      return Math.abs(num1 - num2) < eps;
	    };

	    Helpers.prototype.checkIf3d = function() {
	      var div, prefixed, style, tr;
	      div = document.createElement('div');
	      this.style(div, 'transform', 'translateZ(0)');
	      style = div.style;
	      prefixed = "" + this.prefix.css + "transform";
	      tr = style[prefixed] != null ? style[prefixed] : style.transform;
	      return tr !== '';
	    };


	    /*
	      Method to check if variable holds pointer to an object.
	      @param {Any} Variable to test
	      @returns {Boolean} If variable is object.
	     */

	    Helpers.prototype.isObject = function(variable) {
	      return variable !== null && typeof variable === 'object';
	    };


	    /*
	      Method to get first value of the object.
	      Used to get end value on ∆s.
	      @param {Object} Object to get the value of.
	      @returns {Any} The value of the first object' property.
	     */

	    Helpers.prototype.getDeltaEnd = function(obj) {
	      var key;
	      key = Object.keys(obj)[0];
	      return obj[key];
	    };


	    /*
	      Method to get first key of the object.
	      Used to get start value on ∆s.
	      @param {Object} Object to get the value of.
	      @returns {String} The key of the first object' property.
	     */

	    Helpers.prototype.getDeltaStart = function(obj) {
	      var key;
	      key = Object.keys(obj)[0];
	      return key;
	    };


	    /*
	      Method to check if propery exists in callbacksMap or tweenOptionMap.
	      @param {String} Property name to check for
	      @returns {Boolean} If property is tween property.
	     */

	    Helpers.prototype.isTweenProp = function(keyName) {
	      return this.tweenOptionMap[keyName] || this.callbacksMap[keyName];
	    };


	    /*
	      Method to parse string property value
	      which can include both `rand` and `stagger `
	      value in various positions.
	      @param {String} Property name to check for.
	      @param {Number} Optional index for stagger.
	      @returns {Number} Parsed option value.
	     */

	    Helpers.prototype.parseStringOption = function(value, index) {
	      if (index == null) {
	        index = 0;
	      }
	      if (typeof value === 'string') {
	        value = this.parseIfStagger(value, index);
	        value = this.parseIfRand(value);
	      }
	      return value;
	    };


	    /*
	      Method to get the last item of array.
	      @private
	      @param {Array} Array to get the last item in.
	      @returns {Any} The last item of array.
	     */

	    Helpers.prototype.getLastItem = function(arr) {
	      return arr[arr.length - 1];
	    };

	    return Helpers;

	  })();

	  h = new Helpers;

	  module.exports = h;

	}).call(this);


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var Bit, BitsMap, Circle, Cross, Equal, Line, Polygon, Rect, Zigzag, h;

	  Bit = __webpack_require__(84)["default"] || __webpack_require__(84);

	  Circle = __webpack_require__(86);

	  Line = __webpack_require__(87);

	  Zigzag = __webpack_require__(88);

	  Rect = __webpack_require__(89);

	  Polygon = __webpack_require__(90);

	  Cross = __webpack_require__(91);

	  Equal = __webpack_require__(92);

	  h = __webpack_require__(82);

	  BitsMap = (function() {
	    function BitsMap() {}

	    BitsMap.prototype.bit = Bit;

	    BitsMap.prototype.circle = Circle;

	    BitsMap.prototype.line = Line;

	    BitsMap.prototype.zigzag = Zigzag;

	    BitsMap.prototype.rect = Rect;

	    BitsMap.prototype.polygon = Polygon;

	    BitsMap.prototype.cross = Cross;

	    BitsMap.prototype.equal = Equal;

	    BitsMap.prototype.getShape = function(name) {
	      return this[name] || h.error("no \"" + name + "\" shape available yet, please choose from this list:", this);
	    };

	    return BitsMap;

	  })();

	  module.exports = new BitsMap;

	}).call(this);


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _module2 = __webpack_require__(85);

	var _module3 = _interopRequireDefault(_module2);

	var _h = __webpack_require__(82);

	var _h2 = _interopRequireDefault(_h);

	var Bit = (function (_Module) {
	  _inherits(Bit, _Module);

	  function Bit() {
	    _classCallCheck(this, Bit);

	    _get(Object.getPrototypeOf(Bit.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Bit, [{
	    key: '_declareDefaults',
	    value: function _declareDefaults() {
	      this._defaults = {
	        ns: 'http://www.w3.org/2000/svg',
	        ctx: null,

	        shape: 'line',
	        ratio: 1,
	        radius: 50,
	        radiusX: undefined,
	        radiusY: undefined,
	        points: 3,
	        x: 0,
	        y: 0,
	        rx: 0,
	        ry: 0,
	        angle: 0,
	        stroke: 'hotpink',
	        'stroke-width': 2,
	        'stroke-opacity': 1,
	        fill: 'transparent',
	        'fill-opacity': 1,
	        'stroke-dasharray': '',
	        'stroke-dashoffset': '',
	        'stroke-linecap': ''
	      };
	      this._drawMap = ['stroke', 'stroke-width', 'stroke-opacity', 'stroke-dasharray', 'fill', 'stroke-dashoffset', 'stroke-linecap', 'fill-opacity', 'transform'];
	    }

	    //
	  }, {
	    key: '_vars',
	    value: function _vars() {
	      if (this._o.ctx && this._o.ctx.tagName === 'svg') {
	        this.ctx = this._o.ctx;
	      } else if (!this._o.el) {
	        _h2['default'].error('You should pass a real context(ctx) to the bit');
	        // # --> COVER return if not ctx and not el
	        return true;
	      }
	      this._state = {};this._drawMapLength = this._drawMap.length;
	      // this.calcTransform();
	    }

	    // calcTransform () {
	    //   var p      = this._props,
	    //       rotate = `rotate(${p.angle}, ${p.x}, ${p.y})`;
	    //   p.transform = `${rotate}`;
	    // }

	  }, {
	    key: 'setAttr',
	    value: function setAttr(attr, value) {
	      if (typeof attr === 'object') {
	        var keys = Object.keys(attr),
	            len = keys.length,
	            el = value || this.el;

	        while (len--) {
	          var key = keys[len],
	              val = attr[key];
	          el.setAttribute(key, val);
	        }
	      } else {
	        this.el.setAttribute(attr, value);
	      }
	    }
	  }, {
	    key: 'setProp',
	    value: function setProp(attr, value) {
	      if (typeof attr === 'object') {
	        for (var key in attr) {
	          var val = attr[key];
	          this._props[key] = val;
	        }
	      } else {
	        this._props[attr] = value;
	      }
	    }
	  }, {
	    key: '_render',
	    value: function _render() {
	      this.isRendered = true;
	      if (this._o.el != null) {
	        this.el = this._o.el;
	        this.isForeign = true;
	      } else {
	        this.el = document.createElementNS(this._props.ns, this._props.shape);
	        !this._o.isDrawLess && this.draw();this.ctx.appendChild(this.el);
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this._props.length = this.getLength();

	      var len = this._drawMapLength;
	      while (len--) {
	        var name = this._drawMap[len];
	        switch (name) {
	          case 'stroke-dasharray':
	          case 'stroke-dashoffset':
	            this.castStrokeDash(name);
	          // # name is 'stroke-dashoffset' and console.log this._props[name]
	        }
	        this.setAttrIfChanged(name, this._props[name]);
	      }
	      this._state.radius = this._props.radius;
	    }
	  }, {
	    key: 'castStrokeDash',
	    value: function castStrokeDash(name) {
	      // # if array of values
	      var p = this._props;
	      if (_h2['default'].isArray(p[name])) {
	        var stroke = '';
	        for (var i = 0; i < p[name].length; i++) {
	          var dash = p[name][i],
	              cast = dash.unit === '%' ? this.castPercent(dash.value) : dash.value;
	          stroke += cast + ' ';
	        }
	        p[name] = stroke === '0 ' ? stroke = '' : stroke;
	        return p[name] = stroke;
	      }
	      // # if single value
	      if (typeof p[name] === 'object') {
	        stroke = p[name].unit === '%' ? this.castPercent(p[name].value) : p[name].value;
	        p[name] = stroke === 0 ? stroke = '' : stroke;
	      }
	    }
	  }, {
	    key: 'castPercent',
	    value: function castPercent(percent) {
	      return percent * (this._props.length / 100);
	    }
	  }, {
	    key: 'setAttrsIfChanged',
	    value: function setAttrsIfChanged(name, value) {
	      var keys = Object.keys(name),
	          len = keys.length;
	      while (len--) {
	        var key = keys[len],
	            value = name[key];
	        this.setAttrIfChanged(key, value);
	      }
	    }
	  }, {
	    key: 'setAttrIfChanged',
	    value: function setAttrIfChanged(name, value) {
	      if (this._state[name] !== value) {
	        this.el.setAttribute(name, value);
	        this._state[name] = value;
	      }
	    }
	  }, {
	    key: 'getLength',
	    value: function getLength() {
	      var p = this._props,
	          len = 0,
	          isGetLength = !!(this.el && this.el.getTotalLength);

	      if (isGetLength && this.el.getAttribute('d')) {
	        len = this.el.getTotalLength();
	      } else {
	        len = 2 * (p.radiusX != null ? p.radiusX : p.radius);
	      }
	      return len;
	    }
	  }]);

	  return Bit;
	})(_module3['default']);

	exports['default'] = Bit;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _h = __webpack_require__(82);

	/*
	  Base class for module. Extends and parses defaults.
	*/

	var _h2 = _interopRequireDefault(_h);

	var Module = (function () {
	  function Module() {
	    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Module);

	    this._o = o;
	    this._index = this._o.index || 0;
	    // map of props that should be
	    // parsed to arrays of values
	    this._arrayPropertyMap = {
	      strokeDasharray: 1,
	      strokeDashoffset: 1
	    };

	    this._skipPropsDelta = {
	      timeline: 1,
	      prevChainModule: 1,
	      callbacksContext: 1

	    };

	    this._declareDefaults();
	    this._extendDefaults();

	    this._vars();
	    // COVER
	    // if ( this._vars() ) {
	    // this._o.isIt && console.log('RETURN');
	    // return ;
	    // };
	    this._render();
	  }

	  /*
	    Method to declare defaults.
	    @private
	  */

	  _createClass(Module, [{
	    key: '_declareDefaults',
	    value: function _declareDefaults() {
	      this._defaults = {};
	    }

	    /*
	      Method to declare module's variables.
	      @private
	    */
	  }, {
	    key: '_vars',
	    value: function _vars() {
	      this._progress = 0;
	      this._strokeDasharrayBuffer = [];
	    }

	    /*
	      Method to render on initialization.
	      @private
	    */
	  }, {
	    key: '_render',
	    value: function _render() {}

	    /*
	      Method to set property on the module.
	      @private
	      @param {String, Object} Name of the property to set
	                              or object with properties to set.
	      @param {Any} Value for the property to set. Could be
	                    undefined if the first param is object.
	    */
	  }, {
	    key: '_setProp',
	    value: function _setProp(attr, value) {
	      if (typeof attr === 'object') {
	        for (var key in attr) {
	          this._assignProp(key, attr[key]);
	        }
	      } else {
	        this._assignProp(attr, value);
	      }
	    }

	    /*
	      Method to assign single property's value.
	      @private
	      @param {String} Property name.
	      @param {Any}    Property value.
	    */
	  }, {
	    key: '_assignProp',
	    value: function _assignProp(key, value) {
	      this._props[key] = value;
	    }

	    /*
	      Method to show the main div el.
	      @private
	    */
	  }, {
	    key: '_show',
	    value: function _show() {
	      if (this._isShown || this.el == null) {
	        return;
	      }
	      this.el.style.display = 'block';
	      this._isShown = true;
	    }

	    /*
	      Method to hide the main div el.
	      @private
	    */
	  }, {
	    key: '_hide',
	    value: function _hide() {
	      if (this._isShown === false || this.el == null) {
	        return;
	      }
	      this.el.style.display = 'none';
	      return this._isShown = false;
	    }

	    /*
	      Method to parse option string.
	      Searches for stagger and rand values and parses them.
	      Leaves the value unattended otherwise.
	      @param {Any} Option value to parse.
	      @returns {Number} Parsed options value.
	    */
	  }, {
	    key: '_parseOptionString',
	    value: function _parseOptionString(value) {
	      if (typeof value === 'string') {
	        if (value.match(/stagger/)) {
	          value = _h2['default'].parseStagger(value, this._index);
	        }
	      }
	      if (typeof value === 'string') {
	        if (value.match(/rand/)) {
	          value = _h2['default'].parseRand(value);
	        }
	      }
	      return value;
	    }

	    /*
	      Method to parse postion option.
	      @param {String} Property name.
	      @param {Any} Property Value.
	      @returns {String} Parsed options value.
	    */
	  }, {
	    key: '_parsePositionOption',
	    value: function _parsePositionOption(key, value) {
	      if (_h2['default'].unitOptionMap[key]) {
	        value = _h2['default'].parseUnit(value).string;
	      }
	      return value;
	    }

	    /*
	      Method to parse strokeDash.. option.
	      @param {String} Property name.
	      @param {Any}    Property value.
	      @returns {String} Parsed options value.
	    */
	  }, {
	    key: '_parseStrokeDashOption',
	    value: function _parseStrokeDashOption(key, value) {
	      var result = value;
	      // parse numeric/percent values for strokeDash.. properties
	      if (this._arrayPropertyMap[key]) {
	        var result = [];
	        switch (typeof value) {
	          case 'number':
	            result.push(_h2['default'].parseUnit(value));
	            break;
	          case 'string':
	            var array = value.split(' ');
	            for (var i = 0; i < array.length; i++) {
	              result.push(_h2['default'].parseUnit(array[i]));
	            }
	            break;
	        }
	      }
	      return result;
	    }

	    /*
	      Method to check if the property is delta property.
	      @private
	      @param {Any} Parameter value to check.
	      @returns {Boolean}
	    */
	  }, {
	    key: '_isDelta',
	    value: function _isDelta(optionsValue) {
	      var isObject = _h2['default'].isObject(optionsValue);
	      isObject = isObject && !optionsValue.unit;
	      return !(!isObject || _h2['default'].isArray(optionsValue) || _h2['default'].isDOM(optionsValue));
	    }

	    /*
	      Method to get delta from property and set
	      the property's start value to the props object.
	      @private
	      @param {String} Key name to get delta for.
	      @param {Object} Option value to get the delta for.
	    */
	  }, {
	    key: '_getDelta',
	    value: function _getDelta(key, optionsValue) {
	      var delta;
	      if ((key === 'left' || key === 'top') && !this._o.ctx) {
	        _h2['default'].warn('Consider to animate x/y properties instead of left/top,\n        as it would be much more performant', optionsValue);
	      }
	      // skip delta calculation for a property if it is listed
	      // in skipPropsDelta object
	      if (this._skipPropsDelta && this._skipPropsDelta[key]) {
	        return;
	      }
	      // get delta
	      delta = _h2['default'].parseDelta(key, optionsValue, this._index);
	      // if successfully parsed - save it
	      if (delta.type != null) {
	        this._deltas[key] = delta;
	      }

	      var deltaEnd = typeof delta.end === 'object' ? delta.end.value === 0 ? 0 : delta.end.string : delta.end;
	      // set props to end value of the delta
	      // 0 should be 0 regardless units
	      this._props[key] = deltaEnd;
	    }

	    /*
	      Method to copy `_o` options to `_props` object
	      with fallback to `_defaults`.
	      @private
	    */
	  }, {
	    key: '_extendDefaults',
	    value: function _extendDefaults() {
	      this._props = {};
	      this._deltas = {};
	      for (var key in this._defaults) {
	        // skip property if it is listed in _skipProps
	        // if (this._skipProps && this._skipProps[key]) { continue; }
	        // copy the properties to the _o object
	        var value = this._o[key] != null ? this._o[key] : this._defaults[key];
	        // parse option
	        this._parseOption(key, value);
	      }
	    }

	    /*
	      Method to tune new oprions to _o and _props object.
	      @private
	      @param {Object} Options object to tune to.
	    */
	  }, {
	    key: '_tuneNewOptions',
	    value: function _tuneNewOptions(o) {
	      // hide the module before tuning it's options
	      // cuz the user could see the change
	      this._hide();
	      for (var key in o) {
	        // skip property if it is listed in _skipProps
	        // if (this._skipProps && this._skipProps[key]) { continue; }
	        // copy the properties to the _o object
	        // delete the key from deltas
	        o && delete this._deltas[key];
	        // rewrite _o record
	        this._o[key] = o[key];
	        // save the options to _props
	        this._parseOption(key, o[key]);
	      }
	    }

	    /*
	      Method to parse option value.
	      @param {String} Option name.
	      @param {Any} Option value.
	    */
	  }, {
	    key: '_parseOption',
	    value: function _parseOption(name, value) {
	      // if delta property
	      if (this._isDelta(value) && !this._skipPropsDelta[name]) {
	        this._getDelta(name, value);
	        var deltaEnd = _h2['default'].getDeltaEnd(value);
	        return this._assignProp(name, this._parseProperty(name, deltaEnd));
	      }

	      this._assignProp(name, this._parseProperty(name, value));
	    }

	    /*
	      Method to parse postion and string props.
	      @private
	      @param {String} Property name.
	      @param {Any}    Property value.
	      @returns {Any}  Parsed property value.
	    */
	  }, {
	    key: '_parsePreArrayProperty',
	    value: function _parsePreArrayProperty(name, value) {
	      // parse stagger and rand values
	      value = this._parseOptionString(value);
	      // parse units for position properties
	      return this._parsePositionOption(name, value);
	    }

	    /*
	      Method to parse property value.
	      @private
	      @param {String} Property name.
	      @param {Any}    Property value.
	      @returns {Any}  Parsed property value.
	    */
	  }, {
	    key: '_parseProperty',
	    value: function _parseProperty(name, value) {
	      value = this._parsePreArrayProperty(name, value);
	      // parse numeric/percent values for strokeDash.. properties
	      return this._parseStrokeDashOption(name, value);
	    }

	    /*
	      Method to parse values inside ∆.
	      @private
	      @param {String} Key name.
	      @param {Object} Delta.
	      @returns {Object} Delta with parsed parameters.
	    */
	  }, {
	    key: '_parseDeltaValues',
	    value: function _parseDeltaValues(name, delta) {
	      for (var key in delta) {
	        var value = delta[key];
	        // delete the old key
	        delete delta[key];
	        // add parsed properties
	        var newEnd = this._parsePreArrayProperty(name, value);
	        delta[this._parsePreArrayProperty(name, key)] = newEnd;
	      }
	      return delta;
	    }

	    /*
	      Method to parse delta and nondelta properties.
	      @private
	      @param {String} Property name.
	      @param {Any}    Property value.
	      @returns {Any}  Parsed property value.
	    */
	  }, {
	    key: '_preparsePropValue',
	    value: function _preparsePropValue(key, value) {
	      return this._isDelta(value) ? this._parseDeltaValues(key, value) : this._parsePreArrayProperty(key, value);
	    }

	    /*
	      Method to calculate current progress of the deltas.
	      @private
	      @param {Number} Progress to calculate - [0..1].
	    */
	  }, {
	    key: '_calcCurrentProps',
	    value: function _calcCurrentProps(p) {
	      for (var key in this._deltas) {
	        var value = this._deltas[key];
	        if (value.type === 'array') {
	          this._strokeDasharrayBuffer.length = 0;
	          for (var i = 0; i < value.delta.length; i++) {
	            var item = value.delta[i],
	                dash = value.start[i].value + p * item.value;
	            this._strokeDasharrayBuffer.push({ value: dash, unit: item.unit });
	          }
	          this._props[key] = this._strokeDasharrayBuffer;
	        } else if (value.type === 'number') {
	          this._props[key] = value.start + value.delta * p;
	        } else if (value.type === 'unit') {
	          this._props[key] = '' + (value.start.value + p * value.delta) + value.end.unit;
	        } else if (value.type === 'color') {
	          var r = parseInt(value.start.r + p * value.delta.r, 10),
	              g = parseInt(value.start.g + p * value.delta.g, 10),
	              b = parseInt(value.start.b + p * value.delta.b, 10),
	              a = parseInt(value.start.a + p * value.delta.a, 10);
	          this._props[key] = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	        }
	      }
	    }

	    /*
	      Method to calculate current progress and probably draw it in children.
	      @private
	      @param {Number} Progress to set - [0..1].
	    */
	  }, {
	    key: '_setProgress',
	    value: function _setProgress(progress) {
	      this._progress = progress;
	      this._calcCurrentProps(progress);
	    }
	  }]);

	  return Module;
	})();

	exports['default'] = Module;
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	
	/* istanbul ignore next */

	(function() {
	  var Bit, Circle,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  Bit = __webpack_require__(84)["default"] || __webpack_require__(84);

	  Circle = (function(_super) {
	    __extends(Circle, _super);

	    function Circle() {
	      return Circle.__super__.constructor.apply(this, arguments);
	    }

	    Circle.prototype._declareDefaults = function() {
	      Circle.__super__._declareDefaults.apply(this, arguments);
	      return this._defaults.shape = 'ellipse';
	    };

	    Circle.prototype.draw = function() {
	      var rx, ry;
	      rx = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	      ry = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	      this.setAttrIfChanged('rx', rx);
	      this.setAttrIfChanged('ry', ry);
	      this.setAttrIfChanged('cx', this._props.x);
	      this.setAttrIfChanged('cy', this._props.y);
	      return Circle.__super__.draw.apply(this, arguments);
	    };

	    Circle.prototype.getLength = function() {
	      var radiusX, radiusY;
	      radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	      radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	      return 2 * Math.PI * Math.sqrt((radiusX * radiusX + radiusY * radiusY) / 2);
	    };

	    return Circle;

	  })(Bit);

	  module.exports = Circle;

	}).call(this);


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	
	/* istanbul ignore next */

	(function() {
	  var Bit, Line,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  Bit = __webpack_require__(84)["default"] || __webpack_require__(84);

	  Line = (function(_super) {
	    __extends(Line, _super);

	    function Line() {
	      return Line.__super__.constructor.apply(this, arguments);
	    }

	    Line.prototype.draw = function() {
	      var radiusX;
	      radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	      this.setAttrsIfChanged({
	        x1: this._props.x - radiusX,
	        x2: this._props.x + radiusX,
	        y1: this._props.y,
	        y2: this._props.y
	      });
	      return Line.__super__.draw.apply(this, arguments);
	    };

	    return Line;

	  })(Bit);

	  module.exports = Line;

	}).call(this);


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	
	/* istanbul ignore next */

	(function() {
	  var Bit, Zigzag,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  Bit = __webpack_require__(84)["default"] || __webpack_require__(84);

	  Zigzag = (function(_super) {
	    __extends(Zigzag, _super);

	    function Zigzag() {
	      return Zigzag.__super__.constructor.apply(this, arguments);
	    }

	    Zigzag.prototype._declareDefaults = function() {
	      Zigzag.__super__._declareDefaults.apply(this, arguments);
	      this._defaults.shape = 'path';
	      return this._defaults.ratio = 1.43;
	    };

	    Zigzag.prototype.draw = function() {
	      var char, i, iX, iX2, iY, iY2, points, radiusX, radiusY, stepX, stepY, strokeWidth, xStart, yStart, _i, _ref;
	      if (!this._props.points) {
	        return;
	      }
	      radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	      radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	      points = '';
	      stepX = 2 * radiusX / this._props.points;
	      stepY = 2 * radiusY / this._props.points;
	      strokeWidth = this._props['stroke-width'];
	      xStart = this._props.x - radiusX;
	      yStart = this._props.y - radiusY;
	      for (i = _i = _ref = this._props.points; _ref <= 0 ? _i < 0 : _i > 0; i = _ref <= 0 ? ++_i : --_i) {
	        iX = xStart + i * stepX + strokeWidth;
	        iY = yStart + i * stepY + strokeWidth;
	        iX2 = xStart + (i - 1) * stepX + strokeWidth;
	        iY2 = yStart + (i - 1) * stepY + strokeWidth;
	        char = i === this._props.points ? 'M' : 'L';
	        points += "" + char + iX + "," + iY + " l0, -" + stepY + " l-" + stepX + ", 0";
	      }
	      this.setAttr({
	        d: points
	      });
	      return Zigzag.__super__.draw.apply(this, arguments);
	    };

	    return Zigzag;

	  })(Bit);

	  module.exports = Zigzag;

	}).call(this);


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	
	/* istanbul ignore next */

	(function() {
	  var Bit, Rect,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  Bit = __webpack_require__(84)["default"] || __webpack_require__(84);

	  Rect = (function(_super) {
	    __extends(Rect, _super);

	    function Rect() {
	      return Rect.__super__.constructor.apply(this, arguments);
	    }

	    Rect.prototype._declareDefaults = function() {
	      Rect.__super__._declareDefaults.apply(this, arguments);
	      this._defaults.shape = 'rect';
	      return this._defaults.ratio = 1.43;
	    };

	    Rect.prototype.draw = function() {
	      var radiusX, radiusY;
	      Rect.__super__.draw.apply(this, arguments);
	      radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	      radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	      return this.setAttrsIfChanged({
	        width: 2 * radiusX,
	        height: 2 * radiusY,
	        x: parseFloat(this._props.x) - radiusX,
	        y: parseFloat(this._props.y) - radiusY,
	        rx: this._props.rx,
	        ry: this._props.ry
	      });
	    };

	    Rect.prototype.getLength = function() {
	      var radiusX, radiusY;
	      radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	      radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	      return 2 * radiusX + 2 * radiusY;
	    };

	    return Rect;

	  })(Bit);

	  module.exports = Rect;

	}).call(this);


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	
	/* istanbul ignore next */

	(function() {
	  var Bit, Polygon, h,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  Bit = __webpack_require__(84)["default"] || __webpack_require__(84);

	  h = __webpack_require__(82);

	  Polygon = (function(_super) {
	    __extends(Polygon, _super);

	    function Polygon() {
	      return Polygon.__super__.constructor.apply(this, arguments);
	    }

	    Polygon.prototype._declareDefaults = function() {
	      Polygon.__super__._declareDefaults.apply(this, arguments);
	      return this._defaults.shape = 'path';
	    };

	    Polygon.prototype.draw = function() {
	      this.drawShape();
	      return Polygon.__super__.draw.apply(this, arguments);
	    };

	    Polygon.prototype.drawShape = function() {
	      var char, d, i, point, step, _i, _j, _len, _ref, _ref1;
	      step = 360 / this._props.points;
	      this.radialPoints = [];
	      for (i = _i = 0, _ref = this._props.points; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
	        this.radialPoints.push(h.getRadialPoint({
	          radius: this._props.radius,
	          radiusX: this._props.radiusX,
	          radiusY: this._props.radiusY,
	          angle: i * step,
	          center: {
	            x: parseFloat(this._props.x),
	            y: parseFloat(this._props.y)
	          }
	        }));
	      }
	      d = '';
	      _ref1 = this.radialPoints;
	      for (i = _j = 0, _len = _ref1.length; _j < _len; i = ++_j) {
	        point = _ref1[i];
	        char = i === 0 ? 'M' : 'L';
	        d += "" + char + (point.x.toFixed(4)) + "," + (point.y.toFixed(4)) + " ";
	      }
	      return this.setAttr({
	        d: d += 'z'
	      });
	    };

	    Polygon.prototype.getLength = function() {
	      return this.el.getTotalLength();
	    };

	    return Polygon;

	  })(Bit);

	  module.exports = Polygon;

	}).call(this);


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	
	/* istanbul ignore next */

	(function() {
	  var Bit, Cross,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  Bit = __webpack_require__(84)["default"] || __webpack_require__(84);

	  Cross = (function(_super) {
	    __extends(Cross, _super);

	    function Cross() {
	      return Cross.__super__.constructor.apply(this, arguments);
	    }

	    Cross.prototype._declareDefaults = function() {
	      Cross.__super__._declareDefaults.apply(this, arguments);
	      return this._defaults.shape = 'path';
	    };

	    Cross.prototype.draw = function() {
	      var d, line1, line2, radiusX, radiusY, x, x1, x2, y, y1, y2;
	      Cross.__super__.draw.apply(this, arguments);
	      radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	      radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	      x = parseInt(this._props.x, 10);
	      y = parseInt(this._props.y, 10);
	      x1 = x - radiusX;
	      x2 = x + radiusX;
	      line1 = "M" + x1 + "," + this._props.y + " L" + x2 + "," + this._props.y;
	      y1 = y - radiusY;
	      y2 = y + radiusY;
	      line2 = "M" + this._props.x + "," + y1 + " L" + this._props.x + "," + y2;
	      d = "" + line1 + " " + line2;
	      return this.setAttr({
	        d: d
	      });
	    };

	    Cross.prototype.getLength = function() {
	      var radiusX, radiusY;
	      radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	      radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	      return 2 * (radiusX + radiusY);
	    };

	    return Cross;

	  })(Bit);

	  module.exports = Cross;

	}).call(this);


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	
	/* istanbul ignore next */

	(function() {
	  var Bit, Equal,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  Bit = __webpack_require__(84)["default"] || __webpack_require__(84);

	  Equal = (function(_super) {
	    __extends(Equal, _super);

	    function Equal() {
	      return Equal.__super__.constructor.apply(this, arguments);
	    }

	    Equal.prototype._declareDefaults = function() {
	      Equal.__super__._declareDefaults.apply(this, arguments);
	      this._defaults.shape = 'path';
	      return this._defaults.ratio = 1.43;
	    };

	    Equal.prototype.draw = function() {
	      var d, i, radiusX, radiusY, x1, x2, y, yStart, yStep, _i, _ref;
	      Equal.__super__.draw.apply(this, arguments);
	      if (!this._props.points) {
	        return;
	      }
	      radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
	      radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
	      x1 = this._props.x - radiusX;
	      x2 = this._props.x + radiusX;
	      d = '';
	      yStep = 2 * radiusY / (this._props.points - 1);
	      yStart = this._props.y - radiusY;
	      for (i = _i = 0, _ref = this._props.points; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
	        y = "" + (i * yStep + yStart);
	        d += "M" + x1 + ", " + y + " L" + x2 + ", " + y + " ";
	      }
	      return this.setAttr({
	        d: d
	      });
	    };

	    Equal.prototype.getLength = function() {
	      return 2 * (this._props.radiusX != null ? this._props.radiusX : this._props.radius);
	    };

	    return Equal;

	  })(Bit);

	  module.exports = Equal;

	}).call(this);


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _transit = __webpack_require__(94);

	var _transit2 = _interopRequireDefault(_transit);

	var _tweenTimeline = __webpack_require__(105);

	var _tweenTimeline2 = _interopRequireDefault(_tweenTimeline);

	var _swirl = __webpack_require__(107);

	var _swirl2 = _interopRequireDefault(_swirl);

	var _tunable = __webpack_require__(106);

	var _tunable2 = _interopRequireDefault(_tunable);

	var _h = __webpack_require__(82);

	var _h2 = _interopRequireDefault(_h);

	var Burst = (function (_Tunable) {
	  _inherits(Burst, _Tunable);

	  function Burst() {
	    _classCallCheck(this, Burst);

	    _get(Object.getPrototypeOf(Burst.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Burst, [{
	    key: '_declareDefaults',

	    /*
	      Method to declare defaults.
	      @override @ Swirl.
	    */
	    value: function _declareDefaults() {
	      this._defaults = {
	        /* [number > 0] :: Quantity of Burst particles. */
	        count: 5,
	        /* [0 < number < 360] :: Degree of the Burst. */
	        degree: 360,
	        /* ∆ :: [number > 0] :: Radius of the Burst. */
	        radius: { 0: 50 },
	        /* ∆ :: [number > 0] :: X radius of the Burst. */
	        radiusX: null,
	        /* ∆ :: [number > 0] :: Y radius of the Burst. */
	        radiusY: null,
	        /* [string] :: Easing for the main module (not children). */
	        easing: 'linear.none',
	        /* [boolean] :: If Burst itself should follow sinusoidal path. */
	        isSwirl: false
	      };
	    }

	    /*
	      Method to create a then record for the module.
	      @public
	      overrides @ Thenable
	      @param    {Object} Options for the next animation.
	      @returns  {Object} this.
	    */
	  }, {
	    key: 'then',
	    value: function then(o) {
	      // remove tween properties (not callbacks)
	      this._removeTweenProperties(o);

	      var newMaster = this._masterThen(o),
	          newSwirls = this._childThen(o, newMaster);

	      this._setSwirlDuration(newMaster, this._calcPackTime(newSwirls));

	      this.timeline._recalcTotalDuration();
	      return this;
	    }

	    /*
	      Method to start the animation with optional new options.
	      @public
	      @param {Object} New options to set on the run.
	      @returns {Object} this.
	    */
	  }, {
	    key: 'tune',
	    value: function tune(o) {
	      if (o == null) {
	        return this;
	      }
	      // save timeline options to _timelineOptions
	      // and delete the timeline options on o
	      // cuz masterSwirl should not get them
	      this._saveTimelineOptions(o);
	      // add new timeline properties to timeline
	      this.timeline._setProp(this._timelineOptions);
	      // remove tween options (not callbacks)
	      this._removeTweenProperties(o);
	      // tune _props
	      this._tuneNewOptions(o);
	      // tune master swirl
	      this.masterSwirl.tune(o);
	      // tune child swirls
	      this._tuneSwirls(o);
	      // recalc time for modules
	      this._recalcModulesTime();
	      return this;
	    }

	    // ^ PUBLIC  METHODS ^
	    // v PRIVATE METHODS v

	    /*
	      Method to copy `_o` options to `_props` object
	      with fallback to `_defaults`.
	      @private
	      @overrides @ Module
	    */
	  }, {
	    key: '_extendDefaults',
	    value: function _extendDefaults() {
	      // remove tween properties (not callbacks)
	      this._removeTweenProperties(this._o);
	      _get(Object.getPrototypeOf(Burst.prototype), '_extendDefaults', this).call(this);
	    }

	    /*
	      Method to remove all tween (excluding
	      callbacks) props from object.
	      @private
	      @param {Object} Object which should be cleaned
	                      up from tween properties.
	    */
	  }, {
	    key: '_removeTweenProperties',
	    value: function _removeTweenProperties(o) {
	      for (var key in _h2['default'].tweenOptionMap) {
	        // remove all items that are not declared in _defaults
	        if (this._defaults[key] == null) {
	          delete o[key];
	        }
	      }
	    }

	    /*
	      Method to recalc modules chain tween
	      times after tuning new options.
	      @private
	    */
	  }, {
	    key: '_recalcModulesTime',
	    value: function _recalcModulesTime() {
	      var modules = this.masterSwirl._modules,
	          swirls = this._swirls,
	          shiftTime = 0;

	      for (var i = 0; i < modules.length; i++) {
	        var tween = modules[i].tween,
	            packTime = this._calcPackTime(swirls[i]);
	        tween._setProp({ 'duration': packTime, 'shiftTime': shiftTime });
	        shiftTime += packTime;
	      }

	      this.timeline._recalcTotalDuration();
	    }

	    /*
	      Method to tune Swirls with new options.
	      @private
	      @param {Object} New options.
	    */
	  }, {
	    key: '_tuneSwirls',
	    value: function _tuneSwirls(o) {
	      // get swirls in first pack
	      var pack0 = this._swirls[0];
	      for (var i = 0; i < pack0.length; i++) {
	        var swirl = pack0[i],
	            option = this._getChildOption(o || {}, i);
	        this._addBurstProperties(option, i);
	        swirl.tune(option);
	      }
	    }

	    /*
	      Method to call then on masterSwirl.
	      @param {Object} Then options.
	      @returns {Object} New master swirl.
	    */
	  }, {
	    key: '_masterThen',
	    value: function _masterThen(o) {
	      this.masterSwirl.then(o);
	      // get the latest master swirl in then chain
	      var newMasterSwirl = _h2['default'].getLastItem(this.masterSwirl._modules);
	      // save to masterSwirls
	      this._masterSwirls.push(newMasterSwirl);
	      return newMasterSwirl;
	    }

	    /*
	      Method to call then on child swilrs.
	      @param {Object} Then options.
	      @param {Object} Current master Swirl.
	      @return {Array} Array of new Swirls.
	    */
	  }, {
	    key: '_childThen',
	    value: function _childThen(o, newMasterSwirl) {
	      var pack = this._swirls[0],
	          newPack = [];

	      for (var i = 0; i < pack.length; i++) {
	        // get option by modulus
	        var options = this._getChildOption(o, i);
	        // add new Master Swirl as parent of new childswirl
	        options.parent = newMasterSwirl.el;
	        pack[i].then(options);
	        // save the new item in `then` chain
	        newPack.push(_h2['default'].getLastItem(pack[i]._modules));
	      }
	      // save the pack to _swirls object
	      this._swirls[this._masterSwirls.length - 1] = newPack;
	      return newPack;
	    }

	    /*
	      Method to initialize properties.
	      @private
	      @overrides @ Thenable
	    */
	  }, {
	    key: '_vars',
	    value: function _vars() {
	      _get(Object.getPrototypeOf(Burst.prototype), '_vars', this).call(this);
	      // just buffer timeline for calculations
	      this._bufferTimeline = new _tweenTimeline2['default']();
	    }

	    /*
	      Method for initial render of the module.
	    */
	  }, {
	    key: '_render',
	    value: function _render() {
	      this._o.isWithShape = false;
	      this._o.isSwirl = this._props.isSwirl;
	      this._o.radius = 0;
	      this._o.callbacksContext = this;

	      // save timeline options and remove from _o
	      // cuz the master swirl should not get them
	      this._saveTimelineOptions(this._o);

	      this.masterSwirl = new _swirl2['default'](this._o);
	      this._masterSwirls = [this.masterSwirl];

	      this._renderSwirls();
	    }

	    /*
	      Method for initial render of swirls.
	      @private
	    */
	  }, {
	    key: '_renderSwirls',
	    value: function _renderSwirls() {
	      var p = this._props,
	          pack = [];

	      for (var i = 0; i < p.count; i++) {
	        var option = this._getChildOption(this._o, i);
	        pack.push(new _swirl2['default'](this._addOptionalProps(option, i)));
	      }
	      this._swirls = { 0: pack };
	      this._setSwirlDuration(this.masterSwirl, this._calcPackTime(pack));
	    }

	    /*
	      Method to save timeline options to _timelineOptions
	      and delete the property on the object.
	      @private
	      @param {Object} The object to save the timeline options from.
	    */
	  }, {
	    key: '_saveTimelineOptions',
	    value: function _saveTimelineOptions(o) {
	      this._timelineOptions = o.timeline;
	      delete o.timeline;
	    }

	    /*
	      Method to calculate total time of array of
	      concurrent tweens.
	      @param   {Array}  Pack to calculate the total time for.
	      @returns {Number} Total pack duration.
	    */
	  }, {
	    key: '_calcPackTime',
	    value: function _calcPackTime(pack) {
	      var maxTime = 0;
	      for (var i = 0; i < pack.length; i++) {
	        var tween = pack[i].tween,
	            p = tween._props;

	        maxTime = Math.max(p.repeatTime / p.speed, maxTime);
	      }
	      return maxTime;
	    }

	    /*
	      Method to set duration for Swirl.
	      @param {Object} Swirl instance to set the duration to.
	      @param {Number} Duration to set.
	    */
	  }, {
	    key: '_setSwirlDuration',
	    value: function _setSwirlDuration(swirl, duration) {
	      swirl.tween._setProp('duration', duration);
	      var isRecalc = swirl.timeline && swirl.timeline._recalcTotalDuration;
	      isRecalc && swirl.timeline._recalcTotalDuration();
	    }

	    /*
	      Method to get childOption form object call by modulus.
	      @private
	      @param   {Object} Object to look in.
	      @param   {Number} Index of the current Swirl.
	      @returns {Object} Options for the current swirl.
	    */
	  }, {
	    key: '_getChildOption',
	    value: function _getChildOption(obj, i) {
	      var options = {};
	      for (var key in obj.childOptions) {
	        options[key] = this._getPropByMod(key, i, obj.childOptions);
	      }
	      return options;
	    }

	    /*
	      Method to get property by modulus.
	      @private
	      @param {String} Name of the property.
	      @param {Number} Index for the modulus.
	      @param {Object} Source object to check in.
	      @returns {Any} Property.
	    */
	  }, {
	    key: '_getPropByMod',
	    value: function _getPropByMod(name, index) {
	      var sourceObj = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	      var prop = sourceObj[name];
	      return _h2['default'].isArray(prop) ? prop[index % prop.length] : prop;
	    }

	    /*
	      Method to add optional Swirls' properties to passed object.
	      @private
	      @param {Object} Object to add the properties to.
	      @param {Number} Index of the property.
	    */
	  }, {
	    key: '_addOptionalProps',
	    value: function _addOptionalProps(options, index) {
	      options.index = index;
	      options.left = '50%';
	      options.top = '50%';
	      options.parent = this.masterSwirl.el;
	      options.isSwirl = options.isSwirl == null ? false : options.isSwirl;

	      this._addBurstProperties(options, index);

	      return options;
	    }

	    /*
	      Method to add Burst options to object.
	      @private
	      @param {Object} Options to add the properties to.
	      @param {Number} Index of the Swirl.
	    */
	  }, {
	    key: '_addBurstProperties',
	    value: function _addBurstProperties(options, index) {
	      var p = this._props,
	          points = p.count,
	          degreeCnt = p.degree % 360 === 0 ? points : points - 1 || 1,
	          step = p.degree / degreeCnt,
	          pointStart = this._getSidePoint('start', index * step),
	          pointEnd = this._getSidePoint('end', index * step);

	      options.x = this._getDeltaFromPoints('x', pointStart, pointEnd);
	      options.y = this._getDeltaFromPoints('y', pointStart, pointEnd);
	      options.angle = this._getBitAngle(options.angle, index);
	    }

	    /* 
	      Method to get transits angle in burst so
	      it will follow circular shape.
	       
	       @param    {Number, Object} Base angle.
	       @param    {Number}         Transit's index in burst.
	       @returns  {Number}         Angle in burst.
	    */
	  }, {
	    key: '_getBitAngle',
	    value: function _getBitAngle(angleProperty, i) {
	      if (angleProperty === undefined) angleProperty = 0;

	      var p = this._props,
	          degCnt = p.degree % 360 === 0 ? p.count : p.count - 1 || 1,
	          step = p.degree / degCnt,
	          angle = i * step + 90;
	      // if not delta option
	      if (!this._isDelta(angleProperty)) {
	        angleProperty += angle;
	      } else {
	        var delta = {},
	            keys = Object.keys(angleProperty),
	            start = keys[0],
	            end = angleProperty[start];

	        start = _h2['default'].parseStringOption(start, i);
	        end = _h2['default'].parseStringOption(end, i);
	        // new start = newEnd
	        delta[parseFloat(start) + angle] = parseFloat(end) + angle;

	        angleProperty = delta;
	      }
	      return angleProperty;
	    }

	    /*
	      Method to get radial point on `start` or `end`.
	      @private
	      @param {String} Name of the side - [start, end].
	      @param {Number} Angle of the radial point.
	      @returns radial point.
	    */
	  }, {
	    key: '_getSidePoint',
	    value: function _getSidePoint(side, angle) {
	      var p = this._props,
	          sideRadius = this._getSideRadius(side);

	      return _h2['default'].getRadialPoint({
	        radius: sideRadius.radius,
	        radiusX: sideRadius.radiusX,
	        radiusY: sideRadius.radiusY,
	        angle: angle,
	        // center:  { x: p.center, y: p.center }
	        center: { x: 0, y: 0 }
	      });
	    }

	    /*
	      Method to get radius of the side.
	      @private
	      @param {String} Name of the side - [start, end].
	      @returns {Object} Radius.
	    */
	  }, {
	    key: '_getSideRadius',
	    value: function _getSideRadius(side) {
	      return {
	        radius: this._getRadiusByKey('radius', side),
	        radiusX: this._getRadiusByKey('radiusX', side),
	        radiusY: this._getRadiusByKey('radiusY', side)
	      };
	    }

	    /*
	      Method to get radius from ∆ or plain property.
	      @private
	      @param {String} Key name.
	      @param {String} Side name - [start, end].
	    */
	  }, {
	    key: '_getRadiusByKey',
	    value: function _getRadiusByKey(key, side) {
	      if (this._deltas[key] != null) {
	        return this._deltas[key][side];
	      } else if (this._props[key] != null) {
	        return this._props[key];
	      }
	    }

	    /*
	      Method to get delta from start and end position points.
	      @private
	      @param {String} Key name.
	      @param {Object} Start position point.
	      @param {Object} End position point.
	      @returns {Object} Delta of the end/start.
	    */
	  }, {
	    key: '_getDeltaFromPoints',
	    value: function _getDeltaFromPoints(key, pointStart, pointEnd) {
	      var delta = {};
	      if (pointStart[key] === pointEnd[key]) {
	        delta = pointStart[key];
	      } else {
	        delta[pointStart[key]] = pointEnd[key];
	      }
	      return delta;
	    }

	    /*
	      Method to create timeline.
	      @private
	      @override @ Tweenable
	    */
	  }, {
	    key: '_makeTimeline',
	    value: function _makeTimeline() {
	      // restore timeline options that were deleted in _render method
	      this._o.timeline = this._timelineOptions;
	      _get(Object.getPrototypeOf(Burst.prototype), '_makeTimeline', this).call(this);
	      this.timeline.add(this.masterSwirl, this._swirls[0]);
	    }

	    /*
	      Method to make Tween for the module.
	      @private
	      @override @ Tweenable
	    */
	  }, {
	    key: '_makeTween',
	    value: function _makeTween() {/* don't create any tween */}
	  }]);

	  return Burst;
	})(_tunable2['default']);

	exports['default'] = Burst;
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _module2 = __webpack_require__(85);

	var _module3 = _interopRequireDefault(_module2);

	var _thenable = __webpack_require__(95);

	var _thenable2 = _interopRequireDefault(_thenable);

	var _tunable = __webpack_require__(106);

	var _tunable2 = _interopRequireDefault(_tunable);

	var _tweenTweenable = __webpack_require__(96);

	var _tweenTweenable2 = _interopRequireDefault(_tweenTweenable);

	var _tweenTween = __webpack_require__(97);

	var _tweenTween2 = _interopRequireDefault(_tweenTween);

	var _tweenTimeline = __webpack_require__(105);

	// TODO
	//  - refactor
	//    - add setIfChanged to Module
	//  --
	//  - tween for every prop

	var _tweenTimeline2 = _interopRequireDefault(_tweenTimeline);

	var h = __webpack_require__(82);
	var Bit = __webpack_require__(84);
	var shapesMap = __webpack_require__(83);

	var Transit = (function (_Tunable) {
	  _inherits(Transit, _Tunable);

	  function Transit() {
	    _classCallCheck(this, Transit);

	    _get(Object.getPrototypeOf(Transit.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Transit, [{
	    key: '_declareDefaults',

	    /*
	      Method to declare module's defaults.
	      @private
	    */
	    value: function _declareDefaults() {
	      // DEFAULTS / APIs
	      this._defaults = {
	        // Possible values: [circle, line, zigzag, rect, polygon, cross, equal ]
	        shape: 'circle',
	        // ∆ :: Possible values: [color name, rgb, rgba, hex]
	        stroke: 'transparent',
	        // ∆ :: Possible values: [ 0..1 ]
	        strokeOpacity: 1,
	        // Possible values: ['butt' | 'round' | 'square']
	        strokeLinecap: '',
	        // ∆ :: Possible values: [ number ]
	        strokeWidth: 2,
	        // ∆ :: Units :: Possible values: [ number, string ]
	        strokeDasharray: 0,
	        // ∆ :: Units :: Possible values: [ number, string ]
	        strokeDashoffset: 0,
	        // ∆ :: Possible values: [color name, rgb, rgba, hex]
	        fill: 'deeppink',
	        // ∆ :: Possible values: [ 0..1 ]
	        fillOpacity: 1,
	        // ∆ :: Units :: Possible values: [ number, string ]
	        left: 0,
	        // ∆ :: Units :: Possible values: [ number, string ]
	        top: 0,
	        // ∆ :: Units :: Possible values: [ number, string ]
	        x: 0,
	        // ∆ :: Units :: Possible values: [ number, string ]
	        y: 0,
	        // ∆ :: Units :: Possible values: [ number, string ]
	        rx: 0,
	        // ∆ :: Units :: Possible values: [ number, string ]
	        ry: 0,
	        // ∆ :: Possible values: [ number ]
	        angle: 0,
	        // ∆ :: Possible values: [ number ]
	        scale: 1,
	        // ∆ :: Possible values: [ 0..1 ]
	        opacity: 1,
	        // ∆ :: Possible values: [ number ]
	        points: 3,
	        // ∆ :: Possible values: [ number ]
	        radius: { 0: 50 },
	        // ∆ :: Possible values: [ number ]
	        radiusX: null,
	        // ∆ :: Possible values: [ number ]
	        radiusY: null,
	        // Possible values: [ boolean ]
	        isShowStart: false,
	        // Possible values: [ boolean ]
	        isShowEnd: true,
	        // Possible values: [ number > 0 ]
	        duration: 400,
	        // Possible values: [ number ]
	        size: null,
	        // Possible values: [ number ]
	        sizeGap: 0,
	        // context for all the callbacks
	        callbacksContext: this,
	        // previous modules in then chain
	        prevChainModule: null
	      };
	    }

	    // ^ PUBLIC  METHOD(S) ^
	    // v PRIVATE METHOD(S) v

	    /*
	      Method to declare variables.
	      @overrides Thenable
	    */
	  }, {
	    key: '_vars',
	    value: function _vars() {
	      // call _vars method on Thenable
	      _get(Object.getPrototypeOf(Transit.prototype), '_vars', this).call(this);
	      this._lastSet = {};
	      this._origin = {};
	      // should draw on foreign svg canvas
	      this.isForeign = !!this._o.ctx;
	      // this._super_setProgress = Module.prototype._setProgress.bind(this);
	      // should take an svg element as self bit
	      return this.isForeignBit = !!this._o.bit;
	    }

	    /*
	      Method to initialize modules presentation.
	      @private
	      @overrides Module
	    */
	  }, {
	    key: '_render',
	    value: function _render() {
	      if (!this.isRendered) {
	        if (!this.isForeign && !this.isForeignBit) {
	          this.ctx = document.createElementNS(h.NS, 'svg');
	          this.ctx.style.position = 'absolute';
	          this.ctx.style.width = '100%';
	          this.ctx.style.height = '100%';
	          this.ctx.style.left = '0';
	          this.ctx.style.top = '0';
	          this.el = document.createElement('div');
	          this.el.appendChild(this.ctx);
	          this._createBit();
	          this._calcSize();
	          (this._o.parent || document.body).appendChild(this.el);
	        } else {
	          this.ctx = this._o.ctx;this._createBit();this._calcSize();
	        }
	        this.isRendered = true;
	      }
	      this._setElStyles();

	      // if (this.el != null) { this.el.style.opacity = this._props.opacity; }
	      if (this._o.isShowStart) {
	        this._show();
	      } else {
	        this._hide();
	      }

	      this._setProgress(0);
	      return this;
	    }

	    /*
	      Method to set el styles on initialization.
	      @private
	    */
	  }, {
	    key: '_setElStyles',
	    value: function _setElStyles() {
	      var marginSize,
	          ref,
	          size,
	          p = this._props;
	      if (!this.isForeign) {
	        size = this._props.size + "px";
	        this.el.style.position = 'absolute';
	        this.el.style.top = p.top;
	        this.el.style.left = p.left;
	        this.el.style.width = size;
	        this.el.style.height = size;
	        this.el.style.opacity = p.opacity;
	        marginSize = -this._props.size / 2 + "px";
	        this.el.style['margin-left'] = marginSize;
	        this.el.style['margin-top'] = marginSize;
	        this.el.style['marginLeft'] = marginSize;
	        this.el.style['marginTop'] = marginSize;
	      }
	    }

	    /*
	      Method to draw shape.
	      @private
	    */
	  }, {
	    key: '_draw',
	    value: function _draw() {
	      var p = this._props,
	          bP = this.bit._props;
	      // set props on bit
	      bP.x = this._origin.x;
	      bP.y = this._origin.y;
	      bP.rx = p.rx;
	      bP.ry = p.ry;
	      bP.stroke = p.stroke;
	      bP['stroke-width'] = p.strokeWidth;
	      bP['stroke-opacity'] = p.strokeOpacity;
	      bP['stroke-dasharray'] = p.strokeDasharray;
	      bP['stroke-dashoffset'] = p.strokeDashoffset;
	      bP['stroke-linecap'] = p.strokeLinecap;
	      bP.fill = p.fill;
	      bP['fill-opacity'] = p.fillOpacity;
	      bP.radius = p.radius;
	      bP.radiusX = p.radiusX;
	      bP.radiusY = p.radiusY;
	      bP.points = p.points;

	      this.bit.draw();this._drawEl();
	    }

	    /*
	      Method to set current modules props to main div el.
	      @private
	    */
	  }, {
	    key: '_drawEl',
	    value: function _drawEl() {
	      if (this.el == null) {
	        return true;
	      }
	      var p = this._props;
	      this._isPropChanged('opacity') && (this.el.style.opacity = p.opacity);
	      if (!this.isForeign) {
	        this._isPropChanged('left') && (this.el.style.left = p.left);
	        this._isPropChanged('top') && (this.el.style.top = p.top);
	        var isTranslate = this._isPropChanged('x') || this._isPropChanged('y'),
	            isScaleRotate = this._isPropChanged('scale') || this._isPropChanged('angle');
	        if (isTranslate || isScaleRotate) {
	          var transform = this._fillTransform(),
	              style = this.el.style;
	          style["#{h.prefix.css}#{'transform'}"] = transform;
	          style['transform'] = transform;
	          // h.setPrefixedStyle(this.el, 'transform', this._fillTransform());
	        }
	      }
	    }

	    /*
	      Method to check if property changed after the latest check.
	      @private
	      @param {String} Name of the property to check.
	      @returns {Boolean}
	    */
	  }, {
	    key: '_isPropChanged',
	    value: function _isPropChanged(name) {
	      // if there is no recod for the property - create it
	      if (this._lastSet[name] == null) {
	        this._lastSet[name] = {};
	      }
	      if (this._lastSet[name].value !== this._props[name]) {
	        this._lastSet[name].value = this._props[name];
	        return true;
	      } else {
	        return false;
	      }
	    }

	    /*
	      Method to create shape's transform string.
	      @private
	      @returns {String} Transform string for the shape.
	    */
	  }, {
	    key: '_calcShapeTransform',
	    value: function _calcShapeTransform() {
	      return 'rotate(' + this._props.angle + ', ' + this._origin.x + ', ' + this._origin.y + ')';
	    }

	    /*
	      Method to tune new option on run.
	      @private
	      @override @ Module
	      @param {Object}  Option to tune on run.
	    */
	  }, {
	    key: '_tuneNewOptions',
	    value: function _tuneNewOptions(o) {
	      // call super on Module
	      _get(Object.getPrototypeOf(Transit.prototype), '_tuneNewOptions', this).call(this, o);
	      // return if empty object
	      if (!(o != null && Object.keys(o).length)) {
	        return 1;
	      }

	      this._calcSize();
	      this._setElStyles();
	    }

	    /*
	      Method to calculate maximum shape's radius.
	      @private
	      @returns {Number} Maximum raduis.
	    */
	  }, {
	    key: '_calcMaxShapeRadius',
	    value: function _calcMaxShapeRadius() {
	      var selfSize, selfSizeX, selfSizeY;
	      selfSize = this._getRadiusSize({ key: 'radius' });
	      selfSizeX = this._getRadiusSize({ key: 'radiusX', fallback: selfSize });
	      selfSizeY = this._getRadiusSize({ key: 'radiusY', fallback: selfSize });
	      return Math.max(selfSizeX, selfSizeY);
	    }

	    /*
	      Method to calculate maximum size of the svg canvas.
	      @private
	    */
	  }, {
	    key: '_calcSize',
	    value: function _calcSize() {
	      if (this._o.size) {
	        return;
	      }
	      var p = this._props,
	          radius = this._calcMaxShapeRadius(),
	          dStroke = this._deltas['strokeWidth'],
	          stroke = dStroke != null ? Math.max(Math.abs(dStroke.start), Math.abs(dStroke.end)) : this._props.strokeWidth;
	      p.size = 2 * radius + 2 * stroke;
	      this._increaseSizeWithEasing();
	      this._increaseSizeWithBitRatio();
	      return p.center = p.size / 2;
	    }

	    /*
	      Method to increase calculated size based on easing.
	      @private
	    */
	  }, {
	    key: '_increaseSizeWithEasing',
	    value: function _increaseSizeWithEasing() {
	      var p = this._props,
	          easing = this._o.easing,
	          isStringEasing = easing && typeof easing === 'string';
	      switch (isStringEasing && easing.toLowerCase()) {
	        case 'elastic.out':
	        case 'elastic.inout':
	          p.size *= 1.25;
	          break;
	        case 'back.out':
	        case 'back.inout':
	          p.size *= 1.1;
	      }
	    }

	    /*
	      Method to increase calculated size based on bit ratio.
	      @private
	    */
	  }, {
	    key: '_increaseSizeWithBitRatio',
	    value: function _increaseSizeWithBitRatio() {
	      var p = this._props;
	      p.size *= this.bit._props.ratio;
	      p.size += 2 * p.sizeGap;
	    }

	    /*
	      Method to get maximum radius size with optional fallback.
	      @private
	      @param {Object}
	        @param key {String} Name of the radius - [radius|radiusX|radiusY].
	        @param @optional fallback {Number}  Optional number to set if there
	                                            is no value for the key.
	    */
	  }, {
	    key: '_getRadiusSize',
	    value: function _getRadiusSize(o) {
	      var delta = this._deltas[o.key];
	      // if value is delta value
	      if (delta != null) {
	        // get maximum number between start and end values of the delta
	        return Math.max(Math.abs(delta.end), Math.abs(delta.start));
	      } else if (this._props[o.key] != null) {
	        // else get the value from props object
	        return parseFloat(this._props[o.key]);
	      } else {
	        return o.fallback || 0;
	      }
	    }

	    /*
	      Method to find the shape and initialize it.
	      @private
	    */
	  }, {
	    key: '_createBit',
	    value: function _createBit() {
	      var bitClass = shapesMap.getShape(this._props.shape);
	      this.bit = new bitClass({ ctx: this.ctx, el: this._o.bit, isDrawLess: true });
	      // if draw on foreign context
	      // or we are animating an svg element outside the module
	      if (this.isForeign || this.isForeignBit) {
	        return this.el = this.bit.el;
	      }
	    }

	    /*
	      Method to draw current progress of the deltas.
	      @private
	      @override @ Module
	      @param   {Number}  Progress to set - [0..1].
	    */
	  }, {
	    key: '_setProgress',
	    value: function _setProgress(progress) {
	      // call the super on Module
	      // this._super_setProgress(progress);
	      _module3['default'].prototype._setProgress.call(this, progress);
	      // super._setProgress( progress );
	      this._calcOrigin();
	      this._draw(progress);
	    }

	    /*
	      Method to calculate transform origin for the element.
	      @private
	    */
	  }, {
	    key: '_calcOrigin',
	    value: function _calcOrigin() {
	      var p = this._props;
	      // if drawing context was passed
	      // set origin to x and y of the module
	      // otherwise set the origin to the center
	      this._origin.x = this._o.ctx ? parseFloat(p.x) : p.center;
	      this._origin.y = this._o.ctx ? parseFloat(p.y) : p.center;
	    }

	    /*
	      Method to add callback overrides to passed object.
	      @private
	      @param {Object} Object to add the overrides to.
	    */
	  }, {
	    key: '_applyCallbackOverrides',
	    value: function _applyCallbackOverrides(obj) {
	      var it = this,
	          p = this._props;
	      // specify control functions for the module
	      obj.callbackOverrides = {
	        onUpdate: function onUpdate(pe) {
	          return it._setProgress(pe);
	        },
	        onStart: function onStart(isFwd) {
	          if (isFwd) {
	            it._show();
	            // hide previous module in then chain
	            it._hidePrevChainModule();
	            // hide all modules in the chain (for chain parent only)
	            it._hideModuleChain();
	          } else {
	            !p.isShowStart && it._hide();
	            // show previous module in then chain
	            it._showPrevChainModule();
	          }
	        },
	        onComplete: function onComplete(isFwd) {
	          return isFwd ? !p.isShowEnd && it._hide() : it._show();
	        }
	      };
	    }

	    /*
	      Method to setup tween and timeline options before creating them.
	      @override @ Tweenable
	      @private  
	    */
	  }, {
	    key: '_transformTweenOptions',
	    value: function _transformTweenOptions() {
	      this._applyCallbackOverrides(this._o);
	    }

	    /*
	      Method to create transform string;
	      @private
	      @returns {String} Transform string.
	    */
	  }, {
	    key: '_fillTransform',
	    value: function _fillTransform() {
	      var p = this._props;
	      return 'scale(' + p.scale + ') translate(' + p.x + ', ' + p.y + ') rotate(' + p.angle + 'deg)';
	    }

	    /*
	      Method to hide previousChainModule.
	      @private
	    */
	  }, {
	    key: '_hidePrevChainModule',
	    value: function _hidePrevChainModule() {
	      var p = this._props;
	      p.prevChainModule && p.prevChainModule._hide();
	    }

	    /*
	      Method to show previousChainModule.
	      @private
	    */
	  }, {
	    key: '_showPrevChainModule',
	    value: function _showPrevChainModule() {
	      var p = this._props;
	      p.prevChainModule && p.prevChainModule._show();
	    }

	    /*
	      Method to hide all modules in then chain.
	      @private
	    */
	  }, {
	    key: '_hideModuleChain',
	    value: function _hideModuleChain() {
	      for (var i = 1; i < this._modules.length; i++) {
	        this._modules[i]._hide();
	      }
	    }
	  }]);

	  return Transit;
	})(_tunable2['default']);

	exports['default'] = Transit;
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _tweenTweenable = __webpack_require__(96);

	var _tweenTweenable2 = _interopRequireDefault(_tweenTweenable);

	var _h = __webpack_require__(82);

	/*
	  The Thenable class adds .then public method and
	  the ability to chain API calls.
	*/

	var _h2 = _interopRequireDefault(_h);

	var Thenable = (function (_Tweenable) {
	  _inherits(Thenable, _Tweenable);

	  function Thenable() {
	    _classCallCheck(this, Thenable);

	    _get(Object.getPrototypeOf(Thenable.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Thenable, [{
	    key: 'then',

	    /*
	      Method to create a then record for the module.
	      @public
	      @param    {Object} Options for the next animation.
	      @returns  {Object} this.
	    */
	    value: function then(o) {
	      // return if nothing was passed
	      if (o == null || !Object.keys(o)) {
	        return 1;
	      }
	      // merge then options with the current ones
	      var prevRecord = this._history[this._history.length - 1],
	          prevModule = this._modules[this._modules.length - 1],
	          merged = this._mergeThenOptions(prevRecord, o);

	      this._resetMergedFlags(merged);
	      // reset isShowEnd flag on prev module
	      // prevModule._setProp && prevModule._setProp('isShowEnd', false);
	      // create a submodule of the same type as the master module
	      var module = new this.constructor(merged);
	      // save the modules to the _modules array
	      this._modules.push(module);
	      // add module's tween into master timeline
	      this.timeline.append(module);
	      return this;
	    }

	    // ^ PUBLIC  METHOD(S) ^
	    // v PRIVATE METHOD(S) v

	    /*
	      Method to reset some flags on merged options object.
	      @private
	      @param   {Object} Options object.
	      @returns {Object} Options object.
	    */
	  }, {
	    key: '_resetMergedFlags',
	    value: function _resetMergedFlags(obj) {
	      // set the submodule to be without timeline for perf reasons
	      obj.isTimelineLess = true;
	      // reset isShowStart flag for the submodules
	      obj.isShowStart = false;
	      // set the submodule callbacks context
	      obj.callbacksContext = this._props.callbacksContext;
	      // set previous module
	      obj.prevChainModule = _h2['default'].getLastItem(this._modules);
	      return obj;
	    }

	    /*
	      Method to initialize properties.
	      @private
	    */
	  }, {
	    key: '_vars',
	    value: function _vars() {
	      _get(Object.getPrototypeOf(Thenable.prototype), '_vars', this).call(this);
	      // we are expect that the _o object
	      // have been already extended by defaults
	      var initialRecord = _h2['default'].cloneObj(this._props);
	      for (var key in this._arrayPropertyMap) {
	        if (this._o[key]) {
	          var preParsed = this._parsePreArrayProperty(key, this._o[key]);
	          initialRecord[key] = preParsed;
	        }
	      }

	      this._history = [initialRecord];
	      // the array holds all modules in the then chain
	      this._modules = [this];
	      // the props that to exclude from then merge
	      this._nonMergeProps = { shape: 1 };
	    }

	    /*
	      Method to merge two options into one. Used in .then chains.
	      @private
	      @param {Object} Start options for the merge.
	      @param {Object} End options for the merge.
	      @returns {Object} Merged options.
	    */
	  }, {
	    key: '_mergeThenOptions',
	    value: function _mergeThenOptions(start, end) {
	      var o = {};
	      this._mergeStartLoop(o, start);
	      this._mergeEndLoop(o, start, end);
	      this._history.push(o);
	      return o;
	    }

	    /*
	      Originally part of the _mergeThenOptions.
	      Loops thru start object and copies all the props from it.
	      @param {Object} An object to copy in.
	      @parma {Object} Start options object.
	    */
	  }, {
	    key: '_mergeStartLoop',
	    value: function _mergeStartLoop(o, start) {
	      // loop thru start options object
	      for (var key in start) {
	        var value = start[key];
	        if (start[key] == null) {
	          continue;
	        };
	        // copy all values from start if not tween prop or duration
	        if (!_h2['default'].isTweenProp(key) || key === 'duration') {
	          // if delta - copy only the end value
	          if (this._isDelta(value)) {
	            o[key] = _h2['default'].getDeltaEnd(value);
	          } else {
	            o[key] = value;
	          }
	        }
	      }
	    }

	    /*
	      Originally part of the _mergeThenOptions.
	      Loops thru start object and merges all the props from it.
	      @param {Object} An object to copy in.
	      @parma {Object} Start options object.
	      @parma {Object} End options object.
	    */
	  }, {
	    key: '_mergeEndLoop',
	    value: function _mergeEndLoop(o, start, end) {
	      var endKeys = Object.keys(end);

	      for (var key in end) {
	        // just copy parent option
	        if (key == 'parent') {
	          o[key] = end[key];continue;
	        };

	        // get key/value of the end object
	        // endKey - name of the property, endValue - value of the property
	        var endValue = end[key],
	            startValue = start[key] != null ? start[key] : this._defaults[key];

	        if (endValue == null) {
	          continue;
	        };
	        // make ∆ of start -> end
	        // if key name is radiusX/radiusY and
	        // the startValue is not set fallback to radius value
	        var isSubRadius = key === 'radiusX' || key === 'radiusY';
	        if (isSubRadius && startValue == null) {
	          startValue = start.radius;
	        }

	        o[key] = this._mergeThenProperty(key, startValue, endValue);
	        // // if one of the properties is array - merge
	        // // with array, - else merge two plain properties
	        // if ( h.isArray( startValue ) || h.isArray( endValue ) ) {
	        //   o[key] = this._mergeThenArrays( key, startValue, endValue );
	        // } else {
	        //   o[key] = this._mergeThenProperty( key, startValue, endValue );
	        // }
	      }
	    }

	    // /*
	    //   Method to merge two arrays for then chain.
	    //   @private
	    //   @param {String} Property name.
	    //   @param {Array} Start array.
	    //   @param {Array} End array.
	    //   @returns the merged array.
	    // */
	    // _mergeThenArrays( key, arr1, arr2 ) {
	    //   var arr = [],
	    //       // get maximum length for 2 arrays
	    //       max = Math.max(
	    //         this._getArrayLength(arr1),
	    //         this._getArrayLength(arr2)
	    //       );
	    //   // loop thru the max length of the 2 arrays
	    //   for (var i = 0; i < max; i++ ) {
	    //     // if property is array - get the current property
	    //     // in it ( by mod ) else take the property itself
	    //     var startVal = ( h.isArray( arr1 ) ? arr1[i % arr1.length] : arr1 ),
	    //         endVal   = ( h.isArray( arr2 ) ? arr2[i % arr2.length] : arr2 );
	    //     arr.push( this._mergeThenProperty( key, startVal, endVal ) );
	    //   }
	    //   return arr;
	    // }
	    /*
	      Method to merge `start` and `end` for a property in then record.
	      @private
	      @param {String} Property name.
	      @param {Any}    Start value of the property.
	      @param {Any}    End value of the property.
	    */
	  }, {
	    key: '_mergeThenProperty',
	    value: function _mergeThenProperty(key, startValue, endValue) {
	      // if isnt tween property
	      var isBoolean = typeof endValue === 'boolean';
	      if (!_h2['default'].isTweenProp(key) && !this._nonMergeProps[key] && !isBoolean) {
	        // if end value is delta - just save it
	        if (this._isDelta(endValue)) {
	          return this._parseDeltaValues(key, endValue);
	        } else {
	          var parsedEndValue = this._parsePreArrayProperty(key, endValue);
	          // if end value is not delta - merge with start value
	          if (this._isDelta(startValue)) {
	            // if start value is delta - take the end value
	            // as start value of the new delta
	            return _defineProperty({}, _h2['default'].getDeltaEnd(startValue), parsedEndValue);
	            // if both start and end value are not ∆ - make ∆
	          } else {
	              return _defineProperty({}, startValue, parsedEndValue);
	            }
	        }
	        // copy the tween values unattended
	      } else {
	          return endValue;
	        }
	    }

	    /*
	      Method to retreive array's length and return -1 for
	      all other types.
	      @private
	      @param {Array, Any} Array to get the width for.
	      @returns {Number} Array length or -1 if not array.
	    */
	  }, {
	    key: '_getArrayLength',
	    value: function _getArrayLength(arr) {
	      return _h2['default'].isArray(arr) ? arr.length : -1;
	    }

	    /*
	      Method to check if the property is delta property.
	      @private
	      @param {Any} Parameter value to check.
	      @returns {Boolean}
	    */
	  }, {
	    key: '_isDelta',
	    value: function _isDelta(optionsValue) {
	      var isObject = _h2['default'].isObject(optionsValue);
	      isObject = isObject && !optionsValue.unit;
	      return !(!isObject || _h2['default'].isArray(optionsValue) || _h2['default'].isDOM(optionsValue));
	    }
	  }]);

	  return Thenable;
	})(_tweenTweenable2['default']);

	exports['default'] = Thenable;
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _tween = __webpack_require__(97);

	var _tween2 = _interopRequireDefault(_tween);

	var _timeline = __webpack_require__(105);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _module2 = __webpack_require__(85);

	/*
	  Class to define a module ancestor
	  with timeline and tween options and functionality.
	  All runable modules should inherit from this class.

	  @class Tweenable
	*/

	var _module3 = _interopRequireDefault(_module2);

	var Tweenable = (function (_Module) {
	  _inherits(Tweenable, _Module);

	  _createClass(Tweenable, [{
	    key: 'play',

	    /*
	      play method for the timeline.
	      @public
	      @param {Number} Time shift.
	      @returns this.
	    */
	    value: function play() {
	      this.timeline.play.apply(this.timeline, arguments);
	      return this;
	    }

	    /*
	      playBackward method for the timeline.
	      @public
	      @param {Number} Time shift.
	      @returns this.
	    */
	  }, {
	    key: 'playBackward',
	    value: function playBackward() {
	      this.timeline.playBackward.apply(this.timeline, arguments);
	      return this;
	    }

	    /*
	      pause method for the timeline.
	      @public
	      @returns this.
	    */
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this.timeline.pause.apply(this.timeline, arguments);
	      return this;
	    }

	    /*
	      stop method for the timeline.
	      @public
	      @param {Number} [0...1] Progress to set on stop.
	                              *Default* is `0` if `play`
	                              and `1` if `playBAckward`.
	      @returns this.
	    */
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this.timeline.stop.apply(this.timeline, arguments);
	      return this;
	    }

	    /*
	      replay method for the timeline.
	      @public
	      @returns this.
	    */
	  }, {
	    key: 'replay',
	    value: function replay() {
	      this.timeline.replay.apply(this.timeline, arguments);
	      return this;
	    }

	    /*
	      replay method for the timeline.
	      @public
	      @returns this.
	    */
	  }, {
	    key: 'replayBackward',
	    value: function replayBackward() {
	      this.timeline.replayBackward.apply(this.timeline, arguments);
	      return this;
	    }

	    /*
	      setProgress method for the timeline.
	      @public
	      @param {Number} [0...1] Progress value.
	      @returns this.
	    */
	  }, {
	    key: 'setProgress',
	    value: function setProgress() {
	      this.timeline.setProgress.apply(this.timeline, arguments);
	      return this;
	    }

	    /*
	      setSpeed method for the timeline.
	      @param {Number} Speed value.
	      @returns this.
	    */
	  }, {
	    key: 'setSpeed',
	    value: function setSpeed(speed) {
	      this.timeline.setSpeed.apply(this.timeline, arguments);
	      return this;
	    }

	    // ^ PUBLIC  METHOD(S) ^
	    // v PRIVATE METHOD(S) v

	  }]);

	  function Tweenable() {
	    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Tweenable);

	    // super of Module
	    _get(Object.getPrototypeOf(Tweenable.prototype), 'constructor', this).call(this, o);
	    // pipe function for _o object
	    // before creating tween/timeline
	    this._transformTweenOptions();
	    // make tween only if isTweenLess option is not set
	    !this._o.isTweenLess && this._makeTween();
	    // make timeline only if isTimelineLess option is not set
	    !this._o.isTimelineLess && this._makeTimeline();
	  }

	  /*
	    Placeholder method that should be overrided
	    and will be called before tween/timeline creation.
	    @private
	  */

	  _createClass(Tweenable, [{
	    key: '_transformTweenOptions',
	    value: function _transformTweenOptions() {}

	    /*
	      Method to create tween.
	      @private
	    */
	  }, {
	    key: '_makeTween',
	    value: function _makeTween() {
	      // pass callbacks context
	      this._o.callbacksContext = this._o.callbacksContext || this;
	      this.tween = new _tween2['default'](this._o);
	      // make timeline property point to tween one is "no timeline" mode
	      this._o.isTimelineLess && (this.timeline = this.tween);
	    }

	    /*
	      Method to create timeline.
	      @private
	      @param {Object} Timeline's options.
	                      An object which contains "timeline" property with
	                      timeline options.
	    */
	  }, {
	    key: '_makeTimeline',
	    value: function _makeTimeline() {
	      // pass callbacks context
	      this._o.timeline = this._o.timeline || {};
	      this._o.timeline.callbacksContext = this._o.callbacksContext || this;
	      this.timeline = new _timeline2['default'](this._o.timeline);
	      // if tween exist - add it to the timeline there is some
	      // modules like burst and stagger that have no tween
	      this.tween && this.timeline.add(this.tween);
	    }
	  }]);

	  return Tweenable;
	})(_module3['default']);

	exports['default'] = Tweenable;
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// import h from '../h';
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x8, _x9, _x10) { var _again = true; _function: while (_again) { var object = _x8, property = _x9, receiver = _x10; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x8 = parent; _x9 = property; _x10 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _h = __webpack_require__(82);

	var _h2 = _interopRequireDefault(_h);

	var _tweener = __webpack_require__(98);

	var _tweener2 = _interopRequireDefault(_tweener);

	var _easingEasing = __webpack_require__(101);

	var _easingEasing2 = _interopRequireDefault(_easingEasing);

	var _module2 = __webpack_require__(85);

	var _module3 = _interopRequireDefault(_module2);

	var Tween = (function (_Module) {
	  _inherits(Tween, _Module);

	  _createClass(Tween, [{
	    key: '_declareDefaults',

	    /*
	      Method do declare defaults with this._defaults object.
	      @private
	    */
	    value: function _declareDefaults() {
	      // DEFAULTS
	      this._defaults = {
	        /* duration of the tween [0..∞] */
	        duration: 350,
	        /* delay of the tween [-∞..∞] */
	        delay: 0,
	        /* repeat of the tween [0..∞], means how much to
	           repeat the tween regardless first run,
	           for instance repeat: 2 will make the tween run 3 times */
	        repeat: 0,
	        /* speed of playback [0..∞], speed that is less then 1
	           will slowdown playback, for instance .5 will make tween
	           run 2x slower. Speed of 2 will speedup the tween to 2x. */
	        speed: 1,
	        /*  flip onUpdate's progress on each even period.
	            note that callbacks order won't flip at least
	            for now (under consideration). */
	        yoyo: false,
	        /* easing for the tween, could be any easing type [link to easing-types.md] */
	        easing: 'Ease.Out',
	        /* custom tween's name */
	        name: null,
	        /* custom tween's base name */
	        nameBase: 'Tween',
	        /*
	          onProgress callback runs before any other callback.
	          @param {Number}   The entire, not eased, progress
	                            of the tween regarding repeat option.
	          @param {Boolean}  The direction of the tween.
	                            `true` for forward direction.
	                            `false` for backward direction(tween runs in reverse).
	        */
	        onProgress: null,
	        /*
	          onStart callback runs on very start of the tween just after onProgress
	          one. Runs on very end of the tween if tween is reversed.
	          @param {Boolean}  Direction of the tween.
	                            `true` for forward direction.
	                            `false` for backward direction(tween runs in reverse).
	        */
	        onStart: null,
	        onComplete: null,
	        onRepeatStart: null,
	        onRepeatComplete: null,
	        onFirstUpdate: null,
	        onUpdate: null,
	        isChained: false,
	        // playback callbacks
	        onPlaybackStart: null,
	        onPlaybackPause: null,
	        onPlaybackStop: null,
	        onPlaybackComplete: null,
	        // context which all callbacks will be called with
	        callbacksContext: null
	      };
	    }

	    /*
	      API method to run the Tween.
	      @public
	      @param  {Number} Shift time in milliseconds.
	      @return {Object} Self.
	    */
	  }, {
	    key: 'play',
	    value: function play() {
	      var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	      if (this._state === 'play' && this._isRunning) {
	        return this;
	      }
	      this._props.isReversed = false;
	      this._subPlay(shift, 'play');
	      this._setPlaybackState('play');
	      return this;
	    }

	    /*
	      API method to run the Tween in reverse.
	      @public
	      @param  {Number} Shift time in milliseconds.
	      @return {Object} Self.
	    */
	  }, {
	    key: 'playBackward',
	    value: function playBackward() {
	      var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	      if (this._state === 'reverse' && this._isRunning) {
	        return this;
	      }
	      this._props.isReversed = true;
	      this._subPlay(shift, 'reverse');
	      this._setPlaybackState('reverse');
	      return this;
	    }

	    /*
	      API method to pause Tween.
	      @public
	      @returns {Object} Self.
	    */
	  }, {
	    key: 'pause',
	    value: function pause() {
	      if (this._state === 'pause' || this._state === 'stop') {
	        return this;
	      }
	      this._removeFromTweener();
	      this._setPlaybackState('pause');
	      return this;
	    }

	    /*
	      API method to stop the Tween.
	      @public
	      @param   {Number} Progress [0..1] to set when stopped.
	      @returns {Object} Self.
	    */
	  }, {
	    key: 'stop',
	    value: function stop(progress) {
	      if (this._state === 'stop') {
	        return this;
	      }
	      this._props.isReversed = false;
	      this._removeFromTweener();
	      // if progress passed - use it
	      var stopProc = progress != null ? progress
	      /* if no progress passsed - set 1 if tween
	         is playingBackward, otherwise set to 0 */
	      : this._state === 'reverse' ? 1 : 0;

	      this.setProgress(stopProc);
	      this._setPlaybackState('stop');
	      this._prevTime = null;
	      return this;
	    }

	    /*
	      API method to replay(restart) the Tween.
	      @public
	      @param   {Number} Shift time in milliseconds.
	      @returns {Object} Self.
	    */
	  }, {
	    key: 'replay',
	    value: function replay() {
	      var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	      this.stop();
	      this.play(shift);
	      return this;
	    }

	    /*
	      API method to replay(restart) backward the Tween.
	      @public
	      @param   {Number} Shift time in milliseconds.
	      @returns {Object} Self.
	    */
	  }, {
	    key: 'replayBackward',
	    value: function replayBackward() {
	      var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	      this.stop();
	      this.playBackward(shift);
	      return this;
	    }

	    /*
	      API method to set progress on tween.
	      @public
	      @param {Number} Progress to set.
	      @returns {Object} Self.
	    */
	  }, {
	    key: 'setProgress',
	    value: function setProgress(progress) {
	      var p = this._props;
	      // set start time if there is no one yet.
	      !p.startTime && this._setStartTime();
	      // reset play time
	      this._playTime = null;
	      // progress should be in range of [0..1]
	      progress < 0 && (progress = 0);
	      progress > 1 && (progress = 1);
	      // update self with calculated time
	      this._update(p.startTime - p.delay + progress * p.repeatTime);
	      return this;
	    }

	    /*
	      Method to set tween's speed.
	      @public
	      @param {Number} Speed value.
	      @returns this.
	    */
	  }, {
	    key: 'setSpeed',
	    value: function setSpeed(speed) {
	      this._props.speed = speed;
	      // if playing - normalize _startTime and _prevTime to the current point.
	      if (this._state === 'play' || this._state === 'reverse') {
	        this._setResumeTime(this._state);
	      }
	      return this;
	    }

	    // ^ PUBLIC  METHOD(S) ^
	    // v PRIVATE METHOD(S) v

	    /*
	      Method to launch play. Used as launch
	      method for bothplay and reverse methods.
	      @private
	      @param  {Number} Shift time in milliseconds.
	      @param  {String} Play or reverse state.
	      @return {Object} Self.
	    */
	  }, {
	    key: '_subPlay',
	    value: function _subPlay(shift, state) {
	      if (shift === undefined) shift = 0;

	      var resumeTime,
	          startTime,
	          p = this._props,

	      // check if direction of playback changes,
	      // if so, the _progressTime needs to be flipped
	      _state = this._state,
	          _prevState = this._prevState,
	          isPause = _state === 'pause',
	          wasPlay = _state === 'play' || isPause && _prevState === 'play',
	          wasReverse = _state === 'reverse' || isPause && _prevState === 'reverse',
	          isFlip = wasPlay && state === 'reverse' || wasReverse && state === 'play';

	      // if tween was ended, set progress to 0 if not, set to elapsed progress
	      this._progressTime = this._progressTime >= p.repeatTime ? 0 : this._progressTime;
	      // flip the _progressTime if playback direction changed
	      if (isFlip) {
	        this._progressTime = p.repeatTime - this._progressTime;
	      }
	      // set resume time and normalize prev/start times
	      this._setResumeTime(state, shift);
	      // add self to tweener = play
	      _tweener2['default'].add(this);
	      return this;
	    }

	    /*
	      Method to set _resumeTime, _startTime and _prevTime.
	      @private
	      @param {String} Current state. [play, reverse]
	      @param {Number} Time shift. *Default* is 0.
	    */
	  }, {
	    key: '_setResumeTime',
	    value: function _setResumeTime(state) {
	      var shift = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	      // get current moment as resume time
	      this._resumeTime = performance.now();
	      // set start time regarding passed `shift` and `procTime`
	      var startTime = this._resumeTime - Math.abs(shift) - this._progressTime;
	      this._setStartTime(startTime, false);
	      // if we have prevTime - we need to normalize
	      // it for the current resume time
	      if (this._prevTime != null) {
	        this._prevTime = state === 'play' ? this._normPrevTimeForward() : this._props.endTime - this._progressTime;
	      }
	    }

	    /*
	      Method recalculate _prevTime for forward direction.
	      @private
	      @return {Number} Normalized prev time.
	    */
	  }, {
	    key: '_normPrevTimeForward',
	    value: function _normPrevTimeForward() {
	      var p = this._props;
	      return p.startTime + this._progressTime - p.delay;
	    }

	    /*
	      Constructor of the class.
	      @private
	    */
	  }]);

	  function Tween() {
	    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Tween);

	    _get(Object.getPrototypeOf(Tween.prototype), 'constructor', this).call(this, o);
	    this._props.name == null && this._setSelfName();
	    return this;
	  }

	  /*
	    Method to set self name to generic one.
	    @private
	  */

	  _createClass(Tween, [{
	    key: '_setSelfName',
	    value: function _setSelfName() {
	      var globalName = '_' + this._props.nameBase + 's';
	      // track amount of tweens globally
	      _tweener2['default'][globalName] = _tweener2['default'][globalName] == null ? 1 : ++_tweener2['default'][globalName];
	      // and set generic tween's name  || Tween # ||
	      this._props.name = this._props.nameBase + ' ' + _tweener2['default'][globalName];
	    }

	    /*
	      Method set playback state string.
	      @private
	      @param {String} State name
	    */
	  }, {
	    key: '_setPlaybackState',
	    value: function _setPlaybackState(state) {
	      // save previous state
	      this._prevState = this._state;
	      this._state = state;

	      // callbacks
	      var wasPause = this._prevState === 'pause',
	          wasStop = this._prevState === 'stop',
	          wasPlay = this._prevState === 'play',
	          wasReverse = this._prevState === 'reverse',
	          wasPlaying = wasPlay || wasReverse,
	          wasStill = wasStop || wasPause;

	      if ((state === 'play' || state === 'reverse') && wasStill) {
	        this._playbackStart();
	      }
	      if (state === 'pause' && wasPlaying) {
	        this._playbackPause();
	      }
	      if (state === 'stop' && (wasPlaying || wasPause)) {
	        this._playbackStop();
	      }
	    }

	    /*
	      Method to declare some vars.
	      @private
	    */
	  }, {
	    key: '_vars',
	    value: function _vars() {
	      // call _vars @ Module
	      // super._vars();
	      this.progress = 0;
	      this._prevTime = null;
	      this._progressTime = 0;
	      this._negativeShift = 0;
	      this._state = 'stop';
	      // if negative delay was specified,
	      // save it to _negativeShift property and
	      // reset it back to 0
	      if (this._props.delay < 0) {
	        this._negativeShift = this._props.delay;
	        this._props.delay = 0;
	      }

	      return this._calcDimentions();
	    }

	    /*
	      Method to calculate tween's dimentions.
	      @private
	    */
	  }, {
	    key: '_calcDimentions',
	    value: function _calcDimentions() {
	      this._props.time = this._props.duration + this._props.delay;
	      this._props.repeatTime = this._props.time * (this._props.repeat + 1);
	    }

	    /*
	      Method to extend defaults by options and put them in _props.
	      @private
	    */
	  }, {
	    key: '_extendDefaults',
	    value: function _extendDefaults() {
	      // save callback overrides object with fallback to empty one
	      this._callbackOverrides = this._o.callbackOverrides || {};
	      delete this._o.callbackOverrides;
	      // call the _extendDefaults @ Module
	      _get(Object.getPrototypeOf(Tween.prototype), '_extendDefaults', this).call(this);
	      this._props.easing = _easingEasing2['default'].parseEasing(this._props.easing);
	    }

	    /*
	      Method for setting start and end time to props.
	      @private
	      @param {Number(Timestamp)}, {Null} Start time.
	      @param {Boolean} Should reset flags.
	      @returns this
	    */
	  }, {
	    key: '_setStartTime',
	    value: function _setStartTime(time) {
	      var isResetFlags = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	      var p = this._props,
	          shiftTime = p.shiftTime || 0;
	      // reset flags
	      if (isResetFlags) {
	        this._isCompleted = false;this._isRepeatCompleted = false;
	        this._isStarted = false;
	      }
	      // set start time to passed time or to the current moment
	      var startTime = time == null ? performance.now() : time;
	      // calculate bounds
	      // - negativeShift is negative delay in options hash
	      // - shift time is shift of the parent
	      p.startTime = startTime + p.delay + this._negativeShift + shiftTime;
	      p.endTime = p.startTime + p.repeatTime - p.delay;
	      // set play time to the startTime
	      // if playback controls are used - use _resumeTime as play time,
	      // else use shifted startTime -- shift is needed for timelines append chains
	      this._playTime = this._resumeTime != null ? this._resumeTime : startTime + shiftTime;
	      this._resumeTime = null;

	      return this;
	    }

	    /*
	      Method to update tween's progress.
	      @private
	      @param {Number} Current update time.
	      -- next params only present when parent Timeline calls the method.
	      @param {Number} Previous Timeline's update time.
	      @param {Boolean} Was parent in yoyo period.
	      @param {Number} [-1, 0, 1] If update is on edge.
	                     -1 = edge jump in negative direction.
	                      0 = no edge jump.
	                      1 = edge jump in positive direction.
	    */
	  }, {
	    key: '_update',
	    value: function _update(time, timelinePrevTime, wasYoyo, onEdge) {
	      var p = this._props;
	      // if we don't the _prevTime thus the direction we are heading to,
	      // but prevTime was passed thus we are child of a Timeline
	      // set _prevTime to passed one and pretent that there was unknown
	      // update to not to block start/complete callbacks
	      if (this._prevTime == null && timelinePrevTime != null) {
	        this._prevTime = timelinePrevTime;
	        this._wasUknownUpdate = true;
	      }

	      // cache vars
	      var startPoint = p.startTime - p.delay;
	      // if speed param was defined - calculate
	      // new time regarding speed
	      if (p.speed && this._playTime) {
	        // play point + ( speed * delta )
	        time = this._playTime + p.speed * (time - this._playTime);
	      }

	      // if parent is onEdge but not very start nor very end
	      if (onEdge && wasYoyo != null) {
	        var T = this._getPeriod(time),
	            isYoyo = !!(p.yoyo && this._props.repeat && T % 2 === 1);

	        // forward edge direction
	        if (onEdge === 1) {
	          // jumped from yoyo period?
	          if (wasYoyo) {
	            this._prevTime = time + 1;
	            this._repeatStart(time, isYoyo);
	            this._start(time, isYoyo);
	          } else {
	            this._prevTime = time - 1;
	            this._repeatComplete(time, isYoyo);
	            this._complete(time, isYoyo);
	          }
	          // backward edge direction
	        } else if (onEdge === -1) {
	            // jumped from yoyo period?
	            if (wasYoyo) {
	              this._prevTime = time - 1;
	              this._repeatComplete(time, isYoyo);
	              this._complete(time, isYoyo);
	            } else {
	              // call _start callbacks only if prev time was in active area
	              // not always true for append chains
	              if (this._prevTime >= p.startTime && this._prevTime <= p.endTime) {
	                this._prevTime = time + 1;
	                this._repeatStart(time, isYoyo);
	                this._start(time, isYoyo);
	                // reset isCOmpleted immediately to prevent onComplete cb
	                this._isCompleted = true;
	              }
	            }
	          }
	        // reset the _prevTime - drop one frame to undestand
	        // where we are heading
	        this._prevTime = null;
	      }
	      // if in active area and not ended - save progress time
	      // for pause/play purposes.
	      if (time > startPoint && time < p.endTime) {
	        this._progressTime = time - startPoint;
	      }
	      // else if not started or ended set progress time to 0
	      else if (time <= startPoint) {
	          this._progressTime = 0;
	        } else if (time >= p.endTime) {
	          // set progress time to repeat time + tiny cofficient
	          // to make it extend further than the end time
	          this._progressTime = p.repeatTime + .00000000001;
	        }
	      // reverse time if _props.isReversed is set
	      if (p.isReversed) {
	        time = p.endTime - this._progressTime;
	      }
	      // We need to know what direction we are heading to,
	      // so if we don't have the previous update value - this is very first
	      // update, - skip it entirely and wait for the next value
	      if (this._prevTime === null) {
	        this._prevTime = time;
	        this._wasUknownUpdate = true;
	        return false;
	      }

	      // ====== AFTER SKIPPED FRAME ======

	      // handle onProgress callback
	      if (time >= startPoint && time <= p.endTime) {
	        this._progress((time - startPoint) / p.repeatTime, time);
	      }
	      /*
	        if time is inside the active area of the tween.
	        active area is the area from start time to end time,
	        with all the repeat and delays in it
	      */
	      if (time >= p.startTime && time <= p.endTime) {
	        this._updateInActiveArea(time);
	      } else {
	        this._isInActiveArea && this._updateInInactiveArea(time);
	      }

	      this._prevTime = time;
	      // console.log(this._prevTime)
	      return time >= p.endTime || time <= startPoint;
	    }

	    /*
	      Method to handle tween's progress in inactive area.
	      @private
	      @param {Number} Current update time.
	    */
	  }, {
	    key: '_updateInInactiveArea',
	    value: function _updateInInactiveArea(time) {
	      if (!this._isInActiveArea) {
	        return;
	      }
	      var p = this._props;
	      // complete if time is larger then end time
	      if (time > p.endTime && !this._isCompleted) {
	        this._progress(1, time);
	        // get period number
	        var T = this._getPeriod(p.endTime),
	            isYoyo = p.yoyo && T % 2 === 0;

	        this._setProgress(isYoyo ? 0 : 1, time, isYoyo);
	        this._repeatComplete(time, isYoyo);
	        this._complete(time, isYoyo);
	      }
	      // if was active and went to - inactive area "-"
	      if (time < this._prevTime && time < p.startTime && !this._isStarted) {
	        // if was in active area and didn't fire onStart callback
	        this._progress(0, time, false);
	        this._setProgress(0, time, false);
	        this._isRepeatStart = false;
	        this._repeatStart(time, false);
	        this._start(time, false);
	      }
	      this._isInActiveArea = false;
	    }

	    /*
	      Method to handle tween's progress in active area.
	      @private
	      @param {Number} Current update time.
	    */
	  }, {
	    key: '_updateInActiveArea',
	    value: function _updateInActiveArea(time) {

	      var props = this._props,
	          delayDuration = props.delay + props.duration,
	          startPoint = props.startTime - props.delay,
	          elapsed = (time - props.startTime + props.delay) % delayDuration,
	          TCount = Math.round((props.endTime - props.startTime + props.delay) / delayDuration),
	          T = this._getPeriod(time),
	          TValue = this._delayT,
	          prevT = this._getPeriod(this._prevTime),
	          TPrevValue = this._delayT;

	      // "zero" and "one" value regarding yoyo and it's period
	      var isYoyo = props.yoyo && T % 2 === 1,
	          isYoyoPrev = props.yoyo && prevT % 2 === 1,
	          yoyoZero = isYoyo ? 1 : 0,
	          yoyoOne = 1 - yoyoZero;

	      if (time === this._props.endTime) {
	        this._wasUknownUpdate = false;
	        // if `time` is equal to `endTime`, T represents the next period,
	        // so we need to decrement T and calculate "one" value regarding yoyo
	        var isYoyo = props.yoyo && (T - 1) % 2 === 1;
	        this._setProgress(isYoyo ? 0 : 1, time, isYoyo);
	        if (time > this._prevTime) {
	          this._isRepeatCompleted = false;
	        }
	        this._repeatComplete(time, isYoyo);
	        return this._complete(time, isYoyo);
	      }

	      // reset callback flags
	      this._isCompleted = false;
	      // if time is inside the duration area of the tween
	      if (startPoint + elapsed >= props.startTime) {
	        this._isInActiveArea = true;this._isRepeatCompleted = false;
	        this._isRepeatStart = false;this._isStarted = false;
	        // active zone or larger then end
	        var elapsed2 = (time - props.startTime) % delayDuration,
	            proc = elapsed2 / props.duration;
	        // |=====|=====|=====| >>>
	        //      ^1^2
	        var isOnEdge = T > 0 && prevT < T;
	        // |=====|=====|=====| <<<
	        //      ^2^1
	        var isOnReverseEdge = prevT > T;

	        // for use in timeline
	        this._onEdge = 0;
	        isOnEdge && (this._onEdge = 1);
	        isOnReverseEdge && (this._onEdge = -1);

	        if (this._wasUknownUpdate) {
	          if (time > this._prevTime) {
	            this._start(time, isYoyo);
	            this._repeatStart(time, isYoyo);
	            this._firstUpdate(time, isYoyo);
	          }
	          if (time < this._prevTime) {
	            this._complete(time, isYoyo);
	            this._repeatComplete(time, isYoyo);
	            this._firstUpdate(time, isYoyo);
	            // reset isCompleted immediately
	            this._isCompleted = false;
	          }
	        }

	        if (isOnEdge) {
	          // if not just after delay
	          // |---=====|---=====|---=====| >>>
	          //            ^1 ^2
	          // because we have already handled
	          // 1 and onRepeatComplete in delay gap
	          if (this.progress !== 1) {
	            // prevT
	            var isThisYoyo = props.yoyo && (T - 1) % 2 === 1;
	            this._repeatComplete(time, isThisYoyo);
	          }
	          // if on edge but not at very start
	          // |=====|=====|=====| >>>
	          // ^!    ^here ^here
	          if (prevT >= 0) {
	            this._repeatStart(time, isYoyo);
	          }
	        }

	        if (time > this._prevTime) {
	          //  |=====|=====|=====| >>>
	          // ^1  ^2
	          if (!this._isStarted && this._prevTime <= props.startTime) {
	            this._start(time, isYoyo);
	            this._repeatStart(time, isYoyo);
	            // it was zero anyways

	            // restart flags immediately in case if we will
	            // return to '-' inactive area on the next step
	            this._isStarted = false;
	            this._isRepeatStart = false;
	          }
	          this._firstUpdate(time, isYoyo);
	        }

	        if (isOnReverseEdge) {
	          // if on edge but not at very end
	          // |=====|=====|=====| <<<
	          //       ^here ^here ^not here
	          if (this.progress !== 0 && this.progress !== 1 && prevT != TCount) {
	            this._repeatStart(time, isYoyoPrev);
	          }
	          // if on very end edge
	          // |=====|=====|=====| <<<
	          //       ^!    ^! ^2 ^1
	          // we have handled the case in this._wasUknownUpdate
	          // block so filter that
	          if (prevT === TCount && !this._wasUknownUpdate) {
	            this._complete(time, isYoyo);
	            this._repeatComplete(time, isYoyo);
	            this._firstUpdate(time, isYoyo);
	            // reset isComplete flag call
	            // cuz we returned to active area
	            // this._isRepeatCompleted = false;
	            this._isCompleted = false;
	          }
	          this._repeatComplete(time, isYoyo);
	        }

	        if (prevT === 'delay') {
	          // if just before delay gap
	          // |---=====|---=====|---=====| <<<
	          //               ^2    ^1
	          if (T < TPrevValue) {
	            this._repeatComplete(time, isYoyo);
	          }
	          // if just after delay gap
	          // |---=====|---=====|---=====| >>>
	          //            ^1  ^2
	          if (T === TPrevValue && T > 0) {
	            this._repeatStart(time, isYoyo);
	          }
	        }

	        // swap progress and repeatStart based on direction
	        if (time > this._prevTime) {
	          // if progress is equal 0 and progress grows
	          if (proc === 0) {
	            this._repeatStart(time, isYoyo);
	          }
	          if (time !== props.endTime) {
	            this._setProgress(isYoyo ? 1 - proc : proc, time, isYoyo);
	          }
	        } else {
	          if (time !== props.endTime) {
	            this._setProgress(isYoyo ? 1 - proc : proc, time, isYoyo);
	          }
	          // if progress is equal 0 and progress grows
	          if (proc === 0) {
	            this._repeatStart(time, isYoyo);
	          }
	        }

	        if (time === props.startTime) {
	          this._start(time, isYoyo);
	        }
	        // delay gap - react only once
	      } else if (this._isInActiveArea) {
	          // because T will be string of "delay" here,
	          // let's normalize it be setting to TValue
	          var t = T === 'delay' ? TValue : T,
	              isGrows = time > this._prevTime;
	          // decrement period if forward direction of update
	          isGrows && t--;
	          // calculate normalized yoyoZero value
	          yoyoZero = props.yoyo && t % 2 === 1 ? 1 : 0;
	          // if was in active area and previous time was larger
	          // |---=====|---=====|---=====| <<<
	          //   ^2 ^1    ^2 ^1    ^2 ^1
	          if (time < this._prevTime) {
	            this._setProgress(yoyoZero, time, yoyoZero === 1);
	            this._repeatStart(time, yoyoZero === 1);
	          }
	          // set 1 or 0 regarding direction and yoyo
	          this._setProgress(isGrows ? 1 - yoyoZero : yoyoZero, time, yoyoZero === 1);
	          // if time grows
	          if (time > this._prevTime) {
	            // if reverse direction and in delay gap, then progress will be 0
	            // if so we don't need to call the onRepeatComplete callback
	            // |---=====|---=====|---=====| <<<
	            //   ^0       ^0       ^0  
	            // OR we have flipped 0 to 1 regarding yoyo option
	            if (this.progress !== 0 || yoyoZero === 1) {
	              // since we repeatComplete for previous period
	              // invert isYoyo option
	              // is elapsed is 0 - count as previous period
	              this._repeatComplete(time, yoyoZero === 1);
	            }
	          }
	          // set flag to indicate inactive area
	          this._isInActiveArea = false;
	        }
	      // we've got the first update now
	      this._wasUknownUpdate = false;
	    }

	    /*
	      Method to remove the Tween from the tweener.
	      @private
	      @returns {Object} Self.
	    */
	  }, {
	    key: '_removeFromTweener',
	    value: function _removeFromTweener() {
	      _tweener2['default'].remove(this);return this;
	    }

	    /*
	      Method to get current period number.
	      @private
	      @param {Number} Time to get the period for.
	      @returns {Number} Current period number.
	    */
	  }, {
	    key: '_getPeriod',
	    value: function _getPeriod(time) {
	      var p = this._props,
	          TTime = p.delay + p.duration,
	          dTime = p.delay + time - p.startTime,
	          T = dTime / TTime,

	      // if time if equal to endTime we need to set the elapsed
	      // time to 0 to fix the occasional precision js bug, which
	      // causes 0 to be something like 1e-12
	      elapsed = time < p.endTime ? dTime % TTime : 0;
	      // If the latest period, round the result, otherwise floor it.
	      // Basically we always can floor the result, but because of js
	      // precision issues, sometimes the result is 2.99999998 which
	      // will result in 2 instead of 3 after the floor operation.
	      T = time >= p.endTime ? Math.round(T) : Math.floor(T);
	      // if time is larger then the end time
	      if (time > p.endTime) {
	        // set equal to the periods count
	        T = Math.round((p.endTime - p.startTime + p.delay) / TTime);
	        // if in delay gap, set _delayT to current
	        // period number and return "delay"
	      } else if (elapsed > 0 && elapsed < p.delay) {
	          this._delayT = T;T = 'delay';
	        }
	      // if the end of period and there is a delay
	      return T;
	    }

	    /*
	      Method to set Tween's progress and call onUpdate callback.
	      @private
	      @override @ Module
	      @param {Number} Progress to set.
	      @param {Number} Current update time.
	      @param {Boolean} Is yoyo perido. Used in Timeline to pass to Tween.
	      @returns {Object} Self.
	    */
	  }, {
	    key: '_setProgress',
	    value: function _setProgress(proc, time, isYoyo) {
	      var p = this._props,
	          isYoyoChanged = p.wasYoyo !== isYoyo;
	      this.progress = proc;
	      this.easedProgress = p.easing(this.progress);
	      if (p.prevEasedProgress !== this.easedProgress || isYoyoChanged) {
	        if (p.onUpdate != null && typeof p.onUpdate === 'function') {
	          p.onUpdate.call(p.callbacksContext || this, this.easedProgress, this.progress, time > this._prevTime, isYoyo);
	        }
	      }
	      p.prevEasedProgress = this.easedProgress;
	      p.wasYoyo = isYoyo;
	      return this;
	    }

	    /*
	      Method to set tween's state to start and call onStart callback.
	      @method _start
	      @private
	      @param {Number} Progress to set.
	      @param {Boolean} Is yoyo period.
	    */
	  }, {
	    key: '_start',
	    value: function _start(time, isYoyo) {
	      if (this._isStarted) {
	        return;
	      }
	      var p = this._props;
	      if (p.onStart != null && typeof p.onStart === 'function') {
	        p.onStart.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
	      }
	      this._isCompleted = false;this._isStarted = true;
	      this._isFirstUpdate = false;
	    }

	    /*
	      Method to call onPlaybackStart callback
	      @private
	    */
	  }, {
	    key: '_playbackStart',
	    value: function _playbackStart() {
	      var p = this._props;
	      if (p.onPlaybackStart != null && typeof p.onPlaybackStart === 'function') {
	        p.onPlaybackStart.call(p.callbacksContext || this);
	      }
	    }

	    /*
	      Method to call onPlaybackPause callback
	      @private
	    */
	  }, {
	    key: '_playbackPause',
	    value: function _playbackPause() {
	      var p = this._props;
	      if (p.onPlaybackPause != null && typeof p.onPlaybackPause === 'function') {
	        p.onPlaybackPause.call(p.callbacksContext || this);
	      }
	    }

	    /*
	      Method to call onPlaybackStop callback
	      @private
	    */
	  }, {
	    key: '_playbackStop',
	    value: function _playbackStop() {
	      var p = this._props;
	      if (p.onPlaybackStop != null && typeof p.onPlaybackStop === 'function') {
	        p.onPlaybackStop.call(p.callbacksContext || this);
	      }
	    }

	    /*
	      Method to call onPlaybackComplete callback
	      @private
	    */
	  }, {
	    key: '_playbackComplete',
	    value: function _playbackComplete() {
	      var p = this._props;
	      if (p.onPlaybackComplete != null && typeof p.onPlaybackComplete === 'function') {
	        p.onPlaybackComplete.call(p.callbacksContext || this);
	      }
	    }

	    /*
	      Method to set tween's state to complete.
	      @method _complete
	      @private
	      @param {Number} Current time.
	      @param {Boolean} Is yoyo period.
	    */
	  }, {
	    key: '_complete',
	    value: function _complete(time, isYoyo) {
	      if (this._isCompleted) {
	        return;
	      }
	      var p = this._props;
	      if (p.onComplete != null && typeof p.onComplete === 'function') {
	        p.onComplete.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
	      }
	      this._isCompleted = true;this._isStarted = false;
	      this._isFirstUpdate = false;
	      // reset _prevYoyo for timeline usage
	      this._prevYoyo = undefined;
	    }

	    /*
	      Method to run onFirstUpdate callback.
	      @method _firstUpdate
	      @private
	      @param {Number} Current update time.
	      @param {Boolean} Is yoyo period.
	    */
	  }, {
	    key: '_firstUpdate',
	    value: function _firstUpdate(time, isYoyo) {
	      if (this._isFirstUpdate) {
	        return;
	      }
	      var p = this._props;
	      if (p.onFirstUpdate != null && typeof p.onFirstUpdate === 'function') {
	        // onFirstUpdate should have tween pointer
	        p.onFirstUpdate.tween = this;
	        p.onFirstUpdate.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
	      }
	      this._isFirstUpdate = true;
	    }

	    /*
	      Method call onRepeatComplete calback and set flags.
	      @private
	      @param {Number} Current update time.
	      @param {Boolean} Is repeat period.
	    */
	  }, {
	    key: '_repeatComplete',
	    value: function _repeatComplete(time, isYoyo) {
	      if (this._isRepeatCompleted) {
	        return;
	      }
	      var p = this._props;
	      if (p.onRepeatComplete != null && typeof p.onRepeatComplete === 'function') {
	        p.onRepeatComplete.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
	      }
	      this._isRepeatCompleted = true;
	      // this._prevYoyo = null;
	    }

	    /*
	      Method call onRepeatStart calback and set flags.
	      @private
	      @param {Number} Current update time.
	      @param {Boolean} Is yoyo period.
	    */
	  }, {
	    key: '_repeatStart',
	    value: function _repeatStart(time, isYoyo) {
	      if (this._isRepeatStart) {
	        return;
	      }
	      var p = this._props;
	      if (p.onRepeatStart != null && typeof p.onRepeatStart === 'function') {
	        p.onRepeatStart.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
	      }
	      this._isRepeatStart = true;
	    }

	    /*
	      Method to launch onProgress callback.
	      @method _progress
	      @private
	      @param {Number} Progress to set.
	    */
	  }, {
	    key: '_progress',
	    value: function _progress(progress, time) {
	      var p = this._props;
	      if (p.onProgress != null && typeof p.onProgress === 'function') {
	        p.onProgress.call(p.callbacksContext || this, progress, time > this._prevTime);
	      }
	    }

	    /*
	      Method which is called when the tween is removed from tweener.
	      @private
	    */
	  }, {
	    key: '_onTweenerRemove',
	    value: function _onTweenerRemove() {}

	    /*
	      Method which is called when the tween is removed
	      from tweener when finished.
	      @private
	    */
	  }, {
	    key: '_onTweenerFinish',
	    value: function _onTweenerFinish() {
	      this._setPlaybackState('stop');
	      this._playbackComplete();
	    }

	    /*
	      Method to set property[s] on Tween.
	      @private
	      @override @ Module
	      @param {Object, String} Hash object of key/value pairs, or property name.
	      @param {_} Property's value to set.
	    */
	  }, {
	    key: '_setProp',
	    value: function _setProp(obj, value) {
	      _get(Object.getPrototypeOf(Tween.prototype), '_setProp', this).call(this, obj, value);
	      this._calcDimentions();
	    }

	    /*
	      Method to set single property.
	      @private
	      @override @ Module
	      @param {String} Name of the property.
	      @param {Any} Value for the property.
	    */
	  }, {
	    key: '_assignProp',
	    value: function _assignProp(key, value) {
	      // fallback to defaults
	      if (value == null) {
	        value = this._defaults[key];
	      }
	      // parse easing
	      key === 'easing' && (value = _easingEasing2['default'].parseEasing(value));
	      // handle control callbacks overrides
	      var control = this._callbackOverrides[key],
	          isntOverriden = !value || !value.isMojsCallbackOverride;
	      if (control && isntOverriden) {
	        value = this._overrideCallback(value, control);
	      }
	      // call super on Module
	      _get(Object.getPrototypeOf(Tween.prototype), '_assignProp', this).call(this, key, value);
	    }

	    /*
	      Method to override callback for controll pupropes.
	      @private
	      @param {String}    Callback name.
	      @parma {Function}  Method to call  
	    */
	  }, {
	    key: '_overrideCallback',
	    value: function _overrideCallback(callback, fun) {
	      var isCallback = callback && typeof callback === 'function',
	          override = function callbackOverride() {
	        // call overriden callback if it exists
	        isCallback && callback.apply(this, arguments);
	        // call the passed cleanup function
	        fun.apply(this, arguments);
	      };
	      // add overridden flag
	      override.isMojsCallbackOverride = true;
	      return override;
	    }

	    // _visualizeProgress(time) {
	    //   var str = '|',
	    //       procStr = ' ',
	    //       p = this._props,
	    //       proc = p.startTime - p.delay;

	    //   while ( proc < p.endTime ) {
	    //     if (p.delay > 0 ) {
	    //       var newProc = proc + p.delay;
	    //       if ( time > proc && time < newProc ) {
	    //         procStr += ' ^ ';
	    //       } else {
	    //         procStr += '   ';
	    //       }
	    //       proc = newProc;
	    //       str  += '---';
	    //     }
	    //     var newProc = proc + p.duration;
	    //     if ( time > proc && time < newProc ) {
	    //       procStr += '  ^   ';
	    //     } else if (time === proc) {
	    //       procStr += '^     ';
	    //     } else if (time === newProc) {
	    //       procStr += '    ^ ';
	    //     } else {
	    //       procStr += '      ';
	    //     }
	    //     proc = newProc;
	    //     str += '=====|';
	    //   }

	    //   console.log(str);
	    //   console.log(procStr);
	    // }
	  }]);

	  return Tween;
	})(_module3['default']);

	exports['default'] = Tween;
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	__webpack_require__(99);

	__webpack_require__(100);

	var _h = __webpack_require__(82);

	var _h2 = _interopRequireDefault(_h);

	var Tweener = (function () {
	  function Tweener() {
	    _classCallCheck(this, Tweener);

	    this._vars();return this;
	  }

	  _createClass(Tweener, [{
	    key: '_vars',
	    value: function _vars() {
	      this.tweens = [];this._loop = this._loop.bind(this);
	    }

	    /*
	      Main animation loop. Should have only one concurrent loop.
	      @private
	      @returns this
	    */
	  }, {
	    key: '_loop',
	    value: function _loop() {
	      if (!this._isRunning) {
	        return false;
	      }
	      this._update(window.performance.now());
	      if (!this.tweens.length) {
	        return this._isRunning = false;
	      }
	      requestAnimationFrame(this._loop);
	      return this;
	    }

	    /*
	      Method to start animation loop.
	      @private
	    */
	  }, {
	    key: '_startLoop',
	    value: function _startLoop() {
	      if (this._isRunning) {
	        return;
	      };this._isRunning = true;
	      requestAnimationFrame(this._loop);
	    }

	    /*
	      Method to stop animation loop.
	      @private
	    */
	  }, {
	    key: '_stopLoop',
	    value: function _stopLoop() {
	      this._isRunning = false;
	    }

	    /*
	      Method to update every tween/timeline on animation frame.
	      @private
	    */
	  }, {
	    key: '_update',
	    value: function _update(time) {
	      var i = this.tweens.length;
	      while (i--) {
	        // cache the current tween
	        var tween = this.tweens[i];
	        if (tween && tween._update(time) === true) {
	          this.remove(i);
	          tween._onTweenerFinish();
	          tween._prevTime = null;
	        }
	      }
	    }

	    /*
	      Method to add a Tween/Timeline to loop pool.
	      @param {Object} Tween/Timeline to add.
	    */
	  }, {
	    key: 'add',
	    value: function add(tween) {
	      // return if tween is already running
	      if (tween._isRunning) {
	        return;
	      }
	      tween._isRunning = true;
	      this.tweens.push(tween);
	      this._startLoop();
	    }

	    /*
	      Method stop updating all the child tweens/timelines.
	      @private
	    */
	  }, {
	    key: 'removeAll',
	    value: function removeAll() {
	      this.tweens.length = 0;
	    }

	    /*
	      Method to remove specific tween/timeline form updating.
	      @private
	    */
	  }, {
	    key: 'remove',
	    value: function remove(tween) {
	      var index = typeof tween === 'number' ? tween : this.tweens.indexOf(tween);

	      if (index !== -1) {
	        tween = this.tweens[index];
	        if (tween) {
	          tween._isRunning = false;
	          this.tweens.splice(index, 1);
	          tween._onTweenerRemove();
	        }
	      }
	    }
	  }]);

	  return Tweener;
	})();

	var t = new Tweener();
	exports['default'] = t;
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports) {

	
	/* istanbul ignore next */

	(function() {
	  (function() {
	    'use strict';
	    var cancel, i, isOldBrowser, lastTime, vendors, vp, w;
	    vendors = ['webkit', 'moz'];
	    i = 0;
	    w = window;
	    while (i < vendors.length && !w.requestAnimationFrame) {
	      vp = vendors[i];
	      w.requestAnimationFrame = w[vp + 'RequestAnimationFrame'];
	      cancel = w[vp + 'CancelAnimationFrame'];
	      w.cancelAnimationFrame = cancel || w[vp + 'CancelRequestAnimationFrame'];
	      ++i;
	    }
	    isOldBrowser = !w.requestAnimationFrame || !w.cancelAnimationFrame;
	    if (/iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent) || isOldBrowser) {
	      lastTime = 0;
	      w.requestAnimationFrame = function(callback) {
	        var nextTime, now;
	        now = Date.now();
	        nextTime = Math.max(lastTime + 16, now);
	        return setTimeout((function() {
	          callback(lastTime = nextTime);
	        }), nextTime - now);
	      };
	      w.cancelAnimationFrame = clearTimeout;
	    }
	  })();

	}).call(this);


/***/ },
/* 100 */
/***/ function(module, exports) {

	
	/* istanbul ignore next */

	(function() {
	  (function(root) {
	    var offset, _ref, _ref1;
	    if (root.performance == null) {
	      root.performance = {};
	    }
	    Date.now = Date.now || function() {
	      return (new Date).getTime();
	    };
	    if (root.performance.now == null) {
	      offset = ((_ref = root.performance) != null ? (_ref1 = _ref.timing) != null ? _ref1.navigationStart : void 0 : void 0) ? performance.timing.navigationStart : Date.now();
	      return root.performance.now = function() {
	        return Date.now() - offset;
	      };
	    }
	  })(window);

	}).call(this);


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var Easing, PathEasing, bezier, easing, h, mix;

	  bezier = __webpack_require__(102);

	  PathEasing = __webpack_require__(103);

	  mix = __webpack_require__(104);

	  h = __webpack_require__(82);

	  Easing = (function() {
	    function Easing() {}

	    Easing.prototype.bezier = bezier;

	    Easing.prototype.PathEasing = PathEasing;

	    Easing.prototype.path = (new PathEasing('creator')).create;

	    Easing.prototype.inverse = function(p) {
	      return 1 - p;
	    };

	    Easing.prototype.linear = {
	      none: function(k) {
	        return k;
	      }
	    };

	    Easing.prototype.ease = {
	      "in": bezier.apply(Easing, [0.42, 0, 1, 1]),
	      out: bezier.apply(Easing, [0, 0, 0.58, 1]),
	      inout: bezier.apply(Easing, [0.42, 0, 0.58, 1])
	    };

	    Easing.prototype.quad = {
	      "in": function(k) {
	        return k * k;
	      },
	      out: function(k) {
	        return k * (2 - k);
	      },
	      inout: function(k) {
	        if ((k *= 2) < 1) {
	          return 0.5 * k * k;
	        }
	        return -0.5 * (--k * (k - 2) - 1);
	      }
	    };

	    Easing.prototype.cubic = {
	      "in": function(k) {
	        return k * k * k;
	      },
	      out: function(k) {
	        return --k * k * k + 1;
	      },
	      inout: function(k) {
	        if ((k *= 2) < 1) {
	          return 0.5 * k * k * k;
	        }
	        return 0.5 * ((k -= 2) * k * k + 2);
	      }
	    };

	    Easing.prototype.quart = {
	      "in": function(k) {
	        return k * k * k * k;
	      },
	      out: function(k) {
	        return 1 - (--k * k * k * k);
	      },
	      inout: function(k) {
	        if ((k *= 2) < 1) {
	          return 0.5 * k * k * k * k;
	        }
	        return -0.5 * ((k -= 2) * k * k * k - 2);
	      }
	    };

	    Easing.prototype.quint = {
	      "in": function(k) {
	        return k * k * k * k * k;
	      },
	      out: function(k) {
	        return --k * k * k * k * k + 1;
	      },
	      inout: function(k) {
	        if ((k *= 2) < 1) {
	          return 0.5 * k * k * k * k * k;
	        }
	        return 0.5 * ((k -= 2) * k * k * k * k + 2);
	      }
	    };

	    Easing.prototype.sin = {
	      "in": function(k) {
	        return 1 - Math.cos(k * Math.PI / 2);
	      },
	      out: function(k) {
	        return Math.sin(k * Math.PI / 2);
	      },
	      inout: function(k) {
	        return 0.5 * (1 - Math.cos(Math.PI * k));
	      }
	    };

	    Easing.prototype.expo = {
	      "in": function(k) {
	        if (k === 0) {
	          return 0;
	        } else {
	          return Math.pow(1024, k - 1);
	        }
	      },
	      out: function(k) {
	        if (k === 1) {
	          return 1;
	        } else {
	          return 1 - Math.pow(2, -10 * k);
	        }
	      },
	      inout: function(k) {
	        if (k === 0) {
	          return 0;
	        }
	        if (k === 1) {
	          return 1;
	        }
	        if ((k *= 2) < 1) {
	          return 0.5 * Math.pow(1024, k - 1);
	        }
	        return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
	      }
	    };

	    Easing.prototype.circ = {
	      "in": function(k) {
	        return 1 - Math.sqrt(1 - k * k);
	      },
	      out: function(k) {
	        return Math.sqrt(1 - (--k * k));
	      },
	      inout: function(k) {
	        if ((k *= 2) < 1) {
	          return -0.5 * (Math.sqrt(1 - k * k) - 1);
	        }
	        return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
	      }
	    };

	    Easing.prototype.back = {
	      "in": function(k) {
	        var s;
	        s = 1.70158;
	        return k * k * ((s + 1) * k - s);
	      },
	      out: function(k) {
	        var s;
	        s = 1.70158;
	        return --k * k * ((s + 1) * k + s) + 1;
	      },
	      inout: function(k) {
	        var s;
	        s = 1.70158 * 1.525;
	        if ((k *= 2) < 1) {
	          return 0.5 * (k * k * ((s + 1) * k - s));
	        }
	        return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
	      }
	    };

	    Easing.prototype.elastic = {
	      "in": function(k) {
	        var a, p, s;
	        s = void 0;
	        p = 0.4;
	        if (k === 0) {
	          return 0;
	        }
	        if (k === 1) {
	          return 1;
	        }
	        a = 1;
	        s = p / 4;
	        return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
	      },
	      out: function(k) {
	        var a, p, s;
	        s = void 0;
	        p = 0.4;
	        if (k === 0) {
	          return 0;
	        }
	        if (k === 1) {
	          return 1;
	        }
	        a = 1;
	        s = p / 4;
	        return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
	      },
	      inout: function(k) {
	        var a, p, s;
	        s = void 0;
	        p = 0.4;
	        if (k === 0) {
	          return 0;
	        }
	        if (k === 1) {
	          return 1;
	        }
	        a = 1;
	        s = p / 4;
	        if ((k *= 2) < 1) {
	          return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
	        }
	        return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
	      }
	    };

	    Easing.prototype.bounce = {
	      "in": function(k) {
	        return 1 - easing.bounce.out(1 - k);
	      },
	      out: function(k) {
	        if (k < (1 / 2.75)) {
	          return 7.5625 * k * k;
	        } else if (k < (2 / 2.75)) {
	          return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
	        } else if (k < (2.5 / 2.75)) {
	          return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
	        } else {
	          return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
	        }
	      },
	      inout: function(k) {
	        if (k < 0.5) {
	          return easing.bounce["in"](k * 2) * 0.5;
	        }
	        return easing.bounce.out(k * 2 - 1) * 0.5 + 0.5;
	      }
	    };

	    Easing.prototype.parseEasing = function(easing) {
	      var easingParent, type;
	      if (easing == null) {
	        easing = 'linear.none';
	      }
	      type = typeof easing;
	      if (type === 'string') {
	        if (easing.charAt(0).toLowerCase() === 'm') {
	          return this.path(easing);
	        } else {
	          easing = this._splitEasing(easing);
	          easingParent = this[easing[0]];
	          if (!easingParent) {
	            h.error("Easing with name \"" + easing[0] + "\" was not found, fallback to \"linear.none\" instead");
	            return this['linear']['none'];
	          }
	          return easingParent[easing[1]];
	        }
	      }
	      if (h.isArray(easing)) {
	        return this.bezier.apply(this, easing);
	      }
	      if ('function') {
	        return easing;
	      }
	    };

	    Easing.prototype._splitEasing = function(string) {
	      var firstPart, secondPart, split;
	      if (typeof string === 'function') {
	        return string;
	      }
	      if (typeof string === 'string' && string.length) {
	        split = string.split('.');
	        firstPart = split[0].toLowerCase() || 'linear';
	        secondPart = split[1].toLowerCase() || 'none';
	        return [firstPart, secondPart];
	      } else {
	        return ['linear', 'none'];
	      }
	    };

	    return Easing;

	  })();

	  easing = new Easing;

	  easing.mix = mix(easing);

	  module.exports = easing;

	}).call(this);


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {(function() {
	  var BezierEasing, bezierEasing, h,
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	  h = __webpack_require__(82);


	  /**
	   * Copyright (c) 2014 Gaëtan Renaudeau http://goo.gl/El3k7u
	   * Adopted from https://github.com/gre/bezier-easing
	   */

	  BezierEasing = (function() {
	    function BezierEasing(o) {
	      this.vars();
	      return this.generate;
	    }

	    BezierEasing.prototype.vars = function() {
	      return this.generate = h.bind(this.generate, this);
	    };

	    BezierEasing.prototype.generate = function(mX1, mY1, mX2, mY2) {
	      var A, B, C, NEWTON_ITERATIONS, NEWTON_MIN_SLOPE, SUBDIVISION_MAX_ITERATIONS, SUBDIVISION_PRECISION, arg, binarySubdivide, calcBezier, calcSampleValues, f, float32ArraySupported, getSlope, getTForX, i, kSampleStepSize, kSplineTableSize, mSampleValues, newtonRaphsonIterate, precompute, str, _i, _precomputed;
	      if (arguments.length < 4) {
	        return this.error('Bezier function expects 4 arguments');
	      }
	      for (i = _i = 0; _i < 4; i = ++_i) {
	        arg = arguments[i];
	        if (typeof arg !== "number" || isNaN(arg) || !isFinite(arg)) {
	          return this.error('Bezier function expects 4 arguments');
	        }
	      }
	      if (mX1 < 0 || mX1 > 1 || mX2 < 0 || mX2 > 1) {
	        return this.error('Bezier x values should be > 0 and < 1');
	      }
	      NEWTON_ITERATIONS = 4;
	      NEWTON_MIN_SLOPE = 0.001;
	      SUBDIVISION_PRECISION = 0.0000001;
	      SUBDIVISION_MAX_ITERATIONS = 10;
	      kSplineTableSize = 11;
	      kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
	      float32ArraySupported = __indexOf.call(global, 'Float32Array') >= 0;
	      A = function(aA1, aA2) {
	        return 1.0 - 3.0 * aA2 + 3.0 * aA1;
	      };
	      B = function(aA1, aA2) {
	        return 3.0 * aA2 - 6.0 * aA1;
	      };
	      C = function(aA1) {
	        return 3.0 * aA1;
	      };
	      calcBezier = function(aT, aA1, aA2) {
	        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
	      };
	      getSlope = function(aT, aA1, aA2) {
	        return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
	      };
	      newtonRaphsonIterate = function(aX, aGuessT) {
	        var currentSlope, currentX;
	        i = 0;
	        while (i < NEWTON_ITERATIONS) {
	          currentSlope = getSlope(aGuessT, mX1, mX2);

	          /* istanbul ignore if */
	          if (currentSlope === 0.0) {
	            return aGuessT;
	          }
	          currentX = calcBezier(aGuessT, mX1, mX2) - aX;
	          aGuessT -= currentX / currentSlope;
	          ++i;
	        }
	        return aGuessT;
	      };
	      calcSampleValues = function() {
	        i = 0;
	        while (i < kSplineTableSize) {
	          mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
	          ++i;
	        }
	      };

	      /* istanbul ignore next */
	      binarySubdivide = function(aX, aA, aB) {
	        var currentT, currentX, isBig;
	        currentX = void 0;
	        currentT = void 0;
	        i = 0;
	        while (true) {
	          currentT = aA + (aB - aA) / 2.0;
	          currentX = calcBezier(currentT, mX1, mX2) - aX;
	          if (currentX > 0.0) {
	            aB = currentT;
	          } else {
	            aA = currentT;
	          }
	          isBig = Math.abs(currentX) > SUBDIVISION_PRECISION;
	          if (!(isBig && ++i < SUBDIVISION_MAX_ITERATIONS)) {
	            break;
	          }
	        }
	        return currentT;
	      };
	      getTForX = function(aX) {
	        var currentSample, delta, dist, guessForT, initialSlope, intervalStart, lastSample;
	        intervalStart = 0.0;
	        currentSample = 1;
	        lastSample = kSplineTableSize - 1;
	        while (currentSample !== lastSample && mSampleValues[currentSample] <= aX) {
	          intervalStart += kSampleStepSize;
	          ++currentSample;
	        }
	        --currentSample;
	        delta = mSampleValues[currentSample + 1] - mSampleValues[currentSample];
	        dist = (aX - mSampleValues[currentSample]) / delta;
	        guessForT = intervalStart + dist * kSampleStepSize;
	        initialSlope = getSlope(guessForT, mX1, mX2);
	        if (initialSlope >= NEWTON_MIN_SLOPE) {
	          return newtonRaphsonIterate(aX, guessForT);
	        } else {

	          /* istanbul ignore next */
	          if (initialSlope === 0.0) {
	            return guessForT;
	          } else {
	            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
	          }
	        }
	      };
	      precompute = function() {
	        var _precomputed;
	        _precomputed = true;
	        if (mX1 !== mY1 || mX2 !== mY2) {
	          return calcSampleValues();
	        }
	      };
	      mSampleValues = !float32ArraySupported ? new Array(kSplineTableSize) : new Float32Array(kSplineTableSize);
	      _precomputed = false;
	      f = function(aX) {
	        if (!_precomputed) {
	          precompute();
	        }
	        if (mX1 === mY1 && mX2 === mY2) {
	          return aX;
	        }
	        if (aX === 0) {
	          return 0;
	        }
	        if (aX === 1) {
	          return 1;
	        }
	        return calcBezier(getTForX(aX), mY1, mY2);
	      };
	      str = "bezier(" + [mX1, mY1, mX2, mY2] + ")";
	      f.toStr = function() {
	        return str;
	      };
	      return f;
	    };

	    BezierEasing.prototype.error = function(msg) {
	      return h.error(msg);
	    };

	    return BezierEasing;

	  })();

	  bezierEasing = new BezierEasing;

	  module.exports = bezierEasing;

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var PathEasing, h;

	  h = __webpack_require__(82);

	  PathEasing = (function() {
	    PathEasing.prototype._vars = function() {
	      this._precompute = h.clamp(this.o.precompute || 1450, 100, 10000);
	      this._step = 1 / this._precompute;
	      this._rect = this.o.rect || 100;
	      this._approximateMax = this.o.approximateMax || 5;
	      this._eps = this.o.eps || 0.001;
	      return this._boundsPrevProgress = -1;
	    };

	    function PathEasing(path, o) {
	      this.o = o != null ? o : {};
	      if (path === 'creator') {
	        return;
	      }
	      this.path = h.parsePath(path);
	      if (this.path == null) {
	        return h.error('Error while parsing the path');
	      }
	      this._vars();
	      this.path.setAttribute('d', this._normalizePath(this.path.getAttribute('d')));
	      this.pathLength = this.path.getTotalLength();
	      this.sample = h.bind(this.sample, this);
	      this._hardSample = h.bind(this._hardSample, this);
	      this._preSample();
	      this;
	    }

	    PathEasing.prototype._preSample = function() {
	      var i, length, point, progress, _i, _ref, _results;
	      this._samples = [];
	      _results = [];
	      for (i = _i = 0, _ref = this._precompute; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
	        progress = i * this._step;
	        length = this.pathLength * progress;
	        point = this.path.getPointAtLength(length);
	        _results.push(this._samples[i] = {
	          point: point,
	          length: length,
	          progress: progress
	        });
	      }
	      return _results;
	    };

	    PathEasing.prototype._findBounds = function(array, p) {
	      var buffer, direction, end, i, len, loopEnd, pointP, pointX, start, value, _i, _ref;
	      if (p === this._boundsPrevProgress) {
	        return this._prevBounds;
	      }
	      if (this._boundsStartIndex == null) {
	        this._boundsStartIndex = 0;
	      }
	      len = array.length;
	      if (this._boundsPrevProgress > p) {
	        loopEnd = 0;
	        direction = 'reverse';
	      } else {
	        loopEnd = len;
	        direction = 'forward';
	      }
	      if (direction === 'forward') {
	        start = array[0];
	        end = array[array.length - 1];
	      } else {
	        start = array[array.length - 1];
	        end = array[0];
	      }
	      for (i = _i = _ref = this._boundsStartIndex; _ref <= loopEnd ? _i < loopEnd : _i > loopEnd; i = _ref <= loopEnd ? ++_i : --_i) {
	        value = array[i];
	        pointX = value.point.x / this._rect;
	        pointP = p;
	        if (direction === 'reverse') {
	          buffer = pointX;
	          pointX = pointP;
	          pointP = buffer;
	        }
	        if (pointX < pointP) {
	          start = value;
	          this._boundsStartIndex = i;
	        } else {
	          end = value;
	          break;
	        }
	      }
	      this._boundsPrevProgress = p;
	      return this._prevBounds = {
	        start: start,
	        end: end
	      };
	    };

	    PathEasing.prototype.sample = function(p) {
	      var bounds, res;
	      p = h.clamp(p, 0, 1);
	      bounds = this._findBounds(this._samples, p);
	      res = this._checkIfBoundsCloseEnough(p, bounds);
	      if (res != null) {
	        return res;
	      }
	      return this._findApproximate(p, bounds.start, bounds.end);
	    };

	    PathEasing.prototype._checkIfBoundsCloseEnough = function(p, bounds) {
	      var point, y;
	      point = void 0;
	      y = this._checkIfPointCloseEnough(p, bounds.start.point);
	      if (y != null) {
	        return y;
	      }
	      return this._checkIfPointCloseEnough(p, bounds.end.point);
	    };

	    PathEasing.prototype._checkIfPointCloseEnough = function(p, point) {
	      if (h.closeEnough(p, point.x / this._rect, this._eps)) {
	        return this._resolveY(point);
	      }
	    };

	    PathEasing.prototype._approximate = function(start, end, p) {
	      var deltaP, percentP;
	      deltaP = end.point.x - start.point.x;
	      percentP = (p - (start.point.x / this._rect)) / (deltaP / this._rect);
	      return start.length + percentP * (end.length - start.length);
	    };

	    PathEasing.prototype._findApproximate = function(p, start, end, approximateMax) {
	      var approximation, args, newPoint, point, x;
	      if (approximateMax == null) {
	        approximateMax = this._approximateMax;
	      }
	      approximation = this._approximate(start, end, p);
	      point = this.path.getPointAtLength(approximation);
	      x = point.x / this._rect;
	      if (h.closeEnough(p, x, this._eps)) {
	        return this._resolveY(point);
	      } else {
	        if (--approximateMax < 1) {
	          return this._resolveY(point);
	        }
	        newPoint = {
	          point: point,
	          length: approximation
	        };
	        args = p < x ? [p, start, newPoint, approximateMax] : [p, newPoint, end, approximateMax];
	        return this._findApproximate.apply(this, args);
	      }
	    };

	    PathEasing.prototype._resolveY = function(point) {
	      return 1 - (point.y / this._rect);
	    };

	    PathEasing.prototype._normalizePath = function(path) {
	      var commands, endIndex, normalizedPath, points, startIndex, svgCommandsRegexp;
	      svgCommandsRegexp = /[M|L|H|V|C|S|Q|T|A]/gim;
	      points = path.split(svgCommandsRegexp);
	      points.shift();
	      commands = path.match(svgCommandsRegexp);
	      startIndex = 0;
	      points[startIndex] = this._normalizeSegment(points[startIndex]);
	      endIndex = points.length - 1;
	      points[endIndex] = this._normalizeSegment(points[endIndex], this._rect || 100);
	      return normalizedPath = this._joinNormalizedPath(commands, points);
	    };

	    PathEasing.prototype._joinNormalizedPath = function(commands, points) {
	      var command, i, normalizedPath, space, _i, _len;
	      normalizedPath = '';
	      for (i = _i = 0, _len = commands.length; _i < _len; i = ++_i) {
	        command = commands[i];
	        space = i === 0 ? '' : ' ';
	        normalizedPath += "" + space + command + (points[i].trim());
	      }
	      return normalizedPath;
	    };

	    PathEasing.prototype._normalizeSegment = function(segment, value) {
	      var i, lastPoint, nRgx, pairs, parsedX, point, space, x, _i, _len;
	      if (value == null) {
	        value = 0;
	      }
	      segment = segment.trim();
	      nRgx = /(-|\+)?((\d+(\.(\d|\e(-|\+)?)+)?)|(\.?(\d|\e|(\-|\+))+))/gim;
	      pairs = this._getSegmentPairs(segment.match(nRgx));
	      lastPoint = pairs[pairs.length - 1];
	      x = lastPoint[0];
	      parsedX = Number(x);
	      if (parsedX !== value) {
	        segment = '';
	        lastPoint[0] = value;
	        for (i = _i = 0, _len = pairs.length; _i < _len; i = ++_i) {
	          point = pairs[i];
	          space = i === 0 ? '' : ' ';
	          segment += "" + space + point[0] + "," + point[1];
	        }
	      }
	      return segment;
	    };

	    PathEasing.prototype._getSegmentPairs = function(array) {
	      var i, newArray, pair, value, _i, _len;
	      if (array.length % 2 !== 0) {
	        h.error('Failed to parse the path - segment pairs are not even.', array);
	      }
	      newArray = [];
	      for (i = _i = 0, _len = array.length; _i < _len; i = _i += 2) {
	        value = array[i];
	        pair = [array[i], array[i + 1]];
	        newArray.push(pair);
	      }
	      return newArray;
	    };

	    PathEasing.prototype.create = function(path, o) {
	      var handler;
	      handler = new PathEasing(path, o);
	      handler.sample.path = handler.path;
	      return handler.sample;
	    };

	    return PathEasing;

	  })();

	  module.exports = PathEasing;

	}).call(this);


/***/ },
/* 104 */
/***/ function(module, exports) {

	(function() {
	  var create, easing, getNearest, mix, parseIfEasing, sort,
	    __slice = [].slice;

	  easing = null;

	  parseIfEasing = function(item) {
	    if (typeof item.value === 'number') {
	      return item.value;
	    } else {
	      return easing.parseEasing(item.value);
	    }
	  };

	  sort = function(a, b) {
	    var returnValue;
	    a.value = parseIfEasing(a);
	    b.value = parseIfEasing(b);
	    returnValue = 0;
	    a.to < b.to && (returnValue = -1);
	    a.to > b.to && (returnValue = 1);
	    return returnValue;
	  };

	  getNearest = function(array, progress) {
	    var i, index, value, _i, _len;
	    index = 0;
	    for (i = _i = 0, _len = array.length; _i < _len; i = ++_i) {
	      value = array[i];
	      index = i;
	      if (value.to > progress) {
	        break;
	      }
	    }
	    return index;
	  };

	  mix = function() {
	    var args;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    if (args.length > 1) {
	      args = args.sort(sort);
	    } else {
	      args[0].value = parseIfEasing(args[0]);
	    }
	    return function(progress) {
	      var index, value;
	      index = getNearest(args, progress);
	      if (index !== -1) {
	        value = args[index].value;
	        if (index === args.length - 1 && progress > args[index].to) {
	          return 1;
	        }
	        if (typeof value === 'function') {
	          return value(progress);
	        } else {
	          return value;
	        }
	      }
	    };
	  };

	  create = function(e) {
	    easing = e;
	    return mix;
	  };

	  module.exports = create;

	}).call(this);


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _h = __webpack_require__(82);

	var _h2 = _interopRequireDefault(_h);

	var _tweener = __webpack_require__(98);

	var _tweener2 = _interopRequireDefault(_tweener);

	var _tween = __webpack_require__(97);

	var _tween2 = _interopRequireDefault(_tween);

	var Timeline = (function (_Tween) {
	  _inherits(Timeline, _Tween);

	  _createClass(Timeline, [{
	    key: 'add',

	    /*
	      API method to add child tweens/timelines.
	      @public
	      @param {Object, Array} Tween/Timeline or an array of such.
	      @returns {Object} Self.
	    */
	    value: function add() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      this._pushTimelineArray(args);
	      this._calcDimentions();
	      return this;
	    }

	    /*
	      API method to append the Tween/Timeline to the end of the
	      timeline. Each argument is treated as a new append.
	      Array of tweens is treated as a parallel sequence. 
	      @public
	      @param {Object, Array} Tween/Timeline to append or array of such.
	      @returns {Object} Self.
	    */
	  }, {
	    key: 'append',
	    value: function append() {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _len2 = arguments.length, timeline = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          timeline[_key2] = arguments[_key2];
	        }

	        for (var _iterator = timeline[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var tm = _step.value;

	          if (_h2['default'].isArray(tm)) {
	            this._appendTimelineArray(tm);
	          } else {
	            this._appendTimeline(tm, this._timelines.length);
	          }
	          this._calcDimentions();
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator['return']) {
	            _iterator['return']();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      return this;
	    }

	    // ^ PUBLIC  METHOD(S) ^
	    // v PRIVATE METHOD(S) v

	    /*
	      Method to append Tween/Timeline array or mix of such.
	      @private
	      @param {Array} Array of Tweens/Timelines.
	    */
	  }, {
	    key: '_appendTimelineArray',
	    value: function _appendTimelineArray(timelineArray) {
	      var i = timelineArray.length,
	          time = this._props.repeatTime - this._props.delay,
	          len = this._timelines.length;

	      while (i--) {
	        this._appendTimeline(timelineArray[i], len, time);
	      }
	    }

	    /*
	      Method to append a single timeline to the Timeline.
	      @private
	      @param {Object} Tween/Timline to append.
	      @param {Number} Index of the append.
	      @param {Number} Shift time.
	    */
	  }, {
	    key: '_appendTimeline',
	    value: function _appendTimeline(timeline, index, time) {
	      // if timeline is a module with timeline property then extract it
	      if (timeline.timeline instanceof Timeline) {
	        timeline = timeline.timeline;
	      }
	      if (timeline.tween instanceof _tween2['default']) {
	        timeline = timeline.tween;
	      }

	      var shift = time != null ? time : this._props.duration;
	      shift += timeline._props.shiftTime || 0;
	      timeline.index = index;this._pushTimeline(timeline, shift);
	    }

	    /*
	      PrivateMethod to push Tween/Timeline array.
	      @private
	      @param {Array} Array of Tweens/Timelines.
	    */
	  }, {
	    key: '_pushTimelineArray',
	    value: function _pushTimelineArray(array) {
	      for (var i = 0; i < array.length; i++) {
	        var tm = array[i];
	        // recursive push to handle arrays of arrays
	        if (_h2['default'].isArray(tm)) {
	          this._pushTimelineArray(tm);
	        } else {
	          this._pushTimeline(tm);
	        }
	      };
	    }

	    /*
	      Method to push a single Tween/Timeline.
	      @private
	      @param {Object} Tween or Timeline to push.
	      @param {Number} Number of milliseconds to shift the start time
	                      of the Tween/Timeline.
	    */
	  }, {
	    key: '_pushTimeline',
	    value: function _pushTimeline(timeline, shift) {
	      // if timeline is a module with timeline property then extract it
	      if (timeline.timeline instanceof Timeline) {
	        timeline = timeline.timeline;
	      }
	      if (timeline.tween instanceof _tween2['default']) {
	        timeline = timeline.tween;
	      }
	      // add self delay to the timeline
	      shift != null && timeline._setProp({ 'shiftTime': shift });
	      this._timelines.push(timeline);
	      this._recalcDuration(timeline);
	    }

	    /*
	      Method set progress on self and child Tweens/Timelines.
	      @private
	      @param {Number} Progress to set.
	      @param {Number} Current update time.
	    */
	  }, {
	    key: '_setProgress',
	    value: function _setProgress(p, time, isYoyo) {
	      _tween2['default'].prototype._setProgress.call(this, p, time);
	      // super._setProgress(p, time);
	      // we need to pass self previous time to children
	      // to prevent initial _wasUnknownUpdate nested waterfall
	      // if not yoyo option set, pass the previous time
	      // otherwise, pass previous or next time regarding yoyo period.
	      var coef = time > this._prevTime ? -1 : 1;
	      if (this._props.yoyo && isYoyo) {
	        coef *= -1;
	      }
	      var timeToTimelines = this._props.startTime + p * this._props.duration,
	          prevTimeToTimelines = timeToTimelines + coef,
	          len = this._timelines.length;
	      for (var i = 0; i < len; i++) {
	        // specify the children's array update loop direction
	        // if time > prevTime go from 0->length else from length->0
	        // var j = ( time > this._prevTime ) ? i : (len-1) - i ;
	        var j = timeToTimelines > prevTimeToTimelines ? i : len - 1 - i;
	        this._timelines[j]._update(timeToTimelines, prevTimeToTimelines, this._prevYoyo, this._onEdge);
	      }
	      this._prevYoyo = isYoyo;
	    }

	    /*
	      Method calculate self duration based on timeline's duration.
	      @private
	      @param {Object} Tween or Timeline to calculate.
	    */
	  }, {
	    key: '_recalcDuration',
	    value: function _recalcDuration(timeline) {
	      var p = timeline._props,
	          timelineTime = p.repeatTime / p.speed + (p.shiftTime || 0);

	      this._props.duration = Math.max(timelineTime, this._props.duration);
	    }

	    /*
	      Method calculate self duration from skretch.
	      @private
	    */
	  }, {
	    key: '_recalcTotalDuration',
	    value: function _recalcTotalDuration() {
	      var i = this._timelines.length;
	      this._props.duration = 0;
	      while (i--) {
	        var tm = this._timelines[i];
	        // recalc total duration on child timelines
	        tm._recalcTotalDuration && tm._recalcTotalDuration();
	        // add the timeline's duration to selft duration
	        this._recalcDuration(tm);
	      }
	      this._calcDimentions();
	    }

	    /*
	      Method set start and end times.
	      @private
	      @param {Number, Null} Time to start with.
	    */
	  }, {
	    key: '_setStartTime',
	    value: function _setStartTime(time) {
	      var isReset = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	      _get(Object.getPrototypeOf(Timeline.prototype), '_setStartTime', this).call(this, time);
	      this._startTimelines(this._props.startTime, isReset);
	    }

	    /*
	      Method calculate self duration based on timeline's duration.
	      @private
	      @param {Number, Null} Time to start with.
	    */
	  }, {
	    key: '_startTimelines',
	    value: function _startTimelines(time) {
	      var isReset = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	      var p = this._props,
	          isStop = this._state === 'stop';

	      time == null && (time = this._props.startTime);

	      for (var i = 0; i < this._timelines.length; i++) {
	        var tm = this._timelines[i];
	        tm._setStartTime(time, isReset);
	        // if from `_subPlay` and `_prevTime` is set and state is `stop`
	        // prevTime normalizing is for play/pause functionality, so no
	        // need to normalize if the timeline is in `stop` state.
	        if (!isReset && tm._prevTime != null && !isStop) {
	          tm._prevTime = tm._normPrevTimeForward();
	        }
	      }
	    }

	    /*
	      Method do declare defaults by this._defaults object
	      @private
	    */
	  }, {
	    key: '_declareDefaults',
	    value: function _declareDefaults() {
	      // if duration was passed on initialization stage, warn user and reset it.
	      if (this._o.duration != null) {
	        _h2['default'].error('Duration can not be declared on Timeline, but "' + this._o.duration + '" is. You probably want to use Tween instead.');
	        this._o.duration = 0;
	      }
	      _get(Object.getPrototypeOf(Timeline.prototype), '_declareDefaults', this).call(this);
	      // remove default
	      this._defaults.duration = 0;
	      this._defaults.easing = 'Linear.None';
	      this._defaults.nameBase = 'Timeline';
	    }
	  }]);

	  function Timeline() {
	    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Timeline);

	    _get(Object.getPrototypeOf(Timeline.prototype), 'constructor', this).call(this, o);
	  }

	  /*
	    Method to declare some vars.
	    @private
	  */

	  _createClass(Timeline, [{
	    key: '_vars',
	    value: function _vars() {
	      this._timelines = [];
	      _get(Object.getPrototypeOf(Timeline.prototype), '_vars', this).call(this);
	    }
	  }]);

	  return Timeline;
	})(_tween2['default']);

	exports['default'] = Timeline;
	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _h = __webpack_require__(82);

	var _h2 = _interopRequireDefault(_h);

	var _thenable = __webpack_require__(95);

	var _thenable2 = _interopRequireDefault(_thenable);

	var Tuneable = (function (_Thenable) {
	  _inherits(Tuneable, _Thenable);

	  function Tuneable() {
	    _classCallCheck(this, Tuneable);

	    _get(Object.getPrototypeOf(Tuneable.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Tuneable, [{
	    key: 'tune',

	    /*
	      Method to start the animation with optional new options.
	      @public
	      @param {Object} New options to set on the run.
	      @returns {Object} this.
	    */
	    value: function tune(o) {
	      // if options object was passed
	      if (o && Object.keys(o).length) {
	        this._transformHistory(o);
	        this._tuneNewOptions(o);
	        // restore array prop values because _props
	        // contain them as parsed arrays
	        // but we need the as strings to store in history
	        // and merge in history chains
	        this._history[0] = _h2['default'].cloneObj(this._props);
	        for (var key in this._arrayPropertyMap) {
	          if (o[key] != null) {
	            this._history[0][key] = this._preparsePropValue(key, o[key]);
	          }
	        }

	        this._tuneSubModules();
	        this._resetTweens();
	      }
	      return this;
	    }

	    /*
	      Method to regenerate all the random properties form initial object.
	      @public
	      @returns this.
	    */
	  }, {
	    key: 'generate',
	    value: function generate() {
	      return this.tune(this._o);
	    }

	    // ^ PUBLIC  METHOD(S) ^
	    // v PRIVATE METHOD(S) v

	    /*
	      Method to preparse options in object.
	      @private
	      @param {Object} Object to preparse properties on.
	      @returns {Object} Passed object with preparsed props.
	    */
	    // _preParseOptions ( o ) {
	    //   for (var key in o) {
	    //     o[key] = this._preparsePropValue( key, o[key] );
	    //   }
	    //   return o;
	    // }
	    /*
	      Method to transform history rewrite new options object chain on run.
	      @private
	      @param {Object} New options to tune for.
	    */
	  }, {
	    key: '_transformHistory',
	    value: function _transformHistory(o) {
	      for (var key in o) {
	        var value = o[key];
	        // don't transform for childOptions
	        // if ( key === 'childOptions' ) { continue; }
	        this._transformHistoryFor(key, this._preparsePropValue(key, value));
	      }
	    }

	    /*
	      Method to transform history chain for specific key/value.
	      @param {String} Name of the property to transform history for.
	      @param {Any} The new property's value.
	    */
	  }, {
	    key: '_transformHistoryFor',
	    value: function _transformHistoryFor(key, value) {
	      for (var i = 0; i < this._history.length; i++) {
	        if (value = this._transformHistoryRecord(i, key, value)) {
	          // break if no further history modifications needed
	          if (value == null) {
	            break;
	          }
	        }
	      }
	    }

	    /*
	      Method to transform history recod with key/value.
	      @param {Number} Index of the history record to transform.
	      @param {String} Property name to transform.
	      @param {Any} Property value to transform to.
	      @param {Object} Optional the current history record.
	      @param {Object} Optional the next history record.
	      @returns {Boolean} Returns true if no further
	                         history modifications is needed.
	    */
	  }, {
	    key: '_transformHistoryRecord',
	    value: function _transformHistoryRecord(index, key, newVal, currRecord, nextRecord) {
	      // newVal = this._parseProperty( key, newVal );
	      if (newVal == null) {
	        return null;
	      }

	      // fallback to history records, if wasn't specified
	      currRecord = currRecord == null ? this._history[index] : currRecord;
	      nextRecord = nextRecord == null ? this._history[index + 1] : nextRecord;

	      var oldVal = currRecord[key],
	          nextVal = nextRecord == null ? null : nextRecord[key];

	      // if index is 0 - always save the newVal
	      // and return non-delta for subsequent modifications
	      if (index === 0) {
	        currRecord[key] = newVal;
	        // always return on tween properties
	        if (_h2['default'].isTweenProp(key) && key !== 'duration') {
	          return null;
	        }
	        // nontween properties
	        var isRewriteNext = this._isRewriteNext(oldVal, nextVal),
	            returnVal = this._isDelta(newVal) ? _h2['default'].getDeltaEnd(newVal) : newVal;
	        return isRewriteNext ? returnVal : null;
	      } else {
	        // if was delta and came none-deltta - rewrite
	        // the start of the delta and stop
	        if (this._isDelta(oldVal)) {
	          currRecord[key] = _defineProperty({}, newVal, _h2['default'].getDeltaEnd(oldVal));
	          return null;
	        } else {
	          // if the old value is not delta and the new one is
	          currRecord[key] = newVal;
	          // if the next item has the same value - return the
	          // item for subsequent modifications or stop
	          return this._isRewriteNext(oldVal, nextVal) ? newVal : null;
	        }
	      }
	    }

	    /*
	      Method to check if the next item should
	      be rewrited in transform history operation.
	      @private
	      @param {Any} Current value.
	      @param {Any} Next value.
	      @returns {Boolean} If need to rewrite the next value.
	    */
	  }, {
	    key: '_isRewriteNext',
	    value: function _isRewriteNext(currVal, nextVal) {
	      // return false if nothing to rewrite next
	      if (nextVal == null && currVal != null) {
	        return false;
	      }

	      var isEqual = currVal === nextVal,
	          isNextDelta = this._isDelta(nextVal),
	          isDelta = this._isDelta(currVal),
	          isValueDeltaChain = false,
	          isDeltaChain = false;

	      if (isDelta && isNextDelta) {
	        if (_h2['default'].getDeltaEnd(currVal) == _h2['default'].getDeltaStart(nextVal)) {
	          isDeltaChain = true;
	        }
	      } else if (isNextDelta) {
	        isValueDeltaChain = _h2['default'].getDeltaStart(nextVal) === '' + currVal;
	      }

	      return isEqual || isValueDeltaChain || isDeltaChain;
	    }

	    /*
	      Method to tune new history options to all the submodules.
	      @private
	    */
	  }, {
	    key: '_tuneSubModules',
	    value: function _tuneSubModules() {
	      for (var i = 1; i < this._modules.length; i++) {
	        this._modules[i]._tuneNewOptions(this._history[i]);
	      }
	    }

	    /*
	      Method to set new options on run.
	      @param {Boolean} If foreign context.
	      @private
	    */
	  }, {
	    key: '_resetTweens',
	    value: function _resetTweens() {
	      var i = 0,
	          shift = 0,
	          tweens = this.timeline._timelines;

	      for (var i = 0; i < tweens.length; i++) {
	        var tween = tweens[i],
	            prevTween = tweens[i - 1];

	        shift += prevTween ? prevTween._props.repeatTime : 0;
	        this._resetTween(tween, this._history[i], shift);
	      }
	      this.timeline._setProp(this._props.timeline);
	      this.timeline._recalcTotalDuration();
	    }

	    /*
	      Method to reset tween with new options.
	      @param {Object} Tween to reset.
	      @param {Object} Tween's to reset tween with.
	      @param {Number} Optional number to shift tween start time.
	    */
	  }, {
	    key: '_resetTween',
	    value: function _resetTween(tween, o) {
	      var shift = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	      o.shiftTime = shift;tween._setProp(o);
	    }
	  }]);

	  return Tuneable;
	})(_thenable2['default']);

	exports['default'] = Tuneable;
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _transit = __webpack_require__(94);

	var _transit2 = _interopRequireDefault(_transit);

	var _h = __webpack_require__(82);

	/*
	  *TODO:*
	  ---
	  - tweak then chains
	*/

	var _h2 = _interopRequireDefault(_h);

	var Swirl = (function (_Transit) {
	  _inherits(Swirl, _Transit);

	  function Swirl() {
	    _classCallCheck(this, Swirl);

	    _get(Object.getPrototypeOf(Swirl.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Swirl, [{
	    key: '_declareDefaults',

	    /*
	      Method to declare _defaults and other default objects.
	      @private
	      @override @ Transit
	    */
	    value: function _declareDefaults() {
	      _get(Object.getPrototypeOf(Swirl.prototype), '_declareDefaults', this).call(this);

	      /* _DEFAULTS ARE - TRANSIT DEFAULTS + THESE: */

	      /* [boolean] :: If shape should follow sinusoidal path. */
	      this._defaults.isSwirl = true;
	      /* ∆ :: [number > 0] :: Degree size of the sinusoidal path. */
	      this._defaults.swirlSize = 10;
	      /* ∆ :: [number > 0] :: Frequency of the sinusoidal path. */
	      this._defaults.swirlFrequency = 3;
	      /* ∆ :: [number > 0] :: Sinusoidal path length scale. */
	      this._defaults.pathScale = 1;
	      /* ∆ :: [number] :: Degree shift for the sinusoidal path. */
	      this._defaults.degreeShift = 0;
	      /* ∆ :: [number] :: Radius of the shape. */
	      this._defaults.radius = { 5: 0 };
	      /* [number: -1, 1] :: Directon of Swirl. */
	      this._defaults.direction = 1;
	      /* technical ones: */
	      /* [boolean] :: If should have child shape. */
	      this._defaults.isWithShape = true;
	    }

	    // ^ PUBLIC  METHOD(S) ^
	    // v PRIVATE METHOD(S) v

	    /*
	      Method to copy _o options to _props with
	      fallback to _defaults.
	      @private
	      @override @ Module
	    */
	  }, {
	    key: '_extendDefaults',
	    value: function _extendDefaults() {
	      _get(Object.getPrototypeOf(Swirl.prototype), '_extendDefaults', this).call(this);
	      this._calcPosData();
	    }

	    /*
	      Method to tune new oprions to _o and _props object.
	      @private
	      @overrides @ Module
	      @param {Object} Options object to tune to.
	    */
	  }, {
	    key: '_tuneNewOptions',
	    value: function _tuneNewOptions(o) {
	      if (o == null) {
	        return;
	      }

	      _get(Object.getPrototypeOf(Swirl.prototype), '_tuneNewOptions', this).call(this, o);
	      if (o.x != null || o.y != null) {
	        this._calcPosData();
	      }
	    }

	    /*
	      Method to calculate Swirl's position data.
	      @private
	    */
	  }, {
	    key: '_calcPosData',
	    value: function _calcPosData() {
	      var x = this._getPosValue('x'),
	          y = this._getPosValue('y'),
	          angle = 90 + Math.atan(y.delta / x.delta || 0) * _h2['default'].RAD_TO_DEG;

	      this._posData = {
	        radius: Math.sqrt(x.delta * x.delta + y.delta * y.delta),
	        angle: x.delta < 0 ? angle + 180 : angle,
	        x: x, y: y
	      };
	      // set the last position to _props
	      // this._calcSwirlXY( 1 );
	    }

	    /*
	      Gets `x` or `y` position value.
	      @private
	      @param {String} Name of the property.
	    */
	  }, {
	    key: '_getPosValue',
	    value: function _getPosValue(name) {
	      var delta = this._deltas[name];
	      if (delta) {
	        // delete from deltas to prevent normal
	        delete this._deltas[name];
	        return {
	          start: delta.start.value,
	          end: delta.end.value,
	          delta: delta.delta,
	          units: delta.end.unit
	        };
	      } else {
	        var pos = _h2['default'].parseUnit(this._props[name]);
	        return { start: pos.value, end: pos.value, delta: 0, units: pos.unit };
	      }
	    }

	    /*
	      Method to calculate the progress of the Swirl.
	      @private
	      @overrides @ Transit
	      @param {Numer} Progress of the Swirl in range of [0..1]
	    */
	  }, {
	    key: '_setProgress',
	    value: function _setProgress(proc) {
	      this._progress = proc;
	      this._calcCurrentProps(proc);
	      this._calcSwirlXY(proc);
	      this._calcOrigin();
	      this._draw(proc);
	    }

	    /*
	      Method to calculate x/y for Swirl's progress
	      @private
	      @mutates _props
	      @param {Number} Current progress in [0...1]
	    */
	  }, {
	    key: '_calcSwirlXY',
	    value: function _calcSwirlXY(proc) {
	      var p = this._props,
	          angle = this._posData.angle + p.degreeShift,
	          point = _h2['default'].getRadialPoint({
	        angle: p.isSwirl ? angle + this._getSwirl(proc) : angle,
	        radius: proc * this._posData.radius * p.pathScale,
	        center: {
	          x: this._posData.x.start,
	          y: this._posData.y.start
	        }
	      });

	      // if foreign svg canvas - set position without units
	      var x = point.x,
	          y = point.y;
	      p.x = this._o.ctx ? x : x + this._posData.x.units;
	      p.y = this._o.ctx ? y : y + this._posData.y.units;
	    }

	    /*
	      Method to get progress of the swirl.
	      @private
	      @param {Number} Progress of the Swirl.
	      @returns {Number} Progress of the swirl.
	    */
	  }, {
	    key: '_getSwirl',
	    value: function _getSwirl(proc) {
	      var p = this._props;
	      return p.direction * p.swirlSize * Math.sin(p.swirlFrequency * proc);
	    }

	    /*
	      Method to draw shape.
	      If !isWithShape - draw self el only, but not shape.
	      @private
	      @overrides @ Transit.
	    */
	  }, {
	    key: '_draw',
	    value: function _draw() {
	      // call _draw or just _drawEl @ Transit depending if there is `shape`
	      var methodName = this._props.isWithShape ? '_draw' : '_drawEl';
	      _transit2['default'].prototype[methodName].call(this);
	    }
	  }]);

	  return Swirl;
	})(_transit2['default']);

	exports['default'] = Swirl;
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _h = __webpack_require__(82);

	var _h2 = _interopRequireDefault(_h);

	var _tweenTimeline = __webpack_require__(105);

	var _tweenTimeline2 = _interopRequireDefault(_tweenTimeline);

	var Stagger = (function () {
	  function Stagger(options, Module) {
	    _classCallCheck(this, Stagger);

	    return this.init(options, Module);
	  }

	  /*
	    Method to get an option by modulo and name.
	    @param {String} Name of the property to get.
	    @param {Number} Index for the modulo calculation.
	    @param {Object} Options hash to look in.
	    @return {Any} Property.
	  */

	  _createClass(Stagger, [{
	    key: '_getOptionByMod',
	    value: function _getOptionByMod(name, i, store) {
	      var props = store[name];
	      // if not dom list then clone it to array
	      if (props + '' === '[object NodeList]' || props + '' === '[object HTMLCollection]') props = Array.prototype.slice.call(props, 0);
	      // get the value in array or return the value itself
	      var value = _h2['default'].isArray(props) ? props[i % props.length] : props;
	      // check if value has the stagger expression, if so parse it
	      return _h2['default'].parseIfStagger(value, i);
	    }

	    /*
	      Method to get option by modulo of index.
	      @param {Number} Index for modulo calculations.
	      @param {Object} Options hash to look in.
	    */
	  }, {
	    key: '_getOptionByIndex',
	    value: function _getOptionByIndex(i, store) {
	      var _this = this;

	      var options = {};
	      Object.keys(store).forEach(function (key) {
	        return options[key] = _this._getOptionByMod(key, i, store);
	      });
	      return options;
	    }

	    /*
	      Method to get total child modules quantity.
	      @param  {String} Name of quantifier in options hash.
	      @param  {Object} Options hash object.
	      @return {Number} Number of child object that should be defined.
	    */
	  }, {
	    key: '_getChildQuantity',
	    value: function _getChildQuantity(name, store) {
	      // if number was set
	      if (typeof name === 'number') {
	        return name;
	      }

	      var quantifier = store[name];
	      if (_h2['default'].isArray(quantifier)) {
	        return quantifier.length;
	      } else if (quantifier + '' === '[object NodeList]') {
	        return quantifier.length;
	      } else if (quantifier + '' === '[object HTMLCollection]') {
	        return Array.prototype.slice.call(quantifier, 0).length;
	      } else if (quantifier instanceof HTMLElement) {
	        return 1;
	      } else if (typeof quantifier == 'string') {
	        return 1;
	      }
	    }

	    /*
	      Method to create timeline.
	      @param {Object} Options. ** default ** empty object.
	    */
	  }, {
	    key: '_createTimeline',
	    value: function _createTimeline() {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      this.timeline = new _tweenTimeline2['default']({
	        onStart: options.onStaggerStart,
	        onUpdate: options.onStaggerUpdate,
	        onComplete: options.onStaggerComplete,
	        onReverseComplete: options.onStaggerReverseComplete,
	        delay: options.moduleDelay
	      });
	    }

	    /*
	      Method to make stagger form options
	      @param {Object} Options.
	      @param {Object} Child class.
	    */
	  }, {
	    key: 'init',
	    value: function init(options, Module) {
	      var count = this._getChildQuantity(options.quantifier || 'el', options);
	      this._createTimeline(options);this.childModules = [];
	      for (var i = 0; i < count; i++) {
	        // get child module's option
	        var option = this._getOptionByIndex(i, options);option.isRunLess = true;
	        // create child module
	        var module = new Module(option);this.childModules.push(module);
	        // add child module's timeline to the self timeline
	        this.timeline.add(module);
	      }
	      return this;
	    }

	    /*
	      Method to start timeline.
	    */
	  }, {
	    key: 'run',
	    value: function run() {
	      this.timeline.play();
	    }
	  }]);

	  return Stagger;
	})();

	module.exports = function (Module) {
	  return function (options) {
	    return new Stagger(options, Module);
	  };
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _h = __webpack_require__(82);

	var _h2 = _interopRequireDefault(_h);

	var _tweenTween = __webpack_require__(97);

	var _tweenTween2 = _interopRequireDefault(_tweenTween);

	var _tweenTimeline = __webpack_require__(105);

	/*
	  Class for toggling opacity on bunch of elements
	  @class Spriter
	  @todo
	    - add isForce3d option
	    - add run new option merging
	    - add then chains
	*/

	var _tweenTimeline2 = _interopRequireDefault(_tweenTimeline);

	var Spriter = (function () {
	  _createClass(Spriter, [{
	    key: '_declareDefaults',

	    /*
	      Defaults/APIs
	    */
	    value: function _declareDefaults() {
	      this._defaults = {
	        /*
	          Duration
	          @property duration
	          @type     {Number}
	        */
	        duration: 500,
	        /*
	          Delay
	          @property delay
	          @type     {Number}
	        */
	        delay: 0,
	        /*
	          Easing. Please see the 
	          [timeline module parseEasing function](timeline.coffee.html#parseEasing)
	          for all avaliable options.
	            @property easing
	          @type     {String, Function}
	        */
	        easing: 'linear.none',
	        /*
	          Repeat times count
	          
	          @property repeat
	          @type     {Number}
	        */
	        repeat: 0,
	        /*
	          Yoyo option defines if animation should be altered on repeat.
	          
	          @property yoyo
	          @type     {Boolean}
	        */
	        yoyo: false,
	        /*
	          isRunLess option prevents animation from running immediately after
	          initialization.
	          
	          @property isRunLess
	          @type     {Boolean}
	        */
	        isRunLess: false,
	        /*
	          isShowEnd option defines if the last frame should be shown when
	          animation completed.
	          
	          @property isShowEnd
	          @type     {Boolean}
	        */
	        isShowEnd: false,
	        /*
	          onStart callback will be called once on animation start.
	          
	          @property onStart
	          @type     {Function}
	        */
	        onStart: null,
	        /*
	          onUpdate callback will be called on every frame of the animation.
	          The current progress in range **[0,1]** will be passed to the callback.
	          
	          @property onUpdate
	          @type     {Function}
	        */
	        onUpdate: null,
	        /*
	          onComplete callback will be called once on animation complete.
	          
	          @property onComplete
	          @type     {Function}
	        */
	        onComplete: null
	      };
	    }
	  }]);

	  function Spriter() {
	    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Spriter);

	    this.o = o;
	    if (!this.o.el) {
	      return _h2['default'].error('No "el" option specified, aborting');
	    }
	    this._vars();this._declareDefaults();this._extendDefaults();this._parseFrames();
	    if (this._frames.length <= 2) _h2['default'].warn('Spriter: only ' + this._frames.length + ' frames found');
	    if (this._frames.length < 1) _h2['default'].error("Spriter: there is no frames to animate, aborting");
	    this._createTween();
	    return this;
	  }

	  /*
	    Method to declare some variables.
	    
	    @method run
	    @param  {Object} New options
	    @todo   Implement new object merging
	  */

	  _createClass(Spriter, [{
	    key: '_vars',
	    value: function _vars() {
	      this._props = _h2['default'].cloneObj(this.o);
	      this.el = this.o.el;
	      this._frames = [];
	    }

	    /*
	      Method to run the spriter on demand.
	      
	      @method run
	      @param  {Object} New options
	      @todo   Implement new object merging
	    */
	  }, {
	    key: 'run',
	    value: function run(o) {
	      return this.timeline.play();
	    }

	    /*
	      Method to extend _props by options(this.o)
	      
	      @method _extendDefaults
	    */
	  }, {
	    key: '_extendDefaults',
	    value: function _extendDefaults() {
	      return _h2['default'].extend(this._props, this._defaults);
	    }

	    /*
	      Method to parse frames as child nodes of el.
	      
	      @method _parseFrames
	    */
	  }, {
	    key: '_parseFrames',
	    value: function _parseFrames() {
	      this._frames = Array.prototype.slice.call(this.el.children, 0);
	      this._frames.forEach(function (frame, i) {
	        return frame.style.opacity = 0;
	      });
	      this._frameStep = 1 / this._frames.length;
	    }

	    /*
	      Method to create tween and timeline and supply callbacks.
	      
	      @method _createTween
	    */
	  }, {
	    key: '_createTween',
	    value: function _createTween() {
	      var _this = this;

	      this._tween = new _tweenTween2['default']({
	        duration: this._props.duration,
	        delay: this._props.delay,
	        yoyo: this._props.yoyo,
	        repeat: this._props.repeat,
	        easing: this._props.easing,
	        onStart: function onStart() {
	          return _this._props.onStart && _this._props.onStart();
	        },
	        onComplete: function onComplete() {
	          return _this._props.onComplete && _this._props.onComplete();
	        },
	        onUpdate: function onUpdate(p) {
	          return _this._setProgress(p);
	        }
	      });
	      this.timeline = new _tweenTimeline2['default']();this.timeline.add(this._tween);
	      if (!this._props.isRunLess) this._startTween();
	    }

	    /*
	      Method to start tween
	      
	      @method _startTween
	    */
	  }, {
	    key: '_startTween',
	    value: function _startTween() {
	      var _this2 = this;

	      setTimeout(function () {
	        return _this2.timeline.play();
	      }, 1);
	    }

	    /*
	      Method to set progress of the sprite
	      
	      @method _setProgress
	      @param  {Number} Progress in range **[0,1]**
	    */
	  }, {
	    key: '_setProgress',
	    value: function _setProgress(p) {
	      // get the frame number
	      var proc = Math.floor(p / this._frameStep);
	      // react only if frame changes
	      if (this._prevFrame != this._frames[proc]) {
	        // if previous frame isnt current one, hide it
	        if (this._prevFrame) {
	          this._prevFrame.style.opacity = 0;
	        }
	        // if end of animation and isShowEnd flag was specified
	        // then show the last frame else show current frame
	        var currentNum = p === 1 && this._props.isShowEnd ? proc - 1 : proc;
	        // show the current frame
	        if (this._frames[currentNum]) {
	          this._frames[currentNum].style.opacity = 1;
	        }
	        // set previous frame as current
	        this._prevFrame = this._frames[proc];
	      }
	      if (this._props.onUpdate) {
	        this._props.onUpdate(p);
	      }
	    }
	  }]);

	  return Spriter;
	})();

	exports['default'] = Spriter;
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var MotionPath, Timeline, Tween, h, resize,
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  h = __webpack_require__(82);

	  resize = __webpack_require__(111);

	  Tween = __webpack_require__(97)["default"];

	  Timeline = __webpack_require__(105)["default"];

	  MotionPath = (function() {
	    MotionPath.prototype.defaults = {
	      path: null,
	      curvature: {
	        x: '75%',
	        y: '50%'
	      },
	      isCompositeLayer: true,
	      delay: 0,
	      duration: 1000,
	      easing: null,
	      repeat: 0,
	      yoyo: false,
	      onStart: null,
	      onComplete: null,
	      onUpdate: null,
	      offsetX: 0,
	      offsetY: 0,
	      angleOffset: null,
	      pathStart: 0,
	      pathEnd: 1,
	      motionBlur: 0,
	      transformOrigin: null,
	      isAngle: false,
	      isReverse: false,
	      isRunLess: false,
	      isPresetPosition: true
	    };

	    function MotionPath(o) {
	      this.o = o != null ? o : {};
	      this.calcHeight = __bind(this.calcHeight, this);
	      if (this.vars()) {
	        return;
	      }
	      this.createTween();
	      this;
	    }

	    MotionPath.prototype.vars = function() {
	      this.getScaler = h.bind(this.getScaler, this);
	      this.resize = resize;
	      this.props = h.cloneObj(this.defaults);
	      this.extendOptions(this.o);
	      this.isMotionBlurReset = h.isSafari || h.isIE;
	      this.isMotionBlurReset && (this.props.motionBlur = 0);
	      this.history = [h.cloneObj(this.props)];
	      return this.postVars();
	    };

	    MotionPath.prototype.curveToPath = function(o) {
	      var angle, curvature, curvatureX, curvatureY, curvePoint, curveXPoint, dX, dY, endPoint, path, percent, radius, start;
	      path = document.createElementNS(h.NS, 'path');
	      start = o.start;
	      endPoint = {
	        x: start.x + o.shift.x,
	        y: start.x + o.shift.y
	      };
	      curvature = o.curvature;
	      dX = o.shift.x;
	      dY = o.shift.y;
	      radius = Math.sqrt(dX * dX + dY * dY);
	      percent = radius / 100;
	      angle = Math.atan(dY / dX) * (180 / Math.PI) + 90;
	      if (o.shift.x < 0) {
	        angle = angle + 180;
	      }
	      curvatureX = h.parseUnit(curvature.x);
	      curvatureX = curvatureX.unit === '%' ? curvatureX.value * percent : curvatureX.value;
	      curveXPoint = h.getRadialPoint({
	        center: {
	          x: start.x,
	          y: start.y
	        },
	        radius: curvatureX,
	        angle: angle
	      });
	      curvatureY = h.parseUnit(curvature.y);
	      curvatureY = curvatureY.unit === '%' ? curvatureY.value * percent : curvatureY.value;
	      curvePoint = h.getRadialPoint({
	        center: {
	          x: curveXPoint.x,
	          y: curveXPoint.y
	        },
	        radius: curvatureY,
	        angle: angle + 90
	      });
	      path.setAttribute('d', "M" + start.x + "," + start.y + " Q" + curvePoint.x + "," + curvePoint.y + " " + endPoint.x + "," + endPoint.y);
	      return path;
	    };

	    MotionPath.prototype.postVars = function() {
	      this.props.pathStart = h.clamp(this.props.pathStart, 0, 1);
	      this.props.pathEnd = h.clamp(this.props.pathEnd, this.props.pathStart, 1);
	      this.angle = 0;
	      this.speedX = 0;
	      this.speedY = 0;
	      this.blurX = 0;
	      this.blurY = 0;
	      this.prevCoords = {};
	      this.blurAmount = 20;
	      this.props.motionBlur = h.clamp(this.props.motionBlur, 0, 1);
	      this.onUpdate = this.props.onUpdate;
	      if (!this.o.el) {
	        h.error('Missed "el" option. It could be a selector, DOMNode or another module.');
	        return true;
	      }
	      this.el = this.parseEl(this.props.el);
	      this.props.motionBlur > 0 && this.createFilter();
	      this.path = this.getPath();
	      if (!this.path.getAttribute('d')) {
	        h.error('Path has no coordinates to work with, aborting');
	        return true;
	      }
	      this.len = this.path.getTotalLength();
	      this.slicedLen = this.len * (this.props.pathEnd - this.props.pathStart);
	      this.startLen = this.props.pathStart * this.len;
	      this.fill = this.props.fill;
	      if (this.fill != null) {
	        this.container = this.parseEl(this.props.fill.container);
	        this.fillRule = this.props.fill.fillRule || 'all';
	        this.getScaler();
	        if (this.container != null) {
	          this.removeEvent(this.container, 'onresize', this.getScaler);
	          return this.addEvent(this.container, 'onresize', this.getScaler);
	        }
	      }
	    };

	    MotionPath.prototype.addEvent = function(el, type, handler) {
	      return el.addEventListener(type, handler, false);
	    };

	    MotionPath.prototype.removeEvent = function(el, type, handler) {
	      return el.removeEventListener(type, handler, false);
	    };

	    MotionPath.prototype.createFilter = function() {
	      var div, svg;
	      div = document.createElement('div');
	      this.filterID = "filter-" + (h.getUniqID());
	      div.innerHTML = "<svg id=\"svg-" + this.filterID + "\"\n    style=\"visibility:hidden; width:0px; height:0px\">\n  <filter id=\"" + this.filterID + "\" y=\"-20\" x=\"-20\" width=\"40\" height=\"40\">\n    <feOffset\n      id=\"blur-offset\" in=\"SourceGraphic\"\n      dx=\"0\" dy=\"0\" result=\"offset2\"></feOffset>\n    <feGaussianblur\n      id=\"blur\" in=\"offset2\"\n      stdDeviation=\"0,0\" result=\"blur2\"></feGaussianblur>\n    <feMerge>\n      <feMergeNode in=\"SourceGraphic\"></feMergeNode>\n      <feMergeNode in=\"blur2\"></feMergeNode>\n    </feMerge>\n  </filter>\n</svg>";
	      svg = div.querySelector("#svg-" + this.filterID);
	      this.filter = svg.querySelector('#blur');
	      this.filterOffset = svg.querySelector('#blur-offset');
	      document.body.insertBefore(svg, document.body.firstChild);
	      this.el.style['filter'] = "url(#" + this.filterID + ")";
	      return this.el.style["" + h.prefix.css + "filter"] = "url(#" + this.filterID + ")";
	    };

	    MotionPath.prototype.parseEl = function(el) {
	      if (typeof el === 'string') {
	        return document.querySelector(el);
	      }
	      if (el instanceof HTMLElement) {
	        return el;
	      }
	      if (el._setProp != null) {
	        this.isModule = true;
	        return el;
	      }
	    };

	    MotionPath.prototype.getPath = function() {
	      var path;
	      path = h.parsePath(this.props.path);
	      if (path) {
	        return path;
	      }
	      if (this.props.path.x || this.props.path.y) {
	        return this.curveToPath({
	          start: {
	            x: 0,
	            y: 0
	          },
	          shift: {
	            x: this.props.path.x || 0,
	            y: this.props.path.y || 0
	          },
	          curvature: {
	            x: this.props.curvature.x || this.defaults.curvature.x,
	            y: this.props.curvature.y || this.defaults.curvature.y
	          }
	        });
	      }
	    };

	    MotionPath.prototype.getScaler = function() {
	      var end, size, start;
	      this.cSize = {
	        width: this.container.offsetWidth || 0,
	        height: this.container.offsetHeight || 0
	      };
	      start = this.path.getPointAtLength(0);
	      end = this.path.getPointAtLength(this.len);
	      size = {};
	      this.scaler = {};
	      size.width = end.x >= start.x ? end.x - start.x : start.x - end.x;
	      size.height = end.y >= start.y ? end.y - start.y : start.y - end.y;
	      switch (this.fillRule) {
	        case 'all':
	          this.calcWidth(size);
	          return this.calcHeight(size);
	        case 'width':
	          this.calcWidth(size);
	          return this.scaler.y = this.scaler.x;
	        case 'height':
	          this.calcHeight(size);
	          return this.scaler.x = this.scaler.y;
	      }
	    };

	    MotionPath.prototype.calcWidth = function(size) {
	      this.scaler.x = this.cSize.width / size.width;
	      return !isFinite(this.scaler.x) && (this.scaler.x = 1);
	    };

	    MotionPath.prototype.calcHeight = function(size) {
	      this.scaler.y = this.cSize.height / size.height;
	      return !isFinite(this.scaler.y) && (this.scaler.y = 1);
	    };

	    MotionPath.prototype.run = function(o) {
	      var fistItem, key, value;
	      if (o) {
	        fistItem = this.history[0];
	        for (key in o) {
	          value = o[key];
	          if (h.callbacksMap[key] || h.tweenOptionMap[key]) {
	            h.warn("the property \"" + key + "\" property can not be overridden on run yet");
	            delete o[key];
	          } else {
	            this.history[0][key] = value;
	          }
	        }
	        this.tuneOptions(o);
	      }
	      return this.startTween();
	    };

	    MotionPath.prototype.createTween = function() {
	      this.tween = new Tween({
	        duration: this.props.duration,
	        delay: this.props.delay,
	        yoyo: this.props.yoyo,
	        repeat: this.props.repeat,
	        easing: this.props.easing,
	        onStart: (function(_this) {
	          return function() {
	            var _ref;
	            return (_ref = _this.props.onStart) != null ? _ref.apply(_this) : void 0;
	          };
	        })(this),
	        onComplete: (function(_this) {
	          return function() {
	            var _ref;
	            _this.props.motionBlur && _this.setBlur({
	              blur: {
	                x: 0,
	                y: 0
	              },
	              offset: {
	                x: 0,
	                y: 0
	              }
	            });
	            return (_ref = _this.props.onComplete) != null ? _ref.apply(_this) : void 0;
	          };
	        })(this),
	        onUpdate: (function(_this) {
	          return function(p) {
	            return _this.setProgress(p);
	          };
	        })(this),
	        onFirstUpdate: (function(_this) {
	          return function(isForward, isYoyo) {
	            if (!isForward) {
	              return _this.history.length > 1 && _this.tuneOptions(_this.history[0]);
	            }
	          };
	        })(this)
	      });
	      this.timeline = new Timeline;
	      this.timeline.add(this.tween);
	      !this.props.isRunLess && this.startTween();
	      return this.props.isPresetPosition && this.setProgress(0, true);
	    };

	    MotionPath.prototype.startTween = function() {
	      return setTimeout(((function(_this) {
	        return function() {
	          var _ref;
	          return (_ref = _this.timeline) != null ? _ref.play() : void 0;
	        };
	      })(this)), 1);
	    };

	    MotionPath.prototype.setProgress = function(p, isInit) {
	      var len, point, x, y;
	      len = this.startLen + (!this.props.isReverse ? p * this.slicedLen : (1 - p) * this.slicedLen);
	      point = this.path.getPointAtLength(len);
	      x = point.x + this.props.offsetX;
	      y = point.y + this.props.offsetY;
	      this._getCurrentAngle(point, len, p);
	      this._setTransformOrigin(p);
	      this._setTransform(x, y, p, isInit);
	      return this.props.motionBlur && this.makeMotionBlur(x, y);
	    };

	    MotionPath.prototype.setElPosition = function(x, y, p) {
	      var composite, isComposite, rotate, transform;
	      rotate = this.angle !== 0 ? "rotate(" + this.angle + "deg)" : '';
	      isComposite = this.props.isCompositeLayer && h.is3d;
	      composite = isComposite ? 'translateZ(0)' : '';
	      transform = "translate(" + x + "px," + y + "px) " + rotate + " " + composite;
	      return h.setPrefixedStyle(this.el, 'transform', transform);
	    };

	    MotionPath.prototype.setModulePosition = function(x, y) {
	      this.el._setProp({
	        shiftX: "" + x + "px",
	        shiftY: "" + y + "px",
	        angle: this.angle
	      });
	      return this.el._draw();
	    };

	    MotionPath.prototype._getCurrentAngle = function(point, len, p) {
	      var atan, isTransformFunOrigin, prevPoint, x1, x2;
	      isTransformFunOrigin = typeof this.props.transformOrigin === 'function';
	      if (this.props.isAngle || (this.props.angleOffset != null) || isTransformFunOrigin) {
	        prevPoint = this.path.getPointAtLength(len - 1);
	        x1 = point.y - prevPoint.y;
	        x2 = point.x - prevPoint.x;
	        atan = Math.atan(x1 / x2);
	        !isFinite(atan) && (atan = 0);
	        this.angle = atan * h.RAD_TO_DEG;
	        if ((typeof this.props.angleOffset) !== 'function') {
	          return this.angle += this.props.angleOffset || 0;
	        } else {
	          return this.angle = this.props.angleOffset.call(this, this.angle, p);
	        }
	      } else {
	        return this.angle = 0;
	      }
	    };

	    MotionPath.prototype._setTransform = function(x, y, p, isInit) {
	      var transform;
	      if (this.scaler) {
	        x *= this.scaler.x;
	        y *= this.scaler.y;
	      }
	      transform = null;
	      if (!isInit) {
	        transform = typeof this.onUpdate === "function" ? this.onUpdate(p, {
	          x: x,
	          y: y,
	          angle: this.angle
	        }) : void 0;
	      }
	      if (this.isModule) {
	        return this.setModulePosition(x, y);
	      } else {
	        if (typeof transform !== 'string') {
	          return this.setElPosition(x, y, p);
	        } else {
	          return h.setPrefixedStyle(this.el, 'transform', transform);
	        }
	      }
	    };

	    MotionPath.prototype._setTransformOrigin = function(p) {
	      var isTransformFunOrigin, tOrigin;
	      if (this.props.transformOrigin) {
	        isTransformFunOrigin = typeof this.props.transformOrigin === 'function';
	        tOrigin = !isTransformFunOrigin ? this.props.transformOrigin : this.props.transformOrigin(this.angle, p);
	        return h.setPrefixedStyle(this.el, 'transform-origin', tOrigin);
	      }
	    };

	    MotionPath.prototype.makeMotionBlur = function(x, y) {
	      var absoluteAngle, coords, dX, dY, signX, signY, tailAngle;
	      tailAngle = 0;
	      signX = 1;
	      signY = 1;
	      if ((this.prevCoords.x == null) || (this.prevCoords.y == null)) {
	        this.speedX = 0;
	        this.speedY = 0;
	      } else {
	        dX = x - this.prevCoords.x;
	        dY = y - this.prevCoords.y;
	        if (dX > 0) {
	          signX = -1;
	        }
	        if (signX < 0) {
	          signY = -1;
	        }
	        this.speedX = Math.abs(dX);
	        this.speedY = Math.abs(dY);
	        tailAngle = Math.atan(dY / dX) * (180 / Math.PI) + 90;
	      }
	      absoluteAngle = tailAngle - this.angle;
	      coords = this.angToCoords(absoluteAngle);
	      this.blurX = h.clamp((this.speedX / 16) * this.props.motionBlur, 0, 1);
	      this.blurY = h.clamp((this.speedY / 16) * this.props.motionBlur, 0, 1);
	      this.setBlur({
	        blur: {
	          x: 3 * this.blurX * this.blurAmount * Math.abs(coords.x),
	          y: 3 * this.blurY * this.blurAmount * Math.abs(coords.y)
	        },
	        offset: {
	          x: 3 * signX * this.blurX * coords.x * this.blurAmount,
	          y: 3 * signY * this.blurY * coords.y * this.blurAmount
	        }
	      });
	      this.prevCoords.x = x;
	      return this.prevCoords.y = y;
	    };

	    MotionPath.prototype.setBlur = function(o) {
	      if (!this.isMotionBlurReset) {
	        this.filter.setAttribute('stdDeviation', "" + o.blur.x + "," + o.blur.y);
	        this.filterOffset.setAttribute('dx', o.offset.x);
	        return this.filterOffset.setAttribute('dy', o.offset.y);
	      }
	    };

	    MotionPath.prototype.extendDefaults = function(o) {
	      var key, value, _results;
	      _results = [];
	      for (key in o) {
	        value = o[key];
	        _results.push(this[key] = value);
	      }
	      return _results;
	    };

	    MotionPath.prototype.extendOptions = function(o) {
	      var key, value, _results;
	      _results = [];
	      for (key in o) {
	        value = o[key];
	        _results.push(this.props[key] = value);
	      }
	      return _results;
	    };

	    MotionPath.prototype.then = function(o) {
	      var it, key, opts, prevOptions, value;
	      prevOptions = this.history[this.history.length - 1];
	      opts = {};
	      for (key in prevOptions) {
	        value = prevOptions[key];
	        if (!h.callbacksMap[key] && !h.tweenOptionMap[key] || key === 'duration') {
	          if (o[key] == null) {
	            o[key] = value;
	          }
	        } else {
	          if (o[key] == null) {
	            o[key] = void 0;
	          }
	        }
	        if (h.tweenOptionMap[key]) {
	          opts[key] = key !== 'duration' ? o[key] : o[key] != null ? o[key] : prevOptions[key];
	        }
	      }
	      this.history.push(o);
	      it = this;
	      opts.onUpdate = (function(_this) {
	        return function(p) {
	          return _this.setProgress(p);
	        };
	      })(this);
	      opts.onStart = (function(_this) {
	        return function() {
	          var _ref;
	          return (_ref = _this.props.onStart) != null ? _ref.apply(_this) : void 0;
	        };
	      })(this);
	      opts.onComplete = (function(_this) {
	        return function() {
	          var _ref;
	          return (_ref = _this.props.onComplete) != null ? _ref.apply(_this) : void 0;
	        };
	      })(this);
	      opts.onFirstUpdate = function() {
	        return it.tuneOptions(it.history[this.index]);
	      };
	      opts.isChained = !o.delay;
	      this.timeline.append(new Tween(opts));
	      return this;
	    };

	    MotionPath.prototype.tuneOptions = function(o) {
	      this.extendOptions(o);
	      return this.postVars();
	    };

	    MotionPath.prototype.angToCoords = function(angle) {
	      var radAngle, x, y;
	      angle = angle % 360;
	      radAngle = ((angle - 90) * Math.PI) / 180;
	      x = Math.cos(radAngle);
	      y = Math.sin(radAngle);
	      x = x < 0 ? Math.max(x, -0.7) : Math.min(x, .7);
	      y = y < 0 ? Math.max(y, -0.7) : Math.min(y, .7);
	      return {
	        x: x * 1.428571429,
	        y: y * 1.428571429
	      };
	    };

	    return MotionPath;

	  })();

	  module.exports = MotionPath;

	}).call(this);


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	/*!
	  LegoMushroom @legomushroom http://legomushroom.com
	  MIT License 2014
	 */


	/* istanbul ignore next */

	(function() {
	  (function() {
	    var Main;
	    Main = (function() {
	      function Main(o) {
	        this.o = o != null ? o : {};
	        if (window.isAnyResizeEventInited) {
	          return;
	        }
	        this.vars();
	        this.redefineProto();
	      }

	      Main.prototype.vars = function() {
	        window.isAnyResizeEventInited = true;
	        this.allowedProtos = [HTMLDivElement, HTMLFormElement, HTMLLinkElement, HTMLBodyElement, HTMLParagraphElement, HTMLFieldSetElement, HTMLLegendElement, HTMLLabelElement, HTMLButtonElement, HTMLUListElement, HTMLOListElement, HTMLLIElement, HTMLHeadingElement, HTMLQuoteElement, HTMLPreElement, HTMLBRElement, HTMLFontElement, HTMLHRElement, HTMLModElement, HTMLParamElement, HTMLMapElement, HTMLTableElement, HTMLTableCaptionElement, HTMLImageElement, HTMLTableCellElement, HTMLSelectElement, HTMLInputElement, HTMLTextAreaElement, HTMLAnchorElement, HTMLObjectElement, HTMLTableColElement, HTMLTableSectionElement, HTMLTableRowElement];
	        return this.timerElements = {
	          img: 1,
	          textarea: 1,
	          input: 1,
	          embed: 1,
	          object: 1,
	          svg: 1,
	          canvas: 1,
	          tr: 1,
	          tbody: 1,
	          thead: 1,
	          tfoot: 1,
	          a: 1,
	          select: 1,
	          option: 1,
	          optgroup: 1,
	          dl: 1,
	          dt: 1,
	          br: 1,
	          basefont: 1,
	          font: 1,
	          col: 1,
	          iframe: 1
	        };
	      };

	      Main.prototype.redefineProto = function() {
	        var i, it, proto, t;
	        it = this;
	        return t = (function() {
	          var _i, _len, _ref, _results;
	          _ref = this.allowedProtos;
	          _results = [];
	          for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
	            proto = _ref[i];
	            if (proto.prototype == null) {
	              continue;
	            }
	            _results.push((function(proto) {
	              var listener, remover;
	              listener = proto.prototype.addEventListener || proto.prototype.attachEvent;
	              (function(listener) {
	                var wrappedListener;
	                wrappedListener = function() {
	                  var option;
	                  if (this !== window || this !== document) {
	                    option = arguments[0] === 'onresize' && !this.isAnyResizeEventInited;
	                    option && it.handleResize({
	                      args: arguments,
	                      that: this
	                    });
	                  }
	                  return listener.apply(this, arguments);
	                };
	                if (proto.prototype.addEventListener) {
	                  return proto.prototype.addEventListener = wrappedListener;
	                } else if (proto.prototype.attachEvent) {
	                  return proto.prototype.attachEvent = wrappedListener;
	                }
	              })(listener);
	              remover = proto.prototype.removeEventListener || proto.prototype.detachEvent;
	              return (function(remover) {
	                var wrappedRemover;
	                wrappedRemover = function() {
	                  this.isAnyResizeEventInited = false;
	                  this.iframe && this.removeChild(this.iframe);
	                  return remover.apply(this, arguments);
	                };
	                if (proto.prototype.removeEventListener) {
	                  return proto.prototype.removeEventListener = wrappedRemover;
	                } else if (proto.prototype.detachEvent) {
	                  return proto.prototype.detachEvent = wrappedListener;
	                }
	              })(remover);
	            })(proto));
	          }
	          return _results;
	        }).call(this);
	      };

	      Main.prototype.handleResize = function(args) {
	        var computedStyle, el, iframe, isEmpty, isNoPos, isStatic, _ref;
	        el = args.that;
	        if (!this.timerElements[el.tagName.toLowerCase()]) {
	          iframe = document.createElement('iframe');
	          el.appendChild(iframe);
	          iframe.style.width = '100%';
	          iframe.style.height = '100%';
	          iframe.style.position = 'absolute';
	          iframe.style.zIndex = -999;
	          iframe.style.opacity = 0;
	          iframe.style.top = 0;
	          iframe.style.left = 0;
	          computedStyle = window.getComputedStyle ? getComputedStyle(el) : el.currentStyle;
	          isNoPos = el.style.position === '';
	          isStatic = computedStyle.position === 'static' && isNoPos;
	          isEmpty = computedStyle.position === '' && el.style.position === '';
	          if (isStatic || isEmpty) {
	            el.style.position = 'relative';
	          }
	          if ((_ref = iframe.contentWindow) != null) {
	            _ref.onresize = (function(_this) {
	              return function(e) {
	                return _this.dispatchEvent(el);
	              };
	            })(this);
	          }
	          el.iframe = iframe;
	        } else {
	          this.initTimer(el);
	        }
	        return el.isAnyResizeEventInited = true;
	      };

	      Main.prototype.initTimer = function(el) {
	        var height, width;
	        width = 0;
	        height = 0;
	        return this.interval = setInterval((function(_this) {
	          return function() {
	            var newHeight, newWidth;
	            newWidth = el.offsetWidth;
	            newHeight = el.offsetHeight;
	            if (newWidth !== width || newHeight !== height) {
	              _this.dispatchEvent(el);
	              width = newWidth;
	              return height = newHeight;
	            }
	          };
	        })(this), this.o.interval || 62.5);
	      };

	      Main.prototype.dispatchEvent = function(el) {
	        var e;
	        if (document.createEvent) {
	          e = document.createEvent('HTMLEvents');
	          e.initEvent('onresize', false, false);
	          return el.dispatchEvent(e);
	        } else if (document.createEventObject) {
	          e = document.createEventObject();
	          return el.fireEvent('onresize', e);
	        } else {
	          return false;
	        }
	      };

	      Main.prototype.destroy = function() {
	        var i, it, proto, _i, _len, _ref, _results;
	        clearInterval(this.interval);
	        this.interval = null;
	        window.isAnyResizeEventInited = false;
	        it = this;
	        _ref = this.allowedProtos;
	        _results = [];
	        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
	          proto = _ref[i];
	          if (proto.prototype == null) {
	            continue;
	          }
	          _results.push((function(proto) {
	            var listener;
	            listener = proto.prototype.addEventListener || proto.prototype.attachEvent;
	            if (proto.prototype.addEventListener) {
	              proto.prototype.addEventListener = Element.prototype.addEventListener;
	            } else if (proto.prototype.attachEvent) {
	              proto.prototype.attachEvent = Element.prototype.attachEvent;
	            }
	            if (proto.prototype.removeEventListener) {
	              return proto.prototype.removeEventListener = Element.prototype.removeEventListener;
	            } else if (proto.prototype.detachEvent) {
	              return proto.prototype.detachEvent = Element.prototype.detachEvent;
	            }
	          })(proto));
	        }
	        return _results;
	      };

	      return Main;

	    })();
	    if (true) {
	      return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return new Main;
	      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ((typeof module === "object") && (typeof module.exports === "object")) {
	      return module.exports = new Main;
	    } else {
	      if (typeof window !== "undefined" && window !== null) {
	        window.AnyResizeEvent = Main;
	      }
	      return typeof window !== "undefined" && window !== null ? window.anyResizeEvent = new Main : void 0;
	    }
	  })();

	}).call(this);


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(113);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(115)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./handle.postcss.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./handle.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(114)();
	// imports


	// module
	exports.push([module.id, "._handle_lk6b6_5 {\n  margin-left:    -6.5px;\n  margin-left:    -6.5px;\n  margin-left:    -0.40625rem;\n  margin-top:    -6.5px;\n  margin-top:    -6.5px;\n  margin-top:     -0.40625rem;\n  \n  width:    13px;\n  \n  width:    13px;\n  \n  width:          0.8125rem;\n  height:    13px;\n  height:    13px;\n  height:         0.8125rem;\n  \n  cursor:         pointer;\n  -webkit-transform:      translateX(0) translateZ(0);\n          transform:      translateX(0) translateZ(0)\n}\n._handle__inner_lk6b6_1, ._handle__shadow_lk6b6_1 {\n  position:    absolute;\n  left:    0;\n  top:    0;\n  z-index:    1;\n  width:    100%;\n  height:    100%;\n  border-radius:    50%;\n  cursor:    pointer;\n  -webkit-transform:    translateZ(0);\n          transform:    translateZ(0)\n}\n._handle__inner_lk6b6_1 {\n  background:    #FFF\n}\n._handle__shadow_lk6b6_1 {\n  box-shadow:    0.0625rem 0.0625rem 0.125rem black;\n  opacity:    .35;\n  z-index:    0\n}\n._handle_lk6b6_5:hover ._handle__inner_lk6b6_1, ._handle_lk6b6_5:hover ._handle__shadow_lk6b6_1 {\n  -webkit-transform:    scale(1.1) translateZ(0);\n          transform:    scale(1.1) translateZ(0)\n}\n._handle_lk6b6_5:active ._handle__inner_lk6b6_1 {\n  -webkit-transform:    scale(1.2) translateZ(0);\n          transform:    scale(1.2) translateZ(0)\n  /*box-shadow:     calc( $PX ) calc( $PX ) calc( 1*$PX ) rgba(0,0,0,.35);*/\n}\n._handle_lk6b6_5:active ._handle__shadow_lk6b6_1 {\n  opacity:    .85;\n  -webkit-transform:    scale(1) translateZ(0);\n          transform:    scale(1) translateZ(0)\n}\n\n", ""]);

	// exports


/***/ },
/* 114 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = {
		"handle": "_handle_lk6b6_5",
		"handle__inner": "_handle__inner_lk6b6_1",
		"handle__shadow": "_handle__shadow_lk6b6_1"
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(4);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(69);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _handle = __webpack_require__(79);

	var _handle2 = _interopRequireDefault(_handle);

	var _hammerjs = __webpack_require__(80);

	var _hammerjs2 = _interopRequireDefault(_hammerjs);

	var _moJs = __webpack_require__(81);

	var _moJs2 = _interopRequireDefault(_moJs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(118);
	var CLASSES = __webpack_require__(120);

	var addTouchStartEvent = function addTouchStartEvent(el, fn) {
	  if (window.navigator.msPointerEnabled) {
	    el.addEventListener('MSPointerDown', fn);
	  } else if (window.ontouchstart !== undefined) {
	    el.addEventListener('touchstart', fn);
	    el.addEventListener('mousedown', fn);
	  } else {
	    el.addEventListener('mousedown', fn);
	  }
	};

	var Track = function (_Handle) {
	  (0, _inherits3.default)(Track, _Handle);

	  function Track() {
	    (0, _classCallCheck3.default)(this, Track);
	    return (0, _possibleConstructorReturn3.default)(this, _Handle.apply(this, arguments));
	  }

	  /*
	    Method to declare _defaults.
	    @private
	    @overrides @ Module
	  */

	  Track.prototype._declareDefaults = function _declareDefaults() {
	    this._defaults = {
	      className: '',
	      parent: document.body,
	      onProgress: null,
	      isTrack: true,
	      isInversed: false
	    };
	  };
	  /*
	    Method to set handle shift.
	    @private
	    @overrides @ Handle
	    @param {Number} Shift in `px`.
	    @param {Boolean} If should invoke onProgress callback.
	    @returns {Number}.
	  */


	  Track.prototype._setShift = function _setShift(shift) {
	    var isCallback = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    return _Handle.prototype._setShift.call(this, shift, isCallback);
	  };
	  /*
	    Method to apply shift to the DOMElement.
	    @private
	    @overrides @ Handle.
	    @param {Number} Shift in pixels.
	  */


	  Track.prototype._applyShift = function _applyShift(shift) {
	    if (this._props.isInversed) {
	      shift = this._maxWidth - shift;
	    }
	    var transform = 'scaleX( ' + shift + ' ) translateZ(0)';
	    this.trackProgressEl.style.transform = transform;
	  };
	  /*
	    Method to add DOM elements on render.
	    @private
	  */


	  Track.prototype._addElements = function _addElements() {
	    var p = this._props,
	        trackP = document.createElement('div');

	    // main element
	    this.el = document.createElement('div');
	    var classList = this.el.classList;
	    classList.add('' + CLASSES.track);
	    classList.add('' + this._props.className);

	    // progress track
	    trackP.classList.add('' + CLASSES['track__track-progress']);
	    this.trackProgressEl = trackP;
	    this.el.appendChild(trackP);

	    // track
	    if (p.isTrack) {
	      var track = document.createElement('div');
	      track.classList.add('' + CLASSES.track__track);
	      this.el.appendChild(track);

	      // temporary
	    } else if (!p.isInversed) {
	        trackP.style.background = 'cyan';
	      }
	    if (p.isInversed) {
	      classList.add('' + CLASSES['is-inversed']);
	      trackP.style.background = 'deeppink';
	    }
	  };

	  Track.prototype._hammerTime = function _hammerTime() {
	    var _this2 = this;

	    _Handle.prototype._hammerTime.call(this);
	    addTouchStartEvent(this.el, function (e) {
	      var x = e.layerX;
	      x = _this2._props.isInversed && e.layerX < 0 ? _this2._maxWidth + x : x;
	      _this2.setProgress(_this2._shiftToProgress(x));
	    });
	  };

	  return Track;
	}(_handle2.default);

	exports.default = Track;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(119);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(115)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./track.postcss.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./track.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(114)();
	// imports


	// module
	exports.push([module.id, "._track_4qrqq_5 {\n  position:           relative;\n  /*width:              100%;*/\n  height:             100%\n  /*overflow:           hidden;*/\n  /*outline:            1px solid cyan;*/\n\n}\n._track__track_4qrqq_1 {\n  position:           absolute;\n  top:           50%;\n  left:           0;\n  width:           100%;\n  height:           1px;\n  height:           1px;\n  height:           0.0625rem;\n  background:           #FFF;\n  box-shadow:           0.0625rem 0.0625rem 0.0625rem rgba(0,0,0,.5)\n\n}\n._track__track_4qrqq_1:after {\n  content:           '';\n  position:           absolute;\n  left:           0;\n  top:           -20px;\n  top:           -20px;\n  top:           -1.25rem;\n  width:           100%;\n  height:           40px;\n  height:           40px;\n  height:           2.5rem;\n  cursor:           pointer\n  /*background-color: yellow;*/\n\n}\n._track__track-progress_4qrqq_1 {\n  position:           absolute;\n  left:           0;\n  top:           50%;\n  margin-top:           -1px;\n  margin-top:           -1px;\n  margin-top:           -0.0625rem;\n  height:           3px;\n  height:           3px;\n  height:           0.1875rem;\n  width:           1px;\n  background:           #FF512F;\n  z-index:           1;\n  -webkit-transform-origin:           left center;\n          transform-origin:           left center\n\n}\n._track__track-progress_4qrqq_1:after {\n  content:           '';\n  position:           absolute;\n  left:           0;\n  top:           -20px;\n  top:           -20px;\n  top:           -1.25rem;\n  width:           100%;\n  height:           40px;\n  height:           40px;\n  height:           2.5rem;\n  cursor:           pointer\n  /*background-color: yellow;*/\n\n}\n._track_4qrqq_5._is-inversed_4qrqq_57 {\n  left:           auto;\n  right:           0\n\n}\n._track_4qrqq_5._is-inversed_4qrqq_57 ._track__track-progress_4qrqq_1 {\n  -webkit-transform-origin:           right center;\n          transform-origin:           right center\n\n}\n\n", ""]);

	// exports


/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = {
		"track": "_track_4qrqq_5",
		"track__track": "_track__track_4qrqq_1",
		"track__track-progress": "_track__track-progress_4qrqq_1",
		"is-inversed": "_is-inversed_4qrqq_57"
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(122);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(115)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./slider.postcss.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./slider.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(114)();
	// imports


	// module
	exports.push([module.id, "/*@import './handle.postcss.css';*/\n._slider_1w61l_6 {\n  position:           relative;\n  width:              100%;\n  height:           30px;\n  height:           30px;\n  height:             1.875rem\n}\n._slider_1w61l_6 ._handle_1w61l_12 {\n  position:           absolute;\n  left:           0;\n  top:           50%;\n  z-index:           3\n}\n._slider_1w61l_6 ._track_1w61l_18 {\n  z-index:           2\n}\n\n", ""]);

	// exports


/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = {
		"slider": "_slider_1w61l_6",
		"handle": "_handle_1w61l_12",
		"track": "_track_1w61l_18"
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(125);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(115)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./player-slider.postcss.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./player-slider.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(114)();
	// imports


	// module
	exports.push([module.id, "/*@import './handle.postcss.css';*/\n._player-slider_fh7me_6 {\n\n}\n._player-slider_fh7me_6 > div {\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 2\n}\n._player-slider_fh7me_6 ._slider_fh7me_15 {\n    z-index: 1\n}\n\n", ""]);

	// exports


/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = {
		"player-slider": "_player-slider_fh7me_6",
		"slider": "_slider_fh7me_15"
	};

/***/ },
/* 127 */
/***/ function(module, exports) {

	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 2014-07-23
	 *
	 * By Eli Grey, http://eligrey.com
	 * Public Domain.
	 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	 */

	/*global self, document, DOMException */

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

	/* Copied from MDN:
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
	 */

	if ("document" in window.self) {

	  // Full polyfill for browsers with no classList support
	  if (!("classList" in document.createElement("_"))) {

	  (function (view) {

	    "use strict";

	    if (!('Element' in view)) return;

	    var
	        classListProp = "classList"
	      , protoProp = "prototype"
	      , elemCtrProto = view.Element[protoProp]
	      , objCtr = Object
	      , strTrim = String[protoProp].trim || function () {
	        return this.replace(/^\s+|\s+$/g, "");
	      }
	      , arrIndexOf = Array[protoProp].indexOf || function (item) {
	        var
	            i = 0
	          , len = this.length
	        ;
	        for (; i < len; i++) {
	          if (i in this && this[i] === item) {
	            return i;
	          }
	        }
	        return -1;
	      }
	      // Vendors: please allow content code to instantiate DOMExceptions
	      , DOMEx = function (type, message) {
	        this.name = type;
	        this.code = DOMException[type];
	        this.message = message;
	      }
	      , checkTokenAndGetIndex = function (classList, token) {
	        if (token === "") {
	          throw new DOMEx(
	              "SYNTAX_ERR"
	            , "An invalid or illegal string was specified"
	          );
	        }
	        if (/\s/.test(token)) {
	          throw new DOMEx(
	              "INVALID_CHARACTER_ERR"
	            , "String contains an invalid character"
	          );
	        }
	        return arrIndexOf.call(classList, token);
	      }
	      , ClassList = function (elem) {
	        var
	            trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
	          , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
	          , i = 0
	          , len = classes.length
	        ;
	        for (; i < len; i++) {
	          this.push(classes[i]);
	        }
	        this._updateClassName = function () {
	          elem.setAttribute("class", this.toString());
	        };
	      }
	      , classListProto = ClassList[protoProp] = []
	      , classListGetter = function () {
	        return new ClassList(this);
	      }
	    ;
	    // Most DOMException implementations don't allow calling DOMException's toString()
	    // on non-DOMExceptions. Error's toString() is sufficient here.
	    DOMEx[protoProp] = Error[protoProp];
	    classListProto.item = function (i) {
	      return this[i] || null;
	    };
	    classListProto.contains = function (token) {
	      token += "";
	      return checkTokenAndGetIndex(this, token) !== -1;
	    };
	    classListProto.add = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	      ;
	      do {
	        token = tokens[i] + "";
	        if (checkTokenAndGetIndex(this, token) === -1) {
	          this.push(token);
	          updated = true;
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.remove = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	        , index
	      ;
	      do {
	        token = tokens[i] + "";
	        index = checkTokenAndGetIndex(this, token);
	        while (index !== -1) {
	          this.splice(index, 1);
	          updated = true;
	          index = checkTokenAndGetIndex(this, token);
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.toggle = function (token, force) {
	      token += "";

	      var
	          result = this.contains(token)
	        , method = result ?
	          force !== true && "remove"
	        :
	          force !== false && "add"
	      ;

	      if (method) {
	        this[method](token);
	      }

	      if (force === true || force === false) {
	        return force;
	      } else {
	        return !result;
	      }
	    };
	    classListProto.toString = function () {
	      return this.join(" ");
	    };

	    if (objCtr.defineProperty) {
	      var classListPropDesc = {
	          get: classListGetter
	        , enumerable: true
	        , configurable: true
	      };
	      try {
	        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	      } catch (ex) { // IE 8 doesn't support enumerable:true
	        if (ex.number === -0x7FF5EC54) {
	          classListPropDesc.enumerable = false;
	          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	        }
	      }
	    } else if (objCtr[protoProp].__defineGetter__) {
	      elemCtrProto.__defineGetter__(classListProp, classListGetter);
	    }

	    }(window.self));

	    } else {
	    // There is full or partial native classList support, so just check if we need
	    // to normalize the add/remove and toggle APIs.

	    (function () {
	      "use strict";

	      var testElement = document.createElement("_");

	      testElement.classList.add("c1", "c2");

	      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
	      // classList.remove exist but support only one argument at a time.
	      if (!testElement.classList.contains("c2")) {
	        var createMethod = function(method) {
	          var original = DOMTokenList.prototype[method];

	          DOMTokenList.prototype[method] = function(token) {
	            var i, len = arguments.length;

	            for (i = 0; i < len; i++) {
	              token = arguments[i];
	              original.call(this, token);
	            }
	          };
	        };
	        createMethod('add');
	        createMethod('remove');
	      }

	      testElement.classList.toggle("c3", false);

	      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	      // support the second argument.
	      if (testElement.classList.contains("c3")) {
	        var _toggle = DOMTokenList.prototype.toggle;

	        DOMTokenList.prototype.toggle = function(token, force) {
	          if (1 in arguments && !this.contains(token) === !force) {
	            return force;
	          } else {
	            return _toggle.call(this, token);
	          }
	        };

	      }

	      testElement = null;
	    }());
	  }
	}


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(129);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(115)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./main.postcss.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./main.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(114)();
	// imports


	// module
	exports.push([module.id, "._icon_1qwrf_1 {\n  width: 32px;\n  width: 32px;\n  width: 2rem;\n  height: 32px;\n  height: 32px;\n  height: 2rem;\n  display: block;\n  position: relative;\n}\n._icon_1qwrf_1 svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  fill: inherit;\n  stroke: inherit;\n  width: 100%;\n  height: 100%;\n}\n._mojs-player_1qwrf_1 {\n  background-color: rgba(58, 8, 57, 0.85);\n  height: 40px;\n  height: 40px;\n  height: 2.5rem;\n  width: 100px;\n  width: 100px;\n  width: 6.25rem;\n  display: inline-block;\n  position: fixed;\n  bottom: 15px;\n  bottom: 15px;\n  bottom: 0.9375rem;\n  left: 50%;\n  -webkit-transform: translateX( -50% );\n          transform: translateX( -50% );\n  border-radius: 0.1875rem;\n  box-shadow: 0.0625rem 0.0625rem 0.0625rem rgba(0,0,0,.25);\n}\n/*@import 'blocks/timeline-slider.postcss.css'*/\n\n:root {\n  font-size: 16px;\n  line-height: 1.7;\n}\n\nbody {\n  background-color: #f1f1f1;\n  font-size: 12px;\n  font-size: 12px;\n  font-size: 0.75rem;\n  padding-top: 50px;\n  /*background-color: #333;*/\n}\n\n", ""]);

	// exports


/***/ }
/******/ ]);