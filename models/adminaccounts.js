'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class adminAccounts extends Model {
    static associate(models) {
      adminAccounts.belongsTo(models.roles, {
        foreignKey: 'roleId',
        as: 'role',
        onDelete: 'CASCADE',
      })

      adminAccounts.belongsTo(models.Brand, {
        foreignKey: 'roleId',
        as: 'role',
        onDelete: 'CASCADE',
      })
    }
  }
  adminAccounts.init(
    {
      accountId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      roleId: {
        type: DataTypes.UUID,
      },
      accountName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accountEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accountPassword: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accountWallet: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accountAvatar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isLoggedIn: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      misc: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: 'adminAccounts',
      tableName: 'adminAccounts',
    },
  )
  return adminAccounts
}
