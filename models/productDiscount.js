'use strict';
const DataTypes = require('sequelize');
const sequelize = require("../config/db/dbConfig");

const productDiscount = sequelize.define('productDiscount', {
    discountId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    brandId: {
        type: DataTypes.UUID,
    },
    discountName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discountDescription: {
        type: DataTypes.STRING,
    },
    discountPercentage: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    discountType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discountStartDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    discountEndDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    misc: DataTypes.JSON,
}, {
    tableName: 'productDiscount'
});

productDiscount.associate = function (models) {
    productDiscount.belongsTo(models.Brand, {
        foreignKey: 'brandId',
        as: 'brand',
        onDelete: 'CASCADE',
    })
};

(async () => {
    await productDiscount.sync({ alter: true });
    console.log("productDiscount Table Created Successfully.")
})();

module.exports = productDiscount;