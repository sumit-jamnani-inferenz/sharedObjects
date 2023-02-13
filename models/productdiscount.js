'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productDiscount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      productDiscount.belongsTo(models.Brand, {
        foreignKey: 'brandId',
        as: 'brand',
        onDelete: 'CASCADE',
      })
    }
  }
  productDiscount.init({
    discountId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    brandId: {
      type: DataTypes.UUID,
    },
    discountName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    discountDescription: {
      type: DataTypes.STRING,
    },
    discountPercentage: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    discountType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    discountStartDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    discountEndDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    misc: {
      type: DataTypes.JSON,
    }
  }, {
    sequelize,
    modelName: 'productDiscount',
    tableName: 'productDiscount'
  });
  return productDiscount;
};