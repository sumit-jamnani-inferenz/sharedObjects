"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class wishlistItems extends Model {
    static associate(models) {
      wishlistItems.belongsTo(models.userWishlists, {
        foreignKey: "wishlistId",
        as: "userWishlist",
        targetKey: "wishlistId",
        onDelete: "CASCADE",
      });
      wishlistItems.belongsTo(models.productDetails, {
        foreignKey: "productId",
        as: "productDetails",
        targetKey: "productId",
        onDelete: "CASCADE",
      });
    }
  }
  wishlistItems.init(
    {
      itemId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      wishlistId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      productId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "wishlistItems",
      tableName: "wishlistItems",
    }
  );
  return wishlistItems;
};
