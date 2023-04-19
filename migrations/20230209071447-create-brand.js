"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Brand", {
      brandId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      brandName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      brandEmail: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      brandWebsite: Sequelize.TEXT,
      brandContact: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      brandAddress: Sequelize.TEXT,
      brandWallet: {
        type: Sequelize.TEXT,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      timestamp: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      misc: Sequelize.JSON,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Brand");
  },
};
