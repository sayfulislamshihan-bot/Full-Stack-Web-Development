// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.
function odd_even(value){
    if(value%2 === 0){
        let s1 = 'even';
        return s1;
    }
    if(value%2 !== 0){
        let s2 = 'odd';
        return s2;
    }
}

console.log(odd_even(19));
