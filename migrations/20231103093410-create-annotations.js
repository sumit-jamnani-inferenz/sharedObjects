"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("annotations", {
      annotationId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      accountId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "userAccounts",
          key: "accountId",
        },
      },
      productId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "mollyProducts",
          key: "productId",
        },
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
      annotationLabel: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      annotationValues: {
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
    await queryInterface.dropTable("annotations");
  },
};
