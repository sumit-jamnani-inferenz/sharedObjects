'use strict'
const DataTypes = require('sequelize')
const sequelize = require("../config/db/dbConfig");

const userAccounts = sequelize.define(
  'userAccounts',
  {
    accountId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
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
    AccountAvatar: {
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
    tableName: 'userAccounts',
  },
)
userAccounts.associate = function (models) {
  userAccounts.belongsTo(models.roles, {
    foreignKey: 'roleId',
    as: 'role',
    onDelete: 'CASCADE',
  })
};

(async () => {
  await userAccounts.sync({ alter: true })
  console.log('User Accounts Table Created Successfully.')
})();

module.exports = userAccounts
