"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class policies extends Model {
    static associate(models) {
      policies.hasMany(models.rolePolicyMapping, {
        foreignKey: "policyId",
        as: "rolePolicyMapping",
        sourceKey: "policyId",
      });
    }
  }
  policies.init(
    {
      policyId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      policyType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      misc: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "policies",
      tableName: "policies",
    }
  );
  return policies;
};
