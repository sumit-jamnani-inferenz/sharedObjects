"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("refunds", {
      refundId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      orderItemId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      paymentId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      refundAmount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      refundMethod: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      refundTransactionId: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      refundCompleteDate: {
        type: Sequelize.DATE,
      },
      refundStatus: {
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
    await queryInterface.dropTable("refunds");
  },
};
