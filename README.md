# mojs-player

Player controls for [mojs](mojs.io). Intended to help you to craft `mojs` animation sequences.


## Installation

The `MojsPlayer` depends on `mojs^0.225.2` so make sure you link it first.

[CDN]():

```
<script src="//cdn.jsdelivr.net/mojs-player/latest/mojs-player.min.js"></script>
```

[NPM](https://www.npmjs.com/):

```
[sudo] npm install mojs-player
```

[Bower](http://bower.io/):

```
bower install mojs-player
```

Import `MojsPlayer` constructor to your code (depends on your environment) :

```javascript
const MojsPlayer = require('mojs-player').default;
// or
import MojsPlayer from 'mojs-player';
```

If you installed it with script link - you should have `MojsPlayer` global.


## API

Construct `MojsPlayer` and pass your main `Tween/Timeline` as the `add` option:

```javascript
// const mainTimeline = new mojs.Timeline({});
// .. some code regarding timeline ..
const mojsPlayer = new MojsPlayer({ add: mainTimeline });
```

The `add` option is the only required option to launch. Player's controls should appear at the bottom of the page.

You can also set other player initial state:

```javascript
// ..
const mojsPlayer = new MojsPlayer({
  add:      mainTimeline,
  // options
  className:    '',     // class name to add to main HTMLElement
  isSaveState:  true,   // determines if should preserve state on page reload
  isPlaying:    false,  // playback state
  progress:     0,      // initial progress
  isRepeat:     false,  // determines if it should repeat after completion
  isBounds:     false,  // determines if it should have bounds
  leftBound:    0,      // left bound position  [0...1]
  rightBound:   1,      // right bound position [0...1]
  isSpeed:      false,  // determines if speed control should be open
  speed:        1,      // `speed` value
  isHidden:     false   // determines if the player should be hidden
});
```


## Shortcuts

- `alt + p`  - toggle `play`/`pause` playback state
- `alt + - `  - decrease progress by `1/100`
- `alt + +` - increase progress by `1/100`
- `shift + alt + -` - decrease progress by `1/10`
- `shift + alt + +` - increase progress by `1/10`
- `alt + s` - `stop` playback
- `alt + r` - toggle `repeat` state
- `alt + b` - toggle `bounds` state
- `alt + h` - toggle `show`/`hide` player state
- `alt + q` - reset `speed` to `1x`
- `alt + 2` - decrease `speed` by `1/50`
- `alt + 3` - increase `speed` by `1/50`
- `shift + alt + 2` - decrease `speed` by `1/10`
- `shift + alt + 3` - increase `speed` by `1/10`


## Development

Install [webpack](https://webpack.github.io/) globally:

```tiddlywiki
[sudo] npm install webpack -g
```

Install dependencies with [npm](https://www.npmjs.com/):

```
[sudo] npm install
```

Run [webpack](https://webpack.github.io/):

```
webpack
```

Please make sure yuo are on the `dev` branch before making changes.

## License

(The MIT License)

Copyright (c) Oleg Solomka [@LegoMushroom](https://twitter.com/legomushroom) [legomushroom@gmail.com](mailto:legomushroom@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

