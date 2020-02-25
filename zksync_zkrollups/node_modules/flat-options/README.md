
# flat-options

[![Build Status](https://travis-ci.org/vitalets/flat-options.svg?branch=master)](https://travis-ci.org/vitalets/flat-options)
[![npm](https://img.shields.io/npm/v/flat-options.svg)](https://www.npmjs.com/package/flat-options)
[![license](https://img.shields.io/npm/l/flat-options.svg)](https://www.npmjs.com/package/flat-options)

> One-level options with default values and validation

Utility function to merge simple one-level options with default values and perform validation.

## Comparison to `Object.assign`
Benefits over `Object.assign` are:

* exclude of `undefined` values (useful for conditional options):
  ```js
  const defaults = {foo: 'bar'};
  const options = {foo: undefined};

  Object.assign({}, defaults, options); // -> {foo: undefined}
  // vs
  flatOptions(options, defaults); // -> {foo: 'bar'}
  ```
  
* validation of options keys:
  ```js
  const defaults = {foo: 'bar'};
  const options = {unknown: 'baz'};

  Object.assign({}, defaults, options); // -> {foo: 'bar', unknown: 'baz'}
  // vs
  flatOptions(options, defaults); // -> throws error "Unknown option"!
  ```
  
## Comparison to other packages
Benefits over existing [defaults](https://www.npmjs.com/package/defaults),
[lodash.defaults](https://www.npmjs.com/package/lodash.defaults) and 
[object.defaults](https://www.npmjs.com/package/object.defaults) are:

* auto-validation of options keys
* zero dependencies

> Note that this package is only for **one-level** options, for nested ones please use alternative packages

## Installation
```bash
npm install --save flat-options
```

## Usage
```js
import flatOptions from 'flat-options';

const defaults = {
  a: 1,
  b: false
};

class Foo {
  constructor(options) {
    this._options = flatOptions(options, defaults);
  }
}

const foo = new Foo({a: 2}); // foo._options will be {a: 2, b: false} 
```

## License
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
