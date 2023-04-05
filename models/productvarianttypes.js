"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productVariantTypes extends Model {
    static associate(models) {}
  }
  productVariantTypes.init(
    {
      variantTypeId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      variantName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "productVariantTypes",
    }
  );
  return productVariantTypes;
};
