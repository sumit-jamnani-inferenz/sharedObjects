"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rewardsHistory extends Model {
    static associate(models) {
      rewardsHistory.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
      });
      rewardsHistory.belongsTo(models.orderItems, {
        foreignKey: "orderItemId",
        as: "orderItems",
        targetKey: "orderItemId",
      });
    }
  }
  rewardsHistory.init(
    {
      historyId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      accountId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      rewardType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      superCoinsAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orderItemId: {
        type: DataTypes.UUID,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "rewardsHistory",
      tableName: "rewardsHistory",
    }
  );
  return rewardsHistory;
};
