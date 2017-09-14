var recipestepdata = require('../seed_data/05_recipe_steps_data')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_step').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_step').insert(recipestepdata);
    });
};
