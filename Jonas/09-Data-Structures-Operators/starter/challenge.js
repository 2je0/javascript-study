const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...player) {},
};
const {
  players: [player1, player2],
} = game;
const [gk, ...fieldPlayers] = player1;
const allPlayers = [...player1, ...player2];
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
const {
  odds: { team1, x: draw, team2 },
} = game;

// team1 < team2 && console.log('Team1 is more likely to win');
// team1 > team2 && console.log('Team2 is more likely to win');
// console.log(player1, player2);

for (const ele of game.scored) console.log(ele);
let sum = 0;
const values = Object.values(game.odds);
for (const ele of values) {
  sum += ele;
}
console.log(sum / values.length);

for (const [team, score] of Object.entries(game.odds)) {
  console.log(`Odd of ${game[team] ?? 'draw'}: ${score}`);
}
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
