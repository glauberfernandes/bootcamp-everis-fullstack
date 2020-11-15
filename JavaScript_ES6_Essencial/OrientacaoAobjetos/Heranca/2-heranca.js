'use strict';

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdePatas);
//4

/**
new Foo(...);

O que ocorre?

1 - Um novo objeto é criado, herdando Foo.prototype
2 - A função construtora Foo é chamada com os argumentos especificados e com o 'this' vinculado ao novo objeto criado.
3 - Caso a função construtora tenha um retorno explícito, será respeitado o seu 'return'1. Senão, será retornardo o objeto criado no passo 1.
*/

console.log(cachorro.__proto__ === Animal.prototype);
//true

console.log(Animal.__proto__ === Function.prototype);
//true

console.log(cachorro instanceof Animal);
//true

console.log(cachorro instanceof Function);
//false