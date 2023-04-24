"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("lobbyInfo", {
      lobbyInfoId: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      lobbyId: {
        type: Sequelize.UUID,
        references: {
          model: "userLobby",
          key: "lobbyId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      accountId: {
        type: Sequelize.UUID,
        references: {
          model: "userAccounts",
          key: "accountId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      playerId: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      isJoined: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      misc: {
        type: Sequelize.JSON,
      },
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
    await queryInterface.dropTable("lobbyInfo");
  },
};
