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
        type: Sequelize.STRING,
      },
      blockINTEGER: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      activityType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      activityTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      NFTMetadata: {
        type: Sequelize.STRING,
      },
      blockTimestamp: {
        type: Sequelize.STRING,
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
