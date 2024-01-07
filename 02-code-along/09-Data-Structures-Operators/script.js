"use strict";

// Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 1,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`
//     );
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

/************************** Destructuring Arrays **************************/
// const arr = [1, 2, 3];
// // old way
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// // destructure
// const [x, y, z] = arr; // x = 1, y = 2, z = 3

// // get the first 2 elements
// const [first, second] = restaurant.categories
// // get the first and third elements: second element is skipped!!
// const [main, , secondary] = restaurant.categories

// // switch variables without using `temp` variable, but using destructuring
// [secondary, main] = [main, secondary];

// // receive 2 return values from a function
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// //Nested Destructuring  - COOL!!!!!
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Defuault values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); //8, 9, r = undefined
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8, 9 , 1

/************************** Destructuring Objects **************************/
// console.log(name, openingHours, categories);

// // destructure objects and rename them
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// // if `starterMenu` does not exist, use an empty array.
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj); // MAGIC!!!!!!!!!!
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c); // 11 23. Notice: fri is undefined

// // example of destructuring obj as parameters
// restaurant.orderDelivery({
//   time: "22: 30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });
// const { name, openingHours, categories } = restaurant;

/************************** Spread Operator **************************/
// const arr = [7, 8, 9];
// // create a new array with elements from arr, AND some new elements
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // bad practice
// const newArr = [1, 2, ...arr];

// // create a new menu using the `menu` fron  `restaurant`
// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// // Shallow copying array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// // spread op on iterables
// const str = "Jonas";
// const letters = [...str, "", "s"];
// console.log(letters); // ['J', 'o', 'n', 'a', 's', '', 's']

// // Real world example: use spread op to pass parameters
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = {
//   ...restaurant,
//   founder: "Guiseppe",
//   foundingYear: 1988,
// };
// console.log(newRestaurant);

/************************** Rest Pattern and Parameters **************************/
// // REST, because on the LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); // 1, 2, [3, 4, 5]

// // REST in Arrays;
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // REST in Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   return sum;
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 4, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x); // `...x` is SPREAD

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

/************************** Short Circuiting (&& and ||)**************************/
// // Use ANY data type, return ANY data type
// console.log(3 || "Jonas"); // 3
// console.log("" || "Jonas"); // 'Jonas'
// console.log(true || 0); // true
// console.log(undefined || null); // null
// console.log(undefined || 0 || null || "" || 0); // 0

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10; // simpler compared to guests1 ternary operator
// console.log(guest2);
// console.log("------ AND --------");
// console.log(0 && "Jonas"); // '0'
// console.log(7 && "Jonas"); // 'Jonas'
// console.log("Hello" && 23 && null && "jonas"); // 23

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }
// // simpler using &&
// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

/************************** The Nullish Coalescing Operator **************************/
// Nullish values: null and undefined
// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests); // 10

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); // 0

/************************** Logical Assignment Operators **************************/
// const rest1 = {
//   name: "Capri",
//   numGuests: 20,
// };
// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };

// // OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest1.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // Logical nullish coalescing operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1); // 20
// console.log(rest2); // 10

// // AND assignment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>"; // undefined because rest1.owner does not exist
// rest2.owner = rest2.owner && "<ANONYMOUS>";

// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";
// console.log(rest1);
// console.log(rest2);

/************************** Looping Arrays: The for-of loop **************************/
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item); // [0, 'Focaccia']
// }
// console.log([...menu.entries()]); // Array Iterator {}

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

/************************** Enhanced Object Literals **************************/
// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day-${2 + 4}`]: {
//     open: 0,
//     close: 24,
//   },
// };
// console.log(openingHours);
// const restaurant2 = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   // 1. ES6 enhanced object literals:
//   openingHours,
//   // older version:
//   openingHours: openingHours,
//   // 2.
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   // older version
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

/************************** Optional Chaining (?) **************************/
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }
// // Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

// // Arrays
// const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// console.log(uses[0]?.name);

/************************** Looping Objects: Object Keys, Values and Entries **************************/
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // Property NAMES
// const properties = Object.keys(openingHours); // ['thu', 'fri', 'sat']
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);

// // Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

/************************** Sets **************************/
// const ordersSet = new Set(["Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]); // duplicates will be removed
// console.log(ordersSet);

// console.log(new Set("Jonas")); //{'J', 'o', 'n', 'a', 's'}
// // size:
// console.log(ordersSet.size);
// // check if an element exists
// console.log(ordersSet.has("Pizza"));
// // add element
// ordersSet.add("Garlic bread");
// // delete element
// ordersSet.delete("Pizza");
// // clear:
// // ordersSet.clear()
// // iterate
// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
// const staffUnique = [...new Set(staff)]; // convert into array
// console.log(staffUnique);

/************************** Maps: Fundamentals **************************/
// const rest = new Map();
// // add new elements, also returns the updated map
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");

// // chaining
// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "we are open:D")
//   .set(false, "we are closed:(");

// console.log(rest.get("name"));
// console.log(rest.get(true));

// // a clever example: why using boolean as keys
// const time = 21;
// rest.get(time > rest.get("open") && time < rest.get("close"));

// // delete element
// rest.delete(2);
// console.log(rest);

// // check if a key exists
// console.log(rest.has("categories"));
// // size
// console.log(rest.size);

// // clear
// rest.clear();

// // a trap of using array/object as key
// rest.set([1, 2], "test");
// console.log(rest.has([1, 2])); // false, this way does not work

// // the right way
// const arr = [1, 2];
// rest.set(arr, "Test");
// console.log(rest.has(arr));
// console.log(rest.get(arr));

// // even use a dom element has a key, CRAZY
// rest.set(document.querySelector("h1"), "Heading");

/************************** Maps: Iteration  **************************/
// // creating new map using array with nested array key-value pairs
// const question = new Map([
//   ["question", "what is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct!"],
//   [false, "Try Again"],
// ]);
// console.log(question);

// // Convert object to map
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz App
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer: ${key}: ${value}`);
// }

// const answer = Number(prompt("Your answer"));
// console.log(question.get(answer === question.get("correct")));

// // Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.values()]);
// console.log([...question.keys()]);

/************************** Working With Strings I**************************/
// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]);

// console.log(airline.length);
// console.log("B737".length);

// console.log(airline.indexOf("r")); // gives us the first one
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("Portugal")); // CASE SENSITIVE

// console.log(airline.slice(4)); // 'Air Portugal'
// console.log(airline.slice(4, 7)); // 'Air'  IT DOES NOT INCLUDE THE END INDEX IN THE NEW SLICE

// console.log(airline.slice(-2)); // '-2' means the last 2 chars: al
// console.log(airline.slice(1, -1)); // AP Air Portuga, note that -1 is not included
// console.log(airline.slice(-2)); // al

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log("You got the middle seat 😬");
//   else console.log("You got lucky 😎");
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(typeof new String("Jonas")); // object
// console.log(typeof new String("Jonas").slice(1)); // string

// console.log(typeof new String("jonas").slice(1)); // string

/************************** Working With Strings II **************************/
// const airline = "TAP Air Portugal";

// console.log(airline.toLowerCase());
// console.log("jonas".toUpperCase());

// const passenger = "jOnAS";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = "hello@jonas.io";
// const loginEmail = "   Hello@Jonas.Io \n";

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail === email);

// // replacing
// const priceGB = "288,97£";
// const priceUS = priceGB.replace(",", ".").replace("£", "$"); // '288.97$

// const announce = "All passengers come to boarding door 23. Boarding door 23!";
// console.log(announce.replaceAll("door", "gate"));

// // use regular expressions to get around this `replace`:
// console.log(announce.replaceAll(/door/g, "gate"));

// // methods that returns booleans
// const plane = "Airbus A320neo";
// console.log(plane.includes(32)); // true
// console.log(plane.startsWith(Airbus)); // true

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("Part of the NEW airbus family");
// }

// // practice exercise
// const checkBaggage = function (items) {
//   // start by putting everything into lowercase
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are NOT allowed on board");
//   } else {
//     console.log("Welcome aboard!");
//   }
// };

// checkBaggage("I have a laptop. some food and a pocket knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for Protection");

/************************** Working With Strings III**************************/
// console.log("a+very+nice+string".split("+")); // ['a', 'very', 'nice', 'string']
// console.log("Jonas Wang".split(" ")); // ['Jonas', 'Wang']
// console.log("Jonas Wang".split("")); // ['J', 'o', 'n', 'a', 's', ' ', 'W', 'a', 'n', 'g']

// const [firstName, lastName] = "Jonas Wang".split(" ");
// console.log(lastName);
// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// const passenger = "jessica ann smith davis";
// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(" "));
// };

// capitalizeName(passenger);

// // Padding
// const message = "Go to gate 23!";
// console.log(message.padStart(25, "+")); // +++++++++++Go to gate 23!
// console.log(message.padStart(25, "+").padEnd(35, "+")); // +++++++++++Go to gate 23!++++++++++

// const maskCreditCard = function (number) {
//   const str = number + ""; // instead of using `String()`
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };

// console.log(maskCreditCard(43371272739895473484));
// console.log(maskCreditCard("4895849673904308549"));

// // Repeat
// const message2 = "Bad weather.. All Departures Delayed...  ";
// console.log(message2.repeat(3)); // repeat 3 times

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${"🛫".repeat(n)}`);
// };
// planesInLine(5);

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

/************************** Challenge 1 **************************/
// // 1.
// const [players1, players2] = game.players;

// // 2.
// const [gk, ...fieldPlayers] = players1;

// // 3.
// const allPlayers = [...players1, ...players2];
// // 4.
// const players1Final = [...players1, "Thiago", "Coutinho", "Persic"];

// // 5.
// // const { team1, x: draw, team2 } = game.odds; // my solution
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// function printGoals(...playerNames) {
//   console.log(...playerNames);
//   console.log(`Total goals scored: ${playerNames.length}`);
// }
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// // 7.
// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team1 > team2 && console.log(`Team 2 is more likely to win`);

/************************** Challenge 2 **************************/
// // 1.
// for (const [idx, player] of game.scored.entries())
//   console.log(`Goal ${idx + 1}:  ${player}`);

// // 2.
// const odds = Object.values(game.odds);
// let sum = 0;
// for (const odd of odds) sum += odd;
// console.log(`the average ood is ${sum / odds.length}`);

// 3.
// // my solution
// for (const [team, odd] of Object.entries(game.odds)) {
//   game[team] && console.log(`Odd of victory ${game[team]}: ${odd}`);
//   team === "x" && console.log(`Odd of draw: ${odd}`);
// }

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// // Bonus
// const scorers = {};

// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

/************************** Challenge 3 **************************/
// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);

// // 3.
// const avgTime = 90 / gameEvents.size;
// console.log(`An event happened, on average, every ${avgTime} minutes`);

// // 4.
// for (const [time, event] of gameEvents) {
//   const half = time <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${time}: ${event}`);
// }

/************************** Challenge 4 **************************/
// test data in 1.txt

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const textArray = text.split("\n");
//   let checkNum = 1;
//   for (const t of textArray) {
//     let [first, second] = t.trim().split("_");
//     first = first.toLowerCase();
//     second = second[0].toUpperCase() + second.slice(1).toLowerCase();
//     console.log((first + second).padEnd(20, " ") + "✅".repeat(checkNum));
//     checkNum++;
//   }
// });
/************************** String Method Practice **************************/
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} ${time.replace(":", "h")}`.padStart(36);
  console.log(output);
}
