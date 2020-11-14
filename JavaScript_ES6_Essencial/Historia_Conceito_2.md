## Currying

>É bem comum em linguagens funcionais

 * **Currying** é a técnica de transformar uma função com N parametros em uma função que recebe apenas um parametro.

### exemplo de uma função normal
```
function soma(a, b){
    return a + b;
}

console.log(soma(2, 2));
console.log(soma(2, 3));
console.log(soma(2, 4));
console.log(soma(2, 5));

//perceba que o primeiro parametro está se repetindo. 
```

### exemplo com currying
```
function soma(a){
    return function(b){
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
```

## Hoisting

 * **Hoisting** significa levantar ou suspender algo.
 * É um comportamento que acontece no JavaScript com variáveis e funções. Basicamente, as variáveis e as funções são elevadas ao escopo em que ela está.

 * No _Hoisting de variável_ só eleva a criação da variável e não a sua atribuição.

 * Já a função é elevada como um todo.

### Hoisting de variáveis
```
function fn(){
    console.log(text);

    var text = 'Exemplo';

    console.log(text);
}

fn();

//Hoisting em ação
/**
function fn(){ 
    var text;
    console.log(text);

    text = 'Exemplo';

    console.log(text);
}
*/

//saída:
//undefined
//Exemplo
```
>O primeiro 'text' vai receber somente um _undefined_ e não um error pois o hoisting elevou a criação da variável.

### Hoisting de função
```
function fn(){
    log('Hoisting de função');

    function log(value){
        console.log(value);
    }
}

fn();

//hoisting em ação
/**
function fn(){
    function log(value){
        console.log(value);
    }

    log('Hoisting de função');
}
*/
```

## Imutabilidade
>Também é um conceito de linguagem funcional mas que tem no JavaScript.

* Nas linguagens funcionais os dados que vamos criando nunca muda, por isso que se diz que os dados são imutáveis.

>A variável nunca vai mudar... Se você precisa alterar uma variável, você cria uma nova.

### exemplo 1
```
const user = {
    name: 'Guilherme',
    lastName: 'Gadelha'
};

function getUserWithFullName(user){
    return{
        ...user,
        fullname: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);
```

### exemplo 2
```
const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul'
        grade: 10
    }
]

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos: ');
console.log(students);
```