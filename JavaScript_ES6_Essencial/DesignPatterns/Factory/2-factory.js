function Pessoa(name) {
    return {
        name,
        lastName: 'Fernandes'
    }
}

const p = Pessoa('Custom Name');

console.log(p);