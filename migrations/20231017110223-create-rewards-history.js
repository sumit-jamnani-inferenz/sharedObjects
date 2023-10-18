"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("rewardsHistory", {
      historyId: {
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
        allowNull: false,
      },
      rewardType: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      superCoinsAmount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      orderItemId: {
        type: Sequelize.UUID,
        references: {
          model: "orderItems",
          key: "orderItemId",
        },
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
    await queryInterface.dropTable("rewardsHistory");
  },
};
