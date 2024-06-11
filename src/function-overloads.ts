enum Gender {
  Male = 'male',
  Female = 'female'
}

type User = {
  id: number;
  username: string;
  age: number;
  gender: Gender;
};

type UserOutput = User | undefined;

const users: User[] = [
  { id: 1, username: 'Herminia.Denesik', age: 80, gender: Gender.Female },
  { id: 2, username: 'Nels_Zieme', age: 90, gender: Gender.Female },
  { id: 3, username: 'Jacinto75', age: 26, gender: Gender.Female },
  { id: 4, username: 'Foster_Erdman97', age: 81, gender: Gender.Male },
  { id: 5, username: 'Antonina97', age: 84, gender: Gender.Female }
];

function getUserById(id: number): UserOutput {
  return users.find((user) => user.id === id);
}

function getUserByUsername(username: string): UserOutput {
  return users.find((user) => user.username === username);
}

// Multiple signatures
function getUserDetails(id: number): UserOutput;
function getUserDetails(username: string): UserOutput;
// Single implementation
function getUserDetails(input: number | string): UserOutput {
  if (typeof input === 'number') {
    return getUserById(input);
  } else {
    return getUserByUsername(input);
  }
}

console.log(getUserDetails(5));
console.log(getUserDetails('Nels_Zieme'));
console.log(getUserDetails('rocket'));
