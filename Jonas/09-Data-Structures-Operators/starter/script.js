// 'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[2]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  orderDelivery({ starterIdx, mainIdx, name, address, time }) {
    const starter = this.starterMenu[starterIdx];
    const main = this.mainMenu[mainIdx];
    const message = `Order received! ${starter} and ${main} will be delivered to ${address} at ${time}`;
    console.log(message);
  },
  orderPasta(ing1, ing2, ing3) {
    const message = `Pasta ing : ${ing1} ${ing2} ${ing3}`;
    console.log(message);
  },
  orderPizza(main, ...others) {
    console.log(main);
    console.log(others);
  },
  order() {
    console.log('order');
  },
};
const staff = ['waiter', 'waiter', 'waiter', 'chef', 'chef', 'manager'];
const staffUnique = new Set(staff);
const staffUniqueArray = [...staffUnique];
staffUnique.add('costomer');
staffUnique.delete('waiter');

const rest = new Map();
rest
  .set('name', 'jeyoung')
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 9)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are close');
// console.log(rest);
// const time = 14;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('name'));
// rest.delete('name');
// console.log(rest);
rest.set([1, 2], 'test');
console.log(rest.has([1, 2])); // false
const arr = [1, 2, 3];
rest.set(arr, 'test');
console.log(rest.has(arr)); //true
rest.set(document.querySelector('h1'), 'test');
console.log(rest);
// console.log(staffUnique.has('waiter'));
// console.log(staffUnique);
// console.log(staffUniqueArray);
// console.log(staffUnique.size);
// const keys = Object.keys(restaurant);
// const values = Object.values(restaurant);
// const openDays = Object.entries(openingHours);
// console.log(keys);
// console.log(values);
// for (const [day, { open, close }] of openDays) {
//   console.log(`${day} open at ${open} and close at ${close}`);
// }
// for (const ele in restaurant) {
//   console.log(ele);
// }
// for (const day of weekdays) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`${day} open at ${open}`);
// }

// console.log(restaurant.order?.() ?? 'no method');
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
// const rest1 = { name: 'aaa', numOfGuest: 20 };
// const rest2 = { name: 'bbb', owner: 'jeyoung' };

// rest1.numOfGuest ||= 10;
// rest2.numOfGuest ||= 10;

// rest1.owner &&= '<anonymous>';
// rest2.owner &&= '<anonymous>';

// console.log(rest1, rest2);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log([...menu.entries()]);
// for (const [idx, item] of menu.entries()) console.log(item);
