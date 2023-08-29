"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productLocation extends Model {
    static associate(models) {
      productLocation.belongsTo(models.storeDisplay, {
        foreignKey: "displayId",
        as: "storeDisplay",
        targetKey: "displayId",
        onDelete: "CASCADE",
      });
      productLocation.belongsTo(models.productDetails, {
        foreignKey: "productId",
        as: "productDetails",
        targetKey: "productId",
      });
      productLocation.hasMany(models.productLocationShuffling, {
        foreignKey: "locationId",
        as: "productLocationShuffling",
        sourceKey: "locationId",
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
      displayId: {
        type: DataTypes.UUID,
      },
      productId: {
        type: DataTypes.UUID,
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
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
