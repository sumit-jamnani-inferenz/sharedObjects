"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class consumerOrders extends Model {
    static associate(models) {
      consumerOrders.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
      });
      consumerOrders.belongsTo(models.shippingAddress, {
        foreignKey: "shippingAddressId",
        as: "shippingAddress",
        targetKey: "shippingAddressId",
      });
      consumerOrders.hasMany(models.orderItems, {
        foreignKey: "invoiceId",
        as: "orderItems",
        sourceKey: "invoiceId",
        onDelete: "CASCADE",
      });
      consumerOrders.hasMany(models.orderPayments, {
        foreignKey: "invoiceId",
        as: "orderPayments",
        sourceKey: "invoiceId",
        onDelete: "CASCADE",
      });
      consumerOrders.hasMany(models.returnReplacementOrders, {
        foreignKey: "invoiceId",
        as: "returnReplacementOrders",
        sourceKey: "invoiceId",
        onDelete: "CASCADE",
      });
      consumerOrders.hasMany(models.orderStatusHistory, {
        foreignKey: "invoiceId",
        as: "orderStatusHistory",
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
      orderId: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      accountId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      totalAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalShipCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orderStatus: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      paymentStatus: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      paymentMethod: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      shippingAddressId: {
        type: DataTypes.UUID,
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
        type: DataTypes.INTEGER,
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
