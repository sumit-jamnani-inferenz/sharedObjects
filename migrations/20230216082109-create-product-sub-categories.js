"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("productSubCategories", {
      productSubCategoryId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      productCategoryId: {
        type: Sequelize.UUID,
        references: {
          model: "productCategories",
          key: "productCategoryId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      subCategoryName: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("productSubCategories");
  },
};
