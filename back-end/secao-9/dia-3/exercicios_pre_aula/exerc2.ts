abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;

  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Hi, I'm ${this._name}. I attack at close range.`);
  }

  specialMove(): void {
    console.log(`${this._name} used ${this._specialMoveName} special move!`);
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Hi, I'm ${this._name}. I attack at long range.`);
  }

  specialMove(): void {
    console.log(`${this._name} used ${this._specialMoveName} special move!`);
  }
}

const yoshi = new MeleeCharacter('Yoshi', 'Super Warrior');
const samus = new LongRangeCharacter('Samus', 'Freezing Laser');

Character.characterPresentation(yoshi);
Character.characterPresentation(samus);