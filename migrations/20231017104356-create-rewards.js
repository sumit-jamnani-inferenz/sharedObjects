"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("rewards", {
      rewardId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      rewardName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      rewardDescription: {
        type: Sequelize.TEXT,
      },
      rewardType: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      thresholdAmount: {
        type: Sequelize.FLOAT,
      },
      rewardValue: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      expirationDays: {
        type: Sequelize.INTEGER,
      },
      rewardStartDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      rewardEndDate: {
        type: Sequelize.DATE,
      },
      thumbnailImage: {
        type: Sequelize.TEXT,
      },
      offeredBy: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("rewards");
  },
};
