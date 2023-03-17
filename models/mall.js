'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mall extends Model {
    static associate(models) {
      mall.belongsTo(models.city, {
        foreignKey: 'cityId',
        as: 'city',
        targetKey: 'cityId',
        onDelete: 'CASCADE',
      })
      mall.hasMany(models.styloEstates, {
        foreignKey: 'mallId',
        as: 'styloEstates',
        sourceKey: 'mallId',
        onDelete: 'CASCADE',
      })
    }
  }
  mall.init({
    mallId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    cityId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    mallName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    areaSize: {
      type: DataTypes.JSON,
    },
    gridBlocks: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dimensions: {
      type: DataTypes.JSON,
    },
    coOrdinates: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    misc: {
      type: DataTypes.JSON,
    },
  }, {
    sequelize,
    modelName: 'mall',
    tableName: 'mall'
  });
  return mall;
};