const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('recipe');
  },
  getOne(id) {
    return knex('recipe').where('recipe_id', id).first();
  },
  create(recipe) {
    return knex('recipe').insert(recipe, '*');
  },
  update(id, recipeDetails) {
    return knex('recipe').where('recipe_id', id).update(recipeDetails, '*');
  },
  delete(id) {
    return knex('recipe').where('recipe_id', id).del();
  }
}
