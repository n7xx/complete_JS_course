'use strict';
// console.log(this);
/* function Nashaat() {
    let a = 'nashaat from let';
    var b = 'nashaat from var';
    const c = 'nashaat from const';

    console.log(a);
    console.log(b);
    console.log(c);
}

function nahsaat() { 
    let c = 10;
    function inner() {
        console.log(c);
    }
    inner();
};

nahsaat();



// Global Scope
const name = 'nashaat'; // Accessible globally, can be used anywhere in this script

function outerFunc() {
  // outerFunc Scope
  const age = 20; // Accessible in outerFunc and any nested scope within it

  if (age >= 20) {
    // if Block Scope
    const decade = 2; // Block-scoped, only accessible within this 'if' block
    var millennial = true; // Function-scoped, accessible throughout outerFunc, but not outside it
  }

  // millennial is accessible here because 'var' is function-scoped
  console.log(millennial); // Outputs: true

  function innerFunc() {
    // innerFunc Scope
    const job = 'Web developer'; // Block-scoped to innerFunc, not accessible outside

    // Accessing variables from outerFunc and global scope
    console.log(`${name} is a ${age}-year-old ${job}`); 
    // Outputs: "nashaat is a 20-year-old Web developer"
  }

  innerFunc(); // Call innerFunc to execute the inner function logic
}

outerFunc(); // Call outerFunc to start the sequence

/*
Scope Explanation:

1. Global Scope:
   - `name` is defined globally and can be accessed from any function or block in this script.

2. outerFunc Scope:
   - `age` is defined within outerFunc and accessible within it and any nested scopes.
   - `millennial` is declared with `var`, making it accessible throughout outerFunc, even before its declaration due to hoisting.
   - `name` is accessible because it's in the global scope.

3. if Block Scope:
   - `decade` is block-scoped and only accessible within this `if` block.
   - `millennial` is function-scoped, so it's accessible outside this block but only within outerFunc.
   - `age` and `name` are also accessible within this block as they are declared in outer scopes.

4. innerFunc Scope:
   - `job` is block-scoped to innerFunc and is not accessible outside it.
   - `age`, `millennial`, and `name` are accessible within innerFunc because they are defined in outerFunc or global scope.

Important Notes:
- Variables declared with `const` and `let` are block-scoped, meaning they can only be accessed within the block they are defined.
- Variables declared with `var` are function-scoped, meaning they are accessible anywhere within the function they are defined.
- The scope of innerFunc cannot access variables from other sibling blocks (like the if block), but it can access variables from parent scopes.
*/

/* const x = 'from global';
first();

function first() { 
    const y = 'from first!';
    second();

    function second() {
        const z = 'from second';
        third();
    }
}

function third() { 
    const q = 'form third';
    console.log(x, y, z, q);
    // ReferenceError
    // y and z can not be found in third() function scope!
} */

/*================================================*/

/* function clacAge(birthDay) {
  const age = 2024 - birthDay;

  function printAge() {
    let output = `${firstName}, You Are ${age}, You born in ${birthDay}.`;
    // Nashaat, You Are 43, You born in 1981.
    console.log(output);
    if (birthDay >= 1981 && birthDay <= 1996) {
      // creating NEW variable with same name as outer scope's variable
      const firstName = 'Nashaat Fathy';
      // Reassigning outer scope's variable
      output = 'New outPut';   
      const str = `Oh, and You are millenial, ${firstName}.`;
      // Oh, and You are millenial, Nashaat Fathy.
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(output); // it's run because output founded in parent scope printAge();
    }
    // console.log(add(2,5));
    // if strict mode on , add() is not defined. if strict mode off it is run and output = 7
    console.log(output); // it's run because output variblae in main scope 
  }
  printAge();
  // console.log(output);
  // output is not defined because scope chain work below not above, I'm meaning it searches where the variable lives in parents or global.
  // child Inherits form parent but parent doesn't inherit from child , right ? 
  return age;
}
 */
/* const firstName = 'Nashaat';
clacAge(1981); */
/* 
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    // Initial output using variables from the outer scope (calcAge)
    let output = `${firstName}, You are ${age} years old, born in ${birthYear}.`;
    console.log(output); // Outputs: "Nashaat, You are 43 years old, born in 1981."

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Block scope within the if statement

      // Declaring a new variable with the same name as one in the outer scope
      const firstName = 'Nashaat Fathy';

      // Reassigning the output variable defined in the printAge scope
      output = 'New output';

      // New string specific to this block scope
      const str = `Oh, and you are a millennial, ${firstName}.`;
      console.log(str); // Outputs: "Oh, and you are a millennial, Nashaat Fathy."

      function add(a, b) {
        return a + b;
      }

      console.log(output); // Outputs: "New output", because it accesses the updated variable in printAge scope
    }

    // This will still log "New output" because the `output` variable was reassigned within the if block,
    // and that change persists outside the if block in the printAge function scope
    console.log(output);

    // The add function is not accessible here if strict mode is enabled (default in ES6+ modules).
    // Uncommenting the next line will throw a ReferenceError in strict mode.
    // console.log(add(2, 5));
  }

  printAge(); // Call the printAge function

  // Attempting to log `output` here would cause an error because `output` is not defined in the calcAge scope.
  // Child Inherits form parent but parent doesn't inherit from child , right ?
  // Uncommenting the next line will throw a ReferenceError.
  // console.log(output);

  return age; // Return the calculated age
}

const firstName = 'Nashaat'; // Global variable accessible in the calcAge function's scope
calcAge(1981); // Call calcAge with the birth year of 1981
 */

// this keyword
/* 
const clacAge = function (birthDay) {
  console.log(2024 - birthDay);
  // console.log(this);
};
clacAge(2004);

const clacAgeArrow = birthDay => {
  console.log(2024 - birthDay);
  // console.log(this);
}
clacAgeArrow(2004);

const arrow = x => {
  console.log(x);
  // console.log(this);
};
arrow(10);

const nashaat = {
  firstName: 'Nashaat',
  year: 2004,
  clacAge: function () {
    // console.log(this);
    console.log(2024 - this.year);
  },
  greet: () => console.log(`Hey ${this.firstName}`),

}
nashaat.clacAge();

const n7x = {
  year: 2000,
}

n7x.clacAge = nashaat.clacAge;
n7x.clacAge();


const f = nashaat.clacAge; */

// var firstName = 'Youssef';

/* const nashaat = {
  firstName: 'Nashaat',
  year: 2004,
  clacAge: function () {
    console.log(this);
    console.log(2024 - this.year);
    // solution 1
    // const self = this; // self or that
    // const isMillennail = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // solution 2
    const isMillennail =  () => {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillennail();
  },
  greet: () => {
    console.log(this); // window 
    console.log(`Hey ${this.firstName}`)
  },
};

nashaat.greet();
nashaat.clacAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
// argument keyword
addExpr(2, 3);
addExpr(10, 15, 14, 91);
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 6); // ReferenceError: arguments is not defined */

/* const nashaat = {
  firstName: 'Nashaat',
  year: 2004,

  // Regular function: 'this' refers to the object 'nashaat'
clacAge: function () {
  console.log(this); // Logs the 'nashaat' object because 'this' refers to the object that calls the method.
  console.log(2024 - this.year); // Calculates and logs Nashaat's age based on the 'year' property

  /* 
  >- Solution 1 (commented out): 
  // Save 'this' in a variable (self) for use in inner functions

  const self = this;  
  // 'self' or 'that' captures 'this' to access it inside the regular function
  const isMillennail = function () {
  console.log(self); // Logs 'self' (same as 'this', which refers to 'nashaat' object)
  console.log(self.year >= 1981 && self.year <= 1996); 
  // Checks if the birth year is in the millennial range
    };
 */
/*
  // Solution 2: 
  //Arrow function inherits 'this' from its surrounding(lexical) context
    const isMillennail = () => {
      console.log(this);
      // Arrow function doesn't have its own 'this', so it uses 'this' from clacAge(), 
      // which is 'nashaat'
      console.log(this.year >= 1981 && this.year <= 1996);
      // Checks if the birth year is in the millennial range
    };

    // Call the inner function
    isMillennail();
  },

  // Arrow function:
  //'this' does not refer to the 'nashaat' object, 
  // but to the global scope(or 'window' in browsers)
  greet: () => {
    console.log(this);
    // Logs the global object ('window' in browsers) 
    //because arrow functions don't have their own 'this'
    console.log(`Hey ${this.firstName}`);
    // 'this.firstName' is undefined because 'this' 
    // refers to the global object, not 'nashaat'
  },
};

// Call greet method
nashaat.greet(); 
// Logs the global object and then outputs:
// "Hey undefined" because 'this' inside the arrow function 
//refers to the global object, not 'nashaat'

nashaat.clacAge(); 
// Logs the 'nashaat' object and calculates Nashaat's age
// Then, it checks whether the year is within the 
//millennial range using the arrow function for 'isMillennail'

// Function expression: 'arguments' 
//object is available in normal functions
const addExpr = function (a, b) {
  console.log(arguments);
  // Logs the 'arguments' object, which is
  // an array - like object containing all arguments passed to the function
  return a + b; 
};

addExpr(2, 3); // Logs the arguments: [2, 3] and returns 5
addExpr(10, 15, 14, 91);
// Logs the arguments: [10, 15, 14, 91] 
// and returns 25(only adds the first two arguments)

// Arrow function: 'arguments' object is not available in arrow functions
var addArrow = (a, b) => {
  console.log(arguments);
  // ReferenceError: 'arguments' is not defined because 
  // arrow functions don't have access to the 'arguments' object
  return a + b; 
};

addArrow(2, 5, 6);
// Throws ReferenceError because 'arguments' is not defined in arrow functions */

/* 
const nashaat = {
  firstName: 'Nashaat',
  year: 2004,
  // Regular function: 'this' refers to the object 'nashaat'
  clacAge: function () {
    console.log(this);
    // Logs the 'nashaat' object
    console.log(2024 - this.year);
    // Calculates and logs the age

  /* 
  >- Solution 1 (commented out): 
  // Save 'this' in a variable (self) for use in inner functions

  const self = this;  
  // 'self' or 'that' captures 'this' to access it inside the regular function
  const isMillennail = function () {
  console.log(self); // Logs 'self' (same as 'this', which refers to 'nashaat' object)
  console.log(self.year >= 1981 && self.year <= 1996); 
  // Checks if the birth year is in the millennial range
    };
 */
/*
    // Solution 2: Using an arrow function to access 'this'
    const isMillennail = () => {
      console.log(this);
      // Inherits 'this' from 'clacAge', so 'this' is 'nashaat'
      console.log(this.year >= 1981 && this.year <= 1996);
      // Checks if 'nashaat' is a millennial
    };
    isMillennail();
  },
  greet: () => {
    console.log(this);
    // 'this' refers to the global object (e.g., 'window' in browsers)
    console.log(`Hey ${this.firstName}`);
    // Undefined, as 'firstName' is not on the global object
  },
};

nashaat.greet();
// Calls the 'greet' method; will not work as intended
nashaat.clacAge();
// Calls the 'clacAge' method; works correctly

const addExpr = function (a, b) {
  console.log(arguments); // Logs all arguments passed
  return a + b;
};

addExpr(2, 3);                // Outputs: [Arguments] { '0': 2, '1': 3 }
addExpr(10, 15, 14, 91);      // Outputs: [Arguments] { '0': 10, '1': 15, '2': 14, '3': 91 }

var addArrow = (a, b) => {
  console.log(arguments); // Error: 'arguments' is not defined in arrow functions
  return a + b;
};

addArrow(2, 5, 6); // Throws ReferenceError: arguments is not defined */
 

/* let age = 20;
let oldAge = age;
age = 21;

console.log(age);
console.log(oldAge);

const me = {
  name: 'nashaat',
  age: 20,
}

const freind = me;
freind.age = 27;

console.log('Freind', freind);
console.log('Me', me); */

// primtives vs. objects


let lName = 'Fathy';
let oldlNmae = lName;
lName = 'Nashaat';
console.log(lName, oldlNmae);

const nashaat = {
  first: 'Nashaat',
  last: 'Fathy',
  age: 27,
}
const marriedNashaat = nashaat;
marriedNashaat.last = 'Fakhry';
console.log('Before Marriage', nashaat);
console.log('After Marriage', marriedNashaat);

