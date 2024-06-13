export class Author {
  static description: string = 'This class represents an author';

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }
}

export abstract class Video {
  private _producer: string = '';
  static medium: string = 'Audio/Visual';

  constructor(private title: string, protected year: number) {}

  get producer(): string {
    return this._producer.toUpperCase();
  }

  set producer(value: string) {
    this._producer = value;
  }

  print(): void {
    console.log(`Title: ${this.title}`);
    console.log(`Release year: ${this.year}`);
    console.log(`Producer: ${this.producer}`);
    console.log(`Medium: ${Video.medium}`);
  }

  abstract printCredits(): void;
}

/* const newAuthor = new Author('John Doe');
console.log(`Author name is: ${newAuthor.name}`);
console.log(`Description: ${Author.description}`); */

/* const newVideo: Video = new Video('TypeScript for beginners', 2023);
newVideo.producer = 'Luis Fuentes';
newVideo.print(); */
