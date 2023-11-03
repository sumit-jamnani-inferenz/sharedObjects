"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class labels extends Model {
    static associate(models) {
      // define association here
    }
  }
  labels.init(
    {
      mappingId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      labelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      model: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      defaultLabels: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "labels",
    }
  );
  return labels;
};
