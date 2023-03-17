'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    static associate(models) {
      city.hasMany(models.mall, {
        foreignKey: 'cityId',
        as: 'malls',
        sourceKey: 'cityId',
        onDelete: 'CASCADE',
      })
      city.hasMany(models.styloEstates, {
        foreignKey: 'cityId',
        as: 'styloEstates',
        sourceKey: 'cityId',
        onDelete: 'CASCADE',
      })
    }
  }
  city.init({
    cityId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    cityName: {
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
    modelName: 'city',
    tableName: 'city'
  });
  return city;
};