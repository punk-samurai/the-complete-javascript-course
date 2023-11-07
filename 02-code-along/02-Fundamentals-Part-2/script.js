// ************************* Activating Strict Mode ***************************
// `use strict`;

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const private = "Audio"; // not allowed
// const if = 'this;'

// ***************************** Functions *****************************
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 2);
// console.log(appleOrangeJuice);

// ********************* Function Declarations vs Expressions *********************
// // this is a Function Declaration
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// const age1 = calcAge1(1993);

// // this is a Function Expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// const age2 = calcAge2(1993);
// console.log(age1, age2);

// ********************* Arrow Functions *********************
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1993);
// console.log(age3);

// const yearsUntileRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntileRetirement(1993, "Noel"));

// ********************* Functions Calling Other Functions *********************
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// ********************* Reviewing Functions *********************
// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };
// const yearsUntileRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }
// };
// console.log(yearsUntileRetirement(1993, "Noel"));
// console.log(yearsUntileRetirement(1970, "Luke"));

// ********************* Introduction to Arrays  *********************
// const friends = ["Micheal", "Steven", "Peter"]; // literal syntax
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(firends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay"; // change values
// // friends = ['Bob', "Alice"] // illegal!

// const firstName = "Jing";
// const jing = [firstName, "Wang", 2023 - 1993, "unemployed", friends];
// console.log(jing);

// ********************* Basic Array Operations  *********************
// const friends = ["Micheal", "Steven", "Peter"];
// // ADD ELEMENTS
// // add an element to the end (and it returns the length of the updated array
// friends.push("Jay");
// // add an element to the beginning (also returns the length of the updated array)
// friends.unshift("John");

// // REMOVE ELEMENTS
// // remove the element from the tail, returns the removed element
// friends.pop();
// // remove the element at the beginning, returns the removed element
// friends.shift();

// // FIND THE INDEX OF CERTAIN ELEMENT
// friends.indexOf("Steven"); // returns 1
// // RETURN BOOLEAN VALUE
// friends.includes("Steven"); // returns true + DOES NOT DO TYPE COERCION

// ********************* Introduction to Objects  *********************
// const jing = {
//   firstName: "Jing",
//   lastName: "Wang",
//   age: 2023 - 1993,
//   job: "unemployed",
//   friends: ["Michael", "David", "Bianca"],
// };

// *********************  Dot vs. Bracket Notation *********************
// console.log(jing.lastName);
// console.log(jing["lastName"]);

// const nameKey = "Name";
// console.log(jing["first" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jing? Choose between firstName, lastName, age, job and friends"
// );

// if (jing[interestedIn]) {
//   console.log(jing[interestedIn]);
// } else {
//   console.log("wrong request!");
// }

// jing.location = "US";
// jing["WeChat"] = "veri_disco";

// console.log(
//   `${jing.firstName} has ${jing.friends.length} friends, and her best friend is called ${jing.friends[0]}`
// );

/* *********************  Object Methods ********************* */
// const jing = {
//   firstName: "Jing",
//   lastName: "Wang",
//   birthYear: 1993,
//   job: "unemployed",
//   friends: ["Michael", "David", "Bianca"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jing.calcAge());
// console.log(jing.getSummary());

/* *********************  Iteration: the for Loop ********************* */
// for loop keeps running while condition is true
// for (let rep = 5; rep <= 10; rep++) {
//   console.log(`Lifting weights repitition ${rep}🏋️‍♂️`);
// }

/* *********************  Looping Arrays, Breaking and Continuing ********************* */
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
// ];

// const types = [];
// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i]);
//   // types[i] = typeof jonasArray[i];
//   types.push(typeof jonasArray[i]);
// }
// console.log(types);

// // continue and break
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;
//   console.log(jonasArray[i]);
// }

/* *********************  Looping Backwards and Loops in Loops` ********************* */
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
// ];
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }
// // Loops in Loops
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---------------Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight repitition ${rep}`);
//   }
// }

/* *********************  The while Loop ********************* */
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice;
// while (dice !== 6) {
//   dice = Math.trunc(Math.random() * 6) + 1;
//   console.log(`You rolled a ${dice}`);
//   if (dice === 6) console.log(`Loop is about to end...`);
// }
