// Implementação JavaScript

'use strict';

function Person() {}

Person.walk = function() {
    console.log('walking...');
}

console.log(Person.walk());
// walking...


// Implementação ES6
'use strict';

class Person {
    static walk() {
        console.log('walking...');
    }
}

console.log(Person.walk());
// walking...