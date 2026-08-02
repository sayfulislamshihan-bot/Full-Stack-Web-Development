// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output.

const statement = 'I am a hard working person';
let arrStatement = statement.split(' ');
let revStatement = [];
for(let s of arrStatement){
    revStatement.unshift(s);
}
console.log(revStatement.join(' '));

