// Find all the odd numbers from 91 to 129 and add all numbers.
sum = 0;
for(let n = 91; n<=129; n+=1){
    if(n%2 !== 0){
        sum = sum + n;
        console.log(n);
    }
}
console.log("All odd no from 91 to 129:",sum);

console.log(" ")

// Find all the even numbers from 51 to 85 and add all numbers.
sum2 = 0;
for(let n2 = 51; n2<=85; n2+=1){
    if(n2%2 === 0){
        sum2 = sum2 + n2;
        console.log(n2);
    }
}
console.log("All odd no from 51 to 85:",sum2);
