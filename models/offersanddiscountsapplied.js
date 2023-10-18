"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class offersAndDiscountsApplied extends Model {
    static associate(models) {
      offersAndDiscountsApplied.belongsTo(models.orderItems, {
        foreignKey: "orderItemId",
        as: "orderItems",
        targetKey: "orderItemId",
      });
    }
  }
  offersAndDiscountsApplied.init(
    {
      promotionId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      orderItemId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      promotionName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      promotionType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      promotionCategory: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      promotionValue: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "offersAndDiscountsApplied",
      tableName: "offersAndDiscountsApplied",
    }
  );
  return offersAndDiscountsApplied;
};
