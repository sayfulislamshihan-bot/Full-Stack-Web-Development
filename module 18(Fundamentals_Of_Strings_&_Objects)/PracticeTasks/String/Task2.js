let str = "A banana And an apple";
let count = 0;
for(let i of str){
    if(i.includes('a') || i.includes('A')){
        console.log(i);
        count++;
    }
}
console.log("Total no of A & a is",count);