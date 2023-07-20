"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderPayments extends Model {
    static associate(models) {
      orderPayments.belongsTo(models.consumerOrders, {
        foreignKey: "invoiceId",
        as: "consumerOrders",
        targetKey: "invoiceId",
        onDelete: "CASCADE",
      });
    }
  }
  orderPayments.init(
    {
      paymentId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      invoiceId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      transactionId: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      paymentAmount: {
        type: DataTypes.FLOAT,
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
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "orderPayments",
      tableName: "orderPayments",
    }
  );
  return orderPayments;
};
