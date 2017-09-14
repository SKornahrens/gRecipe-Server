var ingredientrecipedata = require('../seed_data/06_ingredient_recipe_data')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient_recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_recipe').insert(ingredientrecipedata);
    });
};
