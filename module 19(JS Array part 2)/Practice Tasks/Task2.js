// Write a javascript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenArray = [];
for(let number of numbers){
    if(number%2===0){
        evenArray.push(number);
    }
}
console.log(evenArray);