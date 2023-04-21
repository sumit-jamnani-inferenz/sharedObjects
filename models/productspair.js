"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productsPair extends Model {
    static associate(models) {
      productsPair.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
        onDelete: "CASCADE",
      });
      productsPair.belongsTo(models.productDetails, {
        foreignKey: "productId",
        as: "product",
        targetKey: "productId",
        onDelete: "CASCADE",
      });
      productsPair.belongsTo(models.productDetails, {
        foreignKey: "pairedProductId",
        as: "pairedProductDetails",
        targetKey: "productId",
        onDelete: "CASCADE",
      });
    }
  }
  productsPair.init(
    {
      pairId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
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
      pairedProductId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      productCategoryName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      clothingType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      occasion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "productsPair",
      tableName: "productsPair",
    }
  );
  return productsPair;
};
