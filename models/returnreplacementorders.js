"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class returnReplacementOrders extends Model {
    static associate(models) {
      returnReplacementOrders.belongsTo(models.consumerOrders, {
        foreignKey: "invoiceId",
        as: "consumerOrders",
        targetKey: "invoiceId",
      });
      returnReplacementOrders.belongsTo(models.orderItems, {
        foreignKey: "orderItemId",
        as: "orderItems",
        targetKey: "orderItemId",
      });
      returnReplacementOrders.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
      });
      returnReplacementOrders.belongsTo(models.productDetails, {
        foreignKey: "productId",
        as: "productDetails",
        targetKey: "productId",
      });
      returnReplacementOrders.belongsTo(models.productVariants, {
        foreignKey: "variantId",
        as: "productVariants",
        targetKey: "variantId",
      });
    }
  }
  returnReplacementOrders.init(
    {
      requestId: {
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
      newProductId: {
        type: DataTypes.UUID,
      },
      newVariantId: {
        type: DataTypes.UUID,
      },
      requestType: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      reason: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      status: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "returnReplacementOrders",
      tableName: "returnReplacementOrders",
    }
  );
  return returnReplacementOrders;
};
