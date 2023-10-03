"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shippingAddress extends Model {
    static associate(models) {
      shippingAddress.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
        onDelete: "CASCADE",
        constraints: false,
      });
      shippingAddress.hasMany(models.consumerOrders, {
        foreignKey: "shippingAddressId",
        as: "consumerOrders",
        sourceKey: "shippingAddressId",
      });
    }
  }
  shippingAddress.init(
    {
      shippingAddressId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      accountId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      recipientName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      addressLine1: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      addressLine2: {
        type: DataTypes.TEXT,
      },
      city: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      state: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      postalCode: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      country: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contactNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      addressType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: { type: DataTypes.JSON },
    },
    {
      sequelize,
      modelName: "shippingAddress",
      tableName: "shippingAddress",
    }
  );
  return shippingAddress;
};
