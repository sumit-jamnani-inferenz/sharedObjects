"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class styloEstates extends Model {
    static associate(models) {
      styloEstates.belongsTo(models.city, {
        foreignKey: "cityId",
        as: "city",
        targetKey: "cityId",
        onDelete: "CASCADE",
      });
      styloEstates.belongsTo(models.mall, {
        foreignKey: "mallId",
        as: "mall",
        targetKey: "mallId",
        onDelete: "CASCADE",
      });
      styloEstates.hasMany(models.leasedEstates, {
        foreignKey: "estateId",
        as: "styloEstates",
        sourceKey: "estateId",
        onDelete: "CASCADE",
      });
    }
  }
  styloEstates.init(
    {
      estateId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      cityId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      mallId: {
        type: DataTypes.UUID,
      },
      estateCode: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sector: {
        type: DataTypes.INTEGER,
      },
      estateType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      gridBlocks: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dimensions: {
        type: DataTypes.JSON,
      },
      coOrdinates: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
      },
      modelLink: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imagePath: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "styloEstates",
      tableName: "styloEstates",
    }
  );
  return styloEstates;
};
