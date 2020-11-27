let line = gets().split(" ");
let t = parseInt(line[0]);
let v = parseInt(line[1]);
let distance = t * v;

let liters = distance / 12;

console.log(liters.toFixed(3));