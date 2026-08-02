// Capitalize Every first Letter of each word in a String
let str = "I like to sleep 8-9 hours per day which help me focus more on my work";
let sliceStr = str.split(" ");
let capitalize = sliceStr.map(function (word){  return word.charAt(0).toUpperCase() + word.slice(1); }).join(" ");
console.log(capitalize);

let Capitalize = [];
for(let i of sliceStr){
    let temp = i.charAt(0).toUpperCase() + i.slice(1);
    Capitalize.push(temp);
}
console.log(Capitalize.join(" "));




