"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class lobbyInfo extends Model {
    static associate(models) {
      lobbyInfo.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "lobbyParticipant",
        targetKey: "accountId",
        onDelete: "CASCADE",
      });
      lobbyInfo.belongsTo(models.userLobby, {
        foreignKey: "lobbyId",
        as: "userLobby",
        targetKey: "lobbyId",
        onDelete: "CASCADE",
      });
    }
  }
  lobbyInfo.init(
    {
      lobbyInfoId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      lobbyId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      accountId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      playerId: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isJoined: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "lobbyInfo",
      tableName: "lobbyInfo",
    }
  );
  return lobbyInfo;
};
