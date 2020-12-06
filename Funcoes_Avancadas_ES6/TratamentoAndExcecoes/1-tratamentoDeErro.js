class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try{
    // console.log(name);
    const name = 'Glauber Fernandes';

    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });

    throw myError;
} catch(err) {
    console.log(err);
    console.log(err.data);
} finally {
    console.log('Keep going...');
}

// Console

// console.log('Black text');
// console.warn('Yellow text with alert');
// console.error('Red error text');

// console.trace();

/*
console.group('My group');
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My group');
*/

/*
console.time('Log time');
setTimeout(() => {
    console.timeEnd('Log time');
}, 2000);
*/

// console.table(['Glauber Fernandes', 'Digital Innovation One']);
// console.assert(1 === 0, 'Ops');
// console.log('%c styled log', 'color: blue; font-size: 40px');