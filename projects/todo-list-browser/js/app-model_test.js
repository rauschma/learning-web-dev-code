import { signal } from '@preact/signals';
import * as assert from 'node:assert/strict';
import { test } from 'node:test';
import { addTodo, deleteTodo, updateChecked } from './app-model.js';

function createTestModel() {
  return signal({
    todos: [
      { text: 'Groceries', checked: true },
      { text: 'Dishes', checked: false },
    ],
  });
}

test('addTodo()', () => {
  const model = createTestModel();
  addTodo(model, 'Clothes');
  assert.deepEqual(
    model.value,
    {
      todos: [
        { text: 'Groceries', checked: true },
        { text: 'Dishes', checked: false },
        { text: 'Clothes', checked: false },
      ],
    }
  );
});

test('deleteTodo()', () => {
  const model = createTestModel();
  deleteTodo(model, 0);
  assert.deepEqual(
    model.value,
    {
      todos: [
        { text: 'Dishes', checked: false },
      ],
    }
  );
});

test('addTodo()', () => {
  const model = createTestModel();
  updateChecked(model, 1, true);
  assert.deepEqual(
    model.value,
    {
      todos: [
        { text: 'Groceries', checked: true },
        { text: 'Dishes', checked: true },
      ],
    }
  );
});
