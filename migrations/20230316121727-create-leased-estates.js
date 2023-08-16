"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("leasedEstates", {
      leaseId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      estateId: {
        type: Sequelize.UUID,
        references: {
          model: "styloEstates",
          key: "estateId",
        },
      },
      brandId: {
        type: Sequelize.UUID,
        references: {
          model: "brand",
          key: "brandId",
        },
      },
      contractId: {
        type: Sequelize.UUID,
        references: {
          model: "styloContracts",
          key: "contractId",
        },
      },
      leasingType: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      timestamp: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      blockNumber: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      orgWallet: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("leasedEstates");
  },
};
