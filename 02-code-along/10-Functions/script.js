"use strict";

/********************** Default Parameters *********************/
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = numPassengers * 199
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2);
// createBooking("LH123", undefined, 1000);

/********************** How Passing Arguments Works: Value vs. Reference *********************/
// const flight = "LH234";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 13040506,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 13040506) {
//     alert("Check in");
//   } else {
//     alert("Wrong passport");
//   }
// };

// checkIn(flight, jonas);

// console.log(flight); // LH234
// console.log(jonas); // {name: 'Mr. Jonas Schmedtmann', passport: 13040506}

// // Is the same as doing..
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

/********************** Functions Accepting Callback Functions*********************/
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// // HO function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`); //functions can have properties
// };

// transformer("JavaScript is the best!", upperFirstWord);

// transformer("JavaScript is the best!", oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log("😬");
// };

// document.body.addEventListener("click", high5); // Another example of HO functions
/********************** Functions Returning Functions *********************/
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey!");
// greeterHey("Jonas");
// // Same as
// greet("Hello")("Jonas");

// // Challenge: write the greet function using arrow functions
// const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

/********************** The call and apply Methods*********************/
// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} filght ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, "Jonas Schmedtman");
// lufthansa.book(635, "John Smith");

// console.log(lufthansa.bookings);
// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;
// book(23, "Sarah Williams"); // RAISE AN ERROR
// book.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);

// book.call(lufthansa, 239, "Mary Cooper");
// console.log(eurowings);

// const swiss = {
//   airline: "Swiss Air Lines",
//   iataCode: "LX",
//   bookings: [],
// };

// book.call(swiss, 583, "Mary Cooper");

// // Apply method
// const flightData = [583, "George Cooper"];
// book.apply(swiss, flightData);
/********************** The bind Method *********************/
// book.call(eurowings, 23, "Sarah Williams");
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// bookEW(23, "Steven Williams");

// // we can use `bind` to create a function for a specific airline and a specific flight number
// const bookEW23 = book.bind(eurowings, 23); // flightNum is already set
// bookEW23("Jake Johnson");
// // Jake Johnson booked a seat on Eurowings filght EW23

// // With Event Listners
// lufthansa.planes = 300; // company has 300 planes
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// lufthansa.buyPlane(); // prints `lufthanse` and `301`
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane); // prints the button and NaN
// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// // Partial applicaiton
// const addTax = (rate, value) => value + value * rate;
// const addVAT = addTax.bind(null, 0.23); //PAY ATTENTION TO THE `null`

// console.log(addVAT(100));

// write it not using bind , but functions retuning other functions
// const addTaxByRate = (rate) => (value) => value + value * rate;
// console.log(addTaxByRate(0.23)(100));
// const addTaxByRate2 = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// console.log(addTaxByRate2(0.23)(100));

/********************** Coding Challenge #1 *********************/

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.quesiton}\n${this.options.join("\n")}\n(Write option number)}`
//       )
//     );

//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     this.displayResults("string");

//     this.displayResults();
//     this.displayResults("string");
//   },
//   displayResults(type = "array") {
//     if (type === "string") {
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     } else if (type === "array") {
//       console.log(this.answers);
//     }
//   },
// };
// poll.registerNewAnswer();
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

/********************** IIFE *********************/
// // not a real IIFE:
// const runOnce = function () {
//   console.log("this will never run again");
// };
// runOnce();

// // a real IIFE
// (function () {
//   console.log("this will never run again");
// })();

// // a IIFE arrow function
// (() => console.log("this will never run again!!!"))();
/********************** Closures *********************/
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

/********************** More Closure Examples *********************/
// // Example 1
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f(); // 46

// // Re-assigning f function
// h();
// f(); // 1554

// Exampel 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000; // shows closure have priority over scope chain
// boardPassengers(180, 3);

/********************** Coding Challenge #2 *********************/
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
