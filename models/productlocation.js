"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productLocation extends Model {
    static associate(models) {
      productLocation.belongsTo(models.brand, {
        foreignKey: "brandId",
        as: "brand",
        targetKey: "brandId",
        onDelete: "CASCADE",
      });
      productLocation.belongsTo(models.productDetails, {
        foreignKey: "productId",
        as: "productDetails",
        targetKey: "productId",
        onDelete: "CASCADE",
      });
    }
  }
  productLocation.init(
    {
      locationId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.UUID,
      },
      brandId: {
        type: DataTypes.UUID,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "productLocation",
      tableName: "productLocation",
    }
  );
  return productLocation;
};
