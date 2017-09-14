var recipereviewdata = require('../seed_data/07_recipe_review_data')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_review').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_review').insert(recipereviewdata);
    });
};
