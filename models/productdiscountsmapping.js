"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productDiscountsMapping extends Model {
    static associate(models) {
      productDiscountsMapping.belongsTo(models.productDetails, {
        foreignKey: "productId",
        as: "productDetails",
        targetKey: "productId",
      });
      productDiscountsMapping.belongsTo(models.productVariants, {
        foreignKey: "variantId",
        as: "productVariants",
        targetKey: "variantId",
      });
      productDiscountsMapping.belongsTo(models.offersAndDiscounts, {
        foreignKey: "promotionId",
        as: "offersAndDiscountsDetails",
        targetKey: "promotionId",
      });
    }
  }
  productDiscountsMapping.init(
    {
      mappingId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      variantId: {
        type: DataTypes.UUID,
      },
      promotionId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "productDiscountsMapping",
      tableName: "productDiscountsMapping",
    }
  );
  return productDiscountsMapping;
};
