"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userAnswers extends Model {
    static associate(models) {
      userAnswers.belongsTo(models.userAccounts, {
        foreignKey: "accountId",
        as: "user",
        targetKey: "accountId",
        onDelete: "CASCADE",
      });

      userAnswers.belongsTo(models.questionMaster, {
        foreignKey: "questionId",
        as: "question",
        targetKey: "questionId",
        onDelete: "CASCADE",
      });
    }
  }
  userAnswers.init(
    {
      answerId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      accountId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      questionId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      payload: {
        type: DataTypes.JSON,
      },
      misc: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "userAnswers",
      tableName: "userAnswers",
    }
  );
  return userAnswers;
};
