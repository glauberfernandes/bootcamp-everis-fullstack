const idades = [20, 34, [35, 60, [70, 40]]];

console.log(idades.flat());
// [ 20, 34, 35, 60, [ 70, 40 ] ]

console.log(idades.flat(1));
// [ 20, 34, 35, 60, [ 70, 40 ] ]

console.log(idades.flat(2));
// [ 20, 34, 35, 60, 70, 40 ]