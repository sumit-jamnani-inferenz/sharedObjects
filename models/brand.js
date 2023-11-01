"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db/dbConfig");

module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
    static associate(models) {
      brand.hasMany(models.productDetails, {
        foreignKey: "brandId",
        as: "products",
        sourceKey: "brandId",
      });
      brand.hasMany(models.userAccounts, {
        foreignKey: "brandId",
        as: "users",
        sourceKey: "brandId",
      });
      brand.hasMany(models.productCategories, {
        foreignKey: "brandId",
        as: "productCategories",
        sourceKey: "brandId",
      });
      brand.hasMany(models.offersAndDiscounts, {
        foreignKey: "brandId",
        as: "offersAndDiscounts",
        sourceKey: "brandId",
      });
      brand.hasMany(models.leasedEstates, {
        foreignKey: "brandId",
        as: "leasedEstates",
        sourceKey: "brandId",
      });
      brand.hasMany(models.orgPayments, {
        foreignKey: "brandId",
        as: "payments",
        sourceKey: "brandId",
      });
      brand.hasMany(models.storeDisplay, {
        foreignKey: "brandId",
        as: "storeDisplay",
        sourceKey: "brandId",
      });
      brand.hasMany(models.mediaDisplay, {
        foreignKey: "brandId",
        as: "mediaDisplay",
        sourceKey: "brandId",
      });
      brand.hasMany(models.orderItems, {
        foreignKey: "brandId",
        as: "orderItems",
        sourceKey: "brandId",
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
