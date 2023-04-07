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
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      bodyType: {
        type: DataTypes.TEXT,
      },
      bustSize: {
        type: DataTypes.TEXT,
      },
      preferredStyle: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      preferredFit: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      minPrice: {
        type: DataTypes.FLOAT,
      },
      maxPrice: {
        type: DataTypes.FLOAT,
      },
      neckType: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      sleeveType: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      patternType: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      fabricType: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      colorPalate: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      preferredBrand: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
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
