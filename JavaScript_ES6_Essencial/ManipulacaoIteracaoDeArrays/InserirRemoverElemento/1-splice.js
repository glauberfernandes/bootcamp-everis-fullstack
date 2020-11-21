const frutas = ['melancia', 'banana'];

//frutas.splice(1, 0, 'acerola');
//
//console.log(frutas);
// [ 'melancia', 'acerola', 'banana' ]

frutas.splice(2, 1, 'laranja', 'amora');
//banana

console.log(frutas);
// [ 'melancia', 'acerola', 'laranja', 'amora' ]