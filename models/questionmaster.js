'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class questionMaster extends Model {
    static associate(models) {
    }
  }
  questionMaster.init({
    questionId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    questionText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    misc: {
      type: DataTypes.JSON,
    }
  }, {
    sequelize,
    modelName: 'questionMaster',
    tableName: 'questionMaster'
  });
  return questionMaster;
};