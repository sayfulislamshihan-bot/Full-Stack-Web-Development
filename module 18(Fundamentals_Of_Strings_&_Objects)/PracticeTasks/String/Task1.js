// Task-1:
// Count how many times a string has the letter a

const str = "i am the greatest hard working and consistent parson  in the planet";
counter = 0;
let lowerStr = str.toLocaleLowerCase().split("");
console.log(lowerStr);
for(let i = 0; i<lowerStr.length; i++){
    if(lowerStr[i]=='a'){
        counter++;
    }
}
console.log(counter);

count = 0;
for(let i of str){
    if(i=='a'){
        count++;
    }
}
console.log(count);