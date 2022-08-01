'use strict';
// Default Parameters
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// // createBooking('LH123');
// // createBooking('LH123', 2, 800);
// // createBooking('LH123', 2);
// // createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// //How Passing Arguments Works: Values vs. Reference
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const addTax = rate => value => value * (1 + rate);

// const addVAT = addTax(0.23);
// console.log(addVAT(100));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
let f;

const g = function () {
  const a = 1;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 2;
  f = function () {
    console.log(b * 2);
  };
};
g();
let ff = f;
h();
ff();
f();
