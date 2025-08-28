/** Returns a random integer i with 0 <= i < max */
const getRandomInteger = (max) => {
  return Math.floor(Math.random() * max);
};

/**
 * @see https://en.wikipedia.org/wiki/Fisher–Yates_shuffle#The_modern_algorithm
 */
export const shuffleArray = (arr) => {
  for (let current = arr.length - 1; current >= 1; current--) {
    const randomPick = getRandomInteger(current);
    // Swap elements at the indices `current` and `randomPick`
    const tmp = arr[current];
    arr[current] = arr[randomPick];
    arr[randomPick] = tmp;
  }
  return arr;
};
