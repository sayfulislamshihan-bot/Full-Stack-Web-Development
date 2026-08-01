// Find all the odd numbers from 61 to 100 and add all numbers.
let n = 61;
sum = 0;
while(n<=100){
    if(n%2 !== 0){
        sum = sum + n;
        console.log(n);
    }
    n+=1;
}
console.log("All odd no from 61 to 100:",sum);

console.log(" ")

// Find all the even numbers from 78 to 98 and add all numbers.
let n2 = 78;
sum2 = 0;
while(n2<=98){
    if(n2%2 === 0){
        sum2 = sum2 + n2;
        console.log(n2);
    }
    n2+=1;
}
console.log("All odd no from 78 to 98:",sum2);