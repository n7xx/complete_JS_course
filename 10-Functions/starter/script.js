'use strict';

// Default parameters

/* const bookings = [];
const creatBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  /*   numPassengers = numPassengers || 1;
  price = price || 1999; /
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

creatBooking('LJH13');
creatBooking('LJH13', 2, 800);
creatBooking('LJH13', 2);
creatBooking('LJH13', 5);

creatBooking('LH123', undefined, 1000);

const flight = 'LD234';
const nashaat = {
  name: 'Nashaat Fathy',
  passport: 3453873568,
};

const checkIn = function (flightNums, passenger) {
  flightNums = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 3453873568) {
    alert('Checked in!');
  } else {
    alert('Wrong Passport');
  }
}; */

/* checkIn(flight, nashaat);
console.log(flight);
console.log(nashaat);
// flightNum = flight;

// is the same as doing
const flightNum = flight;
const passenger = nashaat;
 */
/* const newPassport = function (person) {
  person.passport = Math.trunc(Math.random * 100000000000);
};

newPassport(nashaat);
checkIn(flight, nashaat);
 */
/* const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher-order function
const transFormer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};

transFormer('JavaScript is the best!😑', upperFirstWord);
transFormer('JavaScript is the best!', oneWord);

// JS uses Callbacks all time
const giveEmojy = function () {
  console.log('😑');
};

document.body.addEventListener('click', giveEmojy);
['a', 'b', 'c', '6'].forEach(giveEmojy);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Nashaat');
greeterHey('Fathy');

greet('Hello')('Nashaat');
// challange
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hello')('Nashaat From Arrow');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: funciton() {}
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} ${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, name ` });
  },
};

lufthansa.book(239, 'Nashaat Fathy');
lufthansa.book(200, 'Mina Fathy');

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
// Uncaught TypeError: Cannot read properties of undefined (reading 'airline')
// -> book(23, 'Youssef Hossam');


// Call Method
book.call(euroWings, 23, 'Youssef Hossam');
console.log(euroWings);

book.call(lufthansa, 253, 'Nashaat Fathy');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
}
book.call(swiss, 234, 'Boda');

// Apply method
const flightData = [253, 'Nashaat Fathy'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); */

// COPY: This code by ChatGPT for underStand above code with comments
/* 
// This function removes all spaces from the string and converts it to lowercase
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// This function capitalizes the first word of the string while keeping the rest of the words the same
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' '); // Split the string into an array of words
  return [first.toUpperCase(), ...others].join(' '); // Capitalize the first word and join the rest
};

// Higher-order function that accepts a string and another function (fn) as parameters
const transFormer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`); // Applies the passed function (fn) to the string
  console.log(`Transformed by: ${fn.name}`); // Prints the name of the function used for transformation
};

// Passing different transformation functions (upperFirstWord and oneWord) into transFormer
transFormer('JavaScript is the best!😑', upperFirstWord); // Output: JAVASCRIPT is the best!
transFormer('JavaScript is the best!', oneWord); // Output: javascriptisthebest!

// Function that logs an emoji to the console
const giveEmojy = function () {
  console.log('😑');
};

// Adding an event listener to the body of the document, logs an emoji whenever the page is clicked
document.body.addEventListener('click', giveEmojy);

// Calls giveEmojy for each item in the array, logs the emoji multiple times
['a', 'b', 'c', '6'].forEach(giveEmojy);

// Function that returns another function (closure)
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Using the greet function to create new functions that greet with specific messages
const greeterHey = greet('Hey');
greeterHey('Nashaat'); // Output: Hey Nashaat
greeterHey('Fathy'); // Output: Hey Fathy

// This directly calls the returned function from greet('Hello') with the name 'Nashaat'
greet('Hello')('Nashaat'); // Output: Hello Nashaat

// Arrow function version of the greet function (more concise syntax)
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

// Using the arrow function to greet
greetArrow('Hello')('Nashaat From Arrow'); // Output: Hello Nashaat From Arrow */

/* // Object representing Lufthansa airline with a method to book a flight
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// Booking flights using the Lufthansa object method
lufthansa.book(239, 'Nashaat Fathy'); // Output: Nashaat Fathy booked a seat on Lufthansa flight 239
lufthansa.book(200, 'Mina Fathy'); // Output: Mina Fathy booked a seat on Lufthansa flight 200

// Creating another airline object (EuroWings) without its own book method
const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

// Assigning Lufthansa's book method to a standalone variable (method borrowing)
const book = lufthansa.book;

// The following would throw an error because `this` is undefined:
// book(23, 'Youssef Hossam');

// Using the call method to manually set `this` to euroWings and book a flight
book.call(euroWings, 23, 'Youssef Hossam'); // Output: Youssef Hossam booked a seat on EuroWings flight 23
console.log(euroWings);

// Using the call method again to book a flight on Lufthansa
book.call(lufthansa, 253, 'Nashaat Fathy'); // Output: Nashaat Fathy booked a seat on Lufthansa flight 253
console.log(lufthansa);

// Another airline object (Swiss Air Lines)
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// Using the call method to book a flight on Swiss Air Lines
book.call(swiss, 234, 'Boda'); // Output: Boda booked a seat on Swiss Air Lines flight 234
console.log(swiss);

// Using the apply method to pass an array of arguments to the book method
const flightData = [253, 'Nashaat Fathy'];
book.apply(swiss, flightData); // Output: Nashaat Fathy booked a seat on Swiss Air Lines flight 253
console.log(swiss);

// Using the call method with the spread operator to achieve the same result as apply
book.call(swiss, ...flightData); // Output: Nashaat Fathy booked a seat on Swiss Air Lines flight 253
console.log(swiss);

// Bind Method

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(23, 'Jonas Schmedtmen');

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Nashaat Fathy');
bookEW23('Martha');

// with Event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

// what happen here
// this keyword will attached button html structure & give me NaN

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// for solve this mistake, should use a bind Method

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(2));

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll Results are ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

const runOnece = function () {
  console.log('This will never run again');
};

runOnece();

// IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();

{
  const isprivet = 23;
  var notPrivete = 46;
}

console.log(notPrivete);

const secureBook = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBook();
booker();

console.dir(booker);
 */

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 976;
  f = function () {
    console.log(b * 2);
  };
};

g(); // first called and gave f access to (a) variable
f();
console.dir(f);
// Re-assigning  f funciton
h();
f();

console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We Are now boarding all ${n} passengers`);
    console.log(`there are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);


// Coding Challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  })
})(); 

