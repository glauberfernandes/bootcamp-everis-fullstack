'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
    this.movimentar = function() {}
}

function Cachorro(morde){
    Animal.call(this, 4);

    this.morde = morde;
    this.latir = function() {
        console.log('Au! au!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);
console.log(pitbull);