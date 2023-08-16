"use strict";
const { Model } = require("sequelize");
const moment = require("moment");
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
      thumbnailImage: {
        type: DataTypes.TEXT,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        get() {
          return moment(this.dataValues.createdAt).format("DD-MM-YYYY LTS"); // 'D MMM YYYY, LT'
        },
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
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
