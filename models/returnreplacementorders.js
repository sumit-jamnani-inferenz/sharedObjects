"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class returnReplacementOrders extends Model {
    static associate(models) {
      returnReplacementOrders.belongsTo(models.orderItems, {
        foreignKey: "orderItemId",
        as: "orderItems",
        targetKey: "orderItemId",
        onDelete: "CASCADE",
      });
    }
  }
  returnReplacementOrders.init(
    {
      democolumn: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "returnReplacementOrders",
    }
  );
  return returnReplacementOrders;
};
