// rest operator, spread operator ...

/*function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5, 5, 5, 2, 3));
*/

/*
const sum = (a, b, ...rest) => {
    console.log(a, b, rest);
}

console.log(sum(5, 5, 5, 2, 3));
//5 5 [ 5, 2, 3 ]
//undefined
*/


// spread operator
// pode ser utilizado em strings, arrays, objetos e objetos iteráveis
/*
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply(...rest);
};

console.log(sum(5, 5, 5, 2, 3));
*/

/*
const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);
*/

/*
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arr2 = [...arr, 5, 6, 7];

const arr3 = [...arr2, ...arr, 0, 0, 0];

console.log(arr3);
*/

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};

console.log(obj2);
// { test: 123, test2: 'hello' }