const map: Map<string, number> = new Map<string, number>([
  ['Tetris', 40],
  ['Baseball', 10],
  ['Soccer', 20]
]);

console.log(map);
map.set('Volleyball', 50);

for (const [key, value] of map) {
  console.log(`${key} - ${value}`);
}

console.log(map);
console.log(map.get('Tetris'));
console.log(map.has('Tetris'));
console.log(map.get('Pokemon'));
console.log(map.size);

map.delete('Baseball');
console.log(map);
console.log(map.size);

map.clear();
console.log(map);
console.log(map.size);
