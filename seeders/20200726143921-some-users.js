'use strict';
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Sifan Hassan',
          email: 'sifan@hassan.com',
          password: bcrypt.hashSync('123', SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jack Sparrow',
          email: 'jack@sparrow.com',
          password: bcrypt.hashSync('123', SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'John Doe',
          email: 'john@doe.com',
          password: bcrypt.hashSync('123', SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Naomi Klein',
          email: 'naomi@klein.com',
          password: bcrypt.hashSync('123', SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
