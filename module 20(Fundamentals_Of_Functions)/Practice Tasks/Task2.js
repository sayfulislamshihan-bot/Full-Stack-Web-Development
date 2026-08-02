// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function operation(num){
    if(num%2 === 1){
        let mul = num*2;
        console.log('Since',num,'is odd it is multiplied by 2 =',mul);
    }
    else if(num%2 === 0){
        let mul = num/2;
        console.log('Since',num,'is even it is divided by 2 =',mul);
    }
}
operation(7);
operation(20);
operation(14);
