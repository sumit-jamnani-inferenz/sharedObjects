"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class leasedEstates extends Model {
    static associate(models) {
      leasedEstates.belongsTo(models.styloEstates, {
        foreignKey: "estateId",
        as: "estate",
        targetKey: "estateId",
        onDelete: "CASCADE",
      });
      leasedEstates.belongsTo(models.Brand, {
        foreignKey: "brandId",
        as: "brand",
        targetKey: "brandId",
        onDelete: "CASCADE",
      });
      leasedEstates.belongsTo(models.styloContracts, {
        foreignKey: "contractId",
        as: "contract",
        targetKey: "contractId",
        onDelete: "CASCADE",
      });
      leasedEstates.hasMany(models.orgPayments, {
        foreignKey: "leaseId",
        as: "payments",
        sourceKey: "leaseId",
        onDelete: "CASCADE",
      });
    }
  }
  leasedEstates.init(
    {
      leaseId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      estateId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      brandId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      contractId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      leasingType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      timestamp: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      blockNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      orgWallet: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "leasedEstates",
      tableName: "leasedEstates",
    }
  );
  return leasedEstates;
};
