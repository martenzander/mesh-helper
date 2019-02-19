<p align="center">
    <img align="center" src="http://exchange.weareslim.de/assets/images/svg/logo_blue.svg" width="100" height="auto" alt="slim Logo" class="js-lazy-loaded">
    <h3 align="center">
        Grid Helper
    </h3>
    <!-- <p align="center">
        Subline
    </p> -->
</p>

## Installation

```
npm i git+ssh://git@gitlab.com/SlimMarten/grid-helper.git#master
```

## Usage


```js
import * as GridHelper from 'grid-helper';

...


const gridHelper = new GridHelper.Visualizer( parameters : {} );
```

## Parameters

#### target `type: String`

Your helper's base selector. This class is used to nest helper-relevant styles and toggle the visibility.

```js
const gridHelper = new GridHelper.Visualizer({
  target: "",             // default ".js-grid-helper"
});
```
#### containerClass, voidClass, columnClass `type: String`

Selector of your grid's container, void or columns. These selectors are used to compile helper-relevant styles.

```js
const gridHelper = new GridHelper.Visualizer({
  containerClass: "",     // default ".mesh-container"
  voidClass: "",          // default ".mesh-void"
  columnClass: "",        // default ".mesh-column"
});
```

#### isHidden `type: Boolean`

Toggles the helper's default visibility.

```js
const gridHelper = new GridHelper.Visualizer({
  isHidden: false,        // default true
});
```

#### trigger `type: integer`

Keycode to toggle the helper's visibility.

```js
const gridHelper = new GridHelper.Visualizer({
  trigger: 72,            // default "h"
});
```
