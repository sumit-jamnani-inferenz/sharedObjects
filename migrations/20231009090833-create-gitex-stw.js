"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("gitexSTW", {
      productId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      productName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      imageURL: {
        type: Sequelize.TEXT,
      },
      isAvailable: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      misc: {
        type: Sequelize.JSON,
      },
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
    await queryInterface.dropTable("gitexSTW");
  },
};
