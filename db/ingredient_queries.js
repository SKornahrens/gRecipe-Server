const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('ingredient');
  },
  getOne(id) {
    return knex('ingredient').where('ingredient_id', id).first();
  },
  create(ingredient) {
    return knex('ingredient').insert(ingredient, '*');
  },
  update(id, ingredientDetails) {
    return knex('ingredient').where('ingredient_id', id).update(ingredientDetails, '*');
  },
  delete(id) {
    return knex('ingredient').where('ingredient_id', id).del();
  }
}
