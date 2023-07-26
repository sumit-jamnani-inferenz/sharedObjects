"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orderItems", {
      orderItemId: {
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
      brandId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "brand",
          key: "brandId",
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
      discountId: {
        type: Sequelize.UUID,
        references: {
          model: "productDiscount",
          key: "discountId",
        },
      },
      productPrice: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      productQty: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      productDiscount: {
        type: Sequelize.FLOAT,
      },
      productTax: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      totalAmount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      shipDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      shipMode: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      daysToShip: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      trackingNumber: {
        type: Sequelize.TEXT,
      },
      orderStatus: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      returnReplacementEndDate: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("orderItems");
  },
};
