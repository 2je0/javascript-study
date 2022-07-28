// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function (...player) {},
// };
// const {
//   players: [player1, player2],
// } = game;
// const [gk, ...fieldPlayers] = player1;
// const allPlayers = [...player1, ...player2];
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// // team1 < team2 && console.log('Team1 is more likely to win');
// // team1 > team2 && console.log('Team2 is more likely to win');
// // console.log(player1, player2);

// for (const ele of game.scored) console.log(ele);
// let sum = 0;
// const values = Object.values(game.odds);
// for (const ele of values) {
//   sum += ele;
// }
// console.log(sum / values.length);

// for (const [team, score] of Object.entries(game.odds)) {
//   console.log(`Odd of ${game[team] ?? 'draw'}: ${score}`);
// }
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = new Set([...gameEvents.values()]);
// console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// for (const [key, value] of gameEvents) {
//   const half = key < 45 ? 'FIRST HALF' : 'SECOND HALF';
//   console.log(`[${half}]${key}: ${value}`);
// }

//challenge 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textAreaEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', () => {
  const text = textAreaEl.value;
  const textArr = text.split('\n');
  const res = [];
  let maxx = -1;
  for (const i of textArr) maxx = Math.max(maxx, i.length);
  for (const i of textArr) {
    const splitText = i.trim().toLowerCase().split('_');
    const splitTextUpper = [];
    for (const j of splitText) {
      splitTextUpper.push(j.replace(j[0], j[0].toUpperCase()));
    }
    res.push(splitTextUpper.join('').padEnd(maxx, ' '));
  }
  for (const [idx, item] of res.entries()) {
    console.log(`${item} ${'✅'.repeat(idx + 1)}`);
  }
});

// more exercise
const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25
  +_Arrival;bru0943384722;
  fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30`;
