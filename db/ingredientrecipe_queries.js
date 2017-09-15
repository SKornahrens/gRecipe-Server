const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('ingredient_recipe');
  },
  getOne(id) {
    return knex('ingredient_recipe').where('recipe_id', id);
  },
  create(ingredientrecipe) {
    return knex('ingredient_recipe').insert(ingredientrecipe, '*');
  },
  update(id, ingredientrecipeDetails) {
    return knex('ingredient_recipe').where('ingredientrecipe_id', id).update(ingredientrecipeDetails, '*');
  },
  delete(id) {
    return knex('ingredient_recipe').where('ingredientrecipe_id', id).del();
  }
}
