"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orgPayments", {
      invoiceId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      leaseId: {
        type: Sequelize.UUID,
        references: {
          model: "leasedEstates",
          key: "leaseId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      brandId: {
        type: Sequelize.UUID,
        references: {
          model: "brand",
          key: "brandId",
        },
      },
      orderId: {
        type: Sequelize.TEXT,
      },
      paymentId: {
        type: Sequelize.TEXT,
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      currency: {
        type: Sequelize.TEXT,
        allowNull: false,
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
    await queryInterface.dropTable("orgPayments");
  },
};
