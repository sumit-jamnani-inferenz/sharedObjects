"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db/dbConfig");

module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      Brand.hasMany(models.productDiscount, {
        foreignKey: "brandId",
        as: "discounts",
        sourceKey: "brandId",
        onDelete: "CASCADE",
      });
      Brand.hasMany(models.productDetails, {
        foreignKey: "brandId",
        as: "products",
        sourceKey: "brandId",
        onDelete: "CASCADE",
      });
      Brand.hasMany(models.adminAccounts, {
        foreignKey: "brandId",
        as: "users",
        sourceKey: "brandId",
        onDelete: "CASCADE",
      });
      Brand.hasMany(models.productCategories, {
        foreignKey: "brandId",
        as: "productCategories",
        sourceKey: "brandId",
        onDelete: "CASCADE",
      });
      Brand.hasMany(models.leasedEstates, {
        foreignKey: "brandId",
        as: "leasedEstates",
        sourceKey: "brandId",
        onDelete: "CASCADE",
      });
      Brand.hasMany(models.orgPayments, {
        foreignKey: "brandId",
        as: "payments",
        sourceKey: "brandId",
        onDelete: "CASCADE",
      });
    }
  }
  Brand.init(
    {
      brandId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      brandName: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      brandEmail: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      brandWebsite: Datatypes.TEXT,
      brandContact: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      brandAddress: Datatypes.TEXT,
      brandWallet: {
        type: Datatypes.TEXT,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      timestamp: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      misc: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Brand",
      tableName: "Brand",
    }
  );
  return Brand;
};
