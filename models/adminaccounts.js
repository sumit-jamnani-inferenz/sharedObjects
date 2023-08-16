"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class adminAccounts extends Model {
    static associate(models) {
      adminAccounts.belongsTo(models.roles, {
        foreignKey: "roleId",
        as: "role",
        targetKey: "roleId",
      });

      adminAccounts.belongsTo(models.brand, {
        foreignKey: "brandId",
        as: "brand",
        targetKey: "brandId",
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
      rzp_customerId: {
        type: DataTypes.TEXT,
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
      profileImage: {
        type: DataTypes.TEXT,
      },
      thumbnailImage: {
        type: DataTypes.TEXT,
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
