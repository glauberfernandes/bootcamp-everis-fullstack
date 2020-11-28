// ## Parte 1: Arrow Function

// sintaxe normal de uma função
/*function log(value) {
    console.log(value);
}

log('teste');*/

// Sintaxe de uma função anônima
// deve ser atribuida a uma variável
/*var sumOld = function (a, b){
    return a + b;
}

console.log(sumOld(5, 5));*/

// Arrow Function
// É uma função anônima, logo é de primeira classe.
// Deve ser atribuída a uma variável ou utilizada como parâmetro de outra função

var sum = (a, b) => a + b;

console.log(sum(5, 3));

var sum2 = (c, d) => {
    return c + d;
}

console.log(sum2(8, 5));

// se existir somente um parâmetro, pode ser omitido os parenteses
// Se tiver mais de um argumento obrigatoriamente usa-se os parenteses
var sum3 = a => a + 5;

console.log(sum3(10));

// usando o destruction também é obrigatório o uso dos parenteses
var sum4 = ({ a }) => a;

var sum5 = (...a) => a;

// Default values
var sum6 = (a = 5) => a;

console.log(sum6());


// Objetos literais
// Obrigatório colocar entre parenteses do lado direito
var createObj = () => ({ test: 123 });

console.log(createObj());

// Funções construtoras
// Criação de objetos
function Car() {
    this.foo = 'bar'
}

console.log(new Car());

// Arrow Function não é utilizado como função construtora
/*var Car2 = () => {
    this.foo2 = 'bar2'
}

console.log(new Car2());
// TypeError: Car2 is not a constructor
*/

/*
// Hoisting não funciona com Arrow Function
log2('teste');

var log2 = value => {
    console.log(value);
}
*/

var obj = {
    showContext: function showContext() {
        // this = obj

        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();