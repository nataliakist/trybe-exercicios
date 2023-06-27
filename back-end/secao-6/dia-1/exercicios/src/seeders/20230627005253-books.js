'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Jogos Vorazes',
        author: 'Suzanne Collins',
        pageQuantity: 400,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Não conte a ninguem',
        author: 'Harlan Coben',
        pageQuantity: 256,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Books'),
};
