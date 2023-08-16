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
      },
      dob: {
        type: Sequelize.DATEONLY,
      },
      bodyType: {
        type: Sequelize.TEXT,
      },
      bustSize: {
        type: Sequelize.TEXT,
      },
      preferredStyle: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      preferredFit: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      minPrice: {
        type: Sequelize.FLOAT,
      },
      maxPrice: {
        type: Sequelize.FLOAT,
      },
      neckType: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      sleeveType: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      patternType: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      fabricType: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      colorPalate: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      preferredBrand: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
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
