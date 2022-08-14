'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
const displayMovements = function (movement) {
  containerMovements.innerHTML = '';
  movement.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayCalcBalance = function (arr) {
  const balance = arr.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

let currentAccount;
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(acc => {
    return inputLoginUsername.value === acc.username;
  });
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //log in
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    calcDisplaySummary(currentAccount);
    displayMovements(currentAccount.movements);
    displayCalcBalance(currentAccount.movements);
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    containerApp.style.opacity = 100;
  }
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Simple Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e'];

// SPLICE
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// const arr3 = [1, 2, 3, 4, 5];
// console.log(arr3.join(''));
// console.log(arr2.reverse());
// console.log(arr2);

// CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// JOIN
// console.log(letters.join(' - '));
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// dogsJulia.forEach(mov => mov * 2);
// console.log(dogsJulia);
// const displayDog = (arr1, arr2) => {
//   const arrcopy1 = arr1.slice(1, -2);
//   const res = arrcopy1.concat(arr2);
//   res.forEach((mov, idx) => {
//     if (mov >= 3) {
//       console.log(`Dog number ${idx + 1} is an adult, and is ${mov} years old`);
//     } else {
//       console.log(`Dog number ${idx + 1} is still a puppy 🐶`);
//     }
//   });
// };
// displayDog(dogsJulia, dogsKate);

// const withdrawals = movements.filter(mov => {
//   return mov < 0;
// });
// console.log(withdrawals);
// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const calcDtoH = function (age) {
//   if (age <= 2) return 2 * age;
//   else return 16 + age * 4;
// };

// const calcAverageHumanAge = function (arr) {
//   const age = arr
//     .map(age => {
//       return calcDtoH(age);
//     })
//     .filter(age => age >= 18)
//     .reduce((acc, age, idx, arr) => acc + age / arr.length, 0);
//   return age;
// };
// console.log(calcAverageHumanAge(data1));
