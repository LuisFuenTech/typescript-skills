import { User, Gender, CommentLogger } from '../types';

const logComment: CommentLogger = (comment: string) =>
  console.log(`comment: ${comment}`);

export const users: User[] = [
  {
    id: 1,
    username: 'Herminia.Denesik',
    age: 80,
    gender: Gender.Female,
    logComment
  },
  {
    id: 2,
    username: 'Nels_Zieme',
    age: 90,
    gender: Gender.Female,
    logComment
  },
  {
    id: 3,
    username: 'Jacinto75',
    age: 26,
    gender: Gender.Female,
    logComment
  },
  {
    id: 4,
    username: 'Foster_Erdman97',
    age: 81,
    gender: Gender.Male,
    logComment
  },
  {
    id: 5,
    username: 'Antonina97',
    age: 84,
    gender: Gender.Female,
    logComment
  }
];
