'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug);