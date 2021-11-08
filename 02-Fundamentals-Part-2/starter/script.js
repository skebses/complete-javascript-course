'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;


function logger() {
  console.log('My name is Jonas');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// LECTURE: Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its
  capital city is ${capitalCity}`;
}

let germany = describeCountry('Germany', 83, 'Berlin');
let finland = describeCountry('Finland', 6, 'Helsinki');
let sweden = describeCountry('Sweden', 10, 'Stockholm');

console.log(germany);
console.log(finland);
console.log(sweden);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

// LECTURE: Function Declarations vs. Expressions

function percentageOfWorld1(population) {
  return Number((population / 7900) * 100);
}

let sweden = percentageOfWorld1(10);
let finland = percentageOfWorld1(6);
let germany = percentageOfWorld1(82);

console.log(sweden, finland, germany);

const percentageOfWorld2 = function (population) {
  return Number((population / 7900) * 100);
}

sweden = percentageOfWorld2(10);
finland = percentageOfWorld2(6);
germany = percentageOfWorld2(82);

console.log(sweden, finland, germany);

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// LECTURE: Arrow Functions

const percentageOfWorld3 = population => Number((population / 7900) * 100);

let sweden = percentageOfWorld3(10);
let finland = percentageOfWorld3(6);
let germany = percentageOfWorld3(82);

console.log(sweden, finland, germany);

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3))

// LECTURE: Functions Calling Other Functions

function percentageOfWorld1(population) {
  return Number((population / 7900) * 100);
}

function describePopulation(country, population) {
  let percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
}

console.log(describePopulation('Germany', 82));
console.log(describePopulation('Sweden', 10));
console.log(describePopulation('Finland', 6));

///////////////////////////////////////////////////////////////////////
Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.

Example: "Koalas win (30 vs. 13)"

4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No winner');
  }
}

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);

const friend1 = 'Miachel';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);

// LECTURE: Introduction to Arrays

let populations = [82, 10, 6, 12];

console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return Number((population / 7900) * 100);
}

let percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
];

console.log(percentages);

const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

friends.pop(friends);
const popped = friends.pop(friends);

console.log(popped)
console.log(friends)

friends.shift();
console.log(friends)

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

// LECTURE: Basic Array Operations (Methods)

let neighbours = ['Canada', 'Mexico', 'Jamaika'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country');
}
neighbours[neighbours.indexOf('Canada')] = 'Canucks';

console.log(neighbours);

///////////////////////////////////////////////////////////////////////
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15 % of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20 %.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above(you can check out the code from first tip calculator challenge if you need to.Use the function type you like the most.Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data below

3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function!So you can just call a function as array values(so don't store the tip values in separate variables first, but right in the new array)

function calcTip(billValue) {
    if (billValue >= 50 && billValue <= 300) {
      return billValue * 0.15;
    } else {
      return billValue * 0.2;
    }
  }

let bills = [125, 555, 44];
let tips = [];

tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));

console.log(bills);
console.log(tips);

let total = [];
total.push(bills[0] + tips[0]);
total.push(bills[1] + tips[1]);
total.push(bills[2] + tips[2]);

console.log(total);

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

// LECTURE: Introduction to Objects

let myCountry = {
  country: 'Finland',
  capital: 'Helsinki',
  lanugage: 'finnish',
  population: 6,
  neighbours: ['Norway', 'Sweden', 'Russia']
};

console.log(myCountry);

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

let nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

let interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

// LECTURE: Dot vs. Bracket Notation

let myCountry = {
  country: 'Finland',
  capital: 'Helsinki',
  language: 'finnish',
  population: 6,
  neighbours: ['Norway', 'Sweden', 'Russia']
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);


console.log(myCountry.population);
myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  }
};

console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
//console.log(jonas['calcAge'](1991));

console.log(jonas.getSummary());

// LECTURE: Object Methods

let myCountry2 = {
  country: 'Finland',
  capital: 'Helsinki',
  language: 'finnish',
  population: 6,
  neighbours: ['Norway', 'Sweden', 'Russia'],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0;
  }
};

console.log(myCountry2.describe());
myCountry2.checkIsland();
console.log(myCountry2);

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it from the method

3. Log to the console who has the higher BMI, together with the full name and the  respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

let mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = Number(this.weight / (this.height ** 2));
    return this.bmi;
  }
}

let john = {
  firstName: 'John',
  lastName: 'Smith',
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = Number(this.weight / (this.height ** 2));
    return this.bmi;
  }
}

if (john.calcBMI() > mark.calcBMI()) {
  console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})!`);
} else if (mark.calcBMI() > john.calcBMI()) {
  console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`);
} else {
  console.log("Equal BMI's");
}

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// LECTURE: Iteration: The for Loop

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting.`);
}

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof (jonas[i]));

  types.push(typeof (jonas[i]));
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

console.log('log strings');
for (let i = 0; i < jonas.length; i++) {
  if (typeof (jonas[i]) !== 'string') {
    continue;
  }
  console.log(jonas[i], typeof (jonas[i]));
}

console.log('break after number');
for (let i = 0; i < jonas.length; i++) {
  if (typeof (jonas[i]) === 'number') {
    break;
  }
  console.log(jonas[i], typeof (jonas[i]));
}

// LECTURE: Looping Arrays, Breaking and Continuing

let populations = [82, 10, 6, 12];
let percentages2 = [];

let percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
];

function percentageOfWorld1(population) {
  return Number((population / 7900) * 100);
}

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages);
console.log(percentages2);

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

// LECTURE: Looping Backwards and Loops in Loops

let listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weight repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log('Looop ending');
  }
}

// LECTURE: The while Loop

let populations = [82, 10, 6, 12];
let percentages3 = [];

let percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
];

function percentageOfWorld1(population) {
  return Number((population / 7900) * 100);
}

let i = 0
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:

4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together

4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)

4.3. Call the function with the 'totals' array

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(bills);
console.log(tips)
console.log(totals);

function calcAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAvg(totals));
*/