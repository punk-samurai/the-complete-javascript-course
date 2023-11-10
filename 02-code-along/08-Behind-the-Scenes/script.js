"use strict";

/******************************** SCOPING IN PRACTICE ********************************/
// function calcAge(birthYear) {
//   const age = 2030 - birthYear;
//   // variable lookup happens
//   function printAge() {
//     const output = `${firstName} You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (1981 <= birthYear <= 1996) {
//       var millenial = true;
//       // creating new variable with same name as outer scope's variable
//       const firstName = "steven";

//       // function is block scoped starting from ES6 (strict mode). So cannot be accessed outside the if block
//       function add(a, b) {
//         return a + b;
//       }
//       // reassigning outer scope's variable.
//       output = "NEW OUTPUT";
//     }

//     console.log(millenial); // can be accessed
//     console.log(output); // should be 'NEW OUTPUT'
//     // console.log(add(2, 3)); // reference error
//   }
//   printAge();

//   return age;
// }

// const firstName = "Jing";
// calcAge(1993);

/******************************** HOISTING IN PRACTICE ********************************/
// console.log(me); //undefined
// console.log(job); //reference error: cannot access 'job' before initialization
// console.log(year);

// var me = "jing";
// let job = "student"; // in TDZ
// const year = 1993; // in TDZ

// console.log(addDecl(1, 1)); // 2
// console.log(addExpr(1, 1)); // reference error
// console.log(addArrow(1, 1)); // reference error
// // functions
// // func declaration, the actual function is hoisted
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// example of bad hoisting
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted!");
// }

// var x = 1; // shows in window
// let y = 2;
// const z = 3;
// console.log(x === window.x); // true
// console.log(y === window.y); // false

/******************************** this KEYWORD IN PRACTICE ********************************/
// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function () {
//     // Solution 1: self pointer
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log((self.year >= 1981) & (self.year <= 1996));
//     // };

//     // Solution 2: arrow functions
//     const isMillenial = () => {
//       console.log(this);
//       console.log((this.year >= 1981) & (this.year <= 1996));
//     };
//     isMillenial(); // simple function call will set this to undefined!!! So we use the `self` to point to the former `this`
//   },
//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet(); // gets `Hey undefined`

// // Arguement keyword - arrow functions does not have it
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(1, 2); //prints arguments

/******************************** Primitives vs. Objects ********************************/
// let age = 30;
// let oldAge = 30;
// age = 31;
// console.log(age); // 31
// console.log(oldAge); // 30

// const me = {
//   name: "Jonas",
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log("Friend", friend.age); // 27
// console.log("Me", me.age); // 27

/******************************** Primitives vs. Objects Practice********************************/
// // Primitive types
// let lastName = "Williams";
// let oldLastName = lastName;
// lastName = "Davis";
// console.log(lastName, oldLastName);

// // Reference types
// const jessica = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";

// // but we cannot change the value like this with `const`
// marriedJessica = {};

// // Copying objects
// const jessica2 = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
//   family: ["Alice", "Bob"],
// };
// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = "Davis"; // jessica2's lastName will reamin as `williams`
