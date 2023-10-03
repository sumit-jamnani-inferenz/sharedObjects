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
        allowNull: false,
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
      recodType: {
        type: Sequelize.TEXT,
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

    // Add foreign keys for both userAccounts and adminAccounts
    await queryInterface.addConstraint("shippingAddress", {
      type: "foreign key",
      fields: ["accountId"],
      name: "shippingAddress_userAccountId_fkey",
      references: {
        table: "userAccounts",
        field: "accountId",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryInterface.addConstraint("shippingAddress", {
      type: "foreign key",
      fields: ["accountId"],
      name: "shippingAddress_adminAccountId_fkey",
      references: {
        table: "adminAccounts",
        field: "adminAccountId",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("shippingAddress");
  },
};
