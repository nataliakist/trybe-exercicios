const fs = require('fs').promises;
const path = require('path')

const SIMPSONS_DATA_PATH = '../../data/simpsons.json';

async function readData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, SIMPSONS_DATA_PATH), 'utf-8');
    const infos = JSON.parse(data)
    // const result = infos.map(({ id, name }) => `${id} - ${name}`)
    // result.forEach(element => console.log(element))
    return infos;
  } catch (e) {
    console.error(`Erro: ${e.message}`)
  }
}

async function writeNewData(newData) {
  try {
    const oldData = await readData();
    const fullData = [...oldData, { id: oldData.length + 1, ...newData}];
    const stringifyData = JSON.stringify(fullData);
    await fs.writeFile(path.resolve(__dirname, SIMPSONS_DATA_PATH), stringifyData);
    console.log('New character successfully added')
  } catch(e) {
    console.error(`Erro: ${e.message}`)
  }
}

async function searchCharacter(characterId) {
  const data = await readData();
  const character = data.find((character) => Number(character.id) === characterId)
  if (!character) {
    throw new Error('id não encontrado')
  }
  return character;
}

module.exports = {
  readData,
  writeNewData,
  searchCharacter,
};