import { test } from 'node:test';
import * as assert from 'node:assert/strict';
import { add } from './library.js';

test('add() must work for numbers and strings', (t) => {
  assert.equal(
    add(1, 2),
    3
  );
  assert.equal(
    add('yes', 'no'),
    'yesno'
  );
});
