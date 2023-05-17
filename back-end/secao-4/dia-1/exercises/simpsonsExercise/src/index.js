const { readData, writeNewData } = require('./utils/fsUtils');
const readline = require('readline-sync')

async function main() {
  await readData();
  const name = readline.question('What\'s the character name? ')
  writeNewData({ name });
}

main()