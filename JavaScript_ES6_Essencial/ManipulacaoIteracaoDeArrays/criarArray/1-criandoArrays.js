const persons = Array.of('John', 'Cris', 'Jenny');

console.log(persons);
// [ 'John', 'Cris', 'Jenny' ]

// Também é possível criar array com números e Strings
const numbersAndStrings = Array.of(1, 2, 'strings', 'texto');

console.log(numbersAndStrings);
// [ 1, 2, 'strings', 'texto' ]

const arrWith3Positions = Array(3);

console.log(arrWith3Positions);
// [ <3 empty items> ]

// Semelhante ao Array.of
const personsList = Array('Jesus', 'Maria', 'José');

console.log(personsList);
// [ 'Jesus', 'Maria', 'José' ]