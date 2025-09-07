(() => {
  // node_modules/es-toolkit/dist/math/random.mjs
  function random(minimum, maximum) {
    if (maximum == null) {
      maximum = minimum;
      minimum = 0;
    }
    if (minimum >= maximum) {
      throw new Error("Invalid input: The maximum value must be greater than the minimum value.");
    }
    return Math.random() * (maximum - minimum) + minimum;
  }

  // node_modules/es-toolkit/dist/math/randomInt.mjs
  function randomInt(minimum, maximum) {
    return Math.floor(random(minimum, maximum));
  }

  // js/words.json
  var words_default = [
    "cat",
    "dog",
    "pig"
  ];

  // js/model.js
  var inputLettersToWordWithBlanks = (model2) => {
    const result = model2.wordLetters.map(
      (letter) => {
        if (model2.inputLetters.includes(letter)) {
          return letter;
        } else {
          return "_";
        }
      }
    );
    return result.join(" ");
  };
  var isWordComplete = (model2) => {
    for (const wordLetter of model2.wordLetters) {
      if (!model2.inputLetters.includes(wordLetter)) {
        return false;
      }
    }
    return true;
  };
  var countFailures = (model2) => {
    let failures = 0;
    for (const inputLetter of model2.inputLetters) {
      if (!model2.wordLetters.includes(inputLetter)) {
        failures = failures + 1;
      }
    }
    return failures;
  };

  // js/main.js
  var MAX_FAILURES = 8;
  document.querySelector("#maxFailuresSpan").innerText = String(MAX_FAILURES);
  document.querySelector("#failuresProgress").max = MAX_FAILURES;
  for (const letter of "abcdefghijklmnopqrstuvwxyz") {
    letterButtonsDiv.insertAdjacentHTML(
      "beforeend",
      `<button class="letter" disabled>${letter}</button> `
    );
  }
  var disableSomeInputLetterButtons = (inputLetters) => {
    for (const button of document.querySelectorAll("button.letter")) {
      const buttonIsInput = inputLetters.includes(button.innerText);
      button.disabled = buttonIsInput;
    }
  };
  var disableAllInputLetterButtons = () => {
    for (const button of document.querySelectorAll("button.letter")) {
      button.disabled = true;
    }
  };
  var updateFailures = (failureCount) => {
    const failuresProgress = document.querySelector("#failuresProgress");
    const failureCountSpan = document.querySelector("#failureCountSpan");
    failuresProgress.value = failureCount;
    failuresProgress.innerText = String(failureCount);
    failureCountSpan.innerText = String(failureCount);
  };
  var setMessage = (message) => {
    document.querySelector("#message").innerText = message;
  };
  var model = void 0;
  var updateUserInterface = () => {
    const failureCount = countFailures(model);
    const wordSpan = document.querySelector("#wordSpan");
    wordSpan.innerText = inputLettersToWordWithBlanks(model);
    updateFailures(failureCount);
    if (failureCount === MAX_FAILURES) {
      setMessage("\u274C Too many failures");
      disableAllInputLetterButtons();
      return;
    }
    if (isWordComplete(model)) {
      setMessage("\u2705 Success!");
      disableAllInputLetterButtons();
      return;
    }
    setMessage("");
    disableSomeInputLetterButtons(model.inputLetters);
  };
  var startGame = () => {
    const wordIndex = randomInt(0, words_default.length);
    const word = words_default[wordIndex];
    model = {
      wordLetters: Array.from(word),
      inputLetters: []
    };
    updateUserInterface();
  };
  var addInputLetter = (letter) => {
    model.inputLetters.push(letter);
    updateUserInterface();
  };
  document.querySelector("#letterButtonsDiv").addEventListener(
    "click",
    (event) => {
      if (model === void 0) {
        return;
      }
      const button = event.target;
      if (!(button instanceof HTMLButtonElement)) {
        return;
      }
      const letter = button.innerText;
      addInputLetter(letter);
    }
  );
  var newGameButton = document.querySelector("#newGameButton");
  newGameButton.addEventListener(
    "click",
    () => {
      startGame();
    }
  );
})();
