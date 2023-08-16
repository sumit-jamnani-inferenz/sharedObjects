"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("storeDisplay", {
      displayId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      brandId: {
        type: Sequelize.UUID,
        references: {
          model: "brand",
          key: "brandId",
        },
      },
      displayCode: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      displayImage: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("storeDisplay");
  },
};
