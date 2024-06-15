const setOfSports: Set<string> = new Set<string>([
  'tennis',
  'baseball',
  'soccer'
]);
const setOfGames: Set<string> = new Set<string>();

setOfGames.add('The Legend of Zelda: Tears  of the kingdom');
setOfGames.add('Super Mario Bros');
setOfGames.add('Super Mario Bros');
setOfGames.add('Metroid');

for (const sport of setOfSports) {
  console.log(sport);
}

console.log(setOfGames);
console.log(setOfGames.has('Super Mario Bros'));
console.log(setOfGames.has('Pokemon'));
console.log(setOfGames.size);

setOfGames.delete('Metroid');
console.log(setOfGames);
console.log(setOfGames.size);

setOfGames.clear();
console.log(setOfGames);
console.log(setOfGames.size);
