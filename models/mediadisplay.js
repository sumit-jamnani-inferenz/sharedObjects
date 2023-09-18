"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mediaDisplay extends Model {
    static associate(models) {
      mediaDisplay.belongsTo(models.brand, {
        foreignKey: "brandId",
        as: "brand",
        targetKey: "brandId",
        onDelete: "CASCADE",
      });
    }
  }
  mediaDisplay.init(
    {
      mediaLocationId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
      displayOrientation: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageURL: {
        type: DataTypes.TEXT,
      },
      mediaURL: {
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
      modelName: "mediaDisplay",
    }
  );
  return mediaDisplay;
};
