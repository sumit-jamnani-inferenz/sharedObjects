"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class offersAndDiscounts extends Model {
    static associate(models) {
      offersAndDiscounts.belongsTo(models.brand, {
        foreignKey: "brandId",
        as: "brand",
        targetKey: "brandId",
      });
      offersAndDiscounts.belongsToMany(models.productDetails, {
        through: "ProductDiscountsMapping",
        foreignKey: "promotionId",
        as: "offeredProducts",
      });
    }
  }
  offersAndDiscounts.init(
    {
      promotionId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      brandId: {
        type: DataTypes.UUID,
      },
      promotionName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      promotionDescription: {
        type: DataTypes.TEXT,
      },
      promotionType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      promotionCategory: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      promotionValue: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      minOrderValue: {
        type: DataTypes.FLOAT,
      },
      eligibleBank: {
        type: DataTypes.TEXT,
      },
      cardType: {
        type: DataTypes.TEXT,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
      },
      applicableDays: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      thumbnailImage: {
        type: DataTypes.TEXT,
      },
      offeredBy: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "offersAndDiscounts",
      tableName: "offersAndDiscounts",
    }
  );
  return offersAndDiscounts;
};