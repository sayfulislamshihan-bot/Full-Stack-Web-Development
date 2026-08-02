// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let str = "acyloYx acetoXyls";
let updStr;
if(str.includes('x') || Attr.includes('X')){
    updStr = str.replace('x','y').replace('X','Y');
}
console.log(updStr);