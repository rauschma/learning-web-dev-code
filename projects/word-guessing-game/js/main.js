import { randomInt } from 'es-toolkit';
import wordList from './words.json' with { type: 'json' };
import { inputLettersToWordWithBlanks, isWordComplete, countFailures } from './model.js';

//========== Initializing the user interface ==========

const MAX_FAILURES = 8;
document.querySelector('#maxFailuresSpan').innerText = String(MAX_FAILURES);
document.querySelector('#failuresProgress').max = MAX_FAILURES;

for (const letter of 'abcdefghijklmnopqrstuvwxyz') {
  letterButtonsDiv.insertAdjacentHTML(
    'beforeend',
    `<button class="letter" disabled>${letter}</button> `
  );
}

//========== View functionality ==========

const disableSomeInputLetterButtons = (inputLetters) => {
  for (const button of document.querySelectorAll('button.letter')) {
    const buttonIsInput = inputLetters.includes(button.innerText);
    button.disabled = buttonIsInput;
  }
};
const disableAllInputLetterButtons = () => {
  for (const button of document.querySelectorAll('button.letter')) {
    button.disabled = true;
  }
};

const updateFailures = (failureCount) => {
  const failuresProgress = document.querySelector('#failuresProgress');
  const failureCountSpan = document.querySelector('#failureCountSpan');
  failuresProgress.value = failureCount;
  failuresProgress.innerText = String(failureCount);
  failureCountSpan.innerText = String(failureCount);
};

const updateWord = (word) => {
  const wordSpan = document.querySelector('#wordSpan');
  wordSpan.innerText = word;
};

const setMessage = (message) => {
  document.querySelector('#message').innerText = message;
};

//========== Managing the user interface ==========

let model = undefined;

const updateUserInterface = () => {
  const failureCount = countFailures(model);

  //----- Display status: word and failures -----

  updateFailures(failureCount);
  updateWord(inputLettersToWordWithBlanks(model));

  //----- Update input buttons -----

  if (failureCount >= MAX_FAILURES) {
    setMessage('❌ Too many failures');
    disableAllInputLetterButtons();
    return;
  }
  if (isWordComplete(model)) {
    setMessage('✅ Success!');
    disableAllInputLetterButtons();
    return;
  }
  setMessage('');
  disableSomeInputLetterButtons(model.inputLetters);
};

const startGame = () => {
  const wordIndex = randomInt(0, wordList.length);
  const word = wordList[wordIndex];
  model = {
    wordLetters: Array.from(word),
    inputLetters: [],
  };
  updateUserInterface();
};

const addInputLetter = (letter) => {
  model.inputLetters.push(letter);
  updateUserInterface();
};

//========== Event listeners ==========

document.querySelector('#letterButtonsDiv')
  .addEventListener(
    'click',
    (event) => {
      if (model === undefined) {
        // Just in case (shouldn’t happen)
        return;
      }
      const button = event.target;
      if (! (button instanceof HTMLButtonElement)) {
        // User clicked on <div>, not on <button>
        return;
      }
      const letter = button.innerText;
      addInputLetter(letter);
    }
  )
;

const newGameButton = document.querySelector('#newGameButton');
newGameButton.addEventListener(
  'click',
  () => {
    startGame();
  }
);
