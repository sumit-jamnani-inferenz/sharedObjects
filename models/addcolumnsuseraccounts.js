'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class addColumnsUserAccounts extends Model {
    static associate(models) {}
  }
  addColumnsUserAccounts.init(
    {
      accountName: DataTypes.STRING,
      accountEmail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'addColumnsUserAccounts',
      tableName: 'userAccounts',
    },
  )
  return addColumnsUserAccounts
}
