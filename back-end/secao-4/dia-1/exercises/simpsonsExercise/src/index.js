const { readData, writeNewData, searchCharacter, deleteCharacter, writeNewFile } = require('./utils/fsUtils');
const readline = require('readline-sync')

async function main() {
  // await readData();
  // const name = readline.question('What\'s the character name? ')
  // writeNewData({ name });
  // const characterId = readline.questionInt('What\'s the character id you want to look for? ')
  // const result = await searchCharacter(characterId);
  // console.log(result);
  // await deleteCharacter();
  // await writeNewFile();
  await writeNewData();
}

main()