"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rolePolicyMapping extends Model {
    static associate(models) {
      rolePolicyMapping.belongsTo(models.roles, {
        foreignKey: "roleId",
        as: "role",
        targetKey: "roleId",
      });
      rolePolicyMapping.belongsTo(models.policies, {
        foreignKey: "policyId",
        as: "policy",
        targetKey: "policyId",
      });
    }
  }
  rolePolicyMapping.init(
    {
      mappingId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      roleId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      policyId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      roleType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      policyType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "rolePolicyMapping",
      tableName: "rolePolicyMapping",
    }
  );
  return rolePolicyMapping;
};
