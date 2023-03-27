"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productTags extends Model {
    static associate(models) {
      productTags.belongsTo(models.productDetails, {
        foreignKey: "productId",
        as: "product",
        targetKey: "productId",
        onDelete: "CASCADE",
      });
    }
  }
  productTags.init(
    {
      tagId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      tags: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      misc: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "productTags",
      tableName: "productTags",
    }
  );
  return productTags;
};
