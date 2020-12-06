const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 5000);
});


/*
// IIFE
(async function () {
    console.log('Olá mundo');
})()

// o que o interpretador irá fazer
(function() {
    return new Promise((resolve, reject) => {
        console.log('Olá mundo');

        resolve();
    })
})()

*/
/*
console.log('Begin');
promise.then((text) => console.log(text));
// or
promise.then(console.log);
//or
promise.then(
    (res) => setTimeout(() => console.log(res), 5000),
    (rej) => console.error(rej)
)
*/

// refatorando...

(async function() {
    console.log('Begin');
    const text = await promise;
    console.log(text);
    // or
    console.log(await promise);
    //or
    try{
        const res = await promise;
        //throw new Error('oh no!');
        setTimeout(() => console.log(res), 5000);
    } catch(rej) {
        console.error(rej);
    }
})()