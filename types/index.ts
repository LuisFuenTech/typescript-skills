export enum Gender {
  Male = 'male',
  Female = 'female'
}

export interface User {
  id: number;
  username: string;
  age: number;
  gender: Gender;
  logComment: CommentLogger;
}

export interface CommentLogger {
  (comment: string): void;
}

export type UserOutput = User | undefined;

export type UserInput = number | string;
