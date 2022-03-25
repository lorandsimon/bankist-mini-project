'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

//Slice method --------------------------
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2)); //starts extrancting from the 2 position
// console.log(arr.slice(2, 4)); //end index
// console.log(arr.slice(-2)); //starts from the end
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); // creates a copy on an array

//Splice method --------------------------
//works like slice but mutates(deletes) the elements from the array
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);

//Reverse method --------------------------
//reverse the original array but also mutats it, will become reversed
// arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['f', 'g', 'h', 'i', 'j'];
// console.log(arr2.reverse());
// console.log(arr2.reverse());

//Concat methods --------------------------
//two arrays in one, concats them
// const letters = arr.concat(arr2);
// console.log(letters);

//Join method --------------------------
//result a string from an array with separetor
// console.log(letters.join(' - '));

/////////////////////////////////////////////////

//At method --------------------------
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

//last element in array
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// works like slice, negative index starts from the end of the array
// console.log(arr.at(-1));

//also works with strings
// console.log('lori'.at(-1), 'lori'.at(0));

//foreach method --------------------------
//goes over an array
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.join(' '));
// for (const movement of movements) {
//   movement > 0
//     ? console.log(`You deposited ${movement}`)
//     : console.log(`You withdrew ${Math.abs(movement)}`);
// }
// console.log('\n---------- FOREACH ----------');

// //foreach with a callback function, foreach calls the function
// //will loop over the array and in each itteration will call the function
// //in the callback function the parameter order matters, fisrt is the current element, second index, third the entire array
// movements.forEach(function (movement, index, array) {
//   movement > 0
//     ? console.log(`Movement ${index + 1}: You deposited ${movement}.`)
//     : console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}.`);
// });
// //cant break out of the foreach loop

//foreach method with maps and sets--------------------------
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });

// const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'USD', 'USD', 'EUR']);
// console.log(currenciesUnique);
// // _ is a thowable variable, this is means is completly not necessary
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}:${value}`);
// });

//map method --------------------------
//works like foreach but creates a new array containing the results of applying an operation on all original array elements
// const bank = {
//   bills: [200, 450, -400, 3000, -650, -130, 70, 1300],
// };
// const euroToUSD = 1.2;
// const movementUSD = bank.bills.map(bill => bill * euroToUSD);
// console.log(bank.bills);
// console.log(movementUSD);

// const billDescriptions = bank.bills.map(
//   (bill, i) =>
//     `Bill ${i + 1}: You ${bill > 0 ? 'get' : 'pay'} ${Math.abs(bill)}EUR.`
// );
// billDescriptions.forEach(function (bill) {
//   console.log(bill);
// });

//filter method --------------------------
//filters arrays and returns a new array containing the array elements that passed a specific test conditon
// const bank = {
//   bills: [200, 450, -400, 3000, -650, -130, 70, 1300],
// };
// const deposits = bank.bills.filter(function (bill) {
//   return bill > 0;
// });

// const withdrawal = bank.bills.filter(bill => bill < 0);

// console.log(deposits);
// console.log(withdrawal);

//reduce method --------------------------
//reduces all array elements down to one single value (like adding all elements together)
//like a snowball rolling down a hill
// const bank = {
//   bills: [200, 450, -400, 3000, -650, -130, 70, 1300],
// };

// // acc is the accummulater and works like a snowball, accummulating the elements
// const balance = bank.bills.reduce((acc, curent, i, arr) => {
//   console.log(`iteration ${i}: ${acc}`);
//   return acc + curent;
// }, 0); //0 means the starts with value of 0
// console.log(balance);

// //maximum value
// const maximum = bank.bills.reduce((acc, bill) => {
//   if (acc > bill) {
//     return acc;
//   } else {
//     return bill;
//   }
// }, bank.bills[0]);
// console.log(maximum);

//chaining methods --------------------------
//do multiple methods in one go
// const bank = {
//   bills: [200, 450, -400, 3000, -650, -130, 70, 1300],
// };
// const euroToUSD = 1.1;
// const totalDepositUSD = bank.bills
//   .filter(bill => bill > 0)

//   // .map(bill => bill * euroToUSD)
//   //to see all the array
//   .map((bill, i, arr) => {
//     console.log(`Array: ${arr}`);
//     console.log(`Index ${i + 1}: ${bill}.`);
//     return bill * euroToUSD;
//   })
//   .reduce((acc, bill) => acc + bill, 0);
// console.log(totalDepositUSD);

//find method --------------------------
//retrives one element from the array
//return only the element itself not like filter which retunr a complete array
// const bank = {
//   bills: [200, 450, -400, 3000, -650, -130, 70, 1300],
// };
// //retrives the first element from the array that satisfys this condition
// const fristWithdrawal = bank.bills.find(bill => bill < 0);
// console.log(fristWithdrawal);

// //very usefull with objets
// const people1 = {
//   name: 'Lorand Simon',
//   age: 23,
// };

// const people2 = {
//   name: 'Simon Lorand',
//   age: 26,
// };
// const peoples = [people1, people2];

// const people = peoples.find(name => name.name === 'Simon Lorand');
// console.log(people);

//findIndex method --------------------------
//retunrs the index of the element where the statement first meets
// const bank = {
//   bills: [200, 450, -400, 3000, -650, -130, 70, 1300],
// };
// const val = bank.bills.findIndex(bill => bill === 450);
// console.log(val);

//some method --------------------------
//gives back a boolean value based on the statement
//if any values works with the condition turns back true
// const bank = {
//   bills: [200, 450, -400, 3000, -650, -130, 70, 1300],
// };
// const any = bank.bills.some(bill => bill > 0);
// console.log(any);

//every method --------------------------
//similar to the some method but turns true if all the elements satisfy the condition we pass in
//if every element passes the condition
// const bank = {
//   bills: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   taxes: [23, 30, 40],
// };
// const every = bank.bills.every(bill => bill > 0);
// console.log(every);
// console.log(bank.taxes.every(bill => bill > 0));

//separate callback --------------------------
//we can save callback functions in variables and then use them
// const bank = {
//   bills: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   taxes: [23, 30, 40],
// };
// const separate = bill => bill > 0;
// console.log(bank.bills.some(separate));
// console.log(bank.taxes.every(separate));
// console.log(bank.bills.every(separate));

//flat method --------------------------
//removes the nested arrays, but goes only one level deep standard, we can change this
//dont work in old borwsers
// const arr = [[1, 2, 3], 4, [5, 6, 7], 8, 9];
// console.log(arr.flat());

// //more deeply nested array
// const arrDeep = [[1, [2, 3]], 4, [[5, 6], 7], 8, 9];
// console.log(arrDeep.flat(2));

//flatMap method --------------------------
//ist like a map method but flattens the results in the end
//flatMap goes just one level deep and we cant change it

//sort method --------------------------
//converst everything to stings and then sorts it
// //strings
// const owners = ['Jonas', 'Zach', 'Marta', 'Adam'];
// console.log(owners);
// console.log(owners.sort());

// //numbers
// const bank = {
//   bills: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   taxes: [23, 30, 40],
// };
// console.log(bank.bills);

// //converts it to stings
// console.log(bank.bills.sort());

// //a is current value and b is the next value
// //if the return > 0, then first A after B -> keep order
// //if the return < 0, then first B after A -> switch order
// //if the return value is 0 the position remains unchanged
// //Ascending
// // bank.bills.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });
// bank.bills.sort((a, b) => a - b);
// console.log(bank.bills);

// //Descending
// // bank.bills.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });
// bank.bills.sort((a, b) => b - a);
// console.log(bank.bills);

//create and fill arrays method --------------------------
//creates empty array with 7 elements
// const x = new Array(7);
// console.log(x);

// //fill up array with value of 1
// x.fill(1);
// console.log(x);

// //fill up array with value 5 from index 3 to 5
// x.fill(5, 3, 5);
// console.log(x);

// x.fill(23, 0, 3);
// console.log(x);

// //Array.from, creates array with specific length and values
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

//conversion --------------------------
// console.log(Number('23'));
// console.log(+'23');

//parsing --------------------------
// //gives back a number but just if the first charachter is a number
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('a30px', 10));

// console.log(Number.parseInt(' 2.5rem '));
// console.log(Number.parseFloat(' 2.5rem '));

// console.log(Number.isNaN(30));
// console.log(Number.isNaN('30'));
// console.log(Number.isNaN(+'30x'));
// //dividing by 0 gives back infinity
// console.log(Number.isNaN(23 / 0));

// //checking if value is a number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20x'));
// console.log(Number.isFinite(20 / 0));

//math --------------------------
// console.log(Math.sqrt(25));
// console.log(4 ** (1 / 2));

// //maximum
// console.log(Math.max(5, 6, 7, 55, 6, 234, 112));
// console.log(Math.max(5, 6, 7, 55, 6, '234', 112));
// //dont works
// console.log(Math.max(5, 6, 7, 55, 6, '234px', 112));

// //minimum
// console.log(Math.min(5, 6, 7, 55, 6, 234, 112));

// //pi
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// //random number
// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(15, 20));

//rounding --------------------------

// //trunc
// console.log(Math.trunc(23.3));
// console.log(Math.trunc(23.8));

// //round
// console.log(Math.round(23.3));
// console.log(Math.round(23.8));

// //ceil - rounds up
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.8));

// //floor - rounds down
// console.log(Math.floor(23.3));
// console.log(Math.floor(23.8));
// console.log(Math.floor(-23.3));
// console.log(Math.floor(-23.8));

// //rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.74345).toFixed(2));

//remainder operator --------------------------
// console.log(5 % 2);
// console.log(5 / 2); // 5 = 2 * 2 + 1
// console.log(2 % 2);

// console.log(8 % 3);
// console.log(8 / 3); // 8 = 2 * 3 + 2

// console.log(6 % 2);

// const isEven = n => n % 2 === 0;
// console.log(isEven(55));
// console.log(isEven(56));

//numeric separator --------------------------
//javascript ignores underscores, not allowd in the begining or in the end
//also not allowd near . or two after each other
//only used at numbers not at strings
// const diamter = 280_746_000_000;
// console.log(diamter);

// const price = 345_99;
// console.log(price);

// const transferFee = 15_00;
// console.log(transferFee);

// const PI = 3.14_15;
// console.log(PI);

//BigInt --------------------------
// console.log(2 ** 53 - 1); //biggest number that js can safely represent
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// //bigint can store any number
// console.log(345353535353452342341232143234234);

// //the n transforms a regular number to a bigint number
// console.log(345353535353452342341232143234234n);
// console.log(BigInt(1238947189234789123748912037491283748912743923871));

// //operations
// console.log(1000n + 1000000000n);
// console.log(1892378921374981237349081274n * 100000000n);

// const huge = 21389741238947981237489123n;
// const num = 123123123;
// console.log(huge * BigInt(num));

// //exceptions
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == 20);

// console.log(huge + 'this is a big number');

// //divisions
// console.log(10n / 3n); //returns the closest bigint, cuts off decimal

//Dates --------------------------
//create a date
// const now = new Date();
// console.log(now);

// console.log(new Date('December 24, 2015'));

// const testaccount = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,

//   movementsDates: [
//     '2019-11-18T21:31:17.178Z',
//     '2019-12-23T07:42:02.383Z',
//     '2020-01-28T09:15:04.904Z',
//     '2020-04-01T10:17:24.185Z',
//     '2020-05-08T14:11:59.604Z',
//     '2020-05-27T17:01:17.194Z',
//     '2020-07-11T23:36:17.929Z',
//     '2020-07-12T10:51:36.790Z',
//   ],
//   currency: 'EUR',
//   locale: 'pt-PT', // de-DE
// };

// console.log(new Date(testaccount.movementsDates[0]));
// console.log(new Date(0)); // january 1970

// //timestamp (in miliseconds) - day, hour, min, sec, msec
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// //working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getMilliseconds());
// console.log(future.toISOString());
// console.log(future.getTime()); // in miliseconds
// console.log(Date.now()); // current date in miliseconds

// future.setFullYear(2040);
// console.log(future);

//Timers: setTimeout and setInterval --------------------------
//setTimout
// const ingridients = ['olives', 'spinach'];
// console.log('Started preparing your pizza');
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Take your pizza with ${ing1} and ${ing2}`),
//   1500,
//   ...ingridients
// );
// if (ingridients.includes('spinach')) clearTimeout(pizzaTimer);

// //setInterval
// setInterval(function () {
//   const date = new Date();
//   const hour = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   console.log(`${hour}:${minutes}:${seconds}`);
// }, 1000);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Pal Nandor',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2022-03-01T10:17:24.185Z',
    '2022-03-13T14:11:59.604Z',
    '2022-03-20T17:01:17.194Z',
    '2022-03-23T23:36:17.929Z',
    '2022-03-24T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'hu-HU', // de-DE
};

const account2 = {
  owner: 'Simon Lorand',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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

////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS

//DATE FOR MOVEMENTS
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  if (daysPassed <= 14 && daysPassed > 7) {
    return 'Last week';
  } else {
    return Intl.DateTimeFormat(locale).format(date);

    // const day = `${date.getDate()}`.padStart(2, 0); // 2 charachters long and complete with 0 if needed
    // const month = `${date.getMonth() + 1}`.padStart(2, 0); //because its 0 based
    // const year = date.getFullYear();

    // //day/month/year
    // return `${day}/${month}/${year}`;
  }
};

//CURRENCY
//international currency
const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

//MOVEMENTS
//display movements function
const displayMovements = function (acc, sort = false) {
  //we can set all the html
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCurrency(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;
    //the first parameter is where we want to add the html and the second is the string html
    //with beforeend the list would be inverted, puts the html one after other
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//all the html we added
// console.log(containerMovements.innerHTML);

//CALCULATE BALANCE
//show the balance funtion
const calcDisplayBalance = account => {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCurrency(
    account.balance,
    account.locale,
    account.currency
  )}`;
};

//CALCULATE INCOME, OUTGOING, INTEREST
const calcDisplaySummary = account => {
  //calculate incomes
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(`Incomes: ${incomes}`);
  labelSumIn.textContent = `${formatCurrency(
    incomes,
    account.locale,
    account.currency
  )}`;

  //calculate outgoing
  const outgoing = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(`Outgoing: ${Math.abs(outgoing)}`);
  labelSumOut.textContent = `${formatCurrency(
    Math.abs(outgoing),
    account.locale,
    account.currency
  )}`;

  //calculate interests
  // const interestPercent = 1.2;
  // const interest = (incomes * interestPercent) / 100;

  //same as above, but includes just interests above 1 EUR
  //try to not mutates arrays in chains (like method splice)
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(deposit => deposit >= 1)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${formatCurrency(
    interest,
    account.locale,
    account.currency
  )}`;
};

//CREATE USERNAMES
//username function - first letters from name
const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(account => account[0])
      .join('');
  });
};
//modify the account array
createUsernames(accounts);

//UI
//update UI function
const updateUI = function (account) {
  //Display movements
  displayMovements(account);

  //Display balance
  calcDisplayBalance(account);

  //Display summary
  calcDisplaySummary(account);
};

//LOGOUT TIMER
const startLogOutTimer = function () {
  //set time to 5 min
  let time = 300;

  //timer funtionality
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    //in each call, print the reamining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //when 0 sec, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    //decrese 1 sec
    time--;
  };

  //call the timer every sec
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

//LOGIN ----------------------
//event handler - login functionality
let currentAccount, timer;

//FAKE THAT WE ARE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//LOGIN
btnLogin.addEventListener('click', function (event) {
  //prevent form from submitting
  event.preventDefault();

  //turns back undefined if no element meets the criterium
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Display current date and time
    //Experimenting API - international date formatting
    const now = new Date();
    const options = {
      //numeric, long, short, narrow
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };

    //based on the language you have in your browser
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0); // 2 charachters long and complete with 0 if needed
    // const month = `${now.getMonth() + 1}`.padStart(2, 0); //because its 0 based
    // const year = now.getFullYear();
    // const hours = `${now.getHours()}`;
    // const min = `${now.getMinutes()}`;
    // //day/month/year
    // labelDate.textContent = `${day}/${month}/${year}, ${hours}:${min}`;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //call logout timer function but check first if a timer is running
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    //Update UI
    updateUI(currentAccount);
  }
});

//TRANSFER MONEY
btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);

  //looking for the account we want to transfer to
  const receiver = accounts.find(
    account => account.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();

  //check if the user has enough money
  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiver?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiver.movements.push(amount);

    //add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiver.movements.push(new Date().toISOString());

    //update UI
    updateUI(currentAccount);

    //reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

//GET A LOAN
btnLoan.addEventListener('click', function (event) {
  event.preventDefault();

  const amount = Math.floor(Number(inputLoanAmount.value));
  //checks if the account has a movement greater or equal to the amounts 10%
  if (currentAccount.movements.some(mov => mov >= amount / 10) && amount > 0) {
    setTimeout(function () {
      //add movement
      currentAccount.movements.push(amount);

      //add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      //updateUI
      updateUI(currentAccount);
      //reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

//CLOSE ACCOUNT
btnClose.addEventListener('click', function (event) {
  event.preventDefault();

  if (
    currentAccount?.pin === Number(inputClosePin.value) &&
    currentAccount.username === inputCloseUsername.value
  ) {
    //finds the first element which has the statement true
    const index = accounts.findIndex(
      account => account.username === currentAccount.username
    );

    //delete account
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
});

let sorted = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    element => Number(element.textContent.replace('EUR', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});
