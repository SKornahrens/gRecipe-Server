const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('review');
  },
  getOne(id) {
    return knex('review').where('review_id', id).first();
  },
  create(review) {
    return knex('review').insert(review, '*');
  },
  update(id, reviewDetails) {
    return knex('review').where('review_id', id).update(reviewDetails, '*');
  },
  delete(id) {
    return knex('review').where('review_id', id).del();
  }
}
