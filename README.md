<p align="center">
    <img align="center" src="http://exchange.weareslim.de/assets/images/svg/logo_blue.svg" width="100" height="auto" alt="slim Logo" class="js-lazy-loaded">
    <h3 align="center">
        Grid Helper
    </h3>
    <p align="center">
        utillity to toggle visual representations of your grid
    </p>
</p>

## Installation

```
npm i git+ssh://git@gitlab.com/slimInteractive/grid-helper.git#master
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

## Example

#### HTML
The grid-helper does **not** create the necessary HTML for you.

```HTML
<div class="js-grid-helper">
  <div class="container">
    <div class="row">
      <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
      <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
      <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
      <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
      <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
      <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
      <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
      <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
      <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
      <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
      <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
      <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
    </div>
  </div>
</div>
```

#### Javascript
```JS
import * as GridHelper from 'grid-helper';

...

const gridHelper = new GridHelper.Visualizer({
  isHidden: false,
  trigger: 72,
  target: 'js-grid-helper',
  containerClass: '.container',
  voidClass: '.row',
  columnClass: '.col'
});
```
