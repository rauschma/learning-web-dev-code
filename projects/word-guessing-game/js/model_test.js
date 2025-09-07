import { test } from 'node:test';
import * as assert from 'node:assert/strict';
import { inputLettersToWordWithBlanks, isWordComplete, countFailures } from './model.js';

test('inputLettersToWordWithBlanks()', () => {
  const wordLetters = ['d', 'o', 'g'];
  assert.equal(
    inputLettersToWordWithBlanks({
      wordLetters,
      inputLetters: ['a', 'e', 'i', 'o'],
    }),
    '_ o _'
  );
  assert.equal(
    inputLettersToWordWithBlanks({
      wordLetters,
      inputLetters: ['d', 'g', 'o'],
    }),
    'd o g'
  );
  assert.equal(
    inputLettersToWordWithBlanks({
      wordLetters,
      inputLetters: ['a', 'e', 'i', 'u'],
    }),
    '_ _ _'
  );
});

test('isWordComplete()', () => {
  const wordLetters = ['d', 'o', 'g'];
  assert.equal(
    isWordComplete({
      wordLetters,
      inputLetters: ['a', 'e', 'i', 'o'],
    }),
    false
  );
  assert.equal(
    isWordComplete({
      wordLetters,
      inputLetters: ['d', 'g', 'o'],
    }),
    true
  );
  assert.equal(
    isWordComplete({
      wordLetters,
      inputLetters: ['a', 'e', 'i', 'u'],
    }),
    false
  );
});

test('countFailures()', () => {
  const wordLetters = ['d', 'o', 'g'];
  assert.equal(
    countFailures({
      wordLetters,
      inputLetters: ['a', 'e', 'i', 'o'],
    }),
    3
  );
  assert.equal(
    countFailures({
      wordLetters,
      inputLetters: ['d', 'g', 'o'],
    }),
    0
  );
  assert.equal(
    countFailures({
      wordLetters,
      inputLetters: ['a', 'e', 'i', 'u'],
    }),
    4
  );
});
