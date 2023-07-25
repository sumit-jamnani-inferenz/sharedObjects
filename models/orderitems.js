"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderItems extends Model {
    static associate(models) {
      orderItems.belongsTo(models.consumerOrders, {
        foreignKey: "invoiceId",
        as: "consumerOrders",
        targetKey: "invoiceId",
      });
      orderItems.belongsTo(models.brand, {
        foreignKey: "brandId",
        as: "brand",
        targetKey: "brandId",
      });
      orderItems.belongsTo(models.productDetails, {
        foreignKey: "productId",
        as: "productDetails",
        targetKey: "productId",
      });
      orderItems.belongsTo(models.productVariants, {
        foreignKey: "variantId",
        as: "productVariants",
        targetKey: "variantId",
      });
      orderItems.belongsTo(models.productDiscount, {
        foreignKey: "discountId",
        as: "discount",
        targetKey: "discountId",
      });
      orderItems.hasMany(models.returnReplacementOrders, {
        foreignKey: "orderItemId",
        as: "returnReplacementOrders",
        sourceKey: "orderItemId",
        onDelete: "CASCADE",
      });
      orderItems.hasMany(models.orderStatusHistory, {
        foreignKey: "orderItemId",
        as: "orderStatusHistory",
        sourceKey: "orderItemId",
        onDelete: "CASCADE",
      });
    }
  }
  orderItems.init(
    {
      orderItemId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      invoiceId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      brandId: {
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
      discountId: {
        type: DataTypes.UUID,
      },
      productPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      productQty: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      productDiscount: {
        type: DataTypes.FLOAT,
      },
      productTax: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      totalAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      shipDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      shipMode: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      daysToShip: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      trackingNumber: {
        type: DataTypes.TEXT,
      },
      orderStatus: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "orderItems",
      tableName: "orderItems",
    }
  );
  return orderItems;
};
