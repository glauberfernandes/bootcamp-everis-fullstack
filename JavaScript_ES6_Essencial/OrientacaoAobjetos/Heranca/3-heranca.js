'use strict';

function Pessoa(name) {
    this.name = name;
}

const p = new Pessoa('Glauber');

console.log(p);
// retorna Pessoa { name: 'Glauber' }

function Pessoa2(name) {
    this.name = name;

    return {
        name: 'Test'
    }
}

const p2 = new Pessoa2('Glauber');

console.log(p2);
// retorna { name: 'Test' }