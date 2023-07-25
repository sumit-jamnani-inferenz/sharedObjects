"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("returnReplacementStatusHistory", {
      historyId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      requestId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "returnReplacementOrders",
          key: "requestId",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
      },
      status: {
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
    await queryInterface.dropTable("returnReplacementStatusHistory");
  },
};
