'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Books', 'publisher', { 
      type: Sequelize.STRING,
      allowNull: true,
      after: 'pageQuantity',
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Books', 'publisher');
  }
};
