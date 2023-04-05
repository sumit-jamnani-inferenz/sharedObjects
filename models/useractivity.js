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
      },
      accountWallet: {
        type: DataTypes.STRING,
      },
      blockINTEGER: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      activityType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      activityTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      NFTMetadata: {
        type: DataTypes.STRING,
      },
      blockTimestamp: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      misc: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "userActivity",
      tableName: "userActivity",
    }
  );
  return userActivity;
};
