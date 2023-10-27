"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("productVariants", {
      variantId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      productSKU: {
        type: Sequelize.TEXT,
        allowNull: false,
        references: {
          model: "productDetails",
          key: "productSKU",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      variantSKU: {
        type: Sequelize.TEXT,
      },
      variantValue: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      searchKeywords: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      thumbnailImage: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      imageURL: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,
      },
      shippingWeight: {
        type: Sequelize.FLOAT,
        // allowNull: false,
      },
      shippingWeightUOM: {
        type: Sequelize.TEXT,
        // allowNull: false,
      },
      itemDimensions: {
        type: Sequelize.JSON,
        // allowNull: false,
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
    await queryInterface.dropTable("productVariants");
  },
};
