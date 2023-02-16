'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productSubCategories extends Model {
    static associate(models) {
      productSubCategories.belongsTo(models.productCategories, {
        foreignKey: 'productSubCategoryId',
        as: 'category',
        onDelete: 'CASCADE',
      })
    }
  }
  productSubCategories.init({
    productSubCategoryId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    productCategoryId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    subCategoryName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    misc: {
      type: DataTypes.JSON,
    }
  }, {
    sequelize,
    modelName: 'productSubCategories',
    tableName: 'productSubCategories'
  });
  return productSubCategories;
};