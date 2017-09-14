const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('siteuser');
  },
  getOne(id) {
    return knex('siteuser').where('user_id', id).first();
  },
  create(user) {
    return knex('siteuser').insert(user, '*');
  },
  update(id, userDetails) {
    return knex('siteuser').where('user_id', id).update(userDetails, '*');
  },
  delete(id) {
    return knex('siteuser').where('user_id', id).del();
  }
}
