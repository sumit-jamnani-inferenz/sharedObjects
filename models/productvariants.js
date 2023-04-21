"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productVariants extends Model {
    static associate(models) {
      productVariants.belongsTo(models.productDetails, {
        foreignKey: "productSKU",
        as: "product",
        targetKey: "productSKU",
        onDelete: "CASCADE",
      });
    }
  }
  productVariants.init(
    {
      variantId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      productSKU: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      variantValue: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imageURL: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "productVariants",
      tableName: "productVariants",
    }
  );
  return productVariants;
};
