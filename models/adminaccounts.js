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

      adminAccounts.belongsTo(models.Brand, {
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      brandId: {
        type: DataTypes.UUID,
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
      modelName: "adminAccounts",
      tableName: "adminAccounts",
    }
  );
  return adminAccounts;
};
