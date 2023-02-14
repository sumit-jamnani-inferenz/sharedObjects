'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addColumnsUserAccounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  addColumnsUserAccounts.init({
    accountName: DataTypes.STRING,
    accountEmail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'addColumnsUserAccounts',
  });
  return addColumnsUserAccounts;
};