"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orgPayments extends Model {
    static associate(models) {
      orgPayments.belongsTo(models.leasedEstates, {
        foreignKey: "leaseId",
        as: "leasingDetails",
        targetKey: "leaseId",
        onDelete: "CASCADE",
      });
      orgPayments.belongsTo(models.brand, {
        foreignKey: "brandId",
        as: "brand",
        targetKey: "brandId",
      });
    }
  }
  orgPayments.init(
    {
      invoiceId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      leaseId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      brandId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      orderId: {
        type: DataTypes.TEXT,
      },
      paymentId: {
        type: DataTypes.TEXT,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      currency: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      blockchianTID: {
        type: DataTypes.TEXT,
      },
      walletAddress: {
        type: DataTypes.TEXT,
      },
      blockNumber: {
        type: DataTypes.TEXT,
      },
      epochTimestamp: {
        type: DataTypes.TEXT,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "orgPayments",
      tableName: "orgPayments",
    }
  );
  return orgPayments;
};
