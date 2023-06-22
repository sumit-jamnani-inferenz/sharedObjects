"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userActivity extends Model {
    static associate(models) {
      userActivity.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
        onDelete: "CASCADE",
      });
      userActivity.belongsTo(models.styloEstates, {
        foreignKey: "estateId",
        as: "styloEstates",
        targetKey: "estateId",
        onDelete: "CASCADE",
      });
      userActivity.belongsTo(models.productDetails, {
        foreignKey: "productId",
        as: "productDetails",
        targetKey: "productId",
        onDelete: "CASCADE",
      });
    }
  }
  userActivity.init(
    {
      activityId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      accountId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      estateId: {
        type: DataTypes.UUID,
      },
      productId: {
        type: DataTypes.UUID,
      },
      activityType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      visitedCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      activityTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "userActivity",
      tableName: "userActivity",
    }
  );
  return userActivity;
};
