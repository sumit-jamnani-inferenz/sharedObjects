"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class refunds extends Model {
    static associate(models) {
      refunds.belongsTo(models.orderItems, {
        foreignKey: "orderItemId",
        as: "orderItems",
        targetKey: "orderItemId",
      });
      refunds.belongsTo(models.orderPayments, {
        foreignKey: "paymentId",
        as: "orderPayments",
        targetKey: "paymentId",
      });
    }
  }
  refunds.init(
    {
      refundId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      orderItemId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      paymentId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      refundAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      refundMethod: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      refundTransactionId: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      refundCompleteDate: {
        type: DataTypes.DATE,
      },
      refundStatus: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "refunds",
      tableName: "refunds",
    }
  );
  return refunds;
};
