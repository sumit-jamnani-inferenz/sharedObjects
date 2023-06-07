"use strict";
const { Model, DATE } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productVariants extends Model {
    static associate(models) {
      productVariants.belongsTo(models.productDetails, {
        foreignKey: "productSKU",
        as: "product",
        targetKey: "productSKU",
        onDelete: "CASCADE",
      });
      productVariants.hasMany(models.orderItems, {
        foreignKey: "variantId",
        as: "orderItems",
        sourceKey: "variantId",
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
      searchKeywords: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      thumbnailImage: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageURL: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
      },
      shippingWeight: {
        type: DataTypes.FLOAT,
        // allowNull: false,
      },
      shippingWeightUOM: {
        type: DataTypes.TEXT,
        // allowNull: false,
      },
      itemDimensions: {
        type: DataTypes.JSON,
        // allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
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
