"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rewards extends Model {
    static associate(models) {
      // define association here
    }
  }
  rewards.init(
    {
      rewardId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      rewardName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rewardDescription: {
        type: DataTypes.TEXT,
      },
      rewardType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      thresholdAmount: {
        type: DataTypes.FLOAT,
      },
      rewardValue: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      expirationDays: {
        type: DataTypes.INTEGER,
      },
      rewardStartDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      rewarEndDate: {
        type: DataTypes.DATE,
      },
      offeredBy: {
        type: DataTypes.TEXT,
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
      modelName: "rewards",
      tableName: "rewards",
    }
  );
  return rewards;
};
