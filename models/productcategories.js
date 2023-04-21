"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productCategories extends Model {
    static associate(models) {
      productCategories.belongsTo(models.brand, {
        foreignKey: "brandId",
        as: "brand",
        targetKey: "brandId",
        onDelete: "CASCADE",
      });
      productCategories.hasMany(models.productSubCategories, {
        foreignKey: "productCategoryId",
        as: "productSubCategories",
        sourceKey: "productCategoryId",
        onDelete: "CASCADE",
      });
      productCategories.hasMany(models.productDetails, {
        foreignKey: "productCategoryId",
        as: "products",
        sourceKey: "productCategoryId",
        onDelete: "CASCADE",
      });
    }
  }
  productCategories.init(
    {
      productCategoryId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      brandId: {
        type: DataTypes.UUID,
      },
      categoryName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "productCategories",
      tableName: "productCategories",
    }
  );
  return productCategories;
};
