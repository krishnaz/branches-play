let getEverySecondLetter = require('./js/first.js');
let secondLib = require('./js/second');

const text = " H e l l o   W o r l d !";

const processedText = getEverySecondLetter(text);

console.log(`Result text is "${processedText}"`);

const array = [1,2,3,4,5,4,5,2,3,0];
const resultAverage = secondLib.average(array);

console.log(`Average of [${array}] is ${resultAverage}`);
