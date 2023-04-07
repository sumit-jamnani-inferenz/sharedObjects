"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("userPreferences", {
      preferenceId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      accountId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "userAccounts",
          key: "accountId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      gender: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      dob: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      bodyType: {
        type: Sequelize.TEXT,
      },
      bustSize: {
        type: Sequelize.TEXT,
      },
      preferredStyle: {
        type: Sequelize.TEXT,
      },
      preferredFit: {
        type: Sequelize.TEXT,
      },
      minPrice: {
        type: Sequelize.FLOAT,
      },
      maxPrice: {
        type: Sequelize.FLOAT,
      },
      neckType: {
        type: Sequelize.TEXT,
      },
      sleeveType: {
        type: Sequelize.TEXT,
      },
      patternType: {
        type: Sequelize.TEXT,
      },
      fabricType: {
        type: Sequelize.TEXT,
      },
      colorPalate: {
        type: Sequelize.TEXT,
      },
      preferredBrand: {
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
    await queryInterface.dropTable("userPreferences");
  },
};
