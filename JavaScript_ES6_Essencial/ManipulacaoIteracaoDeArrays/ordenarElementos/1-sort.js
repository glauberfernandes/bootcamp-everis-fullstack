const students = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4}
]

console.log(students.sort((current, next) => current.grade - next.grade));
// [
//   { name: 'Peter', grade: 4 },
//   { name: 'Jenny', grade: 5 },
//   { name: 'John', grade: 7 }
// ]