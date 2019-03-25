<p align="center">
    <img align="center" src="https://exchange.weareslim.de/assets/images/svg/logo_blue.svg" width="100" height="auto" alt="slim Logo" class="js-lazy-loaded">
    <h3 align="center">
        Mesh Helper
    </h3>
    <p align="center">
        Utility to toggle visual representations of your grid
    </p>
</p>

## Installation

```
npm i mesh-helper
```

## Usage


```js
import MeshHelper from 'mesh-helper';

...

const meshHelper = new MeshHelper( parameters : {} );
```

## Parameters

#### target `type: String`

Your helper's base selector. This class is used to nest helper-relevant styles and toggle the visibility.

```js
const meshHelper = new MeshHelper({
  mainClass: "",                    // default "js-grid-helper"
});
```

#### containerClass, voidClass, columnClass `type: String`

Selector of your grid's container, void or columns. These selectors are used to compile helper-relevant styles.

```js
const meshHelper = new MeshHelper({
  containerClass: "",               // default "mesh-container"
  voidClass: "",                    // default "mesh-void"
  columnClass: "",                  // default "mesh-column"
});
```

#### isHidden `type: Boolean`

Sets the helper's initial visibility.

```js
const meshHelper = new MeshHelper({
  isHidden: false,                  // default true
});
```

#### useCookie `type: Boolean`

Remembers the visibility state in a session cookie

```js
const meshHelper = new MeshHelper({
  useCookie: false,                 // default true
});
```

#### generateDOM `type: Boolean`

Generated the DOM for you

```js
const meshHelper = new MeshHelper({
  generateDOM: false,               // default true
});
```

#### columns `type: Int`

Set the number of columns.<br>
>Only required when DOM gets generated.

```js
const meshHelper = new MeshHelper({
  generateDOM: false,               // default true
});
```

#### viewports `type: Array[String]`

Define the viewports your grid use.<br>
>Only required when DOM gets generated.

```js
const meshHelper = new MeshHelper({
  viewports: ["sm", "md", "lg"],    // default ["sm", "md", "lg", "xl"]
});
```

#### columnColor, gutterColor `type: String`

Sets the colors for gutter and column

```js
const meshHelper = new MeshHelper({
  columnColor:"#ff000022",          // default "#24a2d824"
  gutterColor:"#ff00ff22",          // default "#24a2d824"
});
```

#### key `type: String`

Key char to toggle the helper's visibility.

```js
const meshHelper = new MeshHelper({
  key: 'x',                         // default "h"
});
```

## Example

#### HTML Structure
In case you don't want to let the script generate the DOM for you.

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
import meshHelper from 'mesh-helper';

...

const meshHelper = new MeshHelper({
  isHidden: false,
  trigger: 'b',
  target: 'js-grid-helper',
  containerClass: '.container',
  voidClass: '.row',
  columnClass: '.col'
});
```
