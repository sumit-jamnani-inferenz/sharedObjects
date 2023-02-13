'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class userAccounts extends Model {
    static associate(models) {
      userAccounts.belongsTo(models.roles, {
        foreignKey: 'roleId',
        as: 'role',
        onDelete: 'CASCADE',
      })

      userAccounts.hasMany(models.shippingAddress, {
        foreignKey: 'accountId',
        as: 'shippingAddress',
        onDelete: 'CASCADE',
      })

      userAccounts.hasMany(models.userActivity, {
        foreignKey: 'accountId',
        as: 'userActivity',
        onDelete: 'CASCADE',
      })
    }
  }
  userAccounts.init(
    {
      accountId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      roleId: {
        type: DataTypes.UUID,
      },
      mappedUserId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accountWallet: {
        type: DataTypes.STRING,
      },
      accountAvatar: {
        type: DataTypes.STRING,
      },
      isLoggedIn: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      misc: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: 'userAccounts',
      tableName: 'userAccounts',
    },
  )
  return userAccounts
}
