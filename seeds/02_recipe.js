var recipedata = require('../seed_data/02_recipe_data')


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert(recipedata);
    });
};
