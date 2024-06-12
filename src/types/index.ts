export enum Gender {
  Male = 'male',
  Female = 'female'
}

export interface User {
  id: number;
  username: string;
  age: number;
  gender: Gender;
}

export type UserOutput = User | undefined;

export type UserInput = number | string;
