'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userAnswers', {
      answerId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      accountId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'userAccounts',
          key: 'accountId',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      questionId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'questionMaster',
          key: 'questionId',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      answer: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      payload: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      misc: {
        type: Sequelize.JSON,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userAnswers');
  }
};