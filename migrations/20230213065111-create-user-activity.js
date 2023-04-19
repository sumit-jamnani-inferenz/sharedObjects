"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("userActivity", {
      activityId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
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
      accountWallet: {
        type: Sequelize.TEXT,
      },
      blockNumber: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      activityType: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      activityTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      NFTMetadata: {
        type: Sequelize.TEXT,
      },
      blockTimestamp: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      misc: Sequelize.JSON,
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
    await queryInterface.dropTable("userActivity");
  },
};
