'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class shippingAddress extends Model {
    static associate(models) {
      shippingAddress.belongsTo(models.userAccounts, {
        foreignKey: 'accountId',
        as: 'user',
        targetKey: 'accountId',
        onDelete: 'CASCADE',
      })
    }
  }
  shippingAddress.init(
    {
      addressId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      accountId: {
        type: DataTypes.UUID,
      },
      GEOCode: {
        type: DataTypes.STRING,
      },
      street1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      street2: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      addressType: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      misc: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: 'shippingAddress',
      tableName: 'shippingAddress',
    },
  )
  return shippingAddress
}
