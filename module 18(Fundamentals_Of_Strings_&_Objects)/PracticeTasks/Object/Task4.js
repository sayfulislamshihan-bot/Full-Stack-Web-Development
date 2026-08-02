// Task-4
// Count the number of properties.
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

count = 0;
for(let i in student){
    count++;
}
console.log('No of properties:',count);