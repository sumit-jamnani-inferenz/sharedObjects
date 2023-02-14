'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'userAccounts',
          'accountName',
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
          { transaction: t },
        ),
        queryInterface.addColumn(
          'userAccounts',
          'accountEmail',
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
          { transaction: t },
        ),
      ])
    })
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('userAccounts', 'accountName', {
          transaction: t,
        }),
        queryInterface.removeColumn('userAccounts', 'accountEmail', {
          transaction: t,
        }),
      ])
    })
  },
}
