"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class storeDisplay extends Model {
    static associate(models) {
      storeDisplay.belongsTo(models.brand, {
        foreignKey: "brandId",
        as: "brand",
        targetKey: "brandId",
        onDelete: "CASCADE",
      });
      storeDisplay.hasMany(models.productLocation, {
        foreignKey: "displayId",
        as: "productLocation",
        sourceKey: "displayId",
        onDelete: "CASCADE",
      });
    }
  }
  storeDisplay.init(
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
      modelName: "storeDisplay",
      tableName: "storeDisplay",
    }
  );
  return storeDisplay;
};
