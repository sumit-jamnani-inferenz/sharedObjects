'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orgPayments extends Model {
    static associate(models) {
      orgPayments.belongsTo(models.leasedEstates, {
        foreignKey: 'leaseId',
        as: 'leasingDetails',
        targetKey: 'leaseId',
        onDelete: 'CASCADE',
      })
      orgPayments.belongsTo(models.Brand, {
        foreignKey: 'brandId',
        as: 'brand',
        targetKey: 'brandId',
        onDelete: 'CASCADE',
      })
    }
  }
  orgPayments.init({
    paymentId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    leaseId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    brandId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    paymentAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    invoiceINTEGER: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    blockchianTID: {
      type: DataTypes.TEXT,
    },
    BAWalletAddress: {
      type: DataTypes.TEXT,
    },
    blockINTEGER: {
      type: DataTypes.TEXT,
    },
    BLEpochTimestamp: {
      type: DataTypes.TEXT,
    },
    misc: {
      type: DataTypes.JSON,
    }
  }, {
    sequelize,
    modelName: 'orgPayments',
  });
  return orgPayments;
};