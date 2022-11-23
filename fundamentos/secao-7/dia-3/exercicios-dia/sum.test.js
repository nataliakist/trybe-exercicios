const sum = require('./sum');
// A função sum(a, b) retorna a soma do parâmetro a com o b:
// Teste se o retorno de sum(4, 5) é 9;

// Teste se o retorno de sum(0, 0) é 0.

// Teste se a função sum lança um erro quando os parâmetros são number 4 e string '5';

// Teste se a mensagem de erro é 'parameters must be numbers' quando realizar a chamada sum(4, '5');

describe('a função sum(a, b)', () => {
  it('retorna 9 para a soma de 4 + 5', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('retorna 0 para 0 + 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  it('a mensagem do erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => { sum(4, '5') }).toThrow(new Error('parameters must be numbers'))
  });
});