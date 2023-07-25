"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderStatusHistory extends Model {
    static associate(models) {
      orderStatusHistory.belongsTo(models.consumerOrders, {
        foreignKey: "invoiceId",
        as: "consumerOrders",
        targetKey: "invoiceId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      orderStatusHistory.belongsTo(models.orderItems, {
        foreignKey: "orderItemId",
        as: "orderItems",
        targetKey: "orderItemId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  orderStatusHistory.init(
    {
      historyId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      invoiceId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      orderItemId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "orderStatusHistory",
      tableName: "orderStatusHistory",
    }
  );
  return orderStatusHistory;
};
