import * as assert from 'node:assert/strict';
import { test } from 'node:test';
import { insertVars } from './string-tools.js';

test('insertVars()', () => {
  assert.equal(
    insertVars({ user: 'Robin' }, 'Hello {{user}}!'),
    'Hello Robin!'
  );
  assert.equal(
    insertVars({}, 'Hello {{user}}!'),
    'Hello {{user}}!'
  );
});
