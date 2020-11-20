function Pessoa(customProperties) {
    return {
        name: 'Glauber',
        lastName: 'Fernandes',
        ...customProperties
    }
}

const p = Pessoa({name: 'Custom Name', age: 37});

console.log(p);