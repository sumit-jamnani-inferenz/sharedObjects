'use strict'
const DataTypes = require('sequelize')
const sequelize = require("../config/db/dbConfig");

const roles = sequelize.define(
  'roles',
  {
    roleId: {
      type: DataTypes.UUID,
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
    tableName: 'roles',
  },
)

roles.associate = function (models) {
  roles.hasMany(models.userAccounts, {
    foreignKey: 'roleId',
    as: 'users',
    onDelete: 'CASCADE',
  });
};

(async () => {
  await roles.sync({ alter: true })
  console.log('Roles Table Created Successfully.')
})();

module.exports = roles
