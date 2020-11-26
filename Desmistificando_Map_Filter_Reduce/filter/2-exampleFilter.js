const pets = [
    {
        name: 'rex',
        type: 'dog', 
        age: 10
    },
    {
        name: 'miau',
        type: 'cat', 
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish', 
        age: 1
    }
]

const eMenorQueCinco = (numero) => {
    return numero < 5
}

//const newPets = pets.filter((pet) => eMenorQueCinco(pet.age));

const newPets = pets.filter(({ age }) => eMenorQueCinco(age));

console.log(pets);
//[
//    { name: 'rex', type: 'dog', age: 10 },
//    { name: 'miau', type: 'cat', age: 2 },
//    { name: 'gulp', type: 'fish', age: 1 }
//]
console.log(newPets);
//[
//    { name: 'miau', type: 'cat', age: 2 },
//    { name: 'gulp', type: 'fish', age: 1 }
//]