"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("offersAndDiscounts", {
      promotionId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      brandId: {
        type: Sequelize.UUID,
        references: {
          model: "brand",
          key: "brandId",
        },
      },
      promotionName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      promotionDescription: {
        type: Sequelize.TEXT,
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
      minOrderValue: {
        type: Sequelize.FLOAT,
      },
      eligibleBank: {
        type: Sequelize.TEXT,
      },
      cardType: {
        type: Sequelize.TEXT,
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      applicableDays: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
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
    await queryInterface.dropTable("offersAndDiscounts");
  },
};
