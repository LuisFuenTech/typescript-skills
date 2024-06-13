import { Video } from './basic';

const Musical = class extends Video {
  printCredits(): void {
    console.log(`Musical credits: ${this.producer}`);
  }
};

let myMusical = new Musical('The Phantom of the Opera', 2022);
myMusical.producer = 'Andrew Lloyd Webber';
myMusical.printCredits();
