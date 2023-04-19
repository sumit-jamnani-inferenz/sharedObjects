"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("consumerOrders", {
      invoiceId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      accountId: {
        type: Sequelize.UUID,
        references: {
          model: "userAccounts",
          key: "accountId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      shippingAddressId: {
        type: Sequelize.UUID,
        references: {
          model: "shippingAddress",
          key: "shippingAddressId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      orderId: {
        type: Sequelize.TEXT,
      },
      paymentId: {
        type: Sequelize.TEXT,
      },
      productsQty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      accountWallet: {
        type: Sequelize.TEXT,
      },
      totalAmount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      totalShipCost: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      blockchianTID: {
        type: Sequelize.TEXT,
      },
      BAWalletAddress: {
        type: Sequelize.TEXT,
      },
      blockNumber: {
        type: Sequelize.TEXT,
      },
      BLEpochTimestamp: {
        type: Sequelize.TEXT,
      },
      transactionStatus: {
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
    await queryInterface.dropTable("consumerOrders");
  },
};
