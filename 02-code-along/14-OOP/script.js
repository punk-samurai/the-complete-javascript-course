"use strict";
// // Constructor Functions always starts with uppercase
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// // Never do this - never create a method under constructor function, otherwise repetitve redundant function will be carried around within instances
// this.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// Person.hey = function () {
//   console.log("Hey there!");
//   console.log(this);
// };
// Person.hey();

// const jonas = new Person("Jonas", 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype --> creates __proto__ property
// // 4. function automatically returns this created object {}

// const matilda = new Person("Matilda", 2017);
// const jack = new Person("Jacl", 1975);

// const jay = "jay";
// console.log(jonas instanceof Person); // true
// console.log(jay instanceof Person); // false

// // Prototypes
// // console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // jonas.calcAge();
// // matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype); // true

// console.log(Person.prototype.isPrototypeOf(jonas)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// // .prototypeOfLinkedObjects

// // set properties for prototype
// Person.prototype.species = "Homo Sapiens";
// console.log(jonas);
// console.log(jonas.hasOwnProperty("firstName")); //true
// console.log(jonas.hasOwnProperty("species")); //false

// console.log(jonas.__proto__.__proto__); // look up into the prototype chain, Object.prototype
// console.log(jonas.__proto__.__proto__.__proto__); // null

// console.dir(Person.prototype.constructor); // points back to itself

// // prototypes of arrays
// const arr = [3, 4, 4, 4, 4, 4, 4, 5, 6, 7];
// console.log(arr.__proto__); // Array.prototype
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__); // Object.prototype

// // extend prototypes
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique()); // [3, 4, 5, 6, 7]
// console.dir((x) => x + 1);

/* ****************** Coding Challenge 1****************** */
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// const car1 = new Car("BMW", 120);
// const car2 = new Car("Mercedes", 95);
// car1.accelerate();
// car1.brake();

// // class expression
// const PersonCl = class {}

// // class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   // Static method
//   static hey() {
//     console.log("Hey there!");
//     console.log(this);
//   }
// }

// const jessica = new PersonCl("Jessica Davis", 1996);

// console.log(jessica);
// console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCl.prototype); // true

// const walter = new PersonCl("Walter", 1965);

// PersonCl.hey();

// const account = {
//   owner: "jonas",
//   movement: [200, 530, 120],
//   get latest() {
//     return this.movement.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movement.push(mov);
//   },
// };

// console.log(account.latest); // write getters as a property
// account.latest = 70;

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// // Object.create
// const steven = Object.create(PersonProto); // now PersonProto is the prototype for steven object
// steven.name = "Steven"; // bad practice!
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 1979);
// sarah.calcAge();

/* ****************** Coding Challenge 2****************** */

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speedInMiles) {
//     this.speed = speedInMiles * 1.6;
//   }
// }

// const ford = new CarCl("Ford", 120);

// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford.speed);

/* ****************** Inheritance Between “Classes” using constructor functions ****************** */

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // create the prototype inheritance chain
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student("Mike", 2020, "Computer Science");
// mike.introduce();
// mike.calcAge();

// console.log(mike instanceof Student);

// Student.prototype.constructor = Student;

// console.log(mike.__proto__);

/* ****************** Coding Challenge 3****************** */
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(`${this.make}'s battery is now ${this.charge}%`);
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV("tesla", 120, 25);

// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(100);

/* ****************** Inheritance Between “Classes” using ES6 classes ****************** */

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   // Static method
//   static hey() {
//     console.log("Hey there!");
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullname, birthYear, course) {
//     // Always need to happen first!
//     super(fullname, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${2037 - this.birthYear} years, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl("Martha Steward", 2012, "Computer Science");
// martha.introduce();
// martha.calcAge();
// console.log(martha);

/* ****************** Inheritance Between “Classes” Object.create ****************** */

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// // Object.create
// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init("Jay", 2010, "Computer Science");
// jay.introduce();
// jay.calcAge();
// console.log(jay);

/* ****************** Another Class Example ****************** */
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   deposit(val) {
//     this.movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
// }

// const acc1 = new Account("Jonas", "EUR", 1111, []);
// console.log(acc1);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// acc1.approveLoan(1000);

// console.log(acc1);
// console.log(acc1.pin);

/* ****************** Encapsulation: Protected Properties and Methods ****************** */
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // protected property
//     this._pin = pin;
//     this._movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   // Public interface
//   getMovements() {
//     return this._movements;
//   }
//   deposit(val) {
//     this._movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
// }

// const acc1 = new Account("Jonas", "EUR", 1111, []);
// console.log(acc1);

// // acc1._movements.push(250);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// acc1.approveLoan(1000);
// console.log(acc1.getMovements());

// console.log(acc1.pin);

/* ****************** Encapsulation: Private Class Fields and Methods ****************** */
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// class Account {
//   // 1) Public fields (instances)
//   locale = navigator.language;

//   // 2) Private fields - properties that are truly not accessible from outside class
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;

//     this.#pin = pin;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // 3) Public methods

//   // Public interface
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
//   static helper() {
//     console.log(`Helper`);
//   }

//   // 4) Private methods - outside constructor
//   #approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account("Jonas", "EUR", 1111, []);
// console.log(acc1);

// // acc1._movements.push(250);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());

// // console.log(acc1.#approveLoan(1000)); // raises error
// // console.log(acc1.#movements); // raises error

// Account.helper();

/* ****************** Chaining Methods ****************** */
// class Account {
//   // 1) Public fields (instances)
//   locale = navigator.language;

//   // 2) Private fields - properties that are truly not accessible from outside class
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;

//     this.#pin = pin;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // 3) Public methods

//   // Public interface
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this; // refers to the current instance
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }
//   static helper() {
//     console.log(`Helper`);
//   }

//   // 4) Private methods - outside constructor
//   #approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account("Jonas", "EUR", 1111, []);
// console.log(acc1);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// // Chaining
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(`after chaining methods, ${acc1.getMovements()}`);

/* ****************** Coding Challenge 4****************** */
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make}'s battery is now ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);

// rivian.accelerate();
// rivian.brake();
rivian.chargeBattery(50).accelerate().accelerate().chargeBattery(75);
console.log(rivian.speedUS);
