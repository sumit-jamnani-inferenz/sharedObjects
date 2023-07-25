"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orderStatusHistory", {
      historyId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      invoiceId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "consumerOrders",
          key: "invoiceId",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
      },
      orderItemId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "orderItems",
          key: "orderItemId",
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
    await queryInterface.dropTable("orderStatusHistory");
  },
};
