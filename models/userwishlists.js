"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userWishlists extends Model {
    static associate(models) {
      userWishlists.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
        onDelete: "CASCADE",
      });
      userWishlists.hasMany(models.wishlistItems, {
        foreignKey: "wishlistId",
        as: "wishlistItems",
        sourceKey: "wishlistId",
        onDelete: "CASCADE",
      });
    }
  }
  userWishlists.init(
    {
      wishlistId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      accountId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      wishlistName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "userWishlists",
      tableName: "userWishlists",
    }
  );
  return userWishlists;
};
