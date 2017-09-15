const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('review_user');
  },
  getOne(id) {
    return knex('review_user').where('recipereview_id', id);
  },
  create(review_user) {
    return knex('review_user').insert(review_user, '*');
  },
  update(id, review_userDetails) {
    return knex('review_user').where('recipereview_id', id).update(review_userDetails, '*');
  },
  delete(id) {
    return knex('review_user').where('recipereview_id', id).del();
  }
}
