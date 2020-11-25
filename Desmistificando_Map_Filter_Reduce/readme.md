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
    var newArray = arr.filter(callback, [thisArg])
```


![Filter](https://github.com/glauberfernandes/bootcamp-everis-fullstack/blob/master/Desmistificando_Map_Filter_Reduce/filter.png)