'use strict';

const myText = 'Hello prototype!';

myText.split(''); // <- de onde vem esse "split"?

const myText = String('Hello prototype!');

console.log(myText.__proto__.split);
//f split() { [native code] }

console.log(String.prototype.split);
//f split() { [native code] }

console.log(myText.__proto__.split === String.prototype.split);
//true

console.log(myText.constructor === String);
//true

// __proto__ -> prototype -> constructor

// myText.constructor -> String
// myText.__proto__ -> String.prototype

function Animal() {}

console.log(Animal.constructor);
// f Function() { [native code] }