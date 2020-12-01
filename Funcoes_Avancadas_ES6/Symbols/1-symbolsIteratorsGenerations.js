// Symbols
// Symbols é a maneira de gerar um identificador único;
// Symbols não pode ser invocado utilizando o 'new'
// Invoca como uma função

const uniqueId = Symbol();

console.log(uniqueId);
// Symbol()


const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log(uniqueId === uniqueId2);
// false

// Symbols podem ser utilizadas para gerarem propriedades privadas
const uniqueId = Symbol('Hello');
const obj ={
    [uniqueId]: 'Hello'
};

console.log(obj);
// { [Symbol(Hello)]: 'Hello' }

console.log(Object.keys(obj));
// []

console.log(Object.getOwnPropertySymbols(obj));
// [ Symbol(Hello) ]


// Well known symbols

console.log(Symbol.iterator);
// Symbol(Symbol.iterator)
console.log(Symbol.split);
// Symbol(Symbol.split)
console.log(Symbol.toStringTag);
// Symbol(Symbol.toStringTag)
console.log(Symbol.toPrimitive);
// Symbol(Symbol.toPrimitive)
console.log(Symbol.asyncIterator);
// Symbol(Symbol.asyncIterator)

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

//console.log(it.next());
// { value: 1, done: false }
//console.log(it.next());
// { value: 2, done: false }
//console.log(it.next());
// { value: 3, done: false }
//console.log(it.next());
// { value: 4, done: false }
//console.log(it.next());
// { value: undefined, done: true }

while (true) {
    let { value, done } = it.next();

    if(done) {
        break;
    }

    console.log(value);
}
// 1
// 2
// 3
// 4

//com ES6 não precisa utilizar o iterator
const arr = [1, 2, 3, 4];

for (let value of arr) {
    console.log(value);
}
// 1
// 2
// 3
// 4

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

const obj = {
    value: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

// Generators
// eles pausam e despausam as iterações

function* hello() {
    console.log('Hello');
    yield;

    console.log('From');
    yield;

    console.log('Function!');
}

const it = hello();

console.log(it.next());
// Hello
// { value: undefined, done: false }
console.log(it.next());
// From
// { value: undefined, done: false }
console.log(it.next());
// Function!
// { value: undefined, done: true }

// com o yield foi pausado a função

function* naturalNumbers() {
    let number = 0;
    while(true) {
        yield number;
        number++;
    }
}

const it = naturalNumbers();

console.log(it.next());
// { value: 0, done: false }
console.log(it.next());
// { value: 1, done: false }
console.log(it.next());
// { value: 2, done: false }
console.log(it.next());
// { value: 3, done: false }