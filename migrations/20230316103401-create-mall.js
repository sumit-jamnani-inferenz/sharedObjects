"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("mall", {
      mallId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      cityId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "city",
          key: "cityId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      mallName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      gridBlocks: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dimensions: {
        type: Sequelize.JSON,
      },
      coOrdinates: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
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
    await queryInterface.dropTable("mall");
  },
};
