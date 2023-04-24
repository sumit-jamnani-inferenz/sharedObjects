"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userAccounts extends Model {
    static associate(models) {
      userAccounts.belongsTo(models.roles, {
        foreignKey: "roleId",
        as: "role",
        targetKey: "roleId",
        onDelete: "CASCADE",
      });
      userAccounts.hasMany(models.shippingAddress, {
        foreignKey: "accountId",
        as: "shippingAddress",
        sourceKey: "accountId",
        onDelete: "CASCADE",
      });
      userAccounts.hasMany(models.userActivity, {
        foreignKey: "accountId",
        as: "userActivity",
        sourceKey: "accountId",
        onDelete: "CASCADE",
      });
      userAccounts.hasMany(models.productsPair, {
        foreignKey: "accountId",
        as: "productsPair",
        sourceKey: "accountId",
        onDelete: "CASCADE",
      });
      userAccounts.hasMany(models.userAnswers, {
        foreignKey: "accountId",
        as: "userAnswer",
        sourceKey: "accountId",
        onDelete: "CASCADE",
      });
      userAccounts.hasMany(models.userChoices, {
        foreignKey: "accountId",
        as: "userChoice",
        sourceKey: "accountId",
        onDelete: "CASCADE",
      });
      userAccounts.hasMany(models.userPreferences, {
        foreignKey: "accountId",
        as: "userPreferences",
        sourceKey: "accountId",
        onDelete: "CASCADE",
      });
      userAccounts.hasMany(models.userAvatars, {
        foreignKey: "accountId",
        as: "userAvatars",
        sourceKey: "accountId",
        onDelete: "CASCADE",
      });
      userAccounts.hasMany(models.userWishlists, {
        foreignKey: "accountId",
        as: "userWishlists",
        sourceKey: "accountId",
        onDelete: "CASCADE",
      });
      userAccounts.hasOne(models.userCart, {
        foreignKey: "accountId",
        as: "userCart",
        sourceKey: "accountId",
        onDelete: "CASCADE",
      });
      userAccounts.hasMany(models.consumerOrders, {
        foreignKey: "accountId",
        as: "consumerOrders",
        sourceKey: "accountId",
        onDelete: "CASCADE",
      });
      userAccounts.hasMany(models.userLobby, {
        foreignKey: "accountId",
        as: "userLobby",
        sourceKey: "accountId",
        onDelete: "CASCADE",
      });
      userAccounts.hasMany(models.lobbyInfo, {
        foreignKey: "accountId",
        as: "lobbyInfo",
        sourceKey: "accountId",
        onDelete: "CASCADE",
      });
    }
  }
  userAccounts.init(
    {
      accountId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      roleId: {
        type: DataTypes.UUID,
      },
      mappedUserId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      accountUserName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      accountName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      accountEmail: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      accountContact: {
        type: DataTypes.TEXT,
      },
      accountWallet: {
        type: DataTypes.TEXT,
      },
      isLoggedIn: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      misc: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "userAccounts",
      tableName: "userAccounts",
    }
  );
  return userAccounts;
};
