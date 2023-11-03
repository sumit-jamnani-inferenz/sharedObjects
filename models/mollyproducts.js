"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mollyProducts extends Model {
    static associate(models) {
      mollyProducts.hasMany(models.annotations, {
        foreignKey: "productId",
        as: "annotations",
        sourceKey: "productId",
      });
      mollyProducts.hasMany(models.skippedAnnotations, {
        foreignKey: "productId",
        as: "skippedAnnotations",
        sourceKey: "productId",
      });
    }
  }
  mollyProducts.init(
    {
      productId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      imgName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imgLink: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      model: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      defaultLabel: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "mollyProducts",
    }
  );
  return mollyProducts;
};
