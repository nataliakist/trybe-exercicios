interface Character {
  name: string;
  specialMove: string; 
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  create(character:Character):Promise<DbCharacter>;
  update(id:number, character:Character):Promise<DbCharacter>;
  delete(id:number):Promise<DbCharacter>;
  getAll():Promise<DbCharacter[]>;
  getById(id:number):Promise<DbCharacter>
}

class LocalDbModel implements IModel {
  create = async (character:Character):Promise<DbCharacter> => {
    const id = db.length > 0 ? db[db.length] : 1;
    const newCharacter = { id: +id, ...character };
    db.push(newCharacter);
    return newCharacter;
  };

  findIndex = (id: number):number => {
    const index = db.findIndex((character) => character.id === id);
    if (!index || index < 0) throw new Error('Character not found');
    return index;
  }

  update = async (id:number, character:Character):Promise<DbCharacter> => {
    const indexToUpdate = this.findIndex(id);
    db[indexToUpdate] = { id:indexToUpdate, ...character };
    return db[indexToUpdate];
  }

  delete = async (id:number):Promise<DbCharacter> => {
    const indexToDelete = this.findIndex(id);
    const deletedCharacter = db.splice(indexToDelete, 1);
    if (deletedCharacter.length < 0) throw new Error('Character not found');
    return deletedCharacter[0];
  }

  getAll = async ():Promise<DbCharacter[]> => db;

  getById = async (id:number):Promise<DbCharacter> => {
    const indexToGet = this.findIndex(id);
    return db[indexToGet];
  }
}

const localDb = new LocalDbModel();

class CharacterService {
  constructor(private model:IModel) {}

  async create(character:Character) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  async update(id:number, character:Character) {
    const updatedCharacter = await this.model.update(id, character);
    return ({ status: 200, data: updatedCharacter });
  }

  async delete(id:number) {
    const deletedCharacter = await this.model.delete(id);
    return ({ status: 204, data: deletedCharacter });
  }

  async getAll() {
    const allCharacters = await this.model.getAll();
    return ({ status: 200, data: allCharacters });
  }

  async getById(id:number) {
    const specifiedCharacter = await this.model.getById(id);
    return ({ status: 200, data: specifiedCharacter });
  }
}

class MockDbModel implements IModel {
  async create(character: Character) {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMove: 'Toad' };
  }

  async update(id: number, character: Character) {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
  }

  async delete(id: number) {
    console.log('character deleted');
    return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
  }

  async getAll() {
    return [
      { id: 1, name: 'Samus', specialMove: 'Charge Shot' },
      { id: 2, name: 'Kirby', specialMove: 'Inhale' },
    ];
  }

  async getById(id: number) {
    return { id: 1, name: 'Mario', specialMove: 'Fireball' };
  }
}

const mockedDb = new MockDbModel();

const c1 = new CharacterService(localDb);
const c2 = new CharacterService(mockedDb);

const character = { name: 'Luigii', specialMove: 'Jump' }

c1.create(character).then(console.log)
c2.getById(2).then(console.log) 