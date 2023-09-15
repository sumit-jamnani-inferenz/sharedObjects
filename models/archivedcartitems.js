"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class archivedCartItems extends Model {
    static associate(models) {
      archivedCartItems.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
        onDelete: "CASCADE",
      });
      archivedCartItems.belongsTo(models.productDetails, {
        foreignKey: "productId",
        as: "productDetails",
        targetKey: "productId",
      });
      archivedCartItems.belongsTo(models.productVariants, {
        foreignKey: "variantId",
        as: "productVariants",
        targetKey: "variantId",
      });
    }
  }
  archivedCartItems.init(
    {
      archiveId: {
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
      archiveReason: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "archivedCartItems",
      tableName: "archivedCartItems",
    }
  );
  return archivedCartItems;
};
