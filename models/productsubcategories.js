"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productSubCategories extends Model {
    static associate(models) {
      productSubCategories.belongsTo(models.productCategories, {
        foreignKey: "productCategoryId",
        as: "category",
        targetKey: "productCategoryId",
        onDelete: "CASCADE",
      });
      productSubCategories.hasMany(models.productDetails, {
        foreignKey: "productSubCategoryId",
        as: "products",
        sourceKey: "productSubCategoryId",
        onDelete: "CASCADE",
      });
    }
  }
  productSubCategories.init(
    {
      productSubCategoryId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      productCategoryId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      subCategoryName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "productSubCategories",
      tableName: "productSubCategories",
    }
  );
  return productSubCategories;
};
