import { existsSync } from 'node:fs';
import * as fs from 'node:fs/promises';

export const API_PATH_PREFIX = '/api/'

//========== Core model helpers ==========

// Sibling of parent directory of this module
const DATA_DIR = new URL('../data/', import.meta.url);
if (!existsSync(DATA_DIR)) {
  throw new Error('Could not find data directory: ' + DATA_DIR);
}
const CORE_MODEL_FILE = new URL('todos.json', DATA_DIR);

const readCoreModelFile = async () => {
  if (existsSync(CORE_MODEL_FILE)) {
    const json = await fs.readFile(CORE_MODEL_FILE, 'utf-8');
    return JSON.parse(json);
  } else {
    return {
      todos: [],
    };
  }
};

const writeCoreModelFile = async (coreModel) => {
  await fs.writeFile(CORE_MODEL_FILE, JSON.stringify(coreModel));
};

const serveCoreModel = (response, coreModel) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(coreModel));
};

//========== handleApiRequest() ==========

const coreModel = await readCoreModelFile();

export const handleApiRequest = async (request, response) => {
  try {
    const url = new URL('file:' + request.url);
    // Remove the prefix '/api/' so that only the function name remains
    const functionName = url.pathname.slice(API_PATH_PREFIX.length);
    const searchParams = url.searchParams;
    const entries = Array.from(searchParams.entries());
    const params = Object.fromEntries(
      entries.map(
        ([key, value]) => [key, JSON.parse(value)]
      )
    );
    if (functionName === 'loadCoreModel') {
      serveCoreModel(response, coreModel);
      return;
    }
    if (functionName === 'addTodo') {
      coreModel.todos.push(
        { text: params.text, checked: false }
      );
      await writeCoreModelFile(coreModel);
      serveCoreModel(response, coreModel);
      return;
    }
    if (functionName === 'deleteTodo') {
      coreModel.todos.splice(params.index, 1);
      await writeCoreModelFile(coreModel);
      serveCoreModel(response, coreModel);
      return;
    }
    if (functionName === 'updateChecked') {
      coreModel.todos[params.index].checked = params.checked;
      await writeCoreModelFile(coreModel);
      serveCoreModel(response, coreModel);
      return;
    }
    throw new Error('Could not parse API request: ' + request.url);
  } catch (err) {
    response.statusCode = 400; // Bad Request
    response.setHeader('Content-Type', 'text/plain');
    let content = 'An error happened: ' + String(err);
    if (err.stack !== undefined) {
      content += '\n';
      content += err.stack;
    }
    response.end(content);
  }
};
