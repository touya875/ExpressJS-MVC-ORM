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
    await queryInterface.bulkInsert('Roles',
      [
        //user routes
        {
          url: '/user/create',
          description: 'create a user'
        },
        {
          url: '/user/read',
          description: 'show all users'
        },
        {
          url: '/user/update',
          description: 'update a user'
        },
        {
          url: '/user/delete',
          description: 'delete a user'
        },
        //role routes
        {
          url: '/role/create',
          description: 'create a role'
        },
        {
          url: '/role/read',
          description: 'show all roles'
        },
        {
          url: '/role/delete',
          description: 'delete a role'
        },
        {
          url: '/role/by-group',
          description: 'role by group'
        },
        {
          url: '/role/assign-to-group',
          description: 'assign to group'
        },
        //group routes
        {
          url: '/group/read',
          description: 'read group'
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
