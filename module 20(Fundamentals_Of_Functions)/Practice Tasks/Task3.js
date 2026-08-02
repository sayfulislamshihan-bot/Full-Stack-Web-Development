// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(array){
    let sum = 0;
    for(let arr of array){
        sum = sum + arr;
    }
    return sum/array.length;
}
let result = make_avg([92,3,5,37,18]);
console.log(result);