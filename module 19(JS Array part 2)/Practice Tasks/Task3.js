// Use a for...of loop to concatenate all the elements of an array into a single string.
var numbers = ['Tim', 'Tin', 'Tik','Tom'];
console.log(numbers.join(''));
let arrayToString = '';
for(let number of numbers){
       arrayToString = arrayToString + number;
} 
console.log(arrayToString);

