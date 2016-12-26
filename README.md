# mojs-player

<img src="https://github.com/legomushroom/mojs-player/blob/master/mockups/mojs-player@x4.png?raw=true" alt="mojs-player" />

Player controls for [mojs](mojs.io). Intended to help you to craft `mojs` animation sequences. To be clear, this player is not needed to play `mojs` animations. It is just a debug tool that gives you the ability to:
 - control your sequences with `GUI` while working on them
 - it saves the current progress of your animation thus you don't loose the `focus`
 - it gives you `bounds` to constrain `focus point` of your animation
 - it gives you the control over the speed of animation
 - it gives you the ability to seek animations freely
 - it saves player's state and settings thus they not get lost when page reloaded

## Installation

The `MojsPlayer` depends on `mojs >= 0.225.2` so make sure you link it first.

[CDN](https://www.jsdelivr.com/):

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

## Usage

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
  className:    '',         // class name to add to main HTMLElement
  isSaveState:  true,       // determines if should preserve state on page reload
  isPlaying:    false,      // playback state
  progress:     0,          // initial progress
  isRepeat:     false,      // determines if it should repeat after completion
  isBounds:     false,      // determines if it should have bounds
  leftBound:    0,          // left bound position  [0...1]
  rightBound:   1,          // right bound position [0...1]
  isSpeed:      false,      // determines if speed control should be open
  speed:        1,          // `speed` value
  isHidden:     false,      // determines if the player should be hidden
  precision:    0.1,        // step size for player handle - for instance, after page reload - player should restore timeline progress - the whole timeline will be updated incrementally with the `precision` step size until the progress will be met.
  name:         'mojs-player' // name for the player - mainly used for localstorage identifier, use to distuguish between multiple local players
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

Please make sure you are on the `dev` branch before making changes.

## License

(The MIT License)

Copyright (c) Oleg Solomka [@LegoMushroom](https://twitter.com/legomushroom) [legomushroom@gmail.com](mailto:legomushroom@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
