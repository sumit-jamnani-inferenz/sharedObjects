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
        allowNull: false,
      },
      hairStyle: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      topWear: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      bottomWear: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      shoes: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "userAvatar",
    }
  );
  return userAvatar;
};
