# Introdução ao JavaScript

## Objetivos da aula
 1. História e conceitos
 2. Tipos e variáveis
 3. Operadores
 4. Estruturas condicionais e repetição

## Requisitos Básicos
 - Acesso a um navegador

## História e conceitos
 - Lançado em setembro de 1995
 >Lançado juntamente com a versão beta do navegador Netscape

 >O projeto foi lançado inicialmente com o nome de MOCHA

 >Depois chamado de LiveScript

 >E por fim chamado de JavaScript

 >A mudança de nome ocorreu em anúncio conjunto com a SunMicrosystem em setembro de 95

 - Criado por Brendan Eich
 >Trabalhou com o JavaScript no NetScape (Abril/95) e ajudou na Fundação da Mozilla.org(1998)

 - ECMAScript
 >O Netscape submeteu as especificações do JavaScript para padronização da ECMA International

 >Esse trabalho na especificação foi chamado de ECMA262

 >Começou em novembro/96

 >ECMAScript é uma especificação da linguagem de programação que é padronizada pelo ECMA262 da ECMA International

 >Servindo como base para futuras implementações de outras linguagens de script como: JavaScript, JScript e ActionScript

### Quem cuida do projeto
 - TC39
 >É o comitê responsável pela evolução JavaScript.

 >Ele vem para manter e atualizar os padrões do ECMAScript que é no projeto ECMA262.

 >Ele indentifica, desenvolve e mantém padrões para as bibliotecas que estende as features do ECMAScript (ECMA402)

 - (https://github.com/tc39)[https://github.com/tc39] 
 - (https://github.com/tc39/proposals)[https://github.com/tc39/proposals]

 * Fluxo de proposta
   - Stage 0: strawman
   >submete um formulário com a idéia para evoluir o ECMAScript.

   - stage 1: proposal
   >Surge a proposta formal da funcionalidade.

   - stage 2: draft
   >Primeira versão da proposta que vai entrar na especificação.

   - stage 3: candidate
   >Quase finalizada e precisa de um feedback de implementação.

   - stage 4: finished
   >Proposta bem madura mas ainda com pontos para evoluir

 * ES2018 (última especificação)
   - Operadores rest/spread
   - Iteração assíncrona
   - Promise.prototype.finally()

 * ES.Next
 >Especificação que possui futuras implementações

 * Babel
   - [https://babeljs.io/](https://babeljs.io/)
 >Transpilador JavaScript... Ele transforma determinada versão em uma especificação antiga

 * Linguagem interpretada
 * Linguagem de tipagem fraca e dinâmica
 ``` 
    var meuNumero = 20;
    var meuTexto = 'Exemplo';

    console.log(meuNumero . meuTexto);

    //20Exemplo
 ```
 * Tipagem dinâmica
 >Não é preciso explicitar o tipo da variável no momento da sua criação
 ```
    var minhaVariavel = 30; //number

    minhaVariavel = 'Texto'; //string

    console.log(minhaVariavel);

    //Texto
 ```

 * Typescript
   - [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
 >É um superset da linguagem JavaScript.

 >Além dele adicionar tipos em tempo de desenvolvimento, ele adiciona funcionalidades que o JavaScript não tem por padrão. Ex: interface, generics e enums

 * Flow
   - [https://flow.org/en/](https://flow.org/en/)

 * Funções de primeira classe e ordem maior
   - Primeira classe quer dizer que uma função pode ser atribuida a uma variável, pode ser atribuída a uma estrutura de dados (object ou array), pode ser passada por argumento e até retornar para outras funções.

```
    function getName(){
        return 'Guilherme Gadelha';
    }

    function logFn(fn){
        console.log(fn());
    }

    const logFnResult = logFn;

    const obj = {
        logFn: logFn
    }

    const arr = [logFn]

    logFnResult(getName);
```

 * Closure (ou escopo léxico)
   - É a capacidade de uma função lembrar do ambiente em que ela foi criada.

```
    function init(){
        const exemplo = 'Essa variável';

        return function(){
            console.log(`1 - O valor da variável exemplo é: ${exemplo}`);

            return function(){
                 console.log(`2 - O valor da variável exemplo é: ${exemplo}`);

                 return function(){
                     console.log(`3 - O valor da variável exemplo é: ${exemplo}`);
                 }
            }
        }
    }

    const initFn1 = init();

    const initFn2 = initFn1();

    const initFn3 = initFn2();

    initFn3();

    //saída:
    //1 - O valor da variável exemplo é: Essa variável
    //2 - O valor da variável exemplo é: Essa variável
    //3 - O valor da variável exemplo é: Essa variável
```