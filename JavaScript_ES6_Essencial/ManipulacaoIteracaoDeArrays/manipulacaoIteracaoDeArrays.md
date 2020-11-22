# Objetivos da aula

 - Criar um array
 - Inserir e remover elementos
 - Iterar elementos
 - Buscar elementos
 - Ordenar elementos
 - Transformar um array em outro tipo de dados

## # Criar um array
```
const arr = [1,2,3];
const arr2 = new Array(1,2,3);
```

 - Array.of

    Cria uma nova instância de array a partir do número de parâmetros informados.

    ```
    const arr = Array.of(1,2,3);
    ```

 - Array

    Cria uma nova instância de array de acordo com os parâmetros informados.

    ```
    const arr = Array(3);
    // [empty x 3]

    const arr2 = Array(3, 2);
    // [3, 2]
    ```

 - Array.from

    Cria uma nova instância de array a partir de um parâmetro array-like ou iterable object.

    >Array-like pode ser um NodeList, por exemplo.

    >Quando fazemos um 'document.querySelectorAll()' no browser ele retorna um NodeList.

    >E o array.from transforma em um array. 

    >iterable object é o set Map

    ```
    const divs = document.querySelectorAll('div');
    const arr = Array.from(divs);
    ```

## # Inserir e remover elementos

 - push
    
    Adicionar um ou mais elementos no final do array e retorna o tamanho do novo array.

   ```
   const arr = ['banana', 'melancia', 'abacate'];
   const arrLength = arr.push('acerola');

   console.log(arrLength);
   // 4

   console.log(arr);
   // ['banana', 'melancia', 'abacate', 'acerola']
   ```

 - pop

   Remove o último elemento de um array e retorna o elemento removido.

   ```
   const arr = ['banana', 'melancia', 'abacate'];
   const removedItem = arr.pop();

   console.log(removedItem);
   // 'abacate'

   console.log(arr);
   // ['banana', 'melancia']
   ```

 - unshift

   Adicionar um ou mais elementos no início do array e retorna o tamanho do novo array.

   ```
   const arr = ['banana', 'melancia', 'abacate'];
   const arrLength = arr.unshift('acerola');

   console.log(arrLength);
   // 4

   console.log(arr);
   // ['acerola', 'banana', 'melancia', 'abacate'];
   ```

 - shift

   Remove o primeiro elemento de um array e retorna o elemento removido.

   ```
   const arr = ['banana', 'melancia', 'abacate'];
   const removedItem = arr.shift();

   console.log(removedItem);
   // 'banana'

   console.log(arr);
   // ['melancia', 'abacate']
   ```

 - concat

   Concatena um ou mais arrays retornando um novo array.

   ```
   const arr = [1, 2, 3];
   const arr2 = [4, 5, 6];

   const novoArr = arr.concat(arr2);

   console.log(arr);
   // (3) [1, 2, 3]

   console.log(arr2);
   // (3) [4, 5, 6]

   console.log(novoArr);
   // (6) [1, 2, 3, 4, 5, 6]
   ```

 - slice

   Retorna um novo array "fatiando" o array de acordo com início e fim.

   ```
   const arr = [1, 2, 3, 4, 5];

   arr.slice(0, 2);
   // [1, 2]

   arr.slice(2);
   // [3, 4, 5]

   arr.slice(-1);
   // [5]

   arr.slice(-3);
   // [3, 4, 5]
   ```

 - splice

   Altera um array adicionando novos elementos enquanto remove elementos antigos.

   ```
   const arr = [1, 2, 3, 4, 5];

   arr.splice(2);
   // [3, 4, 5]

   console.log(arr);
   // [1, 2]

   arr.splice(0, 0, 'first');
   // []

   console.log(arr);
   // ["first", 1, 2]
   ```

## # Iterar elementos

 - forEach

   Iteração de cada item dentro de um array

   ```
   const arr = [1, 2, 3, 4, 5];

   arr.forEach((value, index) => {
      console.log(`${index}: ${value}`);
   });
   ```

 - map

   Retorna um novo array, de mesmo tamanho, iterando cada item de um array.

   ```
   const arr = [1, 2, 3, 4, 5];

   arr.map(value => value * 2);
   // [2, 4, 6, 8, 10]
   ```

 - flat

   Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada(depth).

   ```
   const arr = [1, 2, [3, 4]];

   arr.flat();
   // [1, 2, 3, 4]
   ```

 - flatMap

   Retorna um novo array assim como a função map e executa um flat de profundidade 1.

   ```
   const arr = [1, 2, 3, 4];

   arr.flatMap(value => [value * 2]);
   // [2, 4, 6, 8]

   arr.flatMap(value => [[value * 2]]);
   // [[2], [4], [6], [8]]
   ```

 - keys

   Retorna um **Array Iterator** que contém as chaves para cada elemento do array.

   ```
   const arr = [1, 2, 3, 4];

   const arrIterator = arr.keys();

   arrIterator.next();
   // {value: 0, done: false}

   arrIterator.next();
   // {value: 1, done: false}

   arrIterator.next();
   // {value: 2, done: false}

   arrIterator.next();
   // {value: 3, done: true}
   ```

 - values

   Retorna um **Array Iterator** que contém os valores para cada elemento do array.

   ```
   const arr = [1, 2, 3, 4];

   const arrIterator = arr.values();

   arrIterator.next();
   // {value: 1, done: false}

   arrIterator.next();
   // {value: 2, done: false}

   arrIterator.next();
   // {value: 3, done: false}

   arrIterator.next();
   // {value: 4, done: true}
   ```

 - entries

   Retorna um **Array Iterator** que contém os pares chave/valor para cada elemento do array.

   ```
   const arr = [1, 2, 3, 4];

   const arrIterator = arr.entries();

   arrIterator.next();
   // {value: [0, 1], done: false}

   arrIterator.next();
   // {value: [1, 2], done: false}

   arrIterator.next();
   // {value: [2, 3], done: false}

   arrIterator.next();
   // {value: [3, 4], done: true}
   ```

## # Buscar elementos

 - find
   
   Retorna o primeiro item de um array que satisfaz a condição.

   ```
   const arr = [1, 2, 3, 4];

   const firstGreaterThanTwo = arr.find(value => value > 2);

   console.log(firstGreaterThanTwo);
   // 3
   ```

 - findIndex

   Retorna o índice do primeiro item de um array que satisfaz a condição.

   ```
   const arr = [1, 2, 3, 4];

   const firstIndexGreaterThanTwo = arr.findIndex(value => value > 2);

   console.log(firstIndexGreaterThanTwo);
   // 2
   ```

 - filter

   Retorna um novo array com todos os elementos que satisfazem a condição.

  ```
  const arr = [1, 2, 3, 4];

  const allValuesGreaterThanTwo = arr.filter(value => value > 2);

  console.log(allValuesGreaterThanTwo);
  // [3, 4]
  ```

 - indexOf

   Retorna o primeiro índice em que um elemento pode ser encontrado no array

   ```
   const arr = [1, 3, 3, 4, 3];

   const firstIndexOfItem = arr.indexOf(3);

   console.log(firstIndexOfItem);
   // 1
   ```

 - lastIndexOf

    Retorna o último índice em que um elemento pode ser encontrado no array

    ```
    const arr = [1, 3, 3, 4, 3];

    const lastIndexOfItem = arr.lastIndexOf(3);

    console.log(lastIndexOfItem);
    // 4
    ```

 - includes
  
    Retorna um booleano verificando se determinado elemento existe no array.

    ```
    const arr = [1, 3, 3, 4, 3];

    const hasItemOne = arr.includes(1);
    // true

    const hasItemTwo = arr.includes(2);
    // false
    ```

 - some

    Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição.

    ```
    const arr = [1, 3, 3, 4, 3];

    const hasSomeEvenNumber = arr.some(value => value % 2 === 0);

    // true
    ```

 - every

    Retorna um booleano verificando se todos os itens de um array satisfazem a condição.

    ```
    const arr = [1, 3, 3, 4, 3];

    const allEvenNumbers = arr.every(value => value % 2 === 0);
    // false
    ```

## # Ordenar elementos

 - sort

    Ordena os elementos de um array de acordo com a condição.

    ```
    const arr = [1, 3, 2, 5, 4];

    arr.sort();
    // [1, 2, 3, 4, 5]
    ```

 - reverse

    Inverte os elementos de um array.

    ```
    const arr = [1, 2, 3, 4, 5];

    arr.reverse();
    // [5, 4, 3, 2, 1]
    ```

## # Transformar em outro tipo de dados

 - join

    Junta todos os elementos de um array, separados por um delimitador e retorna uma string.

    ```
    const arr = [1, 2, 3, 4, 5];

    arr.join('-');
    // "1-2-3-4-5"
    ```

 - reduce

    Retorna um novo tipo de dado iterando cada posição de um array

    ```
    const arr = [1, 2, 3, 4, 5];

    arr.reduce((total, value) => total += value, 0);
    // 15
    ```