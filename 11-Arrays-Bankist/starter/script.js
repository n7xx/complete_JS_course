'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// BANKIST APP 

// Function to display account movements (transactions)
const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // Clear previous movements

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    // Create an HTML row for each movement
    const htmlTemplate = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
        <div class="movements__value">${mov}€</div>
      </div>`;
    // Insert the movement at the top
    containerMovements.insertAdjacentHTML('afterbegin', htmlTemplate);
  });
};

// Function to calculate and display summary (incomes, outgoings, interest)
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)  // Filter deposits (positive movements)
    .reduce((sum, mov) => sum + mov, 0);  // Sum up deposits
  labelSumIn.textContent = `${incomes}€`;

  const outgoings = acc.movements
    .filter(mov => mov < 0)  // Filter withdrawals (negative movements)
    .reduce((sum, mov) => sum + mov, 0);
  labelSumOut.textContent = `${Math.abs(outgoings)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)  // Calculate interest only on deposits
    .map(deposit => (deposit * acc.interestRate) / 100) // Interest calculation
    .filter(interest => interest >= 1)  // Only include interest if it's >= 1
    .reduce((sum, interest) => sum + interest, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;  // Limit to 2 decimal places
};

// Function to generate usernames based on account owners
const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()  // Convert owner name to lowercase
      .split(' ')  // Split by spaces
      .map(name => name[0])  // Take the first letter of each word
      .join('');  // Join to form username
  });
};

createUsernames(accounts);  // Generate usernames for all accounts

// Function to calculate and display balance
const calculateAndPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((sum, mov) => sum + mov, 0);  // Sum movements
  labelBalance.textContent = `${acc.balance}€`;
};

// Function to update the user interface
const updateUI = function (acc) {
  displayMovements(acc.movements);  // Display the movements
  calculateAndPrintBalance(acc);  // Display the balance
  calcDisplaySummary(acc);  // Display the summary
};

// Event listener for login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();  // Prevent form from submitting

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}!`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();  // Remove focus from input

    updateUI(currentAccount);  // Update UI with current account data
  }
});

// Event listener for money transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();  // Prevent form from submitting

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  // Check conditions for a valid transfer
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);  // Deduct from sender
    receiverAcc.movements.push(amount);  // Add to receiver

    updateUI(currentAccount);  // Update UI
  }

  inputTransferAmount.value = inputTransferTo.value = '';  // Clear input fields
});

// Event listener for requesting a loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();  // Prevent form from submitting

  const amount = Number(inputLoanAmount.value);

  // Loan is only granted if there's a deposit >= 10% of the loan amount
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);  // Add loan to movements
    updateUI(currentAccount);  // Update UI
  }

  inputLoanAmount.value = '';  // Clear input field
});

// Event listener for closing account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();  // Prevent form from submitting

  // Check if the username and pin match the current account
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    accounts.splice(index, 1);  // Remove the account

    containerApp.style.opacity = 0;  // Hide the UI
  }

  inputCloseUsername.value = inputClosePin.value = '';  // Clear input fields
});


