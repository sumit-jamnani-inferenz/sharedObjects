"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("productDetails", {
      productId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      productSKU: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      brandId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "brand",
          key: "brandId",
        },
      },
      discountId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "productDiscount",
          key: "discountId",
        },
      },
      productCategoryId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "productCategories",
          key: "productCategoryId",
        },
      },
      productSubCategoryId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "productSubCategories",
          key: "productSubCategoryId",
        },
      },
      productName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      productDescription: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      productPrice: {
        type: Sequelize.FLOAT,
      },
      priceCurrency: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      productAttributes: {
        type: Sequelize.JSON,
      },
      brandName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      specifications: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,
      },
      productMaterial: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      searchKeywords: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        // allowNull: false,
      },
      unit: {
        type: Sequelize.TEXT,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      productDisplayImage: {
        type: Sequelize.TEXT,
        // allowNull: false,
      },
      thumbnailImage: {
        type: Sequelize.TEXT,
        // allowNull: false,
      },
      imageURL: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      minOrderQTY: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      maxOrderQTY: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shippingWeight: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      shippingWeightUOM: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      itemDimensions: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      isDigitalAsset: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("productDetails");
  },
};
