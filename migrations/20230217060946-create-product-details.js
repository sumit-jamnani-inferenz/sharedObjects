'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productDetails', {
      productId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      productSKU: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      brandId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Brand',
          key: 'brandId',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      discountId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'productDiscount',
          key: 'discountId',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      productCategoryId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'productCategories',
          key: 'productCategoryId',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      productSubCategoryId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'productSubCategories',
          key: 'productSubCategoryId',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      productDescription: {
        type: Sequelize.STRING,
        allowNull: false
      },
      productPrice: {
        type: Sequelize.FLOAT,
      },
      productAttributes: {
        type: Sequelize.JSON,
      },
      brandName: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      specifications: {
        type: Sequelize.STRING,
        allowNull: false
      },
      productMaterial: {
        type: Sequelize.STRING,
        allowNull: false
      },
      searchKeywords: {
        type: Sequelize.STRING,
        allowNull: false
      },
      unit: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      imageURL: {
        type: Sequelize.STRING,
      },
      minOrderQTY: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      maxOrderQTY: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      shippingWeight: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      shippingWeightUOM: {
        type: Sequelize.STRING,
        allowNull: false
      },
      itemDimensions: {
        type: Sequelize.JSON,
        allowNull: false
      },
      isDigitalAsset: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      misc: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productDetails');
  }
};