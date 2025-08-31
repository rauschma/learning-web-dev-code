import * as fs from 'node:fs';

/** Returns a random integer i with 0 <= i < max */
const getRandomInteger = (max) => {
  return Math.floor(Math.random() * max);
};

const fileUrl = new URL('quotes.json', import.meta.url);

const main = () => {
  const json = fs.readFileSync(fileUrl, 'utf-8');
  const quotes = JSON.parse(json);
  
  const randomIndex = getRandomInteger(quotes.length);
  const randomQuote = quotes[randomIndex];
  
  console.log(randomQuote.quote);
  console.log('— ' + randomQuote.author);
};

main();