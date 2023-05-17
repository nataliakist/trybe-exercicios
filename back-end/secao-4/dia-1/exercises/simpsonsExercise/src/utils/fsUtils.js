const fs = require('fs').promises;
const path = require('path')

async function readData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../../data/simpsons.json'));
    const infos = JSON.parse(data)
    return infos;
  } catch (e) {
    console.error(`Erro: ${e.message}`)
  }
}

module.exports = {
  readData
};