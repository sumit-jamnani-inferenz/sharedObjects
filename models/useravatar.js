"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userAvatar extends Model {
    static associate(models) {
      userAccounts.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "User",
        targetKey: "accountId",
        onDelete: "CASCADE",
      });
    }
  }
  userAvatar.init(
    {
      userAvatarId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      accountId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      avatarIndex: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      skinColor: {
        type: DataTypes.TEXT,
      },
      hairStyle: {
        type: DataTypes.TEXT,
      },
      topWear: {
        type: DataTypes.TEXT,
      },
      bottomWear: {
        type: DataTypes.TEXT,
      },
      shoes: {
        type: DataTypes.TEXT,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "userAvatar",
    }
  );
  return userAvatar;
};
