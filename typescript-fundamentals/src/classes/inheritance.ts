import { Video } from './basic';

class Documentary extends Video {
  constructor(title: string, year: number, public subject: string) {
    super(title, year);
  }

  // Overriding the print method from parent class
  print(): void {
    super.print(); // method from parent class
    console.log(`Subject: ${this.subject} (${this.year})`);
  }

  printCredits(): void {
    console.log(`Producer: ${this.producer}`);
  }
}

let documentary = new Documentary(
  'The history of TypeScript',
  2022,
  'film history'
);
documentary.producer = 'History Channel';
documentary.printCredits();
