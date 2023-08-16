"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productReviews extends Model {
    static associate(models) {
      productReviews.belongsTo(models.productDetails, {
        foreignKey: "productId",
        as: "productDetails",
        targetKey: "productId",
        onDelete: "CASCADE",
      });
      productReviews.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "userAccounts",
        targetKey: "accountId",
      });
    }
  }
  productReviews.init(
    {
      reviewId: {
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
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      ratings: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imageURL: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      videoURL: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
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
      modelName: "productReviews",
      tableName: "productReviews",
    }
  );
  return productReviews;
};
