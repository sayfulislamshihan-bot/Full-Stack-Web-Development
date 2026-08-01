// Write a loop to print even numbers from 1 to 40.Skip numbers that is divisible by 5.

for(let n = 1; n<=40; n+=1){
    if(n%5===0){
        continue;
    }
    else{
        console.log(n);
    }
}