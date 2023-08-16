"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orderPayments", {
      paymentId: {
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
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      transactionId: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      paymentAmount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      paymentStatus: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      paymentMethod: {
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
    await queryInterface.dropTable("orderPayments");
  },
};
