"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("userAccounts", {
      accountId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      roleId: {
        type: Sequelize.UUID,
        references: {
          model: "roles",
          key: "roleId",
        },
        allowNull: false,
      },
      mappedUserId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      rzp_customerId: {
        type: Sequelize.TEXT,
      },
      accountUserName: {
        type: Sequelize.TEXT,
      },
      accountName: {
        type: Sequelize.TEXT,
      },
      accountEmail: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      accountContact: {
        type: Sequelize.TEXT,
      },
      accountWallet: {
        type: Sequelize.TEXT,
      },
      profileImage: {
        type: Sequelize.TEXT,
      },
      thumbnailImage: {
        type: Sequelize.TEXT,
      },
      isLoggedIn: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      signUpSource: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      misc: Sequelize.JSON,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("userAccounts");
  },
};
