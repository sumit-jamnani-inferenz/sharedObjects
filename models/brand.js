'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require("../config/db/dbConfig");

module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      Brand.hasMany(models.productDiscount, {
        foreignKey: 'brandId',
        as: 'discounts',
        onDelete: 'CASCADE',
      });
    }
  }
  Brand.init({
    brandId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    brandName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brandEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brandWebsite: DataTypes.STRING,
    brandContact: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    brandAddress: DataTypes.STRING,
    brandWallet: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    misc: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'Brand',
    tableName: 'Brand'
  });
  return Brand;
};