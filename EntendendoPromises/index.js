const fs = require('fs');
const path = require('path');
const basePath = './assets/';

console.log('Begin');

const content = fs.readFileSync(path.resolve(basePath, 'invictus.txt'))
console.log(content.toString());

console.log('End');