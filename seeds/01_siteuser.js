var userdata = require('../seed_data/01_siteuser_data')


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('siteuser').del()
    .then(function () {
      return knex('siteuser').insert(userdata);
    });
};
