"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userLobby extends Model {
    static associate(models) {
      userLobby.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "lobbyOwner",
        targetKey: "accountId",
        onDelete: "CASCADE",
      });
      userLobby.hasOne(models.lobbyInfo, {
        foreignKey: "lobbyId",
        as: "lobbyInfo",
        sourceKey: "lobbyId",
      });
    }
  }
  userLobby.init(
    {
      lobbyId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      accountId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      playerId: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      totalUsers: {
        type: DataTypes.INTEGER,
      },
      isLobbyActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "userLobby",
      tableName: "userLobby",
    }
  );
  return userLobby;
};
