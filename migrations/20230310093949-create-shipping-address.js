"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("shippingAddress", {
      shippingAddressId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
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
      recipientName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      addressLine1: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      addressLine2: {
        type: Sequelize.TEXT,
      },
      city: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      state: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      postalCode: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      country: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      contactNumber: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      addressType: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      misc: { type: Sequelize.JSON },
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
    await queryInterface.dropTable("shippingAddress");
  },
};
