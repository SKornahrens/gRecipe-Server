const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('recipe_step');
  },
  getOne(id) {
    return knex('recipe_step').where('recipestep_id', id).first();
  },
  create(recipe_step) {
    return knex('recipe_step').insert(recipe_step, '*');
  },
  update(id, recipe_stepDetails) {
    return knex('recipe_step').where('recipestep_id', id).update(recipe_stepDetails, '*');
  },
  delete(id) {
    return knex('recipe_step').where('recipestep_id', id).del();
  }
}
