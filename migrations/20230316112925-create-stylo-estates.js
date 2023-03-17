'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('styloEstates', {
      estateId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      cityId: {
        type: Sequelize.UUID,
        references: {
          model: 'city',
          key: 'cityId',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      mallId: {
        type: Sequelize.UUID,
        references: {
          model: 'mall',
          key: 'mallId',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      estateCode: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      sector: {
        type: Sequelize.INTEGER,
      },
      estateType: {
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
        allowNull: false
      },
      modelLink: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      imagePath: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      isAvailable: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('styloEstates');
  }
};