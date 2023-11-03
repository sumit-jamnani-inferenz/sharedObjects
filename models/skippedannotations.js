"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class skippedAnnotations extends Model {
    static associate(models) {
      skippedAnnotations.belongsTo(models.mollyProducts, {
        foreignKey: "productId",
        as: "product",
        targetKey: "productId",
      });
      skippedAnnotations.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
      });
    }
  }
  skippedAnnotations.init(
    {
      skippedAnnotationId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      accountId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      productId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "skippedAnnotations",
    }
  );
  return skippedAnnotations;
};
