"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userCart extends Model {
    static associate(models) {
      userCart.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
        onDelete: "CASCADE",
      });
      userCart.hasMany(models.cartItems, {
        foreignKey: "cartId",
        as: "cartItems",
        sourceKey: "cartId",
        onDelete: "CASCADE",
      });
    }
  }
  userCart.init(
    {
      cartId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      accountId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "userCart",
    }
  );
  return userCart;
};
