// 'use strict';

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
  orderDelivery: function ({ starterIdx, mainIdx, name, address, time }) {
    const starter = this.starterMenu[starterIdx];
    const main = this.mainMenu[mainIdx];
    const message = `Order received! ${starter} and ${main} will be delivered to ${address} at ${time}`;
    console.log(message);
  },
  orderPasta: function (ing1, ing2, ing3) {
    const message = `Pasta ing : ${ing1} ${ing2} ${ing3}`;
    console.log(message);
  },
  orderPizza: function (main, ...others) {
    console.log(main);
    console.log(others);
  },
};

// restaurant.orderDelivery({
//   starterIdx: 1,
//   mainIdx: 1,
//   name: 'jeyoung',
//   address: 'seoul',
//   time: '23:00',
// });

// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];
// const arr3 = [...arr1, ...arr2];
// const newMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(arr3);

// const PastaIng = ['a', 'b', 'c'];
// restaurant.orderPasta(...PastaIng);

// const newRestaurant = { ...restaurant, founder: 'jeyoung' };
// console.log(newRestaurant);

// const add = function (...numbers) {
//   let sum = 0;
//   for (const i of numbers) {
//     sum += +i;
//   }
//   return sum;
// };
// const x = [12,34,56];
// add(...x);
// console.log(add(1, 2, 3, 4, 5));
