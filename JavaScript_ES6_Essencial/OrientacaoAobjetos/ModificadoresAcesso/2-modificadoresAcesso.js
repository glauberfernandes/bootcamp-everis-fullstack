'use strict';

class Person{
    #name = '';

    constructor(initialName) {
        this.#name = initialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

const p = new Person('Glauber');

console.log(p);
// Person {}

console.log(p.getName());
// Glauber

console.log(p.name);
// undefined

p.setName("Fernandes");

console.log(p.getName());
// Fernandes