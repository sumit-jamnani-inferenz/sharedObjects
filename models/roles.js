'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    static associate(models) {
      roles.hasMany(models.userAccounts, {
        foreignKey: 'roleId',
        as: 'users',
        sourceKey: 'roleId',
        onDelete: 'CASCADE',
      })

      roles.hasMany(models.adminAccounts, {
        foreignKey: 'roleId',
        as: 'adminUsers',
        sourceKey: 'roleId',
        onDelete: 'CASCADE',
      })
    }
  }
  roles.init(
    {
      roleId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      roleType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      misc: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: 'roles',
      tableName: 'roles',
    },
  )
  return roles
}
