const url = process.argv[2];
const response = await fetch(url);
const text = await response.text();
console.log(text);
