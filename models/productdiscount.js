"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productDiscount extends Model {
    static associate(models) {
      productDiscount.belongsTo(models.brand, {
        foreignKey: "brandId",
        as: "brand",
        targetKey: "brandId",
        onDelete: "CASCADE",
      });
      productDiscount.hasMany(models.productDetails, {
        foreignKey: "discountId",
        as: "products",
        sourceKey: "discountId",
        onDelete: "CASCADE",
      });
      productDiscount.hasMany(models.orderItems, {
        foreignKey: "discountId",
        as: "orderItems",
        sourceKey: "discountId",
        onDelete: "CASCADE",
      });
    }
  }
  productDiscount.init(
    {
      discountId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      brandId: {
        type: DataTypes.UUID,
      },
      discountName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      discountDescription: {
        type: DataTypes.TEXT,
      },
      discountPercentage: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      discountType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      discountStartDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      discountEndDate: {
        type: DataTypes.DATE,
        allowNull: false,
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
      modelName: "productDiscount",
      tableName: "productDiscount",
    }
  );
  return productDiscount;
};
