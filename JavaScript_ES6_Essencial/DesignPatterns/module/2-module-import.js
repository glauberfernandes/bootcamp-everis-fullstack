const {getName, setName} = require('./1-module');

console.log(getName());
console.log(setName('Glauber'));
console.log(getName());

// default
// undefined (retorno do setName)
// Glauber