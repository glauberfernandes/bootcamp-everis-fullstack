function Pessoa() {
    if(!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const p = Pessoa.call({ name: 'Glauber' });

const p2 = Pessoa.call({ name: 'Fernandes' });

console.log(p);

console.log(p2);