let qnv = 0;
let med = 0;

do {
    let n = gets();

    if(n < 0 || n > 10) {
        console.log('nota invalida');
    } else {
        med += n;
        qnv++;
    }
} while (qnv < 2)

console.log('media = ' + (med / qnv).toFixed(2))