'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productCategories extends Model {
    static associate(models) {
      productCategories.belongsTo(models.Brand, {
        foreignKey: 'brandId',
        as: 'brand',
        onDelete: 'CASCADE',
      })

      Brand.hasMany(models.productSubCategories, {
        foreignKey: 'productCategoryId',
        as: 'productSubCategories',
        onDelete: 'CASCADE',
      })
    }
  }
  productCategories.init({
    productCategoryId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    brandId: {
      type: DataTypes.UUID,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    misc: {
      type: DataTypes.JSON,
    }
  }, {
    sequelize,
    modelName: 'productCategories',
    tableName: 'productCategories'
  });
  return productCategories;
};