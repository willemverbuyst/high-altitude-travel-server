'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('travelDays', 'journeyId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'journeys',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('travelDays', 'journeyId', {});
  },
};
