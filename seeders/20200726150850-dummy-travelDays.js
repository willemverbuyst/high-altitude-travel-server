'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'travelDays',
      [
        {
          date: '22/12/2020',
          from: 'Cuzco',
          to: 'Soraypampa',
          createdAt: new Date(),
          updatedAt: new Date(),
          journeyId: 1,
        },
        {
          date: '23/12/2020',
          from: 'Soraypampa',
          to: 'Choullay',
          createdAt: new Date(),
          updatedAt: new Date(),
          journeyId: 1,
        },
        {
          date: '24/12/2020',
          from: 'Choullay',
          to: 'Lucmabamba',
          createdAt: new Date(),
          updatedAt: new Date(),
          journeyId: 1,
        },
        {
          date: '25/12/2020',
          from: 'Lucmabamba',
          to: 'Aguas Calientes',
          createdAt: new Date(),
          updatedAt: new Date(),
          journeyId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('travelDays', null, {});
  },
};
