import { getUserDetails } from './src/functions/function-overloads';

let movieTitle: string = 'Transformers: The Last Knight';
console.log(`Movie title: ${movieTitle}`);

const [user1, user2] = [getUserDetails('Nels_Zieme'), getUserDetails('rocket')];

console.log(user1);
console.log(user2); // undefined

const user3 = getUserDetails(5);
console.log(user3);
user3?.logComment(`This is a comment from user ${user3.username}`);
