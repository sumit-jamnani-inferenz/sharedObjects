'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productVariants extends Model {
    static associate(models) {
      productVariants.belongsTo(models.productDetails, {
        foreignKey: 'productSKU',
        as: 'product',
        onDelete: 'CASCADE',
      })
    }
  }
  productVariants.init({
    variantId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    productSKU: {
      type: DataTypes.STRING,
      allowNull: false
    },
    variantValue: {
      type: DataTypes.JSON,
      allowNull: false
    },
    brandName: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imageURL: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    misc: {
      type: DataTypes.JSON
    }
  }, {
    sequelize,
    modelName: 'productVariants',
  });
  return productVariants;
};