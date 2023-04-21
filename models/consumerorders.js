"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class consumerOrders extends Model {
    static associate(models) {
      consumerOrders.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
        onDelete: "CASCADE",
      });
      consumerOrders.belongsTo(models.shippingAddress, {
        foreignKey: "shippingAddressId",
        as: "shippingAddress",
        targetKey: "shippingAddressId",
        onDelete: "CASCADE",
      });
      consumerOrders.hasMany(models.orderItems, {
        foreignKey: "invoiceId",
        as: "orderItems",
        sourceKey: "invoiceId",
        onDelete: "CASCADE",
      });
    }
  }
  consumerOrders.init(
    {
      invoiceId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      accountId: {
        type: DataTypes.UUID,
      },
      shippingAddressId: {
        type: DataTypes.UUID,
      },
      orderId: {
        type: DataTypes.TEXT,
      },
      paymentId: {
        type: DataTypes.TEXT,
      },
      productsQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      accountWallet: {
        type: DataTypes.TEXT,
      },
      totalAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalShipCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      blockchianTID: {
        type: DataTypes.TEXT,
      },
      BAWalletAddress: {
        type: DataTypes.TEXT,
      },
      blockNumber: {
        type: DataTypes.TEXT,
      },
      BLEpochTimestamp: {
        type: DataTypes.TEXT,
      },
      transactionStatus: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "consumerOrders",
      tableName: "consumerOrders",
    }
  );
  return consumerOrders;
};
