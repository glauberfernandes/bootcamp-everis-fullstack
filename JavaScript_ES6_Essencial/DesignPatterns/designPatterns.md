# Orientação a objetos e padrões de design

## Objetivos da aula

 - Definição
 - Tipos
 - Patterns mais utilizados

## # Design patterns

 - Definição

 Design Patterns ou padrões de projetos são soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não se trata de um framework ou um código pronto, mas de uma definição de alto nível de como um problema comum pode ser solucionado.

 - A Pattern Language
   - 1978
   - Christopher Alexander, Sara Ishikawa e Murray Silverstein
   - 253 tipos de problemas/desafios de projetos

 - Formato de um pattern
   - Nome
   - Exemplo
   - Contexto
   - Problema
   - Solução

 - Using Pattern Languages for Object-Oriented Programs
   - 1987
   - Kent Beck e Ward Cunningham
   - 5 padrões de projetos

 - Design Patterns: Elements of Reusable Object-Oriented Software
   - 1994
   - Gang of four (GoF)
   - Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides

 - Tipos
   - Criação 
   - Estruturais 
   - Comportamentais


 - Padrões de criação

    Os padrões de criação são aqueles que abstraem e/ou adiam o processo de criação dos objetos. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados.

   - Abstract Factory
   - Builder
   - Factory Method
   - Prototype
   - Singleton

 - Padrões estruturais

    Os padrões estruturais se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores.

   - Adapter
   - Bridge
   - Composite
   - Decorator
   - Facade
   - Business Delegate
   - Flyweight
   - Proxy

 - Padrões comportamentais

    Os padrões comportamentais se concentram nos algoritmos e atribuições de responsabilidades entre os objetos. Eles não descrevem apenas padrões de objetos ou de classes, mas também os padrões de comunicação entre os objetos.

   - Chain of Responsibility
   - Command
   - Interpreter
   - Iterator
   - Mediator
   - Observer
   - State
   - Strategy
   - Template Method
   - Visitor


 - Patterns mais utilizados
   - Factory
   - Singleton
   - Decorator
   - Observer
   - Module

 - Factory

    Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o **new**, são consideradas funções Factory(Fábrica).

    ```
    function FakeUser() {
        this.name: 'Glauber';
        this.lastName: 'Fernandes';
    }

    // Não é Factory
    const user = new FakeUser();
    ```
    ```
    function FakeUser() {
        return {
            name: 'Glauber',
            lastName: 'Fernandes'
        }
    }

    // Factory
    const user = FakeUser();
    ```

 - Singleton

    O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la.

    Um exemplo de Singleton muito popular é o jQuery:

    [https://jquery.com](https://jquery.com)

    ```
    var SETTINGS = {
        api: 'http://localhost',
        trackJsToken: '12345'
    }
    ```
 - Decorator
    Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente.

  Proposta:

  [https://github.com/tc39/proposal-decorators](https://github.com/tc39/proposal-decorators)

  TypeScript:

  [www.typescriptlang.org/docs/handbook/decorators](www.typescriptlang.org/docs/handbook/decorators)

```
function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Job {
  @readonly
  title() {return 'CEO'}
}
```
* Exemplo no Angular:
```
@Component({
  selector: 'app-reactive-favorite-color',
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl">
  `
})
export class FavoriteColorComponent {
  favoriteColorControl = new FormControl('');
}
```

 - Observer
    É um pattern muito popular em aplicações javascript. A instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado.

Vue:

[https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js#L229](https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js#L229)

RxJs:

[rxjs-dev.firebaseapp.com/guide/observable](rxjs-dev.firebaseapp.com/guide/observable)

```
class Observable {
  constructor() {
    this.observers = [];
  }
}

subscribe(f) {
  this.observers.push(f);
}

unsubscribe(f) {
  this.observers = this.observers.filter(subscriber => subscriber !== f);
}

notify(data) {
  this.observers.forEach(observer => observer(data));
}
```

 - Module
    É um pattern que possibilita organizarmos melhor o nosso código, sem a necessidade de expor variáveis globais.

    * Forma feita antes:

    ```
    (function($) {
      //your plugin here
    })(jQuery);
    ```

    * Forma de classe:

    ```
    class Person {
      constructor(name) {
        this.name = name;
      }
    }

    export default Person

    // Utilizar Person
    import Person from './models/person';
    ```

