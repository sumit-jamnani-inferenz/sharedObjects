"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("offersAndDiscountsApplied", {
      accountId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      orderItemId: {
        type: Sequelize.UUID,
        references: {
          model: "orderItems",
          key: "orderItemId",
        },
        allowNull: false,
      },
      promotionName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      promotionType: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      promotionCategory: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      promotionValue: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable("offersAndDiscountsApplied");
  },
};
