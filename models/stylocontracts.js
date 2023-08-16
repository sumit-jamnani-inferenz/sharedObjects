"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class styloContracts extends Model {
    static associate(models) {
      styloContracts.hasMany(models.leasedEstates, {
        foreignKey: "contractId",
        as: "leasedEstates",
        sourceKey: "contractId",
      });
    }
  }
  styloContracts.init(
    {
      contractId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      contractName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contractDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contractDuration: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contractAmount: {
        type: DataTypes.INTEGER,
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
      modelName: "styloContracts",
      tableName: "styloContracts",
    }
  );
  return styloContracts;
};
