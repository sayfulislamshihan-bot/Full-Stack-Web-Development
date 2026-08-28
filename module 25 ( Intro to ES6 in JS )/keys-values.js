// const king = { name: 'Mufasa', age: 55, kingdom: 'Pride Lands' };
// const keys = Object.keys(king);
// const values = Object.values(king)
// const entries = Object.entries(king);
// console.log(entries);


const king = { name: 'Mufasa', age: 55, kingdom: 'Pride Lands' };
// Object.freeze(king)
Object.seal(king)
const keys = Object.keys(king).length
// const values = Object.values(king)
const entries = Object.entries(king)
delete king.age;
king.name='Simba';
console.log(king)
console.log(keys)
// console.log(values)
// console.log(entries)