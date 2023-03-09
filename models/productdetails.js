'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productDetails extends Model {
    static associate(models) {
      productDetails.hasMany(models.productVariants, {
        foreignKey: 'productSKU',
        as: 'variants',
        onDelete: 'CASCADE',
      });
    }
  }
  productDetails.init({
    productSKU: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    brandId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    discountId: {
      type: DataTypes.UUID,
    },
    productCategoryId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    productSubCategoryId: {
      type: DataTypes.UUID,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productPrice: {
      type: DataTypes.FLOAT,
    },
    productAttributes: {
      type: DataTypes.JSON,
    },
    brandName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    specifications: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productMaterial: {
      type: DataTypes.STRING,
      allowNull: false
    },
    searchKeywords: {
      type: DataTypes.STRING,
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    imageURL: {
      type: DataTypes.STRING,
    },
    minOrderQTY: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxOrderQTY: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shippingWeight: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    shippingWeightUOM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    itemDimensions: {
      type: DataTypes.JSON,
      allowNull: false
    },
    isDigitalAsset: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    misc: {
      type: DataTypes.JSON,
    }
  }, {
    sequelize,
    modelName: 'productDetails',
  });
  return productDetails;
};