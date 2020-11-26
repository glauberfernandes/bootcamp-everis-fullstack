# Desmistificando as funções: map, filter e reduce

 - Exemplo de um for:
```
    for ( var i = 0; i < array.length; i++ ) {
        if ( array.indexOf( array[i] ) === i ) {
            models.push(array[i] );
        }
    }
```

 - Mesma solução aplicando filter:
 >Simples e elegante!

```    
    var uniqueProducts = array.filter( function(elem, i, array) {
        return array.indexOf( elem ) === i; 
    } );
```

## # Array.prototype.filter

Cria um novo array com todos os elementos que passaram no teste da função fornecida.

```
    var newArray = arr.filter(callback[, thisArg])
```


![Filter](https://github.com/glauberfernandes/bootcamp-everis-fullstack/blob/master/Desmistificando_Map_Filter_Reduce/filter.png)


## # Array.prototype.map

Chama o callback para cada elemento e devolve um novo array com a mesma quantidade de items.

```
var newArray = arr.map(callback[, thisArg])
```

![Map](https://github.com/glauberfernandes/bootcamp-everis-fullstack/blob/master/Desmistificando_Map_Filter_Reduce/map.png)