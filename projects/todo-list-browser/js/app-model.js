import { signal } from '@preact/signals';

//========== Private helpers ==========

const createCoreModel = () => ({
  todos: [],
});

const deepCopyTodos = (todos) => {
  return todos.map(
    todo => ({ ...todo })
  );
};

//========== Public functionality ==========

export const createAppModel = () => signal(
  createCoreModel()
);

export const addTodo = (appModel, text) => {
  const oldCoreModel = appModel.value;
  const newCoreModel = {
    todos: [
      ...deepCopyTodos(oldCoreModel.todos),
      { text, checked: false },
    ],
  };
  appModel.value = newCoreModel;
};

export const deleteTodo = (appModel, index) => {
  const oldCoreModel = appModel.value;
  const newCoreModel = createCoreModel();
  for (const [i, todo] of oldCoreModel.todos.entries()) {
    if (i !== index) {
      newCoreModel.todos.push(
        { ...todo } // copy
      );
    }
  }
  appModel.value = newCoreModel;
};

export const updateChecked = (appModel, index, checked) => {
  const oldCoreModel = appModel.value;
  const newCoreModel = {
    todos: oldCoreModel.todos.map(
      (todo, i) => {
        if (i === index) {
          // Change todo non-destructively
          return {
            text: todo.text,
            checked,
          };
        } else {
          return { ...todo }; // copy
        }
      }
    ),
  };
  appModel.value = newCoreModel;
};
