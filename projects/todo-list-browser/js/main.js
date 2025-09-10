import { html } from 'htm/preact';
import { render } from 'preact';
import { useRef } from 'preact/hooks';
import { addTodo, createAppModel, deleteTodo, updateChecked } from './app-model.js';

const appModel = createAppModel();

function Todo({ index, todo }) {
  function onchange(event) {
    updateChecked(appModel, index, event.target.checked);
  }
  function onclick() {
    deleteTodo(appModel, index);
  }
  return html`
    <div>
      <label>
        <input type="checkbox" checked=${todo.checked} onchange=${onchange} />
        ${' '}
        ${todo.text}
      </label>
      ${' '}
      <span class="delete-icon" onclick=${onclick}>×</span>
    </div>
  `;
}

function Todos({ todos }) {
  return todos.map(
    (todo, index) => {
      return html`
        <${Todo} index=${index} todo=${todo} />
      `;
    }
  );
}

function App() {
  const inputRef = useRef(null);

  const add = () => {
    const todoInput = inputRef.current;
    const todoText = todoInput.value;
    todoInput.value = '';
    // Last step: update user interface
    addTodo(appModel, todoText);
  };
  return html`
    <h1>Todo list</h1>
    <${Todos} todos=${appModel.value.todos}
              editedIndex=${appModel.value.editedIndex}
    />
    <div>
      <button onclick=${add}>Add:</button>
      ${' '}
      <input type="text" ref=${inputRef} />
    </div>
  `;
}

render(
  html`<${App} />`,
  document.body
);
