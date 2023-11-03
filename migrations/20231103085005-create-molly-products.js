"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("mollyProducts", {
      productId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      imgName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      imgLink: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      model: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      defaultLabel: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("mollyProducts");
  },
};
