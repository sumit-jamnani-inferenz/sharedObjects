"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class adminAccounts extends Model {
    static associate(models) {
      adminAccounts.belongsTo(models.roles, {
        foreignKey: "roleId",
        as: "role",
        targetKey: "roleId",
        onDelete: "CASCADE",
      });

      adminAccounts.belongsTo(models.brand, {
        foreignKey: "brandId",
        as: "brand",
        targetKey: "brandId",
        onDelete: "CASCADE",
      });
    }
  }
  adminAccounts.init(
    {
      adminAccountId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      roleId: {
        type: DataTypes.UUID,
      },
      mappedUserId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      brandId: {
        type: DataTypes.UUID,
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
        allowNull: false,
      },
      accountAvatar: {
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
      modelName: "adminAccounts",
      tableName: "adminAccounts",
    }
  );
  return adminAccounts;
};
