"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class questionMaster extends Model {
    static associate(models) {
      questionMaster.hasMany(models.userAnswers, {
        foreignKey: "questionId",
        as: "answers",
        targetKey: "questionId",
        onDelete: "CASCADE",
      });
    }
  }
  questionMaster.init(
    {
      questionId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      questionText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "questionMaster",
      tableName: "questionMaster",
    }
  );
  return questionMaster;
};
