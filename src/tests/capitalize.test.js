/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { strict as assert } from 'node:assert';
import capitalize from '../capitalize.js';

assert.equal(capitalize(''), '');
assert.equal(capitalize('hello'), 'Hello');
console.log('Все тесты пройдены!');
