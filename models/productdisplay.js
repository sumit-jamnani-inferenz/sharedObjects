"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productDisplay extends Model {
    static associate(models) {
      productDisplay.belongsTo(models.brand, {
        foreignKey: "brandId",
        as: "brand",
        targetKey: "brandId",
        onDelete: "CASCADE",
      });
      productDisplay.hasMany(models.productLocation, {
        foreignKey: "displayId",
        as: "productLocation",
        sourceKey: "displayId",
        onDelete: "CASCADE",
      });
    }
  }
  productDisplay.init(
    {
      displayId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      brandId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      displayCode: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      displayImage: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "productDisplay",
      tableName: "productDisplay",
    }
  );
  return productDisplay;
};
