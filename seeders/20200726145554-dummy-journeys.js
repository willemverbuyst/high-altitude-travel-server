'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'journeys',
      [
        {
          name: 'salkantay-trek',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: 'la ciudad perdida',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: 'markha valley',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('subjects', null, {});
  },
};
