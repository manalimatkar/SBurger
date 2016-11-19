'use strict';

// Require our models
var models = require("../models");

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return models.Burger.bulkCreate(
      [
        {burgerName: "Whopper Burger", user_id: 2},
        {burgerName: "Double Whopper Burger", user_id: 2},
        {burgerName: "Extralong Cheese Burger", user_id: 2},
        {burgerName: "Philly Steak Burger", user_id: 2},
        {burgerName: "Southen Chiken Burger", user_id: 2}
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

     return models.Burger.destroy({where:{burgerName: [
        "Whopper Burger",
        "Double Whopper Burger",
        "Extralong Cheese Burger",
        "Philly Steak Burger",
        "Southen Chiken Burger"
    ]}})

  }
};
