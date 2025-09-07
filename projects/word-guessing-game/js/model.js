export const inputLettersToWordWithBlanks = (model) => {
  const result = model.wordLetters.map(
    (letter) => {
      if (model.inputLetters.includes(letter)) {
        return letter;
      } else {
        return '_';
      }
    }
  );
  return result.join(' ');
};

export const isWordComplete = (model) => {
  for (const wordLetter of model.wordLetters) {
    if (!model.inputLetters.includes(wordLetter)) {
      // We found a letter that wasn’t guessed yet
      return false;
    }
  }
  return true;
};

export const countFailures = (model) => {
  let failures = 0;
  for (const inputLetter of model.inputLetters) {
    if (!model.wordLetters.includes(inputLetter)) {
      failures = failures + 1;
    }
  }
  return failures;
};
