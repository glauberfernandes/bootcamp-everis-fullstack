# Tipos e Variáveis

## Variáveis
* var
* let
* const

>Antes o JavaScript possuia só dois tipos de escopo: Escopo Global e Escopo de função.

>Com o let e o const foi introduzido o Escopo de bloco.

### variaveis1
```
var nameVar = 'Glauber';
let nameLet = 'Glauber';
const nameConst = 'Glauber';

console.log(`nameVar: ${nameVar}`);
console.log(`nameLet: ${nameLet}`);
console.log(`nameConst: ${nameConst}`);
```
### escopos
```
//escopo global

{
    //escopo de bloco
}

function test(){
    //escopo de função
}
```
>var não respeita escopo de bloco... let e const vão respeitar.

### variaveis 2.1
```
var test = 'example';

(() => {
    console.log(`Valor dentro da função "${test}"`);

    if (true){
        var test = 'example';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();
```
### variaveis 2.2
```
(() => {
    let test = 'valor função';
    console.log(`Valor dentro da função "${test}"`);

    if (true){
        let test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();
```
### variaveis 2.3
```
(() => {
    const test = 'valor função';
    console.log(`Valor dentro da função "${test}"`);

    if (true){
        const test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();
```
### variaveis 3
```
const name = 'Glauber';

// Não podemos alterar o valor
name = 'Glauber';

const user = {
    name: 'Glauber';
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

// Não podemos fazer o abjeto "apontar" para outro lugar
user = {
    name: 'Glauber'
};

const persons = ['Glauber', 'Gabriela', 'Guilherme'];

// Podemos adicionar novos itens
persons.push('João');

// Podemos remover algum item
persons.shift();

// Podemos alterar diretamente
persons[1] = 'James';

console.log('\nArray após as alterações: ', persons);
```
