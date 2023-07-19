"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderPayments extends Model {
    static associate(models) {}
  }
  orderPayments.init(
    {
      democolumn: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "orderPayments",
    }
  );
  return orderPayments;
};
