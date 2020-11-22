const frutas = ['melancia', 'banana', 'laranja'];

frutas.forEach(fruta => console.log(fruta));
// melancia
// banana
// laranja

frutas.forEach((fruta, index) => {
    console.log(`${index}: ${fruta}`);
});

// 0: melancia
// 1: banana
// 2: laranja

frutas.forEach((fruta, index, arr ) => console.log(index, fruta, arr));
// 0 melancia [ 'melancia', 'banana', 'laranja' ]
// 1 banana [ 'melancia', 'banana', 'laranja' ]
// 2 laranja [ 'melancia', 'banana', 'laranja' ]