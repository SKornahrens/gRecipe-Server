var reviewdata = require('../seed_data/03_review_data')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('review').del()
    .then(function () {
      // Inserts seed entries
      return knex('review').insert(reviewdata);
    });
};
