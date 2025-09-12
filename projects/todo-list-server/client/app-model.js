const sendApiRequest = async (functionName, params) => {
  const usp = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    usp.append(key, JSON.stringify(value));
  }
  const response = await fetch(
    `/api/` + functionName + '?' + usp.toString()
  );
  const coreModel = await response.json();
  return coreModel;
};

export const loadCoreModel = async () => {
  return await sendApiRequest(
    'loadCoreModel', {}
  );
};

export const addTodo = async (appModel, text) => {
  const coreModel = await sendApiRequest(
    'addTodo', { text }
  );
  appModel.value = coreModel;
};

export const deleteTodo = async (appModel, index) => {
  const coreModel = await sendApiRequest(
    'deleteTodo', { index }
  );
  appModel.value = coreModel;
};

export const updateChecked = async (appModel, index, checked) => {
  const coreModel = await sendApiRequest(
    'updateChecked', { index, checked }
  );
  appModel.value = coreModel;
};
