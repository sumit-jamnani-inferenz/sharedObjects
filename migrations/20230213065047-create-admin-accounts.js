"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("adminAccounts", {
      adminAccountId: {
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
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      mappedUserId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brandId: {
        type: Sequelize.UUID,
        references: {
          model: "Brand",
          key: "brandId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      accountName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      accountEmail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      accountContact: {
        type: Sequelize.STRING,
      },
      accountWallet: {
        type: Sequelize.STRING,
      },
      accountAvatar: {
        type: Sequelize.STRING,
      },
      isLoggedIn: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("adminAccounts");
  },
};
