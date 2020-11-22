const students = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4}
]

console.log(students.reduce((totalGrades, student) => totalGrades += student.grade, 0));
// 16

console.log(students.reduce((studentNames, student) => studentNames += student.name + ' ', ''));
// John Jenny Peter 

