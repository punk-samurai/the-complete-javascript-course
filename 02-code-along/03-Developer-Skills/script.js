// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = "23";
// if (x === 23) console.log(23);

// const calcAge = (birthYear) => 2024 - birthYear;
// console.log(calcAge(1993));

// PROBLEM:
// given an array of temperatures of one day, calculate the temperatuire amplitude.

// 1) understanding the problem
// - what is temp amplitude?
// - how to compute max and min temperatures?
// - what is a sensor error? and what to do?

// 2) breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - subtract min from max (amplitude) and return it
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== "number") continue;

//     if (currTemp > max) max = currTemp;
//     if (currTemp < min) min = currTemp;
//   }
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// DEBUGGING
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degree celsius: ")),
//   };
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// CODING CHALLENGE
// const printForecast = (arr) => {
//   let res = "";
//   for (let i = 0; i < arr.length; i++) {
//     const text = `...${arr[i]} in ${i + 1} days`;
//     res += text;
//   }
//   return res;
// };

// const testData1 = [17, 21, 23];
// const res1 = printForecast(testData1);

// const testData2 = [12, 5, -5, 0, 4];
// const res2 = printForecast(testData2);
// console.log(res1);
// console.log(res2);
