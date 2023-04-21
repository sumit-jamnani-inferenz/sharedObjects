"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("productLocation", {
      locationId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
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
      brandId: {
        type: Sequelize.UUID,
        references: {
          model: "brand",
          key: "brandId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable("productLocation");
  },
};
