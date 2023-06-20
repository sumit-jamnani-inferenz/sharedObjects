"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db/dbConfig");

module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
    static associate(models) {
      brand.hasMany(models.productDiscount, {
        foreignKey: "brandId",
        as: "discounts",
        sourceKey: "brandId",
        onDelete: "CASCADE",
      });
      brand.hasMany(models.productDetails, {
        foreignKey: "brandId",
        as: "products",
        sourceKey: "brandId",
        onDelete: "CASCADE",
      });
      brand.hasMany(models.adminAccounts, {
        foreignKey: "brandId",
        as: "users",
        sourceKey: "brandId",
        onDelete: "CASCADE",
      });
      brand.hasMany(models.productCategories, {
        foreignKey: "brandId",
        as: "productCategories",
        sourceKey: "brandId",
        onDelete: "CASCADE",
      });
      brand.hasMany(models.leasedEstates, {
        foreignKey: "brandId",
        as: "leasedEstates",
        sourceKey: "brandId",
        onDelete: "CASCADE",
      });
      brand.hasMany(models.orgPayments, {
        foreignKey: "brandId",
        as: "payments",
        sourceKey: "brandId",
        onDelete: "CASCADE",
      });
      brand.hasMany(models.storeDisplay, {
        foreignKey: "brandId",
        as: "storeDisplay",
        sourceKey: "brandId",
        onDelete: "CASCADE",
      });
    }
  }
  brand.init(
    {
      brandId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      brandName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      brandEmail: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      brandWebsite: DataTypes.TEXT,
      brandContact: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      brandAddress: DataTypes.TEXT,
      brandWallet: {
        type: DataTypes.TEXT,
      },
      isOnboarded: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isRejected: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      rejectReason: {
        type: DataTypes.TEXT,
      },
      actionDate: {
        type: DataTypes.DATE,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      timestamp: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "brand",
      tableName: "brand",
    }
  );
  return brand;
};
