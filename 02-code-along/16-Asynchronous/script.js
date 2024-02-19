"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, lang, curr, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
        1
      )} million people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[lang]}</p>
      <p class="country__row"><span>💰</span>${data.currencies[curr].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

///***************** Our first AJAX call: XMLHttpRequest *****************/
// const renderCountry = function (data) {};
// const getCountryAndNeighbour = function (country, curr, lang) {
//   const request = new XMLHttpRequest(); // old-school way
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send(); //send request to the endpoint -ASYNC

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} Million people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[lang]}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[curr].name}</p>
//       </div>
//     </article>`;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryAndNeighbour("germany", "EUR", "deu");
// getCountryAndNeighbour("usa", "USD", "eng");

// /***************** Welcome to Callback Hell *****************/
// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 seconds passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//       setTimeout(() => {
//         console.log("4 second passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// /***************** Promises and the Fetch API *****************/
// const request = fetch("https://restcountries.com/v3.1/name/portugal");
// // console.log(request); // Promise
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0], "por", "EUR");
//     });
// };
// getCountryData("portugal");

/***************** Consuming Promises *****************/
// const getJSON = function (url, errorMsg = "Something went wrong") {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0], "por", "EUR");
//       const neighbour = data[0].borders[0];
//       console.log(data[0]);

//       if (!neighbour) return;
//       // country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], "spa", "EUR"))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

/***************** Throwing Errors Manually*****************/
// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
//     .then(data => {
//       renderCountry(data[0], "por", "EUR");
//       const neighbour = data[0].borders[0];
//       // const neighbour = "wewew";
//       console.log(data[0]);

//       if (!neighbour) return;
//       // country 2
//       return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, `Country not found`);
//     })
//     .then(data => renderCountry(data[0], "spa", "EUR"))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("portugal");
// });

/*****************  Coding Challenge #1 *****************/
// const renderCountry = function (data, lang, curr, className = "") {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[lang].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[curr].name}</p>
//     </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const whereAmI = function (lat, lng) {
//   fetch(` https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Geocoding went wrong! ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}?fullText=true`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found! ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       // renderCountry(data[0], "deu", "EUR");
//       // renderCountry(data[0], "eng", "INR");
//       renderCountry(data[0], "eng", "ZAR");
//     })
//     .catch(err => {
//       console.error(`${err.message} 💥💥💥`);
//     });
// };
// whereAmI("52.508", "13.381");
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

/*****************  The Event Loop in Practice *****************/
// console.log(`Test start`);
// setTimeout(() => console.log(`0 sec timer`), 0);
// Promise.resolve("Resolved promise 1").then(res => console.log(res));

// Promise.resolve("Resolved promise 2").then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log("Test end");
// // Test start
// // Test end
// // Resolved promise 1
// // Resolved promise 2
// // 0 sec timer

/*****************  Building a Simple Promise *****************/
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Lottery draw is happening 🔮`);
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You WIN 💰");
//     } else {
//       reject(new Error("You lost your money 💩"));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// // promisfying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     // impossible for the timer to fail
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// // without callback hell
// wait(2)
//   .then(() => {
//     console.log(`I waited for 2 seconds`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`I waited for 1 seconds`);
//   });

// Promise.resolve("abc").then(x => console.log(x)); // resolves immediately
// Promise.reject(new Error("Problem Here!")).then(x => console.error(x));

/*****************  Promisifying the Geolocation API *****************/
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// // getPosition().then(pos => console.log(pos));
// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(` https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Geocoding went wrong! ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       // console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}?fullText=true`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found! ${res.status}`);
//       console.log(res);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0], "eng", "USD");
//     })
//     .catch(err => {
//       console.error(`${err.message} 💥💥💥`);
//     });
// };

// btn.addEventListener("click", whereAmI);

/*****************  Coding Challenge #2 *****************/
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     // impossible for the timer to fail
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// const imgContainer = document.querySelector(".images");

// const createImage = function (imgPath) {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement("img");
//     img.src = imgPath;
//     img.addEventListener("load", function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener("error", function () {
//       reject(new Error(`Error loading img: ${imgPath}`));
//     });
//   });
// };

// let currentImg;

// createImage("img/img-1.jpg")
//   .then(img => {
//     currentImg = img;
//     console.log("Image 1 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("img/img-2.jpg");
//   })
//   .then(img => {
//     currentImg = img;
//     console.log("Image 2 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("img/img-3.jpg");
//   })
//   .catch(err => console.error(err));

/*****************  Consuming Promises with Async/Await *****************/
// const whereAmI = async function () {
//   const pos = await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;
//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   const dataGeo = await resGeo.json();
//   console.log(dataGeo);

//   const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
//   const data = await res.json();
//   console.log(data);
//   renderCountry(data[0], "USD", "eng");
// };
// whereAmI();
// console.log("First");

/***************** Error Handling With try…catch *****************/
// // A simple example
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

// const whereAmI = async function () {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error("Problem getting location data");
//     const dataGeo = await resGeo.json();

//     const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
//     if (!res.ok) throw new Error("Problem getting country");
//     const data = await res.json();
//     console.log(data[0]);
//     renderCountry(data[0], "USD", "eng");

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     renderError(`💥 ${err.message}`);

//     throw err; // re-throwing an error
//   }
// };

// console.log(`1: Will get location`);
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(`2: ${err.message}`));
// console.log(`3: Finished getting location`);

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message}`);
//   }
//   console.log(`3: Finished getting location`);
// })()

/***************** Running Promises in Parallel *****************/
// const getJSON = function (url, errorMsg = "Something went wrong") {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//     // console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital[0]));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3Countries("germany", "canada", "tanzania");

/***************** Other Promise Combinators: race , allSettled and any *****************/
// Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//     getJSON(`https://restcountries.com/v3.1/name/canada`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error("request took too long!"));
//     }, sec * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v3.1/name/mexico`), timeout(1)])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// // Promise.allSettled
// Promise.allSettled([
//   Promise.resolve("Success"),
//   Promise.reject("Error"),
//   Promise.resolve("Another Success"),
// ]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve("Success"),
//   Promise.reject("ERROR"),
//   Promise.resolve("Another success"),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// // Promise.any
// Promise.any([
//   Promise.resolve("Success"),
//   Promise.reject("ERROR"),
//   Promise.resolve("Another success"),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

/***************** Coding Challenge #3 *****************/
/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const wait = function (seconds) {
  return new Promise(function (resolve) {
    // impossible for the timer to fail
    setTimeout(resolve, seconds * 1000);
  });
};
const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error(`Error loading img: ${imgPath}`));
    });
  });
};

// // PART 1
// const loadNpause = async function () {
//   try {
//     let img = await createImage("img/img-1.jpg");
//     console.log("Image 1 loaded");
//     await wait(2);
//     img.style.display = "none";

//     img = await createImage("img/img-2.jpg");
//     console.log("Image 2 loaded");
//     await wait(2);
//     img.style.display = "none";

//     img = await createImage("img/img-3.jpg");
//     console.log("Image 3 loaded");
//     await wait(2);
//     img.style.display = "none";
//   } catch (err) {
//     console.error(err);
//   }
// };
// loadNpause();
// PART 2
// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
// 2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array 😉
// 5. Add the 'paralell' class to all the images (it has some CSS styles).

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img)); // the result is 3 promises
    const imgsEl = await Promise.all(imgs);
    console.log(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};

const testData = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];

loadAll(testData);

// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(async img => await createImage(img));
//     const imgsEl = await Promise.all(imgs);
//     console.log(imgsEl);
//     imgsEl.forEach(img => img.classList.add("parallel"));
//   } catch (err) {
//     console.error(err);
//   }
// };
