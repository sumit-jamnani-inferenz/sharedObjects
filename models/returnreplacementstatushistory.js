"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class returnReplacementStatusHistory extends Model {
    static associate(models) {
      returnReplacementStatusHistory.belongsTo(models.returnReplacementOrders, {
        foreignKey: "requestId",
        as: "returnReplacementOrders",
        targetKey: "requestId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  returnReplacementStatusHistory.init(
    {
      historyId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      requestId: {
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
      modelName: "returnReplacementStatusHistory",
      tableName: "returnReplacementStatusHistory",
    }
  );
  return returnReplacementStatusHistory;
};
