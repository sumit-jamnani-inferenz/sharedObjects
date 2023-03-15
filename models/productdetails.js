'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productDetails extends Model {
    static associate(models) {
      productDetails.belongsTo(models.Brand, {
        foreignKey: 'brandId',
        as: 'brand',
        targetKey: 'brandId',
        onDelete: 'CASCADE',
      })
      productDetails.belongsTo(models.productCategories, {
        foreignKey: 'productCategoryId',
        as: 'category',
        targetKey: 'productCategoryId',
        onDelete: 'CASCADE',
      })
      productDetails.belongsTo(models.productSubCategories, {
        foreignKey: 'productSubCategoryId',
        as: 'subCategory',
        targetKey: 'productSubCategoryId',
        onDelete: 'CASCADE',
      })
      productDetails.belongsTo(models.productDiscount, {
        foreignKey: 'discountId',
        as: 'discount',
        targetKey: 'discountId',
        onDelete: 'CASCADE',
      })
      productDetails.hasMany(models.productVariants, {
        foreignKey: 'productSKU',
        as: 'variants',
        sourceKey: 'productSKU',
        onDelete: 'CASCADE',
      })
      productDetails.hasMany(models.productsPair, {
        foreignKey: 'productId',
        as: 'pairing',
        sourceKey: 'productId',
        onDelete: 'CASCADE',
      })
      productDetails.hasMany(models.productsPair, {
        foreignKey: 'productId',
        as: 'pairedProduct',
        sourceKey: 'productId',
        onDelete: 'CASCADE',
      })
      productDetails.hasMany(models.userChoices, {
        foreignKey: 'productId',
        as: 'Choices',
        sourceKey: 'productId',
        onDelete: 'CASCADE',
      })
    }
  }
  productDetails.init({
    productId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    productSKU: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
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