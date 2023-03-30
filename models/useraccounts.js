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
        type: DataTypes.STRING,
        allowNull: false,
      },
      accountName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accountEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accountContact: {
        type: DataTypes.STRING,
      },
      accountWallet: {
        type: DataTypes.STRING,
      },
      accountAvatar: {
        type: DataTypes.STRING,
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
