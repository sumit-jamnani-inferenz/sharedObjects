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
        type: Sequelize.UUID,
        references: {
          model: "consumerOrders",
          key: "invoiceId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      brandId: {
        type: Sequelize.UUID,
        references: {
          model: "brand",
          key: "brandId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      productId: {
        type: Sequelize.UUID,
        references: {
          model: "productDetails",
          key: "productId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      variantId: {
        type: Sequelize.UUID,
        references: {
          model: "productVariants",
          key: "variantId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      discountId: {
        type: Sequelize.UUID,
        references: {
          model: "productDiscount",
          key: "discountId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
      isReturned: {
        type: Sequelize.BOOLEAN,
      },
      returnReason: {
        type: Sequelize.TEXT,
      },
      orderStatus: {
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
    await queryInterface.dropTable("orderItems");
  },
};
