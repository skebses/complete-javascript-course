/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI.
The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher
than John's (23.9)!"

Hint: Use an if/else statement 😉
 GOOD LUCK 😀*/

let massMark = 78; // in kg
let heightMark = 1.69; // in m
let massJohn = 92; // in kg
let heightJohn = 1.95; // in m

let bmiMark = (massMark / (heightMark ** 2));
let bmiJohn = (massJohn / (heightJohn ** 2));

if (bmiMark > bmiJohn) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log(`Mark's BMI (${bmiJohn}) is higher than John's (${bmiMark})!`);
}