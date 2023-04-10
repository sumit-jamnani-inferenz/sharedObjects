"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("userAvatar", {
      userAvatarId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      accountId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "userAccounts",
          key: "accountId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      avatarIndex: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      skinColor: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      hairStyle: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      topWear: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      bottomWear: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      shoes: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      misc: {
        type: Sequelize.JSON,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("userAvatar");
  },
};
