const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs/promises');

const app = require('../../src/app');

const mockChocolates = require('./mocks/mockChocolate');
const mockCacauFile = require('./mocks/mockCacauTrybeFile');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a API Cacau Trybe', function () {
  afterEach(function () {
    sinon.restore();
  });
  describe('Usando o método GET em /chocolates', function () {
    afterEach(function () {
      sinon.restore();
    });
    it('retorna status 200 e devolve toda lista de chocolates quando resolvido', async function () {
      sinon.stub(fs, 'readFile').resolves(JSON.stringify(mockCacauFile));

      const response = await chai.request(app)
        .get('/chocolates');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(mockChocolates);
    });
    it('retorna mensagem de Erro e status 500 quando rejeitado', async function () {
      sinon.stub(fs, 'readFile').rejects();
      const response = await chai.request(app)
        .get('/chocolates');
      expect(response.status).to.equal(500);
      expect(response.body).to.deep.equal({
        message: 'INTERNAL SERVER ERROR'
      })
    });
    it('/POST deve cadastrar um novo chocolate com id 5', async function () {
      sinon.stub(fs, 'writeFile').returns();
      const response = await chai.request(app)
        .post('/chocolates')
        .send({
          name: 'My Super Chocolate',
          brandId: 2
        });
      expect(response.status).to.equal(201);
      expect(response.body).to.deep.equal({
        newChocolate: {
        id: 5,
        name: 'My Super Chocolate',
        brandId: 2
      }});
    });
  });
  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        });
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });
});