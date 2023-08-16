"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    static associate(models) {
      roles.hasMany(models.userAccounts, {
        foreignKey: "roleId",
        as: "users",
        sourceKey: "roleId",
      });

      roles.hasMany(models.adminAccounts, {
        foreignKey: "roleId",
        as: "adminUsers",
        sourceKey: "roleId",
      });
    }
  }
  roles.init(
    {
      roleId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      roleType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "roles",
      tableName: "roles",
    }
  );
  return roles;
};
