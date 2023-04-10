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
      },
      hairStyle: {
        type: Sequelize.TEXT,
      },
      topWear: {
        type: Sequelize.TEXT,
      },
      bottomWear: {
        type: Sequelize.TEXT,
      },
      shoes: {
        type: Sequelize.TEXT,
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
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("userAvatar");
  },
};
