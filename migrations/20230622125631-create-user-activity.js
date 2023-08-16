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
      },
      estateId: {
        type: Sequelize.UUID,
        references: {
          model: "styloEstates",
          key: "estateId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      productId: {
        type: Sequelize.UUID,
        references: {
          model: "productDetails",
          key: "productId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      activityType: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      visitedCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      activityTime: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("userActivity");
  },
};
