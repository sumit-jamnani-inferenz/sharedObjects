"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class annotations extends Model {
    static associate(models) {
      annotations.belongsTo(models.mollyProducts, {
        foreignKey: "productId",
        as: "product",
        targetKey: "productId",
      });
      annotations.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
      });
    }
  }
  annotations.init(
    {
      annotationId: {
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
      annotationLabel: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      annotationValues: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "annotations",
    }
  );
  return annotations;
};
