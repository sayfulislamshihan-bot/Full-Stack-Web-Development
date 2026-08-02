// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(str){
    str.split(' ');
    let count = 0;
    for(let s of str){
        if(s === '0'){
            count++;
        }
    }
    return count;
}
let result = count_zero('01000110101');
console.log('No of 0 in the string:',result);