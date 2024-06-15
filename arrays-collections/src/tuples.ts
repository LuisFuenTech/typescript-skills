type Game = readonly [string, number, string?];
type Player = readonly [string, Game];

const TLOZ_TOTK: Game = [
  'The Legend of Zelda: Tears  of the kingdom',
  2023,
  'Nintendo Switch'
];
const games: Game[] = [
  TLOZ_TOTK,
  ['Super Mario Bros.', 1985, 'NES'],
  ['Metroid', 1986, 'NES']
];

const players: Player[] = [
  ['Fuentech', TLOZ_TOTK],
  ['Rocket', games[2]]
];
