const items = ['a', 'b', 'c', 'd'];

(async function() {
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject) => {
            return resolve(`${element} - promise`)
        })
    }

    // const itemMapped = promiseFunction('x')
    // console.log(await itemMapped);

    const itemMappedPromises = items.map(promiseFunction);

    const itemMapped = await Promise.all(itemMappedPromises);

    console.log(itemMapped);
})()