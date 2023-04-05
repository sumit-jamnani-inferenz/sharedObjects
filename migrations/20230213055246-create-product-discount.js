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
          model: "Brand",
          key: "brandId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      discountName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      discountDescription: {
        type: Sequelize.STRING,
      },
      discountPercentage: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      discountType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      discountStartDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      discountEndDate: {
        type: Sequelize.DATE,
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
