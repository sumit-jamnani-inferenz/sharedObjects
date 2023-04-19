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
        type: Datatypes.TEXT,
        allowNull: false,
      },
      brandId: {
        type: DataTypes.UUID,
      },
      accountName: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      accountEmail: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      accountContact: {
        type: Datatypes.TEXT,
      },
      accountWallet: {
        type: Datatypes.TEXT,
      },
      accountAvatar: {
        type: Datatypes.TEXT,
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
