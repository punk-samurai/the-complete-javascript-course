// LECTURE - values and variables

let country = "China";
let continent = "Asia";
let population = 1400; // in millions

console.log(country, continent, population);

/* ************************************************************************************ */
// LECTURE - data types

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
HTMLFormControlsCollection.log(typeof language);

/* ************************************************************************************ */
// LECTURE - let, const and var
language = "Mandarin";
const country = "China";
const continent = "Asia";
const isIsland = false;
isIsland = true;

/* ************************************************************************************ */
// LECTURE - Basic Operators
console.log(population / 2);
console.log(population++);
console.log(pouplation > 6);
console.log(population < 33);
const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description1);

/* ************************************************************************************ */
// LECTURE - Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

/* ************************************************************************************ */
// LECTURE - Taking Decisions: if / else Statements
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

/* ************************************************************************************ */
// LECTURE - Type Conversion and Coercion
"9" - "5"; // 4
"19" - "13" + "17"; // '617'
"19" - "13" + 17; // 23
"123" < 57; // false
5 + 6 + "4" + 9 - 4 - 2; // 1143

/* ************************************************************************************ */
// LECTURE - Equality Operators: == vs. ===
// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );

// const numNeighbours = Number(
//   prompt('How many neighbour countries does your country have?'),
//   );
if (numNeighbours == 1) {
  console.log("Only1border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

/* ************************************************************************************ */
// LECTURE - Logical Operators
if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
