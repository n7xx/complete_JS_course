'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]); */

/* currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'USD', 'EUR', 'GBP']);

console.log(currenciesUnique);


currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
}) */

/* const firstWithdrawal = movements.find(mov => mov < 0);

console.log(firstWithdrawal);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

*/
/* const euroToUsd = 1.1;

// pipeline
const total = movements
.filter(mov => mov > 0)
  .map((mov, i, arr) => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
  
  console.log(total);
  // maximum value
  const max = movements.reduce((acc, cur) => (acc > cur ? acc : cur));
  console.log(max); */
/* 
  // reduce Method
  console.log(movements);

  // accumulator -> snowball
  const balance = movements.reduce((acc, cur, i, arr) => {
    console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

// here is the same thing
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2); */
// filter Method
/* const deposits = movements.filter(function (mov) {
  return mov > 0;
  });
  console.log(deposits);
  console.log(movements);
  
  const depositsFor = [];
  for (const mov of movements) if (mov > 0) depositsFor.push(mov);
  console.log(depositsFor);
  
  const withdrawal = movements.filter(mov => mov < 0);
  console.log(withdrawal);
  */
// Map method
/* const euroToUsd = 1.1;
 const movementsUSD = movements.map(mov => mov * euroToUsd);
 console.log(movementsUSD);
 
 const movementsDescription = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movment ${i + 1}: You deposited ${mov}`;
    } else {
      return `Movment ${i + 1}: You Withdrew ${Math.abs(mov)}`;
  }
  })
  
  // Refactoring movments description 
  const movementsDesc = movements.map((mov, i, arr) => {
    return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'Withdrew'} ${Math.abs(mov)}`;
    })
    
console.log(movementsDesc);

console.log(movementsDescription);
const movementsUsdFor = [];
for (const mov of movements) {
  movementsUsdFor.push(mov * euroToUsd);
  }
  console.log(movementsUsdFor); */
/////////////////////////////////////////////////

// code challenge #1

/* const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice(1, 3);
    const dogsAges = [...dogsJuliaCorrected, ...dogsKate];
    dogsAges.forEach((age, i) => {
      age =
      age >= 3
      ? `Dog number ${i + 1} is an adult, and is ${age} years old`
        : `Dog number ${i + 1} is still a puppy `;
        console.log(age);
        });
        console.log(dogsAges);
        };
        
        checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]); */

// Coding Challenge #2
/* 
        const calcAvargeHumanAge = function (ages) {
          const hmuamAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
          const adults = hmuamAges.filter(age => age >= 18);
  console.log(hmuamAges);
  console.log(adults);
  
  // const avrage = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  const avrage = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return avrage;
  };
  
  const avg1 = calcAvargeHumanAge([5, 2, 4, 1, 15, 8, 3]);
  const avg2 = calcAvargeHumanAge([16, 6, 10, 5, 6, 1, 4]);
  console.log(avg1, avg2);
  
  // conding challenge #3
  const calcAvargeHumanAgeChaning = function (ages) {
    const avrage = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    
    return avrage;
    };
    
    const avgChaining = calcAvargeHumanAgeChaning([5, 2, 4, 1, 15, 8, 3]);
    const avgChaining2 = calcAvargeHumanAge([16, 6, 10, 5, 6, 1, 4]);
    console.log(avgChaining, avgChaining2);
    */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// some and every method
