'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('city', {
      cityId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      cityName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      areaSize: {
        type: Sequelize.JSON,
      },
      gridBlocks: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dimensions: {
        type: Sequelize.JSON,
      },
      coOrdinates: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      misc: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('city');
  }
};