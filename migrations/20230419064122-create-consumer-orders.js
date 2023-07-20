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
      orderId: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      accountId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "userAccounts",
          key: "accountId",
        },
      },
      totalAmount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      totalShipCost: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      orderStatus: {
        type: Sequelize.TEXT,
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
      shippingAddressId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "shippingAddress",
          key: "shippingAddressId",
        },
      },
      blockchianTID: {
        type: Sequelize.TEXT,
      },
      walletAddress: {
        type: Sequelize.TEXT,
      },
      blockNumber: {
        type: Sequelize.TEXT,
      },
      epochTimestamp: {
        type: Sequelize.TEXT,
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
