"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("productDiscount", {
      discountId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      brandId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "brand",
          key: "brandId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      discountName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      discountDescription: {
        type: Sequelize.TEXT,
      },
      discountType: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      totalDiscount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      thumbnailImage: {
        type: Sequelize.TEXT,
      },
      discountStartDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      discountEndDate: {
        type: Sequelize.DATE,
        allowNull: false,
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
    await queryInterface.dropTable("productDiscount");
  },
};
