// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

let mathematicsMark = 75.25;
let biologyMark = 65;
let chemistryMark = 80;
let physicsMark = 35.45;
let banglaMark = 99.50;

let sum = mathematicsMark + biologyMark + chemistryMark + physicsMark + banglaMark;
let average = sum/5;
console.log("Average mark = " +  average.toFixed(2));
