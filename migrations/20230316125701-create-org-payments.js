'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orgPayments', {
      paymentId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      leaseId: {
        type: Sequelize.UUID,
        references: {
          model: 'leasedEstates',
          key: 'leaseId',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      brandId: {
        type: Sequelize.UUID,
        references: {
          model: 'Brand',
          key: 'brandId',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      paymentAmount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      invoiceINTEGER: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      blockchianTID: {
        type: Sequelize.TEXT,
      },
      BAWalletAddress: {
        type: Sequelize.TEXT,
      },
      blockINTEGER: {
        type: Sequelize.TEXT,
      },
      BLEpochTimestamp: {
        type: Sequelize.TEXT,
      },
      misc: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orgPayments');
  }
};