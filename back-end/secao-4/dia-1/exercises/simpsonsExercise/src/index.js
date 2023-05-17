const { readData } = require('./utils/fsUtils');

async function main() {
  const infos = await readData();
  console.log(infos);
}

main()