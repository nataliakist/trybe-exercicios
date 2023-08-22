function returningPromise(a, b, c) {
  return new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(new Error('Informe apenas números'))

    const result = (a + b) * c;

    if(result < 50) reject(new Error('Valor muito baixo'))

    resolve(result);
  })
}

async function main(a, b, c) {
  try {
    const resolve = await returningPromise(a, b, c);
    console.log(resolve);
  } catch (error) {
    console.log(error.message);
  }
}

main(1, 1, 1);