"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("productLocationShuffling", {
      mappingId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      locationId: {
        type: Sequelize.UUID,
        references: {
          model: "productLocation",
          key: "locationId",
        },
      },
      productId: {
        type: Sequelize.UUID,
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
      shufflingDate: {
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
    await queryInterface.dropTable("productLocationShuffling");
  },
};
