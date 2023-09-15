"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("archivedCartItems", {
      archiveId: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      accountId: {
        type: Sequelize.UUID,
        references: {
          model: "userAccounts",
          key: "accountId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
      },
      productId: {
        type: Sequelize.UUID,
        references: {
          model: "productDetails",
          key: "productId",
        },
        allowNull: false,
      },
      variantId: {
        type: Sequelize.UUID,
        references: {
          model: "productVariants",
          key: "variantId",
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      archiveReason: {
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
    await queryInterface.dropTable("archivedCartItems");
  },
};
