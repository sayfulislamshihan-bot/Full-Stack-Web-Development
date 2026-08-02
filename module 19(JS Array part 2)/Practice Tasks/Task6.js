// Given an array of student objects, print each student’s name and marks.
let students = [
            { name: "John", marks: 85 },
            { name: "Alice", marks: 90 }
        ];

for(let student of students){
    console.log(student.name,'scored',student.marks);
}