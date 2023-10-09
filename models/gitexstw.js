"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class gitexSTW extends Model {
    static associate(models) {
      // define association here
    }
  }
  gitexSTW.init(
    {
      productId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      productName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageURL: {
        type: DataTypes.TEXT,
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
      modelName: "gitexSTW",
      tableName: "gitexSTW",
    }
  );
  return gitexSTW;
};
