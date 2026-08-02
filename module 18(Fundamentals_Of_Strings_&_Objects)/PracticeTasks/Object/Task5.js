// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(let i in myObject){

    console.log(i , ':', myObject[i],'|', 'type:', typeof(myObject[i]));
}

// let a = 23;
// let ikhi = console.log(typeof(a));