"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userChoices extends Model {
    static associate(models) {
      userChoices.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
        onDelete: "CASCADE",
      });
      userChoices.belongsTo(models.productDetails, {
        foreignKey: "productId",
        as: "product",
        targetKey: "productId",
        onDelete: "CASCADE",
      });
    }
  }
  userChoices.init(
    {
      choiceId: {
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
      productImage: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      response: {
        type: DataTypes.BOOLEAN,
      },
      userFeedback: {
        type: DataTypes.TEXT,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "userChoices",
      tableName: "userChoices",
    }
  );
  return userChoices;
};
