'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Group_Roles',
      [
        //Leader
        {
          groupId: '1',
          roleId: '1'
        },
        {
          groupId: '1',
          roleId: '2'
        },
        {
          groupId: '1',
          roleId: '3'
        },
        {
          groupId: '1',
          roleId: '4'
        },
        {
          groupId: '1',
          roleId: '5'
        },
        {
          groupId: '1',
          roleId: '6'
        },
        {
          groupId: '1',
          roleId: '7'
        },
        {
          groupId: '1',
          roleId: '8'
        },
        {
          groupId: '1',
          roleId: '9'
        },
        {
          groupId: '1',
          roleId: '10'
        },
        //Developer
        {
          groupId: '2',
          roleId: '1'
        },
        {
          groupId: '2',
          roleId: '2'
        },
        {
          groupId: '2',
          roleId: '3'
        },
        {
          groupId: '2',
          roleId: '5'
        },
        {
          groupId: '2',
          roleId: '6'
        },
        {
          groupId: '2',
          roleId: '8'
        },
        {
          groupId: '2',
          roleId: '9'
        },
        {
          groupId: '2',
          roleId: '10'
        },
        //Guest
        {
          groupId: '3',
          roleId: '2'
        },
        {
          groupId: '3',
          roleId: '6'
        },
        {
          groupId: '3',
          roleId: '8'
        },
        {
          groupId: '3',
          roleId: '10'
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
