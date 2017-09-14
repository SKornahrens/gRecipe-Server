var reviewuserdata = require('../seed_data/08_review_user_data')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('review_user').del()
    .then(function () {
      // Inserts seed entries
      return knex('review_user').insert(reviewuserdata);
    });
};
