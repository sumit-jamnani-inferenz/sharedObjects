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
      });
      shippingAddress.hasMany(models.consumerOrders, {
        foreignKey: "shippingAddressId",
        as: "user",
        sourceKey: "shippingAddressId",
        onDelete: "CASCADE",
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
      },
      GEOCode: {
        type: Datatypes.TEXT,
      },
      street1: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      street2: {
        type: Datatypes.TEXT,
      },
      city: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      state: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      country: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      postalCode: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      addressType: {
        type: Datatypes.TEXT,
        allowNull: false,
      },

      misc: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "shippingAddress",
      tableName: "shippingAddress",
    }
  );
  return shippingAddress;
};
