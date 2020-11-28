// ## parte 2: Default Function Arguments

/*
function multiply(a, b) {
    b = b || 1;

    return a * b;
}

console.log(multiply(5, 0));
*/

/*
function multiply(a, b) {
    b = typeof b === 'undefined' ? 1 : b;

    return a * b;
}

console.log(multiply(5, 0));
*/

// Com o ES6 é possível atribuir valores padrões sem precisar fazer as validações como nos exemplos anteriores
/*function multiply2(a, b = 5) {
    return a * b;
}

console.log(multiply2(8));
*/

// lazy evaluation

function randomNumber() {
    console.log('Generating a random number...');
    return parseInt(Math.random() * 10);
}

function multiply(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 10));