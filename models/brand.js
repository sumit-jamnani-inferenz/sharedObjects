'use strict';
const DataTypes = require('sequelize');
const sequelize = require("../config/db/dbConfig");

const Brand = sequelize.define('Brand', {
    brandId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    brandName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brandEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brandWebsite: DataTypes.STRING,
    brandContact: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    brandAddress: DataTypes.STRING,
    brandWallet: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    timestamp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    misc: DataTypes.JSON,
}, {
    tableName: 'Brand'
});

Brand.associate = function (models) {
    Brand.hasMany(models.productDiscount, {
        foreignKey: 'brandId',
        as: 'discounts',
        onDelete: 'CASCADE',
    });
};

(async () => {
    await Brand.sync({ alter: true });
    console.log("Brand Table Created Successfully.")
})();

module.exports = Brand;