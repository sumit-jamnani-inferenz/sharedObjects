"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productLocationShuffling extends Model {
    static associate(models) {
      productLocationShuffling.belongsTo(models.productLocation, {
        foreignKey: "locationId",
        as: "productLocation",
        targetKey: "locationId",
      });
      productLocationShuffling.belongsTo(models.productDetails, {
        foreignKey: "productId",
        as: "productDetils",
        targetKey: "productId",
      });
      productLocationShuffling.belongsTo(models.productVariants, {
        foreignKey: "variantId",
        as: "productVariants",
        targetKey: "variantId",
      });
    }
  }
  productLocationShuffling.init(
    {
      mappingId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      locationId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      productId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      variantId: {
        type: DataTypes.UUID,
      },
      shufflingDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "productLocationShuffling",
    }
  );
  return productLocationShuffling;
};
