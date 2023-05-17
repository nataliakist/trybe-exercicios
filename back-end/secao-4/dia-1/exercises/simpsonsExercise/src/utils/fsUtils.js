const fs = require('fs').promises;
const path = require('path');

const SIMPSONS_DATA_PATH = '../../data/simpsons.json';
const SIMPSONS_FAMILY_PATH = '../../data/simpsonFamily.json';

async function readData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, SIMPSONS_DATA_PATH), 'utf-8');
    const infos = JSON.parse(data);
    // const result = infos.map(({ id, name }) => `${id} - ${name}`)
    // result.forEach(element => console.log(element))
    return infos;
  } catch (e) {
    console.error(`Erro: ${e.message}`);
  }
}

async function writeNewData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, SIMPSONS_FAMILY_PATH), 'utf-8');
    const oldData = JSON.parse(data);
    const fullData = [...oldData, { id: 8, name: 'Nelson Muntz' }];
    const stringifyData = JSON.stringify(fullData);
    await fs.writeFile(path.resolve(__dirname, SIMPSONS_FAMILY_PATH), stringifyData);
    console.log('New character successfully added');
  } catch (e) {
    console.error(`Erro: ${e.message}`);
  }
}

async function searchCharacter(characterId) {
  const data = await readData();
  const character = data.find((currentCharacter) => Number(currentCharacter.id) === characterId);
  if (!character) {
    throw new Error('id não encontrado');
  }
  return character;
}

async function deleteCharacter() {
  const data = await readData();
  const newData = data
    .filter((character) => Number(character.id) !== 6 && Number(character.id) !== 10);
  const stringify = JSON.stringify(newData);
  await fs.writeFile(path.resolve(__dirname, SIMPSONS_DATA_PATH), stringify);
  console.log('Personagens removidos com sucesso');
}

async function writeNewFile() {
  const data = await readData();
  const newData = data.filter((character) => Number(character.id) <= 4);
  const stringify = JSON.stringify(newData);
  await fs.writeFile(path.resolve(__dirname, '../../data/simpsonFamily.json'), stringify);
  console.log('Novo arquivo criado com sucesso');
}

async function changeCharacter() {
  const data = await fs.readFile(path.resolve(__dirname, SIMPSONS_FAMILY_PATH), 'utf-8');
  const oldData = JSON.parse(data);
  const familyWithouNelson = oldData
    .filter((currentCharacter) => Number(currentCharacter.id) !== 8);
  const newData = familyWithouNelson.concat({ id: '5', name: 'Maggie Simpson' });
  const stringifyData = JSON.stringify(newData);
  await fs.writeFile(path.resolve(__dirname, SIMPSONS_FAMILY_PATH), stringifyData);
  console.log('Maggie inserida com sucesso');
}

module.exports = {
  readData,
  writeNewData,
  searchCharacter,
  deleteCharacter,
  writeNewFile,
  changeCharacter,
};