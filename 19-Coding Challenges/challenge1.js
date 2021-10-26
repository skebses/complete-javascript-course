/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.*/

// Data 1
let massMark = 78; // in kg
let heightMark = 1.69; // in m
let massJohn = 92; // in kg
let heightJohn = 1.95; // in m

let bmiMark = (massMark / (heightMark ** 2));
let bmiJohn = (massJohn / (heightJohn ** 2));
let markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);

// Data 2
massMark = 95; // in kg
heightMark = 1.88; // in m
massJohn = 85; // in kg
heightJohn = 1.76; // in m

bmiMark = (massMark / (heightMark ** 2));
bmiJohn = (massJohn / (heightJohn ** 2));
markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);