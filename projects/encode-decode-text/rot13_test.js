import test from 'node:test';
import assert from 'node:assert/strict';
import { rot13, rot13Char } from './rot13.js';

test('rot13Char()', () => {
  assert.equal(
    rot13Char('a', 'a'), 'n'
  );
  assert.equal(
    rot13Char('a', 'n'), 'a'
  );
  assert.equal(
    rot13Char('A', 'A'), 'N'
  );
  assert.equal(
    rot13Char('A', 'N'), 'A'
  );
});

test('rot13(): once', () => {
  assert.equal(
    rot13('This is a secret!'),
    'Guvf vf n frperg!'
  );
  assert.equal(
    rot13('Guvf vf n frperg!'),
    'This is a secret!'
  );
});

test('rot13(): twice', () => {
  const rot13Twice = (str) => {
    assert.equal(
      rot13(rot13(str)),
      str
    );
  };
  rot13Twice('');
  rot13Twice('one space');
  rot13Twice('UPPERCASE lowercase');
  rot13Twice('Non-letters: 1 ! * /');
});
