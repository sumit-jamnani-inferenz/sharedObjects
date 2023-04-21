"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userAvatars extends Model {
    static associate(models) {
      userAvatars.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "User",
        targetKey: "accountId",
        onDelete: "CASCADE",
      });
    }
  }
  userAvatars.init(
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
      playerId: {
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
      modelName: "userAvatars",
      tableName: "userAvatars",
    }
  );
  return userAvatars;
};
