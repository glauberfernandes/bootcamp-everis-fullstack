'use strict';

function Person(initialName) {
    let name = initialName;

    this.getName = function() {
        return name;
    }

    this.setName = function(newName) {
        name = newName;
    }
}

const p = new Person('Glauber');

console.log(p);
// Person { getName: [Function], setName: [Function] }

console.log(p.getName());
// Glauber

console.log(p.name);
// undefined

p.setName('Fernandes');

console.log(p.getName());
// Fernandes