'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPassta: function (ing1, ing2, ing3) {
    console.log(
      `Here is Your delicious past with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza: function (mainIngredeints, ...otherIngredeints) {
    console.log(mainIngredeints);
    console.log(otherIngredeints);
  },
};
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'nashaat');
console.log('' || 'nashaat');
console.log(undefined || null);
console.log(true || 0);
console.log(true || false);
// the first truthy value 
console.log(undefined || 0 || '' || 23 || 'hello' || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2); 

console.log('------ AND ------');
console.log(0 && 'nashhaat');
console.log(true && 'nashhaat');
console.log(5 && 'nashhaat');
console.log('nashaat' && 23 && null && 'fathy' && 'hello' && null);

/* // Spread, because on Right side of '='
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on Left side of '='
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a, b, others);

const [pizza, , Risotto, ...othersFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, othersFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 6, 7);

restaurant.orderPizza('Mushrooms', 'onion', 'olives', 'spinch');
 */


/* const arr = [7, 8, 9];
const wrongArr = [5, 6, arr[0], arr[1], arr[2]];
console.log(wrongArr);
// best practice with spread operator
const rightArr = [5, 6, ...arr];
console.log(rightArr);
console.log(...rightArr);

const newMenu = [...restaurant.mainMenu, 'Gonicci'];
console.log(...newMenu);

const JoinTwoArrays = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(JoinTwoArrays);

// Iterables: arrays, strings, maps, sets, but not objects
const s = 'nashaat';
console.log(...s);

// Real-world example
/* const ingredients = [
  prompt(`let's Make past! Ingredient 1`),
  prompt(`Ingredient 2`),
  prompt(`Ingredient 3`),
];

restaurant.orderPassta(...ingredients); */

// Objectes
/*
const newRestaurant = { ...restaurant, founder: 'Sara', foundedIN: 1999 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name); */
/* ////////////////////////////////////////////////////////////
restaurant.orderDelivery({
  time: '22:30',
  address: 'via 25 st',
  mainIndex: 2,
  starterIndex: 2,
});
// by default values
restaurant.orderDelivery({
  address: 'via 25 st',
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Muting Varibales
let a = 111;
let b = 999;

const obj = { a: 1, b: 2, c: 3 };

// this give me an syntax error because it uderstand {} like a code block not and object with '=' equal sign
// { a, b } = obj;
// solve it by a small trick, is to wrap all of this into a parenthesis.
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); */
//////////////////////////////////////////////////////////////////
// Array Destructuring
/* const arr = [2, 4, 5, 6];
const [a, b, c, d] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let [first, second] = restaurant.categories;
console.log(first, second);

const temp = first;
first = second;
second = temp;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

console.log(restaurant.order(2, 0));
const [starter, main] = restaurant.order(0, 2);
console.log(starter, main);

// nested destructuring
const nested = [2, 4, [5, 6]];
const [g, h, [j, k]] = nested;
console.log(j);

// default values
// if not found a variable value take a default value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); */
