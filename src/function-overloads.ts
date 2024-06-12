import { UserInput, UserOutput } from './types';

import { users } from './utils/dataSource';

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
function getUserDetails(input: UserInput): UserOutput {
  if (typeof input === 'number') {
    return getUserById(input);
  } else {
    return getUserByUsername(input);
  }
}

console.log(getUserDetails('Nels_Zieme'));
console.log(getUserDetails('rocket')); // undefined

const user1 = getUserDetails(5);
console.log(user1);
user1?.logComment(`This is a comment from user ${user1.username}`);
