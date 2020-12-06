const fs = require('fs');
const path = require('path');
const basePath = './assets/';

function cb (err, data) {
    if (err) throw err
    console.log(data);
}

console.log('Begin');

//const files = fs.readdirSync(path.resolve(basePath));
//
//const sentences = files.filter((file) => /s[1-4].txt/gi.test(file));
//
//for (const sentence of sentences) {
//    const text = fs.readFileSync(path.resolve(basePath, sentence)).toString();
//
//    console.log(text, '\n');
//}

//fs.readFile(path.resolve(basePath, 'invictus.txt'), { encoding: 'utf-8' }, cb);

const files = fs.readdirSync(path.resolve(basePath));

const sentences = files.filter((file) => /s[1-4].txt/gi.test(file));

for (const file of sentences) {
    fs.readFile(path.resolve(basePath, file), {encoding: 'utf-8'}, cb);
}

console.log('End');