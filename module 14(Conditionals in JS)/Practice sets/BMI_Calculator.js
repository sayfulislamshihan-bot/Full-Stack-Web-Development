// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.

let weight = 70;//in kg
let height = 1.76784;// 5.8 feet
let BMI = weight / (height * height);
let bmiHolder = BMI.toFixed(2);
console.log(bmiHolder);

if(bmiHolder < 18.5){
    console.log("You are underweight");
}
else if(bmiHolder >= 18.5){
    if(bmiHolder <= 24.9){
        console.log("you are normal");
    }
}
else if(bmiHolder >= 25){
    if(bmiHolder <= 29.9){
        console.log("you are overweight");
    }
}
else{
    console.log("You are obese");
}
