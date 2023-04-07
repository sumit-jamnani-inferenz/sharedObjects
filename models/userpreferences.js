"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userPreferences extends Model {
    static associate(models) {
      userPreferences.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
        onDelete: "CASCADE",
      });
    }
  }
  userPreferences.init(
    {
      preferenceId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      accountId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      gender: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      bodyType: {
        type: DataTypes.TEXT,
      },
      bustSize: {
        type: DataTypes.TEXT,
      },
      preferredStyle: {
        type: DataTypes.TEXT,
      },
      preferredFit: {
        type: DataTypes.TEXT,
      },
      minPrice: {
        type: DataTypes.FLOAT,
      },
      maxPrice: {
        type: DataTypes.FLOAT,
      },
      neckType: {
        type: DataTypes.TEXT,
      },
      sleeveType: {
        type: DataTypes.TEXT,
      },
      patternType: {
        type: DataTypes.TEXT,
      },
      fabricType: {
        type: DataTypes.TEXT,
      },
      colorPalate: {
        type: DataTypes.TEXT,
      },
      preferredBrand: {
        type: DataTypes.TEXT,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "userPreferences",
    }
  );
  return userPreferences;
};
