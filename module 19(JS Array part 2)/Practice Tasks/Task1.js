// Write a Javascript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reversedArray = [];
for(let i = colors.length-1; i > -1; i--){
    let temp = colors[i];
    reversedArray.push(temp);
}
console.log(reversedArray);