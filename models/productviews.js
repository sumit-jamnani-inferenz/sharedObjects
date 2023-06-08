"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productViews extends Model {
    static associate(models) {
      productViews.belongsTo(models.productDetails, {
        foreignKey: "productId",
        as: "productDetails",
        targetKey: "productId",
        onDelete: "CASCADE",
      });
      productViews.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "userAccounts",
        targetKey: "accountId",
        onDelete: "CASCADE",
      });
    }
  }
  productViews.init(
    {
      viewId: {
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
      viewCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isVisible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "productViews",
      tableName: "productViews",
    }
  );
  return productViews;
};
