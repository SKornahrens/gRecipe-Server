var ingredientdata = require('../seed_data/04_ingredient_data')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert(ingredientdata);
    });
};
