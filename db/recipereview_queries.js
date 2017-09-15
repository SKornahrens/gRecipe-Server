const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('recipe_review');
  },
  getOne(id) {
    return knex('recipe_review').where('review_id', id).first();
  },
  create(recipe_review) {
    return knex('recipe_review').insert(recipe_review, '*');
  },
  update(id, recipe_reviewDetails) {
    return knex('recipe_review').where('recipereview_id', id).update(recipe_reviewDetails, '*');
  },
  delete(id) {
    return knex('recipe_review').where('recipereview_id', id).del();
  }
}
