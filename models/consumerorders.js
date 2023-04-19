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
        type: Datatypes.TEXT,
      },
      paymentId: {
        type: Datatypes.TEXT,
      },
      productsQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      accountWallet: {
        type: Datatypes.TEXT,
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
        type: Datatypes.TEXT,
      },
      BAWalletAddress: {
        type: Datatypes.TEXT,
      },
      blockNumber: {
        type: Datatypes.TEXT,
      },
      BLEpochTimestamp: {
        type: Datatypes.TEXT,
      },
      transactionStatus: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "consumerOrders",
    }
  );
  return consumerOrders;
};
