// printMessageTest.test.js
const { info, printMessage } = require('./printMessage');

describe('a função printMessage(characterInfo)', () => {
  it('possui como parâmetro um objeto que possui a proriedade personagem', () => {
    expect(info).toHaveProperty('personagem');
  });
  it('contém a informação "Boas vindas," na resposta antes de chamar o nome da personagem', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
    expect(printMessage(info)).toMatch(info.personagem);
  });
  it('uma mensagem de erro é lançada caso a função deseja chamada com um objeto inválido', () => {
    expect(() => { printMessage(['Margarida', 'Pato Donald', 'Namorada do personagem principal nos quadrinhos do Pato Donald']) }).toThrow(new Error('objeto inválido'));
  })
});