// Destructuring Assignment

/*
// antes do ES6

var arr = ['apple', 'banana', 'orange'];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

console.log(apple);

// com ES6

var [apple2, banana2, orange2] = ['apple', 'banana', 'orange'];

console.log(banana2);

*/

/*
// antes do ES6

var arr = ['apple', 'banana', 'orange',['tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

console.log(tomato);

// com ES6

var [apple2, banana2, orange2, [tomato2]] = ['apple', 'banana', 'orange',['tomato']];

console.log(tomato2);

*/

var arr = ['Apple', 'Banana'];
var obj = {
    name: 'Glauber'
}

var obj2 = {
    name: 'Fernandes',
    props: {
        age: 37
    }
}

var [apple2] = arr;
var { name: name2 } = obj;
var { props: { age } } = obj2

console.log(apple2);
console.log(name2);
console.log(age);