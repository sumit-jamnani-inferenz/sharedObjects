"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("returnReplacementOrders", {
      requestId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      invoiceId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "consumerOrders",
          key: "invoiceId",
        },
      },
      orderItemId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "orderItems",
          key: "orderItemId",
        },
      },
      accountId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "userAccounts",
          key: "accountId",
        },
      },
      productId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "productDetails",
          key: "productId",
        },
      },
      variantId: {
        type: Sequelize.UUID,
        references: {
          model: "productVariants",
          key: "variantId",
        },
      },
      newProductId: {
        type: Sequelize.UUID,
        references: {
          model: "productDetails",
          key: "productId",
        },
      },
      newVariantId: {
        type: Sequelize.UUID,
        references: {
          model: "productVariants",
          key: "variantId",
        },
      },
      requestType: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      reason: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      status: {
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
    await queryInterface.dropTable("returnReplacementOrders");
  },
};
