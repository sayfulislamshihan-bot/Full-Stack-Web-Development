// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
let vowel = ['a', 'e', 'i', 'o', 'u'];
let str = "Education";
let lowStr = str.toLocaleLowerCase();
if(lowStr.includes('a') && lowStr.includes('e') && lowStr.includes('i') && lowStr.includes('o') && lowStr.includes('u')){
    console.log('True');
}
else{
    console.log('False');
}
