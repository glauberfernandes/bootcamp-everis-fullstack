const students = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4}
]

console.log(students.some(student => student.grade >= 7));
// true