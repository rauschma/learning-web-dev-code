const createError = () => {
  return new Error('Something went wrong!');
};

const err = createError();
console.log(err.stack);
