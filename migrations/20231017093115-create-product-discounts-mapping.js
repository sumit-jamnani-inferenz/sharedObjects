"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("productDiscountsMapping", {
      mappingId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      productId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "productDetails",
          key: "productId",
        },
      },
      variantId: {
        type: Sequelize.UUID,
        references: {
          model: "productVariants",
          key: "variantId",
        },
      },
      promotionId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "offersAndDiscounts",
          key: "promotionId",
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
    await queryInterface.dropTable("productDiscountsMapping");
  },
};
