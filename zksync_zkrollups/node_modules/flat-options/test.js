
/* global it */

const assert = require('assert');
const flatOptions = process.env.TEST_LIB ? require('./lib') : require('./index');

it('should be a function', function () {
  assert.equal(typeof flatOptions, 'function');
});

it('should return options without defaults', function () {
  const options = flatOptions({a: 1, b: 2});
  assert.deepEqual(options, {a: 1, b: 2});
});

it('should merge default values', function () {
  const options = flatOptions({a: 1}, {a: 2, c: 3});
  assert.deepEqual(options, {a: 1, c: 3});
});

it('should merge default values (with null proto)', function () {
  const defaults = Object.assign(Object.create(null), {a: 2, c: 3});
  const options = flatOptions({a: 1}, defaults);
  assert.deepEqual(options, {a: 1, c: 3});
});

it('should use default value for undefined', function () {
  const options = flatOptions({a: undefined}, {a: 2});
  assert.deepEqual(options, {a: 2});
});

it('should keep value for null/false/""', function () {
  const options = flatOptions({a: null, b: false, c: ''}, {a: 1, b: 2, c: 3});
  assert.deepEqual(options, {a: null, b: false, c: ''});
});

it('should keep value for NaN', function () {
  const options = flatOptions({a: NaN}, {a: 1});
  assert.ok(Number.isNaN(options.a));
});

it('should not change defaults', function () {
  const defaults = {a: 1, b: undefined};
  flatOptions({a: 2}, defaults);
  assert.deepEqual(defaults, {a: 1, b: undefined});
});

it('should not change original options', function () {
  const options = {a: 1, b: undefined};
  flatOptions(options, {a: 2, b: 1});
  assert.deepEqual(options, {a: 1, b: undefined});
});

it('should throw for unknown option', function () {
  const fn = () => flatOptions({a: 1, b: 2}, {a: 1});
  assert.throws(fn, /Unknown option: b/);
});
