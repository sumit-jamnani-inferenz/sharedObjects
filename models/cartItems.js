"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cartItems extends Model {
    static associate(models) {
      cartItems.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
        onDelete: "CASCADE",
      });
      cartItems.belongsTo(models.productDetails, {
        foreignKey: "productId",
        as: "productDetails",
        targetKey: "productId",
      });
      cartItems.belongsTo(models.productVariants, {
        foreignKey: "variantId",
        as: "productVariants",
        targetKey: "variantId",
      });
    }
  }
  cartItems.init(
    {
      cartItemId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      accountId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      productId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      variantId: {
        type: DataTypes.UUID,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "cartItems",
      tableName: "cartItems",
    }
  );
  return cartItems;
};
